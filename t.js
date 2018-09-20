!
function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(o.exports, o, o.exports, e),
        o.loaded = !0,
        o.exports
    }
    var n = {};
    return e.m = t,
    e.c = n,
    e.p = "",
    e(0)
} ([function(t, e, n) {
    n(1),
    n(3),
    n(4),
    window.txv = {};
    var i = n(17),
    o = n(18),
    r = n(7),
    a = n(35);
    txv.lazyload = n(36);
    var s = n(38),
    c = n(40);
    n(51);
    var l = n(54);
    n(55);
    txv.nav = n(56);
    var u = n(74),
    d = n(52),
    f = n(50);
    txv.onview = n(19),
    txv.ua = n(14),
    txv.btnTj = s.btnTj,
    txv.cookie = n(6),
    txv.Message = n(57),
    txv.EventList = n(58),
    txv.vip = u,
    txv.util = n(15),
    txv.clipboard = n(93),
    txv.login = n(5),
    txv.log = n(111),
    txv.searchbox = n(112),
    txv.searchboxV2 = n(119),
    txv.report = n(12),
    txv.lazyreport = n(9),
    txv.Boss = c,
    txv.client = n(91),
    n(127).init(),
    txv.tj2 = {
        pv: r.pv,
        btnTj: s.btnTj,
        virtualpv: a.pv,
        getPtag: s.getPtag,
        getQtag: s.getQtag
    },
    txv.login.init(),
    txv.login.addReadyCallback(function() {
        u.getVipInfo()
    });
    var p = !1;
    txv.common = {
        initPage: function(t) {
            if (!p) {
                p = !0,
                txv.lazyload.init(["img"], null, t && t.lazyload),
                $("#searchForm").size() ? txv.searchboxV2.init() : txv.searchbox.initHeadSearch();
                try {
                    if ("undefined" == typeof t && /^http[s]?:\/\/v\.qq\.com\/u\//.test(location.href)) {
                        t = {
                            boss: {
                                app: "",
                                page: ""
                            }
                        };
                        var e = location.href,
                        n = /^http[s]?\:\/\/v\.qq\.com\/u\/([a-zA-Z0-9\_]*)\.*\/*[html|htm|*]*/,
                        r = e.match(n);
                        r && r.length >= 2 && (t.boss.page = r[1], t.boss.app = "ucenter")
                    }
                } catch(a) {}
                s.init(t),
                c.init(t);
                try {
                    l.init()
                } catch(a) {
                    window.console && "function" == typeof window.console.log ? console.log(a) : ""
                }
                setTimeout(function() {
                    function t() {
                        window.Webtips && window.Webtips({
                            from: "core"
                        })
                    }
                    function e() {
                        var t = window.ClientDetection;
                        if (i.create && t) {
                            var e = i.create().setApp("vdetection"),
                            n = t.embed(),
                            r = t.strategy();
                            n && (e.stat("isembed", r), o.forEach(t.strategies(),
                            function(t) {
                                e.stat("strategy", r, t)
                            }))
                        }
                    }
                    window.Webtips ? t() : d("//vm.gtimg.cn/tencentvideo/script/webtips/comp/webtips.min.js?v=3",
                    function() {
                        t()
                    }),
                    /^\/x\/cover\//i.test(location.pathname) && (window.ClientDetection ? e() : d("//vm.gtimg.cn/tencentvideo/script/client-detection/detection.min.js", e))
                },
                3e3),
                /pcsharecode=([0-9a-zA-Z]+)/.test(location.href) && d("//vm.gtimg.cn/tencentvideo/script/pcshare/share_float.js");
                var u = $("body"),
                h = "onview-hover",
                g = "onview-click";
                u.delegate("[" + h + "]", "mouseenter", f(h)),
                u.delegate("[" + g + "]", "click", f(g))
            }
        }
    },
    r.keyPrefix = "txv.",
    a.virtualPath = "/txv/"
},
function(t, e, n) {
    var i, o; !
    function(r, a) {
        function s(t) {
            var e = t.length,
            n = pt.type(t);
            return ! pt.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)))
        }
        function c(t) {
            var e = St[t] = {};
            return pt.each(t.match(gt) || [],
            function(t, n) {
                e[n] = !0
            }),
            e
        }
        function l(t, e, n, i) {
            if (pt.acceptData(t)) {
                var o, r, s = pt.expando,
                c = "string" == typeof e,
                l = t.nodeType,
                u = l ? pt.cache: t,
                d = l ? t[s] : t[s] && s;
                if (d && u[d] && (i || u[d].data) || !c || n !== a) return d || (l ? t[s] = d = ot.pop() || pt.guid++:d = s),
                u[d] || (u[d] = {},
                l || (u[d].toJSON = pt.noop)),
                ("object" == typeof e || "function" == typeof e) && (i ? u[d] = pt.extend(u[d], e) : u[d].data = pt.extend(u[d].data, e)),
                o = u[d],
                i || (o.data || (o.data = {}), o = o.data),
                n !== a && (o[pt.camelCase(e)] = n),
                c ? (r = o[e], null == r && (r = o[pt.camelCase(e)])) : r = o,
                r
            }
        }
        function u(t, e, n) {
            if (pt.acceptData(t)) {
                var i, o, r, a = t.nodeType,
                s = a ? pt.cache: t,
                c = a ? t[pt.expando] : pt.expando;
                if (s[c]) {
                    if (e && (r = n ? s[c] : s[c].data)) {
                        pt.isArray(e) ? e = e.concat(pt.map(e, pt.camelCase)) : e in r ? e = [e] : (e = pt.camelCase(e), e = e in r ? [e] : e.split(" "));
                        for (i = 0, o = e.length; o > i; i++) delete r[e[i]];
                        if (! (n ? f: pt.isEmptyObject)(r)) return
                    } (n || (delete s[c].data, f(s[c]))) && (a ? pt.cleanData([t], !0) : pt.support.deleteExpando || s != s.window ? delete s[c] : s[c] = null)
                }
            }
        }
        function d(t, e, n) {
            if (n === a && 1 === t.nodeType) {
                var i = "data-" + e.replace(Lt, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: $t.test(n) ? pt.parseJSON(n) : n)
                    } catch(o) {}
                    pt.data(t, e, n)
                } else n = a
            }
            return n
        }
        function f(t) {
            var e;
            for (e in t) if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e) return ! 1;
            return ! 0
        }
        function p() {
            return ! 0
        }
        function h() {
            return ! 1
        }
        function g(t, e) {
            do t = t[e];
            while (t && 1 !== t.nodeType);
            return t
        }
        function v(t, e, n) {
            if (e = e || 0, pt.isFunction(e)) return pt.grep(t,
            function(t, i) {
                var o = !!e.call(t, i, t);
                return o === n
            });
            if (e.nodeType) return pt.grep(t,
            function(t) {
                return t === e === n
            });
            if ("string" == typeof e) {
                var i = pt.grep(t,
                function(t) {
                    return 1 === t.nodeType
                });
                if (Gt.test(e)) return pt.filter(e, i, !n);
                e = pt.filter(e, i)
            }
            return pt.grep(t,
            function(t) {
                return pt.inArray(t, e) >= 0 === n
            })
        }
        function m(t) {
            var e = Yt.split("|"),
            n = t.createDocumentFragment();
            if (n.createElement) for (; e.length;) n.createElement(e.pop());
            return n
        }
        function _(t, e) {
            return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e))
        }
        function y(t) {
            var e = t.getAttributeNode("type");
            return t.type = (e && e.specified) + "/" + t.type,
            t
        }
        function x(t) {
            var e = le.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"),
            t
        }
        function b(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) pt._data(n, "globalEval", !e || pt._data(e[i], "globalEval"))
        }
        function w(t, e) {
            if (1 === e.nodeType && pt.hasData(t)) {
                var n, i, o, r = pt._data(t),
                a = pt._data(e, r),
                s = r.events;
                if (s) {
                    delete a.handle,
                    a.events = {};
                    for (n in s) for (i = 0, o = s[n].length; o > i; i++) pt.event.add(e, n, s[n][i])
                }
                a.data && (a.data = pt.extend({},
                a.data))
            }
        }
        function k(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !pt.support.noCloneEvent && e[pt.expando]) {
                    o = pt._data(e);
                    for (i in o.events) pt.removeEvent(e, i, o.handle);
                    e.removeAttribute(pt.expando)
                }
                "script" === n && e.text !== t.text ? (y(e).text = t.text, x(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), pt.support.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected: ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }
        function C(t, e) {
            var n, i, o = 0,
            r = typeof t.getElementsByTagName !== K ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== K ? t.querySelectorAll(e || "*") : a;
            if (!r) for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) ! e || pt.nodeName(i, e) ? r.push(i) : pt.merge(r, C(i, e));
            return e === a || e && pt.nodeName(t, e) ? pt.merge([t], r) : r
        }
        function T(t) {
            ae.test(t.type) && (t.defaultChecked = t.checked)
        }
        function q(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = $e.length; o--;) if (e = $e[o] + n, e in t) return e;
            return i
        }
        function j(t, e) {
            return t = e || t,
            "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t)
        }
        function S(t, e) {
            for (var n, i, o, r = [], a = 0, s = t.length; s > a; a++) i = t[a],
            i.style && (r[a] = pt._data(i, "olddisplay"), n = i.style.display, e ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && j(i) && (r[a] = pt._data(i, "olddisplay", N(i.nodeName)))) : r[a] || (o = j(i), (n && "none" !== n || !o) && pt._data(i, "olddisplay", o ? n: pt.css(i, "display"))));
            for (a = 0; s > a; a++) i = t[a],
            i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "": "none"));
            return t
        }
        function $(t, e, n) {
            var i = we.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }
        function L(t, e, n, i, o) {
            for (var r = n === (i ? "border": "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2)"margin" === n && (a += pt.css(t, n + Se[r], !0, o)),
            i ? ("content" === n && (a -= pt.css(t, "padding" + Se[r], !0, o)), "margin" !== n && (a -= pt.css(t, "border" + Se[r] + "Width", !0, o))) : (a += pt.css(t, "padding" + Se[r], !0, o), "padding" !== n && (a += pt.css(t, "border" + Se[r] + "Width", !0, o)));
            return a
        }
        function E(t, e, n) {
            var i = !0,
            o = "width" === e ? t.offsetWidth: t.offsetHeight,
            r = ge(t),
            a = pt.support.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = ve(t, e, r), (0 > o || null == o) && (o = t.style[e]), ke.test(o)) return o;
                i = a && (pt.support.boxSizingReliable || o === t.style[e]),
                o = parseFloat(o) || 0
            }
            return o + L(t, e, n || (a ? "border": "content"), i, r) + "px"
        }
        function N(t) {
            var e = Z,
            n = Te[t];
            return n || (n = I(t, e), "none" !== n && n || (he = (he || pt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (he[0].contentWindow || he[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = I(t, e), he.detach()), Te[t] = n),
            n
        }
        function I(t, e) {
            var n = pt(e.createElement(t)).appendTo(e.body),
            i = pt.css(n[0], "display");
            return n.remove(),
            i
        }
        function A(t, e, n, i) {
            var o;
            if (pt.isArray(e)) pt.each(e,
            function(e, o) {
                n || Ee.test(t) ? i(t, o) : A(t + "[" + ("object" == typeof o ? e: "") + "]", o, n, i)
            });
            else if (n || "object" !== pt.type(e)) i(t, e);
            else for (o in e) A(t + "[" + o + "]", e[o], n, i)
        }
        function B(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                r = e.toLowerCase().match(gt) || [];
                if (pt.isFunction(n)) for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }
        function O(t, e, n, i) {
            function o(c) {
                var l;
                return r[c] = !0,
                pt.each(t[c] || [],
                function(t, c) {
                    var u = c(e, n, i);
                    return "string" != typeof u || s || r[u] ? s ? !(l = u) : a: (e.dataTypes.unshift(u), o(u), !1)
                }),
                l
            }
            var r = {},
            s = t === Ge;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }
        function D(t, e) {
            var n, i, o = pt.ajaxSettings.flatOptions || {};
            for (i in e) e[i] !== a && ((o[i] ? t: n || (n = {}))[i] = e[i]);
            return n && pt.extend(!0, t, n),
            t
        }
        function M(t, e, n) {
            var i, o, r, s, c = t.contents,
            l = t.dataTypes,
            u = t.responseFields;
            for (s in u) s in n && (e[u[s]] = n[s]);
            for (;
            "*" === l[0];) l.shift(),
            o === a && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o) for (s in c) if (c[s] && c[s].test(o)) {
                l.unshift(s);
                break
            }
            if (l[0] in n) r = l[0];
            else {
                for (s in n) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        r = s;
                        break
                    }
                    i || (i = s)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : a
        }
        function R(t, e) {
            var n, i, o, r, a = {},
            s = 0,
            c = t.dataTypes.slice(),
            l = c[0];
            if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), c[1]) for (o in t.converters) a[o.toLowerCase()] = t.converters[o];
            for (; i = c[++s];) if ("*" !== i) {
                if ("*" !== l && l !== i) {
                    if (o = a[l + " " + i] || a["* " + i], !o) for (n in a) if (r = n.split(" "), r[1] === i && (o = a[l + " " + r[0]] || a["* " + r[0]])) {
                        o === !0 ? o = a[n] : a[n] !== !0 && (i = r[0], c.splice(s--, 0, i));
                        break
                    }
                    if (o !== !0) if (o && t["throws"]) e = o(e);
                    else try {
                        e = o(e)
                    } catch(u) {
                        return {
                            state: "parsererror",
                            error: o ? u: "No conversion from " + l + " to " + i
                        }
                    }
                }
                l = i
            }
            return {
                state: "success",
                data: e
            }
        }
        function P() {
            try {
                return new r.XMLHttpRequest
            } catch(t) {}
        }
        function H() {
            try {
                return new r.ActiveXObject("Microsoft.XMLHTTP")
            } catch(t) {}
        }
        function F() {
            return setTimeout(function() {
                on = a
            }),
            on = pt.now()
        }
        function U(t, e) {
            pt.each(e,
            function(e, n) {
                for (var i = (un[e] || []).concat(un["*"]), o = 0, r = i.length; r > o; o++) if (i[o].call(t, e, n)) return
            })
        }
        function Q(t, e, n) {
            var i, o, r = 0,
            a = ln.length,
            s = pt.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (o) return ! 1;
                for (var e = on || F(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, r = 1 - i, a = 0, c = l.tweens.length; c > a; a++) l.tweens[a].run(r);
                return s.notifyWith(t, [l, r, n]),
                1 > r && c ? n: (s.resolveWith(t, [l]), !1)
            },
            l = s.promise({
                elem: t,
                props: pt.extend({},
                e),
                opts: pt.extend(!0, {
                    specialEasing: {}
                },
                n),
                originalProperties: e,
                originalOptions: n,
                startTime: on || F(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = pt.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(i),
                    i
                },
                stop: function(e) {
                    var n = 0,
                    i = e ? l.tweens.length: 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) l.tweens[n].run(1);
                    return e ? s.resolveWith(t, [l, e]) : s.rejectWith(t, [l, e]),
                    this
                }
            }),
            u = l.props;
            for (W(u, l.opts.specialEasing); a > r; r++) if (i = ln[r].call(l, t, u, l.opts)) return i;
            return U(l, u),
            pt.isFunction(l.opts.start) && l.opts.start.call(t, l),
            pt.fx.timer(pt.extend(c, {
                elem: t,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        function W(t, e) {
            var n, i, o, r, a;
            for (o in t) if (i = pt.camelCase(o), r = e[i], n = t[o], pt.isArray(n) && (r = n[1], n = t[o] = n[0]), o !== i && (t[i] = n, delete t[o]), a = pt.cssHooks[i], a && "expand" in a) {
                n = a.expand(n),
                delete t[i];
                for (o in n) o in t || (t[o] = n[o], e[o] = r)
            } else e[i] = r
        }
        function z(t, e, n) {
            var i, o, r, a, s, c, l, u, d, f = this,
            p = t.style,
            h = {},
            g = [],
            v = t.nodeType && j(t);
            n.queue || (u = pt._queueHooks(t, "fx"), null == u.unqueued && (u.unqueued = 0, d = u.empty.fire, u.empty.fire = function() {
                u.unqueued || d()
            }), u.unqueued++, f.always(function() {
                f.always(function() {
                    u.unqueued--,
                    pt.queue(t, "fx").length || u.empty.fire()
                })
            })),
            1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === pt.css(t, "display") && "none" === pt.css(t, "float") && (pt.support.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
            n.overflow && (p.overflow = "hidden", pt.support.shrinkWrapBlocks || f.always(function() {
                p.overflow = n.overflow[0],
                p.overflowX = n.overflow[1],
                p.overflowY = n.overflow[2]
            }));
            for (o in e) if (a = e[o], an.exec(a)) {
                if (delete e[o], c = c || "toggle" === a, a === (v ? "hide": "show")) continue;
                g.push(o)
            }
            if (r = g.length) {
                s = pt._data(t, "fxshow") || pt._data(t, "fxshow", {}),
                "hidden" in s && (v = s.hidden),
                c && (s.hidden = !v),
                v ? pt(t).show() : f.done(function() {
                    pt(t).hide()
                }),
                f.done(function() {
                    var e;
                    pt._removeData(t, "fxshow");
                    for (e in h) pt.style(t, e, h[e])
                });
                for (o = 0; r > o; o++) i = g[o],
                l = f.createTween(i, v ? s[i] : 0),
                h[i] = s[i] || pt.style(t, i),
                i in s || (s[i] = l.start, v && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0))
            }
        }
        function V(t, e, n, i, o) {
            return new V.prototype.init(t, e, n, i, o)
        }
        function G(t, e) {
            var n, i = {
                height: t
            },
            o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = Se[o],
            i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t),
            i
        }
        function X(t) {
            return pt.isWindow(t) ? t: 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        var J, Y, K = typeof a,
        Z = r.document,
        tt = r.location,
        et = r.jQuery,
        nt = r.$,
        it = {},
        ot = [],
        rt = "1.9.1",
        at = ot.concat,
        st = ot.push,
        ct = ot.slice,
        lt = ot.indexOf,
        ut = it.toString,
        dt = it.hasOwnProperty,
        ft = rt.trim,
        pt = function(t, e) {
            return new pt.fn.init(t, e, Y)
        },
        ht = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        gt = /\S+/g,
        vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        _t = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        yt = /^[\],:{}\s]*$/,
        xt = /(?:^|:|,)(?:\s*\[)+/g,
        bt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        wt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        kt = /^-ms-/,
        Ct = /-([\da-z])/gi,
        Tt = function(t, e) {
            return e.toUpperCase()
        },
        qt = function(t) { (Z.addEventListener || "load" === t.type || "complete" === Z.readyState) && (jt(), pt.ready())
        },
        jt = function() {
            Z.addEventListener ? (Z.removeEventListener("DOMContentLoaded", qt, !1), r.removeEventListener("load", qt, !1)) : (Z.detachEvent("onreadystatechange", qt), r.detachEvent("onload", qt))
        };
        pt.fn = pt.prototype = {
            jquery: rt,
            constructor: pt,
            init: function(t, e, n) {
                var i, o;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !i || !i[1] && e) return ! e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e: Z, !0)), _t.test(i[1]) && pt.isPlainObject(e)) for (i in e) pt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if (o = Z.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return n.find(t);
                        this.length = 1,
                        this[0] = o
                    }
                    return this.context = Z,
                    this.selector = t,
                    this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : pt.isFunction(t) ? n.ready(t) : (t.selector !== a && (this.selector = t.selector, this.context = t.context), pt.makeArray(t, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return ct.call(this)
            },
            get: function(t) {
                return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
            },
            pushStack: function(t) {
                var e = pt.merge(this.constructor(), t);
                return e.prevObject = this,
                e.context = this.context,
                e
            },
            each: function(t, e) {
                return pt.each(this, t, e)
            },
            ready: function(t) {
                return pt.ready.promise().done(t),
                this
            },
            slice: function() {
                return this.pushStack(ct.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            eq: function(t) {
                var e = this.length,
                n = +t + (0 > t ? e: 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            map: function(t) {
                return this.pushStack(pt.map(this,
                function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: st,
            sort: [].sort,
            splice: [].splice
        },
        pt.fn.init.prototype = pt.fn,
        pt.extend = pt.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {},
            c = 1,
            l = arguments.length,
            u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[1] || {},
            c = 2), "object" == typeof s || pt.isFunction(s) || (s = {}), l === c && (s = this, --c); l > c; c++) if (null != (o = arguments[c])) for (i in o) t = s[i],
            n = o[i],
            s !== n && (u && n && (pt.isPlainObject(n) || (e = pt.isArray(n))) ? (e ? (e = !1, r = t && pt.isArray(t) ? t: []) : r = t && pt.isPlainObject(t) ? t: {},
            s[i] = pt.extend(u, r, n)) : n !== a && (s[i] = n));
            return s
        },
        pt.extend({
            noConflict: function(t) {
                return r.$ === pt && (r.$ = nt),
                t && r.jQuery === pt && (r.jQuery = et),
                pt
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? pt.readyWait++:pt.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--pt.readyWait: !pt.isReady) {
                    if (!Z.body) return setTimeout(pt.ready);
                    pt.isReady = !0,
                    t !== !0 && --pt.readyWait > 0 || (J.resolveWith(Z, [pt]), pt.fn.trigger && pt(Z).trigger("ready").off("ready"))
                }
            },
            isFunction: function(t) {
                return "function" === pt.type(t)
            },
            isArray: Array.isArray ||
            function(t) {
                return "array" === pt.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return ! isNaN(parseFloat(t)) && isFinite(t)
            },
            type: function(t) {
                return null == t ? t + "": "object" == typeof t || "function" == typeof t ? it[ut.call(t)] || "object": typeof t
            },
            isPlainObject: function(t) {
                if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t)) return ! 1;
                try {
                    if (t.constructor && !dt.call(t, "constructor") && !dt.call(t.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(e) {
                    return ! 1
                }
                var n;
                for (n in t);
                return n === a || dt.call(t, n)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return ! 1;
                return ! 0
            },
            error: function(t) {
                throw Error(t)
            },
            parseHTML: function(t, e, n) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (n = e, e = !1),
                e = e || Z;
                var i = _t.exec(t),
                o = !n && [];
                return i ? [e.createElement(i[1])] : (i = pt.buildFragment([t], e, o), o && pt(o).remove(), pt.merge([], i.childNodes))
            },
            parseJSON: function(t) {
                return r.JSON && r.JSON.parse ? r.JSON.parse(t) : null === t ? t: "string" == typeof t && (t = pt.trim(t), t && yt.test(t.replace(bt, "@").replace(wt, "]").replace(xt, ""))) ? Function("return " + t)() : (pt.error("Invalid JSON: " + t), a)
            },
            parseXML: function(t) {
                var e, n;
                if (!t || "string" != typeof t) return null;
                try {
                    r.DOMParser ? (n = new DOMParser, e = n.parseFromString(t, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t))
                } catch(i) {
                    e = a
                }
                return e && e.documentElement && !e.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + t),
                e
            },
            noop: function() {},
            globalEval: function(t) {
                t && pt.trim(t) && (r.execScript ||
                function(t) {
                    r.eval.call(r, t)
                })(t)
            },
            camelCase: function(t) {
                return t.replace(kt, "ms-").replace(Ct, Tt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var i, o = 0,
                r = t.length,
                a = s(t);
                if (n) {
                    if (a) for (; r > o && (i = e.apply(t[o], n), i !== !1); o++);
                    else for (o in t) if (i = e.apply(t[o], n), i === !1) break
                } else if (a) for (; r > o && (i = e.call(t[o], o, t[o]), i !== !1); o++);
                else for (o in t) if (i = e.call(t[o], o, t[o]), i === !1) break;
                return t
            },
            trim: ft && !ft.call("\ufeff ") ?
            function(t) {
                return null == t ? "": ft.call(t)
            }: function(t) {
                return null == t ? "": (t + "").replace(vt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (s(Object(t)) ? pt.merge(n, "string" == typeof t ? [t] : t) : st.call(n, t)),
                n
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (lt) return lt.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n: 0; i > n; n++) if (n in e && e[n] === t) return n
                }
                return - 1
            },
            merge: function(t, e) {
                var n = e.length,
                i = t.length,
                o = 0;
                if ("number" == typeof n) for (; n > o; o++) t[i++] = e[o];
                else for (; e[o] !== a;) t[i++] = e[o++];
                return t.length = i,
                t
            },
            grep: function(t, e, n) {
                var i, o = [],
                r = 0,
                a = t.length;
                for (n = !!n; a > r; r++) i = !!e(t[r], r),
                n !== i && o.push(t[r]);
                return o
            },
            map: function(t, e, n) {
                var i, o = 0,
                r = t.length,
                a = s(t),
                c = [];
                if (a) for (; r > o; o++) i = e(t[o], o, n),
                null != i && (c[c.length] = i);
                else for (o in t) i = e(t[o], o, n),
                null != i && (c[c.length] = i);
                return at.apply([], c)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                return "string" == typeof e && (o = t[e], e = t, t = o),
                pt.isFunction(t) ? (n = ct.call(arguments, 2), i = function() {
                    return t.apply(e || this, n.concat(ct.call(arguments)))
                },
                i.guid = t.guid = t.guid || pt.guid++, i) : a
            },
            access: function(t, e, n, i, o, r, s) {
                var c = 0,
                l = t.length,
                u = null == n;
                if ("object" === pt.type(n)) {
                    o = !0;
                    for (c in n) pt.access(t, e, c, n[c], !0, r, s)
                } else if (i !== a && (o = !0, pt.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                    return u.call(pt(t), n)
                })), e)) for (; l > c; c++) e(t[c], n, s ? i: i.call(t[c], c, e(t[c], n)));
                return o ? t: u ? e.call(t) : l ? e(t[0], n) : r
            },
            now: function() {
                return (new Date).getTime()
            }
        }),
        pt.ready.promise = function(t) {
            if (!J) if (J = pt.Deferred(), "complete" === Z.readyState) setTimeout(pt.ready);
            else if (Z.addEventListener) Z.addEventListener("DOMContentLoaded", qt, !1),
            r.addEventListener("load", qt, !1);
            else {
                Z.attachEvent("onreadystatechange", qt),
                r.attachEvent("onload", qt);
                var e = !1;
                try {
                    e = null == r.frameElement && Z.documentElement
                } catch(n) {}
                e && e.doScroll &&
                function i() {
                    if (!pt.isReady) {
                        try {
                            e.doScroll("left")
                        } catch(t) {
                            return setTimeout(i, 50)
                        }
                        jt(),
                        pt.ready()
                    }
                } ()
            }
            return J.promise(t)
        },
        pt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(t, e) {
            it["[object " + e + "]"] = e.toLowerCase()
        }),
        Y = pt(Z);
        var St = {};
        pt.Callbacks = function(t) {
            t = "string" == typeof t ? St[t] || c(t) : pt.extend({},
            t);
            var e, n, i, o, r, s, l = [],
            u = !t.once && [],
            d = function(a) {
                for (n = t.memory && a, i = !0, r = s || 0, s = 0, o = l.length, e = !0; l && o > r; r++) if (l[r].apply(a[0], a[1]) === !1 && t.stopOnFalse) {
                    n = !1;
                    break
                }
                e = !1,
                l && (u ? u.length && d(u.shift()) : n ? l = [] : f.disable())
            },
            f = {
                add: function() {
                    if (l) {
                        var i = l.length; !
                        function r(e) {
                            pt.each(e,
                            function(e, n) {
                                var i = pt.type(n);
                                "function" === i ? t.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        } (arguments),
                        e ? o = l.length: n && (s = i, d(n))
                    }
                    return this
                },
                remove: function() {
                    return l && pt.each(arguments,
                    function(t, n) {
                        for (var i; (i = pt.inArray(n, l, i)) > -1;) l.splice(i, 1),
                        e && (o >= i && o--, r >= i && r--)
                    }),
                    this
                },
                has: function(t) {
                    return t ? pt.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [],
                    this
                },
                disable: function() {
                    return l = u = n = a,
                    this
                },
                disabled: function() {
                    return ! l
                },
                lock: function() {
                    return u = a,
                    n || f.disable(),
                    this
                },
                locked: function() {
                    return ! u
                },
                fireWith: function(t, n) {
                    return n = n || [],
                    n = [t, n.slice ? n.slice() : n],
                    !l || i && !u || (e ? u.push(n) : d(n)),
                    this
                },
                fire: function() {
                    return f.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !! i
                }
            };
            return f
        },
        pt.extend({
            Deferred: function(t) {
                var e = [["resolve", "done", pt.Callbacks("once memory"), "resolved"], ["reject", "fail", pt.Callbacks("once memory"), "rejected"], ["notify", "progress", pt.Callbacks("memory")]],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments),
                        this
                    },
                    then: function() {
                        var t = arguments;
                        return pt.Deferred(function(n) {
                            pt.each(e,
                            function(e, r) {
                                var a = r[0],
                                s = pt.isFunction(t[e]) && t[e];
                                o[r[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && pt.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }),
                            t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? pt.extend(t, i) : i
                    }
                },
                o = {};
                return i.pipe = i.then,
                pt.each(e,
                function(t, r) {
                    var a = r[2],
                    s = r[3];
                    i[r[1]] = a.add,
                    s && a.add(function() {
                        n = s
                    },
                    e[1 ^ t][2].disable, e[2][2].lock),
                    o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i: this, arguments),
                        this
                    },
                    o[r[0] + "With"] = a.fireWith
                }),
                i.promise(o),
                t && t.call(o, o),
                o
            },
            when: function(t) {
                var e, n, i, o = 0,
                r = ct.call(arguments),
                a = r.length,
                s = 1 !== a || t && pt.isFunction(t.promise) ? a: 0,
                c = 1 === s ? t: pt.Deferred(),
                l = function(t, n, i) {
                    return function(o) {
                        n[t] = this,
                        i[t] = arguments.length > 1 ? ct.call(arguments) : o,
                        i === e ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                    }
                };
                if (a > 1) for (e = Array(a), n = Array(a), i = Array(a); a > o; o++) r[o] && pt.isFunction(r[o].promise) ? r[o].promise().done(l(o, i, r)).fail(c.reject).progress(l(o, n, e)) : --s;
                return s || c.resolveWith(i, r),
                c.promise()
            }
        }),
        pt.support = function() {
            var t, e, n, i, o, a, s, c, l, u, d = Z.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = d.getElementsByTagName("*"), n = d.getElementsByTagName("a")[0], !e || !n || !e.length) return {};
            o = Z.createElement("select"),
            s = o.appendChild(Z.createElement("option")),
            i = d.getElementsByTagName("input")[0],
            n.style.cssText = "top:1px;float:left;opacity:.5",
            t = {
                getSetAttribute: "t" !== d.className,
                leadingWhitespace: 3 === d.firstChild.nodeType,
                tbody: !d.getElementsByTagName("tbody").length,
                htmlSerialize: !!d.getElementsByTagName("link").length,
                style: /top/.test(n.getAttribute("style")),
                hrefNormalized: "/a" === n.getAttribute("href"),
                opacity: /^0.5/.test(n.style.opacity),
                cssFloat: !!n.style.cssFloat,
                checkOn: !!i.value,
                optSelected: s.selected,
                enctype: !!Z.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== Z.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === Z.compatMode,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            },
            i.checked = !0,
            t.noCloneChecked = i.cloneNode(!0).checked,
            o.disabled = !0,
            t.optDisabled = !s.disabled;
            try {
                delete d.test
            } catch(f) {
                t.deleteExpando = !1
            }
            i = Z.createElement("input"),
            i.setAttribute("value", ""),
            t.input = "" === i.getAttribute("value"),
            i.value = "t",
            i.setAttribute("type", "radio"),
            t.radioValue = "t" === i.value,
            i.setAttribute("checked", "t"),
            i.setAttribute("name", "t"),
            a = Z.createDocumentFragment(),
            a.appendChild(i),
            t.appendChecked = i.checked,
            t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
            d.attachEvent && (d.attachEvent("onclick",
            function() {
                t.noCloneEvent = !1
            }), d.cloneNode(!0).click());
            for (u in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(c = "on" + u, "t"),
            t[u + "Bubbles"] = c in r || d.attributes[c].expando === !1;
            return d.style.backgroundClip = "content-box",
            d.cloneNode(!0).style.backgroundClip = "",
            t.clearCloneStyle = "content-box" === d.style.backgroundClip,
            pt(function() {
                var e, n, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = Z.getElementsByTagName("body")[0];
                a && (e = Z.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(e).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = d.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, r.getComputedStyle && (t.pixelPosition = "1%" !== (r.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (r.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, n = d.appendChild(Z.createElement("div")), n.style.cssText = d.style.cssText = o, n.style.marginRight = n.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((r.getComputedStyle(n, null) || {}).marginRight)), typeof d.style.zoom !== K && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(e), e = d = i = n = null)
            }),
            e = o = a = s = n = i = null,
            t
        } ();
        var $t = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Lt = /([A-Z])/g;
        pt.extend({
            cache: {},
            expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(t) {
                return t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando],
                !!t && !f(t)
            },
            data: function(t, e, n) {
                return l(t, e, n)
            },
            removeData: function(t, e) {
                return u(t, e)
            },
            _data: function(t, e, n) {
                return l(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return u(t, e, !0)
            },
            acceptData: function(t) {
                if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return ! 1;
                var e = t.nodeName && pt.noData[t.nodeName.toLowerCase()];
                return ! e || e !== !0 && t.getAttribute("classid") === e
            }
        }),
        pt.fn.extend({
            data: function(t, e) {
                var n, i, o = this[0],
                r = 0,
                s = null;
                if (t === a) {
                    if (this.length && (s = pt.data(o), 1 === o.nodeType && !pt._data(o, "parsedAttrs"))) {
                        for (n = o.attributes; n.length > r; r++) i = n[r].name,
                        i.indexOf("data-") || (i = pt.camelCase(i.slice(5)), d(o, i, s[i]));
                        pt._data(o, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function() {
                    pt.data(this, t)
                }) : pt.access(this,
                function(e) {
                    return e === a ? o ? d(o, t, pt.data(o, t)) : null: (this.each(function() {
                        pt.data(this, t, e)
                    }), a)
                },
                null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    pt.removeData(this, t)
                })
            }
        }),
        pt.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = pt._data(t, e), n && (!i || pt.isArray(n) ? i = pt._data(t, e, pt.makeArray(n)) : i.push(n)), i || []) : a
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = pt.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = pt._queueHooks(t, e),
                a = function() {
                    pt.dequeue(t, e)
                };
                "inprogress" === o && (o = n.shift(), i--),
                r.cur = o,
                o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)),
                !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return pt._data(t, n) || pt._data(t, n, {
                    empty: pt.Callbacks("once memory").add(function() {
                        pt._removeData(t, e + "queue"),
                        pt._removeData(t, n)
                    })
                })
            }
        }),
        pt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--),
                n > arguments.length ? pt.queue(this[0], t) : e === a ? this: this.each(function() {
                    var n = pt.queue(this, t, e);
                    pt._queueHooks(this, t),
                    "fx" === t && "inprogress" !== n[0] && pt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    pt.dequeue(this, t)
                })
            },
            delay: function(t, e) {
                return t = pt.fx ? pt.fx.speeds[t] || t: t,
                e = e || "fx",
                this.queue(e,
                function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                o = pt.Deferred(),
                r = this,
                s = this.length,
                c = function() {--i || o.resolveWith(r, [r])
                };
                for ("string" != typeof t && (e = t, t = a), t = t || "fx"; s--;) n = pt._data(r[s], t + "queueHooks"),
                n && n.empty && (i++, n.empty.add(c));
                return c(),
                o.promise(e)
            }
        });
        var Et, Nt, It = /[\t\r\n]/g,
        At = /\r/g,
        Bt = /^(?:input|select|textarea|button|object)$/i,
        Ot = /^(?:a|area)$/i,
        Dt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Mt = /^(?:checked|selected)$/i,
        Rt = pt.support.getSetAttribute,
        Pt = pt.support.input;
        pt.fn.extend({
            attr: function(t, e) {
                return pt.access(this, pt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    pt.removeAttr(this, t)
                })
            },
            prop: function(t, e) {
                return pt.access(this, pt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = pt.propFix[t] || t,
                this.each(function() {
                    try {
                        this[t] = a,
                        delete this[t]
                    } catch(e) {}
                })
            },
            addClass: function(t) {
                var e, n, i, o, r, a = 0,
                s = this.length,
                c = "string" == typeof t && t;
                if (pt.isFunction(t)) return this.each(function(e) {
                    pt(this).addClass(t.call(this, e, this.className))
                });
                if (c) for (e = (t || "").match(gt) || []; s > a; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(It, " ") : " ")) {
                    for (r = 0; o = e[r++];) 0 > i.indexOf(" " + o + " ") && (i += o + " ");
                    n.className = pt.trim(i)
                }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, a = 0,
                s = this.length,
                c = 0 === arguments.length || "string" == typeof t && t;
                if (pt.isFunction(t)) return this.each(function(e) {
                    pt(this).removeClass(t.call(this, e, this.className))
                });
                if (c) for (e = (t || "").match(gt) || []; s > a; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(It, " ") : "")) {
                    for (r = 0; o = e[r++];) for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                    n.className = t ? pt.trim(i) : ""
                }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t,
                i = "boolean" == typeof e;
                return pt.isFunction(t) ? this.each(function(n) {
                    pt(this).toggleClass(t.call(this, n, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === n) for (var o, r = 0,
                    a = pt(this), s = e, c = t.match(gt) || []; o = c[r++];) s = i ? s: !a.hasClass(o),
                    a[s ? "addClass": "removeClass"](o);
                    else(n === K || "boolean" === n) && (this.className && pt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "": pt._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ",
                n = 0,
                i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(It, " ").indexOf(e) >= 0) return ! 0;
                return ! 1
            },
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = pt.isFunction(t), this.each(function(e) {
                    var o, r = pt(this);
                    1 === this.nodeType && (o = i ? t.call(this, e, r.val()) : t, null == o ? o = "": "number" == typeof o ? o += "": pt.isArray(o) && (o = pt.map(o,
                    function(t) {
                        return null == t ? "": t + ""
                    })), n = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== a || (this.value = o))
                })) : o ? (n = pt.valHooks[o.type] || pt.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (e = n.get(o, "value")) !== a ? e: (e = o.value, "string" == typeof e ? e.replace(At, "") : null == e ? "": e)) : void 0
            }
        }),
        pt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = t.attributes.value;
                        return ! e || e.specified ? t.value: t.text
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options,
                        o = t.selectedIndex,
                        r = "select-one" === t.type || 0 > o,
                        a = r ? null: [], s = r ? o + 1 : i.length, c = 0 > o ? s: r ? o: 0; s > c; c++) if (n = i[c], !(!n.selected && c !== o || (pt.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && pt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = pt(n).val(), r) return e;
                            a.push(e)
                        }
                        return a
                    },
                    set: function(t, e) {
                        var n = pt.makeArray(e);
                        return pt(t).find("option").each(function() {
                            this.selected = pt.inArray(pt(this).val(), n) >= 0
                        }),
                        n.length || (t.selectedIndex = -1),
                        n
                    }
                }
            },
            attr: function(t, e, n) {
                var i, o, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === K ? pt.prop(t, e, n) : (o = 1 !== s || !pt.isXMLDoc(t), o && (e = e.toLowerCase(), i = pt.attrHooks[e] || (Dt.test(e) ? Nt: Et)), n === a ? i && o && "get" in i && null !== (r = i.get(t, e)) ? r: (typeof t.getAttribute !== K && (r = t.getAttribute(e)), null == r ? a: r) : null !== n ? i && o && "set" in i && (r = i.set(t, n, e)) !== a ? r: (t.setAttribute(e, n + ""), n) : (pt.removeAttr(t, e), a))
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                r = e && e.match(gt);
                if (r && 1 === t.nodeType) for (; n = r[o++];) i = pt.propFix[n] || n,
                Dt.test(n) ? !Rt && Mt.test(n) ? t[pt.camelCase("default-" + n)] = t[i] = !1 : t[i] = !1 : pt.attr(t, n, ""),
                t.removeAttribute(Rt ? n: i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!pt.support.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e),
                            n && (t.value = n),
                            e
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(t, e, n) {
                var i, o, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !pt.isXMLDoc(t),
                r && (e = pt.propFix[e] || e, o = pt.propHooks[e]),
                n !== a ? o && "set" in o && (i = o.set(t, n, e)) !== a ? i: t[e] = n: o && "get" in o && null !== (i = o.get(t, e)) ? i: t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = t.getAttributeNode("tabindex");
                        return e && e.specified ? parseInt(e.value, 10) : Bt.test(t.nodeName) || Ot.test(t.nodeName) && t.href ? 0 : a
                    }
                }
            }
        }),
        Nt = {
            get: function(t, e) {
                var n = pt.prop(t, e),
                i = "boolean" == typeof n && t.getAttribute(e),
                o = "boolean" == typeof n ? Pt && Rt ? null != i: Mt.test(e) ? t[pt.camelCase("default-" + e)] : !!i: t.getAttributeNode(e);
                return o && o.value !== !1 ? e.toLowerCase() : a
            },
            set: function(t, e, n) {
                return e === !1 ? pt.removeAttr(t, n) : Pt && Rt || !Mt.test(n) ? t.setAttribute(!Rt && pt.propFix[n] || n, n) : t[pt.camelCase("default-" + n)] = t[n] = !0,
                n
            }
        },
        Pt && Rt || (pt.attrHooks.value = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return pt.nodeName(t, "input") ? t.defaultValue: n && n.specified ? n.value: a
            },
            set: function(t, e, n) {
                return pt.nodeName(t, "input") ? (t.defaultValue = e, a) : Et && Et.set(t, e, n)
            }
        }),
        Rt || (Et = pt.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return n && ("id" === e || "name" === e || "coords" === e ? "" !== n.value: n.specified) ? n.value: a
            },
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)),
                i.value = e += "",
                "value" === n || e === t.getAttribute(n) ? e: a
            }
        },
        pt.attrHooks.contenteditable = {
            get: Et.get,
            set: function(t, e, n) {
                Et.set(t, "" !== e && e, n)
            }
        },
        pt.each(["width", "height"],
        function(t, e) {
            pt.attrHooks[e] = pt.extend(pt.attrHooks[e], {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : a
                }
            })
        })),
        pt.support.hrefNormalized || (pt.each(["href", "src", "width", "height"],
        function(t, e) {
            pt.attrHooks[e] = pt.extend(pt.attrHooks[e], {
                get: function(t) {
                    var n = t.getAttribute(e, 2);
                    return null == n ? a: n
                }
            })
        }), pt.each(["href", "src"],
        function(t, e) {
            pt.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        })),
        pt.support.style || (pt.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || a
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        }),
        pt.support.optSelected || (pt.propHooks.selected = pt.extend(pt.propHooks.selected, {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
                null
            }
        })),
        pt.support.enctype || (pt.propFix.enctype = "encoding"),
        pt.support.checkOn || pt.each(["radio", "checkbox"],
        function() {
            pt.valHooks[this] = {
                get: function(t) {
                    return null === t.getAttribute("value") ? "on": t.value
                }
            }
        }),
        pt.each(["radio", "checkbox"],
        function() {
            pt.valHooks[this] = pt.extend(pt.valHooks[this], {
                set: function(t, e) {
                    return pt.isArray(e) ? t.checked = pt.inArray(pt(t).val(), e) >= 0 : a
                }
            })
        });
        var Ht = /^(?:input|select|textarea)$/i,
        Ft = /^key/,
        Ut = /^(?:mouse|contextmenu)|click/,
        Qt = /^(?:focusinfocus|focusoutblur)$/,
        Wt = /^([^.]*)(?:\.(.+)|)$/;
        pt.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, c, l, u, d, f, p, h, g, v, m = pt._data(t);
                if (m) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = pt.guid++), (s = m.events) || (s = m.events = {}), (d = m.handle) || (d = m.handle = function(t) {
                        return typeof pt === K || t && pt.event.triggered === t.type ? a: pt.event.dispatch.apply(d.elem, arguments)
                    },
                    d.elem = t), e = (e || "").match(gt) || [""], c = e.length; c--;) r = Wt.exec(e[c]) || [],
                    h = v = r[1],
                    g = (r[2] || "").split(".").sort(),
                    u = pt.event.special[h] || {},
                    h = (o ? u.delegateType: u.bindType) || h,
                    u = pt.event.special[h] || {},
                    f = pt.extend({
                        type: h,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && pt.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    },
                    l),
                    (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, u.setup && u.setup.call(t, i, g, d) !== !1 || (t.addEventListener ? t.addEventListener(h, d, !1) : t.attachEvent && t.attachEvent("on" + h, d))),
                    u.add && (u.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)),
                    o ? p.splice(p.delegateCount++, 0, f) : p.push(f),
                    pt.event.global[h] = !0;
                    t = null
                }
            },
            remove: function(t, e, n, i, o) {
                var r, a, s, c, l, u, d, f, p, h, g, v = pt.hasData(t) && pt._data(t);
                if (v && (u = v.events)) {
                    for (e = (e || "").match(gt) || [""], l = e.length; l--;) if (s = Wt.exec(e[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = pt.event.special[p] || {},
                        p = (i ? d.delegateType: d.bindType) || p, f = u[p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = r = f.length; r--;) a = f[r],
                        !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(r, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(t, a));
                        c && !f.length && (d.teardown && d.teardown.call(t, h, v.handle) !== !1 || pt.removeEvent(t, p, v.handle), delete u[p])
                    } else for (p in u) pt.event.remove(t, p + e[l], n, i, !0);
                    pt.isEmptyObject(u) && (delete v.handle, pt._removeData(t, "events"))
                }
            },
            trigger: function(t, e, n, i) {
                var o, s, c, l, u, d, f, p = [n || Z],
                h = dt.call(t, "type") ? t.type: t,
                g = dt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (c = d = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !Qt.test(h + pt.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = 0 > h.indexOf(":") && "on" + h, t = t[pt.expando] ? t: new pt.Event(h, "object" == typeof t && t), t.isTrigger = !0, t.namespace = g.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = a, t.target || (t.target = n), e = null == e ? [t] : pt.makeArray(e, [t]), u = pt.event.special[h] || {},
                i || !u.trigger || u.trigger.apply(n, e) !== !1)) {
                    if (!i && !u.noBubble && !pt.isWindow(n)) {
                        for (l = u.delegateType || h, Qt.test(l + h) || (c = c.parentNode); c; c = c.parentNode) p.push(c),
                        d = c;
                        d === (n.ownerDocument || Z) && p.push(d.defaultView || d.parentWindow || r)
                    }
                    for (f = 0; (c = p[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? l: u.bindType || h,
                    o = (pt._data(c, "events") || {})[t.type] && pt._data(c, "handle"),
                    o && o.apply(c, e),
                    o = s && c[s],
                    o && pt.acceptData(c) && o.apply && o.apply(c, e) === !1 && t.preventDefault();
                    if (t.type = h, !(i || t.isDefaultPrevented() || u._default && u._default.apply(n.ownerDocument, e) !== !1 || "click" === h && pt.nodeName(n, "a") || !pt.acceptData(n) || !s || !n[h] || pt.isWindow(n))) {
                        d = n[s],
                        d && (n[s] = null),
                        pt.event.triggered = h;
                        try {
                            n[h]()
                        } catch(v) {}
                        pt.event.triggered = a,
                        d && (n[s] = d)
                    }
                    return t.result
                }
            },
            dispatch: function(t) {
                t = pt.event.fix(t);
                var e, n, i, o, r, s = [],
                c = ct.call(arguments),
                l = (pt._data(this, "events") || {})[t.type] || [],
                u = pt.event.special[t.type] || {};
                if (c[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (s = pt.event.handlers.call(this, t, l), e = 0; (o = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = o.elem, r = 0; (i = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((pt.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, c), n !== a && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t),
                    t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s = [],
                c = e.delegateCount,
                l = t.target;
                if (c && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                    for (o = [], r = 0; c > r; r++) i = e[r],
                    n = i.selector + " ",
                    o[n] === a && (o[n] = i.needsContext ? pt(n, this).index(l) >= 0 : pt.find(n, this, null, [l]).length),
                    o[n] && o.push(i);
                    o.length && s.push({
                        elem: l,
                        handlers: o
                    })
                }
                return e.length > c && s.push({
                    elem: this,
                    handlers: e.slice(c)
                }),
                s
            },
            fix: function(t) {
                if (t[pt.expando]) return t;
                var e, n, i, o = t.type,
                r = t,
                a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Ut.test(o) ? this.mouseHooks: Ft.test(o) ? this.keyHooks: {}), i = a.props ? this.props.concat(a.props) : this.props, t = new pt.Event(r), e = i.length; e--;) n = i[e],
                t[n] = r[n];
                return t.target || (t.target = r.srcElement || Z),
                3 === t.target.nodeType && (t.target = t.target.parentNode),
                t.metaKey = !!t.metaKey,
                a.filter ? a.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
                    t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, r = e.button,
                    s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Z, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)),
                    !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement: s),
                    t.which || r === a || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                    t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return pt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : a
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== Z.activeElement && this.focus) try {
                            return this.focus(),
                            !1
                        } catch(t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === Z.activeElement && this.blur ? (this.blur(), !1) : a
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(t) {
                        t.result !== a && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var o = pt.extend(new pt.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? pt.event.trigger(o, null, e) : pt.event.dispatch.call(e, o),
                o.isDefaultPrevented() && n.preventDefault()
            }
        },
        pt.removeEvent = Z.removeEventListener ?
        function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        }: function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === K && (t[i] = null), t.detachEvent(i, n))
        },
        pt.Event = function(t, e) {
            return this instanceof pt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? p: h) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), this[pt.expando] = !0, a) : new pt.Event(t, e)
        },
        pt.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = p,
                t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = p,
                t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = p,
                this.stopPropagation()
            }
        },
        pt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        function(t, e) {
            pt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                    return (!o || o !== i && !pt.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e),
                    n
                }
            }
        }),
        pt.support.submitBubbles || (pt.event.special.submit = {
            setup: function() {
                return ! pt.nodeName(this, "form") && (pt.event.add(this, "click._submit keypress._submit",
                function(t) {
                    var e = t.target,
                    n = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? e.form: a;
                    n && !pt._data(n, "submitBubbles") && (pt.event.add(n, "submit._submit",
                    function(t) {
                        t._submit_bubble = !0
                    }), pt._data(n, "submitBubbles", !0))
                }), a)
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return ! pt.nodeName(this, "form") && (pt.event.remove(this, "._submit"), a)
            }
        }),
        pt.support.changeBubbles || (pt.event.special.change = {
            setup: function() {
                return Ht.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (pt.event.add(this, "propertychange._change",
                function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), pt.event.add(this, "click._change",
                function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1),
                    pt.event.simulate("change", this, t, !0)
                })), !1) : (pt.event.add(this, "beforeactivate._change",
                function(t) {
                    var e = t.target;
                    Ht.test(e.nodeName) && !pt._data(e, "changeBubbles") && (pt.event.add(e, "change._change",
                    function(t) { ! this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t, !0)
                    }), pt._data(e, "changeBubbles", !0))
                }), a)
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : a
            },
            teardown: function() {
                return pt.event.remove(this, "._change"),
                !Ht.test(this.nodeName)
            }
        }),
        pt.support.focusinBubbles || pt.each({
            focus: "focusin",
            blur: "focusout"
        },
        function(t, e) {
            var n = 0,
            i = function(t) {
                pt.event.simulate(e, t.target, pt.event.fix(t), !0)
            };
            pt.event.special[e] = {
                setup: function() {
                    0 === n++&&Z.addEventListener(t, i, !0)
                },
                teardown: function() {
                    0 === --n && Z.removeEventListener(t, i, !0)
                }
            }
        }),
        pt.fn.extend({
            on: function(t, e, n, i, o) {
                var r, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = a);
                    for (r in t) this.on(r, e, n, t[r], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = a) : null == i && ("string" == typeof e ? (i = n, n = a) : (i = n, n = e, e = a)), i === !1) i = h;
                else if (!i) return this;
                return 1 === o && (s = i, i = function(t) {
                    return pt().off(t),
                    s.apply(this, arguments)
                },
                i.guid = s.guid || (s.guid = pt.guid++)),
                this.each(function() {
                    pt.event.add(this, t, i, n, e)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj,
                pt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
                this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = a),
                n === !1 && (n = h),
                this.each(function() {
                    pt.event.remove(this, t, n, e)
                })
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            trigger: function(t, e) {
                return this.each(function() {
                    pt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? pt.event.trigger(t, e, n, !0) : a
            }
        }),
        function(t, e) {
            function n(t) {
                return ht.test(t + "")
            }
            function i() {
                var t, e = [];
                return t = function(n, i) {
                    return e.push(n += " ") > C.cacheLength && delete t[e.shift()],
                    t[n] = i
                }
            }
            function o(t) {
                return t[R] = !0,
                t
            }
            function r(t) {
                var e = E.createElement("div");
                try {
                    return t(e)
                } catch(n) {
                    return ! 1
                } finally {
                    e = null
                }
            }
            function a(t, e, n, i) {
                var o, r, a, s, c, l, u, p, h, g;
                if ((e ? e.ownerDocument || e: P) !== E && L(e), e = e || E, n = n || [], !t || "string" != typeof t) return n;
                if (1 !== (s = e.nodeType) && 9 !== s) return [];
                if (!I && !i) {
                    if (o = gt.exec(t)) if (a = o[1]) {
                        if (9 === s) {
                            if (r = e.getElementById(a), !r || !r.parentNode) return n;
                            if (r.id === a) return n.push(r),
                            n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && D(e, r) && r.id === a) return n.push(r),
                        n
                    } else {
                        if (o[2]) return Y.apply(n, K.call(e.getElementsByTagName(t), 0)),
                        n;
                        if ((a = o[3]) && H.getByClassName && e.getElementsByClassName) return Y.apply(n, K.call(e.getElementsByClassName(a), 0)),
                        n
                    }
                    if (H.qsa && !A.test(t)) {
                        if (u = !0, p = R, h = e, g = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (l = d(t), (u = e.getAttribute("id")) ? p = u.replace(_t, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", c = l.length; c--;) l[c] = p + f(l[c]);
                            h = ft.test(t) && e.parentNode || e,
                            g = l.join(",")
                        }
                        if (g) try {
                            return Y.apply(n, K.call(h.querySelectorAll(g), 0)),
                            n
                        } catch(v) {} finally {
                            u || e.removeAttribute("id")
                        }
                    }
                }
                return x(t.replace(at, "$1"), e, n, i)
            }
            function s(t, e) {
                var n = e && t,
                i = n && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                if (i) return i;
                if (n) for (; n = n.nextSibling;) if (n === e) return - 1;
                return t ? 1 : -1
            }
            function c(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }
            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }
            function u(t) {
                return o(function(e) {
                    return e = +e,
                    o(function(n, i) {
                        for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }
            function d(t, e) {
                var n, i, o, r, s, c, l, u = W[t + " "];
                if (u) return e ? 0 : u.slice(0);
                for (s = t, c = [], l = C.preFilter; s;) { (!n || (i = st.exec(s))) && (i && (s = s.slice(i[0].length) || s), c.push(o = [])),
                    n = !1,
                    (i = ct.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(at, " ")
                    }), s = s.slice(n.length));
                    for (r in C.filter) ! (i = dt[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: r,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return e ? s.length: s ? a.error(t) : W(t, c).slice(0)
            }
            function f(t) {
                for (var e = 0,
                n = t.length,
                i = ""; n > e; e++) i += t[e].value;
                return i
            }
            function p(t, e, n) {
                var i = e.dir,
                o = n && "parentNode" === i,
                r = U++;
                return e.first ?
                function(e, n, r) {
                    for (; e = e[i];) if (1 === e.nodeType || o) return t(e, n, r)
                }: function(e, n, a) {
                    var s, c, l, u = F + " " + r;
                    if (a) {
                        for (; e = e[i];) if ((1 === e.nodeType || o) && t(e, n, a)) return ! 0
                    } else for (; e = e[i];) if (1 === e.nodeType || o) if (l = e[R] || (e[R] = {}), (c = l[i]) && c[0] === u) {
                        if ((s = c[1]) === !0 || s === k) return s === !0
                    } else if (c = l[i] = [u], c[1] = t(e, n, a) || k, c[1] === !0) return ! 0
                }
            }
            function h(t) {
                return t.length > 1 ?
                function(e, n, i) {
                    for (var o = t.length; o--;) if (!t[o](e, n, i)) return ! 1;
                    return ! 0
                }: t[0]
            }
            function g(t, e, n, i, o) {
                for (var r, a = [], s = 0, c = t.length, l = null != e; c > s; s++)(r = t[s]) && (!n || n(r, i, o)) && (a.push(r), l && e.push(s));
                return a
            }
            function v(t, e, n, i, r, a) {
                return i && !i[R] && (i = v(i)),
                r && !r[R] && (r = v(r, a)),
                o(function(o, a, s, c) {
                    var l, u, d, f = [],
                    p = [],
                    h = a.length,
                    v = o || y(e || "*", s.nodeType ? [s] : s, []),
                    m = !t || !o && e ? v: g(v, f, t, s, c),
                    _ = n ? r || (o ? t: h || i) ? [] : a: m;
                    if (n && n(m, _, s, c), i) for (l = g(_, p), i(l, [], s, c), u = l.length; u--;)(d = l[u]) && (_[p[u]] = !(m[p[u]] = d));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (l = [], u = _.length; u--;)(d = _[u]) && l.push(m[u] = d);
                                r(null, _ = [], l, c)
                            }
                            for (u = _.length; u--;)(d = _[u]) && (l = r ? Z.call(o, d) : f[u]) > -1 && (o[l] = !(a[l] = d))
                        }
                    } else _ = g(_ === a ? _.splice(h, _.length) : _),
                    r ? r(null, a, _, c) : Y.apply(a, _)
                })
            }
            function m(t) {
                for (var e, n, i, o = t.length,
                r = C.relative[t[0].type], a = r || C.relative[" "], s = r ? 1 : 0, c = p(function(t) {
                    return t === e
                },
                a, !0), l = p(function(t) {
                    return Z.call(e, t) > -1
                },
                a, !0), u = [function(t, n, i) {
                    return ! r && (i || n !== $) || ((e = n).nodeType ? c(t, n, i) : l(t, n, i))
                }]; o > s; s++) if (n = C.relative[t[s].type]) u = [p(h(u), n)];
                else {
                    if (n = C.filter[t[s].type].apply(null, t[s].matches), n[R]) {
                        for (i = ++s; o > i && !C.relative[t[i].type]; i++);
                        return v(s > 1 && h(u), s > 1 && f(t.slice(0, s - 1)).replace(at, "$1"), n, i > s && m(t.slice(s, i)), o > i && m(t = t.slice(i)), o > i && f(t))
                    }
                    u.push(n)
                }
                return h(u)
            }
            function _(t, e) {
                var n = 0,
                i = e.length > 0,
                r = t.length > 0,
                s = function(o, s, c, l, u) {
                    var d, f, p, h = [],
                    v = 0,
                    m = "0",
                    _ = o && [],
                    y = null != u,
                    x = $,
                    b = o || r && C.find.TAG("*", u && s.parentNode || s),
                    w = F += null == x ? 1 : Math.random() || .1;
                    for (y && ($ = s !== E && s, k = n); null != (d = b[m]); m++) {
                        if (r && d) {
                            for (f = 0; p = t[f++];) if (p(d, s, c)) {
                                l.push(d);
                                break
                            }
                            y && (F = w, k = ++n)
                        }
                        i && ((d = !p && d) && v--, o && _.push(d))
                    }
                    if (v += m, i && m !== v) {
                        for (f = 0; p = e[f++];) p(_, h, s, c);
                        if (o) {
                            if (v > 0) for (; m--;) _[m] || h[m] || (h[m] = J.call(l));
                            h = g(h)
                        }
                        Y.apply(l, h),
                        y && !o && h.length > 0 && v + e.length > 1 && a.uniqueSort(l)
                    }
                    return y && (F = w, $ = x),
                    _
                };
                return i ? o(s) : s
            }
            function y(t, e, n) {
                for (var i = 0,
                o = e.length; o > i; i++) a(t, e[i], n);
                return n
            }
            function x(t, e, n, i) {
                var o, r, a, s, c, l = d(t);
                if (!i && 1 === l.length) {
                    if (r = l[0] = l[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === e.nodeType && !I && C.relative[r[1].type]) {
                        if (e = C.find.ID(a.matches[0].replace(xt, bt), e)[0], !e) return n;
                        t = t.slice(r.shift().value.length)
                    }
                    for (o = dt.needsContext.test(t) ? 0 : r.length; o--&&(a = r[o], !C.relative[s = a.type]);) if ((c = C.find[s]) && (i = c(a.matches[0].replace(xt, bt), ft.test(r[0].type) && e.parentNode || e))) {
                        if (r.splice(o, 1), t = i.length && f(r), !t) return Y.apply(n, K.call(i, 0)),
                        n;
                        break
                    }
                }
                return j(t, l)(i, e, I, n, ft.test(t)),
                n
            }
            function b() {}
            var w, k, C, T, q, j, S, $, L, E, N, I, A, B, O, D, M, R = "sizzle" + -new Date,
            P = t.document,
            H = {},
            F = 0,
            U = 0,
            Q = i(),
            W = i(),
            z = i(),
            V = typeof e,
            G = 1 << 31,
            X = [],
            J = X.pop,
            Y = X.push,
            K = X.slice,
            Z = X.indexOf ||
            function(t) {
                for (var e = 0,
                n = this.length; n > e; e++) if (this[e] === t) return e;
                return - 1
            },
            tt = "[\\x20\\t\\r\\n\\f]",
            et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            nt = et.replace("w", "w#"),
            it = "([*^$|!~]?=)",
            ot = "\\[" + tt + "*(" + et + ")" + tt + "*(?:" + it + tt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + tt + "*\\]",
            rt = ":(" + et + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ot.replace(3, 8) + ")*)|.*)\\)|)",
            at = RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
            st = RegExp("^" + tt + "*," + tt + "*"),
            ct = RegExp("^" + tt + "*([\\x20\\t\\r\\n\\f>+~])" + tt + "*"),
            lt = RegExp(rt),
            ut = RegExp("^" + nt + "$"),
            dt = {
                ID: RegExp("^#(" + et + ")"),
                CLASS: RegExp("^\\.(" + et + ")"),
                NAME: RegExp("^\\[name=['\"]?(" + et + ")['\"]?\\]"),
                TAG: RegExp("^(" + et.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + ot),
                PSEUDO: RegExp("^" + rt),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                needsContext: RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
            },
            ft = /[\x20\t\r\n\f]*[+~]/,
            ht = /^[^{]+\{\s*\[native code/,
            gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            _t = /'|\\/g,
            yt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            bt = function(t, e) {
                var n = "0x" + e - 65536;
                return n !== n ? e: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
            try {
                K.call(P.documentElement.childNodes, 0)[0].nodeType
            } catch(wt) {
                K = function(t) {
                    for (var e, n = []; e = this[t++];) n.push(e);
                    return n
                }
            }
            q = a.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !! e && "HTML" !== e.nodeName
            },
            L = a.setDocument = function(t) {
                var i = t ? t.ownerDocument || t: P;
                return i !== E && 9 === i.nodeType && i.documentElement ? (E = i, N = i.documentElement, I = q(i), H.tagNameNoComments = r(function(t) {
                    return t.appendChild(i.createComment("")),
                    !t.getElementsByTagName("*").length
                }), H.attributes = r(function(t) {
                    t.innerHTML = "<select></select>";
                    var e = typeof t.lastChild.getAttribute("multiple");
                    return "boolean" !== e && "string" !== e
                }), H.getByClassName = r(function(t) {
                    return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                    !(!t.getElementsByClassName || !t.getElementsByClassName("e").length) && (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length)
                }), H.getByName = r(function(t) {
                    t.id = R + 0,
                    t.innerHTML = "<a name='" + R + "'></a><div name='" + R + "'></div>",
                    N.insertBefore(t, N.firstChild);
                    var e = i.getElementsByName && i.getElementsByName(R).length === 2 + i.getElementsByName(R + 0).length;
                    return H.getIdNotName = !i.getElementById(R),
                    N.removeChild(t),
                    e
                }), C.attrHandle = r(function(t) {
                    return t.innerHTML = "<a href='#'></a>",
                    t.firstChild && typeof t.firstChild.getAttribute !== V && "#" === t.firstChild.getAttribute("href")
                }) ? {}: {
                    href: function(t) {
                        return t.getAttribute("href", 2)
                    },
                    type: function(t) {
                        return t.getAttribute("type")
                    }
                },
                H.getIdNotName ? (C.find.ID = function(t, e) {
                    if (typeof e.getElementById !== V && !I) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                },
                C.filter.ID = function(t) {
                    var e = t.replace(xt, bt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (C.find.ID = function(t, n) {
                    if (typeof n.getElementById !== V && !I) {
                        var i = n.getElementById(t);
                        return i ? i.id === t || typeof i.getAttributeNode !== V && i.getAttributeNode("id").value === t ? [i] : e: []
                    }
                },
                C.filter.ID = function(t) {
                    var e = t.replace(xt, bt);
                    return function(t) {
                        var n = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), C.find.TAG = H.tagNameNoComments ?
                function(t, n) {
                    return typeof n.getElementsByTagName !== V ? n.getElementsByTagName(t) : e
                }: function(t, e) {
                    var n, i = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                },
                C.find.NAME = H.getByName &&
                function(t, n) {
                    return typeof n.getElementsByName !== V ? n.getElementsByName(name) : e
                },
                C.find.CLASS = H.getByClassName &&
                function(t, n) {
                    return typeof n.getElementsByClassName === V || I ? e: n.getElementsByClassName(t)
                },
                B = [], A = [":focus"], (H.qsa = n(i.querySelectorAll)) && (r(function(t) {
                    t.innerHTML = "<select><option selected=''></option></select>",
                    t.querySelectorAll("[selected]").length || A.push("\\[" + tt + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                    t.querySelectorAll(":checked").length || A.push(":checked")
                }), r(function(t) {
                    t.innerHTML = "<input type='hidden' i=''/>",
                    t.querySelectorAll("[i^='']").length && A.push("[*^$]=" + tt + "*(?:\"\"|'')"),
                    t.querySelectorAll(":enabled").length || A.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    A.push(",.*:")
                })), (H.matchesSelector = n(O = N.matchesSelector || N.mozMatchesSelector || N.webkitMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(t) {
                    H.disconnectedMatch = O.call(t, "div"),
                    O.call(t, "[s!='']:x"),
                    B.push("!=", rt)
                }), A = RegExp(A.join("|")), B = RegExp(B.join("|")), D = n(N.contains) || N.compareDocumentPosition ?
                function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement: t,
                    i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                }: function(t, e) {
                    if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
                    return ! 1
                },
                M = N.compareDocumentPosition ?
                function(t, e) {
                    var n;
                    return t === e ? (S = !0, 0) : (n = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e)) ? 1 & n || t.parentNode && 11 === t.parentNode.nodeType ? t === i || D(P, t) ? -1 : e === i || D(P, e) ? 1 : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                }: function(t, e) {
                    var n, o = 0,
                    r = t.parentNode,
                    a = e.parentNode,
                    c = [t],
                    l = [e];
                    if (t === e) return S = !0,
                    0;
                    if (!r || !a) return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : 0;
                    if (r === a) return s(t, e);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; c[o] === l[o];) o++;
                    return o ? s(c[o], l[o]) : c[o] === P ? -1 : l[o] === P ? 1 : 0
                },
                S = !1, [0, 0].sort(M), H.detectDuplicates = S, E) : E
            },
            a.matches = function(t, e) {
                return a(t, null, null, e)
            },
            a.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== E && L(t), e = e.replace(yt, "='$1']"), !(!H.matchesSelector || I || B && B.test(e) || A.test(e))) try {
                    var n = O.call(t, e);
                    if (n || H.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch(i) {}
                return a(e, E, null, [t]).length > 0
            },
            a.contains = function(t, e) {
                return (t.ownerDocument || t) !== E && L(t),
                D(t, e)
            },
            a.attr = function(t, e) {
                var n;
                return (t.ownerDocument || t) !== E && L(t),
                I || (e = e.toLowerCase()),
                (n = C.attrHandle[e]) ? n(t) : I || H.attributes ? t.getAttribute(e) : ((n = t.getAttributeNode(e)) || t.getAttribute(e)) && t[e] === !0 ? e: n && n.specified ? n.value: null
            },
            a.error = function(t) {
                throw Error("Syntax error, unrecognized expression: " + t)
            },
            a.uniqueSort = function(t) {
                var e, n = [],
                i = 1,
                o = 0;
                if (S = !H.detectDuplicates, t.sort(M), S) {
                    for (; e = t[i]; i++) e === t[i - 1] && (o = n.push(i));
                    for (; o--;) t.splice(n[o], 1)
                }
                return t
            },
            T = a.getText = function(t) {
                var e, n = "",
                i = 0,
                o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else for (; e = t[i]; i++) n += T(e);
                return n
            },
            C = a.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: dt,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xt, bt),
                        t[3] = (t[4] || t[5] || "").replace(xt, bt),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                        t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(),
                        "nth" === t[1].slice(0, 3) ? (t[3] || a.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && a.error(t[0]),
                        t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[5] && t[2];
                        return dt.CHILD.test(t[0]) ? null: (t[4] ? t[2] = t[4] : n && lt.test(n) && (e = d(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        return "*" === t ?
                        function() {
                            return ! 0
                        }: (t = t.replace(xt, bt).toLowerCase(),
                        function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        })
                    },
                    CLASS: function(t) {
                        var e = Q[t + " "];
                        return e || (e = RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && Q(t,
                        function(t) {
                            return e.test(t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, n) {
                        return function(i) {
                            var o = a.attr(i, t);
                            return null == o ? "!=" === e: !e || (o += "", "=" === e ? o === n: "!=" === e ? o !== n: "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice( - n.length) === n: "~=" === e ? (" " + o + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice( - 4),
                        s = "of-type" === e;
                        return 1 === i && 0 === o ?
                        function(t) {
                            return !! t.parentNode
                        }: function(e, n, c) {
                            var l, u, d, f, p, h, g = r !== a ? "nextSibling": "previousSibling",
                            v = e.parentNode,
                            m = s && e.nodeName.toLowerCase(),
                            _ = !c && !s;
                            if (v) {
                                if (r) {
                                    for (; g;) {
                                        for (d = e; d = d[g];) if (s ? d.nodeName.toLowerCase() === m: 1 === d.nodeType) return ! 1;
                                        h = g = "only" === t && !h && "nextSibling"
                                    }
                                    return ! 0
                                }
                                if (h = [a ? v.firstChild: v.lastChild], a && _) {
                                    for (u = v[R] || (v[R] = {}), l = u[t] || [], p = l[0] === F && l[1], f = l[0] === F && l[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();) if (1 === d.nodeType && ++f && d === e) {
                                        u[t] = [F, p, f];
                                        break
                                    }
                                } else if (_ && (l = (e[R] || (e[R] = {}))[t]) && l[0] === F) f = l[1];
                                else for (; (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m: 1 !== d.nodeType) || !++f || (_ && ((d[R] || (d[R] = {}))[t] = [F, f]), d !== e)););
                                return f -= o,
                                f === i || 0 === f % i && f / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, i = C.pseudos[t] || C.setFilters[t.toLowerCase()] || a.error("unsupported pseudo: " + t);
                        return i[R] ? i(e) : i.length > 1 ? (n = [t, t, "", e], C.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function(t, n) {
                            for (var o, r = i(t, e), a = r.length; a--;) o = Z.call(t, r[a]),
                            t[o] = !(n[o] = r[a])
                        }) : function(t) {
                            return i(t, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: o(function(t) {
                        var e = [],
                        n = [],
                        i = j(t.replace(at, "$1"));
                        return i[R] ? o(function(t, e, n, o) {
                            for (var r, a = i(t, null, o, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
                        }) : function(t, o, r) {
                            return e[0] = t,
                            i(e, null, r, n),
                            !n.pop()
                        }
                    }),
                    has: o(function(t) {
                        return function(e) {
                            return a(t, e).length > 0
                        }
                    }),
                    contains: o(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                    }),
                    lang: o(function(t) {
                        return ut.test(t || "") || a.error("unsupported lang: " + t),
                        t = t.replace(xt, bt).toLowerCase(),
                        function(e) {
                            var n;
                            do
                            if (n = I ? e.getAttribute("xml:lang") || e.getAttribute("lang") : e.lang) return n = n.toLowerCase(),
                            n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return ! 1
                        }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === N
                    },
                    focus: function(t) {
                        return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex,
                        t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return ! 1;
                        return ! 0
                    },
                    parent: function(t) {
                        return ! C.pseudos.empty(t)
                    },
                    header: function(t) {
                        return mt.test(t.nodeName)
                    },
                    input: function(t) {
                        return vt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, n) {
                        return [0 > n ? n + e: n]
                    }),
                    even: u(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e: n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e: n; e > ++i;) t.push(i);
                        return t
                    })
                }
            };
            for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[w] = c(w);
            for (w in {
                submit: !0,
                reset: !0
            }) C.pseudos[w] = l(w);
            j = a.compile = function(t, e) {
                var n, i = [],
                o = [],
                r = z[t + " "];
                if (!r) {
                    for (e || (e = d(t)), n = e.length; n--;) r = m(e[n]),
                    r[R] ? i.push(r) : o.push(r);
                    r = z(t, _(o, i))
                }
                return r
            },
            C.pseudos.nth = C.pseudos.eq,
            C.filters = b.prototype = C.pseudos,
            C.setFilters = new b,
            L(),
            a.attr = pt.attr,
            pt.find = a,
            pt.expr = a.selectors,
            pt.expr[":"] = pt.expr.pseudos,
            pt.unique = a.uniqueSort,
            pt.text = a.getText,
            pt.isXMLDoc = a.isXML,
            pt.contains = a.contains
        } (r);
        var zt = /Until$/,
        Vt = /^(?:parents|prev(?:Until|All))/,
        Gt = /^.[^:#\[\.,]*$/,
        Xt = pt.expr.match.needsContext,
        Jt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        pt.fn.extend({
            find: function(t) {
                var e, n, i, o = this.length;
                if ("string" != typeof t) return i = this,
                this.pushStack(pt(t).filter(function() {
                    for (e = 0; o > e; e++) if (pt.contains(i[e], this)) return ! 0
                }));
                for (n = [], e = 0; o > e; e++) pt.find(t, this[e], n);
                return n = this.pushStack(o > 1 ? pt.unique(n) : n),
                n.selector = (this.selector ? this.selector + " ": "") + t,
                n
            },
            has: function(t) {
                var e, n = pt(t, this),
                i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++) if (pt.contains(this, n[e])) return ! 0
                })
            },
            not: function(t) {
                return this.pushStack(v(this, t, !1))
            },
            filter: function(t) {
                return this.pushStack(v(this, t, !0))
            },
            is: function(t) {
                return !! t && ("string" == typeof t ? Xt.test(t) ? pt(t, this.context).index(this[0]) >= 0 : pt.filter(t, this).length > 0 : this.filter(t).length > 0)
            },
            closest: function(t, e) {
                for (var n, i = 0,
                o = this.length,
                r = [], a = Xt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; o > i; i++) for (n = this[i]; n && n.ownerDocument && n !== e && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : pt.find.matchesSelector(n, t)) {
                        r.push(n);
                        break
                    }
                    n = n.parentNode
                }
                return this.pushStack(r.length > 1 ? pt.unique(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
            },
            add: function(t, e) {
                var n = "string" == typeof t ? pt(t, e) : pt.makeArray(t && t.nodeType ? [t] : t),
                i = pt.merge(this.get(), n);
                return this.pushStack(pt.unique(i))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
            }
        }),
        pt.fn.andSelf = pt.fn.addBack,
        pt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e: null
            },
            parents: function(t) {
                return pt.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return pt.dir(t, "parentNode", n)
            },
            next: function(t) {
                return g(t, "nextSibling")
            },
            prev: function(t) {
                return g(t, "previousSibling")
            },
            nextAll: function(t) {
                return pt.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return pt.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return pt.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return pt.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return pt.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return pt.sibling(t.firstChild)
            },
            contents: function(t) {
                return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document: pt.merge([], t.childNodes)
            }
        },
        function(t, e) {
            pt.fn[t] = function(n, i) {
                var o = pt.map(this, e, n);
                return zt.test(t) || (i = n),
                i && "string" == typeof i && (o = pt.filter(i, o)),
                o = this.length > 1 && !Jt[t] ? pt.unique(o) : o,
                this.length > 1 && Vt.test(t) && (o = o.reverse()),
                this.pushStack(o)
            }
        }),
        pt.extend({
            filter: function(t, e, n) {
                return n && (t = ":not(" + t + ")"),
                1 === e.length ? pt.find.matchesSelector(e[0], t) ? [e[0]] : [] : pt.find.matches(t, e)
            },
            dir: function(t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (n === a || 1 !== o.nodeType || !pt(o).is(n));) 1 === o.nodeType && i.push(o),
                o = o[e];
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        });
        var Yt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Kt = / jQuery\d+="(?:null|\d+)"/g,
        Zt = RegExp("<(?:" + Yt + ")[\\s/>]", "i"),
        te = /^\s+/,
        ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ne = /<([\w:]+)/,
        ie = /<tbody/i,
        oe = /<|&#?\w+;/,
        re = /<(?:script|style|link)/i,
        ae = /^(?:checkbox|radio)$/i,
        se = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ce = /^$|\/(?:java|ecma)script/i,
        le = /^true\/(.*)/,
        ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        de = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: pt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        fe = m(Z),
        pe = fe.appendChild(Z.createElement("div"));
        de.optgroup = de.option,
        de.tbody = de.tfoot = de.colgroup = de.caption = de.thead,
        de.th = de.td,
        pt.fn.extend({
            text: function(t) {
                return pt.access(this,
                function(t) {
                    return t === a ? pt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Z).createTextNode(t))
                },
                null, t, arguments.length)
            },
            wrapAll: function(t) {
                if (pt.isFunction(t)) return this.each(function(e) {
                    pt(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]),
                    e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return pt.isFunction(t) ? this.each(function(e) {
                    pt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = pt(this),
                    n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = pt.isFunction(t);
                return this.each(function(n) {
                    pt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0,
                function(t) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(t)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0,
                function(t) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(t, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1,
                function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1,
                function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = 0; null != (n = this[i]); i++)(!t || pt.filter(t, [n]).length > 0) && (e || 1 !== n.nodeType || pt.cleanData(C(n)), n.parentNode && (e && pt.contains(n.ownerDocument, n) && b(C(n, "script")), n.parentNode.removeChild(n)));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && pt.cleanData(C(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && pt.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null != t && t,
                e = null == e ? t: e,
                this.map(function() {
                    return pt.clone(this, t, e)
                })
            },
            html: function(t) {
                return pt.access(this,
                function(t) {
                    var e = this[0] || {},
                    n = 0,
                    i = this.length;
                    if (t === a) return 1 === e.nodeType ? e.innerHTML.replace(Kt, "") : a;
                    if (! ("string" != typeof t || re.test(t) || !pt.support.htmlSerialize && Zt.test(t) || !pt.support.leadingWhitespace && te.test(t) || de[(ne.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(ee, "<$1></$2>");
                        try {
                            for (; i > n; n++) e = this[n] || {},
                            1 === e.nodeType && (pt.cleanData(C(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch(o) {}
                    }
                    e && this.empty().append(t)
                },
                null, t, arguments.length)
            },
            replaceWith: function(t) {
                var e = pt.isFunction(t);
                return e || "string" == typeof t || (t = pt(t).not(this).detach()),
                this.domManip([t], !0,
                function(t) {
                    var e = this.nextSibling,
                    n = this.parentNode;
                    n && (pt(this).remove(), n.insertBefore(t, e))
                })
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e, n) {
                t = at.apply([], t);
                var i, o, r, s, c, l, u = 0,
                d = this.length,
                f = this,
                p = d - 1,
                h = t[0],
                g = pt.isFunction(h);
                if (g || !(1 >= d || "string" != typeof h || pt.support.checkClone) && se.test(h)) return this.each(function(i) {
                    var o = f.eq(i);
                    g && (t[0] = h.call(this, i, e ? o.html() : a)),
                    o.domManip(t, e, n)
                });
                if (d && (l = pt.buildFragment(t, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (e = e && pt.nodeName(i, "tr"), s = pt.map(C(l, "script"), y), r = s.length; d > u; u++) o = l,
                    u !== p && (o = pt.clone(o, !0, !0), r && pt.merge(s, C(o, "script"))),
                    n.call(e && pt.nodeName(this[u], "table") ? _(this[u], "tbody") : this[u], o, u);
                    if (r) for (c = s[s.length - 1].ownerDocument, pt.map(s, x), u = 0; r > u; u++) o = s[u],
                    ce.test(o.type || "") && !pt._data(o, "globalEval") && pt.contains(c, o) && (o.src ? pt.ajax({
                        url: o.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : pt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ue, "")));
                    l = i = null
                }
                return this
            }
        }),
        pt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        },
        function(t, e) {
            pt.fn[t] = function(t) {
                for (var n, i = 0,
                o = [], r = pt(t), a = r.length - 1; a >= i; i++) n = i === a ? this: this.clone(!0),
                pt(r[i])[e](n),
                st.apply(o, n.get());
                return this.pushStack(o)
            }
        }),
        pt.extend({
            clone: function(t, e, n) {
                var i, o, r, a, s, c = pt.contains(t.ownerDocument, t);
                if (pt.support.html5Clone || pt.isXMLDoc(t) || !Zt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (pe.innerHTML = t.outerHTML, pe.removeChild(r = pe.firstChild)), !(pt.support.noCloneEvent && pt.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t))) for (i = C(r), s = C(t), a = 0; null != (o = s[a]); ++a) i[a] && k(o, i[a]);
                if (e) if (n) for (s = s || C(t), i = i || C(r), a = 0; null != (o = s[a]); a++) w(o, i[a]);
                else w(t, r);
                return i = C(r, "script"),
                i.length > 0 && b(i, !c && C(t, "script")),
                i = s = o = null,
                r
            },
            buildFragment: function(t, e, n, i) {
                for (var o, r, a, s, c, l, u, d = t.length,
                f = m(e), p = [], h = 0; d > h; h++) if (r = t[h], r || 0 === r) if ("object" === pt.type(r)) pt.merge(p, r.nodeType ? [r] : r);
                else if (oe.test(r)) {
                    for (s = s || f.appendChild(e.createElement("div")), c = (ne.exec(r) || ["", ""])[1].toLowerCase(), u = de[c] || de._default, s.innerHTML = u[1] + r.replace(ee, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
                    if (!pt.support.leadingWhitespace && te.test(r) && p.push(e.createTextNode(te.exec(r)[0])), !pt.support.tbody) for (r = "table" !== c || ie.test(r) ? "<table>" !== u[1] || ie.test(r) ? 0 : s: s.firstChild, o = r && r.childNodes.length; o--;) pt.nodeName(l = r.childNodes[o], "tbody") && !l.childNodes.length && r.removeChild(l);
                    for (pt.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = f.lastChild
                } else p.push(e.createTextNode(r));
                for (s && f.removeChild(s), pt.support.appendChecked || pt.grep(C(p, "input"), T), h = 0; r = p[h++];) if ((!i || -1 === pt.inArray(r, i)) && (a = pt.contains(r.ownerDocument, r), s = C(f.appendChild(r), "script"), a && b(s), n)) for (o = 0; r = s[o++];) ce.test(r.type || "") && n.push(r);
                return s = null,
                f
            },
            cleanData: function(t, e) {
                for (var n, i, o, r, a = 0,
                s = pt.expando,
                c = pt.cache,
                l = pt.support.deleteExpando,
                u = pt.event.special; null != (n = t[a]); a++) if ((e || pt.acceptData(n)) && (o = n[s], r = o && c[o])) {
                    if (r.events) for (i in r.events) u[i] ? pt.event.remove(n, i) : pt.removeEvent(n, i, r.handle);
                    c[o] && (delete c[o], l ? delete n[s] : typeof n.removeAttribute !== K ? n.removeAttribute(s) : n[s] = null, ot.push(o))
                }
            }
        });
        var he, ge, ve, me = /alpha\([^)]*\)/i,
        _e = /opacity\s*=\s*([^)]*)/,
        ye = /^(top|right|bottom|left)$/,
        xe = /^(none|table(?!-c[ea]).+)/,
        be = /^margin/,
        we = RegExp("^(" + ht + ")(.*)$", "i"),
        ke = RegExp("^(" + ht + ")(?!px)[a-z%]+$", "i"),
        Ce = RegExp("^([+-])=(" + ht + ")", "i"),
        Te = {
            BODY: "block"
        },
        qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        je = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Se = ["Top", "Right", "Bottom", "Left"],
        $e = ["Webkit", "O", "Moz", "ms"];
        pt.fn.extend({
            css: function(t, e) {
                return pt.access(this,
                function(t, e, n) {
                    var i, o, r = {},
                    s = 0;
                    if (pt.isArray(e)) {
                        for (o = ge(t), i = e.length; i > s; s++) r[e[s]] = pt.css(t, e[s], !1, o);
                        return r
                    }
                    return n !== a ? pt.style(t, e, n) : pt.css(t, e)
                },
                t, e, arguments.length > 1)
            },
            show: function() {
                return S(this, !0)
            },
            hide: function() {
                return S(this)
            },
            toggle: function(t) {
                var e = "boolean" == typeof t;
                return this.each(function() { (e ? t: j(this)) ? pt(this).show() : pt(this).hide()
                })
            }
        }),
        pt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = ve(t, "opacity");
                            return "" === n ? "1": n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": pt.support.cssFloat ? "cssFloat": "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, c = pt.camelCase(e),
                    l = t.style;
                    if (e = pt.cssProps[c] || (pt.cssProps[c] = q(l, c)), s = pt.cssHooks[e] || pt.cssHooks[c], n === a) return s && "get" in s && (o = s.get(t, !1, i)) !== a ? o: l[e];
                    if (r = typeof n, "string" === r && (o = Ce.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(pt.css(t, e)), r = "number"), !(null == n || "number" === r && isNaN(n) || ("number" !== r || pt.cssNumber[c] || (n += "px"), pt.support.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && (n = s.set(t, n, i)) === a))) try {
                        l[e] = n
                    } catch(u) {}
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, c = pt.camelCase(e);
                return e = pt.cssProps[c] || (pt.cssProps[c] = q(t.style, c)),
                s = pt.cssHooks[e] || pt.cssHooks[c],
                s && "get" in s && (r = s.get(t, !0, n)),
                r === a && (r = ve(t, e, i)),
                "normal" === r && e in je && (r = je[e]),
                "" === n || n ? (o = parseFloat(r), n === !0 || pt.isNumeric(o) ? o || 0 : r) : r
            },
            swap: function(t, e, n, i) {
                var o, r, a = {};
                for (r in e) a[r] = t.style[r],
                t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = a[r];
                return o
            }
        }),
        r.getComputedStyle ? (ge = function(t) {
            return r.getComputedStyle(t, null)
        },
        ve = function(t, e, n) {
            var i, o, r, s = n || ge(t),
            c = s ? s.getPropertyValue(e) || s[e] : a,
            l = t.style;
            return s && ("" !== c || pt.contains(t.ownerDocument, t) || (c = pt.style(t, e)), ke.test(c) && be.test(e) && (i = l.width, o = l.minWidth, r = l.maxWidth, l.minWidth = l.maxWidth = l.width = c, c = s.width, l.width = i, l.minWidth = o, l.maxWidth = r)),
            c
        }) : Z.documentElement.currentStyle && (ge = function(t) {
            return t.currentStyle
        },
        ve = function(t, e, n) {
            var i, o, r, s = n || ge(t),
            c = s ? s[e] : a,
            l = t.style;
            return null == c && l && l[e] && (c = l[e]),
            ke.test(c) && !ye.test(e) && (i = l.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), l.left = "fontSize" === e ? "1em": c, c = l.pixelLeft + "px", l.left = i, r && (o.left = r)),
            "" === c ? "auto": c
        }),
        pt.each(["height", "width"],
        function(t, e) {
            pt.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? 0 === t.offsetWidth && xe.test(pt.css(t, "display")) ? pt.swap(t, qe,
                    function() {
                        return E(t, e, i)
                    }) : E(t, e, i) : a
                },
                set: function(t, n, i) {
                    var o = i && ge(t);
                    return $(t, n, i ? L(t, e, i, pt.support.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }),
        pt.support.opacity || (pt.cssHooks.opacity = {
            get: function(t, e) {
                return _e.test((e && t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": e ? "1": ""
            },
            set: function(t, e) {
                var n = t.style,
                i = t.currentStyle,
                o = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "",
                r = i && i.filter || n.filter || "";
                n.zoom = 1,
                (e >= 1 || "" === e) && "" === pt.trim(r.replace(me, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = me.test(r) ? r.replace(me, o) : r + " " + o)
            }
        }),
        pt(function() {
            pt.support.reliableMarginRight || (pt.cssHooks.marginRight = {
                get: function(t, e) {
                    return e ? pt.swap(t, {
                        display: "inline-block"
                    },
                    ve, [t, "marginRight"]) : a
                }
            }),
            !pt.support.pixelPosition && pt.fn.position && pt.each(["top", "left"],
            function(t, e) {
                pt.cssHooks[e] = {
                    get: function(t, n) {
                        return n ? (n = ve(t, e), ke.test(n) ? pt(t).position()[e] + "px": n) : a
                    }
                }
            })
        }),
        pt.expr && pt.expr.filters && (pt.expr.filters.hidden = function(t) {
            return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !pt.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || pt.css(t, "display"))
        },
        pt.expr.filters.visible = function(t) {
            return ! pt.expr.filters.hidden(t)
        }),
        pt.each({
            margin: "",
            padding: "",
            border: "Width"
        },
        function(t, e) {
            pt.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0,
                    o = {},
                    r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Se[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            },
            be.test(t) || (pt.cssHooks[t + e].set = $)
        });
        var Le = /%20/g,
        Ee = /\[\]$/,
        Ne = /\r?\n/g,
        Ie = /^(?:submit|button|image|reset|file)$/i,
        Ae = /^(?:input|select|textarea|keygen)/i;
        pt.fn.extend({
            serialize: function() {
                return pt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = pt.prop(this, "elements");
                    return t ? pt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !pt(this).is(":disabled") && Ae.test(this.nodeName) && !Ie.test(t) && (this.checked || !ae.test(t))
                }).map(function(t, e) {
                    var n = pt(this).val();
                    return null == n ? null: pt.isArray(n) ? pt.map(n,
                    function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ne, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Ne, "\r\n")
                    }
                }).get()
            }
        }),
        pt.param = function(t, e) {
            var n, i = [],
            o = function(t, e) {
                e = pt.isFunction(e) ? e() : null == e ? "": e,
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (e === a && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || t.jquery && !pt.isPlainObject(t)) pt.each(t,
            function() {
                o(this.name, this.value)
            });
            else for (n in t) A(n, t[n], e, o);
            return i.join("&").replace(Le, "+")
        },
        pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(t, e) {
            pt.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }),
        pt.fn.hover = function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        };
        var Be, Oe, De = pt.now(),
        Me = /\?/,
        Re = /#.*$/,
        Pe = /([?&])_=[^&]*/,
        He = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ue = /^(?:GET|HEAD)$/,
        Qe = /^\/\//,
        We = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        ze = pt.fn.load,
        Ve = {},
        Ge = {},
        Xe = "*/".concat("*");
        try {
            Oe = tt.href
        } catch(Je) {
            Oe = Z.createElement("a"),
            Oe.href = "",
            Oe = Oe.href
        }
        Be = We.exec(Oe.toLowerCase()) || [],
        pt.fn.load = function(t, e, n) {
            if ("string" != typeof t && ze) return ze.apply(this, arguments);
            var i, o, r, s = this,
            c = t.indexOf(" ");
            return c >= 0 && (i = t.slice(c, t.length), t = t.slice(0, c)),
            pt.isFunction(e) ? (n = e, e = a) : e && "object" == typeof e && (r = "POST"),
            s.length > 0 && pt.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments,
                s.html(i ? pt("<div>").append(pt.parseHTML(t)).find(i) : t)
            }).complete(n &&
            function(t, e) {
                s.each(n, o || [t.responseText, e, t])
            }),
            this
        },
        pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
        function(t, e) {
            pt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }),
        pt.each(["get", "post"],
        function(t, e) {
            pt[e] = function(t, n, i, o) {
                return pt.isFunction(n) && (o = o || i, i = n, n = a),
                pt.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }),
        pt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Oe,
                type: "GET",
                isLocal: Fe.test(Be[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Xe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": r.String,
                    "text html": !0,
                    "text json": pt.parseJSON,
                    "text xml": pt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? D(D(t, pt.ajaxSettings), e) : D(pt.ajaxSettings, t)
            },
            ajaxPrefilter: B(Ve),
            ajaxTransport: B(Ge),
            ajax: function(t, e) {
                function n(t, e, n, i) {
                    var o, d, _, y, b, k = e;
                    2 !== x && (x = 2, c && clearTimeout(c), u = a, s = i || "", w.readyState = t > 0 ? 4 : 0, n && (y = M(f, w, n)), t >= 200 && 300 > t || 304 === t ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (pt.lastModified[r] = b), b = w.getResponseHeader("etag"), b && (pt.etag[r] = b)), 204 === t ? (o = !0, k = "nocontent") : 304 === t ? (o = !0, k = "notmodified") : (o = R(f, y), k = o.state, d = o.data, _ = o.error, o = !_)) : (_ = k, (t || !k) && (k = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || k) + "", o ? g.resolveWith(p, [d, k, w]) : g.rejectWith(p, [w, k, _]), w.statusCode(m), m = a, l && h.trigger(o ? "ajaxSuccess": "ajaxError", [w, f, o ? d: _]), v.fireWith(p, [w, k]), l && (h.trigger("ajaxComplete", [w, f]), --pt.active || pt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = a),
                e = e || {};
                var i, o, r, s, c, l, u, d, f = pt.ajaxSetup({},
                e),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? pt(p) : pt.event,
                g = pt.Deferred(),
                v = pt.Callbacks("once memory"),
                m = f.statusCode || {},
                _ = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!d) for (d = {}; e = He.exec(s);) d[e[1].toLowerCase()] = e[2];
                            e = d[t.toLowerCase()]
                        }
                        return null == e ? null: e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s: null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return x || (t = y[n] = y[n] || t, _[t] = e),
                        this
                    },
                    overrideMimeType: function(t) {
                        return x || (f.mimeType = t),
                        this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t) if (2 > x) for (e in t) m[e] = [m[e], t[e]];
                        else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || b;
                        return u && u.abort(e),
                        n(0, e),
                        this
                    }
                };
                if (g.promise(w).complete = v.add, w.success = w.done, w.error = w.fail, f.url = ((t || f.url || Oe) + "").replace(Re, "").replace(Qe, Be[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = pt.trim(f.dataType || "*").toLowerCase().match(gt) || [""], null == f.crossDomain && (i = We.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === Be[1] && i[2] === Be[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (Be[3] || ("http:" === Be[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = pt.param(f.data, f.traditional)), O(Ve, f, e, w), 2 === x) return w;
                l = f.global,
                l && 0 === pt.active++&&pt.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !Ue.test(f.type),
                r = f.url,
                f.hasContent || (f.data && (r = f.url += (Me.test(r) ? "&": "?") + f.data, delete f.data), f.cache === !1 && (f.url = Pe.test(r) ? r.replace(Pe, "$1_=" + De++) : r + (Me.test(r) ? "&": "?") + "_=" + De++)),
                f.ifModified && (pt.lastModified[r] && w.setRequestHeader("If-Modified-Since", pt.lastModified[r]), pt.etag[r] && w.setRequestHeader("If-None-Match", pt.etag[r])),
                (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", f.contentType),
                w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Xe + "; q=0.01": "") : f.accepts["*"]);
                for (o in f.headers) w.setRequestHeader(o, f.headers[o]);
                if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
                b = "abort";
                for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[o](f[o]);
                if (u = O(Ge, f, e, w)) {
                    w.readyState = 1,
                    l && h.trigger("ajaxSend", [w, f]),
                    f.async && f.timeout > 0 && (c = setTimeout(function() {
                        w.abort("timeout")
                    },
                    f.timeout));
                    try {
                        x = 1,
                        u.send(_, n)
                    } catch(k) {
                        if (! (2 > x)) throw k;
                        n( - 1, k)
                    }
                } else n( - 1, "No Transport");
                return w
            },
            getScript: function(t, e) {
                return pt.get(t, a, e, "script")
            },
            getJSON: function(t, e, n) {
                return pt.get(t, e, n, "json")
            }
        }),
        pt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return pt.globalEval(t),
                    t
                }
            }
        }),
        pt.ajaxPrefilter("script",
        function(t) {
            t.cache === a && (t.cache = !1),
            t.crossDomain && (t.type = "GET", t.global = !1)
        }),
        pt.ajaxTransport("script",
        function(t) {
            if (t.crossDomain) {
                var e, n = Z.head || pt("head")[0] || Z.documentElement;
                return {
                    send: function(i, o) {
                        e = Z.createElement("script"),
                        e.async = !0,
                        t.scriptCharset && (e.charset = t.scriptCharset),
                        e.src = t.url,
                        e.onload = e.onreadystatechange = function(t, n) { (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                        },
                        n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(a, !0)
                    }
                }
            }
        });
        var Ye = [],
        Ke = /(=)\?(?=&|$)|\?\?/;
        pt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ye.pop() || pt.expando + "_" + De++;
                return this[t] = !0,
                t
            }
        }),
        pt.ajaxPrefilter("json jsonp",
        function(t, e, n) {
            var i, o, s, c = t.jsonp !== !1 && (Ke.test(t.url) ? "url": "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(t.data) && "data");
            return c || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = pt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, c ? t[c] = t[c].replace(Ke, "$1" + i) : t.jsonp !== !1 && (t.url += (Me.test(t.url) ? "&": "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                return s || pt.error(i + " was not called"),
                s[0]
            },
            t.dataTypes[0] = "json", o = r[i], r[i] = function() {
                s = arguments
            },
            n.always(function() {
                r[i] = o,
                t[i] && (t.jsonpCallback = e.jsonpCallback, Ye.push(i)),
                s && pt.isFunction(o) && o(s[0]),
                s = o = a
            }), "script") : a
        });
        var Ze, tn, en = 0,
        nn = r.ActiveXObject &&
        function() {
            var t;
            for (t in Ze) Ze[t](a, !0)
        };
        pt.ajaxSettings.xhr = r.ActiveXObject ?
        function() {
            return ! this.isLocal && P() || H()
        }: P,
        tn = pt.ajaxSettings.xhr(),
        pt.support.cors = !!tn && "withCredentials" in tn,
        tn = pt.support.ajax = !!tn,
        tn && pt.ajaxTransport(function(t) {
            if (!t.crossDomain || pt.support.cors) {
                var e;
                return {
                    send: function(n, i) {
                        var o, s, c = t.xhr();
                        if (t.username ? c.open(t.type, t.url, t.async, t.username, t.password) : c.open(t.type, t.url, t.async), t.xhrFields) for (s in t.xhrFields) c[s] = t.xhrFields[s];
                        t.mimeType && c.overrideMimeType && c.overrideMimeType(t.mimeType),
                        t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in n) c.setRequestHeader(s, n[s])
                        } catch(l) {}
                        c.send(t.hasContent && t.data || null),
                        e = function(n, r) {
                            var s, l, u, d;
                            try {
                                if (e && (r || 4 === c.readyState)) if (e = a, o && (c.onreadystatechange = pt.noop, nn && delete Ze[o]), r) 4 !== c.readyState && c.abort();
                                else {
                                    d = {},
                                    s = c.status,
                                    l = c.getAllResponseHeaders(),
                                    "string" == typeof c.responseText && (d.text = c.responseText);
                                    try {
                                        u = c.statusText
                                    } catch(f) {
                                        u = ""
                                    }
                                    s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                }
                            } catch(p) {
                                r || i( - 1, p)
                            }
                            d && i(s, u, d, l)
                        },
                        t.async ? 4 === c.readyState ? setTimeout(e) : (o = ++en, nn && (Ze || (Ze = {},
                        pt(r).unload(nn)), Ze[o] = e), c.onreadystatechange = e) : e()
                    },
                    abort: function() {
                        e && e(a, !0)
                    }
                }
            }
        });
        var on, rn, an = /^(?:toggle|show|hide)$/,
        sn = RegExp("^(?:([+-])=|)(" + ht + ")([a-z%]*)$", "i"),
        cn = /queueHooks$/,
        ln = [z],
        un = {
            "*": [function(t, e) {
                var n, i, o = this.createTween(t, e),
                r = sn.exec(e),
                a = o.cur(),
                s = +a || 0,
                c = 1,
                l = 20;
                if (r) {
                    if (n = +r[2], i = r[3] || (pt.cssNumber[t] ? "": "px"), "px" !== i && s) {
                        s = pt.css(o.elem, t, !0) || n || 1;
                        do c = c || ".5",
                        s /= c,
                        pt.style(o.elem, t, s + i);
                        while (c !== (c = o.cur() / a) && 1 !== c && --l)
                    }
                    o.unit = i,
                    o.start = s,
                    o.end = r[1] ? s + (r[1] + 1) * n: n
                }
                return o
            }]
        };
        pt.Animation = pt.extend(Q, {
            tweener: function(t, e) {
                pt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0,
                o = t.length; o > i; i++) n = t[i],
                un[n] = un[n] || [],
                un[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ln.unshift(t) : ln.push(t)
            }
        }),
        pt.Tween = V,
        V.prototype = {
            constructor: V,
            init: function(t, e, n, i, o, r) {
                this.elem = t,
                this.prop = n,
                this.easing = o || "swing",
                this.options = e,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = r || (pt.cssNumber[n] ? "": "px")
            },
            cur: function() {
                var t = V.propHooks[this.prop];
                return t && t.get ? t.get(this) : V.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = V.propHooks[this.prop];
                return this.pos = e = this.options.duration ? pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
                this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : V.propHooks._default.set(this),
                this
            }
        },
        V.prototype.init.prototype = V.prototype,
        V.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = pt.css(t.elem, t.prop, ""), e && "auto" !== e ? e: 0) : t.elem[t.prop]
                },
                set: function(t) {
                    pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[pt.cssProps[t.prop]] || pt.cssHooks[t.prop]) ? pt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        },
        V.propHooks.scrollTop = V.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        pt.each(["toggle", "show", "hide"],
        function(t, e) {
            var n = pt.fn[e];
            pt.fn[e] = function(t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(G(e, !0), t, i, o)
            }
        }),
        pt.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(j).css("opacity", 0).show().end().animate({
                    opacity: e
                },
                t, n, i)
            },
            animate: function(t, e, n, i) {
                var o = pt.isEmptyObject(t),
                r = pt.speed(e, n, i),
                a = function() {
                    var e = Q(this, pt.extend({},
                    t), r);
                    a.finish = function() {
                        e.stop(!0)
                    },
                    (o || pt._data(this, "finish")) && e.stop(!0)
                };
                return a.finish = a,
                o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop,
                    e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = a),
                e && t !== !1 && this.queue(t || "fx", []),
                this.each(function() {
                    var e = !0,
                    o = null != t && t + "queueHooks",
                    r = pt.timers,
                    a = pt._data(this);
                    if (o) a[o] && a[o].stop && i(a[o]);
                    else for (o in a) a[o] && a[o].stop && cn.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1)); (e || !n) && pt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"),
                this.each(function() {
                    var e, n = pt._data(this),
                    i = n[t + "queue"],
                    o = n[t + "queueHooks"],
                    r = pt.timers,
                    a = i ? i.length: 0;
                    for (n.finish = !0, pt.queue(this, t, []), o && o.cur && o.cur.finish && o.cur.finish.call(this), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }),
        pt.each({
            slideDown: G("show"),
            slideUp: G("hide"),
            slideToggle: G("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        },
        function(t, e) {
            pt.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }),
        pt.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? pt.extend({},
            t) : {
                complete: n || !n && e || pt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !pt.isFunction(e) && e
            };
            return i.duration = pt.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in pt.fx.speeds ? pt.fx.speeds[i.duration] : pt.fx.speeds._default,
            (null == i.queue || i.queue === !0) && (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function() {
                pt.isFunction(i.old) && i.old.call(this),
                i.queue && pt.dequeue(this, i.queue)
            },
            i
        },
        pt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return.5 - Math.cos(t * Math.PI) / 2
            }
        },
        pt.timers = [],
        pt.fx = V.prototype.init,
        pt.fx.tick = function() {
            var t, e = pt.timers,
            n = 0;
            for (on = pt.now(); e.length > n; n++) t = e[n],
            t() || e[n] !== t || e.splice(n--, 1);
            e.length || pt.fx.stop(),
            on = a
        },
        pt.fx.timer = function(t) {
            t() && pt.timers.push(t) && pt.fx.start()
        },
        pt.fx.interval = 13,
        pt.fx.start = function() {
            rn || (rn = setInterval(pt.fx.tick, pt.fx.interval))
        },
        pt.fx.stop = function() {
            clearInterval(rn),
            rn = null
        },
        pt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        pt.fx.step = {},
        pt.expr && pt.expr.filters && (pt.expr.filters.animated = function(t) {
            return pt.grep(pt.timers,
            function(e) {
                return t === e.elem
            }).length
        }),
        pt.fn.offset = function(t) {
            if (arguments.length) return t === a ? this: this.each(function(e) {
                pt.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                top: 0,
                left: 0
            },
            o = this[0],
            r = o && o.ownerDocument;
            return r ? (e = r.documentElement, pt.contains(e, o) ? (typeof o.getBoundingClientRect !== K && (i = o.getBoundingClientRect()), n = X(r), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        pt.offset = {
            setOffset: function(t, e, n) {
                var i = pt.css(t, "position");
                "static" === i && (t.style.position = "relative");
                var o, r, a = pt(t),
                s = a.offset(),
                c = pt.css(t, "top"),
                l = pt.css(t, "left"),
                u = ("absolute" === i || "fixed" === i) && pt.inArray("auto", [c, l]) > -1,
                d = {},
                f = {};
                u ? (f = a.position(), o = f.top, r = f.left) : (o = parseFloat(c) || 0, r = parseFloat(l) || 0),
                pt.isFunction(e) && (e = e.call(t, n, s)),
                null != e.top && (d.top = e.top - s.top + o),
                null != e.left && (d.left = e.left - s.left + r),
                "using" in e ? e.using.call(t, d) : a.css(d)
            }
        },
        pt.fn.extend({
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                    return "fixed" === pt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), pt.nodeName(t[0], "html") || (n = t.offset()), n.top += pt.css(t[0], "borderTopWidth", !0), n.left += pt.css(t[0], "borderLeftWidth", !0)),
                    {
                        top: e.top - n.top - pt.css(i, "marginTop", !0),
                        left: e.left - n.left - pt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || Z.documentElement; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position");) t = t.offsetParent;
                    return t || Z.documentElement
                })
            }
        }),
        pt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        },
        function(t, e) {
            var n = /Y/.test(e);
            pt.fn[t] = function(i) {
                return pt.access(this,
                function(t, i, o) {
                    var r = X(t);
                    return o === a ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : (r ? r.scrollTo(n ? pt(r).scrollLeft() : o, n ? o: pt(r).scrollTop()) : t[i] = o, a)
                },
                t, i, arguments.length, null)
            }
        }),
        pt.each({
            Height: "height",
            Width: "width"
        },
        function(t, e) {
            pt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            },
            function(n, i) {
                pt.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin": "border");
                    return pt.access(this,
                    function(e, n, i) {
                        var o;
                        return pt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : i === a ? pt.css(e, n, s) : pt.style(e, n, i, s)
                    },
                    e, r ? i: a, r, null)
                }
            })
        }),
        r.jQuery = r.$ = pt,
        n(2) && n(2).jQuery && (i = [], o = function() {
            return pt
        }.apply(e, i), !(void 0 !== o && (t.exports = o)))
    } (window)
},
function(t, e) { (function(e) {
        t.exports = e
    }).call(e, {})
},
function(t, e) {
    "use strict";
    Array.prototype.map || (Array.prototype.map = function(t, e) {
        var n, i, o;
        if (null == this) throw new TypeError(" this is null or not defined");
        var r = Object(this),
        a = r.length >>> 0;
        if ("[object Function]" != Object.prototype.toString.call(t)) throw new TypeError(t + " is not a function");
        for (e && (n = e), i = new Array(a), o = 0; o < a;) {
            var s, c;
            o in r && (s = r[o], c = t.call(n, s, o, r), i[o] = c),
            o++
        }
        return i
    })
},
function(t, e, n) {
    var i = n(5),
    o = n(14);
    $.extend({
        time33: function(t) {
            for (var e = 0,
            n = t.length,
            i = 5381; e < n; ++e) i += (i << 5) + t.charAt(e).charCodeAt();
            return 2147483647 & i
        },
        getJsonp: function(t, e, n, i) {
            return $.isFunction(n) && (i = n),
            $.get(t, e, i, "jsonp")
        },
        getJson: function(t, e, n, i) {
            return $.isFunction(n) && (i = n),
            $.get(t, e, i, "json")
        },
        getToken: function() {
            var t = i.getSkey(),
            e = t ? $.time33(t) : "";
            return e
        },
        ajaxQueue: function(t) {
            t = t || {};
            var e, n = t.urls,
            i = t.success ||
            function() {},
            o = t.error ||
            function() {},
            r = t.complete ||
            function() {},
            a = t.beforeSend ||
            function() {},
            s = [];
            return n = "array" == $.type(n) ? n: [n],
            a(),
            $.each(n,
            function(t, e) {
                s.push($.ajax(e))
            }),
            e = $.when.apply(null, s).always(r).done(i).fail(o).promise(),
            e.success = e.done,
            e.error = e.fail,
            e.complete = e.always,
            e
        },
        ajaxSetup: function() {
            var t = $.ajaxSetup;
            return function(e, n) {
                return e = t(e, n),
                e.CSRF && (e.data = e.data || {},
                e.data.g_tk = $.getToken()),
                e.charset && (e.scriptCharset = e.charset),
                e.low_login && (e.data = e.data || {},
                e.data.low_login = 1),
                "script" == e.dataType && e.cache !== !1 && (e.cache = !0),
                e
            }
        } ()
    }),
    $.ajaxSetup({
        timeout: 3e4,
        charset: "utf-8"
    }),
    function() {
        function t(t) {
            var e = encodeURIComponent,
            n = t.bizCode,
            i = t.bizMsg,
            o = +n <= 0 ? "&bizcode=" + n: "",
            r = i ? "&bizmsg=" + e(i) : "",
            a = new Image(1, 1);
            a.src = "//btrace.qq.com/kvcollect?BossId=4140&Pwd=1431567924&protocol=" + t.protocol + "&url=" + e(location.href) + "&host=" + t.host + "&path=" + e(t.path) + "&query=" + e(t.query) + "&delay=" + t.delay + "&httpcode=" + t.httpCode + o + r + "&_dc=" + Math.random()
        }
        function e(t, n) {
            var i, o, r = /ret|code|status|state|res|em/i,
            a = /msg|message/i,
            s = /re[ts]/i;
            for (var c in t) {
                var l = t[c],
                u = +i <= 0,
                d = "string" == typeof o;
                if (u && d) break;
                if (!u) if ("o" === l && "s" === c) i = 0;
                else {
                    var f = parseInt(l) && +l;
                    f <= 0 && r.test(c) && (i = f)
                }
                if (d || "string" == typeof l && a.test(c) && (o = l), !n && "object" == typeof l && s.test(c)) {
                    var p = e(l, !0);
                    i = p.ret,
                    o = p.msg
                }
            }
            return {
                ret: i,
                msg: o
            }
        }
        function n(n, i) {
            var o;
            if (o = "object" == typeof n ? n: i, "jsonp" != o.dataType && "script" != o.dataType) return s.apply(this, arguments);
            var r, a, f = o.beforeSend,
            p = o.success,
            h = o.error,
            g = !1,
            v = 0,
            m = l;
            o.beforeSend = function(t) {
                v = (new Date).getTime(),
                r = t,
                a = this,
                f && f.apply(this, arguments)
            };
            var _ = function(n) {
                setTimeout(function() {
                    var i, o, r = (new Date).getTime() - v;
                    if (n && "object" == typeof n) {
                        var s = e(n);
                        i = s.ret,
                        o = s.msg
                    }
                    var c = document.createElement("a");
                    c.href = a.url;
                    var l = c.pathname;
                    /^\//.test(l) || (l = "/" + l),
                    t({
                        protocol: c.protocol.replace(/:$/, ""),
                        host: c.host,
                        path: l,
                        query: c.search.replace(/^\?/, "") + c.hash,
                        delay: r,
                        httpCode: m,
                        bizCode: i,
                        bizMsg: o
                    })
                })
            };
            o.success = function(t, e) {
                _(t),
                p && p.apply(this, arguments)
            };
            var y = function() {
                g || (g = !0, _(), h && h.apply(this, arguments))
            };
            o.error = function(t, e, n) {
                m = "timeout" === n ? d: u,
                y.apply(this, arguments)
            };
            var x = s.apply(this, arguments);
            try {
                var b = c[0].firstChild;
                b.onerror = function(t) {
                    m = u,
                    y.call(a, r, null, t)
                }
            } catch(w) {}
            return x
        }
        function r() {
            parseInt(i.getUin()) % 97 === 10 && ($.ajax = n)
        }
        function a() {
            $.ajax = s
        }
        if (!$.realAjax) {
            var s = $.realAjax = $.ajax,
            c = document.getElementsByTagName("head"),
            l = 200,
            u = 555,
            d = 556;
            if (!o.ie) {
                var f = document.createElement("div");
                f.innerHTML = "&nbsp;",
                f.className = "adsbox",
                document.body.appendChild(f);
                var p = !0,
                h = function() {
                    p && (p = !1, 0 === f.offsetHeight && (l = 557, u = 558, d = 559), f.remove())
                };
                try {
                    h()
                } catch(g) {}
                window.setTimeout(h, 100)
            }
            i.addLoginCallback(r),
            i.addLogoutCallback(a),
            r()
        }
    } ()
},
function(t, e, n) {
    var i = n(6),
    o = n(7),
    r = n(14),
    a = n(15),
    s = (n(10), n(9)),
    c = n(12),
    l = ~location.host.indexOf(".v.qq.com") ? "v.qq.com": location.host,
    u = function() {},
    d = function(t) {
        var e = this,
        n = {};
        t = t || {},
        this.getConfig = function(e) {
            return t[e]
        },
        this.setConfig = function(e, n) {
            "string" == typeof e ? t[e] = n: $.extend(t, e)
        },
        $.each(["ClearLoginStatus", "OpenLogin", "CloseLogin", "Login", "LoginCancel", "Logout", "UserInfoChanged"],
        function(t, i) {
            if (!n[i]) {
                var o = $.Callbacks("unique");
                n[i] = o,
                e["add" + i + "Callback"] = o.add,
                e["remove" + i + "Callback"] = o.remove,
                e["empty" + i + "Callback"] = o.empty,
                e["on" + i] = o.fireWith
            }
        }),
        $.each(["Ready"],
        function(t, i) {
            if (!n[i]) {
                var o = $.Callbacks("unique memory once");
                n[i] = o,
                e["add" + i + "Callback"] = o.add,
                e["remove" + i + "Callback"] = o.remove,
                e["empty" + i + "Callback"] = o.empty,
                e["on" + i] = o.fireWith
            }
        })
    };
    $.each(["getUin", "getNick", "getAvatar", "getSkey", "openLogin", "logout", "isLogin", "clearLoginCookie", "getEncUin", "setStatus"],
    function(t, e) {
        d.prototype[e] = function() {}
    });
    var f = function() {
        var t = null;
        return {
            init: function(e) {
                t instanceof d ? t.setConfig(e) : (t = new d(e), $.extend(f, t))
            }
        }
    } ();
    $.extend(d.prototype, {
        isLogin: function() {
            return "wx" == this.getLoginType() || this.getUinOnly() > 1e4
        },
        isQQLogin: function() {
            return "wx" != this.getLoginType() && this.getUinOnly() > 1e4
        },
        isWxLogin: function() {
            return "wx" == this.getLoginType()
        },
        isLowLogin: function() {
            if (p.isWxLogin()) return ! 1;
            var t = $.trim(i.get("skey")),
            e = $.trim(i.get(p.getConfig("uinCookie")));
            return p.isQQLogin() && (!t || !e)
        },
        isStrongLogin: function() {
            if (p.isWxLogin()) return ! 0;
            var t = $.trim(i.get("skey")),
            e = $.trim(i.get(p.getConfig("uinCookie")));
            return p.isQQLogin() && !!t && !!e
        },
        getWxAuthCookies: function() {
            return p.isWxLogin() ? {
                access_token: i.get("access_token"),
                appid: i.get("appid"),
                openid: i.get("openid"),
                vuserid: i.get("vuserid"),
                vusession: i.get("vusession")
            }: null
        },
        getWxCookies: function(t, e) {
            "om.qq.com" != location.host && p.loadVideoCookie(function(n) {
                if (n) {
                    1 == e && (txv.ua.ie || window.navigator.userAgent.indexOf("Edge") > -1 ? "v.qq.com" == location.host && (i.set("uin", "", location.host, "/", -24), i.set("skey", "", location.host, "/", -24), i.set("lskey", "", location.host, "/", -24), i.set("luin", "", location.host, "/", -24)) : e = 0);
                    var o = p.videoCookieFun.getWxCookie(e);
                    i.set(p.getConfig("typeCookie"), o.main_login, l, "/", p.getConfig("cookieTime")),
                    o.vuserid && o.vusession ? (i.set("vuserid", o.vuserid, l, "/", p.getConfig("cookieTime")), i.set("vusession", o.vusession, l, "/", p.getConfig("cookieTime"))) : (i.set("vuserid", "", l, "/", -24), i.set("vusession", "", l, "/", -24)),
                    "wx" == o.main_login && (o && o.access_token && o.openid && o.vuserid && o.vusession && o.appid == p.config.wxAppid ? (i.set("access_token", o.access_token, l, "/", p.getConfig("cookieTime")), i.set("openid", o.openid, l, "/", p.getConfig("cookieTime")), i.set("appid", o.appid, l, "/", p.getConfig("cookieTime"))) : (i.set(p.getConfig("wxNickCookie"), "", l, "/", -24), i.set(p.getConfig("wxHeadCookie"), "", l, "/", -24), i.set("access_token", "", l, "/", -24), i.set("openid", "", l, "/", -24), i.set("appid", "", l, "/", -24), o = null)),
                    t && t(o)
                } else t && t(null)
            })
        },
        getUnicode: function() {
            var t = i.get("vuserid");
            return t && t.length > 0 ? parseInt(t, 10) : 0
        },
        getUin: function() {
            if ("wx" == this.getLoginType()) return 0;
            if ("" == this.getSkey()) return 0;
            var t = parseInt(i.get(this.getConfig("uinCookie")).replace(/^o0*/g, ""), 10);
            return (!t || t <= 1e4) && (t = parseInt(i.get(this.getConfig("luinCookie")).replace(/^o0*/g, ""), 10), !t || t <= 1e4) ? 0 : t
        },
        getEncUin: function() {
            if ("wx" == this.getLoginType()) return 0;
            if ("" == this.getSkey()) return "";
            var t = i.get(this.getConfig("encuinCookie"));
            if ("" == t) return t;
            var e = t.split("|");
            return e[1] && e[1] == this.getUinOnly() ? decodeURIComponent(e[0]) : ""
        },
        getNick: function() {
            if ("wx" == this.getLoginType()) return p.getWxNick();
            if ("" == this.getSkey()) return "";
            var t = i.get(this.getConfig("nickCookie"));
            if ("" == t) return t;
            var e = t.split("|");
            if (e[1] && e[1] == this.getUinOnly()) try {
                return decodeURIComponent(e[0])
            } catch(n) {
                return e[0]
            }
            return ""
        },
        getAvatar: function(t) {
            if ("wx" == this.getLoginType()) return p.getWxHead();
            if ("" == this.getSkey()) return "";
            var e = i.get(this.getConfig("nickCookie"));
            if ("" == e) return e;
            var n = e.split("|"),
            o = this.getUinOnly();
            return n[1] && n[1] == o && n[2] ? (t = p.getValidAvatarSize(t), p.removeHttp(decodeURIComponent(n[2]).replace(/([\?&]?s=)40([&$])/, "$1" + t + "$2"))) : ""
        },
        getValidAvatarSize: function(t) {
            var e = p.getConfig("avatarSize");
            return $.inArray(t, e) == -1 ? e[0] : t
        },
        getRefreshTime: function(t) {
            if (t = t || "skey_wx_refresh_time", window.localStorage) {
                var e = window.localStorage.getItem(t);
                if (e > 0) {
                    var n = (new Date).getTime();
                    if (n - e < 6e5) return ! 0
                }
            }
            return ! 1
        },
        setRefreshTime: function(t) {
            if (t = t || "skey_wx_refresh_time", window.localStorage) {
                var e = (new Date).getTime();
                try {
                    window.localStorage.setItem(t, e)
                } catch(n) {}
            }
        },
        refreshWxLogin: function(t, e) {
            if (!t) {
                if (p.getRefreshTime()) return ! 1;
                p.setRefreshTime()
            }
            return p.getWxCookies(function(n) {
                if (!n) return void(t && t());
                var o = p.config.wxRefresh_cgi;
                e && (o += "?write=1"),
                $.ajax({
                    url: o,
                    type: "get",
                    dataType: "jsonp",
                    timeout: 3e4,
                    success: function(e) {
                        e && 0 == e.errcode ? (location.host.indexOf("qq.com") >= 0 && (i.set("access_token", e.access_token, l, "/", p.getConfig("cookieTime")), i.set("vusession", e.vusession, l, "/", p.getConfig("cookieTime"))), p.setLogintime(), p.refreshTokenWxCgi(e.next_refresh_time)) : p.reportToBoss({
                            oper: 11,
                            main_type: "wx",
                            msg: "cgi: " + p.config.wxRefresh_cgi + "; code: " + (e ? e.errcode: "") + "; msg: " + (e ? e.msg: e)
                        },
                        !1,
                        function() {
                            e && $.inArray(e.errcode, [1006, 1010, -12]) != -1 && p.clearLoginCookie()
                        }),
                        t && t()
                    }
                })
            }),
            !0
        },
        getLoginType: function() {
            return i.get(this.getConfig("typeCookie"))
        },
        getUinOnly: function() {
            if ("" == this.getSkey()) return 0;
            var t = parseInt(i.get(this.getConfig("uinCookie")).replace(/^o0*/g, ""), 10);
            return (!t || t <= 1e4) && (t = parseInt(i.get(this.getConfig("luinCookie")).replace(/^o0*/g, ""), 10), !t || t <= 1e4) ? 0 : t
        },
        checkQQUin: function() {
            if (0 == p.getConfig("useStrictLogin")) {
                var t = parseInt(i.get(this.getConfig("uinCookie")).replace(/^o0*/g, ""), 10),
                e = parseInt(i.get(this.getConfig("luinCookie")).replace(/^o0*/g, ""), 10);
                t && e && t != e && (i.set(p.getConfig("luinCookie"), "", ".qq.com", "/", -24), i.set("lskey", "", ".qq.com", "/", -24))
            }
        },
        getSkey: function() {
            var t = $.trim(i.get("skey"));
            return this.getConfig("useStrictLogin") ? t: t || $.trim(i.get("lskey"))
        },
        getWxHead: function() {
            var t = i.get(this.getConfig("wxHeadCookie"));
            return t ? p.removeHttp(t) : ""
        },
        getWxNick: function() {
            return decodeURIComponent(i.get(this.getConfig("wxNickCookie")))
        },
        reportToBoss: function(t, e, n) {
            var o = "//btrace.video.qq.com/kvcollect?BossId=3098&Pwd=390647416&";
            t = t || {};
            var r = p.getLoginType();
            if (t.main_type = t.main_type || r, "wx" == r ? t.uin = i.get("vuserid") : t.uin = p.getUinOnly(), t.host = location.host, t.url = location.href, 11 == t.oper) p.getWxCookies(function(i) {
                var r = "";
                if (i && "object" == typeof i) for (var a in i) r += a + "=" + i[a] + "; ";
                var l = document.cookie;
                p.getLogintime(function(n) {
                    n && (t.init_time = n.login_time_init || n.login_time_last || "", t.last_time = n.login_time_last || ""),
                    t.cookies = l,
                    t.hc = r;
                    var i = $.param(t),
                    a = [o, i, "&_dc=", Math.random()].join("");
                    e ? s.push(a) : c(a)
                }),
                n && n()
            });
            else {
                var a = $.param(t),
                l = [o, a, "&_dc=", Math.random()].join("");
                e ? s.push(l) : c(l)
            }
        },
        setLogintime: function(t) {
            t = t || 2;
            var e = new Date;
            p.loadVideoCookie(function(n) {
                n && p.videoCookieFun.setLogintime(t, e)
            })
        },
        getLogintime: function(t) {
            p.loadVideoCookie(function(e) {
                if (e) {
                    var n = p.videoCookieFun.getLogintime();
                    t && t(n)
                } else t && t()
            })
        },
        loadVideoCookie: function(t) {
            if ("object" == typeof p.videoCookieFun) t && t(!0);
            else {
                var e = !0,
                n = '<iframe style="display:none;" src="' + p.config.videoCookieUrl + '" frameborder="0"></iframe>';
                $("body").append(n),
                window.loadVideoCookie = function(n) {
                    p.videoCookieFun = n,
                    e && (t && t(!0), e = !1)
                },
                setTimeout(function() {
                    e && (t && t(!1), e = !1)
                },
                1e3)
            }
        },
        refreshTokenWxCgi: function(t) {
            var e = 6600;
            t && t > 0 && t < 6600 && (e = t),
            e = 1e3 * e,
            p.refreshTokenWxTimer && clearTimeout(p.refreshTokenWxTimer),
            p.refreshTokenWxTimer = setTimeout(function() {
                p.refreshWxLogin() || p.refreshTokenWxCgi()
            },
            e)
        },
        renewSkey: function(t) {
            t = t || 18e5,
            p.refreshSkeyTimer && clearTimeout(p.refreshSkeyTimer),
            p.refreshSkeyTimer = setTimeout(function() {
                p.renewSkeyRequest() || p.renewSkey()
            },
            t)
        },
        renewSkeyRequest: function() {
            return ! p.isQQLogin() || !p.isStrongLogin() || !p.getRefreshTime("skey_renew_time") && (p.setRefreshTime("skey_renew_time"), $.ajax({
                url: p.config.userInfo_cgi,
                data: {
                    otype: "json",
                    datakey: "basicinfo"
                },
                type: "get",
                dataType: "jsonp",
                timeout: 3e4,
                success: function(t) {
                    if (t && 0 == t.err_code) {
                        if (0 == t.is_token_valid) return void p.clearLoginCookie();
                        p.setLogintime(),
                        p.renewSkey()
                    } else p.renewSkey(2e3)
                }
            }).fail(function() {
                p.renewSkey(2e3)
            }), !0)
        },
        setReady: function() {
            p.getConfig("hasReady") || (p.onReady(p, [p.isLogin()]), p.setConfig("hasReady", !0))
        },
        setVideoQQLogin: function(t) {
            $.ajax({
                url: p.config.qqLogin_cgi,
                type: "get",
                dataType: "jsonp",
                success: function() {
                    p.getWxCookies(),
                    t && t(!0)
                }
            }).fail(function(e) {
                t && t(!1)
            })
        },
        getQQNick: function(t, e) {
            $.ajax({
                url: p.config.userInfo_cgi,
                data: {
                    otype: "json",
                    datakey: "basicinfo"
                },
                type: "get",
                dataType: "jsonp",
                timeout: 3e4,
                success: function(n) {
                    if (!n || 0 != n.err_code || 0 == n.err_code && 0 == n.is_token_valid) {
                        var o = "";
                        return n && (o = 0 == n.err_code && 0 == n.is_token_valid ? n.err_msg + " is_token_valid=0": n.err_msg),
                        void p.reportToBoss({
                            oper: 11,
                            main_type: "qq",
                            msg: "cgi: " + p.config.userInfo_cgi + "; code: " + (n ? n.err_code: "") + "; msg: " + o
                        },
                        !1,
                        function() {
                            n && 0 == n.is_token_valid && p.clearLoginCookie(),
                            p.setReady()
                        })
                    }
                    if (n.user_basic && n.user_basic.user_id && n.user_basic.user_id.length > 0) {
                        var r = n.user_basic;
                        r.has100 = r.has_100 ? 1 : 0,
                        r.head = p.removeHttp(r.head),
                        location.host.indexOf("qq.com") >= 0 && ("undefined" != typeof r.encuin && i.set(p.getConfig("encuinCookie"), r.encuin + "|" + p.getUinOnly(), l, "/", p.getConfig("cookieTime")), i.set(p.getConfig("nickCookie"), [encodeURIComponent(r.nick), p.getUinOnly(), r.head, r.has100].join("|"), l, "/", p.getConfig("cookieTime"))),
                        p.showOnline(r.nick, r.head, r.has100)
                    } else p.showOnline();
                    p.setReady(),
                    1 == t && "function" == typeof p.getConfig("success") && (p.getConfig("success")(), p.setConfig("success", null)),
                    !p.getConfig("disLogCallback") && e && p.onLogin(),
                    p.setConfig("disLogCallback", !1),
                    1 == e && (p.reportToBoss({
                        oper: 10,
                        main_type: "qq"
                    }), p.setRememberType("qq"), c("//ncgi.video.qq.com/tvideo/fcgi-bin/loginstat"), p.setLogintime(1)),
                    p.renewSkey()
                }
            }).fail(function(e) {
                p.setReady(),
                p.showOnline(),
                1 == t && "function" == typeof p.getConfig("success") && (p.getConfig("success")(), p.setConfig("success", null)),
                1 == t && p.onLogin(),
                p.reportToBoss({
                    oper: 11,
                    main_type: "qq",
                    msg: "cgi: " + p.config.userInfo_cgi + "; code: ajax fail; msg: " + (e && e.statusText ? e.statusText: "")
                }),
                p.renewSkey()
            })
        },
        setStatus: function(t, e, n, o) {
            var n = n || p.getLoginType();
            if ("wx" != n && 0 == p.getUinOnly()) return p.clearLoginCookie(),
            void p.setReady();
            if ("wx" == n) if ("string" == typeof o) {
                p.getWxCookies(function(e) {
                    0 != t && "function" == typeof p.getConfig("success") && (p.getConfig("success")(), p.setConfig("success", null)),
                    0 != t && p.onLogin(),
                    p.refreshTokenWxCgi(e.next_refresh_time),
                    p.reportToBoss({
                        oper: 10,
                        main_type: "wx"
                    })
                });
                var r = $.parseJSON(o);
                r.head = r.head || p.getConfig("defaultHead"),
                r.nick = decodeURIComponent(r.nick) || "",
                location.host.indexOf("qq.com") >= 0 && (i.set(p.getConfig("typeCookie"), "wx", l, "/", p.getConfig("cookieTime")), i.set(p.getConfig("wxNickCookie"), encodeURIComponent(r.nick), l, "/", p.getConfig("cookieTime")), i.set(p.getConfig("wxHeadCookie"), r.head, l, "/", p.getConfig("cookieTime"))),
                p.showOnline(r.nick, r.head, 0),
                p.setRememberType("wx"),
                p.setLogintime(1)
            } else $.ajax({
                url: p.config.wxRefresh_cgi,
                type: "get",
                dataType: "jsonp",
                timeout: 3e4,
                success: function(e) {
                    if (!e || 0 != e.errcode) return void p.reportToBoss({
                        oper: 11,
                        main_type: "wx",
                        msg: "cgi: " + p.config.wxRefresh_cgi + "; code: " + (e ? e.errcode: "") + "; msg: " + (e ? e.msg: e)
                    },
                    !1,
                    function() {
                        if (e && $.inArray(e.errcode, [1006, 1010, -12]) != -1) p.clearLoginCookie();
                        else {
                            var n = {
                                head: p.getWxHead() || p.getConfig("defaultHead"),
                                nick: p.getWxNick() || ""
                            };
                            p.showOnline(n.nick, n.head, 0),
                            p.refreshWxLogin(function() {
                                0 != t && "function" == typeof p.getConfig("success") && (p.getConfig("success")(), p.setConfig("success", null)),
                                0 != t && p.onLogin()
                            })
                        }
                        p.setReady()
                    });
                    location.host.indexOf("qq.com") >= 0 && (i.set("access_token", e.access_token, l, "/", p.getConfig("cookieTime")), i.set("vusession", e.vusession, l, "/", p.getConfig("cookieTime")));
                    var n = {
                        head: e.head || p.getWxHead() || p.getConfig("defaultHead")
                    };
                    e.nick ? n.nick = decodeURIComponent(e.nick) : n.nick = p.getWxNick() || "",
                    location.host.indexOf("qq.com") >= 0 && (i.set(p.getConfig("wxNickCookie"), encodeURIComponent(n.nick), l, "/", p.getConfig("cookieTime")), i.set(p.getConfig("wxHeadCookie"), n.head, l, "/", p.getConfig("cookieTime"))),
                    p.setReady(),
                    p.showOnline(n.nick, n.head, 0),
                    0 != t && "function" == typeof p.getConfig("success") && (p.getConfig("success")(), p.setConfig("success", null)),
                    0 != t && p.onLogin(),
                    p.setLogintime(),
                    p.refreshTokenWxCgi(e.next_refresh_time)
                }
            }).fail(function(e) {
                var n = {
                    head: p.getWxHead() || p.getConfig("defaultHead"),
                    nick: p.getWxNick() || ""
                };
                p.showOnline(n.nick, n.head, 0),
                p.refreshWxLogin(function() {
                    0 != t && "function" == typeof p.getConfig("success") && (p.getConfig("success")(), p.setConfig("success", null)),
                    0 != t && p.onLogin()
                }),
                p.setReady(),
                p.reportToBoss({
                    oper: 11,
                    main_type: "wx",
                    msg: "cgi: " + p.config.wxRefresh_cgi + "; code: ajax fail; msg: " + (e && e.statusText ? e.statusText: "")
                })
            });
            else 1 == e || "" == p.getLoginType() ? (p.getWxCookies(), p.setVideoQQLogin(function(n) {
                n ? p.getQQNick(t, e) : (p.setReady(), p.reportToBoss({
                    oper: 11,
                    main_type: "qq",
                    msg: "cgi: " + p.config.qqLogin_cgi + "; code: ajax fail; msg: " + (r && r.statusText ? r.statusText: "")
                }))
            })) : (p.getQQNick(t), i.get("vuserid") && i.get("vusession") || p.setVideoQQLogin())
        },
        showOnline: function(t, e, n) {
            var o = $("#login_nick,[data-type='nickname'],._nickname"),
            r = $("#login_action"),
            a = $("[data-type='avatar'],._avatar");
            try {
                "string" == typeof t && (t = decodeURIComponent(t))
            } catch(s) {}
            if (t = t || p.getNick(), o.text(t), r.text(p.getConfig("logout_btn_text")), r.unbind("click"), r.bind("click", p.logout), "undefined" == typeof n) {
                var c = i.get(this.getConfig("nickCookie")),
                l = c.split("|");
                "" == c || l.length < 4 ? n = 1 : l[1] && l[1] == this.getUinOnly() && (n = "undefined" != typeof l[3] ? l[3] : 1)
            }
            if (a.size() > 0) {
                var u = new Image,
                d = p.removeHttp("string" == typeof e ? e: p.getAvatar());
                u.onload = function() {
                    a.each(function(t, e) {
                        var i = $(e),
                        o = p.getValidAvatarSize(parseInt(i.attr("data-avatarsize"), 10)),
                        r = d;
                        1 == n && (r = d.replace(/([\?&]?s=)40([&$])/, "$1" + o + "$2")),
                        i.attr("src", r)
                    })
                },
                u.src = d
            }
            var f = $("[data-type='account_type_logo']");
            if (f.size() > 0) {
                var h = $(".__account_type_qq"),
                g = $(".__account_type_wx");
                h.size() > 0 && g.size() > 0 && (p.isWxLogin() ? (h.addClass("none"), g.removeClass("none"), $(".__accout_type_name").html("微信账号:")) : (g.addClass("none"), h.removeClass("none"), $(".__accout_type_name").html("QQ账号:"))),
                f.show()
            }
        },
        showNotLogin: function() {
            var t = $("#login_nick,_nickname"),
            e = $("#login_action");
            t.html(p.getConfig("logout_nick_html")),
            e.text(p.getConfig("login_btn_text")),
            e.unbind("click"),
            e.bind("click", p.openLogin),
            $("[data-type='account_type_logo']").hide()
        },
        showMask: function(t, e, n, i, o) {
            var a, s = $("#" + t);
            if (i = "undefined" == typeof i || i, document.getElementById("mask_layer") ? $("#mask_layer").show() : ($("body").append('<div id="mask_layer" class="mask_layer"></div>'), 6 == r.ie && $("#mask_layer").css("height", document.documentElement.scrollHeight)), 0 != s.length) {
                if (i) if (p.showAtCenter(document.getElementById(t), e, n), 6 == r.ie || window != top) {
                    var c = window != top ? top: window,
                    l = null;
                    $.isFunction(p.onHideMask) && p.onHideMask(),
                    o = $.isFunction(o) ? o: u,
                    a = function() {
                        clearTimeout(l),
                        l = setTimeout(function() {
                            p.showAtCenter(document.getElementById(t), e, n),
                            o()
                        },
                        50)
                    },
                    p.onHideMask = function() {
                        $(c).unbind("scroll", a)
                    },
                    $(c).bind("scroll", a)
                } else s.css("position", "fixed");
                "function" == typeof p.onShowMask && p.onShowMask()
            }
        },
        hideMask: function() {
            $("#mask_layer").hide(),
            $.isFunction(p.onHideMask) && p.onHideMask()
        },
        innerLoginCss: function() {
            if (0 == $("link[href$='login_dialog.css']").size()) {
                var t = "//vm.gtimg.cn/tencentvideo/vstyle/web/common/style/login_dialog.css?v=20170209&max_age=86400",
                e = document.createElement("link");
                e.setAttribute("type", "text/css"),
                e.setAttribute("rel", "stylesheet"),
                e.setAttribute("href", t),
                $("head")[0].appendChild(e)
            }
        },
        getShiftCookies: function(t) {
            var e = null,
            n = null,
            o = [];
            if ("" != this.getSkey()) {
                var r = i.get(this.getConfig("nickCookie"));
                if ("" != r) {
                    var a = r.split("|");
                    if (e = {},
                    a[1] && (e.uin = a[1]), a[0]) try {
                        e.nick = decodeURIComponent(a[0])
                    } catch(s) {
                        e.nick = a[0]
                    }
                    if (a[2]) {
                        var c = p.getValidAvatarSize(100);
                        e.head = decodeURIComponent(a[2]).replace(/([\?&]?s=)40([&$])/, "$1" + c + "$2")
                    }
                    e.type = "qq"
                }
            }
            e && o.push(e);
            var l = i.get(p.getConfig("wxNickCookie"));
            l && (n = {},
            n.nick = decodeURIComponent(l), n.head = i.get(this.getConfig("wxHeadCookie")), n.type = "wx", n && o.push(n)),
            t(o)
        },
        innerOpenloginHtml: function(t, e) {
            var n = '<div id="login_win" class="login_dialog"><iframe src="about:blank" frameborder="0" class="iframe_mask"></iframe><a href="javascript:void(0)" id="login_close" class="btn_close" title="关闭"><span class="btn_inner">关闭</span></a><div class="login_tab"><ul class="tab_list';
            e && (n += " tab_list_single"),
            n += '"><li class="list_item _list_item_qq" data-type="qq"><a href="javascript:void(0);" class="tab_item tab_item_qq"><i class="ico_loginqq"></i><span class="item_inner">QQ账号登录</span></a></li><li class="list_item _list_item_wx" data-type="wx"><a href="javascript:void(0);" class="tab_item tab_item_wx"><i class="ico_loginwx"></i><span class="item_inner">微信账号登录</span></a></li></ul></div><div class="login_tips"><div class="tips_txt">微信和QQ是两个独立账号，账号信息不互通</div><div class="tips_notes">登录后高清播放更流畅</div></div><div class="login_cont"><div class="cont_inner cont_inner_qq"><div class="login_iframe login_iframe_qq"><iframe name="_login_frame_quick_" id="_login_frame_quick_" frameborder="no" scrolling="no" style="width:626px; height:370px;" src="about:blank"></iframe></div>',
            e && (n += '<div class="login_iframe_change"><a class="change_link" href="javascript:;" data-type="wx">切换<span class="name">微信账号</span>登录 &gt;&gt;</a></div>'),
            n += '</div><div class="cont_inner cont_inner_wx"><div class="login_iframe login_iframe_wx"><label class="iframe_title">安全登录，防止被盗</label><iframe name="_login_frame_wechat_" id="_login_frame_wechat_" frameborder="no" scrolling="no" style="width:100%; height:215px;" src="about:blank"></iframe>',
            p.config.wxLoginTxt && (n += '<p class="iframe_tips">' + p.config.wxLoginTxt + "</p>"),
            n += "</div>",
            e && (n += '<div class="login_iframe_change"><a class="change_link" href="javascript:;" data-type="qq">切换<span class="name">QQ账号</span>登录 &gt;&gt;</a></div>'),
            n += "</div></div></div>",
            $("body").append(n);
            var i = $("#login_win");
            i.find("._list_item_" + t).addClass("current"),
            i.find(".cont_inner_" + t).addClass("cont_inner_in"),
            "wx" == t ? p.innerSetWxSrc() : p.innerSetQqSrc(),
            e ? i.find(".change_link").unbind("click").bind("click",
            function(t) {
                t.preventDefault();
                var e = $(this).attr("data-type");
                "wx" == e ? p.innerSetWxSrc() : p.innerSetQqSrc(),
                i.find(".current").removeClass("current"),
                i.find("._list_item_" + e).addClass("current"),
                i.find(".cont_inner_in").removeClass("cont_inner_in"),
                i.find(".cont_inner_" + e).addClass("cont_inner_in"),
                p.reportToBoss({
                    oper: 27,
                    main_type: e
                })
            }) : i.find(".list_item").unbind("click").bind("click",
            function(t) {
                t.preventDefault();
                var e = $(this),
                n = e.attr("data-type");
                "wx" == n ? p.innerSetWxSrc() : p.innerSetQqSrc(),
                i.find(".current").removeClass("current"),
                i.find("._list_item_" + n).addClass("current"),
                i.find(".cont_inner_in").removeClass("cont_inner_in"),
                i.find(".cont_inner_" + n).addClass("cont_inner_in"),
                p.reportToBoss({
                    oper: 22,
                    main_type: n
                })
            }),
            $("#login_close").unbind("click").bind("click",
            function(t) {
                t.preventDefault(),
                $("#login_win").remove(),
                p.isOpend = !1,
                p.hideMask(),
                p.reportToBoss({
                    oper: 21
                }),
                p.onLoginCancel(),
                p.onCloseLogin();
                var e = p.getConfig("rejectLogin");
                "function" == typeof e && e()
            })
        },
        getFullUrl: function(t) {
            return t && 0 != t.length ? 0 == t.indexOf("http") ? t: window.location.protocol + t: t
        },
        innerSetQqSrc: function() {
            if (p.config.loadQqIframe) {
                var t = p.getFullUrl(p.config.jumpurl),
                e = p.getFullUrl(p.config.clientjumpurl),
                n = p.getFullUrl(p.getPtloginUrl()),
                i = (p.getFullUrl("//i.gtimg.cn/qqlive/images/20130521/i1369106644_1.jpg?max_age=6048000"), "");
                window.__j_url = e,
                n += "&style=20&hln_logo=" + encodeURIComponent(i);
                var o = [n, "&hide_close_icon=1&appid=", p.config.appid, "&f_url=loginerroralert&qlogin_auto_login=0", "&s_url=", escape(p.getFullUrl("//v.qq.com/toolpages/redirect.html?clientjumpurl=") + escape(e || window.location.href) + "&jumpurl=" + t)].join("");
                $("#_login_frame_quick_").attr("src", o),
                p.config.loadQqIframe = !1
            }
        },
        innerSetWxSrc: function() {
            if (p.config.loadWxIframe) {
                var t = p.getFullUrl("//open.weixin.qq.com/connect/qrconnect?appid=") + p.config.wxAppid,
                e = [t, "&redirect_uri=", escape(p.getFullUrl(p.config.wxLogin_cgi)), "&response_type=code&scope=snsapi_login&state=111&href=", escape("https://vm.gtimg.cn/tencentvideo/vstyle/web/common/style/iframe_login_wx.css")].join("");
                $("#_login_frame_wechat_").attr("src", p.config.wxLoginUrl ? p.getFullUrl(p.config.wxLoginUrl) : e),
                p.config.loadWxIframe = !1
            }
        },
        openTypeTipDlg: function(t) {
            if (!document.getElementById("login_win_type")) {
                var e = '<div id="login_win_type" class="login_dialog"><iframe src="about:blank" frameborder="0" class="iframe_mask"></iframe><a href="javascript:;" class="btn_close" title="关闭"><span class="btn_inner">关闭</span></a><div class="login_tab"><div class="tab_title"><span class="title_inner">选择登录账号类型</span></div></div><div class="login_cont"><div class="cont_inner cont_inner_in"><div class="login_choose"><div class="login_avatar"><i class="ico_avatar"></i></div><div class="login_btns"><a href="javascript:;" class="btn_qq _login_type_item" data-type="qq"><span class="btn_inner">QQ登录</span></a><a href="javascript:;" class="btn_weixin _login_type_item" data-type="wx""><span class="btn_inner">微信登录</span></a></div></div></div></div></div>';
                $("body").append(e);
                var n = document.getElementById("login_win_type"),
                i = 622,
                o = 418;
                p.config.showMask && !a.useHtml5() ? p.showMask("login_win_type", i, o) : p.showAtCenter(n, i, o);
                var r = $("#login_win_type");
                r.find(".btn_close").unbind("click").bind("click",
                function(t) {
                    t.preventDefault(),
                    r.remove(),
                    p.hideMask(),
                    p.onLoginCancel(),
                    p.onCloseLogin(),
                    p.reportToBoss({
                        oper: 25
                    })
                }),
                r.find("._login_type_item").unbind("click").bind("click",
                function(e) {
                    e.preventDefault(),
                    r.remove();
                    var n = $(this).attr("data-type");
                    p.reportToBoss({
                        oper: 24,
                        main_type: n
                    }),
                    p.innerOpenlogin(t, n),
                    p.setRememberType(n)
                }),
                p.reportToBoss({
                    oper: 23
                })
            }
        },
        openLoginSingle: function(t, e) {
            e || (e = p.getLoginType()),
            e = e || "qq",
            p.innerLoginCss(),
            p.innerOpenlogin(t, e, !0),
            p.reportToBoss({
                oper: 26,
                main_type: e
            })
        },
        openLogin: function(t, e) {
            if (p.innerLoginCss(), "qq" == e || "wx" == e) p.innerOpenlogin(t, e);
            else {
                var n = i.get(p.getConfig("rememberTypeCookie"));
                n && n.length > 0 ? p.innerOpenlogin(t, n) : p.openTypeTipDlg(t)
            }
            p.reportToBoss({
                oper: 20,
                main_type: e
            })
        },
        setRememberType: function(t) {
            i.set(p.getConfig("rememberTypeCookie"), t, l, "/", 175200)
        },
        innerOpenlogin: function(t, e, n) {
            p.isOpend = !0,
            $.extend(p.config, t),
            p.setConfig(t),
            p.config.loadWxIframe = !0,
            p.config.loadQqIframe = !0;
            var i, r = 622,
            s = 418;
            if (null == document.getElementById("login_win") && p.innerOpenloginHtml(e, n), i = document.getElementById("login_win"), !i) return void setTimeout(function() {
                p.openLogin(t)
            },
            50);
            i.style.display = "none",
            p.config.showMask && !a.useHtml5() ? p.showMask("login_win", r, s) : p.showAtCenter(i, r, s);
            try {
                p.isLogin() && "" != p.getSkey() && o.button("LOGIN.UIN_OPEN")
            } catch(c) {}
            p.onOpenLogin()
        },
        getPtloginUrl: function() {
            var t = "//xui.ptlogin2.qq.com/cgi-bin/xlogin?link_target=blank&target=self";
            return this.getConfig("useStrictLogin") || (t += "&low_login=1"),
            t
        },
        showAtCenter: function(t, e, n) {
            a.showAtCenter(t, e, n)
        },
        deleteLoginAccount: function(t) {
            "wx" == t ? (i.set(p.getConfig("wxNickCookie"), "", l, "/", -24), i.set(p.getConfig("wxHeadCookie"), "", l, "/", -24)) : (t = "qq", i.set(p.getConfig("nickCookie"), "", l, "/", -24), i.set(p.getConfig("encuinCookie"), "", l, "/", -24), 0 == p.getConfig("useStrictLogin") && (i.set(p.getConfig("luinCookie"), "", ".qq.com", "/", -24), i.set("lskey", "", ".qq.com", "/", -24)), i.set("skey", "", ".qq.com", "/", -24)),
            $.ajax({
                url: p.config.wxLogout_cgi + "?clear=0&type=" + t,
                type: "get",
                dataType: "jsonp",
                timeout: 3e4,
                success: function(t) {}
            }),
            p.setLogintime(3)
        },
        clearLoginCookie: function(t, e, n) {
            e = e || p.getLoginType(),
            "wx" == e ? (i.set(p.getConfig("wxNickCookie"), "", l, "/", -24), i.set(p.getConfig("wxHeadCookie"), "", l, "/", -24), i.set("access_token", "", l, "/", -24), i.set("openid", "", l, "/", -24), i.set("appid", "", l, "/", -24), i.set("vuserid", "", l, "/", -24), i.set("vusession", "", l, "/", -24)) : (e = "qq", i.set(p.getConfig("nickCookie"), "", l, "/", -24), i.set(p.getConfig("encuinCookie"), "", l, "/", -24), i.set("vuserid", "", l, "/", -24), i.set("vusession", "", l, "/", -24), 0 == p.getConfig("useStrictLogin") && (i.set(p.getConfig("luinCookie"), "", ".qq.com", "/", -24), i.set("lskey", "", ".qq.com", "/", -24)), i.set("skey", "", ".qq.com", "/", -24)),
            i.set(p.getConfig("typeCookie"), "", l, "/", -24),
            $.ajax({
                url: p.config.wxLogout_cgi + "?clear=1&type=" + e,
                type: "get",
                dataType: "jsonp",
                timeout: 3e4,
                success: function() {
                    p.showNotLogin(),
                    ("boolean" != typeof t || t) && p.onClearLoginStatus(),
                    n && n()
                }
            })
        },
        logout: function(t) {
            p.reportToBoss({
                oper: 12
            }),
            p.clearLoginCookie(!0, null,
            function() {
                "function" == typeof p.getConfig("logout") && p.getConfig("logout")(t),
                p.onLogout(t)
            }),
            p.setLogintime(3)
        },
        removeHttp: function(t) {
            return t.replace(/^http\:/, "")
        }
    }),
    f.init();
    var p = f;
    $.extend(p, {
        config: {
            typeCookie: "main_login",
            cookieTime: 720,
            rememberTypeCookie: "login_remember",
            wxAppid: "wx5ed58254bc0d6b7f",
            wxNickCookie: "wx_nick",
            wxHeadCookie: "wx_head",
            wxLoginUrl: "",
            wxLoginTxt: "",
            videoCookieUrl: "//video.qq.com/getcookie/cookie.html",
            wxGetCookie_cgi: "//video.qq.com/fcgi-bin/get_cookie",
            wxLogin_cgi: "//video.qq.com/fcgi-bin/wx_login?from=1",
            wxRefresh_cgi: "//video.qq.com/fcgi-bin/check_login",
            wxLogout_cgi: "//video.qq.com/fcgi-bin/logout",
            loadWxIframe: !0,
            loadQqIframe: !0,
            qqLogin_cgi: "//video.qq.com/fcgi-bin/qq_login",
            defaultHead: "//vm.gtimg.cn/tencentvideo_v1/vstyle/web/v3/style/images/default_avatar.png",
            userInfo_cgi: "//video.qq.com/fcgi-bin/get_user_profile",
            appid: "532001601",
            uinCookie: "uin",
            luinCookie: "luin",
            encuinCookie: "encuin",
            nickCookie: "lw_nick",
            quickLogin: !0,
            jumpurl: "",
            clientjumpurl: null,
            showMask: !0,
            success: null,
            logout: null,
            rejectLogin: null,
            login_cgi: "//c.video.qq.com/cgi-bin/login?otype=json&nes=1",
            show_uniq: !1,
            show_content: "",
            login_btn_text: "登录",
            logout_btn_text: "[退出]",
            logout_nick_html: "",
            hasReady: !1,
            disLogCallback: !1,
            useStrictLogin: !1,
            avatarSize: [40, 100]
        },
        init: function(t, e) { / qqlive / i.test(navigator.userAgent) || (i.set("main_login", "", ".qq.com", "/", -24), i.set("access_token", "", ".qq.com", "/", -24), i.set("openid", "", ".qq.com", "/", -24), i.set("appid", "", ".qq.com", "/", -24), i.set("vuserid", "", ".qq.com", "/", -24), i.set("vusession", "", ".qq.com", "/", -24)),
            e = !!e,
            $.extend(this.config, t),
            this.setConfig(this.config),
            p.getWxCookies(function(t) {
                p.setStatus(e, !1)
            },
            1),
            p.checkQQUin(),
            $(document).delegate("[data-type='logout']", "click",
            function(t) {
                t.preventDefault(),
                p.logout()
            }).delegate("[data-type='login']", "click",
            function(t) {
                t.preventDefault(),
                p.clearLoginCookie(),
                p.openLogin()
            }),
            setTimeout(function() {
                var t = "";
                "wx" == p.getLoginType() ? t = "wx": p.getUinOnly() > 1e4 && (t = "qq"),
                p.reportToBoss({
                    oper: 1,
                    main_type: t
                })
            },
            0)
        }
    }),
    p.setConfig(p.config),
    function() {
        var t = $.isFunction(window.ptlogin2_onResize) ? window.ptlogin2_onResize: $.noop,
        e = $.isFunction(window.ptlogin2_onClose) ? window.ptlogin2_onClose: $.noop,
        n = $.isFunction(window.ptlogin2_onSuccess) ? window.ptlogin2_onSuccess: $.noop,
        i = $.isFunction(window.__rdt__) ? window.__rdt__: $.noop;
        window.ptlogin2_onResize = function(e, n) {
            e < 10 || n < 10 || (document.getElementById("_login_frame_quick_").style.height = n + "px", document.getElementById("_login_frame_quick_").style.width = e + "px", t(e, n))
        },
        window.ptlogin2_onClose = function(t) {
            var n = p.getConfig("rejectLogin");
            $("#login_win").remove(),
            p.isOpend = !1,
            p.hideMask(),
            t ? ptlogin2_onSuccess() : ("function" == typeof n && n(), p.setConfig("success", null), p.onLoginCancel()),
            p.onCloseLogin(),
            e(t)
        },
        window.ptlogin2_onSuccess = function() {
            p.checkQQUin(),
            txv.login.isWxLogin() ? txv.login.clearLoginCookie(!1, "wx",
            function() {
                p.setStatus(!0, !0, "qq"),
                n()
            }) : (p.setStatus(!0, !0, "qq"), n())
        },
        window.__rdt__ = function() {
            if (__j_url) for (; __j_url.indexOf("%") != -1 && __j_url.indexOf("?") == -1;) __j_url = unescape(__j_url);
            else window.location.reload();
            window.location.href = __j_url,
            i()
        },
        window.wxlogin_onSuccess = function(t) {
            $("#login_win").remove(),
            p.isOpend = !1,
            p.hideMask(),
            p.onCloseLogin(),
            p.setStatus(!0, !1, "wx", t)
        }
    } (),
    t.exports = p
},
function(t, e) {
    "use strict";
    t.exports = {
        set: function(t, e, n, i, o) {
            if (o) {
                var r = new Date,
                a = new Date;
                a.setTime(r.getTime() + 36e5 * o)
            }
            return document.cookie = t + "=" + e + "; " + (o ? "expires=" + a.toGMTString() + "; ": "") + (i ? "path=" + i + "; ": "path=/; ") + (n ? "domain=" + n + ";": "domain=" + window.location.host + ";"),
            !0
        },
        get: function(t, e) {
            var n = new RegExp("(?:^|;+|\\s+)" + t + "=([^;]*)"),
            i = (e || document.cookie).match(n);
            return i ? i[1] : ""
        },
        del: function(t, e, n) {
            var i = new Date;
            i.setTime(i.getTime() - 1),
            document.cookie = t + "=; expires=" + i.toGMTString() + ";" + (n ? "path=" + n + "; ": "path=/; ") + (e ? "domain=" + e + ";": "domain=" + window.location.host + ";")
        }
    }
},
function(t, e, n) {
    var i = {
        jspath: "//pingjs.qq.com/ping_video.js",
        isBusy: !1,
        comscorePath: "https:" == location.protocol ? "https://sb.scorecardresearch.com/beacon.js": "http://b.scorecardresearch.com/beacon.js",
        comscoreParam: {
            c1: 2,
            c2: 6036207
        },
        keyPrefix: "ISD.LIVEWEB.",
        initPGVGlobalParam: function() {
            pgvVirtualDomain = "",
            pvCurDomain = "",
            pvCurUrl = ""
        },
        hot: function(t) {
            function e() {
                i.isBusy = !1,
                i.initPGVGlobalParam(),
                pgvSendClick({
                    hottag: i.keyPrefix + t
                })
            }
            "function" == typeof pgvSendClick ? e() : i.isBusy ? setTimeout(function() {
                i.hot(t)
            },
            20) : (i.isBusy = !0, $.ajax({
                url: i.jspath,
                success: e,
                error: i.errReport,
                dataType: "script"
            }))
        },
        button: function(t, e, n) {
            function o() {
                if (i.isBusy = !1, "undefined" == typeof e) {
                    var o = t,
                    r = t.split(".");
                    r.length > 0 && (o = r[0]),
                    o += ".html",
                    e = "/virtualpage/" + o
                }
                i.initPGVGlobalParam(),
                "function" == typeof pgvSendClick && ("undefined" != typeof n ? pgvSendClick({
                    hottag: i.keyPrefix + t,
                    virtualURL: e,
                    virtualDomain: n
                }) : pgvSendClick({
                    hottag: i.keyPrefix + t,
                    virtualURL: e
                }))
            }
            "string" == typeof t && ("function" == typeof pgvSendClick ? o() : i.isBusy ? setTimeout(function() {
                i.button(t, e, n)
            },
            20) : (i.isBusy = !0, $.ajax({
                url: i.jspath,
                success: o,
                error: i.errReport,
                dataType: "script"
            })))
        },
        senseParam: null,
        pv: function(t) {
            var e = {};
            e["v.qq.com"] = !0,
            e["film.qq.com"] = !0,
            e["3g.v.qq.com"] = !0,
            e["m.v.qq.com"] = !0,
            e["videopage.qzone.qq.com"] = !0,
            e["cache.tv.qq.com"] = !0,
            e["imgcache.qq.com"] = !0,
            e["piao.v.qq.com"] = !0,
            e["ticket.v.qq.com"] = !0;
            var o = n(8);
            e[location.host] && "undefined" != typeof o && o.report();
            var r = {};
            r["v.qq.com"] = !0,
            r["film.qq.com"] = !0,
            r["cache.tv.qq.com"] = !0,
            r["imgcache.qq.com"] = !0,
            r["sns.video.qq.com"] = !0,
            r["piao.v.qq.com"] = !0,
            r["ticket.v.qq.com"] = !0,
            r[location.host] && (i.pv_irt(), i.pv_comscore()),
            i.pv_pgv(t)
        },
        pv_pgv: function(t) {
            function e() {
                if (n.isBusy = !1, n.initPGVGlobalParam(), "undefined" != typeof pgvVirtualURL && (pgvVirtualURL = ""), "undefined" != typeof pvRepeatCount && (pvRepeatCount = 1), t || n.senseParam) {
                    var e = {};
                    n.senseParam && $.extend(e, {
                        senseParam: n.senseParam
                    }),
                    t && ($.extend(e, t), t.virtualURL && (pvCurUrl = t.virtualURL)),
                    "function" == typeof pgvMain && pgvMain("", e)
                } else "function" == typeof pgvMain && pgvMain()
            }
            t = t || {},
            top != window && (t.statIframe = !0);
            var n = this;
            "function" == typeof pgvMain ? e() : n.isBusy ? setTimeout(function() {
                n.pv_pgv(t)
            },
            20) : (n.isBusy = !0, $.ajax({
                url: n.jspath,
                success: e,
                error: n.errReport,
                dataType: "script"
            }))
        },
        pv_irt: function() {
            var t = n(13);
            "undefined" != typeof t && t.init("")
        },
        pv_comscore: function() {
            var t = this,
            e = n(6);
            setTimeout(function() {
                $.getScript(t.comscorePath,
                function() {
                    "undefined" == typeof t.comscoreParam.c10 && (t.comscoreParam.c10 = e.get("pvid"));
                    try {
                        COMSCORE.beacon(t.comscoreParam)
                    } catch(n) {
                        t.button("comscore.error")
                    }
                })
            },
            2e3)
        },
        watch: function() {
            var t = this;
            $("body").on("click",
            function() {
                "function" == typeof pgvWatchClick && (t.initPGVGlobalParam(), pgvWatchClick())
            })
        },
        performance: function(t, e, n) {
            var i = window.performance || window.msPerformance || window.webkitPerformance;
            if (i) {
                i = i.timing;
                var o = [],
                r = i.domainLookupStart;
                o[0] = i.domainLookupEnd,
                o[1] = i.requestStart,
                o[2] = i.responseStart,
                o[3] = i.responseEnd,
                o[4] = i.domComplete,
                o[5] = i.loadEventEnd;
                for (var a = [["//isdspeed.qq.com/cgi-bin/r.cgi?flag1=", t, "&flag2=", e, "&flag3=", n].join("")], s = 0, c = o.length; s < c; s++) o[s] && a.push(s + 1 + "=" + (o[s] - r));
                window._speed_img = new Image,
                window._speed_img.src = a.join("&")
            }
        },
        errReport: function() {
            var t = this;
            setTimeout(function() {
                "undefined" == typeof window.pingjsReqImg && (window.pingjsReqImg = new Image),
                window.pingjsReqImg.src = ["http://rcgi.video.qq.com/web_report?cmd=2563", "&str1=", encodeURIComponent(t.jspath)].join(""),
                t.isBusy = !1
            },
            0)
        }
    };
    t.exports = i
},
function(t, e, n) {
    var i = (n(9), n(6)),
    o = n(11),
    r = n(12),
    a = {
        dm: location.hostname || location.host,
        idx: 1,
        hotKeyName: "_stat",
        report: function() {
            var t = this,
            e = t.dm,
            n = this.getPtag();
            "" != n && this.setCookiePtag("ptag", n, e);
            var i = 0,
            r = {
                "cache.tv.qq.com": 1,
                "imgcache.qq.com": 1,
                "film.qq.com": 2,
                "3g.v.qq.com": 3,
                "m.v.qq.com": 4
            };
            r[e] && (i = r[e]),
            this.reportToBoss({
                BossId: 3487,
                Pwd: 745225177,
                itype: i,
                idx: t.idx,
                ptag: n,
                qtag: o.getQtag(),
                refer: document.referrer,
                url: document.URL || document.location.href
            }),
            t.idx++
        },
        reportToBoss: function(t) {
            window.location.href.indexOf("/cover/") > 0 && window.COVER_INFO && window.COVER_INFO.typeid > 0 && (t.type = window.COVER_INFO.typeid);
            var e = "//btrace.video.qq.com/kvcollect?",
            n = "";
            n = $.param(t);
            var i = [e, n, "&_=", Math.ceil(1e3 * Math.random())].join("");
            r(i)
        },
        getPtag: function() {
            for (var t = document.location.toString().toLowerCase(), e = this.dm, n = "", i = ["ptag", "adtag", "pgv_ref"], o = 0, r = i.length; o < r && !(n = a.getUrlParam(i[o], t)); o++);
            if (!n) {
                var s = this.getDomainOfURL(document.referrer);
                "" != s && e != s && (n = s.replace(/\./g, "_")),
                n || (n = this.getCookiePtag("ptag"))
            }
            return n
        },
        getDomainOfURL: function(t) {
            var e = "";
            if ("undefined" == typeof t || null == t || "" == t) return e;
            var n = /.*\:\/\/([^\/]*).*/,
            i = t.match(n);
            return "undefined" != typeof i && null != i && (e = i[1]),
            e
        },
        getCookiePtag: function(t) {
            t = t || "ptag";
            var e = i.get(t),
            n = e.split("|");
            return n[0]
        },
        setCookiePtag: function(t, e, n) {
            for (var o = i.get(t), r = o.split("|"), a = [e], s = 1, c = r.length; s < c; s++) a.push("|" + r[s]);
            i.set(t, a.join(""), n)
        },
        getUrlParam: function(t, e) {
            e = e || location.href;
            var n, i = new RegExp("[?&#]" + t + "=([^&#]+)", "gi"),
            o = e.match(i);
            return o && o.length > 0 ? (n = o[o.length - 1].split("="), n && n.length > 1 ? n[1] : "") : ""
        },
        initPageHotKey: function() {
            if ("function" == typeof $ && $.fn && $.fn.jquery) {
                var t = function(t) {
                    return t && 1 == t.nodeType
                };
                $(document).off("click", "a").on("click", "a",
                function(e) {
                    if (t(this)) {
                        for (var n = null,
                        i = e.target; this != i && t(i);) {
                            if (i.getAttribute(a.hotKeyName)) {
                                n = i;
                                break
                            }
                            i = i.parentNode
                        }
                        n || this.getAttribute(a.hotKeyName) && (n = this),
                        n && o.checkQtag(n, e)
                    }
                })
            }
        },
        getCurPageType: function(t) {
            if ("string" == typeof PAGEHOT) return PAGEHOT;
            var e = "others";
            return "undefined" == typeof txv ? e: (window.COVER_INFO && window.COVER_INFO.typeid > 0 && (e = window.COVER_INFO.typeid), e)
        },
        bindBtnTj: function() {
            $("._hotkey").bind("click",
            function() {
                a.btnTj(this.getAttribute(a.hotKeyName))
            })
        },
        btnTj: function(t) {
            "string" == typeof t && (t = t.replace("{pagetype}", a.getCurPageType())),
            n(7).button(t)
        },
        initPtag: function() {
            var t = this.dm,
            e = this.getPtag();
            "" != e && this.setCookiePtag("ptag", e, t)
        }
    };
    a.initPtag(),
    t.exports = a
},
function(module, exports, __webpack_require__) {
    var lazyreport = function() {
        var reg = /^(?:(?:ht|f)tp(?:s)?\:)?\/\/(?:[\w\-\.]+)\.\w+/i,
        mydomain = location.hostname || location.host,
        k = "txv_lazyreport_list",
        d = "|",
        Cookie = __webpack_require__(6),
        cookieMode = {
            get: function(t) {
                return Cookie.get(t)
            },
            set: function(t, e) {
                return Cookie.set(t, e, mydomain)
            },
            clear: function(t) {
                return Cookie.set(t, "", mydomain)
            }
        },
        sessionStorageMode = {
            isSupport: window.sessionStorage,
            get: function(t) {
                return sessionStorage.getItem(t)
            },
            set: function(t, e) {
                try {
                    sessionStorage.setItem(t, e)
                } catch(n) {}
                return ! 0
            },
            clear: function(t) {
                return sessionStorage.removeItem(t)
            }
        },
        qzstorage = __webpack_require__(10),
        qzflStorageMode = {
            isSupport: !!qzstorage,
            get: function(t, e) {
                qzstorage.get(t, e)
            },
            set: function(t, e) {
                qzstorage.set(t, e)
            },
            clear: function(t) {
                this.set(t, "")
            }
        },
        mode = function() {
            if (qzflStorageMode.isSupport) {
                var t = qzflStorageMode;
                return {
                    get: t.get,
                    set: t.set,
                    clear: t.clear
                }
            }
            if (sessionStorageMode.isSupport) {
                var e = sessionStorageMode;
                return {
                    get: function(t, n) {
                        var i = e.get(t);
                        return n(i),
                        i
                    },
                    set: e.set,
                    clear: e.clear
                }
            }
            var n = cookieMode;
            return {
                get: function(t, e) {
                    var i = n.get(t);
                    return e(i),
                    i
                },
                set: n.set,
                clear: n.clear
            }
        } (),
        _imgreport = function(t, e) {
            var n = new Image;
            n.onload = n.onerror = n.onabort = function() {
                delete n,
                e()
            },
            n.src = t
        },
        clear = function() {
            return mode.clear(k)
        },
        val = function(t) {
            mode.get(k,
            function(e) {
                t(e)
            })
        },
        push = function(t) {
            mode.get(k,
            function(e) {
                e && e.length > 0 ? e += d + encodeURIComponent(t) : e = encodeURIComponent(t),
                mode.set(k, e)
            })
        },
        shift = function(t) {
            mode.get(k,
            function(e) {
                if (e) {
                    var n = e.split(d),
                    i = n.shift();
                    mode.set(k, n.join(d)),
                    t(decodeURIComponent(i))
                }
            })
        },
        reportItem = function(item, cb) {
            reg.test(item) ? setTimeout(function() {
                _imgreport(item, cb)
            },
            0) : setTimeout(function() {
                try {
                    eval(item),
                    cb()
                } catch(e) {}
            },
            0)
        },
        report = function() {
            shift(function(t) {
                t && reportItem(t,
                function() {
                    report()
                })
            })
        };
        return {
            push: push,
            clear: clear,
            report: report
        }
    } ();
    module.exports = lazyreport
},
function(t, e) {
    var n = !1;
    try {
        n = "undefined" != typeof window.localStorage
    } catch(i) {}
    var o = {
        isSupport: n,
        get: function(t, e) {
            try {
                var n = localStorage.getItem(t);
                return "function" == typeof e && e(n),
                n
            } catch(i) {
                return "function" == typeof e && e(""),
                ""
            }
        },
        set: function(t, e) {
            try {
                return localStorage.setItem(t, e),
                !0
            } catch(n) {
                return ! 1
            }
        },
        remove: function(t) {
            try {
                localStorage.removeItem(t)
            } catch(e) {}
        },
        clear: function() {
            localStorage.clear()
        }
    };
    t.exports = o
},
function(t, e, n) {
    QTAG_SET_FLAG = !1;
    var i = n(6),
    o = {
        dm: location.hostname || location.host,
        hotKeyName: "_stat",
        qtagName: "_qtag",
        init: function() {
            var t = this,
            e = n(8),
            i = e.getDomainOfURL(document.referrer);
            t.dm != i && t.clearCookieQtag(),
            $(document).undelegate("[" + this.qtagName + "]", "click").delegate("[" + this.qtagName + "]", "click",
            function(e) {
                var n = QTAG_SET_FLAG,
                i = $(this);
                if (!n) {
                    var o = i.attr(this.qtagName);
                    o && "" != o && (t.setCookieQtag(o), QTAG_SET_FLAG = !0)
                }
            }),
            $("body").on("click",
            function(e) {
                var n = QTAG_SET_FLAG;
                if (!n && t.checkLinkTag(e, this)) {
                    var i = t.getDefaultQtag();
                    t.setCookieQtag(i)
                }
                QTAG_SET_FLAG = !1
            })
        },
        getQtag: function(t, e) {
            for (var n = this,
            i = t,
            o = document,
            r = ""; o != i && i && 1 == i.nodeType;) {
                var a = $(i),
                s = a.attr(n.qtagName);
                if (s && "" != s || (s = a.attr(n.hotKeyName)), s && "" != s) {
                    r = s;
                    break
                }
                i = i.parentNode
            }
            return "" == r && (r = n.getDefaultQtag()),
            r
        },
        checkQtag: function(t, e) {
            if (!QTAG_SET_FLAG) {
                var n = $(t),
                i = n.attr(o.qtagName);
                if (i && "" != i) return o.setCookieQtag(i),
                void(QTAG_SET_FLAG = !0);
                var r = n.attr(o.hotKeyName);
                r && "" != r && (o.setCookieQtag(r), QTAG_SET_FLAG = !0)
            }
        },
        getCookieQtag: function() {
            var t = i.get("ptag"),
            e = t.split("|");
            return e.length < 2 ? "": e[1]
        },
        setCookieQtag: function(t) {
            var e = "ptag",
            n = this,
            o = i.get(e),
            r = o.split("|"),
            a = [r[0], "|" + t];
            if (r.length > 2) for (var s = 2,
            c = r.length; s < c; s++) a.push("|" + r[s]);
            i.set(e, a.join(""), n.dm)
        },
        getDefaultQtag: function() {
            var t = location.pathname;
            if (t.length < 1 || "/" == t) return location.hostname.replace(/\./g, "_");
            var e = t.indexOf("/", 1);
            return e == -1 ? t.substring(1) : t.substring(1, e)
        },
        clearCookieQtag: function() {
            var t = "ptag",
            e = this,
            n = i.get(t),
            o = n.split("|");
            if (o.length > 1) {
                for (var r = [o[0]], a = 2, s = o.length; a < s; a++) r.push("|" + o[a]);
                i.set(t, r.join(""), e.dm)
            }
        },
        checkLinkTag: function(t, e) {
            var n = t.target;
            if ("A" == n.tagName || "A" == e.tagName) return ! 0;
            for (; e != n && n && 1 == n.nodeType;) {
                if ("A" == n.tagName) return ! 0;
                n = n.parentNode
            }
            return ! 1
        }
    };
    t.exports = o
},
function(t, e) {
    var n = function() {
        function t() {
            return 0 == r.length ? (i = !0, void(o = null)) : (a("error:" + r[0]), e(r.splice(0, 1)), void(i = !1))
        }
        function e(e) {
            o = document.createElement("img"),
            o.onerror = t,
            o.src = e
        }
        function n(t) {
            return t && /^(?:(?:ht|f)tp(?:s)?\:)?\/\/(?:[\w\-\.]+)\.\w+/i.test(t) ? null == o ? (a("first:" + t), e(t), void(i = !1)) : i ? (a("free:" + t), e(t), void(i = !1)) : (a("ready::" + t), void r.push(t)) : void a("error")
        }
        var i = !0,
        o = null,
        r = [],
        a = function() {
            var t = !!window.console && "function" == typeof window.console.log && location.href.indexOf("debug=true") != -1;
            return function(e) {
                t && window.console.log(e)
            }
        } ();
        return function(t, e) {
            if ("string" == typeof t) {
                if ("object" == $.type(e)) {
                    var i = [];
                    for (var o in e) i.push(o + "=" + encodeURIComponent("" + e[o]));
                    t += t.indexOf("?") > -1 ? "&" + i.join("&") : "?" + i.join("&")
                }
                n(t)
            }
        }
    } ();
    t.exports = n
},
function(t, e) {
    var n = {
        version: "0.0.7",
        dataHandler: "//tj.video.qq.com/fcgi-bin/set_cookie?otype=json&",
        dataHandler_video: "//tj.video.qq.com/fcgi-bin/set_cookie?otype=json&",
        _account: "",
        _u_eventid: "",
        _debug: !1,
        init: function(t) {
            this._account = t,
            this._track()
        },
        _trackStart: function(t) {
            return t.indexOf("-") < 0 ? "invalid user identify.": (this.init(t), this)
        },
        _track: function() {
            this._feedBack()
        },
        record_video_api: function(t, e, n, i) {
            return i + "" == "0" ? (this._u_eventid = Math.abs(parseInt((navigator.userAgent ^ (new Date).getTime()) * Math.random())) + t, void this._feedBack_video(t, e, n, i)) : void this._feedBack_video(t, e, n, i)
        },
        _feedBack: function() {
            var t = Array("id=" + this._account, "pt=" + encodeURIComponent(document.title), "dm=" + encodeURIComponent(window.location.host), "pa=" + encodeURIComponent(window.location.pathname), "sr=" + document.body.clientWidth + "x" + document.body.clientHeight, "ul=" + (navigator.language || "zh-CN"), "tv=" + this.version, "r=" + (new Date).getTime(), "url=" + encodeURIComponent(window.location.href), "ua=" + encodeURIComponent(navigator.userAgent.toString())).join("&"),
            e = this.dataHandler + t;
            this._img = new Image,
            this._img.src = e
        },
        _feedBack_video: function(t, e, n, i) {
            var o = Array("ta=" + i, "eid=" + this._u_eventid, "pt=" + encodeURIComponent(document.title), "vid=" + t, "du=" + e, "la=" + encodeURIComponent(n), "r=" + (new Date).getTime()).join("&"),
            r = this.dataHandler_video + o;
            this._img = new Image,
            this._img.src = r
        }
    };
    t.exports = n
},
function(t, e) {
    var n, i, o, r = {},
    a = navigator.userAgent,
    s = (navigator.appVersion, {});
    if (r.adjustBehaviors = function() {},
    window.ActiveXObject) {
        if (r.ie = 6, document.documentMode && (r.ie = document.documentMode), r.isBeta = navigator.appMinorVersion && navigator.appMinorVersion.toLowerCase().indexOf("beta") > -1, r.ie < 7) try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch(c) {}
        s._doc = document,
        o = function(t) {
            return function(e, n) {
                var i;
                return "function" == typeof e ? (i = Array.prototype.slice.call(arguments, 2), t(function() {
                    e.apply(null, i)
                },
                n)) : "string" == typeof e ? t(e, n) : void 0
            }
        },
        window.setTimeout = s._setTimeout = o(s.nativeSetTimeout = window.setTimeout),
        window.setInterval = s._setInterval = o(s.nativeSetInterval = window.setInterval)
    } else document.getBoxObjectFor || "undefined" != typeof window.mozInnerScreenX ? (n = /(?:Firefox|GranParadiso|Iceweasel|Minefield).(\d+\.\d+)/i, r.firefox = parseFloat((n.exec(a) || n.exec("Firefox/3.3"))[1], 10)) : navigator.taintEnabled ? window.opera ? r.opera = parseFloat(window.opera.version(), 10) : /Trident\/\d+.+rv:(\d+\.\d+?)/i.test(a) ? r.ie = RegExp.$1: r.ie = 6 : (i = /AppleWebKit.(\d+\.\d+)/i.exec(a), r.webkit = i ? parseFloat(i[1], 10) : document.evaluate ? document.querySelector ? 525 : 420 : 419, (i = /Chrome.(\d+\.\d+)/i.exec(a)) || window.chrome ? r.chrome = i ? parseFloat(i[1], 10) : "2.0": ((i = /Version.(\d+\.\d+)/i.exec(a)) || window.safariHandler) && (r.safari = i ? parseFloat(i[1], 10) : "3.3"), r.air = a.indexOf("AdobeAIR") > -1 ? 1 : 0, r.isiPod = a.indexOf("iPod") > -1, r.isiPad = a.indexOf("iPad") > -1, r.isiPhone = a.indexOf("iPhone") > -1); (r.macs = a.indexOf("Mac OS X") > -1) || (r.windows = (i = /Windows.+?(\d+\.\d+)/i.exec(a), i && parseFloat(i[1], 10)), r.linux = a.indexOf("Linux") > -1, r.android = a.indexOf("Android") > -1),
    r.iOS = a.indexOf("iPhone OS") > -1,
    !r.iOS && (i = /OS (\d+(?:_\d+)*) like Mac OS X/i.exec(a), r.iOS = !(!i || !i[1])),
    t.exports = r
},
function(t, e, n) {
    var i = {
        getUrlParam: function(t, e) {
            e = e || location.href;
            var n, i = new RegExp("[?&#]" + t + "=([^&#]+)", "gi"),
            o = e.match(i);
            return o && o.length > 0 ? (n = o[o.length - 1].split("="), n && n.length > 1 ? n[1] : "") : ""
        },
        addUrlParam: function(t, e) {
            e = e || document.URL || document.location.href;
            var n = e + "?";
            e.indexOf("?") > -1 && (n = e + "&");
            for (var i in t) if (this.getUrlParam(i, n)) {
                var o = new RegExp("([?&#]" + i + "=)([^&#]+)(.*?)", "i");
                n = n.replace(o, "$1" + t[i] + "$3")
            } else n = n + i + "=" + t[i] + "&";
            var r = n.length,
            a = n.charAt(r - 1);
            return "?" != a && "&" != a || (n = n.substring(0, r - 1)),
            n
        },
        useHtml5: function() {
            var t = navigator.userAgent,
            e = !1;
            return $.each(["iPhone", "iPad", "iPod"],
            function(n, i) {
                e || t.indexOf(i) == -1 || (e = !0)
            }),
            this.getUrlParam("usehtml5") || e
        },
        showAtCenter: function(t, e, n) {
            if (t) {
                var i = document.body.scrollTop;
                e = e || 373,
                n = n || 235,
                0 == i && (i = document.documentElement.scrollTop);
                var o = document.documentElement.clientHeight;
                0 == o && (o = document.body.clientHeight),
                t.style.width = e + "px",
                t.style.height = n + "px",
                t.style.top = "50%",
                t.style.left = "50%",
                t.style.marginLeft = -e / 2 + "px",
                t.style.marginTop = -n / 2 + "px",
                t.style.position = "fixed",
                t.style.zIndex = "10001",
                t.style.display = "block",
                t.style.padding = "0px",
                t.style.backgroundColor = "#ffffff"
            }
        },
        strToDate: function(t) {
            var e, n, i = /^(\d{4})-(\d{2})-(\d{2})(\s+?(\d{2}):(\d{2}):(\d{2}))?$/;
            return n = new Date(t),
            isNaN(n.getDate()) && $.isString(t) && (e = t.match(i)) && (n = e[4] && e[4].length > 0 ? new Date(parseInt(e[1], 10), parseInt(e[2], 10) - 1, parseInt(e[3], 10), parseInt(e[5], 10), parseInt(e[6], 10), parseInt(e[7], 10)) : new Date(parseInt(e[1], 10), parseInt(e[2], 10) - 1, parseInt(e[3], 10))),
            isNaN(n.getDate()) ? null: n
        },
        getVideoSnap: function(t, e) {
            var n, i, o = 1e8;
            if (t.indexOf("_") > 0) {
                var r = t.split("_");
                t = r[0],
                e = parseInt(r[1])
            }
            for (var a = 4294967296,
            o = 1e8,
            s = 0,
            c = 0; c < t.length; c++) {
                var l = t.charCodeAt(c);
                s = 32 * s + s + l,
                s >= a && (s %= a)
            }
            return i = s % o,
            void 0 == e && (e = 0),
            n = 0 == e ? ["//vpic.video.qq.com/", i, "/", t, "_160_90_3.jpg"].join("") : ["//vpic.video.qq.com/", i, "/", t, "_", "160_90_", e, "_1.jpg"].join("")
        },
        getFullUrlPath: function(t) {
            var e = window.location.host;
            return "sns.video.qq.com" != e && "play.v.qq.com" != e && "page.video.qq.com" != e || (e = "v.qq.com"),
            [window.location.protocol, "//", e, t].join("")
        },
        getPrevUrl: function(t, e, n) {
            "undefined" != typeof n && n || (n = 0);
            var i = [n <= 2 ? "/prev/": "/cover/", t.charAt(0), "/", t].join("");
            return i += e ? 2 == n ? "/" + e + ".html": ".html?vid=" + e: ".html"
        },
        getPlayUrl: function(t, e) {
            if (t = t || e, !t) return "";
            if (t.length > 0 && t === e) return this.getPlayUrl(t);
            if (15 == t.length) {
                var n = ["/x/cover/", t];
                return e ? n.push("/", e, ".html") : n.push(".html"),
                n.join("")
            }
            return this.getVideoPlayUrl(t)
        },
        getVideoPlayUrl: function(t) {
            return "string" != typeof t || t.length < 11 ? "": ["/x/page/", t, ".html"].join("")
        },
        getDetailUrl: function(t, e) {
            e = e || 0;
            var n = "";
            return n = 0 == e || $.inArray(e, [1, 2, 98]) >= 0 ? "/detail/": "/cover/",
            [n, t.charAt(0), "/", t, ".html"].join("")
        },
        getBokePlayUrl: function(t) {
            return "string" != typeof t || t.length < 11 ? "": ["/boke/page/", t.substr(0, 1), "/", t.substr(9, 1), "/", t.substr(10, 1), "/", t, ".html"].join("")
        },
        formatTimeBySec: function(t, e, n, i) {
            if (isNaN(t) || "string" != $.type(e)) return "";
            var o = {};
            return n = "boolean" != typeof n || n,
            i = "boolean" != typeof i || i,
            o.h = Math.floor(t / 3600),
            o.hh = o.h < 10 ? "0" + o.h: o.h,
            o.m = Math.floor(t / 60) - 60 * o.h,
            /{h+}/.test(e) || (o.m += 60 * o.h),
            o.mm = o.m < 10 ? "0" + o.m: o.m,
            o.s = t % 60,
            /{m+}/.test(e) || (o.s += 60 * o.m),
            o.ss = o.s < 10 ? "0" + o.s: o.s,
            o.h < 1 && !n && (e = e.replace(/{h+}[^{]+/, ""), o.m < 1 && (e = e.replace(/{m+}[^{]+/, ""))),
            o.s < 1 && !i && (e = e.replace(/{s+}[^{]+/, "")),
            e.replace(/{([smh]+)}/g,
            function(t, e) {
                return "undefined" == typeof o[e] ? t: o[e]
            })
        },
        getCoverImgtagHtml: function(t, e) {
            var n = "",
            o = '<sup class="{param}">{text}</sup>',
            r = '<span class="{param}"><em class="mark_inner">{text}</em></span>',
            a = '<span class="{param}"><em class="mask_txt">{text}</em></span>',
            s = '<sup class="{param}">{text}</sup>';
            return e = e || [1, 2, 3, 4],
            t && (t.tag_3 && t.tag_3.id > 0 && $.inArray(3, e) != -1 && (n += i.format(a, t.tag_3)), t.tag_4 && t.tag_4.id > 0 && $.inArray(4, e) != -1 && (n += i.format(s, t.tag_4)), t.tag_1 && t.tag_1.id > 0 && $.inArray(1, e) != -1 && (n += i.format(o, t.tag_1)), t.tag_2 && t.tag_2.id > 0 && $.inArray(2, e) != -1 && (n += i.format(r, t.tag_2))),
            n
        },
        format: function(t) {
            var e, n = Array.prototype.slice.call(arguments);
            t = String(n.shift()),
            1 == n.length && "object" == typeof n[0] && (n = n[0]);
            var o = /\{([\d\w\.]+)\}/g;
            return t.replace(o,
            function(t, o) {
                return e = i.route(n, o),
                void 0 === e ? t: e
            })
        },
        route: function(t, e) {
            t = t || {},
            e = String(e);
            for (var n, i = /([\d\w_]+)/g; null !== (n = i.exec(e)) && (t = t[n[0]], void 0 !== t && null !== t););
            return t
        },
        getCoverPic: function(t, e, n) {
            var i = "//i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/";
            return "string" == typeof t && (e = e || "", n = n || "", n.length > 0 && (n = "_" + n), i += [e, t.charAt(0), t + n + ".jpg"].join("/")),
            i
        }
    },
    o = n(16);
    i.verify = o,
    t.exports = i
},
function(t, e) {
    function n(t) {
        t = t || {};
        var e = {
            aid: "2000000010",
            clientype: "2",
            apptype: "1",
            captype: "7",
            disturblevel: "1",
            rand: Math.random()
        };
        return e = $.extend(e, t),
        o += $.param(e),
        $.isFunction(window.capInit) ? a.resolve() : r || (r = !0, $.getScript(o).done(function() {
            a.resolve()
        }).fail(function() {
            r = !1,
            a.reject()
        })),
        a
    }
    function i(t) {
        t = t || {},
        t.width = t.width || 300,
        t.height = t.height || 310;
        var e = "verify-code-container",
        i = document.getElementById(e);
        i || (i = document.createElement("div"), i.id = e, i.style.cssText = ["width:" + t.width + "px;", "height:" + t.height + "px;"].join(""), document.body.appendChild(i));
        var o = $.Deferred(),
        r = function() {
            var t = {
                type: "popup",
                showHeader: !0,
                needFeedBack: !1,
                themeColor: "a11bbb",
                pos: "fixed",
                callback: function(t) {
                    o.resolve(t)
                }
            };
            window.capDestroy && window.capDestroy(),
            capInit(i, t)
        };
        try {
            n(t.tcapConfig).done(r)
        } catch(a) {}
        return o
    }
    var o = "http://captcha.qq.com/template/TCapIframeApi.js?";
    "https:" == location.protocol && (o = "https://ssl.captcha.qq.com/template/TCapIframeApi.js?");
    var r = !1,
    a = $.Deferred();
    t.exports = i
},
function(t, e, n) {
    "use strict";
    function i(t) {
        this._con = t
    }
    function o() {
        return l || window.jQuery || window.$ || m
    }
    function r(t) {
        return "array" !== f.type(t) ? "": f.map(t,
        function(t) {
            return f.map(t,
            function(t) {
                return encodeURIComponent(t)
            }).join(",")
        }).join("|")
    }
    function a(t) {
        return "string" != typeof t ? [] : f.map(t.split("|"),
        function(t) {
            return f.map(t.split(","),
            function(t) {
                return decodeURIComponent(t)
            })
        })
    }
    function s(t) {
        function e(t, e) {
            return e = e || {},
            e.loaded = !0,
            g.hot(t, f.extend({},
            T, e))
        }
        function n(t, n, i) {
            return e([b, "event", t, n, i || ""]),
            this
        }
        function i(t, n, i) {
            return e([b, "click", t, n || "", i]),
            this
        }
        function h(t, n, i) {
            return e([b, "pageview", t, n || "", i || ""]),
            this
        }
        function m(t, e) {
            switch (t) {
            case "click":
                i.apply(this, e);
                break;
            case "pageview":
                h.apply(this, e);
                break;
            case "event":
                n.apply(this, e)
            }
        }
        function _(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            if (v) try {
                var n = localStorage.getItem(w);
                try {
                    n = a(n)
                } catch(i) {}
                return "array" !== f.type(n) && (n = []),
                n.push([t].concat(e)),
                void localStorage.setItem(w, r(n))
            } catch(i) {}
            m(t, e)
        }
        function y() {}
        var x = "index",
        b = "boss_common",
        w = b + "_lazy_reports",
        k = t && t.standard,
        C = t && t.loaded,
        T = {},
        q = {
            create: s,
            ptag: g.ptag,
            standard: function(t) {
                return s(f.extend({
                    standard: !0
                },
                t))
            },
            click: function(t, e) {
                return i(x, t, e || "")
            },
            event: function(t, e) {
                return n(x, t, e || "")
            },
            pv: h,
            pagestat: function(t) {
                var n = Array.prototype.slice.call(arguments, 1);
                return n.unshift(b, t, x),
                e(n),
                this
            },
            stat: function() {
                var t = Array.prototype.slice.call(arguments);
                return t.unshift(b),
                e(t),
                this
            },
            setApp: function(t) {
                return b = t,
                w = t + "_lazy_reports",
                setTimeout(function() {
                    q.flush()
                },
                1e3),
                this
            },
            setPage: function(t) {
                return x = t,
                this
            },
            setJQ: function(t) {
                return l = t,
                this
            },
            set: function(t) {
                return f.objEach(t,
                function(t, e) {
                    switch (t) {
                    case "loaded":
                        C = !!e;
                        break;
                    case "source":
                        T[t] = e
                    }
                }),
                this
            },
            bind2d: function(t, e, n, i, r) {
                var a = o(),
                s = this;
                return a(t).on("click", "[" + n + "]",
                function(t) {
                    var o = t.currentTarget,
                    c = a(o),
                    l = c.attr(n),
                    u = c.attr(i),
                    d = [];
                    r && (d = (c.attr(r) || "").split(/\,\s*/));
                    for (var f, p = 10; p && o && !(f = a(o).attr(e));) p--,
                    o = o.parentNode;
                    f && s.click.apply(s, [f, l, u].concat(d))
                }),
                this
            },
            bind: function(t, e) {
                var n = o();
                return n(t).on("click", "[" + e + "]",
                function(t) {
                    var o = t.currentTarget,
                    r = n(o),
                    a = r.attr(e);
                    if ("A" == o.tagName) {
                        var s = r.attr("href"),
                        c = r.attr("target"),
                        l = (s || "").match(/^([a-zA-Z]+)\:/);
                        if (l = l ? l[1] : "", !/^(javascript:|#)/.test(s) && !c && (!l || /^https?$/.test(l))) return void _("click", x, a, "")
                    }
                    i(x, a, "")
                }),
                this
            },
            bindLazy: function(t, e) {
                var n = o();
                return n(t).on("click", "[" + e + "]",
                function(t) {
                    var i = t.currentTarget,
                    o = n(i),
                    r = o.attr(e);
                    _("click", x, r, "")
                }),
                this
            },
            flush: function() {
                if (localStorage) try {
                    var t = localStorage.getItem(w);
                    localStorage.removeItem(w),
                    t && (t = a(t), f.forEach(t,
                    function(t) {
                        m(t[0], t.slice(1))
                    }))
                } catch(e) {}
                return this
            },
            uuidGetter: function(t) {
                return u = t,
                this
            },
            referrerGetter: function(t) {
                return d = t,
                this
            },
            host: function(t) {
                return g.host && g.host(t),
                this
            }
        };
        if (k) {
            var j = q.bind2d,
            S = document.body,
            $ = "_module",
            L = "_pos",
            E = [];
            q.bind = function(t, e, n, i) {
                return S = t || S,
                $ = e || $,
                L = n || L,
                j.call(q, S, $, L, i || "_detail", "_exts")
            },
            q.bind2d = q.bind;
            var N = {},
            I = 0;
            f.extend(q, {
                stat: y,
                pagestat: y,
                bindExpose: function(t, e, n, i) {
                    var r = o(),
                    a = t || S,
                    s = e || $,
                    l = n || L;
                    if (i = i || {},
                    !a.querySelectorAll) return this;
                    var u = a.querySelectorAll("[" + l + "]");
                    return f.forEach(u,
                    function(t) {
                        if (!t._binded_expose) {
                            t._binded_expose = !0;
                            var e = c($, t),
                            n = I++;
                            if (e) {
                                var o = r(e),
                                a = r(t),
                                u = p(t, {
                                    inview: !!i.inview,
                                    once: !0,
                                    enter: !0,
                                    recalc: !0,
                                    offset: i.inview ? 20 : 0,
                                    horiz: e.hasAttribute && e.hasAttribute("_horiz"),
                                    listenHoriz: !0
                                },
                                function() {
                                    var t = o.attr(s) || "",
                                    e = a.attr(l) || "",
                                    i = a.attr("_detail") || "",
                                    r = (a.attr("_exts") || "").split(/\,\s*/);
                                    t && q.expose.apply(q, [t, e, i].concat(r)),
                                    u && (delete N[n], u())
                                });
                                N[n] = u
                            }
                        }
                    }),
                    this
                },
                updateExpose: function() {
                    return p.message.emit("update"),
                    this
                },
                click: function(t, n, i) {
                    return arguments.length < 2 && (n = t, t = ""),
                    e([b, "click", x, t, n, i].concat(this.getExts(3, arguments)).concat(E), {
                        standard: k
                    }),
                    this
                },
                event: function(t, n, i) {
                    return arguments.length < 2 && (n = t, t = ""),
                    e([b, "event", x, t, n, i].concat(this.getExts(3, arguments)).concat(E), {
                        standard: k
                    }),
                    this
                },
                expose: function(t, n, i) {
                    return e([b, "expose", x, t, n, i].concat(this.getExts(3, arguments)).concat(E), {
                        standard: k
                    }),
                    this
                },
                pv: function(t, n, i, o) {
                    return e([b, "pageview", t || x, n, i, o].concat(this.getExts(4, arguments)).concat(E), {
                        standard: k
                    }),
                    this
                },
                exts: function() {
                    var t = [].slice.call(arguments, 0);
                    return E = t,
                    this
                },
                getExts: function(t, e) {
                    return e = [].slice.call(e, 0),
                    e.slice(t).concat(new Array(4)).slice(0, 4)
                }
            })
        }
        return q
    }
    function c(t, e) {
        for (var n, i = o(), r = 10; r && e && !(n = i(e).attr(t));) r--,
        e = e.parentNode;
        return e
    }
    var l, u, d, f = n(18),
    p = n(19),
    h = n(22),
    g = n(24),
    v = "localStorage" in window && null !== window.localStorage,
    m = function(t) {
        return new i(t)
    };
    i.prototype.on = function(t, e, n) {
        h(this._con, e, t,
        function(t) {
            n({
                currentTarget: t.delegateTarget
            })
        })
    },
    i.prototype.attr = function(t) {
        return this._con.getAttribute(t)
    },
    g.uuidGetter && g.uuidGetter(function() {
        if (u) try {
            return u()
        } catch(t) {}
    }),
    g.referrerGetter && g.referrerGetter(function() {
        if (d) try {
            return d()
        } catch(t) {}
    }),
    t.exports = s()
},
function(t, e) {
    "use strict";
    function n(t, e) {
        return t && t.hasOwnProperty && t.hasOwnProperty(e)
    }
    function i() {
        var t = this;
        return function() {
            setTimeout.apply(t, arguments)
        }
    }
    var o = void 0,
    r = {
        escape: function(t) {
            return t ? String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : ""
        },
        type: function(t) {
            if (null === t) return "null";
            if (t === o) return "undefined";
            var e = /\[object (\w+)\]/.exec(Object.prototype.toString.call(t));
            return e ? e[1].toLowerCase() : ""
        },
        keys: function(t) {
            var e = [];
            return t ? Object.keys ? Object.keys(t) : (this.objEach(t,
            function(t) {
                e.push(t)
            }), e) : e
        },
        bind: function(t, e) {
            return t.bind ? t.bind(e) : function() {
                return t.apply(e, arguments)
            }
        },
        extend: function(t) {
            if ("object" != this.type(t) && "function" != this.type(t)) return t;
            for (var e, i, o = 1,
            r = arguments.length; o < r; o++) {
                e = arguments[o];
                for (i in e) n(e, i) && (t[i] = e[i])
            }
            return t
        },
        trim: function(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/gm, "")
        },
        indexOf: function(t, e) {
            if (t.indexOf) return t.indexOf(e);
            var n = -1;
            return r.some(t,
            function(t, i) {
                if (t === e) return n = i,
                !0
            }),
            n
        },
        forEach: function(t, e) {
            if (t.forEach) return t.forEach(e);
            for (var n = t.length,
            i = 0; i < n; i++) e(t[i], i);
            return t
        },
        some: function(t, e) {
            if (t.some) return t.some(e);
            for (var n = t.length,
            i = !1,
            o = 0; o < n; o++) if (e(t[o], o)) {
                i = !0;
                break
            }
            return i
        },
        map: function(t, e) {
            if (t.map) return t.map(e);
            for (var n = t.length,
            i = [], o = 0; o < n; o++) i.push(e(t[o], o));
            return i
        },
        objEach: function(t, e) {
            if (t) for (var i in t) if (n(t, i) && e(i, t[i]) === !1) break
        },
        reduce: function(t, e) {
            if ("function" != r.type(e)) throw new TypeError("Array.prototype.reduce callback must be a function");
            var n = t.length;
            if (0 === n && 2 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
            var i, o = 0;
            if (arguments.length >= 3) i = arguments[2];
            else for (;;) {
                if (o in t) {
                    i = t[o++];
                    break
                }
                if (++o >= n) throw new TypeError("reduceRight of empty array with no initial value")
            }
            for (; o < n; o++) i = e(i, t[o], o, t);
            return i
        },
        filter: function(t, e, n) {
            if (t.filter) return t.filter(e);
            for (var i = t.length,
            o = [], r = 0; r < i; r++) {
                var a = t[r];
                e.call(n, a, r, t) && o.push(a)
            }
            return o
        },
        nextTick: i(),
        lock: function(t) {
            var e;
            return function() {
                if (!e) {
                    e = !0;
                    var n = [].slice.call(arguments, 0);
                    n.unshift(function() {
                        e = !1
                    }),
                    t.apply(this, n)
                }
            }
        },
        queue: function(t, e) {
            function n() {
                var t = i.shift();
                if (!t) return void(o = e);
                o--;
                var r = t[0],
                a = t[1],
                s = t[2];
                s.unshift(function() {
                    o++,
                    n.apply(this, arguments)
                }),
                setTimeout(function() {
                    r.apply(a, s)
                })
            }
            e = e || 1;
            var i = [],
            o = e;
            return function() {
                if (i.push([t, this, [].slice.call(arguments, 0)]), o) return n()
            }
        },
        delegator: function(t) {
            var e, n = [];
            return function(i) {
                return e ? n.push(i) : (e = !0, void t.call(this,
                function() {
                    e = !1;
                    var t = this,
                    o = arguments;
                    i && i.apply(t, o);
                    var a = n;
                    n = [],
                    r.forEach(a,
                    function(e) {
                        e && e.apply(t, o)
                    })
                }))
            }
        },
        once: function(t) {
            var e, n = arguments;
            return function() {
                if (!e && t) return e = !0,
                t.apply(n.length >= 2 ? n[1] : null, arguments)
            }
        },
        verCompare: function(t, e) {
            if (t === e) return 0;
            t = t.split("."),
            e = e.split(".");
            for (var n = t.length >= e.length ? t.length: e.length, i = 0, o = 0; n--;) {
                var r = Number(t[i] || 0),
                a = Number(e[i++] || 0);
                if (a > r) return 1;
                if (a < r) return - 1
            }
            return o
        },
        batchTimeout: function(t, e) {
            function n(t) {
                return s.push(t),
                a ? void c.push( + new Date) : (r = +new Date, c.push(r), a = !0, void setTimeout(function() {
                    var t = Math.round(i.reduce(c,
                    function(t, e) {
                        return t + (e - r)
                    },
                    0) / c.length);
                    a = !1,
                    c = [];
                    var n = s.slice(0);
                    s = [],
                    setTimeout(function() {
                        n.forEach(function(t) {
                            try {
                                t && t()
                            } catch(e) {
                                console.error(e)
                            }
                        })
                    },
                    Math.max(e - o - t, 0))
                },
                o))
            }
            var i = this,
            o = e / t; (!o || o < 1) && (t = 1, o = e),
            o = Math.round(o);
            var r, a = !1,
            s = [],
            c = [];
            return n
        }
    };
    t.exports = r
},
function(t, e, n) {
    "use strict";
    function i() {
        u(window, "scroll", r),
        u(window, "resize", r)
    }
    function o(t, e) {
        function n(n) {
            var i, f, v, m, y, q = !n || n === document.body;
            if (q && !w) i = l(t);
            else if (!q && !w) {
                var j = n.getBoundingClientRect();
                f = j.height,
                v = j.width,
                m = j.left,
                y = j.top
            }
            var S, $, L, E = !1,
            N = !1,
            I = function(o, r, a) {
                if (!d.once || !N) {
                    var s;
                    if (q) {
                        if (i = w || !i.height ? l(t) : i, !i.height) return;
                        var c = i.top - T,
                        u = i.bottom;
                        d.offset && (c -= d.offset, u += d.offset);
                        var p = !d.listenHoriz || i.left >= 0 && i.right <= a;
                        x ? (s = k ? c >= o && u <= o + r: c < o + r && u > o, s = s && p) : s = p && o + r > c
                    } else if (!q) {
                        var h = t.getBoundingClientRect();
                        if (!h.height || !h.width) return;
                        if (!f || !v || !y) {
                            var g = n.getBoundingClientRect();
                            f = g.height,
                            v = g.width,
                            y = g.top,
                            m = g.left
                        }
                        var _ = h.height,
                        j = h.width,
                        c = h.top - y,
                        S = h.left - m,
                        u = h.bottom - y,
                        $ = h.right - m,
                        L = d.offset;
                        d.offset && (c += L, S += L, u -= L, $ -= L),
                        s = x ? k ? C ? S >= 0 && $ <= v: c >= 0 && u <= f: C ? S > -j && S < v: c > -_ && c < f: c < f && S < v
                    }
                    var I = E;
                    if (I && !s && "function" == typeof d.out && d.out(), !s) return void(E = !1);
                    E = !0,
                    (b && !I || !b) && (N = !0, e && e())
                }
            };
            if (q) S = g.on("scroll", I),
            r();
            else {
                var A, B = !1,
                O = function() {
                    A || (A = !0, setTimeout(function() {
                        A = !1,
                        B && I(a(), s(), c())
                    },
                    _.throttle ? _.throttle: 100))
                };
                if (S = g.on("scroll", O), n._onviewDelegator) B = n._onviewDelegator.visible(),
                L = n._onviewDelegator.message.on("visible",
                function(t) {
                    B = t,
                    t && O()
                }),
                O();
                else {
                    var D = new h;
                    n._onviewDelegator = {
                        message: D,
                        visible: function() {
                            return B
                        }
                    },
                    L = o(n, p.extend({},
                    d, {
                        inview: !0,
                        enter: !0,
                        offset: 0,
                        listenHoriz: !1,
                        out: function() {
                            D.emit("visible", !1),
                            B = !1
                        }
                    }),
                    function() {
                        B = !0,
                        D.emit("visible", !0),
                        O()
                    })
                }
                $ = u(n, "scroll", O),
                O()
            }
            return function() {
                S && S(),
                $ && $(),
                L && L(),
                S = $ = L = null
            }
        }
        y || (y = !0, i());
        var d = {},
        m = arguments;
        "object" == p.type(e) && (d = e, e = m[2]);
        var x = f(d, "visible", !0),
        b = f(d, "enter", !1),
        w = f(d, "recalc", !1),
        k = f(d, "inview", !1),
        C = f(d, "horiz", !1),
        T = d.offsetTop || 0,
        q = v(t);
        if (p.some(q.parents,
        function(t) {
            return document.body === t
        })) return n(q.scrollParent);
        var j, S = setTimeout(function() {
            j = n(v(t).scrollParent)
        });
        return function() {
            clearTimeout(S),
            j && j()
        }
    }
    function r() {
        if (_.throttle) {
            if (x) return;
            x = !0,
            setTimeout(function() {
                x = !1,
                g.emit("scroll", a(), s(), c())
            },
            _.throttle)
        } else g.emit("scroll", a(), s(), c())
    }
    function a() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
    function s() {
        return "BackCompat" == document.compatMode ? document.body.clientHeight: document.documentElement.clientHeight
    }
    function c() {
        return "BackCompat" == document.compatMode ? document.body.clientWidth: document.documentElement.clientWidth
    }
    function l(t) {
        var e = t.getBoundingClientRect();
        return {
            top: e.top + a(),
            left: e.left,
            right: e.right,
            bottom: e.bottom + a(),
            height: e.bottom - e.top
        }
    }
    function u(t, e, n) {
        return m ? t.attachEvent("on" + e, n) : t.addEventListener(e, n),
        function() {
            d(t, e, n)
        }
    }
    function d(t, e, n) {
        m ? t.detachEvent("on" + e, n) : t.removeEventListener(e, n)
    }
    function f(t, e, n) {
        return t.hasOwnProperty(e) ? !!t[e] : n
    }
    var p = n(18),
    h = n(20),
    g = new h,
    v = n(21),
    m = !document.addEventListener,
    _ = {},
    y = !1;
    o.set = function(t, e) {
        return _[t] = e,
        o
    },
    o.message = g,
    g.on("update", r),
    t.exports = o;
    var x
},
function(t, e, n) {
    "use strict";
    function i() {
        this._evtObjs = {},
        this._outdatedMsgs = {}
    }
    function o() {}
    var r = n(18);
    i.prototype.on = function(t, e, n) {
        this._evtObjs[t] || (this._evtObjs[t] = []),
        this._evtObjs[t].push({
            handler: e,
            once: n
        });
        var i = this;
        return function() {
            i.off(t, e)
        }
    },
    i.prototype.wait = function(t, e) {
        return this._outdatedMsgs[t] ? (e.apply(null, this._outdatedMsgs[t]), o) : this.on(t, e, !0)
    },
    i.prototype.off = function(t, e) {
        var n, i = this;
        return n = t ? [t] : r.keys(this._evtObjs),
        r.forEach(n,
        function(t) {
            if (e) {
                var n = i._evtObjs[t] || [],
                o = [];
                r.forEach(n,
                function(t) {
                    t.handler !== e && o.push(t)
                }),
                i._evtObjs[t] = o
            } else i._evtObjs[t] = []
        }),
        this
    },
    i.prototype.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        this._outdatedMsgs[t] = e;
        var n = this._evtObjs[t] || [];
        r.forEach(n,
        function(t) {
            t.once && t.called || (t.called = !0, t.handler && t.handler.apply(null, e))
        })
    },
    i.prototype.emitAsync = function() {
        var t = arguments,
        e = this;
        setTimeout(function() {
            e.emit.apply(e, t)
        },
        0)
    },
    i.prototype.assign = function(t) {
        var e = this;
        r.forEach(["on", "off", "wait", "emit", "emitAsync"],
        function(n) {
            var i = e[n];
            t[n] = function() {
                return i.apply(e, arguments)
            }
        })
    },
    (new i).assign(i),
    t.exports = i
},
function(t, e, n) {
    "use strict";
    function i(t, e) {
        e = e || [];
        var n = t.parentNode;
        return n ? (e.push(n), n === document.body ? e: i(n, e)) : e
    }
    function o(t) {
        if (!t) return "";
        var e;
        if (window.getComputedStyle) try {
            e = window.getComputedStyle(t)
        } catch(n) {} else t.currentStyle && (e = t.currentStyle);
        return e ? a(e) : ""
    }
    function r(t) {
        return /(auto|scroll)/.test(o(t))
    }
    function a(t) {
        var e = "";
        return s.some(["-y", "-x", ""],
        function(n) {
            var i = "overflow" + n,
            o = "hidden" !== t[i] ? t[i] : "";
            if (o) return e = o,
            !0
        }),
        e
    }
    var s = n(18);
    t.exports = function(t) {
        for (var e = i(t), n = document.body, o = 0; o < e.length; o++) {
            var a = e[o];
            if (a === document.body || r(a)) {
                n = a;
                break
            }
        }
        return {
            parents: e,
            scrollParent: n
        }
    }
},
function(t, e, n) {
    function i(t, e, n, i, o) {
        var a = r.apply(this, arguments);
        return t.addEventListener(n, a, o),
        {
            destroy: function() {
                t.removeEventListener(n, a, o)
            }
        }
    }
    function o(t, e, n, o, r) {
        return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t,
        function(t) {
            return i(t, e, n, o, r)
        }))
    }
    function r(t, e, n, i) {
        return function(n) {
            n.delegateTarget = a(n.target, e),
            n.delegateTarget && i.call(t, n)
        }
    }
    var a = n(23);
    t.exports = o
},
function(t, e) {
    function n(t, e) {
        for (; t && t.nodeType !== i;) {
            if ("function" == typeof t.matches && t.matches(e)) return t;
            t = t.parentNode
        }
    }
    var i = 9;
    if ("undefined" != typeof Element && !Element.prototype.matches) {
        var o = Element.prototype;
        o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
    }
    t.exports = n
},
function(t, e, n) {
    "use strict";
    function i(t) {
        var e = document.referrer || t.referrer || "",
        n = T || f.get("openid"),
        i = f.get("o_cookie") || f.get("uin") || f.get("luin"),
        o = f.get("appid"),
        a = f.get("main_login");
        return b + (t.standard ? L: $) + "&s_uuid=" + (y() || r()) + (q ? "&s_omgid=" + q: "") + (e ? "&s_referrer=" + encodeURIComponent(e) : "") + (n ? "&s_openid=" + n: "") + (i ? "&s_uin=" + i: "") + (o ? "&s_appid=" + o: "") + (a ? "&s_mainlogin=" + a: "") + ("&s_url=" + encodeURIComponent(location.href.split("?")[0]))
    }
    function o() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return [t(), t(), t(), t()].join("")
    }
    function r() {
        if (S) return S;
        var t = f.get("tvfe_boss_uuid");
        if (!t) {
            t = o();
            try {
                f.set("tvfe_boss_uuid", t, "qq.com", !1, 87600)
            } catch(e) {
                f.set("tvfe_boss_uuid", t, "", !1, 87600)
            }
        }
        return S = t,
        t
    }
    function a(t, e) {
        e = e || {};
        var n = e.loaded,
        o = "number" == g.type(n) ? n: 500;
        "string" == g.type(t) ? (t = t.replace(/\.$/, "").split("."), (t.length < 3 || t.length > 5) && console.warn("按钮名分段数不对，可能会导致数据丢失")) : "array" != g.type(t) && (t = []);
        var r = "";
        if (e.standard) {
            r = i({
                standard: !0,
                referrer: x()
            });
            var a = ["s_app", "s_behave", "s_page", "s_module", "s_pos", "s_detail", "s_psdesc", "s_ext2", "s_ext3", "s_ext4", "s_pgdetail", "s_value2", "s_value3", "s_value4"];
            g.forEach(a,
            function(e, n) {
                var i = t[n];
                null !== i && void 0 !== i && "" !== i && e && (r += "&" + e + "=" + encodeURIComponent(i))
            })
        } else {
            var s = e.source || "";
            if ("function" == g.type(s)) try {
                s = s()
            } catch(l) {}
            r = i({
                referrer: x()
            }),
            r += "&s_app=" + encodeURIComponent(t[0] || "") + "&s_module=" + encodeURIComponent(t[1] || "") + "&s_behave=" + encodeURIComponent(t[2] || "") + "&s_sub=" + encodeURIComponent(t[3] || "") + "&s_fifth=" + encodeURIComponent(t[4] || "") + (s ? "&s_source=" + encodeURIComponent(s) : "")
        }
        if (r += C ? "&s_ptag=" + encodeURIComponent(C) : "", r += "&_dc=" + Math.ceil(1e7 * Math.random()), e && e.lazy) h.push(r);
        else if (n) {
            var u = g.once(function() {
                p(r)
            });
            c(u),
            setTimeout(u, o)
        } else p(r)
    }
    function s(t) {
        return function(e) {
            var n;
            try {
                n = JSON.parse(e)
            } catch(i) {
                try {
                    n = JSON.parse(decodeURIComponent(e))
                } catch(i) {
                    return t(i.message, null, e)
                }
            }
            0 == n.errCode ? t(null, n, e) : t(n.errCode + ":" + n.errMsg, n, e)
        }
    }
    function c(t) {
        if (E) t();
        else if (N) var e = m.on("ready",
        function() {
            e(),
            t()
        });
        else {
            var n = g.once(function() {
                N = !1,
                E = !0;
                try {
                    t()
                } finally {
                    m.emit("ready")
                }
            });
            window.addEventListener ? window.addEventListener("load", n) : window.attachEvent ? window.attachEvent("onload", n) : n(),
            setTimeout(n, 5e3)
        }
    }
    var l, u = n(25)(),
    d = n(26),
    f = n(6),
    p = n(28),
    h = n(32),
    g = n(18),
    v = n(20),
    m = new v,
    _ = function() {},
    y = _,
    x = _,
    b = "//btrace.video.qq.com";
    try {
        l = window.jQuery || window.Zepto || window.tvp && window.tvp.$
    } catch(w) {}
    l && l(document.body).on("click", "[_boss]",
    function(t) {
        var e = l(t.currentTarget);
        a(e.attr("_boss"))
    });
    var k = window.sessionStorage || {
        getItem: function() {
            return ""
        }
    },
    C = d.get("ptag") || k.getItem("ptag") || f.get("ptag"),
    T = d.get("openid"),
    q = "";
    if (u.browser.QQvideo) {
        var j = n(33);
        j(function(t) {
            t && t.invoke("getDeviceInfo", null, s(function(t, e) {
                t || 0 != e.errCode || (q = e.result.omgid || "")
            }))
        })
    }
    var S, $ = "/kvcollect?BossId=3255&Pwd=2118551257&s_ua=" + navigator.userAgent + "&s_browser=" + u.browser.name,
    L = "/kvcollect?BossId=5982&Pwd=1952884855&s_ua=" + navigator.userAgent;
    t.exports = {
        uuid: function() {
            return r()
        },
        uuidGetter: function(t) {
            y = t || _
        },
        referrerGetter: function(t) {
            x = t || _
        },
        ptag: function(t) {
            C = t
        },
        host: function(t) {
            b = t
        },
        hot: a,
        uid: r
    };
    var E, N
},
function(t, e) {
    function n(t) {
        if (t) {
            var e = {},
            n = {},
            i = {
                iphone: t.match(/(iphone)\s(os\s)?([\d_]+)/i),
                ipad: t.match(/(ipad).*\s([\d_]+)/i),
                ipod: t.match(/(ipod).*\s([\d_]+)/i),
                android: t.match(/(android)\s([\d\.]+)/i),
                windows: t.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/)
            };
            i.ipod && (e.ios = e.ipod = !0, e.version = i.ipod[2].replace(/_/g, "."), e.name = "ipod"),
            i.ipad && (e.ios = e.ipad = !0, e.version = i.ipad[2].replace(/_/g, "."), e.name = "ipad"),
            i.iphone && (e.iphone = e.ios = !0, e.version = i.iphone[3].replace(/_/g, "."), e.name = "iphone"),
            i.android && (e.android = !0, e.version = i.android[2], e.name = "android"),
            i.windows && (e.windows = !0, e.version = i.windows[2], e.name = "windows");
            var o = {
                IE: t.match(/; msie\b|; trident\b|\bedge\//i),
                WeChat: t.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/) || t.match(/MicroMessenger\/((\d+)\.(\d+))/),
                MQQClient: !t.match(/QQReader/) && t.match(/QQ\/(\d+\.\d+)/i) || t.match(/V1_AND_SQ_([\d\.]+)/),
                MQQReader: t.match(/QQReader/i),
                sukan: t.match(/synopsis/i),
                QQvideo: !t.match(/TADChid/) && t.match(/QQLiveBrowser\/([\d.]+)/),
                QQHDvideo: t.match(/QQLiveHDBrowser\/([\d.]+)/),
                TBSSDK: t.match(/MQQBrowser\/(\d+\.\d+)/i) && t.match(/MSDK\/(\d+\.\d+)/),
                MQQBrowser: t.match(/MQQBrowser\/(\d+\.\d+)/i),
                UCBrowser: t.match(/ucbrowser\/(\d+\.\d+)/i),
                Qzone: t.match(/Qzone\/[\w\d\_]*(\d\.\d)[\.\w\d\_]*/i),
                Weibo: t.match(/Weibo/i),
                qqnews: t.match(/qqnews\/(\d+\.\d+\.\d+)/i),
                QQLiveBroadcast: t.match(/QQLiveBroadcast/i),
                kuaibao: t.match(/qnreading\/(\d+\.\d+\.\d+)/i),
                liebao: t.match(/LieBaoFast\/(\d+\.\d+\.\d+)/i),
                IEMobile: t.match(/IEMobile(\/|\s+)(\d+\.\d+)/) || t.match(/WPDesktop/),
                douban: t.match(/com\.douban\.frodo\/(\d+\.\d+\.\d+)/i),
                MiuiBrowser: t.match(/MiuiBrowser\/(\d+\.\d+)/i),
                Chrome: e.ios ? t.match(/CriOS\/(\d+\.\d+)/) : t.match(/Chrome\/(\d+\.\d+)/),
                Safari: t.match(/Safari\/(\d+\.\d+)/)
            };
            if (o.MQQReader) n.MQQReader = !0,
            n.version = 1,
            n.name = "MQQReader";
            else if (o.IEMobile) n.IEMobile = !0,
            n.version = 1,
            n.name = "IEMobile";
            else for (var r in o) if (o[r]) {
                n[r] = !0,
                n.version = o[r][1] || 0,
                n.name = r;
                break
            }
            return {
                browser: n,
                os: e
            }
        }
    }
    var i = null,
    o = function() {
        return i || (i = n(navigator.userAgent))
    };
    o.__express = function(t, e, i) {
        t.ua = n(t.headers["user-agent"]),
        i()
    },
    o.__jquery = function(t) {
        t = t || window.jQuery || window.Zepto;
        var e = i || (i = n(navigator.userAgent));
        t.browser = e.browser,
        t.os = e.os
    },
    o.__clearCache = function() {
        i = null
    },
    t.exports = o
},
function(t, e, n) {
    "use strict";
    var i = n(27);
    t.exports = {
        get: function(t, e) {
            var n = new RegExp("(\\?|#|&)" + t + "=([^&#]*)(&|#|$)");
            e = e || location.href;
            var o = e.match(n);
            return o ? i(o[2]) : ""
        },
        del: function(t) {
            var e = new RegExp("(\\?|#|&)" + t + "=([^&#]*)(&|#|$)"),
            n = location.href.match(e);
            n = n ? n[2] : "";
            try {
                window.history && history.replaceState && history.replaceState(null, null, location.href.replace(t + "=" + n, ""))
            } catch(i) {}
        }
    }
},
function(t, e) {
    var n = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    },
    i = function(t) {
        return n[t]
    };
    t.exports = function(t) {
        return ("" + t).replace(/&(?![\w#]+;)|[<>"']/g, i)
    }
},
function(t, e, n) {
    "use strict";
    var i = n(29),
    o = /\.qq\.com$/.test(document.domain); (i.isAndroid() || i.isIOS()) && o ? t.exports = n(30) : t.exports = n(31)
},
function(t, e) {
    "use strict";
    var n = navigator.userAgent,
    i = n.toLowerCase();
    t.exports = {
        isIE: function() {
            return /; msie\b|; trident\b|\bedge\//.test(i)
        },
        isWX: function() {
            return /micromessenger/.test(i)
        },
        isQQ: function() {
            return /\bqq\b/.test(i)
        },
        isQQBrowser: function() {
            return /mqqbrowser/.test(i) && !this.isQQ()
        },
        isQQLive: function() {
            return /qqlive/.test(i)
        },
        isQQLiveBroadcast: function() {
            return /qqlivebroadcast/.test(i)
        },
        isMobile: function() {
            return !! (n.match(/Android/i) || n.match(/android/i) || n.match(/iPhone/i) || n.match(/iPod/i) || n.match(/webOS/i) || n.match(/BlackBerry/i) || n.match(/BB/i) || n.match(/Windows Phone/i) || n.match(/ApacheBench/i) || n.match(/iPad.*MicroMessenger/i) || n.match(/IEMobile/i) || n.match(/spider/i) || n.match(/bot/i) || n.match(/curl/i))
        },
        isIOS: function() {
            return /iPad|iPhone|iPod/.test(n) && !window.MSStream
        },
        isMac: function() {
            return /\bmac\b/.test(i)
        },
        isPC: function() {
            return /Win/.test(n)
        },
        isAndroid: function() {
            return /android/.test(i)
        },
        isChrome: function() {
            return /Chrome\//.test(n)
        },
        wxVer: function() {
            var t = i.match(/micromessenger\/([\d\.]+)/);
            return t ? t[1] : ""
        },
        androidVer: function() {
            var t = i.match(/android\s([0-9\.]*)/);
            return t ? t[1] : ""
        }
    }
},
function(t, e) {
    t.exports = function(t) {
        var e = new XMLHttpRequest;
        e.open("GET", t, !0),
        e.send()
    }
},
function(t, e) {
    "use strict";
    function n() {}
    t.exports = function(t) {
        var e = document.createElement("img");
        e.onerror = n,
        e.onload = n,
        e.onabort = n,
        e.src = t
    }
},
function(module, exports, __webpack_require__) {
    var cookie = __webpack_require__(6),
    report = __webpack_require__(31),
    storage = function() {
        var t = !1;
        try {
            window.localStorage && (t = !0)
        } catch(e) {}
        var n = location.hostname || location.host;
        return t ? {
            get: function(t) {
                return localStorage.getItem(t)
            },
            set: function(t, e) {
                return localStorage.setItem(t, e)
            },
            clear: function(t) {
                return localStorage.removeItem(t)
            }
        }: {
            get: function(t) {
                return cookie.get(t)
            },
            set: function(t, e) {
                return cookie.set(t, e, n)
            },
            clear: function(t) {
                return cookie.set(t, "", n)
            }
        }
    } (),
    reg = /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i,
    k = "txv_lazyreport_list",
    d = "|",
    clear = function() {
        return storage.clear(k)
    },
    shift = function() {
        var t = storage.get(k);
        if (!t) return "";
        var e = t.split(d),
        n = e.shift();
        return storage.set(k, e.join(d)),
        n ? decodeURIComponent(n) : ""
    },
    push = function(t) {
        if (t) {
            var e = storage.get(k),
            n = [];
            e && (n = e.split(d)),
            n.push(encodeURIComponent(t)),
            storage.set(k, n.join(d))
        }
    },
    reportItem = function(item) {
        if (reg.test(item)) try { !! report && report(item)
        } catch(e) {} else setTimeout(function() {
            try {
                eval(item)
            } catch(e) {}
        },
        0)
    },
    _report = function() {
        for (var t = shift(); t;) reportItem(t),
        t = shift()
    };
    module.exports = {
        push: push,
        clear: clear,
        report: _report
    }
},
function(t, e, n) {
    "use strict";
    function i(t) {
        var e = null;
        if (!t) return null;
        try {
            e = t.TenvideoJSBridge || t.WebViewJavascriptBridge
        } catch(n) {}
        return e
    }
    function o() {
        top.WebViewJavascriptBridge && (top.TenvideoJSBridge = top.WebViewJavascriptBridge, top.TenvideoJSBridge.invoke = top.WebViewJavascriptBridge.callHandler, top.TenvideoJSBridge.on = top.WebViewJavascriptBridge.registerHandler);
        var t = new a;
        u = top.TenvideoJSBridge;
        var e = u.on;
        u.on = function(n, i) {
            t._evtObjs[n] && t._evtObjs[n].length || e.call(u, n,
            function(e) {
                t.emit(n, e)
            }),
            t.on(n, i)
        },
        d.ready = !0
    }
    var r = n(34),
    a = n(20),
    s = n(25)(),
    c = [],
    l = !1,
    u = null,
    d = Object.create({},
    {
        ready: {
            set: function(t) {
                if (l != t) {
                    l = t;
                    for (var e; e = c.shift();) setTimeout(function(t) {
                        return function() {
                            t(u)
                        }
                    } (e), 0)
                }
            },
            get: function() {
                return l
            }
        }
    }),
    f = window == top ? window: top,
    p = function(t) {
        d.ready ? t(u) : c.push(t)
    };
    if (p.QQvideoBridgeCallback = function(t) {
        return function(e) {
            var n;
            try {
                n = "string" == typeof e ? JSON.parse(e) : e
            } catch(i) {
                try {
                    n = JSON.parse(decodeURIComponent(e))
                } catch(i) {
                    return t(i.message, null, e)
                }
            }
            0 == n.errCode ? t(null, n, e) : t(n.errCode + ":" + n.errMsg, n, e)
        }
    },
    t.exports = p, s.browser.WeChat) {
        var h = !1,
        g = !1,
        v = function(t) {
            "bridge" == t && (g = !0),
            "js" == t && (h = !0),
            h && g && (u = f.WeixinJSBridge, d.ready = !0)
        };
        if (top.WeixinJSBridge) v("bridge");
        else try {
            f.document.addEventListener("WeixinJSBridgeReady",
            function() {
                v("bridge")
            })
        } catch(m) {
            u = null,
            d.ready = !0
        }
        f.wx ? v("js") : r("//res.wx.qq.com/open/js/jweixin-1.2.0.js",
        function() {
            v("js")
        }),
        setTimeout(function() {
            d.ready || (u = null, d.ready = !0)
        },
        1e4)
    } else if (s.browser.MQQClient) {
        if (window.mqq || window.QQApi) u = window.mqq || window.QQApi,
        d.ready = !0;
        else {
            var _ = "//s.url.cn/qqmobile/qqapi.js?_bid=152";
            r(_,
            function() {
                u = window.mqq || window.QQApi,
                d.ready = !0
            })
        }
        setTimeout(function() {
            d.ready || (u = null, d.ready = !0)
        },
        6e3)
    } else if (s.browser.QQvideo) if (i(f)) o();
    else {
        document.addEventListener("onTenvideoJSBridgeReady", o),
        document.addEventListener("WebViewJavascriptBridgeReady", o);
        var y = setInterval(function() {
            i(f) ? (clearInterval(y), o()) : d.ready && clearInterval(y)
        },
        200);
        setTimeout(function() {
            d.ready || (u = null, d.ready = !0)
        },
        6e3)
    } else if (s.browser.qqnews) window.TencentNews ? (u = window.TencentNews, d.ready = !0) : r("http://mat1.gtimg.com/www/js/newsapp/jsapi/news.js?_tsid=1",
    function() {
        if (window.TencentNews) u = window.TencentNews,
        d.ready = !0;
        else var t = setInterval(function() { (window.TencentNews || d.ready) && (clearInterval(t), u = window.TencentNews, d.ready = !0)
        },
        500)
    }),
    setTimeout(function() {
        d.ready || (u = null, d.ready = !0)
    },
    6e3);
    else if (s.browser.sukan) {
        if (window.WebViewJavascriptBridge) u = window.WebViewJavascriptBridge,
        d.ready = !0;
        else if (window.WVJBCallbacks) window.WVJBCallbacks.push(function() {
            u = window.WebViewJavascriptBridge,
            d.ready = !0
        });
        else {
            window.WVJBCallbacks = [function() {
                u = window.WebViewJavascriptBridge,
                d.ready = !0
            }];
            var x = document.createElement("iframe");
            x.style.display = "none",
            x.src = "https://__bridge_loaded__",
            document.documentElement.appendChild(x),
            setTimeout(function() {
                document.documentElement.removeChild(x)
            },
            0)
        }
        setTimeout(function() {
            d.ready || (u = null, d.ready = !0)
        },
        6e3)
    } else u = null,
    d.ready = !1
},
function(t, e) {
    "use strict";
    t.exports = function(t, e) {
        var n = document.createElement("script"),
        i = document.getElementsByTagName("script")[0];
        n.src = t,
        n.type = "text/javascript",
        n.onload = n.onerror = n.onreadystatechange = function() { / loaded | complete | undefined / .test(n.readyState) &&
            function() {
                n.onload = n.onerror = n.onreadystatechange = null,
                n.parentNode.removeChild(n),
                n = void 0,
                e && e()
            } ()
        },
        i.parentNode.insertBefore(n, i)
    }
},
function(t, e, n) {
    var i = n(7),
    o = {
        virtualHost: "pgv.live.qq.com",
        virtualPath: "/liveweb/",
        pv: function(t) {
            i.initPGVGlobalParam(),
            i.pv_pgv({
                virtualDomain: o.virtualHost,
                virtualURL: [o.virtualPath, t].join("")
            })
        }
    };
    t.exports = o
},
function(t, e, n) {
    var i = n(37),
    o = function() {
        function t(t, e) {
            l = e ? e: "BackCompat" == document.compatMode ? document.body: document.documentElement,
            u = t || ["img", "iframe"]
        }
        function e() {
            for (var t = [], e = 0, n = u.length; e < n; e++) for (var o = $(u[e] + "[lz_src]"), r = 0, a = o.length; r < a; r++) t.push(o.get(r));
            for (var s = f.length,
            c = s,
            h = 0,
            n = t.length; h < n; h++)"object" == typeof t[h] && t[h].getAttribute("lz_src") && (f.push(t[h]), c++);
            for (var e = s; e < c; e++) {
                var g = f[e];
                g.style.visibility = "hidden";
                var v = Math.round(i.getXY(g)[1] - i.getXY(l)[1]);
                if (d[v]) d[v].push(e);
                else {
                    var m = [];
                    m[0] = e,
                    d[v] = m,
                    p++
                }
            }
        }
        function n() {
            var t = window.pageYOffset || l.scrollTop;
            return l.clientHeight + t
        }
        function o() {
            if (v++, !p) return void(m = !0);
            var t = n();
            if (h >= t) return void setTimeout(o, 200);
            h = t;
            for (var e in d) if (t > e) {
                for (var i, r = d[e], a = r.length, s = 0; s < a; s++) _ ? _(f[r[s]]) : (i = f[r[s]].getAttribute("lz_src"), f[r[s]].src = i, f[r[s]].removeAttribute("lz_src"), f[r[s]].style.visibility = "visible");
                delete d[e],
                p--
            }
            for (var e in g) if (t > e) {
                for (var r = g[e], a = r.length, s = 0; s < a; s++) r[s]();
                delete g[e],
                p--
            }
            setTimeout(o, 200)
        }
        function r(i, r, a) {
            t(i, r),
            e(),
            a && (a.replaceFunc && "function" == typeof a.replaceFunc && (_ = a.replaceFunc), a.getScreenShowHeight && "function" == typeof a.getScreenShowHeight && (n = a.getScreenShowHeight)),
            m = !1,
            setTimeout(function() {
                o()
            },
            0)
        }
        function a(t, e, n) {
            n = n || 0;
            var r = i.getXY(t)[1] + n;
            if (g[r]) g[r].push(e);
            else {
                var a = [];
                a[0] = e,
                g[r] = a,
                p++
            }
            h = 0,
            m && (m = !1, o())
        }
        function s(t) {
            h = t
        }
        function c() {
            d = {},
            f = [],
            p = 0,
            h = -1,
            g = {},
            v = 0,
            m = !0
        }
        var l, u, d = {},
        f = [],
        p = 0,
        h = -1,
        g = {},
        v = 0,
        m = !0,
        _ = null;
        return {
            init: r,
            lazyFunc: a,
            getScreenShowHeight: n,
            reset: c,
            resetLastOffset: s
        }
    } ();
    t.exports = o
},
function(t, e, n) {
    function i(t, e) {
        var n = 0,
        i = 0,
        s = e || document;
        if (t) if (s.documentElement.getBoundingClientRect && t.getBoundingClientRect) {
            var c = t.getBoundingClientRect(),
            l = t.ownerDocument,
            u = a.ie ? 2 : 0;
            n = c.top - u + o(l),
            i = c.left - u + r(l)
        } else for (; t.offsetParent;) n += t.offsetTop,
        i += t.offsetLeft,
        t = t.offsetParent;
        return [i, n]
    }
    function o(t) {
        var e = t || document;
        return Math.max(e.documentElement.scrollTop, e.body.scrollTop)
    }
    function r(t) {
        var e = t || document;
        return Math.max(e.documentElement.scrollLeft, e.body.scrollLeft)
    }
    var a = n(14);
    t.exports = {
        getXY: i,
        getScrollTop: o,
        getScrooLeft: r
    }
},
function(t, e, n) {
    var i = n(8),
    o = n(11),
    r = n(39),
    a = n(7),
    s = n(35);
    $.extend(i, {
        resetKey: function(t) {
            "object" == typeof t && (t.hotkey && (i.hotKeyName = o.hotKeyName = t.hotkey), t.qtag && (o.qtagName = t.qtag))
        }
    }),
    t.exports = {
        init: function(t) {
            if (i.initPageHotKey(), o.init(), r.init(), t && 1 == t.watch, t && t.tj2 && t.tj2.forbidden);
            else {
                var e = n(7);
                e.pv(t && t.tj2 ? t.tj2: null)
            }
            var a = n(9);
            a && a.report()
        },
        pv: a.pv,
        btnTj: i.btnTj,
        virtualpv: s.pv,
        getPtag: i.getCookiePtag,
        getQtag: o.getCookieQtag
    }
},
function(t, e, n) {
    var i = n(8),
    o = n(11),
    r = {
        conf: {
            selector: "a[data-openvip]",
            paramName: "aid"
        },
        init: function(t) {
            $.extend(this.conf, t);
            var e = this.conf.paramName,
            n = new RegExp("([&|?]" + e + "=)(.+?)(&.+|$)");
            $(document).on("click", this.conf.selector,
            function(t) {
                var i = this.href,
                o = encodeURIComponent(r.getParam(this));
                n.test(i) ? i = i.replace(n, "$1" + o + "$3") : i += (i.indexOf("?") == -1 ? "?": "&") + e + "=" + o,
                this.href = i
            }),
            window.__tencentplayer_getaidparam = function() {
                return r.getParam(document, "flash")
            }
        },
        getParam: function(t, e) {
            return [i.getPtag(), o.getQtag(t) || e || "flash"].join("$$")
        }
    };
    t.exports = r
},
function(t, e, n) {
    var i = n(17),
    o = n(19),
    r = n(41),
    a = n(50),
    s = "_expose",
    c = "__wind",
    l = !1;
    o.set("throttle", 100),
    t.exports = {
        init: function(t) {
            var e = this;
            t && t.boss && t.boss.app && t.boss.page && (i.setApp(t.boss.app), i.setPage(t.boss.page), i.bind(document.body, t.boss.clickName || "_stat"), i.pv(t.boss.page), t.boss.exposeName && (s = t.boss.exposeName), t.boss.windBossName && (c = t.boss.windBossName), t.boss.isRecalc && (l = t.boss.isRecalc), e.refresh());
            var n = $("body"),
            o = "wind-click";
            n.delegate("[" + o + "]", "click", a(o,
            function() {
                e.wind()
            })),
            n.delegate("a[target]", "click",
            function(t) {
                r.click(t.currentTarget)
            })
        },
        refresh: function() {
            $("[" + s + "]").each(function() {
                var t = $(this),
                e = t.attr(s);
                t.attr("_" + s, e).removeAttr(s);
                var n = o(this, {
                    once: !0,
                    recalc: l
                },
                function() {
                    i.event(e),
                    n && n()
                })
            }),
            this.wind()
        },
        wind: function(t) {
            o.message.emit("update");
            var e;
            e = t ? t.find("[" + c + "]") : $("[" + c + "]"),
            e.each(function() {
                var t = $(this),
                e = t.attr(c);
                t.removeAttr(c),
                r.bind(this, e)
            })
        },
        windGet: function(t) {
            var e;
            if (e = t ? t.attr ? t.attr("target") : t.target: window.name, /scene=/.test(e || "")) return e
        },
        windClick: r.click,
        windExpose: r.expose,
        click: i.click,
        expose: i.event
    }
},
function(t, e, n) {
    function i(t) {
        var e = /^\/?x\/page\/(\w{11})/.exec(t);
        if (e) return {
            vid: e[1]
        };
        var n = /^\/?x\/cover\/(\w{15})(\/(\w{11}))?/.exec(t);
        return n ? {
            cid: n[1],
            vid: n[3]
        }: void 0
    }
    var o = n(26),
    r = n(6),
    a = n(19),
    s = n(42),
    c = n(43),
    l = n(46)({
        getIds: function(t, e) {
            var n = e.cid,
            o = e.vid,
            r = i(t) || {};
            return r.cid = n || r.cid,
            r.vid = o || r.vid,
            r
        },
        getBossUrl: function(t) {
            var e = "//btrace.qq.com/kvcollect?BossId=5064&Pwd=644771844&platform=2&",
            n = "hc_main_login=none",
            i = o.get("openid") || r.get("openid");
            if (i && "" != i) {
                n = "hc_main_login=wx&hc_openid=" + i;
                var a = r.get("vuserid");
                a && "" != a && (n += "&hc_vuserid=" + a)
            } else {
                var s = r.get("o_cookie") || r.get("uin") || r.get("luin");
                s && "" != s && (n = "hc_main_login=qq")
            }
            return e + n + "&hc_pgv_pvid=" + r.get("pgv_pvid") + (t ? "&" + t: "") + "&_dc=" + Math.random()
        },
        bindWind: function(t, e) {
            $(t).attr("target", $.param(e))
        }
    }),
    u = c.initGetParamObject(l);
    a.set("throttle", 100),
    t.exports = {
        setAttr: l.setAttr,
        bind: function(t, e) {
            var n = !1,
            i = a(t,
            function() {
                if (!n && s(t)) {
                    var o = u(t, e);
                    n = !0,
                    l.expose(t, o.param, o.bossed),
                    i && i()
                }
            })
        },
        param: function(t, e) {
            var n = u(t, e, !0);
            return l.param(t, n.param)
        },
        expose: function(t, e) {
            var n = u(t, e);
            l.expose(t, n.param, n.bossed)
        },
        click: function(t) {
            var e = $(t).attr("target");
            e && /scene/.test(e) && l.click(e)
        },
        play: function(t) {
            console.log(t, t.target)
        },
        core: l
    }
},
function(t, e) {
    t.exports = function(t) {
        t = $(t);
        var e = t.is(":visible");
        if (e) {
            var n = t.offset(),
            i = n.left,
            o = n.top,
            r = t.outerWidth() + i,
            a = t.outerHeight() + o,
            s = $("html"),
            c = $(window),
            l = c.scrollLeft(),
            u = c.scrollTop(),
            d = s.width() + l,
            f = s.height() + u;
            if (e = i >= l && o >= u && r <= d && a <= f) for (var p = function(t) {
                if (!t.data("coverchd") && "hidden" != t.css("overflow")) return ! 0;
                var e = t.offset(),
                n = e.left,
                s = e.top,
                c = t.outerWidth() + n,
                l = t.outerHeight() + s;
                return i >= n - 2 && o >= s - 2 && r <= c + 2 && a <= l + 2
            },
            h = t.parents(), g = 0, v = h.length - 1; g < v && (e = p(h.eq(g)), e); g++);
        }
        return e
    }
},
function(t, e, n) {
    function i(t, e) {
        return "string" == typeof t && "" != t ? (e = e || {},
        r.forEach(t.split("&"),
        function(t) {
            var n = t.split("="),
            i = n[0],
            o = n[1];
            i && o && "" != i && (e[i] = o)
        }), e) : e || t || {}
    }
    var o = n(44).time33,
    r = n(18),
    a = n(45),
    s = "_wind",
    c = window.$;
    t.exports = {
        setAttr: function(t) {
            s = t
        },
        setJq: function(t) {
            c = t
        },
        calIdx: function(t, e, n) {
            var o = c(t);
            if (n = n || {},
            o[0]) {
                var r = n.controlIdx,
                a = n.columnIdx;
                "number" != typeof e[r] && (e[r] = o.index());
                var l = "number" != typeof e[a];
                o.parents("[" + s + "]").each(function(t, n) {
                    var o = c(n),
                    r = o.attr(s);
                    i(r, e),
                    e.columnname && l && (l = !1, e[a] = o.parent().children("[" + s + "]").index(o))
                })
            }
        },
        qs: i,
        sq: function(t) {
            var e = [];
            for (var n in t) {
                var i = t[n],
                o = typeof i;
                "string" != o && "number" != o || e.push(n + "=" + i)
            }
            return e.join("&")
        },
        initGetParamObject: function(t) {
            var e = ["cid", "vid", "pid", "controlname", "columnname", "pagename", "scene"],
            n = {};
            return function(c, l, u) {
                var d = i(l);
                i(a(c, s), d),
                t.fill(c, d);
                var f = o(r.map(e,
                function(t) {
                    return d[t] || ""
                }).join(",")),
                p = {
                    param: d
                };
                return u || (p.bossed = n[f], n[f] = 1),
                p
            }
        }
    }
},
function(t, e) {
    t.exports = {
        throttling: function(t, e) {
            var n = 0;
            return e > 0 ?
            function() {
                if (!n) return n = setTimeout(function() {
                    n = 0
                },
                e),
                t.apply(this, arguments)
            }: t
        },
        buff: function(t, e) {
            var n = 0;
            return e = e || 0,
            function() {
                var i = this,
                o = arguments;
                clearTimeout(n),
                n = setTimeout(function() {
                    t.apply(i, o)
                },
                e)
            }
        },
        time33: function(t) {
            for (var e = 0,
            n = t.length,
            i = 5381; e < n; ++e) i += (i << 5) + t.charAt(e).charCodeAt();
            return 2147483647 & i
        },
        defaultFunc: function(t, e, n) {
            t[e] = t[e] || n ||
            function() {}
        }
    }
},
function(t, e) {
    t.exports = function(t, e) {
        var n = $(t);
        if (n[0]) {
            var i = [],
            o = e || "_wind",
            r = function(t, e) {
                var n = $(e),
                r = n.attr(o);
                i.unshift(r)
            };
            return n.attr(o) && r(0, n),
            n.parents("[" + o + "]").each(r),
            i.join("&")
        }
    }
},
function(t, e, n) {
    function i(t, e) {
        t.then ? t.then(function(t) {
            e(t)
        }) : e(t)
    }
    function o() {}
    function r(t) {
        d || (d = document.createElement("a"));
        var e = $(t).attr(u);
        return d.href = e,
        d.pathname
    }
    var a = n(32),
    s = n(47),
    c = n(49),
    l = n(43),
    u = "href";
    a.report();
    var d;
    t.exports = function(t) {
        var e = t.getIds || o,
        n = t.bindWind || o,
        d = t.getBossUrl || o,
        f = $.extend({
            columnIdx: "columnidx",
            controlIdx: "controlidx"
        },
        t.propMap),
        p = s(function(t) {
            i(d(t),
            function(t) {
                c(t)
            })
        });
        return {
            setAttr: function(t) {
                u = t
            },
            getAttr: function() {
                return u
            },
            fill: function(t, n) {
                if (!n.cid) {
                    var i = $(t),
                    o = function() {
                        var t = e(r(this), n);
                        n.cid = t.cid || n.cid,
                        n.vid = t.vid || n.vid,
                        n.pid = t.pid || n.pid
                    };
                    i.attr(u) && o.call(i.get(0)),
                    i.find("[" + u + "]").each(o)
                }
                n.datatype || (n.datatype = 1)
            },
            param: function(t, n) {
                var i = {},
                o = r(t);
                if (l.calIdx(t, n, f), o) {
                    var i = e(o, n);
                    n.cid = i.cid || n.cid,
                    n.vid = i.vid || n.vid,
                    n.pid = i.pid || n.pid
                }
                return l.sq(n)
            },
            expose: function(t, i, o) {
                var a = $(t),
                s = !1;
                l.calIdx(t, i, f);
                var c = function() {
                    var t = e(r(this), i); (t.cid || t.vid || t.pid) && (i.cid = t.cid || i.cid, i.vid = t.vid || i.vid, i.pid = t.pid || i.pid, n(this, i), s = !0)
                };
                a.attr(u) && c.call(a.get(0)),
                a.find("[" + u + "]").each(c),
                s && !o && (i.cmd = 1, p(i))
            },
            click: function(t, e) {
                i(d(t + "&cmd=2"),
                function(t) {
                    e ? a.push(t) : c(t)
                })
            }
        }
    }
},
function(t, e, n) {
    function i(t) {
        if (t) {
            for (var e = t[0], n = 1, i = t.length; n < i; n++) if (t[n] != e) return t.join("$");
            return e
        }
    }
    var o = n(18),
    r = n(48)();
    t.exports = function(t, e) {
        var n = {},
        a = [],
        s = function(e, n) {
            var r = o.map(e,
            function(t) {
                var e = n[t],
                o = i(e);
                return t + "=" + o
            }).join("&");
            t(r)
        };
        return function(t) {
            a.length || setTimeout(function() {
                var t = a,
                e = o.keys(n);
                a = [],
                n = {};
                var i = 0;
                o.forEach(e,
                function(t) {
                    i += t.length + 1
                });
                for (var c = t.shift(), l = {},
                u = i; c;) {
                    var d = 0;
                    if (o.forEach(e,
                    function(t) {
                        var e = c[t];
                        "undefined" != typeof e && "object" != typeof e || (c[t] = e = ""),
                        e += "",
                        d += e.length + 1
                    }), u + d < r || u == i) u += d,
                    o.forEach(e,
                    function(t) {
                        var e = l[t];
                        e || (e = l[t] = []),
                        e.push(c[t])
                    }),
                    c = t.shift();
                    else {
                        var f = l;
                        l = {},
                        u = i,
                        s(e, f)
                    }
                }
                s(e, l)
            },
            e || 2e3),
            o.forEach(o.keys(t),
            function(t) {
                n[t] = 1
            }),
            a.push(t)
        }
    }
},
function(t, e) {
    t.exports = function() {
        return 2e3
    }
},
function(t, e, n) {
    var i = n(18).queue;
    t.exports = i(function(t, e) {
        var n = new Image,
        i = !1,
        o = function() {
            i || (i = !0, t())
        };
        n.onload = o,
        n.onerror = o,
        setTimeout(function() {
            n.src = "",
            n = 0,
            o()
        },
        2e3),
        n.src = e
    })
},
function(t, e, n) {
    var i = n(19);
    t.exports = function(t, e) {
        return function(n) {
            var o = $(n.currentTarget),
            r = +o.attr(t);
            r > 0 || (r = 0),
            setTimeout(function() {
                e && e(t),
                i.message.emit("update")
            },
            r)
        }
    }
},
function(t, e, n) {
    function i() {
        var t = o();
        if (t) {
            var e = window.Boss2018 && window.Boss2018(t);
            e.inject$ajax($, "ajax")
        }
    }
    function o() {
        var t = location.host,
        e = location.pathname;
        return~t.indexOf("v.qq.com") ? "v.qq.com" === t ? "/" === e || "/index.html" === e ? "vindex": /^\/x\/(cover|page)\//.test(e) ? "vplay2017": /^\/x\/list\//.test(e) ? "vlist": "v_site": ~a.indexOf(t) ? "v_site": "v_out_site": "film.qq.com" === t ? "film_site": ""
    }
    var r = n(52);
    window.Boss2018 ? i() : r("//vm.gtimg.cn/tencentvideo/script/modules/2018boss/app.js",
    function() {
        i()
    });
    var a = ["piao.v.qq.com"]
},
function(t, e, n) {
    "use strict";
    function i(t) {
        return p.test(t)
    }
    function o(t) {
        if (1 == t.length) return t[0];
        var e = "";
        return "file:" == location.protocol && (e = "http:"),
        e + "//vm.gtimg.cn/c/=" + s.map(t,
        function(t) {
            return t.replace(p, "")
        }).join(",")
    }
    function r(t) {~s.indexOf(d, t) || (d.push(t), f || (f = !0, setTimeout(function() {
            function t(t, e) {
                var n = u[t]; ! e && (l[t] = !0),
                u[t] = null,
                s.forEach(n,
                function(t) {
                    t && t(e)
                })
            }
            f = !1;
            var e = [];
            s.forEach(d,
            function(n) {
                i(n) ? e.push(n) : c(n,
                function(e) {
                    t(n, e)
                })
            }),
            d = [],
            e.length && c(o(e),
            function(n) {
                s.forEach(e,
                function(e) {
                    t(e, n)
                })
            })
        })))
    }
    function a(t, e) {
        return l[t] ? void(e && e()) : void(u[t] ? u[t].push(e) : (u[t] = [e], r(t)))
    }
    var s = n(18),
    c = n(53),
    l = {},
    u = {},
    d = [],
    f = !1,
    p = /^(\b|http:|https:)\/\/vm\.gtimg\.cn/;
    a.load = c,
    t.exports = a
},
function(t, e) {
    "use strict";
    function n() {
        var t = document.createElement("script");
        return t.type = "text/javascript",
        t.charset = "utf-8",
        t.async = !0,
        t
    }
    function i(t, e, i) {
        function l(t) { ("load" === t.type || s.test((t.currentTarget || t.srcElement).readyState)) && g(t)
        }
        function u(t) {
            clearTimeout(f),
            d || (d = 1, document.body.removeChild(h), e(t))
        }
        e = e || o,
        i = i || {};
        var d, f, p = i.timeout || a,
        h = n(),
        g = r(u, null),
        v = r(u, "load script error: " + t),
        m = r(u, "load script timeout: " + t);
        return ! h.attachEvent || h.attachEvent.toString && h.attachEvent.toString().indexOf("[native code") < 0 || c ? (h.addEventListener("load", l, !1), h.addEventListener("error", v, !1)) : (h.attachEvent("onreadystatechange", l), h.attachEvent("onerror", v)),
        h.src = t,
        f = setTimeout(m, p),
        document.body.appendChild(h),
        h
    }
    function o() {}
    function r(t, e) {
        return function() {
            t(e)
        }
    }
    var a = 3e4,
    s = /^(complete|loaded)$/,
    c = "undefined" != typeof opera && "[object Opera]" === opera.toString();
    t.exports = i
},
function(t, e, n) {
    function i(t, e) {
        var n = e ? v: g,
        i = o(t);
        e && s(i),
        n += Math.random(),
        p(n, i)
    }
    function o(t) {
        var e = t.attr("_" + _).split("&"),
        n = {};
        return n.url = location.href,
        u.forEach(e,
        function(t, e) {
            var i = t.split("=");
            if (i && !(i.length < 2)) if (i.length > 2 && (i[1] = i.slice(1).join("=")), i[0].length > 2)~u.indexOf(x, i[0]) ? n[i[0]] = i[1] : "";
            else {
                var o = u.indexOf(b, i[0]);~o ? n[x[o]] = i[1] : ""
            }
        }),
        u.extend({},
        m, n)
    }
    function r() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return [t(), t(), t(), t()].join("")
    }
    function a() {
        var t = f.get("tvfe_boss_uuid");
        if (!t) {
            t = r();
            try {
                f.set("tvfe_boss_uuid", t, "qq.com", !1, 87600)
            } catch(e) {
                f.set("tvfe_boss_uuid", t, "", !1, 87600)
            }
        }
        return t
    }
    function s(t) {
        if (window.sessionStorage && h.setItem) try {
            h.setItem("report_recomm_player", c(t))
        } catch(e) {}
    }
    function c(t) {
        var e = [];
        for (var n in t) t.hasOwnProperty(n) && "userID" != n && "actionType" != n && "url" != n && e.push(n + "=" + t[n]);
        return e.join("|")
    }
    var l = n(19),
    u = n(18),
    d = (n(20), n(26)),
    f = n(6),
    p = n(12),
    h = window.sessionStorage || {
        getItem: function() {
            return ""
        }
    },
    g = "//btrace.qq.com/kvcollect?BossId=4073&Pwd=598576177&_dc=",
    v = "//btrace.qq.com/kvcollect?BossId=4074&Pwd=1411373385&_dc=",
    m = {
        actionType: "click",
        userID: a(),
        ptag: d.get("ptag") || h.getItem("ptag") || f.get("ptag"),
        url: "",
        rtype: "",
        algId: "",
        bucketId: "",
        reason: "",
        reasonType: "",
        cid: "",
        vid: "",
        pid: "",
        module: "",
        pageType: "",
        seqnum: ""
    };
    t.exports = {
        init: function() {
            $(document.body).on("click", "[_" + _ + "]",
            function(t) {
                var e = $(t.currentTarget);
                try {
                    if (location.href.indexOf("film.qq.com") != -1) {
                        var n = e.find("a");
                        if (n) {
                            var r = encodeURIComponent(c(o(e)));
                            n.each(function(t, e) {
                                var n = $(e).attr("href") || "";
                                n.indexOf("v.qq.com/x/cover") != -1 && (n.indexOf("?") != -1 ? (n = n.split("#"), n = n[0] + "&report_recomm_player=" + r + (n[1] ? "#" + n[1] : "")) : (n = n.split("#"), n = n[0] + "?report_recomm_player=" + r + (n[1] ? "#" + n[1] : "")), $(e).attr("href", n))
                            })
                        }
                    }
                } finally {}
                i(e, !0)
            }),
            this.refresh(),
            txv.Message.on("report_recomm_refresh", this.refresh),
            txv.Message.on("report_recomm_check",
            function() {
                l.message.emit("update")
            })
        },
        refresh: function(t) {
            var e = t ? $(t).find("[" + _ + "]") : $("[" + _ + "]");
            e.each(function() {
                var t = $(this),
                e = !!t.attr("_hz"),
                n = t.attr(_);
                if (t.attr("_" + _, n).removeAttr(_), !t.attr(y)) var o = l(this, {
                    enter: !0,
                    listenHoriz: e,
                    recalc: e
                },
                function() {
                    i(t, !1),
                    setTimeout(function() {
                        o && o()
                    })
                })
            })
        }
    };
    var _ = "_recommend",
    y = "_rec_only_click",
    x = ["pageType", "module", "seqnum", "rtype", "algId", "bucketId", "reason", "reasonType", "cid", "vid", "pid", "tag_id", "tag_type"],
    b = ["pt", "m", "s", "r", "a", "b", "rs", "rt", "c", "v", "p", "ti", "tt"]
},
function(t, e, n) {
    function i() {
        s(),
        h = setInterval(s, _)
    }
    function o() {
        y || (y = !0, x += k - w, w = (new Date).getTime(), b += w - k, p = x < m ? setTimeout(i, m - x) : setTimeout(i, _ - (x - m) % _))
    }
    function r() {
        y && (y = !1, k = (new Date).getTime(), p && (clearTimeout(p), p = 0), h && (clearInterval(h), h = 0))
    }
    function a() {
        r(),
        s((new Date).getTime())
    }
    function s() {
        var t = (new Date).getTime(),
        e = new Image(1, 1),
        n = t - C - b; (n < 0 || n > 1e4) && (n = 2998),
        e.src = "//btrace.qq.com/kvcollect?BossId=4154&Pwd=819243753&vtime=" + n + "&_dc=" + Math.random(),
        C = t,
        b = 0
    }
    function c() {
        if (!T && u()) {
            T = !0;
            var t = $(window);
            t.bind("focus", o),
            t.bind("blur", r),
            t.bind("unload", a),
            f(function(t) {
                t && t.on && t.on("windowFullscreenChange", d)
            }),
            document.hasFocus() && o()
        }
    }
    function l() {
        if (T) {
            var t = $(window);
            r(),
            t.unbind("focus", o),
            t.unbind("blur", r),
            t.unbind("unload", a),
            f(function(t) {
                t && t.off && t.off("windowFullscreenChange", d)
            })
        }
        T = !1
    }
    function u() {
        return window.top == window && parseInt(g.getUin()) % 97 == 76 && v[window.location.host]
    }
    function d(t) {
        t && setTimeout(function() {
            o()
        },
        500)
    }
    function f(t) {
        function e() {
            var o = window.PLAYER;
            o ? (i = !0, t(o)) : setTimeout(function() {
                n < 3 && !i && (n++, e())
            },
            2e3)
        }
        var n = 0,
        i = !1;
        e()
    }
    var p, h, g = n(5),
    v = {
        "v.qq.com": !0,
        "film.qq.com": !0,
        "live.qq.com": !0,
        "tv.qq.com": !0
    },
    m = 3e3,
    _ = 3e3,
    y = !1,
    x = 0,
    b = 0,
    w = (new Date).getTime(),
    k = w,
    C = w,
    T = !1;
    g.addLoginCallback(c),
    g.addLogoutCallback(l),
    c()
},
function(t, e, n) {
    var i, o = $(".navigation_more"),
    r = o.find(".pop_more"),
    a = r.find("iframe"),
    s = n(57),
    c = n(58),
    l = n(59).delay;
    o.on("mouseenter",
    function() {
        a.css("height", r.outerHeight() + "px"),
        s.emit(c.navmore, !0)
    }).on("mouseleave",
    function() {
        s.emit(c.navmore, !1)
    }),
    n(60);
    var u = n(61);
    u.init(),
    n(62),
    n(67),
    n(78),
    n(100),
    n(103),
    n(109),
    $(".mod_quick").on("mouseenter", ".quick_item",
    function() {
        $(this).siblings().removeClass("open")
    }).on("mouseleave",
    function() {
        i = setTimeout(function() {
            $(this).find(".quick_item").removeClass("open"),
            clearTimeout(i)
        },
        2 * l)
    }),
    t.exports = {
        "float": u
    }
},
function(t, e) {
    "use strict";
    function n() {
        this._evtObjs = {}
    }
    n.prototype.on = function(t, e) {
        this._evtObjs[t] || (this._evtObjs[t] = []),
        this._evtObjs[t].push({
            handler: e
        })
    },
    n.prototype.off = function(t, e) {
        var n;
        if (t) n = [t];
        else for (var i in this._evtObjs) Object.prototype.hasOwnProperty.call(this._evtObjs, i) && n.push(this._evtObjs[i]);
        for (var t in n) if (Object.prototype.hasOwnProperty.call(n, t)) {
            var o = this._evtObjs[n[t]] || [],
            r = [];
            for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && o[a].handler !== e && r.push(o[a]);
            this._evtObjs[t] = r
        }
        return this
    },
    n.prototype.emit = function(t, e) {
        var n = this._evtObjs[t] || [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && n[i].handler && n[i].handler(e)
    };
    var i = new n;
    n.on = function() {
        i.on.apply(i, arguments)
    },
    n.off = function() {
        i.off.apply(i, arguments)
    },
    n.emit = function() {
        i.emit.apply(i, arguments)
    },
    window.Message = t.exports = n
},
function(t, e) {
    t.exports = {
        navmore: "nav_more",
        navfloat: "nav_float",
        navunfloat: "nav_unfloat",
        smartsearch: "smartsearch",
        navheadimg: "navheadimg",
        viperror: "viperror",
        vipnotlogin: "vipnotlogin",
        tipsshow: "tipsshow"
    }
},
function(t, e) {
    "use strict";
    t.exports = {
        delay: 200
    }
},
function(t, e) {
    "use strict";
    var n = $("#new_vs_header"),
    i = n.find(".channel_title");
    window.CHANNEL_NAME && i.html(window.CHANNEL_NAME);
    var o = 0,
    r = n.find(".channel_more"),
    a = n.find(".nav_more_pop"),
    s = {
        init: function() {
            r.size() && (r.on("mouseenter", this.enter).on("mouseleave", this.leave), a.on("mouseenter", this.enter).on("mouseleave", this.leave))
        },
        leave: function() {
            o = setTimeout(function() {
                a.removeClass("open")
            },
            200)
        },
        enter: function() {
            clearTimeout(o),
            a.addClass("open")
        }
    };
    t.exports = s.init()
},
function(t, e, n) {
    "use strict";
    var i = $("#new_vs_header"),
    o = "FOCUS_SLIDE_CHANGE",
    r = !1,
    a = n(57),
    s = n(58);
    t.exports = {
        init: function() {
            i.size() && (this.register(), this.bindScroll())
        },
        register: function() {
            window.txvHeaderNav = {},
            window.txvHeaderNav.setRegisterCallback = function(t, e) {
                for (var n in e)({}).hasOwnProperty.call(e, n) && (window.txvHeaderNav[t] || (window.txvHeaderNav[t] = {}), window.txvHeaderNav[t][n] ? window.txvHeaderNav[t][n].push(e[n]) : window.txvHeaderNav[t][n] = [e[n]]);
            }
        },
        bindScroll: function() {
            var t = null;
            $(window).scroll(function() {
                clearTimeout(t),
                t = setTimeout(function() {
                    var t = window.txvHeaderNav && window.txvHeaderNav[o];
                    if ($(window).scrollTop() > 580) {
                        if (r) return;
                        if (r = !0, t && t.stop) for (var e = 0,
                        n = t.stop.length; e < n; ++e) t.stop[e] && t.stop[e]();
                        i.addClass("site_head_sticky"),
                        a.emit(s.navfloat)
                    } else {
                        if (!r) return;
                        if (r = !1, t && t.slide) for (var e = 0,
                        n = t.slide.length; e < n; ++e) t.slide[e] && t.slide[e]();
                        i.removeClass("site_head_sticky"),
                        a.emit(s.navunfloat)
                    }
                },
                50)
            })
        },
        getIsFloat: function() {
            return r
        }
    }
},
function(t, e, n) {
    function i(t) {
        var e = 0;
        "number" == typeof t ? e = t + 1 : t = 0;
        var n = l;
        m.getView(n, t).done(function(t) {
            v = t || [],
            d.html(s(v, e))
        }).fail(function() {
            o(t)
        })
    }
    function o(t) {
        var e = 0;
        "number" == typeof t ? e = t + 1 : t = 0,
        _.getView(t,
        function(t) {
            t && t.length > l && (t = t.slice(0, l)),
            d.html(a(t, e))
        })
    }
    function r(t, e) {
        if ("string" == typeof t && 0 != t.length) return g.isLogin() ? void m.rmRecord(t).done(function(e) {
            _.rmRecord(t),
            i()
        }).fail(function() {}) : (_.rmRecord(t), void o())
    }
    function a(t, e) {
        var n = {
            today: [],
            yesterday: [],
            earlier: [],
            empty: !0,
            login: g.isLogin(),
            isClickFilter: e
        };
        if (t && t.length) {
            for (var i = new Date,
            o = i.getDate(), r = i.getTime(), a = 864e5, s = 0; s < t.length; s++) {
                var c = t[s],
                l = 1e3 * t[s].date;
                if (r - 2 * a > l) n.earlier.push(c);
                else {
                    var u = new Date(l).getDate();
                    u == o ? n.today.push(c) : o - 1 == u ? n.yesterday.push(c) : n.earlier.push(c)
                }
            }
            n.empty = !1
        }
        return n._ = y,
        x(n)
    }
    function s(t, e) {
        var n = {
            today: [],
            yesterday: [],
            earlier: [],
            empty: !0,
            login: g.isLogin(),
            isClickFilter: e
        };
        if (t && t.length) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                "t" == o.type && o.list && o.list.length ? n.today = o.list: "y" == o.type && o.list && o.list.length ? n.yesterday = o.list: "e" == o.type && o.list && o.list.length && (n.earlier = o.list)
            }
            n.empty = !1
        }
        return n._ = y,
        x(n)
    }
    var c = $("#modHistory"),
    l = 10,
    u = $("#history_pop"),
    d = $("#modHistoryContent"),
    f = null,
    p = null,
    h = n(59),
    g = n(5),
    v = [],
    m = n(63),
    _ = n(64),
    y = n(65),
    x = n(66);
    g.addLogoutCallback(function() {
        v = [],
        d.empty()
    }),
    g.addLoginCallback(function() {
        v = [],
        d.empty()
    }),
    g.addReadyCallback(function() {
        c.on("mouseenter",
        function() {
            clearTimeout(f),
            p = setTimeout(function() {
                c.hasClass("open") || ("" == d.html() && d.html('<div class="mod_loading"></div>'), g.isLogin() ? 0 == v.length && i() : o(), c.addClass("open"), txv.Boss && "function" == typeof txv.Boss.expose && txv.Boss.expose("new_vs_header:pop_history"))
            },
            h.delay)
        }).on("mouseleave",
        function() {
            clearTimeout(p),
            f = setTimeout(function() {
                c.removeClass("open")
            },
            h.delay)
        }),
        u.on("click", "._filter_short",
        function(t) {
            var e = $(this),
            n = e.hasClass("selected") ? 0 : 1;
            g.isLogin() ? i(n) : o(n),
            e.toggleClass("selected"),
            txv.tj2.btnTj("history.filterShort")
        }),
        u.on("click", "._filter_all",
        function(t) {
            g.isLogin() ? i() : o(),
            txv.tj2.btnTj("history.filterAll")
        }),
        u.on("click", "[data-type='del']", "click",
        function(t) {
            t.preventDefault(),
            r(this.getAttribute("_key"), this.getAttribute("_idx") || 0),
            txv.tj2.btnTj("history.delete")
        })
    })
},
function(t, e) {
    function n(t, e) {
        var n = $.Deferred();
        return $.ajax({
            url: t,
            dataType: "jsonp",
            data: e,
            CSRF: !0,
            success: function(t) {
                return t && t.result && 0 == t.result.code ? void n.resolve(t) : void n.reject()
            },
            error: function() {
                n.reject()
            }
        }),
        n.promise()
    }
    function i(t, e) {
        var i = $.Deferred();
        return n("//ncgi.video.qq.com/tvideo/fcgi-bin/myview", {
            otype: "json",
            num: t,
            filtermax: 30,
            oslongvideo: e,
            t: 9,
            plat: 2
        }).done(function(t) {
            i.resolve(t.list)
        }).fail(function() {
            i.reject()
        }),
        i.promise()
    }
    function o(t) {
        var e = $.Deferred();
        return n("//ncgi.video.qq.com/tvideo/fcgi-bin/myview", {
            keyid: t,
            otype: "json",
            t: 4,
            plat: 2
        }).done(function(t) {
            e.resolve(t)
        }).fail(function() {
            e.reject()
        }),
        e.promise()
    }
    t.exports = {
        getView: i,
        rmRecord: o
    }
},
function(t, e, n) {
    function i(t) {
        var e = d.get(t);
        if (!e) return "";
        for (var n, i, o = e.split("|"), r = [], a = o.length - 1, s = a; s >= 0; s--) n = o[s],
        i = n.substr(0, n.indexOf(",")),
        e.indexOf(i) == e.lastIndexOf(i) && r.unshift(n),
        e = o.slice(0, s).join("|");
        return r.join("|")
    }
    function o(t) {
        return t = t || p,
        u.isLogin() ? t + u.getUnicode() : t
    }
    function r(t, e) {
        for (var n = [], i = [], o = 0; o < t.length; o++) {
            var r = t[o];
            if ($.inArray(r.ctypeid, [1, 2, 3, 9, 10, 106]) > -1) {
                if ("string" == typeof r.keyid) {
                    var a = r.keyid.split("_");
                    2 == a.length && (r.vid = a[1], n.push(r.vid))
                }
                i.push(r)
            }
        }
        0 == n.length ? e(i) : (n = n.slice(0, 30), $.ajax({
            url: "//union.video.qq.com/fcgi-bin/data?tid=1044&otype=json&appid=20001373&appkey=f6301da6035cd6cc",
            data: {
                idlist: n.join(",")
            },
            dataType: "jsonp"
        }).done(function(t) {
            var n = [];
            if (0 == t.errorno && t.results && t.results.length) for (var o = 0; o < t.results.length; o++) {
                var r = t.results[o];
                if (r.fields && (10 == r.fields.type && 1 == r.fields.c_full || 10 != r.fields.type && 1 == r.fields.positive_trailer)) for (var a = 0; a < i.length; a++) if (r.id == i[a].vid) {
                    n.push(i[a]);
                    break
                }
            }
            e(n)
        }).fail(function() {
            e(i)
        }))
    }
    function a(t, e) {
        var n, a = i(o()),
        s = a ? a.split("|") : [],
        c = [];
        if (s.length) {
            for (var l = 0,
            u = s.length; l < u; l++) {
                n = s[l].split(",");
                var d = {
                    keyid: n[0],
                    vtit: $.trim(n[1]),
                    date: n[2] / 1e3,
                    time: n[3],
                    tl: n[4],
                    ispay: 1 * n[5] > 1 ? 4 : 8,
                    ctypeid: +n[6]
                };
                c.push(d)
            }
            t ? r(c,
            function(t) {
                e(t)
            }) : e(c)
        } else e(s)
    }
    function s(t, e) {
        var n = t.split("|"),
        i = n.length;
        return i > l && (t = n.splice(0, l).join("|")),
        t = t.replace(new RegExp(e + "[^\\|]+\\|?", "gi"), ""),
        /(\|)$/.test(t) && (t = t.replace(RegExp.$1, "")),
        i >= l ? t.replace(/\|[^|]+$/g, "") : t
    }
    function c(t) {
        var e = o(),
        n = i(e);
        n = n ? s(n, t) : "",
        d.set(e, n)
    }
    var l = 10,
    u = n(5),
    d = n(10),
    f = !1;
    d.get("anything",
    function() {
        f = !0
    });
    var p = "ten_video_history";
    t.exports = {
        getView: a,
        rmRecord: c
    }
},
function(t, e) {
    var n = {
        getTitle: function(t) {
            if (!t) return "";
            if (t.title = t.title || t.col_title || "", t.col_title) return t.col_title;
            if (t.vtit = this.escapes(t.vtit || ""), !t.vtit) return t.title;
            if (2 == t.ctypeid || 3 == t.ctypeid) {
                var e = t.vtit.match(/^([^_]+)_(\d+(?:\-\d+)?)$/);
                return e && 3 == e.length ? t.vtit.indexOf("预告片") == -1 ? [t.title || e[1], " 第", e[2], "集"].join("") : [t.title, " 第", e[2], "集", e[1]].join("") : t.vtit.indexOf(t.title) != -1 ? t.vtit: (e = t.vtit.match(/^([^_]+)_(\d+)_(\d+)$/), e && 4 == e.length ? [t.title || e[1], " 第", e[2], "集"].join("") : t.title + " " + t.vtit)
            }
            if (10 == t.ctypeid) return t.colname ? t.colname + " " + t.vtit: t.vtit;
            if ($.inArray(t.ctypeid, [1, 98]) != -1) {
                var n = new RegExp("^" + t.title + "_\\d+");
                return n.test(t.vtit) ? t.title || t.vtit: t.vtit
            }
            return 39 == t.ctypeid ? t.title || t.vtit: t.vtit
        },
        getTitleOnly: function(t) {
            if (!t) return "";
            if (t.title = t.title || t.col_title || "", t.col_title) return t.col_title;
            if (t.vtit = this.escapes(t.vtit || ""), !t.vtit) return t.title;
            if (2 == t.ctypeid || 3 == t.ctypeid) {
                var e = t.vtit.match(/^([^_]+)_(\d+(?:\-\d+)?)$/);
                return e && 3 == e.length ? t.vtit.indexOf("预告片") == -1 ? t.title || e[1] : t.title: (e = t.vtit.match(/^([^_]+)_(\d+)_(\d+)$/), e && 4 == e.length ? t.title || e[1] : t.title + " " + t.vtit)
            }
            if (10 == t.ctypeid) return t.colname ? t.variety_episode && "null" != t.variety_episode ? t.colname: t.colname + " " + t.vtit: t.vtit;
            if ($.inArray(t.ctypeid, [1, 98]) != -1) {
                var n = new RegExp("^" + t.title + "_\\d+");
                return n.test(t.vtit) ? t.title || t.vtit: t.vtit
            }
            return 39 == t.ctypeid ? t.title || t.vtit: t.vtit
        },
        escapes: function(t) {
            return t ? String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : ""
        },
        getEpisode: function(t) {
            if (t && t.vtit) if (2 == t.ctypeid || 3 == t.ctypeid) {
                var e = t.vtit.match(/^([^_]+)_(\d+(?:\-\d+)?)$/);
                if (e && 3 == e.length) return "第" + e[2] + "集";
                if (e = t.vtit.match(/^([^_]+)_(\d+)_(\d+)$/), e && 4 == e.length) return "第" + e[2] + "集"
            } else if (10 == t.ctypeid && t.colname && t.variety_episode && "null" != t.variety_episode) return "第" + t.variety_episode + "期";
            return ""
        },
        formatVideoTitle: function(t) {
            return t
        },
        getPlayUrl: function(t, e) {
            var n, i, o, r, a, s = "";
            "string" == typeof t ? (n = t, i = n.split("_"), o = i[0], r = i[1], 2 == i.length ? (isNaN(i[2]) || (r += "_" + i[2]), "string" == typeof o && o.length > 0 ? s = txv.util.getPlayUrl(o, r) : "string" == typeof r && r.length > 0 && (s = txv.util.getVideoPlayUrl(r))) : 3 == i.length && (s = txv.util.getDetailUrl(o || r))) : "object" === $.type(t) && (i = t.keyid.split("_"), a = t.time < 0 ? t.time * -1 : t.time, 3 == i.length && (i[1] = i[1] + "_" + i[2]), s = 7 == t.ctypeid ? txv.util.getBokePlayUrl(i[1]) : i[0].length > 0 ? txv.util.getPlayUrl(i[0], i[1]) : txv.util.getVideoPlayUrl(i[1]));
            var c = /\/\/v.qq.com/.test(s);
            return c ? s: "http://v.qq.com" + s
        },
        getTipsByTime: function(t, e) {
            var i = "";
            if (t = parseInt(t, 10), e = parseInt(e, 10), t = n.timeAdaptor(t, e), e <= 300 || t == -2) i = "已看完";
            else if (t < 60 || isNaN(t)) i = "剩余99%";
            else {
                if (i = 100 * (e - t) / e, 0 == i) return "已看完";
                i < 1 && (i = 1),
                i = "剩余" + Math.floor(i) + "%"
            }
            return i
        },
        timeAdaptor: function(t, e) {
            return t < 0 && (t == -2 ? t = e: t *= -1),
            t
        },
        plat: function(t) {
            return 8 == t ? "icon_tv_sm": t >= 3 && t <= 5 ? "icon_phone_sm": "icon_client_sm"
        }
    };
    t.exports = n
},
function(module, exports) {
    module.exports = function(d) {
        with(d) return "" + (function() {
            return empty ? isClickFilter > 0 ? '\n<div class="quick_pop_empty">\n\t<a class="btn_filter _filter_short' + (function() {
                if (2 == isClickFilter) return " selected"
            } () || "") + '" href="javascript:;" _hot="mynav.historyfiltershort" _stat="new_vs_header:history_filter">\n\t<i class="icon_sm icon_select_sm"><svg class="svg_icon" viewBox="0 0 16 16" width="16" height="16"><use xlink:href="#svg_icon_select_sm"></use></svg></i>\n\t<i class="icon_sm icon_selected_sm"><svg class="svg_icon" viewBox="0 0 16 16" width="16" height="16"><use xlink:href="#svg_icon_selected_sm"></use></svg></i>\n\t<span class="txt">过滤短视频</span>\n</a>\n\t<i class="icon_xl icon_time_xl"><svg class="svg_icon" viewBox="0 0 70 70" width="70" height="70"><use xlink:href="#svg_icon_time_xl"></use></svg></i>\n\t<div class="more_txt">\n\t\t<p class="txt">没有长视频观看记录</p>\n\t\t<p class="txt">（电视剧/电影/综艺/动漫/少儿/纪录片）</p>\n\t\t<p class="txt"><a href="javascript:;" class="hl _filter_all" _hot="mynav.historyfilterall" _stat="new_vs_header:history_filter2">查看全部</a></p>\n\t</div>\n</div>\n<div class="quick_pop_btn">\n\t<a href="http://v.qq.com/zhuiju/" target="_blank" data-type="link" class="btn_pop_link" _stat="new_vs_header:history_more_zhui">开始追个剧吧</a>\n</div>\n': '\n<div class="quick_pop_empty">\n\t<i class="icon_xl icon_time_xl"><svg class="svg_icon" viewBox="0 0 70 70" width="70" height="70"><use xlink:href="#svg_icon_time_xl"></use></svg></i>\n\t<p class="empty_txt">你暂时还没有观看记录呦~</p>\n</div>\n<div class="quick_pop_btn">\n\t' + (function() {
                return login ? '\n\t<a href="http://v.qq.com/u/history/" target="_blank" data-type="link" _stat="new_vs_header:history_more" class="btn_pop_link">查看更多</a>  \n': '\n\t<a href="javascript:;" data-type="login" class="btn_pop_link" _stat="new_vs_header:history_more_login">登录查看更多</a>  \n'
            } () || "") + "\n</div>\n": '\n<div class="pop_timeline_wrap">\n\t<div class="timeline_video_wrap">\t\t\n\t\t<a class="btn_filter _filter_short' + (function() {
                if (2 == isClickFilter) return " selected"
            } () || "") + '" href="javascript:;" _hot="mynav.historyfiltershort" _stat="new_vs_header:history_filter">\n\t<i class="icon_sm icon_select_sm"><svg class="svg_icon" viewBox="0 0 16 16" width="16" height="16"><use xlink:href="#svg_icon_select_sm"></use></svg></i>\n\t<i class="icon_sm icon_selected_sm"><svg class="svg_icon" viewBox="0 0 16 16" width="16" height="16"><use xlink:href="#svg_icon_selected_sm"></use></svg></i>\n\t<span class="txt">过滤短视频</span>\n</a>\n\t\t' + (function() {
                if (today.length > 0) return '<dl class="timeline_video_list history_today">\n\t\t\t<dt><span class="dot_wrap"><i class="dot"></i></span><span class="timeline_date">今天</span></dt>\n\t\t\t' + (today || []).map(function(t, e) {
                    return '\n\t\t\t\t<dd key="' + t.keyid + '">\n\t<a href="' + _.getPlayUrl(t) + '" target="_blank;" _hot="mynav.historylist" _qtag="nav.history" _stat="new_vs_header:history_item" title="' + _.getTitle(t) + '" class="video_tit_part">\n\t\t<span class="tit">' + _.getTitleOnly(t) + "</span>" + (function() {
                        if (_.getEpisode(t)) return '<span class="part">' + _.getEpisode(t) + "</span>"
                    } () || "") + '\n\t</a>\n\t<span class="video_timeprogress">' + _.getTipsByTime(t.time, t.tl) + '</span>\n\t<span class="video_timesource">\n\t\t<i class="icon_sm ' + _.plat(t.plat) + '"><svg class="svg_icon" viewBox="0 0 16 16" width="16" height="16"><use xlink:href="#svg_' + _.plat(t.plat) + '"></use></svg></i>\n\t</span>\n\t<a href="javascript:;" _hot="mynav.historydelete" _key="' + t.keyid + '" data-type="del" title="删除" _stat="new_vs_header:history_delete" _idx=' + t.idx + ' class="btn_close">×</a>\n</dd>\n\t\t\t'
                }).join("") + "\n\t\t</dl>"
            } () || "") + "\n\t\t" + (function() {
                if (yesterday.length > 0) return '<dl class="timeline_video_list history_yesterday">\n\t\t\t<dt><span class="dot_wrap"><i class="dot"></i></span><span class="timeline_date">昨天</span></dt>\n\t\t\t' + (yesterday || []).map(function(t, e) {
                    return '\n\t\t\t\t<dd key="' + t.keyid + '">\n\t<a href="' + _.getPlayUrl(t) + '" target="_blank;" _hot="mynav.historylist" _qtag="nav.history" _stat="new_vs_header:history_item" title="' + _.getTitle(t) + '" class="video_tit_part">\n\t\t<span class="tit">' + _.getTitleOnly(t) + "</span>" + (function() {
                        if (_.getEpisode(t)) return '<span class="part">' + _.getEpisode(t) + "</span>"
                    } () || "") + '\n\t</a>\n\t<span class="video_timeprogress">' + _.getTipsByTime(t.time, t.tl) + '</span>\n\t<span class="video_timesource">\n\t\t<i class="icon_sm ' + _.plat(t.plat) + '"><svg class="svg_icon" viewBox="0 0 16 16" width="16" height="16"><use xlink:href="#svg_' + _.plat(t.plat) + '"></use></svg></i>\n\t</span>\n\t<a href="javascript:;" _hot="mynav.historydelete" _key="' + t.keyid + '" data-type="del" title="删除" _stat="new_vs_header:history_delete" _idx=' + t.idx + ' class="btn_close">×</a>\n</dd>\n\t\t\t'
                }).join("") + "\n\t\t</dl>"
            } () || "") + "\n\t\t" + (function() {
                if (earlier.length > 0) return '<dl class="timeline_video_list history_earlier">\n\t\t\t<dt><span class="dot_wrap"><i class="dot"></i></span><span class="timeline_date">更早</span></dt>\n\t\t\t' + (earlier || []).map(function(t, e) {
                    return '\n\t\t\t\t<dd key="' + t.keyid + '">\n\t<a href="' + _.getPlayUrl(t) + '" target="_blank;" _hot="mynav.historylist" _qtag="nav.history" _stat="new_vs_header:history_item" title="' + _.getTitle(t) + '" class="video_tit_part">\n\t\t<span class="tit">' + _.getTitleOnly(t) + "</span>" + (function() {
                        if (_.getEpisode(t)) return '<span class="part">' + _.getEpisode(t) + "</span>"
                    } () || "") + '\n\t</a>\n\t<span class="video_timeprogress">' + _.getTipsByTime(t.time, t.tl) + '</span>\n\t<span class="video_timesource">\n\t\t<i class="icon_sm ' + _.plat(t.plat) + '"><svg class="svg_icon" viewBox="0 0 16 16" width="16" height="16"><use xlink:href="#svg_' + _.plat(t.plat) + '"></use></svg></i>\n\t</span>\n\t<a href="javascript:;" _hot="mynav.historydelete" _key="' + t.keyid + '" data-type="del" title="删除" _stat="new_vs_header:history_delete" _idx=' + t.idx + ' class="btn_close">×</a>\n</dd>\n\t\t\t'
                }).join("") + "\n\t\t</dl>"
            } () || "") + '\n\t\t\n\t</div>\n\t<div class="quick_pop_btn">\n\t\t' + (function() {
                return login ? '\n\t<a href="http://v.qq.com/u/history/" target="_blank" data-type="link" _stat="new_vs_header:history_more" class="btn_pop_link">查看更多</a>  \n': '\n\t<a href="javascript:;" data-type="login" class="btn_pop_link" _stat="new_vs_header:history_more_login">登录查看更多</a>  \n'
            } () || "") + "\n\t</div>\n</div>\n"
        } () || "")
    }
},
function(t, e, n) {
    function i() {
        f.length && !f.hasClass("none") || (f.removeClass("none"), p.hide(), c.addClass("open"), h.reportBossVipSys(3))
    }
    var o = n(5),
    r = n(68),
    a = n(69),
    s = n(59),
    c = $("#mod_head_user"),
    l = $("#mod_head_notice_trigger"),
    u = c.find('[data-type="avatar"]'),
    d = u.attr("src"),
    f = $("#mod_notlogin_pop"),
    p = $("#mod_head_notice_pop"),
    h = n(70),
    g = null,
    v = null,
    m = !1,
    _ = !1;
    c.on("mouseenter",
    function() {
        clearTimeout(g),
        v = setTimeout(function() {
            _ ? (m || (m = !0, n(72)()), a.lazyUnRead(), f.addClass("none"), p.show(), c.addClass("open"), txv.Boss && "function" == typeof txv.Boss.expose && txv.Boss.expose("new_vs_header:pop_head")) : f.length && i()
        },
        s.delay)
    }).on("mouseleave",
    function() {
        clearTimeout(v),
        g = setTimeout(function() {
            c.removeClass("open"),
            f.addClass("none"),
            p.hide()
        },
        300)
    }),
    o.addReadyCallback(function() { ! o.isLogin(),
        f.on("click", "[data-boss]",
        function() {
            h.reportBossVipSys($(this).attr("data-boss"))
        }),
        a.getUnRead()
    }),
    l.on("click",
    function(t) {
        o.isLogin() || (t.preventDefault(), o.openLogin())
    }),
    o.addLogoutCallback(function() {
        _ = !1,
        c.removeClass("open"),
        p.hide(),
        u.attr("src", d),
        l.attr("title", "未登录")
    }),
    o.addLoginCallback(function() {
        _ = !0,
        l.attr("title", "");
        var t = "http://v.qq.com/vplus/" + o.getUin();
        p.find(".vplus_link").attr("href", t),
        p.find(".item_vplus>a.item_link").attr("href", t)
    }),
    o.addReadyCallback(function() {
        if (o.isLogin()) {
            _ = !0;
            var t = "http://v.qq.com/vplus/" + o.getUin();
            p.find(".vplus_link").attr("href", t),
            p.find(".item_vplus>a.item_link").attr("href", t)
        }
    }),
    n(73),
    r()
},
function(t, e, n) {
    "use strict";
    function i() {
        function t(t) {
            return r ? t(null, r) : void $.ajax({
                url: "//growth.video.qq.com/fcgi-bin/user_medal_info",
                dataType: "jsonp",
                success: function(e) {
                    e && 0 == e.ret ? t(null, e.curMedal) : t("error")
                },
                error: function() {
                    t("error")
                }
            })
        }
        if (!o) {
            o = !0,
            0 == $(".icon_achievement").length && $('<a href="http://v.qq.com/u/badge.html" class="icon_achievement" target="_blank"><img id="_person_achieve_img" src="" alt="" style="display: none;"></a>').insertAfter($(".quick_pop_user_hd").find(".account_vip"));
            var e = $("#_person_achieve_img");
            e.size() > 0 && $("#mod_head_notice_trigger").on("mouseenter",
            function() {
                t(function(t, n) {
                    return t ? e.hide() : void(~n && (s || (s = !0, e.attr("src", "//i.gtimg.cn/qqlive/images/20160725/curMedal_" + n + ".png")), e.show()))
                })
            })
        }
    }
    var o, r, a = n(5),
    s = !1;
    t.exports = function() {
        a.isLogin() ? i() : a.addLoginCallback(function() {
            r = "",
            s = !1,
            i()
        })
    }
},
function(t, e, n) {
    "use strict";
    function i() {
        $("._message_notice").remove(),
        $("#mod_head_user > ._checklogin").attr("href", a),
        $("._message_link").hide(),
        $("#mod_avator_moneybag").css("border-bottom", "none")
    }
    function o() {
        var t = $("#mod_head_user > ._checklogin");
        0 !== t.length && $.ajax({
            url: "//node.video.qq.com/x/usercenter/message/no_read_msg",
            data: {
                dwPlatform: 0,
                dwCount: 1
            },
            dataType: "jsonp",
            success: function(e) {
                if ("undefined" != typeof e) {
                    var n = e.data || {},
                    o = n.vecMsgList && n.vecMsgList[0];
                    if (o) {
                        var r = $("a._message_link"),
                        a = $("._message_notice").length > 0 ? $("._message_notice") : $('<i class="dot_notice _message_notice"></i>');
                        t.append(a),
                        t.attr("href", "http://v.qq.com/u/message"),
                        t.on("click",
                        function() {
                            setTimeout(function() {
                                i()
                            },
                            50)
                        }),
                        r.on("click",
                        function() {
                            setTimeout(function() {
                                i()
                            },
                            50)
                        }),
                        $("#mod_avator_moneybag").css("border-bottom", "none"),
                        $("._message_title").text(o.strTitle),
                        $("._message_tips").text(o.strAbstract),
                        $("._message_link").show(),
                        $("#mod_avator_moneybag").css("border-bottom", s),
                        /search/.test(location.pathname) && (r.find(".icon_notice_sm").css("color", c), a.css("right", "-7px"))
                    } else i()
                }
            },
            error: function(t) {}
        })
    }
    var r = n(5),
    a = $("#mod_head_user > ._checklogin").attr("href"),
    s = $("#mod_avator_moneybag").css("border-bottom");
    $("._vcoin_link").hide(),
    $("#mod_avator_moneybag").css("border-bottom", "none");
    var c = "#fa5058";
    t.exports = {
        getUnRead: function() {
            r.isLogin() && o(),
            txv.login.addLoginCallback(function() {
                r.isLogin() && o()
            }),
            txv.login.addLogoutCallback(function() {
                $("._message_notice").hide(),
                $("._message_link").hide()
            })
        },
        lazyUnRead: function() {
            0 == $("._message_notice").length && this.getUnRead()
        }
    }
},
function(t, e, n) {
    var i = n(71),
    o = {
        isInToday: function(t) {
            var e = new Date,
            n = new Date(e.getTime() + 864e5),
            i = n.getFullYear(),
            o = n.getMonth() + 1,
            r = n.getDate(),
            a = new Date([i, o, r].join("/"));
            return 1 * t + 864e5 > a.getTime()
        },
        isTodayShowed: function() {
            var t = txv.login.getUnicode(),
            e = "",
            n = localStorage.getItem("show_vcoin_exchange"),
            i = !1;
            return n && (n = $.parseJSON(n), n[t] && (e = n[t], e && (i = !0))),
            i
        },
        setVipSysShowTime: function() {
            if (txv.login.isLogin()) {
                var t = localStorage.getItem("show_vcoin_exchange");
                t = t ? $.parseJSON(t) : {},
                t[txv.login.getUnicode()] = (new Date).getTime();
                try {
                    localStorage.setItem("show_vcoin_exchange", o.obj2str(t))
                } catch(e) {}
            }
        },
        json2str: function(t) {
            try {
                return JSON.stringify(t)
            } catch(e) {
                var n = $.isArray(t),
                i = [];
                for (var o in t) i.push(o + ":" + t[o]);
                return i = i.join(","),
                n ? "[" + i + "]": "{" + i + "}"
            }
        },
        reportBossVipSys: function(t) {
            var e = {
                url: document.URL,
                uuid: i && "function" == typeof i.uid && i.uid() || txv.cookie.get("tvfe_boss_uuid"),
                openid: txv.login.getWxAuthCookies() ? txv.login.getWxAuthCookies().openid: "",
                uin: txv.login.getUin(),
                BossId: 3809,
                Pwd: 1896006998,
                _dc: Math.random(),
                target: t
            },
            n = "//btrace.qq.com/kvcollect?" + $.param(e);
            txv.report(n)
        }
    };
    t.exports = o
},
function(t, e, n) {
    "use strict";
    function i(t) {
        return m + T + "&s_uuid=" + (g() || r()) + "&s_omgid=" + (w || "") + "&s_referrer=" + encodeURIComponent(document.referrer || t.referrer || "") + "&_dc=" + Math.random() + "&s_openid=" + (b || d.get("openid")) + "&s_uin=" + (d.get("o_cookie") || d.get("uin") || d.get("luin")) + "&s_appid=" + d.get("appid") + "&s_mainlogin=" + d.get("main_login")
    }
    function o() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return [t(), t(), t(), t()].join("")
    }
    function r() {
        if (C) return C;
        var t = d.get("tvfe_boss_uuid");
        if (!t) {
            t = o();
            try {
                d.set("tvfe_boss_uuid", t, "qq.com", !1, 87600)
            } catch(e) {
                d.set("tvfe_boss_uuid", t, "", !1, 87600)
            }
        }
        return C = t,
        t
    }
    function a(t, e) {
        t = t.replace(/\.$/, "").split("."),
        (t.length < 3 || t.length > 5) && console.warn("按钮名分段数不对，可能会导致数据丢失");
        var n = i({
            referrer: v()
        });
        n += "&s_ptag=" + encodeURIComponent(x || "") + "&s_app=" + encodeURIComponent(t[0] || "") + "&s_module=" + encodeURIComponent(t[1] || "") + "&s_behave=" + encodeURIComponent(t[2] || "") + "&s_sub=" + encodeURIComponent(t[3] || "") + "&s_fifth=" + encodeURIComponent(t[4] || ""),
        e && e.lazy ? p.push(n) : f(n)
    }
    function s(t) {
        return function(e) {
            var n;
            try {
                n = JSON.parse(e)
            } catch(i) {
                try {
                    n = JSON.parse(decodeURIComponent(e))
                } catch(i) {
                    return t(i.message, null, e)
                }
            }
            0 == n.errCode ? t(null, n, e) : t(n.errCode + ":" + n.errMsg, n, e)
        }
    }
    var c, l = n(25)(),
    u = n(26),
    d = n(6),
    f = n(31),
    p = n(32),
    h = function() {},
    g = h,
    v = h,
    m = "//btrace.qq.com";
    try {
        c = window.jQuery || window.Zepto || window.tvp && tvp.$
    } catch(_) {}
    c && c(document.body).on("click", "[_boss]",
    function(t) {
        var e = c(t.currentTarget);
        a(e.attr("_boss"))
    });
    var y = window.sessionStorage || {
        getItem: function() {
            return ""
        }
    },
    x = u.get("ptag") || y.getItem("ptag") || d.get("ptag"),
    b = u.get("openid"),
    w = "";
    if (l.browser.QQvideo) {
        var k = n(33);
        k(function(t) {
            t.invoke("getDeviceInfo", null, s(function(t, e) {
                t || 0 != e.errCode || (w = e.result.omgid || "")
            }))
        })
    }
    var C, T = "/kvcollect?BossId=3255&Pwd=2118551257&s_urrl=" + encodeURIComponent(location.href.split("?")[0]) + "&s_ua=" + navigator.userAgent + "&s_browser=" + l.browser.name;
    t.exports = {
        uuid: function() {
            return r()
        },
        uuidGetter: function(t) {
            g = t || h
        },
        referrerGetter: function(t) {
            v = t || h
        },
        ptag: function(t) {
            x = t
        },
        host: function(t) {
            m = t
        },
        hot: a,
        uid: r
    }
},
function(t, e, n) {
    function i(t) {
        t = t || "vcoin";
        var e = "//video.qq.com/fcgi-bin/get_user_profile?otype=json",
        n = $.Deferred();
        return $.ajax({
            url: e,
            data: {
                datakey: t
            },
            dataType: "jsonp",
            success: function(t) {
                return t && 0 == t.err_code ? void n.resolve(t.propertys) : void n.reject(t)
            },
            error: function() {
                n.reject()
            }
        }),
        n
    }
    function o() {
        i().done(function(t) {
            if (t && t.length) {
                var e = t[0],
                n = t[1];
                1 == e.property_type ? (a.html(e.property_count), s.html(n.property_count)) : (a.html(n.property_count), s.html(e.property_count))
            }
        }).fail(function() {})
    }
    var r = $("#mod_avator_moneybag"),
    a = r.find("._diamond"),
    s = r.find("._vcoin"),
    c = n(5);
    t.exports = function() {
        0 != r.length && (c.isLogin() && o(), c.addLoginCallback(o))
    }
},
function(t, e, n) {
    function i(t) {
        var e = n(76);
        e.init(t);
        var i = t && t.vip,
        r = t && t.annualvip,
        s = t && t.level,
        c = [o.base];
        t && t.tv && 1 == t.tv.vip ? c.push(o.svip) : i ? (r && c.push(o.year), c.push(o.level + s)) : (t.annualendtime > 0 && c.push(o.year), c.push(o.notvip), s > 0 && c.push(o.level + s)),
        a.attr("class", c.join(" ")).removeClass("none")
    }
    var o = {
        base: "icon_vip",
        svip: "icon_svip",
        notvip: "icon_vip_grey",
        year: "icon_vipyear",
        level: "icon_vip_lv"
    },
    r = n(5),
    a = $("[data-type='viplogo']"),
    s = n(74);
    r.addLogoutCallback(function() {
        a.addClass("none")
    }),
    r.addReadyCallback(function() {
        s.setIsNeedEndTime(!0),
        s.getVipInfo().done(function(t) {
            i(t)
        })
    }),
    r.addLoginCallback(function() {
        s.getVipInfo().done(function(t) {
            i(t)
        })
    }),
    $(document).on("click", '[data-type="switchlogin"]',
    function(t) {
        t.preventDefault();
        var e = txv.login.getLoginType(),
        n = "qq" == e ? "wx": "qq";
        r.openLoginSingle(null, n),
        r.reportToBoss({
            oper: 41,
            main_type: n
        })
    })
},
function(t, e, n) {
    function i(t) {
        return t ? (d = $.Deferred(), r(), d) : d ? d: (d || (d = $.Deferred()), h && p && "undefined" != typeof p.adpass ? void d.resolve(p) : (r(), d))
    }
    function o(t) {
        $.ajax({
            url: u.svip,
            dataType: "jsonp",
            CSRF: !0,
            success: function(e) {
                e && e.result && 0 == e.result.code && e.tv && 1 == e.tv.vip ? t && t(e) : t && t(!1)
            },
            error: function() {
                t && t(!1)
            }
        })
    }
    function r(t) {
        d.done(function(t) {
            t && t.endTime && w(t.endTime)
        }).fail(b),
        v = !0;
        var e = t ? u.bkapi: u.api;
        $.ajax({
            url: e,
            data: {
                uin: a.getUin(),
                t: g ? 1 : 0,
                getadpass: h ? 1 : 0
            },
            dataType: "jsonp",
            CSRF: !0,
            timeout: t ? 4e3: 2e3,
            success: function(t) {
                return t && t.result ? 0 == t.result.code ? void(t.vip ? o(function(e) {
                    e && (t.tv = e.tv),
                    p = t,
                    d.resolve(t),
                    m.fire(t)
                }) : (p = t, d.resolve(t), m.fire(t))) : (d.reject(t), t.result.code == -11 ? (c.emit(l.vipnotlogin), void y({
                    str1: "not login"
                })) : (c.emit(l.viperror, t.result.code), void y({
                    str1: "cgi return error code:" + t.result.code
                }))) : (c.emit(l.viperror), d.reject(t), y({
                    str1: "invalid json"
                }), void 0)
            },
            error: function(e) {
                t ? (e = e || "cgi error", c.emit(l.viperror, "500"), d.reject(), y({
                    str1: e
                })) : r(!0)
            }
        }).always(function() {
            v = !1
        })
    }
    var a = n(5),
    s = n(10),
    c = n(57),
    l = n(58),
    u = n(75),
    d = (n(15), null),
    f = null,
    p = null,
    h = !1,
    g = !1,
    v = !1,
    m = $.Callbacks("unique memory"),
    _ = function() {
        d && (d = null),
        f && (f = null),
        p = null
    },
    y = function(t) {
        var e = "http://rcgi.video.qq.com/web_report?cmd=2562&ctype=1&",
        n = new Image,
        i = [];
        $.extend(t, {
            ua: navigator.userAgent
        });
        for (var o in t) i.push(o + "=" + encodeURIComponent(t[o]));
        e += i.join("&"),
        n.src = e
    },
    x = function() {
        return "fm_v_" + a.getUnicode()
    },
    b = function() {
        s.remove(x())
    },
    w = function(t) {
        a.isLogin() && "string" == $.type(t) && s.set(x(), [a.getUnicode(), t, (new Date).getTime()].join("|"))
    };
    a.addClearLoginStatusCallback(_),
    a.addLogoutCallback(_),
    a.addOpenLoginCallback(_);
    var k = {
        setIsNeedToGetAdPassInfo: function(t) {
            h = !!t
        },
        setIsNeedEndTime: function(t) {
            g = !!t
        },
        getVipInfo: function(t) {
            var e = $.Deferred();
            return a.isLogin() && "om.qq.com" !== location.host ? d && !t ? d: i(t) : (e.reject(), e)
        },
        addGetVipCallback: function(t) {
            m.add(t)
        }
    };
    t.exports = k
},
function(t, e) {
    t.exports = {
        api: "//pay.video.qq.com/fcgi-bin/payvip?otype=json&getannual=1",
        bkapi: "//bkpay.video.qq.com/fcgi-bin/payvip?otype=json&getannual=1",
        svip: "//vip.video.qq.com/fcgi-bin/svip_comm_cgi?svr_name=getsvip&otype=json"
    }
},
function(t, e, n) {
    var i = $("#mod_head_vipInfo"),
    o = $("#mod_head_vipPay"),
    r = o.find("a"),
    a = $.Deferred(),
    s = "开通VIP会员",
    c = "续费VIP会员",
    l = {
        init: function(t) {
            0 != i.length && 0 != o.length && t && l.process(t)
        },
        loadMiniPay: function() {
            window.define && n(77).cmd ? seajs.config({
                alias: {
                    "film.pay.minipay": "//qzs.qq.com/tencentvideo_v1/js/txv.flashminipay.min.js"
                }
            }).use("film.pay.minipay",
            function(t) {
                a.resolve()
            }) : a.reject()
        },
        process: function(t) {
            if (1 == t.vip) {
                var e = !1,
                n = '<span class="acc_txt">您的VIP到期时间为：';
                "HLWHF" == t.servicetype && t.endmsg ? (n += t.endmsg, e = !0) : t.endTime && t.endTime.length > 0 && (n += t.endTime.substr(0, 10)),
                n += "</span>",
                l.show(n, c, e)
            } else l.getRelateVip(function(t) {
                var e = '<span class="acc_txt">';
                t ? (e += "您的", e += "wx" == t.bind_type ? "微信": "QQ", e += "账号", t.account_id && t.account_id.length > 0 && (e += '<span class="name">' + t.account_id + "</span>"), e += '是VIP</span><a href="javacript:;" class="acc_change" data-type="' + t.bind_type + '" id="mod_head_vip_shift">切换</a>', txv.login.reportToBoss({
                    oper: 40,
                    main_type: t.bind_type
                })) : e += "您还不是VIP会员！</span>",
                l.show(e, s)
            })
        },
        events: function() {
            r.off("click"),
            r.on("click",
            function(t) {
                t.preventDefault(),
                l.openMiniPay()
            }),
            i.off("click", "#mod_head_vip_shift"),
            i.on("click", "#mod_head_vip_shift",
            function(t) {
                t.preventDefault();
                var e = $(this).attr("data-type");
                txv.login.openLoginSingle(null, e),
                txv.login.reportToBoss({
                    oper: 41,
                    main_type: e
                })
            })
        },
        getRelateVip: function(t) {
            $.ajax({
                url: "//pay.video.qq.com/fcgi-bin/check_bindaccount",
                data: {
                    otype: "json"
                },
                dataType: "jsonp",
                CSRF: !0,
                success: function(e) {
                    t(e && e.result && 0 == e.result.code && 1 == e.isVip ? e: null)
                },
                error: function(e) {
                    t(null)
                }
            })
        },
        openMiniPay: function(t) {
            "function" == typeof $.pay ? $.pay({
                _source: 79,
                aid_version: "V0",
                _scene: "wx" == txv.login.getLoginType() ? 2 : 1
            }) : $.getScript("//qzs.qq.com/tencentvideo_v1/js/txv.flashminipay.min.js",
            function() {
                "function" == typeof $.pay && $.pay({
                    _source: 79,
                    aid_version: "V0",
                    _scene: "wx" == txv.login.getLoginType() ? 2 : 1
                })
            })
        },
        show: function(t, e, n) {
            i.html(t),
            r.html(e),
            i.show(),
            n ? o.hide() : o.show()
        }
    };
    txv.login.addReadyCallback(function(t) {
        l.events()
    }),
    t.exports = {
        init: l.init
    }
},
function(t, e) {
    t.exports = function() {
        throw new Error("define cannot be used indirect")
    }
},
function(t, e, n) {
    var i = n(79),
    o = n(80),
    r = n(81),
    a = n(82),
    s = $(".quick_vip"),
    c = $(".quick_vip .mod_quick_pop");
    0 == c.length && (i = n(83), o = n(84), r = n(85), a = n(86));
    var l = {
        notlogin: null,
        islogin: null
    },
    u = !1,
    d = !1,
    f = function(t) {
        return null !== l.islogin ? void t() : void $.ajax({
            url: "//sns.video.qq.com/fcgi-bin/dlib/dataout_pc?auto_id=2433&otype=json",
            dataType: "jsonp",
            CSRF: !0,
            success: function(e) {
                if (e && 0 == e.returncode) for (var n = 0; n < e.list.length; n++) 1 === e.list[n].isvalid && (l[e.list[n].pos] = e.list[n]);
                t()
            },
            error: function() {
                t()
            }
        })
    },
    p = function() {
        s.unbind();
        var t = 0;
        s.mouseover(function() {
            s.addClass("open"),
            t > 0 && (clearTimeout(t), t = 0)
        }).mouseout(function() {
            t = setTimeout(function() {
                s.removeClass("open")
            },
            300)
        })
    },
    h = !1,
    g = function() {
        h || (txv.vip.addGetVipCallback(function(t) {
            j(0 === t.vip)
        }), txv.login.addLogoutCallback(function() {
            j()
        }), h = !0)
    },
    v = function() {
        "function" == typeof $.pay ? $.pay({
            _source: 90,
            aid_version: "V0",
            _scene: "wx" == txv.login.getLoginType() ? 2 : 8
        }) : $.getScript("//vm.gtimg.cn/tencentvideo_v1/script/vip.minipay.js",
        function() {
            "function" == typeof $.pay && $.pay({
                _source: 90,
                aid_version: "V0",
                _scene: "wx" == txv.login.getLoginType() ? 2 : 8
            })
        })
    },
    m = function() {
        $.ajax({
            url: "//pay.video.qq.com/fcgi-bin/vip_info_all?otype=json",
            dataType: "jsonp",
            CSRF: !0,
            success: function(t) {
                t && t.user_ticket && t.user_ticket.result && 0 == t.user_ticket.result.code && c.find("li.gyq .keyword").html(t.user_ticket.vip_tt),
                t && t.vip_vouchers && t.vip_vouchers.result && 0 == t.vip_vouchers.result.code && c.find("li.yhq .keyword").html(t.vip_vouchers.total_effective_count),
                t && t.score_info && t.score_info.result && 0 == t.score_info.result.code && c.find("li.czz .keyword").html(t.score_info.score),
                t && t.give_movie && t.give_movie.result && 0 == t.give_movie.result.code && c.find("li.zpzg .keyword").html(t.give_movie.leftnum)
            }
        }),
        $.ajax({
            url: "//pay.video.qq.com/fcgi-bin/order?otype=json&psize=10&pnum=1&t=1",
            dataType: "jsonp",
            CSRF: !0,
            success: function(t) {
                return t && 0 == t.ret && t.total > 0 ? void c.find("li.gmjl .keyword").html(t.total) : (c.find("li.gmjl").remove(), void x(0))
            },
            error: function() {
                c.find("li.gmjl").remove(),
                x(0)
            }
        }),
        u || $.ajax({
            url: "//pay.video.qq.com/fcgi-bin/autopay?otype=json",
            dataType: "jsonp",
            CSRF: !0,
            success: function(t) {
                t && t.result && 0 == t.result.code && 0 == t.autopay && (0 == $("#quick_user_vip").length ? c.find(".__tips").html().indexOf("开通自动续费") == -1 && c.find(".__tips").append(' <a class="btn_vip_buy" target="_blank" href="http://my.pay.qq.com/account/index.shtml#service">开通自动续费</a>') : c.find(".__tips").next().html().indexOf("开通自动续费") == -1 && c.find(".__tips").after(' <a class="vip_autopay" target="_blank" href="http://my.pay.qq.com/account/index.shtml#service">开通自动续费</a>'))
            }
        })
    },
    _ = 0,
    y = 4,
    x = function(t) {
        var e = c.find(".quick_pop_vip_info_list li").length;
        _ + t >= 0 && _ + t <= e - y && (_ += t),
        c.find(".quick_pop_vip_info_list li").hide().each(function(t, e) {
            t >= _ && t < _ + y && $(e).show()
        }),
        c.find("a.quick_pop_vip_info_list_prev").show(),
        c.find("a.quick_pop_vip_info_list_next").show(),
        0 == _ && c.find("a.quick_pop_vip_info_list_prev").hide(),
        _ + y >= e && c.find("a.quick_pop_vip_info_list_next").hide()
    },
    b = function() {
        c.html(i),
        c.find(".vip_layer_login").unbind("click").bind("click",
        function() {
            return txv.login.openLogin({
                success: function() {}
            }),
            d = !0,
            !1
        }),
        l.notlogin && c.find(".btn_pop_link").unbind("click").bind("click",
        function() {
            return window.open(l.notlogin.url),
            !1
        }).html(l.notlogin.text)
    },
    w = function(t) {
        c.html(o);
        var e = (txv.login.getLoginType(), t.endTime.split(" ")),
        n = e[0].split("-"),
        i = e[1].split(":"),
        r = new Date(n[0], n[1] - 1, n[2], i[0], i[1], i[2]),
        a = Math.ceil((r.getTime() - new Date) / 864e5);
        if ("HLWHF" === t.servicetype) {
            u = !0;
            var s = "按月支付中"
        } else if (a > 7) var s = "会员有效期至 " + t.endTime.substr(0, 10);
        else var s = "会员还有 " + a + " 天到期";
        c.find(".__tips").html(s),
        c.find(".btn_pop_link").unbind("click").bind("click",
        function() {
            return v(),
            !1
        }),
        x(0),
        c.find("a.quick_pop_vip_info_list_prev").click(function() {
            return x( - 1),
            !1
        }),
        c.find("a.quick_pop_vip_info_list_next").click(function() {
            return x(1),
            !1
        }),
        l.islogin && c.find(".btn_pop_link").unbind("click").bind("click",
        function() {
            return window.open(l.islogin.url),
            !1
        }).html(l.islogin.text),
        m()
    },
    k = function(t) {
        if (c.html(a), 0 == $("#quick_user_vip").length) if ("wx" === t.bind_type) var e = '您的微信账号 <span class="keyword">' + t.account_id + '</span> 是会员 <a href="javascript:;" class="btn_vip_change wx">切换</a>';
        else var e = '您的QQ账号 <span class="keyword">' + t.account_id + '</span> 是会员 <a href="javascript:;" class="btn_vip_change qq">切换</a>';
        else {
            if ("wx" === t.bind_type) var e = '您的微信账号 <span class="keyword">' + t.account_id + "</span> 是会员";
            else var e = '您的QQ账号 <span class="keyword">' + t.account_id + "</span> 是会员";
            c.find(".__tips").html(e).after('<a href="javascript:;" class="vip_autopay" data-type="switchlogin">切换</a>');
        }
        c.find(".vip_txt").html(e),
        c.find(".btn_pop_link").unbind("click").bind("click",
        function() {
            return v(),
            !1
        }),
        c.find(".btn_vip_change").unbind("click").bind("click",
        function() {
            return txv.login.openLoginSingle({
                success: function() {}
            },
            t.bind_type),
            !1
        })
    },
    C = function() {
        c.html(r),
        txv.login.isLogin() && c.find("p.vip_txt").hide(),
        c.find(".btn_pop_link").unbind("click").bind("click",
        function() {
            return v(),
            !1
        }),
        l.notlogin && c.find(".btn_pop_link").unbind("click").bind("click",
        function() {
            return window.open(l.notlogin.url),
            !1
        }).html(l.notlogin.text)
    },
    T = function() {
        c.html(a),
        c.find(".__tips").html("VIP已过期，重新开通恢复特权"),
        c.find(".btn_pop_link").unbind("click").bind("click",
        function() {
            return v(),
            !1
        }),
        l.islogin && c.find(".btn_pop_link").unbind("click").bind("click",
        function() {
            return window.open(l.islogin.url),
            !1
        }).html(l.islogin.text)
    },
    q = function() {
        $.ajax({
            url: "//pay.video.qq.com/fcgi-bin/payvip?otype=json",
            dataType: "jsonp",
            CSRF: !0,
            success: function(t) {
                if (t && t.result && 0 == t.result.code) if (1 == t.vip) w(t);
                else {
                    var e = t;
                    $.ajax({
                        url: "//pay.video.qq.com/fcgi-bin/check_bindaccount?otype=json",
                        dataType: "jsonp",
                        CSRF: !0,
                        success: function(t) {
                            t && t.result && 0 == t.result.code ? 1 == t.isVip ? k(t) : "" !== e.endTime ? T() : C() : C()
                        },
                        error: function(t) {
                            C()
                        }
                    })
                } else C()
            },
            error: function() {
                C()
            }
        })
    },
    j = function(t) {
        var e = !1;
        if (0 == c.length) {
            if (c = $("#quick_user_vip"), e = !0, 0 == c.length) return;
            if ("3" == c.attr("data-version")) return void n(87)
        }
        f(function() {
            txv.login.isLogin() ? q() : e || b(),
            p(),
            g(),
            t && d && (v(), d = !1),
            $.extend(txv.util, {
                showFixedWindow: function(t, e, n, i) {
                    if (t) {
                        var o, r = window == top,
                        a = r ? document: top.document,
                        s = a.body.scrollTop,
                        c = a.documentElement.clientHeight,
                        l = $(t);
                        e = e || l.width() || 373,
                        n = n || l.height() || 235,
                        i = i === !1,
                        0 == s && (s = a.documentElement.scrollTop),
                        0 == c && (c = a.body.clientHeight),
                        o = parseInt(l.css("zIndex")),
                        l.css({
                            width: e + "px",
                            height: n + "px",
                            top: "50%",
                            left: "50%",
                            marginLeft: -e / 2 + "px",
                            marginTop: -n / 2 + "px",
                            position: "fixed",
                            zIndex: o || "10001",
                            display: "block"
                        })
                    }
                }
            })
        })
    };
    j()
},
function(t, e) {
    var n = '<div class="quick_pop_inner">\t\t\t\t\t\t<i class="triangle_up triangle_up_wrap"><i class="triangle_up"></i></i>\t\t\t\t\t\t<div class="pop_info_content">\t\t\t\t\t\t\t<div class="quick_pop_vip_login">\t\t\t\t\t\t\t\t<div class="quick_pop_btn">\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_pop_link vip_layer_login">开通VIP 大片免费看</a>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<p class="vip_txt">已是VIP请 <a href="javascript:;" class="keyword vip_layer_login">登录</a></p>\t\t\t\t\t\t\t\t<div class="vip_login_info cf">\t\t\t\t\t\t\t\t\t<div class="item item_1">\t\t\t\t\t\t\t\t\t\t<a target="_blank" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=%E9%99%A2%E7%BA%BF%E6%96%B0%E7%89%87" class="item_link"><i class="icon_lg icon_film_lg"><svg class="svg_icon svg_icon_film_lg" viewBox="0 0 36 36" width="36" height="36"><use xlink:href="#svg_icon_film_lg"></use></svg></i><span class="icon_text">院线新片</span></a>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div class="item item_2">\t\t\t\t\t\t\t\t\t\t<a target="_blank" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=%E5%85%8D%E5%B9%BF%E5%91%8A" class="item_link"><i class="icon_lg icon_noad_lg"><svg class="svg_icon svg_icon_noad_lg" viewBox="0 0 36 36" width="36" height="36"><use xlink:href="#svg_icon_noad_lg"></use></svg></i><span class="icon_text">免广告</span></a>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div class="item item_3">\t\t\t\t\t\t\t\t\t\t<a target="_blank" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=1080P%E7%94%BB%E8%B4%A8" class="item_link"><i class="icon_lg icon_hd_lg"><svg class="svg_icon svg_icon_hd_lg" viewBox="0 0 36 36" width="36" height="36"><use xlink:href="#svg_icon_hd_lg"></use></svg></i><span class="icon_text">蓝光高清</span></a>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>';
    t.exports = n
},
function(t, e) {
    var n = '<div class="quick_pop_inner">\t                <i class="triangle_up triangle_up_wrap"><i class="triangle_up"></i></i>\t                <div class="pop_info_content">\t                    <div class="quick_pop_vip_info">\t                        <div class="quick_pop_vip_info_hd">\t                            <ul class="quick_pop_vip_info_list cf">\t                                <li class="quick_pop_vip_info_item gyq">\t                                    <a href="http://v.qq.com/u/hlw/hlw_index.html" target="_blank"><p class="keyword">0</p>\t                                    <p class="desc">观影券</p>\t                                    </a>\t                                </li>\t                                <li class="quick_pop_vip_info_item czz">\t                                    <a href="http://v.qq.com/u/hlw/hlw_index.html" target="_blank"><p class="keyword">0</p>\t                                    <p class="desc">成长值</p>\t                                    </a>\t                                </li>\t                                <li class="quick_pop_vip_info_item yhq">\t                                    <p class="keyword">0</p>\t                                    <p class="desc">优惠券</p>\t                                </li>\t                                <li class="quick_pop_vip_info_item gmjl">\t                                    <a href="http://v.qq.com/u/hlw/hlw_index.html?tab=2" target="_blank"><p class="keyword">0</p>\t                                    <p class="desc">购买记录</p>\t                                    </a>\t                                </li>\t                                <li class="quick_pop_vip_info_item zpzg">\t                                    <a href="http://v.qq.com/u/hlw/hlw_index.html?tab=3" target="_blank"><p class="keyword">0</p>\t                                    <p class="desc">赠片资格</p>\t                                    </a>\t                                </li>\t                            </ul>\t                            <a href="javascript:;" class="quick_pop_vip_info_list_prev">\t                                <i class="iconfont"></i>\t                            </a>\t                            <a href="javascript:;" class="quick_pop_vip_info_list_next">\t                                <i class="iconfont"></i>\t                            </a>\t                        </div>\t                        <div class="quick_pop_vip_info_bd">\t                            <p class="vip_txt __tips">你的会员还有3天到期</p>\t                            <div class="quick_pop_btn">\t                                <a href="javascript:;" class="btn_pop_link">续费VIP 免费看大片</a>\t                            </div>\t                        </div>\t                    </div>\t                </div>\t            </div>\t        </div>';
    t.exports = n
},
function(t, e) {
    var n = '<div class="quick_pop_inner">\t                <i class="triangle_up triangle_up_wrap"><i class="triangle_up"></i></i>\t                <div class="pop_info_content">\t                    <div class="quick_pop_vip_login">\t                        <div class="quick_pop_btn">\t                            <a href="javascript:;" class="btn_pop_link">开通VIP 免费看大片</a>\t                        </div>\t                        <p class="vip_txt">已是VIP请 <a href="javascript:;" class="keyword">登录</a></p>\t                        <div class="vip_login_info cf">\t                            <div class="item item_1">\t                                <a target="_blank" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=%E9%99%A2%E7%BA%BF%E6%96%B0%E7%89%87" class="item_link"><i class="icon_lg icon_film_lg"><svg class="svg_icon svg_icon_film_lg" viewBox="0 0 36 36" width="36" height="36"><use xlink:href="#svg_icon_film_lg"></use></svg></i><span class="icon_text">院线新片</span></a>\t                            </div>\t                            <div class="item item_2">\t                                <a target="_blank" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=%E5%85%8D%E5%B9%BF%E5%91%8A" class="item_link"><i class="icon_lg icon_noad_lg"><svg class="svg_icon svg_icon_noad_lg" viewBox="0 0 36 36" width="36" height="36"><use xlink:href="#svg_icon_noad_lg"></use></svg></i><span class="icon_text">免广告</span></a>\t                            </div>\t                            <div class="item item_3">\t                                <a target="_blank" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=1080P%E7%94%BB%E8%B4%A8" class="item_link"><i class="icon_lg icon_hd_lg"><svg class="svg_icon svg_icon_hd_lg" viewBox="0 0 36 36" width="36" height="36"><use xlink:href="#svg_icon_hd_lg"></use></svg></i><span class="icon_text">蓝光高清</span></a>\t                            </div>\t                        </div>\t                    </div>\t                </div>\t            </div>';
    t.exports = n
},
function(t, e) {
    var n = '<div class="quick_pop_inner">\t                    <i class="triangle_up triangle_up_wrap"><i class="triangle_up"></i></i>\t                    <div class="pop_info_content">\t                        <div class="quick_pop_vip_buy">\t                            <div class="quick_pop_btn">\t                                <a href="javascript:;" class="btn_pop_link">开通VIP 免费看大片</a>\t                            </div>\t                            <p class="vip_txt __tips">你的微信账号 \t                                <span class="keyword">差不多先生</span> 是会员\t                                <a href="javascript:;" class="btn_vip_change">切换</a>\t                            </p>\t                            <div class="vip_login_info cf">\t\t\t\t\t\t\t\t\t<div class="item item_1">\t\t\t\t\t\t\t\t\t\t<a target="_blank" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=%E9%99%A2%E7%BA%BF%E6%96%B0%E7%89%87" class="item_link"><i class="icon_lg icon_film_lg"><svg class="svg_icon svg_icon_film_lg" viewBox="0 0 36 36" width="36" height="36"><use xlink:href="#svg_icon_film_lg"></use></svg></i><span class="icon_text">院线新片</span></a>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div class="item item_2">\t\t\t\t\t\t\t\t\t\t<a target="_blank" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=%E5%85%8D%E5%B9%BF%E5%91%8A" class="item_link"><i class="icon_lg icon_noad_lg"><svg class="svg_icon svg_icon_noad_lg" viewBox="0 0 36 36" width="36" height="36"><use xlink:href="#svg_icon_noad_lg"></use></svg></i><span class="icon_text">免广告</span></a>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div class="item item_3">\t\t\t\t\t\t\t\t\t\t<a target="_blank" href="http://film.qq.com/vip/vip_privilege_detail.html?s_title=1080P%E7%94%BB%E8%B4%A8" class="item_link"><i class="icon_lg icon_hd_lg"><svg class="svg_icon svg_icon_hd_lg" viewBox="0 0 36 36" width="36" height="36"><use xlink:href="#svg_icon_hd_lg"></use></svg></i><span class="icon_text">蓝光高清</span></a>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t</div>\t                        </div>\t                    </div>\t                </div>';
    t.exports = n
},
function(t, e) {
    var n = '<div class="quick_vip_btn">\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_pop_link vip_layer_login">开通VIP 大片免费看</a>\t\t\t\t\t</div>\t\t\t\t\t<p class="vip_txt">已是VIP请 <a href="javascript:;" class="keyword vip_layer_login">登录</a></p>\t\t\t\t\t';
    t.exports = n
},
function(t, e) {
    var n = '<span class="quick_vip_expire __tips">你的会员还有3天到期</span>\t            <div class="quick_vip_btn">\t                <a href="javascript:;" class="btn_pop_link">续费VIP 免费看大片</a>\t            </div>\t        ';
    t.exports = n
},
function(t, e) {
    var n = '<span class="quick_vip_expire __tips"></span>\t                    <div class="quick_vip_btn">\t                    <a href="javascript:;" class="btn_pop_link">开通VIP 免费看大片</a>\t                </div>\t                <p class="vip_txt">已是VIP请 <a href="javascript:;" class="keyword">登录</a></p>\t                ';
    t.exports = n
},
function(t, e) {
    var n = '<span class="quick_vip_expire center __tips">\t                    你的微信账号<span class="keyword">差不多先生</span> 是会员\t                    <a href="javascript:;" class="btn_vip_change">切换</a></span>\t                    <div class="quick_vip_btn">\t                        <a href="javascript:;" class="btn_pop_link">开通VIP 免费看大片</a>\t                    </div>\t                    ';
    t.exports = n
},
function(t, e, n) {
    var i, o = n(88),
    r = n(89),
    a = n(90),
    s = n(91),
    c = n(93),
    l = n(14),
    u = !1,
    d = function() {
        var t = $(".quick_vip");
        t.unbind();
        var e = 0;
        t.mouseover(function() {
            t.addClass("open"),
            e > 0 && (clearTimeout(e), e = 0)
        }).mouseout(function() {
            e = setTimeout(function() {
                t.removeClass("open")
            },
            300)
        }),
        i.off("click", ".__open_vip"),
        i.on("click", ".__open_vip",
        function() {
            var t = $(this);
            return f({
                tab: t.attr("data-tabs") || "",
                _source: $(this).attr("data-source") || "",
                svip_title: t.attr("data-title") || ""
            }),
            !1
        });
        var n = $("#mod_head_user");
        n.find(".__open_vip_notLogin").unbind("click").bind("click",
        function() {
            return txv.login.openLogin(),
            u = !0,
            !1
        });
        var o = n.find("._download_pc");
        l.windows ? s.exist().done(function() {
            o.attr("href", "javascript:;"),
            o.click(function() {
                s.open("qqlive://openchannel/tab=choice&atag=web.vhome3")
            })
        }).fail(function() {
            c.to({
                el: o[0],
                text: "qqlivechannel=channel1.vhome3"
            }),
            o.length > 1 && c.to({
                el: o[1],
                text: "qqlivechannel=channel1.vhome3"
            })
        }) : l.macs
    },
    f = function(t) {
        var e = {
            _source: 90,
            aid_version: "V0",
            _scene: "wx" == txv.login.getLoginType() ? 2 : 8
        };
        for (var n in t) e[n] = t[n] || e[n];
        "function" == typeof $.pay ? $.pay(e) : $.getScript("//vm.gtimg.cn/tencentvideo_v1/script/vip.minipay.js",
        function() {
            "function" == typeof $.pay && $.pay(e)
        })
    },
    p = function(t) {
        i.html(o);
        var e, n, r = "",
        a = new Date;
        if (t.tv && 1 == t.tv.vip) {
            e = new Date(1e3 * t.tv.endtime),
            n = Math.ceil((e - a) / 864e5),
            r = "超级影视";
            var s = i.find(".__open_vip");
            if (s.attr("data-tabs", "svip"), s.attr("data-source", "727"), s.attr("data-title", "续费电视特权"), n > 7) {
                var c = e.getMonth() + 1;
                c < 10 && (c = "0" + c);
                var l = e.getDate();
                l < 10 && (l = "0" + l);
                var u = e.getFullYear() + "-" + c + "-" + l;
                r += "VIP于" + u + "到期"
            }
        } else "string" == typeof t.endTime && (e = new Date(t.endTime.replace(/-/g, "/")), n = Math.ceil((e - a) / 864e5), n > 7 && (r = "VIP于" + t.endTime.substr(0, 10) + "到期")),
        v.getSvipUpgradeInfo(function(t) {
            var e, n = i.find(".__open_vip_tv");
            t ? (e = "升级电视特权", n.html("10元升级电视特权")) : (e = "开通电视特权", n.html("开通电视特权")),
            n.removeClass("none"),
            n.unbind("click").bind("click",
            function() {
                return f({
                    tab: "svip",
                    _source: "727",
                    svip_title: e
                }),
                !1
            })
        });
        "HLWHF" === t.servicetype ? r = "按月支付中": n > 7 ? i.find(".__open_vip").removeClass("btn_vip_em").addClass("btn_vip_normal") : r += n <= 1 && e.getDate() == a.getDate() ? "VIP于今天到期": 'VIP于<em class="hl">' + n + "</em>天后到期",
        i.find(".__tips").html(r),
        i.find(".quick_pop_user").addClass("quick_pop_user_vip")
    },
    h = function(t) {
        var e = a(t);
        i.html(e),
        i.find(".quick_pop_user").removeClass("quick_pop_user_vip"),
        i.find(".btn_vip_change").unbind("click").bind("click",
        function() {
            return txv.login.openLoginSingle(null, t.bind_type),
            !1
        })
    },
    g = function(t) {
        if (i.html(r), i.find(".quick_pop_user").removeClass("quick_pop_user_vip"), t && "" !== t.endTime) {
            var e = new Date(t.endTime.replace(/-/g, "/")); (new Date).getTime() - e.getTime() < 80352e5 && i.find(".__tips").html("VIP已过期，重新开通恢复特权")
        }
    },
    v = {
        getRelateVipInfo: function(t) {
            $.ajax({
                url: "//pay.video.qq.com/fcgi-bin/check_bindaccount?otype=json",
                dataType: "jsonp",
                CSRF: !0,
                success: function(e) {
                    return e && e.result && 0 == e.result.code && 1 == e.isVip ? void(t && t(e)) : void(t && t(!1))
                },
                error: function(e) {
                    t && t(!1)
                }
            })
        },
        getSvipUpgradeInfo: function(t) {
            $.ajax({
                url: "//vip.video.qq.com/fcgi-bin/svip_comm_cgi?svr_name=svipupdate&cmd=5633",
                dataType: "jsonp",
                CSRF: !0,
                success: function(e) {
                    return e && e.result && 0 == e.result.code && e && e.update_month > 0 ? void(t && t(!0)) : void(t && t(!1))
                },
                error: function() {
                    t && t(!1)
                }
            })
        }
    },
    m = function(t) {
        t && (t.tv && 1 == t.tv.vip && t.tv.endtime > 0 ? p(t) : 1 == t.vip ? p(t) : v.getRelateVipInfo(function(e) {
            e ? h(e) : g(t)
        }))
    },
    _ = function(t) {
        txv.login.isLogin() && m(t),
        t && 0 === t.vip && u && (f(), u = !1)
    },
    y = function(t) {
        i = $("#quick_user_vip"),
        0 != i.length && setTimeout(function() {
            txv.vip.addGetVipCallback(function(t) {
                _(t)
            }),
            d()
        },
        100)
    };
    y()
},
function(t, e) {
    var n = '<span class="vip_now __tips"></span><span class="vip_next"><a href="javascript:;" class="btn_vip_em __open_vip">续费</a><a href="javascript:;" class="link_vip __open_vip_tv none">开通电视特权</a></span>';
    t.exports = n
},
function(t, e) {
    var n = '<span class="vip_now __tips">开通VIP/超级影视VIP 看大片</span>\t\t\t\t\t<span class="vip_next"><a href="javascript:;" class="btn_vip_em __open_vip">开通</a></span>';
    t.exports = n
},
function(t, e) {
    t.exports = function(t) {
        var e;
        return e = "wx" === t.bind_type ? '<span class="vip_now">你的微信<span class="name" title="' + t.account_id + '">' + t.account_id + '</span>是会员</span>\t                            <span class="vip_next">\t                            <a href="javascript:;" class="btn_em btn_vip_change">切换为微信</a>\t                            <a href="javascript:;" class="link_vip __open_vip">为QQ号开通</a>\t                            </span>': '<span class="vip_now">你的QQ<span class="name" title="' + t.account_id + '">' + t.account_id + '</span>是会员</span>\t                            <span class="vip_next">\t                            <a href="javascript:;" class="btn_em btn_vip_change">切换为QQ</a>\t                            <a href="javascript:;" class="link_vip __open_vip">为微信号开通</a>\t                            </span>'
    }
},
function(t, e, n) {
    function i(t) {
        var e = $.Deferred();
        return p.exist(function(t) {
            t ? e.resolve(t) : e.reject()
        }),
        e
    }
    function o(t) {
        if ("string" == typeof t) {
            var e = $.Deferred();
            return p.exec(t,
            function(t) {
                t ? e.resolve() : e.reject()
            }),
            e
        }
        return p.open(t)
    }
    function r(t, e) {
        if (e) {
            var n = "qqlive://sso/";
            return t.cid && (n += "vbarid=" + t.cid + "&"),
            t.vid && (n += "videoid=" + t.vid + "&"),
            t.ext && (n += t.ext + "&"),
            e && (n += "stag=web." + e + "&"),
            s(n, e)
        }
        return p.play(t)
    }
    function a(t, e) {
        if (e) {
            var n = "qqlive://download/";
            return t.cid && (n += "vbarid=" + t.cid + "&"),
            t.vid && (n += "videoid=" + t.vid + "&"),
            t.ext && (n += t.ext + "&"),
            s(n, e)
        }
        return p.down(t)
    }
    function s(t, e) {
        var n = $.Deferred();
        return p.open({
            sso: t,
            atag: e,
            success: function(t) {
                n.resolve(t)
            },
            error: function() {
                u(e)
            }
        }),
        n
    }
    function c() {
        var t = $.Deferred();
        return setTimeout(function() {
            var e = p.pull();
            e ? t.resolve() : t.reject( - 1)
        }),
        t
    }
    function l() {
        if (txv.ua.chrome) for (var t = 0; t < navigator.plugins.length; t++) if ("Chrome PDF Viewer" == navigator.plugins[t].name) return ! 0
    }
    function u(t) {
        if (l()) {
            var e;
            switch (t) {
            case "vfloat":
                e = "正在下载腾讯视频客户端 安装后即可极速下载视频";
                break;
            case "vsearch":
            case "vsdetail":
                e = "正在下载腾讯视频客户端 免费享1080P蓝光播放";
                break;
            default:
                e = "正在下载腾讯视频客户端 客户端连续签到5天送VIP"
            }
            d || (d = $('<div class="mod_fixed_dl"><svg class="svg_sprite" display="none" version="1.1" xmlns="http://www.w3.org/2000/svg"><symbol id="svg_icon_close_xs" viewBox="0 0 10 10"><path d="M9.4 8.9l-.5.5-3.9-4-3.9 4-.5-.5 4-3.9-4-3.9.4-.4 4 3.9L8.9.7l.4.4L5.4 5l4 3.9z"></path> </symbol><symbol id="svg_icon_dl" viewBox="0 0 20 20"><path d="M17.816 14.448C16.267 17.164 13.351 19 10 19c-3.241 0-6.063-1.725-7.648-4.294a.99.99 0 0 1-.316-.723 1 1 0 0 1 1-1c.383 0 .706.223.874.54l.058-.029C5.179 15.58 7.413 17 10 17c2.58 0 4.809-1.411 6.022-3.488l.043.021a.988.988 0 0 1 .865-.528 1 1 0 0 1 1 1 .962.962 0 0 1-.114.443zm-7.031-1.742a1.016 1.016 0 0 1-.784.292 1.029 1.029 0 0 1-.767-.293l-2.938-2.94a1.038 1.038 0 1 1 1.469-1.469L9 9.531V3a1 1 0 0 1 2 0v6.571l1.246-1.246a1.033 1.033 0 0 1 1.46 1.46l-2.921 2.921z"></path></symbol></svg><a class="btn_close" href="javascript:;"><i class="icon_xs icon_close_xs"><svg class="svg_icon" viewBox="0 0 10 10" width="10" height="10"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_icon_close_xs"></use></svg></i></a><div class="fixed_dl"><div class="dl_item cf"><span class="dl_icon"><i class="icon icon_dl_round"><svg class="svg_icon" viewBox="0 0 44 44" width="44" height="44"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_icon_dl_round"></use></svg></i><i class="icon icon_dl"><svg class="svg_icon" viewBox="0 0 20 20" width="20" height="20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_icon_dl"></use></svg></i></span><span class="dl_txt"></span></div><div class="rec_feature cf"><span class="feature_tit">客户端特权:</span><span class="feature_item"><i class="icon_feature icon_feature_fh"><svg class="svg_icon" viewBox="0 0 32 32" width="32" height="32"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_icon_feature_fh"></use></svg></i><span class="icon_text">3倍流畅播放</span></span><span class="feature_item"><i class="icon_feature icon_feature_hd"><svg class="svg_icon" viewBox="0 0 32 32" width="32" height="32"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_icon_feature_hd"></use></svg></i><span class="icon_text">免费蓝光</span></span><span class="feature_item"><i class="icon_feature icon_feature_dl"><svg class="svg_icon" viewBox="0 0 32 32" width="32" height="32"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_icon_feature_dl"></use></svg></i><span class="icon_text">极速下载</span></span></div></div><i class="triangle_down"><i class="triangle_inner"></i></i></div>'), d.find(".btn_close").click(function() {
                d.hide()
            }), $("body").append(d)),
            d.find(".dl_txt").text(f.escape(e)),
            d.show(),
            setTimeout(function() {
                d.hide()
            },
            5e3)
        }
    }
    var d, f = (n(14), n(18)),
    p = n(92);
    t.exports = {
        exist: i,
        exec: p.exec,
        open: o,
        play: r,
        down: a,
        pull: c,
        download: function(t) {
            u(t),
            p.download(t)
        },
        hasService: function() {
            var t = $.Deferred();
            return p.hasService(function(e) {
                e ? t.resolve(e) : t.reject(e)
            }),
            t
        },
        execSso: s
    }
},
function(t, e, n) {
    function i() {}
    function o() {
        return w || (w = {
            ie: !!window.ActiveXObject
        }),
        w
    }
    function r(t, e) {
        var n = "string" == typeof t && t.indexOf(".") > 0,
        i = "string" == typeof e && e.indexOf(".") > 0;
        if (n && i) {
            var o = t.split("."),
            r = e.split(".");
            if (4 === o.length && 4 === r.length) {
                for (var a = 0; a < 4; a++) {
                    var s = +o[a],
                    c = +r[a];
                    if (s > c) return 1;
                    if (s < c) return - 1
                }
                return 0
            }
        } else {
            var l = +t,
            u = +e;
            if (l > 0 && u > 0) return l > u ? 1 : l == u ? 0 : -1
        }
    }
    function a() {
        var t;
        if (o().ie) try {
            var e = new ActiveXObject("QQLive.Application");
            t = e.GetVersionByClsid("D9EBCF5D-3F8F-4B6A-89BA-70577BE73C62")
        } catch(n) {
            t = q
        } else {
            for (var i = null,
            r = 0; r < navigator.plugins.length; r++) if ("QQLive" == navigator.plugins[r].name || "腾讯视频" == navigator.plugins[r].name || "npQQLive.dll" == navigator.plugins[r].filename) {
                i = navigator.plugins[r];
                break
            }
            if (i) if ("undefined" != typeof i.version) t = i.version;
            else {
                var a;
                if (a = i.description.match(/version:((\d+\.){3}(\d+)?)/)) {
                    t = a[1] || "";
                    for (var s = t.split(".") || [], r = 0, c = s.length; r < c; r++) {
                        var l = parseInt(s[r]);
                        s[r] = "" + l
                    }
                    s.length > 1 && (t = s.join("."))
                }
            }
        }
        return t || q
    }
    function s(t, e) {
        var n = !1;
        return function(i) {
            n || t && t(i || e),
            n = !0
        }
    }
    function c(t) {
        var e, n = [];
        return function(i) {
            return e ? n.push(i) : (e = !0, void t.call(this,
            function() {
                e = !1;
                var t = this,
                o = arguments;
                i && i.apply(t, o);
                var r = n;
                n = [];
                for (var a = 0,
                s = r.length; a < s; a++) {
                    var c = r[a];
                    try {
                        c && c.apply(t, o)
                    } catch(l) {}
                }
            }))
        }
    }
    function l(t) {
        if (t) {
            k.del(T);
            var e = new Date;
            e.setTime(e.getTime() + 31536e6),
            document.cookie = T + "=" + t + "; path=/; expires=" + e.toGMTString() + ";"
        }
    }
    function u() {
        L = !0;
        for (var t = S.shift(); t;) {
            if (t) try {
                d(t)
            } catch(e) {}
            t = S.shift()
        }
    }
    function d(t) {
        L ? j(t) : S.push(t)
    }
    function f(t) {
        t = t || i;
        var e = function(e) {
            var n = !!e && e != q;
            return n && (b = e, t(e)),
            n
        },
        n = a();
        e(n) || d(function(n) {
            e(n) || (n = +k.get(T), e(n) || t())
        })
    }
    function p(t) {
        var e = !1;
        if (o().ie) try {
            var n = new ActiveXObject("QQLive.Application");
            n.OpenQQLive(t),
            e = !0
        } catch(i) {} else {
            0 == $("#NPQQLive").length && $("body").append('<embed id="NPQQLive" name="NPQQLive" width="1" height="1" type="application/tecent-qqlive-plugin" hidden="true" invokeurls="false"/>');
            var r = document.getElementById("NPQQLive");
            if (r && r.OpenSSO) try {
                r.OpenSSO(t),
                e = !0
            } catch(a) {}
        }
        return e
    }
    function h(t, e) {
        var n = s(e, !1);
        if ("http:" === location.protocol) try {
            var i = window.XMLHttpRequest ? new XMLHttpRequest: new ActiveXObject("Microsoft.XMLHTTP");
            i.onreadystatechange = function() {
                4 == i.readyState && (200 == i.status ? n(!0) : n())
            },
            i.open("POST", "http://127.0.0.1:11066/startclient", !0),
            i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"),
            i.send(t)
        } catch(o) {
            n()
        } else {
            var a = r(b, "9.18.1863.0"),
            c = r(b, 50161131);
            if (a >= 0 || c >= 0) {
                var l = new Image;
                l.onload = function() {
                    var t = (l.width, l.height);
                    n(1 == t && 1 == t)
                },
                l.onerror = function() {
                    n()
                },
                l.src = "http://127.0.0.1:11066/pullclientjpg?cmd=" + encodeURIComponent(t) + "&hash=" + Math.floor(1e6 * Math.random())
            } else n()
        }
        setTimeout(function() {
            n()
        },
        1e3)
    }
    function g(t, e) {
        var n = s(e, !1),
        i = $(window),
        o = !document.hasFocus(),
        r = function() {
            o = !document.hasFocus()
        };
        i.bind("blur", r);
        var a = $('<iframe src="' + t + '">');
        a.hide(),
        $("body").append(a),
        setTimeout(function() {
            if (i.unbind("blur", r), a.remove(), n(o), !o) {
                var t = new Date;
                t.setTime(t.getTime() - 1),
                document.cookie = T + "=0; path=/; expires=" + t.toGMTString()
            }
        },
        1e3)
    }
    function v(t, e) {
        e = e || i,
        p(t) ? e(!0) : h(t,
        function(n) {
            n ? e(!0) : g(t,
            function(t) {
                e(t ? !0 : !1)
            })
        })
    }
    function m(t) {
        var e = a();
        if (e && e != q && (r(e, "9.16.1658.0") >= 0 || r(e, 50160931) >= 0)) {
            if (b = e, !t) {
                try {
                    var n = window.top.location.host;
                    "v.qq.com" == n ? t = "vplay": /qq.com$/.test(n) && (t = n)
                } catch(i) {}
                "string" != typeof t && (t = "outer")
            }
            return p("qqlive://pullservice/atag=web." + t)
        }
    }
    function _(t) {
        var e = t.sso || "qqlive://sso/",
        n = t.atag || C,
        o = t.force || !1,
        r = function(e) {
            if (!e) {
                var n = t.error || i;
                n(e) !== !1 && x()
            }
            return e
        },
        a = function(o) {
            r(o) && (t.exist || i)(o) !== !1 && (/atag=/.test(e) || (e += "&atag=web." + n), v(e,
            function(e) {
                r(e) && (t.success || i)(o)
            }))
        };
        n && y(n),
        o ? a(o) : f(a)
    }
    function y(t) {
        var e = "qqlivechannel=channel1." + t;
        if (E || (E = $("<input>"), $("body").append(E), E.css({
            position: "absolute",
            left: "-9999px"
        })), o().ie) {
            var n = new Date;
            n.setTime(n.getTime() + 864e5),
            document.cookie = e + ";path=/;expires=" + n.toGMTString()
        } else E.attr("value", e),
        E.css({
            top: $(window).scrollTop() + "px"
        }),
        E.get(0).select(),
        E.get(0).setSelectionRange(0, e.length),
        document.execCommand("copy", !0)
    }
    function x(t) {
        t && y(t),
        location.href = "//node.video.qq.com/x/api/download_pc"
    }
    var b, w, k = n(6),
    C = "vunknown",
    T = "QQLivePCVer",
    q = "0.0.0.0",
    j = c(function(t) {
        var e, n, o = s(t, q);
        if ("https:" === location.protocol) n = new Image,
        n.onload = function() {
            if (n) {
                var t = n.width,
                e = n.height;
                if (t > 0 && e > 0) {
                    var i = 100 * (t - 1) + (e - 1) + 50160820;
                    o(i),
                    l(i)
                }
            }
        },
        n.onerror = function() {
            o()
        },
        n.src = "http://127.0.0.1:11066/getversionjpg?hash=" + Math.floor(1e6 * Math.random());
        else {
            var e = document.createElement("script");
            e.src = "http://127.0.0.1:11066/getinfo?hash=" + Math.random(),
            window.qqliveclientinfo = function(t) {
                o(t.ver),
                l(t._ver)
            },
            e.onerror = function() {
                o()
            },
            document.body.appendChild(e)
        }
        setTimeout(function() {
            e && $(e).remove(),
            n = null,
            window.qqliveclientinfo = i,
            o()
        },
        1e3)
    }),
    S = [],
    L = !1;
    "complete" != document.readyState && $(window).load(u),
    setTimeout(u, 5e3);
    var E;
    t.exports = {
        exist: f,
        exec: v,
        open: _,
        pull: m,
        hasService: function(t) {
            d(function(e) {
                t && t( !! e && e != q)
            })
        },
        play: function(t) {
            var e = "qqlive://sso/";
            t.cid && (e += "vbarid=" + t.cid + "&"),
            t.vid && (e += "videoid=" + t.vid + "&"),
            t.ext && (e += t.ext + "&"),
            t.sso = e + "stag=web." + (t.atag || C),
            _(t)
        },
        down: function(t) {
            var e = "qqlive://download/";
            t.cid && (e += "vbarid=" + t.cid + "&"),
            t.vid && (e += "videoid=" + t.vid + "&"),
            t.ext && (e += t.ext + "&"),
            t.sso = e.replace(/&$/, ""),
            _(t)
        },
        download: x
    }
},
function(t, e, n) {
    var i, o = n(14);
    o.ie || (i = n(94)),
    t.exports = {
        to: function(t) {
            var e = t.text,
            n = $(t.el);
            if (o.ie) {
                var r = {
                    bindEl: function(t) {
                        e && e.search("=") > 0 && t.bind("click",
                        function() {
                            var t = new Date;
                            t.setTime(t.getTime() + 864e5),
                            document.cookie = e + ";path=/;expires=" + t.toGMTString()
                        })
                    }
                };
                return r.bindEl(n),
                r
            }
            i && n[0] && (t.text && n.attr("data-clipboard-text", t.text), new i(n[0]))
        }
    }
},
function(t, e, n) {
    var i, o, r; !
    function(a, s) {
        o = [t, n(95), n(97), n(98)],
        i = s,
        r = "function" == typeof i ? i.apply(e, o) : i,
        !(void 0 !== r && (t.exports = r))
    } (this,
    function(t, e, n, i) {
        "use strict";
        function o(t) {
            return t && t.__esModule ? t: {
                "default": t
            }
        }
        function r(t, e) {
            if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function a(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! e || "object" != typeof e && "function" != typeof e ? t: e
        }
        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function c(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n)) return e.getAttribute(n)
        }
        var l = o(e),
        u = o(n),
        d = o(i),
        f = function(t) {
            function e(n, i) {
                r(this, e);
                var o = a(this, t.call(this));
                return o.resolveOptions(i),
                o.listenClick(n),
                o
            }
            return s(e, t),
            e.prototype.resolveOptions = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {}: arguments[0];
                this.action = "function" == typeof t.action ? t.action: this.defaultAction,
                this.target = "function" == typeof t.target ? t.target: this.defaultTarget,
                this.text = "function" == typeof t.text ? t.text: this.defaultText
            },
            e.prototype.listenClick = function(t) {
                var e = this;
                this.listener = (0, d["default"])(t, "click",
                function(t) {
                    return e.onClick(t)
                })
            },
            e.prototype.onClick = function(t) {
                var e = t.delegateTarget || t.currentTarget;
                this.clipboardAction && (this.clipboardAction = null),
                this.clipboardAction = new l["default"]({
                    action: this.action(e),
                    target: this.target(e),
                    text: this.text(e),
                    trigger: e,
                    emitter: this
                })
            },
            e.prototype.defaultAction = function(t) {
                return c("action", t)
            },
            e.prototype.defaultTarget = function(t) {
                var e = c("target", t);
                if (e) return document.querySelector(e)
            },
            e.prototype.defaultText = function(t) {
                return c("text", t)
            },
            e.prototype.destroy = function() {
                this.listener.destroy(),
                this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
            },
            e
        } (u["default"]);
        t.exports = f
    })
},
function(t, e, n) {
    var i, o, r; !
    function(a, s) {
        o = [t, n(96)],
        i = s,
        r = "function" == typeof i ? i.apply(e, o) : i,
        !(void 0 !== r && (t.exports = r))
    } (this,
    function(t, e) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t: {
                "default": t
            }
        }
        function i(t, e) {
            if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var o = n(e),
        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(t) {
            return typeof t
        }: function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol": typeof t
        },
        a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        } (),
        s = function() {
            function t(e) {
                i(this, t),
                this.resolveOptions(e),
                this.initSelection()
            }
            return t.prototype.resolveOptions = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {}: arguments[0];
                this.action = t.action,
                this.emitter = t.emitter,
                this.target = t.target,
                this.text = t.text,
                this.trigger = t.trigger,
                this.selectedText = ""
            },
            t.prototype.initSelection = function() {
                this.text ? this.selectFake() : this.target && this.selectTarget()
            },
            t.prototype.selectFake = function() {
                var t = this,
                e = "rtl" == document.documentElement.getAttribute("dir");
                this.removeFake(),
                this.fakeHandlerCallback = function() {
                    return t.removeFake()
                },
                this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0,
                this.fakeElem = document.createElement("textarea"),
                this.fakeElem.style.fontSize = "12pt",
                this.fakeElem.style.border = "0",
                this.fakeElem.style.padding = "0",
                this.fakeElem.style.margin = "0",
                this.fakeElem.style.position = "absolute",
                this.fakeElem.style[e ? "right": "left"] = "-9999px",
                this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px",
                this.fakeElem.setAttribute("readonly", ""),
                this.fakeElem.value = this.text,
                document.body.appendChild(this.fakeElem),
                this.selectedText = (0, o["default"])(this.fakeElem),
                this.copyText()
            },
            t.prototype.removeFake = function() {
                this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null),
                this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
            },
            t.prototype.selectTarget = function() {
                this.selectedText = (0, o["default"])(this.target),
                this.copyText()
            },
            t.prototype.copyText = function() {
                var t = void 0;
                try {
                    t = document.execCommand(this.action)
                } catch(e) {
                    t = !1
                }
                this.handleResult(t)
            },
            t.prototype.handleResult = function(t) {
                t ? this.emitter.emit("success", {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                }) : this.emitter.emit("error", {
                    action: this.action,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                })
            },
            t.prototype.clearSelection = function() {
                this.target && this.target.blur(),
                window.getSelection().removeAllRanges()
            },
            t.prototype.destroy = function() {
                this.removeFake()
            },
            a(t, [{
                key: "action",
                set: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "copy": arguments[0];
                    if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                },
                get: function() {
                    return this._action
                }
            },
            {
                key: "target",
                set: function(t) {
                    if (void 0 !== t) {
                        if (!t || "object" !== ("undefined" == typeof t ? "undefined": r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = t
                    }
                },
                get: function() {
                    return this._target
                }
            }]),
            t
        } ();
        t.exports = s
    })
},
function(t, e) {
    function n(t) {
        var e;
        if ("SELECT" === t.nodeName) t.focus(),
        e = t.value;
        else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
            var n = t.hasAttribute("readonly");
            n || t.setAttribute("readonly", ""),
            t.select(),
            t.setSelectionRange(0, t.value.length),
            n || t.removeAttribute("readonly"),
            e = t.value
        } else {
            t.hasAttribute("contenteditable") && t.focus();
            var i = window.getSelection(),
            o = document.createRange();
            o.selectNodeContents(t),
            i.removeAllRanges(),
            i.addRange(o),
            e = i.toString()
        }
        return e
    }
    t.exports = n
},
function(t, e) {
    function n() {}
    n.prototype = {
        on: function(t, e, n) {
            var i = this.e || (this.e = {});
            return (i[t] || (i[t] = [])).push({
                fn: e,
                ctx: n
            }),
            this
        },
        once: function(t, e, n) {
            function i() {
                o.off(t, i),
                e.apply(n, arguments)
            }
            var o = this;
            return i._ = e,
            this.on(t, i, n)
        },
        emit: function(t) {
            var e = [].slice.call(arguments, 1),
            n = ((this.e || (this.e = {}))[t] || []).slice(),
            i = 0,
            o = n.length;
            for (i; i < o; i++) n[i].fn.apply(n[i].ctx, e);
            return this
        },
        off: function(t, e) {
            var n = this.e || (this.e = {}),
            i = n[t],
            o = [];
            if (i && e) for (var r = 0,
            a = i.length; r < a; r++) i[r].fn !== e && i[r].fn._ !== e && o.push(i[r]);
            return o.length ? n[t] = o: delete n[t],
            this
        }
    },
    t.exports = n
},
function(t, e, n) {
    function i(t, e, n) {
        if (!t && !e && !n) throw new Error("Missing required arguments");
        if (!s.string(e)) throw new TypeError("Second argument must be a String");
        if (!s.fn(n)) throw new TypeError("Third argument must be a Function");
        if (s.node(t)) return o(t, e, n);
        if (s.nodeList(t)) return r(t, e, n);
        if (s.string(t)) return a(t, e, n);
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
    }
    function o(t, e, n) {
        return t.addEventListener(e, n),
        {
            destroy: function() {
                t.removeEventListener(e, n)
            }
        }
    }
    function r(t, e, n) {
        return Array.prototype.forEach.call(t,
        function(t) {
            t.addEventListener(e, n)
        }),
        {
            destroy: function() {
                Array.prototype.forEach.call(t,
                function(t) {
                    t.removeEventListener(e, n)
                })
            }
        }
    }
    function a(t, e, n) {
        return c(document.body, t, e, n)
    }
    var s = n(99),
    c = n(22);
    t.exports = i
},
function(t, e) {
    e.node = function(t) {
        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
    },
    e.nodeList = function(t) {
        var n = Object.prototype.toString.call(t);
        return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
    },
    e.string = function(t) {
        return "string" == typeof t || t instanceof String
    },
    e.fn = function(t) {
        var e = Object.prototype.toString.call(t);
        return "[object Function]" === e
    }
},
function(t, e, n) {
    function i(t) {
        o().done(function(e) {
            a = e,
            t.html(s.render(e))
        }).fail(function() {
            t.html(s.error())
        })
    }
    function o() {
        var t = $.Deferred();
        return $.ajax({
            url: "//like.video.qq.com/fcgi-bin/flw_new?otype=json&sn=FollowServer&cmd=2567",
            data: {
                pidx: 0,
                size: 5,
                dtype: 0,
                platform: 2
            },
            CSRF: !0,
            dataType: "jsonp",
            success: function(e) {
                return e && 0 == e.ret ? void t.resolve(e.follow) : void t.reject()
            },
            error: function() {
                t.reject()
            }
        }),
        t.promise()
    }
    var r = n(5),
    a = null,
    s = n(101),
    c = n(59);
    r.addReadyCallback(function() {
        var t = $("#modPlaylist"),
        e = $("#playlistcontent"),
        n = null,
        o = null;
        t.on("click", ".quick_link",
        function(t) {
            if (!r.isLogin()) return t.preventDefault(),
            void r.openLogin()
        }),
        t.on("mouseenter",
        function() {
            clearTimeout(n),
            o = setTimeout(function() {
                r.isLogin() && (t.addClass("open"), a || i(e))
            },
            c.delay)
        }).on("mouseleave",
        function() {
            clearTimeout(o),
            n = setTimeout(function() {
                t.removeClass("open")
            },
            300)
        }),
        r.addLogoutCallback(function() {
            e.html(s.loading()),
            a = null
        })
    })
},
function(t, e, n) {
    function i(t) {
        for (var e = '<div class="pop_playlist_wrap">{content}</div>',
        n = "",
        i = 0,
        u = t.length; i < u; i++) {
            var d = t[i];
            $.extend(t[i], l.format(d)),
            n += txv.util.format(s.replace("{diff}", d.__living ? r: a), d)
        }
        return n.length > 0 ? e.replace(/{content}/, n + c) : o
    }
    var o = '<div class="pop_info_content"><div class="quick_pop_empty"><i class="icon_xl icon_collect_xl"><svg class="svg_icon svg_icon_collect_xl" viewBox="0 0 72 72" width="72" height="72"><path d="M68.69 33.969A1.485 1.485 0 0 1 67.285 35a1.5 1.5 0 0 1-1.5-1.5c0-.312.118-.585.281-.826l-.019-.013c3.303-5.647 2.307-13.163-2.539-18.009C61.427 12.569 57.472 10 52.022 10c-7.544 0-11.148 4.445-14.016 7.182l-2.019 2.299-2.049-2.393C31.069 14.352 27.434 10 19.858 10c-4.979 0-8.373 1.95-11.351 4.661-5.965 5.42-5.838 15.379-.386 20.831l20.588 17.41-.05.028 8.798 7.379-.011.013c.289.273.474.654.474 1.083a1.5 1.5 0 0 1-1.5 1.5c-.369 0-.695-.148-.957-.369l-.011.012L6.584 38.223c-7.417-7.192-7.417-18.731-.109-25.82C10.058 8.921 14.84 7 19.933 7c5.096 0 9.876 1.919 13.465 5.403L36 14.931l2.603-2.527C42.189 8.919 46.97 7 52.066 7c5.095 0 9.876 1.919 13.462 5.404 6.008 5.832 7.041 14.663 3.162 21.565zM36 63.01l-.002-.001h.004L36 63.01zM47.5 51H57v-8.5a1.5 1.5 0 1 1 3 0V51h8.5a1.5 1.5 0 1 1 0 3H60v9.5a1.5 1.5 0 1 1-3 0V54h-9.5a1.5 1.5 0 1 1 0-3z"></path></svg></i> <p class="empty_txt">您暂时还没有看单！</p> </div> <div class="quick_pop_btn"> <a href="http://v.qq.com/zhuiju/" target="_blank" class="btn_pop_link">开始追个剧吧</a> </div> </div>',
    r = '<span class="hl"><i class="icon_sm icon_video_sm"><svg class="svg_icon svg_icon_video_sm" viewBox="0 0 16 16" width="16" height="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_icon_video_sm"></use></svg></i><span class="icon_text">正在直播</span></span>',
    a = '<span class="item_desc">{desc}</span>',
    s = '<div class="item"><a class="item_link" href="{href}" target="{target}"><span class="item_title">{title}</span>{diff}</a></div>',
    c = '<div class="quick_pop_btn"><a href="http://v.qq.com/u/playlist.html" target="_blank" class="btn_pop_link">查看更多</a></div>',
    l = n(102);
    t.exports = {
        render: i,
        error: function() {},
        loading: function() {
            return '<div class="mod_loading"></div>'
        }
    }
},
function(t, e) {
    var n = {
        format: function(t) {
            var e = {
                href: "",
                title: ["[", t.type_name, "]", " ", t.title].join(""),
                target: "_blank",
                desc: t.update_title || "",
                __living: !1
            },
            n = "v.qq.com";
            return t.cid ? e.href = "http://" + n + "/x/cover/" + t.cid + ".html": t.vid ? e.href = "http://" + n + "/x/page/" + t.vid + ".html": t.lid ? e.href = "http://" + n + "/detail/" + [(t.lid + "").substr(0, 1), t.lid].join("/") + ".html": t.pid && (e.href = t.play_url, "直播中" == t.update_title && (e.__living = !0)),
            e
        }
    };
    t.exports = n
},
function(t, e, n) {
    "use strict";
    var i = n(104).box;
    n(105)(i.find("a.quick_link")[0], i.find("a.quick_link")),
    n(106).init(),
    n(107).init(),
    n(108).init()
},
function(t, e, n) {
    "use strict";
    var i = n(14);
    t.exports = {
        box: $("#pc_client"),
        isWin: i.windows,
        isMac: i.macs
    }
},
function(t, e, n) {
    "use strict";
    var i = n(104),
    o = i.box,
    r = n(91),
    a = "qqlive://openchannel/tab=choice&atag=web.vhome",
    s = "打开客户端",
    c = "下载客户端",
    l = o.find("a.quick_link"),
    u = l.attr("href"),
    d = o.find(".quick_text");
    t.exports = function(t, e) {
        t && $(t).length && (i.isWin ? (e.attr("href", "javascript:;"), r.exist().done(function() {
            e.click(function() {
                r.open(a)
            }),
            d.text(s)
        }).fail(function() {
            e.click(function() {
                r.download("vhome")
            }),
            d.text(c)
        })) : i.isMac && (e.attr("href", u), d.text(c)))
    }
},
function(t, e, n) {
    "use strict";
    function i(t) {
        a[t]()
    }
    var o = n(104),
    r = o.box,
    a = r.find(".mark_events"),
    s = 6e5;
    t.exports = {
        init: function() {
            o.isWin && (i("show"), setTimeout(function() {
                i("hide")
            },
            s))
        }
    }
},
function(t, e, n) {
    "use strict";
    var i = n(104),
    o = i.box,
    r = o.find("._win"),
    a = o.find("._mac"),
    s = 200,
    c = null,
    l = null,
    u = o.find(".btn_em");
    n(105)(u, u),
    t.exports = {
        init: function() {
            if (i.isWin) a.remove();
            else {
                if (!i.isMac) return;
                r.remove()
            }
            o.mouseenter(function() {
                clearTimeout(l),
                c = setTimeout(function() {
                    o.addClass("open")
                },
                s)
            }).mouseleave(function() {
                clearTimeout(c),
                l = setTimeout(function() {
                    o.removeClass("open")
                },
                s)
            })
        }
    }
},
function(t, e, n) {
    "use strict";
    function i(t, e) {
        return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
    }
    function o(t, e, n) {
        var i = t + "|" + e.valueOf();
        n && (i += "|" + n),
        v.set(m, i)
    }
    function r(t) {
        var e = v.get(m);
        return e && (e = e.split("|"), e && e.length > t) ? +e[t] : ""
    }
    function a() {
        p.on("click", ".btn_close",
        function(t) {
            return t.stopPropagation(),
            s(!1),
            clearTimeout(l),
            o(4, (new Date).valueOf()),
            !1
        }),
        h.on("mouseenter", ".quick_link",
        function() {
            s(!1)
        }),
        g.hover(function() {
            return ! 1
        });
        var t, e = p.find(".tips_txt"),
        n = $("#pc_client").find("a.quick_link");
        n.size() > 0 && (u.isWin || g.find(".tips_txt").find(".txt").html("Mac客户端")),
        u.isWin ? d.exist().done(function() {
            e.attr("href", "javascript:;"),
            e.click(function() {
                d.open("qqlive://openchannel/tab=choice&atag=web.vhomebubble")
            })
        }).fail(function() {
            f.to({
                el: p.find(".quick_tips_content")[0],
                text: "qqlivechannel=channel1.vhomebubble"
            })
        }) : u.isMac && t && e.attr("href", t)
    }
    function s(t, e, n) {
        t ? (h.find(".quick_item").hasClass("open") || (g.removeClass("none"), "number" == typeof n ? g.find(".tips_txt_" + n).removeClass("none") : u.isMac ? (n = parseInt(10 * Math.random() % 2), g.find(".tips_txt_mac_" + n).removeClass("none")) : (n = parseInt(10 * Math.random() % 5), g.find(".tips_txt_" + n).removeClass("none")), setTimeout(function() {
            s(!1)
        },
        1e4), x(), x(n + 1)), "number" == typeof e && o(e, (new Date).valueOf())) : (g.addClass("none"), g.find(".tips_txt").addClass("none"))
    }
    function c(t, e) {
        "number" != typeof t && (t = r(0)),
        t >= 3 || (e = e || (0 == t ? _: y), clearTimeout(l), l = setTimeout(function() {
            s(!0, ++t),
            t < 3 && c(t)
        },
        e))
    }
    var l, u = n(104),
    d = n(91),
    f = n(93),
    p = u.box,
    h = $(".mod_quick"),
    g = p.find(".mod_client_bubble"),
    v = n(10),
    m = "pcclient-bubble",
    _ = 3e5,
    y = 36e5,
    x = function(t) {
        if (txv && txv.Boss && "function" == typeof txv.Boss.expose) {
            var e = "new_vs_header:pc_client_bubble";
            t && (e += t),
            txv.Boss.expose(e)
        }
    };
    window.nav_pc_bubble = function() {
        if (u.isWin) {
            var t, e = new Date,
            n = r(1);
            if (n && (t = new Date(n)), t && i(e, t)) {
                var a = r(2),
                d = r(0);
                4 != d && 1 != a && (clearTimeout(l), setTimeout(function() {
                    s(!0, !1, 0),
                    o(d, (new Date).valueOf(), 1),
                    c(d)
                },
                1e4))
            } else clearTimeout(l),
            setTimeout(function() {
                s(!0, !1, 0),
                o(1, (new Date).valueOf(), 1),
                c(1)
            },
            1e4)
        }
    },
    t.exports = {
        bubble: window.nav_pc_bubble,
        init: function() {
            a();
            var t, e = new Date,
            n = r(1);
            if (n && (t = new Date(n)), t && i(e, t)) {
                var s = r(0);
                if (s < 3) {
                    var l = e - t;
                    0 == s && l >= _ || s > 0 && l >= y ? c(s, 1e3) : 0 == s ? c(s, _ - l) : c(s, y - l)
                }
            } else o(0, e),
            c(0)
        }
    }
},
function(t, e, n) {
    function i() {
        c.isWxLogin() || window.open(f, "blank")
    }
    function o() {
        txv.ua.ie && txv.ua.ie < 9 || (0 == $("._nav_upload_tips").length && ($("body").append(l({})), r = $("._nav_upload_tips"), a = $("._nav_upload_tips_close"), s = $("._nav_upload_tips_confirm"), a.on("click",
        function() {
            r.hide()
        }), s.on("click",
        function() {
            c.addLoginCallback(function() {
                txv.ua.ie ? setTimeout(i, 1500) : i()
            }),
            c.openLogin(),
            r.hide()
        }), /^\/x\/(cover|page)\//.test(location.pathname) || $("<link>").attr({
            rel: "stylesheet",
            type: "text/css",
            href: "//vm.gtimg.cn/tencentvideo/vstyle/web/common/style/x_dialog.css"
        }).appendTo($("head"))), d.attr("href", "javascript:;"), d.removeAttr("target"), u.on("click",
        function() {
            var t = $(this)[0],
            e = r.width() - t.offsetLeft,
            n = $(".head_inner").height() || 60;
            c.isLogin() ? c.isWxLogin() ? r.show().css({
                left: "auto",
                right: e,
                top: n,
                margin: 0
            }) : window.open(f, "blank") : (c.addLoginCallback(function() {
                txv.ua.ie ? setTimeout(i, 1500) : i()
            }), c.openLogin(), r.hide())
        }))
    }
    var r, a, s, c = n(5),
    l = n(110),
    u = $(".quick_upload"),
    d = $(".quick_upload>.quick_link"),
    f = d.attr("href");
    c.addReadyCallback(o)
},
function(module, exports) {
    module.exports = function(d) {
        with(d) return '<div class="x_modal _nav_upload_tips" style="z-index: 1000; display: none;">\n    <!--[if IE]><iframe src="about:blank" frameborder="0" class="x_iframe_mask"></iframe><![endif]-->\n    <div class="x_modal_bd">\n        <a href="javascript:;" class="x_close _nav_upload_tips_close" title="关闭"><i class="x_iconfont x_icon_close"></i></a>\n        <h3 class="x_title">微信登录暂不支持上传视频 <br> 请使用QQ号重新登录，并进行上传</h3>\n    </div>\n    <div class="x_modal_ft">\n        <a class="x_btn _nav_upload_tips_close" href="javascript:;">取消</a>\n        <a class="x_btn x_btn_primary _nav_upload_tips_confirm" href="javascript:;">重新登录</a>\n    </div>\n</div>'
    }
},
function(t, e, n) {
    function i(t) {
        a.push(t),
        2 == s && "object" == typeof console && console.log(t)
    }
    function o(t) {
        s >= 1 && "object" == typeof console && console.log(t)
    }
    function r(t) {
        s >= 1 && "object" == typeof console && console.dir(t)
    }
    var a = [],
    s = -1,
    c = n(15).getUrlParam("debug"),
    l = -1;
    switch (c) {
    case "true":
    case "2":
        l = 2;
        break;
    case "trace":
    case "1":
        l = 1
    }
    s = l,
    t.exports = {
        log: i,
        trace: o,
        dump: r,
        getAllLog: function() {
            return a
        }
    }
},
function(t, e, n) {
    function i(t, e) {
        e = e || {},
        t = parseInt(t, 10);
        var n, i = o.typeDef;
        switch (t) {
        case i.COMPLEX:
            n = new a;
            break;
        case i.SIMPLE:
            n = new s;
            break;
        case i.DEFAULT:
        default:
            n = new r
        }
        return n.init(e),
        n
    }
    var o = n(113),
    r = n(114),
    a = n(117),
    s = n(118);
    t.exports = {
        renderNameDef: o.renderNameDef,
        typeDef: o.typeDef,
        defaultInit: i,
        complex: function(t) {
            return i(o.typeDef.COMPLEX, t)
        },
        simple: function(t) {
            return i(o.typeDef.SIMPLE, t)
        },
        SearchBox: r,
        initHeadSearch: function() {
            var t, e = {};
            return document.getElementById("head_v3") && !document.getElementById("modSimpleNavMore") && (e.renderMethodName = o.renderNameDef.v2),
            t = txv.searchbox.complex(e),
            t.addOnShowSelectorCallBack(function() {
                $("#modHeadSearchSuggest").show()
            }),
            t.addOnHideSelectorCallBack(function() {
                $("#modHeadSearchSuggest").hide()
            }),
            t
        }
    }
},
function(t, e) {
    t.exports = {
        renderNameDef: {
            complex: "complex",
            simple: "simple",
            v2: "v2"
        },
        typeDef: {
            DEFAULT: 0,
            COMPLEX: 1,
            SIMPLE: 2
        }
    }
},
function(t, e, n) {
    function i(t) {
        t = t || {},
        this.config = {
            defaultTxt: "",
            inputBox: $("#iWord"),
            sugSelector: $("#sgt_list"),
            searchBtn: $("#sbutton"),
            suggestCgi: i.search_suggest,
            searchCgi: i.search_cgi,
            searchForm: document.sform,
            sugCover: $("#mod_keywords_list"),
            elStag: $("#searchbox_hid_stag"),
            elTj2btn: $("#searchbox_hid_tj2btn"),
            defaultCls: "mod_search_txt",
            focusCls: "onfocus",
            currentCls: "current",
            expandCls: "expand",
            showSuggest: !0,
            showSmartHistory: !0,
            render: null,
            renderMethodName: "",
            callback: {
                onInputboxFocus: d,
                onInputboxBlur: d
            }
        },
        $.extend(!0, this.config, t),
        this.selectedIndex = -1,
        this.smartWord = "",
        this.itemsCount = 0,
        this.timer = [],
        this.hadModify = !1,
        this.showSuggestCb = $.Callbacks("unique"),
        this.hideSuggestCb = $.Callbacks("unique")
    }
    function o(t) {
        s.get(v,
        function(e) {
            "function" == typeof t && t(e)
        })
    }
    function r(t) {
        s.get(v,
        function(e) {
            e = e || "";
            for (var n = e ? e.split("|") : [], i = -1, o = encodeURIComponent(t), r = 0, a = n.length; r < a; r++) if (n[r] == o) {
                i = r;
                break
            }
            i != -1 && n.splice(i, 1),
            n.length > 9 && n.pop(),
            n.unshift(o),
            s.set(v, n.join("|"))
        })
    }
    function a() {
        s.set(v, "")
    }
    var s = n(10),
    c = (n(7), n(113)),
    l = n(115),
    u = n(116),
    d = function() {},
    f = "//v.qq.com/json/searchcfg/search_keyword.js?",
    p = (reg = /<em.*?>(.*?)<\/em>/gi, '<li act="history"><a href="javascript:void(0);" class="items"><span class="result_detail"><span class="result_title">{search_word}</span></span></a></li>'),
    h = {},
    g = !1;
    i.search_cgi = "http://v.qq.com/search.html",
    i.search_suggest = "//s.video.qq.com/smartbox?plat=2&ver=0&num=10&otype=json&query=",
    i.showSuggestCb = $.Callbacks("unique"),
    i.hideSuggestCb = $.Callbacks("unique"),
    i.addOnShowSelectorCallBack = i.showSuggestCb.add,
    i.addOnHideSelectorCallBack = i.hideSuggestCb.add,
    $.extend(i.prototype, {
        init: function(t) {
            var e = this;
            t = t || {},
            $.extend(!0, e.config, t),
            e.config.defaultTxt ? e.config.inputBox.val() ? e.hadModify = !0 : e.config.inputBox.val(e.config.defaultTxt) : e.getDefauKeyword(),
            e.initEvent(),
            e.config.searchForm && (e.config.searchForm.action = e.config.searchCgi, e.config.searchForm.onsubmit = function() {
                return !! e.onBeforeSubmit() && e.validate()
            }),
            e.config.renderMethodName == c.renderNameDef.v2 && 0 == e.config.sugCover.find("a.clear_history").size() && e.config.sugCover.append('<a href="javascript:;" style="" class="btn_grey_sim clear_history">清空搜索记录</a>'),
            e.config.sugCover.find("a.clear_histor").hide()
        },
        initEvent: function() {
            var t = this,
            e = t.config.inputBox;
            e.bind("keyup",
            function(e) {
                t.onKeyup(e)
            }),
            e.bind("keydown",
            function(n) {
                t.onKeydown(n);
                var i = e.val();
                i ? t.hadModify = !0 : t.hadModify = !1
            }),
            e.bind("blur",
            function(n) {
                var i = e.val();
                e.removeClass(t.config.focusCls),
                t.hadModify && i || (i && i !== t.config.defaultTxt ? t.hadModify = !0 : e.val(t.config.defaultTxt)),
                g || t.hideSelector(),
                "function" == typeof t.config.callback.onInputboxBlur && t.config.callback.onInputboxBlur()
            }),
            e.bind("focus",
            function(n) {
                e.addClass(t.config.focusCls),
                t.onFocus(this, n)
            }),
            e.bind("paste",
            function(e) {
                setTimeout(function() {
                    t.hadModify = !0,
                    t.getSuggest()
                },
                5)
            }),
            e.bind("webkitspeechchange",
            function(e) {
                e.stopPropagation(),
                e.results && e.results.length > 0 && (this.value = e.results[0].utterance, t.hadModify = !0, t.getSuggest())
            }),
            t.config.sugSelector.undelegate("li", "click").delegate("li", "click",
            function(e) {
                t.onListClick(this, e)
            }),
            t.config.sugCover.delegate("li", "mouseenter mouseleave",
            function(e) {
                "mouseenter" == e.type && t.choose($(this).index())
            }),
            t.config.sugCover.hover(function() {
                g = !0
            },
            function() {
                g = !1
            }),
            t.config.sugCover.bind("blur",
            function(e) {
                t.hideSelector()
            }),
            t.config.sugCover.delegate("a.clear_history", "click",
            function(e) {
                t.hideSelector(),
                a()
            }),
            t.initExtEvent()
        },
        initExtEvent: function() {},
        onFocus: function(t, e) {
            var n = this,
            i = $.trim(t.value);
            n.hadModify && i ? n.getSuggest() : (t.value = "", n.getHistory()),
            "function" == typeof n.config.callback.onInputboxFocus && n.config.callback.onInputboxFocus()
        },
        getHistory: function() {
            var t = this;
            t.config.showSmartHistory && o(function(e) {
                if (e) {
                    var n = e.split("|"),
                    o = [];
                    t.itemsCount = n.length;
                    for (var r = 0,
                    a = n.length; r < a; r++) {
                        var s = n[r];
                        s = decodeURIComponent(s),
                        s = u.filterXSS(s),
                        o.push(p.replace("{search_word}", s))
                    }
                    t.config.sugSelector.html(o.join("")),
                    t.config.sugSelector.show(),
                    t.config.sugCover.find("a.clear_history").show(),
                    t.config.sugCover.show(),
                    t.showSuggestCb.fire(),
                    i.showSuggestCb.fire()
                }
            })
        },
        submit: function() {
            this.validate() && this.config.searchForm.submit()
        },
        validate: function() {
            var t = this,
            e = $.trim(t.config.inputBox.val());
            if (!e) return ! 1;
            if ("utf-8" != document.charset) {
                var n = document.charset;
                document.charset = "utf-8",
                setTimeout(function() {
                    document.charset = n
                },
                10)
            }
            return t.config.inputBox.val(e),
            r(e),
            !0
        },
        onKeyup: function(t) {
            var e = this;
            if (38 != t.keyCode && 40 != t.keyCode) {
                var n = e.config.inputBox.val();
                return n ? void(e.timer[0] = setTimeout(function() {
                    clearTimeout(e.timer[0]),
                    e.timer[0] = null,
                    e.getSuggest()
                },
                300)) : (e.getHistory(), void(e.hadModify = !1))
            }
        },
        onKeydown: function(t) {
            var e = this;
            e.timer[0] && (clearTimeout(e.timer[0]), e.timer[0] = null),
            38 == t.keyCode ? (t.preventDefault(), e.choose("up", !0), e.hadModify = !0) : 40 == t.keyCode && (t.preventDefault(), e.choose("down", !0), e.hadModify = !0)
        },
        choose: function(t, e) {
            var n = this;
            e |= !1,
            "string" == typeof t ? "up" == t ? (n.selectedIndex <= 0 && (n.selectedIndex = n.itemsCount), n.selectedIndex--) : "down" == t && (n.selectedIndex >= n.itemsCount - 1 && (n.selectedIndex = -1), n.selectedIndex++) : "number" == typeof t && (n.selectedIndex = t);
            var i = n.config.sugSelector.find("li:eq(" + n.selectedIndex + ")");
            n.setCurrentCls(i, n.selectedIndex),
            e && n.setVal(i)
        },
        setCurrentCls: function(t, e) {
            var n = this,
            i = n.config.currentCls || "current";
            n.config.sugSelector.find("li." + i).removeClass(i),
            t.addClass(i)
        },
        setVal: function(t) {
            this.config.inputBox.val(t.text())
        },
        hideSelector: function() {
            g = !1,
            this.config.sugCover.hide(),
            this.config.sugSelector.hide(),
            this.config.sugSelector.html(""),
            this.hideSuggestCb.fire(),
            i.hideSuggestCb.fire()
        },
        getSuggest: function() {
            var t = this,
            e = $.trim(this.config.inputBox.val());
            return e ? (t.selectedIndex = -1, t.smartWord = e, h[e] ? void t.afterSuggest(h[e]) : void t.getCgiSuggest(e)) : void t.hideSelector()
        },
        getCgiSuggest: function(t) {
            var e = this;
            $.getJsonp(e.config.suggestCgi + encodeURIComponent(t),
            function(n) {
                if (!n || !n.head || !$.isArray(n.item)) return void e.hideSelector();
                var i = n.item.length;
                return 0 == i ? void e.hideSelector() : (h[t] = n, void e.afterSuggest(h[t]))
            })
        },
        afterSuggest: function(t) {
            var e = this;
            e.renderSuggest(t),
            e.config.sugSelector.show(),
            e.config.sugCover.find("a.clear_history").hide(),
            e.config.sugCover.show(),
            e.config.sugCover.css("display", "block"),
            e.showSuggestCb.fire(),
            i.showSuggestCb.fire()
        },
        renderSuggest: function(t) {
            var e = this,
            n = [],
            i = e.config;
            e.itemsCount = t.item.length;
            for (var o = 0,
            r = t.item.length; o < r; o++) n.push(e.renderItem(t.item[o]));
            i.sugSelector.html(n.join(""))
        },
        renderItem: function() {
            return "function" == typeof this.config.render ? this.config.render.apply(this, arguments) : this.render.apply(this, arguments)
        },
        render: function() {
            var t = this.config.renderMethodName || c.renderNameDef.complex,
            e = l[t];
            if (e) return e.apply(this, arguments)
        },
        onListClick: function(t) {
            var e = this,
            n = e.config.inputBox.val(),
            i = $(t).index();
            this.choose(i, !0),
            this.hideSelector(),
            this.submit(),
            e.config.inputBox.val(n)
        },
        onBeforeSubmit: function() {
            return ! 0
        },
        getDefauKeyword: function() {
            function t() {
                s.get("txv_search_keyword",
                function(t) {
                    t = t || "",
                    t = t.split("|");
                    var n = u.filterXSS(t[0]),
                    i = e.config.inputBox.val();
                    i ? e.hadModify = !0 : e.config.inputBox.val(n),
                    e.config.defaultTxt = n
                })
            }
            var e = this,
            n = Date.now(),
            i = Math.floor(n / 6e5);
            $.ajax({
                url: [f, "v=", i].join(""),
                dataType: "jsonp",
                jsonpCallback: "SearchWordCallback20151104",
                cache: !0
            }).done(function(i) {
                if (i && i.search_word) {
                    var o = i.search_word,
                    r = u.filterXSS(o),
                    a = e.config.inputBox.val();
                    s.set("txv_search_keyword", [o, n].join("|")),
                    a ? e.hadModify = !0 : e.config.inputBox.val(r),
                    e.config.defaultTxt = r
                } else t()
            }).fail(function() {
                t()
            })
        },
        addOnShowSelectorCallBack: function() {
            this.showSuggestCb.add(arguments)
        },
        addOnHideSelectorCallBack: function() {
            this.hideSuggestCb.add(arguments)
        }
    });
    var v = "txv_search_history";
    t.exports = i
},
function(t, e, n) {
    function i(t, e, n, i) {
        var o = this,
        r = o.typemap,
        a = "http://v.qq.com",
        c = [],
        l = t.id;
        if ("高清" != t.sharp && "超清" != t.sharp && (t.sharp = ""), "" == l) c.push(['<li act="search"><a href="javascript:;" target="_self"><span class="result_detail"><span class="result_title">', t.title, "</span></span></a></li>"].join(""));
        else switch (e) {
        case r.DY:
            c.push(['<li act="search" playurl="', t.url, '"><a href="javascript:;" target="_self"><span class="result_type">', t["class"], '</span><span class="result_detail"><span class="result_title">', t.title, '</span><span class="result_HD">', t.sharp, "</span></span></a> </li>"].join(""));
            break;
        case r.TV:
            c.push(['<li act="search" playurl="', t.url, '"><a href="javascript:;" target="_self"><span class="result_type">', t["class"], '</span><span class="result_detail"><span class="result_title">', t.title, '</span><span class="result_HD">', t.sharp, '</span><span class="result_new">', t.ex.title, "</span></span></a></li>"].join(""));
            break;
        case r.MV:
            c.push(['<li act="search" playurl="', t.url, '"><a href="javascript:;" target="_self"><span class="result_type">', t["class"], '</span><span class="result_detail"><span class="result_title">', t.title, '</span><span class="result_singer">歌手：', t.ex.title, '</span><span class="result_HD">', t.sharp, "</span></span></a></li>"].join(""));
            break;
        case r.YC:
        case r.ZY:
            c.push(['<li act="search" playurl="', t.url, '"><a href="javascript:;" target="_self"><span class="result_type">', t["class"], '</span><span class="result_detail"><span class="result_title">', t.title, "</span></span></a></li>"].join("")),
            t.ex && t.ex.id && (tmpUrl = s.getDetailUrl(t.ex.id, e), tmpUrl.indexOf(a) == -1 && (tmpUrl = [a, tmpUrl].join("")), c.push(['<li act="click" playurl="', tmpUrl, '"><a href="javascript:;" target="_self"><span class="result_new_info"> - 最新一期 (第', t.ex.date.substring(0, 10), '期)</span><span class="result_new_info_detail">', t.ex.byname, "</span></a></li>"].join("")), o.itemsCount++);
            break;
        case r.JLP:
            c.push(['<li act="search" playurl="', t.url, '"><a href="javascript:;" target="_self"><span class="result_type">', t["class"], '</span><span class="result_detail"><span class="result_title">', t.title, '</span><span class="result_HD">', t.sharp, "</span></span></a></li>"].join(""));
            break;
        default:
            c.push(['<li act="search" playurl="', t.url, '"><a href="javascript:;" target="_self"><span class="result_type">', t["class"], '</span><span class="result_detail"><span class="result_title">', t.title, "</span></span></a></li>"].join("")),
            t.ex && t.ex.id && (tmpUrl = s.getDetailUrl(t.ex.id, e), tmpUrl.indexOf(a) == -1 && (tmpUrl = [a, tmpUrl].join("")), c.push(['<li act="click" playurl="', tmpUrl, '"><a href="javascript:;" target="_self"><span class="result_new_info"> - 最新一期 (第', t.ex.date.substring(0, 10), '期)</span><span class="result_new_info_detail">', t.ex.byname, "</span></a></li>"].join("")), o.itemsCount++)
        }
        return c.join("")
    }
    function o(t, e, n, o) {
        return i.apply(this, arguments)
    }
    function r(t, e, n, i) {
        var o = this,
        r = [],
        s = t.ps,
        c = t.ss,
        l = "",
        u = "",
        d = "",
        f = "",
        p = "ll_src",
        h = o.typemap,
        g = o.itemTypeMap,
        v = t.itemType;
        if (t.da && (l = "(" + t.da + ")&nbsp;"), 1 == e && t.pd && (u = '<p class="list">导演：' + t.pd + "</p>"), 2 == e && t.ex && t.ex.title && (u = '<p class="list">' + t.ex.title + "</p>"), 3 != e && 9 != e || !t.ar || (u = '<p class="list">地区：' + t.ar + "</p>"), t.pa = t.pa || "", t.pa = t.pa.replace(/\+/g, " "), 1 != e && 2 != e || !t.pa || (d = '<p class="list">主演：' + t.pa + "</p>"), 3 != e && 9 != e || !t.sn || (d = '<p class="list">类型：' + t.sn + "</p>"), 1 != s || 1 != c || n.hasExpand || (n.hasExpand = !0, p = "src", f = "expand"), r.push('<li ps="' + s + '" ss="' + c + '" class="' + f + '">'), r.push('<a href="javascript:void(0);" target="_self" class="items">'), 1 == s && 1 == c && r.push('<span class="item_posi"><i class="icon_arrow"></i></span>'), r.push('<span class="result_detail">'), r.push('<span class="result_title">' + t.title + "</span>"), r.push('<span class="title_desc">' + l + t["class"] + "</span>"), r.push("</span>"), r.push("</a>"), 1 == s && 1 == c) {
            if (r.push('<div class="wrap_content">'), r.push('<a href="javascript:;" class="figure"><img ' + p + '="' + t.dc + '" onerror="picerr(this, 2)""></a>'), v == g.ZB) r.push('<div class="wrap_right"><div class="detail_list">'),
            t.tt && r.push('<h3 class="list_subtitle">' + t.tt + "</h3>"),
            r.push('<p class="list">' + t.secondLine + "</p>"),
            r.push("</div>"),
            t.url && r.push('<a href="' + t.url + '" class="btn_play" target="_blank" nopropagation="true">' + {
                "-1": "立即播放",
                0 : "观看直播",
                1 : "查看详情"
            } [t.status] + "</a>");
            else if (v == g.ZT) r.push('<div class="wrap_right"><div class="detail_list">'),
            r.push('<p class="list_subtitle" title="' + t.tt + '">' + a.cut(t.tt, 80, "...") + "</p>"),
            r.push("</div>"),
            t.url && r.push('<a href="' + t.url + '" class="btn_play" target="_blank" nopropagation="true">查看详情</a>');
            else switch ( + e) {
            case h.ZY:
                if (r.push('<div class="wrap_right wrap_layout_12">'), t.ex && $.isArray(t.ex.pl)) for (var m = 0,
                _ = t.ex.pl.length; m < _; m++) {
                    var y = t.ex.pl[m];
                    r.push('<p class="list"><a href="' + y.u + '" class="btn_grey_sim" target="_blank" nopropagation="true">' + y.en + "期 " + y.ti + "</a></p>")
                }
                t.live_url && r.push('<a href="' + t.live_url + '" class="btn_play" target="_blank" nopropagation="true" data-reporttype="live">正在直播</a>'),
                r.push("</div>");
                break;
            default:
                var x = [];
                if (t.tt && t.tt != t.word && x.push(t.tt), t.et && t.et != t.word && x.push(t.et), r.push('<div class="wrap_right"><div class="detail_list">'), x.length > 0 && r.push('<h3 class="list_subtitle">' + x.join("/") + "</h3>"), r.push(u), r.push(d), r.push("</div>"), r.push('<a href="' + t.url + '" class="btn_play" target="_blank" nopropagation="true">立即播放</a>'), t.ticket) {
                    var b = $.parseJSON(t.ticket);
                    r.push('<a href="' + b.ticket_url + '" target="_blank" class="btn_ticket">买电影票</a><a href="' + b.ticket_url + '" target="_blank" class="btn_tips">' + b.ticket_city + "最低价：￥" + b.ticket_price + "元</a>")
                }
                r.push("</div>")
            }
            r.push("</div>")
        }
        return r.push("</li>"),
        r.join("")
    }
    var a = n(116),
    s = n(15);
    t.exports = {
        complex: i,
        simple: o,
        v2: r
    }
},
function(t, e) {
    t.exports = {
        extend: function(t, e) {
            var n = function() {};
            n.prototype = t.prototype,
            e.prototype = new n,
            e.prototype.constructor = e
        },
        filterXSS: function(t) {
            var e = document.createElement("div"),
            n = $(e).text(t).html();
            return e = null,
            n
        },
        cut: function(t, e, n) {
            if (t = String(t), e -= 0, n = n || "", isNaN(e)) return t;
            for (var i = t.length,
            o = Math.min(Math.floor(e / 2), i), r = this.getRealLen(t.slice(0, o)); o < i && r < e; o++) r += 1 + (t.charCodeAt(o) > 255);
            return t.slice(0, r > e ? o - 1 : o) + (o < i ? n: "")
        },
        getRealLen: function(t, e) {
            if ("string" != typeof t) return 0;
            if (e) {
                var n = t.replace(/[\x00-\xFF]/g, "");
                return t.length - n.length + encodeURI(n).length / 3
            }
            return t.replace(/[^\x00-\xFF]/g, "**").length
        }
    }
},
function(t, e, n) {
    function i(t) {
        r.call(this, t),
        this.typemap = {
            DY: 1,
            TV: 2,
            DM: 3,
            MV: 22,
            ZY: 10,
            YC: 103,
            JLP: 9
        },
        this.itemTypeMap = {
            SP: 1,
            RM: 2,
            RC: 3,
            ZB: 5,
            ZT: 101
        },
        this.flag = {
            isMix: !1
        },
        this.hotkeyObj = {
            go: "search.search",
            smartBox: "search.smartbox",
            hotwordtj2: "search.hotword",
            smartBoxStag: "txt.smart_index",
            defaultStag: "txt.index",
            hotwordStag: "txt.index_hotword",
            historyStag: "txt.historyword"
        }
    }
    var o = n(116),
    r = n(114),
    a = n(7),
    s = "//ncgi.video.qq.com/report/search?",
    c = function() {};
    o.extend(r, i),
    $.extend(i.prototype, {
        onBeforeSubmit: function() {
            var t, e, n = !0,
            i = this.config.elStag,
            o = this.config.elTj2btn;
            if ("" != this.config.sugSelector.html() && this.selectedIndex != -1) {
                if (t = this.config.sugSelector.find("li:eq(" + this.selectedIndex + ")"), e = t.attr("act"), "click" == e) {
                    a.button(this.hotkeyObj.smartBox);
                    var r = t.attr("playurl");
                    r && "" != r && window.open(r),
                    this.hideSelector(),
                    n = !1
                } else "history" == e ? (i.val(this.hotkeyObj.historyStag), o.val(this.hotkeyObj.smartBox)) : (i.val(this.hotkeyObj.smartBoxStag), o.val(this.hotkeyObj.smartBox));
                this.hideSelector()
            } else this.hadModify ? (i.val(this.hotkeyObj.defaultStag), o.val(this.hotkeyObj.go)) : (i.val(this.hotkeyObj.hotwordStag), o.val(this.hotkeyObj.hotwordtj2));
            return n
        },
        onListClick: function(t, e) {
            var n = this,
            i = $(t),
            o = i.attr("act"),
            r = i.index(),
            s = this.config.elStag,
            c = this.config.elTj2btn;
            if ("click" == o) {
                a.button(this.hotkeyObj.smartBox);
                var l = i.attr("playurl");
                return l && "" != l && window.open(l),
                void this.hideSelector()
            }
            var u = n.config.inputBox.val();
            "history" == o ? (c.val(this.hotkeyObj.smartBox), s.val(this.hotkeyObj.historyStag)) : (c.val(this.hotkeyObj.smartBox), s.val(this.hotkeyObj.smartBoxStag)),
            this.choose(r, !0),
            this.hideSelector(),
            this.submit(),
            c.val(this.hotkeyObj.go),
            s.val(this.hotkeyObj.defaultStag),
            n.config.inputBox.val(u)
        },
        renderSuggest: function(t) {
            var e, n, i = this,
            o = [];
            if (t && $.isArray(t.item)) {
                i.flag.isMix = t.head && 1 == t.head.mix,
                i.itemsCount = t.item.length,
                t.hasExpand = !1;
                for (var r = 0; r < t.item.length; r++) e = t.item[r],
                n = -1,
                e.ex && e.ex.typeid && (n = parseInt(e.ex.typeid, 10)),
                o.push(i.renderItem(e, n, t, r));
                i.config.sugSelector.html(o.join(""))
            }
        },
        setCurrentCls: function(t, e) {
            var n = this,
            i = t.attr("ss"),
            o = n.config.currentCls || "current",
            r = n.config.expandCls || "expand";
            n.config.sugSelector.find("li." + o).removeClass(o),
            t.addClass(o),
            1 == i && (n.config.sugSelector.find("li." + r).removeClass(r), t.addClass(r)),
            t.find("img").each(function(t, e) {
                var n = $(e);
                n.attr("src") || setTimeout(function() {
                    n.attr("src", n.attr("ll_src"))
                },
                0)
            })
        },
        setVal: function(t) {
            t.attr("act");
            this.config.inputBox.val(t.find(".result_title").text())
        },
        initExtEvent: function() {
            var t = this;
            this.config.sugSelector.delegate("li a[nopropagation]", "click",
            function(e) {
                e.stopPropagation();
                var n = $(this).attr("data-reporttype");
                t.dataReport(this, n),
                t.hideSelector()
            }),
            this.config.sugSelector.delegate("li a.btn_ticket", "click",
            function(e) {
                e.stopPropagation(),
                t.dataReport(this, "ticket"),
                t.hideSelector()
            }),
            this.config.sugSelector.delegate("li a.btn_tips", "click",
            function(e) {
                e.stopPropagation(),
                t.dataReport(this, "ticket"),
                t.hideSelector()
            })
        },
        dataReport: function(t, e) {
            var n = this,
            i = $(t),
            o = n.config.sugSelector.find("li:eq(" + n.selectedIndex + ")"),
            e = e || "normal",
            r = {
                normal: 1,
                ticket: 101,
                live: 102
            },
            a = {
                qid: "",
                action: 101,
                ival1: n.selectedIndex + 1,
                ival2: r[e],
                ival7: n.flag.isMix ? 11 : 10,
                sval: "self",
                sval1: encodeURIComponent(n.smartWord),
                sval2: encodeURIComponent(o.find(".result_title").text()),
                sval3: encodeURIComponent(i.attr("href")),
                platform: "10201",
                ctime: "",
                curl: encodeURIComponent(location.href)
            },
            l = [];
            l.push(s);
            for (var u in a) l.push(u, "=", a[u], "&");
            l.push("_t=" + (new Date).valueOf());
            var d = new Image;
            d.onload = d.onerror = d.onabort = c,
            d.src = l.join("")
        }
    }),
    t.exports = i
},
function(t, e, n) {
    function i(t) {
        r.call(this, t),
        this.hotkeyObj = {
            go: "search.minisearch",
            smartBox: "search.minismartbox",
            hotwordtj2: "search.minihotword",
            smartBoxStag: "txt.smart_slide",
            defaultStag: "txt.slide",
            hotwordStag: "txt.slide_hotword"
        }
    }
    var o = n(116),
    r = n(117);
    o.extend(r, i),
    $.extend(i.prototype, {}),
    t.exports = i
},
function(t, e, n) {
    function i() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
        function(t) {
            var e = 16 * Math.random() | 0,
            n = "x" == t ? e: 3 & e | 8;
            return n.toString(16)
        })
    }
    function o() {
        var t = txv.cookie,
        e = "tvfe_search_uid",
        n = t.get(e);
        return n || (n = i(), t.set(e, n, "", !1, 87600)),
        n
    }
    function r() {
        return a || (a = o())
    }
    var a, s = n(120),
    c = n(121),
    l = n(122),
    u = n(123),
    d = (n(6), "//ncgi.video.qq.com/report/search?"),
    f = function() {},
    p = "",
    h = [],
    g = location.href.indexOf("//film.qq.com") != -1,
    v = {
        init: function() {
            function t(t) {
                n.defaultWord = e,
                $("#keywords").is(":focus") ? $("#keywords").attr({
                    placeholder: e
                }) : $("#keywords").attr({
                    value: e,
                    placeholder: e
                })
            }
            if (!v.inited) {
                v.inited = !0,
                window.console || (window.console = {
                    log: function() {}
                });
                var e, n = this;
                g ? $.getJSON("//v.qq.com/p/hollywood/search_keyword.json", {
                    v: Math.floor((new Date).getTime() / 6e5)
                },
                function(n, i) {
                    n && n.data && n.data.length && (e = n.data[1] && n.data[1].title || n.data[0].title, t(e))
                }) : (n.cache = n.cache || {},
                $.ajax({
                    url: "//node.video.qq.com/x/api/vdefault_word",
                    dataType: "jsonp",
                    data: {
                        v: Math.floor((new Date).getTime() / 6e5)
                    }
                }).done(function(n) {
                    n && n.data && n.data.length && (e = n.data[0].title || "", t(e))
                })),
                v.initEvent()
            }
        },
        initEvent: function() {
            var t = this;
            $(document).on("keyup", "#keywords",
            function(e) {
                e.preventDefault(),
                t.getSmartList(e, $(this))
            }).on("focus", "#keywords",
            function(e) {
                t._isFocus = !0,
                e.preventDefault(),
                t.checkKeyword(e, $(this))
            }).on("blur", "#keywords",
            function(e) {
                t._isFocus = !1,
                e.preventDefault(),
                t.losesFocus(!0)
            }),
            $("#smartbox").on("click", ".sb_item",
            function(e) {
                t.searchWord($(this), e)
            }).on("mouseover", ".sb_item",
            function(e) {
                e.preventDefault(),
                t.overThis($(this))
            }).on("mouseout", ".sb_item",
            function(e) {
                e.preventDefault(),
                t.outThis($(this))
            }).on("click", ".sb_del",
            function(e) {
                e.preventDefault(),
                t.clearHistory()
            }).on("click._through", ".sb_item ._through",
            function(e) {
                e.stopPropagation(),
                t.dataReport($(this), {
                    isThrough: !0
                })
            }),
            $("#searchForm").on("click", "button",
            function(e) {
                e.preventDefault(),
                t.jumpToNewSearch(),
                t._isFocus && $("#keywords").trigger("blur")
            })
        },
        getSearchHistory: function() {
            if (window.localStorage) {
                var t = localStorage.getItem("searchHistory");
                return t = t ? JSON.parse(t) : []
            }
            return []
        },
        setSearchHistory: function(t, e) {
            if (window.localStorage) {
                if (t = $.trim(t), e.constructor != Array || !t) return;
                for (var n = 0; n < e.length; n++) t == e[n].word && e.splice(n, 1);
                e.unshift({
                    word: t
                }),
                e.length > 10 && e.pop();
                try {
                    localStorage.setItem("searchHistory", JSON.stringify(e))
                } catch(i) {}
            }
        },
        getAjaxData: function(t) {
            var e = $.Deferred();
            return $.ajax({
                url: "//s.video.qq.com/smartbox",
                dataType: "jsonp",
                data: {
                    plat: 2,
                    ver: 0,
                    num: 10,
                    otype: "json",
                    query: t,
                    uid: r()
                }
            }).done(function(t) {
                e.resolve(t)
            }).fail(function() {}),
            e.promise()
        },
        getHotList: function() {
            var t = $.Deferred();
            return $.ajax({
                url: "//node.video.qq.com/x/api/hot_search/?channelId=0",
                dataType: "jsonp",
                data: {
                    auto_id: 938,
                    otype: "json"
                }
            }).done(function(e) {
                t.resolve(e)
            }).fail(function() {}),
            t.promise()
        },
        getSmartList: function(t, e) {
            var n = this,
            i = e.val();
            if (38 == t.keyCode) n.tapUp();
            else if (40 == t.keyCode) n.tapDown();
            else if (13 != t.keyCode && n.setReportParams({
                stag: 0,
                smartbox_ab: ""
            }), $.trim(i)) n.showHistory = !1,
            n.timer && clearTimeout(n.timer),
            n.timer = setTimeout(function() {
                $.trim(i) && n.compileSmartList(i)
            },
            50);
            else {
                if (n.showHistory) return;
                n.showHistory = !0,
                n.showLayer = !0,
                setTimeout(function() {
                    n.compileHistoryList()
                },
                50)
            }
        },
        tapUp: function() {
            var t = this;
            if (t.showingBox) {
                if ("recommend" == t.showingBox) {
                    var e = $("#smartbox").find(".current"),
                    n = $("#smartbox").find(".sb_item");
                    if (n.removeClass("expand"), e.size() > 0) {
                        var i = e.removeClass("current").prev();
                        i.size() > 0 ? i.addClass("current") : n.filter(":last").addClass("current")
                    } else n.filter(":last").addClass("current")
                } else if ("history" == t.showingBox) {
                    var e = $("#smartbox").find(".current"),
                    o = $(".sb_history").find(".sb_item"),
                    r = $(".sb_hot").find(".sb_item");
                    if (e.size() > 0) {
                        var i = e.removeClass("current").prev();
                        if (i.size() > 0) i.addClass("current");
                        else {
                            var a = e.parent().parent().attr("class");
                            "sb_history" == a ? r.size() > 0 ? r.filter(":last").addClass("current") : o.filter(":last").addClass("current") : "sb_hot" == a && (o.size() > 0 ? o.filter(":last").addClass("current") : r.filter(":last").addClass("current"))
                        }
                    } else r.size() > 0 ? r.filter(":last").addClass("current") : o.size() > 0 && o.filter(":last").addClass("current")
                }
                t.setReportParams({
                    stag: $("#smartbox").find(".current").data("stag"),
                    smartbox_ab: $("#smartbox").find(".current").data("abresult")
                }),
                $("#keywords").val($("#smartbox").find(".current").data("word"))
            }
        },
        tapDown: function() {
            var t = this;
            if (t.showingBox) {
                if ("recommend" == t.showingBox) {
                    var e = $("#smartbox").find(".current"),
                    n = $("#smartbox").find(".sb_item");
                    if (n.removeClass("expand"), e.size() > 0) {
                        var i = e.removeClass("current").next();
                        i.size() > 0 ? i.addClass("current") : n.filter(":first").addClass("current")
                    } else n.filter(":first").addClass("current")
                } else if ("history" == t.showingBox) {
                    var e = $("#smartbox").find(".current"),
                    o = $(".sb_history").find(".sb_item"),
                    r = $(".sb_hot").find(".sb_item");
                    if (e.size() > 0) {
                        var i = e.removeClass("current").next();
                        if (i.size() > 0) i.addClass("current");
                        else {
                            var a = e.parent().parent().attr("class");
                            "sb_history" == a ? r.size() > 0 ? r.filter(":first").addClass("current") : o.filter(":first").addClass("current") : "sb_hot" == a && (o.size() > 0 ? o.filter(":first").addClass("current") : r.filter(":first").addClass("current"))
                        }
                    } else o.size() > 0 ? o.filter(":first").addClass("current") : r.size() > 0 && r.filter(":first").addClass("current")
                }
                t.setReportParams({
                    stag: $("#smartbox").find(".current").data("stag"),
                    smartbox_ab: $("#smartbox").find(".current").data("abresult")
                }),
                $("#keywords").val($("#smartbox").find(".current").data("word"))
            }
        },
        compileSmartList: function(t) {
            var e = this;
            e.cache = e.cache || {},
            e.cache[t] ? e.buildSmartList(e.cache[t]) : $.when(e.getAjaxData(t)).then(function(n) {
                e.buildSmartList(n),
                e.cache[t] = n
            })
        },
        buildSmartList: function(t) {
            var e = this;
            if (t.head && 0 == t.head.error && t.item && !e.showHistory && e.showLayer) {
                for (var n = 1,
                i = 0,
                o = t.item.length; i < o; i++) 1 == t.item[i].ss && n ? (t.item[i].firstRich = 1, n = 0) : t.item[i].firstRich = 0,
                t.head.ab_result && (t.item[i].ab_result = t.head.ab_result);
                p = t.head.qid,
                h = t.item;
                var r = u(s, {
                    list: t.item
                });
                $("#smartbox").html(r).removeClass("none"),
                e.showingBox = "recommend"
            } else $("#smartbox").addClass("none")
        },
        overThis: function(t) {
            var e = this;
            e.smartboxShowing = !0,
            t.addClass("current"),
            $("#smartbox").find(".sb_item_rich").removeClass("expand")
        },
        outThis: function(t) {
            var e = this;
            e.smartboxShowing = !1,
            $("#smartbox").find(".sb_item").removeClass("current")
        },
        searchWord: function(t, e) {
            var n = this,
            i = t.data("word");
            return n.losesFocus(!0),
            e.target && e.target.href && e.target.target && "_blank" == e.target.target ? void n.dataReport($(e.target), {
                isThrough: !0
            }) : ($("#keywords").val(i), n.setReportParams({
                stag: t.data("stag"),
                smartbox_ab: t.data("abresult")
            }), n.jumpToUrl(), void(t.parent().hasClass("_suggest") && n.dataReport(t)))
        },
        setReportParams: function(t) {
            $('[name="stag"]').val(t.stag),
            $('[name="smartbox_ab"]').val(t.smartbox_ab)
        },
        jumpToNewSearch: function() {
            var t = this,
            e = $("#keywords").val();
            t.jumpToUrl(e),
            t.dataReport($())
        },
        jumpToUrl: function(t) {
            var e = this,
            n = e.getSearchHistory(); ! $("#keywords").val() && $("#keywords").val(e.defaultWord),
            e.setSearchHistory($("#keywords").val(), n),
            $("#keywords").val() == e.defaultWord && e.setReportParams({
                stag: g ? 7 : 104,
                smartbox_ab: ""
            }),
            $("#searchForm").submit()
        },
        compileHistoryList: function() {
            var t, e = this,
            n = e.getSearchHistory();
            e.showLayer && (n && n.length > 0 ? (t = u(c, {
                list: n
            }), $("#smartbox").html(t).removeClass("none")) : $("#smartbox").html(""), e.cache = e.cache || {},
            e.cache.history ? e.buildHistoryList(e.cache.history, n) : $.when(e.getHotList()).then(function(t) {
                e.buildHistoryList(t, n),
                e.cache.history = t
            }), e.showingBox = "history")
        },
        buildHistoryList: function(t, e) {
            if (0 == t.data.errCode) {
                var n = t.data.mapResult[0].listInfo.slice(0, 10 - Math.ceil(e.length / 2)),
                i = l({
                    list: n
                });
                $("#smartbox").append(i).removeClass("none")
            }
        },
        checkKeyword: function(t, e) {
            var n = this;
            e.val() == n.defaultWord && e.val(""),
            e.val() ? (n.showLayer = !0, n.getSmartList(t, e)) : (n.showLayer = !0, setTimeout(function() {
                n.compileHistoryList(t, e)
            },
            50))
        },
        losesFocus: function(t) {
            var e = this;
            e.smartboxShowing && !t || (e.showLayer = !1, setTimeout(function() {
                $("#smartbox").addClass("none"),
                e.showHistory = !1,
                e.showingBox = ""
            },
            150))
        },
        clearHistory: function() {
            var t = this;
            t.losesFocus(!0);
            try {
                localStorage.setItem("searchHistory", "")
            } catch(e) {}
        },
        dataReport: function(t, e) {
            e = e || {};
            var n = $.extend({
                sval5: encodeURIComponent(t.attr("href") || ""),
                uid: r(),
                curl: encodeURIComponent(location.href)
            },
            e.params || {}),
            i = [];
            i.push(d),
            i.push(this.getReport(t.data("index"), e.isThrough), "&");
            for (var o in n) i.push(o, "=", n[o], "&");
            i.push("_t=" + (new Date).valueOf());
            var a = new Image;
            a.onload = a.onerror = a.onabort = f,
            a.src = i.join("")
        },
        getReport: function(t, e) {
            var n = h || [],
            i = n[t] || {};
            if (void 0 === t || null === t) {
                var o = "&ival3=";
                return o += this._isFocus ? "1": "2",
                i = n[0] || {},
                i.report && i.report.replace(/sval3=[^&]*&/, "") + o || ""
            }
            return e && i.direct_report || i.report || ""
        }
    };
    t.exports = v
},
function(module, exports) {
    module.exports = function(d) {
        with(d) return '<div class="sb_suggest _suggest">\n\t' + (d.list || []).map(function(t, e) {
            return "\n\t\t" + (function() {
                return 1 == t.ss ? '\n\t\t\t<div class="sb_item sb_item_rich' + (function() {
                    if (t.firstRich) return " expand"
                } () || "") + '" data-index="' + e + '" data-word="' + t.word + '" data-stag="2" data-abresult="' + (t.ab_result || "") + '">\n\t\t\t\t<a href="javascript:;" class="sb_title"><span class="sb_hl">' + t.title + '</span><span class="sb_sub"> ' + t["class"] + '</span></a>\n\t\t\t\t<span class="sb_fold_sign"><i class="icon_sm icon_down_sm"><svg class="svg_icon" viewBox="0 0 16 16" width="16" height="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_icon_down_sm"></use></svg></i><i class="icon_sm icon_up_sm"><svg class="svg_icon" viewBox="0 0 16 16" width="16" height="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_icon_up_sm"></use></svg></i></span>\t\n\t\t\t\t<div class="sb_richbox">\n\t\t\t\t\t<a href="javascript:;" class="sb_link">\n\t\t\t\t\t\t<img class="sb_pic" src="' + (function() {
                    return t.dc ? "" + _.reProtocol(t.dc) : "//i.gtimg.cn/qqlive/images/20150608/pic_h.png"
                } () || "") + '">\n\t\t\t\t\t\t' + _comps.mark(t.markLabelList) + "\n\t\t\t\t\t</a>\n\t\t\t\t\t" + (function() {
                    return 3 != t.idType ? "\n\t\t\t\t\t\t" + (function() {
                        if (t.ex && t.ex.title) return '\n\t\t\t\t\t\t\t<span class="sb_desc">' + t.ex.title + "</span>\n\t\t\t\t\t\t"
                    } () || "") + "\n\t\t\t\t\t\t" + (function() {
                        if (t.pa) return '\n\t\t\t\t\t\t\t<span class="sb_desc">主演：' + t.pa + "</span>\n\t\t\t\t\t\t"
                    } () || "") + '\n\t\t\t\t\t\t<a href="' + (t.url || "javascript:;") + '" target="_blank" class="sb_btn ' + (t.url ? "_through": "") + '" data-index="' + e + '" data-word="' + t.word + '" data-itemtype="' + t.itemType + '">立即播放</a>\n\t\t\t\t\t': 3 == t.idType && t.ex && t.ex.pl && t.ex.pl.length > 0 ? "\n\t\t\t\t\t\t" + (t.ex.pl || []).map(function(n, i) {
                        return "\n\t\t\t\t\t\t\t" + (function() {
                            if (i < 2) return '\n\t\t\t\t\t\t\t\t<a href="' + (n.u || "javascript:;") + '" target="_blank" class="sb_list  ' + (n.u ? "_through": "") + '" data-index="' + e + '" data-word="' + t.word + '" data-itemtype="' + t.itemType + '">\n\t\t\t\t\t\t\t\t\t<span class="sb_inner">' + n.en + " " + n.ti + "</span>\n\t\t\t\t\t\t\t\t\t" + (function() {
                                if (1 == n["new"]) return '\n\t\t\t\t\t\t\t\t\t\t<i class="mark_v"><img src="//i.gtimg.cn/qqlive/images/mark/mark_13.png" srcset="//i.gtimg.cn/qqlive/images/mark/mark_13@2x.png 2x" alt="更新"></i>\n\t\t\t\t\t\t\t\t\t'
                            } () || "") + "\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t" + (function() {
                                if (0 == i) return "\n\t\t\t\t\t\t\t\t\t<pangu> </pangu>\n\t\t\t\t\t\t\t\t"
                            } () || "") + "\n\t\t\t\t\t\t\t"
                        } () || "") + "\n\t\t\t\t\t\t"
                    }).join("") + "\n\t\t\t\t\t": void 0
                } () || "") + "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t": '\n\t \t\t<div class="sb_item" data-index="' + e + '" data-word="' + t.word + '" data-stag="2" data-abresult="' + (t.ab_result || "") + '">\n\t\t\t\t<a href="javascript:;" class="sb_title" data-word="' + t.word + '"><span class="sb_hl">' + t.title + "</span></a>\n\t\t\t</div>\n\t\t"
            } () || "") + "\n\t"
        }).join("") + "\n</div>\n"
    }
},
function(module, exports) {
    module.exports = function(d) {
        with(d) return '<div class="sb_history">\n\t<div class="sb_head">\n\t\t<div class="sb_title">历史记录</div>\n\t\t<div class="sb_tools">\n\t\t\t<a href="javascript:;" class="sb_del" title="清除搜索记录"><i class="icon_sm icon_trash_sm"><svg class="svg_icon" viewBox="0 0 16 16" width="16" height="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_icon_trash_sm"></use></svg></i><span class="icon_text">清除记录</span></a>\n\t\t</div>\n\t</div>\n\t<div class="sb_body">\n\t\t' + (d.list || []).map(function(t, e) {
            return '\n\t\t\t<div class="sb_item" data-word="' + _(t.word) + '" data-stag="102" data-abresult=""><a href="javascript:;" title="' + _(t.word) + '" data-word="' + _(t.word) + '">' + _(t.word) + "</a></div>\n\t\t"
        }).join("") + "\n\t</div>\n</div>\n"
    }
},
function(module, exports) {
    module.exports = function(d) {
        with(d) return '<div class="sb_hot">\n\t<div class="sb_head">\n\t\t<div class="sb_title">热门搜索</div>\n\t\t<div class="sb_tools">\n\t\t\t<a class="sb_more" href="https://v.qq.com/x/hotlist/search/?channel=555&source=common_smartbox" target="_blank" _stat="common_smartbox:search_hotlist" title="更多热搜"><span class="icon_text">更多热搜</span><i class="icon_sm icon_right_sm"><svg class="svg_icon" viewBox="0 0 16 16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg_icon_right_sm"></use></svg></i></a>\n\t\t</div>\n\t</div>\n\t<div class="sb_body">\n\t\t' + (d.list || []).map(function(t, e) {
            return '\n\t\t\t<div class="sb_item sb_item_' + t.rankNum + '" data-word="' + t.title + '" data-stag="101" data-abresult=""><a href="javascript:;" title="' + t.title + '" data-word="' + t.title + '"><span class="sb_num">' + t.rankNum + '</span><span class="sb_name">' + t.title + "</span></a></div>\n\t\t"
        }).join("") + "\n\t</div>\n</div>"
    }
},
function(t, e, n) {
    var i = n(124),
    o = {},
    r = function(t, e, r) {
        var a = n(125),
        s = $.extend(i.escape, i, o, r);
        return t($.extend({},
        e, {
            _: s,
            _comps: a
        }))
    };
    r.helper = function(t, e) {
        return o[t] = e,
        this
    },
    r.helpers = function(t) {
        return i.extend(o, t),
        this
    },
    t.exports = r
},
function(t, e) {
    t.exports = {
        escape: function(t) {
            return t ? String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : ""
        },
        reProtocol: function(t) {
            return t ? t.replace(/^http:\/\//, "//") : ""
        },
        img2x: function(t) {
            return t ? t.replace(/^http:\/\//, "//").replace(/\.\w+$/,
            function(t) {
                return "@2x" + t
            }) : ""
        }
    }
},
function(t, e, n) {
    var i = n(126),
    o = n(123);
    t.exports = {
        mark: function(t) {
            return o(i, {
                labels: t || []
            }) || ""
        }
    }
},
function(module, exports) {
    module.exports = function(d) {
        with(d) return (labels || []).map(function(t, e) {
            return "\n\t" +
            function() {
                var e = ["", "mark_v", "figure_caption"][t.position];
                return e ? '<span class="' + e + '">' +
                function() {
                    switch (t.type) {
                    case 1:
                        return '<span class="figure_info">' + t.primeText + "</span>";
                    case 2:
                        return '<img src="' + _.reProtocol(t.markImageUrl) + '" alt="' + t.primeText + '" srcset="' + _.img2x(t.markImageUrl) + ' 2x"/>';
                    case 3:
                        return '<span class="' + t.cssText + '">' + t.primeText + "</span>";
                    default:
                        return ""
                    }
                } () + "</span>": ""
            } () + "\n"
        }).join("") + "\n\n"
    }
},
function(t, e, n) {
    "use strict";
    var i = n(128),
    o = n(10);
    t.exports = {
        init: function() {
            if ("v.qq.com" === location.host && window.parent.top.window === window) {
                var t, e = navigator.userAgent.toLowerCase(); (t = e.match(/chrome\/([\d.]+)/)) && (t = t[1]);
                var n = e.indexOf("qqbrowser") > 0 && e.indexOf("windows") > 0;
                if (t && !n) {
                    var r = 0;
                    o.get("browser-tips-close",
                    function(e) {
                        if (e && (r = parseInt(e, 10)), r < 2) {
                            var n = t.split(".");
                            if (n && n.length && ("53" === n[0] || "54" === n[0])) {
                                $(".site_head").size() && !$(".site_common_head").size() && $("body").addClass("body_topbar"),
                                $("body").prepend(i({}));
                                var a = $("#browser-tips");
                                a.find(".btn_close").click(function() {
                                    o.set("browser-tips-close", r + 1),
                                    a.remove(),
                                    $("body").removeClass("body_topbar")
                                })
                            }
                        }
                    })
                }
            }
        }
    }
},
function(module, exports) {
    module.exports = function(d) {
        with(d) return '<div class="mod_topbar_tips" id="browser-tips">\n    <span class="topbar_tip_txt">很抱歉，当前浏览器版本可能导致无法登录、视频无法播放等问题，请尽快升级，享受更好的观影体验。</span>\n    <a href="http://pc.qq.com/detail/1/detail_2661.html" target="_blank" class="btn_primary">立即升级</a>\n    <a href="javascript:;" class="btn_close"><i class="icon_xs icon_close_xs"><svg class="svg_icon svg_icon_close_xs" viewBox="0 0 10 10" width="10" height="10"><path d="M7 6h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-2v1h-1v1h-1v1h-2v-2h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1v-2h2v1h1v1h1v1h2v-1h1v-1h1v-1h2v2h-1v1h-1v1h-1v2z"></path></svg></i></a>\n</div>'
    }
}]);