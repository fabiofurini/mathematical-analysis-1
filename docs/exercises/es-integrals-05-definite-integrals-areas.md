---
title: "Definite integrals, areas and mean value"
---

# Definite integrals, areas and mean value

<div class="info-capitolo" markdown>

**Exercises · Part 7 · Integrals** · with worked solutions · [:material-pencil-box-multiple: Exercises, volume 7 (PDF)](../pdf/exercises-7-integrals.pdf) · [:material-book-open-variant: Chapter 3: Integration techniques and applications](../integrals/03-integration-techniques.md)

</div>

!!! esercizio "Exercise 1"

    Compute by parts

    $$
    {\rm (a)}~~ \int_0^{1} x\,e^{2x}\,dx, ~~~~~~ {\rm (b)}~~ \int_1^{e} x^2\log x\,dx
    $$

??? soluzione "Solution"

    - (a) With $f = x$, $g' = e^{2x}$, $g = \frac{e^{2x}}{2}$:

        $$
        \int_0^1 x\,e^{2x}\,dx = \left[\frac{x\,e^{2x}}{2}\right]_0^1 - \frac12\int_0^1 e^{2x}\,dx = \frac{e^2}{2} - \left[\frac{e^{2x}}{4}\right]_0^1 = \frac{e^2}{2} - \frac{e^2 - 1}{4} = \frac{e^2 + 1}{4}
        $$

    - (b) With $f = \log x$, $g' = x^2$, $g = \frac{x^3}{3}$:

        $$
        \int_1^{e} x^2\log x\,dx = \left[\frac{x^3}{3}\log x\right]_1^{e} - \int_1^{e} \frac{x^2}{3}\,dx = \frac{e^3}{3} - \frac{e^3 - 1}{9} = \frac{2e^3 + 1}{9}
        $$

!!! esercizio "Exercise 2"

    Compute by substitution

    $$
    {\rm (a)}~~ \int_0^{3} x\sqrt{x+1}\,dx, ~~~~~~ {\rm (b)}~~ \int_0^{\log 3} \frac{e^{x}}{(e^{x}+1)^2}\,dx, ~~~~~~ {\rm (c)}~~ \int_0^{\pi/2} \sin^3 x\,dx
    $$

??? soluzione "Solution"

    - (a) With $t = x + 1$, $x = t - 1$, $dx = dt$, limits $1$ and $4$:

        $$
        \int_1^4 (t - 1)\sqrt{t}\,dt = \left[\frac25\,t^{5/2} - \frac23\,t^{3/2}\right]_1^4 = \left(\frac{64}{5} - \frac{16}{3}\right) - \left(\frac25 - \frac23\right) = \frac{116}{15}
        $$

    - (b) With $t = e^{x}$, $dt = e^{x}\,dx$, limits $1$ and $3$:

        $$
        \int_1^3 \frac{dt}{(t+1)^2} = \left[-\frac{1}{t+1}\right]_1^3 = -\frac14 + \frac12 = \frac14
        $$

    - (c) $\sin^3 x = (1 - \cos^2 x)\sin x$; with $t = \cos x$, $dt = -\sin x\,dx$, limits $1$ and $0$:

        $$
        \int_0^{\pi/2} \sin^3 x\,dx = \int_0^1 (1 - t^2)\,dt = 1 - \frac13 = \frac23
        $$

!!! esercizio "Exercise 3"

    Compute

    $$
    \int_0^{1} \frac{x}{x^2 + 3x + 2}\,dx
    $$

??? soluzione "Solution"

    The denominator has roots $-1$ and $-2$: $x^2 + 3x + 2 = (x+1)(x+2)$. From $\frac{x}{(x+1)(x+2)} = \frac{A}{x+1} + \frac{B}{x+2}$ we get $x = A(x+2) + B(x+1)$; with $x = -1$: $A = -1$; with $x = -2$: $B = 2$. Hence

    $$
    \int_0^1 \left( -\frac{1}{x+1} + \frac{2}{x+2} \right) dx = \big[-\log(x+1) + 2\log(x+2)\big]_0^1 = -\log 2 + 2\log 3 - 2\log 2 = \log\frac98
    $$

!!! esercizio "Exercise 4"

    Compute the area of the bounded region between the graphs of $y = x^3$ and $y = x$.

??? soluzione "Solution"

    The intersections solve $x^3 = x$: $x \in \{-1, 0, 1\}$. On $[-1, 0]$ we have $x^3 \ge x$, on $[0, 1]$ we have $x \ge x^3$. Hence

    $$
    {\rm Area} = \int_{-1}^{0} (x^3 - x)\,dx + \int_0^1 (x - x^3)\,dx = \frac14 + \frac14 = \frac12
    $$

    (the two parts are equal because both functions are odd).

!!! esercizio "Exercise 5"

    Find the measure of the set

    $$
    A = \left\{ (x,y) \in \R^2 : 0 \le x \le 2, ~ 0 \le y \le x\,e^{-x} \right\}
    $$

??? soluzione "Solution"

    $x\,e^{-x} \ge 0$ on $[0,2]$, hence the measure is $\int_0^2 x\,e^{-x}\,dx$. By parts, with $f = x$, $g' = e^{-x}$:

    $$
    \int x\,e^{-x}\,dx = -x\,e^{-x} + \int e^{-x}\,dx = -(x+1)\,e^{-x} + c
    $$

    $$
    \int_0^2 x\,e^{-x}\,dx = \big[-(x+1)\,e^{-x}\big]_0^2 = 1 - \frac{3}{e^2}
    $$

!!! esercizio "Exercise 6"

    Compute the area of the region between the graph of $y = \log x$, the $x$-axis and the lines $x = \frac1e$ and $x = e$.

??? soluzione "Solution"

    The logarithm is negative on $\left[\frac1e, 1\right)$ and positive on $(1, e]$: the area is $\int_{1/e}^{e} |\log x|\,dx$. With the antiderivative $x\log x - x$:

    $$
    \int_{1/e}^{1} (-\log x)\,dx = \big[x - x\log x\big]_{1/e}^{1} = 1 - \frac{2}{e}, ~~~~~~ \int_1^{e} \log x\,dx = \big[x\log x - x\big]_1^{e} = 1
    $$

    The area is $2 - \frac{2}{e}$.

!!! esercizio "Exercise 7"

    Compute the mean value of $f(x) = \frac{1}{1+x^2}$ on $[-1, 1]$ and the points $c \in [-1,1]$ at which $f(c)$ equals the mean value.

??? soluzione "Solution"

    $$
    \frac{1}{2}\int_{-1}^{1} \frac{dx}{1+x^2} = \frac12\big[\arctan x\big]_{-1}^{1} = \frac12\cdot\frac{\pi}{2} = \frac{\pi}{4}
    $$

    From $\frac{1}{1+c^2} = \frac{\pi}{4}$ we get $c^2 = \frac{4}{\pi} - 1$, that is, $c = \pm\sqrt{\frac4\pi - 1} \approx \pm 0.52$, both in $[-1,1]$.
