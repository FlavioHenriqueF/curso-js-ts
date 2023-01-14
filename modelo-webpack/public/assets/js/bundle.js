(() => {
  "use strict";
  var n,
    r,
    e,
    o,
    t,
    a,
    i,
    s,
    c,
    p,
    A,
    u,
    f,
    d,
    l = {
      122: (n, r, e) => {
        e.d(r, { Z: () => s });
        var o = e(537),
          t = e.n(o),
          a = e(645),
          i = e.n(a)()(t());
        i.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);",
        ]),
          i.push([
            n.id,
            ":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n",
            "",
            {
              version: 3,
              sources: ["webpack://./src/assets/css/style.css"],
              names: [],
              mappings:
                "AACA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC",
              sourcesContent: [
                "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n",
              ],
              sourceRoot: "",
            },
          ]);
        const s = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var e = "",
                  o = void 0 !== r[5];
                return (
                  r[4] && (e += "@supports (".concat(r[4], ") {")),
                  r[2] && (e += "@media ".concat(r[2], " {")),
                  o &&
                    (e += "@layer".concat(
                      r[5].length > 0 ? " ".concat(r[5]) : "",
                      " {"
                    )),
                  (e += n(r)),
                  o && (e += "}"),
                  r[2] && (e += "}"),
                  r[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (r.i = function (n, e, o, t, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var p = 0; p < n.length; p++) {
                var A = [].concat(n[p]);
                (o && i[A[0]]) ||
                  (void 0 !== a &&
                    (void 0 === A[5] ||
                      (A[1] = "@layer"
                        .concat(A[5].length > 0 ? " ".concat(A[5]) : "", " {")
                        .concat(A[1], "}")),
                    (A[5] = a)),
                  e &&
                    (A[2]
                      ? ((A[1] = "@media "
                          .concat(A[2], " {")
                          .concat(A[1], "}")),
                        (A[2] = e))
                      : (A[2] = e)),
                  t &&
                    (A[4]
                      ? ((A[1] = "@supports ("
                          .concat(A[4], ") {")
                          .concat(A[1], "}")),
                        (A[4] = t))
                      : (A[4] = "".concat(t))),
                  r.push(A));
              }
            }),
            r
          );
        };
      },
      537: (n) => {
        n.exports = function (n) {
          var r = n[1],
            e = n[3];
          if (!e) return r;
          if ("function" == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
              t =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  o
                ),
              a = "/*# ".concat(t, " */");
            return [r].concat([a]).join("\n");
          }
          return [r].join("\n");
        };
      },
      379: (n) => {
        var r = [];
        function e(n) {
          for (var e = -1, o = 0; o < r.length; o++)
            if (r[o].identifier === n) {
              e = o;
              break;
            }
          return e;
        }
        function o(n, o) {
          for (var a = {}, i = [], s = 0; s < n.length; s++) {
            var c = n[s],
              p = o.base ? c[0] + o.base : c[0],
              A = a[p] || 0,
              u = "".concat(p, " ").concat(A);
            a[p] = A + 1;
            var f = e(u),
              d = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== f) r[f].references++, r[f].updater(d);
            else {
              var l = t(d, o);
              (o.byIndex = s),
                r.splice(s, 0, { identifier: u, updater: l, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function t(n, r) {
          var e = r.domAPI(r);
          return (
            e.update(n),
            function (r) {
              if (r) {
                if (
                  r.css === n.css &&
                  r.media === n.media &&
                  r.sourceMap === n.sourceMap &&
                  r.supports === n.supports &&
                  r.layer === n.layer
                )
                  return;
                e.update((n = r));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, t) {
          var a = o((n = n || []), (t = t || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var s = e(a[i]);
              r[s].references--;
            }
            for (var c = o(n, t), p = 0; p < a.length; p++) {
              var A = e(a[p]);
              0 === r[A].references && (r[A].updater(), r.splice(A, 1));
            }
            a = c;
          };
        };
      },
      569: (n) => {
        var r = {};
        n.exports = function (n, e) {
          var o = (function (n) {
            if (void 0 === r[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              r[n] = e;
            }
            return r[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(e);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var r = document.createElement("style");
          return n.setAttributes(r, n.attributes), n.insert(r, n.options), r;
        };
      },
      565: (n, r, e) => {
        n.exports = function (n) {
          var r = e.nc;
          r && n.setAttribute("nonce", r);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var r = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, r, e) {
                var o = "";
                e.supports && (o += "@supports (".concat(e.supports, ") {")),
                  e.media && (o += "@media ".concat(e.media, " {"));
                var t = void 0 !== e.layer;
                t &&
                  (o += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (o += e.css),
                  t && (o += "}"),
                  e.media && (o += "}"),
                  e.supports && (o += "}");
                var a = e.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  r.styleTagTransform(o, n, r.options);
              })(r, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(r);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, r) {
          if (r.styleSheet) r.styleSheet.cssText = n;
          else {
            for (; r.firstChild; ) r.removeChild(r.firstChild);
            r.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    m = {};
  function g(n) {
    var r = m[n];
    if (void 0 !== r) return r.exports;
    var e = (m[n] = { id: n, exports: {} });
    return l[n](e, e.exports, g), e.exports;
  }
  (g.n = (n) => {
    var r = n && n.__esModule ? () => n.default : () => n;
    return g.d(r, { a: r }), r;
  }),
    (g.d = (n, r) => {
      for (var e in r)
        g.o(r, e) &&
          !g.o(n, e) &&
          Object.defineProperty(n, e, { enumerable: !0, get: r[e] });
    }),
    (g.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
    (g.nc = void 0),
    (n = g(379)),
    (r = g.n(n)),
    (e = g(795)),
    (o = g.n(e)),
    (t = g(569)),
    (a = g.n(t)),
    (i = g(565)),
    (s = g.n(i)),
    (c = g(216)),
    (p = g.n(c)),
    (A = g(589)),
    (u = g.n(A)),
    (f = g(122)),
    ((d = {}).styleTagTransform = u()),
    (d.setAttributes = s()),
    (d.insert = a().bind(null, "head")),
    (d.domAPI = o()),
    (d.insertStyleElement = p()),
    r()(f.Z, d),
    f.Z && f.Z.locals && f.Z.locals;
})();
//# sourceMappingURL=bundle.js.map
