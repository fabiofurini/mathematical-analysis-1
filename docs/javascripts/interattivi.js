/* Interactive graphs for Mathematical Analysis 1 (JSXGraph).
 *
 * In the pages:  <div class="gi" data-grafico="operazioni"></div>
 * Each graph is a "recipe" in GRAFICI: the functions to choose from, the
 * coefficients (each with its own color, the same in the slider and in the
 * formula), what to draw, what to read off and, if present, the challenge.
 */
(function () {
  "use strict";

  // ------------------------------------------------------------------ utilities
  const COLORI = ["a", "b", "c", "d", "e"];
  const css = (el, v) => getComputedStyle(el).getPropertyValue(v).trim();
  const num = (x, cifre = 1) => {
    if (!isFinite(x)) return x > 0 ? "+\\infty" : "-\\infty";
    const p = Math.pow(10, cifre);
    let s = (Math.round(x * p) / p).toFixed(cifre);
    if (cifre > 0) s = s.replace(/\.?0+$/, "");
    if (s === "-0") s = "0";
    return s;
  };
  const numTxt = (x, c = 3) => num(x, c);
  // every formula \(...\) goes into an "arithmatex" span: it is the only class
  // that the site's MathJax processes
  const mj = (html) => String(html).replace(/\\\((.+?)\\\)/gs, (m) => `<span class="arithmatex">${m}</span>`);
  const h = (tag, attrs = {}, html = "") => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    e.innerHTML = mj(html);
    return e;
  };
  // MathJax may not be ready yet when the graph is drawn: wait for it
  const typeset = (el) => {
    // in coda con tutte le altre composizioni (mathjax.js): mai due insieme
    if (window.componiFormule) window.componiFormule([el]);
    else setTimeout(() => typeset(el), 150);
  };
  const derivata = (f, x, hh = 1e-5) => (f(x + hh) - f(x - hh)) / (2 * hh);
  const fatt = (n) => { let r = 1; for (let k = 2; k <= n; k++) r *= k; return r; };

  // basic functions reused by several graphs
  const F = {
    sin: { f: Math.sin, tex: "\\sin x", wrap: (a) => `\\sin\\!\\big(${a}\\big)` },
    cos: { f: Math.cos, tex: "\\cos x", wrap: (a) => `\\cos\\!\\big(${a}\\big)` },
    x2: { f: (x) => x * x, tex: "x^2", wrap: (a) => `\\big(${a}\\big)^2` },
    x3: { f: (x) => x * x * x, tex: "x^3", wrap: (a) => `\\big(${a}\\big)^3` },
    abs: { f: Math.abs, tex: "|x|", wrap: (a) => `\\big|${a}\\big|` },
    sqrt: { f: Math.sqrt, tex: "\\sqrt{x}", wrap: (a) => `\\sqrt{${a}}` },
    exp: { f: Math.exp, tex: "e^x", wrap: (a) => `e^{${a}}` },
    log: { f: Math.log, tex: "\\ln x", wrap: (a) => `\\ln\\!\\big(${a}\\big)` },
    inv: { f: (x) => 1 / x, tex: "\\dfrac{1}{x}", wrap: (a) => `\\dfrac{1}{${a}}` },
  };

  // ------------------------------------------------------------------ recipes
  const GRAFICI = {};

  /* 1. Operations on graphs: y = a f(b(x - c)) + d */
  GRAFICI.operazioni = {
    titolo: "Operations on graphs",
    sottotitolo: "translations, stretches, reflections",
    funzioni: ["sin", "x2", "x3", "abs", "sqrt", "exp", "log"],
    iniziale: "sin",
    parametri: [
      { k: "a", min: -3, max: 3, step: 0.1, val: 1, descr: "stretches or compresses vertically; with \\(a<0\\) it reflects across the \\(x\\)-axis" },
      { k: "b", min: -3, max: 3, step: 0.1, val: 1, descr: "compresses or stretches horizontally (factor \\(1/|b|\\)); with \\(b<0\\) it reflects across the \\(y\\)-axis" },
      { k: "c", min: -5, max: 5, step: 0.1, val: 0, descr: "shifts horizontally: to the right if \\(c>0\\)" },
      { k: "d", min: -5, max: 5, step: 0.1, val: 0, descr: "shifts vertically: up if \\(d>0\\)" },
    ],
    vista: [-8, 6, 8, -6],
    g: (x, p, f) => p.a * f(p.b * (x - p.c)) + p.d,
    originale: true,
    formula(p, fn, col) {
      const cTerm = p.c === 0 ? "x" : `x ${p.c > 0 ? "-" : "+"} ${col("c", num(Math.abs(p.c)))}`;
      const arg = `${col("b", num(p.b))}\\,(${cTerm})`;
      return `y = ${col("a", num(p.a))}\\,${fn.wrap(arg)} ${p.d < 0 ? "-" : "+"} ${col("d", num(Math.abs(p.d)))}`;
    },
    domanda: "Move \\(b\\) from \\(1\\) to \\(2\\): does the graph get wider or narrower? Why does it become a horizontal line when \\(b=0\\)? With \\(|x|\\), what is the difference between changing \\(a\\) and changing \\(b\\)?",
    sfida: {
      genera(fnKey) {
        const s = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const pari = fnKey === "x2" || fnKey === "abs";
        return { a: s([-2, -1, -0.5, 0.5, 2, 3]), b: s(pari ? [1, 2, 0.5] : [-2, -1, 0.5, 2]), c: s([-3, -2, -1, 1, 2, 3]), d: s([-3, -2, -1, 1, 2]) };
      },
      aiuti: {
        a: "Compare the heights: is the target taller, shorter, or flipped upside down? Work on \\(a\\).",
        b: "Compare the widths: is the target narrower or wider? The factor is \\(1/|b|\\). Work on \\(b\\).",
        c: "Is the target shifted to the right or to the left? Work on \\(c\\).",
        d: "Is the target shifted up or down? Work on \\(d\\).",
      },
    },
  };

  /* 2. Oscillations: y = A sin(ω x + φ) */
  GRAFICI.oscillazioni = {
    titolo: "Harmonic oscillations",
    sottotitolo: "amplitude, angular frequency, phase",
    parametri: [
      { k: "a", nome: "A", min: 0, max: 4, step: 0.1, val: 2, descr: "amplitude: the oscillation goes from \\(-A\\) to \\(A\\)" },
      { k: "b", nome: "\\omega", min: 0.2, max: 4, step: 0.1, val: 1, descr: "angular frequency: the period is \\(T = 2\\pi/\\omega\\)" },
      { k: "c", nome: "\\varphi", min: -3.2, max: 3.2, step: 0.1, val: 0, descr: "phase: shifts the wave horizontally by \\(-\\varphi/\\omega\\)" },
    ],
    vista: [-7, 5, 7, -5],
    g: (x, p) => p.a * Math.sin(p.b * x + p.c),
    riferimento: (x) => Math.sin(x),
    formula: (p, fn, col) => `y = ${col("a", num(p.a))}\\,\\sin\\!\\big(${col("b", num(p.b))}\\,x ${p.c < 0 ? "-" : "+"} ${col("c", num(Math.abs(p.c)))}\\big)`,
    letture: (p) => `period T = 2π/ω ≈ ${numTxt(2 * Math.PI / p.b, 2)} · frequency ≈ ${numTxt(p.b / (2 * Math.PI), 3)}`,
    domanda: "Double \\(\\omega\\): what happens to the period? And what changes if you increase \\(\\varphi\\) by \\(2\\pi\\)?",
    sfida: {
      genera() {
        const s = (arr) => arr[Math.floor(Math.random() * arr.length)];
        return { a: s([1, 1.5, 2, 3]), b: s([0.5, 1, 2, 3]), c: s([-1.5, -1, 0, 1, 1.5]) };
      },
      aiuti: { a: "Look at the height of the peaks: work on \\(A\\).", b: "Count how many oscillations fit in an interval: work on \\(\\omega\\).", c: "Are the peaks shifted? Work on \\(\\varphi\\)." },
    },
  };

  /* 3. From the secant to the tangent line */
  GRAFICI.tangente = {
    titolo: "From the secant to the tangent line",
    sottotitolo: "the difference quotient as \\(h \\to 0\\)",
    funzioni: ["x2", "x3", "sin", "exp", "log", "sqrt"],
    iniziale: "x2",
    parametri: [
      { k: "a", nome: "x_0", min: -3, max: 3, step: 0.05, val: 1, descr: "the point where the derivative is computed" },
      { k: "b", nome: "h", min: -2, max: 2, step: 0.01, val: 1.5, descr: "the increment: drag it toward \\(0\\) and watch the secant" },
    ],
    vista: [-4, 6, 4, -3],
    originale: true,
    solo_originale: true,
    disegna(board, st) {
      const f = () => st.fn().f;
      const x0 = () => st.p().a, hh = () => st.p().b;
      const P = board.create("point", [() => x0(), () => f()(x0())], { name: "P", fixed: true, size: 4, color: st.colore("a"), label: { offset: [-14, 12] } });
      const Q = board.create("point", [() => x0() + hh(), () => f()(x0() + hh())], { name: "Q", fixed: true, size: 4, color: st.colore("b"), label: { offset: [6, 12] } });
      board.create("line", [P, Q], { strokeColor: st.colore("b"), strokeWidth: 2.5, dash: 0, name: "", visible: () => Math.abs(hh()) > 1e-9 });
      board.create("functiongraph", [(x) => f()(x0()) + derivata(f(), x0()) * (x - x0())], { strokeColor: st.colore("c"), strokeWidth: 2, dash: 2 });
    },
    formula(p, fn, col) {
      const f = fn.f, x0 = p.a, hh = p.b;
      const r = Math.abs(hh) < 1e-9 ? NaN : (f(x0 + hh) - f(x0)) / hh;
      return `\\frac{f(${col("a", num(x0, 2))} + ${col("b", num(hh, 2))}) - f(${col("a", num(x0, 2))})}{${col("b", num(hh, 2))}} = ${isFinite(r) ? col("b", num(r, 3)) : "\\,\\,?"} \\qquad f'(${col("a", num(x0, 2))}) = ${col("c", num(derivata(f, x0), 3))}`;
    },
    legenda: [["b", "secant PQ", ""], ["c", "tangent line at P", "dashed"]],
    domanda: "Drag \\(h\\) toward \\(0\\), from the right and from the left: what number does the slope of the secant approach? Try \\(\\sqrt{x}\\) at \\(x_0 = 0\\): what happens?",
  };

  /* 4. Taylor (Maclaurin) polynomials */
  const TAYLOR = {
    exp: { tex: "e^x", f: Math.exp, coef: (k) => 1 / fatt(k) },
    sin: { tex: "\\sin x", f: Math.sin, coef: (k) => (k % 2 === 0 ? 0 : (((k - 1) / 2) % 2 === 0 ? 1 : -1) / fatt(k)) },
    cos: { tex: "\\cos x", f: Math.cos, coef: (k) => (k % 2 === 1 ? 0 : ((k / 2) % 2 === 0 ? 1 : -1) / fatt(k)) },
    log1: { tex: "\\ln(1+x)", f: (x) => Math.log(1 + x), coef: (k) => (k === 0 ? 0 : (k % 2 === 1 ? 1 : -1) / k) },
    geo: { tex: "\\dfrac{1}{1-x}", f: (x) => 1 / (1 - x), coef: () => 1 },
  };
  GRAFICI.taylor = {
    titolo: "Maclaurin polynomials",
    sottotitolo: "the approximation improves as the degree grows",
    funzioniCustom: TAYLOR,
    iniziale: "sin",
    parametri: [{ k: "a", nome: "n", min: 0, max: 15, step: 1, val: 1, descr: "the degree of the polynomial \\(T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(0)}{k!}\\,x^k\\)" }],
    vista: [-7, 4, 7, -4],
    originale: true,
    solo_originale: true,
    g: (x, p, f, key) => { let s = 0, xp = 1; for (let k = 0; k <= p.a; k++) { s += TAYLOR[key].coef(k) * xp; xp *= x; } return s; },
    formula(p, fn, col, key) {
      const termini = [];
      for (let k = 0; k <= p.a && termini.length < 6; k++) {
        const c = TAYLOR[key].coef(k);
        if (c === 0) continue;
        const den = Math.round(1 / Math.abs(c));
        const coef = Math.abs(c) === 1 ? "" : (Math.abs(1 / c - Math.round(1 / c)) < 1e-9 ? `\\frac{1}{${den}}` : num(Math.abs(c), 3));
        const pot = k === 0 ? (coef ? "" : "1") : k === 1 ? "x" : `x^{${k}}`;
        termini.push({ s: c < 0 ? "-" : "+", t: (coef + pot) || "1" });
      }
      let tex = termini.map((t, i) => (i === 0 ? (t.s === "-" ? "-" : "") : ` ${t.s} `) + t.t).join("");
      if (!tex) tex = "0";
      return `T_{${col("a", p.a)}}(x) = ${tex}${termini.length >= 6 ? " + \\cdots" : ""}`;
    },
    legenda: [["orig", "y = f(x)", "dashed"], ["b", "\\text{polynomial } T_n", ""]],
    domanda: "With \\(\\ln(1+x)\\) or \\(\\dfrac{1}{1-x}\\), raise the degree: does the polynomial improve everywhere, or only for \\(|x|<1\\)? And with \\(\\sin x\\), why do \\(T_1\\) and \\(T_2\\) coincide?",
  };

  // ---------------------------------------------------------- drawing tools
  // polyline recomputed at every update: punti() -> [[x, y], ...]
  const spezzata = (board, punti, attr) => {
    const c = board.create("curve", [[0], [0]], Object.assign({ highlight: false }, attr));
    c.updateDataArray = function () {
      const P = punti();
      this.dataX = P.map((q) => q[0]);
      this.dataY = P.map((q) => q[1]);
    };
    return c;
  };
  // set of points (up to max) recomputed at every update: punti() -> [[x, y], ...]
  const nuvola = (board, max, punti, attr) => {
    let cache = [];
    const aggiorna = () => (cache = punti());
    const P = [];
    for (let i = 0; i < max; i++) {
      P.push(board.create("point", [() => { if (i === 0) aggiorna(); return cache[i] ? cache[i][0] : NaN; }, () => (cache[i] ? cache[i][1] : NaN)],
        Object.assign({ name: "", fixed: true, size: 2.5, highlight: false, showInfobox: false, visible: () => !!cache[i] }, attr)));
    }
    return P;
  };
  const tabella = (righe, intest) =>
    `<table class="gi-tabella">` +
    `<tr>${intest.map((t) => `<th>${t}</th>`).join("")}</tr>` +
    righe.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("") + `</table>`;

  /* 5. Exponentials and logarithms as the base varies */
  GRAFICI.esponenziali = {
    titolo: "Exponentials and logarithms",
    sottotitolo: "as the base \\(a\\) varies",
    parametri: [{ k: "a", min: 0.1, max: 5, step: 0.05, val: 2, descr: "the base: \\(a>0\\), \\(a \\neq 1\\)" }],
    vista: [-5, 5, 5, -5],
    g: (x, p) => Math.pow(p.a, x),
    disegna(board, st) {
      board.create("functiongraph", [(x) => (Math.abs(st.p().a - 1) < 1e-9 ? NaN : Math.log(x) / Math.log(st.p().a))], { strokeColor: st.colore("c"), strokeWidth: 3, highlight: false });
      board.create("functiongraph", [(x) => x], { strokeColor: st.colore("orig"), strokeWidth: 1.5, dash: 2, highlight: false });
      board.create("point", [0, 1], { name: "(0,1)", fixed: true, size: 3, color: st.colore("b"), label: { offset: [8, 10] } });
      board.create("point", [1, 0], { name: "(1,0)", fixed: true, size: 3, color: st.colore("c"), label: { offset: [4, -12] } });
    },
    formula: (p, fn, col) => `\\color{${"var"}}{}y = ${col("a", num(p.a, 2))}^{\\,x} \\qquad y = \\log_{${col("a", num(p.a, 2))}} x`.replace("\\color{var}{}", ""),
    legenda: [["b", "y = a^x", ""], ["c", "y = \\log_a x", ""], ["orig", "y = x", "dashed"]],
    letture: (p) => Math.abs(p.a - 1) < 0.026 ? "With \\(a = 1\\) the exponential is constant (\\(1^x = 1\\)) and the logarithm is not defined."
      : p.a > 1 ? "\\(a > 1\\): both functions are <strong>increasing</strong>." : "\\(0 < a < 1\\): both functions are <strong>decreasing</strong>.",
    domanda: "Why are the two graphs always symmetric with respect to the line \\(y = x\\)? What happens when \\(a\\) goes from a value greater than \\(1\\) to one less than \\(1\\)?",
  };

  /* 6. Power functions */
  GRAFICI.potenze = {
    titolo: "Power functions",
    sottotitolo: "\\(y = x^{\\alpha}\\) as the exponent varies",
    parametri: [{ k: "a", nome: "\\alpha", min: -3, max: 4, step: 0.1, val: 2, descr: "the exponent: for non-integer \\(\\alpha\\) the function is defined only for \\(x \\ge 0\\) (or \\(x>0\\))" }],
    vista: [-3, 4, 3, -3],
    g: (x, p) => {
      const a = Math.round(p.a * 10) / 10, intero = Math.abs(a - Math.round(a)) < 1e-9;
      if (x < 0 && !intero) return NaN;
      if (x === 0 && a < 0) return NaN;
      return Math.pow(x, a);
    },
    formula: (p, fn, col) => `y = x^{${col("a", num(p.a))}}`,
    letture: (p) => {
      const a = Math.round(p.a * 10) / 10;
      if (Math.abs(a - Math.round(a)) < 1e-9) {
        const n = Math.round(a);
        if (n === 0) return "\\(\\alpha = 0\\): the constant function \\(1\\) (for \\(x \\neq 0\\)).";
        return `\\(\\alpha = ${n}\\), a ${n > 0 ? "positive" : "negative"} integer: ${Math.abs(n) % 2 === 0 ? "<strong>even</strong>" : "<strong>odd</strong>"} function, defined ${n > 0 ? "on all of \\(\\R\\)" : "for \\(x \\neq 0\\)"}.`;
      }
      return "\\(\\alpha\\) not an integer: the function is defined only for \\(x \\ge 0\\)" + (a < 0 ? " (actually \\(x>0\\))." : ".");
    },
    domanda: "Compare \\(\\alpha = 2\\) and \\(\\alpha = 3\\) near \\(0\\) and for large \\(x\\): which graph lies above? What changes between \\(0 < \\alpha < 1\\) and \\(\\alpha > 1\\)?",
  };

  /* 7. Limit of a sequence: the epsilon band */
  const SUCC = {
    s1: { tex: "\\frac{n+1}{n}", a: (n) => (n + 1) / n, L: 1, Ltex: "1" },
    s2: { tex: "\\frac{(-1)^n}{n}", a: (n) => Math.pow(-1, n) / n, L: 0, Ltex: "0" },
    s3: { tex: "\\frac{\\sin n}{\\sqrt{n}}", a: (n) => Math.sin(n) / Math.sqrt(n), L: 0, Ltex: "0" },
    s4: { tex: "\\left(1+\\frac1n\\right)^{n}", a: (n) => Math.pow(1 + 1 / n, n), L: Math.E, Ltex: "e" },
    s5: { tex: "\\frac{2n^2-1}{n^2+3}", a: (n) => (2 * n * n - 1) / (n * n + 3), L: 2, Ltex: "2" },
  };
  const sogliaN = (s, eps) => {
    let N = 1;
    for (let n = 1; n <= 20000; n++) if (Math.abs(s.a(n) - s.L) >= eps) N = n + 1;
    return N;
  };
  GRAFICI.successione = {
    titolo: "Limit of a sequence",
    sottotitolo: "the band \\((\\ell-\\varepsilon, \\ell+\\varepsilon)\\) and the threshold \\(N\\)",
    funzioniCustom: SUCC,
    iniziale: "s1",
    parametri: [
      { k: "a", nome: "\\varepsilon", min: 0.01, max: 1, step: 0.01, val: 0.3, descr: "the width of the band around the limit \\(\\ell\\): make it smaller" },
      { k: "b", nome: "n_{\\max}", min: 10, max: 80, step: 1, val: 40, descr: "how many terms to draw" },
    ],
    vista: (k) => [-2, SUCC[k].L + 1.6, 82, SUCC[k].L - 1.6],
    disegna(board, st) {
      const s = () => SUCC[st.chiave()], eps = () => st.p().a;
      board.create("functiongraph", [() => s().L + eps()], { strokeColor: st.colore("a"), strokeWidth: 1.5, dash: 2, highlight: false });
      board.create("functiongraph", [() => s().L - eps()], { strokeColor: st.colore("a"), strokeWidth: 1.5, dash: 2, highlight: false });
      board.create("functiongraph", [() => s().L], { strokeColor: st.colore("orig"), strokeWidth: 1, highlight: false });
      spezzata(board, () => { const N = sogliaN(s(), eps()); return N <= st.p().b ? [[N, s().L - 1.5], [N, s().L + 1.5]] : []; }, { strokeColor: st.colore("c"), strokeWidth: 2, dash: 1 });
      nuvola(board, 80, () => { const N = sogliaN(s(), eps()), out = []; for (let n = 1; n <= st.p().b; n++) out.push([n, s().a(n), n >= N]); return out; },
        { color: st.colore("b"), strokeColor: st.colore("b") });
    },
    formula: (p, fn, col, k) => `a_n = ${SUCC[k].tex} \\,\\longrightarrow\\, \\ell = ${SUCC[k].Ltex} \\qquad \\varepsilon = ${col("a", num(p.a, 2))}`,
    legenda: [["b", "\\text{terms } a_n", ""], ["a", "\\ell \\pm \\varepsilon", "dashed"], ["c", "\\text{threshold } N", "dotted"]],
    letture: (p, fn, k) => { const N = sogliaN(SUCC[k], p.a); return `For every \\(n \\ge N = ${N}\\) we have \\(|a_n - \\ell| < ${num(p.a, 2)}\\): from there on, all the terms lie inside the band.`; },
    domanda: "Make \\(\\varepsilon\\) smaller: what happens to the threshold \\(N\\)? According to the definition of limit, for which \\(\\varepsilon\\) must an \\(N\\) exist?",
  };

  /* 8. Bisection method */
  const ZERI = {
    r2: { tex: "x^2 - 2", f: (x) => x * x - 2, a: 0, b: 2, vista: [-0.5, 3, 2.5, -2.5], radice: Math.SQRT2 },
    c3: { tex: "x^3 - x - 1", f: (x) => x * x * x - x - 1, a: 1, b: 2, vista: [0.5, 5, 2.3, -2], radice: 1.324717957244746 },
    cx: { tex: "\\cos x - x", f: (x) => Math.cos(x) - x, a: 0, b: 1, vista: [-0.3, 1.3, 1.3, -0.8], radice: 0.7390851332151607 },
  };
  const bisezione = (z, n) => {
    let a = z.a, b = z.b; const passi = [];
    for (let k = 0; k <= n; k++) {
      const c = (a + b) / 2; passi.push([a, b, c]);
      if (z.f(a) * z.f(c) <= 0) b = c; else a = c;
    }
    return passi;
  };
  GRAFICI.bisezione = {
    titolo: "Bisection method",
    sottotitolo: "the interval is halved at every step",
    funzioniCustom: ZERI,
    iniziale: "r2",
    originale: true, fPieno: true,
    parametri: [{ k: "a", nome: "n", min: 0, max: 12, step: 1, val: 0, descr: "the number of steps: press ▶ to see them one after another" }],
    vista: (k) => ZERI[k].vista,
    disegna(board, st) {
      const z = () => ZERI[st.chiave()];
      const ultimo = () => bisezione(z(), st.p().a).slice(-1)[0];
      spezzata(board, () => { const [a, b] = ultimo(); return [[a, 0], [b, 0]]; }, { strokeColor: st.colore("a"), strokeWidth: 7 });
      board.create("point", [() => ultimo()[0], 0], { name: "a", fixed: true, size: 3, color: st.colore("a"), label: { offset: [-4, -14] } });
      board.create("point", [() => ultimo()[1], 0], { name: "b", fixed: true, size: 3, color: st.colore("a"), label: { offset: [-4, -14] } });
      board.create("point", [() => ultimo()[2], () => z().f(ultimo()[2])], { name: "", fixed: true, size: 3, color: st.colore("c") });
      spezzata(board, () => { const c = ultimo()[2]; return [[c, 0], [c, z().f(c)]]; }, { strokeColor: st.colore("c"), strokeWidth: 1.5, dash: 2 });
    },
    formula: (p, fn, col, k) => `f(x) = ${ZERI[k].tex} \\qquad \\text{step } ${col("a", p.a)}`,
    legenda: [["b", "y = f(x)", ""], ["a", "\\text{interval } [a_n, b_n]", ""], ["c", "\\text{midpoint } c_n", "dashed"]],
    letture(p, fn, k) {
      const z = ZERI[k], passi = bisezione(z, p.a);
      const righe = passi.slice(-5).map(([a, b, c], i) => [passi.length - Math.min(5, passi.length) + i, numTxt(a, 6), numTxt(b, 6), numTxt(c, 6)]);
      const [a, b, c] = passi[passi.length - 1];
      return tabella(righe, ["n", "a_n", "b_n", "c_n"]) +
        `<div style="margin-top:.4em">error \\(|c_n - \\bar x| \\le \\frac{b-a}{2^{n+1}} = ${num((z.b - z.a) / Math.pow(2, p.a + 1), 6)}\\), actual error \\(= ${num(Math.abs(c - z.radice), 6)}\\)</div>`;
    },
    domanda: "How many steps do you need to get three correct decimal digits of \\(\\sqrt 2\\)? Check with the error estimate.",
  };

  /* 9. Newton's method */
  GRAFICI.newton = {
    titolo: "Newton's method",
    sottotitolo: "sliding down along the tangent lines",
    funzioniCustom: ZERI,
    iniziale: "r2",
    originale: true, fPieno: true,
    parametri: [
      { k: "a", nome: "x_0", min: -0.4, max: 2.4, step: 0.01, val: 2, descr: "the starting point" },
      { k: "b", nome: "n", min: 0, max: 6, step: 1, val: 1, descr: "the number of iterations \\(x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)}\\)" },
    ],
    vista: (k) => ZERI[k].vista,
    disegna(board, st) {
      const z = () => ZERI[st.chiave()];
      const iterate = () => { const xs = [st.p().a]; for (let k = 0; k < st.p().b; k++) { const x = xs[k], d = derivata(z().f, x); xs.push(Math.abs(d) < 1e-12 ? NaN : x - z().f(x) / d); } return xs; };
      spezzata(board, () => { const xs = iterate(), P = []; for (let k = 0; k + 1 < xs.length; k++) { P.push([xs[k], 0], [xs[k], z().f(xs[k])], [xs[k + 1], 0]); } return P; }, { strokeColor: st.colore("c"), strokeWidth: 2 });
      nuvola(board, 8, () => iterate().map((x) => [x, 0]), { color: st.colore("a") });
    },
    formula: (p, fn, col, k) => `f(x) = ${ZERI[k].tex} \\qquad x_0 = ${col("a", num(p.a, 2))}`,
    legenda: [["b", "y = f(x)", ""], ["c", "tangent lines", ""], ["a", "\\text{iterates } x_k", ""]],
    letture(p, fn, k) {
      const z = ZERI[k], xs = [p.a];
      for (let i = 0; i < p.b; i++) { const d = derivata(z.f, xs[i]); xs.push(xs[i] - z.f(xs[i]) / d); }
      return tabella(xs.map((x, i) => [i, numTxt(x, 10), isFinite(x) ? Math.abs(x - z.radice).toExponential(1) : "—"]), ["k", "x_k", "error"]);
    },
    domanda: "Look at the error column: at each step the number of correct digits roughly doubles. Compare with the bisection method. What happens if you start from an \\(x_0\\) close to a point where \\(f'\\) vanishes?",
  };

  /* 10. Lagrange's mean value theorem */
  const LAG = {
    c3: { tex: "x^3 - 3x", f: (x) => x * x * x - 3 * x },
    sn: { tex: "\\sin x", f: Math.sin },
    ex: { tex: "e^x", f: Math.exp },
    rq: { tex: "\\sqrt{x+3}", f: (x) => Math.sqrt(x + 3) },
  };
  const puntiC = (f, a, b) => {
    const m = (f(b) - f(a)) / (b - a), out = [];
    const N = 2000; let prev = derivata(f, a + (b - a) / N) - m;
    for (let i = 2; i < N; i++) {
      const x = a + (i * (b - a)) / N, v = derivata(f, x) - m;
      if (prev === 0 || prev * v < 0) out.push(x);
      prev = v;
    }
    return { m, c: out };
  };
  GRAFICI.lagrange = {
    titolo: "Lagrange's mean value theorem",
    sottotitolo: "there is a tangent line parallel to the secant",
    funzioniCustom: LAG,
    iniziale: "c3",
    originale: true, fPieno: true,
    parametri: [
      { k: "a", nome: "a", min: -2.8, max: 2.8, step: 0.05, val: -1.5, descr: "left endpoint" },
      { k: "c", nome: "b", min: -2.8, max: 2.8, step: 0.05, val: 2, descr: "right endpoint" },
    ],
    vista: [-3, 4, 3, -3],
    disegna(board, st) {
      const f = () => LAG[st.chiave()].f, A = () => Math.min(st.p().a, st.p().c), B = () => Math.max(st.p().a, st.p().c);
      board.create("point", [A, () => f()(A())], { name: "", fixed: true, size: 3.5, color: st.colore("a") });
      board.create("point", [B, () => f()(B())], { name: "", fixed: true, size: 3.5, color: st.colore("c") });
      board.create("functiongraph", [(x) => f()(A()) + ((f()(B()) - f()(A())) / (B() - A())) * (x - A())], { strokeColor: st.colore("d"), strokeWidth: 2.5, highlight: false });
      for (let i = 0; i < 3; i++) {
        const ci = () => puntiC(f(), A(), B()).c[i];
        board.create("functiongraph", [(x) => { const c = ci(); return c === undefined ? NaN : f()(c) + puntiC(f(), A(), B()).m * (x - c); }], { strokeColor: st.colore("e"), strokeWidth: 2, dash: 2, highlight: false });
        board.create("point", [() => (ci() === undefined ? NaN : ci()), () => (ci() === undefined ? NaN : f()(ci()))], { name: "c", fixed: true, size: 3.5, color: st.colore("e"), visible: () => ci() !== undefined });
      }
    },
    formula: (p, fn, col, k) => `\\frac{f(${col("c", "b")}) - f(${col("a", "a")})}{${col("c", "b")} - ${col("a", "a")}} = f'(${col("e", "c")})`,
    legenda: [["b", "y = f(x)", ""], ["d", "secant", ""], ["e", "parallel tangent line", "dashed"]],
    letture(p, fn, k) {
      const A = Math.min(p.a, p.c), B = Math.max(p.a, p.c);
      if (B - A < 0.05) return "Move \\(a\\) and \\(b\\) apart.";
      const r = puntiC(LAG[k].f, A, B);
      return `slope of the secant \\(= ${num(r.m, 3)}\\); ` + (r.c.length ? `points \\(c\\): ${r.c.map((c) => `\\(${num(c, 3)}\\)`).join(", ")}` : "no point found (is the function differentiable on \\((a,b)\\)?)");
    },
    domanda: "Drag \\(a\\) and \\(b\\): does the point \\(c\\) always exist? When is there more than one? With \\(x^3-3x\\) and \\(a=-b\\), why do you get Rolle's theorem back?",
  };

  /* 11. Geometric series */
  GRAFICI.geometrica = {
    titolo: "Geometric series",
    sottotitolo: "the partial sums of \\(\\sum_{k=0}^{\\infty} q^k\\)",
    parametri: [
      { k: "a", nome: "q", min: -1.2, max: 1.2, step: 0.05, val: 0.5, descr: "the ratio: the series converges if and only if \\(|q| < 1\\)" },
      { k: "b", nome: "n", min: 1, max: 40, step: 1, val: 15, descr: "how many partial sums to draw" },
    ],
    vista: [-1, 6, 42, -3],
    disegna(board, st) {
      nuvola(board, 41, () => { let s = 0; const out = []; for (let n = 0; n <= st.p().b; n++) { s += Math.pow(st.p().a, n); out.push([n, s]); } return out; }, { color: st.colore("b") });
      board.create("functiongraph", [() => (Math.abs(st.p().a) < 1 ? 1 / (1 - st.p().a) : NaN)], { strokeColor: st.colore("d"), strokeWidth: 2, dash: 2, highlight: false });
    },
    formula: (p, fn, col) => `s_n = \\sum_{k=0}^{${col("b", p.b)}} ${col("a", num(p.a, 2))}^{\\,k} = \\frac{1 - ${col("a", num(p.a, 2))}^{\\,${col("b", p.b)}+1}}{1 - ${col("a", num(p.a, 2))}}`,
    legenda: [["b", "\\text{partial sums } s_n", ""], ["d", "\\text{sum } \\tfrac{1}{1-q}", "dashed"]],
    letture: (p) => Math.abs(p.a) < 1 ? `\\(|q| < 1\\): the series converges to \\(\\frac{1}{1-q} = ${num(1 / (1 - p.a), 4)}\\).`
      : p.a >= 1 ? "\\(q \\ge 1\\): the series diverges to \\(+\\infty\\)." : p.a <= -1 ? "\\(q \\le -1\\): the series is indeterminate (the partial sums oscillate)." : "",
    domanda: "Move \\(q\\) to \\(-1\\): what do the partial sums do? And for \\(q\\) close to \\(1\\), how many terms do you need to get close to the sum?",
  };

  /* 12. Generalized harmonic series and alternating series */
  const SERIEP = {
    p: { tex: "\\sum_{k=1}^{\\infty} \\frac{1}{k^{p}}", t: (k, p) => 1 / Math.pow(k, p) },
    alt: { tex: "\\sum_{k=1}^{\\infty} \\frac{(-1)^{k+1}}{k^{p}}", t: (k, p) => Math.pow(-1, k + 1) / Math.pow(k, p) },
  };
  GRAFICI.seriep = {
    titolo: "Generalized harmonic series",
    sottotitolo: "with positive terms and with alternating signs",
    funzioniCustom: SERIEP,
    iniziale: "p",
    parametri: [
      { k: "a", nome: "p", min: 0.3, max: 3, step: 0.05, val: 1, descr: "the exponent: the series with positive terms converges if and only if \\(p > 1\\)" },
      { k: "b", nome: "n", min: 5, max: 200, step: 1, val: 50, descr: "how many partial sums" },
    ],
    vista: (k) => (k === "p" ? [-5, 7, 205, -0.8] : [-5, 1.6, 205, -0.3]),
    disegna(board, st) {
      spezzata(board, () => { let s = 0; const out = []; const S = SERIEP[st.chiave()]; for (let k = 1; k <= st.p().b; k++) { s += S.t(k, st.p().a); out.push([k, s]); } return out; }, { strokeColor: st.colore("b"), strokeWidth: 2.5 });
    },
    formula: (p, fn, col, k) => SERIEP[k].tex.replace("{p}", `{${col("a", num(p.a, 2))}}`),
    legenda: [["b", "\\text{partial sums } s_n", ""]],
    letture(p, fn, k) {
      let s = 0; for (let i = 1; i <= p.b; i++) s += SERIEP[k].t(i, p.a);
      const esito = k === "p" ? (p.a > 1 ? "converges" : "diverges to \\(+\\infty\\)") : "converges (Leibniz test)";
      return `\\(s_{${p.b}} = ${num(s, 5)}\\) — the series ${esito}.` + (k === "p" && Math.abs(p.a - 2) < 0.026 ? " The sum is \\(\\pi^2/6 \\approx 1.6449\\)." : "") + (k === "alt" && Math.abs(p.a - 1) < 0.026 ? " The sum is \\(\\ln 2 \\approx 0.6931\\)." : "");
    },
    domanda: "With \\(p = 1\\) (the harmonic series) the partial sums grow extremely slowly: and yet they diverge. With alternating signs and \\(p = 1\\), instead, they converge: how do they oscillate around the sum?",
  };

  /* 13. n-th roots of a complex number */
  GRAFICI.radici = {
    titolo: "Complex n-th roots",
    sottotitolo: "the solutions of \\(z^n = w\\)",
    parametri: [
      { k: "a", nome: "n", min: 2, max: 12, step: 1, val: 5, descr: "the index of the root" },
      { k: "b", nome: "\\rho", min: 0.2, max: 3, step: 0.05, val: 1, descr: "the modulus of \\(w\\)" },
      { k: "c", nome: "\\theta", min: 0, max: 6.28, step: 0.02, val: 0, descr: "the argument of \\(w\\)" },
    ],
    vista: [-3.2, 2.4, 3.2, -2.4],
    disegna(board, st) {
      const R = () => Math.pow(st.p().b, 1 / st.p().a);
      board.create("circle", [[0, 0], () => R()], { strokeColor: st.colore("orig"), strokeWidth: 1.5, dash: 2, fillOpacity: 0, highlight: false });
      const rad = () => { const out = []; for (let k = 0; k < st.p().a; k++) { const t = (st.p().c + 2 * Math.PI * k) / st.p().a; out.push([R() * Math.cos(t), R() * Math.sin(t)]); } return out; };
      spezzata(board, () => { const r = rad(); return r.concat([r[0]]); }, { strokeColor: st.colore("b"), strokeWidth: 2, fillColor: st.colore("b"), fillOpacity: 0.08 });
      nuvola(board, 12, rad, { color: st.colore("b"), size: 4 });
      board.create("point", [() => st.p().b * Math.cos(st.p().c), () => st.p().b * Math.sin(st.p().c)], { name: "w", fixed: true, size: 4, color: st.colore("a") });
    },
    formula: (p, fn, col) => `z_k = \\sqrt[${col("a", p.a)}]{${col("b", num(p.b, 2))}}\\, e^{\\,i\\,\\frac{${col("c", num(p.c, 2))} + 2k\\pi}{${col("a", p.a)}}}, \\quad k = 0, 1, \\dots, ${col("a", p.a)}-1`,
    legenda: [["a", "w", ""], ["b", "\\text{roots } z_k", ""]],
    letture: (p) => `The \\(${p.a}\\) roots lie on the circle of radius \\(\\sqrt[${p.a}]{\\rho} = ${num(Math.pow(p.b, 1 / p.a), 3)}\\) and are the vertices of a regular polygon.`,
    domanda: "Move \\(\\theta\\): by how much do the roots rotate when \\(w\\) goes once all the way around? Why are they always the vertices of a regular polygon with \\(n\\) sides?",
  };

  /* 14. Recursive sequences: Heron's algorithm */
  GRAFICI.erone = {
    titolo: "Heron's sequence",
    sottotitolo: "\\(x_{n+1} = \\frac12\\left(x_n + \\frac{a}{x_n}\\right) \\to \\sqrt a\\)",
    parametri: [
      { k: "a", nome: "a", min: 0.5, max: 10, step: 0.1, val: 2, descr: "the number whose square root we are looking for" },
      { k: "b", nome: "x_0", min: 0.3, max: 8, step: 0.05, val: 5, descr: "the initial value (positive)" },
      { k: "c", nome: "n", min: 1, max: 8, step: 1, val: 3, descr: "the number of steps" },
    ],
    vista: [-0.5, 8.5, 8.5, -0.5],
    g: (x, p) => (x > 0 ? 0.5 * (x + p.a / x) : NaN),
    disegna(board, st) {
      board.create("functiongraph", [(x) => x], { strokeColor: st.colore("orig"), strokeWidth: 1.5, dash: 2, highlight: false });
      spezzata(board, () => {
        const { a, b, c } = st.p(); let x = b; const P = [[x, 0]];
        for (let k = 0; k < c; k++) { const y = 0.5 * (x + a / x); P.push([x, y], [y, y]); x = y; }
        return P;
      }, { strokeColor: st.colore("c"), strokeWidth: 2 });
      board.create("point", [() => Math.sqrt(st.p().a), () => Math.sqrt(st.p().a)], { name: "", fixed: true, size: 3.5, color: st.colore("d") });
    },
    formula: (p, fn, col) => `x_{n+1} = \\frac12\\left(x_n + \\frac{${col("a", num(p.a))}}{x_n}\\right), \\qquad x_0 = ${col("b", num(p.b, 2))}`,
    legenda: [["b", "y = g(x)", ""], ["orig", "y = x", "dashed"], ["c", "cobweb", ""]],
    letture(p) {
      const xs = [p.b]; for (let k = 0; k < p.c; k++) xs.push(0.5 * (xs[k] + p.a / xs[k]));
      return tabella(xs.map((x, i) => [i, numTxt(x, 10), Math.abs(x - Math.sqrt(p.a)).toExponential(1)]), ["n", "x_n", "|x_n - √a|"]);
    },
    domanda: "From any \\(x_0 > 0\\), starting from the first step the sequence stays above \\(\\sqrt a\\) and is decreasing: can you see it in the cobweb? How fast does the number of correct digits grow?",
  };

  /* 15. Second derivative: concavity and inflection points */
  const CONC = {
    c3: { tex: "x^3 - 3x", f: (x) => x * x * x - 3 * x, d1: (x) => 3 * x * x - 3, d2: (x) => 6 * x },
    q4: { tex: "x^4 - 2x^2", f: (x) => x ** 4 - 2 * x * x, d1: (x) => 4 * x ** 3 - 4 * x, d2: (x) => 12 * x * x - 4 },
    sn: { tex: "\\sin x", f: Math.sin, d1: Math.cos, d2: (x) => -Math.sin(x) },
    xe: { tex: "x\\,e^{-x}", f: (x) => x * Math.exp(-x), d1: (x) => (1 - x) * Math.exp(-x), d2: (x) => (x - 2) * Math.exp(-x) },
  };
  GRAFICI.concavita = {
    titolo: "First and second derivative",
    sottotitolo: "monotonicity, concavity, inflection points",
    funzioniCustom: CONC,
    iniziale: "c3",
    originale: true, fPieno: true,
    parametri: [{ k: "a", nome: "x_0", min: -3, max: 3, step: 0.02, val: -1.5, descr: "drag the point along the graph" }],
    vista: (k) => (k === "xe" ? [-1, 1.5, 5, -1.5] : [-3, 4, 3, -4]),
    disegna(board, st) {
      const F = () => CONC[st.chiave()], x0 = () => st.p().a;
      board.create("functiongraph", [(x) => F().d1(x)], { strokeColor: st.colore("a"), strokeWidth: 1.8, dash: 2, highlight: false });
      board.create("functiongraph", [(x) => F().d2(x)], { strokeColor: st.colore("c"), strokeWidth: 1.8, dash: 1, highlight: false });
      board.create("functiongraph", [(x) => F().f(x0()) + F().d1(x0()) * (x - x0())], { strokeColor: st.colore("d"), strokeWidth: 2, highlight: false });
      board.create("point", [x0, () => F().f(x0())], { name: "", fixed: true, size: 4, color: st.colore("d") });
    },
    formula: (p, fn, col, k) => `f(x) = ${CONC[k].tex} \\qquad f'(${col("d", num(p.a, 2))}) = ${num(CONC[k].d1(p.a), 2)} \\quad f''(${col("d", num(p.a, 2))}) = ${num(CONC[k].d2(p.a), 2)}`,
    legenda: [["b", "f", ""], ["a", "f'", "dashed"], ["c", "f''", "dotted"], ["d", "tangent line", ""]],
    letture(p, fn, k) {
      const d1 = CONC[k].d1(p.a), d2 = CONC[k].d2(p.a);
      return `at \\(x_0\\): \\(f\\) is ${Math.abs(d1) < 0.02 ? "stationary" : d1 > 0 ? "<strong>increasing</strong>" : "<strong>decreasing</strong>"} and ` +
        (Math.abs(d2) < 0.03 ? "there might be an <strong>inflection point</strong> (\\(f'' = 0\\))" : d2 > 0 ? "<strong>convex</strong> (\\(f''>0\\)): the tangent line lies below the graph" : "<strong>concave</strong> (\\(f''<0\\)): the tangent line lies above the graph") + ".";
    },
    domanda: "Where \\(f'\\) (dashed) is positive, \\(f\\) is increasing; where \\(f''\\) (dotted) is positive, \\(f\\) is convex. Find the inflection points: what does the tangent line do as you cross them?",
  };


  /* 16. Riemann sums */
  const RIEM = {
    x2: { tex: "x^2", f: (x) => x * x, a: 0, b: 2, I: 8 / 3, Itex: "\\frac{8}{3}", vista: [-0.3, 4.6, 2.3, -0.5] },
    sn: { tex: "\\sin x", f: Math.sin, a: 0, b: Math.PI, I: 2, Itex: "2", vista: [-0.3, 1.3, 3.4, -0.2] },
    ex: { tex: "e^x", f: Math.exp, a: 0, b: 1, I: Math.E - 1, Itex: "e-1", vista: [-0.15, 3, 1.15, -0.3] },
    iv: { tex: "\\frac{1}{x}", f: (x) => 1 / x, a: 1, b: 3, I: Math.log(3), Itex: "\\ln 3", vista: [0.7, 1.2, 3.2, -0.15] },
  };
  const riemann = (R, n, tipo) => {
    const h = (R.b - R.a) / n; let s = 0; const rett = [];
    for (let k = 0; k < n; k++) {
      const x0 = R.a + k * h, t = tipo === 0 ? x0 : tipo === 2 ? x0 + h : x0 + h / 2, y = R.f(t);
      s += y * h; rett.push([x0, x0 + h, y]);
    }
    return { s, rett };
  };
  const TIPI = ["left endpoint", "midpoint", "right endpoint"];
  GRAFICI.riemann = {
    titolo: "Riemann sums",
    sottotitolo: "the area under the graph as a limit of rectangles",
    funzioniCustom: RIEM,
    iniziale: "x2",
    originale: true, fPieno: true,
    parametri: [
      { k: "a", nome: "n", min: 1, max: 60, step: 1, val: 4, descr: "the number of rectangles" },
      { k: "c", nome: "t", min: 0, max: 2, step: 1, val: 0, descr: "where the height is computed: 0 = left endpoint, 1 = midpoint, 2 = right endpoint" },
    ],
    vista: (k) => RIEM[k].vista,
    disegna(board, st) {
      const R = () => RIEM[st.chiave()];
      spezzata(board, () => {
        const { rett } = riemann(R(), st.p().a, st.p().c), P = [[R().a, 0]];
        for (const [x0, x1, y] of rett) P.push([x0, 0], [x0, y], [x1, y], [x1, 0]);
        return P;
      }, { strokeColor: st.colore("a"), strokeWidth: 1.5, fillColor: st.colore("a"), fillOpacity: 0.25 });
    },
    formula: (p, fn, col, k) => `S_{${col("a", p.a)}} = \\sum_{k=1}^{${col("a", p.a)}} f(t_k)\\,\\Delta x \;\\approx\; \\int_{${num(RIEM[k].a, 2)}}^{${k === "sn" ? "\\pi" : num(RIEM[k].b, 2)}} ${RIEM[k].tex}\\,dx = ${RIEM[k].Itex}`,
    legenda: [["b", "y = f(x)", ""], ["a", "rectangles", ""]],
    letture(p, fn, k) {
      const R = RIEM[k], { s } = riemann(R, p.a, p.c);
      return `rectangles with height at the <strong>${TIPI[p.c]}</strong>: \\(S_{${p.a}} = ${num(s, 5)}\\), integral \\(= ${num(R.I, 5)}\\), error \\(= ${num(Math.abs(s - R.I), 5)}\\)`;
    },
    domanda: "Double \\(n\\): how much does the error shrink with the left endpoint? And with the midpoint? With \\(x^2\\), why is the left-endpoint sum always below the integral?",
  };

  // ------------------------------------------------------------------ engine
  function monta(el) {
    if (el.dataset.montato) return;
    const R = GRAFICI[el.dataset.grafico];
    if (!R) { el.textContent = "Graph not found: " + el.dataset.grafico; return; }
    el.dataset.montato = "1";
    el.innerHTML = "";

    const funzioni = R.funzioniCustom || (R.funzioni ? Object.fromEntries(R.funzioni.map((k) => [k, F[k]])) : null);
    let chiave = (funzioni && el.dataset.funzione in funzioni ? el.dataset.funzione : null) || R.iniziale || (funzioni ? Object.keys(funzioni)[0] : null);
    let modo = "esplora", bersaglio = null, vinte = 0, giaVinta = false, board = null, anim = null;

    // --- header
    const testa = h("div", { class: "gi-testa" }, `<span class="gi-titolo">${R.titolo}<small>${R.sottotitolo || ""}</small></span>`);
    const tabs = h("div", { class: "gi-tabs" });
    const tEsplora = h("button", { class: "gi-tab", "aria-selected": "true" }, "Explore");
    const tSfida = h("button", { class: "gi-tab", "aria-selected": "false" }, "Challenge");
    if (R.sfida) { tabs.append(tEsplora, tSfida); testa.append(tabs); }
    el.append(testa);

    const corpo = h("div", { class: "gi-corpo" });
    const sx = h("div"), dx = h("div");
    corpo.append(sx, dx);
    el.append(corpo);

    const formula = h("div", { class: "gi-formula" });
    const bid = "gi-" + Math.random().toString(36).slice(2);
    const boardEl = h("div", { class: "gi-board jxgbox", id: bid, "aria-label": "Interactive graph: " + R.titolo });
    const legenda = h("div", { class: "gi-legenda" });
    sx.append(formula, boardEl, legenda);

    // --- function selection
    if (funzioni) {
      dx.append(h("div", {}, "<strong>Function</strong>"));
      const chips = h("div", { class: "gi-chips" });
      for (const [k, v] of Object.entries(funzioni)) {
        const b = h("button", { class: "gi-chip", "aria-pressed": String(k === chiave) }, `\\(${v.tex}\\)`);
        b.onclick = () => {
          chiave = k;
          chips.querySelectorAll(".gi-chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
          if (modo === "sfida") nuovaSfida();
          aggiorna(true);
        };
        chips.append(b);
      }
      dx.append(chips);
    }

    // --- sliders
    const input = {}, valEl = {};
    R.parametri.forEach((p, i) => {
      const k = p.k;
      const ctrl = h("div", { class: "gi-ctrl", style: `--c: var(--gi-${k})` });
      const riga = h("div", { class: "gi-riga" });
      riga.append(h("span", { class: "gi-nome", style: `color: var(--gi-${k})` }, `\\(${p.nome || k}\\)`));
      const destra = h("span");
      const play = h("button", { class: "gi-play", title: "Animate " + (p.nome || k), "aria-label": "Animate" }, "▶");
      valEl[k] = h("span", { class: "gi-val" });
      destra.append(play, valEl[k]);
      riga.append(destra);
      input[k] = h("input", { type: "range", min: p.min, max: p.max, step: p.step, value: p.val, "aria-label": p.nome || k });
      input[k].addEventListener("input", () => aggiorna());
      ctrl.append(riga, input[k]);
      if (p.descr) ctrl.append(h("small", {}, p.descr));
      play.onclick = () => anima(k, play);
      dx.append(ctrl);
    });

    const bottoni = h("div");
    const azzera = h("button", { class: "gi-btn" }, "Reset");
    azzera.onclick = () => { R.parametri.forEach((p) => (input[p.k].value = p.val)); aggiorna(); };
    bottoni.append(azzera);
    dx.append(bottoni);

    const letture = h("div", { class: "gi-letture", hidden: "" });
    dx.append(letture);

    const pEsplora = h("div", { class: "gi-domanda" }, `<strong>Try it.</strong> ${R.domanda || ""}`);
    if (R.domanda) dx.append(pEsplora);

    // --- challenge
    const pSfida = h("div", { hidden: "" });
    let metro, vinto, punti, aiuto;
    if (R.sfida) {
      pSfida.innerHTML = `<p style="margin:.6em 0 .2em">Reproduce the <strong style="color:var(--gi-target)">red</strong> curve by moving the sliders.</p>`;
      metro = h("div", { class: "gi-metro" }, "<div></div>");
      const riga = h("div", { style: "display:flex;justify-content:space-between;align-items:center" });
      vinto = h("span", { class: "gi-vinto" });
      punti = h("span", { class: "gi-punti" }, "Challenges won: 0");
      riga.append(vinto, punti);
      const nuova = h("button", { class: "gi-btn primario" }, "New challenge");
      const bAiuto = h("button", { class: "gi-btn" }, "Hint");
      aiuto = h("div", { class: "gi-domanda", hidden: "" });
      nuova.onclick = nuovaSfida;
      bAiuto.onclick = () => {
        const k = R.parametri.map((p) => p.k).find((k) => Math.abs(val(k) - bersaglio[k]) > 0.051) || R.parametri[0].k;
        aiuto.innerHTML = mj(R.sfida.aiuti[k]);
        aiuto.hidden = false;
        typeset(aiuto);
      };
      pSfida.append(metro, riga, nuova, bAiuto, aiuto);
      dx.append(pSfida);
      tEsplora.onclick = () => setModo("esplora");
      tSfida.onclick = () => setModo("sfida");
    }

    // --- state
    const val = (k) => parseFloat(input[k].value);
    const p = () => Object.fromEntries(R.parametri.map((q) => [q.k, val(q.k)]));
    const fn = () => (funzioni ? funzioni[chiave] : { f: (x) => x, tex: "x", wrap: (a) => a });
    const colore = (k) => css(el, "--gi-" + k);
    const col = (k, s) => `\\color{${colore(k)}}{${s}}`;
    const g = (x, q) => (R.g ? R.g(x, q, fn().f, chiave) : NaN);
    const vista = () => (typeof R.vista === "function" ? R.vista(chiave) : R.vista);
    const st = { p, fn, colore, chiave: () => chiave };

    function creaBoard() {
      if (board) JXG.JSXGraph.freeBoard(board);
      const muted = css(el, "--gi-muted"), line = css(el, "--gi-line");
      const assi = { strokeColor: muted, ticks: { strokeColor: line, majorHeight: -1, label: { strokeColor: muted } } };
      board = JXG.JSXGraph.initBoard(bid, {
        boundingbox: vista(), axis: true, keepAspectRatio: false, showCopyright: false, showNavigation: false,
        pan: { enabled: true, needShift: false, needTwoFingers: true }, zoom: { wheel: true, needShift: true },
        defaultAxes: { x: assi, y: assi },
      });
      if (R.originale) board.create("functiongraph", [(x) => fn().f(x)], R.fPieno
        ? { strokeColor: colore("b"), strokeWidth: 3, highlight: false }
        : { strokeColor: colore("orig"), strokeWidth: 2.2, dash: 2, highlight: false });
      if (R.riferimento) board.create("functiongraph", [R.riferimento], { strokeColor: colore("orig"), strokeWidth: 2, dash: 2, highlight: false });
      if (R.sfida) board.create("functiongraph", [(x) => (bersaglio ? g(x, bersaglio) : NaN)], { strokeColor: colore("target"), strokeWidth: 4, dash: 1, highlight: false, visible: () => modo === "sfida" });
      if (R.g) board.create("functiongraph", [(x) => g(x, p())], { strokeColor: colore("b"), strokeWidth: 3.5, highlight: false });
      if (R.disegna) R.disegna(board, st);
    }

    function scriviLegenda() {
      const voci = R.legenda || [
        ...(R.originale || R.riferimento ? [["orig", R.riferimento ? "y = \\sin x" : "y = f(x)", "dashed"]] : []),
        ...(R.g ? [["b", "your function", ""]] : []),
        ...(R.sfida ? [["target", "target", "dotted"]] : []),
      ];
      legenda.innerHTML = voci
        .filter((v) => v[0] !== "target" || modo === "sfida")
        .map(([k, t, s]) => `<span><i style="border-color:var(--gi-${k});border-top-style:${s || "solid"}"></i>${/[\\_^=]/.test(t) || /^[a-z]'*$/.test(t) ? `\\(${t}\\)` : t}</span>`)
        .join("");
      legenda.innerHTML = mj(legenda.innerHTML);
      typeset(legenda);
    }

    function vicinanza() {
      let s = 0, n = 0;
      const [x0, , x1] = vista();
      for (let x = x0; x <= x1; x += (x1 - x0) / 160) {
        const y1 = g(x, p()), y2 = g(x, bersaglio);
        const ok1 = isFinite(y1), ok2 = isFinite(y2);
        if (!ok1 && !ok2) continue;
        n++;
        s += ok1 !== ok2 ? 4 : Math.min(Math.abs(y1 - y2), 4);
      }
      return n ? Math.max(0, 1 - s / n / 2) : 0;
    }

    function aggiorna(ricrea) {
      if (ricrea) { creaBoard(); scriviLegenda(); }
      board.update();
      R.parametri.forEach((q) => (valEl[q.k].textContent = numTxt(val(q.k), q.step >= 1 ? 0 : q.step < 0.05 ? 2 : 1)));
      formula.innerHTML = mj(`\\(${R.formula(p(), fn(), col, chiave)}\\)`);
      typeset(formula);
      if (R.letture) { letture.hidden = false; letture.innerHTML = mj(R.letture(p(), fn(), chiave)); typeset(letture); }
      if (modo === "sfida" && bersaglio) {
        const q = vicinanza();
        metro.firstChild.style.width = (q * 100).toFixed(0) + "%";
        const esatto = R.parametri.every((pp) => Math.abs(val(pp.k) - bersaglio[pp.k]) < 0.051) || q > 0.995;
        if (esatto && !giaVinta) { giaVinta = true; vinte++; punti.textContent = "Challenges won: " + vinte; vinto.textContent = "Bull's-eye! 🎯"; }
        else if (!esatto) vinto.textContent = q > 0.9 ? "Almost there…" : "";
      }
    }

    function nuovaSfida() {
      bersaglio = R.sfida.genera(chiave);
      giaVinta = false; vinto.textContent = ""; aiuto.hidden = true;
      R.parametri.forEach((q) => (input[q.k].value = q.val));
      aggiorna();
    }

    function setModo(m) {
      modo = m;
      tEsplora.setAttribute("aria-selected", String(m === "esplora"));
      tSfida.setAttribute("aria-selected", String(m === "sfida"));
      pEsplora.hidden = m !== "esplora";
      pSfida.hidden = m !== "sfida";
      scriviLegenda();
      if (m === "sfida" && !bersaglio) nuovaSfida(); else aggiorna();
    }

    function anima(k, btn) {
      if (anim) {
        cancelAnimationFrame(anim.id); anim.btn.classList.remove("on"); anim.btn.textContent = "▶";
        const stesso = anim.k === k; anim = null;
        if (stesso) return;
      }
      const inp = input[k], lo = +inp.min, hi = +inp.max, passo = +inp.step, t0 = performance.now();
      btn.classList.add("on"); btn.textContent = "⏸";
      const step = (t) => {
        if (!document.body.contains(el)) return;
        const v = lo + (hi - lo) * (0.5 - 0.5 * Math.cos((t - t0) / 1500));
        inp.value = (Math.round(v / passo) * passo).toFixed(3);
        aggiorna();
        anim.id = requestAnimationFrame(step);
      };
      anim = { k, btn, id: requestAnimationFrame(step) };
    }

    // light/dark theme switch: redraw with the right colors
    new MutationObserver(() => aggiorna(true)).observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });

    aggiorna(true);
    typeset(el);
  }

  function montaTutti() {
    if (!window.JXG) return;
    document.querySelectorAll(".gi[data-grafico]").forEach(monta);
  }
  if (window.document$) document$.subscribe(montaTutti);
  else document.addEventListener("DOMContentLoaded", montaTutti);
  window.GraficiAnalisi = GRAFICI;
})();
