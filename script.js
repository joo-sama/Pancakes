/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var X_ = Object.create;
  var sn = Object.defineProperty;
  var B_ = Object.getOwnPropertyDescriptor;
  var j_ = Object.getOwnPropertyNames;
  var z_ = Object.getPrototypeOf,
    K_ = Object.prototype.hasOwnProperty;
  var he = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    De = (e, t) => {
      for (var r in t) sn(e, r, { get: t[r], enumerable: !0 });
    },
    Ss = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let o of j_(t))
          !K_.call(e, o) &&
            o !== r &&
            sn(e, o, {
              get: () => t[o],
              enumerable: !(n = B_(t, o)) || n.enumerable,
            });
      return e;
    };
  var ce = (e, t, r) => (
      (r = e != null ? X_(z_(e)) : {}),
      Ss(
        t || !e || !e.__esModule
          ? sn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    rt = (e) => Ss(sn({}, "__esModule", { value: !0 }), e);
  var Ci = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, y) {
        var T = new F.Bare();
        return T.init(l, y);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (y) {
          return "-" + y.toLowerCase();
        });
      }
      function n(l) {
        var y = parseInt(l.slice(1), 16),
          T = (y >> 16) & 255,
          A = (y >> 8) & 255,
          N = 255 & y;
        return [T, A, N];
      }
      function o(l, y, T) {
        return (
          "#" + ((1 << 24) | (l << 16) | (y << 8) | T).toString(16).slice(1)
        );
      }
      function i() {}
      function a(l, y) {
        d("Type warning: Expected: [" + l + "] Got: [" + typeof y + "] " + y);
      }
      function s(l, y, T) {
        d("Units do not match [" + l + "]: " + y + ", " + T);
      }
      function u(l, y, T) {
        if ((y !== void 0 && (T = y), l === void 0)) return T;
        var A = T;
        return (
          ke.test(l) || !dt.test(l)
            ? (A = parseInt(l, 10))
            : dt.test(l) && (A = 1e3 * parseFloat(l)),
          0 > A && (A = 0),
          A === A ? A : T
        );
      }
      function d(l) {
        re.debug && window && window.console.warn(l);
      }
      function h(l) {
        for (var y = -1, T = l ? l.length : 0, A = []; ++y < T; ) {
          var N = l[y];
          N && A.push(N);
        }
        return A;
      }
      var v = (function (l, y, T) {
          function A(ne) {
            return typeof ne == "object";
          }
          function N(ne) {
            return typeof ne == "function";
          }
          function P() {}
          function Q(ne, ge) {
            function k() {
              var Ce = new ie();
              return N(Ce.init) && Ce.init.apply(Ce, arguments), Ce;
            }
            function ie() {}
            ge === T && ((ge = ne), (ne = Object)), (k.Bare = ie);
            var oe,
              Te = (P[l] = ne[l]),
              tt = (ie[l] = k[l] = new P());
            return (
              (tt.constructor = k),
              (k.mixin = function (Ce) {
                return (ie[l] = k[l] = Q(k, Ce)[l]), k;
              }),
              (k.open = function (Ce) {
                if (
                  ((oe = {}),
                  N(Ce) ? (oe = Ce.call(k, tt, Te, k, ne)) : A(Ce) && (oe = Ce),
                  A(oe))
                )
                  for (var _r in oe) y.call(oe, _r) && (tt[_r] = oe[_r]);
                return N(tt.init) || (tt.init = ne), k;
              }),
              k.open(ge)
            );
          }
          return Q;
        })("prototype", {}.hasOwnProperty),
        E = {
          ease: [
            "ease",
            function (l, y, T, A) {
              var N = (l /= A) * l,
                P = N * l;
              return (
                y +
                T * (-2.75 * P * N + 11 * N * N + -15.5 * P + 8 * N + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, y, T, A) {
              var N = (l /= A) * l,
                P = N * l;
              return y + T * (-1 * P * N + 3 * N * N + -3 * P + 2 * N);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, y, T, A) {
              var N = (l /= A) * l,
                P = N * l;
              return (
                y +
                T * (0.3 * P * N + -1.6 * N * N + 2.2 * P + -1.8 * N + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, y, T, A) {
              var N = (l /= A) * l,
                P = N * l;
              return y + T * (2 * P * N + -5 * N * N + 2 * P + 2 * N);
            },
          ],
          linear: [
            "linear",
            function (l, y, T, A) {
              return (T * l) / A + y;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, y, T, A) {
              return T * (l /= A) * l + y;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, y, T, A) {
              return -T * (l /= A) * (l - 2) + y;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, y, T, A) {
              return (l /= A / 2) < 1
                ? (T / 2) * l * l + y
                : (-T / 2) * (--l * (l - 2) - 1) + y;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, y, T, A) {
              return T * (l /= A) * l * l + y;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, y, T, A) {
              return T * ((l = l / A - 1) * l * l + 1) + y;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, y, T, A) {
              return (l /= A / 2) < 1
                ? (T / 2) * l * l * l + y
                : (T / 2) * ((l -= 2) * l * l + 2) + y;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, y, T, A) {
              return T * (l /= A) * l * l * l + y;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, y, T, A) {
              return -T * ((l = l / A - 1) * l * l * l - 1) + y;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, y, T, A) {
              return (l /= A / 2) < 1
                ? (T / 2) * l * l * l * l + y
                : (-T / 2) * ((l -= 2) * l * l * l - 2) + y;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, y, T, A) {
              return T * (l /= A) * l * l * l * l + y;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, y, T, A) {
              return T * ((l = l / A - 1) * l * l * l * l + 1) + y;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, y, T, A) {
              return (l /= A / 2) < 1
                ? (T / 2) * l * l * l * l * l + y
                : (T / 2) * ((l -= 2) * l * l * l * l + 2) + y;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, y, T, A) {
              return -T * Math.cos((l / A) * (Math.PI / 2)) + T + y;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, y, T, A) {
              return T * Math.sin((l / A) * (Math.PI / 2)) + y;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, y, T, A) {
              return (-T / 2) * (Math.cos((Math.PI * l) / A) - 1) + y;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, y, T, A) {
              return l === 0 ? y : T * Math.pow(2, 10 * (l / A - 1)) + y;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, y, T, A) {
              return l === A
                ? y + T
                : T * (-Math.pow(2, (-10 * l) / A) + 1) + y;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, y, T, A) {
              return l === 0
                ? y
                : l === A
                ? y + T
                : (l /= A / 2) < 1
                ? (T / 2) * Math.pow(2, 10 * (l - 1)) + y
                : (T / 2) * (-Math.pow(2, -10 * --l) + 2) + y;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, y, T, A) {
              return -T * (Math.sqrt(1 - (l /= A) * l) - 1) + y;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, y, T, A) {
              return T * Math.sqrt(1 - (l = l / A - 1) * l) + y;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, y, T, A) {
              return (l /= A / 2) < 1
                ? (-T / 2) * (Math.sqrt(1 - l * l) - 1) + y
                : (T / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + y;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, y, T, A, N) {
              return (
                N === void 0 && (N = 1.70158),
                T * (l /= A) * l * ((N + 1) * l - N) + y
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, y, T, A, N) {
              return (
                N === void 0 && (N = 1.70158),
                T * ((l = l / A - 1) * l * ((N + 1) * l + N) + 1) + y
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, y, T, A, N) {
              return (
                N === void 0 && (N = 1.70158),
                (l /= A / 2) < 1
                  ? (T / 2) * l * l * (((N *= 1.525) + 1) * l - N) + y
                  : (T / 2) *
                      ((l -= 2) * l * (((N *= 1.525) + 1) * l + N) + 2) +
                    y
              );
            },
          ],
        },
        m = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        b = document,
        _ = window,
        q = "bkwld-tram",
        x = /[\-\.0-9]/g,
        S = /[A-Z]/,
        O = "number",
        w = /^(rgb|#)/,
        L = /(em|cm|mm|in|pt|pc|px)$/,
        R = /(em|cm|mm|in|pt|pc|px|%)$/,
        X = /(deg|rad|turn)$/,
        B = "unitless",
        z = /(all|none) 0s ease 0s/,
        $ = /^(width|height)$/,
        Z = " ",
        M = b.createElement("a"),
        I = ["Webkit", "Moz", "O", "ms"],
        D = ["-webkit-", "-moz-", "-o-", "-ms-"],
        j = function (l) {
          if (l in M.style) return { dom: l, css: l };
          var y,
            T,
            A = "",
            N = l.split("-");
          for (y = 0; y < N.length; y++)
            A += N[y].charAt(0).toUpperCase() + N[y].slice(1);
          for (y = 0; y < I.length; y++)
            if (((T = I[y] + A), T in M.style))
              return { dom: T, css: D[y] + l };
        },
        H = (t.support = {
          bind: Function.prototype.bind,
          transform: j("transform"),
          transition: j("transition"),
          backface: j("backface-visibility"),
          timing: j("transition-timing-function"),
        });
      if (H.transition) {
        var J = H.timing.dom;
        if (((M.style[J] = E["ease-in-back"][0]), !M.style[J]))
          for (var te in m) E[te][0] = m[te];
      }
      var ae = (t.frame = (function () {
          var l =
            _.requestAnimationFrame ||
            _.webkitRequestAnimationFrame ||
            _.mozRequestAnimationFrame ||
            _.oRequestAnimationFrame ||
            _.msRequestAnimationFrame;
          return l && H.bind
            ? l.bind(_)
            : function (y) {
                _.setTimeout(y, 16);
              };
        })()),
        _e = (t.now = (function () {
          var l = _.performance,
            y = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return y && H.bind
            ? y.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        g = v(function (l) {
          function y(ee, se) {
            var ye = h(("" + ee).split(Z)),
              fe = ye[0];
            se = se || {};
            var Le = W[fe];
            if (!Le) return d("Unsupported property: " + fe);
            if (!se.weak || !this.props[fe]) {
              var Be = Le[0],
                Me = this.props[fe];
              return (
                Me || (Me = this.props[fe] = new Be.Bare()),
                Me.init(this.$el, ye, Le, se),
                Me
              );
            }
          }
          function T(ee, se, ye) {
            if (ee) {
              var fe = typeof ee;
              if (
                (se ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                fe == "number" && se)
              )
                return (
                  (this.timer = new ue({
                    duration: ee,
                    context: this,
                    complete: P,
                  })),
                  void (this.active = !0)
                );
              if (fe == "string" && se) {
                switch (ee) {
                  case "hide":
                    k.call(this);
                    break;
                  case "stop":
                    Q.call(this);
                    break;
                  case "redraw":
                    ie.call(this);
                    break;
                  default:
                    y.call(this, ee, ye && ye[1]);
                }
                return P.call(this);
              }
              if (fe == "function") return void ee.call(this, this);
              if (fe == "object") {
                var Le = 0;
                tt.call(
                  this,
                  ee,
                  function (be, k_) {
                    be.span > Le && (Le = be.span), be.stop(), be.animate(k_);
                  },
                  function (be) {
                    "wait" in be && (Le = u(be.wait, 0));
                  }
                ),
                  Te.call(this),
                  Le > 0 &&
                    ((this.timer = new ue({ duration: Le, context: this })),
                    (this.active = !0),
                    se && (this.timer.complete = P));
                var Be = this,
                  Me = !1,
                  an = {};
                ae(function () {
                  tt.call(Be, ee, function (be) {
                    be.active && ((Me = !0), (an[be.name] = be.nextStyle));
                  }),
                    Me && Be.$el.css(an);
                });
              }
            }
          }
          function A(ee) {
            (ee = u(ee, 0)),
              this.active
                ? this.queue.push({ options: ee })
                : ((this.timer = new ue({
                    duration: ee,
                    context: this,
                    complete: P,
                  })),
                  (this.active = !0));
          }
          function N(ee) {
            return this.active
              ? (this.queue.push({ options: ee, args: arguments }),
                void (this.timer.complete = P))
              : d(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function P() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ee = this.queue.shift();
              T.call(this, ee.options, !0, ee.args);
            }
          }
          function Q(ee) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var se;
            typeof ee == "string"
              ? ((se = {}), (se[ee] = 1))
              : (se = typeof ee == "object" && ee != null ? ee : this.props),
              tt.call(this, se, Ce),
              Te.call(this);
          }
          function ne(ee) {
            Q.call(this, ee), tt.call(this, ee, _r, H_);
          }
          function ge(ee) {
            typeof ee != "string" && (ee = "block"),
              (this.el.style.display = ee);
          }
          function k() {
            Q.call(this), (this.el.style.display = "none");
          }
          function ie() {
            this.el.offsetHeight;
          }
          function oe() {
            Q.call(this), e.removeData(this.el, q), (this.$el = this.el = null);
          }
          function Te() {
            var ee,
              se,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (ee in this.props)
              (se = this.props[ee]), se.active && ye.push(se.string);
            (ye = ye.join(",")),
              this.style !== ye &&
                ((this.style = ye), (this.el.style[H.transition.dom] = ye));
          }
          function tt(ee, se, ye) {
            var fe,
              Le,
              Be,
              Me,
              an = se !== Ce,
              be = {};
            for (fe in ee)
              (Be = ee[fe]),
                fe in le
                  ? (be.transform || (be.transform = {}),
                    (be.transform[fe] = Be))
                  : (S.test(fe) && (fe = r(fe)),
                    fe in W ? (be[fe] = Be) : (Me || (Me = {}), (Me[fe] = Be)));
            for (fe in be) {
              if (((Be = be[fe]), (Le = this.props[fe]), !Le)) {
                if (!an) continue;
                Le = y.call(this, fe);
              }
              se.call(this, Le, Be);
            }
            ye && Me && ye.call(this, Me);
          }
          function Ce(ee) {
            ee.stop();
          }
          function _r(ee, se) {
            ee.set(se);
          }
          function H_(ee) {
            this.$el.css(ee);
          }
          function Xe(ee, se) {
            l[ee] = function () {
              return this.children
                ? W_.call(this, se, arguments)
                : (this.el && se.apply(this, arguments), this);
            };
          }
          function W_(ee, se) {
            var ye,
              fe = this.children.length;
            for (ye = 0; fe > ye; ye++) ee.apply(this.children[ye], se);
            return this;
          }
          (l.init = function (ee) {
            if (
              ((this.$el = e(ee)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              re.keepInherited && !re.fallback)
            ) {
              var se = V(this.el, "transition");
              se && !z.test(se) && (this.upstream = se);
            }
            H.backface &&
              re.hideBackface &&
              p(this.el, H.backface.css, "hidden");
          }),
            Xe("add", y),
            Xe("start", T),
            Xe("wait", A),
            Xe("then", N),
            Xe("next", P),
            Xe("stop", Q),
            Xe("set", ne),
            Xe("show", ge),
            Xe("hide", k),
            Xe("redraw", ie),
            Xe("destroy", oe);
        }),
        F = v(g, function (l) {
          function y(T, A) {
            var N = e.data(T, q) || e.data(T, q, new g.Bare());
            return N.el || N.init(T), A ? N.start(A) : N;
          }
          l.init = function (T, A) {
            var N = e(T);
            if (!N.length) return this;
            if (N.length === 1) return y(N[0], A);
            var P = [];
            return (
              N.each(function (Q, ne) {
                P.push(y(ne, A));
              }),
              (this.children = P),
              this
            );
          };
        }),
        C = v(function (l) {
          function y() {
            var P = this.get();
            this.update("auto");
            var Q = this.get();
            return this.update(P), Q;
          }
          function T(P, Q, ne) {
            return Q !== void 0 && (ne = Q), P in E ? P : ne;
          }
          function A(P) {
            var Q = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(P);
            return (Q ? o(Q[1], Q[2], Q[3]) : P).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var N = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (P, Q, ne, ge) {
            (this.$el = P), (this.el = P[0]);
            var k = Q[0];
            ne[2] && (k = ne[2]),
              K[k] && (k = K[k]),
              (this.name = k),
              (this.type = ne[1]),
              (this.duration = u(Q[1], this.duration, N.duration)),
              (this.ease = T(Q[2], this.ease, N.ease)),
              (this.delay = u(Q[3], this.delay, N.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = $.test(this.name)),
              (this.unit = ge.unit || this.unit || re.defaultUnit),
              (this.angle = ge.angle || this.angle || re.defaultAngle),
              re.fallback || ge.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    Z +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? Z + E[this.ease][0] : "") +
                    (this.delay ? Z + this.delay + "ms" : "")));
          }),
            (l.set = function (P) {
              (P = this.convert(P, this.type)), this.update(P), this.redraw();
            }),
            (l.transition = function (P) {
              (this.active = !0),
                (P = this.convert(P, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  P == "auto" && (P = y.call(this))),
                (this.nextStyle = P);
            }),
            (l.fallback = function (P) {
              var Q =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (P = this.convert(P, this.type)),
                this.auto &&
                  (Q == "auto" && (Q = this.convert(this.get(), this.type)),
                  P == "auto" && (P = y.call(this))),
                (this.tween = new G({
                  from: Q,
                  to: P,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return V(this.el, this.name);
            }),
            (l.update = function (P) {
              p(this.el, this.name, P);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                p(this.el, this.name, this.get()));
              var P = this.tween;
              P && P.context && P.destroy();
            }),
            (l.convert = function (P, Q) {
              if (P == "auto" && this.auto) return P;
              var ne,
                ge = typeof P == "number",
                k = typeof P == "string";
              switch (Q) {
                case O:
                  if (ge) return P;
                  if (k && P.replace(x, "") === "") return +P;
                  ne = "number(unitless)";
                  break;
                case w:
                  if (k) {
                    if (P === "" && this.original) return this.original;
                    if (Q.test(P))
                      return P.charAt(0) == "#" && P.length == 7 ? P : A(P);
                  }
                  ne = "hex or rgb string";
                  break;
                case L:
                  if (ge) return P + this.unit;
                  if (k && Q.test(P)) return P;
                  ne = "number(px) or string(unit)";
                  break;
                case R:
                  if (ge) return P + this.unit;
                  if (k && Q.test(P)) return P;
                  ne = "number(px) or string(unit or %)";
                  break;
                case X:
                  if (ge) return P + this.angle;
                  if (k && Q.test(P)) return P;
                  ne = "number(deg) or string(angle)";
                  break;
                case B:
                  if (ge || (k && R.test(P))) return P;
                  ne = "number(unitless) or string(unit or %)";
              }
              return a(ne, P), P;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        f = v(C, function (l, y) {
          l.init = function () {
            y.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), w));
          };
        }),
        U = v(C, function (l, y) {
          (l.init = function () {
            y.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (T) {
              this.$el[this.name](T);
            });
        }),
        Y = v(C, function (l, y) {
          function T(A, N) {
            var P, Q, ne, ge, k;
            for (P in A)
              (ge = le[P]),
                (ne = ge[0]),
                (Q = ge[1] || P),
                (k = this.convert(A[P], ne)),
                N.call(this, Q, k, ne);
          }
          (l.init = function () {
            y.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                le.perspective &&
                  re.perspective &&
                  ((this.current.perspective = re.perspective),
                  p(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (A) {
              T.call(this, A, function (N, P) {
                this.current[N] = P;
              }),
                p(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (A) {
              var N = this.values(A);
              this.tween = new pe({
                current: this.current,
                values: N,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var P,
                Q = {};
              for (P in this.current) Q[P] = P in N ? N[P] : this.current[P];
              (this.active = !0), (this.nextStyle = this.style(Q));
            }),
            (l.fallback = function (A) {
              var N = this.values(A);
              this.tween = new pe({
                current: this.current,
                values: N,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              p(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (A) {
              var N,
                P = "";
              for (N in A) P += N + "(" + A[N] + ") ";
              return P;
            }),
            (l.values = function (A) {
              var N,
                P = {};
              return (
                T.call(this, A, function (Q, ne, ge) {
                  (P[Q] = ne),
                    this.current[Q] === void 0 &&
                      ((N = 0),
                      ~Q.indexOf("scale") && (N = 1),
                      (this.current[Q] = this.convert(N, ge)));
                }),
                P
              );
            });
        }),
        G = v(function (l) {
          function y(k) {
            ne.push(k) === 1 && ae(T);
          }
          function T() {
            var k,
              ie,
              oe,
              Te = ne.length;
            if (Te)
              for (ae(T), ie = _e(), k = Te; k--; )
                (oe = ne[k]), oe && oe.render(ie);
          }
          function A(k) {
            var ie,
              oe = e.inArray(k, ne);
            oe >= 0 &&
              ((ie = ne.slice(oe + 1)),
              (ne.length = oe),
              ie.length && (ne = ne.concat(ie)));
          }
          function N(k) {
            return Math.round(k * ge) / ge;
          }
          function P(k, ie, oe) {
            return o(
              k[0] + oe * (ie[0] - k[0]),
              k[1] + oe * (ie[1] - k[1]),
              k[2] + oe * (ie[2] - k[2])
            );
          }
          var Q = { ease: E.ease[1], from: 0, to: 1 };
          (l.init = function (k) {
            (this.duration = k.duration || 0), (this.delay = k.delay || 0);
            var ie = k.ease || Q.ease;
            E[ie] && (ie = E[ie][1]),
              typeof ie != "function" && (ie = Q.ease),
              (this.ease = ie),
              (this.update = k.update || i),
              (this.complete = k.complete || i),
              (this.context = k.context || this),
              (this.name = k.name);
            var oe = k.from,
              Te = k.to;
            oe === void 0 && (oe = Q.from),
              Te === void 0 && (Te = Q.to),
              (this.unit = k.unit || ""),
              typeof oe == "number" && typeof Te == "number"
                ? ((this.begin = oe), (this.change = Te - oe))
                : this.format(Te, oe),
              (this.value = this.begin + this.unit),
              (this.start = _e()),
              k.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = _e()),
                (this.active = !0),
                y(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), A(this));
            }),
            (l.render = function (k) {
              var ie,
                oe = k - this.start;
              if (this.delay) {
                if (oe <= this.delay) return;
                oe -= this.delay;
              }
              if (oe < this.duration) {
                var Te = this.ease(oe, 0, 1, this.duration);
                return (
                  (ie = this.startRGB
                    ? P(this.startRGB, this.endRGB, Te)
                    : N(this.begin + Te * this.change)),
                  (this.value = ie + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ie = this.endHex || this.begin + this.change),
                (this.value = ie + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (k, ie) {
              if (((ie += ""), (k += ""), k.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ie)),
                  (this.endRGB = n(k)),
                  (this.endHex = k),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var oe = ie.replace(x, ""),
                  Te = k.replace(x, "");
                oe !== Te && s("tween", ie, k), (this.unit = oe);
              }
              (ie = parseFloat(ie)),
                (k = parseFloat(k)),
                (this.begin = this.value = ie),
                (this.change = k - ie);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var ne = [],
            ge = 1e3;
        }),
        ue = v(G, function (l) {
          (l.init = function (y) {
            (this.duration = y.duration || 0),
              (this.complete = y.complete || i),
              (this.context = y.context),
              this.play();
          }),
            (l.render = function (y) {
              var T = y - this.start;
              T < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        pe = v(G, function (l, y) {
          (l.init = function (T) {
            (this.context = T.context),
              (this.update = T.update),
              (this.tweens = []),
              (this.current = T.current);
            var A, N;
            for (A in T.values)
              (N = T.values[A]),
                this.current[A] !== N &&
                  this.tweens.push(
                    new G({
                      name: A,
                      from: this.current[A],
                      to: N,
                      duration: T.duration,
                      delay: T.delay,
                      ease: T.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (T) {
              var A,
                N,
                P = this.tweens.length,
                Q = !1;
              for (A = P; A--; )
                (N = this.tweens[A]),
                  N.context &&
                    (N.render(T), (this.current[N.name] = N.value), (Q = !0));
              return Q
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((y.destroy.call(this), this.tweens)) {
                var T,
                  A = this.tweens.length;
                for (T = A; T--; ) this.tweens[T].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        re = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !H.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!H.transition) return (re.fallback = !0);
        re.agentTests.push("(" + l + ")");
        var y = new RegExp(re.agentTests.join("|"), "i");
        re.fallback = y.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new G(l);
        }),
        (t.delay = function (l, y, T) {
          return new ue({ complete: y, duration: l, context: T });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var p = e.style,
        V = e.css,
        K = { transform: H.transform && H.transform.css },
        W = {
          color: [f, w],
          background: [f, w, "background-color"],
          "outline-color": [f, w],
          "border-color": [f, w],
          "border-top-color": [f, w],
          "border-right-color": [f, w],
          "border-bottom-color": [f, w],
          "border-left-color": [f, w],
          "border-width": [C, L],
          "border-top-width": [C, L],
          "border-right-width": [C, L],
          "border-bottom-width": [C, L],
          "border-left-width": [C, L],
          "border-spacing": [C, L],
          "letter-spacing": [C, L],
          margin: [C, L],
          "margin-top": [C, L],
          "margin-right": [C, L],
          "margin-bottom": [C, L],
          "margin-left": [C, L],
          padding: [C, L],
          "padding-top": [C, L],
          "padding-right": [C, L],
          "padding-bottom": [C, L],
          "padding-left": [C, L],
          "outline-width": [C, L],
          opacity: [C, O],
          top: [C, R],
          right: [C, R],
          bottom: [C, R],
          left: [C, R],
          "font-size": [C, R],
          "text-indent": [C, R],
          "word-spacing": [C, R],
          width: [C, R],
          "min-width": [C, R],
          "max-width": [C, R],
          height: [C, R],
          "min-height": [C, R],
          "max-height": [C, R],
          "line-height": [C, B],
          "scroll-top": [U, O, "scrollTop"],
          "scroll-left": [U, O, "scrollLeft"],
        },
        le = {};
      H.transform &&
        ((W.transform = [Y]),
        (le = {
          x: [R, "translateX"],
          y: [R, "translateY"],
          rotate: [X],
          rotateX: [X],
          rotateY: [X],
          scale: [O],
          scaleX: [O],
          scaleY: [O],
          skew: [X],
          skewX: [X],
          skewY: [X],
        })),
        H.transform &&
          H.backface &&
          ((le.z = [R, "translateZ"]),
          (le.rotateZ = [X]),
          (le.scaleZ = [O]),
          (le.perspective = [L]));
      var ke = /ms/,
        dt = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Cs = c((MH, Rs) => {
    "use strict";
    var Y_ = window.$,
      $_ = Ci() && Y_.tram;
    Rs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        o = Function.prototype,
        i = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        d = n.hasOwnProperty,
        h = r.forEach,
        v = r.map,
        E = r.reduce,
        m = r.reduceRight,
        b = r.filter,
        _ = r.every,
        q = r.some,
        x = r.indexOf,
        S = r.lastIndexOf,
        O = Array.isArray,
        w = Object.keys,
        L = o.bind,
        R =
          (e.each =
          e.forEach =
            function (I, D, j) {
              if (I == null) return I;
              if (h && I.forEach === h) I.forEach(D, j);
              else if (I.length === +I.length) {
                for (var H = 0, J = I.length; H < J; H++)
                  if (D.call(j, I[H], H, I) === t) return;
              } else
                for (var te = e.keys(I), H = 0, J = te.length; H < J; H++)
                  if (D.call(j, I[te[H]], te[H], I) === t) return;
              return I;
            });
      (e.map = e.collect =
        function (I, D, j) {
          var H = [];
          return I == null
            ? H
            : v && I.map === v
            ? I.map(D, j)
            : (R(I, function (J, te, ae) {
                H.push(D.call(j, J, te, ae));
              }),
              H);
        }),
        (e.find = e.detect =
          function (I, D, j) {
            var H;
            return (
              X(I, function (J, te, ae) {
                if (D.call(j, J, te, ae)) return (H = J), !0;
              }),
              H
            );
          }),
        (e.filter = e.select =
          function (I, D, j) {
            var H = [];
            return I == null
              ? H
              : b && I.filter === b
              ? I.filter(D, j)
              : (R(I, function (J, te, ae) {
                  D.call(j, J, te, ae) && H.push(J);
                }),
                H);
          });
      var X =
        (e.some =
        e.any =
          function (I, D, j) {
            D || (D = e.identity);
            var H = !1;
            return I == null
              ? H
              : q && I.some === q
              ? I.some(D, j)
              : (R(I, function (J, te, ae) {
                  if (H || (H = D.call(j, J, te, ae))) return t;
                }),
                !!H);
          });
      (e.contains = e.include =
        function (I, D) {
          return I == null
            ? !1
            : x && I.indexOf === x
            ? I.indexOf(D) != -1
            : X(I, function (j) {
                return j === D;
              });
        }),
        (e.delay = function (I, D) {
          var j = a.call(arguments, 2);
          return setTimeout(function () {
            return I.apply(null, j);
          }, D);
        }),
        (e.defer = function (I) {
          return e.delay.apply(e, [I, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (I) {
          var D, j, H;
          return function () {
            D ||
              ((D = !0),
              (j = arguments),
              (H = this),
              $_.frame(function () {
                (D = !1), I.apply(H, j);
              }));
          };
        }),
        (e.debounce = function (I, D, j) {
          var H,
            J,
            te,
            ae,
            _e,
            g = function () {
              var F = e.now() - ae;
              F < D
                ? (H = setTimeout(g, D - F))
                : ((H = null), j || ((_e = I.apply(te, J)), (te = J = null)));
            };
          return function () {
            (te = this), (J = arguments), (ae = e.now());
            var F = j && !H;
            return (
              H || (H = setTimeout(g, D)),
              F && ((_e = I.apply(te, J)), (te = J = null)),
              _e
            );
          };
        }),
        (e.defaults = function (I) {
          if (!e.isObject(I)) return I;
          for (var D = 1, j = arguments.length; D < j; D++) {
            var H = arguments[D];
            for (var J in H) I[J] === void 0 && (I[J] = H[J]);
          }
          return I;
        }),
        (e.keys = function (I) {
          if (!e.isObject(I)) return [];
          if (w) return w(I);
          var D = [];
          for (var j in I) e.has(I, j) && D.push(j);
          return D;
        }),
        (e.has = function (I, D) {
          return d.call(I, D);
        }),
        (e.isObject = function (I) {
          return I === Object(I);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var B = /(.)^/,
        z = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        $ = /\\|'|\r|\n|\u2028|\u2029/g,
        Z = function (I) {
          return "\\" + z[I];
        },
        M = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (I, D, j) {
          !D && j && (D = j), (D = e.defaults({}, D, e.templateSettings));
          var H = RegExp(
              [
                (D.escape || B).source,
                (D.interpolate || B).source,
                (D.evaluate || B).source,
              ].join("|") + "|$",
              "g"
            ),
            J = 0,
            te = "__p+='";
          I.replace(H, function (F, C, f, U, Y) {
            return (
              (te += I.slice(J, Y).replace($, Z)),
              (J = Y + F.length),
              C
                ? (te +=
                    `'+
((__t=(` +
                    C +
                    `))==null?'':_.escape(__t))+
'`)
                : f
                ? (te +=
                    `'+
((__t=(` +
                    f +
                    `))==null?'':__t)+
'`)
                : U &&
                  (te +=
                    `';
` +
                    U +
                    `
__p+='`),
              F
            );
          }),
            (te += `';
`);
          var ae = D.variable;
          if (ae) {
            if (!M.test(ae))
              throw new Error("variable is not a bare identifier: " + ae);
          } else
            (te =
              `with(obj||{}){
` +
              te +
              `}
`),
              (ae = "obj");
          te =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            te +
            `return __p;
`;
          var _e;
          try {
            _e = new Function(D.variable || "obj", "_", te);
          } catch (F) {
            throw ((F.source = te), F);
          }
          var g = function (F) {
            return _e.call(this, F, e);
          };
          return (
            (g.source =
              "function(" +
              ae +
              `){
` +
              te +
              "}"),
            g
          );
        }),
        e
      );
    })();
  });
  var Ue = c((DH, Gs) => {
    "use strict";
    var de = {},
      Wt = {},
      kt = [],
      Ni = window.Webflow || [],
      _t = window.jQuery,
      ze = _t(window),
      Q_ = _t(document),
      nt = _t.isFunction,
      je = (de._ = Cs()),
      Ns = (de.tram = Ci() && _t.tram),
      cn = !1,
      Pi = !1;
    Ns.config.hideBackface = !1;
    Ns.config.keepInherited = !0;
    de.define = function (e, t, r) {
      Wt[e] && qs(Wt[e]);
      var n = (Wt[e] = t(_t, je, r) || {});
      return Ps(n), n;
    };
    de.require = function (e) {
      return Wt[e];
    };
    function Ps(e) {
      de.env() &&
        (nt(e.design) && ze.on("__wf_design", e.design),
        nt(e.preview) && ze.on("__wf_preview", e.preview)),
        nt(e.destroy) && ze.on("__wf_destroy", e.destroy),
        e.ready && nt(e.ready) && Z_(e);
    }
    function Z_(e) {
      if (cn) {
        e.ready();
        return;
      }
      je.contains(kt, e.ready) || kt.push(e.ready);
    }
    function qs(e) {
      nt(e.design) && ze.off("__wf_design", e.design),
        nt(e.preview) && ze.off("__wf_preview", e.preview),
        nt(e.destroy) && ze.off("__wf_destroy", e.destroy),
        e.ready && nt(e.ready) && J_(e);
    }
    function J_(e) {
      kt = je.filter(kt, function (t) {
        return t !== e.ready;
      });
    }
    de.push = function (e) {
      if (cn) {
        nt(e) && e();
        return;
      }
      Ni.push(e);
    };
    de.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var un = navigator.userAgent.toLowerCase(),
      Ms = (de.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      eT = (de.env.chrome =
        /chrome/.test(un) &&
        /Google/.test(navigator.vendor) &&
        parseInt(un.match(/chrome\/(\d+)\./)[1], 10)),
      tT = (de.env.ios = /(ipod|iphone|ipad)/.test(un));
    de.env.safari = /safari/.test(un) && !eT && !tT;
    var Li;
    Ms &&
      Q_.on("touchstart mousedown", function (e) {
        Li = e.target;
      });
    de.validClick = Ms
      ? function (e) {
          return e === Li || _t.contains(e, Li);
        }
      : function () {
          return !0;
        };
    var Ds = "resize.webflow orientationchange.webflow load.webflow",
      rT = "scroll.webflow " + Ds;
    de.resize = qi(ze, Ds);
    de.scroll = qi(ze, rT);
    de.redraw = qi();
    function qi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = je.throttle(function (o) {
          je.each(r, function (i) {
            i(o);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (o) {
          typeof o == "function" && (je.contains(r, o) || r.push(o));
        }),
        (n.off = function (o) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = je.filter(r, function (i) {
            return i !== o;
          });
        }),
        n
      );
    }
    de.location = function (e) {
      window.location = e;
    };
    de.env() && (de.location = function () {});
    de.ready = function () {
      (cn = !0), Pi ? nT() : je.each(kt, Ls), je.each(Ni, Ls), de.resize.up();
    };
    function Ls(e) {
      nt(e) && e();
    }
    function nT() {
      (Pi = !1), je.each(Wt, Ps);
    }
    var Ct;
    de.load = function (e) {
      Ct.then(e);
    };
    function Fs() {
      Ct && (Ct.reject(), ze.off("load", Ct.resolve)),
        (Ct = new _t.Deferred()),
        ze.on("load", Ct.resolve);
    }
    de.destroy = function (e) {
      (e = e || {}),
        (Pi = !0),
        ze.triggerHandler("__wf_destroy"),
        e.domready != null && (cn = e.domready),
        je.each(Wt, qs),
        de.resize.off(),
        de.scroll.off(),
        de.redraw.off(),
        (kt = []),
        (Ni = []),
        Ct.state() === "pending" && Fs();
    };
    _t(de.ready);
    Fs();
    Gs.exports = window.Webflow = de;
  });
  var Hs = c((FH, Us) => {
    "use strict";
    var Vs = Ue();
    Vs.define(
      "brand",
      (Us.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          o = e("body"),
          i = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          d;
        t.ready = function () {
          var m = n.attr("data-wf-status"),
            b = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(b) && a.hostname !== b && (m = !0),
            m &&
              !s &&
              ((d = d || v()),
              E(),
              setTimeout(E, 500),
              e(r).off(u, h).on(u, h));
        };
        function h() {
          var m =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(d).attr("style", m ? "display: none !important;" : "");
        }
        function v() {
          var m = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            b = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            _ = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return m.append(b, _), m[0];
        }
        function E() {
          var m = o.children(i),
            b = m.length && m.get(0) === d,
            _ = Vs.env("editor");
          if (b) {
            _ && m.remove();
            return;
          }
          m.length && m.remove(), _ || o.append(d);
        }
        return t;
      })
    );
  });
  var ks = c((GH, Ws) => {
    "use strict";
    var Mi = Ue();
    Mi.define(
      "edit",
      (Ws.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Mi.env("test") || Mi.env("frame")) && !r.fixture && !iT())
        )
          return { exit: 1 };
        var n = {},
          o = e(window),
          i = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          d = r.load || E,
          h = !1;
        try {
          h =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        h
          ? d()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            d()
          : o.on(s, v).triggerHandler(s);
        function v() {
          u || (/\?edit/.test(a.hash) && d());
        }
        function E() {
          (u = !0),
            (window.WebflowEditor = !0),
            o.off(s, v),
            S(function (w) {
              e.ajax({
                url: x("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: m(w),
              });
            });
        }
        function m(w) {
          return function (L) {
            if (!L) {
              console.error("Could not load editor data");
              return;
            }
            (L.thirdPartyCookiesSupported = w),
              b(q(L.bugReporterScriptPath), function () {
                b(q(L.scriptPath), function () {
                  window.WebflowEditor(L);
                });
              });
          };
        }
        function b(w, L) {
          e.ajax({ type: "GET", url: w, dataType: "script", cache: !0 }).then(
            L,
            _
          );
        }
        function _(w, L, R) {
          throw (console.error("Could not load editor script: " + L), R);
        }
        function q(w) {
          return w.indexOf("//") >= 0
            ? w
            : x("https://editor-api.webflow.com" + w);
        }
        function x(w) {
          return w.replace(/([^:])\/\//g, "$1/");
        }
        function S(w) {
          var L = window.document.createElement("iframe");
          (L.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (L.style.display = "none"),
            (L.sandbox = "allow-scripts allow-same-origin");
          var R = function (X) {
            X.data === "WF_third_party_cookies_unsupported"
              ? (O(L, R), w(!1))
              : X.data === "WF_third_party_cookies_supported" &&
                (O(L, R), w(!0));
          };
          (L.onerror = function () {
            O(L, R), w(!1);
          }),
            window.addEventListener("message", R, !1),
            window.document.body.appendChild(L);
        }
        function O(w, L) {
          window.removeEventListener("message", L, !1), w.remove();
        }
        return n;
      })
    );
    function iT() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Bs = c((VH, Xs) => {
    "use strict";
    var oT = Ue();
    oT.define(
      "focus-visible",
      (Xs.exports = function () {
        function e(r) {
          var n = !0,
            o = !1,
            i = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(O) {
            return !!(
              O &&
              O !== document &&
              O.nodeName !== "HTML" &&
              O.nodeName !== "BODY" &&
              "classList" in O &&
              "contains" in O.classList
            );
          }
          function u(O) {
            var w = O.type,
              L = O.tagName;
            return !!(
              (L === "INPUT" && a[w] && !O.readOnly) ||
              (L === "TEXTAREA" && !O.readOnly) ||
              O.isContentEditable
            );
          }
          function d(O) {
            O.getAttribute("data-wf-focus-visible") ||
              O.setAttribute("data-wf-focus-visible", "true");
          }
          function h(O) {
            O.getAttribute("data-wf-focus-visible") &&
              O.removeAttribute("data-wf-focus-visible");
          }
          function v(O) {
            O.metaKey ||
              O.altKey ||
              O.ctrlKey ||
              (s(r.activeElement) && d(r.activeElement), (n = !0));
          }
          function E() {
            n = !1;
          }
          function m(O) {
            s(O.target) && (n || u(O.target)) && d(O.target);
          }
          function b(O) {
            s(O.target) &&
              O.target.hasAttribute("data-wf-focus-visible") &&
              ((o = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                o = !1;
              }, 100)),
              h(O.target));
          }
          function _() {
            document.visibilityState === "hidden" && (o && (n = !0), q());
          }
          function q() {
            document.addEventListener("mousemove", S),
              document.addEventListener("mousedown", S),
              document.addEventListener("mouseup", S),
              document.addEventListener("pointermove", S),
              document.addEventListener("pointerdown", S),
              document.addEventListener("pointerup", S),
              document.addEventListener("touchmove", S),
              document.addEventListener("touchstart", S),
              document.addEventListener("touchend", S);
          }
          function x() {
            document.removeEventListener("mousemove", S),
              document.removeEventListener("mousedown", S),
              document.removeEventListener("mouseup", S),
              document.removeEventListener("pointermove", S),
              document.removeEventListener("pointerdown", S),
              document.removeEventListener("pointerup", S),
              document.removeEventListener("touchmove", S),
              document.removeEventListener("touchstart", S),
              document.removeEventListener("touchend", S);
          }
          function S(O) {
            (O.target.nodeName && O.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), x());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", E, !0),
            document.addEventListener("pointerdown", E, !0),
            document.addEventListener("touchstart", E, !0),
            document.addEventListener("visibilitychange", _, !0),
            q(),
            r.addEventListener("focus", m, !0),
            r.addEventListener("blur", b, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ks = c((UH, zs) => {
    "use strict";
    var js = Ue();
    js.define(
      "focus",
      (zs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function o(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            js.env.safari &&
            (document.addEventListener("mousedown", o, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: i };
      })
    );
  });
  var Qs = c((HH, $s) => {
    "use strict";
    var Di = window.jQuery,
      it = {},
      ln = [],
      Ys = ".w-ix",
      fn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Di(t).triggerHandler(it.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Di(t).triggerHandler(it.types.OUTRO));
        },
      };
    it.triggers = {};
    it.types = { INTRO: "w-ix-intro" + Ys, OUTRO: "w-ix-outro" + Ys };
    it.init = function () {
      for (var e = ln.length, t = 0; t < e; t++) {
        var r = ln[t];
        r[0](0, r[1]);
      }
      (ln = []), Di.extend(it.triggers, fn);
    };
    it.async = function () {
      for (var e in fn) {
        var t = fn[e];
        fn.hasOwnProperty(e) &&
          (it.triggers[e] = function (r, n) {
            ln.push([t, n]);
          });
      }
    };
    it.async();
    $s.exports = it;
  });
  var Tr = c((WH, eu) => {
    "use strict";
    var Fi = Qs();
    function Zs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var aT = window.jQuery,
      dn = {},
      Js = ".w-ix",
      sT = {
        reset: function (e, t) {
          Fi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Fi.triggers.intro(e, t), Zs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Fi.triggers.outro(e, t), Zs(t, "COMPONENT_INACTIVE");
        },
      };
    dn.triggers = {};
    dn.types = { INTRO: "w-ix-intro" + Js, OUTRO: "w-ix-outro" + Js };
    aT.extend(dn.triggers, sT);
    eu.exports = dn;
  });
  var tu = c((kH, pt) => {
    function Gi(e) {
      return (
        (pt.exports = Gi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (pt.exports.__esModule = !0),
        (pt.exports.default = pt.exports),
        Gi(e)
      );
    }
    (pt.exports = Gi),
      (pt.exports.__esModule = !0),
      (pt.exports.default = pt.exports);
  });
  var pn = c((XH, br) => {
    var uT = tu().default;
    function ru(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (ru = function (o) {
        return o ? r : t;
      })(e);
    }
    function cT(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (uT(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = ru(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (br.exports = cT),
      (br.exports.__esModule = !0),
      (br.exports.default = br.exports);
  });
  var nu = c((BH, Ir) => {
    function lT(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Ir.exports = lT),
      (Ir.exports.__esModule = !0),
      (Ir.exports.default = Ir.exports);
  });
  var Ee = c((jH, iu) => {
    var vn = function (e) {
      return e && e.Math == Math && e;
    };
    iu.exports =
      vn(typeof globalThis == "object" && globalThis) ||
      vn(typeof window == "object" && window) ||
      vn(typeof self == "object" && self) ||
      vn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Xt = c((zH, ou) => {
    ou.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Lt = c((KH, au) => {
    var fT = Xt();
    au.exports = !fT(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var gn = c((YH, su) => {
    var Or = Function.prototype.call;
    su.exports = Or.bind
      ? Or.bind(Or)
      : function () {
          return Or.apply(Or, arguments);
        };
  });
  var fu = c((lu) => {
    "use strict";
    var uu = {}.propertyIsEnumerable,
      cu = Object.getOwnPropertyDescriptor,
      dT = cu && !uu.call({ 1: 2 }, 1);
    lu.f = dT
      ? function (t) {
          var r = cu(this, t);
          return !!r && r.enumerable;
        }
      : uu;
  });
  var Vi = c((QH, du) => {
    du.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ke = c((ZH, vu) => {
    var pu = Function.prototype,
      Ui = pu.bind,
      Hi = pu.call,
      pT = Ui && Ui.bind(Hi);
    vu.exports = Ui
      ? function (e) {
          return e && pT(Hi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Hi.apply(e, arguments);
            }
          );
        };
  });
  var Eu = c((JH, hu) => {
    var gu = Ke(),
      vT = gu({}.toString),
      gT = gu("".slice);
    hu.exports = function (e) {
      return gT(vT(e), 8, -1);
    };
  });
  var mu = c((eW, yu) => {
    var hT = Ee(),
      ET = Ke(),
      yT = Xt(),
      mT = Eu(),
      Wi = hT.Object,
      _T = ET("".split);
    yu.exports = yT(function () {
      return !Wi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return mT(e) == "String" ? _T(e, "") : Wi(e);
        }
      : Wi;
  });
  var ki = c((tW, _u) => {
    var TT = Ee(),
      bT = TT.TypeError;
    _u.exports = function (e) {
      if (e == null) throw bT("Can't call method on " + e);
      return e;
    };
  });
  var xr = c((rW, Tu) => {
    var IT = mu(),
      OT = ki();
    Tu.exports = function (e) {
      return IT(OT(e));
    };
  });
  var ot = c((nW, bu) => {
    bu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Bt = c((iW, Iu) => {
    var xT = ot();
    Iu.exports = function (e) {
      return typeof e == "object" ? e !== null : xT(e);
    };
  });
  var Ar = c((oW, Ou) => {
    var Xi = Ee(),
      AT = ot(),
      wT = function (e) {
        return AT(e) ? e : void 0;
      };
    Ou.exports = function (e, t) {
      return arguments.length < 2 ? wT(Xi[e]) : Xi[e] && Xi[e][t];
    };
  });
  var Au = c((aW, xu) => {
    var ST = Ke();
    xu.exports = ST({}.isPrototypeOf);
  });
  var Su = c((sW, wu) => {
    var RT = Ar();
    wu.exports = RT("navigator", "userAgent") || "";
  });
  var Mu = c((uW, qu) => {
    var Pu = Ee(),
      Bi = Su(),
      Ru = Pu.process,
      Cu = Pu.Deno,
      Lu = (Ru && Ru.versions) || (Cu && Cu.version),
      Nu = Lu && Lu.v8,
      Ye,
      hn;
    Nu &&
      ((Ye = Nu.split(".")),
      (hn = Ye[0] > 0 && Ye[0] < 4 ? 1 : +(Ye[0] + Ye[1])));
    !hn &&
      Bi &&
      ((Ye = Bi.match(/Edge\/(\d+)/)),
      (!Ye || Ye[1] >= 74) &&
        ((Ye = Bi.match(/Chrome\/(\d+)/)), Ye && (hn = +Ye[1])));
    qu.exports = hn;
  });
  var ji = c((cW, Fu) => {
    var Du = Mu(),
      CT = Xt();
    Fu.exports =
      !!Object.getOwnPropertySymbols &&
      !CT(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Du && Du < 41)
        );
      });
  });
  var zi = c((lW, Gu) => {
    var LT = ji();
    Gu.exports = LT && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Ki = c((fW, Vu) => {
    var NT = Ee(),
      PT = Ar(),
      qT = ot(),
      MT = Au(),
      DT = zi(),
      FT = NT.Object;
    Vu.exports = DT
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = PT("Symbol");
          return qT(t) && MT(t.prototype, FT(e));
        };
  });
  var Hu = c((dW, Uu) => {
    var GT = Ee(),
      VT = GT.String;
    Uu.exports = function (e) {
      try {
        return VT(e);
      } catch {
        return "Object";
      }
    };
  });
  var ku = c((pW, Wu) => {
    var UT = Ee(),
      HT = ot(),
      WT = Hu(),
      kT = UT.TypeError;
    Wu.exports = function (e) {
      if (HT(e)) return e;
      throw kT(WT(e) + " is not a function");
    };
  });
  var Bu = c((vW, Xu) => {
    var XT = ku();
    Xu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : XT(r);
    };
  });
  var zu = c((gW, ju) => {
    var BT = Ee(),
      Yi = gn(),
      $i = ot(),
      Qi = Bt(),
      jT = BT.TypeError;
    ju.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e)))) ||
        ($i((r = e.valueOf)) && !Qi((n = Yi(r, e)))) ||
        (t !== "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e))))
      )
        return n;
      throw jT("Can't convert object to primitive value");
    };
  });
  var Yu = c((hW, Ku) => {
    Ku.exports = !1;
  });
  var En = c((EW, Qu) => {
    var $u = Ee(),
      zT = Object.defineProperty;
    Qu.exports = function (e, t) {
      try {
        zT($u, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        $u[e] = t;
      }
      return t;
    };
  });
  var yn = c((yW, Ju) => {
    var KT = Ee(),
      YT = En(),
      Zu = "__core-js_shared__",
      $T = KT[Zu] || YT(Zu, {});
    Ju.exports = $T;
  });
  var Zi = c((mW, tc) => {
    var QT = Yu(),
      ec = yn();
    (tc.exports = function (e, t) {
      return ec[e] || (ec[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: QT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var nc = c((_W, rc) => {
    var ZT = Ee(),
      JT = ki(),
      eb = ZT.Object;
    rc.exports = function (e) {
      return eb(JT(e));
    };
  });
  var Tt = c((TW, ic) => {
    var tb = Ke(),
      rb = nc(),
      nb = tb({}.hasOwnProperty);
    ic.exports =
      Object.hasOwn ||
      function (t, r) {
        return nb(rb(t), r);
      };
  });
  var Ji = c((bW, oc) => {
    var ib = Ke(),
      ob = 0,
      ab = Math.random(),
      sb = ib((1).toString);
    oc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + sb(++ob + ab, 36);
    };
  });
  var eo = c((IW, lc) => {
    var ub = Ee(),
      cb = Zi(),
      ac = Tt(),
      lb = Ji(),
      sc = ji(),
      cc = zi(),
      jt = cb("wks"),
      Nt = ub.Symbol,
      uc = Nt && Nt.for,
      fb = cc ? Nt : (Nt && Nt.withoutSetter) || lb;
    lc.exports = function (e) {
      if (!ac(jt, e) || !(sc || typeof jt[e] == "string")) {
        var t = "Symbol." + e;
        sc && ac(Nt, e)
          ? (jt[e] = Nt[e])
          : cc && uc
          ? (jt[e] = uc(t))
          : (jt[e] = fb(t));
      }
      return jt[e];
    };
  });
  var vc = c((OW, pc) => {
    var db = Ee(),
      pb = gn(),
      fc = Bt(),
      dc = Ki(),
      vb = Bu(),
      gb = zu(),
      hb = eo(),
      Eb = db.TypeError,
      yb = hb("toPrimitive");
    pc.exports = function (e, t) {
      if (!fc(e) || dc(e)) return e;
      var r = vb(e, yb),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = pb(r, e, t)), !fc(n) || dc(n))
        )
          return n;
        throw Eb("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), gb(e, t);
    };
  });
  var to = c((xW, gc) => {
    var mb = vc(),
      _b = Ki();
    gc.exports = function (e) {
      var t = mb(e, "string");
      return _b(t) ? t : t + "";
    };
  });
  var no = c((AW, Ec) => {
    var Tb = Ee(),
      hc = Bt(),
      ro = Tb.document,
      bb = hc(ro) && hc(ro.createElement);
    Ec.exports = function (e) {
      return bb ? ro.createElement(e) : {};
    };
  });
  var io = c((wW, yc) => {
    var Ib = Lt(),
      Ob = Xt(),
      xb = no();
    yc.exports =
      !Ib &&
      !Ob(function () {
        return (
          Object.defineProperty(xb("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var oo = c((_c) => {
    var Ab = Lt(),
      wb = gn(),
      Sb = fu(),
      Rb = Vi(),
      Cb = xr(),
      Lb = to(),
      Nb = Tt(),
      Pb = io(),
      mc = Object.getOwnPropertyDescriptor;
    _c.f = Ab
      ? mc
      : function (t, r) {
          if (((t = Cb(t)), (r = Lb(r)), Pb))
            try {
              return mc(t, r);
            } catch {}
          if (Nb(t, r)) return Rb(!wb(Sb.f, t, r), t[r]);
        };
  });
  var wr = c((RW, bc) => {
    var Tc = Ee(),
      qb = Bt(),
      Mb = Tc.String,
      Db = Tc.TypeError;
    bc.exports = function (e) {
      if (qb(e)) return e;
      throw Db(Mb(e) + " is not an object");
    };
  });
  var Sr = c((xc) => {
    var Fb = Ee(),
      Gb = Lt(),
      Vb = io(),
      Ic = wr(),
      Ub = to(),
      Hb = Fb.TypeError,
      Oc = Object.defineProperty;
    xc.f = Gb
      ? Oc
      : function (t, r, n) {
          if ((Ic(t), (r = Ub(r)), Ic(n), Vb))
            try {
              return Oc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw Hb("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var mn = c((LW, Ac) => {
    var Wb = Lt(),
      kb = Sr(),
      Xb = Vi();
    Ac.exports = Wb
      ? function (e, t, r) {
          return kb.f(e, t, Xb(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var so = c((NW, wc) => {
    var Bb = Ke(),
      jb = ot(),
      ao = yn(),
      zb = Bb(Function.toString);
    jb(ao.inspectSource) ||
      (ao.inspectSource = function (e) {
        return zb(e);
      });
    wc.exports = ao.inspectSource;
  });
  var Cc = c((PW, Rc) => {
    var Kb = Ee(),
      Yb = ot(),
      $b = so(),
      Sc = Kb.WeakMap;
    Rc.exports = Yb(Sc) && /native code/.test($b(Sc));
  });
  var uo = c((qW, Nc) => {
    var Qb = Zi(),
      Zb = Ji(),
      Lc = Qb("keys");
    Nc.exports = function (e) {
      return Lc[e] || (Lc[e] = Zb(e));
    };
  });
  var _n = c((MW, Pc) => {
    Pc.exports = {};
  });
  var Vc = c((DW, Gc) => {
    var Jb = Cc(),
      Fc = Ee(),
      co = Ke(),
      eI = Bt(),
      tI = mn(),
      lo = Tt(),
      fo = yn(),
      rI = uo(),
      nI = _n(),
      qc = "Object already initialized",
      vo = Fc.TypeError,
      iI = Fc.WeakMap,
      Tn,
      Rr,
      bn,
      oI = function (e) {
        return bn(e) ? Rr(e) : Tn(e, {});
      },
      aI = function (e) {
        return function (t) {
          var r;
          if (!eI(t) || (r = Rr(t)).type !== e)
            throw vo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    Jb || fo.state
      ? ((bt = fo.state || (fo.state = new iI())),
        (Mc = co(bt.get)),
        (po = co(bt.has)),
        (Dc = co(bt.set)),
        (Tn = function (e, t) {
          if (po(bt, e)) throw new vo(qc);
          return (t.facade = e), Dc(bt, e, t), t;
        }),
        (Rr = function (e) {
          return Mc(bt, e) || {};
        }),
        (bn = function (e) {
          return po(bt, e);
        }))
      : ((Pt = rI("state")),
        (nI[Pt] = !0),
        (Tn = function (e, t) {
          if (lo(e, Pt)) throw new vo(qc);
          return (t.facade = e), tI(e, Pt, t), t;
        }),
        (Rr = function (e) {
          return lo(e, Pt) ? e[Pt] : {};
        }),
        (bn = function (e) {
          return lo(e, Pt);
        }));
    var bt, Mc, po, Dc, Pt;
    Gc.exports = { set: Tn, get: Rr, has: bn, enforce: oI, getterFor: aI };
  });
  var Wc = c((FW, Hc) => {
    var go = Lt(),
      sI = Tt(),
      Uc = Function.prototype,
      uI = go && Object.getOwnPropertyDescriptor,
      ho = sI(Uc, "name"),
      cI = ho && function () {}.name === "something",
      lI = ho && (!go || (go && uI(Uc, "name").configurable));
    Hc.exports = { EXISTS: ho, PROPER: cI, CONFIGURABLE: lI };
  });
  var zc = c((GW, jc) => {
    var fI = Ee(),
      kc = ot(),
      dI = Tt(),
      Xc = mn(),
      pI = En(),
      vI = so(),
      Bc = Vc(),
      gI = Wc().CONFIGURABLE,
      hI = Bc.get,
      EI = Bc.enforce,
      yI = String(String).split("String");
    (jc.exports = function (e, t, r, n) {
      var o = n ? !!n.unsafe : !1,
        i = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (kc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!dI(r, "name") || (gI && r.name !== s)) && Xc(r, "name", s),
          (u = EI(r)),
          u.source || (u.source = yI.join(typeof s == "string" ? s : ""))),
        e === fI)
      ) {
        i ? (e[t] = r) : pI(t, r);
        return;
      } else o ? !a && e[t] && (i = !0) : delete e[t];
      i ? (e[t] = r) : Xc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (kc(this) && hI(this).source) || vI(this);
    });
  });
  var Eo = c((VW, Kc) => {
    var mI = Math.ceil,
      _I = Math.floor;
    Kc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? _I : mI)(t);
    };
  });
  var $c = c((UW, Yc) => {
    var TI = Eo(),
      bI = Math.max,
      II = Math.min;
    Yc.exports = function (e, t) {
      var r = TI(e);
      return r < 0 ? bI(r + t, 0) : II(r, t);
    };
  });
  var Zc = c((HW, Qc) => {
    var OI = Eo(),
      xI = Math.min;
    Qc.exports = function (e) {
      return e > 0 ? xI(OI(e), 9007199254740991) : 0;
    };
  });
  var el = c((WW, Jc) => {
    var AI = Zc();
    Jc.exports = function (e) {
      return AI(e.length);
    };
  });
  var yo = c((kW, rl) => {
    var wI = xr(),
      SI = $c(),
      RI = el(),
      tl = function (e) {
        return function (t, r, n) {
          var o = wI(t),
            i = RI(o),
            a = SI(n, i),
            s;
          if (e && r != r) {
            for (; i > a; ) if (((s = o[a++]), s != s)) return !0;
          } else
            for (; i > a; a++)
              if ((e || a in o) && o[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    rl.exports = { includes: tl(!0), indexOf: tl(!1) };
  });
  var _o = c((XW, il) => {
    var CI = Ke(),
      mo = Tt(),
      LI = xr(),
      NI = yo().indexOf,
      PI = _n(),
      nl = CI([].push);
    il.exports = function (e, t) {
      var r = LI(e),
        n = 0,
        o = [],
        i;
      for (i in r) !mo(PI, i) && mo(r, i) && nl(o, i);
      for (; t.length > n; ) mo(r, (i = t[n++])) && (~NI(o, i) || nl(o, i));
      return o;
    };
  });
  var In = c((BW, ol) => {
    ol.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var sl = c((al) => {
    var qI = _o(),
      MI = In(),
      DI = MI.concat("length", "prototype");
    al.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return qI(t, DI);
      };
  });
  var cl = c((ul) => {
    ul.f = Object.getOwnPropertySymbols;
  });
  var fl = c((KW, ll) => {
    var FI = Ar(),
      GI = Ke(),
      VI = sl(),
      UI = cl(),
      HI = wr(),
      WI = GI([].concat);
    ll.exports =
      FI("Reflect", "ownKeys") ||
      function (t) {
        var r = VI.f(HI(t)),
          n = UI.f;
        return n ? WI(r, n(t)) : r;
      };
  });
  var pl = c((YW, dl) => {
    var kI = Tt(),
      XI = fl(),
      BI = oo(),
      jI = Sr();
    dl.exports = function (e, t) {
      for (var r = XI(t), n = jI.f, o = BI.f, i = 0; i < r.length; i++) {
        var a = r[i];
        kI(e, a) || n(e, a, o(t, a));
      }
    };
  });
  var gl = c(($W, vl) => {
    var zI = Xt(),
      KI = ot(),
      YI = /#|\.prototype\./,
      Cr = function (e, t) {
        var r = QI[$I(e)];
        return r == JI ? !0 : r == ZI ? !1 : KI(t) ? zI(t) : !!t;
      },
      $I = (Cr.normalize = function (e) {
        return String(e).replace(YI, ".").toLowerCase();
      }),
      QI = (Cr.data = {}),
      ZI = (Cr.NATIVE = "N"),
      JI = (Cr.POLYFILL = "P");
    vl.exports = Cr;
  });
  var El = c((QW, hl) => {
    var To = Ee(),
      eO = oo().f,
      tO = mn(),
      rO = zc(),
      nO = En(),
      iO = pl(),
      oO = gl();
    hl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        o = e.stat,
        i,
        a,
        s,
        u,
        d,
        h;
      if (
        (n
          ? (a = To)
          : o
          ? (a = To[r] || nO(r, {}))
          : (a = (To[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((d = t[s]),
            e.noTargetGet ? ((h = eO(a, s)), (u = h && h.value)) : (u = a[s]),
            (i = oO(n ? s : r + (o ? "." : "#") + s, e.forced)),
            !i && u !== void 0)
          ) {
            if (typeof d == typeof u) continue;
            iO(d, u);
          }
          (e.sham || (u && u.sham)) && tO(d, "sham", !0), rO(a, s, d, e);
        }
    };
  });
  var ml = c((ZW, yl) => {
    var aO = _o(),
      sO = In();
    yl.exports =
      Object.keys ||
      function (t) {
        return aO(t, sO);
      };
  });
  var Tl = c((JW, _l) => {
    var uO = Lt(),
      cO = Sr(),
      lO = wr(),
      fO = xr(),
      dO = ml();
    _l.exports = uO
      ? Object.defineProperties
      : function (t, r) {
          lO(t);
          for (var n = fO(r), o = dO(r), i = o.length, a = 0, s; i > a; )
            cO.f(t, (s = o[a++]), n[s]);
          return t;
        };
  });
  var Il = c((ek, bl) => {
    var pO = Ar();
    bl.exports = pO("document", "documentElement");
  });
  var Ll = c((tk, Cl) => {
    var vO = wr(),
      gO = Tl(),
      Ol = In(),
      hO = _n(),
      EO = Il(),
      yO = no(),
      mO = uo(),
      xl = ">",
      Al = "<",
      Io = "prototype",
      Oo = "script",
      Sl = mO("IE_PROTO"),
      bo = function () {},
      Rl = function (e) {
        return Al + Oo + xl + e + Al + "/" + Oo + xl;
      },
      wl = function (e) {
        e.write(Rl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      _O = function () {
        var e = yO("iframe"),
          t = "java" + Oo + ":",
          r;
        return (
          (e.style.display = "none"),
          EO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Rl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      On,
      xn = function () {
        try {
          On = new ActiveXObject("htmlfile");
        } catch {}
        xn =
          typeof document < "u"
            ? document.domain && On
              ? wl(On)
              : _O()
            : wl(On);
        for (var e = Ol.length; e--; ) delete xn[Io][Ol[e]];
        return xn();
      };
    hO[Sl] = !0;
    Cl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((bo[Io] = vO(t)), (n = new bo()), (bo[Io] = null), (n[Sl] = t))
            : (n = xn()),
          r === void 0 ? n : gO(n, r)
        );
      };
  });
  var Pl = c((rk, Nl) => {
    var TO = eo(),
      bO = Ll(),
      IO = Sr(),
      xo = TO("unscopables"),
      Ao = Array.prototype;
    Ao[xo] == null && IO.f(Ao, xo, { configurable: !0, value: bO(null) });
    Nl.exports = function (e) {
      Ao[xo][e] = !0;
    };
  });
  var ql = c(() => {
    "use strict";
    var OO = El(),
      xO = yo().includes,
      AO = Pl();
    OO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return xO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    AO("includes");
  });
  var Dl = c((ok, Ml) => {
    var wO = Ee(),
      SO = Ke();
    Ml.exports = function (e, t) {
      return SO(wO[e].prototype[t]);
    };
  });
  var Gl = c((ak, Fl) => {
    ql();
    var RO = Dl();
    Fl.exports = RO("Array", "includes");
  });
  var Ul = c((sk, Vl) => {
    var CO = Gl();
    Vl.exports = CO;
  });
  var Wl = c((uk, Hl) => {
    var LO = Ul();
    Hl.exports = LO;
  });
  var wo = c((ck, kl) => {
    var NO =
      typeof global == "object" && global && global.Object === Object && global;
    kl.exports = NO;
  });
  var $e = c((lk, Xl) => {
    var PO = wo(),
      qO = typeof self == "object" && self && self.Object === Object && self,
      MO = PO || qO || Function("return this")();
    Xl.exports = MO;
  });
  var zt = c((fk, Bl) => {
    var DO = $e(),
      FO = DO.Symbol;
    Bl.exports = FO;
  });
  var Yl = c((dk, Kl) => {
    var jl = zt(),
      zl = Object.prototype,
      GO = zl.hasOwnProperty,
      VO = zl.toString,
      Lr = jl ? jl.toStringTag : void 0;
    function UO(e) {
      var t = GO.call(e, Lr),
        r = e[Lr];
      try {
        e[Lr] = void 0;
        var n = !0;
      } catch {}
      var o = VO.call(e);
      return n && (t ? (e[Lr] = r) : delete e[Lr]), o;
    }
    Kl.exports = UO;
  });
  var Ql = c((pk, $l) => {
    var HO = Object.prototype,
      WO = HO.toString;
    function kO(e) {
      return WO.call(e);
    }
    $l.exports = kO;
  });
  var It = c((vk, ef) => {
    var Zl = zt(),
      XO = Yl(),
      BO = Ql(),
      jO = "[object Null]",
      zO = "[object Undefined]",
      Jl = Zl ? Zl.toStringTag : void 0;
    function KO(e) {
      return e == null
        ? e === void 0
          ? zO
          : jO
        : Jl && Jl in Object(e)
        ? XO(e)
        : BO(e);
    }
    ef.exports = KO;
  });
  var So = c((gk, tf) => {
    function YO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    tf.exports = YO;
  });
  var Ro = c((hk, rf) => {
    var $O = So(),
      QO = $O(Object.getPrototypeOf, Object);
    rf.exports = QO;
  });
  var vt = c((Ek, nf) => {
    function ZO(e) {
      return e != null && typeof e == "object";
    }
    nf.exports = ZO;
  });
  var Co = c((yk, af) => {
    var JO = It(),
      ex = Ro(),
      tx = vt(),
      rx = "[object Object]",
      nx = Function.prototype,
      ix = Object.prototype,
      of = nx.toString,
      ox = ix.hasOwnProperty,
      ax = of.call(Object);
    function sx(e) {
      if (!tx(e) || JO(e) != rx) return !1;
      var t = ex(e);
      if (t === null) return !0;
      var r = ox.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && of.call(r) == ax;
    }
    af.exports = sx;
  });
  var sf = c((Lo) => {
    "use strict";
    Object.defineProperty(Lo, "__esModule", { value: !0 });
    Lo.default = ux;
    function ux(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var uf = c((Po, No) => {
    "use strict";
    Object.defineProperty(Po, "__esModule", { value: !0 });
    var cx = sf(),
      lx = fx(cx);
    function fx(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Kt;
    typeof self < "u"
      ? (Kt = self)
      : typeof window < "u"
      ? (Kt = window)
      : typeof global < "u"
      ? (Kt = global)
      : typeof No < "u"
      ? (Kt = No)
      : (Kt = Function("return this")());
    var dx = (0, lx.default)(Kt);
    Po.default = dx;
  });
  var qo = c((Nr) => {
    "use strict";
    Nr.__esModule = !0;
    Nr.ActionTypes = void 0;
    Nr.default = df;
    var px = Co(),
      vx = ff(px),
      gx = uf(),
      cf = ff(gx);
    function ff(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var lf = (Nr.ActionTypes = { INIT: "@@redux/INIT" });
    function df(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(df)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        s = a,
        u = !1;
      function d() {
        s === a && (s = a.slice());
      }
      function h() {
        return i;
      }
      function v(_) {
        if (typeof _ != "function")
          throw new Error("Expected listener to be a function.");
        var q = !0;
        return (
          d(),
          s.push(_),
          function () {
            if (q) {
              (q = !1), d();
              var S = s.indexOf(_);
              s.splice(S, 1);
            }
          }
        );
      }
      function E(_) {
        if (!(0, vx.default)(_))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof _.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (i = o(i, _));
        } finally {
          u = !1;
        }
        for (var q = (a = s), x = 0; x < q.length; x++) q[x]();
        return _;
      }
      function m(_) {
        if (typeof _ != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (o = _), E({ type: lf.INIT });
      }
      function b() {
        var _,
          q = v;
        return (
          (_ = {
            subscribe: function (S) {
              if (typeof S != "object")
                throw new TypeError("Expected the observer to be an object.");
              function O() {
                S.next && S.next(h());
              }
              O();
              var w = q(O);
              return { unsubscribe: w };
            },
          }),
          (_[cf.default] = function () {
            return this;
          }),
          _
        );
      }
      return (
        E({ type: lf.INIT }),
        (n = { dispatch: E, subscribe: v, getState: h, replaceReducer: m }),
        (n[cf.default] = b),
        n
      );
    }
  });
  var Do = c((Mo) => {
    "use strict";
    Mo.__esModule = !0;
    Mo.default = hx;
    function hx(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var gf = c((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    Fo.default = Tx;
    var pf = qo(),
      Ex = Co(),
      bk = vf(Ex),
      yx = Do(),
      Ik = vf(yx);
    function vf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function mx(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function _x(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: pf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var o =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: o }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                pf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function Tx(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        typeof e[o] == "function" && (r[o] = e[o]);
      }
      var i = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        _x(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var d =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          h = arguments[1];
        if (s) throw s;
        if (!1) var v;
        for (var E = !1, m = {}, b = 0; b < i.length; b++) {
          var _ = i[b],
            q = r[_],
            x = d[_],
            S = q(x, h);
          if (typeof S > "u") {
            var O = mx(_, h);
            throw new Error(O);
          }
          (m[_] = S), (E = E || S !== x);
        }
        return E ? m : d;
      };
    }
  });
  var Ef = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = bx;
    function hf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function bx(e, t) {
      if (typeof e == "function") return hf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
        var i = r[o],
          a = e[i];
        typeof a == "function" && (n[i] = hf(a, t));
      }
      return n;
    }
  });
  var Uo = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = Ix;
    function Ix() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        o = t.slice(0, -1);
      return function () {
        return o.reduceRight(function (i, a) {
          return a(i);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var yf = c((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    var Ox =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Ho.default = Sx;
    var xx = Uo(),
      Ax = wx(xx);
    function wx(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Sx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (o, i, a) {
          var s = n(o, i, a),
            u = s.dispatch,
            d = [],
            h = {
              getState: s.getState,
              dispatch: function (E) {
                return u(E);
              },
            };
          return (
            (d = t.map(function (v) {
              return v(h);
            })),
            (u = Ax.default.apply(void 0, d)(s.dispatch)),
            Ox({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Wo = c((He) => {
    "use strict";
    He.__esModule = !0;
    He.compose =
      He.applyMiddleware =
      He.bindActionCreators =
      He.combineReducers =
      He.createStore =
        void 0;
    var Rx = qo(),
      Cx = Yt(Rx),
      Lx = gf(),
      Nx = Yt(Lx),
      Px = Ef(),
      qx = Yt(Px),
      Mx = yf(),
      Dx = Yt(Mx),
      Fx = Uo(),
      Gx = Yt(Fx),
      Vx = Do(),
      Sk = Yt(Vx);
    function Yt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    He.createStore = Cx.default;
    He.combineReducers = Nx.default;
    He.bindActionCreators = qx.default;
    He.applyMiddleware = Dx.default;
    He.compose = Gx.default;
  });
  var Qe,
    ko,
    at,
    Ux,
    Hx,
    Xo,
    Wx,
    mf = he(() => {
      "use strict";
      (Qe = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (ko = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (at = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Ux = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (Hx = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Xo = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (Wx = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var We,
    kx,
    Bo = he(() => {
      "use strict";
      (We = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (kx = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var Xx,
    _f = he(() => {
      "use strict";
      Xx = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var Bx,
    jx,
    zx,
    Kx,
    Yx,
    $x,
    Qx,
    jo,
    Tf = he(() => {
      "use strict";
      Bo();
      ({
        TRANSFORM_MOVE: Bx,
        TRANSFORM_SCALE: jx,
        TRANSFORM_ROTATE: zx,
        TRANSFORM_SKEW: Kx,
        STYLE_SIZE: Yx,
        STYLE_FILTER: $x,
        STYLE_FONT_VARIATION: Qx,
      } = We),
        (jo = {
          [Bx]: !0,
          [jx]: !0,
          [zx]: !0,
          [Kx]: !0,
          [Yx]: !0,
          [$x]: !0,
          [Qx]: !0,
        });
    });
  var Ie = {};
  De(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => vA,
    IX2_ANIMATION_FRAME_CHANGED: () => uA,
    IX2_CLEAR_REQUESTED: () => oA,
    IX2_ELEMENT_STATE_CHANGED: () => pA,
    IX2_EVENT_LISTENER_ADDED: () => aA,
    IX2_EVENT_STATE_CHANGED: () => sA,
    IX2_INSTANCE_ADDED: () => lA,
    IX2_INSTANCE_REMOVED: () => dA,
    IX2_INSTANCE_STARTED: () => fA,
    IX2_MEDIA_QUERIES_DEFINED: () => hA,
    IX2_PARAMETER_CHANGED: () => cA,
    IX2_PLAYBACK_REQUESTED: () => nA,
    IX2_PREVIEW_REQUESTED: () => rA,
    IX2_RAW_DATA_IMPORTED: () => Zx,
    IX2_SESSION_INITIALIZED: () => Jx,
    IX2_SESSION_STARTED: () => eA,
    IX2_SESSION_STOPPED: () => tA,
    IX2_STOP_REQUESTED: () => iA,
    IX2_TEST_FRAME_RENDERED: () => EA,
    IX2_VIEWPORT_WIDTH_CHANGED: () => gA,
  });
  var Zx,
    Jx,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    vA,
    gA,
    hA,
    EA,
    bf = he(() => {
      "use strict";
      (Zx = "IX2_RAW_DATA_IMPORTED"),
        (Jx = "IX2_SESSION_INITIALIZED"),
        (eA = "IX2_SESSION_STARTED"),
        (tA = "IX2_SESSION_STOPPED"),
        (rA = "IX2_PREVIEW_REQUESTED"),
        (nA = "IX2_PLAYBACK_REQUESTED"),
        (iA = "IX2_STOP_REQUESTED"),
        (oA = "IX2_CLEAR_REQUESTED"),
        (aA = "IX2_EVENT_LISTENER_ADDED"),
        (sA = "IX2_EVENT_STATE_CHANGED"),
        (uA = "IX2_ANIMATION_FRAME_CHANGED"),
        (cA = "IX2_PARAMETER_CHANGED"),
        (lA = "IX2_INSTANCE_ADDED"),
        (fA = "IX2_INSTANCE_STARTED"),
        (dA = "IX2_INSTANCE_REMOVED"),
        (pA = "IX2_ELEMENT_STATE_CHANGED"),
        (vA = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (gA = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (hA = "IX2_MEDIA_QUERIES_DEFINED"),
        (EA = "IX2_TEST_FRAME_RENDERED");
    });
  var Re = {};
  De(Re, {
    ABSTRACT_NODE: () => gw,
    AUTO: () => iw,
    BACKGROUND: () => ZA,
    BACKGROUND_COLOR: () => QA,
    BAR_DELIMITER: () => sw,
    BORDER_COLOR: () => JA,
    BOUNDARY_SELECTOR: () => bA,
    CHILDREN: () => uw,
    COLON_DELIMITER: () => aw,
    COLOR: () => ew,
    COMMA_DELIMITER: () => ow,
    CONFIG_UNIT: () => CA,
    CONFIG_VALUE: () => AA,
    CONFIG_X_UNIT: () => wA,
    CONFIG_X_VALUE: () => IA,
    CONFIG_Y_UNIT: () => SA,
    CONFIG_Y_VALUE: () => OA,
    CONFIG_Z_UNIT: () => RA,
    CONFIG_Z_VALUE: () => xA,
    DISPLAY: () => tw,
    FILTER: () => zA,
    FLEX: () => rw,
    FONT_VARIATION_SETTINGS: () => KA,
    HEIGHT: () => $A,
    HTML_ELEMENT: () => pw,
    IMMEDIATE_CHILDREN: () => cw,
    IX2_ID_DELIMITER: () => yA,
    OPACITY: () => jA,
    PARENT: () => fw,
    PLAIN_OBJECT: () => vw,
    PRESERVE_3D: () => dw,
    RENDER_GENERAL: () => Ew,
    RENDER_PLUGIN: () => mw,
    RENDER_STYLE: () => yw,
    RENDER_TRANSFORM: () => hw,
    ROTATE_X: () => UA,
    ROTATE_Y: () => HA,
    ROTATE_Z: () => WA,
    SCALE_3D: () => VA,
    SCALE_X: () => DA,
    SCALE_Y: () => FA,
    SCALE_Z: () => GA,
    SIBLINGS: () => lw,
    SKEW: () => kA,
    SKEW_X: () => XA,
    SKEW_Y: () => BA,
    TRANSFORM: () => LA,
    TRANSLATE_3D: () => MA,
    TRANSLATE_X: () => NA,
    TRANSLATE_Y: () => PA,
    TRANSLATE_Z: () => qA,
    WF_PAGE: () => mA,
    WIDTH: () => YA,
    WILL_CHANGE: () => nw,
    W_MOD_IX: () => TA,
    W_MOD_JS: () => _A,
  });
  var yA,
    mA,
    _A,
    TA,
    bA,
    IA,
    OA,
    xA,
    AA,
    wA,
    SA,
    RA,
    CA,
    LA,
    NA,
    PA,
    qA,
    MA,
    DA,
    FA,
    GA,
    VA,
    UA,
    HA,
    WA,
    kA,
    XA,
    BA,
    jA,
    zA,
    KA,
    YA,
    $A,
    QA,
    ZA,
    JA,
    ew,
    tw,
    rw,
    nw,
    iw,
    ow,
    aw,
    sw,
    uw,
    cw,
    lw,
    fw,
    dw,
    pw,
    vw,
    gw,
    hw,
    Ew,
    yw,
    mw,
    If = he(() => {
      "use strict";
      (yA = "|"),
        (mA = "data-wf-page"),
        (_A = "w-mod-js"),
        (TA = "w-mod-ix"),
        (bA = ".w-dyn-item"),
        (IA = "xValue"),
        (OA = "yValue"),
        (xA = "zValue"),
        (AA = "value"),
        (wA = "xUnit"),
        (SA = "yUnit"),
        (RA = "zUnit"),
        (CA = "unit"),
        (LA = "transform"),
        (NA = "translateX"),
        (PA = "translateY"),
        (qA = "translateZ"),
        (MA = "translate3d"),
        (DA = "scaleX"),
        (FA = "scaleY"),
        (GA = "scaleZ"),
        (VA = "scale3d"),
        (UA = "rotateX"),
        (HA = "rotateY"),
        (WA = "rotateZ"),
        (kA = "skew"),
        (XA = "skewX"),
        (BA = "skewY"),
        (jA = "opacity"),
        (zA = "filter"),
        (KA = "font-variation-settings"),
        (YA = "width"),
        ($A = "height"),
        (QA = "backgroundColor"),
        (ZA = "background"),
        (JA = "borderColor"),
        (ew = "color"),
        (tw = "display"),
        (rw = "flex"),
        (nw = "willChange"),
        (iw = "AUTO"),
        (ow = ","),
        (aw = ":"),
        (sw = "|"),
        (uw = "CHILDREN"),
        (cw = "IMMEDIATE_CHILDREN"),
        (lw = "SIBLINGS"),
        (fw = "PARENT"),
        (dw = "preserve-3d"),
        (pw = "HTML_ELEMENT"),
        (vw = "PLAIN_OBJECT"),
        (gw = "ABSTRACT_NODE"),
        (hw = "RENDER_TRANSFORM"),
        (Ew = "RENDER_GENERAL"),
        (yw = "RENDER_STYLE"),
        (mw = "RENDER_PLUGIN");
    });
  var Of = {};
  De(Of, {
    ActionAppliesTo: () => kx,
    ActionTypeConsts: () => We,
    EventAppliesTo: () => ko,
    EventBasedOn: () => at,
    EventContinuousMouseAxes: () => Ux,
    EventLimitAffectedElements: () => Hx,
    EventTypeConsts: () => Qe,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Re,
    InteractionTypeConsts: () => Xx,
    QuickEffectDirectionConsts: () => Wx,
    QuickEffectIds: () => Xo,
    ReducedMotionTypes: () => jo,
  });
  var Fe = he(() => {
    "use strict";
    mf();
    Bo();
    _f();
    Tf();
    bf();
    If();
  });
  var _w,
    xf,
    Af = he(() => {
      "use strict";
      Fe();
      ({ IX2_RAW_DATA_IMPORTED: _w } = Ie),
        (xf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case _w:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var $t = c((me) => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    var Tw =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    me.clone = wn;
    me.addLast = Rf;
    me.addFirst = Cf;
    me.removeLast = Lf;
    me.removeFirst = Nf;
    me.insert = Pf;
    me.removeAt = qf;
    me.replaceAt = Mf;
    me.getIn = Sn;
    me.set = Rn;
    me.setIn = Cn;
    me.update = Ff;
    me.updateIn = Gf;
    me.merge = Vf;
    me.mergeDeep = Uf;
    me.mergeIn = Hf;
    me.omit = Wf;
    me.addDefaults = kf;
    var wf = "INVALID_ARGS";
    function Sf(e) {
      throw new Error(e);
    }
    function zo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var bw = {}.hasOwnProperty;
    function wn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = zo(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        r[o] = e[o];
      }
      return r;
    }
    function Ge(e, t, r) {
      var n = r;
      n == null && Sf(wf);
      for (
        var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (d != null) {
          var h = zo(d);
          if (h.length)
            for (var v = 0; v <= h.length; v++) {
              var E = h[v];
              if (!(e && n[E] !== void 0)) {
                var m = d[E];
                t && An(n[E]) && An(m) && (m = Ge(e, t, n[E], m)),
                  !(m === void 0 || m === n[E]) &&
                    (o || ((o = !0), (n = wn(n))), (n[E] = m));
              }
            }
        }
      }
      return n;
    }
    function An(e) {
      var t = typeof e > "u" ? "undefined" : Tw(e);
      return e != null && (t === "object" || t === "function");
    }
    function Rf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Cf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Lf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Nf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Pf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function qf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Mf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
      return (o[t] = r), o;
    }
    function Sn(e, t) {
      if ((!Array.isArray(t) && Sf(wf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var o = t[n];
          if (((r = r?.[o]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Rn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        o = e ?? n;
      if (o[t] === r) return o;
      var i = wn(o);
      return (i[t] = r), i;
    }
    function Df(e, t, r, n) {
      var o = void 0,
        i = t[n];
      if (n === t.length - 1) o = r;
      else {
        var a =
          An(e) && An(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
        o = Df(a, t, r, n + 1);
      }
      return Rn(e, i, o);
    }
    function Cn(e, t, r) {
      return t.length ? Df(e, t, r, 0) : r;
    }
    function Ff(e, t, r) {
      var n = e?.[t],
        o = r(n);
      return Rn(e, t, o);
    }
    function Gf(e, t, r) {
      var n = Sn(e, t),
        o = r(n);
      return Cn(e, t, o);
    }
    function Vf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ge.call.apply(Ge, [null, !1, !1, e, t, r, n, o, i].concat(s))
        : Ge(!1, !1, e, t, r, n, o, i);
    }
    function Uf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ge.call.apply(Ge, [null, !1, !0, e, t, r, n, o, i].concat(s))
        : Ge(!1, !0, e, t, r, n, o, i);
    }
    function Hf(e, t, r, n, o, i, a) {
      var s = Sn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          d = arguments.length,
          h = Array(d > 7 ? d - 7 : 0),
          v = 7;
        v < d;
        v++
      )
        h[v - 7] = arguments[v];
      return (
        h.length
          ? (u = Ge.call.apply(Ge, [null, !1, !1, s, r, n, o, i, a].concat(h)))
          : (u = Ge(!1, !1, s, r, n, o, i, a)),
        Cn(e, t, u)
      );
    }
    function Wf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
        if (bw.call(e, r[o])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var i = {}, a = zo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (i[u] = e[u]);
      }
      return i;
    }
    function kf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ge.call.apply(Ge, [null, !0, !1, e, t, r, n, o, i].concat(s))
        : Ge(!0, !1, e, t, r, n, o, i);
    }
    var Iw = {
      clone: wn,
      addLast: Rf,
      addFirst: Cf,
      removeLast: Lf,
      removeFirst: Nf,
      insert: Pf,
      removeAt: qf,
      replaceAt: Mf,
      getIn: Sn,
      set: Rn,
      setIn: Cn,
      update: Ff,
      updateIn: Gf,
      merge: Vf,
      mergeDeep: Uf,
      mergeIn: Hf,
      omit: Wf,
      addDefaults: kf,
    };
    me.default = Iw;
  });
  var Bf,
    Ow,
    xw,
    Aw,
    ww,
    Sw,
    Xf,
    jf,
    zf = he(() => {
      "use strict";
      Fe();
      (Bf = ce($t())),
        ({
          IX2_PREVIEW_REQUESTED: Ow,
          IX2_PLAYBACK_REQUESTED: xw,
          IX2_STOP_REQUESTED: Aw,
          IX2_CLEAR_REQUESTED: ww,
        } = Ie),
        (Sw = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Xf = Object.create(null, {
          [Ow]: { value: "preview" },
          [xw]: { value: "playback" },
          [Aw]: { value: "stop" },
          [ww]: { value: "clear" },
        })),
        (jf = (e = Sw, t) => {
          if (t.type in Xf) {
            let r = [Xf[t.type]];
            return (0, Bf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ne,
    Rw,
    Cw,
    Lw,
    Nw,
    Pw,
    qw,
    Mw,
    Dw,
    Fw,
    Gw,
    Kf,
    Vw,
    Yf,
    $f = he(() => {
      "use strict";
      Fe();
      (Ne = ce($t())),
        ({
          IX2_SESSION_INITIALIZED: Rw,
          IX2_SESSION_STARTED: Cw,
          IX2_TEST_FRAME_RENDERED: Lw,
          IX2_SESSION_STOPPED: Nw,
          IX2_EVENT_LISTENER_ADDED: Pw,
          IX2_EVENT_STATE_CHANGED: qw,
          IX2_ANIMATION_FRAME_CHANGED: Mw,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Dw,
          IX2_VIEWPORT_WIDTH_CHANGED: Fw,
          IX2_MEDIA_QUERIES_DEFINED: Gw,
        } = Ie),
        (Kf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (Vw = 20),
        (Yf = (e = Kf, t) => {
          switch (t.type) {
            case Rw: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ne.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case Cw:
              return (0, Ne.set)(e, "active", !0);
            case Lw: {
              let {
                payload: { step: r = Vw },
              } = t;
              return (0, Ne.set)(e, "tick", e.tick + r);
            }
            case Nw:
              return Kf;
            case Mw: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ne.set)(e, "tick", r);
            }
            case Pw: {
              let r = (0, Ne.addLast)(e.eventListeners, t.payload);
              return (0, Ne.set)(e, "eventListeners", r);
            }
            case qw: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ne.setIn)(e, ["eventState", r], n);
            }
            case Dw: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ne.setIn)(e, ["playbackState", r], n);
            }
            case Fw: {
              let { width: r, mediaQueries: n } = t.payload,
                o = n.length,
                i = null;
              for (let a = 0; a < o; a++) {
                let { key: s, min: u, max: d } = n[a];
                if (r >= u && r <= d) {
                  i = s;
                  break;
                }
              }
              return (0, Ne.merge)(e, { viewportWidth: r, mediaQueryKey: i });
            }
            case Gw:
              return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Zf = c((jk, Qf) => {
    function Uw() {
      (this.__data__ = []), (this.size = 0);
    }
    Qf.exports = Uw;
  });
  var Ln = c((zk, Jf) => {
    function Hw(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Jf.exports = Hw;
  });
  var Pr = c((Kk, ed) => {
    var Ww = Ln();
    function kw(e, t) {
      for (var r = e.length; r--; ) if (Ww(e[r][0], t)) return r;
      return -1;
    }
    ed.exports = kw;
  });
  var rd = c((Yk, td) => {
    var Xw = Pr(),
      Bw = Array.prototype,
      jw = Bw.splice;
    function zw(e) {
      var t = this.__data__,
        r = Xw(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : jw.call(t, r, 1), --this.size, !0;
    }
    td.exports = zw;
  });
  var id = c(($k, nd) => {
    var Kw = Pr();
    function Yw(e) {
      var t = this.__data__,
        r = Kw(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    nd.exports = Yw;
  });
  var ad = c((Qk, od) => {
    var $w = Pr();
    function Qw(e) {
      return $w(this.__data__, e) > -1;
    }
    od.exports = Qw;
  });
  var ud = c((Zk, sd) => {
    var Zw = Pr();
    function Jw(e, t) {
      var r = this.__data__,
        n = Zw(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    sd.exports = Jw;
  });
  var qr = c((Jk, cd) => {
    var eS = Zf(),
      tS = rd(),
      rS = id(),
      nS = ad(),
      iS = ud();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = eS;
    Qt.prototype.delete = tS;
    Qt.prototype.get = rS;
    Qt.prototype.has = nS;
    Qt.prototype.set = iS;
    cd.exports = Qt;
  });
  var fd = c((eX, ld) => {
    var oS = qr();
    function aS() {
      (this.__data__ = new oS()), (this.size = 0);
    }
    ld.exports = aS;
  });
  var pd = c((tX, dd) => {
    function sS(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    dd.exports = sS;
  });
  var gd = c((rX, vd) => {
    function uS(e) {
      return this.__data__.get(e);
    }
    vd.exports = uS;
  });
  var Ed = c((nX, hd) => {
    function cS(e) {
      return this.__data__.has(e);
    }
    hd.exports = cS;
  });
  var st = c((iX, yd) => {
    function lS(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    yd.exports = lS;
  });
  var Ko = c((oX, md) => {
    var fS = It(),
      dS = st(),
      pS = "[object AsyncFunction]",
      vS = "[object Function]",
      gS = "[object GeneratorFunction]",
      hS = "[object Proxy]";
    function ES(e) {
      if (!dS(e)) return !1;
      var t = fS(e);
      return t == vS || t == gS || t == pS || t == hS;
    }
    md.exports = ES;
  });
  var Td = c((aX, _d) => {
    var yS = $e(),
      mS = yS["__core-js_shared__"];
    _d.exports = mS;
  });
  var Od = c((sX, Id) => {
    var Yo = Td(),
      bd = (function () {
        var e = /[^.]+$/.exec((Yo && Yo.keys && Yo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function _S(e) {
      return !!bd && bd in e;
    }
    Id.exports = _S;
  });
  var $o = c((uX, xd) => {
    var TS = Function.prototype,
      bS = TS.toString;
    function IS(e) {
      if (e != null) {
        try {
          return bS.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    xd.exports = IS;
  });
  var wd = c((cX, Ad) => {
    var OS = Ko(),
      xS = Od(),
      AS = st(),
      wS = $o(),
      SS = /[\\^$.*+?()[\]{}|]/g,
      RS = /^\[object .+?Constructor\]$/,
      CS = Function.prototype,
      LS = Object.prototype,
      NS = CS.toString,
      PS = LS.hasOwnProperty,
      qS = RegExp(
        "^" +
          NS.call(PS)
            .replace(SS, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function MS(e) {
      if (!AS(e) || xS(e)) return !1;
      var t = OS(e) ? qS : RS;
      return t.test(wS(e));
    }
    Ad.exports = MS;
  });
  var Rd = c((lX, Sd) => {
    function DS(e, t) {
      return e?.[t];
    }
    Sd.exports = DS;
  });
  var Ot = c((fX, Cd) => {
    var FS = wd(),
      GS = Rd();
    function VS(e, t) {
      var r = GS(e, t);
      return FS(r) ? r : void 0;
    }
    Cd.exports = VS;
  });
  var Nn = c((dX, Ld) => {
    var US = Ot(),
      HS = $e(),
      WS = US(HS, "Map");
    Ld.exports = WS;
  });
  var Mr = c((pX, Nd) => {
    var kS = Ot(),
      XS = kS(Object, "create");
    Nd.exports = XS;
  });
  var Md = c((vX, qd) => {
    var Pd = Mr();
    function BS() {
      (this.__data__ = Pd ? Pd(null) : {}), (this.size = 0);
    }
    qd.exports = BS;
  });
  var Fd = c((gX, Dd) => {
    function jS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Dd.exports = jS;
  });
  var Vd = c((hX, Gd) => {
    var zS = Mr(),
      KS = "__lodash_hash_undefined__",
      YS = Object.prototype,
      $S = YS.hasOwnProperty;
    function QS(e) {
      var t = this.__data__;
      if (zS) {
        var r = t[e];
        return r === KS ? void 0 : r;
      }
      return $S.call(t, e) ? t[e] : void 0;
    }
    Gd.exports = QS;
  });
  var Hd = c((EX, Ud) => {
    var ZS = Mr(),
      JS = Object.prototype,
      e0 = JS.hasOwnProperty;
    function t0(e) {
      var t = this.__data__;
      return ZS ? t[e] !== void 0 : e0.call(t, e);
    }
    Ud.exports = t0;
  });
  var kd = c((yX, Wd) => {
    var r0 = Mr(),
      n0 = "__lodash_hash_undefined__";
    function i0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = r0 && t === void 0 ? n0 : t),
        this
      );
    }
    Wd.exports = i0;
  });
  var Bd = c((mX, Xd) => {
    var o0 = Md(),
      a0 = Fd(),
      s0 = Vd(),
      u0 = Hd(),
      c0 = kd();
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = o0;
    Zt.prototype.delete = a0;
    Zt.prototype.get = s0;
    Zt.prototype.has = u0;
    Zt.prototype.set = c0;
    Xd.exports = Zt;
  });
  var Kd = c((_X, zd) => {
    var jd = Bd(),
      l0 = qr(),
      f0 = Nn();
    function d0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new jd(),
          map: new (f0 || l0)(),
          string: new jd(),
        });
    }
    zd.exports = d0;
  });
  var $d = c((TX, Yd) => {
    function p0(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Yd.exports = p0;
  });
  var Dr = c((bX, Qd) => {
    var v0 = $d();
    function g0(e, t) {
      var r = e.__data__;
      return v0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Qd.exports = g0;
  });
  var Jd = c((IX, Zd) => {
    var h0 = Dr();
    function E0(e) {
      var t = h0(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Zd.exports = E0;
  });
  var tp = c((OX, ep) => {
    var y0 = Dr();
    function m0(e) {
      return y0(this, e).get(e);
    }
    ep.exports = m0;
  });
  var np = c((xX, rp) => {
    var _0 = Dr();
    function T0(e) {
      return _0(this, e).has(e);
    }
    rp.exports = T0;
  });
  var op = c((AX, ip) => {
    var b0 = Dr();
    function I0(e, t) {
      var r = b0(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    ip.exports = I0;
  });
  var Pn = c((wX, ap) => {
    var O0 = Kd(),
      x0 = Jd(),
      A0 = tp(),
      w0 = np(),
      S0 = op();
    function Jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Jt.prototype.clear = O0;
    Jt.prototype.delete = x0;
    Jt.prototype.get = A0;
    Jt.prototype.has = w0;
    Jt.prototype.set = S0;
    ap.exports = Jt;
  });
  var up = c((SX, sp) => {
    var R0 = qr(),
      C0 = Nn(),
      L0 = Pn(),
      N0 = 200;
    function P0(e, t) {
      var r = this.__data__;
      if (r instanceof R0) {
        var n = r.__data__;
        if (!C0 || n.length < N0 - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new L0(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    sp.exports = P0;
  });
  var Qo = c((RX, cp) => {
    var q0 = qr(),
      M0 = fd(),
      D0 = pd(),
      F0 = gd(),
      G0 = Ed(),
      V0 = up();
    function er(e) {
      var t = (this.__data__ = new q0(e));
      this.size = t.size;
    }
    er.prototype.clear = M0;
    er.prototype.delete = D0;
    er.prototype.get = F0;
    er.prototype.has = G0;
    er.prototype.set = V0;
    cp.exports = er;
  });
  var fp = c((CX, lp) => {
    var U0 = "__lodash_hash_undefined__";
    function H0(e) {
      return this.__data__.set(e, U0), this;
    }
    lp.exports = H0;
  });
  var pp = c((LX, dp) => {
    function W0(e) {
      return this.__data__.has(e);
    }
    dp.exports = W0;
  });
  var gp = c((NX, vp) => {
    var k0 = Pn(),
      X0 = fp(),
      B0 = pp();
    function qn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new k0(); ++t < r; ) this.add(e[t]);
    }
    qn.prototype.add = qn.prototype.push = X0;
    qn.prototype.has = B0;
    vp.exports = qn;
  });
  var Ep = c((PX, hp) => {
    function j0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    hp.exports = j0;
  });
  var mp = c((qX, yp) => {
    function z0(e, t) {
      return e.has(t);
    }
    yp.exports = z0;
  });
  var Zo = c((MX, _p) => {
    var K0 = gp(),
      Y0 = Ep(),
      $0 = mp(),
      Q0 = 1,
      Z0 = 2;
    function J0(e, t, r, n, o, i) {
      var a = r & Q0,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var d = i.get(e),
        h = i.get(t);
      if (d && h) return d == t && h == e;
      var v = -1,
        E = !0,
        m = r & Z0 ? new K0() : void 0;
      for (i.set(e, t), i.set(t, e); ++v < s; ) {
        var b = e[v],
          _ = t[v];
        if (n) var q = a ? n(_, b, v, t, e, i) : n(b, _, v, e, t, i);
        if (q !== void 0) {
          if (q) continue;
          E = !1;
          break;
        }
        if (m) {
          if (
            !Y0(t, function (x, S) {
              if (!$0(m, S) && (b === x || o(b, x, r, n, i))) return m.push(S);
            })
          ) {
            E = !1;
            break;
          }
        } else if (!(b === _ || o(b, _, r, n, i))) {
          E = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), E;
    }
    _p.exports = J0;
  });
  var bp = c((DX, Tp) => {
    var eR = $e(),
      tR = eR.Uint8Array;
    Tp.exports = tR;
  });
  var Op = c((FX, Ip) => {
    function rR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, o) {
          r[++t] = [o, n];
        }),
        r
      );
    }
    Ip.exports = rR;
  });
  var Ap = c((GX, xp) => {
    function nR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    xp.exports = nR;
  });
  var Lp = c((VX, Cp) => {
    var wp = zt(),
      Sp = bp(),
      iR = Ln(),
      oR = Zo(),
      aR = Op(),
      sR = Ap(),
      uR = 1,
      cR = 2,
      lR = "[object Boolean]",
      fR = "[object Date]",
      dR = "[object Error]",
      pR = "[object Map]",
      vR = "[object Number]",
      gR = "[object RegExp]",
      hR = "[object Set]",
      ER = "[object String]",
      yR = "[object Symbol]",
      mR = "[object ArrayBuffer]",
      _R = "[object DataView]",
      Rp = wp ? wp.prototype : void 0,
      Jo = Rp ? Rp.valueOf : void 0;
    function TR(e, t, r, n, o, i, a) {
      switch (r) {
        case _R:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case mR:
          return !(e.byteLength != t.byteLength || !i(new Sp(e), new Sp(t)));
        case lR:
        case fR:
        case vR:
          return iR(+e, +t);
        case dR:
          return e.name == t.name && e.message == t.message;
        case gR:
        case ER:
          return e == t + "";
        case pR:
          var s = aR;
        case hR:
          var u = n & uR;
          if ((s || (s = sR), e.size != t.size && !u)) return !1;
          var d = a.get(e);
          if (d) return d == t;
          (n |= cR), a.set(e, t);
          var h = oR(s(e), s(t), n, o, i, a);
          return a.delete(e), h;
        case yR:
          if (Jo) return Jo.call(e) == Jo.call(t);
      }
      return !1;
    }
    Cp.exports = TR;
  });
  var Mn = c((UX, Np) => {
    function bR(e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
      return e;
    }
    Np.exports = bR;
  });
  var xe = c((HX, Pp) => {
    var IR = Array.isArray;
    Pp.exports = IR;
  });
  var ea = c((WX, qp) => {
    var OR = Mn(),
      xR = xe();
    function AR(e, t, r) {
      var n = t(e);
      return xR(e) ? n : OR(n, r(e));
    }
    qp.exports = AR;
  });
  var Dp = c((kX, Mp) => {
    function wR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (i[o++] = a);
      }
      return i;
    }
    Mp.exports = wR;
  });
  var ta = c((XX, Fp) => {
    function SR() {
      return [];
    }
    Fp.exports = SR;
  });
  var ra = c((BX, Vp) => {
    var RR = Dp(),
      CR = ta(),
      LR = Object.prototype,
      NR = LR.propertyIsEnumerable,
      Gp = Object.getOwnPropertySymbols,
      PR = Gp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                RR(Gp(e), function (t) {
                  return NR.call(e, t);
                }));
          }
        : CR;
    Vp.exports = PR;
  });
  var Hp = c((jX, Up) => {
    function qR(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Up.exports = qR;
  });
  var kp = c((zX, Wp) => {
    var MR = It(),
      DR = vt(),
      FR = "[object Arguments]";
    function GR(e) {
      return DR(e) && MR(e) == FR;
    }
    Wp.exports = GR;
  });
  var Fr = c((KX, jp) => {
    var Xp = kp(),
      VR = vt(),
      Bp = Object.prototype,
      UR = Bp.hasOwnProperty,
      HR = Bp.propertyIsEnumerable,
      WR = Xp(
        (function () {
          return arguments;
        })()
      )
        ? Xp
        : function (e) {
            return VR(e) && UR.call(e, "callee") && !HR.call(e, "callee");
          };
    jp.exports = WR;
  });
  var Kp = c((YX, zp) => {
    function kR() {
      return !1;
    }
    zp.exports = kR;
  });
  var Dn = c((Gr, tr) => {
    var XR = $e(),
      BR = Kp(),
      Qp = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
      Yp = Qp && typeof tr == "object" && tr && !tr.nodeType && tr,
      jR = Yp && Yp.exports === Qp,
      $p = jR ? XR.Buffer : void 0,
      zR = $p ? $p.isBuffer : void 0,
      KR = zR || BR;
    tr.exports = KR;
  });
  var Fn = c(($X, Zp) => {
    var YR = 9007199254740991,
      $R = /^(?:0|[1-9]\d*)$/;
    function QR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? YR),
        !!t &&
          (r == "number" || (r != "symbol" && $R.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Zp.exports = QR;
  });
  var Gn = c((QX, Jp) => {
    var ZR = 9007199254740991;
    function JR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ZR;
    }
    Jp.exports = JR;
  });
  var tv = c((ZX, ev) => {
    var eC = It(),
      tC = Gn(),
      rC = vt(),
      nC = "[object Arguments]",
      iC = "[object Array]",
      oC = "[object Boolean]",
      aC = "[object Date]",
      sC = "[object Error]",
      uC = "[object Function]",
      cC = "[object Map]",
      lC = "[object Number]",
      fC = "[object Object]",
      dC = "[object RegExp]",
      pC = "[object Set]",
      vC = "[object String]",
      gC = "[object WeakMap]",
      hC = "[object ArrayBuffer]",
      EC = "[object DataView]",
      yC = "[object Float32Array]",
      mC = "[object Float64Array]",
      _C = "[object Int8Array]",
      TC = "[object Int16Array]",
      bC = "[object Int32Array]",
      IC = "[object Uint8Array]",
      OC = "[object Uint8ClampedArray]",
      xC = "[object Uint16Array]",
      AC = "[object Uint32Array]",
      ve = {};
    ve[yC] =
      ve[mC] =
      ve[_C] =
      ve[TC] =
      ve[bC] =
      ve[IC] =
      ve[OC] =
      ve[xC] =
      ve[AC] =
        !0;
    ve[nC] =
      ve[iC] =
      ve[hC] =
      ve[oC] =
      ve[EC] =
      ve[aC] =
      ve[sC] =
      ve[uC] =
      ve[cC] =
      ve[lC] =
      ve[fC] =
      ve[dC] =
      ve[pC] =
      ve[vC] =
      ve[gC] =
        !1;
    function wC(e) {
      return rC(e) && tC(e.length) && !!ve[eC(e)];
    }
    ev.exports = wC;
  });
  var nv = c((JX, rv) => {
    function SC(e) {
      return function (t) {
        return e(t);
      };
    }
    rv.exports = SC;
  });
  var ov = c((Vr, rr) => {
    var RC = wo(),
      iv = typeof Vr == "object" && Vr && !Vr.nodeType && Vr,
      Ur = iv && typeof rr == "object" && rr && !rr.nodeType && rr,
      CC = Ur && Ur.exports === iv,
      na = CC && RC.process,
      LC = (function () {
        try {
          var e = Ur && Ur.require && Ur.require("util").types;
          return e || (na && na.binding && na.binding("util"));
        } catch {}
      })();
    rr.exports = LC;
  });
  var Vn = c((e5, uv) => {
    var NC = tv(),
      PC = nv(),
      av = ov(),
      sv = av && av.isTypedArray,
      qC = sv ? PC(sv) : NC;
    uv.exports = qC;
  });
  var ia = c((t5, cv) => {
    var MC = Hp(),
      DC = Fr(),
      FC = xe(),
      GC = Dn(),
      VC = Fn(),
      UC = Vn(),
      HC = Object.prototype,
      WC = HC.hasOwnProperty;
    function kC(e, t) {
      var r = FC(e),
        n = !r && DC(e),
        o = !r && !n && GC(e),
        i = !r && !n && !o && UC(e),
        a = r || n || o || i,
        s = a ? MC(e.length, String) : [],
        u = s.length;
      for (var d in e)
        (t || WC.call(e, d)) &&
          !(
            a &&
            (d == "length" ||
              (o && (d == "offset" || d == "parent")) ||
              (i &&
                (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              VC(d, u))
          ) &&
          s.push(d);
      return s;
    }
    cv.exports = kC;
  });
  var Un = c((r5, lv) => {
    var XC = Object.prototype;
    function BC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || XC;
      return e === r;
    }
    lv.exports = BC;
  });
  var dv = c((n5, fv) => {
    var jC = So(),
      zC = jC(Object.keys, Object);
    fv.exports = zC;
  });
  var Hn = c((i5, pv) => {
    var KC = Un(),
      YC = dv(),
      $C = Object.prototype,
      QC = $C.hasOwnProperty;
    function ZC(e) {
      if (!KC(e)) return YC(e);
      var t = [];
      for (var r in Object(e)) QC.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    pv.exports = ZC;
  });
  var qt = c((o5, vv) => {
    var JC = Ko(),
      eL = Gn();
    function tL(e) {
      return e != null && eL(e.length) && !JC(e);
    }
    vv.exports = tL;
  });
  var Hr = c((a5, gv) => {
    var rL = ia(),
      nL = Hn(),
      iL = qt();
    function oL(e) {
      return iL(e) ? rL(e) : nL(e);
    }
    gv.exports = oL;
  });
  var Ev = c((s5, hv) => {
    var aL = ea(),
      sL = ra(),
      uL = Hr();
    function cL(e) {
      return aL(e, uL, sL);
    }
    hv.exports = cL;
  });
  var _v = c((u5, mv) => {
    var yv = Ev(),
      lL = 1,
      fL = Object.prototype,
      dL = fL.hasOwnProperty;
    function pL(e, t, r, n, o, i) {
      var a = r & lL,
        s = yv(e),
        u = s.length,
        d = yv(t),
        h = d.length;
      if (u != h && !a) return !1;
      for (var v = u; v--; ) {
        var E = s[v];
        if (!(a ? E in t : dL.call(t, E))) return !1;
      }
      var m = i.get(e),
        b = i.get(t);
      if (m && b) return m == t && b == e;
      var _ = !0;
      i.set(e, t), i.set(t, e);
      for (var q = a; ++v < u; ) {
        E = s[v];
        var x = e[E],
          S = t[E];
        if (n) var O = a ? n(S, x, E, t, e, i) : n(x, S, E, e, t, i);
        if (!(O === void 0 ? x === S || o(x, S, r, n, i) : O)) {
          _ = !1;
          break;
        }
        q || (q = E == "constructor");
      }
      if (_ && !q) {
        var w = e.constructor,
          L = t.constructor;
        w != L &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof w == "function" &&
            w instanceof w &&
            typeof L == "function" &&
            L instanceof L
          ) &&
          (_ = !1);
      }
      return i.delete(e), i.delete(t), _;
    }
    mv.exports = pL;
  });
  var bv = c((c5, Tv) => {
    var vL = Ot(),
      gL = $e(),
      hL = vL(gL, "DataView");
    Tv.exports = hL;
  });
  var Ov = c((l5, Iv) => {
    var EL = Ot(),
      yL = $e(),
      mL = EL(yL, "Promise");
    Iv.exports = mL;
  });
  var Av = c((f5, xv) => {
    var _L = Ot(),
      TL = $e(),
      bL = _L(TL, "Set");
    xv.exports = bL;
  });
  var oa = c((d5, wv) => {
    var IL = Ot(),
      OL = $e(),
      xL = IL(OL, "WeakMap");
    wv.exports = xL;
  });
  var Wn = c((p5, qv) => {
    var aa = bv(),
      sa = Nn(),
      ua = Ov(),
      ca = Av(),
      la = oa(),
      Pv = It(),
      nr = $o(),
      Sv = "[object Map]",
      AL = "[object Object]",
      Rv = "[object Promise]",
      Cv = "[object Set]",
      Lv = "[object WeakMap]",
      Nv = "[object DataView]",
      wL = nr(aa),
      SL = nr(sa),
      RL = nr(ua),
      CL = nr(ca),
      LL = nr(la),
      Mt = Pv;
    ((aa && Mt(new aa(new ArrayBuffer(1))) != Nv) ||
      (sa && Mt(new sa()) != Sv) ||
      (ua && Mt(ua.resolve()) != Rv) ||
      (ca && Mt(new ca()) != Cv) ||
      (la && Mt(new la()) != Lv)) &&
      (Mt = function (e) {
        var t = Pv(e),
          r = t == AL ? e.constructor : void 0,
          n = r ? nr(r) : "";
        if (n)
          switch (n) {
            case wL:
              return Nv;
            case SL:
              return Sv;
            case RL:
              return Rv;
            case CL:
              return Cv;
            case LL:
              return Lv;
          }
        return t;
      });
    qv.exports = Mt;
  });
  var Wv = c((v5, Hv) => {
    var fa = Qo(),
      NL = Zo(),
      PL = Lp(),
      qL = _v(),
      Mv = Wn(),
      Dv = xe(),
      Fv = Dn(),
      ML = Vn(),
      DL = 1,
      Gv = "[object Arguments]",
      Vv = "[object Array]",
      kn = "[object Object]",
      FL = Object.prototype,
      Uv = FL.hasOwnProperty;
    function GL(e, t, r, n, o, i) {
      var a = Dv(e),
        s = Dv(t),
        u = a ? Vv : Mv(e),
        d = s ? Vv : Mv(t);
      (u = u == Gv ? kn : u), (d = d == Gv ? kn : d);
      var h = u == kn,
        v = d == kn,
        E = u == d;
      if (E && Fv(e)) {
        if (!Fv(t)) return !1;
        (a = !0), (h = !1);
      }
      if (E && !h)
        return (
          i || (i = new fa()),
          a || ML(e) ? NL(e, t, r, n, o, i) : PL(e, t, u, r, n, o, i)
        );
      if (!(r & DL)) {
        var m = h && Uv.call(e, "__wrapped__"),
          b = v && Uv.call(t, "__wrapped__");
        if (m || b) {
          var _ = m ? e.value() : e,
            q = b ? t.value() : t;
          return i || (i = new fa()), o(_, q, r, n, i);
        }
      }
      return E ? (i || (i = new fa()), qL(e, t, r, n, o, i)) : !1;
    }
    Hv.exports = GL;
  });
  var da = c((g5, Bv) => {
    var VL = Wv(),
      kv = vt();
    function Xv(e, t, r, n, o) {
      return e === t
        ? !0
        : e == null || t == null || (!kv(e) && !kv(t))
        ? e !== e && t !== t
        : VL(e, t, r, n, Xv, o);
    }
    Bv.exports = Xv;
  });
  var zv = c((h5, jv) => {
    var UL = Qo(),
      HL = da(),
      WL = 1,
      kL = 2;
    function XL(e, t, r, n) {
      var o = r.length,
        i = o,
        a = !n;
      if (e == null) return !i;
      for (e = Object(e); o--; ) {
        var s = r[o];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++o < i; ) {
        s = r[o];
        var u = s[0],
          d = e[u],
          h = s[1];
        if (a && s[2]) {
          if (d === void 0 && !(u in e)) return !1;
        } else {
          var v = new UL();
          if (n) var E = n(d, h, u, e, t, v);
          if (!(E === void 0 ? HL(h, d, WL | kL, n, v) : E)) return !1;
        }
      }
      return !0;
    }
    jv.exports = XL;
  });
  var pa = c((E5, Kv) => {
    var BL = st();
    function jL(e) {
      return e === e && !BL(e);
    }
    Kv.exports = jL;
  });
  var $v = c((y5, Yv) => {
    var zL = pa(),
      KL = Hr();
    function YL(e) {
      for (var t = KL(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, zL(o)];
      }
      return t;
    }
    Yv.exports = YL;
  });
  var va = c((m5, Qv) => {
    function $L(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Qv.exports = $L;
  });
  var Jv = c((_5, Zv) => {
    var QL = zv(),
      ZL = $v(),
      JL = va();
    function eN(e) {
      var t = ZL(e);
      return t.length == 1 && t[0][2]
        ? JL(t[0][0], t[0][1])
        : function (r) {
            return r === e || QL(r, e, t);
          };
    }
    Zv.exports = eN;
  });
  var Wr = c((T5, eg) => {
    var tN = It(),
      rN = vt(),
      nN = "[object Symbol]";
    function iN(e) {
      return typeof e == "symbol" || (rN(e) && tN(e) == nN);
    }
    eg.exports = iN;
  });
  var Xn = c((b5, tg) => {
    var oN = xe(),
      aN = Wr(),
      sN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      uN = /^\w*$/;
    function cN(e, t) {
      if (oN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        aN(e)
        ? !0
        : uN.test(e) || !sN.test(e) || (t != null && e in Object(t));
    }
    tg.exports = cN;
  });
  var ig = c((I5, ng) => {
    var rg = Pn(),
      lN = "Expected a function";
    function ga(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(lN);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (ga.Cache || rg)()), r;
    }
    ga.Cache = rg;
    ng.exports = ga;
  });
  var ag = c((O5, og) => {
    var fN = ig(),
      dN = 500;
    function pN(e) {
      var t = fN(e, function (n) {
          return r.size === dN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    og.exports = pN;
  });
  var ug = c((x5, sg) => {
    var vN = ag(),
      gN =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      hN = /\\(\\)?/g,
      EN = vN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(gN, function (r, n, o, i) {
            t.push(o ? i.replace(hN, "$1") : n || r);
          }),
          t
        );
      });
    sg.exports = EN;
  });
  var ha = c((A5, cg) => {
    function yN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
      return o;
    }
    cg.exports = yN;
  });
  var gg = c((w5, vg) => {
    var lg = zt(),
      mN = ha(),
      _N = xe(),
      TN = Wr(),
      bN = 1 / 0,
      fg = lg ? lg.prototype : void 0,
      dg = fg ? fg.toString : void 0;
    function pg(e) {
      if (typeof e == "string") return e;
      if (_N(e)) return mN(e, pg) + "";
      if (TN(e)) return dg ? dg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -bN ? "-0" : t;
    }
    vg.exports = pg;
  });
  var Eg = c((S5, hg) => {
    var IN = gg();
    function ON(e) {
      return e == null ? "" : IN(e);
    }
    hg.exports = ON;
  });
  var kr = c((R5, yg) => {
    var xN = xe(),
      AN = Xn(),
      wN = ug(),
      SN = Eg();
    function RN(e, t) {
      return xN(e) ? e : AN(e, t) ? [e] : wN(SN(e));
    }
    yg.exports = RN;
  });
  var ir = c((C5, mg) => {
    var CN = Wr(),
      LN = 1 / 0;
    function NN(e) {
      if (typeof e == "string" || CN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -LN ? "-0" : t;
    }
    mg.exports = NN;
  });
  var Bn = c((L5, _g) => {
    var PN = kr(),
      qN = ir();
    function MN(e, t) {
      t = PN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[qN(t[r++])];
      return r && r == n ? e : void 0;
    }
    _g.exports = MN;
  });
  var jn = c((N5, Tg) => {
    var DN = Bn();
    function FN(e, t, r) {
      var n = e == null ? void 0 : DN(e, t);
      return n === void 0 ? r : n;
    }
    Tg.exports = FN;
  });
  var Ig = c((P5, bg) => {
    function GN(e, t) {
      return e != null && t in Object(e);
    }
    bg.exports = GN;
  });
  var xg = c((q5, Og) => {
    var VN = kr(),
      UN = Fr(),
      HN = xe(),
      WN = Fn(),
      kN = Gn(),
      XN = ir();
    function BN(e, t, r) {
      t = VN(t, e);
      for (var n = -1, o = t.length, i = !1; ++n < o; ) {
        var a = XN(t[n]);
        if (!(i = e != null && r(e, a))) break;
        e = e[a];
      }
      return i || ++n != o
        ? i
        : ((o = e == null ? 0 : e.length),
          !!o && kN(o) && WN(a, o) && (HN(e) || UN(e)));
    }
    Og.exports = BN;
  });
  var wg = c((M5, Ag) => {
    var jN = Ig(),
      zN = xg();
    function KN(e, t) {
      return e != null && zN(e, t, jN);
    }
    Ag.exports = KN;
  });
  var Rg = c((D5, Sg) => {
    var YN = da(),
      $N = jn(),
      QN = wg(),
      ZN = Xn(),
      JN = pa(),
      eP = va(),
      tP = ir(),
      rP = 1,
      nP = 2;
    function iP(e, t) {
      return ZN(e) && JN(t)
        ? eP(tP(e), t)
        : function (r) {
            var n = $N(r, e);
            return n === void 0 && n === t ? QN(r, e) : YN(t, n, rP | nP);
          };
    }
    Sg.exports = iP;
  });
  var zn = c((F5, Cg) => {
    function oP(e) {
      return e;
    }
    Cg.exports = oP;
  });
  var Ea = c((G5, Lg) => {
    function aP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Lg.exports = aP;
  });
  var Pg = c((V5, Ng) => {
    var sP = Bn();
    function uP(e) {
      return function (t) {
        return sP(t, e);
      };
    }
    Ng.exports = uP;
  });
  var Mg = c((U5, qg) => {
    var cP = Ea(),
      lP = Pg(),
      fP = Xn(),
      dP = ir();
    function pP(e) {
      return fP(e) ? cP(dP(e)) : lP(e);
    }
    qg.exports = pP;
  });
  var xt = c((H5, Dg) => {
    var vP = Jv(),
      gP = Rg(),
      hP = zn(),
      EP = xe(),
      yP = Mg();
    function mP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? hP
        : typeof e == "object"
        ? EP(e)
          ? gP(e[0], e[1])
          : vP(e)
        : yP(e);
    }
    Dg.exports = mP;
  });
  var ya = c((W5, Fg) => {
    var _P = xt(),
      TP = qt(),
      bP = Hr();
    function IP(e) {
      return function (t, r, n) {
        var o = Object(t);
        if (!TP(t)) {
          var i = _P(r, 3);
          (t = bP(t)),
            (r = function (s) {
              return i(o[s], s, o);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? o[i ? t[a] : a] : void 0;
      };
    }
    Fg.exports = IP;
  });
  var ma = c((k5, Gg) => {
    function OP(e, t, r, n) {
      for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    Gg.exports = OP;
  });
  var Ug = c((X5, Vg) => {
    var xP = /\s/;
    function AP(e) {
      for (var t = e.length; t-- && xP.test(e.charAt(t)); );
      return t;
    }
    Vg.exports = AP;
  });
  var Wg = c((B5, Hg) => {
    var wP = Ug(),
      SP = /^\s+/;
    function RP(e) {
      return e && e.slice(0, wP(e) + 1).replace(SP, "");
    }
    Hg.exports = RP;
  });
  var Kn = c((j5, Bg) => {
    var CP = Wg(),
      kg = st(),
      LP = Wr(),
      Xg = 0 / 0,
      NP = /^[-+]0x[0-9a-f]+$/i,
      PP = /^0b[01]+$/i,
      qP = /^0o[0-7]+$/i,
      MP = parseInt;
    function DP(e) {
      if (typeof e == "number") return e;
      if (LP(e)) return Xg;
      if (kg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = kg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = CP(e);
      var r = PP.test(e);
      return r || qP.test(e) ? MP(e.slice(2), r ? 2 : 8) : NP.test(e) ? Xg : +e;
    }
    Bg.exports = DP;
  });
  var Kg = c((z5, zg) => {
    var FP = Kn(),
      jg = 1 / 0,
      GP = 17976931348623157e292;
    function VP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = FP(e)), e === jg || e === -jg)) {
        var t = e < 0 ? -1 : 1;
        return t * GP;
      }
      return e === e ? e : 0;
    }
    zg.exports = VP;
  });
  var _a = c((K5, Yg) => {
    var UP = Kg();
    function HP(e) {
      var t = UP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Yg.exports = HP;
  });
  var Qg = c((Y5, $g) => {
    var WP = ma(),
      kP = xt(),
      XP = _a(),
      BP = Math.max;
    function jP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = r == null ? 0 : XP(r);
      return o < 0 && (o = BP(n + o, 0)), WP(e, kP(t, 3), o);
    }
    $g.exports = jP;
  });
  var Ta = c(($5, Zg) => {
    var zP = ya(),
      KP = Qg(),
      YP = zP(KP);
    Zg.exports = YP;
  });
  var th = {};
  De(th, {
    ELEMENT_MATCHES: () => $P,
    FLEX_PREFIXED: () => ba,
    IS_BROWSER_ENV: () => Ze,
    TRANSFORM_PREFIXED: () => At,
    TRANSFORM_STYLE_PREFIXED: () => $n,
    withBrowser: () => Yn,
  });
  var eh,
    Ze,
    Yn,
    $P,
    ba,
    At,
    Jg,
    $n,
    Qn = he(() => {
      "use strict";
      (eh = ce(Ta())),
        (Ze = typeof window < "u"),
        (Yn = (e, t) => (Ze ? e() : t)),
        ($P = Yn(() =>
          (0, eh.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (ba = Yn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let o = 0; o < n; o++) {
              let i = t[o];
              if (((e.style.display = i), e.style.display === i)) return i;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (At = Yn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let o = 0; o < n; o++) {
              let i = t[o] + r;
              if (e.style[i] !== void 0) return i;
            }
          }
          return "transform";
        }, "transform")),
        (Jg = At.split("transform")[0]),
        ($n = Jg ? Jg + "TransformStyle" : "transformStyle");
    });
  var Ia = c((Q5, ah) => {
    var QP = 4,
      ZP = 0.001,
      JP = 1e-7,
      eq = 10,
      Xr = 11,
      Zn = 1 / (Xr - 1),
      tq = typeof Float32Array == "function";
    function rh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function nh(e, t) {
      return 3 * t - 6 * e;
    }
    function ih(e) {
      return 3 * e;
    }
    function Jn(e, t, r) {
      return ((rh(t, r) * e + nh(t, r)) * e + ih(t)) * e;
    }
    function oh(e, t, r) {
      return 3 * rh(t, r) * e * e + 2 * nh(t, r) * e + ih(t);
    }
    function rq(e, t, r, n, o) {
      var i,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (i = Jn(a, n, o) - e), i > 0 ? (r = a) : (t = a);
      while (Math.abs(i) > JP && ++s < eq);
      return a;
    }
    function nq(e, t, r, n) {
      for (var o = 0; o < QP; ++o) {
        var i = oh(t, r, n);
        if (i === 0) return t;
        var a = Jn(t, r, n) - e;
        t -= a / i;
      }
      return t;
    }
    ah.exports = function (t, r, n, o) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = tq ? new Float32Array(Xr) : new Array(Xr);
      if (t !== r || n !== o)
        for (var a = 0; a < Xr; ++a) i[a] = Jn(a * Zn, t, n);
      function s(u) {
        for (var d = 0, h = 1, v = Xr - 1; h !== v && i[h] <= u; ++h) d += Zn;
        --h;
        var E = (u - i[h]) / (i[h + 1] - i[h]),
          m = d + E * Zn,
          b = oh(m, t, n);
        return b >= ZP ? nq(u, m, t, n) : b === 0 ? m : rq(u, d, d + Zn, t, n);
      }
      return function (d) {
        return t === r && n === o
          ? d
          : d === 0
          ? 0
          : d === 1
          ? 1
          : Jn(s(d), r, o);
      };
    };
  });
  var jr = {};
  De(jr, {
    bounce: () => Vq,
    bouncePast: () => Uq,
    ease: () => iq,
    easeIn: () => oq,
    easeInOut: () => sq,
    easeOut: () => aq,
    inBack: () => Cq,
    inCirc: () => Aq,
    inCubic: () => fq,
    inElastic: () => Pq,
    inExpo: () => Iq,
    inOutBack: () => Nq,
    inOutCirc: () => Sq,
    inOutCubic: () => pq,
    inOutElastic: () => Mq,
    inOutExpo: () => xq,
    inOutQuad: () => lq,
    inOutQuart: () => hq,
    inOutQuint: () => mq,
    inOutSine: () => bq,
    inQuad: () => uq,
    inQuart: () => vq,
    inQuint: () => Eq,
    inSine: () => _q,
    outBack: () => Lq,
    outBounce: () => Rq,
    outCirc: () => wq,
    outCubic: () => dq,
    outElastic: () => qq,
    outExpo: () => Oq,
    outQuad: () => cq,
    outQuart: () => gq,
    outQuint: () => yq,
    outSine: () => Tq,
    swingFrom: () => Fq,
    swingFromTo: () => Dq,
    swingTo: () => Gq,
  });
  function uq(e) {
    return Math.pow(e, 2);
  }
  function cq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function lq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function fq(e) {
    return Math.pow(e, 3);
  }
  function dq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function pq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function vq(e) {
    return Math.pow(e, 4);
  }
  function gq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function hq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function Eq(e) {
    return Math.pow(e, 5);
  }
  function yq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function mq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function _q(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Tq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function bq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function Iq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Oq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function xq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Aq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function wq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Sq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Rq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Cq(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function Lq(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Nq(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Pq(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function qq(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Mq(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Dq(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Fq(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function Gq(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Vq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Uq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Br,
    gt,
    iq,
    oq,
    aq,
    sq,
    Oa = he(() => {
      "use strict";
      (Br = ce(Ia())),
        (gt = 1.70158),
        (iq = (0, Br.default)(0.25, 0.1, 0.25, 1)),
        (oq = (0, Br.default)(0.42, 0, 1, 1)),
        (aq = (0, Br.default)(0, 0, 0.58, 1)),
        (sq = (0, Br.default)(0.42, 0, 0.58, 1));
    });
  var uh = {};
  De(uh, {
    applyEasing: () => Wq,
    createBezierEasing: () => Hq,
    optimizeFloat: () => zr,
  });
  function zr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      o = Number(Math.round(e * n) / n);
    return Math.abs(o) > 1e-4 ? o : 0;
  }
  function Hq(e) {
    return (0, sh.default)(...e);
  }
  function Wq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : zr(r ? (t > 0 ? r(t) : t) : t > 0 && e && jr[e] ? jr[e](t) : t);
  }
  var sh,
    xa = he(() => {
      "use strict";
      Oa();
      sh = ce(Ia());
    });
  var fh = {};
  De(fh, {
    createElementState: () => lh,
    ixElements: () => rM,
    mergeActionState: () => Aa,
  });
  function lh(e, t, r, n, o) {
    let i =
      r === kq ? (0, or.getIn)(o, ["config", "target", "objectId"]) : null;
    return (0, or.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
  }
  function Aa(e, t, r, n, o) {
    let i = iM(o);
    return (0, or.mergeIn)(e, [t, tM, r], n, i);
  }
  function iM(e) {
    let { config: t } = e;
    return nM.reduce((r, n) => {
      let o = n[0],
        i = n[1],
        a = t[o],
        s = t[i];
      return a != null && s != null && (r[i] = s), r;
    }, {});
  }
  var or,
    J5,
    kq,
    eB,
    Xq,
    Bq,
    jq,
    zq,
    Kq,
    Yq,
    $q,
    Qq,
    Zq,
    Jq,
    eM,
    ch,
    tM,
    rM,
    nM,
    dh = he(() => {
      "use strict";
      or = ce($t());
      Fe();
      ({
        HTML_ELEMENT: J5,
        PLAIN_OBJECT: kq,
        ABSTRACT_NODE: eB,
        CONFIG_X_VALUE: Xq,
        CONFIG_Y_VALUE: Bq,
        CONFIG_Z_VALUE: jq,
        CONFIG_VALUE: zq,
        CONFIG_X_UNIT: Kq,
        CONFIG_Y_UNIT: Yq,
        CONFIG_Z_UNIT: $q,
        CONFIG_UNIT: Qq,
      } = Re),
        ({
          IX2_SESSION_STOPPED: Zq,
          IX2_INSTANCE_ADDED: Jq,
          IX2_ELEMENT_STATE_CHANGED: eM,
        } = Ie),
        (ch = {}),
        (tM = "refState"),
        (rM = (e = ch, t = {}) => {
          switch (t.type) {
            case Zq:
              return ch;
            case Jq: {
              let {
                  elementId: r,
                  element: n,
                  origin: o,
                  actionItem: i,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = i,
                u = e;
              return (
                (0, or.getIn)(u, [r, n]) !== n && (u = lh(u, n, a, r, i)),
                Aa(u, r, s, o, i)
              );
            }
            case eM: {
              let {
                elementId: r,
                actionTypeId: n,
                current: o,
                actionItem: i,
              } = t.payload;
              return Aa(e, r, n, o, i);
            }
            default:
              return e;
          }
        });
      nM = [
        [Xq, Kq],
        [Bq, Yq],
        [jq, $q],
        [zq, Qq],
      ];
    });
  var ph = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var oM = (e) => e.value;
    Ae.getPluginConfig = oM;
    var aM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Ae.getPluginDuration = aM;
    var sM = (e) => e || { value: 0 };
    Ae.getPluginOrigin = sM;
    var uM = (e) => ({ value: e.value });
    Ae.getPluginDestination = uM;
    var cM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Ae.createPluginInstance = cM;
    var lM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Ae.renderPlugin = lM;
    var fM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Ae.clearPlugin = fM;
  });
  var gh = c((we) => {
    "use strict";
    Object.defineProperty(we, "__esModule", { value: !0 });
    we.renderPlugin =
      we.getPluginOrigin =
      we.getPluginDuration =
      we.getPluginDestination =
      we.getPluginConfig =
      we.createPluginInstance =
      we.clearPlugin =
        void 0;
    var dM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      pM = () => window.Webflow.require("spline"),
      vM = (e, t) => e.filter((r) => !t.includes(r)),
      gM = (e, t) => e.value[t];
    we.getPluginConfig = gM;
    var hM = () => null;
    we.getPluginDuration = hM;
    var vh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      EM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let i = Object.keys(e),
            a = vM(n, i);
          return a.length ? a.reduce((u, d) => ((u[d] = vh[d]), u), e) : e;
        }
        return n.reduce((i, a) => ((i[a] = vh[a]), i), {});
      };
    we.getPluginOrigin = EM;
    var yM = (e) => e.value;
    we.getPluginDestination = yM;
    var mM = (e, t) => {
      var r, n;
      let o =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return o ? dM(o) : null;
    };
    we.createPluginInstance = mM;
    var _M = (e, t, r) => {
      let n = pM(),
        o = n.getInstance(e),
        i = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = i && s.findObjectById(i);
          if (!u) return;
          let { PLUGIN_SPLINE: d } = t;
          d.positionX != null && (u.position.x = d.positionX),
            d.positionY != null && (u.position.y = d.positionY),
            d.positionZ != null && (u.position.z = d.positionZ),
            d.rotationX != null && (u.rotation.x = d.rotationX),
            d.rotationY != null && (u.rotation.y = d.rotationY),
            d.rotationZ != null && (u.rotation.z = d.rotationZ),
            d.scaleX != null && (u.scale.x = d.scaleX),
            d.scaleY != null && (u.scale.y = d.scaleY),
            d.scaleZ != null && (u.scale.z = d.scaleZ);
        };
      o ? a(o.spline) : n.setLoadHandler(e, a);
    };
    we.renderPlugin = _M;
    var TM = () => null;
    we.clearPlugin = TM;
  });
  var Eh = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    Oe.normalizeColor = hh;
    Oe.renderPlugin = void 0;
    function hh(e) {
      let t,
        r,
        n,
        o = 1,
        i = e.replace(/\s/g, "").toLowerCase();
      if (i.startsWith("#")) {
        let a = i.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (i.startsWith("rgba")) {
        let a = i.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (o = parseFloat(a[3]));
      } else if (i.startsWith("rgb")) {
        let a = i.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (i.startsWith("hsla")) {
        let a = i.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          d = parseFloat(a[2].replace("%", "")) / 100;
        o = parseFloat(a[3]);
        let h = (1 - Math.abs(2 * d - 1)) * u,
          v = h * (1 - Math.abs(((s / 60) % 2) - 1)),
          E = d - h / 2,
          m,
          b,
          _;
        s >= 0 && s < 60
          ? ((m = h), (b = v), (_ = 0))
          : s >= 60 && s < 120
          ? ((m = v), (b = h), (_ = 0))
          : s >= 120 && s < 180
          ? ((m = 0), (b = h), (_ = v))
          : s >= 180 && s < 240
          ? ((m = 0), (b = v), (_ = h))
          : s >= 240 && s < 300
          ? ((m = v), (b = 0), (_ = h))
          : ((m = h), (b = 0), (_ = v)),
          (t = Math.round((m + E) * 255)),
          (r = Math.round((b + E) * 255)),
          (n = Math.round((_ + E) * 255));
      } else if (i.startsWith("hsl")) {
        let a = i.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          d = parseFloat(a[2].replace("%", "")) / 100,
          h = (1 - Math.abs(2 * d - 1)) * u,
          v = h * (1 - Math.abs(((s / 60) % 2) - 1)),
          E = d - h / 2,
          m,
          b,
          _;
        s >= 0 && s < 60
          ? ((m = h), (b = v), (_ = 0))
          : s >= 60 && s < 120
          ? ((m = v), (b = h), (_ = 0))
          : s >= 120 && s < 180
          ? ((m = 0), (b = h), (_ = v))
          : s >= 180 && s < 240
          ? ((m = 0), (b = v), (_ = h))
          : s >= 240 && s < 300
          ? ((m = v), (b = 0), (_ = h))
          : ((m = h), (b = 0), (_ = v)),
          (t = Math.round((m + E) * 255)),
          (r = Math.round((b + E) * 255)),
          (n = Math.round((_ + E) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: o }
      );
    }
    var bM = (e, t) => e.value[t];
    Oe.getPluginConfig = bM;
    var IM = () => null;
    Oe.getPluginDuration = IM;
    var OM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        o = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(o, 10) };
      if (r.red != null && r.green != null && r.blue != null) return hh(o);
    };
    Oe.getPluginOrigin = OM;
    var xM = (e) => e.value;
    Oe.getPluginDestination = xM;
    var AM = () => null;
    Oe.createPluginInstance = AM;
    var wM = (e, t, r) => {
      let n = r.config.target.objectId,
        o = r.config.value.unit,
        { PLUGIN_VARIABLE: i } = t,
        { size: a, red: s, green: u, blue: d, alpha: h } = i,
        v;
      a != null && (v = a + o),
        s != null &&
          d != null &&
          u != null &&
          h != null &&
          (v = `rgba(${s}, ${u}, ${d}, ${h})`),
        v != null && document.documentElement.style.setProperty(n, v);
    };
    Oe.renderPlugin = wM;
    var SM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Oe.clearPlugin = SM;
  });
  var yh = c((ei) => {
    "use strict";
    var Sa = pn().default;
    Object.defineProperty(ei, "__esModule", { value: !0 });
    ei.pluginMethodMap = void 0;
    var wa = (Fe(), rt(Of)),
      RM = Sa(ph()),
      CM = Sa(gh()),
      LM = Sa(Eh()),
      iB = (ei.pluginMethodMap = new Map([
        [wa.ActionTypeConsts.PLUGIN_LOTTIE, { ...RM }],
        [wa.ActionTypeConsts.PLUGIN_SPLINE, { ...CM }],
        [wa.ActionTypeConsts.PLUGIN_VARIABLE, { ...LM }],
      ]));
  });
  var mh = {};
  De(mh, {
    clearPlugin: () => qa,
    createPluginInstance: () => PM,
    getPluginConfig: () => Ca,
    getPluginDestination: () => Na,
    getPluginDuration: () => NM,
    getPluginOrigin: () => La,
    isPluginType: () => Dt,
    renderPlugin: () => Pa,
  });
  function Dt(e) {
    return Ra.pluginMethodMap.has(e);
  }
  var Ra,
    Ft,
    Ca,
    La,
    NM,
    Na,
    PM,
    Pa,
    qa,
    Ma = he(() => {
      "use strict";
      Qn();
      Ra = ce(yh());
      (Ft = (e) => (t) => {
        if (!Ze) return () => null;
        let r = Ra.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Ca = Ft("getPluginConfig")),
        (La = Ft("getPluginOrigin")),
        (NM = Ft("getPluginDuration")),
        (Na = Ft("getPluginDestination")),
        (PM = Ft("createPluginInstance")),
        (Pa = Ft("renderPlugin")),
        (qa = Ft("clearPlugin"));
    });
  var Th = c((sB, _h) => {
    function qM(e, t) {
      return e == null || e !== e ? t : e;
    }
    _h.exports = qM;
  });
  var Ih = c((uB, bh) => {
    function MM(e, t, r, n) {
      var o = -1,
        i = e == null ? 0 : e.length;
      for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
      return r;
    }
    bh.exports = MM;
  });
  var xh = c((cB, Oh) => {
    function DM(e) {
      return function (t, r, n) {
        for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++o];
          if (r(i[u], u, i) === !1) break;
        }
        return t;
      };
    }
    Oh.exports = DM;
  });
  var wh = c((lB, Ah) => {
    var FM = xh(),
      GM = FM();
    Ah.exports = GM;
  });
  var Da = c((fB, Sh) => {
    var VM = wh(),
      UM = Hr();
    function HM(e, t) {
      return e && VM(e, t, UM);
    }
    Sh.exports = HM;
  });
  var Ch = c((dB, Rh) => {
    var WM = qt();
    function kM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!WM(r)) return e(r, n);
        for (
          var o = r.length, i = t ? o : -1, a = Object(r);
          (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

        );
        return r;
      };
    }
    Rh.exports = kM;
  });
  var Fa = c((pB, Lh) => {
    var XM = Da(),
      BM = Ch(),
      jM = BM(XM);
    Lh.exports = jM;
  });
  var Ph = c((vB, Nh) => {
    function zM(e, t, r, n, o) {
      return (
        o(e, function (i, a, s) {
          r = n ? ((n = !1), i) : t(r, i, a, s);
        }),
        r
      );
    }
    Nh.exports = zM;
  });
  var Mh = c((gB, qh) => {
    var KM = Ih(),
      YM = Fa(),
      $M = xt(),
      QM = Ph(),
      ZM = xe();
    function JM(e, t, r) {
      var n = ZM(e) ? KM : QM,
        o = arguments.length < 3;
      return n(e, $M(t, 4), r, o, YM);
    }
    qh.exports = JM;
  });
  var Fh = c((hB, Dh) => {
    var e1 = ma(),
      t1 = xt(),
      r1 = _a(),
      n1 = Math.max,
      i1 = Math.min;
    function o1(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = n - 1;
      return (
        r !== void 0 &&
          ((o = r1(r)), (o = r < 0 ? n1(n + o, 0) : i1(o, n - 1))),
        e1(e, t1(t, 3), o, !0)
      );
    }
    Dh.exports = o1;
  });
  var Vh = c((EB, Gh) => {
    var a1 = ya(),
      s1 = Fh(),
      u1 = a1(s1);
    Gh.exports = u1;
  });
  function Uh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function l1(e, t) {
    if (Uh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let o = 0; o < r.length; o++)
      if (!c1.call(t, r[o]) || !Uh(e[r[o]], t[r[o]])) return !1;
    return !0;
  }
  var c1,
    Ga,
    Hh = he(() => {
      "use strict";
      c1 = Object.prototype.hasOwnProperty;
      Ga = l1;
    });
  var iE = {};
  De(iE, {
    cleanupHTMLElement: () => sD,
    clearAllStyles: () => aD,
    clearObjectCache: () => w1,
    getActionListProgress: () => cD,
    getAffectedElements: () => ka,
    getComputedStyle: () => M1,
    getDestinationValues: () => W1,
    getElementId: () => L1,
    getInstanceId: () => R1,
    getInstanceOrigin: () => G1,
    getItemConfigByKey: () => H1,
    getMaxDurationItemIndex: () => nE,
    getNamespacedParameterId: () => dD,
    getRenderType: () => eE,
    getStyleProp: () => k1,
    mediaQueriesEqual: () => vD,
    observeStore: () => q1,
    reduceListToGroup: () => lD,
    reifyState: () => N1,
    renderHTMLElement: () => X1,
    shallowEqual: () => Ga,
    shouldAllowMediaQuery: () => pD,
    shouldNamespaceEventParameter: () => fD,
    stringifyTarget: () => gD,
  });
  function w1() {
    ti.clear();
  }
  function R1() {
    return "i" + S1++;
  }
  function L1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + C1++;
  }
  function N1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, oi.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      o = r && r.mediaQueries,
      i = [];
    return (
      o
        ? (i = o.map((a) => a.key))
        : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: o,
          mediaQueryKeys: i,
        },
      }
    );
  }
  function q1({ store: e, select: t, onChange: r, comparator: n = P1 }) {
    let { getState: o, subscribe: i } = e,
      a = i(u),
      s = t(o());
    function u() {
      let d = t(o());
      if (d == null) {
        a();
        return;
      }
      n(d, s) || ((s = d), r(s, e));
    }
    return a;
  }
  function Xh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: o,
        selectorGuids: i,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: o,
        selectorGuids: i,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function ka({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: o,
  }) {
    if (!o) throw new Error("IX2 missing elementApi");
    let { targets: i } = e;
    if (Array.isArray(i) && i.length > 0)
      return i.reduce(
        (M, I) =>
          M.concat(
            ka({
              config: { target: I },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: o,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: d,
        getSiblingElements: h,
        matchSelector: v,
        elementContains: E,
        isSiblingNode: m,
      } = o,
      { target: b } = e;
    if (!b) return [];
    let {
      id: _,
      objectId: q,
      selector: x,
      selectorGuids: S,
      appliesTo: O,
      useEventTarget: w,
    } = Xh(b);
    if (q) return [ti.has(q) ? ti.get(q) : ti.set(q, {}).get(q)];
    if (O === ko.PAGE) {
      let M = a(_);
      return M ? [M] : [];
    }
    let R = (t?.action?.config?.affectedElements ?? {})[_ || x] || {},
      X = !!(R.id || R.selector),
      B,
      z,
      $,
      Z = t && s(Xh(t.target));
    if (
      (X
        ? ((B = R.limitAffectedElements), (z = Z), ($ = s(R)))
        : (z = $ = s({ id: _, selector: x, selectorGuids: S })),
      t && w)
    ) {
      let M = r && ($ || w === !0) ? [r] : u(Z);
      if ($) {
        if (w === O1) return u($).filter((I) => M.some((D) => E(I, D)));
        if (w === Wh) return u($).filter((I) => M.some((D) => E(D, I)));
        if (w === kh) return u($).filter((I) => M.some((D) => m(D, I)));
      }
      return M;
    }
    return z == null || $ == null
      ? []
      : Ze && n
      ? u($).filter((M) => n.contains(M))
      : B === Wh
      ? u(z, $)
      : B === I1
      ? d(u(z)).filter(v($))
      : B === kh
      ? h(u(z)).filter(v($))
      : u($);
  }
  function M1({ element: e, actionItem: t }) {
    if (!Ze) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case lr:
      case fr:
      case dr:
      case pr:
      case si:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function G1(e, t = {}, r = {}, n, o) {
    let { getStyle: i } = o,
      { actionTypeId: a } = n;
    if (Dt(a)) return La(a)(t[a], n);
    switch (n.actionTypeId) {
      case sr:
      case ur:
      case cr:
      case Qr:
        return t[n.actionTypeId] || Xa[n.actionTypeId];
      case Zr:
        return D1(t[n.actionTypeId], n.config.filters);
      case Jr:
        return F1(t[n.actionTypeId], n.config.fontVariations);
      case Qh:
        return { value: (0, ht.default)(parseFloat(i(e, ni)), 1) };
      case lr: {
        let s = i(e, ut),
          u = i(e, ct),
          d,
          h;
        return (
          n.config.widthUnit === wt
            ? (d = Bh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (d = (0, ht.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === wt
            ? (h = Bh.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (h = (0, ht.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: d, heightValue: h }
        );
      }
      case fr:
      case dr:
      case pr:
        return nD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: i,
        });
      case si:
        return { value: (0, ht.default)(i(e, ii), r.display) };
      case A1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function W1({ element: e, actionItem: t, elementApi: r }) {
    if (Dt(t.actionTypeId)) return Na(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case sr:
      case ur:
      case cr:
      case Qr: {
        let { xValue: n, yValue: o, zValue: i } = t.config;
        return { xValue: n, yValue: o, zValue: i };
      }
      case lr: {
        let { getStyle: n, setStyle: o, getProperty: i } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: d } = t.config;
        if (!Ze) return { widthValue: u, heightValue: d };
        if (a === wt) {
          let h = n(e, ut);
          o(e, ut, ""), (u = i(e, "offsetWidth")), o(e, ut, h);
        }
        if (s === wt) {
          let h = n(e, ct);
          o(e, ct, ""), (d = i(e, "offsetHeight")), o(e, ct, h);
        }
        return { widthValue: u, heightValue: d };
      }
      case fr:
      case dr:
      case pr: {
        let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
        return { rValue: n, gValue: o, bValue: i, aValue: a };
      }
      case Zr:
        return t.config.filters.reduce(V1, {});
      case Jr:
        return t.config.fontVariations.reduce(U1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function eE(e) {
    if (/^TRANSFORM_/.test(e)) return Yh;
    if (/^STYLE_/.test(e)) return Ha;
    if (/^GENERAL_/.test(e)) return Ua;
    if (/^PLUGIN_/.test(e)) return $h;
  }
  function k1(e, t) {
    return e === Ha ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function X1(e, t, r, n, o, i, a, s, u) {
    switch (s) {
      case Yh:
        return Y1(e, t, r, o, a);
      case Ha:
        return iD(e, t, r, o, i, a);
      case Ua:
        return oD(e, o, a);
      case $h: {
        let { actionTypeId: d } = o;
        if (Dt(d)) return Pa(d)(u, t, o);
      }
    }
  }
  function Y1(e, t, r, n, o) {
    let i = K1.map((s) => {
        let u = Xa[s],
          {
            xValue: d = u.xValue,
            yValue: h = u.yValue,
            zValue: v = u.zValue,
            xUnit: E = "",
            yUnit: m = "",
            zUnit: b = "",
          } = t[s] || {};
        switch (s) {
          case sr:
            return `${p1}(${d}${E}, ${h}${m}, ${v}${b})`;
          case ur:
            return `${v1}(${d}${E}, ${h}${m}, ${v}${b})`;
          case cr:
            return `${g1}(${d}${E}) ${h1}(${h}${m}) ${E1}(${v}${b})`;
          case Qr:
            return `${y1}(${d}${E}, ${h}${m})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = o;
    Gt(e, At, o), a(e, At, i), Z1(n, r) && a(e, $n, m1);
  }
  function $1(e, t, r, n) {
    let o = (0, oi.default)(t, (a, s, u) => `${a} ${u}(${s}${z1(u, r)})`, ""),
      { setStyle: i } = n;
    Gt(e, Kr, n), i(e, Kr, o);
  }
  function Q1(e, t, r, n) {
    let o = (0, oi.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: i } = n;
    Gt(e, Yr, n), i(e, Yr, o);
  }
  function Z1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === sr && n !== void 0) ||
      (e === ur && n !== void 0) ||
      (e === cr && (t !== void 0 || r !== void 0))
    );
  }
  function rD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function nD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let o = Wa[t],
      i = n(e, o),
      a = eD.test(i) ? i : r[o],
      s = rD(tD, a).split($r);
    return {
      rValue: (0, ht.default)(parseInt(s[0], 10), 255),
      gValue: (0, ht.default)(parseInt(s[1], 10), 255),
      bValue: (0, ht.default)(parseInt(s[2], 10), 255),
      aValue: (0, ht.default)(parseFloat(s[3]), 1),
    };
  }
  function iD(e, t, r, n, o, i) {
    let { setStyle: a } = i;
    switch (n.actionTypeId) {
      case lr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: d, heightValue: h } = r;
        d !== void 0 && (s === wt && (s = "px"), Gt(e, ut, i), a(e, ut, d + s)),
          h !== void 0 &&
            (u === wt && (u = "px"), Gt(e, ct, i), a(e, ct, h + u));
        break;
      }
      case Zr: {
        $1(e, r, n.config, i);
        break;
      }
      case Jr: {
        Q1(e, r, n.config, i);
        break;
      }
      case fr:
      case dr:
      case pr: {
        let s = Wa[n.actionTypeId],
          u = Math.round(r.rValue),
          d = Math.round(r.gValue),
          h = Math.round(r.bValue),
          v = r.aValue;
        Gt(e, s, i),
          a(e, s, v >= 1 ? `rgb(${u},${d},${h})` : `rgba(${u},${d},${h},${v})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Gt(e, o, i), a(e, o, r.value + s);
        break;
      }
    }
  }
  function oD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case si: {
        let { value: o } = t.config;
        o === _1 && Ze ? n(e, ii, ba) : n(e, ii, o);
        return;
      }
    }
  }
  function Gt(e, t, r) {
    if (!Ze) return;
    let n = Jh[t];
    if (!n) return;
    let { getStyle: o, setStyle: i } = r,
      a = o(e, ar);
    if (!a) {
      i(e, ar, n);
      return;
    }
    let s = a.split($r).map(Zh);
    s.indexOf(n) === -1 && i(e, ar, s.concat(n).join($r));
  }
  function tE(e, t, r) {
    if (!Ze) return;
    let n = Jh[t];
    if (!n) return;
    let { getStyle: o, setStyle: i } = r,
      a = o(e, ar);
    !a ||
      a.indexOf(n) === -1 ||
      i(
        e,
        ar,
        a
          .split($r)
          .map(Zh)
          .filter((s) => s !== n)
          .join($r)
      );
  }
  function aD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: o = {} } = r;
    Object.keys(n).forEach((i) => {
      let a = n[i],
        { config: s } = a.action,
        { actionListId: u } = s,
        d = o[u];
      d && jh({ actionList: d, event: a, elementApi: t });
    }),
      Object.keys(o).forEach((i) => {
        jh({ actionList: o[i], elementApi: t });
      });
  }
  function jh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: o } = e;
    n &&
      n.forEach((i) => {
        zh({ actionGroup: i, event: t, elementApi: r });
      }),
      o &&
        o.forEach((i) => {
          let { continuousActionGroups: a } = i;
          a.forEach((s) => {
            zh({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function zh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((o) => {
      let { actionTypeId: i, config: a } = o,
        s;
      Dt(i)
        ? (s = (u) => qa(i)(u, o))
        : (s = rE({ effect: uD, actionTypeId: i, elementApi: r })),
        ka({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function sD(e, t, r) {
    let { setStyle: n, getStyle: o } = r,
      { actionTypeId: i } = t;
    if (i === lr) {
      let { config: a } = t;
      a.widthUnit === wt && n(e, ut, ""), a.heightUnit === wt && n(e, ct, "");
    }
    o(e, ar) && rE({ effect: tE, actionTypeId: i, elementApi: r })(e);
  }
  function uD(e, t, r) {
    let { setStyle: n } = r;
    tE(e, t, r), n(e, t, ""), t === At && n(e, $n, "");
  }
  function nE(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, o) => {
        let { config: i } = n,
          a = i.delay + i.duration;
        a >= t && ((t = a), (r = o));
      }),
      r
    );
  }
  function cD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: o, verboseTimeElapsed: i = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, d) => {
        if (n && d === 0) return;
        let { actionItems: h } = u,
          v = h[nE(h)],
          { config: E, actionTypeId: m } = v;
        o.id === v.id && (s = a + i);
        let b = eE(m) === Ua ? 0 : E.duration;
        a += E.delay + b;
      }),
      a > 0 ? zr(s / a) : 0
    );
  }
  function lD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: o } = e,
      i = [],
      a = (s) => (
        i.push((0, ai.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      o &&
        o.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: d }) => d.some(a));
        }),
      (0, ai.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
      })
    );
  }
  function fD(e, { basedOn: t }) {
    return (
      (e === Qe.SCROLLING_IN_VIEW && (t === at.ELEMENT || t == null)) ||
      (e === Qe.MOUSE_MOVE && t === at.ELEMENT)
    );
  }
  function dD(e, t) {
    return e + x1 + t;
  }
  function pD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function vD(e, t) {
    return Ga(e && e.sort(), t && t.sort());
  }
  function gD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Va + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Va + r + Va + n;
  }
  var ht,
    oi,
    ri,
    ai,
    f1,
    d1,
    p1,
    v1,
    g1,
    h1,
    E1,
    y1,
    m1,
    _1,
    ni,
    Kr,
    Yr,
    ut,
    ct,
    Kh,
    T1,
    b1,
    Wh,
    I1,
    kh,
    O1,
    ii,
    ar,
    wt,
    $r,
    x1,
    Va,
    Yh,
    Ua,
    Ha,
    $h,
    sr,
    ur,
    cr,
    Qr,
    Qh,
    Zr,
    Jr,
    lr,
    fr,
    dr,
    pr,
    si,
    A1,
    Zh,
    Wa,
    Jh,
    ti,
    S1,
    C1,
    P1,
    Bh,
    D1,
    F1,
    V1,
    U1,
    H1,
    Xa,
    B1,
    j1,
    z1,
    K1,
    J1,
    eD,
    tD,
    rE,
    oE = he(() => {
      "use strict";
      (ht = ce(Th())), (oi = ce(Mh())), (ri = ce(Vh())), (ai = ce($t()));
      Fe();
      Hh();
      xa();
      Ma();
      Qn();
      ({
        BACKGROUND: f1,
        TRANSFORM: d1,
        TRANSLATE_3D: p1,
        SCALE_3D: v1,
        ROTATE_X: g1,
        ROTATE_Y: h1,
        ROTATE_Z: E1,
        SKEW: y1,
        PRESERVE_3D: m1,
        FLEX: _1,
        OPACITY: ni,
        FILTER: Kr,
        FONT_VARIATION_SETTINGS: Yr,
        WIDTH: ut,
        HEIGHT: ct,
        BACKGROUND_COLOR: Kh,
        BORDER_COLOR: T1,
        COLOR: b1,
        CHILDREN: Wh,
        IMMEDIATE_CHILDREN: I1,
        SIBLINGS: kh,
        PARENT: O1,
        DISPLAY: ii,
        WILL_CHANGE: ar,
        AUTO: wt,
        COMMA_DELIMITER: $r,
        COLON_DELIMITER: x1,
        BAR_DELIMITER: Va,
        RENDER_TRANSFORM: Yh,
        RENDER_GENERAL: Ua,
        RENDER_STYLE: Ha,
        RENDER_PLUGIN: $h,
      } = Re),
        ({
          TRANSFORM_MOVE: sr,
          TRANSFORM_SCALE: ur,
          TRANSFORM_ROTATE: cr,
          TRANSFORM_SKEW: Qr,
          STYLE_OPACITY: Qh,
          STYLE_FILTER: Zr,
          STYLE_FONT_VARIATION: Jr,
          STYLE_SIZE: lr,
          STYLE_BACKGROUND_COLOR: fr,
          STYLE_BORDER: dr,
          STYLE_TEXT_COLOR: pr,
          GENERAL_DISPLAY: si,
          OBJECT_VALUE: A1,
        } = We),
        (Zh = (e) => e.trim()),
        (Wa = Object.freeze({ [fr]: Kh, [dr]: T1, [pr]: b1 })),
        (Jh = Object.freeze({
          [At]: d1,
          [Kh]: f1,
          [ni]: ni,
          [Kr]: Kr,
          [ut]: ut,
          [ct]: ct,
          [Yr]: Yr,
        })),
        (ti = new Map());
      S1 = 1;
      C1 = 1;
      P1 = (e, t) => e === t;
      (Bh = /px/),
        (D1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = B1[n.type]), r),
            e || {}
          )),
        (F1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = j1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (V1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (U1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (H1 = (e, t, r) => {
          if (Dt(e)) return Ca(e)(r, t);
          switch (e) {
            case Zr: {
              let n = (0, ri.default)(r.filters, ({ type: o }) => o === t);
              return n ? n.value : 0;
            }
            case Jr: {
              let n = (0, ri.default)(
                r.fontVariations,
                ({ type: o }) => o === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Xa = {
        [sr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [ur]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [cr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Qr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (B1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (j1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (z1 = (e, t) => {
          let r = (0, ri.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (K1 = Object.keys(Xa));
      (J1 = "\\(([^)]+)\\)"), (eD = /^rgb/), (tD = RegExp(`rgba?${J1}`));
      rE =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case sr:
            case ur:
            case cr:
            case Qr:
              e(n, At, r);
              break;
            case Zr:
              e(n, Kr, r);
              break;
            case Jr:
              e(n, Yr, r);
              break;
            case Qh:
              e(n, ni, r);
              break;
            case lr:
              e(n, ut, r), e(n, ct, r);
              break;
            case fr:
            case dr:
            case pr:
              e(n, Wa[t], r);
              break;
            case si:
              e(n, ii, r);
              break;
          }
        };
    });
  var Vt = c((Pe) => {
    "use strict";
    var vr = pn().default;
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.IX2VanillaUtils =
      Pe.IX2VanillaPlugins =
      Pe.IX2ElementsReducer =
      Pe.IX2Easings =
      Pe.IX2EasingUtils =
      Pe.IX2BrowserSupport =
        void 0;
    var hD = vr((Qn(), rt(th)));
    Pe.IX2BrowserSupport = hD;
    var ED = vr((Oa(), rt(jr)));
    Pe.IX2Easings = ED;
    var yD = vr((xa(), rt(uh)));
    Pe.IX2EasingUtils = yD;
    var mD = vr((dh(), rt(fh)));
    Pe.IX2ElementsReducer = mD;
    var _D = vr((Ma(), rt(mh)));
    Pe.IX2VanillaPlugins = _D;
    var TD = vr((oE(), rt(iE)));
    Pe.IX2VanillaUtils = TD;
  });
  var ci,
    Et,
    bD,
    ID,
    OD,
    xD,
    AD,
    wD,
    ui,
    aE,
    SD,
    RD,
    Ba,
    CD,
    LD,
    ND,
    PD,
    sE,
    uE = he(() => {
      "use strict";
      Fe();
      (ci = ce(Vt())),
        (Et = ce($t())),
        ({
          IX2_RAW_DATA_IMPORTED: bD,
          IX2_SESSION_STOPPED: ID,
          IX2_INSTANCE_ADDED: OD,
          IX2_INSTANCE_STARTED: xD,
          IX2_INSTANCE_REMOVED: AD,
          IX2_ANIMATION_FRAME_CHANGED: wD,
        } = Ie),
        ({
          optimizeFloat: ui,
          applyEasing: aE,
          createBezierEasing: SD,
        } = ci.IX2EasingUtils),
        ({ RENDER_GENERAL: RD } = Re),
        ({
          getItemConfigByKey: Ba,
          getRenderType: CD,
          getStyleProp: LD,
        } = ci.IX2VanillaUtils),
        (ND = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: o,
              destinationKeys: i,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: d,
              skipMotion: h,
              skipToValue: v,
            } = e,
            { parameters: E } = t.payload,
            m = Math.max(1 - a, 0.01),
            b = E[n];
          b == null && ((m = 1), (b = s));
          let _ = Math.max(b, 0) || 0,
            q = ui(_ - r),
            x = h ? v : ui(r + q * m),
            S = x * 100;
          if (x === r && e.current) return e;
          let O, w, L, R;
          for (let B = 0, { length: z } = o; B < z; B++) {
            let { keyframe: $, actionItems: Z } = o[B];
            if ((B === 0 && (O = Z[0]), S >= $)) {
              O = Z[0];
              let M = o[B + 1],
                I = M && S !== $;
              (w = I ? M.actionItems[0] : null),
                I && ((L = $ / 100), (R = (M.keyframe - $) / 100));
            }
          }
          let X = {};
          if (O && !w)
            for (let B = 0, { length: z } = i; B < z; B++) {
              let $ = i[B];
              X[$] = Ba(u, $, O.config);
            }
          else if (O && w && L !== void 0 && R !== void 0) {
            let B = (x - L) / R,
              z = O.config.easing,
              $ = aE(z, B, d);
            for (let Z = 0, { length: M } = i; Z < M; Z++) {
              let I = i[Z],
                D = Ba(u, I, O.config),
                J = (Ba(u, I, w.config) - D) * $ + D;
              X[I] = J;
            }
          }
          return (0, Et.merge)(e, { position: x, current: X });
        }),
        (PD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: o,
              immediate: i,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: d,
              destinationKeys: h,
              pluginDuration: v,
              instanceDelay: E,
              customEasingFn: m,
              skipMotion: b,
            } = e,
            _ = u.config.easing,
            { duration: q, delay: x } = u.config;
          v != null && (q = v),
            (x = E ?? x),
            a === RD ? (q = 0) : (i || b) && (q = x = 0);
          let { now: S } = t.payload;
          if (r && n) {
            let O = S - (o + x);
            if (s) {
              let B = S - o,
                z = q + x,
                $ = ui(Math.min(Math.max(0, B / z), 1));
              e = (0, Et.set)(e, "verboseTimeElapsed", z * $);
            }
            if (O < 0) return e;
            let w = ui(Math.min(Math.max(0, O / q), 1)),
              L = aE(_, w, m),
              R = {},
              X = null;
            return (
              h.length &&
                (X = h.reduce((B, z) => {
                  let $ = d[z],
                    Z = parseFloat(n[z]) || 0,
                    I = (parseFloat($) - Z) * L + Z;
                  return (B[z] = I), B;
                }, {})),
              (R.current = X),
              (R.position = w),
              w === 1 && ((R.active = !1), (R.complete = !0)),
              (0, Et.merge)(e, R)
            );
          }
          return e;
        }),
        (sE = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case bD:
              return t.payload.ixInstances || Object.freeze({});
            case ID:
              return Object.freeze({});
            case OD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: o,
                  eventId: i,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: d,
                  isCarrier: h,
                  origin: v,
                  destination: E,
                  immediate: m,
                  verbose: b,
                  continuous: _,
                  parameterId: q,
                  actionGroups: x,
                  smoothing: S,
                  restingValue: O,
                  pluginInstance: w,
                  pluginDuration: L,
                  instanceDelay: R,
                  skipMotion: X,
                  skipToValue: B,
                } = t.payload,
                { actionTypeId: z } = o,
                $ = CD(z),
                Z = LD($, z),
                M = Object.keys(E).filter(
                  (D) => E[D] != null && typeof E[D] != "string"
                ),
                { easing: I } = o.config;
              return (0, Et.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: v,
                destination: E,
                destinationKeys: M,
                immediate: m,
                verbose: b,
                current: null,
                actionItem: o,
                actionTypeId: z,
                eventId: i,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: d,
                renderType: $,
                isCarrier: h,
                styleProp: Z,
                continuous: _,
                parameterId: q,
                actionGroups: x,
                smoothing: S,
                restingValue: O,
                pluginInstance: w,
                pluginDuration: L,
                instanceDelay: R,
                skipMotion: X,
                skipToValue: B,
                customEasingFn:
                  Array.isArray(I) && I.length === 4 ? SD(I) : void 0,
              });
            }
            case xD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, Et.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case AD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                o = Object.keys(e),
                { length: i } = o;
              for (let a = 0; a < i; a++) {
                let s = o[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case wD: {
              let r = e,
                n = Object.keys(e),
                { length: o } = n;
              for (let i = 0; i < o; i++) {
                let a = n[i],
                  s = e[a],
                  u = s.continuous ? ND : PD;
                r = (0, Et.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var qD,
    MD,
    DD,
    cE,
    lE = he(() => {
      "use strict";
      Fe();
      ({
        IX2_RAW_DATA_IMPORTED: qD,
        IX2_SESSION_STOPPED: MD,
        IX2_PARAMETER_CHANGED: DD,
      } = Ie),
        (cE = (e = {}, t) => {
          switch (t.type) {
            case qD:
              return t.payload.ixParameters || {};
            case MD:
              return {};
            case DD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var pE = {};
  De(pE, { default: () => GD });
  var fE,
    dE,
    FD,
    GD,
    vE = he(() => {
      "use strict";
      fE = ce(Wo());
      Af();
      zf();
      $f();
      dE = ce(Vt());
      uE();
      lE();
      ({ ixElements: FD } = dE.IX2ElementsReducer),
        (GD = (0, fE.combineReducers)({
          ixData: xf,
          ixRequest: jf,
          ixSession: Yf,
          ixElements: FD,
          ixInstances: sE,
          ixParameters: cE,
        }));
    });
  var hE = c((qB, gE) => {
    var VD = It(),
      UD = xe(),
      HD = vt(),
      WD = "[object String]";
    function kD(e) {
      return typeof e == "string" || (!UD(e) && HD(e) && VD(e) == WD);
    }
    gE.exports = kD;
  });
  var yE = c((MB, EE) => {
    var XD = Ea(),
      BD = XD("length");
    EE.exports = BD;
  });
  var _E = c((DB, mE) => {
    var jD = "\\ud800-\\udfff",
      zD = "\\u0300-\\u036f",
      KD = "\\ufe20-\\ufe2f",
      YD = "\\u20d0-\\u20ff",
      $D = zD + KD + YD,
      QD = "\\ufe0e\\ufe0f",
      ZD = "\\u200d",
      JD = RegExp("[" + ZD + jD + $D + QD + "]");
    function e2(e) {
      return JD.test(e);
    }
    mE.exports = e2;
  });
  var RE = c((FB, SE) => {
    var bE = "\\ud800-\\udfff",
      t2 = "\\u0300-\\u036f",
      r2 = "\\ufe20-\\ufe2f",
      n2 = "\\u20d0-\\u20ff",
      i2 = t2 + r2 + n2,
      o2 = "\\ufe0e\\ufe0f",
      a2 = "[" + bE + "]",
      ja = "[" + i2 + "]",
      za = "\\ud83c[\\udffb-\\udfff]",
      s2 = "(?:" + ja + "|" + za + ")",
      IE = "[^" + bE + "]",
      OE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      xE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      u2 = "\\u200d",
      AE = s2 + "?",
      wE = "[" + o2 + "]?",
      c2 = "(?:" + u2 + "(?:" + [IE, OE, xE].join("|") + ")" + wE + AE + ")*",
      l2 = wE + AE + c2,
      f2 = "(?:" + [IE + ja + "?", ja, OE, xE, a2].join("|") + ")",
      TE = RegExp(za + "(?=" + za + ")|" + f2 + l2, "g");
    function d2(e) {
      for (var t = (TE.lastIndex = 0); TE.test(e); ) ++t;
      return t;
    }
    SE.exports = d2;
  });
  var LE = c((GB, CE) => {
    var p2 = yE(),
      v2 = _E(),
      g2 = RE();
    function h2(e) {
      return v2(e) ? g2(e) : p2(e);
    }
    CE.exports = h2;
  });
  var PE = c((VB, NE) => {
    var E2 = Hn(),
      y2 = Wn(),
      m2 = qt(),
      _2 = hE(),
      T2 = LE(),
      b2 = "[object Map]",
      I2 = "[object Set]";
    function O2(e) {
      if (e == null) return 0;
      if (m2(e)) return _2(e) ? T2(e) : e.length;
      var t = y2(e);
      return t == b2 || t == I2 ? e.size : E2(e).length;
    }
    NE.exports = O2;
  });
  var ME = c((UB, qE) => {
    var x2 = "Expected a function";
    function A2(e) {
      if (typeof e != "function") throw new TypeError(x2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    qE.exports = A2;
  });
  var Ka = c((HB, DE) => {
    var w2 = Ot(),
      S2 = (function () {
        try {
          var e = w2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    DE.exports = S2;
  });
  var Ya = c((WB, GE) => {
    var FE = Ka();
    function R2(e, t, r) {
      t == "__proto__" && FE
        ? FE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    GE.exports = R2;
  });
  var UE = c((kB, VE) => {
    var C2 = Ya(),
      L2 = Ln(),
      N2 = Object.prototype,
      P2 = N2.hasOwnProperty;
    function q2(e, t, r) {
      var n = e[t];
      (!(P2.call(e, t) && L2(n, r)) || (r === void 0 && !(t in e))) &&
        C2(e, t, r);
    }
    VE.exports = q2;
  });
  var kE = c((XB, WE) => {
    var M2 = UE(),
      D2 = kr(),
      F2 = Fn(),
      HE = st(),
      G2 = ir();
    function V2(e, t, r, n) {
      if (!HE(e)) return e;
      t = D2(t, e);
      for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
        var u = G2(t[o]),
          d = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (o != a) {
          var h = s[u];
          (d = n ? n(h, u, s) : void 0),
            d === void 0 && (d = HE(h) ? h : F2(t[o + 1]) ? [] : {});
        }
        M2(s, u, d), (s = s[u]);
      }
      return e;
    }
    WE.exports = V2;
  });
  var BE = c((BB, XE) => {
    var U2 = Bn(),
      H2 = kE(),
      W2 = kr();
    function k2(e, t, r) {
      for (var n = -1, o = t.length, i = {}; ++n < o; ) {
        var a = t[n],
          s = U2(e, a);
        r(s, a) && H2(i, W2(a, e), s);
      }
      return i;
    }
    XE.exports = k2;
  });
  var zE = c((jB, jE) => {
    var X2 = Mn(),
      B2 = Ro(),
      j2 = ra(),
      z2 = ta(),
      K2 = Object.getOwnPropertySymbols,
      Y2 = K2
        ? function (e) {
            for (var t = []; e; ) X2(t, j2(e)), (e = B2(e));
            return t;
          }
        : z2;
    jE.exports = Y2;
  });
  var YE = c((zB, KE) => {
    function $2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    KE.exports = $2;
  });
  var QE = c((KB, $E) => {
    var Q2 = st(),
      Z2 = Un(),
      J2 = YE(),
      eF = Object.prototype,
      tF = eF.hasOwnProperty;
    function rF(e) {
      if (!Q2(e)) return J2(e);
      var t = Z2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !tF.call(e, n))) || r.push(n);
      return r;
    }
    $E.exports = rF;
  });
  var JE = c((YB, ZE) => {
    var nF = ia(),
      iF = QE(),
      oF = qt();
    function aF(e) {
      return oF(e) ? nF(e, !0) : iF(e);
    }
    ZE.exports = aF;
  });
  var ty = c(($B, ey) => {
    var sF = ea(),
      uF = zE(),
      cF = JE();
    function lF(e) {
      return sF(e, cF, uF);
    }
    ey.exports = lF;
  });
  var ny = c((QB, ry) => {
    var fF = ha(),
      dF = xt(),
      pF = BE(),
      vF = ty();
    function gF(e, t) {
      if (e == null) return {};
      var r = fF(vF(e), function (n) {
        return [n];
      });
      return (
        (t = dF(t)),
        pF(e, r, function (n, o) {
          return t(n, o[0]);
        })
      );
    }
    ry.exports = gF;
  });
  var oy = c((ZB, iy) => {
    var hF = xt(),
      EF = ME(),
      yF = ny();
    function mF(e, t) {
      return yF(e, EF(hF(t)));
    }
    iy.exports = mF;
  });
  var sy = c((JB, ay) => {
    var _F = Hn(),
      TF = Wn(),
      bF = Fr(),
      IF = xe(),
      OF = qt(),
      xF = Dn(),
      AF = Un(),
      wF = Vn(),
      SF = "[object Map]",
      RF = "[object Set]",
      CF = Object.prototype,
      LF = CF.hasOwnProperty;
    function NF(e) {
      if (e == null) return !0;
      if (
        OF(e) &&
        (IF(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          xF(e) ||
          wF(e) ||
          bF(e))
      )
        return !e.length;
      var t = TF(e);
      if (t == SF || t == RF) return !e.size;
      if (AF(e)) return !_F(e).length;
      for (var r in e) if (LF.call(e, r)) return !1;
      return !0;
    }
    ay.exports = NF;
  });
  var cy = c((ej, uy) => {
    var PF = Ya(),
      qF = Da(),
      MF = xt();
    function DF(e, t) {
      var r = {};
      return (
        (t = MF(t, 3)),
        qF(e, function (n, o, i) {
          PF(r, o, t(n, o, i));
        }),
        r
      );
    }
    uy.exports = DF;
  });
  var fy = c((tj, ly) => {
    function FF(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    ly.exports = FF;
  });
  var py = c((rj, dy) => {
    var GF = zn();
    function VF(e) {
      return typeof e == "function" ? e : GF;
    }
    dy.exports = VF;
  });
  var gy = c((nj, vy) => {
    var UF = fy(),
      HF = Fa(),
      WF = py(),
      kF = xe();
    function XF(e, t) {
      var r = kF(e) ? UF : HF;
      return r(e, WF(t));
    }
    vy.exports = XF;
  });
  var Ey = c((ij, hy) => {
    var BF = $e(),
      jF = function () {
        return BF.Date.now();
      };
    hy.exports = jF;
  });
  var _y = c((oj, my) => {
    var zF = st(),
      $a = Ey(),
      yy = Kn(),
      KF = "Expected a function",
      YF = Math.max,
      $F = Math.min;
    function QF(e, t, r) {
      var n,
        o,
        i,
        a,
        s,
        u,
        d = 0,
        h = !1,
        v = !1,
        E = !0;
      if (typeof e != "function") throw new TypeError(KF);
      (t = yy(t) || 0),
        zF(r) &&
          ((h = !!r.leading),
          (v = "maxWait" in r),
          (i = v ? YF(yy(r.maxWait) || 0, t) : i),
          (E = "trailing" in r ? !!r.trailing : E));
      function m(R) {
        var X = n,
          B = o;
        return (n = o = void 0), (d = R), (a = e.apply(B, X)), a;
      }
      function b(R) {
        return (d = R), (s = setTimeout(x, t)), h ? m(R) : a;
      }
      function _(R) {
        var X = R - u,
          B = R - d,
          z = t - X;
        return v ? $F(z, i - B) : z;
      }
      function q(R) {
        var X = R - u,
          B = R - d;
        return u === void 0 || X >= t || X < 0 || (v && B >= i);
      }
      function x() {
        var R = $a();
        if (q(R)) return S(R);
        s = setTimeout(x, _(R));
      }
      function S(R) {
        return (s = void 0), E && n ? m(R) : ((n = o = void 0), a);
      }
      function O() {
        s !== void 0 && clearTimeout(s), (d = 0), (n = u = o = s = void 0);
      }
      function w() {
        return s === void 0 ? a : S($a());
      }
      function L() {
        var R = $a(),
          X = q(R);
        if (((n = arguments), (o = this), (u = R), X)) {
          if (s === void 0) return b(u);
          if (v) return clearTimeout(s), (s = setTimeout(x, t)), m(u);
        }
        return s === void 0 && (s = setTimeout(x, t)), a;
      }
      return (L.cancel = O), (L.flush = w), L;
    }
    my.exports = QF;
  });
  var by = c((aj, Ty) => {
    var ZF = _y(),
      JF = st(),
      eG = "Expected a function";
    function tG(e, t, r) {
      var n = !0,
        o = !0;
      if (typeof e != "function") throw new TypeError(eG);
      return (
        JF(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (o = "trailing" in r ? !!r.trailing : o)),
        ZF(e, t, { leading: n, maxWait: t, trailing: o })
      );
    }
    Ty.exports = tG;
  });
  var Oy = {};
  De(Oy, {
    actionListPlaybackChanged: () => hr,
    animationFrameChanged: () => fi,
    clearRequested: () => AG,
    elementStateChanged: () => is,
    eventListenerAdded: () => li,
    eventStateChanged: () => ts,
    instanceAdded: () => rs,
    instanceRemoved: () => ns,
    instanceStarted: () => di,
    mediaQueriesDefined: () => as,
    parameterChanged: () => gr,
    playbackRequested: () => OG,
    previewRequested: () => IG,
    rawDataImported: () => Qa,
    sessionInitialized: () => Za,
    sessionStarted: () => Ja,
    sessionStopped: () => es,
    stopRequested: () => xG,
    testFrameRendered: () => wG,
    viewportWidthChanged: () => os,
  });
  var Iy,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    vG,
    gG,
    hG,
    EG,
    yG,
    mG,
    _G,
    TG,
    bG,
    Qa,
    Za,
    Ja,
    es,
    IG,
    OG,
    xG,
    AG,
    li,
    wG,
    ts,
    fi,
    gr,
    rs,
    di,
    ns,
    is,
    hr,
    os,
    as,
    pi = he(() => {
      "use strict";
      Fe();
      (Iy = ce(Vt())),
        ({
          IX2_RAW_DATA_IMPORTED: rG,
          IX2_SESSION_INITIALIZED: nG,
          IX2_SESSION_STARTED: iG,
          IX2_SESSION_STOPPED: oG,
          IX2_PREVIEW_REQUESTED: aG,
          IX2_PLAYBACK_REQUESTED: sG,
          IX2_STOP_REQUESTED: uG,
          IX2_CLEAR_REQUESTED: cG,
          IX2_EVENT_LISTENER_ADDED: lG,
          IX2_TEST_FRAME_RENDERED: fG,
          IX2_EVENT_STATE_CHANGED: dG,
          IX2_ANIMATION_FRAME_CHANGED: pG,
          IX2_PARAMETER_CHANGED: vG,
          IX2_INSTANCE_ADDED: gG,
          IX2_INSTANCE_STARTED: hG,
          IX2_INSTANCE_REMOVED: EG,
          IX2_ELEMENT_STATE_CHANGED: yG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: mG,
          IX2_VIEWPORT_WIDTH_CHANGED: _G,
          IX2_MEDIA_QUERIES_DEFINED: TG,
        } = Ie),
        ({ reifyState: bG } = Iy.IX2VanillaUtils),
        (Qa = (e) => ({ type: rG, payload: { ...bG(e) } })),
        (Za = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: nG,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Ja = () => ({ type: iG })),
        (es = () => ({ type: oG })),
        (IG = ({ rawData: e, defer: t }) => ({
          type: aG,
          payload: { defer: t, rawData: e },
        })),
        (OG = ({
          actionTypeId: e = We.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: o,
          immediate: i,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: sG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: o,
            immediate: i,
            verbose: s,
            rawData: u,
          },
        })),
        (xG = (e) => ({ type: uG, payload: { actionListId: e } })),
        (AG = () => ({ type: cG })),
        (li = (e, t) => ({
          type: lG,
          payload: { target: e, listenerParams: t },
        })),
        (wG = (e = 1) => ({ type: fG, payload: { step: e } })),
        (ts = (e, t) => ({ type: dG, payload: { stateKey: e, newState: t } })),
        (fi = (e, t) => ({ type: pG, payload: { now: e, parameters: t } })),
        (gr = (e, t) => ({ type: vG, payload: { key: e, value: t } })),
        (rs = (e) => ({ type: gG, payload: { ...e } })),
        (di = (e, t) => ({ type: hG, payload: { instanceId: e, time: t } })),
        (ns = (e) => ({ type: EG, payload: { instanceId: e } })),
        (is = (e, t, r, n) => ({
          type: yG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (hr = ({ actionListId: e, isPlaying: t }) => ({
          type: mG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (os = ({ width: e, mediaQueries: t }) => ({
          type: _G,
          payload: { width: e, mediaQueries: t },
        })),
        (as = () => ({ type: TG }));
    });
  var qe = {};
  De(qe, {
    elementContains: () => cs,
    getChildElements: () => FG,
    getClosestElement: () => en,
    getProperty: () => NG,
    getQuerySelector: () => us,
    getRefType: () => ls,
    getSiblingElements: () => GG,
    getStyle: () => LG,
    getValidDocument: () => qG,
    isSiblingNode: () => DG,
    matchSelector: () => PG,
    queryDocument: () => MG,
    setStyle: () => CG,
  });
  function CG(e, t, r) {
    e.style[t] = r;
  }
  function LG(e, t) {
    return e.style[t];
  }
  function NG(e, t) {
    return e[t];
  }
  function PG(e) {
    return (t) => t[ss](e);
  }
  function us({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(xy) !== -1) {
        let n = e.split(xy),
          o = n[0];
        if (((r = n[1]), o !== document.documentElement.getAttribute(wy)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function qG(e) {
    return e == null || e === document.documentElement.getAttribute(wy)
      ? document
      : null;
  }
  function MG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function cs(e, t) {
    return e.contains(t);
  }
  function DG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function FG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: o } = e[r],
        { length: i } = o;
      if (i) for (let a = 0; a < i; a++) t.push(o[a]);
    }
    return t;
  }
  function GG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: o } = e; n < o; n++) {
      let { parentNode: i } = e[n];
      if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
        continue;
      r.push(i);
      let a = i.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function ls(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? SG
        : RG
      : null;
  }
  var Ay,
    ss,
    xy,
    SG,
    RG,
    wy,
    en,
    Sy = he(() => {
      "use strict";
      Ay = ce(Vt());
      Fe();
      ({ ELEMENT_MATCHES: ss } = Ay.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: xy,
          HTML_ELEMENT: SG,
          PLAIN_OBJECT: RG,
          WF_PAGE: wy,
        } = Re);
      en = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[ss] && r[ss](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var fs = c((cj, Cy) => {
    var VG = st(),
      Ry = Object.create,
      UG = (function () {
        function e() {}
        return function (t) {
          if (!VG(t)) return {};
          if (Ry) return Ry(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Cy.exports = UG;
  });
  var vi = c((lj, Ly) => {
    function HG() {}
    Ly.exports = HG;
  });
  var hi = c((fj, Ny) => {
    var WG = fs(),
      kG = vi();
    function gi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    gi.prototype = WG(kG.prototype);
    gi.prototype.constructor = gi;
    Ny.exports = gi;
  });
  var Dy = c((dj, My) => {
    var Py = zt(),
      XG = Fr(),
      BG = xe(),
      qy = Py ? Py.isConcatSpreadable : void 0;
    function jG(e) {
      return BG(e) || XG(e) || !!(qy && e && e[qy]);
    }
    My.exports = jG;
  });
  var Vy = c((pj, Gy) => {
    var zG = Mn(),
      KG = Dy();
    function Fy(e, t, r, n, o) {
      var i = -1,
        a = e.length;
      for (r || (r = KG), o || (o = []); ++i < a; ) {
        var s = e[i];
        t > 0 && r(s)
          ? t > 1
            ? Fy(s, t - 1, r, n, o)
            : zG(o, s)
          : n || (o[o.length] = s);
      }
      return o;
    }
    Gy.exports = Fy;
  });
  var Hy = c((vj, Uy) => {
    var YG = Vy();
    function $G(e) {
      var t = e == null ? 0 : e.length;
      return t ? YG(e, 1) : [];
    }
    Uy.exports = $G;
  });
  var ky = c((gj, Wy) => {
    function QG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Wy.exports = QG;
  });
  var jy = c((hj, By) => {
    var ZG = ky(),
      Xy = Math.max;
    function JG(e, t, r) {
      return (
        (t = Xy(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, o = -1, i = Xy(n.length - t, 0), a = Array(i);
            ++o < i;

          )
            a[o] = n[t + o];
          o = -1;
          for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
          return (s[t] = r(a)), ZG(e, this, s);
        }
      );
    }
    By.exports = JG;
  });
  var Ky = c((Ej, zy) => {
    function eV(e) {
      return function () {
        return e;
      };
    }
    zy.exports = eV;
  });
  var Qy = c((yj, $y) => {
    var tV = Ky(),
      Yy = Ka(),
      rV = zn(),
      nV = Yy
        ? function (e, t) {
            return Yy(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: tV(t),
              writable: !0,
            });
          }
        : rV;
    $y.exports = nV;
  });
  var Jy = c((mj, Zy) => {
    var iV = 800,
      oV = 16,
      aV = Date.now;
    function sV(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = aV(),
          o = oV - (n - r);
        if (((r = n), o > 0)) {
          if (++t >= iV) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Zy.exports = sV;
  });
  var tm = c((_j, em) => {
    var uV = Qy(),
      cV = Jy(),
      lV = cV(uV);
    em.exports = lV;
  });
  var nm = c((Tj, rm) => {
    var fV = Hy(),
      dV = jy(),
      pV = tm();
    function vV(e) {
      return pV(dV(e, void 0, fV), e + "");
    }
    rm.exports = vV;
  });
  var am = c((bj, om) => {
    var im = oa(),
      gV = im && new im();
    om.exports = gV;
  });
  var um = c((Ij, sm) => {
    function hV() {}
    sm.exports = hV;
  });
  var ds = c((Oj, lm) => {
    var cm = am(),
      EV = um(),
      yV = cm
        ? function (e) {
            return cm.get(e);
          }
        : EV;
    lm.exports = yV;
  });
  var dm = c((xj, fm) => {
    var mV = {};
    fm.exports = mV;
  });
  var ps = c((Aj, vm) => {
    var pm = dm(),
      _V = Object.prototype,
      TV = _V.hasOwnProperty;
    function bV(e) {
      for (
        var t = e.name + "", r = pm[t], n = TV.call(pm, t) ? r.length : 0;
        n--;

      ) {
        var o = r[n],
          i = o.func;
        if (i == null || i == e) return o.name;
      }
      return t;
    }
    vm.exports = bV;
  });
  var yi = c((wj, gm) => {
    var IV = fs(),
      OV = vi(),
      xV = 4294967295;
    function Ei(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = xV),
        (this.__views__ = []);
    }
    Ei.prototype = IV(OV.prototype);
    Ei.prototype.constructor = Ei;
    gm.exports = Ei;
  });
  var Em = c((Sj, hm) => {
    function AV(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    hm.exports = AV;
  });
  var mm = c((Rj, ym) => {
    var wV = yi(),
      SV = hi(),
      RV = Em();
    function CV(e) {
      if (e instanceof wV) return e.clone();
      var t = new SV(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = RV(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    ym.exports = CV;
  });
  var bm = c((Cj, Tm) => {
    var LV = yi(),
      _m = hi(),
      NV = vi(),
      PV = xe(),
      qV = vt(),
      MV = mm(),
      DV = Object.prototype,
      FV = DV.hasOwnProperty;
    function mi(e) {
      if (qV(e) && !PV(e) && !(e instanceof LV)) {
        if (e instanceof _m) return e;
        if (FV.call(e, "__wrapped__")) return MV(e);
      }
      return new _m(e);
    }
    mi.prototype = NV.prototype;
    mi.prototype.constructor = mi;
    Tm.exports = mi;
  });
  var Om = c((Lj, Im) => {
    var GV = yi(),
      VV = ds(),
      UV = ps(),
      HV = bm();
    function WV(e) {
      var t = UV(e),
        r = HV[t];
      if (typeof r != "function" || !(t in GV.prototype)) return !1;
      if (e === r) return !0;
      var n = VV(r);
      return !!n && e === n[0];
    }
    Im.exports = WV;
  });
  var Sm = c((Nj, wm) => {
    var xm = hi(),
      kV = nm(),
      XV = ds(),
      vs = ps(),
      BV = xe(),
      Am = Om(),
      jV = "Expected a function",
      zV = 8,
      KV = 32,
      YV = 128,
      $V = 256;
    function QV(e) {
      return kV(function (t) {
        var r = t.length,
          n = r,
          o = xm.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var i = t[n];
          if (typeof i != "function") throw new TypeError(jV);
          if (o && !a && vs(i) == "wrapper") var a = new xm([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          i = t[n];
          var s = vs(i),
            u = s == "wrapper" ? XV(i) : void 0;
          u &&
          Am(u[0]) &&
          u[1] == (YV | zV | KV | $V) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[vs(u[0])].apply(a, u[3]))
            : (a = i.length == 1 && Am(i) ? a[s]() : a.thru(i));
        }
        return function () {
          var d = arguments,
            h = d[0];
          if (a && d.length == 1 && BV(h)) return a.plant(h).value();
          for (var v = 0, E = r ? t[v].apply(this, d) : h; ++v < r; )
            E = t[v].call(this, E);
          return E;
        };
      });
    }
    wm.exports = QV;
  });
  var Cm = c((Pj, Rm) => {
    var ZV = Sm(),
      JV = ZV();
    Rm.exports = JV;
  });
  var Nm = c((qj, Lm) => {
    function eU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Lm.exports = eU;
  });
  var qm = c((Mj, Pm) => {
    var tU = Nm(),
      gs = Kn();
    function rU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = gs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = gs(t)), (t = t === t ? t : 0)),
        tU(gs(e), t, r)
      );
    }
    Pm.exports = rU;
  });
  var km,
    Xm,
    Bm,
    jm,
    nU,
    iU,
    oU,
    aU,
    sU,
    uU,
    cU,
    lU,
    fU,
    dU,
    pU,
    vU,
    gU,
    hU,
    EU,
    zm,
    Km,
    yU,
    mU,
    _U,
    Ym,
    TU,
    bU,
    $m,
    IU,
    hs,
    Qm,
    Mm,
    Dm,
    Zm,
    rn,
    OU,
    lt,
    Jm,
    xU,
    Ve,
    Je,
    nn,
    e_,
    Es,
    Fm,
    ys,
    AU,
    tn,
    wU,
    SU,
    RU,
    t_,
    Gm,
    CU,
    Vm,
    LU,
    NU,
    PU,
    Um,
    _i,
    Ti,
    Hm,
    Wm,
    r_,
    n_ = he(() => {
      "use strict";
      (km = ce(Cm())), (Xm = ce(jn())), (Bm = ce(qm()));
      Fe();
      ms();
      pi();
      (jm = ce(Vt())),
        ({
          MOUSE_CLICK: nU,
          MOUSE_SECOND_CLICK: iU,
          MOUSE_DOWN: oU,
          MOUSE_UP: aU,
          MOUSE_OVER: sU,
          MOUSE_OUT: uU,
          DROPDOWN_CLOSE: cU,
          DROPDOWN_OPEN: lU,
          SLIDER_ACTIVE: fU,
          SLIDER_INACTIVE: dU,
          TAB_ACTIVE: pU,
          TAB_INACTIVE: vU,
          NAVBAR_CLOSE: gU,
          NAVBAR_OPEN: hU,
          MOUSE_MOVE: EU,
          PAGE_SCROLL_DOWN: zm,
          SCROLL_INTO_VIEW: Km,
          SCROLL_OUT_OF_VIEW: yU,
          PAGE_SCROLL_UP: mU,
          SCROLLING_IN_VIEW: _U,
          PAGE_FINISH: Ym,
          ECOMMERCE_CART_CLOSE: TU,
          ECOMMERCE_CART_OPEN: bU,
          PAGE_START: $m,
          PAGE_SCROLL: IU,
        } = Qe),
        (hs = "COMPONENT_ACTIVE"),
        (Qm = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Mm } = Re),
        ({ getNamespacedParameterId: Dm } = jm.IX2VanillaUtils),
        (Zm = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (rn = Zm(({ element: e, nativeEvent: t }) => e === t.target)),
        (OU = Zm(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (lt = (0, km.default)([rn, OU])),
        (Jm = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              o = n[t];
            if (o && !AU[o.eventTypeId]) return o;
          }
          return null;
        }),
        (xU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!Jm(e, n);
        }),
        (Ve = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
          let { action: i, id: a } = t,
            { actionListId: s, autoStopEventId: u } = i.config,
            d = Jm(e, u);
          return (
            d &&
              Er({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Mm + n.split(Mm)[1],
                actionListId: (0, Xm.default)(d, "action.config.actionListId"),
              }),
            Er({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            on({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            o
          );
        }),
        (Je = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (nn = { handler: Je(lt, Ve) }),
        (e_ = { ...nn, types: [hs, Qm].join(" ") }),
        (Es = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Fm = "mouseover mouseout"),
        (ys = { types: Es }),
        (AU = { PAGE_START: $m, PAGE_FINISH: Ym }),
        (tn = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Bm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (wU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (SU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: o } = t,
            i = e.contains(n);
          if (r === "mouseover" && i) return !0;
          let a = e.contains(o);
          return !!(r === "mouseout" && i && a);
        }),
        (RU = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: o } = tn(),
            i = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
          return wU(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: o - u,
          });
        }),
        (t_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            o = [hs, Qm].indexOf(n) !== -1 ? n === hs : r.isActive,
            i = { ...r, isActive: o };
          return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
        }),
        (Gm = (e) => (t, r) => {
          let n = { elementHovered: SU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (CU = (e) => (t, r) => {
          let n = { ...r, elementVisible: RU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Vm =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = tn(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: d } = a,
              h = d === "PX",
              v = o - i,
              E = Number((n / v).toFixed(2));
            if (r && r.percentTop === E) return r;
            let m = (h ? u : (i * (u || 0)) / 100) / v,
              b,
              _,
              q = 0;
            r &&
              ((b = E > r.percentTop),
              (_ = r.scrollingDown !== b),
              (q = _ ? E : r.anchorTop));
            let x = s === zm ? E >= q + m : E <= q - m,
              S = {
                ...r,
                percentTop: E,
                inBounds: x,
                anchorTop: q,
                scrollingDown: b,
              };
            return (r && x && (_ || S.inBounds !== r.inBounds) && e(t, S)) || S;
          }),
        (LU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (NU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (PU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Um =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (_i = (e = !0) => ({
          ...e_,
          handler: Je(
            e ? lt : rn,
            t_((t, r) => (r.isActive ? nn.handler(t, r) : r))
          ),
        })),
        (Ti = (e = !0) => ({
          ...e_,
          handler: Je(
            e ? lt : rn,
            t_((t, r) => (r.isActive ? r : nn.handler(t, r)))
          ),
        })),
        (Hm = {
          ...ys,
          handler: CU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: o } = e,
              { ixData: i } = o.getState(),
              { events: a } = i;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Km) === r
              ? (Ve(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Wm = 0.05),
        (r_ = {
          [fU]: _i(),
          [dU]: Ti(),
          [lU]: _i(),
          [cU]: Ti(),
          [hU]: _i(!1),
          [gU]: Ti(!1),
          [pU]: _i(),
          [vU]: Ti(),
          [bU]: { types: "ecommerce-cart-open", handler: Je(lt, Ve) },
          [TU]: { types: "ecommerce-cart-close", handler: Je(lt, Ve) },
          [nU]: {
            types: "click",
            handler: Je(
              lt,
              Um((e, { clickCount: t }) => {
                xU(e) ? t === 1 && Ve(e) : Ve(e);
              })
            ),
          },
          [iU]: {
            types: "click",
            handler: Je(
              lt,
              Um((e, { clickCount: t }) => {
                t === 2 && Ve(e);
              })
            ),
          },
          [oU]: { ...nn, types: "mousedown" },
          [aU]: { ...nn, types: "mouseup" },
          [sU]: {
            types: Fm,
            handler: Je(
              lt,
              Gm((e, t) => {
                t.elementHovered && Ve(e);
              })
            ),
          },
          [uU]: {
            types: Fm,
            handler: Je(
              lt,
              Gm((e, t) => {
                t.elementHovered || Ve(e);
              })
            ),
          },
          [EU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: o,
              },
              i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: d,
                  restingState: h = 0,
                } = r,
                {
                  clientX: v = i.clientX,
                  clientY: E = i.clientY,
                  pageX: m = i.pageX,
                  pageY: b = i.pageY,
                } = n,
                _ = s === "X_AXIS",
                q = n.type === "mouseout",
                x = h / 100,
                S = u,
                O = !1;
              switch (a) {
                case at.VIEWPORT: {
                  x = _
                    ? Math.min(v, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                }
                case at.PAGE: {
                  let {
                    scrollLeft: w,
                    scrollTop: L,
                    scrollWidth: R,
                    scrollHeight: X,
                  } = tn();
                  x = _ ? Math.min(w + m, R) / R : Math.min(L + b, X) / X;
                  break;
                }
                case at.ELEMENT:
                default: {
                  S = Dm(o, u);
                  let w = n.type.indexOf("mouse") === 0;
                  if (w && lt({ element: t, nativeEvent: n }) !== !0) break;
                  let L = t.getBoundingClientRect(),
                    { left: R, top: X, width: B, height: z } = L;
                  if (!w && !LU({ left: v, top: E }, L)) break;
                  (O = !0), (x = _ ? (v - R) / B : (E - X) / z);
                  break;
                }
              }
              return (
                q && (x > 1 - Wm || x < Wm) && (x = Math.round(x)),
                (a !== at.ELEMENT || O || O !== i.elementHovered) &&
                  ((x = d ? 1 - x : x), e.dispatch(gr(S, x))),
                {
                  elementHovered: O,
                  clientX: v,
                  clientY: E,
                  pageX: m,
                  pageY: b,
                }
              );
            },
          },
          [IU]: {
            types: Es,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: o, scrollHeight: i, clientHeight: a } = tn(),
                s = o / (i - a);
              (s = n ? 1 - s : s), e.dispatch(gr(r, s));
            },
          },
          [_U]: {
            types: Es,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              o = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: i,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: d,
                } = tn(),
                {
                  basedOn: h,
                  selectedAxis: v,
                  continuousParameterGroupId: E,
                  startsEntering: m,
                  startsExiting: b,
                  addEndOffset: _,
                  addStartOffset: q,
                  addOffsetValue: x = 0,
                  endOffsetValue: S = 0,
                } = r,
                O = v === "X_AXIS";
              if (h === at.VIEWPORT) {
                let w = O ? i / s : a / u;
                return (
                  w !== o.scrollPercent && t.dispatch(gr(E, w)),
                  { scrollPercent: w }
                );
              } else {
                let w = Dm(n, E),
                  L = e.getBoundingClientRect(),
                  R = (q ? x : 0) / 100,
                  X = (_ ? S : 0) / 100;
                (R = m ? R : 1 - R), (X = b ? X : 1 - X);
                let B = L.top + Math.min(L.height * R, d),
                  $ = L.top + L.height * X - B,
                  Z = Math.min(d + $, u),
                  I = Math.min(Math.max(0, d - B), Z) / Z;
                return (
                  I !== o.scrollPercent && t.dispatch(gr(w, I)),
                  { scrollPercent: I }
                );
              }
            },
          },
          [Km]: Hm,
          [yU]: Hm,
          [zm]: {
            ...ys,
            handler: Vm((e, t) => {
              t.scrollingDown && Ve(e);
            }),
          },
          [mU]: {
            ...ys,
            handler: Vm((e, t) => {
              t.scrollingDown || Ve(e);
            }),
          },
          [Ym]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Je(rn, NU(Ve)),
          },
          [$m]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Je(rn, PU(Ve)),
          },
        });
    });
  var __ = {};
  De(__, {
    observeRequests: () => JU,
    startActionGroup: () => on,
    startEngine: () => wi,
    stopActionGroup: () => Er,
    stopAllActionGroups: () => E_,
    stopEngine: () => Si,
  });
  function JU(e) {
    Ut({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: rH }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: nH }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: iH }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: oH });
  }
  function eH(e) {
    Ut({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Si(e),
          p_({ store: e, elementApi: qe }),
          wi({ store: e, allowEvents: !0 }),
          v_();
      },
    });
  }
  function tH(e, t) {
    let r = Ut({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function rH({ rawData: e, defer: t }, r) {
    let n = () => {
      wi({ store: r, rawData: e, allowEvents: !0 }), v_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function v_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function nH(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: o,
        eventId: i,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: d = !0,
      } = e,
      { rawData: h } = e;
    if (n && o && h && s) {
      let v = h.actionLists[n];
      v && (h = WU({ actionList: v, actionItemId: o, rawData: h }));
    }
    if (
      (wi({ store: t, rawData: h, allowEvents: a, testManual: u }),
      (n && r === We.GENERAL_START_ACTION) || _s(r))
    ) {
      Er({ store: t, actionListId: n }),
        h_({ store: t, actionListId: n, eventId: i });
      let v = on({
        store: t,
        eventId: i,
        actionListId: n,
        immediate: s,
        verbose: d,
      });
      d && v && t.dispatch(hr({ actionListId: n, isPlaying: !s }));
    }
  }
  function iH({ actionListId: e }, t) {
    e ? Er({ store: t, actionListId: e }) : E_({ store: t }), Si(t);
  }
  function oH(e, t) {
    Si(t), p_({ store: t, elementApi: qe });
  }
  function wi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: o } = e.getState();
    t && e.dispatch(Qa(t)),
      o.active ||
        (e.dispatch(
          Za({
            hasBoundaryNodes: !!document.querySelector(Ii),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (fH(e), aH(), e.getState().ixSession.hasDefinedMediaQueries && eH(e)),
        e.dispatch(Ja()),
        sH(e, n));
  }
  function aH() {
    let { documentElement: e } = document;
    e.className.indexOf(i_) === -1 && (e.className += ` ${i_}`);
  }
  function sH(e, t) {
    let r = (n) => {
      let { ixSession: o, ixParameters: i } = e.getState();
      o.active &&
        (e.dispatch(fi(n, i)), t ? tH(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Si(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(uH), jU(), e.dispatch(es());
    }
  }
  function uH({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function cH({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: o,
    actionListId: i,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: d, ixSession: h } = e.getState(),
      { events: v } = d,
      E = v[n],
      { eventTypeId: m } = E,
      b = {},
      _ = {},
      q = [],
      { continuousActionGroups: x } = a,
      { id: S } = a;
    kU(m, o) && (S = XU(t, S));
    let O = h.hasBoundaryNodes && r ? en(r, Ii) : null;
    x.forEach((w) => {
      let { keyframe: L, actionItems: R } = w;
      R.forEach((X) => {
        let { actionTypeId: B } = X,
          { target: z } = X.config;
        if (!z) return;
        let $ = z.boundaryMode ? O : null,
          Z = zU(z) + Ts + B;
        if (((_[Z] = lH(_[Z], L, X)), !b[Z])) {
          b[Z] = !0;
          let { config: M } = X;
          Oi({
            config: M,
            event: E,
            eventTarget: r,
            elementRoot: $,
            elementApi: qe,
          }).forEach((I) => {
            q.push({ element: I, key: Z });
          });
        }
      });
    }),
      q.forEach(({ element: w, key: L }) => {
        let R = _[L],
          X = (0, yt.default)(R, "[0].actionItems[0]", {}),
          { actionTypeId: B } = X,
          z = Ai(B) ? Is(B)(w, X) : null,
          $ = bs({ element: w, actionItem: X, elementApi: qe }, z);
        Os({
          store: e,
          element: w,
          eventId: n,
          actionListId: i,
          actionItem: X,
          destination: $,
          continuous: !0,
          parameterId: S,
          actionGroups: R,
          smoothing: s,
          restingValue: u,
          pluginInstance: z,
        });
      });
  }
  function lH(e = [], t, r) {
    let n = [...e],
      o;
    return (
      n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
      o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[o].actionItems.push(r),
      n
    );
  }
  function fH(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    g_(e),
      (0, yr.default)(r, (o, i) => {
        let a = r_[i];
        if (!a) {
          console.warn(`IX2 event type not configured: ${i}`);
          return;
        }
        EH({ logic: a, store: e, events: o });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && pH(e);
  }
  function pH(e) {
    let t = () => {
      g_(e);
    };
    dH.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(li(window, [r, t]));
    }),
      t();
  }
  function g_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: o } = r;
      e.dispatch(os({ width: n, mediaQueries: o }));
    }
  }
  function EH({ logic: e, store: t, events: r }) {
    yH(r);
    let { types: n, handler: o } = e,
      { ixData: i } = t.getState(),
      { actionLists: a } = i,
      s = vH(r, hH);
    if (!(0, s_.default)(s)) return;
    (0, yr.default)(s, (v, E) => {
      let m = r[E],
        { action: b, id: _, mediaQueries: q = i.mediaQueryKeys } = m,
        { actionListId: x } = b.config;
      KU(q, i.mediaQueryKeys) || t.dispatch(as()),
        b.actionTypeId === We.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(m.config) ? m.config : [m.config]).forEach((O) => {
            let { continuousParameterGroupId: w } = O,
              L = (0, yt.default)(a, `${x}.continuousParameterGroups`, []),
              R = (0, a_.default)(L, ({ id: z }) => z === w),
              X = (O.smoothing || 0) / 100,
              B = (O.restingState || 0) / 100;
            R &&
              v.forEach((z, $) => {
                let Z = _ + Ts + $;
                cH({
                  store: t,
                  eventStateKey: Z,
                  eventTarget: z,
                  eventId: _,
                  eventConfig: O,
                  actionListId: x,
                  parameterGroup: R,
                  smoothing: X,
                  restingValue: B,
                });
              });
          }),
        (b.actionTypeId === We.GENERAL_START_ACTION || _s(b.actionTypeId)) &&
          h_({ store: t, actionListId: x, eventId: _ });
    });
    let u = (v) => {
        let { ixSession: E } = t.getState();
        gH(s, (m, b, _) => {
          let q = r[b],
            x = E.eventState[_],
            { action: S, mediaQueries: O = i.mediaQueryKeys } = q;
          if (!xi(O, E.mediaQueryKey)) return;
          let w = (L = {}) => {
            let R = o(
              {
                store: t,
                element: m,
                event: q,
                eventConfig: L,
                nativeEvent: v,
                eventStateKey: _,
              },
              x
            );
            YU(R, x) || t.dispatch(ts(_, R));
          };
          S.actionTypeId === We.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(q.config) ? q.config : [q.config]).forEach(w)
            : w();
        });
      },
      d = (0, f_.default)(u, ZU),
      h = ({ target: v = document, types: E, throttle: m }) => {
        E.split(" ")
          .filter(Boolean)
          .forEach((b) => {
            let _ = m ? d : u;
            v.addEventListener(b, _), t.dispatch(li(v, [b, _]));
          });
      };
    Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e);
  }
  function yH(e) {
    if (!QU) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: o, target: i } = e[n],
        a = us(i);
      t[a] ||
        ((o === Qe.MOUSE_CLICK || o === Qe.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function h_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: o } = e.getState(),
      { actionLists: i, events: a } = n,
      s = a[r],
      u = i[t];
    if (u && u.useFirstGroupAsInitialState) {
      let d = (0, yt.default)(u, "actionItemGroups[0].actionItems", []),
        h = (0, yt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!xi(h, o.mediaQueryKey)) return;
      d.forEach((v) => {
        let { config: E, actionTypeId: m } = v,
          b =
            E?.target?.useEventTarget === !0 && E?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : E,
          _ = Oi({ config: b, event: s, elementApi: qe }),
          q = Ai(m);
        _.forEach((x) => {
          let S = q ? Is(m)(x, v) : null;
          Os({
            destination: bs({ element: x, actionItem: v, elementApi: qe }, S),
            immediate: !0,
            store: e,
            element: x,
            eventId: r,
            actionItem: v,
            actionListId: t,
            pluginInstance: S,
          });
        });
      });
    }
  }
  function E_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, yr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: o } = r;
        xs(r, e), o && e.dispatch(hr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function Er({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: o,
  }) {
    let { ixInstances: i, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? en(r, Ii) : null;
    (0, yr.default)(i, (u) => {
      let d = (0, yt.default)(u, "actionItem.config.target.boundaryMode"),
        h = n ? u.eventStateKey === n : !0;
      if (u.actionListId === o && u.eventId === t && h) {
        if (s && d && !cs(s, u.element)) return;
        xs(u, e),
          u.verbose && e.dispatch(hr({ actionListId: o, isPlaying: !1 }));
      }
    });
  }
  function on({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: o,
    groupIndex: i = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: d } = e.getState(),
      { events: h } = u,
      v = h[t] || {},
      { mediaQueries: E = u.mediaQueryKeys } = v,
      m = (0, yt.default)(u, `actionLists.${o}`, {}),
      { actionItemGroups: b, useFirstGroupAsInitialState: _ } = m;
    if (!b || !b.length) return !1;
    i >= b.length && (0, yt.default)(v, "config.loop") && (i = 0),
      i === 0 && _ && i++;
    let x =
        (i === 0 || (i === 1 && _)) && _s(v.action?.actionTypeId)
          ? v.config.delay
          : void 0,
      S = (0, yt.default)(b, [i, "actionItems"], []);
    if (!S.length || !xi(E, d.mediaQueryKey)) return !1;
    let O = d.hasBoundaryNodes && r ? en(r, Ii) : null,
      w = VU(S),
      L = !1;
    return (
      S.forEach((R, X) => {
        let { config: B, actionTypeId: z } = R,
          $ = Ai(z),
          { target: Z } = B;
        if (!Z) return;
        let M = Z.boundaryMode ? O : null;
        Oi({
          config: B,
          event: v,
          eventTarget: r,
          elementRoot: M,
          elementApi: qe,
        }).forEach((D, j) => {
          let H = $ ? Is(z)(D, R) : null,
            J = $ ? $U(z)(D, R) : null;
          L = !0;
          let te = w === X && j === 0,
            ae = UU({ element: D, actionItem: R }),
            _e = bs({ element: D, actionItem: R, elementApi: qe }, H);
          Os({
            store: e,
            element: D,
            actionItem: R,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: o,
            groupIndex: i,
            isCarrier: te,
            computedStyle: ae,
            destination: _e,
            immediate: a,
            verbose: s,
            pluginInstance: H,
            pluginDuration: J,
            instanceDelay: x,
          });
        });
      }),
      L
    );
  }
  function Os(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: o,
        actionItem: i,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: d,
        eventId: h,
      } = n,
      v = !u,
      E = FU(),
      { ixElements: m, ixSession: b, ixData: _ } = t.getState(),
      q = DU(m, o),
      { refState: x } = m[q] || {},
      S = ls(o),
      O = b.reducedMotion && jo[i.actionTypeId],
      w;
    if (O && u)
      switch (_.events[h]?.eventTypeId) {
        case Qe.MOUSE_MOVE:
        case Qe.MOUSE_MOVE_IN_VIEWPORT:
          w = d;
          break;
        default:
          w = 0.5;
          break;
      }
    let L = HU(o, x, r, i, qe, s);
    if (
      (t.dispatch(
        rs({
          instanceId: E,
          elementId: q,
          origin: L,
          refType: S,
          skipMotion: O,
          skipToValue: w,
          ...n,
        })
      ),
      y_(document.body, "ix2-animation-started", E),
      a)
    ) {
      mH(t, E);
      return;
    }
    Ut({ store: t, select: ({ ixInstances: R }) => R[E], onChange: m_ }),
      v && t.dispatch(di(E, b.tick));
  }
  function xs(e, t) {
    y_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: o } = t.getState(),
      { ref: i, refType: a } = o[r] || {};
    a === d_ && BU(i, n, qe), t.dispatch(ns(e.id));
  }
  function y_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function mH(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(di(t, 0)), e.dispatch(fi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    m_(n[t], e);
  }
  function m_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: o,
        elementId: i,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: d,
        groupIndex: h,
        eventId: v,
        eventTarget: E,
        eventStateKey: m,
        actionListId: b,
        isCarrier: _,
        styleProp: q,
        verbose: x,
        pluginInstance: S,
      } = e,
      { ixData: O, ixSession: w } = t.getState(),
      { events: L } = O,
      R = L[v] || {},
      { mediaQueries: X = O.mediaQueryKeys } = R;
    if (xi(X, w.mediaQueryKey) && (n || r || o)) {
      if (d || (u === MU && o)) {
        t.dispatch(is(i, s, d, a));
        let { ixElements: B } = t.getState(),
          { ref: z, refType: $, refState: Z } = B[i] || {},
          M = Z && Z[s];
        ($ === d_ || Ai(s)) && GU(z, Z, M, v, a, q, qe, u, S);
      }
      if (o) {
        if (_) {
          let B = on({
            store: t,
            eventId: v,
            eventTarget: E,
            eventStateKey: m,
            actionListId: b,
            groupIndex: h + 1,
            verbose: x,
          });
          x && !B && t.dispatch(hr({ actionListId: b, isPlaying: !1 }));
        }
        xs(e, t);
      }
    }
  }
  var a_,
    yt,
    s_,
    u_,
    c_,
    l_,
    yr,
    f_,
    bi,
    qU,
    _s,
    Ts,
    Ii,
    d_,
    MU,
    i_,
    Oi,
    DU,
    bs,
    Ut,
    FU,
    GU,
    p_,
    VU,
    UU,
    HU,
    WU,
    kU,
    XU,
    xi,
    BU,
    jU,
    zU,
    KU,
    YU,
    Ai,
    Is,
    $U,
    o_,
    QU,
    ZU,
    dH,
    vH,
    gH,
    hH,
    ms = he(() => {
      "use strict";
      (a_ = ce(Ta())),
        (yt = ce(jn())),
        (s_ = ce(PE())),
        (u_ = ce(oy())),
        (c_ = ce(sy())),
        (l_ = ce(cy())),
        (yr = ce(gy())),
        (f_ = ce(by()));
      Fe();
      bi = ce(Vt());
      pi();
      Sy();
      n_();
      (qU = Object.keys(Xo)),
        (_s = (e) => qU.includes(e)),
        ({
          COLON_DELIMITER: Ts,
          BOUNDARY_SELECTOR: Ii,
          HTML_ELEMENT: d_,
          RENDER_GENERAL: MU,
          W_MOD_IX: i_,
        } = Re),
        ({
          getAffectedElements: Oi,
          getElementId: DU,
          getDestinationValues: bs,
          observeStore: Ut,
          getInstanceId: FU,
          renderHTMLElement: GU,
          clearAllStyles: p_,
          getMaxDurationItemIndex: VU,
          getComputedStyle: UU,
          getInstanceOrigin: HU,
          reduceListToGroup: WU,
          shouldNamespaceEventParameter: kU,
          getNamespacedParameterId: XU,
          shouldAllowMediaQuery: xi,
          cleanupHTMLElement: BU,
          clearObjectCache: jU,
          stringifyTarget: zU,
          mediaQueriesEqual: KU,
          shallowEqual: YU,
        } = bi.IX2VanillaUtils),
        ({
          isPluginType: Ai,
          createPluginInstance: Is,
          getPluginDuration: $U,
        } = bi.IX2VanillaPlugins),
        (o_ = navigator.userAgent),
        (QU = o_.match(/iPad/i) || o_.match(/iPhone/)),
        (ZU = 12);
      dH = ["resize", "orientationchange"];
      (vH = (e, t) => (0, u_.default)((0, l_.default)(e, t), c_.default)),
        (gH = (e, t) => {
          (0, yr.default)(e, (r, n) => {
            r.forEach((o, i) => {
              let a = n + Ts + i;
              t(o, n, a);
            });
          });
        }),
        (hH = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Oi({ config: t, elementApi: qe });
        });
    });
  var b_ = c((mt) => {
    "use strict";
    var _H = pn().default,
      TH = nu().default;
    Object.defineProperty(mt, "__esModule", { value: !0 });
    mt.actions = void 0;
    mt.destroy = T_;
    mt.init = AH;
    mt.setEnv = xH;
    mt.store = void 0;
    Wl();
    var bH = Wo(),
      IH = TH((vE(), rt(pE))),
      As = (ms(), rt(__)),
      OH = _H((pi(), rt(Oy)));
    mt.actions = OH;
    var ws = (mt.store = (0, bH.createStore)(IH.default));
    function xH(e) {
      e() && (0, As.observeRequests)(ws);
    }
    function AH(e) {
      T_(), (0, As.startEngine)({ store: ws, rawData: e, allowEvents: !0 });
    }
    function T_() {
      (0, As.stopEngine)(ws);
    }
  });
  var A_ = c((Xj, x_) => {
    "use strict";
    var I_ = Ue(),
      O_ = b_();
    O_.setEnv(I_.env);
    I_.define(
      "ix2",
      (x_.exports = function () {
        return O_;
      })
    );
  });
  var S_ = c((Bj, w_) => {
    "use strict";
    var mr = Ue();
    mr.define(
      "links",
      (w_.exports = function (e, t) {
        var r = {},
          n = e(window),
          o,
          i = mr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          d = /index\.(html|php)$/,
          h = /\/$/,
          v,
          E;
        r.ready = r.design = r.preview = m;
        function m() {
          (o = i && mr.env("design")),
            (E = mr.env("slug") || a.pathname || ""),
            mr.scroll.off(_),
            (v = []);
          for (var x = document.links, S = 0; S < x.length; ++S) b(x[S]);
          v.length && (mr.scroll.on(_), _());
        }
        function b(x) {
          var S =
            (o && x.getAttribute("href-disabled")) || x.getAttribute("href");
          if (((s.href = S), !(S.indexOf(":") >= 0))) {
            var O = e(x);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var w = e(s.hash);
              w.length && v.push({ link: O, sec: w, active: !1 });
              return;
            }
            if (!(S === "#" || S === "")) {
              var L = s.href === a.href || S === E || (d.test(S) && h.test(E));
              q(O, u, L);
            }
          }
        }
        function _() {
          var x = n.scrollTop(),
            S = n.height();
          t.each(v, function (O) {
            var w = O.link,
              L = O.sec,
              R = L.offset().top,
              X = L.outerHeight(),
              B = S * 0.5,
              z = L.is(":visible") && R + X - B >= x && R + B <= x + S;
            O.active !== z && ((O.active = z), q(w, u, z));
          });
        }
        function q(x, S, O) {
          var w = x.hasClass(S);
          (O && w) || (!O && !w) || (O ? x.addClass(S) : x.removeClass(S));
        }
        return r;
      })
    );
  });
  var C_ = c((jj, R_) => {
    "use strict";
    var Ri = Ue();
    Ri.define(
      "scroll",
      (R_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = b() ? null : window.history,
          o = e(window),
          i = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (M) {
              window.setTimeout(M, 15);
            },
          u = Ri.env("editor") ? ".w-editor-body" : "body",
          d =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          h = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
          E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(E));
        function b() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
        function q(M) {
          return _.test(M.hash) && M.host + M.pathname === r.host + r.pathname;
        }
        let x =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function S() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            x.matches
          );
        }
        function O(M, I) {
          var D;
          switch (I) {
            case "add":
              (D = M.attr("tabindex")),
                D
                  ? M.attr("data-wf-tabindex-swap", D)
                  : M.attr("tabindex", "-1");
              break;
            case "remove":
              (D = M.attr("data-wf-tabindex-swap")),
                D
                  ? (M.attr("tabindex", D),
                    M.removeAttr("data-wf-tabindex-swap"))
                  : M.removeAttr("tabindex");
              break;
          }
          M.toggleClass("wf-force-outline-none", I === "add");
        }
        function w(M) {
          var I = M.currentTarget;
          if (
            !(
              Ri.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(I.className))
            )
          ) {
            var D = q(I) ? I.hash : "";
            if (D !== "") {
              var j = e(D);
              j.length &&
                (M && (M.preventDefault(), M.stopPropagation()),
                L(D, M),
                window.setTimeout(
                  function () {
                    R(j, function () {
                      O(j, "add"),
                        j.get(0).focus({ preventScroll: !0 }),
                        O(j, "remove");
                    });
                  },
                  M ? 0 : 300
                ));
            }
          }
        }
        function L(M) {
          if (
            r.hash !== M &&
            n &&
            n.pushState &&
            !(Ri.env.chrome && r.protocol === "file:")
          ) {
            var I = n.state && n.state.hash;
            I !== M && n.pushState({ hash: M }, "", M);
          }
        }
        function R(M, I) {
          var D = o.scrollTop(),
            j = X(M);
          if (D !== j) {
            var H = B(M, D, j),
              J = Date.now(),
              te = function () {
                var ae = Date.now() - J;
                window.scroll(0, z(D, j, ae, H)),
                  ae <= H ? s(te) : typeof I == "function" && I();
              };
            s(te);
          }
        }
        function X(M) {
          var I = e(d),
            D = I.css("position") === "fixed" ? I.outerHeight() : 0,
            j = M.offset().top - D;
          if (M.data("scroll") === "mid") {
            var H = o.height() - D,
              J = M.outerHeight();
            J < H && (j -= Math.round((H - J) / 2));
          }
          return j;
        }
        function B(M, I, D) {
          if (S()) return 0;
          var j = 1;
          return (
            a.add(M).each(function (H, J) {
              var te = parseFloat(J.getAttribute("data-scroll-time"));
              !isNaN(te) && te >= 0 && (j = te);
            }),
            (472.143 * Math.log(Math.abs(I - D) + 125) - 2e3) * j
          );
        }
        function z(M, I, D, j) {
          return D > j ? I : M + (I - M) * $(D / j);
        }
        function $(M) {
          return M < 0.5
            ? 4 * M * M * M
            : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1;
        }
        function Z() {
          var { WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: I } = t;
          i.on(I, v, w),
            i.on(M, h, function (D) {
              D.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: Z };
      })
    );
  });
  var N_ = c((zj, L_) => {
    "use strict";
    var wH = Ue();
    wH.define(
      "touch",
      (L_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
            );
          });
        function n(i) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            d,
            h;
          i.addEventListener("touchstart", v, !1),
            i.addEventListener("touchmove", E, !1),
            i.addEventListener("touchend", m, !1),
            i.addEventListener("touchcancel", b, !1),
            i.addEventListener("mousedown", v, !1),
            i.addEventListener("mousemove", E, !1),
            i.addEventListener("mouseup", m, !1),
            i.addEventListener("mouseout", b, !1);
          function v(q) {
            var x = q.touches;
            (x && x.length > 1) ||
              ((a = !0),
              x ? ((s = !0), (d = x[0].clientX)) : (d = q.clientX),
              (h = d));
          }
          function E(q) {
            if (a) {
              if (s && q.type === "mousemove") {
                q.preventDefault(), q.stopPropagation();
                return;
              }
              var x = q.touches,
                S = x ? x[0].clientX : q.clientX,
                O = S - h;
              (h = S),
                Math.abs(O) > u &&
                  r &&
                  String(r()) === "" &&
                  (o("swipe", q, { direction: O > 0 ? "right" : "left" }), b());
            }
          }
          function m(q) {
            if (a && ((a = !1), s && q.type === "mouseup")) {
              q.preventDefault(), q.stopPropagation(), (s = !1);
              return;
            }
          }
          function b() {
            a = !1;
          }
          function _() {
            i.removeEventListener("touchstart", v, !1),
              i.removeEventListener("touchmove", E, !1),
              i.removeEventListener("touchend", m, !1),
              i.removeEventListener("touchcancel", b, !1),
              i.removeEventListener("mousedown", v, !1),
              i.removeEventListener("mousemove", E, !1),
              i.removeEventListener("mouseup", m, !1),
              i.removeEventListener("mouseout", b, !1),
              (i = null);
          }
          this.destroy = _;
        }
        function o(i, a, s) {
          var u = e.Event(i, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var M_ = c((Kj, q_) => {
    "use strict";
    var Ht = Ue(),
      SH = Tr(),
      et = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      P_ = !0,
      RH = /^#[a-zA-Z0-9\-_]+$/;
    Ht.define(
      "dropdown",
      (q_.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          o = Ht.env(),
          i = !1,
          a,
          s = Ht.env.touch,
          u = ".w-dropdown",
          d = "w--open",
          h = SH.triggers,
          v = 900,
          E = "focusout" + u,
          m = "keydown" + u,
          b = "mouseenter" + u,
          _ = "mousemove" + u,
          q = "mouseleave" + u,
          x = (s ? "click" : "mouseup") + u,
          S = "w-close" + u,
          O = "setting" + u,
          w = e(document),
          L;
        (n.ready = R),
          (n.design = function () {
            i && I(), (i = !1), R();
          }),
          (n.preview = function () {
            (i = !0), R();
          });
        function R() {
          (a = o && Ht.env("design")), (L = w.find(u)), L.each(X);
        }
        function X(f, U) {
          var Y = e(U),
            G = e.data(U, u);
          G ||
            (G = e.data(U, u, {
              open: !1,
              el: Y,
              config: {},
              selectedIdx: -1,
            })),
            (G.toggle = G.el.children(".w-dropdown-toggle")),
            (G.list = G.el.children(".w-dropdown-list")),
            (G.links = G.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (G.complete = H(G)),
            (G.mouseLeave = te(G)),
            (G.mouseUpOutside = j(G)),
            (G.mouseMoveOutside = ae(G)),
            B(G);
          var ue = G.toggle.attr("id"),
            pe = G.list.attr("id");
          ue || (ue = "w-dropdown-toggle-" + f),
            pe || (pe = "w-dropdown-list-" + f),
            G.toggle.attr("id", ue),
            G.toggle.attr("aria-controls", pe),
            G.toggle.attr("aria-haspopup", "menu"),
            G.toggle.attr("aria-expanded", "false"),
            G.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            G.toggle.prop("tagName") !== "BUTTON" &&
              (G.toggle.attr("role", "button"),
              G.toggle.attr("tabindex") || G.toggle.attr("tabindex", "0")),
            G.list.attr("id", pe),
            G.list.attr("aria-labelledby", ue),
            G.links.each(function (p, V) {
              V.hasAttribute("tabindex") || V.setAttribute("tabindex", "0"),
                RH.test(V.hash) && V.addEventListener("click", M.bind(null, G));
            }),
            G.el.off(u),
            G.toggle.off(u),
            G.nav && G.nav.off(u);
          var re = $(G, P_);
          a && G.el.on(O, z(G)),
            a ||
              (o && ((G.hovering = !1), M(G)),
              G.config.hover && G.toggle.on(b, J(G)),
              G.el.on(S, re),
              G.el.on(m, _e(G)),
              G.el.on(E, C(G)),
              G.toggle.on(x, re),
              G.toggle.on(m, F(G)),
              (G.nav = G.el.closest(".w-nav")),
              G.nav.on(S, re));
        }
        function B(f) {
          var U = Number(f.el.css("z-index"));
          (f.manageZ = U === v || U === v + 1),
            (f.config = {
              hover: f.el.attr("data-hover") === "true" && !s,
              delay: f.el.attr("data-delay"),
            });
        }
        function z(f) {
          return function (U, Y) {
            (Y = Y || {}),
              B(f),
              Y.open === !0 && Z(f, !0),
              Y.open === !1 && M(f, { immediate: !0 });
          };
        }
        function $(f, U) {
          return r(function (Y) {
            if (f.open || (Y && Y.type === "w-close"))
              return M(f, { forceClose: U });
            Z(f);
          });
        }
        function Z(f) {
          if (!f.open) {
            D(f),
              (f.open = !0),
              f.list.addClass(d),
              f.toggle.addClass(d),
              f.toggle.attr("aria-expanded", "true"),
              h.intro(0, f.el[0]),
              Ht.redraw.up(),
              f.manageZ && f.el.css("z-index", v + 1);
            var U = Ht.env("editor");
            a || w.on(x, f.mouseUpOutside),
              f.hovering && !U && f.el.on(q, f.mouseLeave),
              f.hovering && U && w.on(_, f.mouseMoveOutside),
              window.clearTimeout(f.delayId);
          }
        }
        function M(f, { immediate: U, forceClose: Y } = {}) {
          if (f.open && !(f.config.hover && f.hovering && !Y)) {
            f.toggle.attr("aria-expanded", "false"), (f.open = !1);
            var G = f.config;
            if (
              (h.outro(0, f.el[0]),
              w.off(x, f.mouseUpOutside),
              w.off(_, f.mouseMoveOutside),
              f.el.off(q, f.mouseLeave),
              window.clearTimeout(f.delayId),
              !G.delay || U)
            )
              return f.complete();
            f.delayId = window.setTimeout(f.complete, G.delay);
          }
        }
        function I() {
          w.find(u).each(function (f, U) {
            e(U).triggerHandler(S);
          });
        }
        function D(f) {
          var U = f.el[0];
          L.each(function (Y, G) {
            var ue = e(G);
            ue.is(U) || ue.has(U).length || ue.triggerHandler(S);
          });
        }
        function j(f) {
          return (
            f.mouseUpOutside && w.off(x, f.mouseUpOutside),
            r(function (U) {
              if (f.open) {
                var Y = e(U.target);
                if (!Y.closest(".w-dropdown-toggle").length) {
                  var G = e.inArray(f.el[0], Y.parents(u)) === -1,
                    ue = Ht.env("editor");
                  if (G) {
                    if (ue) {
                      var pe =
                          Y.parents().length === 1 &&
                          Y.parents("svg").length === 1,
                        re = Y.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (pe || re) return;
                    }
                    M(f);
                  }
                }
              }
            })
          );
        }
        function H(f) {
          return function () {
            f.list.removeClass(d),
              f.toggle.removeClass(d),
              f.manageZ && f.el.css("z-index", "");
          };
        }
        function J(f) {
          return function () {
            (f.hovering = !0), Z(f);
          };
        }
        function te(f) {
          return function () {
            (f.hovering = !1), f.links.is(":focus") || M(f);
          };
        }
        function ae(f) {
          return r(function (U) {
            if (f.open) {
              var Y = e(U.target),
                G = e.inArray(f.el[0], Y.parents(u)) === -1;
              if (G) {
                var ue = Y.parents(".w-editor-bem-EditorHoverControls").length,
                  pe = Y.parents(".w-editor-bem-RTToolbar").length,
                  re = e(".w-editor-bem-EditorOverlay"),
                  p =
                    re.find(".w-editor-edit-outline").length ||
                    re.find(".w-editor-bem-RTToolbar").length;
                if (ue || pe || p) return;
                (f.hovering = !1), M(f);
              }
            }
          });
        }
        function _e(f) {
          return function (U) {
            if (!(a || !f.open))
              switch (
                ((f.selectedIdx = f.links.index(document.activeElement)),
                U.keyCode)
              ) {
                case et.HOME:
                  return f.open
                    ? ((f.selectedIdx = 0), g(f), U.preventDefault())
                    : void 0;
                case et.END:
                  return f.open
                    ? ((f.selectedIdx = f.links.length - 1),
                      g(f),
                      U.preventDefault())
                    : void 0;
                case et.ESCAPE:
                  return M(f), f.toggle.focus(), U.stopPropagation();
                case et.ARROW_RIGHT:
                case et.ARROW_DOWN:
                  return (
                    (f.selectedIdx = Math.min(
                      f.links.length - 1,
                      f.selectedIdx + 1
                    )),
                    g(f),
                    U.preventDefault()
                  );
                case et.ARROW_LEFT:
                case et.ARROW_UP:
                  return (
                    (f.selectedIdx = Math.max(-1, f.selectedIdx - 1)),
                    g(f),
                    U.preventDefault()
                  );
              }
          };
        }
        function g(f) {
          f.links[f.selectedIdx] && f.links[f.selectedIdx].focus();
        }
        function F(f) {
          var U = $(f, P_);
          return function (Y) {
            if (!a) {
              if (!f.open)
                switch (Y.keyCode) {
                  case et.ARROW_UP:
                  case et.ARROW_DOWN:
                    return Y.stopPropagation();
                }
              switch (Y.keyCode) {
                case et.SPACE:
                case et.ENTER:
                  return U(), Y.stopPropagation(), Y.preventDefault();
              }
            }
          };
        }
        function C(f) {
          return r(function (U) {
            var { relatedTarget: Y, target: G } = U,
              ue = f.el[0],
              pe = ue.contains(Y) || ue.contains(G);
            return pe || M(f), U.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var F_ = c((Yj, D_) => {
    "use strict";
    var St = Ue(),
      CH = Tr(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    St.define(
      "navbar",
      (D_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(window),
          i = e(document),
          a = t.debounce,
          s,
          u,
          d,
          h,
          v = St.env(),
          E = '<div class="w-nav-overlay" data-wf-ignore />',
          m = ".w-nav",
          b = "w--open",
          _ = "w--nav-dropdown-open",
          q = "w--nav-dropdown-toggle-open",
          x = "w--nav-dropdown-list-open",
          S = "w--nav-link-open",
          O = CH.triggers,
          w = e();
        (r.ready = r.design = r.preview = L),
          (r.destroy = function () {
            (w = e()), R(), u && u.length && u.each($);
          });
        function L() {
          (d = v && St.env("design")),
            (h = St.env("editor")),
            (s = e(document.body)),
            (u = i.find(m)),
            u.length && (u.each(z), R(), X());
        }
        function R() {
          St.resize.off(B);
        }
        function X() {
          St.resize.on(B);
        }
        function B() {
          u.each(C);
        }
        function z(p, V) {
          var K = e(V),
            W = e.data(V, m);
          W ||
            (W = e.data(V, m, {
              open: !1,
              el: K,
              config: {},
              selectedIdx: -1,
            })),
            (W.menu = K.find(".w-nav-menu")),
            (W.links = W.menu.find(".w-nav-link")),
            (W.dropdowns = W.menu.find(".w-dropdown")),
            (W.dropdownToggle = W.menu.find(".w-dropdown-toggle")),
            (W.dropdownList = W.menu.find(".w-dropdown-list")),
            (W.button = K.find(".w-nav-button")),
            (W.container = K.find(".w-container")),
            (W.overlayContainerId = "w-nav-overlay-" + p),
            (W.outside = g(W));
          var le = K.find(".w-nav-brand");
          le &&
            le.attr("href") === "/" &&
            le.attr("aria-label") == null &&
            le.attr("aria-label", "home"),
            W.button.attr("style", "-webkit-user-select: text;"),
            W.button.attr("aria-label") == null &&
              W.button.attr("aria-label", "menu"),
            W.button.attr("role", "button"),
            W.button.attr("tabindex", "0"),
            W.button.attr("aria-controls", W.overlayContainerId),
            W.button.attr("aria-haspopup", "menu"),
            W.button.attr("aria-expanded", "false"),
            W.el.off(m),
            W.button.off(m),
            W.menu.off(m),
            I(W),
            d
              ? (Z(W), W.el.on("setting" + m, D(W)))
              : (M(W),
                W.button.on("click" + m, ae(W)),
                W.menu.on("click" + m, "a", _e(W)),
                W.button.on("keydown" + m, j(W)),
                W.el.on("keydown" + m, H(W))),
            C(p, V);
        }
        function $(p, V) {
          var K = e.data(V, m);
          K && (Z(K), e.removeData(V, m));
        }
        function Z(p) {
          p.overlay && (re(p, !0), p.overlay.remove(), (p.overlay = null));
        }
        function M(p) {
          p.overlay ||
            ((p.overlay = e(E).appendTo(p.el)),
            p.overlay.attr("id", p.overlayContainerId),
            (p.parent = p.menu.parent()),
            re(p, !0));
        }
        function I(p) {
          var V = {},
            K = p.config || {},
            W = (V.animation = p.el.attr("data-animation") || "default");
          (V.animOver = /^over/.test(W)),
            (V.animDirect = /left$/.test(W) ? -1 : 1),
            K.animation !== W && p.open && t.defer(te, p),
            (V.easing = p.el.attr("data-easing") || "ease"),
            (V.easing2 = p.el.attr("data-easing2") || "ease");
          var le = p.el.attr("data-duration");
          (V.duration = le != null ? Number(le) : 400),
            (V.docHeight = p.el.attr("data-doc-height")),
            (p.config = V);
        }
        function D(p) {
          return function (V, K) {
            K = K || {};
            var W = o.width();
            I(p),
              K.open === !0 && ue(p, !0),
              K.open === !1 && re(p, !0),
              p.open &&
                t.defer(function () {
                  W !== o.width() && te(p);
                });
          };
        }
        function j(p) {
          return function (V) {
            switch (V.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return ae(p)(), V.preventDefault(), V.stopPropagation();
              case Se.ESCAPE:
                return re(p), V.preventDefault(), V.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return p.open
                  ? (V.keyCode === Se.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    J(p),
                    V.preventDefault(),
                    V.stopPropagation())
                  : (V.preventDefault(), V.stopPropagation());
            }
          };
        }
        function H(p) {
          return function (V) {
            if (p.open)
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                V.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    V.keyCode === Se.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    J(p),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    re(p),
                    p.button.focus(),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    J(p),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    J(p),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
              }
          };
        }
        function J(p) {
          if (p.links[p.selectedIdx]) {
            var V = p.links[p.selectedIdx];
            V.focus(), _e(V);
          }
        }
        function te(p) {
          p.open && (re(p, !0), ue(p, !0));
        }
        function ae(p) {
          return a(function () {
            p.open ? re(p) : ue(p);
          });
        }
        function _e(p) {
          return function (V) {
            var K = e(this),
              W = K.attr("href");
            if (!St.validClick(V.currentTarget)) {
              V.preventDefault();
              return;
            }
            W && W.indexOf("#") === 0 && p.open && re(p);
          };
        }
        function g(p) {
          return (
            p.outside && i.off("click" + m, p.outside),
            function (V) {
              var K = e(V.target);
              (h && K.closest(".w-editor-bem-EditorOverlay").length) || F(p, K);
            }
          );
        }
        var F = a(function (p, V) {
          if (p.open) {
            var K = V.closest(".w-nav-menu");
            p.menu.is(K) || re(p);
          }
        });
        function C(p, V) {
          var K = e.data(V, m),
            W = (K.collapsed = K.button.css("display") !== "none");
          if ((K.open && !W && !d && re(K, !0), K.container.length)) {
            var le = U(K);
            K.links.each(le), K.dropdowns.each(le);
          }
          K.open && pe(K);
        }
        var f = "max-width";
        function U(p) {
          var V = p.container.css(f);
          return (
            V === "none" && (V = ""),
            function (K, W) {
              (W = e(W)), W.css(f, ""), W.css(f) === "none" && W.css(f, V);
            }
          );
        }
        function Y(p, V) {
          V.setAttribute("data-nav-menu-open", "");
        }
        function G(p, V) {
          V.removeAttribute("data-nav-menu-open");
        }
        function ue(p, V) {
          if (p.open) return;
          (p.open = !0),
            p.menu.each(Y),
            p.links.addClass(S),
            p.dropdowns.addClass(_),
            p.dropdownToggle.addClass(q),
            p.dropdownList.addClass(x),
            p.button.addClass(b);
          var K = p.config,
            W = K.animation;
          (W === "none" || !n.support.transform || K.duration <= 0) && (V = !0);
          var le = pe(p),
            ke = p.menu.outerHeight(!0),
            dt = p.menu.outerWidth(!0),
            l = p.el.height(),
            y = p.el[0];
          if (
            (C(0, y),
            O.intro(0, y),
            St.redraw.up(),
            d || i.on("click" + m, p.outside),
            V)
          ) {
            N();
            return;
          }
          var T = "transform " + K.duration + "ms " + K.easing;
          if (
            (p.overlay &&
              ((w = p.menu.prev()), p.overlay.show().append(p.menu)),
            K.animOver)
          ) {
            n(p.menu)
              .add(T)
              .set({ x: K.animDirect * dt, height: le })
              .start({ x: 0 })
              .then(N),
              p.overlay && p.overlay.width(dt);
            return;
          }
          var A = l + ke;
          n(p.menu).add(T).set({ y: -A }).start({ y: 0 }).then(N);
          function N() {
            p.button.attr("aria-expanded", "true");
          }
        }
        function pe(p) {
          var V = p.config,
            K = V.docHeight ? i.height() : s.height();
          return (
            V.animOver
              ? p.menu.height(K)
              : p.el.css("position") !== "fixed" && (K -= p.el.outerHeight(!0)),
            p.overlay && p.overlay.height(K),
            K
          );
        }
        function re(p, V) {
          if (!p.open) return;
          (p.open = !1), p.button.removeClass(b);
          var K = p.config;
          if (
            ((K.animation === "none" ||
              !n.support.transform ||
              K.duration <= 0) &&
              (V = !0),
            O.outro(0, p.el[0]),
            i.off("click" + m, p.outside),
            V)
          ) {
            n(p.menu).stop(), y();
            return;
          }
          var W = "transform " + K.duration + "ms " + K.easing2,
            le = p.menu.outerHeight(!0),
            ke = p.menu.outerWidth(!0),
            dt = p.el.height();
          if (K.animOver) {
            n(p.menu)
              .add(W)
              .start({ x: ke * K.animDirect })
              .then(y);
            return;
          }
          var l = dt + le;
          n(p.menu).add(W).start({ y: -l }).then(y);
          function y() {
            p.menu.height(""),
              n(p.menu).set({ x: 0, y: 0 }),
              p.menu.each(G),
              p.links.removeClass(S),
              p.dropdowns.removeClass(_),
              p.dropdownToggle.removeClass(q),
              p.dropdownList.removeClass(x),
              p.overlay &&
                p.overlay.children().length &&
                (w.length ? p.menu.insertAfter(w) : p.menu.prependTo(p.parent),
                p.overlay.attr("style", "").hide()),
              p.el.triggerHandler("w-close"),
              p.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var U_ = c(($j, V_) => {
    "use strict";
    var Rt = Ue(),
      LH = Tr(),
      ft = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      G_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Rt.define(
      "slider",
      (V_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(document),
          i,
          a,
          s = Rt.env(),
          u = ".w-slider",
          d = '<div class="w-slider-dot" data-wf-ignore />',
          h =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          v = "w-slider-force-show",
          E = LH.triggers,
          m,
          b = !1;
        (r.ready = function () {
          (a = Rt.env("design")), _();
        }),
          (r.design = function () {
            (a = !0), setTimeout(_, 1e3);
          }),
          (r.preview = function () {
            (a = !1), _();
          }),
          (r.redraw = function () {
            (b = !0), _(), (b = !1);
          }),
          (r.destroy = q);
        function _() {
          (i = o.find(u)), i.length && (i.each(O), !m && (q(), x()));
        }
        function q() {
          Rt.resize.off(S), Rt.redraw.off(r.redraw);
        }
        function x() {
          Rt.resize.on(S), Rt.redraw.on(r.redraw);
        }
        function S() {
          i.filter(":visible").each(H);
        }
        function O(g, F) {
          var C = e(F),
            f = e.data(F, u);
          f ||
            (f = e.data(F, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: C,
              config: {},
            })),
            (f.mask = C.children(".w-slider-mask")),
            (f.left = C.children(".w-slider-arrow-left")),
            (f.right = C.children(".w-slider-arrow-right")),
            (f.nav = C.children(".w-slider-nav")),
            (f.slides = f.mask.children(".w-slide")),
            f.slides.each(E.reset),
            b && (f.maskWidth = 0),
            C.attr("role") === void 0 && C.attr("role", "region"),
            C.attr("aria-label") === void 0 && C.attr("aria-label", "carousel");
          var U = f.mask.attr("id");
          if (
            (U || ((U = "w-slider-mask-" + g), f.mask.attr("id", U)),
            !a && !f.ariaLiveLabel && (f.ariaLiveLabel = e(h).appendTo(f.mask)),
            f.left.attr("role", "button"),
            f.left.attr("tabindex", "0"),
            f.left.attr("aria-controls", U),
            f.left.attr("aria-label") === void 0 &&
              f.left.attr("aria-label", "previous slide"),
            f.right.attr("role", "button"),
            f.right.attr("tabindex", "0"),
            f.right.attr("aria-controls", U),
            f.right.attr("aria-label") === void 0 &&
              f.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            f.left.hide(), f.right.hide(), f.nav.hide(), (m = !0);
            return;
          }
          f.el.off(u),
            f.left.off(u),
            f.right.off(u),
            f.nav.off(u),
            w(f),
            a
              ? (f.el.on("setting" + u, I(f)), M(f), (f.hasTimer = !1))
              : (f.el.on("swipe" + u, I(f)),
                f.left.on("click" + u, B(f)),
                f.right.on("click" + u, z(f)),
                f.left.on("keydown" + u, X(f, B)),
                f.right.on("keydown" + u, X(f, z)),
                f.nav.on("keydown" + u, "> div", I(f)),
                f.config.autoplay &&
                  !f.hasTimer &&
                  ((f.hasTimer = !0), (f.timerCount = 1), Z(f)),
                f.el.on("mouseenter" + u, R(f, !0, "mouse")),
                f.el.on("focusin" + u, R(f, !0, "keyboard")),
                f.el.on("mouseleave" + u, R(f, !1, "mouse")),
                f.el.on("focusout" + u, R(f, !1, "keyboard"))),
            f.nav.on("click" + u, "> div", I(f)),
            s ||
              f.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var Y = C.filter(":hidden");
          Y.addClass(v);
          var G = C.parents(":hidden");
          G.addClass(v), b || H(g, F), Y.removeClass(v), G.removeClass(v);
        }
        function w(g) {
          var F = {};
          (F.crossOver = 0),
            (F.animation = g.el.attr("data-animation") || "slide"),
            F.animation === "outin" &&
              ((F.animation = "cross"), (F.crossOver = 0.5)),
            (F.easing = g.el.attr("data-easing") || "ease");
          var C = g.el.attr("data-duration");
          if (
            ((F.duration = C != null ? parseInt(C, 10) : 500),
            L(g.el.attr("data-infinite")) && (F.infinite = !0),
            L(g.el.attr("data-disable-swipe")) && (F.disableSwipe = !0),
            L(g.el.attr("data-hide-arrows"))
              ? (F.hideArrows = !0)
              : g.config.hideArrows && (g.left.show(), g.right.show()),
            L(g.el.attr("data-autoplay")))
          ) {
            (F.autoplay = !0),
              (F.delay = parseInt(g.el.attr("data-delay"), 10) || 2e3),
              (F.timerMax = parseInt(g.el.attr("data-autoplay-limit"), 10));
            var f = "mousedown" + u + " touchstart" + u;
            a ||
              g.el.off(f).one(f, function () {
                M(g);
              });
          }
          var U = g.right.width();
          (F.edge = U ? U + 40 : 100), (g.config = F);
        }
        function L(g) {
          return g === "1" || g === "true";
        }
        function R(g, F, C) {
          return function (f) {
            if (F) g.hasFocus[C] = F;
            else if (
              e.contains(g.el.get(0), f.relatedTarget) ||
              ((g.hasFocus[C] = F),
              (g.hasFocus.mouse && C === "keyboard") ||
                (g.hasFocus.keyboard && C === "mouse"))
            )
              return;
            F
              ? (g.ariaLiveLabel.attr("aria-live", "polite"),
                g.hasTimer && M(g))
              : (g.ariaLiveLabel.attr("aria-live", "off"), g.hasTimer && Z(g));
          };
        }
        function X(g, F) {
          return function (C) {
            switch (C.keyCode) {
              case ft.SPACE:
              case ft.ENTER:
                return F(g)(), C.preventDefault(), C.stopPropagation();
            }
          };
        }
        function B(g) {
          return function () {
            j(g, { index: g.index - 1, vector: -1 });
          };
        }
        function z(g) {
          return function () {
            j(g, { index: g.index + 1, vector: 1 });
          };
        }
        function $(g, F) {
          var C = null;
          F === g.slides.length && (_(), J(g)),
            t.each(g.anchors, function (f, U) {
              e(f.els).each(function (Y, G) {
                e(G).index() === F && (C = U);
              });
            }),
            C != null && j(g, { index: C, immediate: !0 });
        }
        function Z(g) {
          M(g);
          var F = g.config,
            C = F.timerMax;
          (C && g.timerCount++ > C) ||
            (g.timerId = window.setTimeout(function () {
              g.timerId == null || a || (z(g)(), Z(g));
            }, F.delay));
        }
        function M(g) {
          window.clearTimeout(g.timerId), (g.timerId = null);
        }
        function I(g) {
          return function (F, C) {
            C = C || {};
            var f = g.config;
            if (a && F.type === "setting") {
              if (C.select === "prev") return B(g)();
              if (C.select === "next") return z(g)();
              if ((w(g), J(g), C.select == null)) return;
              $(g, C.select);
              return;
            }
            if (F.type === "swipe")
              return f.disableSwipe || Rt.env("editor")
                ? void 0
                : C.direction === "left"
                ? z(g)()
                : C.direction === "right"
                ? B(g)()
                : void 0;
            if (g.nav.has(F.target).length) {
              var U = e(F.target).index();
              if (
                (F.type === "click" && j(g, { index: U }), F.type === "keydown")
              )
                switch (F.keyCode) {
                  case ft.ENTER:
                  case ft.SPACE: {
                    j(g, { index: U }), F.preventDefault();
                    break;
                  }
                  case ft.ARROW_LEFT:
                  case ft.ARROW_UP: {
                    D(g.nav, Math.max(U - 1, 0)), F.preventDefault();
                    break;
                  }
                  case ft.ARROW_RIGHT:
                  case ft.ARROW_DOWN: {
                    D(g.nav, Math.min(U + 1, g.pages)), F.preventDefault();
                    break;
                  }
                  case ft.HOME: {
                    D(g.nav, 0), F.preventDefault();
                    break;
                  }
                  case ft.END: {
                    D(g.nav, g.pages), F.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function D(g, F) {
          var C = g.children().eq(F).focus();
          g.children().not(C);
        }
        function j(g, F) {
          F = F || {};
          var C = g.config,
            f = g.anchors;
          g.previous = g.index;
          var U = F.index,
            Y = {};
          U < 0
            ? ((U = f.length - 1),
              C.infinite &&
                ((Y.x = -g.endX), (Y.from = 0), (Y.to = f[0].width)))
            : U >= f.length &&
              ((U = 0),
              C.infinite &&
                ((Y.x = f[f.length - 1].width),
                (Y.from = -f[f.length - 1].x),
                (Y.to = Y.from - Y.x))),
            (g.index = U);
          var G = g.nav
            .children()
            .eq(U)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          g.nav
            .children()
            .not(G)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            C.hideArrows &&
              (g.index === f.length - 1 ? g.right.hide() : g.right.show(),
              g.index === 0 ? g.left.hide() : g.left.show());
          var ue = g.offsetX || 0,
            pe = (g.offsetX = -f[g.index].x),
            re = { x: pe, opacity: 1, visibility: "" },
            p = e(f[g.index].els),
            V = e(f[g.previous] && f[g.previous].els),
            K = g.slides.not(p),
            W = C.animation,
            le = C.easing,
            ke = Math.round(C.duration),
            dt = F.vector || (g.index > g.previous ? 1 : -1),
            l = "opacity " + ke + "ms " + le,
            y = "transform " + ke + "ms " + le;
          if (
            (p.find(G_).removeAttr("tabindex"),
            p.removeAttr("aria-hidden"),
            p.find("*").removeAttr("aria-hidden"),
            K.find(G_).attr("tabindex", "-1"),
            K.attr("aria-hidden", "true"),
            K.find("*").attr("aria-hidden", "true"),
            a || (p.each(E.intro), K.each(E.outro)),
            F.immediate && !b)
          ) {
            n(p).set(re), N();
            return;
          }
          if (g.index === g.previous) return;
          if (
            (a || g.ariaLiveLabel.text(`Slide ${U + 1} of ${f.length}.`),
            W === "cross")
          ) {
            var T = Math.round(ke - ke * C.crossOver),
              A = Math.round(ke - T);
            (l = "opacity " + T + "ms " + le),
              n(V).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              n(p)
                .set({ visibility: "", x: pe, opacity: 0, zIndex: g.depth++ })
                .add(l)
                .wait(A)
                .then({ opacity: 1 })
                .then(N);
            return;
          }
          if (W === "fade") {
            n(V).set({ visibility: "" }).stop(),
              n(p)
                .set({ visibility: "", x: pe, opacity: 0, zIndex: g.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(N);
            return;
          }
          if (W === "over") {
            (re = { x: g.endX }),
              n(V).set({ visibility: "" }).stop(),
              n(p)
                .set({
                  visibility: "",
                  zIndex: g.depth++,
                  x: pe + f[g.index].width * dt,
                })
                .add(y)
                .start({ x: pe })
                .then(N);
            return;
          }
          C.infinite && Y.x
            ? (n(g.slides.not(V))
                .set({ visibility: "", x: Y.x })
                .add(y)
                .start({ x: pe }),
              n(V).set({ visibility: "", x: Y.from }).add(y).start({ x: Y.to }),
              (g.shifted = V))
            : (C.infinite &&
                g.shifted &&
                (n(g.shifted).set({ visibility: "", x: ue }),
                (g.shifted = null)),
              n(g.slides).set({ visibility: "" }).add(y).start({ x: pe }));
          function N() {
            (p = e(f[g.index].els)),
              (K = g.slides.not(p)),
              W !== "slide" && (re.visibility = "hidden"),
              n(K).set(re);
          }
        }
        function H(g, F) {
          var C = e.data(F, u);
          if (C) {
            if (ae(C)) return J(C);
            a && _e(C) && J(C);
          }
        }
        function J(g) {
          var F = 1,
            C = 0,
            f = 0,
            U = 0,
            Y = g.maskWidth,
            G = Y - g.config.edge;
          G < 0 && (G = 0),
            (g.anchors = [{ els: [], x: 0, width: 0 }]),
            g.slides.each(function (pe, re) {
              f - C > G &&
                (F++,
                (C += Y),
                (g.anchors[F - 1] = { els: [], x: f, width: 0 })),
                (U = e(re).outerWidth(!0)),
                (f += U),
                (g.anchors[F - 1].width += U),
                g.anchors[F - 1].els.push(re);
              var p = pe + 1 + " of " + g.slides.length;
              e(re).attr("aria-label", p), e(re).attr("role", "group");
            }),
            (g.endX = f),
            a && (g.pages = null),
            g.nav.length && g.pages !== F && ((g.pages = F), te(g));
          var ue = g.index;
          ue >= F && (ue = F - 1), j(g, { immediate: !0, index: ue });
        }
        function te(g) {
          var F = [],
            C,
            f = g.el.attr("data-nav-spacing");
          f && (f = parseFloat(f) + "px");
          for (var U = 0, Y = g.pages; U < Y; U++)
            (C = e(d)),
              C.attr("aria-label", "Show slide " + (U + 1) + " of " + Y)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              g.nav.hasClass("w-num") && C.text(U + 1),
              f != null && C.css({ "margin-left": f, "margin-right": f }),
              F.push(C);
          g.nav.empty().append(F);
        }
        function ae(g) {
          var F = g.mask.width();
          return g.maskWidth !== F ? ((g.maskWidth = F), !0) : !1;
        }
        function _e(g) {
          var F = 0;
          return (
            g.slides.each(function (C, f) {
              F += e(f).outerWidth(!0);
            }),
            g.slidesWidth !== F ? ((g.slidesWidth = F), !0) : !1
          );
        }
        return r;
      })
    );
  });
  Hs();
  ks();
  Bs();
  Ks();
  Tr();
  A_();
  S_();
  C_();
  N_();
  M_();
  F_();
  U_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-4" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|f3bae8e9-d2de-7d72-0628-c7d3857a1085",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|f3bae8e9-d2de-7d72-0628-c7d3857a1085",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 5,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699648567394,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-6" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|30a01fb0-5e27-5e69-8151-0ccbf6508676",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|30a01fb0-5e27-5e69-8151-0ccbf6508676",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 8,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699648594955,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-8" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|c9d57988-8368-e0cc-39c4-1ef2bdd2f7dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|c9d57988-8368-e0cc-39c4-1ef2bdd2f7dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 7,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699648595663,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-10" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|5ccab558-fdb6-bb85-c32a-72090c042713",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|5ccab558-fdb6-bb85-c32a-72090c042713",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 6,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699648596352,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-12" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|1a75dc7d-c287-deaa-c3b6-082e3c8eef7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|1a75dc7d-c287-deaa-c3b6-082e3c8eef7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 9,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699648738559,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-14" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|fb41b09d-959c-0280-24bd-dc95788e07ea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|fb41b09d-959c-0280-24bd-dc95788e07ea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 10,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699648748658,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-16" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|0bb40289-848f-a759-8fb2-6f141e436e68",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|0bb40289-848f-a759-8fb2-6f141e436e68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 4,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699648760735,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-18" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|82669ae0-2ab0-9921-dcd7-ed8d2d282412",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|82669ae0-2ab0-9921-dcd7-ed8d2d282412",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 4,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699691863345,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-20" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|6fac0e51-ec48-c06d-387b-20967bc9a779",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|6fac0e51-ec48-c06d-387b-20967bc9a779",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 6,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699691880500,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-22" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|40b8dcdc-3619-81eb-a0e7-fa3371d5fde8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|40b8dcdc-3619-81eb-a0e7-fa3371d5fde8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 8,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699691900932,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-24" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|821735f5-417a-bd4d-c882-5df782540436",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|821735f5-417a-bd4d-c882-5df782540436",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 4,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699694575840,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699721889707,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699736595214,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699736595214,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-32" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|58c6f740-3bbb-e25b-c81f-e9b87fb88a08",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|58c6f740-3bbb-e25b-c81f-e9b87fb88a08",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1699739211147,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|0bb40289-848f-a759-8fb2-6f141e436e68",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|0bb40289-848f-a759-8fb2-6f141e436e68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699740312564,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|0bb40289-848f-a759-8fb2-6f141e436e68",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|0bb40289-848f-a759-8fb2-6f141e436e68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699740312565,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|f3bae8e9-d2de-7d72-0628-c7d3857a1085",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|f3bae8e9-d2de-7d72-0628-c7d3857a1085",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699740994494,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|f3bae8e9-d2de-7d72-0628-c7d3857a1085",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|f3bae8e9-d2de-7d72-0628-c7d3857a1085",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699740994495,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|5ccab558-fdb6-bb85-c32a-72090c042713",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|5ccab558-fdb6-bb85-c32a-72090c042713",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699741120466,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|5ccab558-fdb6-bb85-c32a-72090c042713",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|5ccab558-fdb6-bb85-c32a-72090c042713",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699741120466,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|c9d57988-8368-e0cc-39c4-1ef2bdd2f7dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|c9d57988-8368-e0cc-39c4-1ef2bdd2f7dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699741153040,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|c9d57988-8368-e0cc-39c4-1ef2bdd2f7dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|c9d57988-8368-e0cc-39c4-1ef2bdd2f7dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699741153092,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|30a01fb0-5e27-5e69-8151-0ccbf6508676",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|30a01fb0-5e27-5e69-8151-0ccbf6508676",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699741175512,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|30a01fb0-5e27-5e69-8151-0ccbf6508676",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|30a01fb0-5e27-5e69-8151-0ccbf6508676",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699741175570,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|1a75dc7d-c287-deaa-c3b6-082e3c8eef7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|1a75dc7d-c287-deaa-c3b6-082e3c8eef7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699741214189,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|1a75dc7d-c287-deaa-c3b6-082e3c8eef7f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|1a75dc7d-c287-deaa-c3b6-082e3c8eef7f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699741214244,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|fb41b09d-959c-0280-24bd-dc95788e07ea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|fb41b09d-959c-0280-24bd-dc95788e07ea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699741238035,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5|fb41b09d-959c-0280-24bd-dc95788e07ea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5|fb41b09d-959c-0280-24bd-dc95788e07ea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699741238036,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-9", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-9-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-9-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1699741318057,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "654d582cdd1c22473dd34db5",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "654d582cdd1c22473dd34db5",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699989839755,
    },
  },
  actionLists: {
    "a-2": {
      id: "a-2",
      title: "LOOP 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".marquee-content-2",
                  selectorGuids: ["83665291-e09c-53c0-b29d-4950241a8a58"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".marquee-content-2",
                  selectorGuids: ["83665291-e09c-53c0-b29d-4950241a8a58"],
                },
                xValue: -79.45,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".marquee-content-2",
                  selectorGuids: ["83665291-e09c-53c0-b29d-4950241a8a58"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699720871530,
    },
    "a-4": {
      id: "a-4",
      title: "Nav stay",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  id: "654d582cdd1c22473dd34db5|dfdeccd4-0f9f-82c5-ddac-f89e4c722765",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "px",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699736772787,
    },
    "a-3": {
      id: "a-3",
      title: "Nav leave",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  id: "654d582cdd1c22473dd34db5|dfdeccd4-0f9f-82c5-ddac-f89e4c722765",
                },
                yValue: -14,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699736605299,
    },
    "a-7": {
      id: "a-7",
      title: "reveal on hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-ani",
                  selectorGuids: ["658d766d-c4b8-cb14-9bc7-9f72aa497b93"],
                },
                value: "none",
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-anii",
                  selectorGuids: ["d75d1ed2-addf-1850-2988-5abb3ae54571"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-anii",
                  selectorGuids: ["d75d1ed2-addf-1850-2988-5abb3ae54571"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-ani",
                  selectorGuids: ["658d766d-c4b8-cb14-9bc7-9f72aa497b93"],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699740316589,
    },
    "a-8": {
      id: "a-8",
      title: "hide image",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 200,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-ani",
                  selectorGuids: ["658d766d-c4b8-cb14-9bc7-9f72aa497b93"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".img-anii",
                  selectorGuids: ["d75d1ed2-addf-1850-2988-5abb3ae54571"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699740836140,
    },
    "a-9": {
      id: "a-9",
      title: "mouse move",
      continuousParameterGroups: [
        {
          id: "a-9-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-9-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".img-anii",
                      selectorGuids: ["d75d1ed2-addf-1850-2988-5abb3ae54571"],
                    },
                    xValue: -7,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-9-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".img-anii",
                      selectorGuids: ["d75d1ed2-addf-1850-2988-5abb3ae54571"],
                    },
                    xValue: 85,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-9-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-9-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".img-anii",
                      selectorGuids: ["d75d1ed2-addf-1850-2988-5abb3ae54571"],
                    },
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-9-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".img-anii",
                      selectorGuids: ["d75d1ed2-addf-1850-2988-5abb3ae54571"],
                    },
                    yValue: -50,
                    xUnit: "PX",
                    yUnit: "vh",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1699741323818,
    },
    "a-10": {
      id: "a-10",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".inner-container",
                  selectorGuids: ["6d5bf94a-2dbd-75a0-2de9-fca775c6c136"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 20000,
                target: {
                  selector: ".inner-container",
                  selectorGuids: ["6d5bf94a-2dbd-75a0-2de9-fca775c6c136"],
                },
                xValue: -153,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".inner-container",
                  selectorGuids: ["6d5bf94a-2dbd-75a0-2de9-fca775c6c136"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699989855202,
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
