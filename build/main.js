(() => {
  "use strict";
  var n = {
      16: (n, e, r) => {
        r.d(e, { A: () => i });
        var t = r(601),
          o = r.n(t),
          c = r(314),
          a = r.n(c)()(o());
        a.push([
          n.id,
          '/*-------Null-list-----------------------------*/\n*,\n*:before,\n*:after {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  font-size: 100%;\n  font-size: 16px;\n  line-height: 1;\n}\n\ninput,\nbutton {\n  font-family: inherit;\n}\n\n:focus,\n:active {\n  outline: none;\n}\n\n/*------------------------------------*/\n\nbody {\n  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\n  background-color: #e1d4c9;\n}\n\n.wrapper {\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n[class*="__container"] {\n  max-width: 1360px;\n  margin: 0 auto;\n  padding: 0px 40px;\n  box-sizing: content-box;\n}\n\n.calc {\n  color: #fff;\n  border-radius: 5px;\n  box-shadow: 2px 3px 5px #64625d;\n  width: 370px;\n}\n\n.calc__theme {\n  background-color: #64625d;\n  border: 0.5px solid #64625d;\n  border-bottom: 0;\n  border-radius: 5px 5px 0 0;\n  display: flex;\n  padding: 15px;\n  gap: 20px;\n}\n\n.calc__theme_radio {\n  cursor: pointer;\n  position: relative;\n}\n\n.calc__theme_radio-red::after,\n.calc__theme_radio-orange::after,\n.calc__theme_radio-green::after {\n  content: "";\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  top: -5px;\n  left: -3px;\n}\n\n.calc__theme_radio-red::after {\n  background-color: #e66161;\n}\n\n.calc__theme_radio-orange::after {\n  background-color: orange;\n}\n\n.calc__theme_radio-green::after {\n  background-color: rgb(95, 221, 95);\n}\n\n.calc__theme_radio-orange:checked.calc__theme_radio-orange::after {\n  border: 2px solid #fff;\n}\n\n.calc__theme_radio-red:checked.calc__theme_radio-red::after {\n  border: 2px solid #fff;\n}\n\n.calc__theme_radio-green:checked.calc__theme_radio-green::after {\n  border: 2px solid #fff;\n}\n\n.calc__body {\n  display: grid;\n  font-size: 35px;\n  grid-template: repeat(6, 1fr) / repeat(4, 1fr);\n  border-radius: 5px;\n  background-color: #8e8d8b;\n}\n\n.calc__result {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  background-color: #64625d;\n  border-left: 0.5px solid #64625d;\n  border-right: 0.5px solid #64625d;\n  padding: 5px;\n  grid-column: span 4;\n  text-align: right;\n}\n\n.calc__btn {\n  background-color: #8e8d8b;\n  color: #fff;\n  border: 0.5px solid #64625d;\n  font-size: 25px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all ease 0.2s;\n  padding: 20px;\n}\n\n.calc__btn:active {\n  transform: scale(0.93);\n}\n\n.calc__btn:hover {\n  background-color: #a2a19e;\n}\n\n.calc__btn_big {\n  border-radius: 0px 0px 0px 5px;\n  grid-column: span 2;\n}\n\n.calc__btn_result {\n  border-radius: 0px 0px 5px 0px;\n}\n\n.calc__btn_bright {\n  background-color: orange;\n}\n\n.calc__btn_bright:hover {\n  background-color: orange;\n  opacity: 0.7;\n}\n\n.calc__btn_dark {\n  background-color: rgb(141, 127, 95);\n  background-color: #5c5a58;\n}\n\n.calc__btn_dark:hover {\n  background-color: rgb(141, 127, 95);\n  opacity: 0.7;\n}\n',
          "",
        ]);
        const i = a;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = "",
                  t = void 0 !== e[5];
                return (
                  e[4] && (r += "@supports (".concat(e[4], ") {")),
                  e[2] && (r += "@media ".concat(e[2], " {")),
                  t &&
                    (r += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (r += n(e)),
                  t && (r += "}"),
                  e[2] && (r += "}"),
                  e[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (e.i = function (n, r, t, o, c) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (t)
                for (var i = 0; i < this.length; i++) {
                  var l = this[i][0];
                  null != l && (a[l] = !0);
                }
              for (var s = 0; s < n.length; s++) {
                var d = [].concat(n[s]);
                (t && a[d[0]]) ||
                  (void 0 !== c &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = c)),
                  r &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = r))
                      : (d[2] = r)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  e.push(d));
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
          for (var r = -1, t = 0; t < e.length; t++)
            if (e[t].identifier === n) {
              r = t;
              break;
            }
          return r;
        }
        function t(n, t) {
          for (var c = {}, a = [], i = 0; i < n.length; i++) {
            var l = n[i],
              s = t.base ? l[0] + t.base : l[0],
              d = c[s] || 0,
              u = "".concat(s, " ").concat(d);
            c[s] = d + 1;
            var f = r(u),
              p = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== f) e[f].references++, e[f].updater(p);
            else {
              var h = o(p, t);
              (t.byIndex = i),
                e.splice(i, 0, { identifier: u, updater: h, references: 1 });
            }
            a.push(u);
          }
          return a;
        }
        function o(n, e) {
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
        n.exports = function (n, o) {
          var c = t((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < c.length; a++) {
              var i = r(c[a]);
              e[i].references--;
            }
            for (var l = t(n, o), s = 0; s < c.length; s++) {
              var d = r(c[s]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            c = l;
          };
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, r) {
          var t = (function (n) {
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
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          t.appendChild(r);
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
                var t = "";
                r.supports && (t += "@supports (".concat(r.supports, ") {")),
                  r.media && (t += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (t += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (t += r.css),
                  o && (t += "}"),
                  r.media && (t += "}"),
                  r.supports && (t += "}");
                var c = r.sourceMap;
                c &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
                      " */"
                    )),
                  e.styleTagTransform(t, n, e.options);
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
  function r(t) {
    var o = e[t];
    if (void 0 !== o) return o.exports;
    var c = (e[t] = { id: t, exports: {} });
    return n[t](c, c.exports, r), c.exports;
  }
  (r.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (n, e) => {
      for (var t in e)
        r.o(e, t) &&
          !r.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
    }),
    (r.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (r.nc = void 0),
    r.d({}, { d: () => L });
  var t = r(72),
    o = r.n(t),
    c = r(825),
    a = r.n(c),
    i = r(659),
    l = r.n(i),
    s = r(56),
    d = r.n(s),
    u = r(540),
    f = r.n(u),
    p = r(113),
    h = r.n(p),
    g = r(16),
    b = {};
  (b.styleTagTransform = h()),
    (b.setAttributes = d()),
    (b.insert = l().bind(null, "head")),
    (b.domAPI = a()),
    (b.insertStyleElement = f()),
    o()(g.A, b),
    g.A && g.A.locals && g.A.locals;
  const _ = document.body,
    m = document.querySelectorAll(".calc__theme_radio"),
    v = document.querySelectorAll(".calc__btn_bright"),
    y = document.querySelector(".calc__theme"),
    x = document.querySelector(".calc__result");
  m.forEach((n) => {
    n.addEventListener("change", () => {
      m.forEach((n) => {
        n.classList.remove("_active");
      }),
        n.classList.add("_active"),
        v.forEach((e) => {
          "green" === n.value
            ? ((e.style.backgroundColor = "#5fdd5f"),
              (_.style.backgroundColor = "#ff23"),
              (y.style.backgroundColor = "#d6d5d2"),
              (x.style.color = "#64625d"),
              (x.style.backgroundColor = "#d6d5d2"))
            : "red" === n.value
              ? ((e.style.backgroundColor = "#e66161"),
                (_.style.backgroundColor = "#00000054"),
                (y.style.backgroundColor = "#cdc9c9"),
                (x.style.backgroundColor = "#cdc9c9"),
                (x.style.color = "#64625d"))
              : ((e.style.backgroundColor = "orange"),
                (_.style.backgroundColor = "#e1d4c9"),
                (y.style.backgroundColor = "#64625d"),
                (x.style.backgroundColor = "#64625d"),
                (x.style.color = "#fff"));
        });
    });
  });
  const k = ["+", "-", "×", "÷", "%"],
    C = (n, e, r) => {
      switch (n) {
        case "+":
          return e + r;
        case "-":
          return e - r;
        case "×":
          return e * r;
        case "÷":
          return e / r;
        case "%":
          return e ? e * (r / 100) : r / 100;
        default:
          return r;
      }
    },
    w = (n) => ("+" === n || "-" === n ? 1 : 2),
    A = document.querySelector(".calc__result"),
    S = document.querySelector(".calc__body");
  let E = "0",
    T = !1;
  const L = (n) => {
    const e = ((n) =>
        n
          .match(/([+\-×÷%()]|-?\d+(\.\d+)?)/g)
          .map((n) => (isNaN(n) ? n : parseFloat(n))))(n),
      r = ((n) => {
        const e = [],
          r = [];
        for (let t = 0; t < n.length; t++) {
          const o = n[t];
          if ("number" == typeof o) r.push(o);
          else if (k.includes(o)) {
            for (; e.length && w(e[e.length - 1]) >= w(o); ) r.push(e.pop());
            e.push(o);
          }
        }
        for (let n = e.length - 1; n >= 0; n--) r.push(e[n]);
        return r;
      })(e),
      t = ((n) => {
        const e = [];
        for (let r = 0; r < n.length; r++) {
          const t = n[r];
          if ("number" == typeof t) e.push(t);
          else if (k.includes(t)) {
            const n = e.pop(),
              r = e.pop(),
              o = C(t, r, n);
            e.push(o);
          }
        }
        return e[0];
      })(r);
    return t;
  };
  S.addEventListener("click", function (n) {
    const e = n.target;
    if (e.classList.contains("calc__btn")) {
      const n = e.innerHTML;
      if (T)
        "AC" === n
          ? ((E = "0"), (T = !1))
          : "=" === n ||
            k.includes(n) ||
            ".".includes(n) ||
            ((E = n), (T = !1));
      else
        switch (n) {
          case "=":
            const e = ((n) =>
              n.length > 0 && "0" !== n && "=" !== n
                ? "NaN" === (n = L(n).toString()) || "Infinity" === n
                  ? { result: "Invalid operation", error: !0 }
                  : { result: n.slice(0, 12), error: !1 }
                : { result: n, error: !1 })(E);
            (E = e.result), (T = e.error);
            break;
          case "AC":
            E = "0";
            break;
          case ".":
            E = ((n) => {
              if ("0" === n) return "0.";
              if (!n.endsWith(".")) {
                const e = n[n.length - 1];
                if (!k.includes(e)) return n + ".";
              }
              return n;
            })(E);
            break;
          case "+/-":
            E = ((n) => {
              if (n) {
                const e = n.match(/(-?\d+\.?\d*)$/);
                if (e) {
                  const r = e[0],
                    t = r.startsWith("-") ? `-(${r})` : `(-${r})`;
                  return n.slice(0, -r.length) + t;
                }
              }
              return n;
            })(E);
            break;
          default:
            E = ((n, e) => {
              if ("0" === n && k.includes(e)) return n;
              if ("0" === n) return e;
              {
                const r = n[n.length - 1];
                if (k.includes(r) && k.includes(e)) return n.slice(0, -1) + e;
                if (n.length < 15) return n + e;
              }
              return n;
            })(E, n);
        }
      A.innerHTML = E;
    }
  });
})();
