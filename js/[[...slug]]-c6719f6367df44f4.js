(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [120], {
        5759: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[[...slug]]", function() {
                return t(5558)
            }])
        },
        5558: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                __N_SSG: function() {
                    return gh
                },
                default: function() {
                    return fh
                }
            });
            var i, a = t(7568),
                r = t(6042),
                o = t(7582),
                l = t(5893),
                c = t(7294),
                s = t(9396),
                d = t(7297),
                u = t(9521),
                m = t(7740),
                p = t(3932),
                h = t(6949),
                g = (0, h.sj)({
                    wrapper1Hovered: !1,
                    wrapper2Hovered: !1,
                    hovered: !1
                });

            function f() {
                g.hovered = g.wrapper1Hovered || g.wrapper2Hovered
            }

            function v(n) {
                clearTimeout(i), n ? g.hovered = !0 : i = setTimeout(f, 200)
            }

            function x() {
                return {
                    handleWrapper1Enter: (0, c.useCallback)((function() {
                        g.wrapper1Hovered = !0
                    }), []),
                    handleWrapper1Leave: (0, c.useCallback)((function() {
                        g.wrapper1Hovered = !1
                    }), []),
                    handleWrapper2Enter: (0, c.useCallback)((function() {
                        g.wrapper2Hovered = !0
                    }), []),
                    handleWrapper2Leave: (0, c.useCallback)((function() {
                        g.wrapper2Hovered = !1
                    }), []),
                    snapshot: (0, m.R)(g),
                    state: g
                }
            }(0, p.VW)(g, "wrapper1Hovered", v), (0, p.VW)(g, "wrapper2Hovered", v);
            var w, b = t(9534);
            ! function(n) {
                n.dark = "dark", n.light = "light"
            }(w || (w = {}));
            var y = (0, c.createContext)(null),
                j = function(n) {
                    var e = n.children,
                        t = (0, b.Z)(n, ["children"]);
                    return (0, l.jsx)(y.Provider, {
                        value: t,
                        children: (0, l.jsx)(C, {
                            children: e
                        })
                    })
                },
                k = function() {
                    var n = (0, c.useContext)(y);
                    if (!n) throw new Error("Please use StrapiGlobalsProvider in parent component");
                    return n
                };
            var Z, _ = t(5792),
                N = (0, c.createContext)(null);

            function C(n) {
                var e = n.children,
                    t = k().sectionThemes,
                    i = x().state,
                    a = function(n) {
                        var e = (0, c.useRef)();
                        return e.current || (e.current = {
                            v: n()
                        }), e.current.v
                    }((function() {
                        var n = (0, _.Z)().next.state;
                        n.headerState = {
                            isScrolled: !1,
                            isMobileMenuOpen: !1,
                            hoveredMegaMenuId: null,
                            clickedMegaMenuId: null,
                            themeUnderHeader: t[0] || w.light
                        };
                        var e = n.headerState;
                        return (0, p.sY)({
                            activeMegaMenuId: function(n) {
                                return n(e).clickedMegaMenuId || n(e).hoveredMegaMenuId
                            },
                            megaMenuHasTrappedFocus: function(n) {
                                return !!n(e).clickedMegaMenuId
                            },
                            theme: function(n) {
                                return n(e).activeMegaMenuId ? w.light : n(e).themeUnderHeader
                            }
                        }, {
                            proxy: n.headerState
                        }), (0, p.VW)(i, "hovered", (function(n) {
                            n || (e.hoveredMegaMenuId = null)
                        })), n.headerState
                    }));
                return (0, l.jsx)(N.Provider, {
                    value: a,
                    children: e
                })
            }

            function I() {
                var n = (0, c.useContext)(N);
                if (!n) throw new Error("Missing HeaderStateProvider");
                return n
            }

            function P() {
                var n = I();
                return (0, m.R)(n)
            }

            function S() {
                return S = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, S.apply(this, arguments)
            }
            var z, L = function(n, e) {
                    return c.createElement("svg", S({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 12 2",
                        ref: e
                    }, n), Z || (Z = c.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeWidth: 2,
                        d: "M1 1h10"
                    })))
                },
                M = (0, c.forwardRef)(L);

            function R() {
                return R = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, R.apply(this, arguments)
            }
            var E = function(n, e) {
                    return c.createElement("svg", R({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 12 12",
                        ref: e
                    }, n), z || (z = c.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeWidth: 2,
                        d: "M1 6h10m-5 5V1"
                    })))
                },
                T = (0, c.forwardRef)(E),
                O = t(2977),
                B = function() {
                    var n = (0, c.useState)(!1),
                        e = n[0],
                        t = n[1],
                        i = (0, O.Z)().width,
                        a = function() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.innerWidth;
                            return n <= 768
                        };
                    return (0, c.useEffect)((function() {
                        t(a(i))
                    }), [i]), {
                        isMobile: e,
                        getIsMobile: a
                    }
                };

            function A(n) {
                var e, t;
                if (n) {
                    var i = n.alternativeText || n.caption;
                    if (i) return i;
                    var a = n.image || n.media;
                    return (null === a || void 0 === a || null === (e = a.data) || void 0 === e ? void 0 : e.attributes.alternativeText) || (null === a || void 0 === a || null === (t = a.data) || void 0 === t ? void 0 : t.attributes.caption)
                }
            }
            var H = /^(?:[a-z+]+:)?\/\//i;

            function F(n) {
                if (!(null === n || void 0 === n ? void 0 : n.url)) return null === n || void 0 === n ? void 0 : n.url;
                if (H.test(n.url)) return n.url;
                var e = n.url;
                return e.startsWith("/") || (e = "/".concat(e)), "".concat("https://strapi-prod.patreontools.com").concat(e)
            }

            function U(n) {
                var e, t, i = n.badge,
                    a = n.text,
                    r = void 0 === a ? "" : a,
                    o = null === (e = i.image) || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.attributes;
                return o ? (0, l.jsx)("img", {
                    src: F(o),
                    width: o.width || 256,
                    height: o.height || 76,
                    alt: A(i) || r
                }) : null
            }

            function D(n) {
                var e = n.theme,
                    t = void 0 === e ? "dark" : e,
                    i = n.className,
                    a = k().siteSettings.appStoreLinks,
                    r = a.appleAppStoreLink,
                    o = "dark" === t ? a.appleAppStoreBadge : a.appleAppStoreBadgeLight,
                    c = a.googleAppStoreLink,
                    s = "dark" === t ? a.googleAppStoreBadge : a.googleAppStoreBadgeLight;
                return (0, l.jsxs)(l.Fragment, {
                    children: [c && (0, l.jsx)("a", {
                        href: null === c || void 0 === c ? void 0 : c.externalUrl,
                        className: i,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: c.text,
                        children: (0, l.jsx)(U, {
                            badge: s,
                            text: c.text
                        })
                    }), r && (0, l.jsx)("a", {
                        href: null === r || void 0 === r ? void 0 : r.externalUrl,
                        className: i,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: r.text,
                        children: (0, l.jsx)(U, {
                            badge: o,
                            text: r.text
                        })
                    })]
                })
            }
            var W, G, q = t(1955);

            function K() {
                return K = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, K.apply(this, arguments)
            }
            var Y = function(n, e) {
                    return c.createElement("svg", K({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 20 20",
                        ref: e
                    }, n), W || (W = c.createElement("g", {
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        clipPath: "url(#currency-us_svg__a)"
                    }, c.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M13 6.77c-.685-.633-1.891-1.073-3-1.1m0 0c-1.32-.033-2.5.518-2.5 2.022 0 2.77 5.5 1.385 5.5 4.154 0 1.58-1.464 2.258-3 2.207m0-8.383V4m-3 8.77c.644.792 1.843 1.245 3 1.283m0 0V16"
                    }), c.createElement("rect", {
                        width: 18.5,
                        height: 18.5,
                        x: .75,
                        y: .75,
                        rx: 9.25
                    }))), G || (G = c.createElement("defs", null, c.createElement("clipPath", {
                        id: "currency-us_svg__a"
                    }, c.createElement("path", {
                        fill: "currentColor",
                        d: "M0 0h20v20H0z"
                    })))))
                },
                V = (0, c.forwardRef)(Y),
                J = "patreon_locale_code",
                $ = "patreon_location_country_code",
                X = "patreon_currency_pref",
                Q = [{
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "AUD",
                    defaultLocaleCode: "en-AU",
                    description: "Australian Dollars",
                    isLaunched: !0,
                    maxPledgeSubunits: 15e5,
                    numSubunits: 100,
                    symbol: "AU$"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !1,
                    code: "BRL",
                    defaultLocaleCode: "pt-br",
                    description: "Brazilian Real",
                    isLaunched: !0,
                    maxPledgeSubunits: 65e5,
                    numSubunits: 100,
                    symbol: "BRL"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "CAD",
                    defaultLocaleCode: "en-CA",
                    description: "Canadian Dollars",
                    isLaunched: !0,
                    maxPledgeSubunits: 15e5,
                    numSubunits: 100,
                    symbol: "CA$"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "CZK",
                    defaultLocaleCode: "cs-cz",
                    description: "Czech Koruna",
                    isLaunched: !0,
                    maxPledgeSubunits: 355e5,
                    numSubunits: 100,
                    symbol: "CZK"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "DKK",
                    defaultLocaleCode: "da-DK",
                    description: "Danish Kroner",
                    isLaunched: !0,
                    maxPledgeSubunits: 95e5,
                    numSubunits: 100,
                    symbol: "DKK"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "EUR",
                    defaultLocaleCode: "en-IE",
                    description: "Euros",
                    isLaunched: !0,
                    maxPledgeSubunits: 13e5,
                    numSubunits: 100,
                    symbol: "\u20ac"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "GBP",
                    defaultLocaleCode: "en-GB",
                    description: "British Pounds Sterling",
                    isLaunched: !0,
                    maxPledgeSubunits: 12e5,
                    numSubunits: 100,
                    symbol: "\xa3"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "HKD",
                    defaultLocaleCode: "zh-hk",
                    description: "Hong Kong Dollar",
                    isLaunched: !0,
                    maxPledgeSubunits: 115e5,
                    numSubunits: 100,
                    symbol: "HKD"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "HUF",
                    defaultLocaleCode: "hu-hu",
                    description: "Hungarian Forint",
                    isLaunched: !0,
                    maxPledgeSubunits: 516e6,
                    numSubunits: 100,
                    symbol: "HUF"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !1,
                    code: "MXN",
                    defaultLocaleCode: "es-mx",
                    description: "Mexican Peso",
                    isLaunched: !0,
                    maxPledgeSubunits: 355e5,
                    numSubunits: 100,
                    symbol: "MXN"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "NOK",
                    defaultLocaleCode: "nb-NO",
                    description: "Norwegian Kroner",
                    isLaunched: !0,
                    maxPledgeSubunits: 125e5,
                    numSubunits: 100,
                    symbol: "NOK"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "NZD",
                    defaultLocaleCode: "en-nz",
                    description: "New Zealand Dollar",
                    isLaunched: !0,
                    maxPledgeSubunits: 22e5,
                    numSubunits: 100,
                    symbol: "NZD"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "PLN",
                    defaultLocaleCode: "pl-pl",
                    description: "Polish Zloty",
                    isLaunched: !0,
                    maxPledgeSubunits: 65e5,
                    numSubunits: 100,
                    symbol: "PLN"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "SEK",
                    defaultLocaleCode: "sv-SE",
                    description: "Swedish Kronor",
                    isLaunched: !0,
                    maxPledgeSubunits: 13e6,
                    numSubunits: 100,
                    symbol: "SEK"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "SGD",
                    defaultLocaleCode: "zh-sg",
                    description: "Singapore Dollar",
                    isLaunched: !0,
                    maxPledgeSubunits: 2e6,
                    numSubunits: 100,
                    symbol: "SGD"
                }, {
                    availableForPayIn: !0,
                    availableForPayOut: !0,
                    code: "USD",
                    defaultLocaleCode: "en-US",
                    description: "US Dollars",
                    isLaunched: !0,
                    maxPledgeSubunits: 15e5,
                    numSubunits: 100,
                    symbol: "$"
                }],
                nn = t(6164),
                en = t(9574);

            function tn() {
                var n, e, t, i = null === (n = (0, en.Z)().location) || void 0 === n ? void 0 : n.hostname.split(".");
                return i && i.length >= 2 ? i.slice(-2).join(".") : (nn.uT("Unexpected domain structure:" + (null === (e = (0, en.Z)().location) || void 0 === e ? void 0 : e.hostname) || 0), null === (t = (0, en.Z)().location) || void 0 === t ? void 0 : t.hostname)
            }
            var an = t(6010);

            function rn() {
                var n = (0, d.Z)(["\n  appearance: none;\n  background-color: var(--color-action);\n  border: 0;\n  border-radius: 5rem;\n  color: var(--color-action-contrast);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-family);\n  font-size: var(--button-font-size);\n  -webkit-font-smoothing: antialiased;\n  font-weight: var(--button-font-weight);\n  padding: 1.4rem 2.8rem;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color var(--animation-duration) var(--animation-timing);\n  -webkit-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n  line-height: 110%;\n  letter-spacing: -0.036rem;\n\n  .icon-wrapper {\n    width: 30px;\n    height: 30px;\n    margin-right: 0.33em;\n\n    img,\n    svg {\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n      display: block;\n      object-position: center center;\n    }\n  }\n\n  .icon-right {\n    margin-right: 0;\n    margin-left: 0.33em;\n  }\n\n  .icon {\n    > * {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  &.icon-only {\n    padding: 1.9rem;\n    border-radius: 50%;\n\n    .icon-wrapper {\n      display: flex;\n      align-items: center;\n      margin-right: 0;\n    }\n  }\n\n  &:hover {\n    background-color: var(--color-action-light);\n  }\n\n  &:focus-visible {\n    outline: var(--focus-outline);\n    outline-offset: var(--focus-outline-offset);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  &.sm,\n  &.small {\n    font-size: 1.6rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 120%;\n    letter-spacing: -0.048rem;\n    padding: 1rem 1.4rem;\n  }\n\n  &.large,\n  &.lg {\n    padding: var(--spacing-base);\n  }\n\n  &.full-width {\n    width: 100%;\n  }\n\n  &.inverse {\n    background-color: var(--color-action-contrast);\n    color: var(--color-action);\n    border: var(--border);\n    border-color: var(--color-action);\n\n    &:hover {\n      color: var(--color-action-light);\n      border-color: var(--color-action-light);\n    }\n  }\n\n  .label {\n    margin-left: 0.3rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  &.secondary {\n    background-color: var(--color-action-inverse);\n    color: var(--color-action);\n\n    &:hover {\n      color: var(--color-action-muted);\n    }\n  }\n\n  &.tertiary {\n    background-color: rgba(255, 255, 255, 0.16);\n    color: var(--color-white);\n  }\n\n  &.bordered {\n    border: 1px solid currentColor;\n  }\n"]);
                return rn = function() {
                    return n
                }, n
            }
            var on, ln = u.ZP.div.withConfig({
                componentId: "sc-dbfdaf4-0"
            })(rn());

            function cn(n) {
                var e = n.tag,
                    t = void 0 === e ? "button" : e,
                    i = n.children,
                    a = n.onClick,
                    o = n.variant,
                    c = void 0 === o ? "primary" : o,
                    d = n.size,
                    u = void 0 === d ? "md" : d,
                    m = n.fullWidth,
                    p = n.icon,
                    h = n.iconPath,
                    g = n.label,
                    f = n.hideLabel,
                    v = n.childrenLabelOrder,
                    x = void 0 === v ? "childrenFirst" : v,
                    w = n.iconPlacement,
                    y = void 0 === w ? "first" : w,
                    j = (0, b.Z)(n, ["tag", "children", "onClick", "variant", "size", "fullWidth", "icon", "iconPath", "label", "hideLabel", "childrenLabelOrder", "iconPlacement"]);
                return (0, l.jsxs)(ln, (0, s.Z)((0, r.Z)({}, j), {
                    as: t,
                    className: (0, an.Z)(j.className, {
                        "icon-only": f
                    }, {
                        "full-width": m
                    }, "".concat(c, " ").concat(u)),
                    onClick: a,
                    children: ["first" === y && (h || p) && (0, l.jsx)("div", {
                        className: "icon-wrapper",
                        children: p || (0, l.jsx)("img", {
                            className: "icon",
                            src: h,
                            alt: ""
                        })
                    }), "childrenFirst" === x && i, g && (0, l.jsx)("span", {
                        className: f ? "sr-only" : "label",
                        children: g
                    }), "childrenLast" === x && i, "last" === y && (h || p) && (0, l.jsx)("div", {
                        className: (0, an.Z)("icon-wrapper", "icon-right"),
                        children: p || (0, l.jsx)("img", {
                            className: "icon",
                            src: h,
                            alt: ""
                        })
                    })]
                }))
            }

            function sn() {
                return sn = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, sn.apply(this, arguments)
            }
            var dn = function(n, e) {
                    return c.createElement("svg", sn({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 25 24",
                        ref: e
                    }, n), on || (on = c.createElement("path", {
                        stroke: "#000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "m6.5 9 6 6 6-6"
                    })))
                },
                un = (0, c.forwardRef)(dn);

            function mn() {
                var n = (0, d.Z)(["\n      &::before {\n        content: '';\n        background-image: url(", ");\n        background-repeat: no-repeat;\n      }\n    "]);
                return mn = function() {
                    return n
                }, n
            }

            function pn() {
                var n = (0, d.Z)(["\n  background-color: var(--color-action);\n  color: var(--color-action-contrast);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  position: relative;\n  font-size: var(--button-font-size);\n  font-weight: var(--button-font-weight);\n  height: 50px;\n  padding: var(--spacing-sm) var(--spacing-xs);\n  cursor: pointer;\n  transition: background-color var(--animation-duration) var(--animation-timing);\n\n  > svg,\n  &::before {\n    display: block;\n    width: 2.4rem;\n    height: 2.4rem;\n    z-index: 1;\n    flex-shrink: 0;\n  }\n\n  .down-arrow {\n    display: block;\n    width: 3rem;\n    height: 3rem;\n  }\n\n  ", "\n\n  &:has(:focus-visible) {\n    outline: var(--focus-outline);\n    outline-color: var(--focus-outline-color);\n    outline-offset: var(--focus-outline-offset);\n  }\n\n  .select-element {\n    appearance: none;\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    font-family: inherit;\n    font-size: inherit;\n    cursor: inherit;\n    line-height: inherit;\n    z-index: 1;\n    outline: none;\n    position: absolute;\n    inset: 0;\n    text-indent: ", ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding-right: 4rem;\n\n    &::-ms-expand {\n      display: none;\n    }\n  }\n\n  @-moz-document url-prefix() {\n    .select-element {\n      text-indent: ", ";\n      padding-right: ", ";\n    }\n  }\n\n  &.sm,\n  &.small {\n    font-size: var(--font-size-body-sm);\n  }\n\n  &.large,\n  &.lg {\n    padding: var(--spacing-base) var(--spacing-sm);\n  }\n\n  &.full-width {\n    width: 100%;\n  }\n\n  &.secondary {\n    background-color: var(--color-neutral-80);\n    color: var(--color-text-primary);\n\n    &:hover {\n      background-color: var(--color-neutral-60);\n    }\n  }\n"]);
                return pn = function() {
                    return n
                }, n
            }
            var hn = u.ZP.div.attrs((function(n) {
                    return {
                        $hasIcon: !(!n.icon && !n.iconPath)
                    }
                })).withConfig({
                    componentId: "sc-a85cff16-0"
                })(pn(), (function(n) {
                    return n.$hasIcon ? "space-between" : "flex-end"
                }), (function(n) {
                    return n.iconPath && (0, u.iv)(mn(), n.iconPath)
                }), (function(n) {
                    return n.$hasIcon ? "5rem" : "2.4rem"
                }), (function(n) {
                    return n.$hasIcon ? "2.5rem" : "1.2rem"
                }), (function(n) {
                    return n.$hasIcon ? "7rem" : "5rem"
                })),
                gn = (0, c.forwardRef)((function(n, e) {
                    var t = n.label,
                        i = n.options,
                        a = n.value,
                        r = n.onChange,
                        o = void 0 === r ? void 0 : r,
                        c = n.icon,
                        s = n.iconPath,
                        d = void 0 === s ? "" : s,
                        u = n.type,
                        m = void 0 === u ? "primary" : u,
                        p = n.size,
                        h = void 0 === p ? "md" : p,
                        g = n.fullWidth;
                    return (0, l.jsxs)(hn, {
                        icon: c,
                        iconPath: d,
                        className: "".concat(m, " ").concat(h, " ").concat(g && "full-width"),
                        children: [c, (0, l.jsx)("select", {
                            ref: e,
                            className: "select-element",
                            defaultValue: a,
                            onChange: o,
                            "aria-label": t,
                            children: i.map((function(n) {
                                return (0, l.jsx)("option", {
                                    value: n.value,
                                    children: n.label
                                }, n.value)
                            }))
                        }), (0, l.jsx)(un, {
                            className: "down-arrow"
                        })]
                    })
                }));
            gn.displayName = "SelectDropdown";
            var fn = t(3935),
                vn = t(4656),
                xn = t(1341);

            function wn() {
                var n = (0, d.Z)(["\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n\n  &[open] {\n    display: flex;\n    animation: show 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n\n    &.modal--closing {\n      animation: hide 150ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n    }\n  }\n\n  &::backdrop {\n    background-color: rgba(0, 0, 0, 0.85);\n  }\n\n  &:modal {\n    max-width: 100vw;\n    max-height: 100vh;\n    max-height: 100dvh;\n  }\n\n  .dialog-content {\n    background-color: var(--color-viewport-background);\n    box-shadow: var(--elevation-1);\n    border-radius: 4rem;\n    text-align: center;\n\n    .text-button {\n      font-size: var(--button-font-size);\n    }\n\n    @media (max-width: 768px) {\n      max-width: calc(100vw - var(--spacing-sm) * 2);\n    }\n  }\n\n  .modal-footer {\n    margin-bottom: var(--spacing-xl);\n  }\n\n  @keyframes show {\n    from {\n      opacity: 0;\n      transform: translateY(min(10rem, 5vh));\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0%);\n    }\n  }\n\n  @keyframes hide {\n    from {\n      opacity: 1;\n      transform: translateY(0%);\n    }\n    to {\n      opacity: 0;\n      transform: translateY(min(10rem, 5vh));\n    }\n  }\n"]);
                return wn = function() {
                    return n
                }, n
            }
            var bn = u.ZP.dialog.withConfig({
                    componentId: "sc-2d12bc2a-0"
                })(wn()),
                yn = (0, c.forwardRef)((function(n, e) {
                    var t = n.open,
                        i = n.onClose,
                        a = n.children,
                        r = n.triggerClose,
                        o = n.hideCancel,
                        s = (0, vn.Z)(e),
                        d = (0, c.useState)(!1),
                        u = d[0],
                        m = d[1],
                        p = (0, c.useCallback)((function(n) {
                            n.preventDefault(), i()
                        }), [i]),
                        h = (0, c.useCallback)((function(n) {
                            n.target === s.current && i()
                        }), [i, s]),
                        g = (0, c.useCallback)((function() {
                            var n = s.current;
                            t || n.close()
                        }), [t, s]);
                    (0, c.useEffect)((function() {
                        m(!0)
                    }), []), (0, c.useEffect)((function() {
                        var n = s.current;
                        !(null === n || void 0 === n ? void 0 : n.open) && t ? n.showModal() : (null === n || void 0 === n ? void 0 : n.open) && !t && n.close()
                    }), [t, s]), (0, c.useEffect)((function() {
                        var n = s.current;
                        r && n.close()
                    }), [r, s]), (0, xn.Z)(t);
                    var f = (0, l.jsx)(bn, {
                        ref: s,
                        onClose: i,
                        onCancel: p,
                        onClick: h,
                        onAnimationEnd: g,
                        children: (0, l.jsxs)("div", {
                            className: "dialog-content",
                            children: [(0, l.jsx)("article", {
                                className: "modal-content",
                                children: a
                            }), !o && (0, l.jsx)("footer", {
                                className: "modal-footer",
                                children: (0, l.jsx)("form", {
                                    method: "dialog",
                                    children: (0, l.jsx)("button", {
                                        className: "text-button",
                                        children: "Cancel"
                                    })
                                })
                            })]
                        })
                    });
                    return u ? (0, fn.createPortal)(f, document.body) : null
                }));

            function jn() {
                var n = (0, d.Z)(["\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);
                return jn = function() {
                    return n
                }, n
            }

            function kn() {
                var n = (0, d.Z)(["\n  max-width: 50rem;\n  padding: var(--spacing-xl);\n  padding-bottom: var(--spacing-sm);\n\n  .content-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-sm);\n    margin-bottom: var(--spacing-sm);\n  }\n\n  @media (max-width: 768px) {\n    padding: var(--spacing-base);\n    padding-bottom: 0;\n  }\n"]);
                return kn = function() {
                    return n
                }, n
            }

            function Zn(n) {
                var e = n.className,
                    t = (0, c.useRef)(null),
                    i = (0, c.useRef)(null),
                    a = (0, c.useState)(!1),
                    r = a[0],
                    o = a[1],
                    s = (0, c.useState)(void 0),
                    d = s[0],
                    u = s[1];
                (0, c.useEffect)((function() {
                    var n = q.Z.get(X);
                    n && 3 === (null === n || void 0 === n ? void 0 : n.length) ? u(Q.find((function(e) {
                        return e.code === n
                    }))) : u(Q.find((function(n) {
                        return "USD" === n.code
                    })))
                }), []), (0, c.useEffect)((function() {
                    if (null === d || void 0 === d ? void 0 : d.code) {
                        var n = tn();
                        q.Z.set(X, d.code, {
                            expires: 30,
                            domain: n
                        })
                    }
                }), [d]);
                return (0, l.jsxs)(On, {
                    className: e,
                    children: [(0, l.jsx)("div", {
                        className: "desktop-only",
                        children: (0, l.jsx)(cn, {
                            variant: "tertiary",
                            icon: (0, l.jsx)(V, {}),
                            onClick: function() {
                                return o(!0)
                            },
                            label: null === d || void 0 === d ? void 0 : d.code
                        })
                    }), (0, l.jsx)("div", {
                        className: "mobile-only",
                        children: (0, l.jsx)(cn, {
                            variant: "tertiary",
                            size: "sm",
                            fullWidth: !0,
                            icon: (0, l.jsx)(V, {}),
                            onClick: function() {
                                return o(!0)
                            },
                            label: null === d || void 0 === d ? void 0 : d.description
                        })
                    }), (0, l.jsx)(yn, {
                        ref: t,
                        onClose: function() {
                            return o(!1)
                        },
                        open: r,
                        children: (0, l.jsxs)(Bn, {
                            children: [(0, l.jsx)("header", {
                                className: "header",
                                children: (0, l.jsx)("h2", {
                                    className: "subheading-1",
                                    children: "Choose your currency"
                                })
                            }), (0, l.jsxs)("div", {
                                className: "content-wrapper",
                                children: [(0, l.jsx)(gn, {
                                    ref: i,
                                    label: "Select your region",
                                    options: Q.map((function(n) {
                                        return {
                                            label: n.description,
                                            value: n.code
                                        }
                                    })),
                                    value: (null === d || void 0 === d ? void 0 : d.code) || "",
                                    type: "secondary",
                                    size: "lg",
                                    fullWidth: !0
                                }), (0, l.jsx)(cn, {
                                    size: "lg",
                                    fullWidth: !0,
                                    onClick: function() {
                                        ! function() {
                                            var n, e, a = null === i || void 0 === i || null === (n = i.current) || void 0 === n ? void 0 : n.value;
                                            u(Q.find((function(n) {
                                                return n.code === a
                                            }))), null === t || void 0 === t || null === (e = t.current) || void 0 === e || e.close(), o(!1)
                                        }()
                                    },
                                    children: "Save & Update"
                                })]
                            })]
                        })
                    })]
                })
            }
            yn.displayName = "Modal";
            var _n, Nn, Cn, In, Pn, Sn, zn, Ln, Mn, Rn, En, Tn, On = u.ZP.div.withConfig({
                    componentId: "sc-f2ae9193-0"
                })(jn()),
                Bn = u.ZP.div.withConfig({
                    componentId: "sc-f2ae9193-1"
                })(kn()),
                An = t(1163);

            function Hn() {
                return Hn = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, Hn.apply(this, arguments)
            }
            var Fn = function(n, e) {
                    return c.createElement("svg", Hn({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        ref: e
                    }, n), _n || (_n = c.createElement("path", {
                        fill: "currentColor",
                        d: "M10.9 1.044S13.6 4.6 13.6 10"
                    })), Nn || (Nn = c.createElement("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M10.9 1.044S13.6 4.6 13.6 10"
                    })), Cn || (Cn = c.createElement("path", {
                        fill: "currentColor",
                        d: "M13.6 10c0 5.4-2.7 8.956-2.7 8.956"
                    })), In || (In = c.createElement("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M13.6 10c0 5.4-2.7 8.956-2.7 8.956"
                    })), Pn || (Pn = c.createElement("path", {
                        fill: "currentColor",
                        d: "M9.1 18.956S6.4 15.4 6.4 10"
                    })), Sn || (Sn = c.createElement("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M9.1 18.956S6.4 15.4 6.4 10"
                    })), zn || (zn = c.createElement("path", {
                        fill: "currentColor",
                        d: "M6.4 10c0-5.4 2.7-8.956 2.7-8.956"
                    })), Ln || (Ln = c.createElement("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M6.4 10c0-5.4 2.7-8.956 2.7-8.956"
                    })), Mn || (Mn = c.createElement("path", {
                        fill: "currentColor",
                        d: "M1.567 13.15h16.866"
                    })), Rn || (Rn = c.createElement("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M1.567 13.15h16.866"
                    })), En || (En = c.createElement("path", {
                        fill: "currentColor",
                        d: "M1.567 6.85h16.866"
                    })), Tn || (Tn = c.createElement("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M1.567 6.85h16.866M1 10a9 9 0 0 0 9 9M10 19a9 9 0 0 0 9-9M19 10a9 9 0 0 0-9-9M10 1a9 9 0 0 0-9 9"
                    })))
                },
                Un = (0, c.forwardRef)(Fn),
                Dn = t(9637),
                Wn = t(9815),
                Gn = ["en-US", "en-GB", "es-419", "pt-BR", "zh-CN", "zh-Hant-HK", "da-DK", "de-DE", "es-ES", "fr-FR", "it-IT", "nl-NL", "nb-NO", "pl-PL", "sv-SE", "ru-RU", "uk-UA", "ja-JP", "ko-KR", "en"],
                qn = "en-US",
                Kn = new Set(Gn);

            function Yn(n) {
                return n && Kn.has(n)
            }

            function Vn(n) {
                var e = n.split("/")[1];
                return Yn(e) ? e : qn
            }

            function Jn(n, e) {
                var t = n.split("/").filter((function(n, e) {
                        return 0 !== e || "" !== n
                    })),
                    i = (0, Dn.Z)(t),
                    a = i[0],
                    r = i.slice(1),
                    o = Yn(a) ? r : t,
                    l = e === qn ? o : [e].concat((0, Wn.Z)(o));
                return [""].concat((0, Wn.Z)(l)).join("/")
            }

            function $n() {
                var n = (0, d.Z)(["\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);
                return $n = function() {
                    return n
                }, n
            }

            function Xn() {
                var n = (0, d.Z)(["\n  max-width: 50rem;\n  padding: var(--spacing-xl);\n  padding-bottom: var(--spacing-sm);\n\n  .content-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-sm);\n    margin-bottom: var(--spacing-sm);\n  }\n\n  @media (max-width: 768px) {\n    padding: var(--spacing-base);\n    padding-bottom: 0;\n  }\n"]);
                return Xn = function() {
                    return n
                }, n
            }
            var Qn = u.ZP.div.withConfig({
                    componentId: "sc-f06723ac-0"
                })($n()),
                ne = u.ZP.div.withConfig({
                    componentId: "sc-f06723ac-1"
                })(Xn());

            function ee(n) {
                var e = n.className,
                    t = n.locales,
                    i = void 0 === t ? [] : t,
                    a = (0, An.useRouter)(),
                    r = Vn(a.asPath),
                    o = (0, c.useState)(!1),
                    s = o[0],
                    d = o[1],
                    u = (0, c.useState)(i)[0],
                    m = (0, c.useState)("..."),
                    p = m[0],
                    h = m[1],
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    v = (0, c.useCallback)((function(n) {
                        return u.find((function(e) {
                            return e.code === n
                        }))
                    }), [u]),
                    x = function() {
                        var n, e = null === f || void 0 === f || null === (n = f.current) || void 0 === n ? void 0 : n.value;
                        if (e) {
                            var t = tn();
                            q.Z.set(J, e, {
                                expires: 30,
                                domain: t
                            }), window.patreon_locale_code = e;
                            try {
                                window.localStorage.setItem(J, e)
                            } catch (i) {}
                            d(!1), w(e),
                                function(n, e) {
                                    n.replace(Jn(n.asPath, e))
                                }(a, e)
                        }
                    },
                    w = (0, c.useCallback)((function(n) {
                        var e = v(n);
                        e && h(e.name)
                    }), [v, h]);
                return (0, c.useEffect)((function() {
                    w(r)
                }), [u, r, w]), (0, l.jsxs)(Qn, {
                    className: e,
                    children: [(0, l.jsx)("div", {
                        className: "desktop-only",
                        children: (0, l.jsx)(cn, {
                            variant: "tertiary",
                            icon: (0, l.jsx)(Un, {}),
                            onClick: function() {
                                return d(!0)
                            },
                            label: p
                        })
                    }), (0, l.jsx)("div", {
                        className: "mobile-only",
                        children: (0, l.jsx)(cn, {
                            variant: "tertiary",
                            size: "sm",
                            fullWidth: !0,
                            icon: (0, l.jsx)(Un, {}),
                            onClick: function() {
                                return d(!0)
                            },
                            label: p
                        })
                    }), (0, l.jsx)(yn, {
                        ref: g,
                        onClose: function() {
                            return d(!1)
                        },
                        open: s,
                        children: (0, l.jsxs)(ne, {
                            children: [(0, l.jsx)("header", {
                                className: "header",
                                children: (0, l.jsx)("h2", {
                                    className: "subheading-1",
                                    children: "Choose your language"
                                })
                            }), (0, l.jsxs)("div", {
                                className: "content-wrapper",
                                children: [(0, l.jsx)(gn, {
                                    ref: f,
                                    label: "Select Language",
                                    options: u.map((function(n) {
                                        return {
                                            label: n.name,
                                            value: n.code
                                        }
                                    })),
                                    value: r || "",
                                    icon: (0, l.jsx)(Un, {}),
                                    type: "secondary",
                                    size: "lg",
                                    fullWidth: !0
                                }), (0, l.jsx)(cn, {
                                    size: "lg",
                                    fullWidth: !0,
                                    onClick: function() {
                                        x()
                                    },
                                    children: "Save & Update"
                                })]
                            })]
                        })
                    })]
                })
            }
            var te = [{
                name: "Afghanistan (\u202b\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646\u202c\u200e)",
                iso2: "AF",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
            }, {
                name: "Albania (Shqip\xebri)",
                iso2: "AL",
                flag: "https://flagcdn.com/w320/al.png"
            }, {
                name: "Algeria (\u202b\u0627\u0644\u062c\u0632\u0627\u0626\u0631\u202c\u200e)",
                iso2: "DZ",
                flag: "https://flagcdn.com/w320/dz.png"
            }, {
                name: "American Samoa",
                iso2: "AS",
                flag: "https://flagcdn.com/w320/as.png"
            }, {
                name: "Andorra",
                iso2: "AD",
                flag: "https://flagcdn.com/w320/ad.png"
            }, {
                name: "Angola",
                iso2: "AO",
                flag: "https://flagcdn.com/w320/ao.png"
            }, {
                name: "Anguilla",
                iso2: "AI",
                flag: "https://flagcdn.com/w320/ai.png"
            }, {
                name: "Antigua and Barbuda",
                iso2: "AG",
                flag: "https://flagcdn.com/w320/ag.png"
            }, {
                name: "Argentina",
                iso2: "AR",
                flag: "https://flagcdn.com/w320/ar.png"
            }, {
                name: "Armenia (\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576)",
                iso2: "AM",
                flag: "https://flagcdn.com/w320/am.png"
            }, {
                name: "Aruba",
                iso2: "AW",
                flag: "https://flagcdn.com/w320/aw.png"
            }, {
                name: "Australia",
                iso2: "AU",
                flag: "https://flagcdn.com/w320/au.png"
            }, {
                name: "Austria (\xd6sterreich)",
                iso2: "AT",
                flag: "https://flagcdn.com/w320/at.png"
            }, {
                name: "Azerbaijan (Az\u0259rbaycan)",
                iso2: "AZ",
                flag: "https://flagcdn.com/w320/az.png"
            }, {
                name: "Bahamas",
                iso2: "BS",
                flag: "https://flagcdn.com/w320/bs.png"
            }, {
                name: "Bahrain (\u202b\u0627\u0644\u0628\u062d\u0631\u064a\u0646\u202c\u200e)",
                iso2: "BH",
                flag: "https://flagcdn.com/w320/bh.png"
            }, {
                name: "Bangladesh (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6)",
                iso2: "BD",
                flag: "https://flagcdn.com/w320/bd.png"
            }, {
                name: "Barbados",
                iso2: "BB",
                flag: "https://flagcdn.com/w320/bb.png"
            }, {
                name: "Belarus (\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c)",
                iso2: "BY",
                flag: "https://flagcdn.com/w320/by.png"
            }, {
                name: "Belgium (Belgi\xeb)",
                iso2: "BE",
                flag: "https://flagcdn.com/w320/be.png"
            }, {
                name: "Belize",
                iso2: "BZ",
                flag: "https://flagcdn.com/w320/bz.png"
            }, {
                name: "Benin (B\xe9nin)",
                iso2: "BJ",
                flag: "https://flagcdn.com/w320/bj.png"
            }, {
                name: "Bermuda",
                iso2: "BM",
                flag: "https://flagcdn.com/w320/bm.png"
            }, {
                name: "Bhutan (\u0f60\u0f56\u0fb2\u0f74\u0f42)",
                iso2: "BT",
                flag: "https://flagcdn.com/w320/bt.png"
            }, {
                name: "Bolivia",
                iso2: "BO",
                flag: "https://flagcdn.com/w320/bo.png"
            }, {
                name: "Bosnia and Herzegovina (\u0411\u043e\u0441\u043d\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430)",
                iso2: "BA",
                flag: "https://flagcdn.com/w320/ba.png"
            }, {
                name: "Botswana",
                iso2: "BW",
                flag: "https://flagcdn.com/w320/bw.png"
            }, {
                name: "Bouvet Island",
                iso2: "BV",
                flag: "https://flagcdn.com/w320/bv.png"
            }, {
                name: "Brazil (Brasil)",
                iso2: "BR",
                flag: "https://flagcdn.com/w320/br.png"
            }, {
                name: "British Indian Ocean Territory",
                iso2: "IO",
                flag: "https://flagcdn.com/w320/io.png"
            }, {
                name: "British Virgin Islands",
                iso2: "VG",
                flag: "https://flagcdn.com/w320/vg.png"
            }, {
                name: "Brunei",
                iso2: "BN",
                flag: "https://flagcdn.com/w320/bn.png"
            }, {
                name: "Bulgaria (\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f)",
                iso2: "BG",
                flag: "https://flagcdn.com/w320/bg.png"
            }, {
                name: "Burkina Faso",
                iso2: "BF",
                flag: "https://flagcdn.com/w320/bf.png"
            }, {
                name: "Burundi (Uburundi)",
                iso2: "BI",
                flag: "https://flagcdn.com/w320/bi.png"
            }, {
                name: "Cambodia (\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6)",
                iso2: "KH",
                flag: "https://flagcdn.com/w320/kh.png"
            }, {
                name: "Cameroon (Cameroun)",
                iso2: "CM",
                flag: "https://flagcdn.com/w320/cm.png"
            }, {
                name: "Canada",
                iso2: "CA",
                flag: "https://flagcdn.com/w320/ca.png"
            }, {
                name: "Cape Verde (Kabu Verdi)",
                iso2: "CV",
                flag: "https://flagcdn.com/w320/cv.png"
            }, {
                name: "Caribbean Netherlands",
                iso2: "BQ",
                flag: "https://flagcdn.com/w320/bq.png"
            }, {
                name: "Cayman Islands",
                iso2: "KY",
                flag: "https://flagcdn.com/w320/ky.png"
            }, {
                name: "Central African Republic (R\xe9publique centrafricaine)",
                iso2: "CF",
                flag: "https://flagcdn.com/w320/cf.png"
            }, {
                name: "Chad (Tchad)",
                iso2: "TD",
                flag: "https://flagcdn.com/w320/td.png"
            }, {
                name: "Chile",
                iso2: "CL",
                flag: "https://flagcdn.com/w320/cl.png"
            }, {
                name: "China (\u4e2d\u56fd)",
                iso2: "CN",
                flag: "https://flagcdn.com/w320/cn.png"
            }, {
                name: "Colombia",
                iso2: "CO",
                flag: "https://flagcdn.com/w320/co.png"
            }, {
                name: "Comoros (\u202b\u062c\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202c\u200e)",
                iso2: "KM",
                flag: "https://flagcdn.com/w320/km.png"
            }, {
                name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
                iso2: "CD",
                flag: "https://flagcdn.com/w320/cd.png"
            }, {
                name: "Congo (Republic) (Congo-Brazzaville)",
                iso2: "CG",
                flag: "https://flagcdn.com/w320/cg.png"
            }, {
                name: "Cook Islands",
                iso2: "CK",
                flag: "https://flagcdn.com/w320/ck.png"
            }, {
                name: "Costa Rica",
                iso2: "CR",
                flag: "https://flagcdn.com/w320/cr.png"
            }, {
                name: "C\xf4te d\u2019Ivoire",
                iso2: "CI",
                flag: "https://flagcdn.com/w320/ci.png"
            }, {
                name: "Croatia (Hrvatska)",
                iso2: "HR",
                flag: "https://flagcdn.com/w320/hr.png"
            }, {
                name: "Cura\xe7ao",
                iso2: "CW",
                flag: "https://flagcdn.com/w320/cw.png"
            }, {
                name: "Cyprus (\u039a\u03cd\u03c0\u03c1\u03bf\u03c2)",
                iso2: "CY",
                flag: "https://flagcdn.com/w320/cy.png"
            }, {
                name: "Czech Republic (\u010cesk\xe1 republika)",
                iso2: "CZ",
                flag: "https://flagcdn.com/w320/cz.png"
            }, {
                name: "Denmark (Danmark)",
                iso2: "DK",
                flag: "https://flagcdn.com/w320/dk.png"
            }, {
                name: "Djibouti",
                iso2: "DJ",
                flag: "https://flagcdn.com/w320/dj.png"
            }, {
                name: "Dominica",
                iso2: "DM",
                flag: "https://flagcdn.com/w320/dm.png"
            }, {
                name: "Dominican Republic (Rep\xfablica Dominicana)",
                iso2: "DO",
                flag: "https://flagcdn.com/w320/do.png"
            }, {
                name: "Ecuador",
                iso2: "EC",
                flag: "https://flagcdn.com/w320/ec.png"
            }, {
                name: "Egypt (\u202b\u0645\u0635\u0631\u202c\u200e)",
                iso2: "EG",
                flag: "https://flagcdn.com/w320/eg.png"
            }, {
                name: "El Salvador",
                iso2: "SV",
                flag: "https://flagcdn.com/w320/sv.png"
            }, {
                name: "Equatorial Guinea (Guinea Ecuatorial)",
                iso2: "GQ",
                flag: "https://flagcdn.com/w320/gq.png"
            }, {
                name: "Eritrea",
                iso2: "ER",
                flag: "https://flagcdn.com/w320/er.png"
            }, {
                name: "Estonia (Eesti)",
                iso2: "EE",
                flag: "https://flagcdn.com/w320/ee.png"
            }, {
                name: "Ethiopia",
                iso2: "ET",
                flag: "https://flagcdn.com/w320/et.png"
            }, {
                name: "Falkland Islands (Islas Malvinas)",
                iso2: "FK",
                flag: "https://flagcdn.com/w320/fk.png"
            }, {
                name: "Faroe Islands (F\xf8royar)",
                iso2: "FO",
                flag: "https://flagcdn.com/w320/fo.png"
            }, {
                name: "Fiji",
                iso2: "FJ",
                flag: "https://flagcdn.com/w320/fj.png"
            }, {
                name: "Finland (Suomi)",
                iso2: "FI",
                flag: "https://flagcdn.com/w320/fi.png"
            }, {
                name: "France",
                iso2: "FR",
                flag: "https://flagcdn.com/w320/fr.png"
            }, {
                name: "French Guiana (Guyane fran\xe7aise)",
                iso2: "GF",
                flag: "https://flagcdn.com/w320/gf.png"
            }, {
                name: "French Polynesia (Polyn\xe9sie fran\xe7aise)",
                iso2: "PF",
                flag: "https://flagcdn.com/w320/pf.png"
            }, {
                name: "French Southern Territories",
                iso2: "TF",
                flag: "https://flagcdn.com/w320/tf.png"
            }, {
                name: "Gabon",
                iso2: "GA",
                flag: "https://flagcdn.com/w320/ga.png"
            }, {
                name: "Gambia",
                iso2: "GM",
                flag: "https://flagcdn.com/w320/gm.png"
            }, {
                name: "Georgia (\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd)",
                iso2: "GE",
                flag: "https://flagcdn.com/w320/ge.png"
            }, {
                name: "Germany (Deutschland)",
                iso2: "DE",
                flag: "https://flagcdn.com/w320/de.png"
            }, {
                name: "Ghana (Gaana)",
                iso2: "GH",
                flag: "https://flagcdn.com/w320/gh.png"
            }, {
                name: "Gibraltar",
                iso2: "GI",
                flag: "https://flagcdn.com/w320/gi.png"
            }, {
                name: "Greece (\u0395\u03bb\u03bb\u03ac\u03b4\u03b1)",
                iso2: "GR",
                flag: "https://flagcdn.com/w320/gr.png"
            }, {
                name: "Greenland (Kalaallit Nunaat)",
                iso2: "GL",
                flag: "https://flagcdn.com/w320/gl.png"
            }, {
                name: "Grenada",
                iso2: "GD",
                flag: "https://flagcdn.com/w320/gd.png"
            }, {
                name: "Guadeloupe",
                iso2: "GP",
                flag: "https://flagcdn.com/w320/gp.png"
            }, {
                name: "Guam",
                iso2: "GU",
                flag: "https://flagcdn.com/w320/gu.png"
            }, {
                name: "Guatemala",
                iso2: "GT",
                flag: "https://flagcdn.com/w320/gt.png"
            }, {
                name: "Guernsey",
                iso2: "GG",
                flag: "https://flagcdn.com/w320/gg.png"
            }, {
                name: "Guinea (Guin\xe9e)",
                iso2: "GN",
                flag: "https://flagcdn.com/w320/gn.png"
            }, {
                name: "Guinea-Bissau (Guin\xe9 Bissau)",
                iso2: "GW",
                flag: "https://flagcdn.com/w320/gw.png"
            }, {
                name: "Guyana",
                iso2: "GY",
                flag: "https://flagcdn.com/w320/gy.png"
            }, {
                name: "Haiti",
                iso2: "HT",
                flag: "https://flagcdn.com/w320/ht.png"
            }, {
                name: "Heard Island and McDonald Islands",
                iso2: "HM",
                flag: "https://flagcdn.com/w320/hm.png"
            }, {
                name: "Honduras",
                iso2: "HN",
                flag: "https://flagcdn.com/w320/hn.png"
            }, {
                name: "Hong Kong (\u9999\u6e2f)",
                iso2: "HK",
                flag: "https://flagcdn.com/w320/hk.png"
            }, {
                name: "Hungary (Magyarorsz\xe1g)",
                iso2: "HU",
                flag: "https://flagcdn.com/w320/hu.png"
            }, {
                name: "Iceland (\xcdsland)",
                iso2: "IS",
                flag: "https://flagcdn.com/w320/is.png"
            }, {
                name: "India (\u092d\u093e\u0930\u0924)",
                iso2: "IN",
                flag: "https://flagcdn.com/w320/in.png"
            }, {
                name: "Indonesia",
                iso2: "ID",
                flag: "https://flagcdn.com/w320/id.png"
            }, {
                name: "Iraq (\u202b\u0627\u0644\u0639\u0631\u0627\u0642\u202c\u200e)",
                iso2: "IQ",
                flag: "https://flagcdn.com/w320/iq.png"
            }, {
                name: "Ireland",
                iso2: "IE",
                flag: "https://flagcdn.com/w320/ie.png"
            }, {
                name: "Isle of Man",
                iso2: "IM",
                flag: "https://flagcdn.com/w320/im.png"
            }, {
                name: "Israel (\u202b\u05d9\u05e9\u05e8\u05d0\u05dc\u202c\u200e)",
                iso2: "IL",
                flag: "https://flagcdn.com/w320/il.png"
            }, {
                name: "Italy (Italia)",
                iso2: "IT",
                flag: "https://flagcdn.com/w320/it.png"
            }, {
                name: "Jamaica",
                iso2: "JM",
                flag: "https://flagcdn.com/w320/jm.png"
            }, {
                name: "Japan (\u65e5\u672c)",
                iso2: "JP",
                flag: "https://flagcdn.com/w320/jp.png"
            }, {
                name: "Jersey",
                iso2: "JE",
                flag: "https://flagcdn.com/w320/je.png"
            }, {
                name: "Jordan (\u202b\u0627\u0644\u0623\u0631\u062f\u0646\u202c\u200e)",
                iso2: "JO",
                flag: "https://flagcdn.com/w320/jo.png"
            }, {
                name: "Kazakhstan (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d)",
                iso2: "KZ",
                flag: "https://flagcdn.com/w320/kz.png"
            }, {
                name: "Kenya",
                iso2: "KE",
                flag: "https://flagcdn.com/w320/ke.png"
            }, {
                name: "Kiribati",
                iso2: "KI",
                flag: "https://flagcdn.com/w320/ki.png"
            }, {
                name: "Kuwait (\u202b\u0627\u0644\u0643\u0648\u064a\u062a\u202c\u200e)",
                iso2: "KW",
                flag: "https://flagcdn.com/w320/kw.png"
            }, {
                name: "Kyrgyzstan (\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d)",
                iso2: "KG",
                flag: "https://flagcdn.com/w320/kg.png"
            }, {
                name: "Laos (\u0ea5\u0eb2\u0ea7)",
                iso2: "LA",
                flag: "https://flagcdn.com/w320/la.png"
            }, {
                name: "Latvia (Latvija)",
                iso2: "LV",
                flag: "https://flagcdn.com/w320/lv.png"
            }, {
                name: "Lebanon (\u202b\u0644\u0628\u0646\u0627\u0646\u202c\u200e)",
                iso2: "LB",
                flag: "https://flagcdn.com/w320/lb.png"
            }, {
                name: "Lesotho",
                iso2: "LS",
                flag: "https://flagcdn.com/w320/ls.png"
            }, {
                name: "Liberia",
                iso2: "LR",
                flag: "https://flagcdn.com/w320/lr.png"
            }, {
                name: "Libya (\u202b\u0644\u064a\u0628\u064a\u0627\u202c\u200e)",
                iso2: "LY",
                flag: "https://flagcdn.com/w320/ly.png"
            }, {
                name: "Liechtenstein",
                iso2: "LI",
                flag: "https://flagcdn.com/w320/li.png"
            }, {
                name: "Lithuania (Lietuva)",
                iso2: "LT",
                flag: "https://flagcdn.com/w320/lt.png"
            }, {
                name: "Luxembourg",
                iso2: "LU",
                flag: "https://flagcdn.com/w320/lu.png"
            }, {
                name: "Macau (\u6fb3\u9580)",
                iso2: "MO",
                flag: "https://flagcdn.com/w320/mo.png"
            }, {
                name: "Macedonia (FYROM) (\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430)",
                iso2: "MK",
                flag: "https://flagcdn.com/w320/mk.png"
            }, {
                name: "Madagascar (Madagasikara)",
                iso2: "MG",
                flag: "https://flagcdn.com/w320/mg.png"
            }, {
                name: "Malawi",
                iso2: "MW",
                flag: "https://flagcdn.com/w320/mw.png"
            }, {
                name: "Malaysia",
                iso2: "MY",
                flag: "https://flagcdn.com/w320/my.png"
            }, {
                name: "Maldives",
                iso2: "MV",
                flag: "https://flagcdn.com/w320/mv.png"
            }, {
                name: "Mali",
                iso2: "ML",
                flag: "https://flagcdn.com/w320/ml.png"
            }, {
                name: "Malta",
                iso2: "MT",
                flag: "https://flagcdn.com/w320/mt.png"
            }, {
                name: "Marshall Islands",
                iso2: "MH",
                flag: "https://flagcdn.com/w320/mh.png"
            }, {
                name: "Martinique",
                iso2: "MQ",
                flag: "https://flagcdn.com/w320/mq.png"
            }, {
                name: "Mauritania (\u202b\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627\u202c\u200e)",
                iso2: "MR",
                flag: "https://flagcdn.com/w320/mr.png"
            }, {
                name: "Mauritius (Moris)",
                iso2: "MU",
                flag: "https://flagcdn.com/w320/mu.png"
            }, {
                name: "Mayotte",
                iso2: "YT",
                flag: "https://flagcdn.com/w320/yt.png"
            }, {
                name: "Mexico (M\xe9xico)",
                iso2: "MX",
                flag: "https://flagcdn.com/w320/mx.png"
            }, {
                name: "Micronesia",
                iso2: "FM",
                flag: "https://flagcdn.com/w320/fm.png"
            }, {
                name: "Moldova (Republica Moldova)",
                iso2: "MD",
                flag: "https://flagcdn.com/w320/md.png"
            }, {
                name: "Monaco",
                iso2: "MC",
                flag: "https://flagcdn.com/w320/mc.png"
            }, {
                name: "Mongolia (\u041c\u043e\u043d\u0433\u043e\u043b)",
                iso2: "MN",
                flag: "https://flagcdn.com/w320/mn.png"
            }, {
                name: "Montenegro (Crna Gora)",
                iso2: "ME",
                flag: "https://flagcdn.com/w320/me.png"
            }, {
                name: "Montserrat",
                iso2: "MS",
                flag: "https://flagcdn.com/w320/ms.png"
            }, {
                name: "Morocco (\u202b\u0627\u0644\u0645\u063a\u0631\u0628\u202c\u200e)",
                iso2: "MA",
                flag: "https://flagcdn.com/w320/ma.png"
            }, {
                name: "Mozambique (Mo\xe7ambique)",
                iso2: "MZ",
                flag: "https://flagcdn.com/w320/mz.png"
            }, {
                name: "Myanmar (Burma) (\u1019\u103c\u1014\u103a\u1019\u102c)",
                iso2: "MM",
                flag: "https://flagcdn.com/w320/mm.png"
            }, {
                name: "Namibia (Namibi\xeb)",
                iso2: "NA",
                flag: "https://flagcdn.com/w320/na.png"
            }, {
                name: "Nauru",
                iso2: "NR",
                flag: "https://flagcdn.com/w320/nr.png"
            }, {
                name: "Nepal (\u0928\u0947\u092a\u093e\u0932)",
                iso2: "NP",
                flag: "https://flagcdn.com/w320/np.png"
            }, {
                name: "Netherlands (Nederland)",
                iso2: "NL",
                flag: "https://flagcdn.com/w320/nl.png"
            }, {
                name: "New Caledonia (Nouvelle-Cal\xe9donie)",
                iso2: "NC",
                flag: "https://flagcdn.com/w320/nc.png"
            }, {
                name: "New Zealand",
                iso2: "NZ",
                flag: "https://flagcdn.com/w320/nz.png"
            }, {
                name: "Nicaragua",
                iso2: "NI",
                flag: "https://flagcdn.com/w320/ni.png"
            }, {
                name: "Niger (Nijar)",
                iso2: "NE",
                flag: "https://flagcdn.com/w320/ne.png"
            }, {
                name: "Nigeria",
                iso2: "NG",
                flag: "https://flagcdn.com/w320/ng.png"
            }, {
                name: "Niue",
                iso2: "NU",
                flag: "https://flagcdn.com/w320/nu.png"
            }, {
                name: "Norfolk Island",
                iso2: "NF",
                flag: "https://flagcdn.com/w320/nf.png"
            }, {
                name: "Northern Mariana Islands",
                iso2: "MP",
                flag: "https://flagcdn.com/w320/mp.png"
            }, {
                name: "Norway (Norge)",
                iso2: "NO",
                flag: "https://flagcdn.com/w320/no.png"
            }, {
                name: "Oman (\u202b\u0639\u064f\u0645\u0627\u0646\u202c\u200e)",
                iso2: "OM",
                flag: "https://flagcdn.com/w320/om.png"
            }, {
                name: "Pakistan (\u202b\u067e\u0627\u06a9\u0633\u062a\u0627\u0646\u202c\u200e)",
                iso2: "PK",
                flag: "https://flagcdn.com/w320/pk.png"
            }, {
                name: "Palau",
                iso2: "PW",
                flag: "https://flagcdn.com/w320/pw.png"
            }, {
                name: "Palestine (\u202b\u0641\u0644\u0633\u0637\u064a\u0646\u202c\u200e)",
                iso2: "PS",
                flag: "https://flagcdn.com/w320/ps.png"
            }, {
                name: "Panama (Panam\xe1)",
                iso2: "PA",
                flag: "https://flagcdn.com/w320/pa.png"
            }, {
                name: "Papua New Guinea",
                iso2: "PG",
                flag: "https://flagcdn.com/w320/pg.png"
            }, {
                name: "Paraguay",
                iso2: "PY",
                flag: "https://flagcdn.com/w320/py.png"
            }, {
                name: "Peru (Per\xfa)",
                iso2: "PE",
                flag: "https://flagcdn.com/w320/pe.png"
            }, {
                name: "Philippines",
                iso2: "PH",
                flag: "https://flagcdn.com/w320/ph.png"
            }, {
                name: "Poland (Polska)",
                iso2: "PL",
                flag: "https://flagcdn.com/w320/pl.png"
            }, {
                name: "Portugal",
                iso2: "PT",
                flag: "https://flagcdn.com/w320/pt.png"
            }, {
                name: "Puerto Rico",
                iso2: "PR",
                flag: "https://flagcdn.com/w320/pr.png"
            }, {
                name: "Qatar (\u202b\u0642\u0637\u0631\u202c\u200e)",
                iso2: "QA",
                flag: "https://flagcdn.com/w320/qa.png"
            }, {
                name: "R\xe9union (La R\xe9union)",
                iso2: "RE",
                flag: "https://flagcdn.com/w320/re.png"
            }, {
                name: "Romania (Rom\xe2nia)",
                iso2: "RO",
                flag: "https://flagcdn.com/w320/ro.png"
            }, {
                name: "Russia (\u0420\u043e\u0441\u0441\u0438\u044f)",
                iso2: "RU",
                flag: "https://flagcdn.com/w320/ru.png"
            }, {
                name: "Rwanda",
                iso2: "RW",
                flag: "https://flagcdn.com/w320/rw.png"
            }, {
                name: "Saint Barth\xe9lemy (Saint-Barth\xe9lemy)",
                iso2: "BL",
                flag: "https://flagcdn.com/w320/bl.png"
            }, {
                name: "Saint Helena",
                iso2: "SH",
                flag: "https://flagcdn.com/w320/sh.png"
            }, {
                name: "Saint Kitts and Nevis",
                iso2: "KN",
                flag: "https://flagcdn.com/w320/kn.png"
            }, {
                name: "Saint Lucia",
                iso2: "LC",
                flag: "https://flagcdn.com/w320/lc.png"
            }, {
                name: "Saint Martin (Saint-Martin (partie fran\xe7aise))",
                iso2: "MF",
                flag: "https://flagcdn.com/w320/mf.png"
            }, {
                name: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
                iso2: "PM",
                flag: "https://flagcdn.com/w320/pm.png"
            }, {
                name: "Saint Vincent and the Grenadines",
                iso2: "VC",
                flag: "https://flagcdn.com/w320/vc.png"
            }, {
                name: "Samoa",
                iso2: "WS",
                flag: "https://flagcdn.com/w320/ws.png"
            }, {
                name: "San Marino",
                iso2: "SM",
                flag: "https://flagcdn.com/w320/sm.png"
            }, {
                name: "S\xe3o Tom\xe9 and Pr\xedncipe (S\xe3o Tom\xe9 e Pr\xedncipe)",
                iso2: "ST",
                flag: "https://flagcdn.com/w320/st.png"
            }, {
                name: "Saudi Arabia (\u202b\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u202c\u200e)",
                iso2: "SA",
                flag: "https://flagcdn.com/w320/sa.png"
            }, {
                name: "Senegal (S\xe9n\xe9gal)",
                iso2: "SN",
                flag: "https://flagcdn.com/w320/sn.png"
            }, {
                name: "Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)",
                iso2: "RS",
                flag: "https://flagcdn.com/w320/rs.png"
            }, {
                name: "Seychelles",
                iso2: "SC",
                flag: "https://flagcdn.com/w320/sc.png"
            }, {
                name: "Sierra Leone",
                iso2: "SL",
                flag: "https://flagcdn.com/w320/sl.png"
            }, {
                name: "Singapore",
                iso2: "SG",
                flag: "https://flagcdn.com/w320/sg.png"
            }, {
                name: "Sint Maarten",
                iso2: "SX",
                flag: "https://flagcdn.com/w320/sx.png"
            }, {
                name: "Slovakia (Slovensko)",
                iso2: "SK",
                flag: "https://flagcdn.com/w320/sk.png"
            }, {
                name: "Slovenia (Slovenija)",
                iso2: "SI",
                flag: "https://flagcdn.com/w320/si.png"
            }, {
                name: "Solomon Islands",
                iso2: "SB",
                flag: "https://flagcdn.com/w320/sb.png"
            }, {
                name: "Somalia (Soomaaliya)",
                iso2: "SO",
                flag: "https://flagcdn.com/w320/so.png"
            }, {
                name: "South Africa",
                iso2: "ZA",
                flag: "https://flagcdn.com/w320/za.png"
            }, {
                name: "South Korea (\ub300\ud55c\ubbfc\uad6d)",
                iso2: "KR",
                flag: "https://flagcdn.com/w320/kr.png"
            }, {
                name: "South Sudan (\u202b\u062c\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062f\u0627\u0646\u202c\u200e)",
                iso2: "SS",
                flag: "https://flagcdn.com/w320/ss.png"
            }, {
                name: "Spain (Espa\xf1a)",
                iso2: "ES",
                flag: "https://flagcdn.com/w320/es.png"
            }, {
                name: "Sri Lanka (\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0)",
                iso2: "LK",
                flag: "https://flagcdn.com/w320/lk.png"
            }, {
                name: "Sudan (\u202b\u0627\u0644\u0633\u0648\u062f\u0627\u0646\u202c\u200e)",
                iso2: "SD",
                flag: "https://flagcdn.com/w320/sd.png"
            }, {
                name: "Suriname",
                iso2: "SR",
                flag: "https://flagcdn.com/w320/sr.png"
            }, {
                name: "Svalbard and Jan Mayen",
                iso2: "SJ",
                flag: "https://flagcdn.com/w320/sj.png"
            }, {
                name: "Swaziland",
                iso2: "SZ",
                flag: "https://flagcdn.com/w320/sz.png"
            }, {
                name: "Sweden (Sverige)",
                iso2: "SE",
                flag: "https://flagcdn.com/w320/se.png"
            }, {
                name: "Switzerland (Schweiz)",
                iso2: "CH",
                flag: "https://flagcdn.com/w320/ch.png"
            }, {
                name: "Taiwan (\u53f0\u7063)",
                iso2: "TW",
                flag: "https://flagcdn.com/w320/tw.png"
            }, {
                name: "Tajikistan",
                iso2: "TJ",
                flag: "https://flagcdn.com/w320/tj.png"
            }, {
                name: "Tanzania",
                iso2: "TZ",
                flag: "https://flagcdn.com/w320/tz.png"
            }, {
                name: "Thailand (\u0e44\u0e17\u0e22)",
                iso2: "TH",
                flag: "https://flagcdn.com/w320/th.png"
            }, {
                name: "Timor-Leste",
                iso2: "TL",
                flag: "https://flagcdn.com/w320/tl.png"
            }, {
                name: "Togo",
                iso2: "TG",
                flag: "https://flagcdn.com/w320/tg.png"
            }, {
                name: "Tokelau",
                iso2: "TK",
                flag: "https://flagcdn.com/w320/tk.png"
            }, {
                name: "Tonga",
                iso2: "TO",
                flag: "https://flagcdn.com/w320/to.png"
            }, {
                name: "Trinidad and Tobago",
                iso2: "TT",
                flag: "https://flagcdn.com/w320/tt.png"
            }, {
                name: "Tunisia (\u202b\u062a\u0648\u0646\u0633\u202c\u200e)",
                iso2: "TN",
                flag: "https://flagcdn.com/w320/tn.png"
            }, {
                name: "Turkey (T\xfcrkiye)",
                iso2: "TR",
                flag: "https://flagcdn.com/w320/tr.png"
            }, {
                name: "Turkmenistan",
                iso2: "TM",
                flag: "https://flagcdn.com/w320/tm.png"
            }, {
                name: "Turks and Caicos Islands",
                iso2: "TC",
                flag: "https://flagcdn.com/w320/tc.png"
            }, {
                name: "Tuvalu",
                iso2: "TV",
                flag: "https://flagcdn.com/w320/tv.png"
            }, {
                name: "U.S. Virgin Islands",
                iso2: "VI",
                flag: "https://flagcdn.com/w320/vi.png"
            }, {
                name: "Uganda",
                iso2: "UG",
                flag: "https://flagcdn.com/w320/ug.png"
            }, {
                name: "Ukraine (\u0423\u043a\u0440\u0430\u0457\u043d\u0430)",
                iso2: "UA",
                flag: "https://flagcdn.com/w320/ua.png"
            }, {
                name: "United Arab Emirates (\u202b\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629\u202c\u200e)",
                iso2: "AE",
                flag: "https://flagcdn.com/w320/ae.png"
            }, {
                name: "United Kingdom",
                iso2: "GB",
                flag: "https://flagcdn.com/w320/gb.png"
            }, {
                name: "United States",
                iso2: "US",
                flag: "https://flagcdn.com/w320/us.png"
            }, {
                name: "United States Minor Outlying Islands",
                iso2: "UM",
                flag: "https://flagcdn.com/w320/um.png"
            }, {
                name: "Uruguay",
                iso2: "UY",
                flag: "https://flagcdn.com/w320/uy.png"
            }, {
                name: "Uzbekistan (O\u02bbzbekiston)",
                iso2: "UZ",
                flag: "https://flagcdn.com/w320/uz.png"
            }, {
                name: "Vanuatu",
                iso2: "VU",
                flag: "https://flagcdn.com/w320/vu.png"
            }, {
                name: "Vatican City (Citt\xe0 del Vaticano)",
                iso2: "VA",
                flag: "https://flagcdn.com/w320/va.png"
            }, {
                name: "Venezuela",
                iso2: "VE",
                flag: "https://flagcdn.com/w320/ve.png"
            }, {
                name: "Vietnam (Vi\u1ec7t Nam)",
                iso2: "VN",
                flag: "https://flagcdn.com/w320/vn.png"
            }, {
                name: "Wallis and Futuna",
                iso2: "WF",
                flag: "https://flagcdn.com/w320/wf.png"
            }, {
                name: "Yemen (\u202b\u0627\u0644\u064a\u0645\u0646\u202c\u200e)",
                iso2: "YE",
                flag: "https://flagcdn.com/w320/ye.png"
            }, {
                name: "Zambia",
                iso2: "ZM",
                flag: "https://flagcdn.com/w320/zm.png"
            }, {
                name: "Zimbabwe",
                iso2: "ZW",
                flag: "https://flagcdn.com/w320/zw.png"
            }];

            function ie() {
                var n = (0, d.Z)(["\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);
                return ie = function() {
                    return n
                }, n
            }

            function ae() {
                var n = (0, d.Z)(["\n  max-width: 50rem;\n  padding: var(--spacing-xl);\n  padding-bottom: var(--spacing-sm);\n\n  .content-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-sm);\n    margin-bottom: var(--spacing-sm);\n  }\n\n  @media (max-width: 768px) {\n    padding: var(--spacing-base);\n    padding-bottom: 0;\n  }\n"]);
                return ae = function() {
                    return n
                }, n
            }
            var re, oe, le = u.ZP.div.withConfig({
                    componentId: "sc-e639df66-0"
                })(ie()),
                ce = u.ZP.div.withConfig({
                    componentId: "sc-e639df66-1"
                })(ae());

            function se(n) {
                var e = n.className,
                    t = (0, c.useRef)(null),
                    i = (0, c.useRef)(null),
                    a = (0, c.useState)(!1),
                    r = a[0],
                    o = a[1],
                    s = (0, c.useState)(),
                    d = s[0],
                    u = s[1];
                (0, c.useEffect)((function() {
                    var n = q.Z.get($);
                    n && (null === n || void 0 === n ? void 0 : n.length) < 3 ? u(te.find((function(e) {
                        return e.iso2 === n
                    }))) : u(te.find((function(n) {
                        return "US" === n.iso2
                    })))
                }), []), (0, c.useEffect)((function() {
                    if (null === d || void 0 === d ? void 0 : d.iso2) {
                        var n = tn();
                        q.Z.set($, null === d || void 0 === d ? void 0 : d.iso2, {
                            expires: 30,
                            domain: n
                        })
                    }
                }), [d]);
                return (0, l.jsxs)(le, {
                    className: e,
                    children: [(0, l.jsx)("div", {
                        className: "desktop-only",
                        children: (0, l.jsx)(cn, {
                            variant: "tertiary",
                            iconPath: (null === d || void 0 === d ? void 0 : d.flag) || "",
                            onClick: function() {
                                return o(!0)
                            },
                            label: (null === d || void 0 === d ? void 0 : d.name) || ""
                        })
                    }), (0, l.jsx)("div", {
                        className: "mobile-only",
                        children: (0, l.jsx)(cn, {
                            variant: "tertiary",
                            size: "sm",
                            fullWidth: !0,
                            iconPath: (null === d || void 0 === d ? void 0 : d.flag) || "",
                            onClick: function() {
                                return o(!0)
                            },
                            label: (null === d || void 0 === d ? void 0 : d.name) || ""
                        })
                    }), (0, l.jsx)(yn, {
                        ref: t,
                        onClose: function() {
                            return o(!1)
                        },
                        open: r,
                        children: (0, l.jsxs)(ce, {
                            children: [(0, l.jsx)("header", {
                                className: "header",
                                children: (0, l.jsx)("h2", {
                                    className: "subheading-1",
                                    children: "Choose your region"
                                })
                            }), (0, l.jsxs)("div", {
                                className: "content-wrapper",
                                children: [(0, l.jsx)(gn, {
                                    ref: i,
                                    label: "Select your region",
                                    options: te.map((function(n) {
                                        return {
                                            label: n.name,
                                            value: n.iso2
                                        }
                                    })),
                                    value: (null === d || void 0 === d ? void 0 : d.iso2) || "",
                                    type: "secondary",
                                    size: "lg",
                                    fullWidth: !0
                                }), (0, l.jsx)(cn, {
                                    size: "lg",
                                    fullWidth: !0,
                                    onClick: function() {
                                        ! function() {
                                            var n, e, a = null === i || void 0 === i || null === (n = i.current) || void 0 === n ? void 0 : n.value;
                                            u(te.find((function(n) {
                                                return n.iso2 === a
                                            }))), null === t || void 0 === t || null === (e = t.current) || void 0 === e || e.close(), o(!1)
                                        }()
                                    },
                                    children: "Save & Update"
                                })]
                            })]
                        })
                    })]
                })
            }

            function de() {
                return de = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, de.apply(this, arguments)
            }
            var ue, me = function(n, e) {
                    return c.createElement("svg", de({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        ref: e
                    }, n), re || (re = c.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
                    })), oe || (oe = c.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "m22 6-10 7L2 6"
                    })))
                },
                pe = (0, c.forwardRef)(me);

            function he() {
                return he = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, he.apply(this, arguments)
            }
            var ge, fe, ve = function(n, e) {
                    return c.createElement("svg", he({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 18 18",
                        ref: e
                    }, n), ue || (ue = c.createElement("path", {
                        fill: "currentColor",
                        d: "m12.408 9.607.449-2.952h-2.805V4.741c0-.808.391-1.596 1.647-1.596h1.276V.632s-1.157-.2-2.263-.2c-2.31 0-3.82 1.415-3.82 3.974v2.25H4.326v2.951h2.568v7.137a10.071 10.071 0 0 0 3.16 0V9.607h2.355Z"
                    })))
                },
                xe = (0, c.forwardRef)(ve);

            function we() {
                return we = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, we.apply(this, arguments)
            }
            var be, ye = function(n, e) {
                    return c.createElement("svg", we({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 18 18",
                        ref: e
                    }, n), ge || (ge = c.createElement("path", {
                        fill: "currentColor",
                        d: "M17.251 5.083c-.041-.92-.19-1.551-.401-2.102a4.218 4.218 0 0 0-.997-1.53 4.244 4.244 0 0 0-1.53-.997c-.55-.215-1.18-.36-2.1-.402C11.299.01 11.005 0 8.659 0c-2.35 0-2.644.01-3.565.052-.92.041-1.55.19-2.1.402a4.198 4.198 0 0 0-1.534.997 4.247 4.247 0 0 0-.996 1.53c-.211.551-.36 1.181-.402 2.102C.021 6.008.01 6.303.01 8.65c0 2.351.01 2.646.052 3.567.042.92.19 1.551.402 2.102.221.567.515 1.052.996 1.53.478.481.962.78 1.53.997.55.215 1.18.36 2.1.402.925.042 1.219.052 3.565.052 2.35 0 2.644-.01 3.565-.052.92-.042 1.55-.19 2.1-.402a4.213 4.213 0 0 0 1.53-.997c.477-.481.778-.963.996-1.53.215-.551.36-1.181.402-2.102.041-.925.052-1.22.052-3.567 0-2.348-.007-2.646-.049-3.567Zm-1.553 7.064c-.039.845-.18 1.306-.298 1.607a2.694 2.694 0 0 1-.65.997 2.75 2.75 0 0 1-.997.651c-.305.118-.765.26-1.606.298-.91.042-1.184.052-3.495.052-2.312 0-2.586-.01-3.496-.052-.844-.038-1.304-.18-1.605-.298a2.692 2.692 0 0 1-.997-.65 2.753 2.753 0 0 1-.65-.998c-.118-.305-.26-.765-.298-1.607-.042-.91-.052-1.184-.052-3.497 0-2.313.01-2.587.052-3.497.038-.845.18-1.306.297-1.607.156-.402.346-.693.65-.997.305-.305.593-.489.998-.651.304-.118.764-.26 1.605-.298.91-.042 1.184-.052 3.496-.052 2.311 0 2.585.01 3.495.052.844.038 1.305.18 1.606.298.401.155.692.346.996.65.305.305.488.593.651.998.118.305.26.765.298 1.607.041.91.051 1.184.051 3.497 0 2.313-.013 2.587-.051 3.497Z"
                    })), fe || (fe = c.createElement("path", {
                        fill: "currentColor",
                        d: "M8.652 4.204A4.443 4.443 0 0 0 4.208 8.65a4.443 4.443 0 1 0 8.887 0 4.441 4.441 0 0 0-4.443-4.446Zm0 7.33a2.884 2.884 0 1 1 .002-5.767 2.884 2.884 0 0 1-.002 5.767Zm4.616-6.464a1.039 1.039 0 1 0 0-2.078 1.039 1.039 0 0 0 0 2.077Z"
                    })))
                },
                je = (0, c.forwardRef)(ye);

            function ke() {
                return ke = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, ke.apply(this, arguments)
            }
            var Ze, _e = function(n, e) {
                    return c.createElement("svg", ke({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        ref: e
                    }, n), be || (be = c.createElement("path", {
                        fill: "currentColor",
                        d: "M3 5.09c0-.605.203-1.105.608-1.5.406-.393.933-.59 1.581-.59.637 0 1.153.194 1.547.582.405.4.608.921.608 1.563 0 .582-.197 1.067-.591 1.455-.405.4-.938.6-1.599.6h-.017c-.637 0-1.152-.2-1.546-.6C3.197 6.2 3 5.697 3 5.09ZM3.226 21V8.855h3.857V21H3.226Zm5.994 0h3.857v-6.782c0-.424.047-.751.14-.982.161-.412.407-.76.738-1.045.33-.285.744-.427 1.242-.427 1.297 0 1.946.915 1.946 2.745V21H21v-6.964c0-1.794-.405-3.154-1.216-4.081-.811-.928-1.883-1.391-3.214-1.391-1.495 0-2.659.672-3.493 2.018v.036h-.017l.017-.036V8.855H9.22c.023.387.035 1.593.035 3.618 0 2.024-.012 4.866-.035 8.527Z"
                    })))
                },
                Ne = (0, c.forwardRef)(_e);

            function Ce() {
                return Ce = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, Ce.apply(this, arguments)
            }
            var Ie, Pe = function(n, e) {
                    return c.createElement("svg", Ce({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 396 396",
                        ref: e
                    }, n), Ze || (Ze = c.createElement("path", {
                        fill: "currentColor",
                        d: "M301.026 37.125h54.582l-119.246 136.29 140.283 185.46h-109.84l-86.031-112.48-98.439 112.48H27.72l127.545-145.777L20.691 37.125H133.32l77.764 102.812 89.942-102.812Zm-19.157 289.08h30.245L116.886 68.079H84.43l197.44 258.126Z"
                    })))
                },
                Se = (0, c.forwardRef)(Pe);

            function ze() {
                return ze = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, ze.apply(this, arguments)
            }
            var Le = function(n, e) {
                return c.createElement("svg", ze({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 18 13",
                    ref: e
                }, n), Ie || (Ie = c.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M16.385 1.524c.267.268.46.6.559.966.37 1.354.356 4.175.356 4.175s0 2.807-.356 4.161a2.168 2.168 0 0 1-1.525 1.524c-1.354.356-6.769.356-6.769.356s-5.401 0-6.769-.37a2.169 2.169 0 0 1-1.525-1.524C0 9.472 0 6.65 0 6.65s0-2.807.356-4.159c.2-.742.798-1.34 1.525-1.54C3.235.595 8.65.595 8.65.595s5.415 0 6.769.37c.365.099.698.292.966.56Zm-4.956 5.127L6.926 9.245V4.058l4.503 2.593Z",
                    clipRule: "evenodd"
                })))
            };

            function Me() {
                var n = (0, d.Z)(["\n  display: flex;\n  gap: var(--spacing-xs);\n\n  @media (max-width: 768px) {\n    width: 100%;\n    justify-content: center;\n  }\n"]);
                return Me = function() {
                    return n
                }, n
            }
            var Re = {
                email: pe,
                facebook: xe,
                linkedin: Ne,
                twitter: Se,
                instagram: je,
                youtube: (0, c.forwardRef)(Le)
            };

            function Ee(n) {
                var e = n.socialLinks,
                    t = void 0 === e ? [] : e;
                return (0, l.jsx)(Te, {
                    role: "group",
                    children: t.map((function(n) {
                        var e = Re[n.label.toLowerCase()];
                        return (0, l.jsx)(cn, {
                            tag: "a",
                            href: n.url,
                            icon: e && (0, l.jsx)(e, {}),
                            label: n.label,
                            hideLabel: !0,
                            type: "tertiary",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, n.id)
                    }))
                })
            }
            var Te = u.ZP.div.withConfig({
                    componentId: "sc-bce3523b-0"
                })(Me()),
                Oe = t(1664),
                Be = t.n(Oe),
                Ae = t(2323);

            function He(n) {
                Ae.y.logTypedEvent("Marketing Page : Generic Click", n)
            }
            var Fe = t(5602),
                Ue = t(8502);

            function De(n) {
                return (0, Fe.nJ)(n.locale || Fe.Dh)
            }

            function We(n, e, t) {
                var i, a = (null === n || void 0 === n || null === (i = n.data) || void 0 === i ? void 0 : i.attributes) || n,
                    r = (!t || t.startsWith("#") || t.startsWith("/") ? t : "#".concat(t)) || "";
                if (!(null === a || void 0 === a ? void 0 : a.Slug) && !e && !r) throw new Error("Link has no page, externalUrl, or anchor");
                var o = e;
                return (null === o || void 0 === o ? void 0 : o.startsWith("www")) && (o = "https://" + o), (null === a || void 0 === a ? void 0 : a.Slug) ? function(n, e) {
                    return e && e.startsWith("#") && (e = e.slice(1)), [(0, Ue.Z)(n).join("/"), e].filter(Boolean).join("#")
                }(a, t) : [o, r || ""].join("")
            }

            function Ge() {
                var n = (0, d.Z)(["\n  cursor: pointer;\n"]);
                return Ge = function() {
                    return n
                }, n
            }

            function qe() {
                var n = (0, d.Z)(["\n  &:before,\n  &:after {\n    content: attr(data-label);\n    content: attr(data-label) / '\"\"';\n    alt: '\"\"';\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: transform var(--animation-duration) var(--animation-timing);\n  }\n\n  &:before {\n    transform: translateY(0%);\n  }\n\n  &:after {\n    color: var(--color-action-inverse);\n    transform: translateY(100%);\n  }\n\n  .theme-light & {\n    &:before {\n      color: var(--color-action);\n    }\n  }\n\n  .theme-dark & {\n    &:before {\n      color: var(--color-action-inverse);\n    }\n  }\n\n  .active & {\n    &:before {\n      transform: translateY(-100%);\n    }\n\n    &:after {\n      transform: translateY(0%);\n    }\n  }\n\n  .visually-hidden {\n    opacity: 0;\n  }\n"]);
                return qe = function() {
                    return n
                }, n
            }
            var Ke = u.ZP.a.withConfig({
                    componentId: "sc-7af8240a-0"
                })(Ge()),
                Ye = u.ZP.div.withConfig({
                    componentId: "sc-7af8240a-1"
                })(qe());

            function Ve(n) {
                var e, t, i = n.page,
                    a = n.text,
                    o = n.externalUrl,
                    c = n.children,
                    d = n.useMenuTitle,
                    u = n.className,
                    m = n.callback,
                    p = n.anchor,
                    h = n.useChildren,
                    g = n.animated,
                    f = n.genericClickDetails,
                    v = n.target,
                    x = We(i, o, p),
                    w = (null === i || void 0 === i || null === (e = i.data) || void 0 === e ? void 0 : e.attributes) || i,
                    b = (null === w || void 0 === w ? void 0 : w.Slug) ? h ? c : !!d && (null === (t = w.metadata) || void 0 === t ? void 0 : t.menuTitle) || a || w.Title || c : h && c || a || c,
                    y = function() {
                        f && He({
                            generic_page_details: "",
                            generic_click_details: f
                        }), m && m()
                    },
                    j = x.startsWith("#") ? "_self" : v;
                return (0, l.jsx)(l.Fragment, {
                    children: (null === w || void 0 === w ? void 0 : w.Slug) ? (0, l.jsx)(Be(), (0, s.Z)((0, r.Z)({
                        passHref: !0
                    }, Je(x, w)), {
                        children: (0, l.jsx)(Ke, {
                            className: (0, an.Z)(u, "strapi-link"),
                            onClick: y,
                            children: g ? (0, l.jsx)(Ye, {
                                "data-label": b,
                                children: (0, l.jsx)("span", {
                                    className: "visually-hidden",
                                    children: b
                                })
                            }) : b
                        })
                    })) : (0, l.jsx)(Ke, (0, s.Z)((0, r.Z)({
                        href: x,
                        target: j || "_blank"
                    }, "_self" !== v ? {
                        rel: "noopener noreferrer"
                    } : {}), {
                        className: (0, an.Z)(u, "strapi-link"),
                        onClick: y,
                        children: g ? (0, l.jsx)(Ye, {
                            "data-label": b,
                            children: (0, l.jsx)("span", {
                                className: "visually-hidden",
                                children: b
                            })
                        }) : b
                    }))
                })
            }

            function Je(n, e) {
                return {
                    href: Jn(n, De(e))
                }
            }

            function $e() {
                var n = (0, d.Z)(["\n  display: none;\n  margin-left: 0.5rem;\n  vertical-align: middle;\n  width: 1rem;\n  height: 1rem;\n"]);
                return $e = function() {
                    return n
                }, n
            }

            function Xe() {
                var n = (0, d.Z)(["\n  ", ";\n"]);
                return Xe = function() {
                    return n
                }, n
            }

            function Qe() {
                var n = (0, d.Z)(["\n  ", ";\n  height: 0.2rem;\n"]);
                return Qe = function() {
                    return n
                }, n
            }

            function nt() {
                var n = (0, d.Z)(["\n  display: flex;\n  padding: 6rem max(env(safe-area-inset-right), calc(5rem + var(--rem-scale-viewport-half-excess))) 5rem\n    max(env(safe-area-inset-left), calc(5rem + var(--rem-scale-viewport-half-excess)));\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  color: #ffffff;\n  background-color: #000000;\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 350;\n  line-height: 110%;\n  letter-spacing: -0.036rem;\n\n  @media (max-width: 768px) {\n    padding: 4.8rem max(env(safe-area-inset-right), 3.4rem) 4.8rem max(env(safe-area-inset-left), 3.4rem);\n    flex-direction: column;\n    font-size: 2.4rem;\n    font-style: normal;\n    font-weight: 300;\n    line-height: 120%;\n    letter-spacing: -0.072rem;\n  }\n\n  .nav-wrapper {\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n    gap: var(--spacing-lg);\n    width: 100%;\n    margin-bottom: 4.5rem;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    @media (max-width: 768px) {\n      display: flex;\n      gap: 1.1rem;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      width: 100%;\n      margin-bottom: var(--spacing-base);\n    }\n  }\n\n  .nav-inner-wrapper {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width: 100%;\n\n    @media (max-width: 768px) {\n      justify-content: center;\n      flex-direction: column;\n    }\n  }\n\n  .pref .label {\n    @media (min-width: 769px) {\n      max-width: 14rem;\n    }\n  }\n\n  .selectors {\n    gap: 1rem;\n\n    @media (max-width: 768px) {\n      flex-direction: column;\n      width: 100%;\n    }\n  }\n\n  .lang {\n    margin: 0 1rem 0 0;\n\n    @media (max-width: 768px) {\n      margin: 0 0 1.8rem 0;\n      width: 100%;\n    }\n  }\n\n  .site-footer-nav {\n    max-width: 40rem;\n\n    @media (max-width: 768px) {\n      width: 100%;\n    }\n  }\n\n  .nav-details {\n    &[open] {\n      margin-bottom: var(--spacing-base);\n\n      @media (max-width: 768px) {\n        margin-bottom: var(--spacing-sm);\n\n        .nav-title-link,\n        .nav-title {\n          ", " {\n            display: none;\n          }\n          ", " {\n            display: inline-block;\n          }\n        }\n      }\n    }\n  }\n\n  .nav-summary {\n    display: block;\n    margin-bottom: 1.1rem;\n\n    ::-webkit-details-marker {\n      display: none;\n    }\n\n    &:details-marker {\n      display: none;\n    }\n\n    @media (max-width: 768px) {\n      &:has(> :not([href]).strapi-link) {\n        .nav-title-link,\n        .nav-title {\n          ", " {\n            display: none;\n          }\n        }\n      }\n    }\n  }\n\n  .nav-title-link,\n  .nav-title {\n    display: inline-block;\n    font: var(--font-label-2);\n    margin-bottom: 3rem;\n    letter-spacing: 0.036rem;\n\n    @media (max-width: 768px) {\n      font: var(--font-label-4-light);\n      margin-bottom: 0;\n\n      ", " {\n        display: inline-block;\n      }\n    }\n  }\n\n  .nav-list {\n    font: var(--font-label-2);\n    opacity: 50%;\n\n    @media (max-width: 768px) {\n      letter-spacing: 0.04rem;\n    }\n\n    li {\n      margin-bottom: 0.9rem;\n    }\n  }\n\n  .site-meta {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--spacing-base);\n\n    .nav-inner-wrapper {\n      width: auto;\n\n      @media (max-width: 960px) {\n        flex-wrap: wrap;\n        margin-top: 5rem;\n        max-width: 120rem;\n        width: 65rem;\n      }\n\n      @media (max-width: 768px) {\n        width: 100%;\n      }\n    }\n\n    @media (max-width: 1300px) {\n      align-items: end;\n    }\n  }\n\n  .contact-meta {\n    font-size: var(--font-size-label-2);\n    font-style: normal;\n    white-space: nowrap;\n\n    @media (max-width: 1300px) {\n      white-space: normal;\n      text-align: right;\n      line-height: 1.3;\n\n      .pipe {\n        display: none;\n      }\n\n      .mobile-line {\n        display: block;\n        white-space: nowrap;\n      }\n    }\n    @media (max-width: 960px) {\n      width: 65rem;\n    }\n    @media (max-width: 768px) {\n      text-align: center;\n      width: 100%;\n    }\n  }\n\n  .sub-nav-list {\n    margin-top: 1rem;\n  }\n\n  .sub-nav-link {\n    &:before {\n      content: '';\n      display: inline-block;\n      width: 0.5em;\n      height: 0.5em;\n      border-left: 1px solid currentColor;\n      border-bottom: 1px solid currentColor;\n      margin-right: 0.3em;\n      vertical-align: middle;\n      transform: translateY(-0.25em);\n    }\n  }\n\n  .apps-store-wrapper {\n    display: flex;\n    gap: var(--spacing-sm);\n    width: 100%;\n\n    @media (min-width: 769px) and (max-width: 1300px) {\n      margin-bottom: -4.5rem;\n    }\n    @media (max-width: 768px) {\n      gap: var(--spacing-xs);\n    }\n  }\n\n  .app-store-button {\n    display: inline-block;\n    width: 128px;\n\n    @media (max-width: 768px) {\n      width: 100%;\n    }\n  }\n"]);
                return nt = function() {
                    return n
                }, n
            }

            function et(n) {
                var e = n.footer,
                    t = n.localizations,
                    i = void 0 === t ? [] : t,
                    a = n.locales,
                    o = void 0 === a ? [] : a,
                    d = function(n, e) {
                        n.preventDefault(), k.forEach((function() {
                            u(e.id)
                        }))
                    },
                    u = function(n) {
                        m && k.forEach((function(e, t) {
                            if ("object" === typeof e && Object.hasOwnProperty.call(e, "current")) {
                                var i = null === e || void 0 === e ? void 0 : e.current;
                                n ? t !== n || i.open ? i.open = !1 : i.open = !0 : i.open = !1
                            }
                        }))
                    },
                    m = B().isMobile,
                    p = (null === e || void 0 === e ? void 0 : e.navigationGroups) || [],
                    h = (null === e || void 0 === e ? void 0 : e.socialLinks) || [],
                    g = e || {},
                    f = g.streetAddress,
                    v = g.country,
                    x = g.city,
                    b = g.state,
                    y = g.zipCode,
                    j = g.phoneNumber,
                    k = new Map,
                    Z = P().megaMenuHasTrappedFocus;
                p.forEach((function(n) {
                    k.set(n.id, (0, c.createRef)())
                })), (0, c.useEffect)((function() {
                    m ? u(null) : k.forEach((function(n) {
                        "object" === typeof n && Object.hasOwnProperty.call(n, "current") && ((null === n || void 0 === n ? void 0 : n.current).open = !0)
                    }))
                }), [m, p]);
                var _ = [f, [x, [b, y].filter(Boolean).join(" "), v].filter(Boolean).join(", "), j, "\xa9\ufe0fPatreon"].filter(Boolean);
                return (0, l.jsxs)(ot, {
                    "data-theme": w.dark,
                    inert: Z ? "" : void 0,
                    children: [(0, l.jsx)("div", {
                        className: "nav-wrapper",
                        children: p.map((function(n) {
                            return (0, l.jsx)("div", {
                                className: "site-footer-nav",
                                children: (0, l.jsxs)("details", {
                                    ref: k.get(n.id),
                                    className: "nav-details",
                                    children: [n.titleLink ? (0, l.jsx)("summary", (0, s.Z)((0, r.Z)({}, m ? {} : {
                                        role: "heading",
                                        "aria-level": 4
                                    }), {
                                        className: "nav-summary",
                                        onClick: function(e) {
                                            return d(e, n)
                                        },
                                        children: (0, l.jsxs)(Ve, (0, s.Z)((0, r.Z)({}, n.titleLink), {
                                            className: "nav-title-link",
                                            useChildren: !0,
                                            children: [n.title || n.titleLink.text, (0, l.jsx)(at, {}), (0, l.jsx)(rt, {})]
                                        }))
                                    })) : (0, l.jsx)("summary", (0, s.Z)((0, r.Z)({}, m ? {} : {
                                        role: "heading",
                                        "aria-level": 4
                                    }), {
                                        className: "nav-summary",
                                        onClick: function(e) {
                                            return d(e, n)
                                        },
                                        children: (0, l.jsxs)("p", {
                                            className: "nav-title",
                                            children: [n.title, (0, l.jsx)(at, {}), (0, l.jsx)(rt, {})]
                                        })
                                    })), (0, l.jsx)("ul", {
                                        className: "nav-list",
                                        children: n.linksWithAnchors.map((function(n) {
                                            return (0, l.jsxs)("li", {
                                                children: [(0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, n), {
                                                    useMenuTitle: !0,
                                                    callback: function() {
                                                        return u()
                                                    }
                                                })), n.links && n.links.length > 0 && (0, l.jsx)("ul", {
                                                    className: "sub-nav-list",
                                                    children: n.links.map((function(n) {
                                                        return (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, n), {
                                                                className: "sub-nav-link",
                                                                callback: function() {
                                                                    return u()
                                                                }
                                                            }))
                                                        }, n.id)
                                                    }))
                                                })]
                                            }, n.id)
                                        }))
                                    })]
                                })
                            }, n.id)
                        }))
                    }), (0, l.jsx)("div", {
                        className: "nav-wrapper",
                        children: (0, l.jsx)("div", {
                            className: "apps-store-wrapper",
                            children: (0, l.jsx)(D, {
                                className: "app-store-button"
                            })
                        })
                    }), (0, l.jsxs)("div", {
                        className: "nav-wrapper site-meta",
                        children: [(0, l.jsxs)("div", {
                            className: "nav-inner-wrapper selectors",
                            children: [(0, l.jsx)(ee, {
                                className: "pref",
                                localizations: i,
                                locales: o
                            }), (0, l.jsx)(se, {
                                className: "pref"
                            }), (0, l.jsx)(Zn, {
                                className: "pref"
                            })]
                        }), (0, l.jsx)(Ee, {
                            socialLinks: h
                        }), (0, l.jsx)("address", {
                            className: "contact-meta",
                            children: _.map((function(n, e) {
                                return (0, l.jsxs)(c.Fragment, {
                                    children: [(0, l.jsx)("span", {
                                        className: "mobile-line",
                                        children: n
                                    }), e < _.length - 1 && (0, l.jsxs)(l.Fragment, {
                                        children: [" ", (0, l.jsx)("span", {
                                            className: "pipe",
                                            children: "|"
                                        }), " "]
                                    })]
                                }, e)
                            }))
                        })]
                    })]
                })
            }
            var tt, it = (0, u.iv)($e()),
                at = (0, u.ZP)(T).withConfig({
                    componentId: "sc-83a34264-0"
                })(Xe(), it),
                rt = (0, u.ZP)(M).withConfig({
                    componentId: "sc-83a34264-1"
                })(Qe(), it),
                ot = u.ZP.footer.withConfig({
                    componentId: "sc-83a34264-2"
                })(nt(), at, rt, at, at),
                lt = t(253),
                ct = t(2437);

            function st(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return Math.min(Math.max(n, Math.min(e, t)), Math.max(e, t))
            }

            function dt(n, e) {
                for (var t = 0; n && (t += n.offsetTop, (n = n.offsetParent) !== e););
                return t
            }

            function ut() {
                var n = (0, c.useRef)(null),
                    e = (0, c.useCallback)((function(e) {
                        return n.current ? function(n, e) {
                            var t = n.getBoundingClientRect(),
                                i = 0,
                                a = w.light;
                            return document.querySelectorAll("[data-theme]").forEach((function(n) {
                                var r = n,
                                    o = dt(r) - e,
                                    l = o + r.offsetHeight,
                                    c = o - t.top,
                                    s = st(l - t.top, 0, t.height) - st(c, 0, t.height);
                                s > i && (i = s, a = r.dataset.theme)
                            })), a
                        }(n.current, e) : w.light
                    }), [n]);
                return [n, e]
            }

            function mt() {
                return mt = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, mt.apply(this, arguments)
            }
            var pt, ht = function(n, e) {
                    return c.createElement("svg", mt({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 38 42",
                        ref: e
                    }, n), tt || (tt = c.createElement("path", {
                        fill: "currentColor",
                        d: "M36.975 12.392c0 .312.021.627-.004.937-.03.361-.082.722-.149 1.08a22.535 22.535 0 0 1-.331 1.512 8.59 8.59 0 0 1-.359 1.084c-.313.767-.66 1.518-1.117 2.21-.282.427-.57.849-.864 1.266a4.12 4.12 0 0 1-.37.431c-.225.238-.442.483-.686.695a13.5 13.5 0 0 1-1.123.905c-.356.25-.756.431-1.12.674-.404.268-.866.384-1.296.587-.384.18-.795.24-1.186.38-.498.18-1.021.222-1.531.331-.544.117-1.097.203-1.643.315-.449.09-.894.198-1.34.298-.254.056-.51.098-.756.173-.304.093-.6.214-.896.324-.201.072-.412.126-.604.219-.28.14-.544.315-.823.464-.457.242-.838.585-1.184.96-.292.32-.546.681-.8 1.036-.418.587-.706 1.244-.964 1.916-.254.657-.487 1.322-.725 1.986-.221.625-.43 1.252-.655 1.875a63.989 63.989 0 0 1-.618 1.615 13.447 13.447 0 0 1-1.12 2.215c-.331.531-.685 1.049-1.142 1.478-.366.343-.72.704-1.17.944-.446.24-.906.448-1.4.557a6.635 6.635 0 0 1-1.807.129c-.229-.012-.455-.075-.684-.117-.137-.026-.276-.047-.409-.089-.112-.035-.215-.097-.322-.151-.302-.147-.624-.264-.9-.448a8.802 8.802 0 0 1-.96-.776c-.554-.492-.97-1.103-1.342-1.74a13.04 13.04 0 0 1-.681-1.319c-.192-.436-.336-.893-.492-1.345a24.916 24.916 0 0 1-.34-1.063c-.092-.317-.165-.641-.243-.963-.073-.298-.15-.594-.212-.895-.112-.536-.215-1.073-.32-1.609a35.827 35.827 0 0 1-.133-.68c-.06-.34-.114-.681-.171-1.022-.044-.254-.092-.506-.13-.76-.044-.28-.08-.56-.124-.839-.036-.242-.078-.483-.112-.725-.032-.226-.06-.452-.089-.678a70.008 70.008 0 0 1-.094-.73c-.03-.236-.055-.471-.082-.707l-.096-.818c-.011-.098-.023-.193-.03-.291-.034-.401-.068-.804-.1-1.208a20.67 20.67 0 0 1-.05-.75c-.021-.39-.042-.777-.05-1.166A94.453 94.453 0 0 1 1 18.18c0-.378.002-.755.027-1.13.026-.392.08-.784.122-1.176.034-.312.064-.622.105-.934.023-.175.064-.348.1-.52.092-.432.176-.863.281-1.292.076-.31.181-.61.266-.916.157-.571.393-1.11.624-1.653.105-.25.235-.49.367-.725.186-.329.366-.66.576-.97.259-.378.533-.744.823-1.098a12.9 12.9 0 0 1 .873-.965c.24-.24.512-.448.77-.665.254-.212.501-.433.77-.624.412-.296.835-.576 1.263-.849.249-.158.514-.294.774-.434.405-.219.81-.44 1.22-.648.26-.13.527-.244.794-.354.683-.277 1.364-.557 2.055-.816.46-.17.932-.303 1.399-.452.24-.077.475-.161.717-.229.2-.056.402-.086.604-.133.22-.05.434-.119.656-.16.299-.059.603-.1.907-.147.34-.052.679-.105 1.02-.152.139-.019.283-.02.425-.03.47-.026.944-.054 1.414-.077.188-.01.382-.051.565-.019.443.08.889.017 1.332.05.428.03.853.076 1.278.127.306.038.608.103.914.15.268.04.535.065.802.107.215.035.43.081.645.128.46.103.919.196 1.374.317.404.11.797.275 1.204.37.469.113.899.332 1.351.479.462.149.86.424 1.3.608.515.217.96.546 1.418.858.347.238.685.492 1 .77.467.41.92.836 1.356 1.28.258.26.478.564.713.85.38.464.658.993.928 1.523.215.424.393.874.537 1.329.12.373.156.774.245 1.156.098.42.096.844.073 1.27l-.012.008z"
                    })))
                },
                gt = (0, c.forwardRef)(ht);

            function ft() {
                return ft = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, ft.apply(this, arguments)
            }
            var vt = function(n, e) {
                    return c.createElement("svg", ft({
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlSpace: "preserve",
                        style: {
                            enableBackground: "new 0 0 1826.3 619.9"
                        },
                        viewBox: "0 0 1826.3 619.9",
                        ref: e
                    }, n), pt || (pt = c.createElement("path", {
                        d: "M202.5 226c0-10 7.4-16.8 19-16.8H277c50.3 0 84.5 27.7 84.5 68.4 0 40-33.9 69.7-84.5 69.7h-7.7c-19.4 0-29.4 10-29.4 26.1V419c0 12.9-7.4 21-18.7 21-11.3 0-18.7-8.1-18.7-21V226zm37.4 57.8c0 20.3 10.3 30 30 30h4.8c27.7 0 48.1-11.3 48.1-36.1s-20.3-36.1-48.1-36.1H270c-19.7 0-30 9.7-30 30v12.2zm121.7 138.4c0 10.6 7.4 17.7 18.7 17.7 7.4 0 14.2-4.8 18.1-14.8l6.8-18.1c5.5-14.5 15.2-21.3 25.8-21.3h61.3c10.6 0 20.3 6.8 25.8 21.3l6.8 18.1c3.9 10 10.6 14.8 18.1 14.8 11.3 0 18.7-7.1 18.7-17.7 0-2.9-.6-6.5-1.9-10l-73.2-190.4c-4.5-11.6-14.8-17.4-24.8-17.4s-20.3 5.8-24.8 17.4l-73.2 190.4c-1.6 3.6-2.2 7.1-2.2 10zm71.3-86.5c0-3.5 1-6.8 2.6-11.6l13.9-38.4c2.6-7.4 7.1-11 12.3-11s9.7 3.5 12.3 11l13.9 38.4c1.6 4.8 2.6 8.1 2.6 11.6 0 9.7-5.5 16.5-20 16.5h-17.4c-14.7 0-20.2-6.8-20.2-16.5zm116.5-109c0-10.3 7.4-17.4 19.4-17.4h148.4c11.9 0 19.4 7.1 19.4 17.4s-7.4 17.4-19.4 17.4h-24.8c-19.7 0-30.3 10-30.3 32.9v141.7c0 13.2-7.4 21.3-19 21.3s-19-8.1-19-21.3V277c0-22.9-10.6-32.9-30.3-32.9H569c-12.2 0-19.6-7.1-19.6-17.4zm222 192.3c0 12.9 7.4 21 18.7 21s18.7-8.1 18.7-21v-51.3c0-14.5 8.4-20.7 18.7-20.7h2.6c6.8 0 13.6 4.2 17.7 10.3l49 72c4.5 6.8 10.3 10.6 17.7 10.6 9.7 0 17.4-8.1 17.4-17.7 0-3.9-1.3-8.1-4.2-12.3l-32.6-45.8c-3.9-5.5-5.5-10-5.5-13.9 0-8.1 7.1-13.9 15.5-20 15.2-11.3 31.6-26.1 31.6-54.5 0-39.7-31-66.5-82-66.5h-64.9c-11.6 0-18.7 6.8-18.7 16.8v193zm37.4-138.1v-9.7c0-21 11-29.7 27.7-29.7h16.1c27.7 0 45.5 10.3 45.5 34.2s-18.7 34.8-46.5 34.8h-15.2c-16.6.1-27.6-8.6-27.6-29.6zm175.9 137.4V226c0-10 7.1-16.8 18.7-16.8h122c11.6 0 18.7 6.8 18.7 16.8s-7.1 16.8-18.7 16.8h-77.1c-15.2 0-26.1 9-26.1 26.1v7.1c0 17.1 11 26.1 26.1 26.1h59.7c11.6 0 18.7 6.8 18.7 16.8s-7.1 16.8-18.7 16.8h-57.4c-15.2 0-28.4 9.4-28.4 28.4v9c0 19 13.2 28.4 28.4 28.4h74.9c11.6 0 18.7 6.8 18.7 16.8s-7.1 16.8-18.7 16.8h-122c-11.7 0-18.8-6.8-18.8-16.8zm181.6-96.1c0-69.7 52.3-117.8 113.6-117.8s113.6 48.1 113.6 117.8S1341.2 440 1279.9 440s-113.6-48.1-113.6-117.8zm42.6 0c0 49 29 80.3 71 80.3 41.9 0 71-31.3 71-80.3 0-49.4-29-80.3-71-80.3-41.9-.1-71 30.9-71 80.3zm229.4 96.8c0 12.9 7.4 21 18.7 21s18.7-8.1 18.7-21v-98.7c0-11.9 7.1-17.7 14.5-17.7 5.8 0 10.6 3.2 14.2 9l61.9 103.6c8.4 14.2 16.1 24.8 31.9 24.8 15.2 0 26.1-11 26.1-28.7V225.4c0-12.9-7.4-21-18.7-21-11.3 0-18.7 8.1-18.7 21v98.7c0 11.9-7.1 17.7-14.5 17.7-5.8 0-10.7-3.2-14.2-9l-61.9-103.6c-8.4-14.2-16.1-24.8-31.9-24.8-15.2 0-26.1 11-26.1 28.7V419z"
                    })))
                },
                xt = (0, c.forwardRef)(vt);

            function wt() {
                var n = (0, An.useRouter)().locale;
                return (0, c.useMemo)((function() {
                    return {
                        page: {
                            Slug: "home",
                            locale: n ? (0, Fe.Jb)(n) : Fe.Dh
                        }
                    }
                }), [n])
            }

            function bt() {
                var n = (0, d.Z)(["\n  border: none;\n  width: 20px;\n  height: 20px;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  position: relative;\n\n  :hover {\n    opacity: 0.7;\n  }\n\n  .burger {\n    position: absolute;\n    inset: 0;\n  }\n\n  .bun {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background-color: currentColor;\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 300ms;\n    transition-duration: 300ms;\n  }\n\n  .bun:nth-of-type(1) {\n    transform: translateY(calc(-50% - 3px));\n\n    &[data-open='true'] {\n      transform: rotate(45deg);\n    }\n  }\n\n  .bun:nth-of-type(2) {\n    transform: translateY(calc(-50% + 3px));\n\n    &[data-open='true'] {\n      transform: rotate(-45deg);\n    }\n  }\n"]);
                return bt = function() {
                    return n
                }, n
            }
            var yt = u.ZP.button.withConfig({
                componentId: "sc-4e93ed3a-0"
            })(bt());

            function jt(n) {
                var e = n.open,
                    t = void 0 !== e && e,
                    i = n.onClick,
                    a = (0, b.Z)(n, ["open", "onClick"]);
                return (0, l.jsxs)(yt, (0, s.Z)((0, r.Z)({}, a), {
                    onClick: i,
                    children: [(0, l.jsx)("span", {
                        className: "sr-only",
                        children: "Open menu"
                    }), (0, l.jsx)("span", {
                        className: "burger",
                        children: [0, 1].map((function(n) {
                            return (0, l.jsx)("span", {
                                "data-open": t,
                                className: "bun"
                            }, n)
                        }))
                    })]
                }))
            }
            var kt, Zt = t(9293);

            function _t() {
                return _t = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, _t.apply(this, arguments)
            }
            var Nt = function(n, e) {
                    return c.createElement("svg", _t({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 19 19",
                        ref: e
                    }, n), kt || (kt = c.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M4 9.5h10.5m-5.25 5.25L14.5 9.5 9.25 4.25"
                    })))
                },
                Ct = (0, c.forwardRef)(Nt);

            function It() {
                var n = (0, d.Z)(["\n  white-space: nowrap;\n"]);
                return It = function() {
                    return n
                }, n
            }

            function Pt() {
                var n = (0, d.Z)(["\n          .hoverable & {\n            transition: transform var(--animation-duration-fast) var(--animation-timing);\n          }\n\n          .hoverable:hover &,\n          .hoverable.active & {\n            transform: translateX(66%);\n          }\n        "]);
                return Pt = function() {
                    return n
                }, n
            }

            function St() {
                var n = (0, d.Z)(["\n  display: inline-block;\n  width: 0.8em;\n  height: 0.8em;\n  margin-left: 0.2em;\n  margin-top: -0.1em;\n\n  ", "\n"]);
                return St = function() {
                    return n
                }, n
            }
            var zt = u.ZP.span.withConfig({
                    componentId: "sc-19886acc-0"
                })(It()),
                Lt = (0, u.ZP)(Ct).withConfig({
                    componentId: "sc-19886acc-1"
                })(St(), (function(n) {
                    return n.$animateOnHover ? (0, u.iv)(Pt()) : void 0
                })),
                Mt = c.forwardRef((function(n, e) {
                    var t = n.children,
                        i = n.className,
                        a = n.animateOnHover;
                    return (0, l.jsxs)(zt, {
                        className: i,
                        ref: e,
                        children: [t, (0, l.jsx)(Lt, {
                            className: "arrow",
                            $animateOnHover: a
                        })]
                    })
                }));

            function Rt(n) {
                var e = n.children,
                    t = n.className,
                    i = n.animateOnHover,
                    a = (e || "").split(/\s+/),
                    r = a[a.length - 1] || "",
                    o = a.slice(0, a.length - 1).concat("").join(" ");
                return (0, l.jsxs)("span", {
                    className: (0, an.Z)({
                        hoverable: i
                    }, t),
                    children: [o, (0, l.jsx)(Mt, {
                        animateOnHover: i,
                        children: r
                    })]
                })
            }

            function Et() {
                var n = (0, d.Z)(["\n  cursor: pointer;\n\n  .title {\n    font: var(--font-mega-nav-anchor);\n    letter-spacing: -0.016rem;\n  }\n\n  .subtitle {\n    color: var(--color-action-muted);\n    font: var(--font-label-0);\n    transition: color var(--animation-duration) var(--animation-timing);\n  }\n\n  &:hover {\n    .subtitle {\n      color: var(--color-action);\n    }\n  }\n"]);
                return Et = function() {
                    return n
                }, n
            }
            var Tt = u.ZP.a.withConfig({
                componentId: "sc-3dc6b2de-0"
            })(Et());

            function Ot(n) {
                var e, t = n.page,
                    i = n.externalUrl,
                    a = n.title,
                    r = n.subtitle,
                    o = n.className,
                    c = n.callback,
                    s = n.anchor,
                    d = n.genericClickDetails,
                    u = We(t, i, s),
                    m = (null === t || void 0 === t || null === (e = t.data) || void 0 === e ? void 0 : e.attributes) || t,
                    p = function() {
                        d && He({
                            generic_page_details: "",
                            generic_click_details: d
                        }), c && c()
                    };
                return (0, l.jsx)(l.Fragment, {
                    children: (null === m || void 0 === m ? void 0 : m.Slug) ? (0, l.jsx)(Be(), {
                        href: u,
                        locale: De(m),
                        passHref: !0,
                        children: (0, l.jsxs)(Tt, {
                            className: (0, an.Z)(o, "strapi-anchor-link"),
                            onClick: p,
                            children: [(a || (null === m || void 0 === m ? void 0 : m.Title)) && (0, l.jsx)("div", {
                                className: "title",
                                children: a || (null === m || void 0 === m ? void 0 : m.Title)
                            }), r && (0, l.jsx)("div", {
                                className: "subtitle",
                                children: r
                            })]
                        })
                    }) : (0, l.jsxs)(Tt, {
                        href: u,
                        className: (0, an.Z)(o, "strapi-anchor-link"),
                        onClick: p,
                        children: [(a || (null === m || void 0 === m ? void 0 : m.Title)) && (0, l.jsx)("div", {
                            className: "title",
                            children: a || (null === m || void 0 === m ? void 0 : m.Title)
                        }), r && (0, l.jsx)("div", {
                            className: "subtitle",
                            children: r
                        })]
                    })
                })
            }

            function Bt() {
                var n = (0, d.Z)(["\n  position: absolute;\n  top: -1.3rem;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: var(--color-white);\n  pointer-events: none;\n"]);
                return Bt = function() {
                    return n
                }, n
            }

            function At() {
                var n = (0, d.Z)(["\n  width: 100%;\n  height: auto;\n  --mega-padding-top: 9.5rem;\n  --mega-padding-right: max(env(safe-area-inset-right), var(--spacing-lg));\n  --mega-padding-bottom: var(--spacing-base);\n  --mega-padding-left: max(env(safe-area-inset-left), var(--spacing-lg));\n  --mega-padding: var(--mega-padding-top) var(--mega-padding-right) var(--mega-padding-bottom) var(--mega-padding-left);\n  padding: var(--mega-padding);\n  z-index: -1;\n\n  position: absolute;\n  top: 0;\n  transform: translateY(-25%);\n  transition-property: transform, opacity, visibility;\n  transition-duration: var(--animation-duration-fast);\n  transition-timing-function: var(--animation-timing);\n  opacity: 0;\n  visibility: hidden;\n\n  &.active {\n    transform: translateY(0);\n    opacity: 1;\n    visibility: visible;\n  }\n\n  .menu-wrapper {\n    position: relative;\n    margin: 0 calc(var(--mega-padding-right) * -1) calc(var(--mega-padding-bottom) * -1)\n      calc(var(--mega-padding-left) * -1);\n  }\n\n  .spacer {\n    width: 100%;\n    height: var(--spacing-lg);\n  }\n\n  .section-wrapper {\n    height: 0;\n    overflow: hidden;\n    opacity: 0;\n    transform: translateY(calc(var(--spacing-base) * -1));\n    transition: transform var(--animation-duration-slow) var(--animation-timing),\n      opacity var(--animation-duration-fast) var(--animation-timing);\n\n    &:focus-visible {\n      outline: none;\n    }\n\n    &.active {\n      height: auto;\n      opacity: 1;\n      transform: translateY(0rem);\n      margin-top: calc(var(--spacing-lg) * -1);\n    }\n  }\n\n  .section-nav-list {\n    display: grid;\n    gap: var(--spacing-lg);\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n    padding: var(--spacing-lg) var(--mega-padding-right) var(--mega-padding-bottom) var(--mega-padding-left);\n\n    > li {\n      max-width: 40rem;\n    }\n  }\n\n  .nav-link {\n    display: inline-block;\n    font: var(--font-label-3);\n    margin-bottom: var(--spacing-lg);\n    position: relative;\n\n    &:focus-visible {\n      .hoverable {\n        .arrow {\n          transform: translateX(66%);\n        }\n      }\n    }\n  }\n\n  .anchor-nav-item {\n    color: var(--color-action-muted);\n    font: var(--font-label-1);\n    margin-bottom: 1.6rem;\n  }\n\n  .anchor-link {\n    font: var(--font-mega-nav-anchor);\n    letter-spacing: -0.016rem;\n    transition: color var(--animation-duration-fast) var(--animation-timing);\n    display: inline-block;\n\n    &:hover,\n    &:focus-visible {\n      color: var(--color-action);\n    }\n  }\n"]);
                return At = function() {
                    return n
                }, n
            }

            function Ht(n) {
                var e = n.navigationGroups,
                    t = n.closeCallback,
                    i = (0, c.useRef)(null),
                    a = I(),
                    o = P(),
                    d = o.activeMegaMenuId,
                    u = o.clickedMegaMenuId,
                    m = x(),
                    p = m.handleWrapper1Enter,
                    h = m.handleWrapper1Leave;
                return (0, Zt.Z)(i, (function(n) {
                    var e;
                    h(), (null === (e = n.target) || void 0 === e ? void 0 : e.closest(".nav-item")) || (a.clickedMegaMenuId = null)
                })), (0, c.useEffect)((function() {
                    if (u) {
                        var n = function(n) {
                            "Escape" === n.key && (a.clickedMegaMenuId = null)
                        };
                        return document.addEventListener("keydown", n),
                            function() {
                                document.removeEventListener("keydown", n)
                            }
                    }
                }), [u, a]), (0, l.jsxs)(Dt, {
                    className: (0, an.Z)({
                        active: d
                    }),
                    children: [(0, l.jsx)(Ut, {}), (0, l.jsxs)("div", {
                        ref: i,
                        className: "menu-wrapper",
                        onMouseEnter: p,
                        onMouseLeave: h,
                        children: [(0, l.jsx)("div", {
                            className: "spacer"
                        }), e.map((function(n) {
                            return (0, l.jsx)("div", {
                                id: "mega-nav-list-".concat(n.id),
                                className: (0, an.Z)("section-wrapper", {
                                    active: n.id === d
                                }),
                                "aria-hidden": n.id !== d,
                                tabIndex: -1,
                                inert: n.id !== d ? "" : void 0,
                                children: (0, l.jsx)("ul", {
                                    className: "section-nav-list",
                                    children: n.linksWithAnchors.map((function(n) {
                                        var e = n.text,
                                            i = (0, b.Z)(n, ["text"]);
                                        return (0, l.jsxs)("li", {
                                            children: [(0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, i), {
                                                className: "nav-link",
                                                callback: t,
                                                useChildren: !0,
                                                children: (0, l.jsx)(Rt, {
                                                    animateOnHover: !0,
                                                    children: e
                                                })
                                            })), (0, l.jsxs)("ul", {
                                                children: [i.anchorLinks.map((function(n) {
                                                    return (0, l.jsx)("li", {
                                                        className: "anchor-nav-item",
                                                        children: (0, l.jsx)(Ot, (0, s.Z)((0, r.Z)({}, i, n), {
                                                            callback: t,
                                                            className: "anchor-link"
                                                        }))
                                                    }, n.id)
                                                })), i.links.map((function(n) {
                                                    return (0, l.jsx)("li", {
                                                        className: "anchor-nav-item",
                                                        children: (0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, n), {
                                                            className: "anchor-link",
                                                            callback: t
                                                        }))
                                                    }, n.id)
                                                }))]
                                            })]
                                        }, i.id)
                                    }))
                                })
                            }, n.id)
                        }))]
                    })]
                })
            }
            Ht.displayName = "MegaDropdown";
            var Ft, Ut = u.ZP.div.withConfig({
                    componentId: "sc-93d55739-0"
                })(Bt()),
                Dt = u.ZP.nav.withConfig({
                    componentId: "sc-93d55739-1"
                })(At()),
                Wt = t(2670),
                Gt = t(6038),
                qt = t(6486);

            function Kt() {
                return Kt = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, Kt.apply(this, arguments)
            }
            var Yt, Vt = function(n, e) {
                    return c.createElement("svg", Kt({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 22 22",
                        ref: e
                    }, n), Ft || (Ft = c.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeWidth: 2,
                        d: "M1.667 20.523 20.523 1.667m-18.856.19 18.856 18.856"
                    })))
                },
                Jt = (0, c.forwardRef)(Vt);

            function $t() {
                return $t = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, $t.apply(this, arguments)
            }
            var Xt = function(n, e) {
                    return c.createElement("svg", $t({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 16 16",
                        ref: e
                    }, n), Yt || (Yt = c.createElement("path", {
                        fill: "currentColor",
                        d: "M11.435 10.063h-.723l-.256-.247a5.92 5.92 0 0 0 1.437-3.87 5.946 5.946 0 1 0-5.947 5.947 5.92 5.92 0 0 0 3.87-1.437l.247.256v.723L14.637 16 16 14.637l-4.565-4.574Zm-5.489 0A4.111 4.111 0 0 1 1.83 5.946 4.111 4.111 0 0 1 5.946 1.83a4.111 4.111 0 0 1 4.117 4.116 4.111 4.111 0 0 1-4.117 4.117Z"
                    })))
                },
                Qt = (0, c.forwardRef)(Xt),
                ni = t(1042);

            function ei(n, e) {
                (0, ni.Z)((function() {
                    var t = Gt.p8.context(e, n);
                    return function() {
                        return t.revert()
                    }
                }), [])
            }

            function ti(n) {
                return function(e) {
                    return function() {
                        for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                        var r;
                        n.add((r = e).bind.apply(r, [this].concat((0, Wn.Z)(i))))
                    }
                }
            }

            function ii() {
                var n = (0, d.Z)(["\n  cursor: pointer;\n  position: relative;\n  width: fit-content;\n\n  &:hover {\n    .input-container {\n      border-color: var(--color-black);\n      background-color: var(--color-black);\n      color: var(--color-white);\n    }\n  }\n\n  .search-container {\n    position: relative;\n    line-height: 1;\n  }\n\n  .input-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 6rem;\n    border: 1px solid currentColor;\n    position: relative;\n    transition: background-color var(--animation-duration-fast) var(--animation-timing);\n  }\n\n  .search-input {\n    cursor: pointer;\n    display: block;\n    background-color: transparent;\n    width: calc(8em + 5.4rem);\n    max-width: calc(8em + 5.4rem);\n    height: 6rem;\n    font: var(--font-label-2);\n    letter-spacing: -0.036rem;\n    text-indent: 5.4rem;\n    border-radius: 6rem;\n    outline-color: var(--color-black);\n    transition: max-width var(--animation-duration-fast) var(--animation-timing);\n\n    &::placeholder {\n      width: 100%;\n    }\n\n    &:placeholder-shown {\n      text-overflow: ellipsis;\n    }\n\n    &::-webkit-search-cancel-button {\n      filter: grayscale(100%) invert(100%);\n      margin-right: 2rem;\n      cursor: pointer;\n      display: none;\n    }\n  }\n\n  .cancel-button {\n    background-color: transparent;\n    display: none;\n\n    .icon-wrapper {\n      width: 1.8rem;\n      height: 1.8rem;\n    }\n  }\n\n  .search-icon {\n    width: 1.8rem;\n    height: 1.8rem;\n    margin-right: 1rem;\n    position: absolute;\n    left: 2.8rem;\n    top: calc(50% - 0.9rem);\n    pointer-events: none;\n  }\n\n  .results {\n    list-style: none;\n    display: block;\n    position: absolute;\n    right: 0;\n    top: calc(6rem + var(--spacing-sm));\n    color: var(--color-black);\n    font-size: var(--button-font-size);\n    border-radius: min(3.3rem, 33px);\n    overflow: hidden;\n    width: 100%;\n    min-width: 320px;\n\n    @media (max-width: 768px) {\n      min-width: 290px;\n      top: calc(6.4rem + var(--spacing-sm));\n    }\n  }\n\n  .result-item {\n    width: 100%;\n    background: var(--color-white);\n    transition-property: color, background-color;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 300ms;\n\n    &:hover {\n      background-color: var(--color-black);\n      color: var(--color-white);\n    }\n  }\n\n  .result-link {\n    display: flex;\n    padding: var(--spacing-sm);\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    font-size: 16px;\n  }\n\n  .result-img-wrapper {\n    flex-shrink: 0;\n    width: 5rem;\n    height: 5rem;\n  }\n\n  .result-img {\n    display: block;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n  }\n\n  .result-content-wrapper {\n    margin-left: 1rem;\n    width: 100%;\n  }\n\n  .creator-name {\n    font: var(--font-label-1);\n    font-size: 16px;\n    letter-spacing: -0.048rem;\n  }\n\n  .creation-name {\n    margin-top: 0.3rem;\n    opacity: 0.5;\n    font: var(--font-label-0);\n    font-size: 14px;\n    letter-spacing: -0.014rem;\n  }\n\n  .see-all {\n    padding: 0.5rem 0;\n    padding: calc(var(--spacing-xs) / 2);\n    border-bottom-left-radius: 3rem;\n    border-bottom-right-radius: 3rem;\n  }\n\n  &.has-focus,\n  &.has-results {\n    width: 100%;\n\n    .input-container {\n      border-color: var(--color-black);\n      background-color: var(--color-black);\n      color: var(--color-white);\n    }\n\n    .search-input {\n      width: 100%;\n      max-width: 100%;\n      border: none;\n      outline: none;\n    }\n\n    .cancel-button {\n      display: block;\n    }\n  }\n\n  &.mobile {\n    --transition: var(--animation-duration-fast) var(--animation-timing);\n\n    padding: 0 var(--spacing-sm) var(--spacing-sm);\n    width: 100%;\n    transition: max-width var(--transition);\n\n    .input-container {\n      background-color: transparent;\n      border-width: 1px;\n      border-color: currentColor;\n      justify-content: flex-start;\n      padding: 0.7rem;\n      transition: padding var(--transition);\n    }\n\n    .search-input {\n      font-size: var(--font-label-1);\n      width: 100%;\n      height: auto;\n      letter-spacing: -0.046rem;\n      text-indent: 3.4rem;\n      max-width: 100%;\n      transition: max-width var(--transition);\n    }\n\n    .search-icon {\n      left: 1.5rem;\n      transition: left var(--transition);\n    }\n\n    &.scrolled {\n      max-width: 7.3rem;\n\n      .input-container {\n        width: 2.4em;\n        aspect-ratio: 1 / 1;\n      }\n\n      .search-icon {\n        left: 1.1rem;\n      }\n\n      .search-input {\n        max-width: 2.2rem;\n      }\n    }\n\n    &.has-focus,\n    &.has-results {\n      .input-container {\n        border-color: var(--color-action-inverse);\n        background-color: var(--color-action-inverse);\n        color: var(--color-action);\n        width: 100%;\n        aspect-ratio: auto;\n      }\n\n      .cancel-button {\n        color: var(--color-action);\n        /* display: block; */\n        opacity: 1;\n        pointer-events: auto;\n      }\n\n      &.scrolled {\n        max-width: 100%;\n\n        .search-icon {\n          left: 1.5rem;\n        }\n\n        .search-input {\n          max-width: 100%;\n        }\n      }\n    }\n  }\n"]);
                return ii = function() {
                    return n
                }, n
            }
            var ai = u.ZP.div.withConfig({
                componentId: "sc-25115571-0"
            })(ii());

            function ri(n) {
                var e = n.style,
                    t = void 0 === e ? "desktop" : e,
                    i = n.placeholder,
                    r = n.resultsLink,
                    s = function() {
                        setTimeout((function() {
                            g([]), y(""), (null === d || void 0 === d ? void 0 : d.current) && (d.current.value = "")
                        }), 300)
                    },
                    d = (0, c.useRef)(null),
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useState)([]),
                    h = p[0],
                    g = p[1],
                    f = (0, c.useState)(!1),
                    v = f[0],
                    x = f[1],
                    w = (0, c.useState)(""),
                    b = w[0],
                    y = w[1],
                    j = (0, c.useState)(!1),
                    k = j[0],
                    Z = j[1];
                (0, ct.LZ)((function(n) {
                    return function(n) {
                        Z(n > 64)
                    }(n.scroll)
                }));
                var _ = (0, qt.debounce)((0, c.useCallback)(function() {
                        var n = (0, a.Z)((function(n) {
                            var e, t;
                            return (0, o.__generator)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!((n = n.trim()).length > 0)) return [3, 6];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 4, , 5]), [4, fetch("/api/search?q=".concat(n, "&page%5Bsize%5D=5&src=navbar&json-api-version=1.0&include=[]"))];
                                    case 2:
                                        return [4, i.sent().json()];
                                    case 3:
                                        return (e = i.sent()).error ? (console.error("Error getting search results", e.error), g([])) : g(e.data || []), [3, 5];
                                    case 4:
                                        return t = i.sent(), console.error(t), [3, 5];
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        g([]), i.label = 7;
                                    case 7:
                                        return [2]
                                }
                            }))
                        }));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }(), [g]), 300),
                    N = (0, c.useCallback)((function(n) {
                        (0, Wt.Z)(n.target, HTMLInputElement) && _(n.target.value)
                    }), [_]);
                ei(u, (function() {
                    m.current = Gt.p8.timeline({
                        paused: !0
                    })
                }));
                var C = (0, c.useCallback)((function(n) {
                    n.preventDefault(), window.location.href = "https://www.patreon.com/search?q=".concat(b)
                }), [b]);
                return (0, l.jsx)(ai, {
                    ref: u,
                    onFocus: function() {
                        x(!0)
                    },
                    onBlur: function() {
                        setTimeout((function() {
                            var n;
                            (null === u || void 0 === u || null === (n = u.current) || void 0 === n ? void 0 : n.contains(document.activeElement)) || (x(!1), s())
                        }), 300)
                    },
                    className: (0, an.Z)({
                        scrolled: k
                    }, {
                        "has-results": h.length > 0
                    }, {
                        "has-focus": v
                    }, t),
                    children: (0, l.jsxs)("div", {
                        className: "search-container",
                        children: [(0, l.jsxs)("form", {
                            onSubmit: C,
                            className: "input-container",
                            children: [(0, l.jsx)("label", {
                                id: "search-label",
                                className: "sr-only",
                                children: i
                            }), (0, l.jsx)("input", {
                                ref: d,
                                className: "search-input",
                                placeholder: i,
                                "data-results": h.length > 0,
                                value: b,
                                type: "search",
                                inputMode: "search",
                                autoComplete: "off",
                                autoCorrect: "off",
                                autoCapitalize: "off",
                                spellCheck: "false",
                                onChange: N,
                                onInput: function(n) {
                                    return y(n.currentTarget.value)
                                },
                                "aria-labelledby": "search-label"
                            }), (0, l.jsx)(Qt, {
                                className: "search-icon"
                            }), (0, l.jsx)(cn, {
                                tabIndex: 0,
                                type: "button",
                                onClick: s,
                                icon: (0, l.jsx)(Jt, {}),
                                label: "Close",
                                hideLabel: !0,
                                className: "cancel-button"
                            })]
                        }), h.length > 0 && (0, l.jsxs)("ul", {
                            className: "results",
                            role: "alert",
                            children: [h.map((function(n) {
                                return (0, l.jsx)("li", {
                                    className: "result-item",
                                    children: (0, l.jsxs)(Ve, {
                                        externalUrl: n.attributes.url,
                                        target: "_self",
                                        className: "result-link",
                                        children: [(0, l.jsx)("div", {
                                            className: "result-img-wrapper",
                                            children: (0, l.jsx)("img", {
                                                src: n.attributes.thumb,
                                                alt: n.attributes.name,
                                                className: "result-img",
                                                "aria-hidden": "true"
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "result-content-wrapper",
                                            children: [(0, l.jsx)("p", {
                                                className: "creator-name",
                                                children: n.attributes.name
                                            }), (0, l.jsx)("p", {
                                                className: "creation-name",
                                                children: n.attributes.creation_name
                                            })]
                                        })]
                                    })
                                }, n.id)
                            })), (0, l.jsx)("li", {
                                className: "result-item see-all",
                                children: (0, l.jsx)(Ve, {
                                    externalUrl: "".concat(null === r || void 0 === r ? void 0 : r.externalUrl, "?q=").concat(b),
                                    target: "_self",
                                    className: "result-link",
                                    callback: function() {
                                        g([]), y("")
                                    },
                                    children: null === r || void 0 === r ? void 0 : r.text
                                })
                            })]
                        })]
                    })
                })
            }

            function oi() {
                var n = (0, d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid;\n  border-radius: ", ";\n  cursor: pointer;\n  font: var(--font-label-2);\n  line-height: 1;\n  letter-spacing: -0.032rem;\n  padding: 2rem 2.8rem;\n  text-align: center;\n  position: relative;\n  width: fit-content;\n  white-space: nowrap;\n\n  @media (max-width: 768px) {\n    padding: 1rem 1.4rem;\n    font-size: 1.6rem;\n    font-style: normal;\n    font-weight: 350;\n    line-height: 120%;\n  }\n\n  &.large,\n  &.lg {\n    padding: var(--spacing-base);\n  }\n\n  &.medium,\n  &.md {\n    padding: 1.9rem 2.8rem;\n  }\n\n  &.full-width {\n    width: 100%;\n  }\n\n  &.sm,\n  &.small {\n    font-size: 1.6rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 120%;\n    letter-spacing: -0.048rem;\n    padding: 1rem 1.4rem;\n  }\n\n  &.ghost {\n    border: 1px solid #fff;\n    background: rgba(255, 255, 255, 0.15);\n  }\n\n  &.primary {\n    background-color: var(--themed-background-color, var(--color-action-default));\n    border-color: var(--themed-background-color, var(--color-action-default));\n    color: var(--themed-color, var(--color-action-inverse));\n  }\n\n  &.secondary {\n    background-color: transparent;\n    border: 1px solid currentColor;\n    color: currentColor;\n    overflow: hidden;\n\n    &:before {\n      background-color: var(--themed-background-color, var(--color-action));\n      border-radius: ", ";\n      content: '';\n      display: block;\n      position: absolute;\n      inset: 0;\n      transform: translateY(100%);\n      transition: transform var(--animation-duration-fast) var(--ease-in-out-cubic);\n    }\n\n    &:hover {\n      border-color: var(--themed-background-color, var(--color-action));\n      color: var(--themed-color, var(--color-action-contrast));\n\n      &:before {\n        transform: translateY(0);\n      }\n    }\n  }\n\n  &.light {\n    background: rgba(255, 255, 255, 0.8);\n    backdrop-filter: blur(10px);\n  }\n\n  &.text-only {\n    border: none;\n    background: none;\n  }\n\n  &.white-label {\n    color: var(--color-white);\n  }\n\n  .label-wrapper {\n    position: relative;\n    overflow: hidden;\n\n    &:before,\n    &:after {\n      content: attr(data-label);\n      content: attr(data-label) / '\"\"';\n      alt: '\"\"';\n      position: absolute;\n      top: 0;\n      left: 0;\n      transition: transform var(--animation-duration) var(--ease-in-out-cubic);\n    }\n\n    &:before {\n      transform: translateY(0%);\n    }\n\n    &:after {\n      transform: translateY(150%);\n    }\n  }\n\n  &:hover {\n    .label-wrapper {\n      &:before {\n        transform: translateY(-150%);\n      }\n\n      &:after {\n        transform: translateY(0%);\n      }\n    }\n  }\n\n  &:focus-visible {\n    outline: var(--focus-outline);\n    outline-width: 2px;\n    outline-offset: var(--focus-outline-offset);\n  }\n\n  .label {\n    opacity: 0;\n    line-height: 1.1;\n  }\n"]);
                return oi = function() {
                    return n
                }, n
            }
            var li = (0, u.ZP)(Ve).withConfig({
                componentId: "sc-52dd19f-0"
            })(oi(), (function(n) {
                return "round" === n.shape ? "4rem" : ".5rem"
            }), (function(n) {
                return "round" === n.shape ? "4rem" : ".5rem"
            }));

            function ci(n) {
                var e, t, i = n.label,
                    a = n.page,
                    r = n.style,
                    o = n.external_url,
                    c = n.className,
                    s = n.genericClickDetails,
                    d = n.anchorId,
                    u = n.target,
                    m = n.shape,
                    p = void 0 === m ? "round" : m,
                    h = (null === a || void 0 === a || null === (e = a.data) || void 0 === e ? void 0 : e.attributes) || a;
                return (0, l.jsx)(li, {
                    page: h,
                    externalUrl: o,
                    anchor: d,
                    className: (0, an.Z)(c, (null === r || void 0 === r || null === (t = r.toString) || void 0 === t ? void 0 : t.call(r)) || "primary", "button"),
                    genericClickDetails: s,
                    useChildren: !0,
                    target: u,
                    shape: p,
                    children: (0, l.jsx)("div", {
                        "data-label": i,
                        className: "label-wrapper",
                        children: (0, l.jsx)("span", {
                            className: "label",
                            children: i
                        })
                    })
                })
            }

            function si() {
                var n = (0, d.Z)(["\n  & {\n    // Specificity hack for local dev, vs position:relative in CTAButton\n    position: absolute !important;\n  }\n\n  left: 50%;\n  transform: translate(-50%, -200%);\n  z-index: 100;\n  transition: transform var(--animation-duration) var(--animation-timing);\n\n  &:focus-visible {\n    transform: translate(-50%, var(--header-container-padding-top));\n  }\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);
                return si = function() {
                    return n
                }, n
            }

            function di() {
                var n = k().siteSettings.skipToContentLabel;
                return (0, l.jsx)(ui, {
                    label: n,
                    anchorId: "main-content",
                    target: "_self"
                })
            }
            var ui = (0, u.ZP)(ci).withConfig({
                componentId: "sc-48e9475c-0"
            })(si());

            function mi() {
                var n = (0, d.Z)(["\n  display: block;\n  position: relative;\n\n  &:before,\n  &:after {\n    content: attr(data-label);\n    content: attr(data-label) / '\"\"';\n    alt: '\"\"';\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: transform var(--animation-duration) var(--animation-timing);\n  }\n\n  &:before {\n    transform: translateY(0%);\n  }\n\n  &:after {\n    color: var(--color-action-inverse);\n    transform: translateY(100%);\n  }\n\n  .active & {\n    &:before {\n      transform: translateY(-100%);\n    }\n\n    &:after {\n      transform: translateY(0%);\n    }\n  }\n\n  .label {\n    opacity: 0;\n  }\n"]);
                return mi = function() {
                    return n
                }, n
            }

            function pi(n) {
                var e = n.tag,
                    t = void 0 === e ? "button" : e,
                    i = n.label,
                    a = n.className,
                    o = n.onClick,
                    c = (0, b.Z)(n, ["tag", "label", "className", "onClick"]);
                return (0, l.jsx)(hi, (0, s.Z)((0, r.Z)({
                    as: t,
                    className: a,
                    "data-label": i,
                    onClick: function(n) {
                        return null === o || void 0 === o ? void 0 : o(n)
                    }
                }, c), {
                    children: (0, l.jsx)("span", {
                        className: "label",
                        children: i
                    })
                }))
            }
            var hi = u.ZP.div.withConfig({
                componentId: "sc-6763b786-0"
            })(mi());

            function gi() {
                var n = (0, d.Z)(["\n  --link-padding-y: 1.5rem;\n  --link-padding-x: 2.4rem;\n\n  --transition: var(--animation-duration-fast) var(--animation-timing);\n\n  padding: var(--link-padding-y) 0;\n  display: inline-block;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n\n  .nav-list {\n    display: flex;\n    position: relative;\n\n    &.has-active-item {\n      .indicator {\n        --active: 1;\n      }\n    }\n  }\n\n  .indicator {\n    background-color: var(--color-action-default);\n    border-radius: 50px;\n    content: '';\n    display: block;\n    position: absolute;\n    inset: var(--y1) var(--x2) var(--y2) var(--x1);\n    transition: opacity var(--transition), scale var(--transition), inset var(--transition);\n    opacity: var(--active, 0);\n    scale: var(--active, 0);\n    pointer-events: none;\n  }\n\n  .nav-item {\n    position: relative;\n    display: flex;\n\n    &.active {\n      .nav-link {\n        color: var(--color-action-inverse);\n      }\n    }\n  }\n\n  .nav-link {\n    display: block;\n    position: relative;\n    appearance: none;\n    border-radius: 4rem;\n    padding: var(--link-padding-y) var(--link-padding-x);\n    z-index: 1;\n    transition: color var(--transition);\n\n    > div {\n      position: relative;\n      overflow: hidden;\n    }\n\n    &.active {\n      color: var(--color-action-inverse);\n    }\n  }\n"]);
                return gi = function() {
                    return n
                }, n
            }

            function fi() {
                var n = (0, d.Z)(["\n  margin-left: 1.5rem;\n"]);
                return fi = function() {
                    return n
                }, n
            }

            function vi(n) {
                var e = n.navigationGroups,
                    t = n.updatesButton,
                    i = function(n) {
                        u.focusedMegaMenuId = n
                    },
                    a = function() {
                        u.isMobileMenuOpen = !1, u.clickedMegaMenuId = null, u.hoveredMegaMenuId = null
                    },
                    o = (0, c.useRef)(null),
                    d = (0, c.useRef)(null),
                    u = I(),
                    m = P().activeMegaMenuId,
                    h = x(),
                    g = h.handleWrapper1Enter,
                    f = h.handleWrapper1Leave,
                    v = m;
                return (0, c.useEffect)((function() {
                    if (v && o.current && d.current) {
                        var n = document.getElementById("mega-nav-trigger-".concat(v));
                        if (!n) return;
                        var e = n.getBoundingClientRect(),
                            t = d.current.getBoundingClientRect();
                        o.current.style.cssText = "\n        --x1: ".concat(e.left - t.left, "px;\n        --x2: ").concat(t.right - e.right, "px;\n        --y1: ").concat(e.top - t.top, "px;\n        --y2: ").concat(t.bottom - e.bottom, "px;\n      ")
                    }
                }), [v]), (0, c.useEffect)((function() {
                    var n = u.clickedMegaMenuId;
                    return (0, p.VW)(u, "clickedMegaMenuId", (function(e) {
                        if (n && !e) {
                            var t, i = document.getElementById("mega-nav-trigger-".concat(n));
                            null === (t = null === i || void 0 === i ? void 0 : i.children[0]) || void 0 === t || t.focus()
                        } else e && setTimeout((function() {
                            var n = document.getElementById("mega-nav-list-".concat(e));
                            null === n || void 0 === n || n.focus()
                        }), 100);
                        n = e
                    }))
                }), [u]), (0, l.jsx)(wi, {
                    children: (0, l.jsxs)("ul", {
                        ref: d,
                        className: (0, an.Z)("nav-list", {
                            "has-active-item": v
                        }),
                        children: [e.map((function(n) {
                            var e, t, o, c, d = n.linksWithAnchors.some((function(n) {
                                return n.text
                            }));
                            return d || (null === n || void 0 === n ? void 0 : n.titleLink) ? (0, l.jsx)("li", {
                                id: "mega-nav-trigger-".concat(n.id),
                                onMouseEnter: function() {
                                    var e;
                                    (e = n.id) ? (g(), u.hoveredMegaMenuId = e) : f()
                                },
                                onFocus: function() {
                                    return i(n.id)
                                },
                                onBlur: function() {
                                    return i(null)
                                },
                                className: (0, an.Z)("nav-item", {
                                    active: n.id === v
                                }),
                                children: d ? (0, l.jsx)("button", {
                                    className: "nav-link",
                                    onClick: function() {
                                        return e = n.id, void(u.clickedMegaMenuId === e ? u.clickedMegaMenuId = null : u.clickedMegaMenuId = e);
                                        var e
                                    },
                                    "aria-haspopup": "true",
                                    "aria-controls": "mega-nav-list-".concat(n.id),
                                    children: (0, l.jsx)(pi, {
                                        tag: "div",
                                        label: null !== (c = null === n || void 0 === n ? void 0 : n.title) && void 0 !== c ? c : "** Menu item needs a title"
                                    })
                                }) : (0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, n.titleLink), {
                                    text: null !== (o = null !== (t = null === (e = n.titleLink) || void 0 === e ? void 0 : e.text) && void 0 !== t ? t : null === n || void 0 === n ? void 0 : n.title) && void 0 !== o ? o : "** Title link needs a Menu Label",
                                    className: "nav-link",
                                    callback: a,
                                    animated: !0
                                }))
                            }, n.id) : null
                        })), (0, l.jsx)("li", {
                            ref: o,
                            className: "indicator"
                        }), t && (0, l.jsx)(bi, {
                            children: (0, l.jsx)(ci, (0, r.Z)({}, t))
                        })]
                    })
                })
            }
            var xi, wi = u.ZP.div.withConfig({
                    componentId: "sc-410c08-0"
                })(gi()),
                bi = u.ZP.div.withConfig({
                    componentId: "sc-410c08-1"
                })(fi());

            function yi() {
                return yi = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, yi.apply(this, arguments)
            }
            var ji = function(n, e) {
                    return c.createElement("svg", yi({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 13 13",
                        ref: e
                    }, n), xi || (xi = c.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M12 6.5H1.5m0 0 5.25-5.25M1.5 6.5l5.25 5.25"
                    })))
                },
                ki = (0, c.forwardRef)(ji);

            function Zi() {
                var n = (0, d.Z)(["\n  --header-height: 62px;\n\n  color: var(--color-action-contrast);\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100vh;\n  height: 100dvh;\n  background-color: var(--color-action-default);\n  position: fixed;\n  transform: translateX(-100%);\n  transition: transform var(--animation-duration-fast) var(--animation-timing);\n  z-index: 100;\n  top: 0px;\n\n  &.active {\n    transform: translateX(0px);\n  }\n\n  .submenu-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: var(--header-height);\n    padding: var(--spacing-xs);\n  }\n\n  .title-label {\n    font: var(--font-label-3);\n    letter-spacing: 0.04rem;\n  }\n\n  .nav-wrapper {\n    width: 100%;\n    height: 100%;\n    height: calc(100vh - var(--header-height));\n    height: calc(100dvh - var(--header-height));\n    overflow-y: auto;\n  }\n\n  .submenu-list {\n    border: 1px solid var(--color-action-default);\n    font: var(--font-sub-h1-light);\n    padding: var(--spacing-sm) var(--spacing-sm) var(--spacing-xl);\n\n    &:focus-visible {\n      outline: none;\n    }\n  }\n\n  .nav-link {\n    display: block;\n    margin-bottom: 1.8rem;\n    letter-spacing: -0.06rem;\n  }\n\n  .sub-nav-list {\n    display: block;\n    margin-top: 2.6rem;\n  }\n\n  .sub-nav-link {\n    color: var(--color-action-muted) !important;\n    display: block;\n    margin-bottom: 2.4rem;\n    letter-spacing: -0.06rem;\n\n    &:before {\n      content: '';\n      display: inline-block;\n      width: 0.5em;\n      height: 0.5em;\n      border-left: 1px solid currentColor;\n      border-bottom: 1px solid currentColor;\n      margin-right: 0.3em;\n      vertical-align: middle;\n      transform: translateY(-0.25em);\n    }\n  }\n"]);
                return Zi = function() {
                    return n
                }, n
            }

            function _i(n) {
                var e = n.navigationGroup,
                    t = n.activeMenuId,
                    i = n.closeCallback,
                    a = n.backCallback,
                    o = function() {
                        a && a(), i && i()
                    },
                    d = (0, c.useRef)(null),
                    u = e.id === t;
                return (0, c.useEffect)((function() {
                    var n;
                    u && (null === (n = d.current) || void 0 === n || n.focus())
                }), [u, d]), (0, l.jsxs)(Ni, {
                    className: (0, an.Z)({
                        active: u
                    }),
                    inert: u ? void 0 : "",
                    children: [(0, l.jsxs)("header", {
                        className: "submenu-header",
                        children: [(0, l.jsx)("div", {
                            className: "back",
                            children: (0, l.jsx)(cn, {
                                icon: (0, l.jsx)(ki, {}),
                                label: "Back",
                                hideLabel: !0,
                                size: "sm",
                                onClick: a
                            })
                        }), (0, l.jsx)("div", {
                            className: "title",
                            children: (0, l.jsx)("h3", {
                                className: "title-label",
                                children: e.title
                            })
                        }), (0, l.jsx)("div", {
                            className: "close",
                            children: (0, l.jsx)(cn, {
                                icon: (0, l.jsx)(Jt, {}),
                                label: "Close",
                                hideLabel: !0,
                                size: "sm",
                                onClick: o
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: "nav-wrapper",
                        "data-lenis-prevent": !0,
                        children: (0, l.jsx)("ul", {
                            ref: d,
                            className: "submenu-list",
                            tabIndex: -1,
                            children: e.linksWithAnchors.map((function(n) {
                                return (0, l.jsxs)("li", {
                                    children: [(0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, n), {
                                        className: "nav-link",
                                        callback: o
                                    })), n.links && n.links.length > 0 && (0, l.jsx)("ul", {
                                        className: "sub-nav-list",
                                        children: n.links.map((function(n) {
                                            return (0, l.jsx)("li", {
                                                children: (0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, n), {
                                                    className: "sub-nav-link",
                                                    callback: o
                                                }))
                                            }, n.id)
                                        }))
                                    })]
                                }, n.id)
                            }))
                        })
                    })]
                })
            }
            var Ni = u.ZP.section.withConfig({
                componentId: "sc-bbf99072-0"
            })(Zi());

            function Ci() {
                var n = (0, d.Z)(["\n  color: var(--color-action-contrast);\n  width: 100%;\n  height: 100vh;\n  height: 100dvh;\n  max-width: none; // override the user-agent default for <dialog>\n  max-height: none;\n  background-color: var(--color-action-default);\n  position: fixed;\n  top: 0px;\n  transform: translateX(-100%);\n  transition: transform var(--animation-duration-fast) var(--animation-timing);\n  z-index: 10;\n  display: block;\n\n  padding: 0;\n  margin: 0;\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n\n  &.open {\n    transform: translateX(0px);\n  }\n\n  > nav {\n    height: 100%;\n  }\n\n  .level-1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n    flex: 0 1 0;\n  }\n\n  .nav-section-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--spacing-xs);\n\n    @media (orientation: landscape) {\n      padding: 0;\n    }\n  }\n\n  .search {\n    width: 6.8rem;\n    height: 5.6rem;\n  }\n\n  .brand {\n    width: 16.2rem;\n    height: 3.8rem;\n    min-height: 38px;\n\n    .logo-link {\n      height: 3.8rem;\n    }\n  }\n\n  .wordmark {\n    display: block !important;\n    object-fit: contain;\n\n    @media (max-width: 768px) {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .nav-wrapper {\n    height: 100%;\n    overflow-y: auto;\n  }\n\n  .nav-list {\n    padding: var(--spacing-sm);\n\n    &:focus-visible {\n      outline: none;\n    }\n  }\n\n  .nav-button {\n    font: var(--font-sub-h1-light);\n    margin-bottom: 1.8rem;\n    padding: 0;\n    display: flex;\n    gap: 0.8rem;\n    align-items: center;\n    margin-left: -0.3rem;\n    letter-spacing: -0.06rem;\n\n    .label {\n      margin-left: 0;\n    }\n\n    &:hover {\n      background-color: transparent;\n    }\n  }\n\n  .emphasize {\n    margin-top: 1rem;\n    border: 1px solid var(--color-action-contrast);\n    padding: 2rem 2.8rem;\n    border-radius: 4rem;\n    width: fit-content;\n  }\n\n  .cta-button {\n    margin-top: var(--spacing-sm);\n  }\n\n  .get-started-button {\n    background-color: var(--color-action-contrast);\n    border-color: var(--color-action-contrast);\n    color: var(--color-action-default);\n  }\n\n  .nav-section-footer {\n    padding: var(--spacing-sm);\n\n    @media (orientation: landscape) {\n      padding: var(--spacing-xs) var(--spacing-sm);\n      margin: 0 auto;\n      width: 100%;\n      max-width: 320px;\n\n      .get-started-button {\n        padding: var(--spacing-xs) var(--spacing-sm);\n      }\n    }\n  }\n\n  .apps-store-wrapper {\n    display: flex;\n    gap: var(--spacing-sm);\n    margin: var(--spacing-base) 0 var(--spacing-sm);\n\n    @media (orientation: landscape) {\n      gap: var(--spacing-xs);\n      margin-top: var(--spacing-xs);\n      margin-bottom: 0;\n    }\n  }\n\n  .app-store-button {\n    display: block;\n    width: 100%;\n    > img {\n      width: 100%;\n    }\n  }\n"]);
                return Ci = function() {
                    return n
                }, n
            }

            function Ii() {
                var n = (0, d.Z)(["\n  display: block;\n  width: 1.2rem;\n  height: 1.2rem;\n"]);
                return Ii = function() {
                    return n
                }, n
            }

            function Pi(n) {
                var e = n.navigationGroups,
                    t = n.closeCallback,
                    i = n.isOpen,
                    a = n.getStartedButton,
                    o = n.updatesButton,
                    d = function() {
                        var n;
                        g(null), null === (n = m.current) || void 0 === n || n.focus()
                    },
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useState)(null),
                    h = p[0],
                    g = p[1],
                    f = wt();
                (0, c.useEffect)((function() {
                    var n, e = u.current;
                    (e && !e.open && i && e.showModal(), i) && (null === (n = m.current) || void 0 === n || n.focus())
                }), [i]);
                var v, x = (0, c.useCallback)((function(n) {
                        n.preventDefault(), t()
                    }), [t]),
                    w = (0, c.useCallback)((function() {
                        var n = u.current;
                        n && !i && n.close()
                    }), [i, u]);
                return (0, l.jsx)(Si, {
                    className: (0, an.Z)({
                        open: i
                    }),
                    tabIndex: -1,
                    ref: u,
                    onCancel: x,
                    onTransitionEnd: w,
                    children: (0, l.jsxs)("nav", {
                        children: [(0, l.jsxs)("section", {
                            className: "level-1",
                            inert: i && !h ? void 0 : "",
                            children: [(0, l.jsxs)("header", {
                                className: "nav-section-header",
                                children: [(0, l.jsx)("div", {
                                    className: "search"
                                }), (0, l.jsx)("div", {
                                    className: "brand",
                                    children: (0, l.jsxs)(Ve, (0, s.Z)((0, r.Z)({}, f), {
                                        className: "logo-link",
                                        children: [(0, l.jsx)("span", {
                                            className: "sr-only",
                                            children: "Patreon"
                                        }), (0, l.jsx)(xt, {
                                            className: "wordmark"
                                        })]
                                    }))
                                }), (0, l.jsx)("div", {
                                    className: "close",
                                    children: (0, l.jsx)(cn, {
                                        icon: (0, l.jsx)(Jt, {}),
                                        onClick: t,
                                        label: "Close",
                                        hideLabel: !0,
                                        size: "sm"
                                    })
                                })]
                            }), (0, l.jsx)("div", {
                                className: "nav-wrapper",
                                "data-lenis-prevent": !0,
                                children: (0, l.jsxs)("ul", {
                                    ref: m,
                                    className: "nav-list",
                                    tabIndex: -1,
                                    children: [e.map((function(n) {
                                        var e, t, i, a;
                                        return (0, l.jsx)("li", {
                                            className: "nav-item",
                                            children: (null === (e = n.titleLink) || void 0 === e ? void 0 : e.page) || (null === (t = n.titleLink) || void 0 === t ? void 0 : t.externalUrl) ? (0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, n.titleLink), {
                                                text: null === n || void 0 === n ? void 0 : n.title,
                                                className: "nav-button level-1-link"
                                            })) : (0, l.jsx)(cn, {
                                                childrenLabelOrder: "childrenLast",
                                                label: null !== (v = n.title) && void 0 !== v ? v : null === (i = n.titleLink) || void 0 === i ? void 0 : i.text,
                                                className: (0, an.Z)("nav-button", {
                                                    "has-submenu": n.linksWithAnchors.length > 0
                                                }),
                                                onClick: function() {
                                                    n.linksWithAnchors.length > 0 && g(n.id)
                                                },
                                                children: !(null === (a = n.titleLink) || void 0 === a ? void 0 : a.text) && (0, l.jsx)(zi, {})
                                            })
                                        }, n.id)
                                    })), o && (0, l.jsx)("li", {
                                        children: (0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, o), {
                                            text: o.label,
                                            className: "nav-button level-1-link emphasize"
                                        }))
                                    })]
                                })
                            }), (0, l.jsxs)("footer", {
                                className: "nav-section-footer",
                                children: [a && (0, l.jsx)(ci, {
                                    label: a.label,
                                    page: a.page,
                                    external_url: a.external_url,
                                    genericClickDetails: a.genericClickDetails,
                                    className: "full-width medium get-started-button"
                                }), (0, l.jsx)("div", {
                                    className: "apps-store-wrapper",
                                    children: (0, l.jsx)(D, {
                                        className: "app-store-button"
                                    })
                                })]
                            })]
                        }), e.map((function(n) {
                            return (0, l.jsx)(_i, {
                                navigationGroup: n,
                                activeMenuId: h,
                                closeCallback: t,
                                backCallback: d
                            }, n.id)
                        }))]
                    })
                })
            }
            var Si = u.ZP.dialog.withConfig({
                    componentId: "sc-7b798836-0"
                })(Ci()),
                zi = (0, u.ZP)(T).withConfig({
                    componentId: "sc-7b798836-1"
                })(Ii());

            function Li() {
                var n = (0, d.Z)(["\n  position: absolute;\n  top: -1.3rem;\n  right: 0;\n  bottom: -1.3rem;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.6);\n  transition: opacity var(--animation-duration-slow) var(--animation-timing);\n  opacity: 0;\n  pointer-events: none;\n"]);
                return Li = function() {
                    return n
                }, n
            }

            function Mi() {
                var n = (0, d.Z)([""]);
                return Mi = function() {
                    return n
                }, n
            }

            function Ri() {
                var n = (0, d.Z)(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  z-index: 500;\n  font-size: var(--button-font-size);\n  transform: translateY(1.3rem);\n  transition: transform var(--animation-duration-slow) var(--animation-timing);\n\n  &:has(dialog[open]) {\n    transform: translateY(0px);\n  }\n\n  &:focus-visible {\n    outline: none;\n  }\n\n  @media (max-width: 768px) {\n    transform: translateY(0);\n  }\n\n  &.theme-dark {\n    --themed-background-color: var(--color-action-inverse);\n    --themed-color: var(--color-action-default);\n\n    color: var(--color-action-inverse);\n\n    ", " {\n      background-color: var(--color-action-inverse);\n      color: var(--color-action-default);\n    }\n  }\n\n  &.theme-light {\n    --themed-background-color: var(--color-action-default);\n    --themed-color: var(--color-action-inverse);\n\n    color: var(--color-action-default);\n  }\n\n  &.scrolled {\n    transform: translateY(0);\n    color: var(--color-action-default);\n\n    .backdrop {\n      opacity: 1;\n    }\n  }\n\n  --header-container-padding-top: var(--spacing-sm);\n  --header-container-padding-right: max(env(safe-area-inset-right), var(--spacing-lg));\n  --header-container-padding-bottom: var(--spacing-sm);\n  --header-container-padding-left: max(env(safe-area-inset-left), var(--spacing-lg));\n  --header-container-padding: var(--header-container-padding-top) var(--header-container-padding-right)\n    var(--header-container-padding-bottom) var(--header-container-padding-left);\n  .header-container {\n    display: grid;\n    gap: var(--spacing-xl);\n    grid-template-columns: 1fr auto 1fr;\n    align-items: center;\n    padding: var(--header-container-padding);\n    pointer-events: none;\n    position: relative;\n\n    @media (max-width: 964px) {\n      gap: var(--spacing-sm);\n    }\n\n    @media (max-width: 768px) {\n      display: flex;\n      gap: 0;\n      padding: 1rem 2rem;\n      justify-content: space-between;\n    }\n  }\n\n  .left-wrapper {\n    pointer-events: auto;\n    margin: calc(var(--header-container-padding-top) * -1) calc(var(--header-container-padding-right) * -1)\n      calc(var(--header-container-padding-bottom) * -1) calc(var(--header-container-padding-left) * -1);\n\n    > .nav-wrapper {\n      padding: var(--header-container-padding);\n    }\n  }\n\n  .nav-wrapper {\n    display: inline-block;\n  }\n\n  .center-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    pointer-events: auto;\n  }\n\n  .hamburger {\n    margin-right: 1.6rem;\n\n    @media (min-width: 769px) {\n      display: none;\n    }\n  }\n\n  .logo-link {\n    border-radius: 4rem;\n    display: grid;\n    grid-template-areas: 'stack';\n    justify-items: center;\n    align-content: center;\n    align-items: center;\n    height: 2.7rem;\n\n    > * {\n      grid-area: stack;\n    }\n\n    @media (min-width: 768px) {\n      height: 3.2rem;\n\n      &.scrolled {\n        .wordmark {\n          opacity: 0;\n        }\n\n        .logomark {\n          opacity: 1;\n        }\n      }\n    }\n  }\n\n  .workmark,\n  .logomark {\n    transition: opacity var(--animation-duration-slow) var(--animation-timing);\n  }\n\n  .wordmark {\n    display: block;\n    width: auto;\n    height: 6.5rem;\n    fill: currentColor;\n\n    @media (max-width: 768px) {\n      height: 66.666667%;\n      display: none;\n    }\n  }\n\n  .logomark {\n    height: 4.2rem;\n    align-self: center;\n    opacity: 0;\n\n    @media (max-width: 768px) {\n      height: 3.4rem;\n      opacity: 1;\n    }\n  }\n\n  .right-wrapper {\n    display: flex;\n    gap: 1.4rem;\n    align-items: center;\n    justify-content: flex-end;\n    pointer-events: auto;\n    min-width: fit-content;\n    flex: 1 0 0;\n\n    @media (max-width: 768px) {\n      display: none;\n    }\n  }\n\n  .header-button {\n    flex-shrink: 0;\n  }\n\n  .mobile-wrapper {\n    display: none;\n    align-items: center;\n    justify-content: flex-end;\n    pointer-events: auto;\n\n    @media (max-width: 768px) {\n      display: flex;\n    }\n  }\n\n  .login-link {\n    white-space: nowrap;\n    background: rgba(0, 0, 0, 0.15);\n\n    @media (max-width: 768px) {\n      background: none;\n      color: var(--color-action-default);\n    }\n  }\n\n  .mobile-search {\n    display: none;\n\n    @media (max-width: 768px) {\n      display: block;\n    }\n  }\n"]);
                return Ri = function() {
                    return n
                }, n
            }

            function Ei() {
                var n = (0, d.Z)(["\n  padding-top: calc(var(--spacing-sm) * 2 + 6rem + 2px + 1.3rem);\n  @media (max-width: 768px) {\n    padding-top: calc(2rem + 3.92rem + var(--spacing-sm) + var(--font-size-label-1) * 1.2 + 17px);\n  }\n"]);
                return Ei = function() {
                    return n
                }, n
            }
            var Ti = u.ZP.div.withConfig({
                    componentId: "sc-587ac77e-0"
                })(Li()),
                Oi = (0, u.ZP)(ci).attrs({
                    style: "primary"
                }).withConfig({
                    componentId: "sc-587ac77e-1"
                })(Mi()),
                Bi = u.ZP.header.withConfig({
                    componentId: "sc-587ac77e-2"
                })(Ri(), Oi),
                Ai = (0, u.iv)(Ei());

            function Hi(n) {
                var e = n.navigationGroups,
                    t = n.searchPrompt,
                    i = n.searchResultsLink,
                    a = n.loginButton,
                    o = n.getStartedButton,
                    d = n.getStartedMobileButton,
                    u = n.updatesButton,
                    p = I(),
                    h = (0, m.R)(p),
                    g = h.isScrolled,
                    f = h.isMobileMenuOpen,
                    v = h.megaMenuHasTrappedFocus,
                    w = h.theme,
                    b = (0, An.useRouter)().asPath,
                    y = (0, c.useCallback)((function() {
                        p.isMobileMenuOpen = !f
                    }), [p, f]),
                    j = wt(),
                    k = (0, lt.Z)(ut(), 2),
                    Z = k[0],
                    _ = k[1],
                    N = (0, c.useCallback)((function(n) {
                        var e = n.scroll;
                        p.themeUnderHeader = _(e), p.isScrolled = e > 64
                    }), [p, _]),
                    C = (0, ct.LZ)(N);
                (0, c.useEffect)((function() {
                    p.isMobileMenuOpen = !1, p.themeUnderHeader = _((null === C || void 0 === C ? void 0 : C.scroll) || 0)
                }), [p, b, C, _]);
                var P = (0, c.useCallback)((function() {
                        p.isMobileMenuOpen = !1, p.clickedMegaMenuId = null, p.hoveredMegaMenuId = null
                    }), [p]),
                    S = x(),
                    z = S.handleWrapper2Enter,
                    L = S.handleWrapper2Leave;
                return (0, c.useEffect)((function() {
                    var n;
                    f ? null === C || void 0 === C || C.stop() : (null === C || void 0 === C || C.start(), null === (n = Z.current) || void 0 === n || n.focus())
                }), [f, C, Z]), (0, c.useEffect)((function() {
                    var n = function() {
                        return P()
                    };
                    return window.addEventListener("resize", n),
                        function() {
                            window.removeEventListener("resize", n)
                        }
                }), [P]), (0, l.jsxs)(Bi, {
                    className: (0, an.Z)("theme-" + w, {
                        scrolled: g
                    }),
                    ref: Z,
                    tabIndex: -1,
                    children: [(0, l.jsx)(Ti, {
                        className: "backdrop"
                    }), (0, l.jsx)("div", {
                        inert: v ? "" : void 0,
                        children: (0, l.jsx)(di, {})
                    }), (0, l.jsxs)("div", {
                        className: "header-container",
                        children: [(0, l.jsx)("div", {
                            className: "left-wrapper desktop-only",
                            children: (0, l.jsx)("div", {
                                className: "nav-wrapper",
                                onMouseEnter: z,
                                onMouseLeave: L,
                                children: (0, l.jsx)(vi, {
                                    navigationGroups: e,
                                    updatesButton: u
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: "center-wrapper",
                            inert: v ? "" : void 0,
                            children: [(0, l.jsx)(jt, {
                                className: "hamburger",
                                open: f,
                                onClick: y
                            }), (0, l.jsxs)(Ve, (0, s.Z)((0, r.Z)({}, j), {
                                className: (0, an.Z)("logo-link", {
                                    scrolled: g
                                }),
                                children: [(0, l.jsx)("span", {
                                    className: "sr-only",
                                    children: "Patreon"
                                }), (0, l.jsx)(xt, {
                                    className: "wordmark"
                                }), (0, l.jsx)(gt, {
                                    className: "logomark"
                                })]
                            }))]
                        }), (0, l.jsxs)("div", {
                            className: "right-wrapper",
                            inert: v ? "" : void 0,
                            children: [(0, l.jsx)(ri, {
                                placeholder: t,
                                resultsLink: i
                            }), a && (0, l.jsx)(ci, {
                                label: a.label,
                                page: a.page,
                                style: "secondary",
                                external_url: a.external_url,
                                genericClickDetails: a.genericClickDetails,
                                className: "header-button",
                                target: "_self"
                            }), o && (0, l.jsx)(Oi, {
                                label: o.label,
                                page: o.page,
                                external_url: o.external_url,
                                genericClickDetails: o.genericClickDetails,
                                className: "header-button",
                                target: "_self"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "mobile-wrapper",
                            inert: v ? "" : void 0,
                            children: [a && (0, l.jsx)(ci, {
                                label: a.label,
                                page: a.page,
                                style: "text-only",
                                external_url: a.external_url,
                                genericClickDetails: a.genericClickDetails,
                                target: "_self"
                            }), d && (0, l.jsx)(Oi, {
                                label: d.label,
                                page: d.page,
                                external_url: d.external_url,
                                genericClickDetails: d.genericClickDetails,
                                target: "_self"
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: "mobile-search",
                        inert: v ? "" : void 0,
                        children: (0, l.jsx)(ri, {
                            style: "mobile",
                            placeholder: t,
                            resultsLink: i
                        })
                    }), (0, l.jsx)(Pi, {
                        navigationGroups: e,
                        isOpen: f,
                        closeCallback: P,
                        getStartedButton: o,
                        updatesButton: u
                    }), (0, l.jsx)(Ht, {
                        navigationGroups: e,
                        closeCallback: P
                    })]
                })
            }
            var Fi = t(490),
                Ui = t(3851),
                Di = t.n(Ui);

            function Wi() {
                var n = (0, d.Z)(["\n  letter-spacing: -0.02em;\n"]);
                return Wi = function() {
                    return n
                }, n
            }
            var Gi = u.ZP.span.withConfig({
                componentId: "sc-1f036cff-0"
            })(Wi());

            function qi(n) {
                var e = n.split("rt");
                return e.length > 1 ? e.map((function(n, t) {
                    return (0, l.jsxs)(c.Fragment, {
                        children: [n, t < e.length - 1 && (0, l.jsx)(Gi, {
                            children: "rt"
                        })]
                    }, t)
                })) : n
            }

            function Ki() {
                var n = (0, d.Z)(["\n          display: block;\n        "]);
                return Ki = function() {
                    return n
                }, n
            }

            function Yi() {
                var n = (0, d.Z)(["\n  font: var(--font-", ");\n  letter-spacing: ", "em;\n  ", "\n"]);
                return Yi = function() {
                    return n
                }, n
            }
            var Vi = u.ZP.div.withConfig({
                    componentId: "sc-e8472d59-0"
                })(Yi(), (function(n) {
                    return "h".concat(n.$size)
                }), (function(n) {
                    return -.01 * (n.$size < 4 ? 6 : 3)
                }), (function(n) {
                    return n.$useSpan ? (0, u.iv)(Ki()) : ""
                })),
                Ji = c.forwardRef((function(n, e) {
                    var t = n.size,
                        i = void 0 === t ? 1 : t,
                        a = n.useSpan,
                        r = n.children,
                        o = n.className,
                        c = n.id;
                    return (0, l.jsx)(Vi, {
                        as: a ? "span" : "h".concat(i),
                        ref: e,
                        $size: i,
                        $useSpan: a,
                        className: o,
                        id: c,
                        children: "string" === typeof r ? qi(r) : r
                    })
                }));
            Ji.displayName = "Heading";
            var $i = Ji,
                Xi = t(5935);

            function Qi(n) {
                var e = n.text;
                return e ? (0, l.jsx)(l.Fragment, {
                    children: (0, Xi.ZP)(e, {
                        replace: function(n) {
                            if ((0, Wt.Z)(n, Xi.W_) && "a" === n.tagName && n.attribs) {
                                var e = {
                                    externalUrl: "#",
                                    useChildren: !0
                                };
                                return n.attribs["data-gcd"] && (e.genericClickDetails = n.attribs["data-gcd"]), n.attribs["data-page-data"] ? (e.page = JSON.parse(n.attribs["data-page-data"]), delete e.externalUrl) : n.attribs["data-id"] && n.attribs["data-slug"] && n.attribs["data-locale"] ? (e.page = {
                                    id: +n.attribs["data-id"],
                                    Slug: n.attribs["data-slug"],
                                    locale: n.attribs["data-locale"]
                                }, delete e.externalUrl) : n.attribs.href && (e.externalUrl = n.attribs.href), (0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, e), {
                                    children: (0, Xi.du)(n.children)
                                }))
                            }
                            return n
                        }
                    })
                }) : null
            }

            function na() {
                var n = (0, d.Z)(["\n  margin-bottom: 0.6em;\n\n  &.inline {\n    float: left;\n  }\n\n  &.fine-print {\n    opacity: 0.5;\n  }\n\n  &.text-right {\n    text-align: right;\n  }\n\n  &.text-center {\n    text-align: center;\n  }\n\n  &.text-left {\n    text-align: left;\n  }\n"]);
                return na = function() {
                    return n
                }, n
            }
            var ea = (0, u.ZP)($i).withConfig({
                componentId: "sc-6e48539f-0"
            })(na());

            function ta(n) {
                var e, t = n.data,
                    i = n.className,
                    a = {};
                return a.className = t.customTune ? "".concat(t.customTune, " ") : "", (null === (e = t.alignmentTune) || void 0 === e ? void 0 : e.alignment) && (a.className += "text-".concat(t.alignmentTune.alignment, " ")), i && (a.className += i), (0, l.jsx)(ea, (0, s.Z)((0, r.Z)({
                    size: t.level
                }, a), {
                    children: (0, l.jsx)(Qi, {
                        text: null === t || void 0 === t ? void 0 : t.text
                    })
                }))
            }

            function ia() {
                var n = (0, d.Z)(["\n  display: flex;\n  justify-content: ", ";\n  margin-bottom: 1.3em;\n"]);
                return ia = function() {
                    return n
                }, n
            }
            var aa = u.ZP.div.withConfig({
                componentId: "sc-42b34c08-0"
            })(ia(), (function(n) {
                return function(n) {
                    switch (n) {
                        case "center":
                            return "center";
                        case "right":
                            return "end";
                        default:
                            return "start"
                    }
                }(n.$alignment)
            }));

            function ra(n) {
                var e, t = n.data,
                    i = n.className,
                    a = {
                        external_url: null === t || void 0 === t ? void 0 : t.link,
                        label: null === t || void 0 === t ? void 0 : t.text,
                        style: (null === t || void 0 === t ? void 0 : t.style) || "primary",
                        genericClickDetails: null === t || void 0 === t ? void 0 : t.gcd
                    };
                return t.pageData ? (a.page = t.pageData, a.external_url = void 0) : t.id && t.slug && t.locale && (a.page = {
                    id: +t.id,
                    Slug: t.slug,
                    locale: t.locale
                }, a.external_url = void 0), a.className = i, (0, l.jsx)(aa, {
                    $alignment: null === (e = t.alignmentTune) || void 0 === e ? void 0 : e.alignment,
                    children: (0, l.jsx)(ci, (0, r.Z)({}, a))
                })
            }

            function oa(n) {
                return +n.toFixed(3)
            }

            function la(n) {
                return "string" === typeof n ? parseFloat(n) : n
            }

            function ca(n, e) {
                return n = la(n), "".concat(oa(10 / e * 100 * n), "vw")
            }

            function sa(n, e) {
                return n = la(n), "".concat(oa(n * Math.max(1, 10 * e)), "px")
            }

            function da(n, e) {
                return n = la(n), "".concat(oa(n * e * 10), "px")
            }

            function ua(n) {
                return ca(n, 390)
            }

            function ma(n) {
                return da(n, 1)
            }

            function pa(n) {
                var e, t, i, a = window.innerWidth;
                return a <= 768 ? (e = ua(n), t = function(n) {
                    return sa(n, .1)
                }(n), i = function(n) {
                    return da(n, 1.5)
                }(n)) : (e = function(n) {
                    return ca(n, 1920)
                }(n), t = function(n) {
                    return sa(n, .1)
                }(n), i = ma(n)), st(parseFloat(e) * a / 100, parseFloat(t), parseFloat(i))
            }
            var ha = function() {
                var n = (0, c.useState)(1),
                    e = n[0],
                    t = n[1],
                    i = B().isMobile,
                    a = (0, O.Z)().width,
                    r = (0, c.useCallback)((function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.innerWidth,
                            e = i ? 375 : 1920;
                        return n / e
                    }), [i]);
                return (0, c.useEffect)((function() {
                    t(r())
                }), [a, i, r]), {
                    scale: e,
                    getScale: r,
                    width: a
                }
            };

            function ga(n) {
                var e, t, i;
                if (!n) return {};
                var a, o, l, c, s, d, u, m, p, h = null === n || void 0 === n || null === (e = n.data) || void 0 === e ? void 0 : e.attributes,
                    g = (0, r.Z)({}, null === h || void 0 === h ? void 0 : h.formats);
                if ((null === h || void 0 === h ? void 0 : h.mime.startsWith("image/svg")) && h) return {
                    original: h
                };
                (null === (t = n.data) || void 0 === t || null === (i = t.attributes) || void 0 === i ? void 0 : i.url) && (g.original = {
                    ext: null === (a = n.data) || void 0 === a ? void 0 : a.attributes.ext,
                    hash: null === (o = n.data) || void 0 === o ? void 0 : o.attributes.hash,
                    height: null === (l = n.data) || void 0 === l ? void 0 : l.attributes.height,
                    mime: null === (c = n.data) || void 0 === c ? void 0 : c.attributes.mime,
                    name: null === (s = n.data) || void 0 === s ? void 0 : s.attributes.name,
                    path: null === (d = n.data) || void 0 === d ? void 0 : d.attributes.path,
                    size: null === (u = n.data) || void 0 === u ? void 0 : u.attributes.size,
                    url: null === (m = n.data) || void 0 === m ? void 0 : m.attributes.url,
                    width: null === (p = n.data) || void 0 === p ? void 0 : p.attributes.width
                });
                return g
            }

            function fa(n) {
                return Object.keys(n).map((function(e) {
                    return (0, s.Z)((0, r.Z)({}, n[e]), {
                        name: e
                    })
                })).filter((function(n) {
                    return n.width
                })).sort((function(n, e) {
                    return n.width - e.width
                }))
            }

            function va(n, e) {
                var t, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    r = null === (t = e && n.find((function(n) {
                        return n.name === e
                    })) || n[n.length - 1]) || void 0 === t ? void 0 : t.width,
                    o = null === t || void 0 === t ? void 0 : t.height;
                if ("number" === typeof r && "number" === typeof o) return r *= a, o *= a, (1 === n.length || i) && (r /= 2, o /= 2), {
                    width: r,
                    height: o
                }
            }

            function xa(n) {
                var e = n.width,
                    t = n.height;
                return {
                    width: "".concat(e / 10, "rem"),
                    height: "".concat(t / 10, "rem")
                }
            }

            function wa(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
                return "(max-width: 768px) ".concat(ua(e), ", ").concat(ma(n))
            }

            function ba(n) {
                var e, t = n.image,
                    i = n.loading,
                    a = void 0 === i ? "lazy" : i,
                    o = n.decoding,
                    c = void 0 === o ? "async" : o,
                    s = n.style,
                    d = void 0 === s ? {} : s,
                    u = n.transparent,
                    m = void 0 !== u && u,
                    p = n.useRetina,
                    h = void 0 !== p && p,
                    g = n.preferredSize,
                    f = n.useRemSize,
                    v = void 0 !== f && f,
                    x = n.scaleFactor,
                    w = void 0 === x ? 1 : x,
                    y = n.sizes,
                    j = (0, b.Z)(n, ["image", "loading", "decoding", "style", "transparent", "useRetina", "preferredSize", "useRemSize", "scaleFactor", "sizes"]),
                    k = (null === t || void 0 === t ? void 0 : t.image) || (null === t || void 0 === t ? void 0 : t.media);
                if (!k) return null;
                var Z = null === k || void 0 === k || null === (e = k.data) || void 0 === e ? void 0 : e.attributes,
                    _ = ga(k);
                if ((null === Z || void 0 === Z ? void 0 : Z.mime.startsWith("image/svg")) && Z) return (0, l.jsx)("img", (0, r.Z)({
                    src: F(Z),
                    alt: A(t) || "",
                    width: Z.width || void 0,
                    height: Z.height || void 0
                }, j));
                if (0 === Object.keys(_).length) return null;
                var N = fa(_),
                    C = null === Z || void 0 === Z ? void 0 : Z.colors;
                C && !m && (d.backgroundColor = C[0]);
                var I = va(N, g, h, w);
                if (v && I) {
                    var P = xa(I);
                    Object.assign(d, P), y || (y = wa(P.width))
                }
                return y || (y = "100vw"), (0, l.jsx)("img", (0, r.Z)({
                    src: F(N[0]),
                    alt: A(t) || "",
                    width: null === I || void 0 === I ? void 0 : I.width,
                    height: null === I || void 0 === I ? void 0 : I.height,
                    loading: a,
                    decoding: c,
                    srcSet: N.map((function(n) {
                        return "".concat(F(n), " ").concat(n.width, "w")
                    })).join(","),
                    style: d,
                    sizes: y
                }, j))
            }

            function ya() {
                var n = (0, d.Z)(["\n  filter: ", ";\n  &.align-center {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  &.align-right {\n    margin-left: auto;\n  }\n\n  &.bordered {\n    border: 1px solid var(--color-neutral-80, #ccc);\n  }\n"]);
                return ya = function() {
                    return n
                }, n
            }
            var ja = (0, u.ZP)(ba).withConfig({
                componentId: "sc-b3ce4914-0"
            })(ya(), (function(n) {
                return n.addBoxShadow ? "drop-shadow(30px 30px 30px rgba(4, 64, 80, 0.3))" : void 0
            }));

            function ka(n) {
                var e, t = n.data,
                    i = n.className,
                    a = (0, An.useRouter)(),
                    o = null === a || void 0 === a ? void 0 : a.asPath.includes("/updates"),
                    c = {};
                i && (c.className = i), (null === (e = t.alignmentTune) || void 0 === e ? void 0 : e.alignment) && (c.className = (0, an.Z)(c.className, "align-".concat(t.alignmentTune.alignment), [(null === t || void 0 === t ? void 0 : t.withBorder) && "bordered"]));
                var d = (0, l.jsx)(ja, (0, s.Z)((0, r.Z)({}, c), {
                    addBoxShadow: o,
                    image: {
                        caption: t.caption || t.file.alt,
                        image: {
                            data: {
                                attributes: t.file
                            }
                        }
                    }
                }));
                return t.link ? (0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, t.link), {
                    useChildren: !0,
                    children: d
                })) : d
            }

            function Za(n) {
                var e = n.children,
                    t = e ? (0, Xi.ZP)(e) : null;
                return (0, l.jsx)("li", {
                    children: t
                })
            }

            function _a(n) {
                var e = n.Tag,
                    t = n.items,
                    i = (0, b.Z)(n, ["Tag", "items"]);
                return (0, l.jsx)(e, (0, s.Z)((0, r.Z)({}, i), {
                    children: t.map((function(n, t) {
                        var a, o = "string" === typeof n ? n : n.text;
                        return o ? (0, l.jsx)(Za, {
                            children: o
                        }, t) : (0, l.jsxs)(Za, {
                            children: [(0, Xi.ZP)(null === n || void 0 === n ? void 0 : n.content), (null === n || void 0 === n || null === (a = n.items) || void 0 === a ? void 0 : a.length) > 0 && (0, l.jsx)(_a, (0, r.Z)({
                                Tag: e,
                                items: n.items
                            }, i))]
                        }, t)
                    }))
                }))
            }

            function Na(n) {
                var e = n.data,
                    t = n.className,
                    i = void 0 === t ? "" : t,
                    a = {};
                i && (a.className = i);
                var o = "ordered" === (null === e || void 0 === e ? void 0 : e.style) ? "ol" : "ul";
                return e && (0, l.jsx)(_a, (0, r.Z)({
                    Tag: o,
                    items: e.items
                }, a))
            }

            function Ca() {
                var n = (0, d.Z)(["\n  margin-bottom: 1.3em;\n\n  &.text-base {\n    line-height: 120%;\n    letter-spacing: -0.02em;\n    font-size: var(--font-size-body);\n  }\n\n  &.text-lg {\n    font-size: var(--font-size-body-lg);\n  }\n\n  &.text-right {\n    text-align: right;\n  }\n\n  &.text-center {\n    text-align: center;\n  }\n\n  &.text-left {\n    text-align: left;\n  }\n\n  &.fine-print {\n    opacity: 0.5;\n  }\n\n  &.inline {\n    float: left;\n  }\n\n  a {\n    color: blue;\n    text-decoration: underline;\n\n    &:hover {\n      color: rebeccapurple;\n    }\n  }\n"]);
                return Ca = function() {
                    return n
                }, n
            }
            var Ia = u.ZP.p.withConfig({
                componentId: "sc-97fa2ccb-0"
            })(Ca());

            function Pa(n) {
                var e, t = n.data,
                    i = n.className,
                    a = void 0 === i ? "" : i,
                    o = {};
                return o.className = t.customTune ? "".concat(t.customTune, " ") : "", (null === (e = t.alignmentTune) || void 0 === e ? void 0 : e.alignment) && (o.className += "text-".concat(t.alignmentTune.alignment, " ")), a && (o.className += a), (0, l.jsx)(Ia, (0, s.Z)((0, r.Z)({}, o), {
                    children: (0, l.jsx)(Qi, {
                        text: null === t || void 0 === t ? void 0 : t.text
                    })
                }))
            }
            var Sa = t(8090),
                za = t.n(Sa);

            function La() {
                var n = (0, d.Z)(["\n  &.block-image {\n    display: flex;\n    align-items: center;\n    margin-bottom: var(--spacing-sm);\n    flex-wrap: wrap;\n    gap: 2rem;\n    &.block-center {\n      justify-content: center;\n    }\n    &.block-right {\n      justify-content: flex-end;\n    }\n  }\n\n  &.block-image-nowrap {\n    flex-wrap: nowrap;\n  }\n\n  figure {\n    width: 100%;\n    height: 0;\n    padding-bottom: 56.25%;\n    position: relative;\n    margin: var(--spacing-base) 0;\n\n    iframe {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n\n    @media (max-width: 480px) {\n      margin: var(--spacing-sm) 0;\n    }\n  }\n\n  hr {\n    margin: var(--spacing-base) 0;\n  }\n\n  a:not(.button) {\n    color: var(--color-highlight);\n    text-decoration: underline;\n\n    &:hover {\n      color: var(--color-highlight-light);\n    }\n  }\n"]);
                return La = function() {
                    return n
                }, n
            }

            function Ma() {
                var n = (0, d.Z)(["\n  background-color: red;\n  font-weight: bold;\n\n  > h2 {\n    background-color: red;\n  }\n"]);
                return Ma = function() {
                    return n
                }, n
            }
            var Ra = (0, u.ZP)("div").withConfig({
                    componentId: "sc-13c2a112-0"
                })(La()),
                Ea = (0, u.ZP)(Di()).withConfig({
                    componentId: "sc-13c2a112-1"
                })(Ma());

            function Ta(n) {
                var e = n.text,
                    t = n.minHeadingLevel,
                    i = n.size,
                    a = void 0 === i ? "default" : i;
                if (!e) return null;
                var o = JSON.parse(e),
                    c = function(n) {
                        return n.filter((function(n) {
                            return "mediaLib" !== n.type
                        }))
                    }(o.blocks);
                c = function(n, e) {
                    if (e) {
                        var t = 1 / 0,
                            i = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var o, l = n[Symbol.iterator](); !(i = (o = l.next()).done); i = !0) {
                                var c = o.value;
                                "header" === c.type && (t = Math.min(t, c.data.level))
                            }
                        } catch (f) {
                            a = !0, r = f
                        } finally {
                            try {
                                i || null == l.return || l.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        var s = e - t;
                        if (s > 0) {
                            var d = !0,
                                u = !1,
                                m = void 0;
                            try {
                                for (var p, h = n[Symbol.iterator](); !(d = (p = h.next()).done); d = !0) {
                                    var g = p.value;
                                    "header" === g.type && (g.data.level += s)
                                }
                            } catch (f) {
                                u = !0, m = f
                            } finally {
                                try {
                                    d || null == h.return || h.return()
                                } finally {
                                    if (u) throw m
                                }
                            }
                        }
                    }
                    return n
                }(c, t), c = function(n) {
                    var e = [],
                        t = null,
                        i = null,
                        a = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var l, c = n[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                            var s, d, u, m, p, h, g = l.value;
                            t && "header" === g.type && "header" === t.type && g.data.level === t.data.level && (null === (s = g.tunes) || void 0 === s || null === (d = s.alignmentTune) || void 0 === d ? void 0 : d.alignment) === (null === (u = t.tunes) || void 0 === u || null === (m = u.alignmentTune) || void 0 === m ? void 0 : m.alignment) && (null === (p = g.tunes) || void 0 === p ? void 0 : p.customTune) === (null === (h = t.tunes) || void 0 === h ? void 0 : h.customTune) ? (i || (i = t), i.data.text = "".concat(i.data.text, "<br>").concat(g.data.text)) : (i = null, e.push(g)), t = g
                        }
                    } catch (f) {
                        r = !0, o = f
                    } finally {
                        try {
                            a || null == c.return || c.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return e
                }(c), c = function(n) {
                    var e = [],
                        t = null,
                        i = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var o, l = n[Symbol.iterator](); !(i = (o = l.next()).done); i = !0) {
                            var c = o.value;
                            if ("image" !== c.type) {
                                if (t && "paragraph" === c.type) {
                                    var s, d = ((null === (s = c.data) || void 0 === s ? void 0 : s.text) || "").trim();
                                    if (d.startsWith("<a") && d.endsWith("</a>")) {
                                        var u = Fi.zD(d)("a");
                                        if (1 === u.length) {
                                            var m = {},
                                                p = u.data();
                                            p.gcd && (m.genericClickDetails = p.gcd), p.pageData ? m.page = p.pageData : p.id && p.slug && p.locale ? m.page = {
                                                id: +p.id,
                                                Slug: p.slug,
                                                locale: p.locale
                                            } : m.externalUrl = u.attr("href"), t.data.link = m;
                                            var h = u.text();
                                            h && !t.data.caption && (t.data.caption = h), t = null;
                                            continue
                                        }
                                    }
                                }
                                t = null, e.push(c)
                            } else t = c, e.push(t)
                        }
                    } catch (g) {
                        a = !0, r = g
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return e
                }(c);
                var s = function(n) {
                    var e = [],
                        t = null,
                        i = [],
                        a = null,
                        r = null;
                    return n.reduce((function(o, l, c) {
                        var s, d, u, m = function() {
                            var n = {
                                key: "block-".concat(c),
                                data: i
                            };
                            a && (n.variant = a), r && (n.alignment = "block-".concat(r)), e.push(n), i = [], t = null, a = null
                        };
                        return "image" === l.type && "inline" === (null === l || void 0 === l || null === (s = l.tunes) || void 0 === s ? void 0 : s.customTune) ? (t && "image" !== t && m(), i.push(l), t = "image", r = null === (d = l.tunes) || void 0 === d || null === (u = d.alignmentTune) || void 0 === u ? void 0 : u.alignment, a = "block-image") : (t && "default" !== t && m(), i.push(l), t = "default", r = null), n.length - 1 === c && m(), (0, Wn.Z)(o).concat([l])
                    }), []), e
                }(c = function(n) {
                    var e = !0,
                        t = !1,
                        i = void 0;
                    try {
                        for (var a, o = n[Symbol.iterator](); !(e = (a = o.next()).done); e = !0) {
                            var l = a.value;
                            l.tunes && (l.data = (0, r.Z)({}, l.data, l.tunes))
                        }
                    } catch (c) {
                        t = !0, i = c
                    } finally {
                        try {
                            e || null == o.return || o.return()
                        } finally {
                            if (t) throw i
                        }
                    }
                    return n
                }(c));
                return (0, l.jsx)(l.Fragment, {
                    children: s.map((function(n, e) {
                        return (0, l.jsx)(Ra, {
                            className: (0, an.Z)("block", n.alignment, n.variant, "block-image" === n.variant && n.data.length <= 2 && "block-image-nowrap"),
                            children: (0, l.jsx)(Ea, {
                                data: {
                                    blocks: n.data,
                                    time: o.time,
                                    version: o.version
                                },
                                renderers: {
                                    paragraph: Pa,
                                    header: ta,
                                    image: ka,
                                    list: Na,
                                    EditorjsButton: ra
                                },
                                config: {
                                    code: {
                                        className: za().code
                                    },
                                    delimiter: {
                                        className: ""
                                    },
                                    embed: {
                                        className: za().embed
                                    },
                                    header: {
                                        className: "heading"
                                    },
                                    image: {
                                        className: za().img,
                                        actionsClassNames: {
                                            stretched: za().imgStretched,
                                            withBorder: za().imgBordered,
                                            withBackground: za().imgBackgrounded
                                        }
                                    },
                                    list: {
                                        className: za().listInside
                                    },
                                    paragraph: {
                                        className: (0, an.Z)("text-base", "large" === a ? "text-lg" : void 0),
                                        actionsClassNames: {
                                            alignment: "text-{alignment}"
                                        }
                                    },
                                    EditorjsButton: {},
                                    quote: {
                                        className: za().blockquote
                                    },
                                    table: {
                                        className: za().table
                                    }
                                }
                            })
                        }, "".concat(n.key, "-").concat(String(e)))
                    }))
                })
            }

            function Oa() {
                var n = (0, d.Z)(["\n  --font-size-h1: 170px;\n  --font-size-h2: 96px;\n  --font-size-h3: 72px;\n  --font-size-h4: 40px;\n\n  --line-height-h1: 87%;\n  --line-height-h2: 105%;\n  --line-height-h3: 102%;\n  --line-height-h4: 120%;\n\n  --font-h1: var(--font-weight-extra-light) var(--font-size-h1) / var(--line-height-h1) var(--font-family-heading);\n  --font-h2: var(--font-weight-light) var(--font-size-h2) / var(--line-height-h2) var(--font-family-heading);\n  --font-h3: var(--font-weight-light) var(--font-size-h3) / var(--line-height-h3) var(--font-family-heading);\n  --font-h4: var(--font-weight-normal) var(--font-size-h4) / var(--line-height-h4) var(--font-family-heading);\n\n  --font-sub-h1-light: var(--font-weight-normal) 34px/120% var(--font-family-heading);\n\n  width: 100%;\n  max-width: calc(128rem + 2 * var(--spacing-base));\n  padding: var(--spacing-base);\n  padding-top: ", ";\n  padding-bottom: ", ";\n  margin: var(--spacing-base) auto;\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  @media (max-width: 768px) {\n    --font-size-h1: 54px;\n    --font-size-h2: 48px;\n    --font-size-h3: 40px;\n    --font-size-h4: 24px;\n\n    --line-height-h1: 104%;\n    --line-height-h3: 100%;\n\n    --font-h1: var(--font-weight-extra-light) var(--font-size-h1) / var(--line-height-h1) var(--font-family-heading);\n    --font-h2: var(--font-weight-light) var(--font-size-h2) / var(--line-height-h2) var(--font-family-heading);\n    --font-h3: var(--font-weight-light) var(--font-size-h3) / var(--line-height-h3) var(--font-family-heading);\n    --font-h4: var(--font-weight-normal) var(--font-size-h4) / var(--line-height-h4) var(--font-family-heading);\n\n    --font-sub-h1-light: var(--font-weight-normal) 34px/120% var(--font-family-heading);\n\n    padding: var(--spacing-sm);\n    margin: 0;\n  }\n"]);
                return Oa = function() {
                    return n
                }, n
            }

            function Ba(n) {
                var e = n.children,
                    t = n.mt,
                    i = void 0 === t || t,
                    a = n.mb,
                    r = void 0 === a || a,
                    o = n.pb,
                    c = void 0 === o || o,
                    s = n.pt,
                    d = void 0 === s || s;
                return (0, l.jsx)(Aa, {
                    mt: i,
                    mb: r,
                    pt: d,
                    pb: c,
                    children: e
                })
            }
            var Aa = u.ZP.section.withConfig({
                componentId: "sc-c04858c6-0"
            })(Oa(), (function(n) {
                return n.pt ? "" : 0
            }), (function(n) {
                return n.pb ? "" : 0
            }), (function(n) {
                return n.mt ? "" : 0
            }), (function(n) {
                return n.mb ? "" : 0
            }));

            function Ha() {
                var n = (0, d.Z)(["\n  &.full-width {\n    max-width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  @media (max-width: 768px) {\n    &.full-width {\n      margin: var(--spacing-sm) 0;\n      padding: 0;\n    }\n  }\n"]);
                return Ha = function() {
                    return n
                }, n
            }

            function Fa(n) {
                var e = n.content,
                    t = n.fullWidth,
                    i = n.className,
                    a = n.anchorId;
                if (!(null === e || void 0 === e ? void 0 : e.text)) return null;
                var r = t ? "div" : Ba;
                return (0, l.jsx)(r, {
                    children: (0, l.jsx)(Ua, {
                        id: null === a || void 0 === a ? void 0 : a.anchorId,
                        className: (0, an.Z)(i, {
                            "full-width": t
                        }),
                        children: (0, l.jsx)(Ta, {
                            text: e.text
                        })
                    })
                })
            }
            var Ua = u.ZP.div.withConfig({
                    componentId: "sc-44cfc186-0"
                })(Ha()),
                Da = t(377);

            function Wa() {
                var n = (0, d.Z)(["\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: var(--spacing-base);\n  align-items: center;\n  padding: var(--spacing-sm);\n  width: 100vw;\n  max-width: calc(100vw - (var(--spacing-xl) * 2));\n  max-height: calc(100vh - (var(--spacing-xl) * 2));\n  max-height: calc(100dvh - (var(--spacing-xl) * 2));\n\n  .image-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    place-content: center;\n  }\n\n  .image-item {\n    transition: opacity var(--animation-duration) var(--animation-timing);\n    opacity: 0;\n    grid-column: 1;\n    grid-row: 1;\n    overflow: hidden;\n    width: 100%;\n\n    &.active {\n      opacity: 1;\n    }\n  }\n\n  .media-gallery-image {\n    display: block;\n    object-fit: contain;\n    width: 100%;\n    height: 100%;\n    max-width: calc(100vw - (var(--spacing-xl) * 2.5));\n    max-height: calc(100vh - (var(--spacing-xl) * 2.5));\n    max-height: calc(100dvh - (var(--spacing-xl) * 2.5));\n  }\n\n  @media (max-width: 768px) {\n    gap: var(--spacing-xs);\n    padding: var(--spacing-xs);\n\n    max-width: calc(100vw - (var(--spacing-sm) * 2));\n    max-height: calc(100vh - (var(--spacing-sm) * 2));\n    max-height: calc(100dvh - (var(--spacing-sm) * 2));\n  }\n"]);
                return Wa = function() {
                    return n
                }, n
            }

            function Ga(n) {
                var e = n.images,
                    t = n.selectedIndex,
                    i = function() {
                        s(o > 0 ? o - 1 : e.length - 1)
                    },
                    a = function() {
                        o < e.length - 1 ? s(o + 1) : s(0)
                    },
                    r = (0, c.useState)(t),
                    o = r[0],
                    s = r[1];
                return (0, Da.Z)("ArrowLeft", i), (0, Da.Z)("ArrowRight", a), (0, c.useEffect)((function() {
                    s(t)
                }), [t]), (0, l.jsxs)(qa, {
                    children: [(0, l.jsx)("div", {
                        className: "nav-container",
                        children: (0, l.jsx)(cn, {
                            icon: (0, l.jsx)(ki, {}),
                            onClick: function() {
                                return i()
                            },
                            label: "Previous",
                            hideLabel: !0,
                            className: "inverse"
                        })
                    }), (0, l.jsx)("ul", {
                        className: "image-list",
                        children: e.map((function(n, e) {
                            return (0, l.jsx)("li", {
                                className: (0, an.Z)("image-item", {
                                    active: e === o
                                }),
                                children: (0, l.jsx)(ba, {
                                    image: n,
                                    className: "media-gallery-image"
                                })
                            }, n.id)
                        }))
                    }), (0, l.jsx)("div", {
                        className: "nav-container",
                        children: (0, l.jsx)(cn, {
                            icon: (0, l.jsx)(Ct, {}),
                            onClick: function() {
                                return a()
                            },
                            label: "Next",
                            hideLabel: !0,
                            className: "inverse"
                        })
                    })]
                })
            }
            var qa = u.ZP.article.withConfig({
                componentId: "sc-84f086c3-0"
            })(Wa());

            function Ka() {
                var n = (0, d.Z)(["\n  margin-bottom: var(--spacing-lg);\n\n  .media-gallery-header {\n    margin-bottom: var(--spacing-base);\n  }\n\n  .media-gallery-title {\n    font: var(--font-label-2);\n    letter-spacing: 0.036rem;\n    text-transform: uppercase;\n  }\n\n  .media-gallery-list {\n    display: grid;\n    gap: var(--spacing-sm);\n    grid-template-columns: 1fr 1fr 1fr;\n\n    @media (max-width: 768px) {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  .media-gallery-button {\n    aspect-ratio: 16 / 9;\n  }\n\n  .media-gallery-image {\n    width: 100%;\n    object-fit: cover;\n    max-height: 100%;\n  }\n"]);
                return Ka = function() {
                    return n
                }, n
            }

            function Ya(n) {
                var e = n.title,
                    t = n.images,
                    i = (0, c.useRef)(null),
                    a = (0, c.useState)(!1),
                    r = a[0],
                    o = a[1],
                    s = (0, c.useState)(0),
                    d = s[0],
                    u = s[1];
                return (null === t || void 0 === t ? void 0 : t.length) ? (0, l.jsxs)(Ja, {
                    children: [(0, l.jsx)("header", {
                        className: "media-gallery-header",
                        children: (0, l.jsx)("h2", {
                            className: "media-gallery-title",
                            children: e
                        })
                    }), (0, l.jsx)("div", {
                        className: "media-gallery-main",
                        children: (0, l.jsx)("ul", {
                            className: "media-gallery-list",
                            children: t.map((function(n) {
                                return (0, l.jsx)("li", {
                                    className: "media-gallery-item",
                                    children: (0, l.jsx)("button", {
                                        type: "button",
                                        className: "media-gallery-button",
                                        title: n.alternativeText,
                                        onClick: function(e) {
                                            e.preventDefault(), u(t.indexOf(n)), o(!0)
                                        },
                                        children: (0, l.jsx)(ba, {
                                            image: n,
                                            className: "media-gallery-image",
                                            sizes: "(min-width: 769px) 250px, (min-width: 640px) 50vw, 100vw"
                                        })
                                    })
                                }, n.id)
                            }))
                        })
                    }), (0, l.jsx)(yn, {
                        ref: i,
                        onClose: function() {
                            return o(!1)
                        },
                        open: r,
                        hideCancel: !0,
                        children: (0, l.jsx)(Ga, {
                            images: t,
                            selectedIndex: d
                        })
                    })]
                }) : null
            }
            var Va, Ja = u.ZP.aside.withConfig({
                componentId: "sc-832f577c-0"
            })(Ka());

            function $a() {
                return $a = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, $a.apply(this, arguments)
            }
            var Xa, Qa = function(n, e) {
                    return c.createElement("svg", $a({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        ref: e
                    }, n), Va || (Va = c.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5 5 5 5-5m-5 5V3"
                    })))
                },
                nr = (0, c.forwardRef)(Qa);

            function er() {
                return er = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, er.apply(this, arguments)
            }
            var tr = function(n, e) {
                    return c.createElement("svg", er({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 25 24",
                        ref: e
                    }, n), Xa || (Xa = c.createElement("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M18.5 13v6a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5 11-11"
                    })))
                },
                ir = (0, c.forwardRef)(tr);

            function ar() {
                var n = (0, d.Z)(["\n  .featured-image {\n    width: 100%;\n    margin-bottom: var(--spacing-base);\n    border-radius: 3rem;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n    }\n\n    &.no-image {\n      &::after {\n        content: '';\n        display: block;\n        padding-top: 100%;\n        background-color: var(--color-black);\n      }\n    }\n  }\n\n  .button-list {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-sm);\n    margin-bottom: var(--spacing-lg);\n  }\n\n  .link-list {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-xs);\n    margin-bottom: var(--spacing-xl);\n  }\n\n  .divider {\n    margin: var(--spacing-base) 0;\n  }\n\n  .categories-label {\n    font: var(--font-label-0);\n    letter-spacing: 0.056rem;\n    text-transform: uppercase;\n  }\n\n  .link {\n    text-decoration: underline;\n  }\n\n  .apps-link {\n    text-decoration: underline;\n    color: var(--color-neutral-50);\n  }\n"]);
                return ar = function() {
                    return n
                }, n
            }

            function rr(n) {
                var e = n.featureImage,
                    t = n.installLink,
                    i = n.siteLink,
                    a = n.supportLink,
                    o = n.privacyLink,
                    c = k().integrationSettings,
                    d = [{
                        key: "install",
                        link: t,
                        Icon: nr
                    }, {
                        key: "site",
                        link: i,
                        Icon: ir,
                        buttonProps: {
                            type: "secondary",
                            className: "bordered"
                        }
                    }].filter((function(n) {
                        var e = n.link;
                        return (null === e || void 0 === e ? void 0 : e.externalUrl) && (null === e || void 0 === e ? void 0 : e.text)
                    })),
                    u = [{
                        key: "support",
                        link: a
                    }, {
                        key: "privacy",
                        link: o
                    }].filter((function(n) {
                        var e = n.link;
                        return (null === e || void 0 === e ? void 0 : e.externalUrl) && (null === e || void 0 === e ? void 0 : e.text)
                    }));
                return (0, l.jsxs)(or, {
                    children: [(0, l.jsx)("figure", {
                        className: (0, an.Z)("featured-image", !e && "no-image"),
                        children: (0, l.jsx)(ba, {
                            image: e,
                            sizes: "(max-width: 768px) 100vw, 310px"
                        })
                    }), d.length > 0 && (0, l.jsx)("ul", {
                        className: "button-list",
                        children: d.map((function(n) {
                            var e = n.key,
                                t = n.link,
                                i = n.Icon,
                                a = n.buttonProps;
                            return (0, l.jsx)("li", {
                                className: "button-item",
                                children: (0, l.jsx)(cn, (0, s.Z)((0, r.Z)({
                                    tag: "a",
                                    icon: (0, l.jsx)(i, {}),
                                    href: t.externalUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }, a), {
                                    children: t.text
                                }))
                            }, e)
                        }))
                    }), u.length > 0 && (0, l.jsx)("ul", {
                        className: "link-list",
                        children: u.map((function(n) {
                            var e = n.key,
                                t = n.link;
                            return (0, l.jsx)("li", {
                                className: "link-item",
                                children: (0, l.jsx)("a", {
                                    href: t.externalUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "link",
                                    children: t.text
                                })
                            }, e)
                        }))
                    }), (0, l.jsx)("hr", {
                        className: "divider"
                    }), (0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, null === c || void 0 === c ? void 0 : c.appsPageLink), {
                        className: "apps-link"
                    }))]
                })
            }
            var or = u.ZP.aside.withConfig({
                componentId: "sc-26d07d40-0"
            })(ar());

            function lr() {
                var n = (0, d.Z)(["\n  display: flex;\n  gap: var(--spacing-base);\n\n  .featured-figure {\n    width: 20rem;\n    flex-shrink: 0;\n  }\n\n  .featured-image {\n    width: 100%;\n  }\n\n  .article-teaser {\n    margin-bottom: var(--spacing-xs);\n  }\n\n  .article-title {\n    font: var(--font-label-3);\n    margin-bottom: var(--spacing-xs);\n  }\n\n  .article-link {\n    text-decoration: underline;\n    color: var(--color-highlight);\n    font: var(--font-label-1);\n    text-transform: uppercase;\n\n    &:hover {\n      color: var(--color-highlight-light);\n    }\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    gap: var(--spacing-sm);\n\n    .featured-figure {\n      width: 100%;\n    }\n  }\n"]);
                return lr = function() {
                    return n
                }, n
            }

            function cr(n) {
                var e = n.Headline,
                    t = n.teaserCopy,
                    i = n.featureImage,
                    a = n.link;
                return (0, l.jsxs)(sr, {
                    children: [(0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, a), {
                        useChildren: !0,
                        children: (0, l.jsx)("figure", {
                            className: "featured-figure",
                            children: (0, l.jsx)(ba, {
                                image: i,
                                className: "featured-image",
                                sizes: "(min-width: 769px) 250px, 100vw"
                            })
                        })
                    })), (0, l.jsxs)("div", {
                        className: "article-content",
                        children: [(0, l.jsx)("header", {
                            className: "article-header",
                            children: (0, l.jsx)("h4", {
                                className: "article-title",
                                children: e
                            })
                        }), (0, l.jsx)("div", {
                            className: "article-teaser",
                            children: (0, l.jsx)("p", {
                                className: "article-teaser-copy",
                                children: t
                            })
                        }), (0, l.jsx)("footer", {
                            className: "article-footer",
                            children: (0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, a), {
                                className: "article-link"
                            }))
                        })]
                    })]
                })
            }
            var sr = u.ZP.article.withConfig({
                componentId: "sc-53a090a6-0"
            })(lr());

            function dr() {
                var n = (0, d.Z)(["\n  .teasers-header {\n    font: var(--font-label-2);\n    text-transform: uppercase;\n    letter-spacing: 0.036rem;\n    margin-bottom: var(--spacing-base);\n  }\n\n  .teasers-list {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-lg);\n  }\n"]);
                return dr = function() {
                    return n
                }, n
            }

            function ur(n) {
                var e = n.title,
                    t = n.newsItems;
                return (null === t || void 0 === t ? void 0 : t.length) ? (0, l.jsxs)(mr, {
                    children: [(0, l.jsx)("header", {
                        className: "teasers-header",
                        children: (0, l.jsx)("h2", {
                            className: "teasers-title",
                            children: e
                        })
                    }), (0, l.jsx)("ul", {
                        className: "teasers-list",
                        children: t.map((function(n) {
                            return (0, l.jsx)("li", {
                                className: "teasers-item",
                                children: (0, l.jsx)(cr, (0, r.Z)({}, n))
                            }, n.id)
                        }))
                    })]
                }) : null
            }
            var mr = u.ZP.section.withConfig({
                componentId: "sc-fa9f472e-0"
            })(dr());

            function pr() {
                var n = (0, d.Z)(["\n  max-width: 1170px;\n  width: 100%;\n  max-width: 1170px;\n  padding-left: 10rem;\n  padding-right: 10rem;\n  padding-top: 6.7rem;\n  padding-bottom: 10rem;\n  margin: 0 auto;\n  display: flex;\n  gap: calc(var(--spacing-xl) * 2);\n  font-size: var(--font-size-body);\n  font-weight: 300;\n\n  .meta-wrapper {\n    width: 31rem;\n    flex-shrink: 0;\n  }\n\n  .integration-title {\n    font: var(--font-h4);\n    letter-spacing: -0.16rem;\n    margin-bottom: 1.6rem;\n  }\n\n  .short-description {\n    font-weight: 200;\n  }\n\n  .divider {\n    margin: var(--spacing-base) 0;\n    border-color: var(--color-neutral-80);\n  }\n\n  .long-description,\n  .pricing-and-perks {\n    margin: 0;\n    padding: 0;\n    margin-bottom: var(--spacing-xl);\n  }\n\n  @media (max-width: 768px) {\n    & {\n      padding-right: 2rem;\n      padding-left: 2rem;\n      flex-direction: column;\n    }\n\n    .meta-wrapper,\n    .main-wrapper {\n      width: 100%;\n    }\n  }\n"]);
                return pr = function() {
                    return n
                }, n
            }

            function hr(n) {
                var e, t, i, a, o, c, d, u, m = n.page,
                    p = !(!(null === (e = m.longDescription) || void 0 === e || null === (t = e.content) || void 0 === t ? void 0 : t.text) && !(null === (i = m.mediaGallery) || void 0 === i || null === (a = i.images) || void 0 === a ? void 0 : a.length)),
                    h = !(!(null === (o = m.pricingAndPerks) || void 0 === o || null === (c = o.content) || void 0 === c ? void 0 : c.text) && !(null === (d = m.newsTeasers) || void 0 === d || null === (u = d.newsItems) || void 0 === u ? void 0 : u.length)),
                    g = p || h;
                return (0, l.jsxs)(gr, {
                    children: [(0, l.jsx)("div", {
                        className: "meta-wrapper",
                        children: (0, l.jsx)(rr, (0, r.Z)({}, m.Meta))
                    }), (0, l.jsxs)("main", {
                        className: "main-wrapper",
                        children: [(0, l.jsxs)("header", {
                            className: "integration-header",
                            children: [(0, l.jsx)("h1", {
                                className: "integration-title",
                                children: m.Title
                            }), (0, l.jsx)("p", {
                                className: "short-description",
                                children: m.shortDescription
                            })]
                        }), g && (0, l.jsx)("hr", {
                            className: "divider"
                        }), (0, l.jsxs)("div", {
                            className: "integration-main-content",
                            children: [(0, l.jsx)(Fa, (0, s.Z)((0, r.Z)({}, m.longDescription), {
                                fullWidth: !0,
                                className: "long-description"
                            })), (0, l.jsx)(Ya, (0, r.Z)({}, m.mediaGallery)), p && h && (0, l.jsx)("hr", {
                                className: "divider"
                            }), (0, l.jsx)(Fa, (0, s.Z)((0, r.Z)({}, m.pricingAndPerks), {
                                fullWidth: !0,
                                className: "pricing-and-perks"
                            })), (0, l.jsx)(ur, (0, r.Z)({}, m.newsTeasers))]
                        })]
                    })]
                })
            }
            var gr = u.ZP.article.withConfig({
                    componentId: "sc-bb9cd187-0"
                })(pr()),
                fr = t(621),
                vr = t(1488);

            function xr(n) {
                if (null === n || void 0 === n ? void 0 : n.image) {
                    var e = ga(n.image);
                    if (e) {
                        var t = Object.values(e).filter((function(n) {
                            return n.width
                        })).sort((function(n, e) {
                            return n.width - e.width
                        }));
                        return F(t.find((function(n, e) {
                            return e === t.length - 1 || n.width >= 1e3
                        })))
                    }
                }
            }

            function wr(n) {
                var e, t, i = n.media,
                    a = n.posterImage,
                    o = n.preferredImageSize,
                    d = n.useRetina,
                    u = void 0 !== d && d,
                    m = n.useRemSize,
                    p = void 0 !== m && m,
                    h = n.scaleFactor,
                    g = void 0 === h ? 1 : h,
                    f = n.transparent,
                    v = void 0 !== f && f,
                    x = n.sizes,
                    w = n.disableIntersectionObserver,
                    y = void 0 !== w && w,
                    j = (0, b.Z)(n, ["media", "posterImage", "preferredImageSize", "useRetina", "useRemSize", "scaleFactor", "transparent", "sizes", "disableIntersectionObserver"]),
                    k = (0, c.useState)({}),
                    Z = k[0],
                    _ = k[1],
                    N = (0, c.useRef)(null),
                    C = (0, c.useRef)(!1),
                    I = null === (e = i.image || i.media) || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.attributes,
                    P = (0, fr.Z)(N, {});
                if ((0, c.useEffect)((function() {
                        var n, e;
                        y || ((null === P || void 0 === P ? void 0 : P.isIntersecting) ? null === (n = N.current) || void 0 === n || n.play() : null === (e = N.current) || void 0 === e || e.pause())
                    }), [P, y]), (0, vr.Z)((function() {
                        if (I && !I.mime.startsWith("image") && N.current && N.current.videoWidth > 0 && !C.current) {
                            C.current = !0;
                            var n = N.current.videoWidth,
                                e = N.current.videoHeight;
                            1 !== g && _({
                                width: n *= g,
                                height: e *= g
                            }), u && _({
                                width: n /= 2,
                                height: e /= 2
                            }), p && _({
                                width: "".concat(n / 10, "rem"),
                                height: "".concat(e / 10, "rem")
                            })
                        }
                    })), !I) return null;
                if (I.mime.startsWith("image")) {
                    var S = (0, qt.pick)(j, "crossOrigin");
                    return (0, l.jsx)(ba, (0, r.Z)({
                        image: i,
                        preferredSize: o,
                        useRetina: u,
                        useRemSize: p,
                        scaleFactor: g,
                        transparent: v,
                        sizes: x
                    }, S))
                }
                return (0, l.jsx)("video", (0, s.Z)((0, r.Z)({
                    ref: N,
                    style: Z
                }, j), {
                    src: F(I),
                    poster: xr(a),
                    playsInline: !0,
                    muted: !0
                }))
            }

            function br() {
                var n = (0, d.Z)(["\n  img,\n  video {\n    object-fit: fill;\n    width: 100%;\n  }\n"]);
                return br = function() {
                    return n
                }, n
            }

            function yr(n) {
                var e;
                return (0, l.jsx)(Ba, {
                    children: (0, l.jsx)(jr, {
                        id: null === (e = n.anchorId) || void 0 === e ? void 0 : e.anchorId,
                        children: (0, l.jsx)(wr, {
                            media: n,
                            autoPlay: !0,
                            playsInline: !0,
                            muted: !0,
                            loop: !0,
                            sizes: "(min-width: 1280px) 1280px, 100vw"
                        }, n.id)
                    })
                })
            }
            var jr = u.ZP.div.withConfig({
                componentId: "sc-3fa4244f-0"
            })(br());

            function kr() {
                var n = (0, d.Z)(["\n  display: flex;\n  flex-direction: row-reverse;\n  gap: var(--spacing-xl);\n  align-items: center;\n  justify-content: space-between;\n\n  &.align-top {\n    align-items: flex-start;\n  }\n\n  &.align-middle {\n    align-items: center;\n  }\n\n  &.align-bottom {\n    align-items: flex-end;\n  }\n\n  &.ratio-50-50 {\n    .copy-container {\n      width: 50%;\n    }\n  }\n\n  &.ratio-66-33 {\n    .copy-container {\n      width: 66.66666%;\n    }\n  }\n\n  &.ratio-33-66 {\n    .copy-container {\n      width: 33.33333%;\n    }\n  }\n\n  .media-container {\n    flex: 1 0 0;\n  }\n\n  img,\n  video {\n    object-fit: fill;\n    width: 100%;\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    gap: var(--spacing-sm);\n\n    .copy-container,\n    .media-container {\n      width: 100% !important;\n    }\n  }\n"]);
                return kr = function() {
                    return n
                }, n
            }

            function Zr(n) {
                var e = n.text,
                    t = n.Media,
                    i = n.layout,
                    a = n.verticalAlignment,
                    o = "(max-width: 768px) 100vw, ".concat({
                        "Ratio - 50/50": "568px",
                        "Ratio - 66/33": "360px",
                        "Ratio - 33/66": "780px"
                    } [i]);
                return (0, l.jsx)(Ba, {
                    children: (0, l.jsxs)(Cr, {
                        className: (0, an.Z)({
                            "Ratio - 50/50": "ratio-50-50",
                            "Ratio - 66/33": "ratio-66-33",
                            "Ratio - 33/66": "ratio-33-66"
                        } [i], "align-".concat(null === a || void 0 === a ? void 0 : a.alignment)),
                        children: [(0, l.jsx)("div", {
                            className: "media-container",
                            children: (0, l.jsx)(wr, {
                                media: t,
                                autoPlay: !0,
                                playsInline: !0,
                                muted: !0,
                                loop: !0,
                                sizes: o
                            }, t.id)
                        }), (0, l.jsx)("div", {
                            className: "copy-container",
                            children: (0, l.jsx)(Ta, (0, r.Z)({}, e))
                        })]
                    })
                })
            }
            var _r, Nr, Cr = u.ZP.section.withConfig({
                    componentId: "sc-d47e06c2-0"
                })(kr()),
                Ir = t(4924);

            function Pr() {
                var n = (0, d.Z)(["\n  text-align: center;\n  margin: var(--spacing-base) 0;\n\n  .title {\n    font: var(--font-h4);\n    margin-bottom: var(--spacing-base);\n  }\n\n  .button-wrapper {\n    display: flex;\n    gap: var(--spacing-sm);\n    align-items: center;\n    justify-content: center;\n  }\n"]);
                return Pr = function() {
                    return n
                }, n
            }! function(n) {
                n.email = "email", n.facebook = "facebook", n.instagram = "instagram", n.linkedin = "linkedin", n.twitter = "twitter", n.youtube = "youtube"
            }(_r || (_r = {}));
            var Sr = (Nr = {}, (0, Ir.Z)(Nr, _r.facebook, {
                icon: (0, l.jsx)(xe, {}),
                url: function(n) {
                    return "https://www.facebook.com/sharer/sharer.php?u=".concat(n.currentUrl)
                }
            }), (0, Ir.Z)(Nr, _r.twitter, {
                icon: (0, l.jsx)(Se, {}),
                url: function(n) {
                    return "https://twitter.com/intent/tweet?text=".concat(n.shareMessage, "&url=").concat(n.currentUrl)
                }
            }), (0, Ir.Z)(Nr, _r.linkedin, {
                icon: (0, l.jsx)(Ne, {}),
                url: function(n) {
                    return "https://www.linkedin.com/sharing/share-offsite/?url=".concat(n.currentUrl)
                }
            }), (0, Ir.Z)(Nr, _r.email, {
                icon: (0, l.jsx)(pe, {}),
                url: function(n) {
                    return "mailto:?subject=".concat(n.shareTitle, "&body=").concat(n.shareMessage, " ").concat(n.currentUrl)
                }
            }), Nr);

            function zr(n) {
                var e = n.title,
                    t = n.shareTitle,
                    i = n.shareMessage,
                    a = k().siteSettings,
                    o = (0, c.useState)(""),
                    s = o[0],
                    d = o[1];
                (0, c.useEffect)((function() {
                    d(window.location.href)
                }), []);
                var u = ((null === a || void 0 === a ? void 0 : a.socialShareServices) || []).map((function(n) {
                    var e = Sr[n.Service];
                    return e && (0, r.Z)({}, n, e)
                })).filter(Boolean);
                return (0, l.jsxs)(Lr, {
                    children: [(0, l.jsx)("h3", {
                        className: "title",
                        children: e
                    }), (0, l.jsx)("div", {
                        className: "button-wrapper",
                        children: u.map((function(n) {
                            return (0, l.jsx)(cn, {
                                tag: "a",
                                href: n.url({
                                    currentUrl: s,
                                    shareMessage: i,
                                    shareTitle: t
                                }),
                                icon: n.icon,
                                label: n.Title,
                                hideLabel: !0,
                                target: "_blank"
                            }, n.Service)
                        }))
                    })]
                })
            }
            var Lr = u.ZP.article.withConfig({
                componentId: "sc-dece7bc-0"
            })(Pr());

            function Mr() {
                var n = (0, d.Z)(["\n  display: flex;\n  gap: 5.875rem;\n\n  > div {\n    flex: 1;\n  }\n\n  &.align-top {\n    align-items: flex-start;\n  }\n\n  &.align-middle {\n    align-items: center;\n  }\n\n  &.align-bottom {\n    align-items: flex-end;\n  }\n\n  img {\n    margin-bottom: 2rem;\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    gap: 4rem;\n    margin-bottom: 4rem;\n\n    p:last-child {\n      margin-bottom: 0.5rem;\n    }\n\n    img {\n      margin-bottom: 1rem;\n    }\n\n    h6 {\n      font-size: 2.5rem;\n    }\n  }\n"]);
                return Mr = function() {
                    return n
                }, n
            }
            var Rr = u.ZP.div.withConfig({
                componentId: "sc-a235844d-0"
            })(Mr());

            function Er(n) {
                var e = n.column_one,
                    t = n.column_two,
                    i = n.column_three,
                    a = n.anchorId,
                    r = n.verticalAlignment;
                return (0, l.jsx)(Ba, {
                    children: (0, l.jsxs)(Rr, {
                        id: null === a || void 0 === a ? void 0 : a.anchorId,
                        className: (0, an.Z)("align-".concat(null === r || void 0 === r ? void 0 : r.alignment)),
                        children: [(0, l.jsx)("div", {
                            children: (0, l.jsx)(Ta, {
                                text: e.text
                            })
                        }), (0, l.jsx)("div", {
                            children: (0, l.jsx)(Ta, {
                                text: t.text
                            })
                        }), (0, l.jsx)("div", {
                            children: (0, l.jsx)(Ta, {
                                text: i.text
                            })
                        })]
                    })
                })
            }

            function Tr() {
                var n = (0, d.Z)(["\n        @media (min-width: 769px) {\n          display: flex;\n          justify-content: space-between;\n        }\n      "]);
                return Tr = function() {
                    return n
                }, n
            }

            function Or() {
                var n = (0, d.Z)(["\n  ", "\n"]);
                return Or = function() {
                    return n
                }, n
            }
            var Br = (0, u.ZP)($i).withConfig({
                    componentId: "sc-90199533-0"
                })(Or(), (function(n) {
                    var e = n.$align;
                    return "\n  \n  > span {\n    display: block;\n    text-align: ".concat("alternating" === e ? "left" : "alternating-reverse" === e ? "right" : e, ";\n    \n\n    ").concat("alternating" === e || "alternating-reverse" === e || "space-between" === e ? "\n    &:nth-child(even) {\n      text-align: ".concat("alternating-reverse" === e ? "left" : "right", ";\n      margin-left: auto;\n    }") : "", "\n  }\n    ").concat("space-between" === e && (0, u.iv)(Tr()), "\n")
                })),
                Ar = c.forwardRef((function(n, e) {
                    var t, i = n.children,
                        a = n.className,
                        r = n.size,
                        o = void 0 === r ? 1 : r,
                        c = n.useSpan,
                        s = void 0 !== c && c,
                        d = n.align,
                        u = void 0 === d ? "alternating" : d,
                        m = n.autoSplit,
                        p = void 0 !== m && m,
                        h = null === i || void 0 === i || null === (t = i.toString) || void 0 === t ? void 0 : t.call(i),
                        g = function(n) {
                            var e = n.text;
                            if (!e) return null;
                            for (var t = e.split(/\s+/), i = 0, a = 0, r = t.reduce((function(n, e) {
                                    return n + e.length
                                }), 0) + t.length - 1; a < r && i < t.length;) {
                                var o = t[i].length;
                                a += o, r -= o, i > 0 && (a += 1), i < t.length - 1 && (r -= 1), i += 1
                            }
                            return i = Math.max(0, i - 1), [t.slice(0, i).join(" "), t.slice(i).join(" ")]
                        }({
                            text: h
                        }),
                        f = (p && -1 === (null === h || void 0 === h ? void 0 : h.indexOf("\n")) ? g : null === h || void 0 === h ? void 0 : h.split("\n")) || [];
                    return (0, l.jsx)(Br, {
                        ref: e,
                        size: o,
                        className: a,
                        $align: u,
                        useSpan: s,
                        children: f.map((function(n, e) {
                            return (0, l.jsx)("span", {
                                children: qi("".concat(n.trim()).concat(e < f.length - 1 ? " " : ""))
                            }, n)
                        }))
                    })
                }));
            Ar.displayName = "LineBreakTitle";
            var Hr = Ar;

            function Fr() {
                var n = (0, d.Z)(["\n  color: var(--text-dark, #000);\n  padding-top: 10rem;\n  width: 128rem;\n  margin: 0 auto calc(var(--font-size-h2) * 0.5);\n  // calculation to expand container size when the h2 font-size exceeds the clamped maximum\n  --expand: min((var(--font-size-h2) - 17rem) * (128 / 17) * -0.5, 0px);\n\n  @media (max-width: 768px) {\n    padding-top: 5rem;\n    width: 34rem;\n  }\n\n  &.left-overflow-title {\n    .blurb {\n      width: 51rem;\n      margin-top: calc(var(--font-size-h2) * -0.6);\n    }\n    > h2 {\n      margin: 0 var(--expand);\n      > span:last-child {\n        margin-left: 54rem;\n      }\n    }\n    @media (max-width: 768px) {\n      .blurb {\n        width: 100%;\n        margin-top: 0;\n      }\n      > h2 {\n        margin-bottom: 0.5em;\n        > span:last-child {\n          margin-left: 0;\n        }\n      }\n    }\n  }\n\n  &.left-aligned-title {\n    display: flex;\n    gap: var(--spacing-base);\n    align-items: flex-end;\n    justify-content: space-between;\n    width: calc(128rem - 2 * var(--expand));\n\n    .blurb {\n      width: 60rem;\n    }\n\n    @media (max-width: 1024px) {\n      width: calc(100% - 20rem);\n    }\n\n    @media (max-width: 768px) {\n      width: 34rem;\n      display: block;\n      .blurb {\n        width: 100%;\n      }\n      > h2 {\n        margin-bottom: 0.5em;\n      }\n    }\n  }\n"]);
                return Fr = function() {
                    return n
                }, n
            }

            function Ur(n) {
                var e = n.Title,
                    t = n.Layout,
                    i = n.Blurb,
                    a = n.anchorId,
                    o = t.toLowerCase().replace(/\s/g, "-"),
                    c = {
                        "Left Overflow Title": (0, l.jsx)(Hr, {
                            size: 2,
                            children: e
                        }),
                        "Left Aligned Title": (0, l.jsx)($i, {
                            size: 2,
                            children: e
                        })
                    };
                return (0, l.jsxs)(Dr, {
                    id: null === a || void 0 === a ? void 0 : a.anchorId,
                    className: o,
                    children: [c[t], (0, l.jsx)("div", {
                        className: "blurb",
                        children: (0, l.jsx)(Ta, (0, r.Z)({}, i))
                    })]
                })
            }
            var Dr = u.ZP.section.withConfig({
                componentId: "sc-d283432f-0"
            })(Fr());

            function Wr() {
                var n = (0, d.Z)(["\n  --gap: var(--spacing-xl);\n\n  display: flex;\n  gap: var(--gap);\n  justify-content: space-between;\n\n  &.align-top {\n    align-items: flex-start;\n  }\n\n  &.align-middle {\n    align-items: center;\n  }\n\n  &.align-bottom {\n    align-items: flex-end;\n  }\n\n  &.ratio-50-50 {\n    .column-one {\n      width: calc(50% - (var(--gap) / 2));\n    }\n  }\n\n  &.ratio-66-33 {\n    .column-one {\n      width: calc(66.6666% - (var(--gap) / 2));\n    }\n  }\n\n  &.ratio-33-66 {\n    .column-one {\n      width: calc(33.3333% - (var(--gap) / 2));\n    }\n  }\n\n  .column-two {\n    flex: 1 0 0;\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    gap: var(--spacing-sm);\n\n    .column-one,\n    .column-two {\n      width: 100% !important;\n    }\n  }\n"]);
                return Wr = function() {
                    return n
                }, n
            }
            var Gr = u.ZP.div.withConfig({
                componentId: "sc-e8302473-0"
            })(Wr());

            function qr(n) {
                var e = n.column_one,
                    t = n.column_two,
                    i = n.layout,
                    a = n.verticalAlignment,
                    r = n.anchorId;
                return (0, l.jsx)(Ba, {
                    children: (0, l.jsxs)(Gr, {
                        id: null === r || void 0 === r ? void 0 : r.anchorId,
                        className: (0, an.Z)({
                            "Ratio - 50/50": "ratio-50-50",
                            "Ratio - 66/33": "ratio-66-33",
                            "Ratio - 33/66": "ratio-33-66"
                        } [i], "align-".concat(null === a || void 0 === a ? void 0 : a.alignment)),
                        children: [(0, l.jsx)("div", {
                            className: "column-one",
                            children: (0, l.jsx)(Ta, {
                                text: null === e || void 0 === e ? void 0 : e.text
                            })
                        }), (0, l.jsx)("div", {
                            className: "column-two",
                            children: (0, l.jsx)(Ta, {
                                text: null === t || void 0 === t ? void 0 : t.text
                            })
                        })]
                    })
                })
            }

            function Kr() {
                var n, e;
                null === window || void 0 === window || null === (n = window.transcend) || void 0 === n || null === (e = n.showConsentManager) || void 0 === e || e.call(n, {
                    viewState: "CompleteOptions"
                })
            }

            function Yr() {
                var n = (0, d.Z)(["\n  display: flex;\n  justify-content: center;\n"]);
                return Yr = function() {
                    return n
                }, n
            }
            var Vr = u.ZP.div.withConfig({
                    componentId: "sc-d572acf1-0"
                })(Yr()),
                Jr = function(n) {
                    var e = n.label,
                        t = n.query_key,
                        i = n.query_value,
                        a = n.style,
                        r = n.cta_type,
                        o = (0, An.useRouter)().query;
                    if (!r || "edit_cookies" !== r) throw new Error("Attempting to show a cookie editor button without the right CTA type. Verify Strapi");
                    var s = e && t === i;
                    return (0, c.useEffect)((function() {
                        s && Kr()
                    }), [s]), o.edit && Kr(), r || o.edit ? (0, l.jsx)(Ba, {
                        mt: !1,
                        mb: !1,
                        pt: !1,
                        pb: !1,
                        children: (0, l.jsx)(Vr, {
                            children: (0, l.jsx)(cn, {
                                variant: a,
                                onClick: function() {
                                    return Kr()
                                },
                                className: "bordered",
                                children: e
                            })
                        })
                    }) : null
                };

            function $r(n) {
                var e = fa(ga(n.image)),
                    t = e[e.length - 1];
                if (!t.width || !t.height) return "100vw";
                var i = Math.max(t.width, t.height) / Math.min(t.width, t.height),
                    a = "".concat(+(100 * i).toFixed(1), "vh");
                return "(min-aspect-ratio: ".concat(t.width, "/").concat(t.height, ") 100vw, ").concat(a)
            }
            var Xr = t(256),
                Qr = t(1438),
                no = function() {
                    function n() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        (0, Qr.Z)(this, n), this.l = e, this.a = t, this.b = i
                    }
                    var e = n.prototype;
                    return e.deltaECIE94 = function(n) {
                        var e = this.l - n.l,
                            t = this.a - n.a,
                            i = this.b - n.b,
                            a = Math.sqrt(this.a * this.a + this.b * this.b),
                            r = a - Math.sqrt(n.a * n.a + n.b * n.b),
                            o = t * t + i * i - r * r,
                            l = e / 1,
                            c = r / (1 + .045 * a),
                            s = (o = o < 0 ? 0 : Math.sqrt(o)) / (1 + .015 * a),
                            d = l * l + c * c + s * s;
                        return d < 0 ? 0 : Math.sqrt(d)
                    }, e.getHexString = function() {
                        var n = (this.l + 16) / 116,
                            e = this.a / 500 + n,
                            t = n - this.b / 200,
                            i = 3.2406 * (e = .95047 * (e * e * e > .008856 ? e * e * e : (e - 16 / 116) / 7.787)) + -1.5372 * (n = n * n * n > .008856 ? n * n * n : (n - 16 / 116) / 7.787) + -.4986 * (t = 1.08883 * (t * t * t > .008856 ? t * t * t : (t - 16 / 116) / 7.787)),
                            a = -.9689 * e + 1.8758 * n + .0415 * t,
                            r = .0557 * e + -.204 * n + 1.057 * t;
                        return "#" + ("000000" + (255 * (i = st(i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i)) << 16 ^ 255 * (a = st(a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a)) << 8 ^ 255 * (r = st(r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r)) << 0).toString(16)).slice(-6)
                    }, e.setHexString = function(n) {
                        return this.setRGB.apply(this, (0, Wn.Z)(eo(n)))
                    }, e.setRGB = function(n, e, t) {
                        var i, a, r;
                        return a = .2126 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .7152 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .0722 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92), r = (.0193 * n + .1192 * e + .9505 * t) / 1.08883, i = (i = (.4124 * n + .3576 * e + .1805 * t) / .95047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, this.l = 116 * a - 16, this.a = 500 * (i - a), this.b = 200 * (a - r), this
                    }, n
                }();

            function eo(n) {
                var e = Number(n.replace("#", "0x"));
                return [(e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (255 & e) / 255]
            }

            function to(n) {
                var e = Math.pow(n.a, 2) + Math.pow(n.b, 2);
                return Math.sqrt(e) / Math.sqrt(e + Math.pow(n.l, 2))
            }
            var io = -2147483648,
                ao = 2147483647;

            function ro(n, e, t) {
                return Math.min(Math.max(n, Math.min(e, t)), Math.max(e, t))
            }

            function oo(n) {
                return n ^= n << 13, n ^= n >> 17, n ^= n << 5
            }

            function lo() {
                var n = (0, d.Z)(["\n  height: 100%;\n"]);
                return lo = function() {
                    return n
                }, n
            }
            var co = u.ZP.div.withConfig({
                componentId: "sc-ded3217a-0"
            })(lo());

            function so(n, e) {
                return e.map((function(e) {
                    var t = (0, lt.Z)(e, 2),
                        i = t[0],
                        a = t[1];
                    return "".concat(function(n) {
                        var e = (0, lt.Z)(n, 3),
                            t = e[0],
                            i = e[1],
                            a = e[2],
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return "rgba(".concat(Math.round(255 * t), ", ").concat(Math.round(255 * i), ", ").concat(Math.round(255 * a), ", ").concat(r, ")")
                    }(n, i), " ").concat(a, "%")
                })).join(",")
            }

            function uo(n, e, t) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    r = n * (Math.PI / 180),
                    o = Math.cos(r),
                    l = Math.sin(r);
                return e -= i, t -= a, [Math.round(e * o - t * l + i), Math.round(e * l + t * o + a)]
            }

            function mo(n, e, t) {
                var i = (0, lt.Z)(uo(n, e, 0, 0, 0), 2),
                    a = i[0],
                    r = i[1],
                    o = (0, lt.Z)(uo(n, 0, t, 0, 0), 2),
                    l = o[0],
                    c = o[1],
                    s = Math.max(Math.abs(a), Math.abs(l)),
                    d = Math.max(Math.abs(r), Math.abs(c));
                return "".concat(s, "% ").concat(d, "%")
            }

            function po(n, e, t) {
                var i = (0, lt.Z)(uo(n, e, t, 50, 50), 2),
                    a = i[0],
                    r = i[1];
                return "".concat(a, "% ").concat(r, "%")
            }

            function ho(n) {
                var e = n.seed,
                    t = n.colors,
                    i = n.targetLightness,
                    a = n.style,
                    o = n.children,
                    c = (0, b.Z)(n, ["seed", "colors", "targetLightness", "style", "children"]);
                t = function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 75,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    n && n.length || (n = ["#9a73ff", "#006eff", "#509afb", "#ffffff"]);
                    var i = n.map((function(n) {
                            return (new no).setHexString(n)
                        })).sort((function(n, e) {
                            return to(e) - to(n)
                        })),
                        a = i[Math.min(t, i.length - 1)];
                    return [e - 15, e - 5, e + 5, e + 15].map((function(n) {
                        return new no(n, a.a, a.b).getHexString()
                    }))
                }(function(n) {
                    return n ? Array.isArray(n) ? n : [n.color, n.color, n.color, n.color] : null
                }(t), i);
                var d = function() {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            i = oo(oo(51241 * (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 123) + 1263534242));
                        return t && (e = Math.floor(e) + 1), i = ro(i = (i - io) * (e - n) / (ao - io) + n, Math.min(n, e), Math.max(n, e)), t && (i = Math.floor(i)), i
                    }(e, 0, 360, !0),
                    u = t.map(eo),
                    m = ["radial-gradient(".concat(mo(d, 100, 130), " at ").concat(po(d, 80, 56), ", ").concat(so(u[3], [
                        [.3, -10],
                        [.1, 40],
                        [0, 60]
                    ]), ")"), "radial-gradient(".concat(mo(d, 120, 40), " at ").concat(po(d, 110, 10), ", ").concat(so(u[0], [
                        [.8, 0],
                        [0, 80]
                    ]), ")"), "radial-gradient(".concat(mo(d, 200, 200), " at ").concat(po(d, -150, 10), ", ").concat(so(u[0], [
                        [1, 0],
                        [1, 70],
                        [0, 95]
                    ]), ")"), "linear-gradient(".concat(-75 + d, "deg, ").concat(so(u[3], [
                        [0, 0],
                        [0, 70],
                        [.6, 110]
                    ]), ")"), "radial-gradient(".concat(mo(d, 55, 65), " at ").concat(po(d, 80, 100), ", ").concat(so(u[2], [
                        [1, 0],
                        [0, 100]
                    ]), ")"), "radial-gradient(".concat(mo(d, 30, 45), " at ").concat(po(d, 40, 115), ", ").concat(so(u[2], [
                        [1, 0],
                        [0, 90]
                    ]), ")")].join(",");
                a = (0, s.Z)((0, r.Z)({}, a), {
                    backgroundColor: t[1],
                    backgroundImage: m
                });
                var p = {
                    type: "GradientBackground",
                    colors: t,
                    targetLightness: i
                };
                return (0, l.jsxs)(co, (0, s.Z)((0, r.Z)({
                    style: a,
                    "data-hydra": JSON.stringify(p)
                }, c), {
                    children: [(0, l.jsx)(Xr.Z, {}), o]
                }))
            }

            function go() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 25vh;\n\n  .top {\n    position: relative;\n    margin: 34rem 0 -49vh calc(20rem + var(--rem-scale-viewport-half-excess));\n    color: var(--color-white);\n\n    @media (max-width: 768px) {\n      margin: 8.7rem 2rem -42vh 2rem;\n    }\n\n    h4 {\n      font-size: 9.6rem;\n      font-style: normal;\n      font-weight: 250;\n      line-height: 100%;\n      letter-spacing: -0.384rem;\n      max-width: 81rem;\n      margin-bottom: 6rem;\n\n      @media (max-width: 768px) {\n        font-size: 4.8rem;\n        font-style: normal;\n        font-weight: 350;\n        line-height: 105%;\n        letter-spacing: -0.192rem;\n        max-width: 33.5rem;\n        margin-bottom: 2rem;\n      }\n    }\n\n    .text-base {\n      font-size: 2.4rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 120%;\n      letter-spacing: -0.048rem;\n      max-width: 28.2rem;\n\n      @media (max-width: 768px) {\n        font-size: 1.8rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 120%;\n        letter-spacing: -0.036rem;\n        max-width: 19.6rem;\n      }\n    }\n  }\n\n  .carousel {\n    position: relative;\n  }\n"]);
                return go = function() {
                    return n
                }, n
            }

            function fo() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return fo = function() {
                    return n
                }, n
            }

            function vo() {
                var n = (0, d.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n"]);
                return vo = function() {
                    return n
                }, n
            }

            function xo() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  clip-path: inset(0 0);\n"]);
                return xo = function() {
                    return n
                }, n
            }

            function wo() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n"]);
                return wo = function() {
                    return n
                }, n
            }

            function bo() {
                var n = (0, d.Z)(["\n  width: 100%;\n  text-align: right;\n  padding-right: calc(5rem + var(--rem-scale-viewport-half-excess));\n  margin: 3rem 0;\n  color: var(--color-white);\n  opacity: 0.5;\n  transition: 0.3s ease opacity;\n\n  &.active {\n    opacity: 1;\n  }\n\n  &:first-child {\n    margin-top: 50vh;\n  }\n\n  @media (max-width: 768px) {\n    padding-right: 2.7rem;\n    margin: 2rem 0;\n    line-height: 1em;\n  }\n"]);
                return bo = function() {
                    return n
                }, n
            }

            function yo() {
                var n = (0, d.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  transition: 0.5s ease opacity;\n\n  &.active {\n    opacity: 1;\n  }\n\n  @media (max-width: 768px) {\n    height: 100vh;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.35) 100%);\n  }\n  & > video,\n  & > img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);
                return yo = function() {
                    return n
                }, n
            }
            var jo, ko = u.ZP.div.withConfig({
                    componentId: "sc-f21e8154-0"
                })(go()),
                Zo = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-f21e8154-1"
                })(fo()),
                _o = u.ZP.div.withConfig({
                    componentId: "sc-f21e8154-2"
                })(vo()),
                No = u.ZP.div.withConfig({
                    componentId: "sc-f21e8154-3"
                })(xo()),
                Co = u.ZP.div.withConfig({
                    componentId: "sc-f21e8154-4"
                })(wo()),
                Io = (0, u.ZP)($i).withConfig({
                    componentId: "sc-f21e8154-5"
                })(bo()),
                Po = u.ZP.div.withConfig({
                    componentId: "sc-f21e8154-6"
                })(yo());

            function So(n) {
                var e = n.id,
                    t = n.title,
                    i = n.body,
                    a = n.slides,
                    o = void 0 === a ? [] : a,
                    s = n.anchorId,
                    d = n.backgroundColor,
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    h = (0, c.useRef)([]),
                    g = (0, c.useRef)([]),
                    f = (0, c.useRef)([]),
                    v = (0, c.useRef)(0),
                    x = (0, c.useRef)(0);
                (0, vr.Z)((function() {
                    if (p.current) {
                        if (window.scrollY !== v.current) {
                            var n = window.scrollY > v.current ? 1 : -1;
                            h.current.forEach((function(e, t) {
                                if (e) {
                                    var i = e.getBoundingClientRect(),
                                        a = (0, qt.clamp)(i.y / window.innerHeight, 0, 1);
                                    (1 === n && a <= .5 || -1 === n && a <= .5) && (x.current = t)
                                }
                            })), f.current.forEach((function(n, e) {
                                n && (e === x.current ? n.classList.add("active") : n.classList.remove("active"))
                            })), h.current.forEach((function(n, e) {
                                n && (e === x.current ? n.classList.add("active") : n.classList.remove("active"))
                            }))
                        }
                        v.current = window.scrollY
                    }
                }));
                var w = o.map((function(n) {
                        var e, t, i, a;
                        return null === (e = n.background) || void 0 === e || null === (t = e.image) || void 0 === t || null === (i = t.data) || void 0 === i || null === (a = i.attributes) || void 0 === a ? void 0 : a.colors
                    })).filter(Boolean),
                    b = d || w[Math.min(3, w.length - 1)];
                return (0, l.jsxs)(ko, {
                    ref: u,
                    id: null === s || void 0 === s ? void 0 : s.anchorId,
                    children: [(0, l.jsx)(Zo, {
                        seed: e,
                        colors: b,
                        targetLightness: 85
                    }), (0, l.jsx)(_o, {
                        ref: p,
                        children: o.map((function(n, e) {
                            return (0, l.jsx)(No, {
                                ref: function(n) {
                                    return g.current[e] = n
                                },
                                className: (0, an.Z)("slide-".concat(e)),
                                children: (0, l.jsx)(Po, {
                                    ref: function(n) {
                                        return f.current[e] = n
                                    },
                                    children: n.background && (0, l.jsx)(ba, {
                                        image: n.background,
                                        sizes: $r(n.background)
                                    })
                                })
                            }, n.id)
                        }))
                    }), (0, l.jsxs)("div", {
                        className: "top",
                        children: [(0, l.jsx)(Hr, {
                            size: 4,
                            align: "left",
                            children: t
                        }), (0, l.jsx)(Ta, (0, r.Z)({}, i))]
                    }), (0, l.jsx)("div", {
                        ref: m,
                        className: "carousel",
                        children: (0, l.jsx)(Co, {
                            className: "titles",
                            children: o.map((function(n, e) {
                                return (0, l.jsx)(Io, {
                                    ref: function(n) {
                                        return h.current[e] = n
                                    },
                                    size: 2,
                                    children: (0, l.jsx)("span", {
                                        className: (0, an.Z)("title-".concat(e)),
                                        children: (0, l.jsx)(Ve, (0, r.Z)({}, n.link))
                                    })
                                }, n.id)
                            }))
                        })
                    })]
                })
            }

            function zo() {
                return zo = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, zo.apply(this, arguments)
            }
            var Lo, Mo = function(n, e) {
                    return c.createElement("svg", zo({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 78 77",
                        ref: e
                    }, n), jo || (jo = c.createElement("path", {
                        fill: "currentColor",
                        d: "M43.5 0v59.244l27.34-26.955 6.319 6.408-35 34.507L39 76.319l-3.16-3.115-35-34.507 6.319-6.408L34.5 59.244V0h9z"
                    })))
                },
                Ro = (0, c.forwardRef)(Mo);

            function Eo() {
                return Eo = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, Eo.apply(this, arguments)
            }
            var To = function(n, e) {
                    return c.createElement("svg", Eo({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 30 33",
                        ref: e
                    }, n), Lo || (Lo = c.createElement("path", {
                        fill: "#fff",
                        d: "M29.583 9.734c-.006-4.137-3.228-7.528-7.008-8.751-4.694-1.52-10.885-1.3-15.368.816C1.774 4.362.067 9.979.003 15.579c-.052 4.605.408 16.734 7.249 16.82 5.083.065 5.84-6.485 8.192-9.64 1.673-2.244 3.828-2.878 6.48-3.534 4.559-1.128 7.666-4.726 7.66-9.491Z"
                    })))
                },
                Oo = (0, c.forwardRef)(To);

            function Bo() {
                var n = (0, d.Z)(["\n  width: 5.4rem;\n  height: 5.4rem;\n  cursor: pointer;\n  appearance: none;\n  background: none;\n  border: 0;\n  border-radius: 0;\n\n  @media (max-width: 768px) {\n    width: 4.5rem;\n    height: 4.5rem;\n  }\n\n  .rings {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n\n    &::before {\n      display: block;\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n      border: 2px solid rgba(255, 255, 255, 0.25);\n    }\n\n    > div {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 2.7rem;\n      height: 100%;\n      overflow: hidden;\n\n      @media (max-width: 768px) {\n        width: 2.25rem;\n      }\n\n      &:first-child {\n        transform: scaleY(-1);\n\n        > div {\n          transform: rotate(calc(var(--progress-left) * 1deg));\n        }\n      }\n\n      &:last-child {\n        left: auto;\n        right: 0;\n        transform: rotate(180deg);\n\n        > div {\n          transform: rotate(calc(var(--progress-right) * 1deg));\n        }\n      }\n\n      > div {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 2.7rem;\n        height: 100%;\n        overflow: hidden;\n        transform-origin: 2.7rem 2.7rem;\n\n        @media (max-width: 768px) {\n          width: 2.25rem;\n          transform-origin: 2.25rem 2.25rem;\n\n          &::before {\n            width: 4.5rem !important;\n            height: 4.5rem !important;\n          }\n        }\n\n        &::before {\n          display: block;\n          content: '';\n          width: 5.4rem;\n          height: 5.4rem;\n          border: 2px solid var(--color-white);\n          border-radius: 50%;\n        }\n      }\n    }\n  }\n\n  .content {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);
                return Bo = function() {
                    return n
                }, n
            }
            var Ao = u.ZP.button.withConfig({
                    componentId: "sc-10e8a18a-0"
                })(Bo()),
                Ho = c.forwardRef((function(n, e) {
                    var t = n.progress,
                        i = n.className,
                        a = n.children,
                        r = n.onClick,
                        o = n.ariaLabel,
                        s = (0, c.useRef)(0),
                        d = t || s;
                    return (0, vr.Z)((function() {
                        if ("function" !== typeof e && e && e.current && d && "number" === typeof d.current) {
                            var n = 180 - (0, qt.clamp)((360 * d.current + 180) % 360, 0, 180),
                                t = (0, qt.clamp)((360 * d.current + 180) % 360, 180, 360);
                            d.current < .5 && (n = 180), d.current > .5 && (t = 360), e.current.style.setProperty("--progress-left", "".concat(n)), e.current.style.setProperty("--progress-right", "".concat(t))
                        }
                    })), (0, l.jsxs)(Ao, {
                        ref: e,
                        className: i,
                        onClick: r,
                        "aria-label": o,
                        children: [(0, l.jsxs)("div", {
                            className: "rings",
                            children: [(0, l.jsx)("div", {
                                children: (0, l.jsx)("div", {})
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsx)("div", {})
                            })]
                        }), (0, l.jsx)("div", {
                            className: "content",
                            children: a
                        })]
                    })
                }));
            Ho.displayName = "CircularIndicator";
            var Fo = Ho;

            function Uo() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n\n  .top {\n    position: absolute;\n    left: 0;\n    top: 12rem;\n    margin: 0 0 0 max(env(safe-area-inset-left), calc(5rem + var(--rem-scale-viewport-half-excess)));\n    z-index: 101;\n    color: var(--color-white);\n    pointer-events: none;\n\n    @media (max-width: 768px) {\n      top: 2.5rem;\n      margin: 0 2rem;\n    }\n\n    h4 {\n      font-size: 9.6rem;\n      font-style: normal;\n      font-weight: 250;\n      line-height: 100%;\n      letter-spacing: -0.384rem;\n      max-width: 81rem;\n      margin-bottom: 6rem;\n\n      @media (max-width: 768px) {\n        font-size: 4.8rem;\n        font-style: normal;\n        font-weight: 350;\n        line-height: 105%;\n        letter-spacing: -0.192rem;\n        max-width: 33.5rem;\n        margin-bottom: 2rem;\n      }\n    }\n\n    .text-base {\n      font-size: 2.4rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 120%;\n      letter-spacing: -0.048rem;\n      max-width: 28.2rem;\n\n      @media (max-width: 768px) {\n        font-size: 1.8rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 120%;\n        letter-spacing: -0.036rem;\n        max-width: 19.6rem;\n      }\n    }\n  }\n\n  .carousel {\n    position: relative;\n    height: 100vh;\n  }\n\n  .indicator {\n    position: absolute;\n    right: max(env(safe-area-inset-right), calc(5.3rem + var(--rem-scale-viewport-half-excess)));\n    top: 50%;\n    color: var(--color-white);\n\n    @media (max-width: 768px) {\n      right: 2rem;\n    }\n\n    &.previous {\n      top: calc(50% - 0.5rem - 5.4rem);\n      left: 4rem;\n\n      svg {\n        transform: rotate(180deg);\n      }\n    }\n\n    &.next {\n      top: calc(50% + 0.5rem);\n      left: 4rem;\n    }\n\n    svg {\n      width: 1.4rem;\n      height: 1.4rem;\n    }\n  }\n"]);
                return Uo = function() {
                    return n
                }, n
            }

            function Do() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return Do = function() {
                    return n
                }, n
            }

            function Wo() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);
                return Wo = function() {
                    return n
                }, n
            }

            function Go() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  &:first-child {\n    visibility: visible;\n  }\n"]);
                return Go = function() {
                    return n
                }, n
            }

            function qo() {
                var n = (0, d.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  > div {\n    visibility: hidden;\n    &:first-child {\n      visibility: visible;\n    }\n  }\n"]);
                return qo = function() {
                    return n
                }, n
            }

            function Ko() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  color: var(--color-white);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    text-align: left;\n    justify-content: flex-start;\n    padding-left: 2rem;\n    padding-right: 8rem;\n  }\n\n  span {\n    max-width: 130rem;\n    visibility: hidden;\n\n    &:first-child {\n      visibility: inherit;\n    }\n  }\n"]);
                return Ko = function() {
                    return n
                }, n
            }

            function Yo() {
                var n = (0, d.Z)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.35) 100%);\n  }\n  & > video,\n  & > img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);
                return Yo = function() {
                    return n
                }, n
            }

            function Vo() {
                var n = (0, d.Z)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  gap: 16rem;\n  top: 14rem;\n  right: 7rem;\n  max-width: 50%;\n  color: var(--color-white);\n  text-align: right;\n  z-index: 1;\n\n  h4 {\n    line-height: 1.2;\n    text-indent: 10rem;\n  }\n\n    font-size: 3rem;\n  }\n\n  .logomark {\n    height: 2.2rem;\n  }\n\n   @media (max-width: 768px) {\n      top: unset;\n      right: 2rem;\n      left: 2rem;\n      bottom: 1.5rem;\n      gap: 4rem; \n      max-width: 80%;\n\n      p {\n      font-size: var(--font-size-body-lg);\n      }\n    }\n"]);
                return Vo = function() {
                    return n
                }, n
            }

            function Jo() {
                var n = (0, d.Z)(["\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  align-items: center;\n"]);
                return Jo = function() {
                    return n
                }, n
            }
            var $o = u.ZP.div.withConfig({
                    componentId: "sc-e7702675-0"
                })(Uo()),
                Xo = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-e7702675-1"
                })(Do()),
                Qo = u.ZP.div.withConfig({
                    componentId: "sc-e7702675-2"
                })(Wo()),
                nl = u.ZP.div.withConfig({
                    componentId: "sc-e7702675-3"
                })(Go()),
                el = u.ZP.div.withConfig({
                    componentId: "sc-e7702675-4"
                })(qo()),
                tl = (0, u.ZP)($i).withConfig({
                    componentId: "sc-e7702675-5"
                })(Ko()),
                il = u.ZP.div.withConfig({
                    componentId: "sc-e7702675-6"
                })(Yo());

            function al(n) {
                var e = n.id,
                    t = n.title,
                    i = n.body,
                    a = n.slides,
                    o = void 0 === a ? [] : a,
                    s = n.anchorId,
                    d = n.backgroundColor,
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)([]),
                    h = (0, c.useRef)([]),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    v = (0, c.useRef)(0),
                    x = (0, c.useRef)(0),
                    w = (0, c.useRef)(0),
                    b = (0, c.useRef)(0),
                    y = (0, c.useRef)(0),
                    j = function() {
                        "number" === typeof v.current && (v.current = v.current === o.length - 1 ? 0 : v.current + 1, b.current = w.current)
                    };
                (0, vr.Z)((function(n) {
                    n - (b.current || 0) > 5e3 && j();
                    var e = (n - (b.current || 0)) / 5e3;
                    v.current !== x.current && (x.current = v.current, o.forEach((function(n, e) {
                        var t = p.current[e],
                            i = h.current[e];
                        t && Gt.p8.to(t, {
                            autoAlpha: x.current === e ? 1 : 0,
                            duration: .75
                        }), i && Gt.p8.to(i, {
                            autoAlpha: x.current === e ? 1 : 0,
                            duration: .75
                        })
                    }))), y.current = e, w.current = n
                }));
                var k = o.map((function(n) {
                        var e, t, i, a;
                        return null === (e = n.background) || void 0 === e || null === (t = e.image) || void 0 === t || null === (i = t.data) || void 0 === i || null === (a = i.attributes) || void 0 === a ? void 0 : a.colors
                    })).filter(Boolean),
                    Z = d || k[Math.min(3, k.length - 1)];
                return (0, l.jsxs)($o, {
                    ref: u,
                    children: [(0, l.jsx)(Xo, {
                        seed: e,
                        colors: Z,
                        targetLightness: 85
                    }), (0, l.jsxs)("div", {
                        className: "top",
                        children: [t && (0, l.jsx)(Hr, {
                            size: 4,
                            align: "left",
                            children: t
                        }), (0, l.jsx)(Ta, (0, r.Z)({}, i))]
                    }), (0, l.jsxs)("div", {
                        id: null === s || void 0 === s ? void 0 : s.anchorId,
                        ref: m,
                        className: "carousel",
                        children: [(0, l.jsx)(Qo, {
                            children: o.map((function(n, e) {
                                return (0, l.jsx)(nl, {
                                    ref: function(n) {
                                        return p.current[e] = n
                                    },
                                    className: (0, an.Z)("slide-".concat(e)),
                                    children: (0, l.jsxs)(il, {
                                        children: [(null === n || void 0 === n ? void 0 : n.quote) && (0, l.jsxs)(rl, {
                                            children: [(0, l.jsx)($i, {
                                                size: 4,
                                                children: null === n || void 0 === n ? void 0 : n.quote
                                            }), (null === n || void 0 === n ? void 0 : n.quoteAuthor) && (0, l.jsxs)(ol, {
                                                children: [(0, l.jsx)(Oo, {
                                                    className: "logomark"
                                                }), (0, l.jsx)("p", {
                                                    children: n.quoteAuthor
                                                })]
                                            })]
                                        }), n.background && (0, l.jsx)(ba, {
                                            image: n.background,
                                            sizes: $r(n.background)
                                        })]
                                    })
                                }, n.id)
                            }))
                        }), (0, l.jsx)(el, {
                            className: "titles",
                            children: o.map((function(n, e) {
                                return (0, l.jsx)("div", {
                                    ref: function(n) {
                                        return h.current[e] = n
                                    },
                                    children: (0, l.jsx)(tl, {
                                        size: 2,
                                        children: (0, l.jsx)("span", {
                                            className: (0, an.Z)("title-".concat(e)),
                                            children: (0, l.jsx)(Ve, (0, r.Z)({}, n.link))
                                        })
                                    })
                                }, n.id)
                            }))
                        }), (0, l.jsx)(Fo, {
                            ref: f,
                            className: "indicator previous",
                            onClick: function() {
                                "number" === typeof v.current && (v.current = 0 === v.current ? o.length - 1 : v.current - 1, b.current = w.current)
                            },
                            ariaLabel: "Previous slide",
                            children: (0, l.jsx)(Ro, {
                                className: "icon"
                            })
                        }), (0, l.jsx)(Fo, {
                            ref: g,
                            className: "indicator next",
                            onClick: j,
                            progress: y,
                            ariaLabel: "Next slide",
                            children: (0, l.jsx)(Ro, {
                                className: "icon"
                            })
                        })]
                    })]
                })
            }
            var rl = u.ZP.div.withConfig({
                    componentId: "sc-e7702675-7"
                })(Vo()),
                ol = u.ZP.div.withConfig({
                    componentId: "sc-e7702675-8"
                })(Jo());

            function ll(n) {
                return (0, l.jsx)(l.Fragment, {
                    children: n.slides.length < 4 ? (0, l.jsx)(al, (0, r.Z)({}, n)) : (0, l.jsx)(So, (0, r.Z)({}, n))
                })
            }

            function cl() {
                var n = (0, d.Z)(["\n  width: 7rem;\n  height: 7rem;\n  position: absolute;\n  right: calc(5rem + var(--rem-scale-viewport-half-excess));\n  bottom: 5rem;\n  color: var(--color-white);\n  appearance: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n\n  @media (max-width: 768px) {\n    width: 3.8rem;\n    height: 3.8rem;\n    right: 2rem;\n    bottom: 2.2rem;\n  }\n"]);
                return cl = function() {
                    return n
                }, n
            }
            var sl = u.ZP.button.withConfig({
                componentId: "sc-54a81f40-0"
            })(cl());

            function dl(n) {
                var e = n.className,
                    t = n.sectionRef,
                    i = (0, c.useRef)(null);
                return ei(i, (function() {
                    var n = Gt.p8.timeline({
                        paused: !1,
                        repeat: -1,
                        repeatDelay: 3,
                        onUpdate: function() {
                            var n = Gt.p8.getProperty(i.current, "yPercent");
                            Gt.p8.set(i.current, {
                                clipPath: "inset(".concat(-n, "% 0% ").concat(n, "% 0%)")
                            })
                        }
                    });
                    return n.fromTo(i.current, {
                            yPercent: 0
                        }, {
                            yPercent: 150,
                            duration: .7,
                            ease: "power3.in"
                        }), n.fromTo(i.current, {
                            yPercent: -100
                        }, {
                            yPercent: 0,
                            duration: .5,
                            ease: "circ.out"
                        }),
                        function() {
                            n.kill()
                        }
                })), (0, l.jsx)(sl, {
                    ref: i,
                    className: e,
                    onClick: function() {
                        var n;
                        window.scrollTo({
                            top: (null === (n = t.current) || void 0 === n ? void 0 : n.offsetHeight) || 0,
                            left: 0,
                            behavior: "smooth"
                        })
                    },
                    "aria-label": "Scroll down to next section",
                    children: (0, l.jsx)(Ro, {
                        className: "icon"
                    })
                })
            }

            function ul() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  min-height: clamp(50vw, 100vh, 70vw);\n\n  @media (max-width: 768px) {\n    min-height: max(100vh, 150vw);\n  }\n\n  .content {\n    position: relative;\n    width: 100%;\n    min-height: clamp(50vw, 100vh, 70vw);\n    padding: max(100vh - 90vw, 17rem)\n      max(env(safe-area-inset-right), calc(5rem + var(--rem-scale-viewport-half-excess))) 5rem\n      max(env(safe-area-inset-left), calc(5rem + var(--rem-scale-viewport-half-excess)));\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n\n    @media (max-width: 768px) {\n      padding: 14rem max(env(safe-area-inset-right), 2rem) calc(2rem + var(--browser-chrome-height))\n        max(env(safe-area-inset-right), 2rem);\n      min-height: 100vh;\n    }\n  }\n\n  .flat-title {\n    .title {\n      padding-bottom: 12rem;\n\n      @media (max-width: 768px) {\n        padding-bottom: 2rem;\n\n        h1 {\n          margin-bottom: 0;\n        }\n      }\n    }\n  }\n\n  .background {\n    width: 100%;\n    height: calc(100% + 12rem);\n    position: absolute;\n    left: 0;\n    top: 0;\n\n    > img {\n      display: block;\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 0;\n    }\n\n    &::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      pointer-events: none;\n      background: rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  .title {\n    position: relative;\n    width: 100%;\n\n    h1 {\n      color: var(--color-white);\n      margin-bottom: 4rem;\n\n      @media (max-width: 768px) {\n        margin-bottom: 5rem;\n      }\n    }\n  }\n"]);
                return ul = function() {
                    return n
                }, n
            }

            function ml() {
                var n = (0, d.Z)(["\n  max-width: ", ";\n  color: var(--color-white);\n\n  @media (max-width: 768px) {\n    position: relative;\n    bottom: auto;\n    left: auto;\n    max-width: 26.9rem;\n  }\n\n  .text-base {\n    font-size: ", ";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 120%;\n    letter-spacing: -0.048rem;\n\n    @media (max-width: 768px) {\n      font-size: 1.6rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 120%;\n      letter-spacing: -0.016rem;\n    }\n  }\n"]);
                return ml = function() {
                    return n
                }, n
            }
            var pl = u.ZP.div.withConfig({
                    componentId: "sc-8c832388-0"
                })(ul()),
                hl = u.ZP.div.withConfig({
                    componentId: "sc-8c832388-1"
                })(ml(), (function(n) {
                    return n.useLargeText ? "60rem" : "41.6rem"
                }), (function(n) {
                    return n.useLargeText ? "var(--font-size-h5)" : "2.4rem"
                }));

            function gl(n) {
                var e = n.title,
                    t = n.background,
                    i = n.body,
                    a = n.titleStyle,
                    o = (0, c.useRef)(null),
                    s = (0, c.useRef)(),
                    d = (0, c.useRef)(null),
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(null);
                ei(o, (function() {
                    s.current = Gt.p8.timeline({
                        scrollTrigger: {
                            trigger: o.current,
                            start: "top",
                            end: "bottom",
                            scrub: !1,
                            onUpdate: function(n) {
                                return function(n) {
                                    var e = window.innerWidth <= 768;
                                    Gt.p8.to(d.current, {
                                        y: "-".concat(50 * n, "vh"),
                                        duration: .5
                                    }), Gt.p8.to(u.current, {
                                        y: "-".concat((e ? 50 : 25) * n, "vh"),
                                        duration: .5
                                    }), Gt.p8.to(m.current, {
                                        y: "-".concat(12 * n, "rem"),
                                        duration: .5
                                    })
                                }(n.progress)
                            }
                        }
                    })
                }));
                var p = function(n) {
                    var e, t, i, a, r = k().slugs,
                        o = r[r.length - 1];
                    if (o.includes("vid")) a = "video";
                    else if (o.includes("mus")) a = "musician";
                    else if (o.includes("pod")) a = "podcast";
                    else if (o.includes("gam")) a = "gaming";
                    else {
                        if (o.includes("updates")) return null;
                        a = "artist"
                    }
                    return JSON.stringify({
                        type: "CreatorHero",
                        variation: a,
                        colors: null === n || void 0 === n || null === (e = n.media) || void 0 === e || null === (t = e.data) || void 0 === t || null === (i = t.attributes) || void 0 === i ? void 0 : i.colors
                    })
                }(t);
                return (0, l.jsx)("div", {
                    children: (0, l.jsxs)(pl, {
                        "data-hydra": p,
                        ref: o,
                        children: [(0, l.jsx)("div", {
                            ref: m,
                            className: "background",
                            children: t && (0, l.jsx)(wr, {
                                media: t,
                                crossOrigin: "anonymous"
                            })
                        }), (0, l.jsxs)("div", {
                            className: (0, an.Z)("content", {
                                "flat-title": "flat" === a
                            }),
                            children: [(0, l.jsx)("div", {
                                ref: d,
                                className: "title",
                                children: (0, l.jsx)(Hr, {
                                    align: "flat" === a ? "space-between" : void 0,
                                    size: 1,
                                    children: e
                                })
                            }), (0, l.jsx)(hl, {
                                ref: u,
                                useLargeText: "flat" === a,
                                children: (0, l.jsx)(Ta, (0, r.Z)({}, i))
                            }), (0, l.jsx)(dl, {
                                sectionRef: o,
                                className: "arrow"
                            })]
                        })]
                    })
                })
            }

            function fl() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  max-width: 123rem;\n  margin: 0 auto;\n  color: var(--color-white);\n  padding: 23rem 0 16rem 0;\n\n  @media (max-width: 768px) {\n    padding: 12.6rem 2rem;\n  }\n\n  .body {\n    max-width: 43rem;\n    float: right;\n    clear: both;\n\n    margin-right: -12rem;\n    margin-top: -11rem;\n\n    .text-base {\n      font-size: 2.2rem;\n      font-style: normal;\n      font-weight: 350;\n      line-height: 120%;\n      letter-spacing: -0.044rem;\n\n      @media (max-width: 768px) {\n        font-size: 1.8rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 140%;\n        letter-spacing: -0.036rem;\n        padding-left: 13rem;\n      }\n    }\n\n    @media (max-width: 768px) {\n      float: none;\n      margin-right: 0;\n      margin-top: 5rem;\n    }\n  }\n\n  .logos {\n    padding-top: 14rem;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    @media (max-width: 768px) {\n      padding-top: 5rem;\n      flex-direction: column;\n    }\n\n    > * {\n      margin: 0 2rem;\n\n      @media (max-width: 768px) {\n        margin: 0.8rem 0;\n      }\n    }\n  }\n"]);
                return fl = function() {
                    return n
                }, n
            }

            function vl() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return vl = function() {
                    return n
                }, n
            }

            function xl() {
                var n = (0, d.Z)([""]);
                return xl = function() {
                    return n
                }, n
            }
            var wl = u.ZP.div.withConfig({
                    componentId: "sc-412bc200-0"
                })(fl()),
                bl = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-412bc200-1"
                })(vl()),
                yl = (0, u.ZP)(Hr).attrs({
                    size: 2
                }).withConfig({
                    componentId: "sc-412bc200-2"
                })(xl());

            function jl(n) {
                var e = n.id,
                    t = n.title,
                    i = n.logos,
                    a = void 0 === i ? [] : i,
                    o = n.body,
                    s = n.anchorId,
                    d = n.backgroundColor,
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    h = (0, c.useRef)(),
                    g = B(),
                    f = g.isMobile,
                    v = g.getIsMobile;
                return ei(u, (function() {
                    h.current = Gt.p8.timeline({
                        scrollTrigger: {
                            trigger: u.current,
                            start: "top bottom",
                            end: "bottom",
                            scrub: !1,
                            onUpdate: function(n) {
                                return e = n.progress, v(), void Gt.p8.to([p.current], {
                                    y: "-".concat(12 * e - 6, "vh"),
                                    duration: .5
                                });
                                var e
                            }
                        }
                    })
                })), (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(bl, {
                        seed: e,
                        colors: d,
                        targetLightness: 85
                    }), (0, l.jsx)(wl, {
                        ref: u,
                        id: null === s || void 0 === s ? void 0 : s.anchorId,
                        children: (0, l.jsxs)("div", {
                            className: "content",
                            children: [(0, l.jsx)(yl, {
                                children: t
                            }), (0, l.jsx)("div", {
                                ref: m,
                                className: "body",
                                children: (0, l.jsx)(Ta, (0, r.Z)({}, o))
                            }), (0, l.jsx)("div", {
                                ref: p,
                                className: "logos",
                                children: a.map((function(n) {
                                    return (0, l.jsx)("div", {
                                        className: "logo",
                                        children: (0, l.jsx)(ba, {
                                            image: n,
                                            sizes: "2000px",
                                            transparent: !0,
                                            useRetina: !0,
                                            preferredSize: "thumbnail",
                                            useRemSize: !0,
                                            scaleFactor: f ? .5 : 1.2
                                        })
                                    }, n.id)
                                }))
                            })]
                        })
                    })]
                })
            }

            function kl() {
                var n = (0, d.Z)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #f5f5f5;\n  display: grid;\n  place-items: center;\n  z-index: 1000;\n  font-weight: bold;\n"]);
                return kl = function() {
                    return n
                }, n
            }

            function Zl() {
                var n = (0, d.Z)(["\n  color: #fff;\n  position: absolute;\n  font-size: max(80px, 50vw);\n  letter-spacing: min(-12px, -7vw);\n  margin-left: min(-12px, -7vw);\n  text-align: center;\n  z-index: -1;\n"]);
                return Zl = function() {
                    return n
                }, n
            }

            function _l() {
                var n = (0, d.Z)(["\n  display: grid;\n  place-items: center;\n  row-gap: 32px;\n"]);
                return _l = function() {
                    return n
                }, n
            }

            function Nl() {
                var n = (0, d.Z)(["\n  font-size: clamp(40px, 96px, 7vw);\n  font-weight: 250;\n  text-align: center;\n  margin: 0px;\n"]);
                return Nl = function() {
                    return n
                }, n
            }
            var Cl = u.ZP.div.withConfig({
                    componentId: "sc-f7123504-0"
                })(kl()),
                Il = u.ZP.h1.withConfig({
                    componentId: "sc-f7123504-1"
                })(Zl()),
                Pl = u.ZP.div.withConfig({
                    componentId: "sc-f7123504-2"
                })(_l()),
                Sl = u.ZP.h4.withConfig({
                    componentId: "sc-f7123504-3"
                })(Nl());

            function zl(n) {
                var e = n.errorCode,
                    t = n.description,
                    i = n.ctaHeading;
                return (0, c.useEffect)((function() {
                    var n = document.getElementById("main-content");
                    return null === n || void 0 === n || n.classList.add("collapsed-main-content"),
                        function() {
                            var n = document.getElementById("main-content");
                            null === n || void 0 === n || n.classList.remove("collapsed-main-content")
                        }
                }), []), (0, c.useEffect)((function() {
                    var n;
                    n = {
                        error_code: e
                    }, Ae.y.logTypedEvent("Error Page : Landed", n)
                }), [e]), (0, l.jsxs)(Cl, {
                    children: [(0, l.jsx)(Il, {
                        children: e
                    }), (0, l.jsxs)(Pl, {
                        children: [(0, l.jsx)(Sl, {
                            children: t
                        }), (0, l.jsx)(ci, {
                            label: i,
                            external_url: "/",
                            target: "_self"
                        })]
                    })]
                })
            }
            var Ll = t(8522),
                Ml = t(4780);

            function Rl() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  min-height: clamp(50vw, 100vh, 70vw);\n  padding: max(100vh - 90vw, 17rem) max(env(safe-area-inset-right), calc(5rem + var(--rem-scale-viewport-half-excess)))\n    5rem max(env(safe-area-inset-left), calc(5rem + var(--rem-scale-viewport-half-excess)));\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 2.5rem;\n  margin-bottom: 9rem;\n\n  h5 {\n    font-size: var(--font-size-h5);\n    max-width: 100%;\n    margin-bottom: 1rem;\n  }\n\n  p {\n    font-size: var(--font-size-body);\n  }\n\n  .collapsible {\n    overflow: hidden;\n  }\n\n  .mb-4 {\n    margin-bottom: 4rem;\n  }\n\n  @media (max-width: 768px) {\n    padding: 14rem max(env(safe-area-inset-right), 2rem) calc(2rem + var(--browser-chrome-height))\n      max(env(safe-area-inset-left), 2rem);\n    min-height: 100dvh;\n  }\n"]);
                return Rl = function() {
                    return n
                }, n
            }

            function El() {
                var n = (0, d.Z)(["\n  background-color: transparent;\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  appearance: none;\n  font-family: inherit;\n  font-size: inherit;\n  text-decoration: none;\n  color: inherit;\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n  text-align: inherit;\n  widthL 100%;\n  display: flex;\n  flex-direction: horizontal;\n  justify-content: space-between;\n  align-items: center;\n  gap: 4rem;\n  width: 100%;\n"]);
                return El = function() {
                    return n
                }, n
            }

            function Tl() {
                var n = (0, d.Z)(["\n  margin: 0 auto;\n  width: 100%;\n  max-width: 1200px;\n  border-bottom: var(--border);\n  padding: 1rem 0;\n"]);
                return Tl = function() {
                    return n
                }, n
            }

            function Ol() {
                var n = (0, d.Z)(["\n  margin-left: 0.5rem;\n  vertical-align: middle;\n  width: 2.2rem;\n  height: 2.2rem;\n"]);
                return Ol = function() {
                    return n
                }, n
            }

            function Bl() {
                var n = (0, d.Z)(["\n  margin-left: 0.5rem;\n  vertical-align: middle;\n  width: 2.2rem;\n  height: 2.2rem;\n"]);
                return Bl = function() {
                    return n
                }, n
            }

            function Al() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return Al = function() {
                    return n
                }, n
            }

            function Hl(n) {
                var e = n.title,
                    t = n.sections,
                    i = n.backgroundColor;
                return (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(Kl, {
                        color: i,
                        targetLightness: 85
                    }), (0, l.jsxs)(Ul, {
                        children: [(0, l.jsx)(Hr, {
                            align: "alternating",
                            className: "mb-4",
                            size: 1,
                            children: e
                        }), null === t || void 0 === t ? void 0 : t.map((function(n) {
                            return (0, c.createElement)(Fl, (0, s.Z)((0, r.Z)({}, n), {
                                key: n.heading
                            }))
                        }))]
                    })]
                })
            }
            var Fl = function(n) {
                    var e = n.heading,
                        t = n.content,
                        i = (0, c.useState)(!0),
                        a = i[0],
                        r = i[1];
                    return (0, l.jsx)(Ll.f, {
                        children: (0, l.jsxs)(Wl, {
                            children: [(0, l.jsx)("h5", {
                                children: (0, l.jsxs)(Dl, {
                                    onClick: function() {
                                        return r(!a)
                                    },
                                    children: [e, a ? (0, l.jsx)(Gl, {}) : (0, l.jsx)(ql, {})]
                                })
                            }), (0, l.jsx)(Ml.U, {
                                isCollapsed: a,
                                children: (0, l.jsx)(Ta, {
                                    size: "large",
                                    text: t
                                })
                            })]
                        })
                    })
                },
                Ul = u.ZP.div.withConfig({
                    componentId: "sc-13e5e882-0"
                })(Rl()),
                Dl = u.ZP.button.withConfig({
                    componentId: "sc-13e5e882-1"
                })(El()),
                Wl = u.ZP.div.withConfig({
                    componentId: "sc-13e5e882-2"
                })(Tl()),
                Gl = (0, u.ZP)(T).withConfig({
                    componentId: "sc-13e5e882-3"
                })(Ol()),
                ql = (0, u.ZP)(M).withConfig({
                    componentId: "sc-13e5e882-4"
                })(Bl()),
                Kl = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-13e5e882-5"
                })(Al());

            function Yl() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding: 21rem calc(13rem + var(--rem-scale-viewport-half-excess));\n\n  @media (max-width: 768px) {\n    padding: 12rem 2rem;\n  }\n\n  .images > div img {\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: cover;\n  }\n\n  .creators {\n    position: relative;\n    height: 108rem;\n    margin: -31rem -13rem -39rem;\n\n    @media (max-width: 768px) {\n      height: 65rem;\n      margin: -8rem -2rem -36rem;\n      transform-origin: left top;\n      transform: scale(0.6);\n    }\n\n    .creators-inner {\n      display: flex;\n      flex-wrap: nowrap;\n      align-items: center;\n      width: 100%;\n      height: 100%;\n      position: relative;\n\n      &.started {\n        display: block;\n\n        > div {\n          position: absolute;\n          left: 0;\n          top: 50%;\n          margin-right: 0 !important;\n        }\n      }\n    }\n\n    .creator {\n      flex-shrink: 0;\n      margin-right: 7rem;\n      position: relative;\n\n      &:nth-child(3n + 1) {\n        margin-top: -7rem;\n      }\n\n      &:nth-child(3n + 2) {\n        margin-top: 7rem;\n      }\n\n      &:nth-child(3n + 3) {\n        margin-top: -5rem;\n      }\n\n      img {\n        position: relative;\n        max-width: none;\n      }\n\n      .creator-link {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        display: block;\n      }\n\n      .creator-name {\n        position: absolute;\n        left: 1rem;\n        bottom: 1rem;\n        color: var(--color-white);\n        font-size: 1.8rem;\n        font-style: normal;\n        font-weight: 500;\n        line-height: 120%;\n        letter-spacing: -0.02em;\n      }\n    }\n  }\n\n  &.altlayout {\n    min-height: 125rem;\n    padding: 0;\n    overflow: visible;\n\n    @media (max-width: 768px) {\n      padding: 0;\n      min-height: 65rem;\n    }\n\n    .creators {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n      margin: 0;\n      overflow: hidden;\n\n      @media (max-width: 768px) {\n        transform: none;\n        max-height: 76rem;\n      }\n\n      .creator {\n        margin-right: 7.5rem;\n        flex-shrink: 0;\n\n        @media (max-width: 768px) {\n          margin-right: 4.5rem;\n        }\n\n        .creator-name {\n          @media (max-width: 768px) {\n            font-size: calc(1.8rem * 0.6);\n          }\n        }\n\n        > img {\n          width: 100% !important;\n          height: auto !important;\n        }\n\n        ", "\n      }\n    }\n  }\n"]);
                return Yl = function() {
                    return n
                }, n
            }

            function Vl() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return Vl = function() {
                    return n
                }, n
            }

            function Jl() {
                var n = (0, d.Z)(["\n  position: relative;\n  color: var(--color-white);\n  font-size: 14rem;\n  font-style: normal;\n  font-weight: 250;\n  line-height: 95%;\n  letter-spacing: -0.05em;\n  z-index: 300;\n  color: var(--color-white);\n  will-change: transform;\n  mix-blend-mode: exclusion;\n\n  @media (max-width: 768px) {\n    font-size: 5.8rem;\n    font-style: normal;\n    font-weight: 300;\n    line-height: 102%;\n    letter-spacing: -0.04em;\n  }\n"]);
                return Jl = function() {
                    return n
                }, n
            }

            function $l() {
                var n = (0, d.Z)(["\n  position: absolute;\n  width: 50%;\n  line-height: 87%;\n  letter-spacing: -0.06em;\n  color: var(--color-white);\n  mix-blend-mode: exclusion;\n  z-index: 300;\n  pointer-events: none;\n"]);
                return $l = function() {
                    return n
                }, n
            }

            function Xl() {
                var n = (0, d.Z)(["\n  left: max(env(safe-area-inset-left), calc(5rem + var(--rem-scale-viewport-half-excess)));\n  top: 15rem;\n  width: 60%;\n\n  @media (max-width: 768px) {\n    width: 32.4rem;\n    left: 2rem;\n    top: 11.3rem;\n  }\n"]);
                return Xl = function() {
                    return n
                }, n
            }

            function Ql() {
                var n = (0, d.Z)(["\n  right: max(env(safe-area-inset-right), calc(5rem + var(--rem-scale-viewport-half-excess)));\n  bottom: 9rem;\n\n  > span {\n    text-align: right !important;\n  }\n\n  @media (max-width: 768px) {\n    width: 29.1rem;\n    right: 2rem;\n    bottom: auto;\n    top: 54rem;\n  }\n"]);
                return Ql = function() {
                    return n
                }, n
            }

            function nc() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: max(env(safe-area-inset-left), calc(5rem + var(--rem-scale-viewport-half-excess)));\n  width: 480px;\n  bottom: 8.4rem;\n  line-height: 120%;\n  letter-spacing: -0.023em;\n  color: var(--color-white);\n  mix-blend-mode: exclusion;\n  z-index: 300;\n  pointer-events: none;\n\n  @media (max-width: 768px) {\n    width: 30rem;\n    margin-left: max(env(safe-area-inset-left), 2rem);\n    padding-top: 68rem;\n    position: relative;\n    left: auto;\n    bottom: auto;\n    padding-bottom: 5rem;\n  }\n"]);
                return nc = function() {
                    return n
                }, n
            }
            var ec = [
                    [{
                        width: "38.5rem",
                        marginTop: "7rem"
                    }, {
                        width: "25rem",
                        marginTop: "3.5rem"
                    }],
                    [{
                        width: "38.9rem",
                        marginTop: "-2rem"
                    }, {
                        width: "25.0396rem",
                        marginTop: "-1rem"
                    }],
                    [{
                        width: "59.6rem",
                        marginTop: "8rem"
                    }, {
                        width: "38.364rem",
                        marginTop: "4rem"
                    }],
                    [{
                        width: "35.7rem",
                        marginTop: "-10rem"
                    }, {
                        width: "23rem",
                        marginTop: "-5rem"
                    }],
                    [{
                        width: "24.6rem",
                        marginTop: "-6rem"
                    }, {
                        width: "16rem",
                        marginTop: "-3rem"
                    }]
                ],
                tc = u.ZP.div.withConfig({
                    componentId: "sc-e465180b-0"
                })(Yl(), ec.map((function(n, e) {
                    var t = (0, lt.Z)(n, 2),
                        i = t[0],
                        a = t[1];
                    return "\n              &:nth-child(5n + ".concat(e + 1, ") {\n                width: ").concat(i.width, ";\n                margin-top: ").concat(i.marginTop, ";\n                @media (max-width: 768px) {\n                  width: ").concat(a.width, ";\n                  margin-top: ").concat(a.marginTop, ";\n                }\n              }\n            ")
                })).join("")),
                ic = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-e465180b-1"
                })(Vl()),
                ac = (0, u.ZP)(Hr).attrs({
                    size: 3,
                    align: "left"
                }).withConfig({
                    componentId: "sc-e465180b-2"
                })(Jl()),
                rc = (0, u.ZP)(Hr).attrs({
                    size: 2,
                    align: "left",
                    useSpan: !0
                }).withConfig({
                    componentId: "sc-e465180b-3"
                })($l()),
                oc = (0, u.ZP)(rc).withConfig({
                    componentId: "sc-e465180b-4"
                })(Xl()),
                lc = (0, u.ZP)(rc).withConfig({
                    componentId: "sc-e465180b-5"
                })(Ql()),
                cc = u.ZP.div.withConfig({
                    componentId: "sc-e465180b-6"
                })(nc());

            function sc(n, e, t) {
                if (t) {
                    var i = (0, lt.Z)(ec[e % ec.length], 2),
                        a = i[0],
                        r = i[1];
                    return wa(a.width, r.width)
                }
                var o = va(fa(ga(null === n || void 0 === n ? void 0 : n.media)), "small"),
                    l = 50;
                if (o) {
                    var c = xa(o).width;
                    l = parseFloat(c)
                }
                return wa(l, .6 * l)
            }

            function dc(n) {
                for (var e = n.id, t = n.title, i = n.title2, a = n.body, o = n.creators, d = void 0 === o ? [] : o, u = n.anchorId, m = n.backgroundColor || ["#f8f9fc", "#ebf4ff", "#dfebfc", "#c4dcfc"], p = (0, c.useRef)(null), h = (0, c.useRef)(null), g = (0, c.useRef)(null), f = (0, c.useState)(!1), v = f[0], x = f[1], w = (0, c.useState)([]), b = w[0], y = w[1], j = (0, c.useRef)(!1), k = (0, c.useRef)(0), Z = (0, c.useRef)(0), _ = (0, c.useRef)(0), N = ha().scale, C = B().isMobile, I = (0, Wn.Z)(d), P = (0, c.useRef)([]), S = (0, Wn.Z)(I), z = 1; I.length < 6;) I = (0, Wn.Z)(I).concat((0, Wn.Z)(S.map((function(n) {
                    return (0, s.Z)((0, r.Z)({}, n), {
                        id: parseInt("".concat(n.id).concat(z), 10)
                    })
                })))), z++;
                (0, vr.Z)((function(n) {
                    if (v) {
                        if (j.current && !C) {
                            var e = n - (k.current || 0);
                            Z.current = (Z.current || 0) + e
                        }
                        var t = n - (Z.current || 0),
                            i = _.current || 0,
                            a = i + .085 * (t - i);
                        _.current = Math.abs(i - a) < 500 ? a : t;
                        var o = 0,
                            l = 0,
                            c = 0,
                            d = 1,
                            u = [],
                            m = N * (C ? 45 : 75);
                        P.current.forEach((function(n, e) {
                            if (n) {
                                var t = n.offsetWidth,
                                    i = n.offsetHeight;
                                if (0 === t) return;
                                0 === e && (d = t * i), t + m > c && (c = t + m), l += t + m, u[e] = t * i
                            }
                        })), o = l + c;
                        var p = u.map((function(n, e) {
                            return {
                                area: n,
                                index: e,
                                zIndex: 0
                            }
                        }));
                        p.sort((function(n, e) {
                            return e.area - n.area
                        })), (p = p.map((function(n, e) {
                            return (0, s.Z)((0, r.Z)({}, n), {
                                zIndex: 200 - e
                            })
                        }))).sort((function(n, e) {
                            return n.index - e.index
                        })), P.current.forEach((function(n, e) {
                            if (n) {
                                var t = n.offsetWidth,
                                    i = p[e],
                                    r = Math.sin(t + 75e-6 * a) * (.15 * t * (1 - i.area / d * .15)),
                                    s = l - (o + r + a * (C ? .05 : .075 * N)) % l - c;
                                n.style.transform = "translateX(".concat(s, "px) translateY(-50%)"), n.style.zIndex !== "".concat(i.zIndex) && (n.style.zIndex = "".concat(i.zIndex)), t > 0 && (o -= t + m)
                            }
                        })), k.current = n
                    } else x(!0)
                }));
                var L = function(n) {
                        if (null === n) y([]), j.current = !1;
                        else {
                            var e = (0, Wn.Z)(b);
                            e[n] = !0, y(e), j.current = !0
                        }
                    },
                    M = !!i;
                return (0, l.jsx)("div", {
                    children: (0, l.jsxs)(tc, {
                        ref: p,
                        id: null === u || void 0 === u ? void 0 : u.anchorId,
                        className: (0, an.Z)({
                            altlayout: M
                        }),
                        children: [(0, l.jsx)(ic, {
                            seed: e,
                            colors: m
                        }), !i && (0, l.jsx)(ac, {
                            children: t
                        }), (0, l.jsx)("div", {
                            ref: h,
                            className: "creators",
                            children: (0, l.jsx)("div", {
                                ref: g,
                                className: (0, an.Z)("creators-inner", {
                                    started: v
                                }),
                                children: I.map((function(n, e) {
                                    return (0, l.jsxs)("div", {
                                        ref: function(n) {
                                            return P.current[e] = n
                                        },
                                        className: "creator",
                                        onMouseOver: function() {
                                            return L(e)
                                        },
                                        onFocus: function() {
                                            return L(e)
                                        },
                                        onMouseOut: function() {
                                            return L(null)
                                        },
                                        onBlur: function() {
                                            return L(null)
                                        },
                                        "aria-hidden": e >= d.length,
                                        children: [(null === n || void 0 === n ? void 0 : n.media) && (0, l.jsx)(wr, {
                                            media: n.media,
                                            preferredImageSize: "small",
                                            useRemSize: !0,
                                            sizes: sc(n.media, e, M)
                                        }), (null === n || void 0 === n ? void 0 : n.creator) && (0, l.jsx)(Ve, {
                                            className: "creator-link",
                                            page: n.creator.page,
                                            externalUrl: n.creator.externalUrl,
                                            useChildren: !0,
                                            children: (0, l.jsx)("div", {
                                                className: "creator-name",
                                                children: (0, l.jsx)(Rt, {
                                                    animateOnHover: !0,
                                                    className: (0, an.Z)({
                                                        active: !!b[e]
                                                    }),
                                                    children: n.creator.text
                                                })
                                            })
                                        })]
                                    }, "".concat(n.id).concat(e))
                                }))
                            })
                        }), i && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsxs)("h2", {
                                children: [(0, l.jsx)(oc, {
                                    children: t
                                }), (0, l.jsx)(lc, {
                                    children: i
                                })]
                            }), (0, l.jsx)(cc, {
                                children: (0, l.jsx)(Ta, (0, s.Z)((0, r.Z)({}, a), {
                                    size: "large"
                                }))
                            })]
                        })]
                    })
                })
            }

            function uc() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  min-height: clamp(50vw, 100vh, 70vw);\n\n  @media (max-width: 768px) {\n    min-height: max(100vh, 150vw);\n  }\n\n  &.has-product-ui {\n    min-height: clamp(50vw, 130vh, 90vw);\n\n    @media (max-width: 768px) {\n      min-height: max(50vw, 150vh);\n    }\n\n    .content {\n      min-height: clamp(50vw, 100vh, 90vw);\n\n      @media (max-width: 768px) {\n        min-height: 100dvh;\n      }\n    }\n\n    .product-uis {\n      display: flex;\n    }\n\n    .arrow {\n      display: none;\n    }\n  }\n\n  .content {\n    position: relative;\n    width: 100%;\n    min-height: clamp(50vw, 100vh, 70vw);\n    padding: max(100vh - 90vw, 17rem)\n      max(env(safe-area-inset-right), calc(5rem + var(--rem-scale-viewport-half-excess))) 5rem\n      max(env(safe-area-inset-left), calc(5rem + var(--rem-scale-viewport-half-excess)));\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n\n    @media (max-width: 768px) {\n      padding: 14rem max(env(safe-area-inset-right), 2rem) calc(2rem + var(--browser-chrome-height))\n        max(env(safe-area-inset-left), 2rem);\n      min-height: 100dvh;\n    }\n  }\n\n  .background {\n    width: 100%;\n    height: calc(100% + 12rem);\n    position: absolute;\n    left: 0;\n    top: 0;\n\n    > img {\n      display: block;\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 0;\n    }\n\n    &::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      pointer-events: none;\n      background: rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  .title {\n    position: relative;\n    width: 100%;\n\n    h1 {\n      color: var(--color-white);\n      margin-bottom: 20rem;\n      margin-top: 0;\n\n      @media (max-width: 768px) {\n        margin-bottom: 5rem;\n      }\n    }\n  }\n\n  .product-uis {\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    width: 100%;\n    top: 100%;\n    display: none;\n    flex-wrap: nowrap;\n    align-items: flex-start;\n    justify-content: flex-end;\n    padding-right: calc(5rem + var(--rem-scale-viewport-half-excess));\n    transform: translateY(-35%);\n\n    @media (max-width: 768px) {\n      padding-right: 2rem;\n      top: 100%;\n      transform: none;\n    }\n\n    .product-ui {\n      flex-shrink: 0;\n      margin-left: -7rem;\n      z-index: 101;\n      margin-top: 13rem;\n\n      &:nth-child(2) {\n        margin-top: 0;\n        z-index: 100;\n      }\n\n      &:last-child {\n        margin-right: 0;\n      }\n\n      @media (max-width: 768px) {\n        max-width: 50%;\n        margin-left: -1rem;\n        margin-top: 5.7rem;\n\n        &:nth-child(2) {\n          margin-top: 0;\n        }\n\n        img {\n          height: auto !important;\n        }\n      }\n    }\n  }\n\n  .arrow {\n    width: 7rem;\n    height: 7rem;\n    position: absolute;\n    right: 5rem;\n    top: calc(100vh - 5rem - 7rem);\n    color: var(--color-white);\n    appearance: none;\n    background: none;\n    padding: 0;\n    margin: 0;\n    border-radius: 0;\n\n    @media (max-width: 768px) {\n      width: 3.8rem;\n      height: 3.8rem;\n      right: 2rem;\n      top: calc(100vh - 2.2rem - 3.8rem);\n    }\n  }\n"]);
                return uc = function() {
                    return n
                }, n
            }

            function mc() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return mc = function() {
                    return n
                }, n
            }

            function pc() {
                var n = (0, d.Z)(["\n  max-width: 41.6rem;\n  color: var(--color-white);\n\n  @media (max-width: 768px) {\n    position: relative;\n    bottom: auto;\n    left: auto;\n    max-width: 26.9rem;\n  }\n\n  .text-base {\n    font-size: 2.4rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 120%;\n    letter-spacing: -0.048rem;\n\n    @media (max-width: 768px) {\n      font-size: 1.6rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 120%;\n      letter-spacing: -0.016rem;\n    }\n  }\n"]);
                return pc = function() {
                    return n
                }, n
            }
            var hc = u.ZP.div.withConfig({
                    componentId: "sc-84b01dd8-0"
                })(uc()),
                gc = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-84b01dd8-1"
                })(mc()),
                fc = u.ZP.div.withConfig({
                    componentId: "sc-84b01dd8-2"
                })(pc());

            function vc(n) {
                var e = n.id,
                    t = n.title,
                    i = n.background,
                    a = n.body,
                    o = n.productui,
                    s = void 0 === o ? [] : o,
                    d = n.backgroundColor,
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(),
                    p = (0, c.useRef)(),
                    h = (0, c.useRef)([]),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    v = (0, c.useRef)(null),
                    x = (0, c.useRef)(null);
                return ei(u, (function() {
                    m.current = Gt.p8.timeline({
                        scrollTrigger: {
                            trigger: u.current,
                            start: "top",
                            end: "bottom",
                            scrub: !1,
                            onUpdate: function(n) {
                                return function(n) {
                                    var e = window.innerWidth <= 768;
                                    s.forEach((function(t, i) {
                                        Gt.p8.to(h.current[s.length - 1 - i], {
                                            y: "-".concat((e ? 40 : 60) * n, "vh"),
                                            duration: .5 + .15 * (i + 1)
                                        })
                                    })), Gt.p8.to(g.current, {
                                        y: "-".concat(50 * n, "vh"),
                                        duration: .5
                                    }), Gt.p8.to(f.current, {
                                        y: "-".concat((e ? 50 : 25) * n, "vh"),
                                        duration: .5
                                    }), Gt.p8.to(v.current, {
                                        y: "-".concat(12 * n, "rem"),
                                        duration: .5
                                    })
                                }(n.progress)
                            }
                        }
                    }), p.current = Gt.p8.timeline({
                        paused: !1,
                        repeat: -1,
                        repeatDelay: 3
                    }), p.current.fromTo(x.current, {
                        y: "0%"
                    }, {
                        y: "25%",
                        duration: .5,
                        ease: "bounce.easeIn"
                    }), p.current.to(x.current, {
                        y: "0%",
                        ease: "circ.easeOut",
                        duration: .2
                    }, .5)
                })), (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(gc, {
                        seed: e,
                        colors: d,
                        targetLightness: 85
                    }), (0, l.jsxs)(hc, {
                        ref: u,
                        className: (0, an.Z)({
                            "has-product-ui": s.length > 0
                        }),
                        children: [(0, l.jsx)("div", {
                            ref: v,
                            className: "background",
                            children: i && (0, l.jsx)(wr, {
                                media: i
                            })
                        }), (0, l.jsxs)("div", {
                            className: "content",
                            children: [(0, l.jsx)("div", {
                                ref: g,
                                className: "title",
                                children: (0, l.jsx)(Hr, {
                                    size: 1,
                                    align: "alternating-reverse",
                                    children: t
                                })
                            }), (0, l.jsx)("div", {
                                className: "product-uis",
                                children: s.slice(0).reverse().map((function(n, e) {
                                    return (0, l.jsx)("div", {
                                        ref: function(n) {
                                            return h.current[e] = n
                                        },
                                        className: "product-ui",
                                        children: (0, l.jsx)(wr, {
                                            media: n,
                                            preferredImageSize: "medium",
                                            useRemSize: !0,
                                            transparent: !0
                                        })
                                    }, n.id)
                                }))
                            }), (0, l.jsx)(fc, {
                                ref: f,
                                children: (0, l.jsx)(Ta, (0, r.Z)({}, a))
                            }), (0, l.jsx)("button", {
                                ref: x,
                                className: "arrow",
                                onClick: function() {
                                    var n;
                                    window.scrollTo({
                                        top: (null === (n = u.current) || void 0 === n ? void 0 : n.offsetHeight) || 0,
                                        left: 0,
                                        behavior: "smooth"
                                    })
                                },
                                "aria-label": "Scroll down to next section",
                                children: (0, l.jsx)(Ro, {
                                    className: "icon"
                                })
                            })]
                        })]
                    })]
                })
            }

            function xc() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding: 23rem calc(20rem + var(--rem-scale-viewport-half-excess));\n\n  .content {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    @media (max-width: 768px) {\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .logos {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      grid-gap: 5.6rem;\n      justify-content: center;\n      align-items: center;\n\n      @media (max-width: 768px) {\n        grid-gap: 4rem;\n        margin-top: 4.8rem;\n\n        img {\n          max-width: 7.6rem !important;\n          height: auto !important;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 768px) {\n    padding: 12.6rem 2rem !important;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n  }\n"]);
                return xc = function() {
                    return n
                }, n
            }

            function wc() {
                var n = (0, d.Z)(["\n  line-height: 1;\n  letter-spacing: -0.06em;\n  margin-bottom: ", ";\n\n  span {\n    word-wrap: break-word;\n  }\n\n  @media (max-width: 768px) {\n    margin-bottom: 4.8rem;\n    margin-right: 0;\n    text-align: left;\n  }\n"]);
                return wc = function() {
                    return n
                }, n
            }

            function bc() {
                var n = (0, d.Z)(["\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n  column-gap: 10rem;\n  justify-content: center;\n  max-width: 32rem;\n\n  .text-base {\n    &:last-child {\n      margin-bottom: 0 !important;\n    }\n  }\n\n  @media (max-width: 768px) {\n    max-width: none;\n    grid-auto-columns: 0.9fr !important;\n    grid-auto-flow: row;\n    justify-content: start;\n    margin-bottom: 0;\n    margin-top: 0;\n    gap: 0;\n    float: none;\n    position: relative;\n    bottom: auto;\n\n    .text-base {\n      margin-bottom: 4rem;\n    }\n  }\n"]);
                return bc = function() {
                    return n
                }, n
            }
            var yc = u.ZP.div.withConfig({
                    componentId: "sc-164aaf4e-0"
                })(xc()),
                jc = (0, u.ZP)(Hr).attrs({
                    size: 2
                }).withConfig({
                    componentId: "sc-164aaf4e-1"
                })(wc(), "".concat((14 / 17).toFixed(2), "em")),
                kc = u.ZP.div.withConfig({
                    componentId: "sc-164aaf4e-2"
                })(bc());

            function Zc(n) {
                var e = n.title,
                    t = n.id,
                    i = n.body,
                    a = n.logos,
                    o = n.backgroundColor,
                    s = e.replace(/\s+/g, "-").toLowerCase(),
                    d = (0, c.useRef)(null),
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(),
                    h = B().getIsMobile;
                return ei(d, (function() {
                    p.current = Gt.p8.timeline({
                        scrollTrigger: {
                            trigger: d.current,
                            start: "top bottom",
                            end: "bottom",
                            scrub: !1,
                            onUpdate: function(n) {
                                return e = n.progress, h(), void Gt.p8.to([u.current, m.current], {
                                    y: "-".concat(12 * e - 6, "vh"),
                                    duration: .5
                                });
                                var e
                            }
                        }
                    })
                })), (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(ho, {
                        seed: t,
                        colors: o
                    }), (0, l.jsxs)(yc, {
                        ref: d,
                        id: s,
                        children: [(0, l.jsx)(jc, {
                            children: e
                        }), (0, l.jsxs)("div", {
                            className: "content",
                            children: [(0, l.jsx)(kc, {
                                ref: u,
                                children: (0, l.jsx)(Ta, (0, r.Z)({
                                    minHeadingLevel: 3
                                }, i))
                            }), (0, l.jsx)("div", {
                                ref: m,
                                className: "logos",
                                children: a.map((function(n) {
                                    return (0, l.jsx)(ba, {
                                        image: n,
                                        transparent: !0,
                                        useRetina: !0,
                                        useRemSize: !0
                                    }, n.id)
                                }))
                            })]
                        })]
                    })]
                })
            }

            function _c() {
                var n = (0, d.Z)(["\n  transition: transform var(--animation-duration-fast) var(--animation-timing);\n  transform: scale(1);\n\n  &:hover {\n    transform: scale(1.05);\n  }\n\n  .feature-image {\n    aspect-ratio: 16 / 9;\n  }\n\n  .image {\n    object-fit: cover;\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n\n  .article-content {\n    padding: var(--spacing-sm);\n  }\n\n  .eyebrow {\n    font: var(--font-label-0);\n    letter-spacing: -0.0056rem;\n    text-transform: uppercase;\n    margin-bottom: var(--spacing-xs);\n  }\n\n  .article-title {\n    font: var(--font-label-3);\n  }\n"]);
                return _c = function() {
                    return n
                }, n
            }

            function Nc(n) {
                var e = n.headline,
                    t = n.category,
                    i = n.previewImage,
                    a = n.link;
                return (0, l.jsx)(Ve, (0, s.Z)((0, r.Z)({}, a), {
                    useChildren: !0,
                    children: (0, l.jsxs)(Cc, {
                        children: [(0, l.jsx)("figure", {
                            className: "feature-image",
                            children: (0, l.jsx)(ba, {
                                image: i,
                                className: "image",
                                sizes: "(min-width: 769px) 420px, (min-width: 640px) 50vw, 100vw"
                            })
                        }), (0, l.jsx)("div", {
                            className: "article-content",
                            children: (0, l.jsxs)("header", {
                                className: "article-header",
                                children: [(0, l.jsx)("p", {
                                    className: "eyebrow",
                                    children: t
                                }), (0, l.jsx)("h5", {
                                    className: "article-title",
                                    children: e
                                })]
                            })
                        })]
                    })
                }))
            }
            var Cc = u.ZP.article.withConfig({
                componentId: "sc-88947994-0"
            })(_c());

            function Ic() {
                var n = (0, d.Z)(["\n  .related-header {\n    font: var(--font-h4);\n    letter-spacing: -0.04em;\n    margin-bottom: var(--spacing-base);\n  }\n\n  .related-list {\n    display: grid;\n    grid-gap: var(--spacing-sm);\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  @media (max-width: 768px) {\n    margin: 0;\n\n    .related-list {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media (max-width: 640px) {\n    .related-list {\n      grid-template-columns: 1fr;\n    }\n  }\n"]);
                return Ic = function() {
                    return n
                }, n
            }

            function Pc(n) {
                var e = n.header,
                    t = n.articles.filter((function(n) {
                        if (!n.link) return !1;
                        var e = n.link,
                            t = e.page,
                            i = e.externalUrl,
                            a = e.anchor;
                        try {
                            We(t, i, a)
                        } catch (r) {
                            return !1
                        }
                        return !0
                    }));
                return t.length ? (0, l.jsx)(Ba, {
                    children: (0, l.jsxs)(Sc, {
                        children: [(0, l.jsx)("header", {
                            className: "related-header",
                            children: (0, l.jsx)("h4", {
                                className: "related-title",
                                children: qi(e)
                            })
                        }), (0, l.jsx)("div", {
                            className: "related-content",
                            children: (0, l.jsx)("ul", {
                                className: "related-list",
                                children: t.map((function(n) {
                                    return (0, l.jsx)("li", {
                                        className: "related-item",
                                        children: (0, l.jsx)(Nc, {
                                            headline: n.headline,
                                            category: n.category,
                                            previewImage: n.previewImage,
                                            link: n.link
                                        })
                                    }, n.id)
                                }))
                            })
                        })]
                    })
                }) : null
            }
            var Sc = u.ZP.aside.withConfig({
                componentId: "sc-427bc93e-0"
            })(Ic());

            function zc() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n\n  &.light {\n    color: var(--color-white);\n  }\n\n  &.dark {\n    color: var(--color-black);\n  }\n\n  .background {\n    width: 100%;\n    height: calc(100% + 30vh);\n    position: absolute;\n    left: 0;\n    top: 0;\n    overflow: hidden;\n\n    @media (max-width: 768px) {\n      height: calc(100% + 15vh);\n    }\n\n    > img {\n      display: block;\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 0;\n    }\n  }\n\n  .title-spacer {\n    margin-top: 16.5rem;\n\n    @media (max-width: 768px) {\n      margin-top: 9.6rem;\n    }\n  }\n\n  .title-wrapper {\n    position: relative;\n    left: calc(5rem + var(--rem-scale-viewport-half-excess));\n    mix-blend-mode: exclusion;\n    min-height: 50rem;\n\n    @media (max-width: 768px) {\n      left: 2rem;\n      width: 20rem;\n      min-height: 15rem;\n    }\n  }\n"]);
                return zc = function() {
                    return n
                }, n
            }

            function Lc() {
                var n = (0, d.Z)(["\n  line-height: 90%;\n  letter-spacing: -0.06em;\n  color: var(--color-white);\n\n  @media (max-width: 768px) {\n    font-size: 6.4rem;\n    line-height: 100%;\n    letter-spacing: -0.256rem;\n  }\n"]);
                return Lc = function() {
                    return n
                }, n
            }

            function Mc() {
                var n = (0, d.Z)(["\n  position: relative;\n  left: calc(23rem + var(--rem-scale-viewport-half-excess));\n  margin-top: 35rem;\n  width: 34.5rem;\n  font-size: var(--font-size-label-2);\n  font-style: normal;\n  font-weight: 350;\n  line-height: 110%;\n  letter-spacing: -0.036rem;\n\n  @media (max-width: 768px) {\n    width: 18rem;\n    font-size: 1.6rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 120%;\n    letter-spacing: -0.048rem;\n    left: 2rem;\n    margin-top: 20rem;\n  }\n"]);
                return Mc = function() {
                    return n
                }, n
            }

            function Rc() {
                var n = (0, d.Z)(["\n          position: absolute;\n          top: 14rem;\n          right: 7rem;\n          max-width: 50%;\n          line-height: 1.2;\n          text-indent: 8rem;\n          text-align: right;\n        "]);
                return Rc = function() {
                    return n
                }, n
            }

            function Ec() {
                var n = (0, d.Z)(["\n          width: 142rem;\n          left: max(env(safe-area-inset-left), calc(5rem + var(--rem-scale-viewport-half-excess)));\n          margin-top: 9.5rem;\n          text-indent: 18rem;\n          line-height: 110%;\n          letter-spacing: -0.288rem;\n        "]);
                return Ec = function() {
                    return n
                }, n
            }

            function Tc() {
                var n = (0, d.Z)(["\n  position: relative;\n\n  ", "\n\n  @media (max-width: 768px) {\n    width: 35rem;\n    max-width: 80%;\n    left: max(env(safe-area-inset-left), 2rem);\n    margin-top: 9.6rem;\n    text-indent: 7rem;\n    font-size: 2.4rem;\n    line-height: 100%;\n    letter-spacing: -0.096rem;\n  }\n"]);
                return Tc = function() {
                    return n
                }, n
            }

            function Oc() {
                var n = (0, d.Z)(["\n  position: relative;\n  padding-right: calc(15.8rem + var(--rem-scale-viewport-half-excess));\n  line-height: 110%;\n  letter-spacing: -0.288rem;\n  text-align: right;\n\n  @media (max-width: 768px) {\n    left: max(env(safe-area-inset-left), 2rem);\n    padding-right: 6.2rem;\n    margin-top: 5.5rem;\n    font-size: 2.4rem;\n    line-height: 100%;\n    letter-spacing: -0.096rem;\n    padding-bottom: 6.7rem;\n  }\n"]);
                return Oc = function() {
                    return n
                }, n
            }

            function Bc() {
                var n = (0, d.Z)(["\n  position: absolute;\n  top: 60rem;\n  right: 7rem;\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  align-items: center;\n\n  p {\n    font-size: 3rem;\n  }\n\n  .logomark {\n    height: 2.2rem;\n  }\n\n  @media (max-width: 768px) {\n    top: unset;\n    bottom: 4rem;\n\n    p {\n      font-size: var(--font-size-body-lg);\n    }\n  }\n"]);
                return Bc = function() {
                    return n
                }, n
            }
            var Ac = u.ZP.div.withConfig({
                    componentId: "sc-f0e990eb-0"
                })(zc()),
                Hc = (0, u.ZP)(Hr).attrs({
                    size: 1,
                    align: "left"
                }).withConfig({
                    componentId: "sc-f0e990eb-1"
                })(Lc()),
                Fc = u.ZP.p.withConfig({
                    componentId: "sc-f0e990eb-2"
                })(Mc()),
                Uc = (0, u.ZP)($i).attrs({
                    size: 4
                }).withConfig({
                    componentId: "sc-f0e990eb-3"
                })(Tc(), (function(n) {
                    return "right" === n.quotePlacement ? (0, u.iv)(Rc()) : (0, u.iv)(Ec())
                })),
                Dc = (0, u.ZP)($i).attrs({
                    size: 3
                }).withConfig({
                    componentId: "sc-f0e990eb-4"
                })(Oc());

            function Wc(n) {
                var e = fa(ga(n.image)),
                    t = e[e.length - 1];
                return !t.width || !t.height || t.width < t.height ? "100vw" : "".concat(+(t.width / t.height * 100).toFixed(1), "vw")
            }

            function Gc(n) {
                var e = n.title,
                    t = n.quote,
                    i = n.quoteAttribution,
                    a = n.quoteAuthor,
                    r = n.featuredImage,
                    o = n.theme,
                    s = n.anchorId,
                    d = n.quotePlacement,
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    h = B().getIsMobile;
                return ei(u, (function() {
                    m.current = Gt.p8.timeline({
                        scrollTrigger: {
                            trigger: u.current,
                            start: "top bottom",
                            end: "bottom",
                            scrub: !1,
                            onUpdate: function(n) {
                                return e = n.progress, void Gt.p8.to(p.current, {
                                    y: "-".concat((h() ? 15 : 30) * e, "vh"),
                                    duration: .5
                                });
                                var e
                            }
                        }
                    })
                })), (0, l.jsx)("div", {
                    children: (0, l.jsxs)(Ac, {
                        id: null === s || void 0 === s ? void 0 : s.anchorId,
                        ref: u,
                        className: (0, an.Z)(o),
                        children: [(0, l.jsx)("div", {
                            ref: p,
                            className: "background",
                            children: r && (0, l.jsx)(ba, {
                                image: r,
                                sizes: Wc(r)
                            })
                        }), (0, l.jsx)("div", {
                            className: "title-spacer"
                        }), (0, l.jsx)("div", {
                            className: "title-wrapper",
                            children: e && (0, l.jsx)(Hc, {
                                size: 1,
                                children: e
                            })
                        }), (0, l.jsx)(Fc, {
                            children: i
                        }), (0, l.jsx)(Uc, {
                            className: "quotetext",
                            quotePlacement: d,
                            children: t
                        }), "right" === d ? (0, l.jsxs)(qc, {
                            children: [(0, l.jsx)(Oo, {
                                className: "logomark"
                            }), (0, l.jsx)("p", {
                                children: a
                            })]
                        }) : (0, l.jsx)(Dc, {
                            children: a
                        })]
                    })
                })
            }
            var qc = u.ZP.div.withConfig({
                componentId: "sc-f0e990eb-5"
            })(Bc());

            function Kc() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  padding: 21.2rem calc(27.8rem + var(--rem-scale-viewport-half-excess)) 21.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15.6rem;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    gap: 7rem;\n    padding: 11.45rem 2rem;\n  }\n\n  .video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n\n    &::after {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      content: '';\n      display: block;\n      background: currentColor;\n      opacity: 0.15;\n    }\n\n    > video,\n    > img {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n"]);
                return Kc = function() {
                    return n
                }, n
            }

            function Yc() {
                var n = (0, d.Z)(["\n  display: flex;\n  width: 7.1em;\n  flex-direction: column;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 9.6rem;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 100%;\n  letter-spacing: -0.384rem;\n  color: var(--color-white);\n\n  @media (max-width: 768px) {\n    width: auto;\n    font-size: 4.8rem;\n    font-weight: 350;\n    line-height: 105%;\n    letter-spacing: -0.192rem;\n    text-align: center;\n    display: block;\n  }\n"]);
                return Yc = function() {
                    return n
                }, n
            }

            function Vc() {
                var n = (0, d.Z)(["\n  background: var(--color-white);\n  width: 45.2rem;\n  padding: 7rem 4rem 10rem;\n  border-radius: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  .logomark {\n    width: 9rem;\n    height: 9rem;\n    margin-bottom: 2rem;\n  }\n\n  .text-editor {\n    text-align: center;\n\n    h4 {\n      font-size: 3.4rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 120%;\n      letter-spacing: -0.136rem;\n      padding: 0 1rem;\n      margin-bottom: 5rem;\n      text-align: center;\n    }\n\n    > div {\n      margin-bottom: 3rem;\n\n      > p {\n        color: #959595;\n        font-size: 1.8rem;\n        font-style: normal;\n        font-weight: 350;\n        line-height: 110%;\n        letter-spacing: -0.036rem;\n        margin-bottom: 5rem;\n\n        > a {\n          color: var(--color-black);\n        }\n      }\n      > div {\n        > a {\n          width: 100%;\n        }\n      }\n    }\n  }\n\n  .app-store {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    .app-store-button {\n      width: 12.8rem;\n      height: 3.58rem;\n\n      &:first-child {\n        margin-right: 1rem;\n      }\n    }\n  }\n\n  @media (max-width: 768px) {\n    width: 35rem;\n    padding: 6rem 4rem;\n\n    .text-editor {\n      h4 {\n        padding: 0;\n        font-size: 2.4rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 120%;\n        letter-spacing: -0.048rem;\n        margin-bottom: 4rem;\n      }\n\n      > p {\n        font-size: 1.4rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 120%;\n        letter-spacing: -0.028rem;\n        margin-bottom: 4rem;\n      }\n    }\n\n    .app-store {\n      .app-store-button {\n        width: 11.6rem;\n        height: 3.26rem;\n      }\n    }\n  }\n"]);
                return Vc = function() {
                    return n
                }, n
            }
            var Jc = u.ZP.div.withConfig({
                    componentId: "sc-3de513f2-0"
                })(Kc()),
                $c = (0, u.ZP)($i).attrs({
                    size: 4
                }).withConfig({
                    componentId: "sc-3de513f2-1"
                })(Yc()),
                Xc = u.ZP.div.withConfig({
                    componentId: "sc-3de513f2-2"
                })(Vc());

            function Qc(n) {
                var e = n.title,
                    t = n.background,
                    i = n.anchorId,
                    a = k().siteSettings,
                    o = null === a || void 0 === a ? void 0 : a.getStartedCTAModal;
                return (0, l.jsxs)(Jc, {
                    id: null === i || void 0 === i ? void 0 : i.anchorId,
                    children: [(0, l.jsx)("div", {
                        className: "video",
                        children: (0, l.jsx)(wr, {
                            media: t,
                            playsInline: !0,
                            muted: !0,
                            loop: !0
                        }, t.id)
                    }), e && (0, l.jsx)($c, {
                        children: e
                    }), (0, l.jsxs)(Xc, {
                        children: [(0, l.jsx)("img", {
                            className: "logomark",
                            alt: "",
                            src: "https://c5.patreon.com/external/marketing/new_marketing_pages/logomark-animated.webp",
                            width: "120",
                            height: "120"
                        }), (0, l.jsx)("div", {
                            className: "text-editor",
                            children: o && (0, l.jsx)(Ta, (0, r.Z)({
                                minHeadingLevel: 4
                            }, o))
                        }), (0, l.jsx)("div", {
                            className: "app-store",
                            children: (0, l.jsx)(D, {
                                theme: "light",
                                className: "app-store-button"
                            })
                        })]
                    })]
                })
            }

            function ns() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  height: 201.6rem;\n  overflow: hidden;\n\n  @media (max-width: 768px) {\n    height: 161rem;\n  }\n\n  &.short {\n    height: 170rem;\n\n    @media (max-width: 1120px) {\n      height: 185rem;\n    }\n\n    @media (max-width: 768px) {\n      height: 130rem;\n    }\n  }\n\n  .images > div img {\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: cover;\n  }\n\n  .images {\n    position: absolute;\n    top: 10rem;\n    left: calc(50% - 96rem);\n    width: 192rem;\n    height: calc(100% - 10rem);\n\n    @media (max-width: 768px) {\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n\n    > div {\n      position: absolute;\n\n      &:nth-child(1) {\n        width: ", ";\n        left: 107rem;\n        top: 0rem;\n\n        @media (max-width: 768px) {\n          width: ", ";\n          left: auto;\n          right: -1.6rem;\n          top: 9.7rem;\n        }\n      }\n\n      &:nth-child(2) {\n        width: ", ";\n        left: 0rem;\n        top: 22.3rem;\n\n        @media (max-width: 768px) {\n          width: ", ";\n          left: -6.3rem;\n          top: 11.3rem;\n        }\n      }\n\n      &:nth-child(3) {\n        width: ", ";\n        right: 0rem;\n        top: 48rem;\n\n        @media (max-width: 768px) {\n          width: ", ";\n          left: 33.6rem;\n          top: 26.2rem;\n        }\n      }\n\n      &:nth-child(4) {\n        width: ", ";\n        left: -2.4rem;\n        top: 78.5rem;\n\n        @media (max-width: 768px) {\n          width: ", ";\n          left: -2.3rem;\n          top: 59.2rem;\n        }\n      }\n\n      &:nth-child(5) {\n        width: ", ";\n        right: 21.2rem;\n        top: 92rem;\n\n        @media (max-width: 768px) {\n          width: ", ";\n          right: auto;\n          bottom: auto;\n          left: 23.3rem;\n          top: 65.9rem;\n        }\n      }\n\n      &:nth-child(6) {\n        width: ", ";\n        left: 16.2rem;\n        top: 155rem;\n\n        @media (max-width: 768px) {\n          width: ", ";\n          left: -3.1rem;\n          top: 148rem;\n        }\n      }\n    }\n  }\n"]);
                return ns = function() {
                    return n
                }, n
            }

            function es() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return es = function() {
                    return n
                }, n
            }

            function ts() {
                var n = (0, d.Z)(["\n  position: absolute;\n  width: 150rem;\n  left: calc(50% - 75rem);\n  top: 34.8rem;\n  line-height: 87%;\n  letter-spacing: -0.06em;\n\n  @media (max-width: 768px) {\n    width: 29.5rem;\n    left: calc(50% - 14.75rem);\n    line-height: 102%;\n    letter-spacing: -0.07em;\n    top: 39.9rem;\n  }\n"]);
                return ts = function() {
                    return n
                }, n
            }

            function is() {
                var n = (0, d.Z)(["\n  position: absolute;\n  top: 119rem;\n  left: calc(47.4rem + var(--rem-scale-viewport-half-excess));\n  width: 55rem;\n\n  @media (max-width: 768px) {\n    width: 24rem;\n    left: 2.8rem;\n    top: 92rem;\n  }\n"]);
                return is = function() {
                    return n
                }, n
            }

            function as() {
                var n = (0, d.Z)(["\n  .text-base {\n    font-size: max(14px, 2rem);\n    font-weight: 350;\n    line-height: 120%;\n    letter-spacing: -0.02em;\n\n    @media (max-width: 768px) {\n      font: var(--font-size-body);\n    }\n  }\n\n  .text-lg {\n    font-size: var(--font-size-body-lg);\n  }\n\n  h3 {\n    font-size: 3.6rem;\n    font-style: normal;\n    font-weight: 350;\n    line-height: 100%;\n    letter-spacing: -0.072rem;\n    margin-bottom: 1.5rem;\n\n    @media (max-width: 768px) {\n      font-size: 3rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 100%;\n      letter-spacing: -0.06rem;\n    }\n  }\n"]);
                return as = function() {
                    return n
                }, n
            }

            function rs() {
                var n = (0, d.Z)(["\n  position: absolute;\n  top: 162rem;\n  right: calc(47.4rem + var(--rem-scale-viewport-half-excess));\n  width: 36rem;\n\n  @media (max-width: 768px) {\n    width: 19.9rem;\n    right: 2rem;\n    top: auto;\n    bottom: 25rem;\n  }\n"]);
                return rs = function() {
                    return n
                }, n
            }
            var os, ls, cs, ss = [
                    ["30rem", "16.2rem"],
                    ["43.3rem", "18.9rem"],
                    ["33.3rem", "9.8rem"],
                    ["35rem", "11rem"],
                    ["51.1rem", "16.5rem"],
                    ["52.7rem", "30.3rem"]
                ],
                ds = u.ZP.div.withConfig({
                    componentId: "sc-8b844c7a-0"
                })(ns(), ss[0][0], ss[0][1], ss[1][0], ss[1][1], ss[2][0], ss[2][1], ss[3][0], ss[3][1], ss[4][0], ss[4][1], ss[5][0], ss[5][1]),
                us = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-8b844c7a-1"
                })(es()),
                ms = (0, u.ZP)(Hr).attrs({
                    size: 2,
                    align: "center"
                }).withConfig({
                    componentId: "sc-8b844c7a-2"
                })(ts()),
                ps = u.ZP.div.withConfig({
                    componentId: "sc-8b844c7a-3"
                })(is()),
                hs = u.ZP.div.withConfig({
                    componentId: "sc-8b844c7a-4"
                })(as()),
                gs = u.ZP.div.withConfig({
                    componentId: "sc-8b844c7a-5"
                })(rs());

            function fs(n) {
                var e = (0, lt.Z)(ss[n % ss.length], 2);
                return wa(e[0], e[1])
            }

            function vs(n) {
                var e = n.id,
                    t = n.title,
                    i = n.body1,
                    a = n.body2,
                    o = n.images,
                    c = void 0 === o ? [] : o,
                    d = n.backgroundColor,
                    u = c.map((function(n) {
                        var e, t;
                        return null === (e = n.image) || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.attributes.colors
                    })).filter(Boolean),
                    m = d || u[Math.min(3, u.length - 1)];
                return (0, l.jsxs)(ds, {
                    className: (0, an.Z)({
                        short: !a && c.length < 6
                    }),
                    children: [(0, l.jsx)(us, {
                        seed: e,
                        colors: m,
                        targetLightness: 85
                    }), (0, l.jsx)("div", {
                        className: "images",
                        children: c.map((function(n, e) {
                            return (0, l.jsx)("div", {
                                children: n && (0, l.jsx)(ba, {
                                    image: n,
                                    sizes: fs(e),
                                    transparent: !0
                                })
                            }, n.id)
                        }))
                    }), (0, l.jsx)(ms, {
                        children: t
                    }), (0, l.jsx)(ps, {
                        children: (0, l.jsx)(hs, {
                            children: i && (0, l.jsx)(Ta, (0, s.Z)((0, r.Z)({}, i), {
                                minHeadingLevel: 3,
                                size: "large"
                            }))
                        })
                    }), (0, l.jsx)(gs, {
                        children: (0, l.jsx)(hs, {
                            children: a && (0, l.jsx)(Ta, (0, s.Z)((0, r.Z)({}, a), {
                                minHeadingLevel: 3
                            }))
                        })
                    })]
                })
            }

            function xs() {
                var n = (0, d.Z)(["\n  &.mobile-only {\n    display: none;\n  }\n\n  @media (max-width: 768px) {\n    &.desktop-only {\n      display: none;\n    }\n\n    &.mobile-only {\n      display: block;\n    }\n  }\n"]);
                return xs = function() {
                    return n
                }, n
            }

            function ws() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n\n  .split-layout-adjust {\n    visibility: hidden;\n    display: flex;\n\n    @media (max-width: 768px) {\n      display: none;\n    }\n\n    > div {\n      width: 100%;\n\n      > h2 {\n        position: relative;\n        height: auto;\n\n        span:last-child {\n          display: none;\n        }\n      }\n\n      > div {\n        position: relative;\n      }\n    }\n  }\n"]);
                return ws = function() {
                    return n
                }, n
            }

            function bs() {
                var n = (0, d.Z)(["\n          padding: 16rem calc(17rem + var(--rem-scale-viewport-half-excess));\n\n          &.wide {\n            padding: 16rem max(env(safe-area-inset-right), calc(5rem + var(--rem-scale-viewport-half-excess))) 16rem\n              max(env(safe-area-inset-left), calc(5rem + var(--rem-scale-viewport-half-excess)));\n          }\n        "]);
                return bs = function() {
                    return n
                }, n
            }

            function ys() {
                var n = (0, d.Z)(["\n          padding: 16rem calc(17rem + var(--rem-scale-viewport-half-excess));\n\n          &.wide {\n            padding: 16rem max(env(safe-area-inset-right), calc(5rem + var(--rem-scale-viewport-half-excess))) 16rem\n              max(env(safe-area-inset-left), calc(5rem + var(--rem-scale-viewport-half-excess)));\n          }\n\n          // Push the floated product UI downwards on desktop layouts, to fit\n          // one line of the title above the product UI before wrapping\n          &::before {\n            content: '';\n            display: block;\n            width: 0;\n            height: calc(var(--font-size-h2) * 1.5);\n            float: right;\n            @media (max-width: 768px) {\n              content: none;\n            }\n          }\n        "]);
                return ys = function() {
                    return n
                }, n
            }

            function js() {
                var n = (0, d.Z)(["\n          display: flex;\n          flex-direction: row;\n          flex-wrap: wrap;\n          align-items: flex-end;\n          padding: 25rem calc(22rem + var(--rem-scale-viewport-half-excess));\n        "]);
                return js = function() {
                    return n
                }, n
            }

            function ks() {
                var n = (0, d.Z)(["\n          padding: 23rem calc(15rem + var(--rem-scale-viewport-half-excess));\n        "]);
                return ks = function() {
                    return n
                }, n
            }

            function Zs() {
                var n = (0, d.Z)(["\n          margin: 23rem calc(20rem + var(--rem-scale-viewport-half-excess));\n          position: relative;\n          overflow: initial;\n        "]);
                return Zs = function() {
                    return n
                }, n
            }

            function _s() {
                var n = (0, d.Z)(["\n          padding: 23rem calc(20rem + var(--rem-scale-viewport-half-excess));\n\n          // Push the floated product UI downwards on desktop layouts, to fit\n          // one line of the title above the product UI before wrapping\n          &::before {\n            content: '';\n            display: block;\n            width: 0;\n            height: calc(var(--font-size-h2) * 1.5);\n            float: left;\n            @media (max-width: 768px) {\n              content: none;\n            }\n          }\n        "]);
                return _s = function() {
                    return n
                }, n
            }

            function Ns() {
                var n = (0, d.Z)(["\n  overflow: hidden;\n\n  ", ";\n\n  @media (max-width: 768px) {\n    padding: 12.6rem max(env(safe-area-inset-right), 2rem) 12.6rem max(env(safe-area-inset-left), 2rem) !important;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n  }\n"]);
                return Ns = function() {
                    return n
                }, n
            }

            function Cs() {
                var n = (0, d.Z)(["\n          margin-bottom: ", ";\n        "]);
                return Cs = function() {
                    return n
                }, n
            }

            function Is() {
                var n = (0, d.Z)(["\n          margin-bottom: ", ";\n          margin-right: 10rem;\n          flex: 2.4 2.4 0;\n          text-align: right;\n          @media (max-width: 768px) {\n            flex: unset;\n            text-align: right;\n          }\n        "]);
                return Is = function() {
                    return n
                }, n
            }

            function Ps() {
                var n = (0, d.Z)(["\n          margin-bottom: ", ";\n\n          // Push the floated product UI downwards on desktop layouts, to fit\n          // one line of the title above the product UI before wrapping\n          &::after {\n            content: '';\n            display: block;\n            width: 0.8em;\n            height: calc(var(--font-size-h2));\n            float: left;\n            display: flex;\n            align-items: flex-end;\n            @media (max-width: 768px) {\n              content: none;\n            }\n          }\n\n          span {\n            min-width: 50%;\n          }\n\n          @media (max-width: 768px) {\n            span {\n              min-width: 100%;\n            }\n          }\n        "]);
                return Ps = function() {
                    return n
                }, n
            }

            function Ss() {
                var n = (0, d.Z)(["\n          margin-bottom: ", ";\n        "]);
                return Ss = function() {
                    return n
                }, n
            }

            function zs() {
                var n = (0, d.Z)(["\n          margin-bottom: ", ";\n\n          span {\n            &:first-child {\n              text-indent: 37rem;\n            }\n          }\n        "]);
                return zs = function() {
                    return n
                }, n
            }

            function Ls() {
                var n = (0, d.Z)(["\n          margin-bottom: ", ";\n        "]);
                return Ls = function() {
                    return n
                }, n
            }

            function Ms() {
                var n = (0, d.Z)(["\n  line-height: 1;\n  letter-spacing: -0.06em;\n\n  span {\n    word-wrap: break-word;\n  }\n\n  ", ";\n\n  @media (max-width: 768px) {\n    margin-bottom: 4rem;\n    margin-right: 0;\n    text-align: left;\n\n    span {\n      text-indent: 0 !important;\n      display: inline;\n    }\n  }\n"]);
                return Ms = function() {
                    return n
                }, n
            }

            function Rs() {
                var n = (0, d.Z)(["\n          margin-bottom: 14rem;\n        "]);
                return Rs = function() {
                    return n
                }, n
            }

            function Es() {
                var n = (0, d.Z)(["\n  line-height: 1;\n  letter-spacing: -0.06em;\n  bottom: auto;\n  pointer-events: auto;\n  color: inherit;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  position: absolute;\n\n  span {\n    max-width: 57rem;\n    word-wrap: break-word;\n    line-height: 75%;\n\n    &:last-child {\n      position: absolute;\n      right: 0;\n      bottom: 0;\n      text-align: right;\n    }\n  }\n\n  ", ";\n\n  @media (max-width: 768px) {\n    margin-bottom: 4rem;\n    margin-right: 0;\n    text-align: left;\n    position: relative;\n    top: initial;\n    left: initial;\n    bottom: initial;\n    height: auto;\n\n    span {\n      display: inline;\n      max-width: none;\n\n      &:last-child {\n        position: relative;\n        text-align: left;\n      }\n    }\n  }\n"]);
                return Es = function() {
                    return n
                }, n
            }

            function Ts() {
                var n = (0, d.Z)(["\n  > *:last-child,\n  .text-base:last-child {\n    margin-bottom: 0;\n  }\n\n  img {\n    margin-bottom: 2rem;\n  }\n\n  .text-base {\n    @media (max-width: 768px) {\n      letter-spacing: -0.03rem;\n    }\n  }\n\n  .strapi-link.button {\n    @media (max-width: 768px) {\n      padding: 1.3rem 1.4rem;\n    }\n  }\n\n  .heading {\n    font-size: 3.6rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 100%;\n    letter-spacing: -0.072rem;\n    margin-bottom: 0.8em;\n\n    @media (max-width: 768px) {\n      font-size: 3rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 100%;\n      letter-spacing: -0.06rem;\n      margin-bottom: 0.6em;\n    }\n  }\n"]);
                return Ts = function() {
                    return n
                }, n
            }

            function Os() {
                var n = (0, d.Z)(["\n          flex: 1 1 0;\n          grid-auto-flow: row;\n          margin-bottom: 10rem;\n          > ", ":not(:last-child) {\n            margin-bottom: 4rem;\n          }\n        "]);
                return Os = function() {
                    return n
                }, n
            }

            function Bs() {
                var n = (0, d.Z)(["\n          grid-auto-columns: 1fr;\n          grid-auto-flow: row;\n          gap: 1.3em;\n          justify-content: start;\n          margin-bottom: 12rem;\n          max-width: 42rem;\n        "]);
                return Bs = function() {
                    return n
                }, n
            }

            function As() {
                var n = (0, d.Z)(["\n          grid-auto-columns: 0.65fr;\n          grid-auto-flow: row;\n          column-gap: 10rem;\n          justify-content: ", ";\n\n          margin-bottom: 0;\n\n          > ", ":not(:last-child) {\n            margin-bottom: 4rem;\n          }\n\n          &.single {\n            grid-auto-columns: 0.52fr;\n          }\n        "]);
                return As = function() {
                    return n
                }, n
            }

            function Hs() {
                var n = (0, d.Z)(["\n          max-width: 45rem;\n          grid-auto-columns: 1fr;\n          grid-auto-flow: row;\n          gap: 1.3em;\n          justify-content: start;\n          margin-bottom: 0;\n          position: absolute;\n          bottom: 0;\n        "]);
                return Hs = function() {
                    return n
                }, n
            }

            function Fs() {
                var n = (0, d.Z)(["\n          grid-auto-columns: 0.65fr;\n          grid-auto-flow: column;\n          column-gap: 10rem;\n          justify-content: ", ";\n          margin-bottom: 12rem;\n\n          &.single {\n            grid-auto-columns: 0.52fr;\n          }\n\n          &.wide {\n            grid-auto-columns: 1fr;\n\n            &:not(.cols) {\n              max-width: 50rem;\n            }\n          }\n        "]);
                return Fs = function() {
                    return n
                }, n
            }

            function Us() {
                var n = (0, d.Z)(["\n          grid-auto-columns: 0.65fr;\n          grid-auto-flow: row;\n          column-gap: 10rem;\n          justify-content: flex-start;\n          margin-bottom: 12rem;\n\n          > ", " {\n            max-width: 40rem;\n            position: relative;\n            left: 0.5em;\n\n            &:last-child {\n              margin-top: 11rem;\n            }\n          }\n\n          &.single {\n            grid-auto-columns: 1fr;\n\n            > ", " {\n              left: 15rem;\n\n              &:last-child {\n                left: 45rem;\n              }\n            }\n          }\n        "]);
                return Us = function() {
                    return n
                }, n
            }

            function Ds() {
                var n = (0, d.Z)(["\n          grid-auto-columns: 0.65fr;\n          grid-auto-flow: column;\n          column-gap: 10rem;\n          justify-content: center;\n\n          margin-bottom: 12rem;\n\n          &.single {\n            grid-auto-columns: 0.52fr;\n          }\n        "]);
                return Ds = function() {
                    return n
                }, n
            }

            function Ws() {
                var n = (0, d.Z)(["\n  display: grid;\n\n  ", ";\n\n  @media (max-width: 768px) {\n    grid-auto-columns: 0.9fr !important;\n    grid-auto-flow: row;\n    justify-content: start;\n    margin-bottom: 0;\n    margin-top: 0;\n    gap: 0;\n    float: none;\n    position: relative;\n    bottom: auto;\n    > ", " {\n      margin-bottom: 4rem;\n      left: 0 !important;\n      margin-top: 0 !important;\n    }\n  }\n"]);
                return Ws = function() {
                    return n
                }, n
            }

            function Gs() {
                var n = (0, d.Z)(["\n      border: 7px solid rgba(255, 255, 255, 0.25);\n      box-shadow: 30px 30px 30px 0px rgba(4, 64, 80, 0.3);\n    "]);
                return Gs = function() {
                    return n
                }, n
            }

            function qs() {
                var n = (0, d.Z)(["\n  overflow: hidden;\n  border-radius: 4rem;\n\n  ", "\n\n  video {\n    width: 45rem !important;\n  }\n\n  &.transparent {\n    border-radius: 0;\n  }\n\n  & > * {\n    width: 100%;\n    height: auto !important;\n  }\n\n  &:last-child {\n    margin-top: 20rem;\n    margin-left: -3.7rem;\n  }\n\n  &.single {\n    &.tall {\n      width: 43rem;\n    }\n\n    &:last-child {\n      margin-top: 0;\n      margin-left: 0;\n    }\n  }\n\n  @media (max-width: 768px) {\n    border-radius: 3.2rem;\n\n    &.single {\n      width: 35rem !important;\n    }\n\n    &:last-child {\n      margin-top: 0;\n      margin-left: 0;\n    }\n\n    &:nth-child(2) {\n      margin-top: 2.4rem;\n    }\n  }\n"]);
                return qs = function() {
                    return n
                }, n
            }

            function Ks() {
                var n = (0, d.Z)(["\n          float: right;\n          margin-left: 8rem;\n\n          &.wide {\n            max-width: 95rem;\n            margin-bottom: 10rem;\n          }\n        "]);
                return Ks = function() {
                    return n
                }, n
            }

            function Ys() {
                var n = (0, d.Z)(["\n          float: none;\n          width: 100%;\n          max-width: none;\n          order: 2;\n\n          > ", " {\n            &,\n            &.wide img {\n              width: 100% !important;\n            }\n\n            &:nth-child(2) {\n              margin-left: 6.8rem;\n              margin-top: 0;\n            }\n\n            &.tall {\n              &:not(.single) {\n                width: 30.1% !important;\n\n                @media (max-width: 768px) {\n                  width: 100% !important;\n                }\n              }\n            }\n\n            @media (max-width: 768px) {\n              &,\n              &.wide,\n              &.tall {\n                width: 100% !important;\n                margin-left: 0;\n                margin-bottom: 4rem;\n\n                &:last-child {\n                  margin-bottom: 0;\n                }\n              }\n            }\n          }\n        "]);
                return Ys = function() {
                    return n
                }, n
            }

            function Vs() {
                var n = (0, d.Z)(["\n          float: left;\n          clear: left;\n          margin-left: 8rem;\n          margin-right: 12rem;\n          min-height: 85rem;\n        "]);
                return Vs = function() {
                    return n
                }, n
            }

            function Js() {
                var n = (0, d.Z)(["\n          float: left;\n          clear: left;\n          width: calc(50% - 6rem);\n          margin-right: 12rem;\n          > ", " {\n            float: right;\n\n            &.single {\n              margin-left: auto !important;\n            }\n          }\n        "]);
                return Js = function() {
                    return n
                }, n
            }

            function $s() {
                var n = (0, d.Z)(["\n          float: right;\n          clear: right;\n          width: auto;\n          max-width: none;\n\n          &.single {\n            width: calc(50% - 6rem);\n            margin-right: 12rem;\n            max-width: 70rem;\n          }\n\n          > ", " {\n            float: left;\n\n            &.single {\n              margin-left: auto !important;\n            }\n          }\n        "]);
                return $s = function() {
                    return n
                }, n
            }

            function Xs() {
                var n = (0, d.Z)(["\n          float: none;\n          flex-direction: column;\n          max-width: none;\n          position: absolute;\n          width: 100%;\n\n          &.single.wide {\n            min-height: 60rem;\n          }\n\n          > ", " {\n            margin: 0 auto 2.6rem auto;\n            max-width: 35rem;\n\n            &.single {\n              margin: 0 auto;\n            }\n\n            &:last-child {\n              margin-bottom: 0;\n            }\n          }\n        "]);
                return Xs = function() {
                    return n
                }, n
            }

            function Qs() {
                var n = (0, d.Z)(["\n          float: left;\n          clear: left;\n          margin-left: 10rem;\n          margin-right: 14rem;\n          min-height: 60rem;\n        "]);
                return Qs = function() {
                    return n
                }, n
            }

            function nd() {
                var n = (0, d.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  max-width: 70rem;\n\n  ", ";\n\n  @media (max-width: 768px) {\n    float: none;\n    margin-left: 0 !important;\n    margin-right: 0;\n    margin-bottom: 0 !important;\n    min-height: 0;\n    max-width: none !important;\n    position: relative;\n    order: 2;\n    width: 100%;\n    display: block;\n  }\n"]);
                return nd = function() {
                    return n
                }, n
            }

            function ed() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return ed = function() {
                    return n
                }, n
            }! function(n) {
                n["Ratio - 50/50"] = "Ratio - 50/50", n["Ratio - 66/33"] = "Ratio - 66/33", n["Ratio - 33/66"] = "Ratio - 33/66"
            }(os || (os = {})),
            function(n) {
                n.LeftOverflow = "Left Overflow Title", n.LeftAligned = "Left Aligned Title"
            }(ls || (ls = {})),
            function(n) {
                n.TopLeft = "Top Overflow Header + Left Product UI", n.TopLeftTight = "Top Overflow Header + Left Product UI - Tight", n.TopRight = "Top Overflow Header + Right Product UI", n.RightLeft = "Right Header + Left Product UI", n.Right = "Product UI on Right", n.SplitCenter = "Split Header + Center Product", n.LeftBottom = "Left Aligned Header + Bottom Product UI"
            }(cs || (cs = {}));
            var td = u.ZP.div.withConfig({
                    componentId: "sc-fcd3e66d-0"
                })(xs()),
                id = u.ZP.div.withConfig({
                    componentId: "sc-fcd3e66d-1"
                })(ws()),
                ad = u.ZP.div.withConfig({
                    componentId: "sc-fcd3e66d-2"
                })(Ns(), (function(n) {
                    switch (n.$layout) {
                        case cs.Right:
                            return (0, u.iv)(bs());
                        case cs.TopRight:
                            return (0, u.iv)(ys());
                        case cs.LeftBottom:
                            return (0, u.iv)(js());
                        case cs.RightLeft:
                            return (0, u.iv)(ks());
                        case cs.SplitCenter:
                            return (0, u.iv)(Zs());
                        default:
                        case cs.TopLeftTight:
                            return (0, u.iv)(_s())
                    }
                })),
                rd = (0, u.ZP)(Hr).attrs({
                    size: 2,
                    align: "left"
                }).withConfig({
                    componentId: "sc-fcd3e66d-3"
                })(Ms(), (function(n) {
                    switch (n.$layout) {
                        case cs.Right:
                            return (0, u.iv)(Cs(), "".concat((7 / 17).toFixed(2), "em"));
                        case cs.LeftBottom:
                            return (0, u.iv)(Is(), "".concat((10 / 17).toFixed(2), "em"));
                        case cs.RightLeft:
                            return (0, u.iv)(Ps(), "".concat((14 / 17).toFixed(2), "em"));
                        case cs.TopLeftTight:
                            return (0, u.iv)(Ss(), "".concat((10 / 17).toFixed(2), "em"));
                        case cs.TopRight:
                            return (0, u.iv)(zs(), "".concat((14 / 17).toFixed(2), "em"));
                        default:
                            return (0, u.iv)(Ls(), "".concat((14 / 17).toFixed(2), "em"))
                    }
                })),
                od = (0, u.ZP)(Hr).attrs({
                    size: 2,
                    align: "left",
                    autoSplit: !0
                }).withConfig({
                    componentId: "sc-fcd3e66d-4"
                })(Es(), (function(n) {
                    n.$layout;
                    return (0, u.iv)(Rs())
                })),
                ld = u.ZP.div.withConfig({
                    componentId: "sc-fcd3e66d-5"
                })(Ts());

            function cd(n) {
                return (0, l.jsx)(ld, {
                    children: (0, l.jsx)(Ta, (0, r.Z)({
                        minHeadingLevel: 3
                    }, n))
                })
            }
            var sd, dd = u.ZP.div.withConfig({
                    componentId: "sc-fcd3e66d-6"
                })(Ws(), (function(n) {
                    var e = n.$layout,
                        t = n.alignColumns;
                    switch (e) {
                        case cs.LeftBottom:
                            return (0, u.iv)(Os(), ld);
                        case cs.TopLeftTight:
                            return (0, u.iv)(Bs());
                        case cs.RightLeft:
                            return (0, u.iv)(As(), "left" === t ? "start" : "center", ld);
                        case cs.SplitCenter:
                            return (0, u.iv)(Hs());
                        case cs.Right:
                            return (0, u.iv)(Fs(), "left" === t ? "start" : "center");
                        case cs.TopRight:
                            return (0, u.iv)(Us(), ld, ld);
                        default:
                            return (0, u.iv)(Ds())
                    }
                }), ld),
                ud = u.ZP.div.withConfig({
                    componentId: "sc-fcd3e66d-7"
                })(qs(), (function(n) {
                    return n.addBoxShadow && (0, u.iv)(Gs())
                })),
                md = u.ZP.div.withConfig({
                    componentId: "sc-fcd3e66d-8"
                })(nd(), (function(n) {
                    switch (n.$layout) {
                        case cs.Right:
                            return (0, u.iv)(Ks());
                        case cs.LeftBottom:
                            return (0, u.iv)(Ys(), ud);
                        case cs.RightLeft:
                            return (0, u.iv)(Vs());
                        case cs.TopLeftTight:
                            return (0, u.iv)(Js(), ud);
                        case cs.TopRight:
                            return (0, u.iv)($s(), ud);
                        case cs.SplitCenter:
                            return (0, u.iv)(Xs(), ud);
                        default:
                            return (0, u.iv)(Qs())
                    }
                })),
                pd = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-fcd3e66d-9"
                })(ed());

            function hd(n) {
                var e, t, i = null === (e = n.media) || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.attributes;
                return i && i.width && i.height ? i.width / i.height : null
            }

            function gd(n) {
                var e, t, i, a, o, s, d, u, m, p, h, g = n.id,
                    f = n.Title,
                    v = n.ProductUI,
                    x = n.Layout,
                    w = n.Column1,
                    b = n.Column2,
                    y = n.anchorId,
                    j = n.backgroundColor,
                    k = n.formFactor,
                    Z = n.alignColumns,
                    _ = (0, c.useRef)([]),
                    N = (0, c.useRef)(null),
                    C = (0, c.useRef)(null),
                    I = v.map((function(n) {
                        var e, t;
                        return null === (e = n.media) || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.attributes.colors
                    })).filter(Boolean),
                    P = j || I[Math.min(3, I.length - 1)],
                    S = {
                        type: "FloatingProductUI",
                        aspects: v.map(hd)
                    },
                    z = x || cs.TopLeft,
                    L = 1 === v.length,
                    M = (null === (e = v[0].media) || void 0 === e || null === (t = e.data) || void 0 === t || null === (i = t.attributes) || void 0 === i || null === (a = i.mime) || void 0 === a ? void 0 : a.startsWith("image")) && ((null === (o = v[0].media) || void 0 === o || null === (s = o.data) || void 0 === s || null === (d = s.attributes) || void 0 === d ? void 0 : d.width) || 0) >= ((null === (u = v[0].media) || void 0 === u || null === (m = u.data) || void 0 === m || null === (p = m.attributes) || void 0 === p ? void 0 : p.height) || 0),
                    R = (0, c.useRef)(null),
                    E = (0, c.useRef)(),
                    T = B().getIsMobile,
                    O = (0, An.useRouter)(),
                    A = null === O || void 0 === O ? void 0 : O.asPath.includes("/updates");
                return ei(R, (function() {
                    E.current = Gt.p8.timeline({
                        scrollTrigger: {
                            trigger: R.current,
                            start: "top bottom",
                            end: "bottom",
                            scrub: !1,
                            onUpdate: function(n) {
                                return function(n) {
                                    var e = T();
                                    v.forEach((function(t, i) {
                                        if (e) Gt.p8.set(_.current[i], {
                                            y: 0
                                        });
                                        else {
                                            var a = x === cs.LeftBottom ? 1 : 1 + .15 * i;
                                            Gt.p8.to(_.current[i], {
                                                y: "".concat(-40 * a * n + 20, "%"),
                                                duration: .5 + .15 * (i + 1)
                                            })
                                        }
                                    })), e ? Gt.p8.set(C.current, {
                                        y: 0
                                    }) : Gt.p8.to(C.current, {
                                        y: "".concat(12 * n - 6, "vh"),
                                        duration: .5
                                    })
                                }(n.progress)
                            }
                        }
                    })
                })), (0, l.jsxs)(td, {
                    id: null === y || void 0 === y ? void 0 : y.anchorId,
                    className: (0, an.Z)([k && (null === k || void 0 === k || null === (h = k.screenSize) || void 0 === h ? void 0 : h.toLowerCase().replace(/\s/g, "-"))]),
                    children: [(0, l.jsx)(pd, {
                        seed: g,
                        colors: P
                    }), (0, l.jsx)(id, {
                        ref: R,
                        "data-hydra": JSON.stringify(S),
                        children: (0, l.jsxs)(ad, {
                            $layout: z,
                            className: (0, an.Z)({
                                wide: M
                            }),
                            children: [(0, l.jsx)(md, {
                                $layout: z,
                                className: (0, an.Z)({
                                    single: L,
                                    wide: M
                                }),
                                children: v.map((function(n, e) {
                                    var t, i, a, r, o, c, s, d, u, m, p, h, g, f;
                                    return (0, l.jsx)(ud, {
                                        addBoxShadow: A,
                                        ref: function(n) {
                                            return _.current[e] = n
                                        },
                                        className: (0, an.Z)((null === (t = n.media) || void 0 === t || null === (i = t.data) || void 0 === i || null === (a = i.attributes) || void 0 === a || null === (r = a.mime) || void 0 === r ? void 0 : r.startsWith("image")) && (((null === (o = n.media) || void 0 === o || null === (c = o.data) || void 0 === c || null === (s = c.attributes) || void 0 === s ? void 0 : s.width) || 0) <= ((null === (d = n.media) || void 0 === d || null === (u = d.data) || void 0 === u || null === (m = u.attributes) || void 0 === m ? void 0 : m.height) || 0) ? "tall" : "wide"), {
                                            single: L,
                                            transparent: ".png" === (null === (p = n.media) || void 0 === p || null === (h = p.data) || void 0 === h || null === (g = h.attributes) || void 0 === g || null === (f = g.ext) || void 0 === f ? void 0 : f.toLowerCase())
                                        }),
                                        children: (0, l.jsx)(wr, {
                                            media: n,
                                            useRetina: !0,
                                            useRemSize: !0,
                                            loop: !0,
                                            muted: !0,
                                            transparent: !0
                                        })
                                    }, n.id)
                                }))
                            }), z === cs.SplitCenter ? (0, l.jsx)(od, {
                                ref: N,
                                $layout: z,
                                children: f
                            }) : (0, l.jsx)(rd, {
                                ref: N,
                                $layout: z,
                                children: f
                            }), (0, l.jsxs)(dd, {
                                ref: C,
                                $layout: z,
                                className: (0, an.Z)({
                                    single: L,
                                    wide: M,
                                    cols: !!w && !!b
                                }),
                                alignColumns: Z,
                                children: [(0, l.jsx)(cd, (0, r.Z)({}, w)), b && (0, l.jsx)(cd, (0, r.Z)({}, b))]
                            }), z === cs.SplitCenter && (0, l.jsxs)("div", {
                                className: "split-layout-adjust",
                                "aria-hidden": !0,
                                children: [(0, l.jsxs)("div", {
                                    children: [(0, l.jsx)(od, {
                                        $layout: z,
                                        children: f
                                    }), (0, l.jsxs)(dd, {
                                        $layout: z,
                                        className: (0, an.Z)({
                                            single: L,
                                            wide: M,
                                            cols: !!w && !!b
                                        }),
                                        children: [(0, l.jsx)(cd, (0, r.Z)({}, w)), b && (0, l.jsx)(cd, (0, r.Z)({}, b))]
                                    })]
                                }), (0, l.jsx)("div", {
                                    children: (0, l.jsx)(md, {
                                        $layout: z,
                                        className: (0, an.Z)({
                                            single: L,
                                            wide: M
                                        }),
                                        children: v.map((function(n) {
                                            var e, t, i, a, r, o, c, s, d, u, m, p, h, g;
                                            return (0, l.jsx)(ud, {
                                                className: (0, an.Z)((null === (e = n.media) || void 0 === e || null === (t = e.data) || void 0 === t || null === (i = t.attributes) || void 0 === i || null === (a = i.mime) || void 0 === a ? void 0 : a.startsWith("image")) && (((null === (r = n.media) || void 0 === r || null === (o = r.data) || void 0 === o || null === (c = o.attributes) || void 0 === c ? void 0 : c.width) || 0) <= ((null === (s = n.media) || void 0 === s || null === (d = s.data) || void 0 === d || null === (u = d.attributes) || void 0 === u ? void 0 : u.height) || 0) ? "tall" : "wide"), {
                                                    single: L,
                                                    transparent: ".png" === (null === (m = n.media) || void 0 === m || null === (p = m.data) || void 0 === p || null === (h = p.attributes) || void 0 === h || null === (g = h.ext) || void 0 === g ? void 0 : g.toLowerCase())
                                                }),
                                                children: (0, l.jsx)(wr, {
                                                    media: n,
                                                    useRetina: !0,
                                                    useRemSize: !0,
                                                    muted: !0,
                                                    transparent: !0,
                                                    disableIntersectionObserver: !0
                                                })
                                            }, n.id)
                                        }))
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }

            function fd() {
                return fd = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, fd.apply(this, arguments)
            }
            var vd, xd = function(n, e) {
                    return c.createElement("svg", fd({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        ref: e
                    }, n), sd || (sd = c.createElement("path", {
                        stroke: "currentColor",
                        strokeWidth: 2,
                        d: "m16 4-9 8 9 8"
                    })))
                },
                wd = (0, c.forwardRef)(xd);

            function bd() {
                return bd = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }, bd.apply(this, arguments)
            }
            var yd = function(n, e) {
                    return c.createElement("svg", bd({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        ref: e
                    }, n), vd || (vd = c.createElement("path", {
                        stroke: "currentColor",
                        strokeWidth: 2,
                        d: "m8 4 9 8-9 8"
                    })))
                },
                jd = (0, c.forwardRef)(yd),
                kd = Symbol("SplitLinesLine"),
                Zd = Symbol("SplitLinesLines");

            function _d(n) {
                return (0, l.jsx)("span", (0, r.Z)({}, n))
            }

            function Nd(n) {
                var e = n.children,
                    t = n.renderWord,
                    i = void 0 === t ? _d : t,
                    a = (0, c.useRef)(null);
                (0, ni.Z)((function() {
                    if (a.current) {
                        var n = a.current.parentNode;
                        if (n) {
                            var e = !0,
                                t = !1,
                                i = void 0;
                            try {
                                for (var r, o = n.querySelectorAll(".w")[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                                    r.value.style.display = "inline-block"
                                }
                            } catch (c) {
                                t = !0, i = c
                            } finally {
                                try {
                                    e || null == o.return || o.return()
                                } finally {
                                    if (t) throw i
                                }
                            }
                            var l = new ResizeObserver((function() {
                                var e, t = n.querySelectorAll(".w"),
                                    i = [],
                                    a = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (var l, s = t[Symbol.iterator](); !(a = (l = s.next()).done); a = !0) {
                                        var d = l.value,
                                            u = d.getBoundingClientRect();
                                        void 0 === e || u.y > e ? (e = u.y + u.height / 2, i.push([d])) : i[i.length - 1].push(d), d[kd] = i.length
                                    }
                                } catch (c) {
                                    r = !0, o = c
                                } finally {
                                    try {
                                        a || null == s.return || s.return()
                                    } finally {
                                        if (r) throw o
                                    }
                                }
                                n[Zd] = i, n.dispatchEvent(new CustomEvent("splitlines", {
                                    bubbles: !0,
                                    detail: i
                                }))
                            }));
                            return l.observe(n),
                                function() {
                                    var e;
                                    l.disconnect(), null === (e = n[Zd]) || void 0 === e || e.forEach((function(n) {
                                        n.forEach((function(n) {
                                            delete n[kd]
                                        }))
                                    })), delete n[Zd]
                                }
                        }
                    }
                }));
                var r = e.split(/\s+/);
                return (0, l.jsx)(l.Fragment, {
                    children: r.map((function(n, e) {
                        return (0, l.jsxs)(c.Fragment, {
                            children: [i({
                                ref: 0 === e ? a : void 0,
                                className: "w",
                                children: n,
                                "aria-hidden": !0
                            }, e, r), e < r.length - 1 && " "]
                        }, e)
                    }))
                })
            }

            function Cd(n) {
                var e = n.children,
                    t = n.animateOnHover;
                return (0, l.jsx)(Nd, {
                    renderWord: function(n, e, i) {
                        return e < i.length - 1 ? (0, l.jsx)("span", (0, r.Z)({}, n)) : (0, l.jsx)(Mt, (0, r.Z)({
                            animateOnHover: t
                        }, n))
                    },
                    children: e
                })
            }

            function Id() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  color: var(--color-white);\n  -webkit-tap-highlight-color: transparent;\n  user-select: none;\n\n  .home-arrow {\n    right: auto;\n    left: calc(5rem + var(--rem-scale-viewport-half-excess));\n\n    @media (max-width: 768px) {\n      left: 2rem;\n      right: auto;\n      bottom: calc(3.8rem + var(--browser-chrome-height));\n    }\n  }\n"]);
                return Id = function() {
                    return n
                }, n
            }

            function Pd() {
                var n = (0, d.Z)(["\n  position: relative;\n"]);
                return Pd = function() {
                    return n
                }, n
            }

            function Sd() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: ", "%;\n  min-height: clamp(50vw, 100vh, 70vw);\n  @media (max-width: 768px) {\n    min-height: max(50vw, 100vh);\n  }\n  pointer-events: none;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n"]);
                return Sd = function() {
                    return n
                }, n
            }

            function zd() {
                var n = (0, d.Z)(["\n  position: relative;\n  flex: 1 0 0px;\n  transform: translateX(", "%);\n  padding-top: 7rem;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column-reverse;\n  opacity: 0;\n  visibility: hidden;\n  &:first-child {\n    opacity: 1;\n    visibility: visible;\n  }\n"]);
                return zd = function() {
                    return n
                }, n
            }

            function Ld() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  pointer-events: none;\n  &:first-child {\n    opacity: 1;\n  }\n"]);
                return Ld = function() {
                    return n
                }, n
            }

            function Md() {
                var n = (0, d.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  & > video,\n  & > img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);
                return Md = function() {
                    return n
                }, n
            }

            function Rd() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  height: auto;\n  padding: 0 max(env(safe-area-inset-right), calc(0.18em + var(--rem-scale-viewport-half-excess))) 0.17em\n    max(env(safe-area-inset-left), calc(0.18em + var(--rem-scale-viewport-half-excess)));\n  line-height: 0.98;\n  pointer-events: none;\n  > span:first-child {\n    padding-right: max(env(safe-area-inset-right), calc(23 * var(--font-size-body)));\n  }\n  > span:last-child {\n    padding-left: max(env(safe-area-inset-left), 1em);\n  }\n  @media (max-width: 768px) {\n    padding: 0 max(env(safe-area-inset-right), 0.35em) calc(0.48em + var(--browser-chrome-height))\n      max(env(safe-area-inset-left), 0.35em);\n    > span:first-child {\n      padding-right: 0;\n    }\n  }\n"]);
                return Rd = function() {
                    return n
                }, n
            }

            function Ed() {
                var n = (0, d.Z)(["\n  display: block;\n  position: relative;\n  width: ", ";\n  margin: 0 max(env(safe-area-inset-right), calc(4rem + var(--rem-scale-viewport-half-excess))) 3.2rem 2rem;\n  pointer-events: auto;\n  align-self: end;\n  bottom: calc(-0.98 * var(--font-size-h1));\n  // Hide CreatorInfo until hydration on desktop, because correct positioning\n  // depends on how the text wraps.\n  visibility: hidden;\n\n  @media (max-width: 768px) {\n    align-self: start;\n    width: calc(100% - max(env(safe-area-inset-right), 2rem) - max(env(safe-area-inset-left), 2rem));\n    bottom: auto;\n    max-width: 25em;\n    margin: 0 max(env(safe-area-inset-right), 2rem) 3.2rem max(env(safe-area-inset-left), 2rem);\n    visibility: inherit;\n  }\n"]);
                return Ed = function() {
                    return n
                }, n
            }

            function Td() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 3rem;\n  align-items: center;\n"]);
                return Td = function() {
                    return n
                }, n
            }

            function Od() {
                var n = (0, d.Z)(["\n  > h3 {\n    line-height: 1.2;\n  }\n  > p {\n    line-height: 1.2;\n  }\n  > h3 + p {\n    margin-top: 0.4em;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .custom-cta {\n    font-size: var(--font-size-h6);\n  }\n\n  .custom-cta-button {\n    margin-top: 1.5rem;\n    background-color: var(--color-action-inverse);\n    border: var(--color-action-inverse);\n    color: var(--color-action-default);\n  }\n"]);
                return Od = function() {
                    return n
                }, n
            }

            function Bd() {
                var n = (0, d.Z)(["\n  flex: 0 0 5em;\n  width: 5em;\n  height: 5em;\n  border-radius: 50%;\n  overflow: hidden;\n  > img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .hidden {\n    display: none;\n  }\n"]);
                return Bd = function() {
                    return n
                }, n
            }

            function Ad() {
                var n = (0, d.Z)(["\n  position: absolute;\n  top: 50%;\n  margin-top: -3.5rem;\n  opacity: 0; // will show when hydrated and interactive\n  visibility: hidden;\n  width: 7rem;\n  height: 7rem;\n  appearance: none;\n  padding: 0;\n  border: 0;\n  display: block;\n  z-index: 1;\n  &.hide {\n    opacity: 0 !important;\n  }\n  &.ready {\n    visibility: visible;\n  }\n  &:focus-visible {\n    opacity: 1 !important;\n  }\n  > svg {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  @media (max-width: 768px) {\n    margin-top: -1.2rem;\n    width: 2.4rem;\n    height: 2.4rem;\n  }\n"]);
                return Ad = function() {
                    return n
                }, n
            }

            function Hd() {
                var n = (0, d.Z)(["\n  ", ";\n  left: max(env(safe-area-inset-left), calc(5rem + var(--rem-scale-viewport-half-excess)));\n  @media (max-width: 768px) {\n    left: max(env(safe-area-inset-left), 2rem);\n  }\n"]);
                return Hd = function() {
                    return n
                }, n
            }

            function Fd() {
                var n = (0, d.Z)(["\n  ", ";\n  right: max(env(safe-area-inset-right), calc(5rem + var(--rem-scale-viewport-half-excess)));\n  @media (max-width: 768px) {\n    right: max(env(safe-area-inset-right), 2rem);\n  }\n"]);
                return Fd = function() {
                    return n
                }, n
            }
            var Ud = Symbol("CreatorInfoStagger");

            function Dd(n) {
                var e = 0,
                    t = 0;
                if (n.touches || n.changedTouches) {
                    var i = n;
                    i.touches.length ? (e = i.touches[0].clientX, t = i.touches[0].clientY) : (e = i.changedTouches[0].clientX, t = i.changedTouches[0].clientY)
                } else {
                    var a = n;
                    e = a.clientX, t = a.clientY
                }
                return [e, t]
            }

            function Wd(n) {
                var e = n("h3,p").map((function(n) {
                        var e;
                        return (null === (e = n[Zd]) || void 0 === e ? void 0 : e.slice()) || []
                    })),
                    t = 0;
                e.forEach((function(n) {
                    n.forEach((function(n) {
                        t += 1, n.forEach((function(n) {
                            n[Ud] = t
                        }))
                    }))
                }));
                var i = e.flat(2);
                return i.forEach((function(n) {
                    n[Ud] = (t - (n[Ud] || 1)) / (t - 1)
                })), i
            }

            function Gd(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "sine.out";
                return function(t, i) {
                    return Gt.p8.parseEase(e)(i.target[Ud] || 0) * n
                }
            }

            function qd(n, e, t, i, a, r, o, l) {
                var c = e.map((function(n) {
                    var e = 0;
                    return {
                        target: n,
                        get yPercent() {
                            return e
                        },
                        set yPercent(t) {
                            e = t, Gt.p8.set(n, {
                                yPercent: e,
                                clipPath: "inset(".concat(10 - e, "% -10% ").concat(e - 10, "% -10%)")
                            })
                        }
                    }
                }));
                n.fromTo(c, {
                    yPercent: a ? 0 : -100
                }, {
                    yPercent: a ? 100 : 0,
                    duration: t,
                    ease: i,
                    stagger: r,
                    onStart: function() {
                        Gt.p8.set(e, {
                            autoAlpha: 1
                        })
                    },
                    onComplete: function() {
                        Gt.p8.set(e, {
                            clearProps: "clipPath,yPercent"
                        }), l && l()
                    }
                }, o)
            }

            function Kd() {
                return (Kd = (0, a.Z)((function(n) {
                    return (0, o.__generator)(this, (function(e) {
                        return Gt.p8.utils.selector(n)("h3,p").some((function(n) {
                            return n[Zd]
                        })) ? [2] : [2, new Promise((function(e) {
                            var t = function() {
                                n.removeEventListener("splitlines", t, !1), e()
                            };
                            n.addEventListener("splitlines", t, !1)
                        }))]
                    }))
                }))).apply(this, arguments)
            }

            function Yd(n, e, t) {
                var i = Gt.p8.utils.selector(e),
                    a = Wd(i);
                n.set(e, {
                    autoAlpha: 1
                }, t), n.fromTo(i("img"), {
                    scale: 1.6
                }, {
                    scale: 1,
                    duration: .5
                }, "".concat(t, "+=0.4")), n.fromTo(i("img")[0].parentNode, {
                    scale: 0
                }, {
                    scale: 1,
                    duration: .5
                }, "<"), qd(n, a, .5, "power1.out", !1, Gd(.2, "sine.in"), "".concat(t, "+=0.4"))
            }

            function Vd(n, e, t, i) {
                ! function(n, e, t) {
                    var i = Gt.p8.utils.selector(e),
                        a = i && Wd(i);
                    n.set(e, {
                        autoAlpha: 1
                    }, t), n.to(i("a"), {
                        opacity: 0,
                        duration: .5
                    }, "".concat(t, "+=0.4")), n.to(i("img"), {
                        scale: 1.6,
                        duration: .7
                    }, "".concat(t, "+=0.4")), qd(n, a, .35, "power1.out", !0, Gd(.2, "sine.out"), t, (function() {
                        Gt.p8.set(a, {
                            autoAlpha: 0
                        })
                    }))
                }(n, e, i), Yd(n, t, i)
            }

            function Jd() {
                var n = (0, c.useRef)(null);
                return ei(n, (function(e) {
                    var t = function() {
                            if (!(0 === u.zone || y && y.progress() < 1)) {
                                var n = r[u.activeSlideIndex],
                                    e = l[u.activeSlideIndex],
                                    t = c[u.activeSlideIndex],
                                    i = s[u.activeSlideIndex],
                                    a = m[u.activeSlideIndex],
                                    o = d[u.activeSlideIndex];
                                u.activeSlideIndex = j(u.zone);
                                var p = r[u.activeSlideIndex],
                                    h = l[u.activeSlideIndex],
                                    f = c[u.activeSlideIndex],
                                    v = s[u.activeSlideIndex],
                                    x = m[u.activeSlideIndex],
                                    w = g[u.activeSlideIndex],
                                    b = r.filter((function(e) {
                                        return e !== p && e !== n
                                    })),
                                    k = l.filter((function(n) {
                                        return n !== h && n !== e
                                    })),
                                    Z = c.filter((function(n) {
                                        return n !== f && n !== t
                                    })),
                                    _ = s.filter((function(n) {
                                        return n !== v && n !== i
                                    }));
                                if (y && y.kill(), (y = Gt.p8.timeline({
                                        onComplete: function() {
                                            u.nextSlideIndex = j(u.zone)
                                        }
                                    })).set(n, {
                                        autoAlpha: 1,
                                        zIndex: -1
                                    }), y.set(o, {
                                        autoAlpha: 1,
                                        zIndex: -1
                                    }), y.set(b, {
                                        autoAlpha: 0,
                                        zIndex: -1
                                    }), y.set(p, {
                                        clearProps: "zIndex"
                                    }), y.set(e, {
                                        autoAlpha: 1,
                                        zIndex: -1
                                    }), y.set(h, {
                                        autoAlpha: 1,
                                        clearProps: "zIndex"
                                    }), y.set(k, {
                                        autoAlpha: 0,
                                        zIndex: -1
                                    }), y.set(v, {
                                        autoAlpha: 0
                                    }), y.set(_, {
                                        autoAlpha: 0
                                    }), y.to(p, {
                                        autoAlpha: 1,
                                        duration: 1.5
                                    }), y.addLabel("content", "-=1.1"), y.addLabel("title", "content-=0.6"), t.textContent === f.textContent) y.set(t, {
                                    autoAlpha: 0
                                }, "title"), y.set(Z, {
                                    autoAlpha: 0
                                }, "<"), y.set(f, {
                                    autoAlpha: 1
                                }, "<");
                                else {
                                    var N = Gt.p8.utils.selector(t),
                                        C = Gt.p8.utils.selector(f);
                                    y.set(f, {
                                            autoAlpha: 1
                                        }, "title"), qd(y, N(":scope>span"), 1.2, "expo.in", !0, -.13, "title", (function() {
                                            Gt.p8.set(t, {
                                                autoAlpha: 0
                                            })
                                        })), qd(y, C(":scope>span"), 1.4, "power3.out", !1, -.23, "title+=1.2"),
                                        function(n, e, t) {
                                            n.to(".left, .right", {
                                                y: e - Gt.p8.getProperty(".right", "top"),
                                                duration: .8,
                                                ease: "cubic.out"
                                            }, t)
                                        }(y, w, "content+=0.15")
                                }
                                y.addLabel("cr", "content"), Vd(y, i, v, "cr"),
                                    function(n, e, t, i, a, r) {
                                        var o = Gt.p8.getProperty(e, "y"),
                                            l = t.cssTop + o,
                                            c = "cubic.out";
                                        n.to(e, {
                                            y: a.layoutTop - t.cssTop,
                                            duration: .8,
                                            ease: c
                                        }, r), n.fromTo(i, {
                                            y: l - a.cssTop
                                        }, {
                                            y: a.layoutTop - a.cssTop,
                                            duration: .8,
                                            ease: c
                                        }, r)
                                    }(y, i, a, v, x, "content+=0.15"), y.set(n, {
                                        autoAlpha: 0
                                    }), y.set(e, {
                                        autoAlpha: 0
                                    })
                            }
                        },
                        i = window.matchMedia("(hover: hover)"),
                        a = n.current,
                        r = Array.from(a.getElementsByClassName("slide")),
                        o = r.map((function(n) {
                            return n.querySelector("video,img")
                        })),
                        l = Array.from(a.getElementsByClassName("slide-content")),
                        c = Array.from(a.querySelectorAll(".slide-content h1")),
                        s = Array.from(a.querySelectorAll(".slide-content .creator-info")),
                        d = Array.from(a.querySelectorAll(".slide-content")).map((function(n) {
                            return n.querySelector(".custom-cta-button")
                        })),
                        u = (0, h.sj)({
                            isHover: i.matches,
                            activeSlideIndex: 0,
                            debouncedActiveSlideIndex: 0,
                            nextSlideIndex: 1,
                            zone: 0,
                            debouncedZone: 0,
                            x: 0,
                            y: 0,
                            layoutInitialized: !1,
                            hydraInitialized: !1,
                            inView: !1,
                            videoPlaying: [],
                            ctaButtons: []
                        });
                    a.homeHeroState = u;
                    var m, g, f = ti(e),
                        v = new ResizeObserver(f((function() {
                            var n = "start" === window.getComputedStyle(s[0]).getPropertyValue("align-self");
                            m = n ? s.map((function(n) {
                                var e = dt(n, a);
                                return {
                                    cssTop: e,
                                    layoutTop: e
                                }
                            })) : s.map((function(n, e) {
                                var t = dt(n, a),
                                    i = c[e].querySelector("span"),
                                    r = t;
                                i && (r = dt(i, a) + i.offsetHeight - .2 * parseFloat(getComputedStyle(i).lineHeight) - n.offsetHeight);
                                return {
                                    cssTop: t,
                                    layoutTop: r
                                }
                            })), s.forEach((function(n, e) {
                                var t = m[e],
                                    i = t.cssTop,
                                    a = t.layoutTop;
                                Gt.p8.set(n, {
                                    y: a - i,
                                    overwrite: "auto"
                                })
                            }));
                            var e = pa(12);
                            g = c.map((function(t, i) {
                                var r;
                                return r = n ? m[i].cssTop : dt(t, a), e + (r - e) / 2
                            })), Gt.p8.set(".left, .right", {
                                y: g[u.activeSlideIndex] - Gt.p8.getProperty(".right", "top")
                            }), u.layoutInitialized || function(n) {
                                return Kd.apply(this, arguments)
                            }(s[0]).then((function() {
                                u.layoutInitialized = !0, Yd(Gt.p8.timeline(), s[0], "n")
                            }))
                        })));
                    c.forEach((function(n) {
                        v.observe(n)
                    }));
                    var x, w, b = new IntersectionObserver(f((function(n) {
                        u.inView = n[0].isIntersecting
                    })));
                    b.observe(a), (0, p.VW)(u, "zone", f((function(n) {
                        u.isHover && (-1 === n ? (Gt.p8.to(".left", {
                            opacity: 1,
                            duration: .7,
                            overwrite: "auto"
                        }), Gt.p8.to(".right", {
                            opacity: 0,
                            duration: .3,
                            overwrite: "auto"
                        }), Gt.p8.set(a, {
                            cursor: "pointer"
                        })) : 1 === n ? (Gt.p8.to(".left", {
                            opacity: 0,
                            duration: .3,
                            overwrite: "auto"
                        }), Gt.p8.to(".right", {
                            opacity: 1,
                            duration: .7,
                            overwrite: "auto"
                        }), Gt.p8.set(a, {
                            cursor: "pointer"
                        })) : (Gt.p8.to(".left", {
                            opacity: 0,
                            duration: .3,
                            overwrite: "auto"
                        }), Gt.p8.to(".right", {
                            opacity: 0,
                            duration: .3,
                            overwrite: "auto"
                        }), Gt.p8.set(a, {
                            clearProps: "cursor"
                        }))), 0 === n ? x = setTimeout((function() {
                            0 === u.zone && (u.debouncedZone = 0), x = void 0
                        }), 600) : (clearTimeout(x), x = void 0, u.debouncedZone = n)
                    }))), (0, p.VW)(u, "activeSlideIndex", (function(n) {
                        clearTimeout(w), w = setTimeout((function() {
                            u.activeSlideIndex === n && (u.debouncedActiveSlideIndex = n), w = void 0
                        }), 1500)
                    })), (0, p.sY)(o.reduce((function(n, e, t) {
                        return (0, Wt.Z)(e, HTMLVideoElement) ? n[t] = function(n) {
                            var e = n(u),
                                i = e.inView,
                                a = e.activeSlideIndex,
                                r = e.debouncedActiveSlideIndex,
                                o = e.nextSlideIndex,
                                l = e.debouncedZone;
                            return !!i && (t === a || t === r || t === o && 0 !== l)
                        } : u.videoPlaying[t] = !1, n
                    }), {}), {
                        proxy: u.videoPlaying
                    }), o.forEach((function(n, e) {
                        if ((0, Wt.Z)(n, HTMLVideoElement)) {
                            var t = n;
                            t.autoplay = !1, (0, p.VW)(u.videoPlaying, e, (function(n) {
                                n ? t.play() : t.pause()
                            }))
                        }
                    }));
                    var y, j = function(n) {
                            var e = u.activeSlideIndex + n;
                            return e >= r.length ? e = 0 : e < 0 && (e = r.length - 1), e
                        },
                        k = function(n) {
                            var e, t = function(n) {
                                var e = a.offsetWidth / 2,
                                    t = 0;
                                return n.target.matches(".creator-info *, .home-arrow *") || (t = (0, lt.Z)(Dd(n), 1)[0] < e ? -1 : 1), t
                            }(n);
                            u.zone = t, e = (0, lt.Z)(Dd(n), 2), u.x = e[0], u.y = e[1], 0 !== t && (u.nextSlideIndex = j(t))
                        },
                        Z = function() {
                            u.zone = 0
                        },
                        N = f((function() {
                            u.isHover = i.matches, u.isHover ? (Gt.p8.to(".left", {
                                opacity: 0,
                                duration: .3,
                                overwrite: "auto"
                            }), Gt.p8.to(".right", {
                                opacity: 0,
                                duration: .3,
                                overwrite: "auto"
                            }), a.removeEventListener("touchmove", k), a.removeEventListener("touchend", Z), a.addEventListener("mousemove", k, {
                                passive: !0
                            }), a.addEventListener("mouseleave", Z)) : (Gt.p8.to(".left", {
                                opacity: 1,
                                duration: .7,
                                overwrite: "auto"
                            }), Gt.p8.to(".right", {
                                opacity: 1,
                                duration: .7,
                                overwrite: "auto"
                            }), a.removeEventListener("mousemove", k), a.removeEventListener("mouseleave", Z), a.addEventListener("touchmove", k, {
                                passive: !0
                            }), a.addEventListener("touchend", Z))
                        })),
                        C = (0, _.Z)().hydra.state,
                        I = (0, p.sY)({
                            ready: function(n) {
                                return n(C).disabled || n(u).hydraInitialized
                            },
                            hidden: function(n) {
                                return n(u).hydraInitialized && n(u).isHover
                            }
                        }),
                        P = function() {
                            Array.from(a.querySelectorAll(".left, .right")).forEach((function(n) {
                                n.classList.toggle("hide", I.hidden), n.classList.toggle("ready", I.ready)
                            }))
                        };
                    (0, h.Ld)(I, P);
                    var S = setInterval((function() {
                            u.zone = 1, 0 === u.x && 0 === u.y && (u.x = window.innerWidth, u.y = window.innerHeight / 2), u.nextSlideIndex = j(u.zone), t()
                        }), 6e3),
                        z = f((function(n) {
                            k(n), clearInterval(S), t(), u.isHover || setTimeout((function() {
                                u.zone = 0
                            }), 0)
                        }));
                    return a.addEventListener("click", z), i.addEventListener("change", N), N(), P(),
                        function() {
                            y && y.kill(), v.disconnect(), b.disconnect(), i.removeEventListener("change", N), a.removeEventListener("click", z), a.removeEventListener("mousemove", k), a.removeEventListener("touchmove", k), a.removeEventListener("touchend", Z), a.removeEventListener("mouseleave", Z)
                        }
                })), n
            }
            var $d = u.ZP.div.withConfig({
                    componentId: "sc-135cb999-0"
                })(Id()),
                Xd = u.ZP.div.withConfig({
                    componentId: "sc-135cb999-1"
                })(Pd()),
                Qd = u.ZP.div.withConfig({
                    componentId: "sc-135cb999-2"
                })(Sd(), (function(n) {
                    return 100 * n.$count
                })),
                nu = u.ZP.div.withConfig({
                    componentId: "sc-135cb999-3"
                })(zd(), (function(n) {
                    return -100 * n.$index
                })),
                eu = u.ZP.div.withConfig({
                    componentId: "sc-135cb999-4"
                })(Ld()),
                tu = u.ZP.div.withConfig({
                    componentId: "sc-135cb999-5"
                })(Md()),
                iu = (0, u.ZP)(Hr).attrs({
                    size: 1
                }).withConfig({
                    componentId: "sc-135cb999-6"
                })(Rd()),
                au = (0, u.ZP)(Ve).withConfig({
                    componentId: "sc-135cb999-7"
                })(Ed(), (function(n) {
                    return n.wideLayout ? "32em" : "22em"
                })),
                ru = u.ZP.div.withConfig({
                    componentId: "sc-135cb999-8"
                })(Td()),
                ou = u.ZP.div.withConfig({
                    componentId: "sc-135cb999-9"
                })(Od()),
                lu = u.ZP.div.withConfig({
                    componentId: "sc-135cb999-10"
                })(Bd()),
                cu = (0, u.iv)(Ad()),
                su = u.ZP.button.withConfig({
                    componentId: "sc-135cb999-11"
                })(Hd(), cu),
                du = u.ZP.button.withConfig({
                    componentId: "sc-135cb999-12"
                })(Fd(), cu);

            function uu(n) {
                var e = n.Items,
                    t = void 0 === e ? [] : e,
                    i = Jd();
                return (0, l.jsxs)($d, {
                    "data-hydra": JSON.stringify({
                        type: "HomeHero"
                    }),
                    ref: i,
                    children: [(0, l.jsx)(su, {
                        className: "left",
                        children: (0, l.jsx)(wd, {})
                    }), (0, l.jsx)(du, {
                        className: "right",
                        children: (0, l.jsx)(jd, {})
                    }), (0, l.jsxs)(Xd, {
                        children: [t.map((function(n, e) {
                            var t = function(n) {
                                    if (n.Media) {
                                        var e, t, i = null === (e = n.Media.media) || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.attributes;
                                        if (i && i.mime.startsWith("video")) return !0
                                    }
                                    return !1
                                }(n),
                                i = function(n) {
                                    if (n.Media) {
                                        var e, t, i = null === (e = n.Media.media) || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.attributes;
                                        if (i && i.mime.startsWith("image")) return n.Media
                                    }
                                    return n.MediaFallbackImage
                                }(n);
                            return (0, l.jsx)(eu, {
                                className: "slide",
                                children: (0, l.jsx)(tu, {
                                    children: t ? (0, l.jsx)(wr, {
                                        media: n.Media,
                                        posterImage: n.MediaFallbackImage,
                                        autoPlay: 0 === e,
                                        preload: 0 === e ? "auto" : 1 === e ? "metadata" : "none",
                                        loop: !0,
                                        muted: !0,
                                        crossOrigin: "anonymous",
                                        disableIntersectionObserver: !0
                                    }) : i && (0, l.jsx)(ba, {
                                        image: i,
                                        crossOrigin: "anonymous"
                                    })
                                })
                            }, n.id)
                        })), (0, l.jsx)(Qd, {
                            $count: t.length,
                            children: t.map((function(n, e) {
                                var t, i, a, o = (null === (t = n.CreatorDescription) || void 0 === t ? void 0 : t.trim()) || "",
                                    c = n.Creator,
                                    d = c.external_url,
                                    u = (0, b.Z)(c, ["external_url"]);
                                u.externalUrl = d;
                                var m = null === n || void 0 === n ? void 0 : n.useCustomCta,
                                    p = null === n || void 0 === n ? void 0 : n.CustomCtaText,
                                    h = null === n || void 0 === n ? void 0 : n.CustomCtaButton,
                                    g = m && h && h.label;
                                return (0, l.jsxs)(nu, {
                                    $index: e,
                                    className: "slide-content",
                                    children: [(0, l.jsx)(iu, {
                                        children: n.Title
                                    }), (0, l.jsx)(au, (0, s.Z)((0, r.Z)({}, u), {
                                        className: "creator-info hoverable",
                                        useChildren: !0,
                                        wideLayout: m,
                                        children: (0, l.jsxs)(ru, {
                                            children: [(0, l.jsx)(lu, {
                                                children: n.ProfilePic && (0, l.jsx)(ba, {
                                                    image: n.ProfilePic,
                                                    sizes: "95px",
                                                    crossOrigin: "anonymous",
                                                    className: (0, an.Z)({
                                                        hidden: m
                                                    })
                                                })
                                            }), (0, l.jsxs)(ou, {
                                                children: [(0, l.jsx)("h3", {
                                                    "aria-label": null === (i = n.Creator) || void 0 === i ? void 0 : i.label,
                                                    className: (0, an.Z)({
                                                        hidden: m
                                                    }),
                                                    children: (0, l.jsx)(Cd, {
                                                        animateOnHover: !0,
                                                        children: null === (a = n.Creator) || void 0 === a ? void 0 : a.label
                                                    })
                                                }), (o || p) && (0, l.jsx)("p", {
                                                    "aria-label": o,
                                                    className: (0, an.Z)({
                                                        "custom-cta": m
                                                    }),
                                                    children: (0, l.jsx)(Nd, {
                                                        children: p || o
                                                    })
                                                }), g && (0, l.jsx)(ci, (0, s.Z)((0, r.Z)({}, h), {
                                                    style: "primary",
                                                    className: "custom-cta-button"
                                                }))]
                                            })]
                                        })
                                    }))]
                                }, n.id)
                            }))
                        })]
                    }), (0, l.jsx)(dl, {
                        sectionRef: i,
                        className: "home-arrow"
                    })]
                })
            }

            function mu(n) {
                var e, t = n.Slug,
                    i = n.Meta,
                    a = {};
                n.shouldLinkExternally ? a.externalUrl = null === i || void 0 === i || null === (e = i.siteLink) || void 0 === e ? void 0 : e.externalUrl : a.page = {
                    Slug: t,
                    Parent: {
                        page: {
                            data: {
                                id: n.id,
                                attributes: {
                                    Slug: "apps"
                                }
                            }
                        }
                    }
                };
                return a
            }

            function pu() {
                var n = (0, d.Z)(["\n  --font-body-light: 300 max(11px, 1.6rem) / 140% var(--font-family-heading);\n\n  /* TODO: use rem */\n  padding-top: 72px;\n\n  display: grid;\n  width: 100%;\n  max-width: 1170px;\n  padding-left: 10rem;\n  padding-right: 10rem;\n  width: 100%;\n  margin: 0 auto;\n\n  .promo-tiles-head {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .promo-tiles-title {\n    font: var(--font-h5);\n    letter-spacing: -0.05em;\n    margin-bottom: 0.8rem;\n  }\n\n  .promo-tiles-body {\n    font: var(--font-body-light);\n  }\n\n  .promo-tiles-slider {\n    margin-top: 5rem;\n    overflow: hidden;\n  }\n\n  .promo-tiles-track {\n    display: flex;\n    margin-right: -4.5rem;\n    margin-left: -4.5rem;\n\n    .justify-center {\n      justify-content: center;\n    }\n  }\n\n  .promo-tile {\n    display: flex;\n    flex-direction: column;\n    width: 33.3333%;\n    padding: 0 4.5rem;\n    flex: 0 0 auto;\n  }\n\n  .promo-tile-img-wrap {\n    position: relative;\n    height: 0;\n    padding-top: 100%;\n    width: 100%;\n    border-radius: 3rem;\n    overflow: hidden;\n  }\n\n  .promo-tile-img {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  .promo-tile-placeholder {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #000;\n    border-radius: 8%;\n    top: 0;\n  }\n\n  .promo-tile-body {\n    padding: 2rem 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n\n  .promo-tile-title {\n    font: var(--font-label-1);\n    margin-bottom: 0.4rem;\n  }\n\n  .promo-tile-desc {\n    font: var(--font-body-light);\n  }\n\n  .promo-tiles-slider-nav {\n    margin-top: 3.6rem;\n    display: flex;\n    justify-content: center;\n\n    & > * {\n      margin: 0 1rem;\n    }\n\n    & .arrow-right,\n    & .arrow-left {\n      padding: 2rem;\n\n      & .icon-wrapper {\n        width: 2.4rem;\n        height: 2.4rem;\n      }\n    }\n\n    & .arrow-left .icon-wrapper svg {\n      transform: rotate(180deg);\n    }\n  }\n\n  @media (max-width: 768px) {\n    & {\n      padding-right: 2rem;\n      padding-left: 2rem;\n    }\n\n    .promo-tiles-head {\n      grid-column: auto;\n    }\n\n    .promo-tiles-title {\n      margin-bottom: 1.8rem;\n    }\n\n    .promo-tiles-slider {\n      margin-top: 3.6rem;\n    }\n\n    .promo-tiles-slider-nav {\n      margin-top: 1.2rem;\n    }\n\n    .promo-tile {\n      width: 100%;\n    }\n  }\n"]);
                return pu = function() {
                    return n
                }, n
            }
            var hu = u.ZP.div.withConfig({
                    componentId: "sc-306273d0-0"
                })(pu()),
                gu = function(n) {
                    var e = n.title,
                        t = n.body,
                        i = n.integrations,
                        a = (0, c.useState)(0),
                        o = a[0],
                        d = a[1],
                        u = (0, c.useRef)({
                            visibleSlides: 0,
                            percent: 0
                        });
                    return (0, c.useEffect)((function() {
                        var n = -1,
                            e = function() {
                                var e = window.innerWidth,
                                    t = e < 768;
                                if (u.current.visibleSlides = e < 768 ? 1 : 3, u.current.percent = e < 768 ? 100 : 33.333, n !== t) {
                                    if (-1 !== n) {
                                        var a = i.data.length - u.current.visibleSlides;
                                        d((function(n) {
                                            return n < 0 ? 0 : n > a ? a : n
                                        }))
                                    }
                                    n = t
                                }
                            };
                        return e(), window.addEventListener("resize", e),
                            function() {
                                return window.removeEventListener("resize", e)
                            }
                    }), [i]), (0, l.jsxs)(hu, {
                        children: [(0, l.jsxs)("div", {
                            className: "promo-tiles-head",
                            children: [(0, l.jsx)("h1", {
                                className: "promo-tiles-title",
                                children: e
                            }), (0, l.jsx)("p", {
                                className: "promo-tiles-body",
                                children: t
                            })]
                        }), (0, l.jsx)("div", {
                            className: "promo-tiles-slider",
                            children: (0, l.jsx)("div", {
                                className: (0, an.Z)("promo-tiles-track", i.data.length < 3 && "justify-center"),
                                style: {
                                    transform: "translateX(" + -1 * u.current.percent * o + "%)"
                                },
                                children: i.data.map((function(n) {
                                    var e = n.id,
                                        t = n.attributes,
                                        i = t.Title,
                                        a = t.shortDescription,
                                        o = t.Meta;
                                    return (0, l.jsxs)(Ve, (0, s.Z)((0, r.Z)({}, mu(n.attributes)), {
                                        className: "promo-tile",
                                        children: [(0, l.jsx)("div", {
                                            className: "promo-tile-img-wrap",
                                            children: (null === o || void 0 === o ? void 0 : o.featureImage) ? (0, l.jsx)(ba, {
                                                image: o.featureImage,
                                                className: "promo-tile-img",
                                                sizes: "(max-width: 768px) 100vw, 320px"
                                            }) : (0, l.jsx)("div", {
                                                className: "promo-tile-placeholder"
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "promo-tile-body",
                                            children: [(0, l.jsx)("div", {
                                                className: "promo-tile-title",
                                                children: i
                                            }), (0, l.jsx)("div", {
                                                className: "promo-tile-desc",
                                                children: a
                                            })]
                                        })]
                                    }), e)
                                }))
                            })
                        }), i.data.length > 3 && (0, l.jsxs)("div", {
                            className: "promo-tiles-slider-nav",
                            children: [(0, l.jsx)(cn, {
                                icon: (0, l.jsx)(Ct, {}),
                                onClick: function() {
                                    d((function(n) {
                                        return n > 0 ? n - 1 : n
                                    }))
                                },
                                label: "Previous",
                                hideLabel: !0,
                                size: "lg",
                                className: "arrow-left"
                            }), (0, l.jsx)(cn, {
                                icon: (0, l.jsx)(Ct, {}),
                                onClick: function() {
                                    d((function(n) {
                                        return n < i.data.length - u.current.visibleSlides ? n + 1 : n
                                    }))
                                },
                                label: "Next",
                                hideLabel: !0,
                                size: "lg",
                                className: "arrow-right"
                            })]
                        })]
                    })
                };

            function fu() {
                var n = (0, d.Z)(["\n  --font-body-light: 300 max(11px, 1.6rem) / 140% var(--font-family-heading);\n\n  /* TODO: use rem */\n  padding-top: 72px;\n\n  display: grid;\n  width: 100%;\n  grid-gap: 5rem 0rem;\n  max-width: 1170px;\n  padding-left: 10rem;\n  padding-right: 10rem;\n  width: 100%;\n  margin: 0 auto;\n\n  .promo-tiles-head {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .promo-tiles-title {\n    font: var(--font-h5);\n    letter-spacing: -0.05em;\n    margin-bottom: 0.8rem;\n  }\n\n  .promo-tiles-body {\n    font: var(--font-body-light);\n  }\n\n  .promo-tiles-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-gap: 1.7rem;\n  }\n\n  .promo-tile {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n\n  .promo-tile-img-wrap {\n    position: relative;\n    height: 0;\n    padding-top: 100%;\n    width: 100%;\n    border-radius: 3rem;\n    overflow: hidden;\n  }\n\n  .promo-tile-img {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  .promo-tile-placeholder {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #000;\n    border-radius: 8%;\n    top: 0;\n  }\n\n  .promo-tile-body {\n    padding: 2rem 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n\n  .promo-tile-title {\n    font: var(--font-label-1);\n    margin-bottom: 0.4rem;\n  }\n\n  .promo-tile-desc {\n    font: var(--font-body-light);\n  }\n\n  @media (max-width: 768px) {\n    & {\n      grid-template-columns: 1fr;\n      grid-gap: 3.6rem;\n      padding-right: 2rem;\n      padding-left: 2rem;\n    }\n\n    .promo-tiles-head {\n      grid-column: auto;\n    }\n\n    .promo-tiles-side {\n      display: none;\n    }\n\n    .promo-tiles-grid {\n      grid-template-columns: 1fr 1fr;\n      grid-gap: 2rem;\n    }\n\n    .promo-tiles-title {\n      margin-bottom: 1.8rem;\n    }\n  }\n"]);
                return fu = function() {
                    return n
                }, n
            }
            var vu = u.ZP.div.withConfig({
                    componentId: "sc-360c79f9-0"
                })(fu()),
                xu = function(n) {
                    var e = n.title,
                        t = n.body,
                        i = n.integrationsById,
                        a = n.anchorId;
                    return (0, l.jsxs)(vu, {
                        id: null === a || void 0 === a ? void 0 : a.anchorId,
                        children: [(0, l.jsxs)("div", {
                            className: "promo-tiles-head",
                            children: [(0, l.jsx)("h1", {
                                className: "promo-tiles-title",
                                children: e
                            }), (0, l.jsx)("p", {
                                className: "promo-tiles-body",
                                children: t
                            })]
                        }), (0, l.jsx)("div", {
                            className: "promo-tiles-grid",
                            children: Object.entries(i).map((function(n) {
                                var e = (0, lt.Z)(n, 2),
                                    t = e[0],
                                    i = e[1],
                                    a = i.Title,
                                    o = i.shortDescription,
                                    c = i.Meta,
                                    d = mu(i);
                                return (0, l.jsxs)(Ve, (0, s.Z)((0, r.Z)({
                                    className: "promo-tile"
                                }, d), {
                                    children: [(0, l.jsx)("div", {
                                        className: "promo-tile-img-wrap",
                                        children: (null === c || void 0 === c ? void 0 : c.featureImage) ? (0, l.jsx)(ba, {
                                            image: c.featureImage,
                                            className: "promo-tile-img",
                                            sizes: "(max-width: 768px) 50vw, 250px"
                                        }) : (0, l.jsx)("div", {
                                            className: "promo-tile-placeholder"
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: "promo-tile-body",
                                        children: [(0, l.jsx)("div", {
                                            className: "promo-tile-title",
                                            children: a
                                        }), (0, l.jsx)("div", {
                                            className: "promo-tile-desc",
                                            children: o
                                        })]
                                    })]
                                }), t)
                            }))
                        })]
                    })
                };

            function wu() {
                var n = (0, d.Z)(["\n  --margin: 4rem;\n  box-sizing: border-box;\n  background-color: #ffffff;\n  padding: 4rem;\n  text-align: left;\n  border-radius: 3rem;\n  position: relative;\n\n  @media (max-width: 768px) {\n    --margin: 0;\n    padding: 3rem;\n  }\n\n  a > *:not([class*='CTAButton']) {\n    padding-bottom: 1.8rem;\n  }\n\n  .block {\n    padding-bottom: 0px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n\n    @media (max-width: 768px) {\n      img {\n        max-width: 2.4rem;\n        display: inline-block;\n        margin-right: 1.5rem;\n        padding-bottom: 0;\n        vertical-align: top;\n      }\n\n      img + .heading {\n        width: calc(100% - 3.9rem);\n        display: inline-block;\n      }\n    }\n  }\n\n  .heading {\n    font: var(--font-family);\n    font-size: 3rem;\n    line-height: 4rem;\n    font-weight: var(--font-weight-normal);\n    letter-spacing: -0.02em;\n    margin: 0;\n\n    @media (max-width: 768px) {\n      font-size: 2rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 120%;\n      letter-spacing: -0.04rem;\n      position: relative;\n    }\n  }\n\n  .text-base {\n    font: var(--font-family);\n    font-size: 1.5rem;\n    font-weight: var(--font-weight-normal);\n    line-height: 2rem;\n    letter-spacing: -0.01em;\n    color: var(--color-text-body-secondary);\n    margin: 0;\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    @media (max-width: 768px) {\n      font-size: 1.6rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 120%;\n      letter-spacing: -0.016rem;\n    }\n  }\n\n  > [class*='TextEditor'] {\n    > [class*='CTAButton'] {\n      margin-bottom: 0;\n      padding-bottom: 0;\n    }\n  }\n"]);
                return wu = function() {
                    return n
                }, n
            }
            var bu = u.ZP.a.withConfig({
                componentId: "sc-4f65dd92-0"
            })(wu());

            function yu(n) {
                var e = n.body,
                    t = n.href,
                    i = (0, c.useRef)(null);
                return (0, l.jsx)(Be(), {
                    href: t,
                    passHref: !0,
                    children: (0, l.jsx)(bu, {
                        ref: i,
                        children: (0, l.jsx)(Ta, {
                            text: e
                        })
                    })
                })
            }

            function ju() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  max-width: 150rem;\n  margin: 0 auto;\n  color: var(--color-black);\n  padding 0 0 var(--spacing-xl) 0;\n"]);
                return ju = function() {
                    return n
                }, n
            }

            function ku() {
                var n = (0, d.Z)(["\n  --gap: 4rem;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 1fr;\n  gap: var(--gap);\n\n  @media (max-width: 768px) {\n    --gap: 2rem;\n    margin: 0 var(--gap);\n    gap: var(--gap);\n    grid-template-columns: 1fr;\n  }\n"]);
                return ku = function() {
                    return n
                }, n
            }
            var Zu = u.ZP.div.withConfig({
                    componentId: "sc-4acbd594-0"
                })(ju()),
                _u = u.ZP.div.withConfig({
                    componentId: "sc-4acbd594-1"
                })(ku());

            function Nu(n) {
                var e = n.link_card,
                    t = (0, c.useRef)(null);
                return (0, l.jsx)(Zu, {
                    ref: t,
                    children: (0, l.jsx)(_u, {
                        children: e.map((function(n) {
                            return (0, l.jsx)(yu, {
                                id: n.id,
                                href: n.href,
                                body: n.body
                            }, n.href)
                        }))
                    })
                })
            }
            var Cu = t(9329);

            function Iu() {
                var n = (0, d.Z)(["\n  position: sticky;\n  left: 0;\n  top: 100px;\n  padding-right: 24px;\n\n  @media (max-width: 768px) {\n    display: none;\n    position: relative;\n    margin: 0 auto;\n    top: unset;\n    left: unset;\n    padding: 0;\n  }\n"]);
                return Iu = function() {
                    return n
                }, n
            }

            function Pu() {
                var n = (0, d.Z)(["\n  font-size: 16px;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  font-weight: 400;\n  color: ", ";\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n"]);
                return Pu = function() {
                    return n
                }, n
            }

            function Su() {
                var n = (0, d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]);
                return Su = function() {
                    return n
                }, n
            }

            function zu() {
                var n = (0, d.Z)(["\n  display: none;\n  padding: 24px;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n  }\n"]);
                return zu = function() {
                    return n
                }, n
            }
            var Lu = function(n) {
                    var e = n.header,
                        t = n.footer,
                        i = (0, c.useState)(null),
                        a = i[0],
                        r = i[1],
                        o = (0, c.useState)(!1),
                        s = o[0],
                        d = o[1];
                    (0, c.useEffect)((function() {
                        var n = document.querySelectorAll("#section-header");
                        if (n) {
                            var e = (0, Wn.Z)(n).map((function(n) {
                                var e, t = null === (e = n.parentElement) || void 0 === e ? void 0 : e.id;
                                return {
                                    label: n.textContent,
                                    href: "#".concat(null !== t && void 0 !== t ? t : "")
                                }
                            }));
                            r(e)
                        }
                    }), []);
                    var u = (0, l.jsxs)(l.Fragment, {
                        children: [null === a || void 0 === a ? void 0 : a.map((function(n) {
                            var e = n.label,
                                t = n.href;
                            return (0, l.jsx)(Tu, {
                                onClick: function() {
                                    return d(!1)
                                },
                                muted: !0,
                                children: (0, l.jsx)(Be(), {
                                    href: t,
                                    children: e
                                })
                            }, e)
                        })), t && (0, l.jsxs)(Tu, {
                            children: [(0, l.jsx)(ki, {}), (0, l.jsx)(Be(), {
                                href: t.href,
                                children: t.label
                            })]
                        })]
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(Ll.f, {
                            children: (0, l.jsx)(Bu, {
                                children: (0, l.jsx)(Cu.J, {
                                    content: (0, l.jsx)(Ou, {
                                        children: u
                                    }),
                                    isOpen: s,
                                    hideArrow: !0,
                                    children: (0, l.jsx)(Mu, {
                                        variant: "secondary",
                                        icon: (0, l.jsx)(un, {}),
                                        onClick: function() {
                                            return d(!s)
                                        },
                                        iconPlacement: "last",
                                        childrenLabelOrder: "childrenFirst",
                                        fullWidth: !0,
                                        className: "bordered",
                                        children: e
                                    })
                                })
                            })
                        }), (0, l.jsx)(Eu, {
                            children: (0, l.jsxs)(Ou, {
                                children: [(0, l.jsx)(Tu, {
                                    children: e
                                }), u]
                            })
                        })]
                    })
                },
                Mu = c.forwardRef((function(n, e) {
                    return (0, l.jsx)(cn, (0, s.Z)((0, r.Z)({}, n), {
                        innerRef: e
                    }))
                }));
            Mu.displayName = "Button";
            var Ru, Eu = u.ZP.div.withConfig({
                    componentId: "sc-fcb569e2-0"
                })(Iu()),
                Tu = u.ZP.li.withConfig({
                    componentId: "sc-fcb569e2-1"
                })(Pu(), (function(n) {
                    return n.muted && "#666666"
                })),
                Ou = u.ZP.ul.withConfig({
                    componentId: "sc-fcb569e2-2"
                })(Su()),
                Bu = u.ZP.div.withConfig({
                    componentId: "sc-fcb569e2-3"
                })(zu());

            function Au() {
                var n = (0, d.Z)(["\n  min-width: 300px;\n"]);
                return Au = function() {
                    return n
                }, n
            }

            function Hu() {
                var n = (0, d.Z)(["\n  display: flex;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);
                return Hu = function() {
                    return n
                }, n
            }

            function Fu() {
                var n = (0, d.Z)(["\n  scroll-margin-top: 100px;\n  padding: 24px 0;\n\n  ul,\n  ol {\n    padding-inline-start: 40px;\n    list-style-position: outside;\n  }\n\n  li {\n    margin: 0.5em;\n    line-height: 120%;\n  }\n\n  :first-child {\n    padding-top: 0;\n  }\n\n  :not(:last-child) {\n    border-bottom: 1px solid #959595;\n  }\n\n  p {\n    margin-top: 24px;\n  }\n\n  &.full-width {\n    max-width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  @media (max-width: 768px) {\n    scroll-margin-top: 130px;\n\n    &.full-width {\n      margin: var(--spacing-sm) 0;\n      padding: 0;\n    }\n  }\n"]);
                return Fu = function() {
                    return n
                }, n
            }
            var Uu = function(n) {
                    var e, t, i, a = n.header,
                        o = n.footer_link,
                        c = n.policy_section_child;
                    return (0, l.jsx)(Ba, {
                        children: (0, l.jsxs)(Gu, {
                            children: [(0, l.jsx)(Wu, {
                                children: (0, l.jsx)(Lu, {
                                    header: a,
                                    footer: {
                                        label: o.text,
                                        href: null !== (Ru = null === (e = o.page) || void 0 === e || null === (t = e.data) || void 0 === t || null === (i = t.attributes) || void 0 === i ? void 0 : i.Slug) && void 0 !== Ru ? Ru : "/"
                                    }
                                })
                            }), (0, l.jsx)("div", {
                                children: c.map((function(n) {
                                    return (0, l.jsx)(Du, (0, r.Z)({}, n), n.header)
                                }))
                            })]
                        })
                    })
                },
                Du = function(n) {
                    var e = n.content,
                        t = n.header,
                        i = n.anchorId;
                    return (0, l.jsxs)(qu, {
                        id: i,
                        children: [(0, l.jsx)($i, {
                            size: 4,
                            id: "section-header",
                            children: t
                        }), (0, l.jsx)(Ta, {
                            text: e
                        })]
                    })
                },
                Wu = u.ZP.div.withConfig({
                    componentId: "sc-d817a340-0"
                })(Au()),
                Gu = u.ZP.div.withConfig({
                    componentId: "sc-d817a340-1"
                })(Hu()),
                qu = u.ZP.div.withConfig({
                    componentId: "sc-d817a340-2"
                })(Fu());

            function Ku() {
                var n = (0, d.Z)(["\n  --font-body: var(--font-weight-normal) 2.4rem / 116% var(--font-family-heading);\n  --font-sub: var(--font-weight-normal) 3.2rem / 116% var(--font-family-heading);\n  --font-label-4: 400 2.4rem / 120% var(--font-family-heading);\n  --font-label-3: 400 max(12px, 2rem) / 100% var(--font-family-heading);\n\n  max-width: 164rem;\n  margin: 0 auto;\n  padding: 18rem 14rem 5rem;\n  padding-top: ", ";\n  .head {\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n    // allow to expand beyond the container when the h2 font-size exceeds the clamped maximum\n    margin: 0 min((var(--font-size-h2) - 17rem) * (-87 / 17) * 0.5, 0px);\n\n    .head-body {\n      font: var(--font-body);\n      max-width: 39rem;\n      padding-left: 10rem;\n    }\n\n    &.commerce-head {\n      justify-content: center;\n    }\n  }\n\n  .commerce-body {\n    display: grid;\n    grid-template-columns: 6.4fr 3.6fr;\n    grid-column-gap: 13rem;\n    padding-top: 15rem;\n    align-items: flex-start;\n  }\n\n  .commerce-copy-slider {\n    padding-top: 3.6rem;\n  }\n\n  .commerce-copy-slide {\n    .heading.inline {\n      margin: 0;\n      font: var(--font-h3);\n      margin-right: 3.6rem;\n    }\n\n    .text-base {\n      font-size: var(--font-size-body-sm);\n      a {\n        color: currentColor;\n      }\n    }\n  }\n\n  .commerce-fine-print {\n    > .block {\n      > .heading.inline {\n        line-height: 0.8em;\n      }\n    }\n  }\n\n  .commerce-side {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .commerce-slider {\n    height: 0;\n    padding-top: 72.55%;\n    width: 100%;\n    border-radius: 3rem;\n    position: relative;\n    overflow: hidden;\n  }\n\n  .phone-slider {\n    min-height: 70rem;\n  }\n\n  .commerce-slide {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    transition: 0.5s ease opacity;\n\n    &.active {\n      opacity: 1;\n    }\n  }\n\n  .commerce-side-title,\n  .head-sub {\n    font: var(--font-sub);\n  }\n\n  .head-sub {\n    display: none;\n  }\n\n  .commerce-nav {\n    font: var(--font-label-3);\n    margin-top: 6.6rem;\n\n    & > * + * {\n      margin-top: 3.2rem;\n    }\n  }\n\n  .phone-carousel-nav {\n    font: var(--font-label-4);\n  }\n\n  .commerce-nav-indicator {\n    position: absolute;\n    width: 35%;\n    height: 1px;\n    bottom: calc(100% + 1.2rem - 1px);\n    display: none;\n\n    &::before,\n    &::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      height: 100%;\n      background: currentColor;\n    }\n\n    &::before {\n      opacity: 0.2;\n      width: 100%;\n    }\n\n    &::after {\n      width: var(--progress);\n    }\n  }\n\n  .commerce-nav-item {\n    position: relative;\n    display: flex;\n    align-items: flex-start;\n    opacity: 0.25;\n    appearance: none;\n    background: none;\n    border: none;\n    border-radius: 0;\n\n    &.active {\n      opacity: 1;\n\n      .commerce-nav-indicator {\n        display: block;\n      }\n    }\n\n    & > .commerce-nav-item-number + * {\n      margin-left: 2rem;\n    }\n  }\n\n  .commerce-divider {\n    margin-top: 9.6rem;\n    height: 1px;\n    background: #000;\n    opacity: 0.5;\n    width: 100%;\n  }\n\n  .features-body {\n    padding-top: 15rem;\n  }\n\n  .features-nav {\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-column-gap: 9rem;\n  }\n\n  .features-nav {\n    font: var(--font-label-4);\n  }\n\n  .features-nav-indicator {\n    grid-area: 1/1/1/1;\n    position: absolute;\n    width: 60%;\n    height: 1px;\n    bottom: calc(100% + 2.4rem);\n\n    &::before,\n    &::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      height: 100%;\n      background: currentColor;\n    }\n\n    &::before {\n      opacity: 0.2;\n      width: 100%;\n    }\n\n    &::after {\n      width: var(--progress);\n    }\n  }\n\n  .features-nav-item {\n    display: block;\n    text-align: left;\n    margin: 0;\n    padding: 0;\n    appearance: none;\n    opacity: 0.25;\n    font-size: 2.4rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 120%;\n    letter-spacing: -0.072rem;\n\n    &.active {\n      opacity: 1;\n    }\n  }\n\n  .features-nav-item-title {\n    padding-top: 1rem;\n  }\n\n  .features-slider {\n    margin-top: 8rem;\n    position: relative;\n    padding-top: 64.5338%;\n  }\n\n  .features-slide {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    transition: 0.5s ease opacity;\n\n    &.active {\n      opacity: 1;\n    }\n  }\n\n  .slide-img {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: auto;\n    max-width: 45rem;\n  }\n\n  .commerce-nav-item-mobile,\n  .features-nav-item-mobile,\n  .commerce-copy-slider-mobile {\n    display: none;\n  }\n\n  @media (max-width: 768px) {\n    --font-body: var(--font-weight-normal) 1.8rem / 116% var(--font-family-heading);\n    --font-sub: var(--font-weight-normal) 1.9rem / 116% var(--font-family-heading);\n\n    padding: 9rem 2rem 5rem;\n\n    .head {\n      flex-direction: column;\n      align-items: flex-start;\n\n      .head-body {\n        max-width: 24rem;\n        padding-top: 3.2rem;\n        align-self: flex-end;\n        padding-left: 0;\n      }\n    }\n\n    .commerce-copy-slider-mobile {\n      display: inherit;\n      padding-top: 5rem;\n    }\n\n    .commerce-nav-item-mobile,\n    .features-nav-item-mobile {\n      display: block;\n      padding-top: 1rem;\n    }\n\n    .features-nav,\n    .features-nav-item-mobile,\n    .commerce-nav-item-mobile {\n      font: var(--font-label-3);\n    }\n\n    .features-nav {\n      display: flex;\n      grid-column-gap: 0;\n    }\n\n    .features-nav-item {\n      flex-basis: 15vw;\n      transition: 0.3s ease all;\n\n      &.active {\n        flex-basis: 30vw;\n      }\n    }\n\n    .features-nav-indicator,\n    .commerce-nav-indicator {\n      bottom: calc(100% + 2rem);\n    }\n\n    .commerce-nav-indicator {\n      width: 15vw;\n    }\n\n    .features-nav-indicator {\n      width: 22vw;\n    }\n\n    .features-nav-item-title {\n      display: none;\n    }\n\n    .features-body {\n      padding-top: 6.8rem;\n    }\n\n    .features-slider {\n      margin-top: 4rem;\n    }\n\n    .commerce-slide,\n    .features-slide {\n      padding-top: 86.72316%;\n    }\n\n    .head.commerce-head {\n      text-align: center;\n      align-items: center;\n    }\n\n    .head-sub {\n      padding-top: 2.6rem;\n      display: inherit;\n      max-width: 27rem;\n      margin: 0 auto;\n    }\n\n    .commerce-body {\n      padding-top: 6rem;\n      display: flex;\n      flex-direction: column-reverse;\n    }\n\n    .commerce-side {\n      width: 100%;\n    }\n\n    .commerce-nav {\n      margin-top: 0;\n      display: flex;\n\n      & > * + * {\n        margin-top: 0;\n      }\n    }\n\n    .commerce-divider,\n    .commerce-side-title,\n    .commerce-copy-slider {\n      display: none;\n    }\n\n    .commerce-slider {\n      width: 100%;\n      margin-top: 4rem;\n    }\n\n    .commerce-copy-slide {\n      &.last {\n        > .block {\n          display: flex;\n        }\n\n        .heading.inline {\n          float: none;\n        }\n      }\n    }\n\n    .commerce-nav-item {\n      flex-basis: 15vw;\n\n      & > .commerce-nav-item-number + * {\n        margin-left: 0;\n      }\n    }\n\n    .commerce-nav-item-title {\n      display: none;\n    }\n  }\n"]);
                return Ku = function() {
                    return n
                }, n
            }
            var Yu = u.ZP.div.withConfig({
                componentId: "sc-a5ca31b7-0"
            })(Ku(), (function(n) {
                return n.noTopPadding ? 0 : void 0
            }));

            function Vu() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return Vu = function() {
                    return n
                }, n
            }
            var Ju = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-41bd2978-0"
                })(Vu()),
                $u = function(n) {
                    var e = n.id,
                        t = n.title,
                        i = n.body,
                        a = n.slides,
                        r = n.anchorId,
                        o = n.backgroundColor,
                        s = function(n) {
                            "key" in n && "Enter" !== (null === n || void 0 === n ? void 0 : n.key) || "type" in n && "click" !== (null === n || void 0 === n ? void 0 : n.type) || (p(Number(n.currentTarget.dataset.index)), x.current = !0)
                        },
                        d = (0, c.useRef)(null),
                        u = (0, c.useState)(0),
                        m = u[0],
                        p = u[1],
                        h = (0, fr.Z)(d, {}),
                        g = (0, c.useRef)(0),
                        f = (0, c.useRef)(0),
                        v = (0, c.useRef)(0),
                        x = (0, c.useRef)(!1),
                        w = function(n) {
                            p(n), f.current = g.current
                        };
                    return (0, c.useEffect)((function() {
                        f.current = g.current
                    }), [m]), (0, c.useEffect)((function() {
                        (null === h || void 0 === h ? void 0 : h.isIntersecting) && !x.current && w(0)
                    }), [h]), (0, vr.Z)((function(n) {
                        if (x.current) {
                            var e = n - (g.current || 0);
                            v.current = (v.current || 0) + e
                        }
                        var t = n - (v.current || 0);
                        t - (f.current || 0) > 5e3 && w(m === a.length - 1 ? 0 : m + 1);
                        var i = (t - (f.current || 0)) / 5e3;
                        d.current && d.current.style.setProperty("--progress", "".concat(100 * i, "%")), g.current = n
                    })), (0, l.jsxs)(Yu, {
                        id: null === r || void 0 === r ? void 0 : r.anchorId,
                        ref: d,
                        children: [(0, l.jsx)(Ju, {
                            seed: e,
                            colors: o
                        }), (0, l.jsxs)("div", {
                            className: "head commerce-head",
                            children: [(0, l.jsx)(Hr, {
                                size: 2,
                                children: t
                            }), (0, l.jsx)("div", {
                                className: "head-sub",
                                children: i
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "commerce-body",
                            children: [(0, l.jsx)("div", {
                                className: "commerce-copy-slider-mobile",
                                children: (0, l.jsx)("div", {
                                    className: "commerce-copy-slide last",
                                    children: (0, l.jsx)(Ta, {
                                        text: a[m].body
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "commerce-slider",
                                children: a.map((function(n, e) {
                                    return (0, l.jsx)("div", {
                                        className: (0, an.Z)("commerce-slide", {
                                            active: e === m
                                        }),
                                        children: (0, l.jsx)(ba, {
                                            image: n,
                                            className: "slide-img",
                                            transparent: !0,
                                            sizes: "(max-width: 768px) 100vw, 720px"
                                        })
                                    }, n.id)
                                }))
                            }), (0, l.jsxs)("div", {
                                className: "commerce-side",
                                children: [(0, l.jsx)("div", {
                                    className: "commerce-side-title",
                                    children: i
                                }), (0, l.jsx)("div", {
                                    className: "commerce-nav",
                                    children: a.map((function(n, e) {
                                        var t = n.id,
                                            i = n.title;
                                        return (0, l.jsxs)("button", {
                                            className: (0, an.Z)("commerce-nav-item", e === m && "active"),
                                            onClick: s,
                                            tabIndex: 0,
                                            onKeyDown: s,
                                            "data-index": e,
                                            children: [(0, l.jsx)("div", {
                                                className: "commerce-nav-indicator"
                                            }), (0, l.jsxs)("div", {
                                                className: "commerce-nav-item-number",
                                                children: [String(e + 1).padStart(2, "0"), "."]
                                            }), (0, l.jsx)("div", {
                                                className: "commerce-nav-item-title",
                                                children: i
                                            })]
                                        }, t)
                                    }))
                                }), (0, l.jsx)("div", {
                                    className: "commerce-nav-item-mobile",
                                    children: a[m].title
                                }), (0, l.jsx)("div", {
                                    className: "commerce-divider"
                                }), (0, l.jsx)("div", {
                                    className: "commerce-copy-slider",
                                    children: (0, l.jsx)("div", {
                                        className: "commerce-copy-slide commerce-fine-print",
                                        children: (0, l.jsx)(Ta, {
                                            text: a[m].body
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                };

            function Xu() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return Xu = function() {
                    return n
                }, n
            }
            var Qu = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-531e4b6b-0"
                })(Xu()),
                nm = function(n) {
                    var e = n.id,
                        t = n.title,
                        i = n.body,
                        a = n.slides,
                        r = void 0 === a ? [] : a,
                        o = n.anchorId,
                        s = n.backgroundColor,
                        d = function(n) {
                            "key" in n && "Enter" !== (null === n || void 0 === n ? void 0 : n.key) || "type" in n && "click" !== (null === n || void 0 === n ? void 0 : n.type) || (w(Number(n.currentTarget.dataset.index)), k.current = !0)
                        },
                        u = (0, c.useRef)(null),
                        m = (0, c.useRef)(null),
                        p = (0, lt.Z)(function() {
                            var n = (0, c.useRef)([]),
                                e = (0, c.useCallback)((function(e) {
                                    return function(t) {
                                        t && (n.current[e] = t)
                                    }
                                }), []);
                            return [n, e]
                        }(), 2),
                        h = p[0],
                        g = p[1],
                        f = (0, fr.Z)(u, {}),
                        v = (0, c.useState)(0),
                        x = v[0],
                        w = v[1],
                        b = (0, c.useRef)(0),
                        y = (0, c.useRef)(0),
                        j = (0, c.useRef)(0),
                        k = (0, c.useRef)(!1),
                        Z = function(n) {
                            w(n), y.current = b.current
                        };
                    return (0, c.useEffect)((function() {
                        y.current = b.current
                    }), [x]), (0, c.useEffect)((function() {
                        (null === f || void 0 === f ? void 0 : f.isIntersecting) && !k.current && Z(0)
                    }), [f]), (0, vr.Z)((function(n) {
                        if (k.current) {
                            var e = n - (b.current || 0);
                            j.current = (j.current || 0) + e
                        }
                        var t = n - (j.current || 0);
                        t - (y.current || 0) > 5e3 && Z(x === r.length - 1 ? 0 : x + 1);
                        var i = (t - (y.current || 0)) / 5e3;
                        if (m.current) {
                            var a = h.current[x].offsetLeft;
                            m.current.style.transform = "translateX(" + a + "px)", m.current.style.setProperty("--progress", "".concat(100 * i, "%"))
                        }
                        b.current = n
                    })), (0, l.jsxs)(Yu, {
                        id: null === o || void 0 === o ? void 0 : o.anchorId,
                        ref: u,
                        children: [(0, l.jsx)(Qu, {
                            seed: e,
                            colors: s
                        }), (0, l.jsxs)("div", {
                            className: "head",
                            children: [(0, l.jsx)(Hr, {
                                size: 2,
                                children: t
                            }), (0, l.jsx)("div", {
                                className: "head-body",
                                children: i
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "features-body",
                            children: [(0, l.jsxs)("div", {
                                className: "features-nav",
                                children: [(0, l.jsx)("div", {
                                    className: "features-nav-indicator",
                                    ref: m
                                }), r.map((function(n, e) {
                                    var t = n.id,
                                        i = n.title;
                                    return (0, l.jsxs)("button", {
                                        ref: g(e),
                                        className: (0, an.Z)("features-nav-item", e === x && "active"),
                                        onClick: d,
                                        tabIndex: 0,
                                        onKeyDown: d,
                                        "data-index": e,
                                        children: [(0, l.jsxs)("div", {
                                            className: "features-nav-item-number",
                                            children: [String(e + 1).padStart(2, "0"), "."]
                                        }), (0, l.jsx)("div", {
                                            className: "features-nav-item-title",
                                            children: i
                                        })]
                                    }, t)
                                }))]
                            }), (0, l.jsx)("div", {
                                className: "features-nav-item-mobile",
                                children: r[x].title
                            }), (0, l.jsx)("div", {
                                className: "features-slider",
                                children: r.map((function(n, e) {
                                    return (0, l.jsx)("div", {
                                        className: (0, an.Z)("features-slide", {
                                            active: e === x
                                        }),
                                        children: (0, l.jsx)(ba, {
                                            image: n,
                                            className: "slide-img",
                                            transparent: !0,
                                            sizes: "(max-width: 768px) 100vw, 1280px"
                                        })
                                    }, n.id)
                                }))
                            })]
                        })]
                    })
                },
                em = {
                    black: ["#000000", "#ffffff", "#ffffff", "#000000"]
                };

            function tm() {
                var n = (0, d.Z)(["\n  --margin: 4rem;\n\n  flex: 0 0 calc(50% - var(--margin));\n  margin: calc(var(--margin) / 2);\n  box-sizing: border-box;\n  background-color: #ffffff;\n  padding: 4rem;\n  text-align: left;\n  border-radius: 3rem;\n  position: relative;\n  max-width: 29vw;\n\n  @media (max-width: 768px) {\n    max-width: none;\n    --margin: 0;\n    margin-bottom: 2.6rem;\n\n    &:last-child,\n    .text-base:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  h2 {\n    font-size: 4rem;\n  }\n\n  &.highlight {\n    border: 3px solid black;\n  }\n\n  .textHighlight {\n    font: var(--font-family);\n    background-color: #000;\n    color: #fff;\n    display: inline-block;\n    line-height: 1em;\n    margin: 0;\n    padding: 1rem 3rem;\n    border-radius: 7px 7px 0 0;\n    position: absolute;\n    top: -2rem;\n\n    @media (max-width: 768px) {\n      left: 50%;\n      transform: translateX(-50%);\n    }\n  }\n\n  .block {\n    .heading {\n      margin-right: 8rem;\n      margin-bottom: 4rem;\n      font-size: 9.6rem;\n      font-style: normal;\n      font-weight: 250;\n      line-height: 0.8em;\n      letter-spacing: -0.384rem;\n\n      @media (max-width: 768px) {\n        font-size: 4.8rem;\n        font-style: normal;\n        font-weight: 350;\n        line-height: 105%;\n        letter-spacing: -0.192rem;\n        margin: 0 0 1.9rem 0;\n        width: 100%;\n      }\n    }\n\n    .heading + .text-base {\n      margin: 0;\n      padding: 0;\n\n      @media (max-width: 768px) {\n        font-size: 1.6rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 120%;\n        letter-spacing: -0.016rem;\n      }\n    }\n\n    .heading + .text-base + .fine-print + * {\n      clear: both;\n    }\n\n    .fine-print {\n      font-size: 1rem;\n\n      @media (max-width: 768px) {\n        font-size: 1.4rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 120%;\n        letter-spacing: -0.014rem;\n        margin-top: 0.5rem;\n      }\n    }\n\n    .text-base .strapi-link {\n      color: var(--text-primary);\n      opacity: 0.5;\n    }\n\n    .button.strapi-link {\n      width: 100%;\n    }\n\n    ul {\n      list-style-type: none;\n    }\n\n    li::before {\n      content: '';\n      display: inline-block;\n      width: 2rem;\n      height: 2rem;\n      // data-uri requires double quotes\n      // prettier-ignore\n      background-image: url(\"", '");\n      background-size: contain;\n      background-repeat: no-repeat;\n      background-position: center bottom;\n      margin-right: 1rem;\n\n      @media (max-width: 768px) {\n        width: 0.8rem;\n        height: 0.8rem;\n        background-position: center center;\n      }\n    }\n  }\n']);
                return tm = function() {
                    return n
                }, n
            }
            var im = u.ZP.div.withConfig({
                componentId: "sc-de0e7dde-0"
            })(tm(), "data:image/svg+xml,%3csvg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath opacity='0.25' d='M11.5 1.71436L4.625 8.58936L1.5 5.46436' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e %3c/svg%3e");

            function am(n) {
                var e = n.text,
                    t = n.title,
                    i = n.highlight,
                    a = n.className,
                    r = (0, c.useRef)(null);
                return (0, l.jsxs)(im, {
                    className: (0, an.Z)(i && "highlight", a),
                    ref: r,
                    children: [i && (0, l.jsx)("div", {
                        className: "textHighlight",
                        children: i
                    }), t && (0, l.jsx)("h2", {
                        children: t
                    }), e && (0, l.jsx)(Ta, {
                        text: e
                    })]
                })
            }

            function rm() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  max-width: 150rem;\n  margin: 0 auto;\n  color: var(--color-black);\n  padding: 23rem 0 16rem 0;\n\n  @media (max-width: 768px) {\n    max-height: none;\n    padding: 12.6rem 0;\n  }\n\n  .content {\n    position: relative;\n    width: 100%;\n    height: 100%;\n\n    @media (max-width: 768px) {\n      height: auto;\n      width: calc(100% - 4rem);\n      margin-left: 2rem;\n    }\n  }\n  .header {\n    padding: 5rem 0;\n    margin-bottom: 10rem;\n\n    @media (max-width: 768px) {\n      margin-bottom: 3.6rem;\n      padding: 0;\n    }\n\n    & .title {\n      width: 100%;\n      text-align: center;\n      margin-bottom: 2rem;\n\n      h1 {\n        color: var(--color-black);\n        padding: 0 5rem;\n        font-size: 17rem;\n        font-style: normal;\n        font-weight: 250;\n        line-height: 87%;\n        letter-spacing: -1.02rem;\n\n        @media (max-width: 768px) {\n          padding: 0;\n          font-size: 5.8rem;\n          font-style: normal;\n          font-weight: 300;\n          line-height: 102%;\n          letter-spacing: -0.232rem;\n        }\n      }\n    }\n\n    & .body {\n      color: var(--color-black);\n      width: 100%;\n      position: relative;\n      margin: 0 auto;\n      max-width: 60rem;\n\n      .text-base {\n        text-align: center;\n        font-size: 2.4rem;\n        line-height: 3rem;\n        letter-spacing: -0.02em;\n        margin: 0;\n\n        @media (max-width: 768px) {\n          font-size: 1.8rem;\n          font-style: normal;\n          font-weight: 400;\n          line-height: 120%;\n          letter-spacing: -0.036rem;\n        }\n      }\n    }\n  }\n"]);
                return rm = function() {
                    return n
                }, n
            }

            function om() {
                var n = (0, d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5rem 0;\n  justify-content: center;\n  max-width: 126rem;\n  margin: 0 auto;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);
                return om = function() {
                    return n
                }, n
            }

            function lm() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return lm = function() {
                    return n
                }, n
            }
            var cm = u.ZP.div.withConfig({
                    componentId: "sc-34e30c2d-0"
                })(rm()),
                sm = u.ZP.div.withConfig({
                    componentId: "sc-34e30c2d-1"
                })(om()),
                dm = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-34e30c2d-2"
                })(lm());

            function um(n) {
                var e = n.id,
                    t = n.title,
                    i = n.body,
                    a = n.prices,
                    r = n.anchorId,
                    o = n.backgroundGradientColor,
                    s = function() {
                        var n = (0, c.useRef)(null);
                        return ei(n, (function(e) {
                            if (n.current) {
                                var t = ti(e),
                                    i = Gt.p8.utils.selector(n),
                                    a = new ResizeObserver(t((function() {
                                        var n, e = i(".card > .block"),
                                            t = [];
                                        e.forEach((function(e) {
                                            var i = e.parentElement.getBoundingClientRect().top;
                                            i === n ? t[t.length - 1].push(e) : (n = i, t.push([e]))
                                        })), t.forEach((function(n) {
                                            n.length < 2 && n.forEach((function(n) {
                                                var e = !0,
                                                    t = !1,
                                                    i = void 0;
                                                try {
                                                    for (var a, r = n.children[Symbol.iterator](); !(e = (a = r.next()).done); e = !0) {
                                                        var o = a.value;
                                                        Gt.p8.set(o, {
                                                            clearProps: "marginTop"
                                                        })
                                                    }
                                                } catch (l) {
                                                    t = !0, i = l
                                                } finally {
                                                    try {
                                                        e || null == r.return || r.return()
                                                    } finally {
                                                        if (t) throw i
                                                    }
                                                }
                                            }));
                                            var e = [],
                                                t = 0;
                                            n: for (;; t += 1) {
                                                for (var i = [], a = 0; a < n.length; ++a) {
                                                    var r = n[a];
                                                    if (r.children.length <= t) break n;
                                                    var o = r.children[t],
                                                        l = [o, Gt.p8.getProperty(o, "height")];
                                                    if (0 === a) i.push(l);
                                                    else {
                                                        if (o.tagName !== i[0][0].tagName) break n;
                                                        i.push(l)
                                                    }
                                                }
                                                e.push(i)
                                            }
                                            e.forEach((function(n, t) {
                                                if (t !== e.length - 1) {
                                                    var i = 0;
                                                    n.forEach((function(n) {
                                                        var e = (0, lt.Z)(n, 2)[1];
                                                        i = Math.max(i, e)
                                                    })), n.forEach((function(n, a) {
                                                        var r = (0, lt.Z)(n, 2),
                                                            o = r[0],
                                                            l = r[1],
                                                            c = Gt.p8.getProperty(o, "float");
                                                        if (!c || "none" === c) {
                                                            var s = {},
                                                                d = Gt.p8.getProperty(o, "marginBottom");
                                                            l < i ? s.marginTop = d + i - l : s.clearProps = "marginTop";
                                                            var u = e[t + 1][a][0];
                                                            if ((c = Gt.p8.getProperty(u, "float")) && "none" !== c && t < e.length - 2) {
                                                                var m = e[t + 2][a][0];
                                                                Gt.p8.set(m, s), "number" === typeof s.marginTop && (s.marginTop -= d)
                                                            }
                                                            Gt.p8.set(u, s)
                                                        }
                                                    }))
                                                }
                                            }))
                                        }))
                                    })));
                                return a.observe(n.current),
                                    function() {
                                        a.disconnect()
                                    }
                            }
                        })), n
                    }();
                return (0, l.jsxs)("div", {
                    id: null === r || void 0 === r ? void 0 : r.anchorId,
                    children: [(0, l.jsx)(dm, {
                        seed: e,
                        colors: o || em.black
                    }), (0, l.jsx)(cm, {
                        ref: s,
                        children: (0, l.jsxs)("div", {
                            className: "content",
                            children: [(0, l.jsxs)("div", {
                                className: "header",
                                children: [(0, l.jsx)("div", {
                                    className: "title",
                                    children: (0, l.jsx)($i, {
                                        size: 1,
                                        children: t
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "body",
                                    children: i && (0, l.jsx)(Ta, {
                                        text: i
                                    })
                                })]
                            }), (0, l.jsx)(sm, {
                                children: a.map((function(n) {
                                    return (0, l.jsx)(am, {
                                        className: "card",
                                        title: n.title,
                                        text: n.body,
                                        highlight: n.highlight
                                    }, n.id)
                                }))
                            })]
                        })
                    })]
                })
            }

            function mm() {
                var n = (0, d.Z)(["\n  --margin: 4rem;\n  box-sizing: border-box;\n  background-color: #ffffff;\n  padding: 4rem;\n  text-align: left;\n  border-radius: 3rem;\n  position: relative;\n\n  @media (max-width: 768px) {\n    --margin: 0;\n    padding: 3rem;\n  }\n\n  div > *:not([class*='CTAButton']) {\n    padding-bottom: 1.8rem;\n  }\n\n  .block {\n    padding-bottom: 0px;\n\n    @media (max-width: 768px) {\n      img {\n        max-width: 2.4rem;\n        display: inline-block;\n        margin-right: 1.5rem;\n        padding-bottom: 0;\n        vertical-align: top;\n      }\n\n      img + .heading {\n        width: calc(100% - 3.9rem);\n        display: inline-block;\n      }\n    }\n  }\n\n  .heading {\n    font: var(--font-family);\n    font-size: 3rem;\n    line-height: 4rem;\n    font-weight: var(--font-weight-normal);\n    letter-spacing: -0.02em;\n    margin: 0;\n\n    @media (max-width: 768px) {\n      font-size: 2rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 120%;\n      letter-spacing: -0.04rem;\n      position: relative;\n    }\n  }\n\n  .text-base {\n    font: var(--font-family);\n    font-size: 1.5rem;\n    font-weight: var(--font-weight-normal);\n    line-height: 2rem;\n    letter-spacing: -0.01em;\n    color: var(--color-text-body-secondary);\n    margin: 0;\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    @media (max-width: 768px) {\n      font-size: 1.6rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 120%;\n      letter-spacing: -0.016rem;\n    }\n  }\n\n  > [class*='TextEditor'] {\n    > [class*='CTAButton'] {\n      margin-bottom: 0;\n      padding-bottom: 0;\n    }\n  }\n"]);
                return mm = function() {
                    return n
                }, n
            }
            var pm = u.ZP.div.withConfig({
                componentId: "sc-9bd44711-0"
            })(mm());

            function hm(n) {
                var e = n.text,
                    t = n.className,
                    i = (0, c.useRef)(null);
                return (0, l.jsx)(pm, {
                    ref: i,
                    className: t,
                    children: (0, l.jsx)(Ta, {
                        text: e
                    })
                })
            }

            function gm() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  max-width: 150rem;\n  margin: 0 auto;\n  color: var(--color-black);\n  padding ", ";\n\n  @media (max-width: 768px) {\n    max-height: none;\n    padding: 12.6rem 0;\n  }\n\n  .content {\n    position: relative;\n    width: 100%;\n    height: 100%;\n\n    @media (max-width: 768px) {\n      height: auto;\n      width: calc(100% - 4rem);\n      margin-left: 2rem;\n    }\n  }\n\n  .header {\n    display: flex;\n    align-items: flex-end;\n    padding: 5rem 0;\n    // allow to expand beyond the container when the h2 font-size exceeds the clamped maximum\n    margin: 0 min((var(--font-size-h2) - 17rem) * (-83 / 17) * 0.5, 0px) 15rem;\n\n    @media (max-width: 768px) {\n      flex-direction: column;\n      align-items: stretch;\n      padding: 0;\n      margin-bottom: 5rem;\n    }\n\n    & .title {\n      flex: 1 0 auto;\n      @media (max-width: 768px) {\n        padding-right: 5rem;\n      }\n\n      h2 {\n        line-height: 1;\n      }\n    }\n\n    & .body {\n      left: 5rem;\n      color: var(--color-black);\n      width: 67rem;\n      bottom: -5rem;\n      position: relative;\n\n      @media (max-width: 768px) {\n        left: auto;\n        bottom: auto;\n        margin-top: 5rem;\n        width: 100%;\n      }\n\n      .text-base {\n        font-size: 2.4rem;\n        line-height: 3rem;\n        font-weight: var(--font-weight-normal);\n        letter-spacing: -0.02em;\n        margin: 0;\n\n        @media (max-width: 768px) {\n          font-size: 2rem;\n          font-style: normal;\n          font-weight: 400;\n          line-height: 120%;\n          letter-spacing: -0.04rem;\n        }\n      }\n    }\n  }\n\n  .bottom {\n    margin-top: calc(var(--spacing-lg) * 2);\n\n    img {\n      max-width: 25rem;\n      max-height: 3.2rem;\n      width: auto;\n      height: auto;\n      margin: 1.2rem 0;\n    }\n\n    @media (max-width: 768px) {\n      img {\n        max-width: 18.8rem;\n        max-height: 2.4rem;\n        width: auto;\n        height: auto;\n        margin: 1.4rem 0;\n      }\n\n      .text-base {\n        font-size: 1.6rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 120%;\n        letter-spacing: -0.048rem;\n      }\n    }\n  }\n"]);
                return gm = function() {
                    return n
                }, n
            }

            function fm() {
                var n = (0, d.Z)(["\n  --gap: 4rem;\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--gap);\n  justify-content: space-between;\n\n  &.two-columns {\n    > div {\n      flex: 1 1 calc(50% - var(--gap));\n    }\n  }\n\n  &.three-columns {\n    > div {\n      flex: 1 1 calc(33.333% - var(--gap));\n    }\n  }\n\n  &.grouped {\n    background-color: var(--color-white);\n    border-radius: 3rem;\n\n    .card {\n      &:after {\n        background-color: var(--color-neutral-80);\n        content: '';\n        display: block;\n        width: 1px;\n        height: calc(100% - 6rem);\n        position: absolute;\n        right: calc((var(--gap) / 2) * -1);\n        top: 3rem;\n      }\n\n      &:last-of-type {\n        &:after {\n          display: none;\n        }\n      }\n    }\n\n    @media (max-width: 768px) {\n      gap: 0;\n\n      .card {\n        &:after {\n          width: 33.333%;\n          height: 1px;\n          position: absolute;\n          right: auto;\n          left: 50%;\n          transform: translateX(-50%);\n          top: auto;\n          bottom: 0;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 768px) {\n    padding: 0;\n\n    &.two-columns,\n    &.three-columns {\n      > div {\n        flex: 0 0 100%;\n      }\n    }\n  }\n"]);
                return fm = function() {
                    return n
                }, n
            }

            function vm() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return vm = function() {
                    return n
                }, n
            }
            var xm = u.ZP.div.withConfig({
                    componentId: "sc-7c8770db-0"
                })(gm(), (function(n) {
                    return (null === n || void 0 === n ? void 0 : n.title) ? "23rem 0 16rem 0" : "0 0 var(--spacing-xl) 0"
                })),
                wm = u.ZP.div.withConfig({
                    componentId: "sc-7c8770db-1"
                })(fm()),
                bm = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-7c8770db-2"
                })(vm());

            function ym(n) {
                var e = n.id,
                    t = n.title,
                    i = n.copy,
                    a = n.bottomCopy,
                    r = n.pricingTextCards,
                    o = n.anchorId,
                    s = n.backgroundGradientColor,
                    d = n.grouped,
                    u = (0, c.useRef)(null);
                return (0, l.jsxs)("div", {
                    id: null === o || void 0 === o ? void 0 : o.anchorId,
                    children: [(t || i) && (0, l.jsx)(bm, {
                        seed: e,
                        colors: s || em.black
                    }), (0, l.jsx)(xm, {
                        ref: u,
                        children: (0, l.jsxs)("div", {
                            className: "content",
                            children: [(t || i) && (0, l.jsxs)("div", {
                                className: "header",
                                children: [t && (0, l.jsx)("div", {
                                    className: "title",
                                    children: (0, l.jsx)(Hr, {
                                        size: 2,
                                        align: "alternating",
                                        children: t
                                    })
                                }), i && (0, l.jsx)("div", {
                                    className: "body",
                                    children: (0, l.jsx)(Ta, {
                                        text: i
                                    })
                                })]
                            }), (0, l.jsx)(wm, {
                                className: (0, an.Z)([r.length > 2 ? "three-columns" : "two-columns", {
                                    grouped: d
                                }]),
                                children: r.map((function(n) {
                                    return (0, l.jsx)(hm, {
                                        text: n.body,
                                        className: "card"
                                    }, e + n.id)
                                }))
                            }), a && (0, l.jsx)("div", {
                                className: "bottom",
                                children: (0, l.jsx)(Ta, {
                                    text: a
                                })
                            })]
                        })
                    })]
                })
            }

            function jm() {
                var n = (0, d.Z)(["\n  .heading {\n    margin-bottom: 1rem;\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .inline-block {\n    display: inline-block;\n  }\n\n  .data-output {\n    display: block;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    white-space: pre-wrap;\n  }\n"]);
                return jm = function() {
                    return n
                }, n
            }
            var km = u.ZP.div.withConfig({
                componentId: "sc-7c320bfb-0"
            })(jm());

            function Zm(n) {
                return (0, l.jsxs)(km, {
                    children: [(0, l.jsxs)("h2", {
                        className: "heading",
                        children: ["New Strapi component: ", (0, l.jsx)("strong", {
                            children: n.__component
                        })]
                    }), (0, l.jsxs)("div", {
                        children: ["Create a React component for this then add to ", (0, l.jsx)("pre", {
                            className: "inline-block",
                            children: "renderStrapiComponent.tsx"
                        }), "."]
                    }), (0, l.jsx)("p", {
                        children: "The following data is available:"
                    }), (0, l.jsx)("pre", {
                        className: "data-output",
                        children: JSON.stringify(n, null, 2)
                    })]
                })
            }

            function _m() {
                var n = (0, d.Z)(["\n  position: relative;\n  width: 100%;\n  max-width: 150rem;\n  margin: 0 auto;\n  color: var(--color-black);\n  padding ", ";\n\n  @media (max-width: 768px) {\n    max-height: none;\n    padding: 4rem 0 12.6rem 0;\n  }\n\n  .content {\n    position: relative;\n    width: 100%;\n    height: 100%;\n\n    @media (max-width: 768px) {\n      height: auto;\n      width: calc(100% - 4rem);\n      margin-left: 2rem;\n    }\n  }\n\n  .header {\n    display: flex;\n    align-items: flex-end;\n    padding-top: 5rem;\n    // allow to expand beyond the container when the h2 font-size exceeds the clamped maximum\n    margin: 0 min((var(--font-size-h2) - 17rem) * (-83 / 17) * 0.5, 0px) 5rem;\n\n    @media (max-width: 768px) {\n      flex-direction: column;\n      align-items: stretch;\n      padding: 0;\n      margin-bottom: 5rem;\n    }\n\n    & .title {\n      flex: 1 0 auto;\n      padding-top: 50px;\n      max-width: 750px;\n      @media (max-width: 768px) {\n        padding-right: 5rem;\n      }\n\n      h4 {\n        line-height: 1.1;\n      }\n    }\n\n    & .body {\n      left: 5rem;\n      color: var(--color-black);\n      width: 67rem;\n      bottom: -5rem;\n      position: relative;\n\n      @media (max-width: 768px) {\n        left: auto;\n        bottom: auto;\n        margin-top: 5rem;\n        width: 100%;\n      }\n\n      .text-base {\n        font-size: 2.4rem;\n        line-height: 3rem;\n        font-weight: var(--font-weight-normal);\n        letter-spacing: -0.02em;\n        margin: 0;\n\n        @media (max-width: 768px) {\n          font-size: 2rem;\n          font-style: normal;\n          font-weight: 400;\n          line-height: 120%;\n          letter-spacing: -0.04rem;\n        }\n      }\n    }\n  }\n\n  .bottom {\n    margin-top: calc(var(--spacing-lg) * 2);\n\n    img {\n      max-width: 25rem;\n      max-height: 3.2rem;\n      width: auto;\n      height: auto;\n      margin: 1.2rem 0;\n    }\n\n    @media (max-width: 768px) {\n      img {\n        max-width: 18.8rem;\n        max-height: 2.4rem;\n        width: auto;\n        height: auto;\n        margin: 1.4rem 0;\n      }\n\n      .text-base {\n        font-size: 1.6rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 120%;\n        letter-spacing: -0.048rem;\n      }\n    }\n  }\n"]);
                return _m = function() {
                    return n
                }, n
            }

            function Nm() {
                var n = (0, d.Z)(["\n  --gap: 4rem;\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--gap);\n  justify-content: space-between;\n\n  &.two-columns {\n    > div {\n      flex: 1 1 calc(50% - var(--gap));\n    }\n  }\n\n  &.three-columns {\n    > div {\n      flex: 1 1 calc(33.333% - var(--gap));\n    }\n  }\n\n  &.grouped {\n    background-color: var(--color-white);\n    border-radius: 3rem;\n\n    .card {\n      &:after {\n        background-color: var(--color-neutral-80);\n        content: '';\n        display: block;\n        width: 1px;\n        height: calc(100% - 6rem);\n        position: absolute;\n        right: calc((var(--gap) / 2) * -1);\n        top: 3rem;\n      }\n\n      &:last-of-type {\n        &:after {\n          display: none;\n        }\n      }\n    }\n\n    @media (max-width: 768px) {\n      gap: 0;\n\n      .card {\n        &:after {\n          width: 33.333%;\n          height: 1px;\n          position: absolute;\n          right: auto;\n          left: 50%;\n          transform: translateX(-50%);\n          top: auto;\n          bottom: 0;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 768px) {\n    padding: 0;\n\n    &.two-columns,\n    &.three-columns {\n      > div {\n        flex: 0 0 100%;\n      }\n    }\n  }\n"]);
                return Nm = function() {
                    return n
                }, n
            }

            function Cm() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return Cm = function() {
                    return n
                }, n
            }

            function Im() {
                var n = (0, d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 475px;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 18px;\n  padding: 2.5rem;\n\n  img {\n    margin-bottom: 1.5rem;\n  }\n\n  p {\n    font-size: var(--font-size-h6) !important;\n    margin-bottom: 0;\n  }\n\n  @media (max-width: 768px) {\n    max-width: 80%;\n    margin: 0 auto;\n  }\n"]);
                return Im = function() {
                    return n
                }, n
            }
            var Pm = u.ZP.div.withConfig({
                    componentId: "sc-9557251-0"
                })(_m(), (function(n) {
                    return (null === n || void 0 === n ? void 0 : n.title) ? "6rem 0 16rem 0" : "0 0 var(--spacing-xl) 0"
                })),
                Sm = u.ZP.div.withConfig({
                    componentId: "sc-9557251-1"
                })(Nm()),
                zm = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-9557251-2"
                })(Cm());

            function Lm(n) {
                var e = n.id,
                    t = n.title,
                    i = n.copy,
                    a = n.bottomCopy,
                    o = n.cards,
                    d = n.anchorId,
                    u = n.backgroundGradientColor,
                    m = n.grouped,
                    p = (0, c.useRef)(null);
                return (0, l.jsxs)("div", {
                    id: null === d || void 0 === d ? void 0 : d.anchorId,
                    children: [(0, l.jsx)(zm, {
                        seed: e,
                        colors: u || em.black
                    }), (0, l.jsx)(Pm, {
                        ref: p,
                        title: t,
                        children: (0, l.jsxs)("div", {
                            className: "content",
                            children: [(t || i) && (0, l.jsxs)("div", {
                                className: "header",
                                children: [t && (0, l.jsx)("div", {
                                    className: "title",
                                    children: (0, l.jsx)($i, {
                                        size: 4,
                                        children: t
                                    })
                                }), i && (0, l.jsx)("div", {
                                    className: "body",
                                    children: (0, l.jsx)(Ta, {
                                        text: i
                                    })
                                })]
                            }), (0, l.jsx)(Sm, {
                                className: (0, an.Z)([o.length > 2 ? "three-columns" : "two-columns", {
                                    grouped: m
                                }]),
                                children: o.map((function(n) {
                                    return (0, c.createElement)(Mm, (0, s.Z)((0, r.Z)({}, n), {
                                        key: e + n.id
                                    }))
                                }))
                            }), a && (0, l.jsx)("div", {
                                className: "bottom",
                                children: (0, l.jsx)(Ta, {
                                    text: a
                                })
                            })]
                        })
                    })]
                })
            }
            var Mm = function(n) {
                    var e = n.body;
                    return (0, l.jsx)(Rm, {
                        children: (0, l.jsx)(Ta, {
                            text: e,
                            size: "large"
                        })
                    })
                },
                Rm = u.ZP.div.withConfig({
                    componentId: "sc-9557251-3"
                })(Im());

            function Em() {
                var n = (0, d.Z)(["\n  max-width: 450px;\n  margin: 0 auto;\n  margin-bottom: 9rem;\n"]);
                return Em = function() {
                    return n
                }, n
            }

            function Tm() {
                var n = (0, d.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  column-gap: 1.5rem;\n  row-gap: 3.25rem;\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]);
                return Tm = function() {
                    return n
                }, n
            }
            var Om = function(n) {
                    var e = n.heading_section,
                        t = n.column,
                        i = n.anchorId;
                    return (0, l.jsxs)(Ba, {
                        children: [(0, l.jsx)(Bm, {
                            id: null === i || void 0 === i ? void 0 : i.anchorId,
                            children: (0, l.jsx)(Ta, {
                                size: "large",
                                text: null === e || void 0 === e ? void 0 : e.text
                            })
                        }), (0, l.jsx)(Am, {
                            children: null === t || void 0 === t ? void 0 : t.map((function(n) {
                                var e = n.id,
                                    t = n.text,
                                    i = n.link;
                                return (null === i || void 0 === i ? void 0 : i.externalUrl) ? (0, l.jsx)("a", {
                                    href: i.externalUrl,
                                    "aria-label": null === i || void 0 === i ? void 0 : i.text,
                                    children: (0, l.jsx)(Ta, {
                                        text: t
                                    })
                                }, e) : (0, l.jsx)(Ta, {
                                    text: t
                                }, e)
                            }))
                        })]
                    })
                },
                Bm = u.ZP.div.withConfig({
                    componentId: "sc-ce03a150-0"
                })(Em()),
                Am = u.ZP.div.withConfig({
                    componentId: "sc-ce03a150-1"
                })(Tm());

            function Hm() {
                var n = (0, d.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n"]);
                return Hm = function() {
                    return n
                }, n
            }

            function Fm() {
                var n = (0, d.Z)(["\n  display: flex;\n  flex-direction: column;\n"]);
                return Fm = function() {
                    return n
                }, n
            }

            function Um() {
                var n = (0, d.Z)(["\n  display: flex;\n  gap: 20rem;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    gap: 1rem;\n  }\n"]);
                return Um = function() {
                    return n
                }, n
            }
            var Dm = (0, u.ZP)(ho).withConfig({
                    componentId: "sc-e548bacf-0"
                })(Hm()),
                Wm = function(n) {
                    var e = n.id,
                        t = n.title,
                        i = n.body,
                        a = n.slides,
                        r = n.anchorId,
                        o = n.backgroundColor,
                        s = function(n) {
                            "key" in n && "Enter" !== (null === n || void 0 === n ? void 0 : n.key) || "type" in n && "click" !== (null === n || void 0 === n ? void 0 : n.type) || (p(Number(n.currentTarget.dataset.index)), x.current = !0)
                        },
                        d = (0, c.useRef)(null),
                        u = (0, c.useState)(0),
                        m = u[0],
                        p = u[1],
                        h = (0, fr.Z)(d, {}),
                        g = (0, c.useRef)(0),
                        f = (0, c.useRef)(0),
                        v = (0, c.useRef)(0),
                        x = (0, c.useRef)(!1),
                        w = function(n) {
                            p(n), f.current = g.current
                        };
                    return (0, c.useEffect)((function() {
                        f.current = g.current
                    }), [m]), (0, c.useEffect)((function() {
                        (null === h || void 0 === h ? void 0 : h.isIntersecting) && !x.current && w(0)
                    }), [h]), (0, vr.Z)((function(n) {
                        if (x.current) {
                            var e = n - (g.current || 0);
                            v.current = (v.current || 0) + e
                        }
                        var t = n - (v.current || 0);
                        t - (f.current || 0) > 5e3 && w(m === a.length - 1 ? 0 : m + 1);
                        var i = (t - (f.current || 0)) / 5e3;
                        d.current && d.current.style.setProperty("--progress", "".concat(100 * i, "%")), g.current = n
                    })), (0, l.jsxs)(Yu, {
                        id: null === r || void 0 === r ? void 0 : r.anchorId,
                        ref: d,
                        noTopPadding: !0,
                        children: [(0, l.jsx)(Dm, {
                            seed: e,
                            colors: o
                        }), (0, l.jsxs)(qm, {
                            children: [(0, l.jsxs)(Gm, {
                                children: [(0, l.jsxs)("div", {
                                    className: "head commerce-head",
                                    children: [(0, l.jsx)(Hr, {
                                        size: 2,
                                        children: t
                                    }), (0, l.jsx)("div", {
                                        className: "head-sub",
                                        children: i
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "commerce-copy-slider-mobile",
                                    children: (0, l.jsx)("div", {
                                        className: "commerce-copy-slide last",
                                        children: (0, l.jsx)(Ta, {
                                            text: a[m].body
                                        })
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "commerce-side",
                                    children: [(0, l.jsx)("div", {
                                        className: "commerce-side-title",
                                        children: i
                                    }), (0, l.jsx)("div", {
                                        className: (0, an.Z)("commerce-nav", "phone-carousel-nav"),
                                        children: a.map((function(n, e) {
                                            var t = n.id,
                                                i = n.title;
                                            return (0, l.jsxs)("button", {
                                                className: (0, an.Z)("commerce-nav-item", e === m && "active"),
                                                onClick: s,
                                                tabIndex: 0,
                                                onKeyDown: s,
                                                "data-index": e,
                                                children: [(0, l.jsx)("div", {
                                                    className: "commerce-nav-indicator"
                                                }), (0, l.jsxs)("div", {
                                                    className: "commerce-nav-item-number",
                                                    children: [String(e + 1).padStart(2, "0"), "."]
                                                }), (0, l.jsx)("div", {
                                                    className: "commerce-nav-item-title",
                                                    children: i
                                                })]
                                            }, t)
                                        }))
                                    }), (0, l.jsx)("div", {
                                        className: "commerce-nav-item-mobile",
                                        children: a[m].title
                                    }), (0, l.jsx)("div", {
                                        className: "commerce-copy-slider",
                                        children: (0, l.jsx)("div", {
                                            className: "commerce-copy-slide commerce-fine-print",
                                            children: (0, l.jsx)(Ta, {
                                                text: a[m].body
                                            })
                                        })
                                    })]
                                })]
                            }), (0, l.jsx)("div", {
                                className: (0, an.Z)("commerce-slider", "phone-slider"),
                                children: a.map((function(n, e) {
                                    return (0, l.jsx)("div", {
                                        className: (0, an.Z)("commerce-slide", {
                                            active: e === m
                                        }),
                                        children: (0, l.jsx)(ba, {
                                            image: n,
                                            className: (0, an.Z)("slide-img", "phone-screen"),
                                            transparent: !0,
                                            sizes: "(max-width: 768px) 100vw, 720px"
                                        })
                                    }, n.id)
                                }))
                            })]
                        })]
                    })
                },
                Gm = u.ZP.div.withConfig({
                    componentId: "sc-e548bacf-1"
                })(Fm()),
                qm = u.ZP.div.withConfig({
                    componentId: "sc-e548bacf-2"
                })(Um());

            function Km() {
                var n = (0, d.Z)(["\n  font-size: 17rem;\n  line-height: var(--line-height-h2);\n\n  @media (max-width: 768px) {\n    font: var(--font-h2);\n  }\n"]);
                return Km = function() {
                    return n
                }, n
            }
            var Ym = (0, u.ZP)(Hr).withConfig({
                    componentId: "sc-cd5961dd-0"
                })(Km()),
                Vm = function(n) {
                    var e = n.title;
                    return (0, l.jsx)(Ba, {
                        children: (0, l.jsx)(Ym, {
                            size: 1,
                            children: e
                        })
                    })
                };

            function Jm() {
                var n = (0, d.Z)(["\n  --qr-title-padding: 20px;\n  --qr-width: 235px;\n  --qr-height: 80px;\n  --qr-expanded-width: 296px;\n  --qr-expanded-height: 386px;\n  --qr-position-right: 5rem;\n  --qr-position-bottom: 1rem;\n\n  border-radius: 5px;\n  border: 1px solid #fff;\n  background: rgba(255, 255, 255, 0.4);\n  backdrop-filter: blur(10px);\n  cursor: pointer;\n  position: fixed;\n  bottom: var(--qr-position-bottom);\n  right: var(--qr-position-right);\n  z-index: 1000;\n  transition: all var(--animation-duration) var(--animation-timing);\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n\n  &.active {\n    transform: translate(\n      calc(-50vw + var(--qr-expanded-width) / 2 + var(--qr-position-right)),\n      calc(-50vh + var(--qr-expanded-height) / 2 + var(--qr-position-bottom))\n    );\n    transform: translate(\n      calc(-50vw + var(--qr-expanded-width) / 2 + var(--qr-position-right)),\n      calc(-50dvh + var(--qr-expanded-height) / 2 + var(--qr-position-bottom))\n    );\n\n    .qr-code-container {\n      flex-direction: column;\n      padding-left: 0;\n      width: var(--qr-expanded-width);\n      height: var(--qr-expanded-height);\n    }\n\n    .image-wrapper {\n      width: var(--qr-expanded-width);\n    }\n\n    .prompt-title {\n      font: var(--font-label-4);\n      font-size: 24px;\n      letter-spacing: -0.72px;\n      text-align: center;\n    }\n  }\n\n  .qr-code-container {\n    display: flex;\n    align-items: center;\n    width: var(--qr-width);\n    height: var(--qr-height);\n    transition: all var(--animation-duration) var(--animation-timing);\n  }\n\n  .image-wrapper {\n    background-color: var(--color-white);\n    border-radius: 5px;\n    width: 80px;\n    flex-shrink: 0;\n  }\n\n  .prompt-title {\n    font: var(--font-label-0);\n    font-size: 14px;\n    letter-spacing: -0.28px;\n    text-align: right;\n    margin-bottom: 0;\n    padding: var(--qr-title-padding);\n  }\n\n  .image {\n    border-radius: 5px;\n    width: 100%;\n  }\n"]);
                return Jm = function() {
                    return n
                }, n
            }

            function $m(n) {
                var e = n.promptTitle,
                    t = n.image,
                    i = (0, c.useState)(!1),
                    a = i[0],
                    r = i[1],
                    o = (0, c.useRef)(null);
                return (0, Zt.Z)(o, (function() {
                    return r(!1)
                })), (0, l.jsx)(Xm, {
                    ref: o,
                    onClick: function(n) {
                        return function(n) {
                            n.preventDefault(), r(!0)
                        }(n)
                    },
                    className: a ? "active" : "",
                    children: (0, l.jsxs)("article", {
                        className: "qr-code-container",
                        children: [(0, l.jsx)("h5", {
                            className: "prompt-title",
                            children: e
                        }), (0, l.jsx)("div", {
                            className: "image-wrapper",
                            children: (0, l.jsx)(ba, {
                                image: t,
                                className: "image",
                                sizes: "296px"
                            })
                        })]
                    })
                })
            }
            var Xm = u.ZP.a.withConfig({
                componentId: "sc-f17107e5-0"
            })(Jm());

            function Qm(n) {
                switch (n.__component) {
                    case "creators.creator-hero":
                    case "creators.creator-carousel":
                    case "homepage.home-hero":
                    case "homepage.large-quote-and-title":
                    case "features.features-hero":
                    case "marketing.get-started":
                        return w.dark;
                    default:
                        return w.light
                }
            }

            function np() {
                var n = (0, d.Z)(["\n  width: 100%;\n  position: relative;\n\n  .container-inner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    font-size: var(--font-size-body);\n  }\n"]);
                return np = function() {
                    return n
                }, n
            }
            var ep = u.ZP.div.withConfig({
                componentId: "sc-fc3e0d65-0"
            })(np());

            function tp(n) {
                var e = n.children,
                    t = n.className,
                    i = n.component;
                return (0, l.jsx)(ep, {
                    className: (0, an.Z)(t),
                    "data-theme": Qm(i),
                    children: (0, l.jsx)("div", {
                        className: "container-inner",
                        children: e
                    })
                })
            }

            function ip(n) {
                return n.map((function(n) {
                    var e = function(n) {
                        var e = n.__component,
                            t = (0, b.Z)(n, ["__component"]);
                        switch (e) {
                            case "articles.related-articles":
                                return (0, l.jsx)(Pc, (0, r.Z)({}, t));
                            case "articles.social-share-links":
                                return (0, l.jsx)(zr, (0, r.Z)({}, t));
                            case "utils.media-with-meta":
                                return (0, l.jsx)(yr, (0, r.Z)({}, t));
                            case "utils.title-block":
                                return (0, l.jsx)(Vm, (0, r.Z)({}, t));
                            case "articles.promo-tile":
                                return (0, l.jsx)(Zr, (0, r.Z)({}, t));
                            case "articles.title-and-blurb":
                                return (0, l.jsx)(Ur, (0, r.Z)({}, t));
                            case "creators.creator-hero":
                                return (0, l.jsx)(gl, (0, r.Z)({}, t));
                            case "creators.creator-carousel":
                                return (0, l.jsx)(ll, (0, r.Z)({}, t));
                            case "creators.title-and-logo-lockup":
                                return (0, l.jsx)(jl, (0, r.Z)({}, t));
                            case "articles.one-column-text":
                                return (0, l.jsx)(Fa, (0, r.Z)({}, t));
                            case "articles.two-column-text":
                                return (0, l.jsx)(qr, (0, r.Z)({}, t));
                            case "articles.three-column-text":
                                return (0, l.jsx)(Er, (0, r.Z)({}, t));
                            case "articles.four-column-section":
                                return (0, l.jsx)(Om, (0, r.Z)({}, t));
                            case "articles.faq":
                                return (0, l.jsx)(Hl, (0, r.Z)({}, t));
                            case "articles.rich-text-cards":
                                return (0, l.jsx)(Lm, (0, r.Z)({}, t));
                            case "utils.call-to-action-button":
                                return (0, l.jsx)(ci, (0, r.Z)({}, t));
                            case "utils.cookie-edit-button":
                                return (0, l.jsx)(Jr, (0, r.Z)({}, t));
                            case "homepage.image-grid-with-title":
                                return (0, l.jsx)(vs, (0, r.Z)({}, t));
                            case "homepage.large-quote-and-title":
                                return (0, l.jsx)(Gc, (0, r.Z)({}, t));
                            case "marketing.get-started":
                                return (0, l.jsx)(Qc, (0, r.Z)({}, t));
                            case "homepage.home-hero":
                                return (0, l.jsx)(uu, (0, r.Z)({}, t));
                            case "marketing.floating-product-ui":
                                return (0, l.jsx)(gd, (0, r.Z)({}, t));
                            case "features.features-hero":
                                return (0, l.jsx)(vc, (0, r.Z)({}, t));
                            case "features.creator-grid":
                                return (0, l.jsx)(dc, (0, r.Z)({}, t));
                            case "features.logo-showcase":
                                return (0, l.jsx)(Zc, (0, r.Z)({}, t));
                            case "features.phone-screen-carousel":
                                return (0, l.jsx)(Wm, (0, r.Z)({}, t));
                            case "integrations.promo-tiles-directory":
                                return (0, l.jsx)(xu, (0, r.Z)({}, t));
                            case "pricing.title-and-rich-text-cards":
                                return (0, l.jsx)(ym, (0, r.Z)({}, t));
                            case "pricing.pricing-plans":
                                return (0, l.jsx)(um, (0, r.Z)({}, t));
                            case "integrations.promo-tiles-carousel":
                                return (0, l.jsx)(gu, (0, r.Z)({}, t));
                            case "pricing.features-carousel":
                                return (0, l.jsx)(nm, (0, r.Z)({}, t));
                            case "pricing.commerce-carousel":
                                return (0, l.jsx)($u, (0, r.Z)({}, t));
                            case "policy.policy-section-container":
                                return (0, l.jsx)(Uu, (0, r.Z)({}, t));
                            case "policy.policy-cards":
                                return (0, l.jsx)(Nu, (0, r.Z)({}, t));
                            case "error.error":
                                return (0, l.jsx)(zl, (0, r.Z)({}, t))
                        }
                        return (0, l.jsx)(Zm, (0, r.Z)({}, n))
                    }(n);
                    if (e) {
                        var t = "".concat(n.__component, "-").concat(n.id);
                        return (0, l.jsx)(tp, {
                            className: t,
                            component: n,
                            children: e
                        }, t)
                    }
                    return null
                })).filter(Boolean)
            }

            function ap(n) {
                var e = n.page;
                (0, _.Z)().next.state.components = e.Components.map((function(n) {
                    return {
                        type: n.__component
                    }
                }));
                var t = k().siteSettings,
                    i = null === t || void 0 === t ? void 0 : t.QRCode;
                return (0, l.jsxs)(l.Fragment, {
                    children: [ip(e.Components), i && (0, l.jsx)($m, (0, r.Z)({}, i))]
                })
            }
            var rp = t(7891);

            function op(n, e) {
                return e === rp.v.Pages && function(n) {
                    if (!n) return !1;
                    switch (n.__component) {
                        case "creators.creator-hero":
                        case "homepage.home-hero":
                        case "features.features-hero":
                        case "marketing.get-started":
                        case "homepage.image-grid-with-title":
                        case "homepage.large-quote-and-title":
                        case "marketing.floating-product-ui":
                        case "features.creator-grid":
                        case "pricing.title-and-rich-text-cards":
                            return !0;
                        default:
                            return !1
                    }
                }(n.Components[0])
            }
            var lp = t(9008),
                cp = t.n(lp);

            function sp(n) {
                var e, t, i, a, o, c, s, d, u, m, p = n.page,
                    h = n.alternates,
                    g = void 0 === h ? [] : h,
                    f = k().siteSettings,
                    v = (null === (e = p.metadata) || void 0 === e ? void 0 : e.openGraphType) || f.defaultOpenGraphType,
                    x = (null === (t = p.metadata) || void 0 === t || null === (i = t.openGraphImage) || void 0 === i ? void 0 : i.data) || (null === (a = f.defaultOpenGraphImage) || void 0 === a ? void 0 : a.data),
                    w = (null === (o = p.metadata) || void 0 === o ? void 0 : o.twitterCardType) || f.defaultTwitterCardType,
                    b = (null === (c = p.metadata) || void 0 === c ? void 0 : c.twitterCreator) || f.defaultTwitterCreator;
                return (0, l.jsxs)(cp(), {
                    children: [(0, l.jsx)("title", {
                        children: "".concat((null === (s = p.metadata) || void 0 === s ? void 0 : s.menuTitle) || p.Title, " \u2014 ").concat(f.siteTitle)
                    }), (0, l.jsx)("meta", {
                        property: "og:url",
                        content: "https://patreon.com/"
                    }), (0, l.jsx)("meta", {
                        property: "og:site_name",
                        content: "Patreon"
                    }), g.map((function(n) {
                        return (0, l.jsx)("link", (0, r.Z)({
                            rel: "alternate"
                        }, n), n.hrefLang)
                    })), (null === (d = p.metadata) || void 0 === d ? void 0 : d.metaDescription) && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("meta", {
                            name: "description",
                            content: null === (u = p.metadata) || void 0 === u ? void 0 : u.metaDescription
                        }), (0, l.jsx)("meta", {
                            property: "og:description",
                            content: null === (m = p.metadata) || void 0 === m ? void 0 : m.metaDescription
                        })]
                    }), v && (0, l.jsx)("meta", {
                        property: "og:type",
                        content: v
                    }), x && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("meta", {
                            property: "og:image",
                            content: F(x.attributes)
                        }), (0, l.jsx)("meta", {
                            property: "og:image:width",
                            content: "".concat(x.attributes.width)
                        }), (0, l.jsx)("meta", {
                            property: "og:image:height",
                            content: "".concat(x.attributes.height)
                        })]
                    }), w && (0, l.jsx)("meta", {
                        name: "twitter:card",
                        content: w
                    }), b && (0, l.jsx)("meta", {
                        name: "twitter:creator",
                        content: b
                    })]
                })
            }
            var dp = t(4811),
                up = "patreon_locale_code";

            function mp(n, e) {
                if (n && e) return (0, dp.N)(n, e)
            }

            function pp() {
                var n = (0, An.useRouter)(),
                    e = n.pathname,
                    t = n.asPath,
                    i = n.query;
                (0, c.useEffect)((function() {
                    var e = function(n) {
                            var e, t, i, a = null === window || void 0 === window || null === (e = window.navigator) || void 0 === e ? void 0 : e.languages;
                            if (t = a ? a.join(",") : null === window || void 0 === window || null === (i = window.navigator) || void 0 === i ? void 0 : i.language) return mp(t, n)
                        }(Gn),
                        i = function(n) {
                            var e = q.Z.get(up);
                            if (!e) try {
                                var t;
                                e = null !== (t = window.localStorage.getItem(up)) && void 0 !== t ? t : void 0
                            } catch (i) {}
                            return e || (e = window.patreon_locale_code), e && (e = mp(e, n)), e
                        }(Gn),
                        a = i || e || qn;
                    Vn(t) !== a && n.replace(Jn(n.asPath, a))
                }), [t, e, i, n])
            }
            var hp = t(6273),
                gp = t(7459),
                fp = t(6316);

            function vp(n) {
                (0, c.useEffect)((function() {
                    var e;
                    (null === n || void 0 === n ? void 0 : n.genericPageDetails) && (e = {
                        generic_page_details: null === n || void 0 === n ? void 0 : n.genericPageDetails
                    }, Ae.y.logTypedEvent("Marketing Page : Generic Page Impression", e))
                }), [null === n || void 0 === n ? void 0 : n.genericPageDetails])
            }

            function xp() {
                var n = (0, d.Z)(["\n  min-height: 100dvh;\n  outline: none;\n  ", "\n"]);
                return xp = function() {
                    return n
                }, n
            }
            var wp = u.ZP.main.withConfig({
                componentId: "sc-a01fefb2-0"
            })(xp(), (function(n) {
                return !n.$hasFullBleedHero && Ai
            }));

            function bp(n) {
                var e = n.page,
                    t = n.pageType,
                    i = n.children,
                    a = P().megaMenuHasTrappedFocus;
                return (0, l.jsx)(wp, {
                    id: "main-content",
                    $hasFullBleedHero: op(e, t),
                    inert: a ? "" : void 0,
                    tabIndex: -1,
                    children: i
                })
            }

            function yp(n) {
                var e, t = n.content,
                    i = n.localizations,
                    a = n.locales;
                vp(null === t || void 0 === t || null === (e = t.page) || void 0 === e ? void 0 : e.metadata), pp();
                var o = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = (0, An.useRouter)();
                    return (0, Fe.Nu)(n).map((function(n) {
                        var t = (0, lt.Z)(n, 2),
                            i = t[0],
                            a = t[1],
                            r = {
                                pathname: e.pathname,
                                query: {
                                    slug: i.params.slug
                                }
                            },
                            o = (0, lt.Z)((0, hp.resolveHref)(e, r, !0), 2)[1],
                            l = (0, Fe.nJ)(i.locale);
                        return {
                            hrefLang: a,
                            href: "".concat("https://www.patreon.com").concat((0, fp.removeTrailingSlash)((0, gp.addLocale)(o, l, e.defaultLocale)))
                        }
                    }))
                }(i);
                if (!(null === t || void 0 === t ? void 0 : t.page)) return null;
                var c, d = t.page,
                    u = t.pageType,
                    m = t.header,
                    p = t.footer,
                    h = t.globals,
                    g = (0, _.Z)().next.state;
                switch (g.slug = d.Slug, g.locale = d.locale, u) {
                    case rp.v.Integrations:
                        c = (0, l.jsx)(hr, {
                            page: d
                        });
                        break;
                    case rp.v.Pages:
                        c = (0, l.jsx)(ap, {
                            page: d
                        })
                }
                return (0, l.jsxs)(j, (0, s.Z)((0, r.Z)({}, h), {
                    children: [(0, l.jsx)(sp, {
                        page: d,
                        alternates: o
                    }), (0, l.jsx)(Hi, (0, r.Z)({}, m)), (0, l.jsx)(bp, {
                        page: d,
                        pageType: u,
                        children: c
                    }), (0, l.jsx)(et, {
                        footer: p,
                        localizations: i,
                        locales: a
                    })]
                }))
            }
            var jp = t(2689),
                kp = t(5581),
                Zp = ["patreon.com", "www.patreon.com", "staging.patreon.com"];

            function _p(n, e) {
                var t = function(n) {
                    !/^(?:\w+:)?\/\//.test(n) && /^[^./]+\.[^./]/.test(n) && (n = "//".concat(n));
                    try {
                        var e = new URL(n, "https://patreon.com");
                        if (Zp.includes(e.host)) return e.pathname
                    } catch (t) {}
                }(e);
                return t && n[t] || null
            }

            function Np(n, e) {
                if (Array.isArray(n)) n.forEach((function(n) {
                    Np(n, e)
                }));
                else if (n && "object" === typeof n) {
                    var t = n,
                        i = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var o, l = Object.entries(t)[Symbol.iterator](); !(i = (o = l.next()).done); i = !0) {
                            var c = (0, lt.Z)(o.value, 2),
                                s = c[0],
                                d = c[1];
                            if (("externalUrl" === s || "external_url" === s) && "string" === typeof d) {
                                var u, m, p = (null === (u = t.page) || void 0 === u || null === (m = u.data) || void 0 === m ? void 0 : m.attributes) || t.page;
                                if (!(null === p || void 0 === p ? void 0 : p.Slug)) {
                                    var h = _p(e, d);
                                    h && (t.page = h)
                                }
                                t.links && Np(t.links, e);
                                break
                            }
                            d && "object" === typeof d && Np(d, e)
                        }
                    } catch (g) {
                        a = !0, r = g
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                }
            }

            function Cp(n, e, t) {
                var i = {};
                t.forEach((function(n) {
                    var t = n.attributes;
                    t.locale === e && (i[[""].concat((0, Wn.Z)((0, Ue.Z)(t))).join("/")] = t)
                })), Np(n, i)
            }

            function Ip(n, e) {
                if ((a = n) && "object" === typeof a && "text" in a && "string" === typeof a.text && a.text.startsWith("{") && a.text.endsWith("}")) e(n);
                else if (n) {
                    if (Array.isArray(n)) n.forEach((function(n) {
                        Ip(n, e)
                    }));
                    else if ("object" === typeof n) {
                        var t = n;
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && Ip(t[i], e)
                    }
                }
                var a
            }

            function Pp() {
                return Sp.apply(this, arguments)
            }

            function Sp() {
                return Sp = (0, a.Z)((function() {
                    var n, e, t, i, l, c, d, u, m, p, h, g = arguments;
                    return (0, o.__generator)(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                return n = g.length > 0 && void 0 !== g[0] ? g[0] : [], e = g.length > 1 ? g[1] : void 0, t = ["paragraph", "EditorjsButton"], i = function() {
                                    var n = (0, a.Z)((function(n) {
                                        return (0, o.__generator)(this, (function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, (0, kp.Y)(rp.v.Pages, {
                                                        filters: {
                                                            id: {
                                                                $in: n
                                                            }
                                                        },
                                                        fields: ["Slug", "Title", "locale"],
                                                        populate: (0, r.Z)({
                                                            localizations: (0, r.Z)({
                                                                fields: ["Slug", "Title", "locale"]
                                                            }, {
                                                                Parent: {
                                                                    populate: {
                                                                        page: {
                                                                            populate: {
                                                                                Slug: !0,
                                                                                Parent: {
                                                                                    populate: {
                                                                                        page: {
                                                                                            populate: ["Slug"]
                                                                                        },
                                                                                        url_segment: {
                                                                                            populate: ["Slug"]
                                                                                        },
                                                                                        urlPrefixFallback: !0
                                                                                    }
                                                                                }
                                                                            }
                                                                        },
                                                                        url_segment: {
                                                                            populate: {
                                                                                Slug: !0,
                                                                                Parent: {
                                                                                    populate: {
                                                                                        page: {
                                                                                            populate: ["Slug"]
                                                                                        },
                                                                                        url_segment: {
                                                                                            populate: ["Slug"]
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            })
                                                        }, {
                                                            Parent: {
                                                                populate: {
                                                                    page: {
                                                                        populate: {
                                                                            Slug: !0,
                                                                            Parent: {
                                                                                populate: {
                                                                                    page: {
                                                                                        populate: ["Slug"]
                                                                                    },
                                                                                    url_segment: {
                                                                                        populate: ["Slug"]
                                                                                    },
                                                                                    urlPrefixFallback: !0
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    url_segment: {
                                                                        populate: {
                                                                            Slug: !0,
                                                                            Parent: {
                                                                                populate: {
                                                                                    page: {
                                                                                        populate: ["Slug"]
                                                                                    },
                                                                                    url_segment: {
                                                                                        populate: ["Slug"]
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        })
                                                    })];
                                                case 1:
                                                    return [2, e.sent()]
                                            }
                                        }))
                                    }));
                                    return function(e) {
                                        return n.apply(this, arguments)
                                    }
                                }(), l = function(n) {
                                    var e = [];
                                    return Ip(n, (function(n) {
                                        JSON.parse(n.text).blocks.forEach((function(n) {
                                            if (t.includes(n.type) && n.data.text)
                                                if ("paragraph" === n.type) {
                                                    var i = Fi.zD(n.data.text),
                                                        a = i("a[data-id]");
                                                    e = (0, Wn.Z)(e).concat((0, Wn.Z)(a.map((function(n, e) {
                                                        var t = i(e).attr("data-id");
                                                        return "string" === typeof t ? parseInt(t, 10) : t
                                                    }))))
                                                } else "EditorjsButton" === n.type && n.data.id && e.push(+n.data.id)
                                        }))
                                    })), (0, Wn.Z)(new Set(e))
                                }, c = function(n, t) {
                                    var i = Fi.zD(n),
                                        a = i("a[data-id]");
                                    return a.each((function(n, r) {
                                        var o, l, c, s = i(r).attr("data-id");
                                        if ("string" === typeof s) {
                                            var d = parseInt(s, 10),
                                                u = t.find((function(n) {
                                                    return n.id === d
                                                }));
                                            if (u) {
                                                var m = (null === (o = u.attributes.localizations) || void 0 === o || null === (l = o.data) || void 0 === l || null === (c = l.find) || void 0 === c ? void 0 : c.call(l, (function(n) {
                                                    return n.attributes.locale === e
                                                }))) || u;
                                                a.eq(n).attr("data-slug", m.attributes.Slug).attr("data-locale", m.attributes.locale).attr("data-title", m.attributes.Title).attr("data-page-data", JSON.stringify(m.attributes))
                                            }
                                        }
                                    })), i("body").html() || void 0
                                }, d = function(n, t) {
                                    if (n.id) {
                                        n.id = +n.id;
                                        var i = t.find((function(e) {
                                            return e.id === n.id
                                        }));
                                        if (i) {
                                            var a, r, o, l = (null === (a = i.attributes.localizations) || void 0 === a || null === (r = a.data) || void 0 === r || null === (o = r.find) || void 0 === o ? void 0 : o.call(r, (function(n) {
                                                return n.attributes.locale === e
                                            }))) || i;
                                            n.slug = l.attributes.Slug, n.locale = l.attributes.locale, n.title = l.attributes.Title, n.pageData = l.attributes
                                        }
                                    }
                                    return n
                                }, u = function(n, e) {
                                    return t.includes(n.type) && n.data.text && ("paragraph" === n.type ? n.data.text = c(n.data.text, e) : "EditorjsButton" === n.type && (n.data = d(n.data, e))), n
                                }, m = function(n, e) {
                                    Ip(n, (function(n) {
                                        var t = JSON.parse(n.text);
                                        if (t.blocks) {
                                            var i = t.blocks.map((function(n) {
                                                return u(n, e)
                                            }));
                                            n.text = JSON.stringify((0, s.Z)((0, r.Z)({}, t), {
                                                blocks: i
                                            }))
                                        }
                                    }))
                                }, (p = l(n)).length ? [4, i(p)] : [3, 2];
                            case 1:
                                h = f.sent(), m(n, h), f.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                })), Sp.apply(this, arguments)
            }

            function zp(n) {
                if (null === n || void 0 === n ? void 0 : n.page)
                    for (var e = 0, t = [
                            ["page", "data", "attributes"],
                            ["page"]
                        ]; e < t.length; e++) {
                        var i = t[e],
                            a = (0, qt.get)(n, i);
                        if (a) {
                            var r = a.Parent;
                            a = (0, qt.pick)(a, "id", "Slug", "Title", "locale", "metadata", "Parent"), (0, qt.set)(n, i, a);
                            n: for (; r;) {
                                for (var o = 0, l = [
                                        ["page", "data", "attributes"],
                                        ["url_segment", "data", "attributes"]
                                    ]; o < l.length; o++) {
                                    var c = l[o],
                                        s = (0, qt.get)(r, c);
                                    if (s) {
                                        (0, qt.set)(r, c, {
                                            Slug: s.Slug,
                                            Parent: s.Parent || null
                                        }), r = s.Parent;
                                        continue n
                                    }
                                }
                                break
                            }
                            break
                        }
                    }
            }

            function Lp(n) {
                n.attributes = (0, qt.pick)(n.attributes, "id", "locale", "localizations", "Slug", "Title", "shortDescription", "shouldLinkExternally", "Meta"), n.attributes.Meta = (0, qt.pick)(n.attributes.Meta, "featureImage", "siteLink")
            }

            function Mp(n) {
                var e = !0,
                    t = !1,
                    i = void 0;
                try {
                    for (var a, r = n[Symbol.iterator](); !(e = (a = r.next()).done); e = !0) {
                        var o = a.value,
                            l = o.__component,
                            c = (0, b.Z)(o, ["__component"]);
                        switch (l) {
                            case "articles.related-articles":
                                var s;
                                null === (s = c.articles) || void 0 === s || s.forEach((function(n) {
                                    zp(n.link)
                                }));
                                break;
                            case "homepage.home-hero":
                                var d;
                                null === (d = c.Items) || void 0 === d || d.forEach((function(n) {
                                    zp(n.Creator)
                                }));
                                break;
                            case "creators.creator-carousel":
                                var u;
                                null === (u = c.slides) || void 0 === u || u.forEach((function(n) {
                                    zp(n.link)
                                }));
                                break;
                            case "features.creator-grid":
                                var m;
                                null === (m = c.creators) || void 0 === m || m.forEach((function(n) {
                                    zp(n.creator)
                                }));
                                break;
                            case "integrations.promo-tiles-carousel":
                                var p, h;
                                null === (p = c.integrations) || void 0 === p || null === (h = p.data) || void 0 === h || h.forEach((function(n) {
                                    Lp(n)
                                }))
                        }
                    }
                } catch (g) {
                    t = !0, i = g
                } finally {
                    try {
                        e || null == r.return || r.return()
                    } finally {
                        if (t) throw i
                    }
                }
            }

            function Rp(n) {
                return "integrations.promo-tiles-directory" === n.__component || "integrations.promo-tiles-carousel" === n.__component
            }

            function Ep(n, e) {
                return e === rp.v.Pages && n.attributes.Components.some(Rp)
            }

            function Tp() {
                return Op.apply(this, arguments)
            }

            function Op() {
                return Op = (0, a.Z)((function() {
                    var n, e, t = arguments;
                    return (0, o.__generator)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return n = t.length > 0 && void 0 !== t[0] ? t[0] : [], e = t.length > 1 ? t[1] : void 0, Bp(n), [4, Ap(n, e)];
                            case 1:
                                return i.sent(), [2]
                        }
                    }))
                })), Op.apply(this, arguments)
            }

            function Bp() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = n.filter((function(n) {
                        return "integrations.promo-tiles-carousel" === n.__component
                    }));
                e.forEach((function(n) {
                    var e, t = null === (e = n.integrations) || void 0 === e ? void 0 : e.data;
                    t && t.forEach((function(n) {
                        var e, t, i;
                        n.attributes.shouldLinkExternally = !(null === (e = n.attributes) || void 0 === e || null === (t = e.longDescription) || void 0 === t || null === (i = t.content) || void 0 === i ? void 0 : i.text)
                    }))
                }))
            }

            function Ap() {
                return Hp.apply(this, arguments)
            }

            function Hp() {
                return Hp = (0, a.Z)((function() {
                    var n, e, t, i, a, l, c, d = arguments;
                    return (0, o.__generator)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return n = d.length > 0 && void 0 !== d[0] ? d[0] : [], e = d.length > 1 ? d[1] : void 0, (t = n.filter((function(n) {
                                    return "integrations.promo-tiles-directory" === n.__component
                                }))).length ? (i = {
                                    fetchAll: !0,
                                    populate: {
                                        Slug: !0,
                                        Title: !0,
                                        shortDescription: !0,
                                        longDescription: {
                                            populate: "*"
                                        },
                                        Meta: {
                                            populate: {
                                                featureImage: {
                                                    populate: {
                                                        image: "*"
                                                    }
                                                },
                                                siteLink: {
                                                    populate: ["externalUrl", "genericClickDetails", "anchor"]
                                                }
                                            }
                                        }
                                    },
                                    locale: e
                                }, [4, (0, kp.Y)(rp.v.Integrations, i)]) : [3, 2];
                            case 1:
                                a = o.sent(), l = (0, Wn.Z)(new Map(a.map((function(n) {
                                    return [n.id, n]
                                }))).values()), c = l.reduce((function(n, e) {
                                    var t, i = e.id,
                                        a = e.attributes,
                                        o = a.longDescription,
                                        l = (0, b.Z)(a, ["longDescription"]);
                                    return l.shouldLinkExternally = !(null === o || void 0 === o || null === (t = o.content) || void 0 === t ? void 0 : t.text), (0, s.Z)((0, r.Z)({}, n), (0, Ir.Z)({}, i, l))
                                }), {}), t.forEach((function(n) {
                                    n.integrationsById = c
                                })), o.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                })), Hp.apply(this, arguments)
            }

            function Fp(n) {
                return n.attributes.Components.map(Qm)
            }

            function Up(n, e, t, i) {
                return Dp.apply(this, arguments)
            }

            function Dp() {
                return (Dp = (0, a.Z)((function(n, e, t, i) {
                    var a;
                    return (0, o.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, (0, kp.Y)(rp.v.SiteSettings, {
                                    populate: "deep,10",
                                    locale: i
                                })];
                            case 1:
                                return a = r.sent(), t === rp.v.Pages ? n.sectionThemes = Fp(e) : n.sectionThemes = [], n.siteSettings = a.attributes, Kp(n.siteSettings), qp(n.siteSettings, i), [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Wp(n, e) {
                return {
                    id: 0,
                    alternativeText: n,
                    image: {
                        data: {
                            id: 0,
                            attributes: {
                                alternativeText: n,
                                provider: "strapi-provider-upload-aws-s3-plus-cdn-append-only",
                                size: 0,
                                width: 256,
                                height: 76,
                                mime: "image/png",
                                url: e
                            }
                        }
                    }
                }
            }
            var Gp = {
                apple: {
                    black: {
                        "da-DK": "https://c14.patreon.com/apple_app_store_button_da_DK_2e1c65e73f.png",
                        "de-DE": "https://c14.patreon.com/apple_app_store_button_de_DE_60184f511d.png",
                        "en-GB": "https://c14.patreon.com/apple_app_store_button_en_GB_e4c9f143a7.png",
                        "en-US": "https://c14.patreon.com/apple_app_store_button_en_US_38d7cda643.png",
                        "es-419": "https://c14.patreon.com/apple_app_store_button_es_419_e11863ffb9.png",
                        "es-ES": "https://c14.patreon.com/apple_app_store_button_es_ES_71d3265c83.png",
                        "fr-FR": "https://c14.patreon.com/apple_app_store_button_fr_FR_e488e3b8a3.png",
                        "it-IT": "https://c14.patreon.com/apple_app_store_button_it_IT_fbf137fe7d.png",
                        "ja-JP": "https://c14.patreon.com/apple_app_store_button_ja_JP_43bf5edd29.png",
                        "ko-KR": "https://c14.patreon.com/apple_app_store_button_ko_KR_3562f93485.png",
                        "nb-NO": "https://c14.patreon.com/apple_app_store_button_nb_NO_195ab6ed07.png",
                        "nl-NL": "https://c14.patreon.com/apple_app_store_button_nl_NL_eaa07d34c0.png",
                        "pl-PL": "https://c14.patreon.com/apple_app_store_button_pl_PL_8b9b2a0180.png",
                        "pt-BR": "https://c14.patreon.com/apple_app_store_button_pt_BR_30b46e88cd.png",
                        "ru-RU": "https://c14.patreon.com/apple_app_store_button_ru_RU_6cd424c400.png",
                        "sv-SE": "https://c14.patreon.com/apple_app_store_button_sv_SE_85ac88962c.png",
                        "uk-UA": "https://c14.patreon.com/apple_app_store_button_uk_UA_5ca63c36d3.png",
                        "zh-CN": "https://c14.patreon.com/apple_app_store_button_zh_CN_9407411c49.png",
                        "zh-Hant-HK": "https://c14.patreon.com/apple_app_store_button_zh_Hant_HK_60732bf43b.png"
                    },
                    white: {
                        "da-DK": "https://c14.patreon.com/apple_app_store_button_white_da_DK_19ed39f51d.png",
                        "de-DE": "https://c14.patreon.com/apple_app_store_button_white_de_DE_e9abb2294d.png",
                        "en-GB": "https://c14.patreon.com/apple_app_store_button_white_en_GB_9ff8efc2dc.png",
                        "en-US": "https://c14.patreon.com/apple_app_store_button_white_en_US_cc657b8391.png",
                        "es-419": "https://c14.patreon.com/apple_app_store_button_white_es_419_b0ac90aa8e.png",
                        "es-ES": "https://c14.patreon.com/apple_app_store_button_white_es_ES_0215fe96d5.png",
                        "fr-FR": "https://c14.patreon.com/apple_app_store_button_white_fr_FR_7b2db1a867.png",
                        "it-IT": "https://c14.patreon.com/apple_app_store_button_white_it_IT_37018d86a1.png",
                        "ja-JP": "https://c14.patreon.com/apple_app_store_button_white_ja_JP_96cd59240f.png",
                        "ko-KR": "https://c14.patreon.com/apple_app_store_button_white_ko_KR_9ff6b7e8c7.png",
                        "nb-NO": "https://c14.patreon.com/apple_app_store_button_white_nb_NO_5fa670f82b.png",
                        "nl-NL": "https://c14.patreon.com/apple_app_store_button_white_nl_NL_f9f38aade5.png",
                        "pl-PL": "https://c14.patreon.com/apple_app_store_button_white_pl_PL_85a62fa26b.png",
                        "pt-BR": "https://c14.patreon.com/apple_app_store_button_white_pt_BR_2dcb287024.png",
                        "ru-RU": "https://c14.patreon.com/apple_app_store_button_white_ru_RU_7745d4f5ad.png",
                        "sv-SE": "https://c14.patreon.com/apple_app_store_button_white_sv_SE_639fb97988.png",
                        "uk-UA": "https://c14.patreon.com/apple_app_store_button_white_uk_UA_22ed69f72e.png",
                        "zh-CN": "https://c14.patreon.com/apple_app_store_button_white_zh_CN_59abb29f26.png",
                        "zh-Hant-HK": "https://c14.patreon.com/apple_app_store_button_white_zh_Hant_HK_16ae2bb4d3.png"
                    }
                },
                google: {
                    black: {
                        "da-DK": "https://c14.patreon.com/google_app_store_button_da_DK_c0ea217ebd.png",
                        "de-DE": "https://c14.patreon.com/google_app_store_button_de_DE_6a12b8f4e7.png",
                        "en-GB": "https://c14.patreon.com/google_app_store_button_en_GB_8739790ca1.png",
                        "en-US": "https://c14.patreon.com/google_app_store_button_en_US_869401a5e7.png",
                        "es-419": "https://c14.patreon.com/google_app_store_button_es_419_4e793a4ad8.png",
                        "es-ES": "https://c14.patreon.com/google_app_store_button_es_ES_ce42c2e557.png",
                        "fr-FR": "https://c14.patreon.com/google_app_store_button_fr_FR_5b6e5c9154.png",
                        "it-IT": "https://c14.patreon.com/google_app_store_button_it_IT_84a31b5942.png",
                        "ja-JP": "https://c14.patreon.com/google_app_store_button_ja_JP_e6e12adee1.png",
                        "ko-KR": "https://c14.patreon.com/google_app_store_button_ko_KR_9a099e3c29.png",
                        "nb-NO": "https://c14.patreon.com/google_app_store_button_nb_NO_491b1f4f3c.png",
                        "nl-NL": "https://c14.patreon.com/google_app_store_button_nl_NL_873531b5b3.png",
                        "pl-PL": "https://c14.patreon.com/google_app_store_button_pl_PL_188799a51f.png",
                        "pt-BR": "https://c14.patreon.com/google_app_store_button_pt_BR_a1cb398ac1.png",
                        "ru-RU": "https://c14.patreon.com/google_app_store_button_ru_RU_a2738e5abb.png",
                        "sv-SE": "https://c14.patreon.com/google_app_store_button_sv_SE_29a29ee08a.png",
                        "uk-UA": "https://c14.patreon.com/google_app_store_button_uk_UA_d10d6125c4.png",
                        "zh-CN": "https://c14.patreon.com/google_app_store_button_zh_CN_25a6b56d73.png",
                        "zh-Hant-HK": "https://c14.patreon.com/google_app_store_button_zh_Hant_HK_1241335919.png"
                    },
                    white: {
                        "da-DK": "https://c14.patreon.com/google_app_store_button_white_da_DK_b63b37d388.png",
                        "de-DE": "https://c14.patreon.com/google_app_store_button_white_de_DE_d3105c765b.png",
                        "en-GB": "https://c14.patreon.com/google_app_store_button_white_en_GB_422f51bc0b.png",
                        "en-US": "https://c14.patreon.com/google_app_store_button_white_en_US_f4a6014a79.png",
                        "es-419": "https://c14.patreon.com/google_app_store_button_white_es_419_5773b2e68b.png",
                        "es-ES": "https://c14.patreon.com/google_app_store_button_white_es_ES_39463dae26.png",
                        "fr-FR": "https://c14.patreon.com/google_app_store_button_white_fr_FR_60706b8624.png",
                        "it-IT": "https://c14.patreon.com/google_app_store_button_white_it_IT_27db2a6917.png",
                        "ja-JP": "https://c14.patreon.com/google_app_store_button_white_ja_JP_5fafaceed6.png",
                        "ko-KR": "https://c14.patreon.com/google_app_store_button_white_ko_KR_d0dcc0dfc8.png",
                        "nb-NO": "https://c14.patreon.com/google_app_store_button_white_nb_NO_8a04202f60.png",
                        "nl-NL": "https://c14.patreon.com/google_app_store_button_white_nl_NL_1be7677cb5.png",
                        "pl-PL": "https://c14.patreon.com/google_app_store_button_white_pl_PL_dbd990076f.png",
                        "pt-BR": "https://c14.patreon.com/google_app_store_button_white_pt_BR_5fabaed14e.png",
                        "ru-RU": "https://c14.patreon.com/google_app_store_button_white_ru_RU_ceddb41989.png",
                        "sv-SE": "https://c14.patreon.com/google_app_store_button_white_sv_SE_61a98b6e46.png",
                        "uk-UA": "https://c14.patreon.com/google_app_store_button_white_uk_UA_f5d01b76a0.png",
                        "zh-CN": "https://c14.patreon.com/google_app_store_button_white_zh_CN_ee2a0ab2f1.png",
                        "zh-Hant-HK": "https://c14.patreon.com/google_app_store_button_white_zh_Hant_HK_4286f23558.png"
                    }
                }
            };

            function qp(n, e) {
                if (n) {
                    var t = function(n) {
                        return n = (0, Fe.nJ)(n), {
                            id: 0,
                            __component: "utils.app-store-links",
                            appleAppStoreLink: {
                                id: 0,
                                externalUrl: "https://apps.apple.com/us/app/patreon/id1044456188",
                                text: "Download on the App Store"
                            },
                            appleAppStoreBadge: Wp("Download on the App Store", Gp.apple.black[n]),
                            appleAppStoreBadgeLight: Wp("Download on the App Store", Gp.apple.white[n]),
                            googleAppStoreLink: {
                                id: 0,
                                externalUrl: "https://play.google.com/store/apps/details?id=com.patreon.android",
                                text: "Get it on Google Play"
                            },
                            googleAppStoreBadge: Wp("Get it on Google Play", Gp.google.black[n]),
                            googleAppStoreBadgeLight: Wp("Get it on Google Play", Gp.google.white[n])
                        }
                    }(e);
                    if (n.appStoreLinks) {
                        var i = n.appStoreLinks;
                        ["appleAppStoreLink", "googleAppStoreLink"].forEach((function(n) {
                            var e = i[n] = i[n] || t[n];
                            e.externalUrl = e.externalUrl || t[n].externalUrl, e.text = e.text || t[n].text
                        })), ["appleAppStoreBadge", "appleAppStoreBadgeLight", "googleAppStoreBadge", "googleAppStoreBadgeLight"].forEach((function(n) {
                            var e = i[n] = i[n] || t[n];
                            e.alternativeText = e.alternativeText || t[n].alternativeText, e.image = e.image || t[n].image, e.image.data = e.image.data || t[n].image.data, e.image.data.attributes = e.image.data.attributes || t[n].image.data.attributes, e.image.data.attributes.url = e.image.data.attributes.url || t[n].image.data.attributes.url
                        }))
                    } else n.appStoreLinks = t
                }
            }

            function Kp(n) {
                n && (n.skipToContentLabel || (n.skipToContentLabel = "Skip to content"))
            }

            function Yp(n, e, t, i) {
                return Vp.apply(this, arguments)
            }

            function Vp() {
                return (Vp = (0, a.Z)((function(n, e, t, i) {
                    var a;
                    return (0, o.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return t === rp.v.Integrations || Ep(e, t) ? [4, (0, kp.Y)(rp.v.IntegrationSettings, {
                                    populate: "deep,3",
                                    locale: i
                                })] : [3, 2];
                            case 1:
                                a = r.sent(), n.integrationSettings = a.attributes, r.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Jp(n, e, t) {
                return $p.apply(this, arguments)
            }

            function $p() {
                return ($p = (0, a.Z)((function(n, e, t) {
                    var i;
                    return (0, o.__generator)(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return i = {
                                    slugs: (0, Ue.Z)(n.attributes, e),
                                    locale: (0, Fe.nJ)(t)
                                }, [4, Promise.all([Up(i, n, e, t), Yp(i, n, e, t)])];
                            case 1:
                                return a.sent(), [2, i]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Xp(n, e, t, i) {
                return Qp.apply(this, arguments)
            }

            function Qp() {
                return (Qp = (0, a.Z)((function(n, e, t, i) {
                    var a, r;
                    return (0, o.__generator)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return e !== rp.v.Pages ? [3, 2] : (a = n, r = (0, Wn.Z)(a.attributes.Components).concat((0, Wn.Z)(i)), [4, Promise.all([Pp(r, t), Tp(r, t)])]);
                            case 1:
                                o.sent(), Mp(r), o.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function nh(n, e, t) {
                return eh.apply(this, arguments)
            }

            function eh() {
                return (eh = (0, a.Z)((function(n, e, t) {
                    var i, a;
                    return (0, o.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, Jp(n, e, t)];
                            case 1:
                                return i = r.sent(), a = [], i.siteSettings.getStartedCTAModal && a.push(i.siteSettings.getStartedCTAModal), [4, Xp(n, e, t, a)];
                            case 2:
                                return r.sent(), [2, i]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function th() {
                return ih.apply(this, arguments)
            }

            function ih() {
                return (ih = (0, a.Z)((function() {
                    var n, e;
                    return (0, o.__generator)(this, (function(t) {
                        return n = (0, jp.H4)(), e = {
                            fields: ["Slug", "locale"],
                            locale: "all",
                            populate: {
                                Parent: {
                                    populate: {
                                        page: {
                                            populate: {
                                                Slug: !0,
                                                Parent: {
                                                    populate: {
                                                        page: {
                                                            populate: ["Slug"]
                                                        },
                                                        url_segment: {
                                                            populate: ["Slug"]
                                                        },
                                                        urlPrefixFallback: !0
                                                    }
                                                }
                                            }
                                        },
                                        url_segment: {
                                            populate: {
                                                Slug: !0,
                                                Parent: {
                                                    populate: {
                                                        page: {
                                                            populate: ["Slug"]
                                                        },
                                                        url_segment: {
                                                            populate: ["Slug"]
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            fetchAll: !0
                        }, n && (e.publicationState = "preview"), [2, (0, kp.Y)(rp.v.Pages, e)]
                    }))
                }))).apply(this, arguments)
            }

            function ah(n, e, t) {
                return rh.apply(this, arguments)
            }

            function rh() {
                return (rh = (0, a.Z)((function(n, e, t) {
                    var i, a, r, l;
                    return (0, o.__generator)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return e !== rp.v.Integrations ? [3, 1] : (i = [n].concat((0, Wn.Z)(n.attributes.localizations.data)).map((function(n) {
                                    var e = n.attributes;
                                    return {
                                        params: {
                                            slug: ["apps", e.Slug]
                                        },
                                        locale: e.locale
                                    }
                                })), [3, 3]);
                            case 1:
                                return a = {
                                    locale: "all",
                                    populate: {
                                        localizations: {
                                            populate: {
                                                Parent: {
                                                    populate: {
                                                        page: {
                                                            populate: {
                                                                Slug: !0,
                                                                Parent: {
                                                                    populate: {
                                                                        page: {
                                                                            populate: ["Slug"]
                                                                        },
                                                                        url_segment: {
                                                                            populate: ["Slug"]
                                                                        },
                                                                        urlPrefixFallback: !0
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        url_segment: {
                                                            populate: {
                                                                Slug: !0,
                                                                Parent: {
                                                                    populate: {
                                                                        page: {
                                                                            populate: ["Slug"]
                                                                        },
                                                                        url_segment: {
                                                                            populate: ["Slug"]
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    filters: {
                                        id: {
                                            $eq: n.id
                                        }
                                    }
                                }, t && (a.publicationState = "preview"), [4, (0, kp.Y)(e, a)];
                            case 2:
                                (r = o.sent()).length ? (l = r[0], i = [n].concat((0, Wn.Z)(l.attributes.localizations.data)).map((function(n) {
                                    var e = n.attributes;
                                    return {
                                        params: {
                                            slug: (0, Ue.Z)(e)
                                        },
                                        locale: e.locale
                                    }
                                }))) : i = [], o.label = 3;
                            case 3:
                                return i.sort((function(n, e) {
                                    return n.locale.localeCompare(e.locale)
                                })), [2, i]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function oh(n, e) {
                (!n || n.length < 1) && (n = ["home"]);
                var t = {
                    Slug: {
                        $eq: n[n.length - 1]
                    }
                };
                return rp.v.Pages, t
            }

            function lh(n) {
                return ch.apply(this, arguments)
            }

            function ch() {
                return (ch = (0, a.Z)((function(n) {
                    var e, t;
                    return (0, o.__generator)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return e = {
                                    populate: {
                                        page: {
                                            populate: {
                                                Parent: {
                                                    populate: {
                                                        page: {
                                                            populate: {
                                                                Slug: !0,
                                                                Parent: {
                                                                    populate: {
                                                                        page: {
                                                                            populate: ["Slug"]
                                                                        },
                                                                        url_segment: {
                                                                            populate: ["Slug"]
                                                                        },
                                                                        urlPrefixFallback: !0
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        url_segment: {
                                                            populate: {
                                                                Slug: !0,
                                                                Parent: {
                                                                    populate: {
                                                                        page: {
                                                                            populate: ["Slug"]
                                                                        },
                                                                        url_segment: {
                                                                            populate: ["Slug"]
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }, t = {
                                    populate: {
                                        navigationGroups: {
                                            populate: {
                                                linksWithAnchors: {
                                                    populate: (0, s.Z)((0, r.Z)({}, e.populate), {
                                                        anchorLinks: "*",
                                                        links: e
                                                    })
                                                },
                                                titleLink: e
                                            }
                                        },
                                        loginButton: e,
                                        getStartedButton: e,
                                        getStartedMobileButton: e,
                                        searchResultsLink: e,
                                        updatesButton: e
                                    },
                                    locale: n
                                }, [4, (0, kp.Y)(rp.v.Header, t)];
                            case 1:
                                return [2, i.sent().attributes]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function sh(n) {
                return dh.apply(this, arguments)
            }

            function dh() {
                return (dh = (0, a.Z)((function(n) {
                    var e, t;
                    return (0, o.__generator)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return e = {
                                    populate: {
                                        page: {
                                            populate: {
                                                Parent: {
                                                    populate: {
                                                        page: {
                                                            populate: {
                                                                Slug: !0,
                                                                Parent: {
                                                                    populate: {
                                                                        page: {
                                                                            populate: ["Slug"]
                                                                        },
                                                                        url_segment: {
                                                                            populate: ["Slug"]
                                                                        },
                                                                        urlPrefixFallback: !0
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        url_segment: {
                                                            populate: {
                                                                Slug: !0,
                                                                Parent: {
                                                                    populate: {
                                                                        page: {
                                                                            populate: ["Slug"]
                                                                        },
                                                                        url_segment: {
                                                                            populate: ["Slug"]
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }, t = {
                                    populate: {
                                        navigationGroups: {
                                            populate: {
                                                linksWithAnchors: {
                                                    populate: (0, s.Z)((0, r.Z)({}, e.populate), {
                                                        anchorLinks: "*",
                                                        links: e
                                                    })
                                                },
                                                titleLink: e
                                            }
                                        },
                                        socialLinks: {
                                            populate: "*"
                                        }
                                    },
                                    locale: n
                                }, [4, (0, kp.Y)(rp.v.Footer, t)];
                            case 1:
                                return [2, i.sent().attributes]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function uh() {
                return mh.apply(this, arguments)
            }

            function mh() {
                return mh = (0, a.Z)((function() {
                    var n, e, t = arguments;
                    return (0, o.__generator)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return n = t.length > 0 && void 0 !== t[0] ? t[0] : [], [4, (0, kp.Y)(rp.v.Locales)];
                            case 1:
                                return e = i.sent(), [2, n.map((function(n) {
                                    return e.find((function(e) {
                                        return e.code === n
                                    }))
                                })).filter(Boolean).filter((function(n) {
                                    return "en" !== n.code
                                }))]
                        }
                    }))
                })), mh.apply(this, arguments)
            }

            function ph(n) {
                return hh.apply(this, arguments)
            }

            function hh() {
                return hh = (0, a.Z)((function(n) {
                    var e, t, i, a, r, l, c, s, d, u, m, p, h, g, f, v, x, w, b, y, j;
                    return (0, o.__generator)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (a = n.params, r = Yn(null === a || void 0 === a || null === (e = a.slug) || void 0 === e ? void 0 : e[0]) ? null === a || void 0 === a || null === (t = a.slug) || void 0 === t ? void 0 : t[0] : qn, l = (null === a || void 0 === a ? void 0 : a.slug) && Array.isArray(a.slug) ? Yn(null === a || void 0 === a || null === (i = a.slug) || void 0 === i ? void 0 : i[0]) ? a.slug.slice(1) : a.slug : void 0, c = (0, jp.H4)(), s = r && (0, Fe.Jb)(r) || Fe.Dh, d = rp.v.Pages, u = {
                                        locale: s,
                                        populate: ["deep", JSON.stringify({
                                            maxDepth: 10,
                                            terminals: ["api::integration-category.integration-category"]
                                        })].join(",")
                                    }, l) {
                                    if (l.length > 3) return [2, {
                                        notFound: !0
                                    }];
                                    "apps" === l[l.length - 2] && (d = rp.v.Integrations), u.filters = oh(l)
                                }
                                c && (u.publicationState = "preview"), o.label = 1;
                            case 1:
                                return o.trys.push([1, 4, , 5]), [4, Promise.all([(0, kp.Y)(d, u), lh(s), sh(s), uh(Gn), th()])];
                            case 2:
                                return m = lt.Z.apply(void 0, [o.sent(), 5]), p = m[0], h = m[1], g = m[2], f = m[3], v = m[4], (x = p[0]) ? [4, Promise.all([nh(x, d, s), ah(x, d, !!c)])] : [2, {
                                    notFound: !0
                                }];
                            case 3:
                                return w = lt.Z.apply(void 0, [o.sent(), 2]), b = w[0], y = w[1], Cp([x, h, g], s, v), [2, {
                                    props: {
                                        content: {
                                            page: x.attributes,
                                            pageType: d,
                                            globals: b,
                                            header: h,
                                            footer: g
                                        },
                                        localizations: y,
                                        locales: f
                                    }
                                }];
                            case 4:
                                if (j = o.sent(), (0, Wt.Z)(j, kp.D) && 404 === j.status) return [2, {
                                    notFound: !0
                                }];
                                throw j;
                            case 5:
                                return [2]
                        }
                    }))
                })), hh.apply(this, arguments)
            }
            var gh = !0,
                fh = jp.JF ? function(n) {
                    var e = (0, c.useState)(),
                        t = e[0],
                        i = e[1];
                    return (0, c.useEffect)((function() {
                        (0, a.Z)((function() {
                            var e;
                            return (0, o.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, ph(n)];
                                    case 1:
                                        return "props" in (e = t.sent()) && i(e.props), [3, 3];
                                    case 2:
                                        return t.sent(), i(void 0), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))()
                    }), [n]), t ? (0, l.jsx)(yp, (0, r.Z)({}, t)) : (0, l.jsx)(l.Fragment, {})
                } : yp
        },
        8090: function(n) {
            n.exports = {
                listInside: "styles_listInside__HeJgx",
                blockquote: "styles_blockquote__O7R9g",
                code: "styles_code__j_37w",
                embed: "styles_embed__OOlwC",
                img: "styles_img__Q4tZy",
                imgStretched: "styles_imgStretched__AIz90",
                imgBordered: "styles_imgBordered__MJKFw",
                imgBackgrounded: "styles_imgBackgrounded__1fd6O",
                table: "styles_table__knqdQ"
            }
        }
    },
    function(n) {
        n.O(0, [356, 101, 754, 774, 888, 179], (function() {
            return e = 5759, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);
//# sourceMappingURL=[[...slug]]-c6719f6367df44f4.js.map