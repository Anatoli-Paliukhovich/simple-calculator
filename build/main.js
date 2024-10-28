(() => {
  "use strict";
  var n = {
      16: (n, e, r) => {
        r.d(e, { A: () => d });
        var o = r(601),
          t = r.n(o),
          a = r(314),
          c = r.n(a)()(t());
        c.push([
          n.id,
          "/*-------Null-list-----------------------------*/\n*,\n*:before,\n*:after {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  font-size: 100%;\n  font-size: 16px;\n  line-height: 1;\n}\n\n/*------------------------------------*/\n\nbody {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  background-color: #e1d4c9;\n}\n\n.wrapper {\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n[class*=\"__container\"] {\n  max-width: 1360px;\n  margin: 0 auto;\n  padding: 0px 40px;\n  box-sizing: content-box;\n}\n\n.calc {\n  color: #fff;\n  border-radius: 5px;\n  box-shadow: 2px 3px 5px #64625d;\n}\n\n.calc__theme {\n  background-color: #64625d;\n  border: 0.5px solid #64625d;\n  border-bottom: 0;\n  border-radius: 5px 5px 0 0;\n  display: flex;\n  padding: 15px;\n  gap: 20px;\n}\n\n.calc__theme_radio {\n  cursor: pointer;\n  position: relative;\n}\n\n.calc__theme_radio-red::after,\n.calc__theme_radio-orange::after,\n.calc__theme_radio-green::after {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  top: -5px;\n  left: -3px;\n}\n\n.calc__theme_radio-red::after {\n  background-color: #e66161;\n}\n\n.calc__theme_radio-orange::after {\n  background-color: orange;\n}\n\n.calc__theme_radio-green::after {\n  background-color: rgb(95, 221, 95);\n}\n\n.calc__theme_radio-orange:checked.calc__theme_radio-orange::after {\n  border: 2px solid #fff;\n}\n\n.calc__theme_radio-red:checked.calc__theme_radio-red::after {\n  border: 2px solid #fff;\n}\n\n.calc__theme_radio-green:checked.calc__theme_radio-green::after {\n  border: 2px solid #fff;\n}\n\n.calc__body {\n  display: grid;\n  font-size: 50px;\n  grid-template: repeat(6, 1fr) / repeat(4, 1fr);\n  grid-auto-rows: 60px;\n  border-radius: 5px;\n  background-color: #8e8d8b;\n}\n\n.calc__result {\n  background-color: #64625d;\n  border-left: 0.5px solid #64625d;\n  border-right: 0.5px solid #64625d;\n  padding: 5px;\n  grid-column: span 4;\n  text-align: right;\n}\n\n.calc__btn {\n  background-color: #8e8d8b;\n  color: #fff;\n  border: 0.5px solid #64625d;\n  font-size: 25px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all ease 0.2s;\n  padding: 20px;\n}\n\n.calc__btn:active {\n  transform: scale(0.93);\n}\n\n.calc__btn:hover {\n  background-color: #a2a19e;\n}\n\n.calc__btn_big {\n  border-radius: 0px 0px 0px 5px;\n  grid-column: span 2;\n}\n\n.calc__btn_result {\n  border-radius: 0px 0px 5px 0px;\n}\n\n.calc__btn_bright {\n  background-color: orange;\n}\n\n.calc__btn_bright:hover {\n  background-color: orange;\n  opacity: 0.7;\n}\n\n.calc__btn_dark {\n  background-color: rgb(141, 127, 95);\n  background-color: #5c5a58;\n}\n\n.calc__btn_dark:hover {\n  background-color: rgb(141, 127, 95);\n  opacity: 0.7;\n}\n",
          "",
        ]);
        const d = c;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (r += "@supports (".concat(e[4], ") {")),
                  e[2] && (r += "@media ".concat(e[2], " {")),
                  o &&
                    (r += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (r += n(e)),
                  o && (r += "}"),
                  e[2] && (r += "}"),
                  e[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (e.i = function (n, r, o, t, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var c = {};
              if (o)
                for (var d = 0; d < this.length; d++) {
                  var i = this[d][0];
                  null != i && (c[i] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var s = [].concat(n[l]);
                (o && c[s[0]]) ||
                  (void 0 !== a &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = a)),
                  r &&
                    (s[2]
                      ? ((s[1] = "@media "
                        .concat(s[2], " {")
                        .concat(s[1], "}")),
                      (s[2] = r))
                      : (s[2] = r)),
                  t &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                        .concat(s[4], ") {")
                        .concat(s[1], "}")),
                      (s[4] = t))
                      : (s[4] = "".concat(t))),
                  e.push(s));
              }
            }),
            e
          );
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      72: (n) => {
        var e = [];
        function r(n) {
          for (var r = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              r = o;
              break;
            }
          return r;
        }
        function o(n, o) {
          for (var a = {}, c = [], d = 0; d < n.length; d++) {
            var i = n[d],
              l = o.base ? i[0] + o.base : i[0],
              s = a[l] || 0,
              u = "".concat(l, " ").concat(s);
            a[l] = s + 1;
            var p = r(u),
              f = {
                css: i[1],
                media: i[2],
                sourceMap: i[3],
                supports: i[4],
                layer: i[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var b = t(f, o);
              (o.byIndex = d),
              e.splice(d, 0, { identifier: u, updater: b, references: 1 });
            }
            c.push(u);
          }
          return c;
        }
        function t(n, e) {
          var r = e.domAPI(e);
          return (
            r.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                r.update((n = e));
              } else r.remove();
            }
          );
        }
        n.exports = function (n, t) {
          var a = o((n = n || []), (t = t || {}));
          return function (n) {
            n = n || [];
            for (var c = 0; c < a.length; c++) {
              var d = r(a[c]);
              e[d].references--;
            }
            for (var i = o(n, t), l = 0; l < a.length; l++) {
              var s = r(a[l]);
              0 === e[s].references && (e[s].updater(), e.splice(s, 1));
            }
            a = i;
          };
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, r) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var r = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (n) {
                  r = null;
                }
              e[n] = r;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(r);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, r) => {
        n.exports = function (n) {
          var e = r.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (r) {
              !(function (n, e, r) {
                var o = "";
                r.supports && (o += "@supports (".concat(r.supports, ") {")),
                r.media && (o += "@media ".concat(r.media, " {"));
                var t = void 0 !== r.layer;
                t &&
                  (o += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                (o += r.css),
                t && (o += "}"),
                r.media && (o += "}"),
                r.supports && (o += "}");
                var a = r.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                e.styleTagTransform(o, n, e.options);
              })(e, n, r);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function r(o) {
    var t = e[o];
    if (void 0 !== t) return t.exports;
    var a = (e[o] = { id: o, exports: {} });
    return n[o](a, a.exports, r), a.exports;
  }
  (r.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return r.d(e, { a: e }), e;
  }),
  (r.d = (n, e) => {
    for (var o in e)
      r.o(e, o) &&
          !r.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
  }),
  (r.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
  (r.nc = void 0);
  var o = r(72),
    t = r.n(o),
    a = r(825),
    c = r.n(a),
    d = r(659),
    i = r.n(d),
    l = r(56),
    s = r.n(l),
    u = r(540),
    p = r.n(u),
    f = r(113),
    b = r.n(f),
    g = r(16),
    _ = {};
  (_.styleTagTransform = b()),
  (_.setAttributes = s()),
  (_.insert = i().bind(null, "head")),
  (_.domAPI = c()),
  (_.insertStyleElement = p()),
  t()(g.A, _),
  g.A && g.A.locals && g.A.locals;
  const h = document.body,
    m = document.querySelectorAll(".calc__theme_radio"),
    v = document.querySelectorAll(".calc__btn_bright"),
    x = document.querySelector(".calc__theme"),
    y = document.querySelector(".calc__result");
  m.forEach((n) => {
    n.addEventListener("change", () => {
      m.forEach((n) => {
        n.classList.remove("_active");
      }),
      n.classList.add("_active"),
      v.forEach((e) => {
        "green" === n.value
          ? ((e.style.backgroundColor = "#5fdd5f"),
          (h.style.backgroundColor = "#ff23"),
          (x.style.backgroundColor = "#d6d5d2"),
          (y.style.color = "#64625d"),
          (y.style.backgroundColor = "#d6d5d2"))
          : "red" === n.value
            ? ((e.style.backgroundColor = "#e66161"),
            (h.style.backgroundColor = "#00000054"),
            (x.style.backgroundColor = "#cdc9c9"),
            (y.style.backgroundColor = "#cdc9c9"),
            (y.style.color = "#64625d"))
            : ((e.style.backgroundColor = "orange"),
            (h.style.backgroundColor = "#e1d4c9"),
            (x.style.backgroundColor = "#64625d"),
            (y.style.backgroundColor = "#64625d"),
            (y.style.color = "#fff"));
      });
    });
  });
})();
