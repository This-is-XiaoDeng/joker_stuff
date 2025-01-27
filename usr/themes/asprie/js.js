!
function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(x, e) {
	"use strict";
	var t = [],
		z = x.document,
		r = Object.getPrototypeOf,
		a = t.slice,
		m = t.concat,
		c = t.push,
		i = t.indexOf,
		n = {},
		o = n.toString,
		w = n.hasOwnProperty,
		s = w.toString,
		u = s.call(Object),
		g = {},
		v = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType
		},
		b = function(e) {
			return null != e && e === e.window
		},
		l = {
			type: !0,
			src: !0,
			noModule: !0
		};

	function y(e, t, n) {
		var r, i = (t = t || z).createElement("script");
		if (i.text = e, n) for (r in l) n[r] && (i[r] = n[r]);
		t.head.appendChild(i).parentNode.removeChild(i)
	}
	function _(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
	}
	var d = "3.3.1",
		C = function(e, t) {
			return new C.fn.init(e, t)
		},
		h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	function f(e) {
		var t = !! e && "length" in e && e.length,
			n = _(e);
		return !v(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	C.fn = C.prototype = {
		jquery: d,
		constructor: C,
		length: 0,
		toArray: function() {
			return a.call(this)
		},
		get: function(e) {
			return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = C.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return C.each(this, e)
		},
		map: function(n) {
			return this.pushStack(C.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(a.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: c,
		sort: t.sort,
		splice: t.splice
	}, C.extend = C.fn.extend = function() {
		var e, t, n, r, i, o, s = arguments[0] || {},
			a = 1,
			c = arguments.length,
			u = !1;
		for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === c && (s = this, a--); a < c; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], s !== (r = e[t]) && (u && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && C.isPlainObject(n) ? n : {}, s[t] = C.extend(u, o, r)) : void 0 !== r && (s[t] = r));
		return s
	}, C.extend({
		expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, n;
			return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = w.call(t, "constructor") && t.constructor) && s.call(n) === u)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function(e) {
			y(e)
		},
		each: function(e, t) {
			var n, r = 0;
			if (f(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
			else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(h, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (f(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : i.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)!t(e[i], i) !== s && r.push(e[i]);
			return r
		},
		map: function(e, t, n) {
			var r, i, o = 0,
				s = [];
			if (f(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
			else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
			return m.apply([], s)
		},
		guid: 1,
		support: g
	}), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var p = function(n) {
			var e, f, y, o, i, p, d, m, _, c, u, k, x, s, z, w, a, l, g, C = "sizzle" + 1 * new Date,
				v = n.document,
				S = 0,
				r = 0,
				h = se(),
				b = se(),
				M = se(),
				T = function(e, t) {
					return e === t && (u = !0), 0
				},
				j = {}.hasOwnProperty,
				t = [],
				q = t.pop,
				E = t.push,
				A = t.push,
				P = t.slice,
				N = function(e, t) {
					for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
					return -1
				},
				F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				L = "[\\x20\\t\\r\\n\\f]",
				H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
				D = "\\[" + L + "*(" + H + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + L + "*\\]",
				B = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + D + ")*)|.*)\\)|)",
				I = new RegExp(L + "+", "g"),
				O = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
				W = new RegExp("^" + L + "*," + L + "*"),
				$ = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
				R = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
				V = new RegExp(B),
				U = new RegExp("^" + H + "$"),
				X = {
					ID: new RegExp("^#(" + H + ")"),
					CLASS: new RegExp("^\\.(" + H + ")"),
					TAG: new RegExp("^(" + H + "|[*])"),
					ATTR: new RegExp("^" + D),
					PSEUDO: new RegExp("^" + B),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + F + ")$", "i"),
					needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
				},
				J = /^(?:input|select|textarea|button)$/i,
				Y = /^h\d$/i,
				G = /^[^{]+\{\s*\[native \w/,
				Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				Q = /[+~]/,
				K = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
				ee = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
				},
				te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				ne = function(e, t) {
					return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
				},
				re = function() {
					k()
				},
				ie = ve(function(e) {
					return !0 === e.disabled && ("form" in e || "label" in e)
				}, {
					dir: "parentNode",
					next: "legend"
				});
			try {
				A.apply(t = P.call(v.childNodes), v.childNodes), t[v.childNodes.length].nodeType
			} catch (e) {
				A = {
					apply: t.length ?
					function(e, t) {
						E.apply(e, P.call(t))
					} : function(e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}
			function oe(e, t, n, r) {
				var i, o, s, a, c, u, l, d = t && t.ownerDocument,
					h = t ? t.nodeType : 9;
				if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
				if (!r && ((t ? t.ownerDocument || t : v) !== x && k(t), t = t || x, z)) {
					if (11 !== h && (c = Z.exec(e))) if (i = c[1]) {
						if (9 === h) {
							if (!(s = t.getElementById(i))) return n;
							if (s.id === i) return n.push(s), n
						} else if (d && (s = d.getElementById(i)) && g(t, s) && s.id === i) return n.push(s), n
					} else {
						if (c[2]) return A.apply(n, t.getElementsByTagName(e)), n;
						if ((i = c[3]) && f.getElementsByClassName && t.getElementsByClassName) return A.apply(n, t.getElementsByClassName(i)), n
					}
					if (f.qsa && !M[e + " "] && (!w || !w.test(e))) {
						if (1 !== h) d = t, l = e;
						else if ("object" !== t.nodeName.toLowerCase()) {
							for ((a = t.getAttribute("id")) ? a = a.replace(te, ne) : t.setAttribute("id", a = C), o = (u = p(e)).length; o--;) u[o] = "#" + a + " " + ge(u[o]);
							l = u.join(","), d = Q.test(e) && me(t.parentNode) || t
						}
						if (l) try {
							return A.apply(n, d.querySelectorAll(l)), n
						} catch (e) {} finally {
							a === C && t.removeAttribute("id")
						}
					}
				}
				return m(e.replace(O, "$1"), t, n, r)
			}
			function se() {
				var r = [];
				return function e(t, n) {
					return r.push(t + " ") > y.cacheLength && delete e[r.shift()], e[t + " "] = n
				}
			}
			function ae(e) {
				return e[C] = !0, e
			}
			function ce(e) {
				var t = x.createElement("fieldset");
				try {
					return !!e(t)
				} catch (e) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}
			function ue(e, t) {
				for (var n = e.split("|"), r = n.length; r--;) y.attrHandle[n[r]] = t
			}
			function le(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
				if (r) return r;
				if (n) for (; n = n.nextSibling;) if (n === t) return -1;
				return e ? 1 : -1
			}
			function de(t) {
				return function(e) {
					return "input" === e.nodeName.toLowerCase() && e.type === t
				}
			}
			function he(n) {
				return function(e) {
					var t = e.nodeName.toLowerCase();
					return ("input" === t || "button" === t) && e.type === n
				}
			}
			function fe(t) {
				return function(e) {
					return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label" in e && e.disabled === t
				}
			}
			function pe(s) {
				return ae(function(o) {
					return o = +o, ae(function(e, t) {
						for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
					})
				})
			}
			function me(e) {
				return e && void 0 !== e.getElementsByTagName && e
			}
			for (e in f = oe.support = {}, i = oe.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, k = oe.setDocument = function(e) {
				var t, n, r = e ? e.ownerDocument || e : v;
				return r !== x && 9 === r.nodeType && r.documentElement && (s = (x = r).documentElement, z = !i(x), v !== x && (n = x.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), f.attributes = ce(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), f.getElementsByTagName = ce(function(e) {
					return e.appendChild(x.createComment("")), !e.getElementsByTagName("*").length
				}), f.getElementsByClassName = G.test(x.getElementsByClassName), f.getById = ce(function(e) {
					return s.appendChild(e).id = C, !x.getElementsByName || !x.getElementsByName(C).length
				}), f.getById ? (y.filter.ID = function(e) {
					var t = e.replace(K, ee);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}, y.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && z) {
						var n = t.getElementById(e);
						return n ? [n] : []
					}
				}) : (y.filter.ID = function(e) {
					var n = e.replace(K, ee);
					return function(e) {
						var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
						return t && t.value === n
					}
				}, y.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && z) {
						var n, r, i, o = t.getElementById(e);
						if (o) {
							if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
							for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
						}
						return []
					}
				}), y.find.TAG = f.getElementsByTagName ?
				function(e, t) {
					return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = o[i++];) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, y.find.CLASS = f.getElementsByClassName &&
				function(e, t) {
					if (void 0 !== t.getElementsByClassName && z) return t.getElementsByClassName(e)
				}, a = [], w = [], (f.qsa = G.test(x.querySelectorAll)) && (ce(function(e) {
					s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && w.push("[*^$]=" + L + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || w.push("\\[" + L + "*(?:value|" + F + ")"), e.querySelectorAll("[id~=" + C + "-]").length || w.push("~="), e.querySelectorAll(":checked").length || w.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || w.push(".#.+[+~]")
				}), ce(function(e) {
					e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var t = x.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && w.push("name" + L + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && w.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && w.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), w.push(",.*:")
				})), (f.matchesSelector = G.test(l = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ce(function(e) {
					f.disconnectedMatch = l.call(e, "*"), l.call(e, "[s!='']:x"), a.push("!=", B)
				}), w = w.length && new RegExp(w.join("|")), a = a.length && new RegExp(a.join("|")), t = G.test(s.compareDocumentPosition), g = t || G.test(s.contains) ?
				function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t) for (; t = t.parentNode;) if (t === e) return !0;
					return !1
				}, T = t ?
				function(e, t) {
					if (e === t) return u = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === x || e.ownerDocument === v && g(v, e) ? -1 : t === x || t.ownerDocument === v && g(v, t) ? 1 : c ? N(c, e) - N(c, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return u = !0, 0;
					var n, r = 0,
						i = e.parentNode,
						o = t.parentNode,
						s = [e],
						a = [t];
					if (!i || !o) return e === x ? -1 : t === x ? 1 : i ? -1 : o ? 1 : c ? N(c, e) - N(c, t) : 0;
					if (i === o) return le(e, t);
					for (n = e; n = n.parentNode;) s.unshift(n);
					for (n = t; n = n.parentNode;) a.unshift(n);
					for (; s[r] === a[r];) r++;
					return r ? le(s[r], a[r]) : s[r] === v ? -1 : a[r] === v ? 1 : 0
				}), x
			}, oe.matches = function(e, t) {
				return oe(e, null, null, t)
			}, oe.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== x && k(e), t = t.replace(R, "='$1']"), f.matchesSelector && z && !M[t + " "] && (!a || !a.test(t)) && (!w || !w.test(t))) try {
					var n = l.call(e, t);
					if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {}
				return 0 < oe(t, x, null, [e]).length
			}, oe.contains = function(e, t) {
				return (e.ownerDocument || e) !== x && k(e), g(e, t)
			}, oe.attr = function(e, t) {
				(e.ownerDocument || e) !== x && k(e);
				var n = y.attrHandle[t.toLowerCase()],
					r = n && j.call(y.attrHandle, t.toLowerCase()) ? n(e, t, !z) : void 0;
				return void 0 !== r ? r : f.attributes || !z ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}, oe.escape = function(e) {
				return (e + "").replace(te, ne)
			}, oe.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, oe.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (u = !f.detectDuplicates, c = !f.sortStable && e.slice(0), e.sort(T), u) {
					for (; t = e[i++];) t === e[i] && (r = n.push(i));
					for (; r--;) e.splice(n[r], 1)
				}
				return c = null, e
			}, o = oe.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else for (; t = e[r++];) n += o(t);
				return n
			}, (y = oe.selectors = {
				cacheLength: 50,
				createPseudo: ae,
				match: X,
				attrHandle: {},
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
					ATTR: function(e) {
						return e[1] = e[1].replace(K, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(K, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(K, ee).toLowerCase();
						return "*" === e ?
						function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = h[e + " "];
						return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && h(e, function(e) {
							return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(n, r, i) {
						return function(e) {
							var t = oe.attr(e, n);
							return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(I, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function(p, e, t, m, w) {
						var g = "nth" !== p.slice(0, 3),
							v = "last" !== p.slice(-4),
							b = "of-type" === e;
						return 1 === m && 0 === w ?
						function(e) {
							return !!e.parentNode
						} : function(e, t, n) {
							var r, i, o, s, a, c, u = g !== v ? "nextSibling" : "previousSibling",
								l = e.parentNode,
								d = b && e.nodeName.toLowerCase(),
								h = !n && !b,
								f = !1;
							if (l) {
								if (g) {
									for (; u;) {
										for (s = e; s = s[u];) if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
										c = u = "only" === p && !c && "nextSibling"
									}
									return !0
								}
								if (c = [v ? l.firstChild : l.lastChild], v && h) {
									for (f = (a = (r = (i = (o = (s = l)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && r[1]) && r[2], s = a && l.childNodes[a]; s = ++a && s && s[u] || (f = a = 0) || c.pop();) if (1 === s.nodeType && ++f && s === e) {
										i[p] = [S, a, f];
										break
									}
								} else if (h && (f = a = (r = (i = (o = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && r[1]), !1 === f) for (;
								(s = ++a && s && s[u] || (f = a = 0) || c.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++f || (h && ((i = (o = s[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [S, f]), s !== e)););
								return (f -= w) === m || f % m == 0 && 0 <= f / m
							}
						}
					},
					PSEUDO: function(e, o) {
						var t, s = y.pseudos[e] || y.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
						return s[C] ? s(o) : 1 < s.length ? (t = [e, e, "", o], y.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
							for (var n, r = s(e, o), i = r.length; i--;) e[n = N(e, r[i])] = !(t[n] = r[i])
						}) : function(e) {
							return s(e, 0, t)
						}) : s
					}
				},
				pseudos: {
					not: ae(function(e) {
						var r = [],
							i = [],
							a = d(e.replace(O, "$1"));
						return a[C] ? ae(function(e, t, n, r) {
							for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
						}) : function(e, t, n) {
							return r[0] = e, a(r, null, n, i), r[0] = null, !i.pop()
						}
					}),
					has: ae(function(t) {
						return function(e) {
							return 0 < oe(t, e).length
						}
					}),
					contains: ae(function(t) {
						return t = t.replace(K, ee), function(e) {
							return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
						}
					}),
					lang: ae(function(n) {
						return U.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(K, ee).toLowerCase(), function(e) {
							var t;
							do {
								if (t = z ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
							} while ((e = e.parentNode) && 1 === e.nodeType);
							return !1
						}
					}),
					target: function(e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function(e) {
						return e === s
					},
					focus: function(e) {
						return e === x.activeElement && (!x.hasFocus || x.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
					},
					enabled: fe(!1),
					disabled: fe(!0),
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !! e.checked || "option" === t && !! e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !y.pseudos.empty(e)
					},
					header: function(e) {
						return Y.test(e.nodeName)
					},
					input: function(e) {
						return J.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: pe(function() {
						return [0]
					}),
					last: pe(function(e, t) {
						return [t - 1]
					}),
					eq: pe(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: pe(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: pe(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: pe(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
						return e
					}),
					gt: pe(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}).pseudos.nth = y.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) y.pseudos[e] = de(e);
			for (e in {
				submit: !0,
				reset: !0
			}) y.pseudos[e] = he(e);

			function we() {}
			function ge(e) {
				for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
				return r
			}
			function ve(a, e, t) {
				var c = e.dir,
					u = e.next,
					l = u || c,
					d = t && "parentNode" === l,
					h = r++;
				return e.first ?
				function(e, t, n) {
					for (; e = e[c];) if (1 === e.nodeType || d) return a(e, t, n);
					return !1
				} : function(e, t, n) {
					var r, i, o, s = [S, h];
					if (n) {
						for (; e = e[c];) if ((1 === e.nodeType || d) && a(e, t, n)) return !0
					} else for (; e = e[c];) if (1 === e.nodeType || d) if (i = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[c] || e;
					else {
						if ((r = i[l]) && r[0] === S && r[1] === h) return s[2] = r[2];
						if ((i[l] = s)[2] = a(e, t, n)) return !0
					}
					return !1
				}
			}
			function be(i) {
				return 1 < i.length ?
				function(e, t, n) {
					for (var r = i.length; r--;) if (!i[r](e, t, n)) return !1;
					return !0
				} : i[0]
			}
			function ye(e, t, n, r, i) {
				for (var o, s = [], a = 0, c = e.length, u = null != t; a < c; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), u && t.push(a)));
				return s
			}
			function _e(f, p, m, w, g, e) {
				return w && !w[C] && (w = _e(w)), g && !g[C] && (g = _e(g, e)), ae(function(e, t, n, r) {
					var i, o, s, a = [],
						c = [],
						u = t.length,
						l = e ||
					function(e, t, n) {
						for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
						return n
					}(p || "*", n.nodeType ? [n] : n, []), d = !f || !e && p ? l : ye(l, a, f, n, r), h = m ? g || (e ? f : u || w) ? [] : t : d;
					if (m && m(d, h, n, r), w) for (i = ye(h, c), w(i, [], n, r), o = i.length; o--;)(s = i[o]) && (h[c[o]] = !(d[c[o]] = s));
					if (e) {
						if (g || f) {
							if (g) {
								for (i = [], o = h.length; o--;)(s = h[o]) && i.push(d[o] = s);
								g(null, h = [], i, r)
							}
							for (o = h.length; o--;)(s = h[o]) && -1 < (i = g ? N(e, s) : a[o]) && (e[i] = !(t[i] = s))
						}
					} else h = ye(h === t ? h.splice(u, h.length) : h), g ? g(null, t, h, r) : A.apply(t, h)
				})
			}
			function ke(e) {
				for (var i, t, n, r = e.length, o = y.relative[e[0].type], s = o || y.relative[" "], a = o ? 1 : 0, c = ve(function(e) {
					return e === i
				}, s, !0), u = ve(function(e) {
					return -1 < N(i, e)
				}, s, !0), l = [function(e, t, n) {
					var r = !o && (n || t !== _) || ((i = t).nodeType ? c(e, t, n) : u(e, t, n));
					return i = null, r
				}]; a < r; a++) if (t = y.relative[e[a].type]) l = [ve(be(l), t)];
				else {
					if ((t = y.filter[e[a].type].apply(null, e[a].matches))[C]) {
						for (n = ++a; n < r && !y.relative[e[n].type]; n++);
						return _e(1 < a && be(l), 1 < a && ge(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(O, "$1"), t, a < n && ke(e.slice(a, n)), n < r && ke(e = e.slice(n)), n < r && ge(e))
					}
					l.push(t)
				}
				return be(l)
			}
			return we.prototype = y.filters = y.pseudos, y.setFilters = new we, p = oe.tokenize = function(e, t) {
				var n, r, i, o, s, a, c, u = b[e + " "];
				if (u) return t ? 0 : u.slice(0);
				for (s = e, a = [], c = y.preFilter; s;) {
					for (o in n && !(r = W.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = $.exec(s)) && (n = r.shift(), i.push({
						value: n,
						type: r[0].replace(O, " ")
					}), s = s.slice(n.length)), y.filter)!(r = X[o].exec(s)) || c[o] && !(r = c[o](r)) || (n = r.shift(), i.push({
						value: n,
						type: o,
						matches: r
					}), s = s.slice(n.length));
					if (!n) break
				}
				return t ? s.length : s ? oe.error(e) : b(e, a).slice(0)
			}, d = oe.compile = function(e, t) {
				var n, w, g, v, b, r, i = [],
					o = [],
					s = M[e + " "];
				if (!s) {
					for (t || (t = p(e)), n = t.length; n--;)(s = ke(t[n]))[C] ? i.push(s) : o.push(s);
					(s = M(e, (w = o, v = 0 < (g = i).length, b = 0 < w.length, r = function(e, t, n, r, i) {
						var o, s, a, c = 0,
							u = "0",
							l = e && [],
							d = [],
							h = _,
							f = e || b && y.find.TAG("*", i),
							p = S += null == h ? 1 : Math.random() || .1,
							m = f.length;
						for (i && (_ = t === x || t || i); u !== m && null != (o = f[u]); u++) {
							if (b && o) {
								for (s = 0, t || o.ownerDocument === x || (k(o), n = !z); a = w[s++];) if (a(o, t || x, n)) {
									r.push(o);
									break
								}
								i && (S = p)
							}
							v && ((o = !a && o) && c--, e && l.push(o))
						}
						if (c += u, v && u !== c) {
							for (s = 0; a = g[s++];) a(l, d, t, n);
							if (e) {
								if (0 < c) for (; u--;) l[u] || d[u] || (d[u] = q.call(r));
								d = ye(d)
							}
							A.apply(r, d), i && !e && 0 < d.length && 1 < c + g.length && oe.uniqueSort(r)
						}
						return i && (S = p, _ = h), l
					}, v ? ae(r) : r))).selector = e
				}
				return s
			}, m = oe.select = function(e, t, n, r) {
				var i, o, s, a, c, u = "function" == typeof e && e,
					l = !r && p(e = u.selector || e);
				if (n = n || [], 1 === l.length) {
					if (2 < (o = l[0] = l[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && z && y.relative[o[1].type]) {
						if (!(t = (y.find.ID(s.matches[0].replace(K, ee), t) || [])[0])) return n;
						u && (t = t.parentNode), e = e.slice(o.shift().value.length)
					}
					for (i = X.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !y.relative[a = s.type]);) if ((c = y.find[a]) && (r = c(s.matches[0].replace(K, ee), Q.test(o[0].type) && me(t.parentNode) || t))) {
						if (o.splice(i, 1), !(e = r.length && ge(o))) return A.apply(n, r), n;
						break
					}
				}
				return (u || d(e, l))(r, t, !z, n, !t || Q.test(e) && me(t.parentNode) || t), n
			}, f.sortStable = C.split("").sort(T).join("") === C, f.detectDuplicates = !! u, k(), f.sortDetached = ce(function(e) {
				return 1 & e.compareDocumentPosition(x.createElement("fieldset"))
			}), ce(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || ue("type|href|height|width", function(e, t, n) {
				if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), f.attributes && ce(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || ue("value", function(e, t, n) {
				if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
			}), ce(function(e) {
				return null == e.getAttribute("disabled")
			}) || ue(F, function(e, t, n) {
				var r;
				if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}), oe
		}(x);
	C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = p.uniqueSort, C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains, C.escapeSelector = p.escape;
	var k = function(e, t, n) {
			for (var r = [], i = void 0 !== n;
			(e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
				if (i && C(e).is(n)) break;
				r.push(e)
			}
			return r
		},
		S = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		M = C.expr.match.needsContext;

	function T(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function q(e, n, r) {
		return v(n) ? C.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== r
		}) : n.nodeType ? C.grep(e, function(e) {
			return e === n !== r
		}) : "string" != typeof n ? C.grep(e, function(e) {
			return -1 < i.call(n, e) !== r
		}) : C.filter(n, e, r)
	}
	C.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, C.fn.extend({
		find: function(e) {
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
				for (t = 0; t < r; t++) if (C.contains(i[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
			return 1 < r ? C.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(q(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(q(this, e || [], !0))
		},
		is: function(e) {
			return !!q(this, "string" == typeof e && M.test(e) ? C(e) : e || [], !1).length
		}
	});
	var E, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(C.fn.init = function(e, t, n) {
		var r, i;
		if (!e) return this;
		if (n = n || E, "string" == typeof e) {
			if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : A.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (r[1]) {
				if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : z, !0)), j.test(r[1]) && C.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this
			}
			return (i = z.getElementById(r[2])) && (this[0] = i, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
	}).prototype = C.fn, E = C(z);
	var P = /^(?:parents|prev(?:Until|All))/,
		N = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function F(e, t) {
		for (;
		(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	C.fn.extend({
		has: function(e) {
			var t = C(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				s = "string" != typeof e && C(e);
			if (!M.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
				o.push(n);
				break
			}
			return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? i.call(C(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), C.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return k(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return k(e, "parentNode", n)
		},
		next: function(e) {
			return F(e, "nextSibling")
		},
		prev: function(e) {
			return F(e, "previousSibling")
		},
		nextAll: function(e) {
			return k(e, "nextSibling")
		},
		prevAll: function(e) {
			return k(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return k(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return k(e, "previousSibling", n)
		},
		siblings: function(e) {
			return S((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return S(e.firstChild)
		},
		contents: function(e) {
			return T(e, "iframe") ? e.contentDocument : (T(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
		}
	}, function(r, i) {
		C.fn[r] = function(e, t) {
			var n = C.map(this, i, e);
			return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (N[r] || C.uniqueSort(n), P.test(r) && n.reverse()), this.pushStack(n)
		}
	});
	var L = /[^\x20\t\r\n\f]+/g;

	function H(e) {
		return e
	}
	function D(e) {
		throw e
	}
	function B(e, t, n, r) {
		var i;
		try {
			e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	C.Callbacks = function(r) {
		var e, n;
		r = "string" == typeof r ? (e = r, n = {}, C.each(e.match(L) || [], function(e, t) {
			n[t] = !0
		}), n) : C.extend({}, r);
		var i, t, o, s, a = [],
			c = [],
			u = -1,
			l = function() {
				for (s = s || r.once, o = i = !0; c.length; u = -1) for (t = c.shift(); ++u < a.length;)!1 === a[u].apply(t[0], t[1]) && r.stopOnFalse && (u = a.length, t = !1);
				r.memory || (t = !1), i = !1, s && (a = t ? [] : "")
			},
			d = {
				add: function() {
					return a && (t && !i && (u = a.length - 1, c.push(t)), function n(e) {
						C.each(e, function(e, t) {
							v(t) ? r.unique && d.has(t) || a.push(t) : t && t.length && "string" !== _(t) && n(t)
						})
					}(arguments), t && !i && l()), this
				},
				remove: function() {
					return C.each(arguments, function(e, t) {
						for (var n; - 1 < (n = C.inArray(t, a, n));) a.splice(n, 1), n <= u && u--
					}), this
				},
				has: function(e) {
					return e ? -1 < C.inArray(e, a) : 0 < a.length
				},
				empty: function() {
					return a && (a = []), this
				},
				disable: function() {
					return s = c = [], a = t = "", this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					return s = c = [], t || i || (a = t = ""), this
				},
				locked: function() {
					return !!s
				},
				fireWith: function(e, t) {
					return s || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), i || l()), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return d
	}, C.extend({
		Deferred: function(e) {
			var o = [
				["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
				["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
				["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
			],
				i = "pending",
				s = {
					state: function() {
						return i
					},
					always: function() {
						return a.done(arguments).fail(arguments), this
					},
					catch: function(e) {
						return s.then(null, e)
					},
					pipe: function() {
						var i = arguments;
						return C.Deferred(function(r) {
							C.each(o, function(e, t) {
								var n = v(i[t[4]]) && i[t[4]];
								a[t[1]](function() {
									var e = n && n.apply(this, arguments);
									e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
								})
							}), i = null
						}).promise()
					},
					then: function(t, n, r) {
						var c = 0;

						function u(i, o, s, a) {
							return function() {
								var n = this,
									r = arguments,
									e = function() {
										var e, t;
										if (!(i < c)) {
											if ((e = s.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
											t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? a ? t.call(e, u(c, o, H, a), u(c, o, D, a)) : (c++, t.call(e, u(c, o, H, a), u(c, o, D, a), u(c, o, H, o.notifyWith))) : (s !== H && (n = void 0, r = [e]), (a || o.resolveWith)(n, r))
										}
									},
									t = a ? e : function() {
										try {
											e()
										} catch (e) {
											C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), c <= i + 1 && (s !== D && (n = void 0, r = [e]), o.rejectWith(n, r))
										}
									};
								i ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), x.setTimeout(t))
							}
						}
						return C.Deferred(function(e) {
							o[0][3].add(u(0, e, v(r) ? r : H, e.notifyWith)), o[1][3].add(u(0, e, v(t) ? t : H)), o[2][3].add(u(0, e, v(n) ? n : D))
						}).promise()
					},
					promise: function(e) {
						return null != e ? C.extend(e, s) : s
					}
				},
				a = {};
			return C.each(o, function(e, t) {
				var n = t[2],
					r = t[5];
				s[t[1]] = n.add, r && n.add(function() {
					i = r
				}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
					return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
				}, a[t[0] + "With"] = n.fireWith
			}), s.promise(a), e && e.call(a, a), a
		},
		when: function(e) {
			var n = arguments.length,
				t = n,
				r = Array(t),
				i = a.call(arguments),
				o = C.Deferred(),
				s = function(t) {
					return function(e) {
						r[t] = this, i[t] = 1 < arguments.length ? a.call(arguments) : e, --n || o.resolveWith(r, i)
					}
				};
			if (n <= 1 && (B(e, o.done(s(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
			for (; t--;) B(i[t], s(t), o.reject);
			return o.promise()
		}
	});
	var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	C.Deferred.exceptionHook = function(e, t) {
		x.console && x.console.warn && e && I.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, C.readyException = function(e) {
		x.setTimeout(function() {
			throw e
		})
	};
	var O = C.Deferred();

	function W() {
		z.removeEventListener("DOMContentLoaded", W), x.removeEventListener("load", W), C.ready()
	}
	C.fn.ready = function(e) {
		return O.then(e).
		catch (function(e) {
			C.readyException(e)
		}), this
	}, C.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || O.resolveWith(z, [C])
		}
	}), C.ready.then = O.then, "complete" === z.readyState || "loading" !== z.readyState && !z.documentElement.doScroll ? x.setTimeout(C.ready) : (z.addEventListener("DOMContentLoaded", W), x.addEventListener("load", W));
	var $ = function(e, t, n, r, i, o, s) {
			var a = 0,
				c = e.length,
				u = null == n;
			if ("object" === _(n)) for (a in i = !0, n) $(e, t, a, n[a], !0, o, s);
			else if (void 0 !== r && (i = !0, v(r) || (s = !0), u && (s ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
				return u.call(C(e), n)
			})), t)) for (; a < c; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
			return i ? e : u ? t.call(e) : c ? t(e[0], n) : o
		},
		R = /^-ms-/,
		V = /-([a-z])/g;

	function U(e, t) {
		return t.toUpperCase()
	}
	function X(e) {
		return e.replace(R, "ms-").replace(V, U)
	}
	var J = function(e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};

	function Y() {
		this.expando = C.expando + Y.uid++
	}
	Y.uid = 1, Y.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[X(t)] = n;
			else for (r in t) i[X(r)] = t[r];
			return i
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(L) || []).length;
					for (; n--;) delete r[t[n]]
				}(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !C.isEmptyObject(t)
		}
	};
	var G = new Y,
		Z = new Y,
		Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		K = /[A-Z]/g;

	function ee(e, t, n) {
		var r, i;
		if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
			try {
				n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Q.test(i) ? JSON.parse(i) : i)
			} catch (e) {}
			Z.set(e, t, n)
		} else n = void 0;
		return n
	}
	C.extend({
		hasData: function(e) {
			return Z.hasData(e) || G.hasData(e)
		},
		data: function(e, t, n) {
			return Z.access(e, t, n)
		},
		removeData: function(e, t) {
			Z.remove(e, t)
		},
		_data: function(e, t, n) {
			return G.access(e, t, n)
		},
		_removeData: function(e, t) {
			G.remove(e, t)
		}
	}), C.fn.extend({
		data: function(n, e) {
			var t, r, i, o = this[0],
				s = o && o.attributes;
			if (void 0 === n) {
				if (this.length && (i = Z.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
					for (t = s.length; t--;) s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = X(r.slice(5)), ee(o, r, i[r]));
					G.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof n ? this.each(function() {
				Z.set(this, n)
			}) : $(this, function(e) {
				var t;
				if (o && void 0 === e) return void 0 !== (t = Z.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
				this.each(function() {
					Z.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				Z.remove(this, e)
			})
		}
	}), C.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = G.get(e, t), n && (!r || Array.isArray(n) ? r = G.access(e, t, C.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = C.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = C._queueHooks(e, t);
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
				C.dequeue(e, t)
			}, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return G.get(e, n) || G.access(e, n, {
				empty: C.Callbacks("once memory").add(function() {
					G.remove(e, [t + "queue", n])
				})
			})
		}
	}), C.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
				var e = C.queue(this, t, n);
				C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				C.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = C.Deferred(),
				o = this,
				s = this.length,
				a = function() {
					--r || i.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = G.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
			return a(), i.promise(t)
		}
	});
	var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
		re = ["Top", "Right", "Bottom", "Left"],
		ie = function(e, t) {
			return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
		},
		oe = function(e, t, n, r) {
			var i, o, s = {};
			for (o in t) s[o] = e.style[o], e.style[o] = t[o];
			for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
			return i
		};

	function se(e, t, n, r) {
		var i, o, s = 20,
			a = r ?
		function() {
			return r.cur()
		} : function() {
			return C.css(e, t, "")
		}, c = a(), u = n && n[3] || (C.cssNumber[t] ? "" : "px"), l = (C.cssNumber[t] || "px" !== u && +c) && ne.exec(C.css(e, t));
		if (l && l[3] !== u) {
			for (c /= 2, u = u || l[3], l = +c || 1; s--;) C.style(e, t, l + u), (1 - o) * (1 - (o = a() / c || .5)) <= 0 && (s = 0), l /= o;
			l *= 2, C.style(e, t, l + u), n = n || []
		}
		return n && (l = +l || +c || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = l, r.end = i)), i
	}
	var ae = {};

	function ce(e, t) {
		for (var n, r, i, o, s, a, c, u = [], l = 0, d = e.length; l < d; l++)(r = e[l]).style && (n = r.style.display, t ? ("none" === n && (u[l] = G.get(r, "display") || null, u[l] || (r.style.display = "")), "" === r.style.display && ie(r) && (u[l] = (c = s = o = void 0, s = (i = r).ownerDocument, a = i.nodeName, (c = ae[a]) || (o = s.body.appendChild(s.createElement(a)), c = C.css(o, "display"), o.parentNode.removeChild(o), "none" === c && (c = "block"), ae[a] = c)))) : "none" !== n && (u[l] = "none", G.set(r, "display", n)));
		for (l = 0; l < d; l++) null != u[l] && (e[l].style.display = u[l]);
		return e
	}
	C.fn.extend({
		show: function() {
			return ce(this, !0)
		},
		hide: function() {
			return ce(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				ie(this) ? C(this).show() : C(this).hide()
			})
		}
	});
	var ue = /^(?:checkbox|radio)$/i,
		le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		de = /^$|^module$|\/(?:java|ecma)script/i,
		he = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function fe(e, t) {
		var n;
		return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && T(e, t) ? C.merge([e], n) : n
	}
	function pe(e, t) {
		for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
	}
	he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
	var me, we, ge = /<|&#?\w+;/;

	function ve(e, t, n, r, i) {
		for (var o, s, a, c, u, l, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) if ((o = e[f]) || 0 === o) if ("object" === _(o)) C.merge(h, o.nodeType ? [o] : o);
		else if (ge.test(o)) {
			for (s = s || d.appendChild(t.createElement("div")), a = (le.exec(o) || ["", ""])[1].toLowerCase(), c = he[a] || he._default, s.innerHTML = c[1] + C.htmlPrefilter(o) + c[2], l = c[0]; l--;) s = s.lastChild;
			C.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
		} else h.push(t.createTextNode(o));
		for (d.textContent = "", f = 0; o = h[f++];) if (r && -1 < C.inArray(o, r)) i && i.push(o);
		else if (u = C.contains(o.ownerDocument, o), s = fe(d.appendChild(o), "script"), u && pe(s), n) for (l = 0; o = s[l++];) de.test(o.type || "") && n.push(o);
		return d
	}
	me = z.createDocumentFragment().appendChild(z.createElement("div")), (we = z.createElement("input")).setAttribute("type", "radio"), we.setAttribute("checked", "checked"), we.setAttribute("name", "t"), me.appendChild(we), g.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !! me.cloneNode(!0).lastChild.defaultValue;
	var be = z.documentElement,
		ye = /^key/,
		_e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		ke = /^([^.]*)(?:\.(.+)|)/;

	function xe() {
		return !0
	}
	function ze() {
		return !1
	}
	function Ce() {
		try {
			return z.activeElement
		} catch (e) {}
	}
	function Se(e, t, n, r, i, o) {
		var s, a;
		if ("object" == typeof t) {
			for (a in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, a, n, r, t[a], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ze;
		else if (!i) return e;
		return 1 === o && (s = i, (i = function(e) {
			return C().off(e), s.apply(this, arguments)
		}).guid = s.guid || (s.guid = C.guid++)), e.each(function() {
			C.event.add(this, t, i, r, n)
		})
	}
	C.event = {
		global: {},
		add: function(t, e, n, r, i) {
			var o, s, a, c, u, l, d, h, f, p, m, w = G.get(t);
			if (w) for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(be, i), n.guid || (n.guid = C.guid++), (c = w.events) || (c = w.events = {}), (s = w.handle) || (s = w.handle = function(e) {
				return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
			}), u = (e = (e || "").match(L) || [""]).length; u--;) f = m = (a = ke.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = C.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, d = C.event.special[f] || {}, l = C.extend({
				type: f,
				origType: m,
				data: r,
				handler: n,
				guid: n.guid,
				selector: i,
				needsContext: i && C.expr.match.needsContext.test(i),
				namespace: p.join(".")
			}, o), (h = c[f]) || ((h = c[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, r, p, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, l) : h.push(l), C.event.global[f] = !0)
		},
		remove: function(e, t, n, r, i) {
			var o, s, a, c, u, l, d, h, f, p, m, w = G.hasData(e) && G.get(e);
			if (w && (c = w.events)) {
				for (u = (t = (t || "").match(L) || [""]).length; u--;) if (f = m = (a = ke.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
					for (d = C.event.special[f] || {}, h = c[f = (r ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) l = h[o], !i && m !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (h.splice(o, 1), l.selector && h.delegateCount--, d.remove && d.remove.call(e, l));
					s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, w.handle) || C.removeEvent(e, f, w.handle), delete c[f])
				} else for (f in c) C.event.remove(e, f + t[u], n, r, !0);
				C.isEmptyObject(c) && G.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, r, i, o, s, a = C.event.fix(e),
				c = new Array(arguments.length),
				u = (G.get(this, "events") || {})[a.type] || [],
				l = C.event.special[a.type] || {};
			for (c[0] = a, t = 1; t < arguments.length; t++) c[t] = arguments[t];
			if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
				for (s = C.event.handlers.call(this, a, u), t = 0;
				(i = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = i.elem, n = 0;
				(o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, c)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, s, a = [],
				c = t.delegateCount,
				u = e.target;
			if (c && u.nodeType && !("click" === e.type && 1 <= e.button)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
				for (o = [], s = {}, n = 0; n < c; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? -1 < C(i, this).index(u) : C.find(i, this, null, [u]).length), s[i] && o.push(r);
				o.length && a.push({
					elem: u,
					handlers: o
				})
			}
			return u = this, c < t.length && a.push({
				elem: u,
				handlers: t.slice(c)
			}), a
		},
		addProp: function(t, e) {
			Object.defineProperty(C.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: v(e) ?
				function() {
					if (this.originalEvent) return e(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function(e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function(e) {
			return e[C.expando] ? e : new C.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== Ce() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === Ce() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if ("checkbox" === this.type && this.click && T(this, "input")) return this.click(), !1
				},
				_default: function(e) {
					return T(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, C.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, C.Event = function(e, t) {
		if (!(this instanceof C.Event)) return new C.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : ze, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
	}, C.Event.prototype = {
		constructor: C.Event,
		isDefaultPrevented: ze,
		isPropagationStopped: ze,
		isImmediatePropagationStopped: ze,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, C.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(e) {
			var t = e.button;
			return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && _e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, C.event.addProp), C.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, i) {
		C.event.special[e] = {
			delegateType: i,
			bindType: i,
			handle: function(e) {
				var t, n = e.relatedTarget,
					r = e.handleObj;
				return n && (n === this || C.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
			}
		}
	}), C.fn.extend({
		on: function(e, t, n, r) {
			return Se(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return Se(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ze), this.each(function() {
				C.event.remove(this, e, n, t)
			})
		}
	});
	var Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Te = /<script|<style|<link/i,
		je = /checked\s*(?:[^=]|=\s*.checked.)/i,
		qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Ee(e, t) {
		return T(e, "table") && T(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
	}
	function Ae(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}
	function Pe(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}
	function Ne(e, t) {
		var n, r, i, o, s, a, c, u;
		if (1 === t.nodeType) {
			if (G.hasData(e) && (o = G.access(e), s = G.set(t, o), u = o.events)) for (i in delete s.handle, s.events = {}, u) for (n = 0, r = u[i].length; n < r; n++) C.event.add(t, i, u[i][n]);
			Z.hasData(e) && (a = Z.access(e), c = C.extend({}, a), Z.set(t, c))
		}
	}
	function Fe(n, r, i, o) {
		r = m.apply([], r);
		var e, t, s, a, c, u, l = 0,
			d = n.length,
			h = d - 1,
			f = r[0],
			p = v(f);
		if (p || 1 < d && "string" == typeof f && !g.checkClone && je.test(f)) return n.each(function(e) {
			var t = n.eq(e);
			p && (r[0] = f.call(this, e, t.html())), Fe(t, r, i, o)
		});
		if (d && (t = (e = ve(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
			for (a = (s = C.map(fe(e, "script"), Ae)).length; l < d; l++) c = e, l !== h && (c = C.clone(c, !0, !0), a && C.merge(s, fe(c, "script"))), i.call(n[l], c, l);
			if (a) for (u = s[s.length - 1].ownerDocument, C.map(s, Pe), l = 0; l < a; l++) c = s[l], de.test(c.type || "") && !G.access(c, "globalEval") && C.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(c.src) : y(c.textContent.replace(qe, ""), u, c))
		}
		return n
	}
	function Le(e, t, n) {
		for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(fe(r)), r.parentNode && (n && C.contains(r.ownerDocument, r) && pe(fe(r, "script")), r.parentNode.removeChild(r));
		return e
	}
	C.extend({
		htmlPrefilter: function(e) {
			return e.replace(Me, "<$1></$2>")
		},
		clone: function(e, t, n) {
			var r, i, o, s, a, c, u, l = e.cloneNode(!0),
				d = C.contains(e.ownerDocument, e);
			if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (s = fe(l), r = 0, i = (o = fe(e)).length; r < i; r++) a = o[r], c = s[r], void 0, "input" === (u = c.nodeName.toLowerCase()) && ue.test(a.type) ? c.checked = a.checked : "input" !== u && "textarea" !== u || (c.defaultValue = a.defaultValue);
			if (t) if (n) for (o = o || fe(e), s = s || fe(l), r = 0, i = o.length; r < i; r++) Ne(o[r], s[r]);
			else Ne(e, l);
			return 0 < (s = fe(l, "script")).length && pe(s, !d && fe(e, "script")), l
		},
		cleanData: function(e) {
			for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++) if (J(n)) {
				if (t = n[G.expando]) {
					if (t.events) for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
					n[G.expando] = void 0
				}
				n[Z.expando] && (n[Z.expando] = void 0)
			}
		}
	}), C.fn.extend({
		detach: function(e) {
			return Le(this, e, !0)
		},
		remove: function(e) {
			return Le(this, e)
		},
		text: function(e) {
			return $(this, function(e) {
				return void 0 === e ? C.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return Fe(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ee(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return Fe(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Ee(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return Fe(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return Fe(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(fe(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return C.clone(this, e, t)
			})
		},
		html: function(e) {
			return $(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Te.test(e) && !he[(le.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = C.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(fe(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return Fe(this, arguments, function(e) {
				var t = this.parentNode;
				C.inArray(this, n) < 0 && (C.cleanData(fe(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), C.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, s) {
		C.fn[e] = function(e) {
			for (var t, n = [], r = C(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), C(r[o])[s](t), c.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var He = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
		De = function(e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = x), t.getComputedStyle(e)
		},
		Be = new RegExp(re.join("|"), "i");

	function Ie(e, t, n) {
		var r, i, o, s, a = e.style;
		return (n = n || De(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (s = C.style(e, t)), !g.pixelBoxStyles() && He.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
	}
	function Oe(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}!
	function() {
		function e() {
			if (c) {
				a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(a).appendChild(c);
				var e = x.getComputedStyle(c);
				n = "1%" !== e.top, s = 12 === t(e.marginLeft), c.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), c.style.position = "absolute", i = 36 === c.offsetWidth || "absolute", be.removeChild(a), c = null
			}
		}
		function t(e) {
			return Math.round(parseFloat(e))
		}
		var n, r, i, o, s, a = z.createElement("div"),
			c = z.createElement("div");
		c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(g, {
			boxSizingReliable: function() {
				return e(), r
			},
			pixelBoxStyles: function() {
				return e(), o
			},
			pixelPosition: function() {
				return e(), n
			},
			reliableMarginLeft: function() {
				return e(), s
			},
			scrollboxSize: function() {
				return e(), i
			}
		}))
	}();
	var We = /^(none|table(?!-c[ea]).+)/,
		$e = /^--/,
		Re = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ve = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ue = ["Webkit", "Moz", "ms"],
		Xe = z.createElement("div").style;

	function Je(e) {
		var t = C.cssProps[e];
		return t || (t = C.cssProps[e] = function(e) {
			if (e in Xe) return e;
			for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;) if ((e = Ue[n] + t) in Xe) return e
		}(e) || e), t
	}
	function Ye(e, t, n) {
		var r = ne.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}
	function Ge(e, t, n, r, i, o) {
		var s = "width" === t ? 1 : 0,
			a = 0,
			c = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; s < 4; s += 2)"margin" === n && (c += C.css(e, n + re[s], !0, i)), r ? ("content" === n && (c -= C.css(e, "padding" + re[s], !0, i)), "margin" !== n && (c -= C.css(e, "border" + re[s] + "Width", !0, i))) : (c += C.css(e, "padding" + re[s], !0, i), "padding" !== n ? c += C.css(e, "border" + re[s] + "Width", !0, i) : a += C.css(e, "border" + re[s] + "Width", !0, i));
		return !r && 0 <= o && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - a - .5))), c
	}
	function Ze(e, t, n) {
		var r = De(e),
			i = Ie(e, t, r),
			o = "border-box" === C.css(e, "boxSizing", !1, r),
			s = o;
		if (He.test(i)) {
			if (!n) return i;
			i = "auto"
		}
		return s = s && (g.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === C.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (i = parseFloat(i) || 0) + Ge(e, t, n || (o ? "border" : "content"), s, r, i) + "px"
	}
	function Qe(e, t, n, r, i) {
		return new Qe.prototype.init(e, t, n, r, i)
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Ie(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, s, a = X(t),
					c = $e.test(t),
					u = e.style;
				if (c || (t = Je(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
				"string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (C.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (c ? u.setProperty(t, n) : u[t] = n))
			}
		},
		css: function(e, t, n, r) {
			var i, o, s, a = X(t);
			return $e.test(t) || (t = Je(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Ie(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
		}
	}), C.each(["height", "width"], function(e, a) {
		C.cssHooks[a] = {
			get: function(e, t, n) {
				if (t) return !We.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, a, n) : oe(e, Re, function() {
					return Ze(e, a, n)
				})
			},
			set: function(e, t, n) {
				var r, i = De(e),
					o = "border-box" === C.css(e, "boxSizing", !1, i),
					s = n && Ge(e, a, n, o, i);
				return o && g.scrollboxSize() === i.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(i[a]) - Ge(e, a, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t, t = C.css(e, a)), Ye(0, t, s)
			}
		}
	}), C.cssHooks.marginLeft = Oe(g.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(Ie(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), C.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(i, o) {
		C.cssHooks[i + o] = {
			expand: function(e) {
				for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
				return n
			}
		}, "margin" !== i && (C.cssHooks[i + o].set = Ye)
	}), C.fn.extend({
		css: function(e, t) {
			return $(this, function(e, t, n) {
				var r, i, o = {},
					s = 0;
				if (Array.isArray(t)) {
					for (r = De(e), i = t.length; s < i; s++) o[t[s]] = C.css(e, t[s], !1, r);
					return o
				}
				return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((C.Tween = Qe).prototype = {
		constructor: Qe,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = Qe.propHooks[this.prop];
			return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = Qe.propHooks[this.prop];
			return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Qe.propHooks._default.set(this), this
		}
	}).init.prototype = Qe.prototype, (Qe.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(e) {
				C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = Qe.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, C.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, C.fx = Qe.prototype.init, C.fx.step = {};
	var Ke, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
		it = /queueHooks$/;

	function ot() {
		et && (!1 === z.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(ot) : x.setTimeout(ot, C.fx.interval), C.fx.tick())
	}
	function st() {
		return x.setTimeout(function() {
			Ke = void 0
		}), Ke = Date.now()
	}
	function at(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}
	function ct(e, t, n) {
		for (var r, i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, s = i.length; o < s; o++) if (r = i[o].call(n, t, e)) return r
	}
	function ut(o, e, t) {
		var n, s, r = 0,
			i = ut.prefilters.length,
			a = C.Deferred().always(function() {
				delete c.elem
			}),
			c = function() {
				if (s) return !1;
				for (var e = Ke || st(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++) u.tweens[r].run(n);
				return a.notifyWith(o, [u, n, t]), n < 1 && i ? t : (i || a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u]), !1)
			},
			u = a.promise({
				elem: o,
				props: C.extend({}, e),
				opts: C.extend(!0, {
					specialEasing: {},
					easing: C.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: Ke || st(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					var n = C.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
					return u.tweens.push(n), n
				},
				stop: function(e) {
					var t = 0,
						n = e ? u.tweens.length : 0;
					if (s) return this;
					for (s = !0; t < n; t++) u.tweens[t].run(1);
					return e ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, e])) : a.rejectWith(o, [u, e]), this
				}
			}),
			l = u.props;
		for (!
		function(e, t) {
			var n, r, i, o, s;
			for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = C.cssHooks[r]) && "expand" in s) for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
			else t[r] = i
		}(l, u.opts.specialEasing); r < i; r++) if (n = ut.prefilters[r].call(u, o, l, u.opts)) return v(n.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
		return C.map(l, ct, u), v(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(c, {
			elem: o,
			anim: u,
			queue: u.opts.queue
		})), u
	}
	C.Animation = C.extend(ut, {
		tweeners: {
			"*": [function(e, t) {
				var n = this.createTween(e, t);
				return se(n.elem, e, ne.exec(t), n), n
			}]
		},
		tweener: function(e, t) {
			v(e) ? (t = e, e = ["*"]) : e = e.match(L);
			for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
		},
		prefilters: [function(e, t, n) {
			var r, i, o, s, a, c, u, l, d = "width" in t || "height" in t,
				h = this,
				f = {},
				p = e.style,
				m = e.nodeType && ie(e),
				w = G.get(e, "fxshow");
			for (r in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
				s.unqueued || a()
			}), s.unqueued++, h.always(function() {
				h.always(function() {
					s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
				})
			})), t) if (i = t[r], rt.test(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
					if ("show" !== i || !w || void 0 === w[r]) continue;
					m = !0
				}
				f[r] = w && w[r] || C.style(e, r)
			}
			if ((c = !C.isEmptyObject(t)) || !C.isEmptyObject(f)) for (r in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = w && w.display) && (u = G.get(e, "display")), "none" === (l = C.css(e, "display")) && (u ? l = u : (ce([e], !0), u = e.style.display || u, l = C.css(e, "display"), ce([e]))), ("inline" === l || "inline-block" === l && null != u) && "none" === C.css(e, "float") && (c || (h.done(function() {
				p.display = u
			}), null == u && (l = p.display, u = "none" === l ? "" : l)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
				p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
			})), c = !1, f) c || (w ? "hidden" in w && (m = w.hidden) : w = G.access(e, "fxshow", {
				display: u
			}), o && (w.hidden = !m), m && ce([e], !0), h.done(function() {
				for (r in m || ce([e]), G.remove(e, "fxshow"), f) C.style(e, r, f[r])
			})), c = ct(m ? w[r] : 0, r, h), r in w || (w[r] = c.start, m && (c.end = c.start, c.start = 0))
		}],
		prefilter: function(e, t) {
			t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
		}
	}), C.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? C.extend({}, e) : {
			complete: n || !n && t || v(e) && e,
			duration: e,
			easing: n && t || t && !v(t) && t
		};
		return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			v(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
		}, r
	}, C.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(ie).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(t, e, n, r) {
			var i = C.isEmptyObject(t),
				o = C.speed(e, n, r),
				s = function() {
					var e = ut(this, C.extend({}, t), o);
					(i || G.get(this, "finish")) && e.stop(!0)
				};
			return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
		},
		stop: function(i, e, o) {
			var s = function(e) {
					var t = e.stop;
					delete e.stop, t(o)
				};
			return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
				var e = !0,
					t = null != i && i + "queueHooks",
					n = C.timers,
					r = G.get(this);
				if (t) r[t] && r[t].stop && s(r[t]);
				else for (t in r) r[t] && r[t].stop && it.test(t) && s(r[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
				!e && o || C.dequeue(this, i)
			})
		},
		finish: function(s) {
			return !1 !== s && (s = s || "fx"), this.each(function() {
				var e, t = G.get(this),
					n = t[s + "queue"],
					r = t[s + "queueHooks"],
					i = C.timers,
					o = n ? n.length : 0;
				for (t.finish = !0, C.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
				for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), C.each(["toggle", "show", "hide"], function(e, r) {
		var i = C.fn[r];
		C.fn[r] = function(e, t, n) {
			return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(at(r, !0), e, t, n)
		}
	}), C.each({
		slideDown: at("show"),
		slideUp: at("hide"),
		slideToggle: at("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, r) {
		C.fn[e] = function(e, t, n) {
			return this.animate(r, e, t, n)
		}
	}), C.timers = [], C.fx.tick = function() {
		var e, t = 0,
			n = C.timers;
		for (Ke = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || C.fx.stop(), Ke = void 0
	}, C.fx.timer = function(e) {
		C.timers.push(e), C.fx.start()
	}, C.fx.interval = 13, C.fx.start = function() {
		et || (et = !0, ot())
	}, C.fx.stop = function() {
		et = null
	}, C.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, C.fn.delay = function(r, e) {
		return r = C.fx && C.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
			var n = x.setTimeout(e, r);
			t.stop = function() {
				x.clearTimeout(n)
			}
		})
	}, tt = z.createElement("input"), nt = z.createElement("select").appendChild(z.createElement("option")), tt.type = "checkbox", g.checkOn = "" !== tt.value, g.optSelected = nt.selected, (tt = z.createElement("input")).value = "t", tt.type = "radio", g.radioValue = "t" === tt.value;
	var lt, dt = C.expr.attrHandle;
	C.fn.extend({
		attr: function(e, t) {
			return $(this, C.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each(function() {
				C.removeAttr(this, e)
			})
		}
	}), C.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!g.radioValue && "radio" === t && T(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r = 0,
				i = t && t.match(L);
			if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
		}
	}), lt = {
		set: function(e, t, n) {
			return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var s = dt[t] || C.find.attr;
		dt[t] = function(e, t, n) {
			var r, i, o = t.toLowerCase();
			return n || (i = dt[o], dt[o] = r, r = null != s(e, t, n) ? o : null, dt[o] = i), r
		}
	});
	var ht = /^(?:input|select|textarea|button)$/i,
		ft = /^(?:a|area)$/i;

	function pt(e) {
		return (e.match(L) || []).join(" ")
	}
	function mt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}
	function wt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
	}
	C.fn.extend({
		prop: function(e, t) {
			return $(this, C.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[C.propFix[e] || e]
			})
		}
	}), C.extend({
		prop: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = C.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : ht.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for :"htmlFor", class: "className"
		}
	}), g.optSelected || (C.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		C.propFix[this.toLowerCase()] = this
	}), C.fn.extend({
		addClass: function(t) {
			var e, n, r, i, o, s, a, c = 0;
			if (v(t)) return this.each(function(e) {
				C(this).addClass(t.call(this, e, mt(this)))
			});
			if ((e = wt(t)).length) for (; n = this[c++];) if (i = mt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
				for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
				i !== (a = pt(r)) && n.setAttribute("class", a)
			}
			return this
		},
		removeClass: function(t) {
			var e, n, r, i, o, s, a, c = 0;
			if (v(t)) return this.each(function(e) {
				C(this).removeClass(t.call(this, e, mt(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((e = wt(t)).length) for (; n = this[c++];) if (i = mt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
				for (s = 0; o = e[s++];) for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
				i !== (a = pt(r)) && n.setAttribute("class", a)
			}
			return this
		},
		toggleClass: function(i, t) {
			var o = typeof i,
				s = "string" === o || Array.isArray(i);
			return "boolean" == typeof t && s ? t ? this.addClass(i) : this.removeClass(i) : v(i) ? this.each(function(e) {
				C(this).toggleClass(i.call(this, e, mt(this), t), t)
			}) : this.each(function() {
				var e, t, n, r;
				if (s) for (t = 0, n = C(this), r = wt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
				else void 0 !== i && "boolean" !== o || ((e = mt(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : G.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, n, r = 0;
			for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && -1 < (" " + pt(mt(n)) + " ").indexOf(t)) return !0;
			return !1
		}
	});
	var gt = /\r/g;
	C.fn.extend({
		val: function(n) {
			var r, e, i, t = this[0];
			return arguments.length ? (i = v(n), this.each(function(e) {
				var t;
				1 === this.nodeType && (null == (t = i ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
					return null == e ? "" : e + ""
				})), (r = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
			})) : t ? (r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(gt, "") : null == e ? "" : e : void 0
		}
	}), C.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = C.find.attr(e, "value");
					return null != t ? t : pt(C.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r, i = e.options,
						o = e.selectedIndex,
						s = "select-one" === e.type,
						a = s ? null : [],
						c = s ? o + 1 : i.length;
					for (r = o < 0 ? c : s ? o : 0; r < c; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))) {
						if (t = C(n).val(), s) return t;
						a.push(t)
					}
					return a
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = C.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < C.inArray(C.valHooks.option.get(r), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), C.each(["radio", "checkbox"], function() {
		C.valHooks[this] = {
			set: function(e, t) {
				if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
			}
		}, g.checkOn || (C.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), g.focusin = "onfocusin" in x;
	var vt = /^(?:focusinfocus|focusoutblur)$/,
		bt = function(e) {
			e.stopPropagation()
		};
	C.extend(C.event, {
		trigger: function(e, t, n, r) {
			var i, o, s, a, c, u, l, d, h = [n || z],
				f = w.call(e, "type") ? e.type : e,
				p = w.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = d = s = n = n || z, 3 !== n.nodeType && 8 !== n.nodeType && !vt.test(f + C.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), c = f.indexOf(":") < 0 && "on" + f, (e = e[C.expando] ? e : new C.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), l = C.event.special[f] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
				if (!r && !l.noBubble && !b(n)) {
					for (a = l.delegateType || f, vt.test(a + f) || (o = o.parentNode); o; o = o.parentNode) h.push(o), s = o;
					s === (n.ownerDocument || z) && h.push(s.defaultView || s.parentWindow || x)
				}
				for (i = 0;
				(o = h[i++]) && !e.isPropagationStopped();) d = o, e.type = 1 < i ? a : l.bindType || f, (u = (G.get(o, "events") || {})[e.type] && G.get(o, "handle")) && u.apply(o, t), (u = c && o[c]) && u.apply && J(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
				return e.type = f, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(h.pop(), t) || !J(n) || c && v(n[f]) && !b(n) && ((s = n[c]) && (n[c] = null), C.event.triggered = f, e.isPropagationStopped() && d.addEventListener(f, bt), n[f](), e.isPropagationStopped() && d.removeEventListener(f, bt), C.event.triggered = void 0, s && (n[c] = s)), e.result
			}
		},
		simulate: function(e, t, n) {
			var r = C.extend(new C.Event, n, {
				type: e,
				isSimulated: !0
			});
			C.event.trigger(r, null, t)
		}
	}), C.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				C.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return C.event.trigger(e, t, n, !0)
		}
	}), g.focusin || C.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, r) {
		var i = function(e) {
				C.event.simulate(r, e.target, C.event.fix(e))
			};
		C.event.special[r] = {
			setup: function() {
				var e = this.ownerDocument || this,
					t = G.access(e, r);
				t || e.addEventListener(n, i, !0), G.access(e, r, (t || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this,
					t = G.access(e, r) - 1;
				t ? G.access(e, r, t) : (e.removeEventListener(n, i, !0), G.remove(e, r))
			}
		}
	});
	var yt = x.location,
		_t = Date.now(),
		kt = /\?/;
	C.parseXML = function(e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new x.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
	};
	var xt = /\[\]$/,
		zt = /\r?\n/g,
		Ct = /^(?:submit|button|image|reset|file)$/i,
		St = /^(?:input|select|textarea|keygen)/i;

	function Mt(n, e, r, i) {
		var t;
		if (Array.isArray(e)) C.each(e, function(e, t) {
			r || xt.test(n) ? i(n, t) : Mt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
		});
		else if (r || "object" !== _(e)) i(n, e);
		else for (t in e) Mt(n + "[" + t + "]", e[t], r, i)
	}
	C.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				var n = v(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
			i(this.name, this.value)
		});
		else for (n in e) Mt(n, e[n], t, i);
		return r.join("&")
	}, C.fn.extend({
		serialize: function() {
			return C.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = C.prop(this, "elements");
				return e ? C.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !C(this).is(":disabled") && St.test(this.nodeName) && !Ct.test(e) && (this.checked || !ue.test(e))
			}).map(function(e, t) {
				var n = C(this).val();
				return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(zt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(zt, "\r\n")
				}
			}).get()
		}
	});
	var Tt = /%20/g,
		jt = /#.*$/,
		qt = /([?&])_=[^&]*/,
		Et = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		At = /^(?:GET|HEAD)$/,
		Pt = /^\/\//,
		Nt = {},
		Ft = {},
		Lt = "*/".concat("*"),
		Ht = z.createElement("a");

	function Dt(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, r = 0,
				i = e.toLowerCase().match(L) || [];
			if (v(t)) for (; n = i[r++];)"+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
		}
	}
	function Bt(t, i, o, s) {
		var a = {},
			c = t === Ft;

		function u(e) {
			var r;
			return a[e] = !0, C.each(t[e] || [], function(e, t) {
				var n = t(i, o, s);
				return "string" != typeof n || c || a[n] ? c ? !(r = n) : void 0 : (i.dataTypes.unshift(n), u(n), !1)
			}), r
		}
		return u(i.dataTypes[0]) || !a["*"] && u("*")
	}
	function It(e, t) {
		var n, r, i = C.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && C.extend(!0, e, r), e
	}
	Ht.href = yt.href, C.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: yt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Lt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": C.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? It(It(e, C.ajaxSettings), t) : It(C.ajaxSettings, e)
		},
		ajaxPrefilter: Dt(Nt),
		ajaxTransport: Dt(Ft),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var l, d, h, n, f, r, p, m, i, o, w = C.ajaxSetup({}, t),
				g = w.context || w,
				v = w.context && (g.nodeType || g.jquery) ? C(g) : C.event,
				b = C.Deferred(),
				y = C.Callbacks("once memory"),
				_ = w.statusCode || {},
				s = {},
				a = {},
				c = "canceled",
				k = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (p) {
							if (!n) for (n = {}; t = Et.exec(h);) n[t[1].toLowerCase()] = t[2];
							t = n[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return p ? h : null
					},
					setRequestHeader: function(e, t) {
						return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == p && (w.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e) if (p) k.always(e[k.status]);
						else for (t in e) _[t] = [_[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || c;
						return l && l.abort(t), u(0, t), this
					}
				};
			if (b.promise(k), w.url = ((e || w.url || yt.href) + "").replace(Pt, yt.protocol + "//"), w.type = t.method || t.type || w.method || w.type, w.dataTypes = (w.dataType || "*").toLowerCase().match(L) || [""], null == w.crossDomain) {
				r = z.createElement("a");
				try {
					r.href = w.url, r.href = r.href, w.crossDomain = Ht.protocol + "//" + Ht.host != r.protocol + "//" + r.host
				} catch (e) {
					w.crossDomain = !0
				}
			}
			if (w.data && w.processData && "string" != typeof w.data && (w.data = C.param(w.data, w.traditional)), Bt(Nt, w, t, k), p) return k;
			for (i in (m = C.event && w.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), w.type = w.type.toUpperCase(), w.hasContent = !At.test(w.type), d = w.url.replace(jt, ""), w.hasContent ? w.data && w.processData && 0 === (w.contentType || "").indexOf("application/x-www-form-urlencoded") && (w.data = w.data.replace(Tt, "+")) : (o = w.url.slice(d.length), w.data && (w.processData || "string" == typeof w.data) && (d += (kt.test(d) ? "&" : "?") + w.data, delete w.data), !1 === w.cache && (d = d.replace(qt, "$1"), o = (kt.test(d) ? "&" : "?") + "_=" + _t+++o), w.url = d + o), w.ifModified && (C.lastModified[d] && k.setRequestHeader("If-Modified-Since", C.lastModified[d]), C.etag[d] && k.setRequestHeader("If-None-Match", C.etag[d])), (w.data && w.hasContent && !1 !== w.contentType || t.contentType) && k.setRequestHeader("Content-Type", w.contentType), k.setRequestHeader("Accept", w.dataTypes[0] && w.accepts[w.dataTypes[0]] ? w.accepts[w.dataTypes[0]] + ("*" !== w.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : w.accepts["*"]), w.headers) k.setRequestHeader(i, w.headers[i]);
			if (w.beforeSend && (!1 === w.beforeSend.call(g, k, w) || p)) return k.abort();
			if (c = "abort", y.add(w.complete), k.done(w.success), k.fail(w.error), l = Bt(Ft, w, t, k)) {
				if (k.readyState = 1, m && v.trigger("ajaxSend", [k, w]), p) return k;
				w.async && 0 < w.timeout && (f = x.setTimeout(function() {
					k.abort("timeout")
				}, w.timeout));
				try {
					p = !1, l.send(s, u)
				} catch (e) {
					if (p) throw e;
					u(-1, e)
				}
			} else u(-1, "No Transport");

			function u(e, t, n, r) {
				var i, o, s, a, c, u = t;
				p || (p = !0, f && x.clearTimeout(f), l = void 0, h = r || "", k.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
					for (var r, i, o, s, a = e.contents, c = e.dataTypes;
					"*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
					if (r) for (i in a) if (a[i] && a[i].test(r)) {
						c.unshift(i);
						break
					}
					if (c[0] in n) o = c[0];
					else {
						for (i in n) {
							if (!c[0] || e.converters[i + " " + c[0]]) {
								o = i;
								break
							}
							s || (s = i)
						}
						o = o || s
					}
					if (o) return o !== c[0] && c.unshift(o), n[o]
				}(w, k, n)), a = function(e, t, n, r) {
					var i, o, s, a, c, u = {},
						l = e.dataTypes.slice();
					if (l[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
					for (o = l.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = l.shift()) if ("*" === o) o = c;
					else if ("*" !== c && c !== o) {
						if (!(s = u[c + " " + o] || u["* " + o])) for (i in u) if ((a = i.split(" "))[1] === o && (s = u[c + " " + a[0]] || u["* " + a[0]])) {
							!0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], l.unshift(a[1]));
							break
						}
						if (!0 !== s) if (s && e.throws) t = s(t);
						else try {
							t = s(t)
						} catch (e) {
							return {
								state: "parsererror",
								error: s ? e : "No conversion from " + c + " to " + o
							}
						}
					}
					return {
						state: "success",
						data: t
					}
				}(w, a, k, i), i ? (w.ifModified && ((c = k.getResponseHeader("Last-Modified")) && (C.lastModified[d] = c), (c = k.getResponseHeader("etag")) && (C.etag[d] = c)), 204 === e || "HEAD" === w.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, o = a.data, i = !(s = a.error))) : (s = u, !e && u || (u = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || u) + "", i ? b.resolveWith(g, [o, u, k]) : b.rejectWith(g, [k, u, s]), k.statusCode(_), _ = void 0, m && v.trigger(i ? "ajaxSuccess" : "ajaxError", [k, w, i ? o : s]), y.fireWith(g, [k, u]), m && (v.trigger("ajaxComplete", [k, w]), --C.active || C.event.trigger("ajaxStop")))
			}
			return k
		},
		getJSON: function(e, t, n) {
			return C.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return C.get(e, void 0, t, "script")
		}
	}), C.each(["get", "post"], function(e, i) {
		C[i] = function(e, t, n, r) {
			return v(t) && (r = r || n, n = t, t = void 0), C.ajax(C.extend({
				url: e,
				type: i,
				dataType: r,
				data: t,
				success: n
			}, C.isPlainObject(e) && e))
		}
	}), C._evalUrl = function(e) {
		return C.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, C.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (v(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(n) {
			return v(n) ? this.each(function(e) {
				C(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = C(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = v(t);
			return this.each(function(e) {
				C(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				C(this).replaceWith(this.childNodes)
			}), this
		}
	}), C.expr.pseudos.hidden = function(e) {
		return !C.expr.pseudos.visible(e)
	}, C.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, C.ajaxSettings.xhr = function() {
		try {
			return new x.XMLHttpRequest
		} catch (e) {}
	};
	var Ot = {
		0: 200,
		1223: 204
	},
		Wt = C.ajaxSettings.xhr();
	g.cors = !! Wt && "withCredentials" in Wt, g.ajax = Wt = !! Wt, C.ajaxTransport(function(i) {
		var o, s;
		if (g.cors || Wt && !i.crossDomain) return {
			send: function(e, t) {
				var n, r = i.xhr();
				if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
				for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
				o = function(e) {
					return function() {
						o && (o = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ot[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
							binary: r.response
						} : {
							text: r.responseText
						}, r.getAllResponseHeaders()))
					}
				}, r.onload = o(), s = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
					4 === r.readyState && x.setTimeout(function() {
						o && s()
					})
				}, o = o("abort");
				try {
					r.send(i.hasContent && i.data || null)
				} catch (e) {
					if (o) throw e
				}
			},
			abort: function() {
				o && o()
			}
		}
	}), C.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), C.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return C.globalEval(e), e
			}
		}
	}), C.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), C.ajaxTransport("script", function(n) {
		var r, i;
		if (n.crossDomain) return {
			send: function(e, t) {
				r = C("<script>").prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", i = function(e) {
					r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), z.head.appendChild(r[0])
			},
			abort: function() {
				i && i()
			}
		}
	});
	var $t, Rt = [],
		Vt = /(=)\?(?=&|$)|\?\?/;
	C.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Rt.pop() || C.expando + "_" + _t++;
			return this[e] = !0, e
		}
	}), C.ajaxPrefilter("json jsonp", function(e, t, n) {
		var r, i, o, s = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
		if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
			return o || C.error(r + " was not called"), o[0]
		}, e.dataTypes[0] = "json", i = x[r], x[r] = function() {
			o = arguments
		}, n.always(function() {
			void 0 === i ? C(x).removeProp(r) : x[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Rt.push(r)), o && v(i) && i(o[0]), o = i = void 0
		}), "script"
	}), g.createHTMLDocument = (($t = z.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === $t.childNodes.length), C.parseHTML = function(e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = z.implementation.createHTMLDocument("")).createElement("base")).href = z.location.href, t.head.appendChild(r)) : t = z), o = !n && [], (i = j.exec(e)) ? [t.createElement(i[1])] : (i = ve([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes)));
		var r, i, o
	}, C.fn.load = function(e, t, n) {
		var r, i, o, s = this,
			a = e.indexOf(" ");
		return -1 < a && (r = pt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && C.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
		}).always(n &&
		function(e, t) {
			s.each(function() {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		C.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), C.expr.pseudos.animated = function(t) {
		return C.grep(C.timers, function(e) {
			return t === e.elem
		}).length
	}, C.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, s, a, c, u = C.css(e, "position"),
				l = C(e),
				d = {};
			"static" === u && (e.style.position = "relative"), a = l.offset(), o = C.css(e, "top"), c = C.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + c).indexOf("auto") ? (s = (r = l.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(c) || 0), v(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : l.css(d)
		}
	}, C.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				C.offset.setOffset(this, t, e)
			});
			var e, n, r = this[0];
			return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
				top: e.top + n.pageYOffset,
				left: e.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					};
				if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
				else {
					for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - C.css(r, "marginTop", !0),
					left: t.left - i.left - C.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
				return e || be
			})
		}
	}), C.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, i) {
		var o = "pageYOffset" === i;
		C.fn[t] = function(e) {
			return $(this, function(e, t, n) {
				var r;
				if (b(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
				r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
			}, t, e, arguments.length)
		}
	}), C.each(["top", "left"], function(e, n) {
		C.cssHooks[n] = Oe(g.pixelPosition, function(e, t) {
			if (t) return t = Ie(e, n), He.test(t) ? C(e).position()[n] + "px" : t
		})
	}), C.each({
		Height: "height",
		Width: "width"
	}, function(s, a) {
		C.each({
			padding: "inner" + s,
			content: a,
			"": "outer" + s
		}, function(r, o) {
			C.fn[o] = function(e, t) {
				var n = arguments.length && (r || "boolean" != typeof e),
					i = r || (!0 === e || !0 === t ? "margin" : "border");
				return $(this, function(e, t, n) {
					var r;
					return b(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? C.css(e, t, i) : C.style(e, t, n, i)
				}, a, n ? e : void 0, n)
			}
		})
	}), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
		C.fn[n] = function(e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	}), C.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), C.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), C.proxy = function(e, t) {
		var n, r, i;
		if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = a.call(arguments, 2), (i = function() {
			return e.apply(t || this, r.concat(a.call(arguments)))
		}).guid = e.guid = e.guid || C.guid++, i
	}, C.holdReady = function(e) {
		e ? C.readyWait++ : C.ready(!0)
	}, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = T, C.isFunction = v, C.isWindow = b, C.camelCase = X, C.type = _, C.now = Date.now, C.isNumeric = function(e) {
		var t = C.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return C
	});
	var Ut = x.jQuery,
		Xt = x.$;
	return C.noConflict = function(e) {
		return x.$ === C && (x.$ = Xt), e && x.jQuery === C && (x.jQuery = Ut), C
	}, e || (x.jQuery = x.$ = C), C
}), function() {
	var e, t, n;
	e = function() {
		function r(e, t) {
			var n, r;
			if (this.options = {
				target: "instafeed",
				get: "popular",
				resolution: "thumbnail",
				sortBy: "none",
				links: !0,
				mock: !1,
				useHttp: !1
			}, "object" == typeof e) for (n in e) r = e[n], this.options[n] = r;
			this.context = null != t ? t : this, this.unique = this._genKey()
		}
		return r.prototype.hasNext = function() {
			return "string" == typeof this.context.nextUrl && 0 < this.context.nextUrl.length
		}, r.prototype.next = function() {
			return !!this.hasNext() && this.run(this.context.nextUrl)
		}, r.prototype.run = function(e) {
			var t, n;
			if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
			if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
			return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && ((n = document.createElement("script")).id = "instafeed-fetcher", n.src = e || this._buildUrl(), document.getElementsByTagName("head")[0].appendChild(n), t = "instafeedCache" + this.unique, window[t] = new r(this.options, this), window[t].unique = this.unique), !0
		}, r.prototype.parse = function(e) {
			var t, n, r, i, o, s, a, c, u, l, d, h, f, p, m, w, g, v, b, y, _, k, x, z, C, S, M, T;
			if ("object" != typeof e) {
				if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
				throw new Error("Invalid JSON response")
			}
			if (200 !== e.meta.code) {
				if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, e.meta.error_message), !1;
				throw new Error("Error from Instagram: " + e.meta.error_message)
			}
			if (0 === e.data.length) {
				if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
				throw new Error("No images were returned from Instagram")
			}
			if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, e), this.context.nextUrl = "", null != e.pagination && (this.context.nextUrl = e.pagination.next_url), "none" !== this.options.sortBy) switch (C = "least" === (S = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"))[0], S[1]) {
			case "random":
				e.data.sort(function() {
					return .5 - Math.random()
				});
				break;
			case "recent":
				e.data = this._sortBy(e.data, "created_time", C);
				break;
			case "liked":
				e.data = this._sortBy(e.data, "likes.count", C);
				break;
			case "commented":
				e.data = this._sortBy(e.data, "comments.count", C);
				break;
			default:
				throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
			}
			if ("undefined" != typeof document && null !== document && !1 === this.options.mock) {
				if (h = e.data, z = parseInt(this.options.limit, 10), null != this.options.limit && h.length > z && (h = h.slice(0, z)), s = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (h = this._filter(h, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
					for (a = "", T = document.createElement("div"), c = 0, y = h.length; c < y; c++) {
						if ("object" != typeof(l = (u = h[c]).images[this.options.resolution])) throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
						w = l.width, m = "square", (p = l.height) < w && (m = "landscape"), w < p && (m = "portrait"), d = l.url, 0 <= window.location.protocol.indexOf("http") && !this.options.useHttp && (d = d.replace(/https?:\/\//, "//")), a += this._makeTemplate(this.options.template, {
							model: u,
							id: u.id,
							link: u.link,
							type: u.type,
							image: d,
							width: w,
							height: p,
							orientation: m,
							caption: this._getObjectProperty(u, "caption.text"),
							likes: u.likes.count,
							comments: u.comments.count,
							location: this._getObjectProperty(u, "location.name")
						})
					}
					for (T.innerHTML = a, i = [], r = 0, n = T.childNodes.length; r < n;) i.push(T.childNodes[r]), r += 1;
					for (v = 0, _ = i.length; v < _; v++) x = i[v], s.appendChild(x)
				} else for (b = 0, k = h.length; b < k; b++) {
					if (u = h[b], f = document.createElement("img"), "object" != typeof(l = u.images[this.options.resolution])) throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
					d = l.url, 0 <= window.location.protocol.indexOf("http") && !this.options.useHttp && (d = d.replace(/https?:\/\//, "//")), f.src = d, !0 === this.options.links ? ((t = document.createElement("a")).href = u.link, t.appendChild(f), s.appendChild(t)) : s.appendChild(f)
				}
				if ("string" == typeof(M = this.options.target) && (M = document.getElementById(M)), null == M) throw o = 'No element with id="' + this.options.target + '" on page.', new Error(o);
				M.appendChild(s), document.getElementsByTagName("head")[0].removeChild(document.getElementById("instafeed-fetcher")), g = "instafeedCache" + this.unique, window[g] = void 0;
				try {
					delete window[g]
				} catch (e) {
					e
				}
			}
			return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
		}, r.prototype._buildUrl = function() {
			var e, t;
			switch ("https://api.instagram.com/v1", this.options.get) {
			case "popular":
				e = "media/popular";
				break;
			case "tagged":
				if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
				e = "tags/" + this.options.tagName + "/media/recent";
				break;
			case "location":
				if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
				e = "locations/" + this.options.locationId + "/media/recent";
				break;
			case "user":
				if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
				e = "users/" + this.options.userId + "/media/recent";
				break;
			default:
				throw new Error("Invalid option for get: '" + this.options.get + "'.")
			}
			return t = "https://api.instagram.com/v1/" + e, null != this.options.accessToken ? t += "?access_token=" + this.options.accessToken : t += "?client_id=" + this.options.clientId, null != this.options.limit && (t += "&count=" + this.options.limit), t += "&callback=instafeedCache" + this.unique + ".parse"
		}, r.prototype._genKey = function() {
			var e;
			return "" + (e = function() {
				return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
			})() + e() + e() + e()
		}, r.prototype._makeTemplate = function(e, t) {
			var n, r, i, o, s;
			for (r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, n = e; r.test(n);) o = n.match(r)[1], s = null != (i = this._getObjectProperty(t, o)) ? i : "", n = n.replace(r, function() {
				return "" + s
			});
			return n
		}, r.prototype._getObjectProperty = function(e, t) {
			var n, r;
			for (r = (t = t.replace(/\[(\w+)\]/g, ".$1")).split("."); r.length;) {
				if (n = r.shift(), !(null != e && n in e)) return null;
				e = e[n]
			}
			return e
		}, r.prototype._sortBy = function(e, i, o) {
			var t;
			return t = function(e, t) {
				var n, r;
				return n = this._getObjectProperty(e, i), r = this._getObjectProperty(t, i), o ? r < n ? 1 : -1 : n < r ? 1 : -1
			}, e.sort(t.bind(this)), e
		}, r.prototype._filter = function(e, t) {
			var n, r, i, o;
			for (n = [], r = function(e) {
				if (t(e)) return n.push(e)
			}, i = 0, o = e.length; i < o; i++) r(e[i]);
			return n
		}, r
	}(), t = this, n = function() {
		return e
	}, "function" == typeof define && define.amd ? define([], n) : "object" == typeof module && module.exports ? module.exports = n() : t.Instafeed = n()
}.call(this), function(i) {
	"use strict";
	i.fn.fitVids = function(e) {
		var n = {
			customSelector: null,
			ignore: null
		};
		if (!document.getElementById("fit-vids-style")) {
			var t = document.head || document.getElementsByTagName("head")[0],
				r = document.createElement("div");
			r.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', t.appendChild(r.childNodes[1])
		}
		return e && i.extend(n, e), this.each(function() {
			var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
			n.customSelector && e.push(n.customSelector);
			var r = ".fitvidsignore";
			n.ignore && (r = r + ", " + n.ignore);
			var t = i(this).find(e.join(","));
			(t = (t = t.not("object object")).not(r)).each(function() {
				var e = i(this);
				if (!(0 < e.parents(r).length || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
					e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
					var t = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10));
					if (!e.attr("name")) {
						var n = "fitvid" + i.fn.fitVids._count;
						e.attr("name", n), i.fn.fitVids._count++
					}
					e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"), e.removeAttr("height").removeAttr("width")
				}
			})
		})
	}, i.fn.fitVids._count = 0
}(window.jQuery || window.Zepto), function(d) {
	d.fn.viewportChecker = function(e) {
		var u = {
			classToAdd: "visible",
			classToRemove: "invisible",
			classToAddForFullView: "full-visible",
			removeClassAfterAnimation: !1,
			offset: 100,
			repeat: !1,
			invertBottomOffset: !0,
			callbackFunction: function(e, t) {},
			scrollHorizontal: !1,
			scrollBox: window
		};
		d.extend(u, e);
		var t = this,
			l = {
				height: d(u.scrollBox).height(),
				width: d(u.scrollBox).width()
			};
		return this.checkElements = function() {
			var a, c;
			u.scrollHorizontal ? (a = Math.max(d("html").scrollLeft(), d("body").scrollLeft(), d(window).scrollLeft()), c = a + l.width) : (a = Math.max(d("html").scrollTop(), d("body").scrollTop(), d(window).scrollTop()), c = a + l.height), t.each(function() {
				var e = d(this),
					t = {},
					n = {};
				if (e.data("vp-add-class") && (n.classToAdd = e.data("vp-add-class")), e.data("vp-remove-class") && (n.classToRemove = e.data("vp-remove-class")), e.data("vp-add-class-full-view") && (n.classToAddForFullView = e.data("vp-add-class-full-view")), e.data("vp-keep-add-class") && (n.removeClassAfterAnimation = e.data("vp-remove-after-animation")), e.data("vp-offset") && (n.offset = e.data("vp-offset")), e.data("vp-repeat") && (n.repeat = e.data("vp-repeat")), e.data("vp-scrollHorizontal") && (n.scrollHorizontal = e.data("vp-scrollHorizontal")), e.data("vp-invertBottomOffset") && (n.scrollHorizontal = e.data("vp-invertBottomOffset")), d.extend(t, u), d.extend(t, n), !e.data("vp-animated") || t.repeat) {
					0 < String(t.offset).indexOf("%") && (t.offset = parseInt(t.offset) / 100 * l.height);
					var r = t.scrollHorizontal ? e.offset().left : e.offset().top,
						i = t.scrollHorizontal ? r + e.width() : r + e.height(),
						o = Math.round(r) + t.offset,
						s = t.scrollHorizontal ? o + e.width() : o + e.height();
					t.invertBottomOffset && (s -= 2 * t.offset), o < c && a < s ? (e.removeClass(t.classToRemove), e.addClass(t.classToAdd), t.callbackFunction(e, "add"), i <= c && a <= r ? e.addClass(t.classToAddForFullView) : e.removeClass(t.classToAddForFullView), e.data("vp-animated", !0), t.removeClassAfterAnimation && e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
						e.removeClass(t.classToAdd)
					})) : e.hasClass(t.classToAdd) && t.repeat && (e.removeClass(t.classToAdd + " " + t.classToAddForFullView), t.callbackFunction(e, "remove"), e.data("vp-animated", !1))
				}
			})
		}, ("ontouchstart" in window || "onmsgesturechange" in window) && d(document).bind("touchmove MSPointerMove pointermove", this.checkElements), d(u.scrollBox).bind("load scroll", this.checkElements), d(window).resize(function(e) {
			l = {
				height: d(u.scrollBox).height(),
				width: d(u.scrollBox).width()
			}, t.checkElements()
		}), this.checkElements(), this
	}
}(jQuery), function(u) {
	"use strict";
	u.addEventListener("DOMContentLoaded", function() {
		u.querySelector("body").insertAdjacentHTML("afterbegin", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ei-sprite" style="display:none"><symbol id=\'ei-archive-icon\' viewBox=\'0 0 50 50\'><path d="M42 20h-2v-5c0-.6-.4-1-1-1H11c-.6 0-1 .4-1 1v5H8v-5c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v5z"></path><path d="M37 40H13c-1.7 0-3-1.3-3-3V20h2v17c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V20h2v17c0 1.7-1.3 3-3 3z"></path><path d="M29 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"></path><path d="M8 18h34v2H8z"></path></symbol><symbol id=\'ei-arrow-down-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M25 34.4l-9.7-9.7 1.4-1.4 8.3 8.3 8.3-8.3 1.4 1.4z"></path><path d="M24 16h2v17h-2z"></path></symbol><symbol id=\'ei-arrow-left-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M25.3 34.7L15.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"></path><path d="M17 24h17v2H17z"></path></symbol><symbol id=\'ei-arrow-right-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M24.7 34.7l-1.4-1.4 8.3-8.3-8.3-8.3 1.4-1.4 9.7 9.7z"></path><path d="M16 24h17v2H16z"></path></symbol><symbol id=\'ei-arrow-up-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M33.3 26.7L25 18.4l-8.3 8.3-1.4-1.4 9.7-9.7 9.7 9.7z"></path><path d="M24 17h2v17h-2z"></path></symbol><symbol id=\'ei-bell-icon\' viewBox=\'0 0 50 50\'><path d="M42 36c-6.5 0-7.4-6.3-8.2-11.9C32.9 17.9 32.1 12 25 12s-7.9 5.9-8.8 12.1C15.4 29.7 14.5 36 8 36v-2c4.6 0 5.3-3.9 6.2-10.1.9-6.2 2-13.9 10.8-13.9s9.9 7.7 10.8 13.9C36.7 30.1 37.4 34 42 34v2z"></path><path d="M25 40c-2.8 0-5-2.2-5-5h2c0 1.7 1.3 3 3 3s3-1.3 3-3h2c0 2.8-2.2 5-5 5z"></path><path d="M8 34h34v2H8z"></path><path d="M27 10c0 1.1-.9 1.5-2 1.5s-2-.4-2-1.5.9-2 2-2 2 .9 2 2z"></path></symbol><symbol id=\'ei-calendar-icon\' viewBox=\'0 0 50 50\'><path d="M37 38H13c-1.7 0-3-1.3-3-3V13c0-1.7 1.1-3 2.5-3H14v2h-1.5c-.2 0-.5.4-.5 1v22c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V13c0-.6-.3-1-.5-1H36v-2h1.5c1.4 0 2.5 1.3 2.5 3v22c0 1.7-1.3 3-3 3z"></path><path d="M17 14c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1z"></path><path d="M33 14c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1z"></path><path d="M20 10h10v2H20z"></path><path d="M12 16h26v2H12z"></path><path d="M34 20h2v2h-2z"></path><path d="M30 20h2v2h-2z"></path><path d="M26 20h2v2h-2z"></path><path d="M22 20h2v2h-2z"></path><path d="M18 20h2v2h-2z"></path><path d="M34 24h2v2h-2z"></path><path d="M30 24h2v2h-2z"></path><path d="M26 24h2v2h-2z"></path><path d="M22 24h2v2h-2z"></path><path d="M18 24h2v2h-2z"></path><path d="M14 24h2v2h-2z"></path><path d="M34 28h2v2h-2z"></path><path d="M30 28h2v2h-2z"></path><path d="M26 28h2v2h-2z"></path><path d="M22 28h2v2h-2z"></path><path d="M18 28h2v2h-2z"></path><path d="M14 28h2v2h-2z"></path><path d="M30 32h2v2h-2z"></path><path d="M26 32h2v2h-2z"></path><path d="M22 32h2v2h-2z"></path><path d="M18 32h2v2h-2z"></path><path d="M14 32h2v2h-2z"></path></symbol><symbol id=\'ei-camera-icon\' viewBox=\'0 0 50 50\'><path d="M39 38H11c-1.7 0-3-1.3-3-3V17c0-1.7 1.3-3 3-3h6c.2 0 .5-.2.6-.3l1.1-2.2c.4-.8 1.4-1.4 2.3-1.4h8c.9 0 1.9.6 2.3 1.4l1.1 2.2c.1.2.4.3.6.3h6c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3zM11 16c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1h-6c-.9 0-1.9-.6-2.3-1.4l-1.1-2.2c-.1-.2-.4-.4-.6-.4h-8c-.2 0-.5.2-.6.3l-1.1 2.2c-.4.9-1.4 1.5-2.3 1.5h-6z"></path><path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path><circle cx="35" cy="18" r="1"></circle><path d="M12 12h4v1h-4z"></path><path d="M25 21v-1c-2.8 0-5 2.2-5 5h1c0-2.2 1.8-4 4-4z"></path></symbol><symbol id=\'ei-cart-icon\' viewBox=\'0 0 50 50\'><path d="M35 34H13c-.3 0-.6-.2-.8-.4s-.2-.6-.1-.9l1.9-4.8L12.1 10H6V8h7c.5 0 .9.4 1 .9l2 19c0 .2 0 .3-.1.5L14.5 32H36l-1 2z"></path><path d="M15.2 29l-.4-2L38 22.2V14H14v-2h25c.6 0 1 .4 1 1v10c0 .5-.3.9-.8 1l-24 5z"></path><path d="M36 40c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path><path d="M12 40c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></symbol><symbol id=\'ei-chart-icon\' viewBox=\'0 0 50 50\'><path d="M18 36h-2V26h-4v10h-2V24h8z"></path><path d="M28 36h-2V20h-4v16h-2V18h8z"></path><path d="M38 36h-2V14h-4v22h-2V12h8z"></path><path d="M8 36h32v2H8z"></path></symbol><symbol id=\'ei-check-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M23 32.4l-8.7-8.7 1.4-1.4 7.3 7.3 11.3-11.3 1.4 1.4z"></path></symbol><symbol id=\'ei-chevron-down-icon\' viewBox=\'0 0 50 50\'><path d="M25 32.4l-9.7-9.7 1.4-1.4 8.3 8.3 8.3-8.3 1.4 1.4z"></path></symbol><symbol id=\'ei-chevron-left-icon\' viewBox=\'0 0 50 50\'><path d="M27.3 34.7L17.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"></path></symbol><symbol id=\'ei-chevron-right-icon\' viewBox=\'0 0 50 50\'><path d="M22.7 34.7l-1.4-1.4 8.3-8.3-8.3-8.3 1.4-1.4 9.7 9.7z"></path></symbol><symbol id=\'ei-chevron-up-icon\' viewBox=\'0 0 50 50\'><path d="M33.3 28.7L25 20.4l-8.3 8.3-1.4-1.4 9.7-9.7 9.7 9.7z"></path></symbol><symbol id=\'ei-clock-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M30.3 33.7L24 27.4V16h2v10.6l5.7 5.7z"></path></symbol><symbol id=\'ei-close-o-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M32.283 16.302l1.414 1.415-15.98 15.98-1.414-1.414z"></path><path d="M17.717 16.302l15.98 15.98-1.414 1.415-15.98-15.98z"></path></symbol><symbol id=\'ei-close-icon\' viewBox=\'0 0 50 50\'><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"></path><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"></path></symbol><symbol id=\'ei-comment-icon\' viewBox=\'0 0 50 50\'><path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12 0 6.4 3.9 9.4 7.2 10.7l.7.3-.1.8c-.2 1.6-.5 3-1.1 4.2 3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z"></path></symbol><symbol id=\'ei-credit-card-icon\' viewBox=\'0 0 50 50\'><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path><path d="M9 16h32v6H9z"></path><path d="M12 26h1v2h-1z"></path><path d="M14 26h1v2h-1z"></path><path d="M16 26h1v2h-1z"></path><path d="M19 26h1v2h-1z"></path><path d="M21 26h1v2h-1z"></path><path d="M23 26h1v2h-1z"></path><path d="M26 26h1v2h-1z"></path><path d="M28 26h1v2h-1z"></path><path d="M30 26h1v2h-1z"></path><path d="M33 26h1v2h-1z"></path><path d="M35 26h1v2h-1z"></path><path d="M37 26h1v2h-1z"></path></symbol><symbol id=\'ei-envelope-icon\' viewBox=\'0 0 50 50\'><path opacity=".9" d="M31.796 24.244l9.97 9.97-1.415 1.414-9.97-9.97z"></path><path opacity=".9" d="M18.278 24.287l1.414 1.414-9.9 9.9-1.414-1.41z"></path><path d="M25 29.9c-1.5 0-3.1-.6-4.2-1.8L8.3 15.7l1.4-1.4 12.5 12.5c1.6 1.6 4.1 1.6 5.7 0l12.5-12.5 1.4 1.4-12.6 12.5c-1.1 1.1-2.7 1.7-4.2 1.7z"></path><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path></symbol><symbol id=\'ei-exclamation-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M24 32h2v2h-2z"></path><path d="M25.6 30h-1.2l-.4-8v-6h2v6z"></path></symbol><symbol id=\'ei-external-link-icon\' viewBox=\'0 0 50 50\'><path d="M38.288 10.297l1.414 1.415-14.99 14.99-1.414-1.414z"></path><path d="M40 20h-2v-8h-8v-2h10z"></path><path d="M35 38H15c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h11v2H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V24h2v11c0 1.7-1.3 3-3 3z"></path></symbol><symbol id=\'ei-eye-icon\' viewBox=\'0 0 50 50\'><path d="M25 36C13.5 36 8.3 25.9 8.1 25.4c-.1-.3-.1-.6 0-.9C8.3 24.1 13.5 14 25 14s16.7 10.1 16.9 10.6c.1.3.1.6 0 .9-.2.4-5.4 10.5-16.9 10.5zM10.1 25c1.1 1.9 5.9 9 14.9 9s13.7-7.1 14.9-9c-1.1-1.9-5.9-9-14.9-9s-13.7 7.1-14.9 9z"></path><path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path><path d="M25 30c-2.8 0-5-2.2-5-5 0-.6.4-1 1-1s1 .4 1 1c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3c-.6 0-1-.4-1-1s.4-1 1-1c2.8 0 5 2.2 5 5s-2.2 5-5 5z"></path></symbol><symbol id=\'ei-gear-icon\' viewBox=\'0 0 50 50\'><path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path><path d="M27.7 44h-5.4l-1.5-4.6c-1-.3-2-.7-2.9-1.2l-4.4 2.2-3.8-3.8 2.2-4.4c-.5-.9-.9-1.9-1.2-2.9L6 27.7v-5.4l4.6-1.5c.3-1 .7-2 1.2-2.9l-2.2-4.4 3.8-3.8 4.4 2.2c.9-.5 1.9-.9 2.9-1.2L22.3 6h5.4l1.5 4.6c1 .3 2 .7 2.9 1.2l4.4-2.2 3.8 3.8-2.2 4.4c.5.9.9 1.9 1.2 2.9l4.6 1.5v5.4l-4.6 1.5c-.3 1-.7 2-1.2 2.9l2.2 4.4-3.8 3.8-4.4-2.2c-.9.5-1.9.9-2.9 1.2L27.7 44zm-4-2h2.6l1.4-4.3.5-.1c1.2-.3 2.3-.8 3.4-1.4l.5-.3 4 2 1.8-1.8-2-4 .3-.5c.6-1 1.1-2.2 1.4-3.4l.1-.5 4.3-1.4v-2.6l-4.3-1.4-.1-.5c-.3-1.2-.8-2.3-1.4-3.4l-.3-.5 2-4-1.8-1.8-4 2-.5-.3c-1.1-.6-2.2-1.1-3.4-1.4l-.5-.1L26.3 8h-2.6l-1.4 4.3-.5.1c-1.2.3-2.3.8-3.4 1.4l-.5.3-4-2-1.8 1.8 2 4-.3.5c-.6 1-1.1 2.2-1.4 3.4l-.1.5L8 23.7v2.6l4.3 1.4.1.5c.3 1.2.8 2.3 1.4 3.4l.3.5-2 4 1.8 1.8 4-2 .5.3c1.1.6 2.2 1.1 3.4 1.4l.5.1 1.4 4.3z"></path></symbol><symbol id=\'ei-heart-icon\' viewBox=\'0 0 50 50\'><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"></path></symbol><symbol id=\'ei-image-icon\' viewBox=\'0 0 50 50\'><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path><path d="M30 24c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path><path d="M35.3 37.7L19 22.4 9.7 31l-1.4-1.4 10.7-10 17.7 16.7z"></path><path d="M40.4 32.7L35 28.3 30.5 32l-1.3-1.6 5.8-4.7 6.6 5.4z"></path></symbol><symbol id=\'ei-like-icon\' viewBox=\'0 0 50 50\'><path d="M40 23.2c0-2.1-1.7-3.2-4-3.2h-6.7c.5-1.8.7-3.5.7-5 0-5.8-1.6-7-3-7-.9 0-1.6.1-2.5.6-.3.2-.4.4-.5.7l-1 5.4c-1.1 2.8-3.8 5.3-6 7V36c.8 0 1.6.4 2.6.9 1.1.5 2.2 1.1 3.4 1.1h9.5c2 0 3.5-1.6 3.5-3 0-.3 0-.5-.1-.7 1.2-.5 2.1-1.5 2.1-2.8 0-.6-.1-1.1-.3-1.6.8-.5 1.5-1.4 1.5-2.4 0-.6-.3-1.2-.6-1.7.8-.6 1.4-1.6 1.4-2.6zm-2.1 0c0 1.3-1.3 1.4-1.5 2-.2.7.8.9.8 2.1 0 1.2-1.5 1.2-1.7 1.9-.2.8.5 1 .5 2.2v.2c-.2 1-1.7 1.1-2 1.5-.3.5 0 .7 0 1.8 0 .6-.7 1-1.5 1H23c-.8 0-1.6-.4-2.6-.9-.8-.4-1.6-.8-2.4-1V23.5c2.5-1.9 5.7-4.7 6.9-8.2v-.2l.9-5c.4-.1.7-.1 1.2-.1.2 0 1 1.2 1 5 0 1.5-.3 3.1-.8 5H27c-.6 0-1 .4-1 1s.4 1 1 1h9c1 0 1.9.5 1.9 1.2z"></path><path d="M16 38h-6c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zm-6-16v14h6V22h-6z"></path></symbol><symbol id=\'ei-link-icon\' viewBox=\'0 0 50 50\'><path d="M24 30.2c0 .2.1.5.1.8 0 1.4-.5 2.6-1.5 3.6l-2 2c-1 1-2.2 1.5-3.6 1.5-2.8 0-5.1-2.3-5.1-5.1 0-1.4.5-2.6 1.5-3.6l2-2c1-1 2.2-1.5 3.6-1.5.3 0 .5 0 .8.1l1.5-1.5c-.7-.3-1.5-.4-2.3-.4-1.9 0-3.6.7-4.9 2l-2 2c-1.3 1.3-2 3-2 4.9 0 3.8 3.1 6.9 6.9 6.9 1.9 0 3.6-.7 4.9-2l2-2c1.3-1.3 2-3 2-4.9 0-.8-.1-1.6-.4-2.3L24 30.2z"></path><path d="M33 10.1c-1.9 0-3.6.7-4.9 2l-2 2c-1.3 1.3-2 3-2 4.9 0 .8.1 1.6.4 2.3l1.5-1.5c0-.2-.1-.5-.1-.8 0-1.4.5-2.6 1.5-3.6l2-2c1-1 2.2-1.5 3.6-1.5 2.8 0 5.1 2.3 5.1 5.1 0 1.4-.5 2.6-1.5 3.6l-2 2c-1 1-2.2 1.5-3.6 1.5-.3 0-.5 0-.8-.1l-1.5 1.5c.7.3 1.5.4 2.3.4 1.9 0 3.6-.7 4.9-2l2-2c1.3-1.3 2-3 2-4.9 0-3.8-3.1-6.9-6.9-6.9z"></path><path d="M20 31c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l10-10c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-10 10c-.2.2-.4.3-.7.3z"></path></symbol><symbol id=\'ei-location-icon\' viewBox=\'0 0 50 50\'><path d="M25 42.5l-.8-.9C23.7 41.1 12 27.3 12 19c0-7.2 5.8-13 13-13s13 5.8 13 13c0 8.3-11.7 22.1-12.2 22.7l-.8.8zM25 8c-6.1 0-11 4.9-11 11 0 6.4 8.4 17.2 11 20.4 2.6-3.2 11-14 11-20.4 0-6.1-4.9-11-11-11z"></path><path d="M25 24c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path></symbol><symbol id=\'ei-lock-icon\' viewBox=\'0 0 50 50\'><path d="M34 23h-2v-4c0-3.9-3.1-7-7-7s-7 3.1-7 7v4h-2v-4c0-5 4-9 9-9s9 4 9 9v4z"></path><path d="M33 40H17c-1.7 0-3-1.3-3-3V25c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM17 24c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V25c0-.6-.4-1-1-1H17z"></path><circle cx="25" cy="28" r="2"></circle><path d="M25.5 28h-1l-1 6h3z"></path></symbol><symbol id=\'ei-minus-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M16 24h18v2H16z"></path></symbol><symbol id=\'ei-navicon-icon\' viewBox=\'0 0 50 50\'><path d="M10 12h30v4H10z"></path><path d="M10 22h30v4H10z"></path><path d="M10 32h30v4H10z"></path></symbol><symbol id=\'ei-paperclip-icon\' viewBox=\'0 0 50 50\'><path d="M13.8 39.6c-1.5 0-3.1-.6-4.2-1.8-2.3-2.3-2.3-6.1 0-8.5l17-17c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.3L25.1 36.4 23.7 35l12.7-12.7c2.3-2.3 2.3-6.1 0-8.5-2.3-2.3-6.1-2.3-8.5 0l-17 17c-.8.8-1.2 1.8-1.2 2.8 0 1.1.4 2.1 1.2 2.8 1.6 1.6 4.1 1.6 5.7 0l12.7-12.7c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L18 29.3l-1.4-1.4 8.5-8.5c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L18 37.8c-1.1 1.2-2.7 1.8-4.2 1.8z"></path></symbol><symbol id=\'ei-pencil-icon\' viewBox=\'0 0 50 50\'><path d="M9.6 40.4l2.5-9.9L27 15.6l7.4 7.4-14.9 14.9-9.9 2.5zm4.3-8.9l-1.5 6.1 6.1-1.5L31.6 23 27 18.4 13.9 31.5z"></path><path d="M17.8 37.3c-.6-2.5-2.6-4.5-5.1-5.1l.5-1.9c3.2.8 5.7 3.3 6.5 6.5l-1.9.5z"></path><path d="M29.298 19.287l1.414 1.414-13.01 13.02-1.414-1.41z"></path><path d="M11 39l2.9-.7c-.3-1.1-1.1-1.9-2.2-2.2L11 39z"></path><path d="M35 22.4L27.6 15l3-3 .5.1c3.6.5 6.4 3.3 6.9 6.9l.1.5-3.1 2.9zM30.4 15l4.6 4.6.9-.9c-.5-2.3-2.3-4.1-4.6-4.6l-.9.9z"></path></symbol><symbol id=\'ei-play-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M20 33.7V16.3L35 25l-15 8.7zm2-14v10.5l9-5.3-9-5.2z"></path></symbol><symbol id=\'ei-plus-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M16 24h18v2H16z"></path><path d="M24 16h2v18h-2z"></path></symbol><symbol id=\'ei-pointer-icon\' viewBox=\'0 0 50 50\'><path d="M33 38H21c-.6 0-1-.4-1-1 0-1.5-.7-2.4-1.8-3.8-.6-.7-1.3-1.6-2-2.7-1.9-3-3.6-6.6-4-7.9-.4-1.3-.1-2.2.3-2.7.4-.6 1.2-.9 2.1-.9 1.2 0 2.4 1 3.5 2.3V11c0-1.7 1.3-3 3-3s3 1.3 3 3v4.2c.3-.1.6-.2 1-.2 1.1 0 2 .6 2.5 1.4.4-.3.9-.4 1.4-.4 1.4 0 2.5.9 2.9 2.2.3-.1.7-.2 1.1-.2 1.7 0 3 1.3 3 3v3c0 2.6-.5 4.7-1 6.7s-1 3.9-1 6.3c0 .6-.4 1-1 1zm-11.1-2H32c.1-2.2.6-4 1-5.8.5-2 1-3.9 1-6.2v-3c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6-.4 1-1 1s-1-.4-1-1v-9c0-.6-.4-1-1-1s-1 .4-1 1v15c0 .6-.4 1-1 1s-1-.4-1-1v-.8c-.9-2.3-2.8-4.2-3.5-4.2-.2 0-.4 0-.5.1-.1.1-.1.4 0 .9.3 1.1 1.8 4.3 3.8 7.5.6 1 1.2 1.7 1.8 2.5 1.1 1.2 2.1 2.3 2.3 4z"></path></symbol><symbol id=\'ei-question-icon\' viewBox=\'0 0 50 50\'><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M19.8 19.6c.3-.8.6-1.4 1.2-1.9.5-.5 1.1-.9 1.9-1.2s1.6-.4 2.5-.4c.7 0 1.4.1 2 .3.6.2 1.2.5 1.7.9s.9.9 1.1 1.5c.3.6.4 1.3.4 2 0 1-.2 1.8-.6 2.5s-1 1.3-1.6 2l-1.3 1.3c-.3.3-.6.6-.7.9-.2.3-.3.7-.3 1.1-.1.4-.1.7-.1 1.5h-1.6c0-.8 0-1.1.1-1.7.1-.5.3-1 .5-1.5.2-.4.5-.8.9-1.2.4-.4.9-.8 1.4-1.4.5-.5.9-1 1.2-1.5s.5-1.2.5-1.8c0-.5-.1-1-.3-1.4-.2-.4-.5-.8-.8-1.1-.3-.3-.7-.5-1.2-.7-.5-.2-.9-.3-1.4-.3-.7 0-1.3.1-1.8.4-.5.2-1 .6-1.3 1-.3.4-.6.9-.8 1.5s-.4.9-.4 1.6h-1.6c0-.9.1-1.6.4-2.4zM26 32v2h-2v-2h2z"></path></symbol><symbol id=\'ei-redo-icon\' viewBox=\'0 0 50 50\'><path d="M25 38c-7.2 0-13-5.8-13-13s5.8-13 13-13c5.4 0 10.1 3.4 11.9 8.7l-1.9.7c-1.5-4.6-5.4-7.4-10-7.4-6.1 0-11 4.9-11 11s4.9 11 11 11c4.3 0 8.2-2.5 10-6.4l1.8.8C34.7 35 30.1 38 25 38z"></path><path d="M38 22h-8v-2h6v-6h2z"></path></symbol><symbol id=\'ei-refresh-icon\' viewBox=\'0 0 50 50\'><path d="M25 38c-7.2 0-13-5.8-13-13 0-3.2 1.2-6.2 3.3-8.6l1.5 1.3C15 19.7 14 22.3 14 25c0 6.1 4.9 11 11 11 1.6 0 3.1-.3 4.6-1l.8 1.8c-1.7.8-3.5 1.2-5.4 1.2z"></path><path d="M34.7 33.7l-1.5-1.3c1.8-2 2.8-4.6 2.8-7.3 0-6.1-4.9-11-11-11-1.6 0-3.1.3-4.6 1l-.8-1.8c1.7-.8 3.5-1.2 5.4-1.2 7.2 0 13 5.8 13 13 0 3.1-1.2 6.2-3.3 8.6z"></path><path d="M18 24h-2v-6h-6v-2h8z"></path><path d="M40 34h-8v-8h2v6h6z"></path></symbol><symbol id=\'ei-retweet-icon\' viewBox=\'0 0 50 50\'><path d="M38 35h-2V17c0-.6-.4-1-1-1H18v-2h17c1.7 0 3 1.3 3 3v18z"></path><path d="M37 36.5l-6.8-7.8 1.6-1.4 5.2 6.2 5.2-6.2 1.6 1.4z"></path><path d="M32 36H15c-1.7 0-3-1.3-3-3V15h2v18c0 .6.4 1 1 1h17v2z"></path><path d="M18.2 22.7L13 16.5l-5.2 6.2-1.6-1.4 6.8-7.8 6.8 7.8z"></path></symbol><symbol id=\'ei-sc-facebook-icon\' viewBox=\'0 0 50 50\'><path d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z"></path></symbol><symbol id=\'ei-sc-github-icon\' viewBox=\'0 0 50 50\'><path fill-rule="evenodd" clip-rule="evenodd" d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"></path></symbol><symbol id=\'ei-sc-google-plus-icon\' viewBox=\'0 0 50 50\'><path d="M18 23v4.8h7.9c-.3 2.1-2.4 6-7.9 6-4.8 0-8.7-4-8.7-8.8s3.9-8.8 8.7-8.8c2.7 0 4.5 1.2 5.6 2.2l3.8-3.7C24.9 12.4 21.8 11 18 11c-7.7 0-14 6.3-14 14s6.3 14 14 14c8.1 0 13.4-5.7 13.4-13.7 0-.9-.1-1.6-.2-2.3H18z"></path><path d="M48 23h-4v-4h-4v4h-4v4h4v4h4v-4h4z"></path></symbol><symbol id=\'ei-sc-instagram-icon\' viewBox=\'0 0 50 50\'><path d="M25 12c-3.53 0-3.973.015-5.36.078-1.384.063-2.329.283-3.156.604a6.372 6.372 0 0 0-2.302 1.5 6.372 6.372 0 0 0-1.5 2.303c-.321.826-.54 1.771-.604 3.155C12.015 21.027 12 21.47 12 25c0 3.53.015 3.973.078 5.36.063 1.384.283 2.329.604 3.155.333.855.777 1.58 1.5 2.303a6.372 6.372 0 0 0 2.302 1.5c.827.32 1.772.54 3.156.604 1.387.063 1.83.078 5.36.078 3.53 0 3.973-.015 5.36-.078 1.384-.063 2.329-.283 3.155-.604a6.371 6.371 0 0 0 2.303-1.5 6.372 6.372 0 0 0 1.5-2.303c.32-.826.54-1.771.604-3.155.063-1.387.078-1.83.078-5.36 0-3.53-.015-3.973-.078-5.36-.063-1.384-.283-2.329-.605-3.155a6.372 6.372 0 0 0-1.499-2.303 6.371 6.371 0 0 0-2.303-1.5c-.826-.32-1.771-.54-3.155-.604C28.973 12.015 28.53 12 25 12m0 2.342c3.471 0 3.882.014 5.253.076 1.267.058 1.956.27 2.414.448.607.236 1.04.517 1.495.972.455.455.736.888.972 1.495.178.458.39 1.146.448 2.414.062 1.37.076 1.782.076 5.253s-.014 3.882-.076 5.253c-.058 1.268-.27 1.956-.448 2.414a4.028 4.028 0 0 1-.972 1.495 4.027 4.027 0 0 1-1.495.972c-.458.178-1.147.39-2.414.448-1.37.062-1.782.076-5.253.076s-3.883-.014-5.253-.076c-1.268-.058-1.956-.27-2.414-.448a4.027 4.027 0 0 1-1.495-.972 4.03 4.03 0 0 1-.972-1.495c-.178-.458-.39-1.146-.448-2.414-.062-1.37-.076-1.782-.076-5.253s.014-3.882.076-5.253c.058-1.268.27-1.956.448-2.414.236-.607.517-1.04.972-1.495a4.028 4.028 0 0 1 1.495-.972c.458-.178 1.146-.39 2.414-.448 1.37-.062 1.782-.076 5.253-.076"></path><path d="M25 18a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m8.7-11.4a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0"></path></symbol><symbol id=\'ei-sc-linkedin-icon\' viewBox=\'0 0 50 50\'><path d="M36.1 12H13.9c-1.1 0-1.9.8-1.9 1.9v22.2c0 1 .9 1.9 1.9 1.9h22.2c1.1 0 1.9-.8 1.9-1.9V13.9c0-1.1-.9-1.9-1.9-1.9zM20 34h-4V22h4v12zm-2-13.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM34 34h-4v-6c0-1.6-.4-3.2-2-3.2s-2 1.6-2 3.2v6h-4V22h4v1.4h.2c.5-1 1.8-1.8 3.3-1.8 3.7 0 4.5 2.4 4.5 5.4v7z"></path></symbol><symbol id=\'ei-sc-odnoklassniki-icon\' viewBox=\'0 0 50 50\'><path d="M25 26c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-12.2c-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2-1.9-4.2-4.2-4.2z"></path><path d="M33.6 26.8c-.7-.9-1.9-1-2.8-.4 0 0-2.2 1.6-5.8 1.6-3.6 0-5.8-1.6-5.8-1.6-.9-.7-2.1-.5-2.8.4-.7.9-.5 2.1.4 2.8.1.1 2.2 1.7 5.7 2.2l-5.3 5.4c-.8.8-.8 2.1 0 2.8.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l5-5.1 5 5.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.8-.8.8-2 0-2.8l-5.3-5.4c3.5-.6 5.6-2.2 5.7-2.2.9-.7 1.1-2 .4-2.8z"></path></symbol><symbol id=\'ei-sc-pinterest-icon\' viewBox=\'0 0 50 50\'><path d="M25 10c-8.3 0-15 6.7-15 15 0 6.4 4 11.8 9.5 14-.1-1.2-.2-3 .1-4.3.3-1.2 1.8-7.5 1.8-7.5s-.4-.9-.4-2.2c0-2.1 1.2-3.6 2.7-3.6 1.3 0 1.9 1 1.9 2.1 0 1.3-.8 3.2-1.2 5-.4 1.5.7 2.7 2.2 2.7 2.7 0 4.7-2.8 4.7-6.9 0-3.6-2.6-6.1-6.3-6.1-4.3 0-6.8 3.2-6.8 6.5 0 1.3.5 2.7 1.1 3.4.1.1.1.3.1.4-.1.5-.4 1.5-.4 1.7-.1.3-.2.3-.5.2-1.9-.9-3-3.6-3-5.8 0-4.7 3.4-9.1 9.9-9.1 5.2 0 9.2 3.7 9.2 8.7 0 5.2-3.3 9.3-7.8 9.3-1.5 0-2.9-.8-3.4-1.7 0 0-.8 2.9-.9 3.6-.3 1.3-1.3 2.9-1.9 3.9 1.4.5 2.9.7 4.4.7 8.3 0 15-6.7 15-15s-6.7-15-15-15z"></path></symbol><symbol id=\'ei-sc-skype-icon\' viewBox=\'0 0 50 50\'><path d="M38 27.3c.1-.8.2-1.6.2-2.4 0-1.8-.3-3.5-1-5.1-.7-1.6-1.6-3-2.8-4.2-1.2-1.2-2.6-2.2-4.2-2.8-1.6-.7-3.4-1-5.1-1-.8 0-1.7.1-2.5.2-1.1-.6-2.4-.9-3.7-.9-2.1 0-4.1.8-5.5 2.3-1.5 1.5-2.3 3.4-2.3 5.5 0 1.3.3 2.6 1 3.8-.1.7-.2 1.5-.2 2.3 0 1.8.3 3.5 1 5.1.7 1.6 1.6 3 2.8 4.2 1.2 1.2 2.6 2.2 4.2 2.8 1.6.7 3.4 1 5.1 1 .8 0 1.6-.1 2.3-.2 1.2.7 2.5 1 3.9 1 2.1 0 4.1-.8 5.5-2.3 1.5-1.5 2.3-3.4 2.3-5.5 0-1.3-.3-2.6-1-3.8zM25.1 33c-4.7 0-6.8-2.3-6.8-4 0-.9.7-1.5 1.6-1.5 2 0 1.5 2.9 5.2 2.9 1.9 0 3-1 3-2.1 0-.6-.3-1.4-1.6-1.7l-4.2-1c-3.4-.8-4-2.7-4-4.4 0-3.6 3.3-4.9 6.5-4.9 2.9 0 6.3 1.6 6.3 3.7 0 .9-.8 1.4-1.7 1.4-1.7 0-1.4-2.4-4.9-2.4-1.7 0-2.7.8-2.7 1.9 0 1.1 1.4 1.5 2.5 1.7l3.1.7c3.4.8 4.2 2.7 4.2 4.6.1 2.9-2.1 5.1-6.5 5.1z"></path></symbol><symbol id=\'ei-sc-soundcloud-icon\' viewBox=\'0 0 50 50\'><path d="M40 24h-.2c-.9-4.6-5-8-9.8-8-3.1 0-5.9 1.4-7.7 3.7-.2.3-.3.6-.3 1.2l-.4 9.1.4 5.5c0 .3.3.5.5.5H40c3.3 0 6-2.7 6-6s-2.7-6-6-6z"></path><path d="M18.9 20c-.3 0-.5.2-.5.5l-.8 9v1l.8 5c0 .3.3.5.6.5h.2c.3 0 .5-.2.6-.5l.8-5c0-.3.1-.7 0-1l-.8-9c0-.3-.3-.5-.5-.5h-.4z"></path><path d="M14.9 21c-.3 0-.5.2-.5.5l-.8 8v1l.8 5c0 .3.3.5.6.5h.2c.3 0 .5-.2.6-.5l.8-5c0-.3.1-.7 0-1l-.8-8c0-.3-.3-.5-.5-.5h-.4z"></path><path d="M11 24c-.3 0-.5.2-.6.5l-.8 5v1l.8 5c0 .3.3.5.6.5s.5-.2.6-.5l.8-5v-1l-.8-5c-.1-.3-.3-.5-.6-.5z"></path><path d="M7 23c-.3 0-.5.2-.6.5l-.9 6v1l.8 5c.2.3.4.5.7.5.3 0 .5-.2.6-.5l.8-5c0-.3.1-.7 0-1l-.9-6c0-.3-.2-.5-.5-.5z"></path><path d="M3.3 26c-.3 0-.5.2-.6.5l-.6 3c-.1.3-.1.7 0 1l.6 4c.1.3.3.5.6.5s.5-.2.6-.5l.6-4v-1l-.6-3c-.1-.3-.3-.5-.6-.5z"></path></symbol><symbol id=\'ei-sc-telegram-icon\' viewBox=\'0 0 50 50\'><path d="M37.1 13L9.4 24c-.9.3-.8 1.6.1 1.9l7 2.2 2.8 8.8c.2.7 1.1.9 1.6.4l4.1-3.8 7.8 5.7c.6.4 1.4.1 1.6-.6l5.4-23.2c.3-1.7-1.2-3-2.7-2.4zM20.9 29.8L20 35l-2-7.2L37.5 15 20.9 29.8z"></path></symbol><symbol id=\'ei-sc-tumblr-icon\' viewBox=\'0 0 50 50\'><path d="M30.9 32.4c-.5.2-1.5.5-2.3.5-2.2.1-2.7-1.6-2.7-2.8v-8.7h5.6v-4.2H26V10h-4.1c-.1 0-.2.1-.2.2-.2 2.2-1.3 6-5.5 7.5v3.6H19v9.1c0 3.1 2.3 7.6 8.4 7.5 2.1 0 4.3-.9 4.8-1.6l-1.3-3.9z"></path></symbol><symbol id=\'ei-sc-twitter-icon\' viewBox=\'0 0 50 50\'><path d="M39.2 16.8c-1.1.5-2.2.8-3.5 1 1.2-.8 2.2-1.9 2.7-3.3-1.2.7-2.5 1.2-3.8 1.5-1.1-1.2-2.7-1.9-4.4-1.9-3.3 0-6.1 2.7-6.1 6.1 0 .5.1.9.2 1.4-5-.2-9.5-2.7-12.5-6.3-.5.7-.8 1.7-.8 2.8 0 2.1 1.1 4 2.7 5-1 0-1.9-.3-2.7-.8v.1c0 2.9 2.1 5.4 4.9 5.9-.5.1-1 .2-1.6.2-.4 0-.8 0-1.1-.1.8 2.4 3 4.2 5.7 4.2-2.1 1.6-4.7 2.6-7.5 2.6-.5 0-1 0-1.4-.1 2.4 1.9 5.6 2.9 9 2.9 11.1 0 17.2-9.2 17.2-17.2V20c1.2-.9 2.2-1.9 3-3.2z"></path></symbol><symbol id=\'ei-sc-vimeo-icon\' viewBox=\'0 0 50 50\'><path d="M38 19.6c-.1 2.7-2 6.4-5.6 11.1-3.8 4.9-7 7.4-9.6 7.4-1.6 0-3-1.5-4.1-4.5-.7-2.7-1.5-5.5-2.2-8.2-.8-3-1.7-4.5-2.7-4.5-.2 0-.9.4-2.2 1.3l-1.3-1.7c1.4-1.2 2.7-2.4 4-3.6 1.8-1.6 3.2-2.4 4.1-2.5 2.2-.2 3.5 1.3 4 4.4.5 3.4.9 5.5 1.1 6.4.6 2.8 1.3 4.2 2.1 4.2.6 0 1.5-.9 2.6-2.8 1.2-1.8 1.8-3.2 1.9-4.2.2-1.6-.5-2.4-1.9-2.4-.7 0-1.3.2-2 .5 1.4-4.5 4-6.6 7.8-6.5 2.8.1 4.2 1.9 4 5.6z"></path></symbol><symbol id=\'ei-sc-vk-icon\' viewBox=\'0 0 50 50\'><path fill-rule="evenodd" clip-rule="evenodd" d="M25.1 35.9h2s.6-.1.9-.4c.3-.3.3-.9.3-.9s0-2.6 1.2-3c1.2-.4 2.8 2.6 4.4 3.7 1.2.9 2.1.7 2.1.7l4.4-.1s2.3-.1 1.2-2c-.1-.1-.6-1.3-3.3-3.8-2.8-2.6-2.4-2.1.9-6.6 2-2.7 2.8-4.3 2.6-5.1-.2-.7-1.7-.5-1.7-.5h-5s-.4-.1-.6.1c-.3.2-.4.5-.4.5s-.8 2.1-1.8 3.9c-2.2 3.7-3.1 3.9-3.4 3.7-.8-.5-.6-2.2-.6-3.3 0-3.6.6-5.1-1.1-5.5-.5-.1-.9-.2-2.3-.2-1.8 0-3.3 0-4.1.4-.6.3-1 .9-.7.9.3 0 1.1.2 1.5.7.4.9.4 2.4.4 2.4s.3 4.3-.7 4.8c-.7.4-1.6-.4-3.6-3.8-1-1.7-1.8-3.7-1.8-3.7s-.1-.4-.4-.6c-.3-.2-.8-.3-.8-.3H10s-.7 0-1 .3c-.2.3 0 .8 0 .8s3.7 8.6 7.9 13c3.9 4.2 8.2 3.9 8.2 3.9z"></path></symbol><symbol id=\'ei-sc-youtube-icon\' viewBox=\'0 0 50 50\'><path d="M39.7 18.6s-.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C31.3 14 25 14 25 14s-6.3 0-10.5.3c-.6.1-1.9.1-3 1.3-.9.9-1.2 3-1.2 3S10 21 10 23.4v2.2c0 2.4.3 4.9.3 4.9s.3 2.1 1.2 3c1.1 1.2 2.6 1.2 3.3 1.3 2.4.1 10.2.2 10.2.2s6.3 0 10.5-.3c.6-.1 1.9-.1 3-1.3.9-.9 1.2-3 1.2-3s.3-2.4.3-4.8v-2.2c0-2.4-.3-4.8-.3-4.8zm-17.8 9.8V20l8.1 4.2-8.1 4.2z"></path></symbol><symbol id=\'ei-search-icon\' viewBox=\'0 0 50 50\'><path d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"></path><path d="M32.682 31.267l8.98 8.98-1.414 1.414-8.98-8.98z"></path></symbol><symbol id=\'ei-share-apple-icon\' viewBox=\'0 0 50 50\'><path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z"></path><path d="M24 7h2v21h-2z"></path><path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"></path></symbol><symbol id=\'ei-share-google-icon\' viewBox=\'0 0 50 50\'><path d="M15 30c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path><path d="M35 20c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path><path d="M35 40c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"></path><path d="M19.007 25.885l12.88 6.44-.895 1.788-12.88-6.44z"></path><path d="M30.993 15.885l.894 1.79-12.88 6.438-.894-1.79z"></path></symbol><symbol id=\'ei-spinner-2-icon\' viewBox=\'0 0 50 50\'><circle cx="25" cy="10" r="2"></circle><circle opacity=".3" cx="25" cy="40" r="2"></circle><circle opacity=".3" cx="32.5" cy="12" r="2"></circle><circle opacity=".3" cx="17.5" cy="38" r="2"></circle><circle opacity=".93" cx="17.5" cy="12" r="2"></circle><circle opacity=".3" cx="32.5" cy="38" r="2"></circle><circle opacity=".65" cx="10" cy="25" r="2"></circle><circle opacity=".3" cx="40" cy="25" r="2"></circle><circle opacity=".86" cx="12" cy="17.5" r="2"></circle><circle opacity=".3" cx="38" cy="32.5" r="2"></circle><circle opacity=".44" cx="12" cy="32.5" r="2"></circle><circle opacity=".3" cx="38" cy="17.5" r="2"></circle></symbol><symbol id=\'ei-spinner-3-icon\' viewBox=\'0 0 50 50\'><path d="M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4-6-2.7-13.3-1.6-18.3 2.6-4.8 4-7 10.5-5.6 16.6 1.3 6 6 10.9 11.9 12.5 7.1 2 13.6-1.4 17.6-7.2-3.6 4.8-9.1 8-15.2 6.9-6.1-1.1-11.1-5.7-12.5-11.7-1.5-6.4 1.5-13.1 7.2-16.4 5.9-3.4 14.2-2.1 18.1 3.7 1 1.4 1.7 3.1 2 4.8.3 1.4.2 2.9.4 4.3.2 1.3 1.3 3 2.8 2.1 1.3-.8 1.2-2.5 1.1-3.8 0-.4.1.7 0 0z"></path></symbol><symbol id=\'ei-spinner-icon\' viewBox=\'0 0 50 50\'><path d="M25 18c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"></path><path opacity=".3" d="M25 42c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"></path><path opacity=".3" d="M29 19c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"></path><path opacity=".3" d="M17 39.8c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"></path><path opacity=".93" d="M21 19c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.2-.3.2-.5.2z"></path><path opacity=".3" d="M33 39.8c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.1-.3.2-.5.2z"></path><path opacity=".65" d="M17 26H9c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"></path><path opacity=".3" d="M41 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"></path><path opacity=".86" d="M18.1 21.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"></path><path opacity=".3" d="M38.9 33.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"></path><path opacity=".44" d="M11.1 33.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.1.2-.3.2-.5.2z"></path><path opacity=".3" d="M31.9 21.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.2.2-.3.2-.5.2z"></path></symbol><symbol id=\'ei-star-icon\' viewBox=\'0 0 50 50\'><path d="M15.2 40.6c-.2 0-.4-.1-.6-.2-.4-.3-.5-.7-.4-1.1l3.9-12-10.2-7.5c-.4-.3-.5-.7-.4-1.1s.5-.7 1-.7h12.7L25 5.9c.1-.4.5-.7 1-.7s.8.3 1 .7L30.9 18h12.7c.4 0 .8.2 1 .6s0 .9-.4 1.1L34 27.1l3.9 12c.1.4 0 .9-.4 1.1s-.8.3-1.2 0L26 33l-10.2 7.4c-.2.1-.4.2-.6.2zM26 30.7c.2 0 .4.1.6.2l8.3 6.1-3.2-9.8c-.1-.4 0-.9.4-1.1l8.3-6.1H30.1c-.4 0-.8-.3-1-.7L26 9.5l-3.2 9.8c-.1.4-.5.7-1 .7H11.5l8.3 6.1c.4.3.5.7.4 1.1L17.1 37l8.3-6.1c.2-.1.4-.2.6-.2z"></path></symbol><symbol id=\'ei-tag-icon\' viewBox=\'0 0 50 50\'><path d="M22 40.1c-.9 0-1.7-.3-2.3-.9l-8.9-8.9c-1.2-1.2-1.2-3.3 0-4.5l11.9-11.9c1-1 3-1.8 4.5-1.8h7.6c1.8 0 3.2 1.4 3.2 3.2v7.6c0 1.5-.8 3.4-1.8 4.5L24.3 39.2c-.6.6-1.4.9-2.3.9zM27.2 14c-1 0-2.4.6-3 1.3L12.3 27.2c-.5.5-.5 1.2 0 1.7l8.9 8.9c.5.4 1.2.4 1.7 0l11.9-11.9c.7-.7 1.3-2.1 1.3-3v-7.6c0-.7-.5-1.2-1.2-1.2h-7.7z"></path><path d="M30 24c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></symbol><symbol id=\'ei-trash-icon\' viewBox=\'0 0 50 50\'><path d="M20 18h2v16h-2z"></path><path d="M24 18h2v16h-2z"></path><path d="M28 18h2v16h-2z"></path><path d="M12 12h26v2H12z"></path><path d="M30 12h-2v-1c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v1h-2v-1c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v1z"></path><path d="M31 40H19c-1.6 0-3-1.3-3.2-2.9l-1.8-24 2-.2 1.8 24c0 .6.6 1.1 1.2 1.1h12c.6 0 1.1-.5 1.2-1.1l1.8-24 2 .2-1.8 24C34 38.7 32.6 40 31 40z"></path></symbol><symbol id=\'ei-trophy-icon\' viewBox=\'0 0 50 50\'><path d="M28.6 29.4c3-2.3 7.4-5.7 7.4-18.4v-1H14v1c0 12.7 4.5 16.1 7.4 18.4 1.7 1.3 2.6 2 2.6 3.6v3c-1.6.2-3.2.8-3.8 2H18c-1.1 0-2 .9-2 2h18c0-1.1-.9-2-2-2h-2.2c-.6-1.2-2.1-1.8-3.8-2v-3c0-1.6.8-2.3 2.6-3.6zm-3.6.5c-.6-.8-1.5-1.5-2.3-2.1-2.7-2.1-6.4-4.9-6.6-15.8h18c-.2 10.8-3.9 13.7-6.6 15.8-1 .7-1.9 1.3-2.5 2.1z"></path><path d="M18.8 27C18.7 27 8 24.7 8 13v-1h7v2h-5c.6 9.2 9.1 11 9.2 11l-.4 2z"></path><path d="M31.2 27l-.4-2c.4-.1 8.6-1.9 9.2-11h-5v-2h7v1c0 11.7-10.7 14-10.8 14z"></path></symbol><symbol id=\'ei-undo-icon\' viewBox=\'0 0 50 50\'><path d="M25 38c-5.1 0-9.7-3-11.8-7.6l1.8-.8c1.8 3.9 5.7 6.4 10 6.4 6.1 0 11-4.9 11-11s-4.9-11-11-11c-4.6 0-8.5 2.8-10.1 7.3l-1.9-.7c1.9-5.2 6.6-8.6 12-8.6 7.2 0 13 5.8 13 13s-5.8 13-13 13z"></path><path d="M20 22h-8v-8h2v6h6z"></path></symbol><symbol id=\'ei-unlock-icon\' viewBox=\'0 0 50 50\'><path d="M18 23h-2v-4c0-5 4-9 9-9 4.5 0 8.4 3.4 8.9 7.9l-2 .2c-.4-3.5-3.4-6.1-6.9-6.1-3.9 0-7 3.1-7 7v4z"></path><path d="M33 40H17c-1.7 0-3-1.3-3-3V25c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM17 24c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V25c0-.6-.4-1-1-1H17z"></path><circle cx="25" cy="28" r="2"></circle><path d="M25.5 28h-1l-1 6h3z"></path></symbol><symbol id=\'ei-user-icon\' viewBox=\'0 0 50 50\'><path d="M25.1 42c-9.4 0-17-7.6-17-17s7.6-17 17-17 17 7.6 17 17-7.7 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.8-15-15-15z"></path><path d="M15.3 37.3l-1.8-.8c.5-1.2 2.1-1.9 3.8-2.7 1.7-.8 3.8-1.7 3.8-2.8v-1.5c-.6-.5-1.6-1.6-1.8-3.2-.5-.5-1.3-1.4-1.3-2.6 0-.7.3-1.3.5-1.7-.2-.8-.4-2.3-.4-3.5 0-3.9 2.7-6.5 7-6.5 1.2 0 2.7.3 3.5 1.2 1.9.4 3.5 2.6 3.5 5.3 0 1.7-.3 3.1-.5 3.8.2.3.4.8.4 1.4 0 1.3-.7 2.2-1.3 2.6-.2 1.6-1.1 2.6-1.7 3.1V31c0 .9 1.8 1.6 3.4 2.2 1.9.7 3.9 1.5 4.6 3.1l-1.9.7c-.3-.8-1.9-1.4-3.4-1.9-2.2-.8-4.7-1.7-4.7-4v-2.6l.5-.3s1.2-.8 1.2-2.4v-.7l.6-.3c.1 0 .6-.3.6-1.1 0-.2-.2-.5-.3-.6l-.4-.4.2-.5s.5-1.6.5-3.6c0-1.9-1.1-3.3-2-3.3h-.6l-.3-.5c0-.4-.7-.8-1.9-.8-3.1 0-5 1.7-5 4.5 0 1.3.5 3.5.5 3.5l.1.5-.4.5c-.1 0-.3.3-.3.7 0 .5.6 1.1.9 1.3l.4.3v.5c0 1.5 1.3 2.3 1.3 2.4l.5.3v2.6c0 2.4-2.6 3.6-5 4.6-1.1.4-2.6 1.1-2.8 1.6z"></path></symbol></svg>'), function() {
			for (var e = u.querySelectorAll("[data-icon]"), t = 0; t < e.length; t++) {
				var n = e[t],
					r = n.getAttribute("data-icon"),
					i = {
						class: n.className,
						size: n.getAttribute("data-size")
					};
				n.insertAdjacentHTML("beforebegin", (a = void 0, "<div class='" + (c = "icon icon--" + (o = r) + " " + ((s = s = i).size ? "icon--" + s.size : "") + " " + (s.class || "")) + "'>" + (a = "<svg class='icon__cnt'><use xlink:href='#" + o + "-icon' /></svg>", -1 < c.indexOf("spinner") ? "<div class='icon__spinner'>" + a + "</div>" : a) + "</div>")), n.parentNode.removeChild(n)
			}
			var o, s, a, c
		}()
	})
}(window.document);
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
	Prism = function() {
		var c = /\blang(?:uage)?-([\w-]+)\b/i,
			t = 0,
			A = _self.Prism = {
				manual: _self.Prism && _self.Prism.manual,
				disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
				util: {
					encode: function(e) {
						return e instanceof s ? new s(e.type, A.util.encode(e.content), e.alias) : "Array" === A.util.type(e) ? e.map(A.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
					},
					type: function(e) {
						return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
					},
					objId: function(e) {
						return e.__id || Object.defineProperty(e, "__id", {
							value: ++t
						}), e.__id
					},
					clone: function(e, n) {
						var t = A.util.type(e);
						switch (n = n || {}, t) {
						case "Object":
							if (n[A.util.objId(e)]) return n[A.util.objId(e)];
							var r = {};
							for (var i in n[A.util.objId(e)] = r, e) e.hasOwnProperty(i) && (r[i] = A.util.clone(e[i], n));
							return r;
						case "Array":
							if (n[A.util.objId(e)]) return n[A.util.objId(e)];
							r = [];
							return n[A.util.objId(e)] = r, e.forEach(function(e, t) {
								r[t] = A.util.clone(e, n)
							}), r
						}
						return e
					}
				},
				languages: {
					extend: function(e, t) {
						var n = A.util.clone(A.languages[e]);
						for (var r in t) n[r] = t[r];
						return n
					},
					insertBefore: function(n, e, t, r) {
						var i = (r = r || A.languages)[n];
						if (2 == arguments.length) {
							for (var o in t = e) t.hasOwnProperty(o) && (i[o] = t[o]);
							return i
						}
						var s = {};
						for (var a in i) if (i.hasOwnProperty(a)) {
							if (a == e) for (var o in t) t.hasOwnProperty(o) && (s[o] = t[o]);
							s[a] = i[a]
						}
						return A.languages.DFS(A.languages, function(e, t) {
							t === r[n] && e != n && (this[e] = s)
						}), r[n] = s
					},
					DFS: function(e, t, n, r) {
						for (var i in r = r || {}, e) e.hasOwnProperty(i) && (t.call(e, i, e[i], n || i), "Object" !== A.util.type(e[i]) || r[A.util.objId(e[i])] ? "Array" !== A.util.type(e[i]) || r[A.util.objId(e[i])] || (r[A.util.objId(e[i])] = !0, A.languages.DFS(e[i], t, i, r)) : (r[A.util.objId(e[i])] = !0, A.languages.DFS(e[i], t, null, r)))
					}
				},
				plugins: {},
				highlightAll: function(e, t) {
					A.highlightAllUnder(document, e, t)
				},
				highlightAllUnder: function(e, t, n) {
					var r = {
						callback: n,
						selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
					};
					A.hooks.run("before-highlightall", r);
					for (var i, o = r.elements || e.querySelectorAll(r.selector), s = 0; i = o[s++];) A.highlightElement(i, !0 === t, r.callback)
				},
				highlightElement: function(e, t, n) {
					for (var r, i, o = e; o && !c.test(o.className);) o = o.parentNode;
					o && (r = (o.className.match(c) || [, ""])[1].toLowerCase(), i = A.languages[r]), e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r, e.parentNode && (o = e.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r));
					var s = {
						element: e,
						language: r,
						grammar: i,
						code: e.textContent
					};
					if (A.hooks.run("before-sanity-check", s), !s.code || !s.grammar) return s.code && (A.hooks.run("before-highlight", s), s.element.textContent = s.code, A.hooks.run("after-highlight", s)), void A.hooks.run("complete", s);
					if (A.hooks.run("before-highlight", s), t && _self.Worker) {
						var a = new Worker(A.filename);
						a.onmessage = function(e) {
							s.highlightedCode = e.data, A.hooks.run("before-insert", s), s.element.innerHTML = s.highlightedCode, n && n.call(s.element), A.hooks.run("after-highlight", s), A.hooks.run("complete", s)
						}, a.postMessage(JSON.stringify({
							language: s.language,
							code: s.code,
							immediateClose: !0
						}))
					} else s.highlightedCode = A.highlight(s.code, s.grammar, s.language), A.hooks.run("before-insert", s), s.element.innerHTML = s.highlightedCode, n && n.call(e), A.hooks.run("after-highlight", s), A.hooks.run("complete", s)
				},
				highlight: function(e, t, n) {
					var r = {
						code: e,
						grammar: t,
						language: n
					};
					return A.hooks.run("before-tokenize", r), r.tokens = A.tokenize(r.code, r.grammar), A.hooks.run("after-tokenize", r), s.stringify(A.util.encode(r.tokens), r.language)
				},
				matchGrammar: function(e, t, n, r, i, o, s) {
					var a = A.Token;
					for (var c in n) if (n.hasOwnProperty(c) && n[c]) {
						if (c == s) return;
						var u = n[c];
						u = "Array" === A.util.type(u) ? u : [u];
						for (var l = 0; l < u.length; ++l) {
							var d = u[l],
								h = d.inside,
								f = !! d.lookbehind,
								p = !! d.greedy,
								m = 0,
								w = d.alias;
							if (p && !d.pattern.global) {
								var g = d.pattern.toString().match(/[imuy]*$/)[0];
								d.pattern = RegExp(d.pattern.source, g + "g")
							}
							d = d.pattern || d;
							for (var v = r, b = i; v < t.length; b += t[v].length, ++v) {
								var y = t[v];
								if (t.length > e.length) return;
								if (!(y instanceof a)) {
									if (p && v != t.length - 1) {
										if (d.lastIndex = b, !(S = d.exec(e))) break;
										for (var _ = S.index + (f ? S[1].length : 0), k = S.index + S[0].length, x = v, z = b, C = t.length; x < C && (z < k || !t[x].type && !t[x - 1].greedy); ++x)(z += t[x].length) <= _ && (++v, b = z);
										if (t[v] instanceof a) continue;
										M = x - v, y = e.slice(b, z), S.index -= b
									} else {
										d.lastIndex = 0;
										var S = d.exec(y),
											M = 1
									}
									if (S) {
										f && (m = S[1] ? S[1].length : 0);
										k = (_ = S.index + m) + (S = S[0].slice(m)).length;
										var T = y.slice(0, _),
											j = y.slice(k),
											q = [v, M];
										T && (++v, b += T.length, q.push(T));
										var E = new a(c, h ? A.tokenize(S, h) : S, w, S, p);
										if (q.push(E), j && q.push(j), Array.prototype.splice.apply(t, q), 1 != M && A.matchGrammar(e, t, n, v, b, !0, c), o) break
									} else if (o) break
								}
							}
						}
					}
				},
				tokenize: function(e, t, n) {
					var r = [e],
						i = t.rest;
					if (i) {
						for (var o in i) t[o] = i[o];
						delete t.rest
					}
					return A.matchGrammar(e, r, t, 0, 0, !1), r
				},
				hooks: {
					all: {},
					add: function(e, t) {
						var n = A.hooks.all;
						n[e] = n[e] || [], n[e].push(t)
					},
					run: function(e, t) {
						var n = A.hooks.all[e];
						if (n && n.length) for (var r, i = 0; r = n[i++];) r(t)
					}
				}
			},
			s = A.Token = function(e, t, n, r, i) {
				this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, this.greedy = !! i
			};
		if (s.stringify = function(t, n, e) {
			if ("string" == typeof t) return t;
			if ("Array" === A.util.type(t)) return t.map(function(e) {
				return s.stringify(e, n, t)
			}).join("");
			var r = {
				type: t.type,
				content: s.stringify(t.content, n, e),
				tag: "span",
				classes: ["token", t.type],
				attributes: {},
				language: n,
				parent: e
			};
			if (t.alias) {
				var i = "Array" === A.util.type(t.alias) ? t.alias : [t.alias];
				Array.prototype.push.apply(r.classes, i)
			}
			A.hooks.run("wrap", r);
			var o = Object.keys(r.attributes).map(function(e) {
				return e + '="' + (r.attributes[e] || "").replace(/"/g, "&quot;") + '"'
			}).join(" ");
			return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + r.content + "</" + r.tag + ">"
		}, !_self.document) return _self.addEventListener && (A.disableWorkerMessageHandler || _self.addEventListener("message", function(e) {
			var t = JSON.parse(e.data),
				n = t.language,
				r = t.code,
				i = t.immediateClose;
			_self.postMessage(A.highlight(r, A.languages[n], n)), i && _self.close()
		}, !1)), _self.Prism;
		var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
		return e && (A.filename = e.src, A.manual || e.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(A.highlightAll) : window.setTimeout(A.highlightAll, 16) : document.addEventListener("DOMContentLoaded", A.highlightAll))), _self.Prism
	}();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
	comment: /<!--[\s\S]*?-->/,
	prolog: /<\?[\s\S]+?\?>/,
	doctype: /<!DOCTYPE[\s\S]+?>/i,
	cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
	tag: {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		greedy: !0,
		inside: {
			tag: {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					punctuation: /^<\/?/,
					namespace: /^[^\s>\/:]+:/
				}
			},
			"attr-value": {
				pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
				inside: {
					punctuation: [/^=/,
					{
						pattern: /(^|[^\\])["']/,
						lookbehind: !0
					}]
				}
			},
			punctuation: /\/?>/,
			"attr-name": {
				pattern: /[^\s>\/]+/,
				inside: {
					namespace: /^[^\s>\/:]+:/
				}
			}
		}
	},
	entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function(e) {
	"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
	comment: /\/\*[\s\S]*?\*\//,
	atrule: {
		pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
		inside: {
			rule: /@[\w-]+/
		}
	},
	url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	selector: /[^{}\s][^{};]*?(?=\s*\{)/,
	string: {
		pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0
	},
	property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
	important: /\B!important\b/i,


	function :/[-a-z0-9]+(?=\()/i,
	punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
	style: {
		pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
		lookbehind: !0,
		inside: Prism.languages.css,
		alias: "language-css",
		greedy: !0
	}
}), Prism.languages.insertBefore("inside", "attr-value", {
	"style-attr": {
		pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
		inside: {
			"attr-name": {
				pattern: /^\s*style/i,
				inside: Prism.languages.markup.tag.inside
			},
			punctuation: /^\s*=\s*['"]|['"]\s*$/,
			"attr-value": {
				pattern: /.+/i,
				inside: Prism.languages.css
			}
		},
		alias: "language-css"
	}
}, Prism.languages.markup.tag)), Prism.languages.clike = {
	comment: [{
		pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
		lookbehind: !0
	}, {
		pattern: /(^|[^\\:])\/\/.*/,
		lookbehind: !0,
		greedy: !0
	}],
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0
	},
	"class-name": {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: !0,
		inside: {
			punctuation: /[.\\]/
		}
	},
	keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	boolean: /\b(?:true|false)\b/,


	function :/[a-z0-9_]+(?=\()/i,
	number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
	keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,


	function :/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
	operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
	regex: {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: !0,
		greedy: !0
	},
	"function-variable": {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
		alias: "function"
	},
	constant: /\b[A-Z][A-Z\d_]*\b/
}), Prism.languages.insertBefore("javascript", "string", {
	"template-string": {
		pattern: /`(?:\\[\s\S]|[^\\`])*`/,
		greedy: !0,
		inside: {
			interpolation: {
				pattern: /\$\{[^}]+\}/,
				inside: {
					"interpolation-punctuation": {
						pattern: /^\$\{|\}$/,
						alias: "punctuation"
					},
					rest: Prism.languages.javascript
				}
			},
			string: /[\s\S]+/
		}
	}
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
	script: {
		pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
		lookbehind: !0,
		inside: Prism.languages.javascript,
		alias: "language-javascript",
		greedy: !0
	}
}), Prism.languages.js = Prism.languages.javascript, "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function() {
	var c = {
		js: "javascript",
		py: "python",
		rb: "ruby",
		ps1: "powershell",
		psm1: "powershell",
		sh: "bash",
		bat: "batch",
		h: "c",
		tex: "latex"
	};
	Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t) {
		for (var e, n = t.getAttribute("data-src"), r = t, i = /\blang(?:uage)?-(?!\*)([\w-]+)\b/i; r && !i.test(r.className);) r = r.parentNode;
		if (r && (e = (t.className.match(i) || [, ""])[1]), !e) {
			var o = (n.match(/\.(\w+)$/) || [, ""])[1];
			e = c[o] || o
		}
		var s = document.createElement("code");
		s.className = "language-" + e, t.textContent = "", s.textContent = "Loading…", t.appendChild(s);
		var a = new XMLHttpRequest;
		a.open("GET", n, !0), a.onreadystatechange = function() {
			4 == a.readyState && (a.status < 400 && a.responseText ? (s.textContent = a.responseText, Prism.highlightElement(s)) : 400 <= a.status ? s.textContent = "✖ Error " + a.status + " while fetching file: " + a.statusText : s.textContent = "✖ Error: File does not exist or is empty")
		}, t.hasAttribute("data-download-link") && Prism.plugins.toolbar && Prism.plugins.toolbar.registerButton("download-file", function() {
			var e = document.createElement("a");
			return e.textContent = t.getAttribute("data-download-link-label") || "Download", e.setAttribute("download", ""), e.href = n, e
		}), a.send(null)
	})
}, document.addEventListener("DOMContentLoaded", self.Prism.fileHighlight)), function() {
	var t, u, l, e, n, d, h, f, p, m, w, g, v, b, y, _, k, x, z, C, S, M, T, j, q, r, i, E = function(e) {
			var t = new E.Index;
			return t.pipeline.add(E.trimmer, E.stopWordFilter, E.stemmer), e && e.call(t, t), t
		};
	E.version = "0.7.0", E.utils = {}, E.utils.warn = (t = this, function(e) {
		t.console && console.warn && console.warn(e)
	}), E.utils.asString = function(e) {
		return null == e ? "" : e.toString()
	}, E.EventEmitter = function() {
		this.events = {}
	}, E.EventEmitter.prototype.addListener = function() {
		var e = Array.prototype.slice.call(arguments),
			t = e.pop(),
			n = e;
		if ("function" != typeof t) throw new TypeError("last argument must be a function");
		n.forEach(function(e) {
			this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t)
		}, this)
	}, E.EventEmitter.prototype.removeListener = function(e, t) {
		if (this.hasHandler(e)) {
			var n = this.events[e].indexOf(t);
			this.events[e].splice(n, 1), this.events[e].length || delete this.events[e]
		}
	}, E.EventEmitter.prototype.emit = function(e) {
		if (this.hasHandler(e)) {
			var t = Array.prototype.slice.call(arguments, 1);
			this.events[e].forEach(function(e) {
				e.apply(void 0, t)
			})
		}
	}, E.EventEmitter.prototype.hasHandler = function(e) {
		return e in this.events
	}, E.tokenizer = function(e) {
		return arguments.length && null != e && null != e ? Array.isArray(e) ? e.map(function(e) {
			return E.utils.asString(e).toLowerCase()
		}) : e.toString().trim().toLowerCase().split(E.tokenizer.seperator) : []
	}, E.tokenizer.seperator = /[\s\-]+/, E.tokenizer.load = function(e) {
		var t = this.registeredFunctions[e];
		if (!t) throw new Error("Cannot load un-registered function: " + e);
		return t
	}, E.tokenizer.label = "default", E.tokenizer.registeredFunctions = {
	default:
		E.tokenizer
	}, E.tokenizer.registerFunction = function(e, t) {
		t in this.registeredFunctions && E.utils.warn("Overwriting existing tokenizer: " + t), e.label = t, this.registeredFunctions[t] = e
	}, E.Pipeline = function() {
		this._stack = []
	}, E.Pipeline.registeredFunctions = {}, E.Pipeline.registerFunction = function(e, t) {
		t in this.registeredFunctions && E.utils.warn("Overwriting existing registered function: " + t), e.label = t, E.Pipeline.registeredFunctions[e.label] = e
	}, E.Pipeline.warnIfFunctionNotRegistered = function(e) {
		e.label && e.label in this.registeredFunctions || E.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", e)
	}, E.Pipeline.load = function(e) {
		var n = new E.Pipeline;
		return e.forEach(function(e) {
			var t = E.Pipeline.registeredFunctions[e];
			if (!t) throw new Error("Cannot load un-registered function: " + e);
			n.add(t)
		}), n
	}, E.Pipeline.prototype.add = function() {
		Array.prototype.slice.call(arguments).forEach(function(e) {
			E.Pipeline.warnIfFunctionNotRegistered(e), this._stack.push(e)
		}, this)
	}, E.Pipeline.prototype.after = function(e, t) {
		E.Pipeline.warnIfFunctionNotRegistered(t);
		var n = this._stack.indexOf(e);
		if (-1 == n) throw new Error("Cannot find existingFn");
		n += 1, this._stack.splice(n, 0, t)
	}, E.Pipeline.prototype.before = function(e, t) {
		E.Pipeline.warnIfFunctionNotRegistered(t);
		var n = this._stack.indexOf(e);
		if (-1 == n) throw new Error("Cannot find existingFn");
		this._stack.splice(n, 0, t)
	}, E.Pipeline.prototype.remove = function(e) {
		var t = this._stack.indexOf(e); - 1 != t && this._stack.splice(t, 1)
	}, E.Pipeline.prototype.run = function(e) {
		for (var t = [], n = e.length, r = this._stack.length, i = 0; i < n; i++) {
			for (var o = e[i], s = 0; s < r && (void 0 !== (o = this._stack[s](o, i, e)) && "" !== o); s++);
			void 0 !== o && "" !== o && t.push(o)
		}
		return t
	}, E.Pipeline.prototype.reset = function() {
		this._stack = []
	}, E.Pipeline.prototype.toJSON = function() {
		return this._stack.map(function(e) {
			return E.Pipeline.warnIfFunctionNotRegistered(e), e.label
		})
	}, E.Vector = function() {
		this._magnitude = null, this.list = void 0, this.length = 0
	}, E.Vector.Node = function(e, t, n) {
		this.idx = e, this.val = t, this.next = n
	}, E.Vector.prototype.insert = function(e, t) {
		this._magnitude = void 0;
		var n = this.list;
		if (!n) return this.list = new E.Vector.Node(e, t, n), this.length++;
		if (e < n.idx) return this.list = new E.Vector.Node(e, t, n), this.length++;
		for (var r = n, i = n.next; null != i;) {
			if (e < i.idx) return r.next = new E.Vector.Node(e, t, i), this.length++;
			i = (r = i).next
		}
		return r.next = new E.Vector.Node(e, t, i), this.length++
	}, E.Vector.prototype.magnitude = function() {
		if (this._magnitude) return this._magnitude;
		for (var e, t = this.list, n = 0; t;) n += (e = t.val) * e, t = t.next;
		return this._magnitude = Math.sqrt(n)
	}, E.Vector.prototype.dot = function(e) {
		for (var t = this.list, n = e.list, r = 0; t && n;) t.idx < n.idx ? t = t.next : (t.idx > n.idx || (r += t.val * n.val, t = t.next), n = n.next);
		return r
	}, E.Vector.prototype.similarity = function(e) {
		return this.dot(e) / (this.magnitude() * e.magnitude())
	}, E.SortedSet = function() {
		this.length = 0, this.elements = []
	}, E.SortedSet.load = function(e) {
		var t = new this;
		return t.elements = e, t.length = e.length, t
	}, E.SortedSet.prototype.add = function() {
		var e, t;
		for (e = 0; e < arguments.length; e++) t = arguments[e], ~this.indexOf(t) || this.elements.splice(this.locationFor(t), 0, t);
		this.length = this.elements.length
	}, E.SortedSet.prototype.toArray = function() {
		return this.elements.slice()
	}, E.SortedSet.prototype.map = function(e, t) {
		return this.elements.map(e, t)
	}, E.SortedSet.prototype.forEach = function(e, t) {
		return this.elements.forEach(e, t)
	}, E.SortedSet.prototype.indexOf = function(e) {
		for (var t = 0, n = this.elements.length, r = n - t, i = t + Math.floor(r / 2), o = this.elements[i]; 1 < r;) {
			if (o === e) return i;
			o < e && (t = i), e < o && (n = i), r = n - t, i = t + Math.floor(r / 2), o = this.elements[i]
		}
		return o === e ? i : -1
	}, E.SortedSet.prototype.locationFor = function(e) {
		for (var t = 0, n = this.elements.length, r = n - t, i = t + Math.floor(r / 2), o = this.elements[i]; 1 < r;) o < e && (t = i), e < o && (n = i), r = n - t, i = t + Math.floor(r / 2), o = this.elements[i];
		return e < o ? i : o < e ? i + 1 : void 0
	}, E.SortedSet.prototype.intersect = function(e) {
		for (var t = new E.SortedSet, n = 0, r = 0, i = this.length, o = e.length, s = this.elements, a = e.elements; !(i - 1 < n || o - 1 < r);) s[n] !== a[r] ? s[n] < a[r] ? n++ : s[n] > a[r] && r++ : (t.add(s[n]), n++, r++);
		return t
	}, E.SortedSet.prototype.clone = function() {
		var e = new E.SortedSet;
		return e.elements = this.toArray(), e.length = e.elements.length, e
	}, E.SortedSet.prototype.union = function(e) {
		var t, n, r;
		this.length >= e.length ? (t = this, n = e) : (t = e, n = this), r = t.clone();
		for (var i = 0, o = n.toArray(); i < o.length; i++) r.add(o[i]);
		return r
	}, E.SortedSet.prototype.toJSON = function() {
		return this.toArray()
	}, E.Index = function() {
		this._fields = [], this._ref = "id", this.pipeline = new E.Pipeline, this.documentStore = new E.Store, this.tokenStore = new E.TokenStore, this.corpusTokens = new E.SortedSet, this.eventEmitter = new E.EventEmitter, this.tokenizerFn = E.tokenizer, this._idfCache = {}, this.on("add", "remove", "update", function() {
			this._idfCache = {}
		}.bind(this))
	}, E.Index.prototype.on = function() {
		var e = Array.prototype.slice.call(arguments);
		return this.eventEmitter.addListener.apply(this.eventEmitter, e)
	}, E.Index.prototype.off = function(e, t) {
		return this.eventEmitter.removeListener(e, t)
	}, E.Index.load = function(e) {
		e.version !== E.version && E.utils.warn("version mismatch: current " + E.version + " importing " + e.version);
		var t = new this;
		return t._fields = e.fields, t._ref = e.ref, t.tokenizer = E.tokenizer.load(e.tokenizer), t.documentStore = E.Store.load(e.documentStore), t.tokenStore = E.TokenStore.load(e.tokenStore), t.corpusTokens = E.SortedSet.load(e.corpusTokens), t.pipeline = E.Pipeline.load(e.pipeline), t
	}, E.Index.prototype.field = function(e, t) {
		var n = {
			name: e,
			boost: (t = t || {}).boost || 1
		};
		return this._fields.push(n), this
	}, E.Index.prototype.ref = function(e) {
		return this._ref = e, this
	}, E.Index.prototype.tokenizer = function(e) {
		return e.label && e.label in E.tokenizer.registeredFunctions || E.utils.warn("Function is not a registered tokenizer. This may cause problems when serialising the index"), this.tokenizerFn = e, this
	}, E.Index.prototype.add = function(i, e) {
		var o = {},
			s = new E.SortedSet,
			t = i[this._ref];
		e = void 0 === e || e;
		this._fields.forEach(function(e) {
			var t = this.pipeline.run(this.tokenizerFn(i[e.name]));
			o[e.name] = t;
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				s.add(r), this.corpusTokens.add(r)
			}
		}, this), this.documentStore.set(t, s);
		for (var n = 0; n < s.length; n++) {
			for (var r = s.elements[n], a = 0, c = 0; c < this._fields.length; c++) {
				var u = this._fields[c],
					l = o[u.name],
					d = l.length;
				if (d) {
					for (var h = 0, f = 0; f < d; f++) l[f] === r && h++;
					a += h / d * u.boost
				}
			}
			this.tokenStore.add(r, {
				ref: t,
				tf: a
			})
		}
		e && this.eventEmitter.emit("add", i, this)
	}, E.Index.prototype.remove = function(e, t) {
		var n = e[this._ref];
		t = void 0 === t || t;
		if (this.documentStore.has(n)) {
			var r = this.documentStore.get(n);
			this.documentStore.remove(n), r.forEach(function(e) {
				this.tokenStore.remove(e, n)
			}, this), t && this.eventEmitter.emit("remove", e, this)
		}
	}, E.Index.prototype.update = function(e, t) {
		t = void 0 === t || t;
		this.remove(e, !1), this.add(e, !1), t && this.eventEmitter.emit("update", e, this)
	}, E.Index.prototype.idf = function(e) {
		var t = "@" + e;
		if (Object.prototype.hasOwnProperty.call(this._idfCache, t)) return this._idfCache[t];
		var n = this.tokenStore.count(e),
			r = 1;
		return 0 < n && (r = 1 + Math.log(this.documentStore.length / n)), this._idfCache[t] = r
	}, E.Index.prototype.search = function(e) {
		var t = this.pipeline.run(this.tokenizerFn(e)),
			p = new E.Vector,
			r = [],
			i = this._fields.reduce(function(e, t) {
				return e + t.boost
			}, 0);
		return t.some(function(e) {
			return this.tokenStore.has(e)
		}, this) ? (t.forEach(function(d, e, t) {
			var h = 1 / t.length * this._fields.length * i,
				f = this,
				n = this.tokenStore.expand(d).reduce(function(e, t) {
					var n = f.corpusTokens.indexOf(t),
						r = f.idf(t),
						i = 1,
						o = new E.SortedSet;
					if (t !== d) {
						var s = Math.max(3, t.length - d.length);
						i = 1 / Math.log(s)
					} - 1 < n && p.insert(n, h * r * i);
					for (var a = f.tokenStore.get(t), c = Object.keys(a), u = c.length, l = 0; l < u; l++) o.add(a[c[l]].ref);
					return e.union(o)
				}, new E.SortedSet);
			r.push(n)
		}, this), r.reduce(function(e, t) {
			return e.intersect(t)
		}).map(function(e) {
			return {
				ref: e,
				score: p.similarity(this.documentVector(e))
			}
		}, this).sort(function(e, t) {
			return t.score - e.score
		})) : []
	}, E.Index.prototype.documentVector = function(e) {
		for (var t = this.documentStore.get(e), n = t.length, r = new E.Vector, i = 0; i < n; i++) {
			var o = t.elements[i],
				s = this.tokenStore.get(o)[e].tf,
				a = this.idf(o);
			r.insert(this.corpusTokens.indexOf(o), s * a)
		}
		return r
	}, E.Index.prototype.toJSON = function() {
		return {
			version: E.version,
			fields: this._fields,
			ref: this._ref,
			tokenizer: this.tokenizerFn.label,
			documentStore: this.documentStore.toJSON(),
			tokenStore: this.tokenStore.toJSON(),
			corpusTokens: this.corpusTokens.toJSON(),
			pipeline: this.pipeline.toJSON()
		}
	}, E.Index.prototype.use = function(e) {
		var t = Array.prototype.slice.call(arguments, 1);
		t.unshift(this), e.apply(this, t)
	}, E.Store = function() {
		this.store = {}, this.length = 0
	}, E.Store.load = function(n) {
		var e = new this;
		return e.length = n.length, e.store = Object.keys(n.store).reduce(function(e, t) {
			return e[t] = E.SortedSet.load(n.store[t]), e
		}, {}), e
	}, E.Store.prototype.set = function(e, t) {
		this.has(e) || this.length++, this.store[e] = t
	}, E.Store.prototype.get = function(e) {
		return this.store[e]
	}, E.Store.prototype.has = function(e) {
		return e in this.store
	}, E.Store.prototype.remove = function(e) {
		this.has(e) && (delete this.store[e], this.length--)
	}, E.Store.prototype.toJSON = function() {
		return {
			store: this.store,
			length: this.length
		}
	}, E.stemmer = (u = {
		ational: "ate",
		tional: "tion",
		enci: "ence",
		anci: "ance",
		izer: "ize",
		bli: "ble",
		alli: "al",
		entli: "ent",
		eli: "e",
		ousli: "ous",
		ization: "ize",
		ation: "ate",
		ator: "ate",
		alism: "al",
		iveness: "ive",
		fulness: "ful",
		ousness: "ous",
		aliti: "al",
		iviti: "ive",
		biliti: "ble",
		logi: "log"
	}, l = {
		icate: "ic",
		ative: "",
		alize: "al",
		iciti: "ic",
		ical: "ic",
		ful: "",
		ness: ""
	}, e = "[aeiouy]", n = "[^aeiou][^aeiouy]*", d = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), h = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), f = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"), p = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"), m = /^(.+?)(ss|i)es$/, w = /^(.+?)([^s])s$/, g = /^(.+?)eed$/, v = /^(.+?)(ed|ing)$/, b = /.$/, y = /(at|bl|iz)$/, _ = new RegExp("([^aeiouylsz])\\1$"), k = new RegExp("^" + n + e + "[^aeiouwxy]$"), x = /^(.+?[^aeiou])y$/, z = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, C = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, S = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, M = /^(.+?)(s|t)(ion)$/, T = /^(.+?)e$/, j = /ll$/, q = new RegExp("^" + n + e + "[^aeiouwxy]$"), function(e) {
		var t, n, r, i, o, s, a;
		if (e.length < 3) return e;
		if ("y" == (r = e.substr(0, 1)) && (e = r.toUpperCase() + e.substr(1)), o = w, (i = m).test(e) ? e = e.replace(i, "$1$2") : o.test(e) && (e = e.replace(o, "$1$2")), o = v, (i = g).test(e)) {
			var c = i.exec(e);
			(i = d).test(c[1]) && (i = b, e = e.replace(i, ""))
		} else o.test(e) && (t = (c = o.exec(e))[1], (o = p).test(t) && (s = _, a = k, (o = y).test(e = t) ? e += "e" : s.test(e) ? (i = b, e = e.replace(i, "")) : a.test(e) && (e += "e")));
		return (i = x).test(e) && (e = (t = (c = i.exec(e))[1]) + "i"), (i = z).test(e) && (t = (c = i.exec(e))[1], n = c[2], (i = d).test(t) && (e = t + u[n])), (i = C).test(e) && (t = (c = i.exec(e))[1], n = c[2], (i = d).test(t) && (e = t + l[n])), o = M, (i = S).test(e) ? (t = (c = i.exec(e))[1], (i = h).test(t) && (e = t)) : o.test(e) && (t = (c = o.exec(e))[1] + c[2], (o = h).test(t) && (e = t)), (i = T).test(e) && (t = (c = i.exec(e))[1], o = f, s = q, ((i = h).test(t) || o.test(t) && !s.test(t)) && (e = t)), o = h, (i = j).test(e) && o.test(e) && (i = b, e = e.replace(i, "")), "y" == r && (e = r.toLowerCase() + e.substr(1)), e
	}), E.Pipeline.registerFunction(E.stemmer, "stemmer"), E.generateStopWordFilter = function(e) {
		var t = e.reduce(function(e, t) {
			return e[t] = t, e
		}, {});
		return function(e) {
			if (e && t[e] !== e) return e
		}
	}, E.stopWordFilter = E.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]), E.Pipeline.registerFunction(E.stopWordFilter, "stopWordFilter"), E.trimmer = function(e) {
		return e.replace(/^\W+/, "").replace(/\W+$/, "")
	}, E.Pipeline.registerFunction(E.trimmer, "trimmer"), E.TokenStore = function() {
		this.root = {
			docs: {}
		}, this.length = 0
	}, E.TokenStore.load = function(e) {
		var t = new this;
		return t.root = e.root, t.length = e.length, t
	}, E.TokenStore.prototype.add = function(e, t, n) {
		n = n || this.root;
		var r = e.charAt(0),
			i = e.slice(1);
		return r in n || (n[r] = {
			docs: {}
		}), 0 === i.length ? (n[r].docs[t.ref] = t, void(this.length += 1)) : this.add(i, t, n[r])
	}, E.TokenStore.prototype.has = function(e) {
		if (!e) return !1;
		for (var t = this.root, n = 0; n < e.length; n++) {
			if (!t[e.charAt(n)]) return !1;
			t = t[e.charAt(n)]
		}
		return !0
	}, E.TokenStore.prototype.getNode = function(e) {
		if (!e) return {};
		for (var t = this.root, n = 0; n < e.length; n++) {
			if (!t[e.charAt(n)]) return {};
			t = t[e.charAt(n)]
		}
		return t
	}, E.TokenStore.prototype.get = function(e, t) {
		return this.getNode(e, t).docs || {}
	}, E.TokenStore.prototype.count = function(e, t) {
		return Object.keys(this.get(e, t)).length
	}, E.TokenStore.prototype.remove = function(e, t) {
		if (e) {
			for (var n = this.root, r = 0; r < e.length; r++) {
				if (!(e.charAt(r) in n)) return;
				n = n[e.charAt(r)]
			}
			delete n.docs[t]
		}
	}, E.TokenStore.prototype.expand = function(t, n) {
		var e = this.getNode(t),
			r = e.docs || {};
		n = n || [];
		return Object.keys(r).length && n.push(t), Object.keys(e).forEach(function(e) {
			"docs" !== e && n.concat(this.expand(t + e, n))
		}, this), n
	}, E.TokenStore.prototype.toJSON = function() {
		return {
			root: this.root,
			length: this.length
		}
	}, r = this, i = function() {
		return E
	}, "function" == typeof define && define.amd ? define(i) : "object" == typeof exports ? module.exports = i() : r.lunr = i()
}(), function(e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()(e.lunr)
}(this, function() {
	return function(e) {
		e.stemmerSupport = {
			Among: function(e, t, n, r) {
				if (this.toCharArray = function(e) {
					for (var t = e.length, n = new Array(t), r = 0; r < t; r++) n[r] = e.charCodeAt(r);
					return n
				}, !e && "" != e || !t && 0 != t || !n) throw "Bad Among initialisation: s:" + e + ", substring_i: " + t + ", result: " + n;
				this.s_size = e.length, this.s = this.toCharArray(e), this.substring_i = t, this.result = n, this.method = r
			},
			SnowballProgram: function() {
				var m;
				return {
					bra: 0,
					ket: 0,
					limit: 0,
					cursor: 0,
					limit_backward: 0,
					setCurrent: function(e) {
						m = e, this.cursor = 0, this.limit = e.length, this.limit_backward = 0, this.bra = this.cursor, this.ket = this.limit
					},
					getCurrent: function() {
						var e = m;
						return m = null, e
					},
					in_grouping: function(e, t, n) {
						if (this.cursor < this.limit) {
							var r = m.charCodeAt(this.cursor);
							if (r <= n && t <= r && e[(r -= t) >> 3] & 1 << (7 & r)) return this.cursor++, !0
						}
						return !1
					},
					in_grouping_b: function(e, t, n) {
						if (this.cursor > this.limit_backward) {
							var r = m.charCodeAt(this.cursor - 1);
							if (r <= n && t <= r && e[(r -= t) >> 3] & 1 << (7 & r)) return this.cursor--, !0
						}
						return !1
					},
					out_grouping: function(e, t, n) {
						if (this.cursor < this.limit) {
							var r = m.charCodeAt(this.cursor);
							if (n < r || r < t) return this.cursor++, !0;
							if (!(e[(r -= t) >> 3] & 1 << (7 & r))) return this.cursor++, !0
						}
						return !1
					},
					out_grouping_b: function(e, t, n) {
						if (this.cursor > this.limit_backward) {
							var r = m.charCodeAt(this.cursor - 1);
							if (n < r || r < t) return this.cursor--, !0;
							if (!(e[(r -= t) >> 3] & 1 << (7 & r))) return this.cursor--, !0
						}
						return !1
					},
					eq_s: function(e, t) {
						if (this.limit - this.cursor < e) return !1;
						for (var n = 0; n < e; n++) if (m.charCodeAt(this.cursor + n) != t.charCodeAt(n)) return !1;
						return this.cursor += e, !0
					},
					eq_s_b: function(e, t) {
						if (this.cursor - this.limit_backward < e) return !1;
						for (var n = 0; n < e; n++) if (m.charCodeAt(this.cursor - e + n) != t.charCodeAt(n)) return !1;
						return this.cursor -= e, !0
					},
					find_among: function(e, t) {
						for (var n = 0, r = t, i = this.cursor, o = this.limit, s = 0, a = 0, c = !1;;) {
							for (var u = n + (r - n >> 1), l = 0, d = s < a ? s : a, h = e[u], f = d; f < h.s_size; f++) {
								if (i + d == o) {
									l = -1;
									break
								}
								if (l = m.charCodeAt(i + d) - h.s[f]) break;
								d++
							}
							if (l < 0 ? (r = u, a = d) : (n = u, s = d), r - n <= 1) {
								if (0 < n || r == n || c) break;
								c = !0
							}
						}
						for (;;) {
							if (s >= (h = e[n]).s_size) {
								if (this.cursor = i + h.s_size, !h.method) return h.result;
								var p = h.method();
								if (this.cursor = i + h.s_size, p) return h.result
							}
							if ((n = h.substring_i) < 0) return 0
						}
					},
					find_among_b: function(e, t) {
						for (var n = 0, r = t, i = this.cursor, o = this.limit_backward, s = 0, a = 0, c = !1;;) {
							for (var u = n + (r - n >> 1), l = 0, d = s < a ? s : a, h = (f = e[u]).s_size - 1 - d; 0 <= h; h--) {
								if (i - d == o) {
									l = -1;
									break
								}
								if (l = m.charCodeAt(i - 1 - d) - f.s[h]) break;
								d++
							}
							if (l < 0 ? (r = u, a = d) : (n = u, s = d), r - n <= 1) {
								if (0 < n || r == n || c) break;
								c = !0
							}
						}
						for (;;) {
							var f;
							if (s >= (f = e[n]).s_size) {
								if (this.cursor = i - f.s_size, !f.method) return f.result;
								var p = f.method();
								if (this.cursor = i - f.s_size, p) return f.result
							}
							if ((n = f.substring_i) < 0) return 0
						}
					},
					replace_s: function(e, t, n) {
						var r = n.length - (t - e);
						return m = m.substring(0, e) + n + m.substring(t), this.limit += r, this.cursor >= t ? this.cursor += r : this.cursor > e && (this.cursor = e), r
					},
					slice_check: function() {
						if (this.bra < 0 || this.bra > this.ket || this.ket > this.limit || this.limit > m.length) throw "faulty slice operation"
					},
					slice_from: function(e) {
						this.slice_check(), this.replace_s(this.bra, this.ket, e)
					},
					slice_del: function() {
						this.slice_from("")
					},
					insert: function(e, t, n) {
						var r = this.replace_s(e, t, n);
						e <= this.bra && (this.bra += r), e <= this.ket && (this.ket += r)
					},
					slice_to: function() {
						return this.slice_check(), m.substring(this.bra, this.ket)
					},
					eq_v_b: function(e) {
						return this.eq_s_b(e.length, e)
					}
				}
			}
		}, e.trimmerSupport = {
			generateTrimmer: function(e) {
				var t = new RegExp("^[^" + e + "]+"),
					n = new RegExp("[^" + e + "]+$");
				return function(e) {
					return "function" == typeof e.update ? e.update(function(e) {
						return e.replace(t, "").replace(n, "")
					}) : e.replace(t, "").replace(n, "")
				}
			}
		}
	}
}), function(e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()(e.lunr)
}(this, function() {
	return function(e) {
		if (void 0 === e) throw new Error("Lunr is not present. Please include / require Lunr before this script.");
		if (void 0 === e.stemmerSupport) throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");
		var v, b, t;
		e.ru = function() {
			this.pipeline.reset(), this.pipeline.add(e.ru.trimmer, e.ru.stopWordFilter, e.ru.stemmer), this.searchPipeline && (this.searchPipeline.reset(), this.searchPipeline.add(e.ru.stemmer))
		}, e.ru.wordCharacters = "Ѐ-҄҇-ԯᴫᵸⷠ-ⷿꙀ-ꚟ︮︯", e.ru.trimmer = e.trimmerSupport.generateTrimmer(e.ru.wordCharacters), e.Pipeline.registerFunction(e.ru.trimmer, "trimmer-ru"), e.ru.stemmer = (v = e.stemmerSupport.Among, b = e.stemmerSupport.SnowballProgram, t = new function() {
			var t, e, n = [new v("в", -1, 1), new v("ив", 0, 2), new v("ыв", 0, 2), new v("вши", -1, 1), new v("ивши", 3, 2), new v("ывши", 3, 2), new v("вшись", -1, 1), new v("ившись", 6, 2), new v("ывшись", 6, 2)],
				r = [new v("ее", -1, 1), new v("ие", -1, 1), new v("ое", -1, 1), new v("ые", -1, 1), new v("ими", -1, 1), new v("ыми", -1, 1), new v("ей", -1, 1), new v("ий", -1, 1), new v("ой", -1, 1), new v("ый", -1, 1), new v("ем", -1, 1), new v("им", -1, 1), new v("ом", -1, 1), new v("ым", -1, 1), new v("его", -1, 1), new v("ого", -1, 1), new v("ему", -1, 1), new v("ому", -1, 1), new v("их", -1, 1), new v("ых", -1, 1), new v("ею", -1, 1), new v("ою", -1, 1), new v("ую", -1, 1), new v("юю", -1, 1), new v("ая", -1, 1), new v("яя", -1, 1)],
				i = [new v("ем", -1, 1), new v("нн", -1, 1), new v("вш", -1, 1), new v("ивш", 2, 2), new v("ывш", 2, 2), new v("щ", -1, 1), new v("ющ", 5, 1), new v("ующ", 6, 2)],
				o = [new v("сь", -1, 1), new v("ся", -1, 1)],
				s = [new v("ла", -1, 1), new v("ила", 0, 2), new v("ыла", 0, 2), new v("на", -1, 1), new v("ена", 3, 2), new v("ете", -1, 1), new v("ите", -1, 2), new v("йте", -1, 1), new v("ейте", 7, 2), new v("уйте", 7, 2), new v("ли", -1, 1), new v("или", 10, 2), new v("ыли", 10, 2), new v("й", -1, 1), new v("ей", 13, 2), new v("уй", 13, 2), new v("л", -1, 1), new v("ил", 16, 2), new v("ыл", 16, 2), new v("ем", -1, 1), new v("им", -1, 2), new v("ым", -1, 2), new v("н", -1, 1), new v("ен", 22, 2), new v("ло", -1, 1), new v("ило", 24, 2), new v("ыло", 24, 2), new v("но", -1, 1), new v("ено", 27, 2), new v("нно", 27, 1), new v("ет", -1, 1), new v("ует", 30, 2), new v("ит", -1, 2), new v("ыт", -1, 2), new v("ют", -1, 1), new v("уют", 34, 2), new v("ят", -1, 2), new v("ны", -1, 1), new v("ены", 37, 2), new v("ть", -1, 1), new v("ить", 39, 2), new v("ыть", 39, 2), new v("ешь", -1, 1), new v("ишь", -1, 2), new v("ю", -1, 2), new v("ую", 44, 2)],
				a = [new v("а", -1, 1), new v("ев", -1, 1), new v("ов", -1, 1), new v("е", -1, 1), new v("ие", 3, 1), new v("ье", 3, 1), new v("и", -1, 1), new v("еи", 6, 1), new v("ии", 6, 1), new v("ами", 6, 1), new v("ями", 6, 1), new v("иями", 10, 1), new v("й", -1, 1), new v("ей", 12, 1), new v("ией", 13, 1), new v("ий", 12, 1), new v("ой", 12, 1), new v("ам", -1, 1), new v("ем", -1, 1), new v("ием", 18, 1), new v("ом", -1, 1), new v("ям", -1, 1), new v("иям", 21, 1), new v("о", -1, 1), new v("у", -1, 1), new v("ах", -1, 1), new v("ях", -1, 1), new v("иях", 26, 1), new v("ы", -1, 1), new v("ь", -1, 1), new v("ю", -1, 1), new v("ию", 30, 1), new v("ью", 30, 1), new v("я", -1, 1), new v("ия", 33, 1), new v("ья", 33, 1)],
				c = [new v("ост", -1, 1), new v("ость", -1, 1)],
				u = [new v("ейше", -1, 1), new v("н", -1, 2), new v("ейш", -1, 1), new v("ь", -1, 3)],
				l = [33, 65, 8, 232],
				d = new b;

			function h() {
				for (; !d.in_grouping(l, 1072, 1103);) {
					if (d.cursor >= d.limit) return !1;
					d.cursor++
				}
				return !0
			}
			function f() {
				for (; !d.out_grouping(l, 1072, 1103);) {
					if (d.cursor >= d.limit) return !1;
					d.cursor++
				}
				return !0
			}
			function p(e, t) {
				var n, r;
				if (d.ket = d.cursor, n = d.find_among_b(e, t)) {
					switch (d.bra = d.cursor, n) {
					case 1:
						if (r = d.limit - d.cursor, !d.eq_s_b(1, "а") && (d.cursor = d.limit - r, !d.eq_s_b(1, "я"))) return !1;
					case 2:
						d.slice_del()
					}
					return !0
				}
				return !1
			}
			function m(e, t) {
				var n;
				return d.ket = d.cursor, !! (n = d.find_among_b(e, t)) && (d.bra = d.cursor, 1 == n && d.slice_del(), !0)
			}
			function w() {
				return !!m(r, 26) && (p(i, 8), !0)
			}
			function g() {
				var e;
				d.ket = d.cursor, (e = d.find_among_b(c, 2)) && (d.bra = d.cursor, t <= d.cursor && 1 == e && d.slice_del())
			}
			this.setCurrent = function(e) {
				d.setCurrent(e)
			}, this.getCurrent = function() {
				return d.getCurrent()
			}, this.stem = function() {
				return e = d.limit, t = e, h() && (e = d.cursor, f() && h() && f() && (t = d.cursor)), d.cursor = d.limit, !(d.cursor < e) && (d.limit_backward = e, p(n, 9) || (d.cursor = d.limit, m(o, 2) || (d.cursor = d.limit), w() || (d.cursor = d.limit, p(s, 46) || (d.cursor = d.limit, m(a, 36)))), d.cursor = d.limit, d.ket = d.cursor, d.eq_s_b(1, "и") ? (d.bra = d.cursor, d.slice_del()) : d.cursor = d.limit, g(), d.cursor = d.limit, function() {
					var e;
					if (d.ket = d.cursor, e = d.find_among_b(u, 4)) switch (d.bra = d.cursor, e) {
					case 1:
						if (d.slice_del(), d.ket = d.cursor, !d.eq_s_b(1, "н")) break;
						d.bra = d.cursor;
					case 2:
						if (!d.eq_s_b(1, "н")) break;
					case 3:
						d.slice_del()
					}
				}(), !0)
			}
		}, function(e) {
			return "function" == typeof e.update ? e.update(function(e) {
				return t.setCurrent(e), t.stem(), t.getCurrent()
			}) : (t.setCurrent(e), t.stem(), t.getCurrent())
		}), e.Pipeline.registerFunction(e.ru.stemmer, "stemmer-ru"), e.ru.stopWordFilter = e.generateStopWordFilter("алло без близко более больше будем будет будете будешь будто буду будут будь бы бывает бывь был была были было быть в важная важное важные важный вам вами вас ваш ваша ваше ваши вверх вдали вдруг ведь везде весь вниз внизу во вокруг вон восемнадцатый восемнадцать восемь восьмой вот впрочем времени время все всегда всего всем всеми всему всех всею всю всюду вся всё второй вы г где говорил говорит год года году да давно даже далеко дальше даром два двадцатый двадцать две двенадцатый двенадцать двух девятнадцатый девятнадцать девятый девять действительно дел день десятый десять для до довольно долго должно другая другие других друго другое другой е его ее ей ему если есть еще ещё ею её ж же жизнь за занят занята занято заняты затем зато зачем здесь значит и из или им именно иметь ими имя иногда их к каждая каждое каждые каждый кажется как какая какой кем когда кого ком кому конечно которая которого которой которые который которых кроме кругом кто куда лет ли лишь лучше люди м мало между меля менее меньше меня миллионов мимо мира мне много многочисленная многочисленное многочисленные многочисленный мной мною мог могут мож может можно можхо мои мой мор мочь моя моё мы на наверху над надо назад наиболее наконец нам нами нас начала наш наша наше наши не него недавно недалеко нее ней нельзя нем немного нему непрерывно нередко несколько нет нею неё ни нибудь ниже низко никогда никуда ними них ничего но ну нужно нх о об оба обычно один одиннадцатый одиннадцать однажды однако одного одной около он она они оно опять особенно от отовсюду отсюда очень первый перед по под пожалуйста позже пока пор пора после посреди потом потому почему почти прекрасно при про просто против процентов пятнадцатый пятнадцать пятый пять раз разве рано раньше рядом с сам сама сами самим самими самих само самого самой самом самому саму свое своего своей свои своих свою сеаой себе себя сегодня седьмой сейчас семнадцатый семнадцать семь сих сказал сказала сказать сколько слишком сначала снова со собой собою совсем спасибо стал суть т та так такая также такие такое такой там твой твоя твоё те тебе тебя тем теми теперь тех то тобой тобою тогда того тоже только том тому тот тою третий три тринадцатый тринадцать ту туда тут ты тысяч у уж уже уметь хорошо хотеть хоть хотя хочешь часто чаще чего человек чем чему через четвертый четыре четырнадцатый четырнадцать что чтоб чтобы чуть шестнадцатый шестнадцать шестой шесть эта эти этим этими этих это этого этой этом этому этот эту я \ufeffа".split(" ")), e.Pipeline.registerFunction(e.ru.stopWordFilter, "stopWordFilter-ru")
	}
}), function(e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()(e.lunr)
}(this, function() {
	return function(e) {
		if (void 0 === e) throw new Error("Lunr is not present. Please include / require Lunr before this script.");
		if (void 0 === e.stemmerSupport) throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");
		var t, z, n;
		e.fr = function() {
			this.pipeline.reset(), this.pipeline.add(e.fr.trimmer, e.fr.stopWordFilter, e.fr.stemmer), this.searchPipeline && (this.searchPipeline.reset(), this.searchPipeline.add(e.fr.stemmer))
		}, e.fr.wordCharacters = "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ", e.fr.trimmer = e.trimmerSupport.generateTrimmer(e.fr.wordCharacters), e.Pipeline.registerFunction(e.fr.trimmer, "trimmer-fr"), e.fr.stemmer = (t = e.stemmerSupport.Among, z = e.stemmerSupport.SnowballProgram, n = new function() {
			var n, r, o, i = [new t("col", -1, -1), new t("par", -1, -1), new t("tap", -1, -1)],
				s = [new t("", -1, 4), new t("I", 0, 1), new t("U", 0, 2), new t("Y", 0, 3)],
				a = [new t("iqU", -1, 3), new t("abl", -1, 3), new t("Ièr", -1, 4), new t("ièr", -1, 4), new t("eus", -1, 2), new t("iv", -1, 1)],
				c = [new t("ic", -1, 2), new t("abil", -1, 1), new t("iv", -1, 3)],
				u = [new t("iqUe", -1, 1), new t("atrice", -1, 2), new t("ance", -1, 1), new t("ence", -1, 5), new t("logie", -1, 3), new t("able", -1, 1), new t("isme", -1, 1), new t("euse", -1, 11), new t("iste", -1, 1), new t("ive", -1, 8), new t("if", -1, 8), new t("usion", -1, 4), new t("ation", -1, 2), new t("ution", -1, 4), new t("ateur", -1, 2), new t("iqUes", -1, 1), new t("atrices", -1, 2), new t("ances", -1, 1), new t("ences", -1, 5), new t("logies", -1, 3), new t("ables", -1, 1), new t("ismes", -1, 1), new t("euses", -1, 11), new t("istes", -1, 1), new t("ives", -1, 8), new t("ifs", -1, 8), new t("usions", -1, 4), new t("ations", -1, 2), new t("utions", -1, 4), new t("ateurs", -1, 2), new t("ments", -1, 15), new t("ements", 30, 6), new t("issements", 31, 12), new t("ités", -1, 7), new t("ment", -1, 15), new t("ement", 34, 6), new t("issement", 35, 12), new t("amment", 34, 13), new t("emment", 34, 14), new t("aux", -1, 10), new t("eaux", 39, 9), new t("eux", -1, 1), new t("ité", -1, 7)],
				l = [new t("ira", -1, 1), new t("ie", -1, 1), new t("isse", -1, 1), new t("issante", -1, 1), new t("i", -1, 1), new t("irai", 4, 1), new t("ir", -1, 1), new t("iras", -1, 1), new t("ies", -1, 1), new t("îmes", -1, 1), new t("isses", -1, 1), new t("issantes", -1, 1), new t("îtes", -1, 1), new t("is", -1, 1), new t("irais", 13, 1), new t("issais", 13, 1), new t("irions", -1, 1), new t("issions", -1, 1), new t("irons", -1, 1), new t("issons", -1, 1), new t("issants", -1, 1), new t("it", -1, 1), new t("irait", 21, 1), new t("issait", 21, 1), new t("issant", -1, 1), new t("iraIent", -1, 1), new t("issaIent", -1, 1), new t("irent", -1, 1), new t("issent", -1, 1), new t("iront", -1, 1), new t("ît", -1, 1), new t("iriez", -1, 1), new t("issiez", -1, 1), new t("irez", -1, 1), new t("issez", -1, 1)],
				d = [new t("a", -1, 3), new t("era", 0, 2), new t("asse", -1, 3), new t("ante", -1, 3), new t("ée", -1, 2), new t("ai", -1, 3), new t("erai", 5, 2), new t("er", -1, 2), new t("as", -1, 3), new t("eras", 8, 2), new t("âmes", -1, 3), new t("asses", -1, 3), new t("antes", -1, 3), new t("âtes", -1, 3), new t("ées", -1, 2), new t("ais", -1, 3), new t("erais", 15, 2), new t("ions", -1, 1), new t("erions", 17, 2), new t("assions", 17, 3), new t("erons", -1, 2), new t("ants", -1, 3), new t("és", -1, 2), new t("ait", -1, 3), new t("erait", 23, 2), new t("ant", -1, 3), new t("aIent", -1, 3), new t("eraIent", 26, 2), new t("èrent", -1, 2), new t("assent", -1, 3), new t("eront", -1, 2), new t("ât", -1, 3), new t("ez", -1, 2), new t("iez", 32, 2), new t("eriez", 33, 2), new t("assiez", 33, 3), new t("erez", 32, 2), new t("é", -1, 2)],
				h = [new t("e", -1, 3), new t("Ière", 0, 2), new t("ière", 0, 2), new t("ion", -1, 1), new t("Ier", -1, 2), new t("ier", -1, 2), new t("ë", -1, 4)],
				f = [new t("ell", -1, -1), new t("eill", -1, -1), new t("enn", -1, -1), new t("onn", -1, -1), new t("ett", -1, -1)],
				p = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 130, 103, 8, 5],
				m = [1, 65, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128],
				w = new z;

			function g(e, t, n) {
				return !(!w.eq_s(1, e) || (w.ket = w.cursor, !w.in_grouping(p, 97, 251))) && (w.slice_from(t), w.cursor = n, !0)
			}
			function v(e, t, n) {
				return !!w.eq_s(1, e) && (w.ket = w.cursor, w.slice_from(t), w.cursor = n, !0)
			}
			function b() {
				for (; !w.in_grouping(p, 97, 251);) {
					if (w.cursor >= w.limit) return !0;
					w.cursor++
				}
				for (; !w.out_grouping(p, 97, 251);) {
					if (w.cursor >= w.limit) return !0;
					w.cursor++
				}
				return !1
			}
			function y() {
				return o <= w.cursor
			}
			function _() {
				return r <= w.cursor
			}
			function k() {
				return n <= w.cursor
			}
			function x() {
				if (!
				function() {
					var e, t;
					if (w.ket = w.cursor, e = w.find_among_b(u, 43)) {
						switch (w.bra = w.cursor, e) {
						case 1:
							if (!k()) return !1;
							w.slice_del();
							break;
						case 2:
							if (!k()) return !1;
							w.slice_del(), w.ket = w.cursor, w.eq_s_b(2, "ic") && (w.bra = w.cursor, k() ? w.slice_del() : w.slice_from("iqU"));
							break;
						case 3:
							if (!k()) return !1;
							w.slice_from("log");
							break;
						case 4:
							if (!k()) return !1;
							w.slice_from("u");
							break;
						case 5:
							if (!k()) return !1;
							w.slice_from("ent");
							break;
						case 6:
							if (!y()) return !1;
							if (w.slice_del(), w.ket = w.cursor, e = w.find_among_b(a, 6)) switch (w.bra = w.cursor, e) {
							case 1:
								k() && (w.slice_del(), w.ket = w.cursor, w.eq_s_b(2, "at") && (w.bra = w.cursor, k() && w.slice_del()));
								break;
							case 2:
								k() ? w.slice_del() : _() && w.slice_from("eux");
								break;
							case 3:
								k() && w.slice_del();
								break;
							case 4:
								y() && w.slice_from("i")
							}
							break;
						case 7:
							if (!k()) return !1;
							if (w.slice_del(), w.ket = w.cursor, e = w.find_among_b(c, 3)) switch (w.bra = w.cursor, e) {
							case 1:
								k() ? w.slice_del() : w.slice_from("abl");
								break;
							case 2:
								k() ? w.slice_del() : w.slice_from("iqU");
								break;
							case 3:
								k() && w.slice_del()
							}
							break;
						case 8:
							if (!k()) return !1;
							if (w.slice_del(), w.ket = w.cursor, w.eq_s_b(2, "at") && (w.bra = w.cursor, k() && (w.slice_del(), w.ket = w.cursor, w.eq_s_b(2, "ic")))) {
								w.bra = w.cursor, k() ? w.slice_del() : w.slice_from("iqU");
								break
							}
							break;
						case 9:
							w.slice_from("eau");
							break;
						case 10:
							if (!_()) return !1;
							w.slice_from("al");
							break;
						case 11:
							if (k()) w.slice_del();
							else {
								if (!_()) return !1;
								w.slice_from("eux")
							}
							break;
						case 12:
							if (!_() || !w.out_grouping_b(p, 97, 251)) return !1;
							w.slice_del();
							break;
						case 13:
							return y() && w.slice_from("ant"), !1;
						case 14:
							return y() && w.slice_from("ent"), !1;
						case 15:
							return t = w.limit - w.cursor, w.in_grouping_b(p, 97, 251) && y() && (w.cursor = w.limit - t, w.slice_del()), !1
						}
						return !0
					}
					return !1
				}() && (w.cursor = w.limit, !
				function() {
					var e, t;
					if (w.cursor < o) return !1;
					if (t = w.limit_backward, w.limit_backward = o, w.ket = w.cursor, !(e = w.find_among_b(l, 35))) return w.limit_backward = t, !1;
					if (w.bra = w.cursor, 1 == e) {
						if (!w.out_grouping_b(p, 97, 251)) return w.limit_backward = t, !1;
						w.slice_del()
					}
					return w.limit_backward = t, !0
				}() && (w.cursor = w.limit, !
				function() {
					var e, t, n;
					if (w.cursor < o) return !1;
					if (t = w.limit_backward, w.limit_backward = o, w.ket = w.cursor, !(e = w.find_among_b(d, 38))) return w.limit_backward = t, !1;
					switch (w.bra = w.cursor, e) {
					case 1:
						if (!k()) return w.limit_backward = t, !1;
						w.slice_del();
						break;
					case 2:
						w.slice_del();
						break;
					case 3:
						w.slice_del(), n = w.limit - w.cursor, w.ket = w.cursor, w.eq_s_b(1, "e") ? (w.bra = w.cursor, w.slice_del()) : w.cursor = w.limit - n
					}
					return w.limit_backward = t, !0
				}()))) return w.cursor = w.limit, void
				function() {
					var e, t, n, r, i = w.limit - w.cursor;
					if (w.ket = w.cursor, w.eq_s_b(1, "s") ? (w.bra = w.cursor, t = w.limit - w.cursor, w.out_grouping_b(m, 97, 232) ? (w.cursor = w.limit - t, w.slice_del()) : w.cursor = w.limit - i) : w.cursor = w.limit - i, w.cursor >= o) {
						if (n = w.limit_backward, w.limit_backward = o, w.ket = w.cursor, e = w.find_among_b(h, 7)) switch (w.bra = w.cursor, e) {
						case 1:
							if (k()) {
								if (r = w.limit - w.cursor, !w.eq_s_b(1, "s") && (w.cursor = w.limit - r, !w.eq_s_b(1, "t"))) break;
								w.slice_del()
							}
							break;
						case 2:
							w.slice_from("i");
							break;
						case 3:
							w.slice_del();
							break;
						case 4:
							w.eq_s_b(2, "gu") && w.slice_del()
						}
						w.limit_backward = n
					}
				}();
				w.cursor = w.limit, w.ket = w.cursor, w.eq_s_b(1, "Y") ? (w.bra = w.cursor, w.slice_from("i")) : (w.cursor = w.limit, w.eq_s_b(1, "ç") && (w.bra = w.cursor, w.slice_from("c")))
			}
			this.setCurrent = function(e) {
				w.setCurrent(e)
			}, this.getCurrent = function() {
				return w.getCurrent()
			}, this.stem = function() {
				var e, t = w.cursor;
				return function() {
					for (var e, t;;) {
						if (e = w.cursor, w.in_grouping(p, 97, 251)) {
							if (w.bra = w.cursor, t = w.cursor, g("u", "U", e)) continue;
							if (w.cursor = t, g("i", "I", e)) continue;
							if (w.cursor = t, v("y", "Y", e)) continue
						}
						if (w.cursor = e, !g("y", "Y", w.bra = e)) {
							if (w.cursor = e, w.eq_s(1, "q") && (w.bra = w.cursor, v("u", "U", e))) continue;
							if ((w.cursor = e) >= w.limit) return;
							w.cursor++
						}
					}
				}(), w.cursor = t, function() {
					var e = w.cursor;
					if (o = w.limit, n = r = o, w.in_grouping(p, 97, 251) && w.in_grouping(p, 97, 251) && w.cursor < w.limit) w.cursor++;
					else if (w.cursor = e, !w.find_among(i, 3)) {
						w.cursor = e;
						do {
							if (w.cursor >= w.limit) {
								w.cursor = o;
								break
							}
							w.cursor++
						} while (!w.in_grouping(p, 97, 251))
					}
					o = w.cursor, w.cursor = e, b() || (r = w.cursor, b() || (n = w.cursor))
				}(), w.limit_backward = t, w.cursor = w.limit, x(), w.cursor = w.limit, e = w.limit - w.cursor, w.find_among_b(f, 5) && (w.cursor = w.limit - e, w.ket = w.cursor, w.cursor > w.limit_backward && (w.cursor--, w.bra = w.cursor, w.slice_del())), w.cursor = w.limit, function() {
					for (var e, t = 1; w.out_grouping_b(p, 97, 251);) t--;
					if (t <= 0) {
						if (w.ket = w.cursor, e = w.limit - w.cursor, !w.eq_s_b(1, "é") && (w.cursor = w.limit - e, !w.eq_s_b(1, "è"))) return;
						w.bra = w.cursor, w.slice_from("e")
					}
				}(), w.cursor = w.limit_backward, function() {
					for (var e, t; t = w.cursor, w.bra = t, e = w.find_among(s, 4);) switch (w.ket = w.cursor, e) {
					case 1:
						w.slice_from("i");
						break;
					case 2:
						w.slice_from("u");
						break;
					case 3:
						w.slice_from("y");
						break;
					case 4:
						if (w.cursor >= w.limit) return;
						w.cursor++
					}
				}(), !0
			}
		}, function(e) {
			return "function" == typeof e.update ? e.update(function(e) {
				return n.setCurrent(e), n.stem(), n.getCurrent()
			}) : (n.setCurrent(e), n.stem(), n.getCurrent())
		}), e.Pipeline.registerFunction(e.fr.stemmer, "stemmer-fr"), e.fr.stopWordFilter = e.generateStopWordFilter("ai aie aient aies ait as au aura aurai auraient aurais aurait auras aurez auriez aurions aurons auront aux avaient avais avait avec avez aviez avions avons ayant ayez ayons c ce ceci celà ces cet cette d dans de des du elle en es est et eu eue eues eurent eus eusse eussent eusses eussiez eussions eut eux eûmes eût eûtes furent fus fusse fussent fusses fussiez fussions fut fûmes fût fûtes ici il ils j je l la le les leur leurs lui m ma mais me mes moi mon même n ne nos notre nous on ont ou par pas pour qu que quel quelle quelles quels qui s sa sans se sera serai seraient serais serait seras serez seriez serions serons seront ses soi soient sois soit sommes son sont soyez soyons suis sur t ta te tes toi ton tu un une vos votre vous y à étaient étais était étant étiez étions été étée étées étés êtes".split(" ")), e.Pipeline.registerFunction(e.fr.stopWordFilter, "stopWordFilter-fr")
	}
}), function(e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()(e.lunr)
}(this, function() {
	return function(e) {
		if (void 0 === e) throw new Error("Lunr is not present. Please include / require Lunr before this script.");
		if (void 0 === e.stemmerSupport) throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");
		var g, v, t;
		e.de = function() {
			this.pipeline.reset(), this.pipeline.add(e.de.trimmer, e.de.stopWordFilter, e.de.stemmer), this.searchPipeline && (this.searchPipeline.reset(), this.searchPipeline.add(e.de.stemmer))
		}, e.de.wordCharacters = "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ", e.de.trimmer = e.trimmerSupport.generateTrimmer(e.de.wordCharacters), e.Pipeline.registerFunction(e.de.trimmer, "trimmer-de"), e.de.stemmer = (g = e.stemmerSupport.Among, v = e.stemmerSupport.SnowballProgram, t = new function() {
			var t, n, r, i = [new g("", -1, 6), new g("U", 0, 2), new g("Y", 0, 1), new g("ä", 0, 3), new g("ö", 0, 4), new g("ü", 0, 5)],
				s = [new g("e", -1, 2), new g("em", -1, 1), new g("en", -1, 2), new g("ern", -1, 1), new g("er", -1, 1), new g("s", -1, 3), new g("es", 5, 2)],
				a = [new g("en", -1, 1), new g("er", -1, 1), new g("st", -1, 2), new g("est", 2, 1)],
				c = [new g("ig", -1, 1), new g("lich", -1, 1)],
				u = [new g("end", -1, 1), new g("ig", -1, 2), new g("ung", -1, 1), new g("lich", -1, 3), new g("isch", -1, 2), new g("ik", -1, 2), new g("heit", -1, 3), new g("keit", -1, 4)],
				o = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8],
				l = [117, 30, 5],
				d = [117, 30, 4],
				h = new v;

			function f(e, t, n) {
				return !(!h.eq_s(1, e) || (h.ket = h.cursor, !h.in_grouping(o, 97, 252))) && (h.slice_from(t), h.cursor = n, !0)
			}
			function p() {
				for (; !h.in_grouping(o, 97, 252);) {
					if (h.cursor >= h.limit) return !0;
					h.cursor++
				}
				for (; !h.out_grouping(o, 97, 252);) {
					if (h.cursor >= h.limit) return !0;
					h.cursor++
				}
				return !1
			}
			function m() {
				return r <= h.cursor
			}
			function w() {
				return n <= h.cursor
			}
			this.setCurrent = function(e) {
				h.setCurrent(e)
			}, this.getCurrent = function() {
				return h.getCurrent()
			}, this.stem = function() {
				var e = h.cursor;
				return function() {
					for (var e, t, n, r, i = h.cursor;;) if (e = h.cursor, h.bra = e, h.eq_s(1, "ß")) h.ket = h.cursor, h.slice_from("ss");
					else {
						if (e >= h.limit) break;
						h.cursor = e + 1
					}
					for (h.cursor = i;;) for (t = h.cursor;;) {
						if (n = h.cursor, h.in_grouping(o, 97, 252)) {
							if (r = h.cursor, h.bra = r, f("u", "U", n)) break;
							if (h.cursor = r, f("y", "Y", n)) break
						}
						if (n >= h.limit) return h.cursor = t;
						h.cursor = n + 1
					}
				}(), h.cursor = e, function() {
					r = h.limit, n = r;
					var e = h.cursor + 3;
					0 <= e && e <= h.limit && (t = e, p() || ((r = h.cursor) < t && (r = t), p() || (n = h.cursor)))
				}(), h.limit_backward = e, h.cursor = h.limit, function() {
					var e, t, n, r, i = h.limit - h.cursor;
					if (h.ket = h.cursor, (e = h.find_among_b(s, 7)) && (h.bra = h.cursor, m())) switch (e) {
					case 1:
						h.slice_del();
						break;
					case 2:
						h.slice_del(), h.ket = h.cursor, h.eq_s_b(1, "s") && (h.bra = h.cursor, h.eq_s_b(3, "nis") && h.slice_del());
						break;
					case 3:
						h.in_grouping_b(l, 98, 116) && h.slice_del()
					}
					if (h.cursor = h.limit - i, h.ket = h.cursor, (e = h.find_among_b(a, 4)) && (h.bra = h.cursor, m())) switch (e) {
					case 1:
						h.slice_del();
						break;
					case 2:
						if (h.in_grouping_b(d, 98, 116)) {
							var o = h.cursor - 3;
							h.limit_backward <= o && o <= h.limit && (h.cursor = o, h.slice_del())
						}
					}
					if (h.cursor = h.limit - i, h.ket = h.cursor, (e = h.find_among_b(u, 8)) && (h.bra = h.cursor, w())) switch (e) {
					case 1:
						h.slice_del(), h.ket = h.cursor, h.eq_s_b(2, "ig") && (h.bra = h.cursor, t = h.limit - h.cursor, h.eq_s_b(1, "e") || (h.cursor = h.limit - t, w() && h.slice_del()));
						break;
					case 2:
						n = h.limit - h.cursor, h.eq_s_b(1, "e") || (h.cursor = h.limit - n, h.slice_del());
						break;
					case 3:
						if (h.slice_del(), h.ket = h.cursor, r = h.limit - h.cursor, !h.eq_s_b(2, "er") && (h.cursor = h.limit - r, !h.eq_s_b(2, "en"))) break;
						h.bra = h.cursor, m() && h.slice_del();
						break;
					case 4:
						h.slice_del(), h.ket = h.cursor, (e = h.find_among_b(c, 2)) && (h.bra = h.cursor, w() && 1 == e && h.slice_del())
					}
				}(), h.cursor = h.limit_backward, function() {
					for (var e, t;;) {
						if (t = h.cursor, h.bra = t, !(e = h.find_among(i, 6))) return;
						switch (h.ket = h.cursor, e) {
						case 1:
							h.slice_from("y");
							break;
						case 2:
						case 5:
							h.slice_from("u");
							break;
						case 3:
							h.slice_from("a");
							break;
						case 4:
							h.slice_from("o");
							break;
						case 6:
							if (h.cursor >= h.limit) return;
							h.cursor++
						}
					}
				}(), !0
			}
		}, function(e) {
			return "function" == typeof e.update ? e.update(function(e) {
				return t.setCurrent(e), t.stem(), t.getCurrent()
			}) : (t.setCurrent(e), t.stem(), t.getCurrent())
		}), e.Pipeline.registerFunction(e.de.stemmer, "stemmer-de"), e.de.stopWordFilter = e.generateStopWordFilter("aber alle allem allen aller alles als also am an ander andere anderem anderen anderer anderes anderm andern anderr anders auch auf aus bei bin bis bist da damit dann das dasselbe dazu daß dein deine deinem deinen deiner deines dem demselben den denn denselben der derer derselbe derselben des desselben dessen dich die dies diese dieselbe dieselben diesem diesen dieser dieses dir doch dort du durch ein eine einem einen einer eines einig einige einigem einigen einiger einiges einmal er es etwas euch euer eure eurem euren eurer eures für gegen gewesen hab habe haben hat hatte hatten hier hin hinter ich ihm ihn ihnen ihr ihre ihrem ihren ihrer ihres im in indem ins ist jede jedem jeden jeder jedes jene jenem jenen jener jenes jetzt kann kein keine keinem keinen keiner keines können könnte machen man manche manchem manchen mancher manches mein meine meinem meinen meiner meines mich mir mit muss musste nach nicht nichts noch nun nur ob oder ohne sehr sein seine seinem seinen seiner seines selbst sich sie sind so solche solchem solchen solcher solches soll sollte sondern sonst um und uns unse unsem unsen unser unses unter viel vom von vor war waren warst was weg weil weiter welche welchem welchen welcher welches wenn werde werden wie wieder will wir wird wirst wo wollen wollte während würde würden zu zum zur zwar zwischen über".split(" ")), e.Pipeline.registerFunction(e.de.stopWordFilter, "stopWordFilter-de")
	}
}), function(e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()(e.lunr)
}(this, function() {
	return function(e) {
		if (void 0 === e) throw new Error("Lunr is not present. Please include / require Lunr before this script.");
		if (void 0 === e.stemmerSupport) throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");
		var z, C, t;
		e.es = function() {
			this.pipeline.reset(), this.pipeline.add(e.es.trimmer, e.es.stopWordFilter, e.es.stemmer), this.searchPipeline && (this.searchPipeline.reset(), this.searchPipeline.add(e.es.stemmer))
		}, e.es.wordCharacters = "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ", e.es.trimmer = e.trimmerSupport.generateTrimmer(e.es.wordCharacters), e.Pipeline.registerFunction(e.es.trimmer, "trimmer-es"), e.es.stemmer = (z = e.stemmerSupport.Among, C = e.stemmerSupport.SnowballProgram, t = new function() {
			var n, r, i, o = [new z("", -1, 6), new z("á", 0, 1), new z("é", 0, 2), new z("í", 0, 3), new z("ó", 0, 4), new z("ú", 0, 5)],
				s = [new z("la", -1, -1), new z("sela", 0, -1), new z("le", -1, -1), new z("me", -1, -1), new z("se", -1, -1), new z("lo", -1, -1), new z("selo", 5, -1), new z("las", -1, -1), new z("selas", 7, -1), new z("les", -1, -1), new z("los", -1, -1), new z("selos", 10, -1), new z("nos", -1, -1)],
				a = [new z("ando", -1, 6), new z("iendo", -1, 6), new z("yendo", -1, 7), new z("ándo", -1, 2), new z("iéndo", -1, 1), new z("ar", -1, 6), new z("er", -1, 6), new z("ir", -1, 6), new z("ár", -1, 3), new z("ér", -1, 4), new z("ír", -1, 5)],
				t = [new z("ic", -1, -1), new z("ad", -1, -1), new z("os", -1, -1), new z("iv", -1, 1)],
				c = [new z("able", -1, 1), new z("ible", -1, 1), new z("ante", -1, 1)],
				u = [new z("ic", -1, 1), new z("abil", -1, 1), new z("iv", -1, 1)],
				l = [new z("ica", -1, 1), new z("ancia", -1, 2), new z("encia", -1, 5), new z("adora", -1, 2), new z("osa", -1, 1), new z("ista", -1, 1), new z("iva", -1, 9), new z("anza", -1, 1), new z("logía", -1, 3), new z("idad", -1, 8), new z("able", -1, 1), new z("ible", -1, 1), new z("ante", -1, 2), new z("mente", -1, 7), new z("amente", 13, 6), new z("ación", -1, 2), new z("ución", -1, 4), new z("ico", -1, 1), new z("ismo", -1, 1), new z("oso", -1, 1), new z("amiento", -1, 1), new z("imiento", -1, 1), new z("ivo", -1, 9), new z("ador", -1, 2), new z("icas", -1, 1), new z("ancias", -1, 2), new z("encias", -1, 5), new z("adoras", -1, 2), new z("osas", -1, 1), new z("istas", -1, 1), new z("ivas", -1, 9), new z("anzas", -1, 1), new z("logías", -1, 3), new z("idades", -1, 8), new z("ables", -1, 1), new z("ibles", -1, 1), new z("aciones", -1, 2), new z("uciones", -1, 4), new z("adores", -1, 2), new z("antes", -1, 2), new z("icos", -1, 1), new z("ismos", -1, 1), new z("osos", -1, 1), new z("amientos", -1, 1), new z("imientos", -1, 1), new z("ivos", -1, 9)],
				d = [new z("ya", -1, 1), new z("ye", -1, 1), new z("yan", -1, 1), new z("yen", -1, 1), new z("yeron", -1, 1), new z("yendo", -1, 1), new z("yo", -1, 1), new z("yas", -1, 1), new z("yes", -1, 1), new z("yais", -1, 1), new z("yamos", -1, 1), new z("yó", -1, 1)],
				h = [new z("aba", -1, 2), new z("ada", -1, 2), new z("ida", -1, 2), new z("ara", -1, 2), new z("iera", -1, 2), new z("ía", -1, 2), new z("aría", 5, 2), new z("ería", 5, 2), new z("iría", 5, 2), new z("ad", -1, 2), new z("ed", -1, 2), new z("id", -1, 2), new z("ase", -1, 2), new z("iese", -1, 2), new z("aste", -1, 2), new z("iste", -1, 2), new z("an", -1, 2), new z("aban", 16, 2), new z("aran", 16, 2), new z("ieran", 16, 2), new z("ían", 16, 2), new z("arían", 20, 2), new z("erían", 20, 2), new z("irían", 20, 2), new z("en", -1, 1), new z("asen", 24, 2), new z("iesen", 24, 2), new z("aron", -1, 2), new z("ieron", -1, 2), new z("arán", -1, 2), new z("erán", -1, 2), new z("irán", -1, 2), new z("ado", -1, 2), new z("ido", -1, 2), new z("ando", -1, 2), new z("iendo", -1, 2), new z("ar", -1, 2), new z("er", -1, 2), new z("ir", -1, 2), new z("as", -1, 2), new z("abas", 39, 2), new z("adas", 39, 2), new z("idas", 39, 2), new z("aras", 39, 2), new z("ieras", 39, 2), new z("ías", 39, 2), new z("arías", 45, 2), new z("erías", 45, 2), new z("irías", 45, 2), new z("es", -1, 1), new z("ases", 49, 2), new z("ieses", 49, 2), new z("abais", -1, 2), new z("arais", -1, 2), new z("ierais", -1, 2), new z("íais", -1, 2), new z("aríais", 55, 2), new z("eríais", 55, 2), new z("iríais", 55, 2), new z("aseis", -1, 2), new z("ieseis", -1, 2), new z("asteis", -1, 2), new z("isteis", -1, 2), new z("áis", -1, 2), new z("éis", -1, 1), new z("aréis", 64, 2), new z("eréis", 64, 2), new z("iréis", 64, 2), new z("ados", -1, 2), new z("idos", -1, 2), new z("amos", -1, 2), new z("ábamos", 70, 2), new z("áramos", 70, 2), new z("iéramos", 70, 2), new z("íamos", 70, 2), new z("aríamos", 74, 2), new z("eríamos", 74, 2), new z("iríamos", 74, 2), new z("emos", -1, 1), new z("aremos", 78, 2), new z("eremos", 78, 2), new z("iremos", 78, 2), new z("ásemos", 78, 2), new z("iésemos", 78, 2), new z("imos", -1, 2), new z("arás", -1, 2), new z("erás", -1, 2), new z("irás", -1, 2), new z("ís", -1, 2), new z("ará", -1, 2), new z("erá", -1, 2), new z("irá", -1, 2), new z("aré", -1, 2), new z("eré", -1, 2), new z("iré", -1, 2), new z("ió", -1, 2)],
				f = [new z("a", -1, 1), new z("e", -1, 2), new z("o", -1, 1), new z("os", -1, 1), new z("á", -1, 1), new z("é", -1, 2), new z("í", -1, 1), new z("ó", -1, 1)],
				p = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 10],
				m = new C;

			function w() {
				if (m.out_grouping(p, 97, 252)) {
					for (; !m.in_grouping(p, 97, 252);) {
						if (m.cursor >= m.limit) return !0;
						m.cursor++
					}
					return !1
				}
				return !0
			}
			function g() {
				var e, t = m.cursor;
				if (function() {
					if (m.in_grouping(p, 97, 252)) {
						var e = m.cursor;
						if (w()) {
							if (m.cursor = e, !m.in_grouping(p, 97, 252)) return !0;
							for (; !m.out_grouping(p, 97, 252);) {
								if (m.cursor >= m.limit) return !0;
								m.cursor++
							}
						}
						return !1
					}
					return !0
				}()) {
					if (m.cursor = t, !m.out_grouping(p, 97, 252)) return;
					if (e = m.cursor, w()) {
						if (m.cursor = e, !m.in_grouping(p, 97, 252) || m.cursor >= m.limit) return;
						m.cursor++
					}
				}
				i = m.cursor
			}
			function v() {
				for (; !m.in_grouping(p, 97, 252);) {
					if (m.cursor >= m.limit) return !1;
					m.cursor++
				}
				for (; !m.out_grouping(p, 97, 252);) {
					if (m.cursor >= m.limit) return !1;
					m.cursor++
				}
				return !0
			}
			function b() {
				return i <= m.cursor
			}
			function y() {
				return n <= m.cursor
			}
			function _(e, t) {
				if (!y()) return !0;
				m.slice_del(), m.ket = m.cursor;
				var n = m.find_among_b(e, t);
				return n && (m.bra = m.cursor, 1 == n && y() && m.slice_del()), !1
			}
			function k(e) {
				return !y() || (m.slice_del(), m.ket = m.cursor, m.eq_s_b(2, e) && (m.bra = m.cursor, y() && m.slice_del()), !1)
			}
			function x() {
				var e;
				if (m.ket = m.cursor, e = m.find_among_b(l, 46)) {
					switch (m.bra = m.cursor, e) {
					case 1:
						if (!y()) return !1;
						m.slice_del();
						break;
					case 2:
						if (k("ic")) return !1;
						break;
					case 3:
						if (!y()) return !1;
						m.slice_from("log");
						break;
					case 4:
						if (!y()) return !1;
						m.slice_from("u");
						break;
					case 5:
						if (!y()) return !1;
						m.slice_from("ente");
						break;
					case 6:
						if (!(r <= m.cursor)) return !1;
						m.slice_del(), m.ket = m.cursor, (e = m.find_among_b(t, 4)) && (m.bra = m.cursor, y() && (m.slice_del(), 1 == e && (m.ket = m.cursor, m.eq_s_b(2, "at") && (m.bra = m.cursor, y() && m.slice_del()))));
						break;
					case 7:
						if (_(c, 3)) return !1;
						break;
					case 8:
						if (_(u, 3)) return !1;
						break;
					case 9:
						if (k("at")) return !1
					}
					return !0
				}
				return !1
			}
			this.setCurrent = function(e) {
				m.setCurrent(e)
			}, this.getCurrent = function() {
				return m.getCurrent()
			}, this.stem = function() {
				var e, t = m.cursor;
				return e = m.cursor, i = m.limit, n = r = i, g(), m.cursor = e, v() && (r = m.cursor, v() && (n = m.cursor)), m.limit_backward = t, m.cursor = m.limit, function() {
					var e;
					if (m.ket = m.cursor, m.find_among_b(s, 13) && (m.bra = m.cursor, (e = m.find_among_b(a, 11)) && b())) switch (e) {
					case 1:
						m.bra = m.cursor, m.slice_from("iendo");
						break;
					case 2:
						m.bra = m.cursor, m.slice_from("ando");
						break;
					case 3:
						m.bra = m.cursor, m.slice_from("ar");
						break;
					case 4:
						m.bra = m.cursor, m.slice_from("er");
						break;
					case 5:
						m.bra = m.cursor, m.slice_from("ir");
						break;
					case 6:
						m.slice_del();
						break;
					case 7:
						m.eq_s_b(1, "u") && m.slice_del()
					}
				}(), m.cursor = m.limit, x() || (m.cursor = m.limit, function() {
					var e, t;
					if (m.cursor >= i && (t = m.limit_backward, m.limit_backward = i, m.ket = m.cursor, e = m.find_among_b(d, 12), m.limit_backward = t, e)) {
						if (m.bra = m.cursor, 1 == e) {
							if (!m.eq_s_b(1, "u")) return !1;
							m.slice_del()
						}
						return !0
					}
					return !1
				}() || (m.cursor = m.limit, function() {
					var e, t, n, r;
					if (m.cursor >= i && (t = m.limit_backward, m.limit_backward = i, m.ket = m.cursor, e = m.find_among_b(h, 96), m.limit_backward = t, e)) switch (m.bra = m.cursor, e) {
					case 1:
						n = m.limit - m.cursor, m.eq_s_b(1, "u") ? (r = m.limit - m.cursor, m.eq_s_b(1, "g") ? m.cursor = m.limit - r : m.cursor = m.limit - n) : m.cursor = m.limit - n, m.bra = m.cursor;
					case 2:
						m.slice_del()
					}
				}())), m.cursor = m.limit, function() {
					var e, t;
					if (m.ket = m.cursor, e = m.find_among_b(f, 8)) switch (m.bra = m.cursor, e) {
					case 1:
						b() && m.slice_del();
						break;
					case 2:
						b() && (m.slice_del(), m.ket = m.cursor, m.eq_s_b(1, "u") && (m.bra = m.cursor, t = m.limit - m.cursor, m.eq_s_b(1, "g") && (m.cursor = m.limit - t, b() && m.slice_del())))
					}
				}(), m.cursor = m.limit_backward, function() {
					for (var e;;) {
						if (m.bra = m.cursor, e = m.find_among(o, 6)) switch (m.ket = m.cursor, e) {
						case 1:
							m.slice_from("a");
							continue;
						case 2:
							m.slice_from("e");
							continue;
						case 3:
							m.slice_from("i");
							continue;
						case 4:
							m.slice_from("o");
							continue;
						case 5:
							m.slice_from("u");
							continue;
						case 6:
							if (m.cursor >= m.limit) break;
							m.cursor++;
							continue
						}
						break
					}
				}(), !0
			}
		}, function(e) {
			return "function" == typeof e.update ? e.update(function(e) {
				return t.setCurrent(e), t.stem(), t.getCurrent()
			}) : (t.setCurrent(e), t.stem(), t.getCurrent())
		}), e.Pipeline.registerFunction(e.es.stemmer, "stemmer-es"), e.es.stopWordFilter = e.generateStopWordFilter("a al algo algunas algunos ante antes como con contra cual cuando de del desde donde durante e el ella ellas ellos en entre era erais eran eras eres es esa esas ese eso esos esta estaba estabais estaban estabas estad estada estadas estado estados estamos estando estar estaremos estará estarán estarás estaré estaréis estaría estaríais estaríamos estarían estarías estas este estemos esto estos estoy estuve estuviera estuvierais estuvieran estuvieras estuvieron estuviese estuvieseis estuviesen estuvieses estuvimos estuviste estuvisteis estuviéramos estuviésemos estuvo está estábamos estáis están estás esté estéis estén estés fue fuera fuerais fueran fueras fueron fuese fueseis fuesen fueses fui fuimos fuiste fuisteis fuéramos fuésemos ha habida habidas habido habidos habiendo habremos habrá habrán habrás habré habréis habría habríais habríamos habrían habrías habéis había habíais habíamos habían habías han has hasta hay haya hayamos hayan hayas hayáis he hemos hube hubiera hubierais hubieran hubieras hubieron hubiese hubieseis hubiesen hubieses hubimos hubiste hubisteis hubiéramos hubiésemos hubo la las le les lo los me mi mis mucho muchos muy más mí mía mías mío míos nada ni no nos nosotras nosotros nuestra nuestras nuestro nuestros o os otra otras otro otros para pero poco por porque que quien quienes qué se sea seamos sean seas seremos será serán serás seré seréis sería seríais seríamos serían serías seáis sido siendo sin sobre sois somos son soy su sus suya suyas suyo suyos sí también tanto te tendremos tendrá tendrán tendrás tendré tendréis tendría tendríais tendríamos tendrían tendrías tened tenemos tenga tengamos tengan tengas tengo tengáis tenida tenidas tenido tenidos teniendo tenéis tenía teníais teníamos tenían tenías ti tiene tienen tienes todo todos tu tus tuve tuviera tuvierais tuvieran tuvieras tuvieron tuviese tuvieseis tuviesen tuvieses tuvimos tuviste tuvisteis tuviéramos tuviésemos tuvo tuya tuyas tuyo tuyos tú un una uno unos vosotras vosotros vuestra vuestras vuestro vuestros y ya yo él éramos".split(" ")), e.Pipeline.registerFunction(e.es.stopWordFilter, "stopWordFilter-es")
	}
}), function(e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()(e.lunr)
}(this, function() {
	return function(e) {
		if (void 0 === e) throw new Error("Lunr is not present. Please include / require Lunr before this script.");
		if (void 0 === e.stemmerSupport) throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");
		var x, z, t;
		e.pt = function() {
			this.pipeline.reset(), this.pipeline.add(e.pt.trimmer, e.pt.stopWordFilter, e.pt.stemmer), this.searchPipeline && (this.searchPipeline.reset(), this.searchPipeline.add(e.pt.stemmer))
		}, e.pt.wordCharacters = "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ", e.pt.trimmer = e.trimmerSupport.generateTrimmer(e.pt.wordCharacters), e.Pipeline.registerFunction(e.pt.trimmer, "trimmer-pt"), e.pt.stemmer = (x = e.stemmerSupport.Among, z = e.stemmerSupport.SnowballProgram, t = new function() {
			var n, r, i, o = [new x("", -1, 3), new x("ã", 0, 1), new x("õ", 0, 2)],
				s = [new x("", -1, 3), new x("a~", 0, 1), new x("o~", 0, 2)],
				t = [new x("ic", -1, -1), new x("ad", -1, -1), new x("os", -1, -1), new x("iv", -1, 1)],
				a = [new x("ante", -1, 1), new x("avel", -1, 1), new x("ível", -1, 1)],
				c = [new x("ic", -1, 1), new x("abil", -1, 1), new x("iv", -1, 1)],
				u = [new x("ica", -1, 1), new x("ância", -1, 1), new x("ência", -1, 4), new x("ira", -1, 9), new x("adora", -1, 1), new x("osa", -1, 1), new x("ista", -1, 1), new x("iva", -1, 8), new x("eza", -1, 1), new x("logía", -1, 2), new x("idade", -1, 7), new x("ante", -1, 1), new x("mente", -1, 6), new x("amente", 12, 5), new x("ável", -1, 1), new x("ível", -1, 1), new x("ución", -1, 3), new x("ico", -1, 1), new x("ismo", -1, 1), new x("oso", -1, 1), new x("amento", -1, 1), new x("imento", -1, 1), new x("ivo", -1, 8), new x("aça~o", -1, 1), new x("ador", -1, 1), new x("icas", -1, 1), new x("ências", -1, 4), new x("iras", -1, 9), new x("adoras", -1, 1), new x("osas", -1, 1), new x("istas", -1, 1), new x("ivas", -1, 8), new x("ezas", -1, 1), new x("logías", -1, 2), new x("idades", -1, 7), new x("uciones", -1, 3), new x("adores", -1, 1), new x("antes", -1, 1), new x("aço~es", -1, 1), new x("icos", -1, 1), new x("ismos", -1, 1), new x("osos", -1, 1), new x("amentos", -1, 1), new x("imentos", -1, 1), new x("ivos", -1, 8)],
				l = [new x("ada", -1, 1), new x("ida", -1, 1), new x("ia", -1, 1), new x("aria", 2, 1), new x("eria", 2, 1), new x("iria", 2, 1), new x("ara", -1, 1), new x("era", -1, 1), new x("ira", -1, 1), new x("ava", -1, 1), new x("asse", -1, 1), new x("esse", -1, 1), new x("isse", -1, 1), new x("aste", -1, 1), new x("este", -1, 1), new x("iste", -1, 1), new x("ei", -1, 1), new x("arei", 16, 1), new x("erei", 16, 1), new x("irei", 16, 1), new x("am", -1, 1), new x("iam", 20, 1), new x("ariam", 21, 1), new x("eriam", 21, 1), new x("iriam", 21, 1), new x("aram", 20, 1), new x("eram", 20, 1), new x("iram", 20, 1), new x("avam", 20, 1), new x("em", -1, 1), new x("arem", 29, 1), new x("erem", 29, 1), new x("irem", 29, 1), new x("assem", 29, 1), new x("essem", 29, 1), new x("issem", 29, 1), new x("ado", -1, 1), new x("ido", -1, 1), new x("ando", -1, 1), new x("endo", -1, 1), new x("indo", -1, 1), new x("ara~o", -1, 1), new x("era~o", -1, 1), new x("ira~o", -1, 1), new x("ar", -1, 1), new x("er", -1, 1), new x("ir", -1, 1), new x("as", -1, 1), new x("adas", 47, 1), new x("idas", 47, 1), new x("ias", 47, 1), new x("arias", 50, 1), new x("erias", 50, 1), new x("irias", 50, 1), new x("aras", 47, 1), new x("eras", 47, 1), new x("iras", 47, 1), new x("avas", 47, 1), new x("es", -1, 1), new x("ardes", 58, 1), new x("erdes", 58, 1), new x("irdes", 58, 1), new x("ares", 58, 1), new x("eres", 58, 1), new x("ires", 58, 1), new x("asses", 58, 1), new x("esses", 58, 1), new x("isses", 58, 1), new x("astes", 58, 1), new x("estes", 58, 1), new x("istes", 58, 1), new x("is", -1, 1), new x("ais", 71, 1), new x("eis", 71, 1), new x("areis", 73, 1), new x("ereis", 73, 1), new x("ireis", 73, 1), new x("áreis", 73, 1), new x("éreis", 73, 1), new x("íreis", 73, 1), new x("ásseis", 73, 1), new x("ésseis", 73, 1), new x("ísseis", 73, 1), new x("áveis", 73, 1), new x("íeis", 73, 1), new x("aríeis", 84, 1), new x("eríeis", 84, 1), new x("iríeis", 84, 1), new x("ados", -1, 1), new x("idos", -1, 1), new x("amos", -1, 1), new x("áramos", 90, 1), new x("éramos", 90, 1), new x("íramos", 90, 1), new x("ávamos", 90, 1), new x("íamos", 90, 1), new x("aríamos", 95, 1), new x("eríamos", 95, 1), new x("iríamos", 95, 1), new x("emos", -1, 1), new x("aremos", 99, 1), new x("eremos", 99, 1), new x("iremos", 99, 1), new x("ássemos", 99, 1), new x("êssemos", 99, 1), new x("íssemos", 99, 1), new x("imos", -1, 1), new x("armos", -1, 1), new x("ermos", -1, 1), new x("irmos", -1, 1), new x("ámos", -1, 1), new x("arás", -1, 1), new x("erás", -1, 1), new x("irás", -1, 1), new x("eu", -1, 1), new x("iu", -1, 1), new x("ou", -1, 1), new x("ará", -1, 1), new x("erá", -1, 1), new x("irá", -1, 1)],
				d = [new x("a", -1, 1), new x("i", -1, 1), new x("o", -1, 1), new x("os", -1, 1), new x("á", -1, 1), new x("í", -1, 1), new x("ó", -1, 1)],
				h = [new x("e", -1, 1), new x("ç", -1, 2), new x("é", -1, 1), new x("ê", -1, 1)],
				f = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 19, 12, 2],
				p = new z;

			function m() {
				if (p.out_grouping(f, 97, 250)) {
					for (; !p.in_grouping(f, 97, 250);) {
						if (p.cursor >= p.limit) return !0;
						p.cursor++
					}
					return !1
				}
				return !0
			}
			function w() {
				var e, t, n = p.cursor;
				if (p.in_grouping(f, 97, 250)) if (e = p.cursor, m()) {
					if (p.cursor = e, function() {
						if (p.in_grouping(f, 97, 250)) for (; !p.out_grouping(f, 97, 250);) {
							if (p.cursor >= p.limit) return !1;
							p.cursor++
						}
						return i = p.cursor, !0
					}()) return
				} else i = p.cursor;
				if (p.cursor = n, p.out_grouping(f, 97, 250)) {
					if (t = p.cursor, m()) {
						if (p.cursor = t, !p.in_grouping(f, 97, 250) || p.cursor >= p.limit) return;
						p.cursor++
					}
					i = p.cursor
				}
			}
			function g() {
				for (; !p.in_grouping(f, 97, 250);) {
					if (p.cursor >= p.limit) return !1;
					p.cursor++
				}
				for (; !p.out_grouping(f, 97, 250);) {
					if (p.cursor >= p.limit) return !1;
					p.cursor++
				}
				return !0
			}
			function v() {
				return i <= p.cursor
			}
			function b() {
				return n <= p.cursor
			}
			function y() {
				var e;
				if (p.ket = p.cursor, !(e = p.find_among_b(u, 45))) return !1;
				switch (p.bra = p.cursor, e) {
				case 1:
					if (!b()) return !1;
					p.slice_del();
					break;
				case 2:
					if (!b()) return !1;
					p.slice_from("log");
					break;
				case 3:
					if (!b()) return !1;
					p.slice_from("u");
					break;
				case 4:
					if (!b()) return !1;
					p.slice_from("ente");
					break;
				case 5:
					if (!(r <= p.cursor)) return !1;
					p.slice_del(), p.ket = p.cursor, (e = p.find_among_b(t, 4)) && (p.bra = p.cursor, b() && (p.slice_del(), 1 == e && (p.ket = p.cursor, p.eq_s_b(2, "at") && (p.bra = p.cursor, b() && p.slice_del()))));
					break;
				case 6:
					if (!b()) return !1;
					p.slice_del(), p.ket = p.cursor, (e = p.find_among_b(a, 3)) && (p.bra = p.cursor, 1 == e && b() && p.slice_del());
					break;
				case 7:
					if (!b()) return !1;
					p.slice_del(), p.ket = p.cursor, (e = p.find_among_b(c, 3)) && (p.bra = p.cursor, 1 == e && b() && p.slice_del());
					break;
				case 8:
					if (!b()) return !1;
					p.slice_del(), p.ket = p.cursor, p.eq_s_b(2, "at") && (p.bra = p.cursor, b() && p.slice_del());
					break;
				case 9:
					if (!v() || !p.eq_s_b(1, "e")) return !1;
					p.slice_from("ir")
				}
				return !0
			}
			function _(e, t) {
				if (p.eq_s_b(1, e)) {
					p.bra = p.cursor;
					var n = p.limit - p.cursor;
					if (p.eq_s_b(1, t)) return p.cursor = p.limit - n, v() && p.slice_del(), !1
				}
				return !0
			}
			function k() {
				if (!y() && (p.cursor = p.limit, !
				function() {
					var e, t;
					if (p.cursor >= i) {
						if (t = p.limit_backward, p.limit_backward = i, p.ket = p.cursor, e = p.find_among_b(l, 120)) return p.bra = p.cursor, 1 == e && p.slice_del(), p.limit_backward = t, !0;
						p.limit_backward = t
					}
					return !1
				}())) return p.cursor = p.limit, p.ket = p.cursor, void((e = p.find_among_b(d, 7)) && (p.bra = p.cursor, 1 == e && v() && p.slice_del()));
				var e;
				p.cursor = p.limit, p.ket = p.cursor, p.eq_s_b(1, "i") && (p.bra = p.cursor, p.eq_s_b(1, "c") && (p.cursor = p.limit, v() && p.slice_del()))
			}
			this.setCurrent = function(e) {
				p.setCurrent(e)
			}, this.getCurrent = function() {
				return p.getCurrent()
			}, this.stem = function() {
				var e, t = p.cursor;
				return function() {
					for (var e;;) {
						if (p.bra = p.cursor, e = p.find_among(o, 3)) switch (p.ket = p.cursor, e) {
						case 1:
							p.slice_from("a~");
							continue;
						case 2:
							p.slice_from("o~");
							continue;
						case 3:
							if (p.cursor >= p.limit) break;
							p.cursor++;
							continue
						}
						break
					}
				}(), p.cursor = t, e = p.cursor, i = p.limit, n = r = i, w(), p.cursor = e, g() && (r = p.cursor, g() && (n = p.cursor)), p.limit_backward = t, p.cursor = p.limit, k(), p.cursor = p.limit, function() {
					var e;
					if (p.ket = p.cursor, e = p.find_among_b(h, 4)) switch (p.bra = p.cursor, e) {
					case 1:
						v() && (p.slice_del(), p.ket = p.cursor, p.limit, p.cursor, _("u", "g") && _("i", "c"));
						break;
					case 2:
						p.slice_from("c")
					}
				}(), p.cursor = p.limit_backward, function() {
					for (var e;;) {
						if (p.bra = p.cursor, e = p.find_among(s, 3)) switch (p.ket = p.cursor, e) {
						case 1:
							p.slice_from("ã");
							continue;
						case 2:
							p.slice_from("õ");
							continue;
						case 3:
							if (p.cursor >= p.limit) break;
							p.cursor++;
							continue
						}
						break
					}
				}(), !0
			}
		}, function(e) {
			return "function" == typeof e.update ? e.update(function(e) {
				return t.setCurrent(e), t.stem(), t.getCurrent()
			}) : (t.setCurrent(e), t.stem(), t.getCurrent())
		}), e.Pipeline.registerFunction(e.pt.stemmer, "stemmer-pt"), e.pt.stopWordFilter = e.generateStopWordFilter("a ao aos aquela aquelas aquele aqueles aquilo as até com como da das de dela delas dele deles depois do dos e ela elas ele eles em entre era eram essa essas esse esses esta estamos estas estava estavam este esteja estejam estejamos estes esteve estive estivemos estiver estivera estiveram estiverem estivermos estivesse estivessem estivéramos estivéssemos estou está estávamos estão eu foi fomos for fora foram forem formos fosse fossem fui fôramos fôssemos haja hajam hajamos havemos hei houve houvemos houver houvera houveram houverei houverem houveremos houveria houveriam houvermos houverá houverão houveríamos houvesse houvessem houvéramos houvéssemos há hão isso isto já lhe lhes mais mas me mesmo meu meus minha minhas muito na nas nem no nos nossa nossas nosso nossos num numa não nós o os ou para pela pelas pelo pelos por qual quando que quem se seja sejam sejamos sem serei seremos seria seriam será serão seríamos seu seus somos sou sua suas são só também te tem temos tenha tenham tenhamos tenho terei teremos teria teriam terá terão teríamos teu teus teve tinha tinham tive tivemos tiver tivera tiveram tiverem tivermos tivesse tivessem tivéramos tivéssemos tu tua tuas tém tínhamos um uma você vocês vos à às éramos".split(" ")), e.Pipeline.registerFunction(e.pt.stopWordFilter, "stopWordFilter-pt")
	}
}), function(e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()(e.lunr)
}(this, function() {
	return function(e) {
		if (void 0 === e) throw new Error("Lunr is not present. Please include / require Lunr before this script.");
		if (void 0 === e.stemmerSupport) throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");
		var z, C, t;
		e.it = function() {
			this.pipeline.reset(), this.pipeline.add(e.it.trimmer, e.it.stopWordFilter, e.it.stemmer), this.searchPipeline && (this.searchPipeline.reset(), this.searchPipeline.add(e.it.stemmer))
		}, e.it.wordCharacters = "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ", e.it.trimmer = e.trimmerSupport.generateTrimmer(e.it.wordCharacters), e.Pipeline.registerFunction(e.it.trimmer, "trimmer-it"), e.it.stemmer = (z = e.stemmerSupport.Among, C = e.stemmerSupport.SnowballProgram, t = new function() {
			var i, o, s, a = [new z("", -1, 7), new z("qu", 0, 6), new z("á", 0, 1), new z("é", 0, 2), new z("í", 0, 3), new z("ó", 0, 4), new z("ú", 0, 5)],
				c = [new z("", -1, 3), new z("I", 0, 1), new z("U", 0, 2)],
				u = [new z("la", -1, -1), new z("cela", 0, -1), new z("gliela", 0, -1), new z("mela", 0, -1), new z("tela", 0, -1), new z("vela", 0, -1), new z("le", -1, -1), new z("cele", 6, -1), new z("gliele", 6, -1), new z("mele", 6, -1), new z("tele", 6, -1), new z("vele", 6, -1), new z("ne", -1, -1), new z("cene", 12, -1), new z("gliene", 12, -1), new z("mene", 12, -1), new z("sene", 12, -1), new z("tene", 12, -1), new z("vene", 12, -1), new z("ci", -1, -1), new z("li", -1, -1), new z("celi", 20, -1), new z("glieli", 20, -1), new z("meli", 20, -1), new z("teli", 20, -1), new z("veli", 20, -1), new z("gli", 20, -1), new z("mi", -1, -1), new z("si", -1, -1), new z("ti", -1, -1), new z("vi", -1, -1), new z("lo", -1, -1), new z("celo", 31, -1), new z("glielo", 31, -1), new z("melo", 31, -1), new z("telo", 31, -1), new z("velo", 31, -1)],
				l = [new z("ando", -1, 1), new z("endo", -1, 1), new z("ar", -1, 2), new z("er", -1, 2), new z("ir", -1, 2)],
				t = [new z("ic", -1, -1), new z("abil", -1, -1), new z("os", -1, -1), new z("iv", -1, 1)],
				n = [new z("ic", -1, 1), new z("abil", -1, 1), new z("iv", -1, 1)],
				r = [new z("ica", -1, 1), new z("logia", -1, 3), new z("osa", -1, 1), new z("ista", -1, 1), new z("iva", -1, 9), new z("anza", -1, 1), new z("enza", -1, 5), new z("ice", -1, 1), new z("atrice", 7, 1), new z("iche", -1, 1), new z("logie", -1, 3), new z("abile", -1, 1), new z("ibile", -1, 1), new z("usione", -1, 4), new z("azione", -1, 2), new z("uzione", -1, 4), new z("atore", -1, 2), new z("ose", -1, 1), new z("ante", -1, 1), new z("mente", -1, 1), new z("amente", 19, 7), new z("iste", -1, 1), new z("ive", -1, 9), new z("anze", -1, 1), new z("enze", -1, 5), new z("ici", -1, 1), new z("atrici", 25, 1), new z("ichi", -1, 1), new z("abili", -1, 1), new z("ibili", -1, 1), new z("ismi", -1, 1), new z("usioni", -1, 4), new z("azioni", -1, 2), new z("uzioni", -1, 4), new z("atori", -1, 2), new z("osi", -1, 1), new z("anti", -1, 1), new z("amenti", -1, 6), new z("imenti", -1, 6), new z("isti", -1, 1), new z("ivi", -1, 9), new z("ico", -1, 1), new z("ismo", -1, 1), new z("oso", -1, 1), new z("amento", -1, 6), new z("imento", -1, 6), new z("ivo", -1, 9), new z("ità", -1, 8), new z("istà", -1, 1), new z("istè", -1, 1), new z("istì", -1, 1)],
				d = [new z("isca", -1, 1), new z("enda", -1, 1), new z("ata", -1, 1), new z("ita", -1, 1), new z("uta", -1, 1), new z("ava", -1, 1), new z("eva", -1, 1), new z("iva", -1, 1), new z("erebbe", -1, 1), new z("irebbe", -1, 1), new z("isce", -1, 1), new z("ende", -1, 1), new z("are", -1, 1), new z("ere", -1, 1), new z("ire", -1, 1), new z("asse", -1, 1), new z("ate", -1, 1), new z("avate", 16, 1), new z("evate", 16, 1), new z("ivate", 16, 1), new z("ete", -1, 1), new z("erete", 20, 1), new z("irete", 20, 1), new z("ite", -1, 1), new z("ereste", -1, 1), new z("ireste", -1, 1), new z("ute", -1, 1), new z("erai", -1, 1), new z("irai", -1, 1), new z("isci", -1, 1), new z("endi", -1, 1), new z("erei", -1, 1), new z("irei", -1, 1), new z("assi", -1, 1), new z("ati", -1, 1), new z("iti", -1, 1), new z("eresti", -1, 1), new z("iresti", -1, 1), new z("uti", -1, 1), new z("avi", -1, 1), new z("evi", -1, 1), new z("ivi", -1, 1), new z("isco", -1, 1), new z("ando", -1, 1), new z("endo", -1, 1), new z("Yamo", -1, 1), new z("iamo", -1, 1), new z("avamo", -1, 1), new z("evamo", -1, 1), new z("ivamo", -1, 1), new z("eremo", -1, 1), new z("iremo", -1, 1), new z("assimo", -1, 1), new z("ammo", -1, 1), new z("emmo", -1, 1), new z("eremmo", 54, 1), new z("iremmo", 54, 1), new z("immo", -1, 1), new z("ano", -1, 1), new z("iscano", 58, 1), new z("avano", 58, 1), new z("evano", 58, 1), new z("ivano", 58, 1), new z("eranno", -1, 1), new z("iranno", -1, 1), new z("ono", -1, 1), new z("iscono", 65, 1), new z("arono", 65, 1), new z("erono", 65, 1), new z("irono", 65, 1), new z("erebbero", -1, 1), new z("irebbero", -1, 1), new z("assero", -1, 1), new z("essero", -1, 1), new z("issero", -1, 1), new z("ato", -1, 1), new z("ito", -1, 1), new z("uto", -1, 1), new z("avo", -1, 1), new z("evo", -1, 1), new z("ivo", -1, 1), new z("ar", -1, 1), new z("ir", -1, 1), new z("erà", -1, 1), new z("irà", -1, 1), new z("erò", -1, 1), new z("irò", -1, 1)],
				h = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2, 1],
				f = [17, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2],
				p = [17],
				m = new C;

			function w(e, t, n) {
				return !(!m.eq_s(1, e) || (m.ket = m.cursor, !m.in_grouping(h, 97, 249))) && (m.slice_from(t), m.cursor = n, !0)
			}
			function g(e) {
				if (m.cursor = e, !m.in_grouping(h, 97, 249)) return !1;
				for (; !m.out_grouping(h, 97, 249);) {
					if (m.cursor >= m.limit) return !1;
					m.cursor++
				}
				return !0
			}
			function v() {
				var e, t = m.cursor;
				if (!
				function() {
					if (m.in_grouping(h, 97, 249)) {
						var e = m.cursor;
						if (m.out_grouping(h, 97, 249)) {
							for (; !m.in_grouping(h, 97, 249);) {
								if (m.cursor >= m.limit) return g(e);
								m.cursor++
							}
							return !0
						}
						return g(e)
					}
					return !1
				}()) {
					if (m.cursor = t, !m.out_grouping(h, 97, 249)) return;
					if (e = m.cursor, m.out_grouping(h, 97, 249)) {
						for (; !m.in_grouping(h, 97, 249);) {
							if (m.cursor >= m.limit) return m.cursor = e, void(m.in_grouping(h, 97, 249) && m.cursor < m.limit && m.cursor++);
							m.cursor++
						}
						return void(s = m.cursor)
					}
					if (m.cursor = e, !m.in_grouping(h, 97, 249) || m.cursor >= m.limit) return;
					m.cursor++
				}
				s = m.cursor
			}
			function b() {
				for (; !m.in_grouping(h, 97, 249);) {
					if (m.cursor >= m.limit) return !1;
					m.cursor++
				}
				for (; !m.out_grouping(h, 97, 249);) {
					if (m.cursor >= m.limit) return !1;
					m.cursor++
				}
				return !0
			}
			function y() {
				return s <= m.cursor
			}
			function _() {
				return i <= m.cursor
			}
			function k() {
				var e;
				if (m.ket = m.cursor, !(e = m.find_among_b(r, 51))) return !1;
				switch (m.bra = m.cursor, e) {
				case 1:
					if (!_()) return !1;
					m.slice_del();
					break;
				case 2:
					if (!_()) return !1;
					m.slice_del(), m.ket = m.cursor, m.eq_s_b(2, "ic") && (m.bra = m.cursor, _() && m.slice_del());
					break;
				case 3:
					if (!_()) return !1;
					m.slice_from("log");
					break;
				case 4:
					if (!_()) return !1;
					m.slice_from("u");
					break;
				case 5:
					if (!_()) return !1;
					m.slice_from("ente");
					break;
				case 6:
					if (!y()) return !1;
					m.slice_del();
					break;
				case 7:
					if (!(o <= m.cursor)) return !1;
					m.slice_del(), m.ket = m.cursor, (e = m.find_among_b(t, 4)) && (m.bra = m.cursor, _() && (m.slice_del(), 1 == e && (m.ket = m.cursor, m.eq_s_b(2, "at") && (m.bra = m.cursor, _() && m.slice_del()))));
					break;
				case 8:
					if (!_()) return !1;
					m.slice_del(), m.ket = m.cursor, (e = m.find_among_b(n, 3)) && (m.bra = m.cursor, 1 == e && _() && m.slice_del());
					break;
				case 9:
					if (!_()) return !1;
					m.slice_del(), m.ket = m.cursor, m.eq_s_b(2, "at") && (m.bra = m.cursor, _() && (m.slice_del(), m.ket = m.cursor, m.eq_s_b(2, "ic") && (m.bra = m.cursor, _() && m.slice_del())))
				}
				return !0
			}
			function x() {
				var e;
				e = m.limit - m.cursor, m.ket = m.cursor, m.in_grouping_b(f, 97, 242) && (m.bra = m.cursor, y() && (m.slice_del(), m.ket = m.cursor, m.eq_s_b(1, "i") && (m.bra = m.cursor, y()))) ? m.slice_del() : m.cursor = m.limit - e, m.ket = m.cursor, m.eq_s_b(1, "h") && (m.bra = m.cursor, m.in_grouping_b(p, 99, 103) && y() && m.slice_del())
			}
			this.setCurrent = function(e) {
				m.setCurrent(e)
			}, this.getCurrent = function() {
				return m.getCurrent()
			}, this.stem = function() {
				var e, t, n, r = m.cursor;
				return function() {
					for (var e, t, n, r, i = m.cursor;;) {
						if (m.bra = m.cursor, e = m.find_among(a, 7)) switch (m.ket = m.cursor, e) {
						case 1:
							m.slice_from("à");
							continue;
						case 2:
							m.slice_from("è");
							continue;
						case 3:
							m.slice_from("ì");
							continue;
						case 4:
							m.slice_from("ò");
							continue;
						case 5:
							m.slice_from("ù");
							continue;
						case 6:
							m.slice_from("qU");
							continue;
						case 7:
							if (m.cursor >= m.limit) break;
							m.cursor++;
							continue
						}
						break
					}
					for (m.cursor = i;;) for (t = m.cursor;;) {
						if (n = m.cursor, m.in_grouping(h, 97, 249)) {
							if (m.bra = m.cursor, r = m.cursor, w("u", "U", n)) break;
							if (m.cursor = r, w("i", "I", n)) break
						}
						if (m.cursor = n, m.cursor >= m.limit) return m.cursor = t;
						m.cursor++
					}
				}(), m.cursor = r, e = m.cursor, s = m.limit, i = o = s, v(), m.cursor = e, b() && (o = m.cursor, b() && (i = m.cursor)), m.limit_backward = r, m.cursor = m.limit, function() {
					var e;
					if (m.ket = m.cursor, m.find_among_b(u, 37) && (m.bra = m.cursor, (e = m.find_among_b(l, 5)) && y())) switch (e) {
					case 1:
						m.slice_del();
						break;
					case 2:
						m.slice_from("e")
					}
				}(), m.cursor = m.limit, k() || (m.cursor = m.limit, m.cursor >= s && (n = m.limit_backward, m.limit_backward = s, m.ket = m.cursor, (t = m.find_among_b(d, 87)) && (m.bra = m.cursor, 1 == t && m.slice_del()), m.limit_backward = n)), m.cursor = m.limit, x(), m.cursor = m.limit_backward, function() {
					for (var e; m.bra = m.cursor, e = m.find_among(c, 3);) switch (m.ket = m.cursor, e) {
					case 1:
						m.slice_from("i");
						break;
					case 2:
						m.slice_from("u");
						break;
					case 3:
						if (m.cursor >= m.limit) return;
						m.cursor++
					}
				}(), !0
			}
		}, function(e) {
			return "function" == typeof e.update ? e.update(function(e) {
				return t.setCurrent(e), t.stem(), t.getCurrent()
			}) : (t.setCurrent(e), t.stem(), t.getCurrent())
		}), e.Pipeline.registerFunction(e.it.stemmer, "stemmer-it"), e.it.stopWordFilter = e.generateStopWordFilter("a abbia abbiamo abbiano abbiate ad agl agli ai al all alla alle allo anche avemmo avendo avesse avessero avessi avessimo aveste avesti avete aveva avevamo avevano avevate avevi avevo avrai avranno avrebbe avrebbero avrei avremmo avremo avreste avresti avrete avrà avrò avuta avute avuti avuto c che chi ci coi col come con contro cui da dagl dagli dai dal dall dalla dalle dallo degl degli dei del dell della delle dello di dov dove e ebbe ebbero ebbi ed era erano eravamo eravate eri ero essendo faccia facciamo facciano facciate faccio facemmo facendo facesse facessero facessi facessimo faceste facesti faceva facevamo facevano facevate facevi facevo fai fanno farai faranno farebbe farebbero farei faremmo faremo fareste faresti farete farà farò fece fecero feci fosse fossero fossi fossimo foste fosti fu fui fummo furono gli ha hai hanno ho i il in io l la le lei li lo loro lui ma mi mia mie miei mio ne negl negli nei nel nell nella nelle nello noi non nostra nostre nostri nostro o per perché più quale quanta quante quanti quanto quella quelle quelli quello questa queste questi questo sarai saranno sarebbe sarebbero sarei saremmo saremo sareste saresti sarete sarà sarò se sei si sia siamo siano siate siete sono sta stai stando stanno starai staranno starebbe starebbero starei staremmo staremo stareste staresti starete starà starò stava stavamo stavano stavate stavi stavo stemmo stesse stessero stessi stessimo steste stesti stette stettero stetti stia stiamo stiano stiate sto su sua sue sugl sugli sui sul sull sulla sulle sullo suo suoi ti tra tu tua tue tuo tuoi tutti tutto un una uno vi voi vostra vostre vostri vostro è".split(" ")), e.Pipeline.registerFunction(e.it.stopWordFilter, "stopWordFilter-it")
	}
}), function(e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()(e.lunr)
}(this, function() {
	return function(e) {
		if (void 0 === e) throw new Error("Lunr is not present. Please include / require Lunr before this script.");
		if (void 0 === e.stemmerSupport) throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");
		var x, z, t;
		e.fi = function() {
			this.pipeline.reset(), this.pipeline.add(e.fi.trimmer, e.fi.stopWordFilter, e.fi.stemmer), this.searchPipeline && (this.searchPipeline.reset(), this.searchPipeline.add(e.fi.stemmer))
		}, e.fi.wordCharacters = "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ", e.fi.trimmer = e.trimmerSupport.generateTrimmer(e.fi.wordCharacters), e.Pipeline.registerFunction(e.fi.trimmer, "trimmer-fi"), e.fi.stemmer = (x = e.stemmerSupport.Among, z = e.stemmerSupport.SnowballProgram, t = new function() {
			var r, i, s, a, n = [new x("pa", -1, 1), new x("sti", -1, 2), new x("kaan", -1, 1), new x("han", -1, 1), new x("kin", -1, 1), new x("hän", -1, 1), new x("kään", -1, 1), new x("ko", -1, 1), new x("pä", -1, 1), new x("kö", -1, 1)],
				o = [new x("lla", -1, -1), new x("na", -1, -1), new x("ssa", -1, -1), new x("ta", -1, -1), new x("lta", 3, -1), new x("sta", 3, -1)],
				c = [new x("llä", -1, -1), new x("nä", -1, -1), new x("ssä", -1, -1), new x("tä", -1, -1), new x("ltä", 3, -1), new x("stä", 3, -1)],
				u = [new x("lle", -1, -1), new x("ine", -1, -1)],
				l = [new x("nsa", -1, 3), new x("mme", -1, 3), new x("nne", -1, 3), new x("ni", -1, 2), new x("si", -1, 1), new x("an", -1, 4), new x("en", -1, 6), new x("än", -1, 5), new x("nsä", -1, 3)],
				e = [new x("aa", -1, -1), new x("ee", -1, -1), new x("ii", -1, -1), new x("oo", -1, -1), new x("uu", -1, -1), new x("ää", -1, -1), new x("öö", -1, -1)],
				d = [new x("a", -1, 8), new x("lla", 0, -1), new x("na", 0, -1), new x("ssa", 0, -1), new x("ta", 0, -1), new x("lta", 4, -1), new x("sta", 4, -1), new x("tta", 4, 9), new x("lle", -1, -1), new x("ine", -1, -1), new x("ksi", -1, -1), new x("n", -1, 7), new x("han", 11, 1), new x("den", 11, -1, k), new x("seen", 11, -1, _), new x("hen", 11, 2), new x("tten", 11, -1, k), new x("hin", 11, 3), new x("siin", 11, -1, k), new x("hon", 11, 4), new x("hän", 11, 5), new x("hön", 11, 6), new x("ä", -1, 8), new x("llä", 22, -1), new x("nä", 22, -1), new x("ssä", 22, -1), new x("tä", 22, -1), new x("ltä", 26, -1), new x("stä", 26, -1), new x("ttä", 26, 9)],
				h = [new x("eja", -1, -1), new x("mma", -1, 1), new x("imma", 1, -1), new x("mpa", -1, 1), new x("impa", 3, -1), new x("mmi", -1, 1), new x("immi", 5, -1), new x("mpi", -1, 1), new x("impi", 7, -1), new x("ejä", -1, -1), new x("mmä", -1, 1), new x("immä", 10, -1), new x("mpä", -1, 1), new x("impä", 12, -1)],
				f = [new x("i", -1, -1), new x("j", -1, -1)],
				p = [new x("mma", -1, 1), new x("imma", 0, -1)],
				m = [17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
				w = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32],
				t = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32],
				g = [17, 97, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32],
				v = new z;

			function b() {
				for (var e; e = v.cursor, !v.in_grouping(w, 97, 246);) {
					if ((v.cursor = e) >= v.limit) return !0;
					v.cursor++
				}
				for (v.cursor = e; !v.out_grouping(w, 97, 246);) {
					if (v.cursor >= v.limit) return !0;
					v.cursor++
				}
				return !1
			}
			function y() {
				var e, t;
				if (v.cursor >= a) if (t = v.limit_backward, v.limit_backward = a, v.ket = v.cursor, e = v.find_among_b(n, 10)) {
					switch (v.bra = v.cursor, v.limit_backward = t, e) {
					case 1:
						if (!v.in_grouping_b(g, 97, 246)) return;
						break;
					case 2:
						if (!(s <= v.cursor)) return
					}
					v.slice_del()
				} else v.limit_backward = t
			}
			function _() {
				return v.find_among_b(e, 7)
			}
			function k() {
				return v.eq_s_b(1, "i") && v.in_grouping_b(t, 97, 246)
			}
			this.setCurrent = function(e) {
				v.setCurrent(e)
			}, this.getCurrent = function() {
				return v.getCurrent()
			}, this.stem = function() {
				var e, t = v.cursor;
				return a = v.limit, s = a, b() || (a = v.cursor, b() || (s = v.cursor)), r = !1, v.limit_backward = t, v.cursor = v.limit, y(), v.cursor = v.limit, function() {
					var e, t, n;
					if (v.cursor >= a) if (t = v.limit_backward, v.limit_backward = a, v.ket = v.cursor, e = v.find_among_b(l, 9)) switch (v.bra = v.cursor, v.limit_backward = t, e) {
					case 1:
						n = v.limit - v.cursor, v.eq_s_b(1, "k") || (v.cursor = v.limit - n, v.slice_del());
						break;
					case 2:
						v.slice_del(), v.ket = v.cursor, v.eq_s_b(3, "kse") && (v.bra = v.cursor, v.slice_from("ksi"));
						break;
					case 3:
						v.slice_del();
						break;
					case 4:
						v.find_among_b(o, 6) && v.slice_del();
						break;
					case 5:
						v.find_among_b(c, 6) && v.slice_del();
						break;
					case 6:
						v.find_among_b(u, 2) && v.slice_del()
					} else v.limit_backward = t
				}(), v.cursor = v.limit, function() {
					var e, t, n;
					if (v.cursor >= a) if (t = v.limit_backward, v.limit_backward = a, v.ket = v.cursor, e = v.find_among_b(d, 30)) {
						switch (v.bra = v.cursor, v.limit_backward = t, e) {
						case 1:
							if (!v.eq_s_b(1, "a")) return;
							break;
						case 2:
						case 9:
							if (!v.eq_s_b(1, "e")) return;
							break;
						case 3:
							if (!v.eq_s_b(1, "i")) return;
							break;
						case 4:
							if (!v.eq_s_b(1, "o")) return;
							break;
						case 5:
							if (!v.eq_s_b(1, "ä")) return;
							break;
						case 6:
							if (!v.eq_s_b(1, "ö")) return;
							break;
						case 7:
							if (n = v.limit - v.cursor, !_() && (v.cursor = v.limit - n, !v.eq_s_b(2, "ie"))) {
								v.cursor = v.limit - n;
								break
							}
							if (v.cursor = v.limit - n, v.cursor <= v.limit_backward) {
								v.cursor = v.limit - n;
								break
							}
							v.cursor--, v.bra = v.cursor;
							break;
						case 8:
							if (!v.in_grouping_b(w, 97, 246) || !v.out_grouping_b(w, 97, 246)) return
						}
						v.slice_del(), r = !0
					} else v.limit_backward = t
				}(), v.cursor = v.limit, function() {
					var e, t, n;
					if (v.cursor >= s) if (t = v.limit_backward, v.limit_backward = s, v.ket = v.cursor, e = v.find_among_b(h, 14)) {
						if (v.bra = v.cursor, v.limit_backward = t, 1 == e) {
							if (n = v.limit - v.cursor, v.eq_s_b(2, "po")) return;
							v.cursor = v.limit - n
						}
						v.slice_del()
					} else v.limit_backward = t
				}(), v.cursor = v.limit, r ? v.cursor >= a && (e = v.limit_backward, v.limit_backward = a, v.ket = v.cursor, v.find_among_b(f, 2) ? (v.bra = v.cursor, v.limit_backward = e, v.slice_del()) : v.limit_backward = e) : (v.cursor = v.limit, function() {
					var e, t, n, r, i, o;
					if (v.cursor >= a) {
						if (t = v.limit_backward, v.limit_backward = a, v.ket = v.cursor, v.eq_s_b(1, "t") && (v.bra = v.cursor, n = v.limit - v.cursor, v.in_grouping_b(w, 97, 246) && (v.cursor = v.limit - n, v.slice_del(), v.limit_backward = t, r = v.limit - v.cursor, v.cursor >= s && (v.cursor = s, i = v.limit_backward, v.limit_backward = v.cursor, v.cursor = v.limit - r, v.ket = v.cursor, e = v.find_among_b(p, 2))))) {
							if (v.bra = v.cursor, v.limit_backward = i, 1 == e) {
								if (o = v.limit - v.cursor, v.eq_s_b(2, "po")) return;
								v.cursor = v.limit - o
							}
							return v.slice_del()
						}
						v.limit_backward = t
					}
				}()), v.cursor = v.limit, function() {
					var e, t, n, r;
					if (v.cursor >= a) {
						for (e = v.limit_backward, v.limit_backward = a, t = v.limit - v.cursor, _() && (v.cursor = v.limit - t, v.ket = v.cursor, v.cursor > v.limit_backward && (v.cursor--, v.bra = v.cursor, v.slice_del())), v.cursor = v.limit - t, v.ket = v.cursor, v.in_grouping_b(m, 97, 228) && (v.bra = v.cursor, v.out_grouping_b(w, 97, 246) && v.slice_del()), v.cursor = v.limit - t, v.ket = v.cursor, v.eq_s_b(1, "j") && (v.bra = v.cursor, n = v.limit - v.cursor, v.eq_s_b(1, "o") ? v.slice_del() : (v.cursor = v.limit - n, v.eq_s_b(1, "u") && v.slice_del())), v.cursor = v.limit - t, v.ket = v.cursor, v.eq_s_b(1, "o") && (v.bra = v.cursor, v.eq_s_b(1, "j") && v.slice_del()), v.cursor = v.limit - t, v.limit_backward = e;;) {
							if (r = v.limit - v.cursor, v.out_grouping_b(w, 97, 246)) {
								v.cursor = v.limit - r;
								break
							}
							if (v.cursor = v.limit - r, v.cursor <= v.limit_backward) return;
							v.cursor--
						}
						v.ket = v.cursor, v.cursor > v.limit_backward && (v.cursor--, v.bra = v.cursor, i = v.slice_to(), v.eq_v_b(i) && v.slice_del())
					}
				}(), !0
			}
		}, function(e) {
			return "function" == typeof e.update ? e.update(function(e) {
				return t.setCurrent(e), t.stem(), t.getCurrent()
			}) : (t.setCurrent(e), t.stem(), t.getCurrent())
		}), e.Pipeline.registerFunction(e.fi.stemmer, "stemmer-fi"), e.fi.stopWordFilter = e.generateStopWordFilter("ei eivät emme en et ette että he heidän heidät heihin heille heillä heiltä heissä heistä heitä hän häneen hänelle hänellä häneltä hänen hänessä hänestä hänet häntä itse ja johon joiden joihin joiksi joilla joille joilta joina joissa joista joita joka joksi jolla jolle jolta jona jonka jos jossa josta jota jotka kanssa keiden keihin keiksi keille keillä keiltä keinä keissä keistä keitä keneen keneksi kenelle kenellä keneltä kenen kenenä kenessä kenestä kenet ketkä ketkä ketä koska kuin kuka kun me meidän meidät meihin meille meillä meiltä meissä meistä meitä mihin miksi mikä mille millä miltä minkä minkä minua minulla minulle minulta minun minussa minusta minut minuun minä minä missä mistä mitkä mitä mukaan mutta ne niiden niihin niiksi niille niillä niiltä niin niin niinä niissä niistä niitä noiden noihin noiksi noilla noille noilta noin noina noissa noista noita nuo nyt näiden näihin näiksi näille näillä näiltä näinä näissä näistä näitä nämä ole olemme olen olet olette oli olimme olin olisi olisimme olisin olisit olisitte olisivat olit olitte olivat olla olleet ollut on ovat poikki se sekä sen siihen siinä siitä siksi sille sillä sillä siltä sinua sinulla sinulle sinulta sinun sinussa sinusta sinut sinuun sinä sinä sitä tai te teidän teidät teihin teille teillä teiltä teissä teistä teitä tuo tuohon tuoksi tuolla tuolle tuolta tuon tuona tuossa tuosta tuota tähän täksi tälle tällä tältä tämä tämän tänä tässä tästä tätä vaan vai vaikka yli".split(" ")), e.Pipeline.registerFunction(e.fi.stopWordFilter, "stopWordFilter-fi")
	}
}), function(e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()(e.lunr)
}(this, function() {
	return function(e) {
		if (void 0 === e) throw new Error("Lunr is not present. Please include / require Lunr before this script.");
		if (void 0 === e.stemmerSupport) throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");
		var _, k, t;
		e.du = function() {
			this.pipeline.reset(), this.pipeline.add(e.du.trimmer, e.du.stopWordFilter, e.du.stemmer), this.searchPipeline && (this.searchPipeline.reset(), this.searchPipeline.add(e.du.stemmer))
		}, e.du.wordCharacters = "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ", e.du.trimmer = e.trimmerSupport.generateTrimmer(e.du.wordCharacters), e.Pipeline.registerFunction(e.du.trimmer, "trimmer-du"), e.du.stemmer = (_ = e.stemmerSupport.Among, k = e.stemmerSupport.SnowballProgram, t = new function() {
			var t, n, a, i = [new _("", -1, 6), new _("á", 0, 1), new _("ä", 0, 1), new _("é", 0, 2), new _("ë", 0, 2), new _("í", 0, 3), new _("ï", 0, 3), new _("ó", 0, 4), new _("ö", 0, 4), new _("ú", 0, 5), new _("ü", 0, 5)],
				r = [new _("", -1, 3), new _("I", 0, 2), new _("Y", 0, 1)],
				o = [new _("dd", -1, -1), new _("kk", -1, -1), new _("tt", -1, -1)],
				c = [new _("ene", -1, 2), new _("se", -1, 3), new _("en", -1, 2), new _("heden", 2, 1), new _("s", -1, 3)],
				u = [new _("end", -1, 1), new _("ig", -1, 2), new _("ing", -1, 1), new _("lijk", -1, 3), new _("baar", -1, 4), new _("bar", -1, 5)],
				l = [new _("aa", -1, -1), new _("ee", -1, -1), new _("oo", -1, -1), new _("uu", -1, -1)],
				d = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128],
				h = [1, 0, 0, 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128],
				f = [17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128],
				p = new k;

			function s(e) {
				return (p.cursor = e) >= p.limit || (p.cursor++, !1)
			}
			function m() {
				for (; !p.in_grouping(d, 97, 232);) {
					if (p.cursor >= p.limit) return !0;
					p.cursor++
				}
				for (; !p.out_grouping(d, 97, 232);) {
					if (p.cursor >= p.limit) return !0;
					p.cursor++
				}
				return !1
			}
			function w() {
				return n <= p.cursor
			}
			function g() {
				return t <= p.cursor
			}
			function v() {
				var e = p.limit - p.cursor;
				p.find_among_b(o, 3) && (p.cursor = p.limit - e, p.ket = p.cursor, p.cursor > p.limit_backward && (p.cursor--, p.bra = p.cursor, p.slice_del()))
			}
			function b() {
				var e;
				a = !1, p.ket = p.cursor, p.eq_s_b(1, "e") && (p.bra = p.cursor, w() && (e = p.limit - p.cursor, p.out_grouping_b(d, 97, 232) && (p.cursor = p.limit - e, p.slice_del(), a = !0, v())))
			}
			function y() {
				var e;
				w() && (e = p.limit - p.cursor, p.out_grouping_b(d, 97, 232) && (p.cursor = p.limit - e, p.eq_s_b(3, "gem") || (p.cursor = p.limit - e, p.slice_del(), v())))
			}
			this.setCurrent = function(e) {
				p.setCurrent(e)
			}, this.getCurrent = function() {
				return p.getCurrent()
			}, this.stem = function() {
				var e = p.cursor;
				return function() {
					for (var e, t, n, r = p.cursor;;) {
						if (p.bra = p.cursor, e = p.find_among(i, 11)) switch (p.ket = p.cursor, e) {
						case 1:
							p.slice_from("a");
							continue;
						case 2:
							p.slice_from("e");
							continue;
						case 3:
							p.slice_from("i");
							continue;
						case 4:
							p.slice_from("o");
							continue;
						case 5:
							p.slice_from("u");
							continue;
						case 6:
							if (p.cursor >= p.limit) break;
							p.cursor++;
							continue
						}
						break
					}
					for (p.cursor = r, p.bra = r, p.eq_s(1, "y") ? (p.ket = p.cursor, p.slice_from("Y")) : p.cursor = r;;) if (t = p.cursor, p.in_grouping(d, 97, 232)) {
						if (n = p.cursor, p.bra = n, p.eq_s(1, "i")) p.ket = p.cursor, p.in_grouping(d, 97, 232) && (p.slice_from("I"), p.cursor = t);
						else if (p.cursor = n, p.eq_s(1, "y")) p.ket = p.cursor, p.slice_from("Y"), p.cursor = t;
						else if (s(t)) break
					} else if (s(t)) break
				}(), p.cursor = e, n = p.limit, t = n, m() || ((n = p.cursor) < 3 && (n = 3), m() || (t = p.cursor)), p.limit_backward = e, p.cursor = p.limit, function() {
					var e, t, n, r, i, o, s = p.limit - p.cursor;
					if (p.ket = p.cursor, e = p.find_among_b(c, 5)) switch (p.bra = p.cursor, e) {
					case 1:
						w() && p.slice_from("heid");
						break;
					case 2:
						y();
						break;
					case 3:
						w() && p.out_grouping_b(f, 97, 232) && p.slice_del()
					}
					if (p.cursor = p.limit - s, b(), p.cursor = p.limit - s, p.ket = p.cursor, p.eq_s_b(4, "heid") && (p.bra = p.cursor, g() && (t = p.limit - p.cursor, p.eq_s_b(1, "c") || (p.cursor = p.limit - t, p.slice_del(), p.ket = p.cursor, p.eq_s_b(2, "en") && (p.bra = p.cursor, y())))), p.cursor = p.limit - s, p.ket = p.cursor, e = p.find_among_b(u, 6)) switch (p.bra = p.cursor, e) {
					case 1:
						if (g()) {
							if (p.slice_del(), n = p.limit - p.cursor, p.ket = p.cursor, p.eq_s_b(2, "ig") && (p.bra = p.cursor, g() && (r = p.limit - p.cursor, !p.eq_s_b(1, "e")))) {
								p.cursor = p.limit - r, p.slice_del();
								break
							}
							p.cursor = p.limit - n, v()
						}
						break;
					case 2:
						g() && (i = p.limit - p.cursor, p.eq_s_b(1, "e") || (p.cursor = p.limit - i, p.slice_del()));
						break;
					case 3:
						g() && (p.slice_del(), b());
						break;
					case 4:
						g() && p.slice_del();
						break;
					case 5:
						g() && a && p.slice_del()
					}
					p.cursor = p.limit - s, p.out_grouping_b(h, 73, 232) && (o = p.limit - p.cursor, p.find_among_b(l, 4) && p.out_grouping_b(d, 97, 232) && (p.cursor = p.limit - o, p.ket = p.cursor, p.cursor > p.limit_backward && (p.cursor--, p.bra = p.cursor, p.slice_del())))
				}(), p.cursor = p.limit_backward, function() {
					for (var e;;) if (p.bra = p.cursor, e = p.find_among(r, 3)) switch (p.ket = p.cursor, e) {
					case 1:
						p.slice_from("y");
						break;
					case 2:
						p.slice_from("i");
						break;
					case 3:
						if (p.cursor >= p.limit) return;
						p.cursor++
					}
				}(), !0
			}
		}, function(e) {
			return "function" == typeof e.update ? e.update(function(e) {
				return t.setCurrent(e), t.stem(), t.getCurrent()
			}) : (t.setCurrent(e), t.stem(), t.getCurrent())
		}), e.Pipeline.registerFunction(e.du.stemmer, "stemmer-du"), e.du.stopWordFilter = e.generateStopWordFilter(" aan al alles als altijd andere ben bij daar dan dat de der deze die dit doch doen door dus een eens en er ge geen geweest haar had heb hebben heeft hem het hier hij hoe hun iemand iets ik in is ja je kan kon kunnen maar me meer men met mij mijn moet na naar niet niets nog nu of om omdat onder ons ook op over reeds te tegen toch toen tot u uit uw van veel voor want waren was wat werd wezen wie wil worden wordt zal ze zelf zich zij zijn zo zonder zou".split(" ")), e.Pipeline.registerFunction(e.du.stopWordFilter, "stopWordFilter-du")
	}
}), function(e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()(e.lunr)
}(this, function() {
	return function(e) {
		if (void 0 === e) throw new Error("Lunr is not present. Please include / require Lunr before this script.");
		if (void 0 === e.stemmerSupport) throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");
		var t, h, n;
		e.da = function() {
			this.pipeline.reset(), this.pipeline.add(e.da.trimmer, e.da.stopWordFilter, e.da.stemmer), this.searchPipeline && (this.searchPipeline.reset(), this.searchPipeline.add(e.da.stemmer))
		}, e.da.wordCharacters = "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ", e.da.trimmer = e.trimmerSupport.generateTrimmer(e.da.wordCharacters), e.Pipeline.registerFunction(e.da.trimmer, "trimmer-da"), e.da.stemmer = (t = e.stemmerSupport.Among, h = e.stemmerSupport.SnowballProgram, n = new function() {
			var n, i, r, o = [new t("hed", -1, 1), new t("ethed", 0, 1), new t("ered", -1, 1), new t("e", -1, 1), new t("erede", 3, 1), new t("ende", 3, 1), new t("erende", 5, 1), new t("ene", 3, 1), new t("erne", 3, 1), new t("ere", 3, 1), new t("en", -1, 1), new t("heden", 10, 1), new t("eren", 10, 1), new t("er", -1, 1), new t("heder", 13, 1), new t("erer", 13, 1), new t("s", -1, 2), new t("heds", 16, 1), new t("es", 16, 1), new t("endes", 18, 1), new t("erendes", 19, 1), new t("enes", 18, 1), new t("ernes", 18, 1), new t("eres", 18, 1), new t("ens", 16, 1), new t("hedens", 24, 1), new t("erens", 24, 1), new t("ers", 16, 1), new t("ets", 16, 1), new t("erets", 28, 1), new t("et", -1, 1), new t("eret", 30, 1)],
				s = [new t("gd", -1, -1), new t("dt", -1, -1), new t("gt", -1, -1), new t("kt", -1, -1)],
				a = [new t("ig", -1, 1), new t("lig", 0, 1), new t("elig", 1, 1), new t("els", -1, 1), new t("løst", -1, 2)],
				c = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128],
				u = [239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16],
				l = new h;

			function d() {
				var e, t = l.limit - l.cursor;
				l.cursor >= i && (e = l.limit_backward, l.limit_backward = i, l.ket = l.cursor, l.find_among_b(s, 4) ? (l.bra = l.cursor, l.limit_backward = e, l.cursor = l.limit - t, l.cursor > l.limit_backward && (l.cursor--, l.bra = l.cursor, l.slice_del())) : l.limit_backward = e)
			}
			this.setCurrent = function(e) {
				l.setCurrent(e)
			}, this.getCurrent = function() {
				return l.getCurrent()
			}, this.stem = function() {
				var e, t = l.cursor;
				return function() {
					var e, t = l.cursor + 3;
					if (i = l.limit, 0 <= t && t <= l.limit) {
						for (n = t;;) {
							if (e = l.cursor, l.in_grouping(c, 97, 248)) {
								l.cursor = e;
								break
							}
							if ((l.cursor = e) >= l.limit) return;
							l.cursor++
						}
						for (; !l.out_grouping(c, 97, 248);) {
							if (l.cursor >= l.limit) return;
							l.cursor++
						}(i = l.cursor) < n && (i = n)
					}
				}(), l.limit_backward = t, l.cursor = l.limit, function() {
					var e, t;
					if (l.cursor >= i && (t = l.limit_backward, l.limit_backward = i, l.ket = l.cursor, e = l.find_among_b(o, 32), l.limit_backward = t, e)) switch (l.bra = l.cursor, e) {
					case 1:
						l.slice_del();
						break;
					case 2:
						l.in_grouping_b(u, 97, 229) && l.slice_del()
					}
				}(), l.cursor = l.limit, d(), l.cursor = l.limit, function() {
					var e, t, n, r = l.limit - l.cursor;
					if (l.ket = l.cursor, l.eq_s_b(2, "st") && (l.bra = l.cursor, l.eq_s_b(2, "ig") && l.slice_del()), l.cursor = l.limit - r, l.cursor >= i && (t = l.limit_backward, l.limit_backward = i, l.ket = l.cursor, e = l.find_among_b(a, 5), l.limit_backward = t, e)) switch (l.bra = l.cursor, e) {
					case 1:
						l.slice_del(), n = l.limit - l.cursor, d(), l.cursor = l.limit - n;
						break;
					case 2:
						l.slice_from("løs")
					}
				}(), l.cursor = l.limit, l.cursor >= i && (e = l.limit_backward, l.limit_backward = i, l.ket = l.cursor, l.out_grouping_b(c, 97, 248) ? (l.bra = l.cursor, r = l.slice_to(r), l.limit_backward = e, l.eq_v_b(r) && l.slice_del()) : l.limit_backward = e), !0
			}
		}, function(e) {
			return "function" == typeof e.update ? e.update(function(e) {
				return n.setCurrent(e), n.stem(), n.getCurrent()
			}) : (n.setCurrent(e), n.stem(), n.getCurrent())
		}), e.Pipeline.registerFunction(e.da.stemmer, "stemmer-da"), e.da.stopWordFilter = e.generateStopWordFilter("ad af alle alt anden at blev blive bliver da de dem den denne der deres det dette dig din disse dog du efter eller en end er et for fra ham han hans har havde have hende hendes her hos hun hvad hvis hvor i ikke ind jeg jer jo kunne man mange med meget men mig min mine mit mod ned noget nogle nu når og også om op os over på selv sig sin sine sit skal skulle som sådan thi til ud under var vi vil ville vor være været".split(" ")), e.Pipeline.registerFunction(e.da.stopWordFilter, "stopWordFilter-da")
	}
}), function(e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()(e.lunr)
}(this, function() {
	return function(a) {
		a.multiLanguage = function() {
			for (var e = Array.prototype.slice.call(arguments), t = e.join("-"), n = "", r = [], i = [], o = 0; o < e.length; ++o)"en" == e[o] ? (n += "\\w", r.unshift(a.stopWordFilter), r.push(a.stemmer), i.push(a.stemmer)) : (n += a[e[o]].wordCharacters, r.unshift(a[e[o]].stopWordFilter), r.push(a[e[o]].stemmer), i.push(a[e[o]].stemmer));
			var s = a.trimmerSupport.generateTrimmer(n);
			return a.Pipeline.registerFunction(s, "lunr-multi-trimmer-" + t), r.unshift(s), function() {
				this.pipeline.reset(), this.pipeline.add.apply(this.pipeline, r), this.searchPipeline && (this.searchPipeline.reset(), this.searchPipeline.add.apply(this.searchPipeline, i))
			}
		}
	}
}), function(a) {
	a.fn.ghostHunter = function(e) {
		var t = a.extend({}, a.fn.ghostHunter.defaults, e);
		if (t.results) return n.init(this, t), n
	}, a.fn.ghostHunter.defaults = {
		resultsData: !1,
		onPageLoad: !1,
		onKeyUp: !1,
		result_template: "<a href='{{link}}'><p><h2>{{title}}</h2><h4>{{prettyPubDate}}</h4></p></a>",
		info_template: "<p>Number of posts found: {{amount}}</p>",
		displaySearchInfo: !0,
		zeroResultsInfo: !0,
		before: !1,
		onComplete: !1,
		includepages: !1,
		filterfields: !1
	};
	var c = function(e) {
			var t = new Date(e);
			return t.getDate() + "." + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][t.getMonth()].substr(0, 3) + "." + t.getFullYear()
		},
		n = {
			isInit: !1,
			init: function(t, e) {
				var n = this;
				this.target = t, this.results = e.results, this.blogData = {}, this.result_template = e.result_template, this.info_template = e.info_template, this.zeroResultsInfo = e.zeroResultsInfo, this.displaySearchInfo = e.displaySearchInfo, this.before = e.before, this.onComplete = e.onComplete, this.includepages = e.includepages, this.filterfields = e.filterfields, this.index = lunr(function() {
					this.use(lunr.multiLanguage("en", "ru", "fr", "de", "es", "pt", "it", "fi", "du", "da")), this.field("title", {
						boost: 10
					}), this.field("description"), this.field("link"), this.field("markdown", {
						boost: 5
					}), this.field("pubDate"), this.field("tag"), this.ref("id")
				}), e.onPageLoad ? n.loadAPI() : t.focus(function() {
					n.loadAPI()
				}), t.closest("form").submit(function(e) {
					e.preventDefault(), n.find(t.val())
				}), e.onKeyUp && t.keyup(function() {
					n.find(t.val())
				})
			},
			loadAPI: function() {
				if (this.isInit) return !1;
				var o = this.index,
					s = this.blogData;
				obj = {
					limit: "all",
					include: "tags"
				}, this.includepages && (obj.filter = "(page:true,page:false)"), a.get(ghost.url.api("posts", obj)).done(function(e) {
					searchData = e.posts, searchData.forEach(function(e) {
						var t = e.tags.map(function(e) {
							return e.name
						});
						null == e.meta_description && (e.meta_description = "");
						var n = t.join(", ");
						n.length < 1 && (n = "undefined");
						var r = {
							id: String(e.id),
							title: String(e.title),
							description: String(e.meta_description),
							markdown: String(e.markdown),
							pubDate: String(e.created_at),
							image: String(e.image),
							tag: n,
							link: String(e.url)
						};
						r.prettyPubDate = c(r.pubDate);
						var i = c(r.pubDate);
						o.add(r), s[e.id] = {
							title: e.title,
							description: e.meta_description,
							pubDate: i,
							link: e.url,
							image: e.image
						}
					})
				}), this.isInit = !0
			},
			find: function(e) {
				var t = this.index.search(e),
					n = a(this.results),
					r = [];
				n.empty(), this.before && this.before(), (this.zeroResultsInfo || 0 < t.length) && this.displaySearchInfo && n.append(this.format(this.info_template, {
					amount: t.length
				}));
				for (var i = 0; i < t.length; i++) {
					var o = t[i].ref,
						s = this.blogData[o];
					n.append(this.format(this.result_template, s)), r.push(s)
				}
				this.onComplete && this.onComplete(r)
			},
			clear: function() {
				a(this.results).empty(), this.target.val("")
			},
			format: function(e, r) {
				return e.replace(/{{([^{}]*)}}/g, function(e, t) {
					var n = r[t];
					return "string" == typeof n || "number" == typeof n ? n : e
				})
			}
		}
}(jQuery), $(document).ready(function() {
	"use strict";
	$(".js-off-canvas-toggle").click(function(e) {
		e.preventDefault(), $(".js-off-canvas-content, .js-off-canvas-container").toggleClass("is-active")
	}), $(".home-template .js-post-card-wrap:nth-of-type(2), .home-template .js-post-card-wrap:nth-of-type(3)").addClass("o-grid__col--2-4-m o-grid__col--2-4-l"), $(".js-fadein").viewportChecker({
		classToAdd: "is-inview",
		offset: 100,
		removeClassAfterAnimation: !0
	}), $(".c-content").fitVids({
		customSelector: ['iframe[src*="ted.com"]', 'iframe[src*="player.twitch.tv"]', 'iframe[src*="dailymotion.com"]', 'iframe[src*="facebook.com"]']
	});
	var tx = $(".js-search-input"),
		ex = $(".js-search-results"),
		nx = $(".js-search-toggle"),
		rx = "      <a href={{link}} class='c-search-result'>        <div class='c-search-result__content'>          <h3 class='c-search-result__title'>{{title}}</h3>          <time class='c-search-result__date'>{{pubDate}}</time>        </div>        <div class='c-search-result__media'>          <div class='c-search-result__image is-inview' style='background-image: url({{image}})'></div>        </div>      </a>";
	n.click(function(e) {
		e.preventDefault(), $(".js-search").addClass("is-active"), $(".js-off-canvas-container").removeClass("is-active"), setTimeout(function() {
			t.focus()
		}, 500)
	}), $(".c-search, .js-search-close, .js-search-close .icon").on("click keyup", function(e) {
		e.target != this && "js-search-close" != e.target.className && "icon" != e.target.className && 27 != e.keyCode || $(".c-search").removeClass("is-active")
	}), t.ghostHunter({
		results: e,
		onKeyUp: !0,
		result_template: r,
		zeroResultsInfo: !1,
		includepages: !0,
		displaySearchInfo: !1,
		before: function() {
			e.fadeIn()
		}
	})
});