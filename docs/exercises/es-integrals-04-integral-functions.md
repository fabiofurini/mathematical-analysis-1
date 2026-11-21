---
title: "Integral functions and the fundamental theorem"
---

# Integral functions and the fundamental theorem

<div class="info-capitolo" markdown>

**Exercises · Part 7 · Integrals** · with worked solutions · [:material-pencil-box-multiple: Exercises, volume 7 (PDF)](../pdf/exercises-7-integrals.pdf) · [:material-book-open-variant: Chapter 2: Fundamental theorem of calculus](../integrals/02-fundamental-theorem.md)

</div>

!!! esercizio "Exercise 1"

    Compute the derivative of the functions

    $$
    {\rm (a)}~~ F(x) = \int_0^{x^3} \cos(t^2)\,dt, ~~~~~~ {\rm (b)}~~ G(x) = \int_{\sin x}^{1} e^{t^2}\,dt, ~~~~~~ {\rm (c)}~~ H(x) = \int_x^{2x} \log(1+t^2)\,dt
    $$

??? soluzione "Solution"

    The integrands are continuous on $\R$; we apply the theorem on the differentiation of integral functions, $\frac{d}{dx}\int_{\alpha(x)}^{\beta(x)} f(t)\,dt = f(\beta(x))\,\beta'(x) - f(\alpha(x))\,\alpha'(x)$.

    - (a) $\beta(x) = x^3$, $\alpha$ constant: $F'(x) = \cos(x^6)\cdot 3x^2$.

    - (b) $\beta$ constant, $\alpha(x) = \sin x$: $G'(x) = -e^{\sin^2 x}\cos x$.

    - (c) $\beta(x) = 2x$, $\alpha(x) = x$: $H'(x) = 2\log(1+4x^2) - \log(1+x^2)$.

!!! esercizio "Exercise 2"

    Compute the limits

    $$
    {\rm (a)}~~ \lim_{x \rr 0} \frac{1}{x^2}\int_0^{x} (e^{t} - 1)\,dt, ~~~~~~ {\rm (b)}~~ \lim_{x \rr 0^+} \frac{1}{x^3}\int_0^{x^2} \sin\sqrt{t}\,dt, ~~~~~~ {\rm (c)}~~ \lim_{x \rr \ip} \frac{1}{x}\int_0^{x} \arctan t\,dt
    $$

??? soluzione "Solution"

    In all cases we have an indeterminate form and we use L'Hôpital's rule, differentiating the numerator with the fundamental theorem of calculus.

    - (a) Form $\frac00$: $\displaystyle \lim_{x \rr 0} \frac{e^{x} - 1}{2x} = \frac12$.

    - (b) Form $\frac00$; the derivative of the numerator is $\sin\sqrt{x^2}\cdot 2x = 2x\sin x$ (for $x > 0$): $\displaystyle \lim_{x \rr 0^+} \frac{2x\sin x}{3x^2} = \frac23$.

    - (c) The numerator tends to $\ip$, because $\arctan t \ge \frac{\pi}{4}$ for $t \ge 1$. Form $\frac{\infty}{\infty}$: $\displaystyle \lim_{x \rr \ip} \frac{\arctan x}{1} = \frac{\pi}{2}$.

!!! esercizio "Exercise 3"

    Compute, with the fundamental formula of integral calculus,

    $$
    {\rm (a)}~~ \int_0^{\pi/4} \tan^2 x\,dx, ~~~~~~ {\rm (b)}~~ \int_1^{4} \frac{x - 1}{\sqrt{x}}\,dx, ~~~~~~ {\rm (c)}~~ \int_{-1}^{2} |x|\,dx
    $$

??? soluzione "Solution"

    - (a) $\tan^2 x = (1 + \tan^2 x) - 1$ has antiderivative $\tan x - x$: $\displaystyle \big[\tan x - x\big]_0^{\pi/4} = 1 - \frac{\pi}{4}$.

    - (b) $\frac{x-1}{\sqrt x} = x^{1/2} - x^{-1/2}$: $\displaystyle \left[\frac23\,x^{3/2} - 2x^{1/2}\right]_1^4 = \left(\frac{16}{3} - 4\right) - \left(\frac23 - 2\right) = \frac83$.

    - (c) By additivity: $\displaystyle \int_{-1}^{0} (-x)\,dx + \int_0^2 x\,dx = \left[-\frac{x^2}{2}\right]_{-1}^{0} + \left[\frac{x^2}{2}\right]_0^2 = \frac12 + 2 = \frac52$.

!!! esercizio "Exercise 4"

    Given the function

    $$
    F(x) = \int_0^{x} (t^2 - 1)\,e^{-t^2}\,dt, ~~~ x \in \R
    $$

    - find the intervals of monotonicity and the local extremum points of $F$;

    - determine the sign of $F(1)$ and of $F(-1)$;

    - prove that $F$ is odd.

??? soluzione "Solution"

    - The integrand is continuous, hence $F'(x) = (x^2 - 1)\,e^{-x^2}$, which has the sign of $x^2 - 1$: $F$ is increasing on $(\im, -1]$ and on $[1, \ip)$, decreasing on $[-1, 1]$. The point $x = -1$ is a local maximum point, $x = 1$ a local minimum point.

    - $F(0) = 0$ and $F$ is decreasing on $[-1,1]$: hence $F(1) < 0 < F(-1)$.

    - The function $H(x) = F(x) + F(-x)$ has derivative $H'(x) = F'(x) - F'(-x) = 0$, because $F'$ is even. Hence $H$ is constant and $H(x) = H(0) = 0$: $F(-x) = -F(x)$.

!!! esercizio "Exercise 5"

    Let $G(x) = \displaystyle\int_2^{x} \frac{dt}{\log t}$ for $x > 1$. Determine the sign, the monotonicity and the concavity of $G$, and write the equation of the tangent line to the graph at the point with abscissa $x = e$, knowing that $G(e) = \gamma$ (you are not asked to compute $\gamma$).

??? soluzione "Solution"

    The integrand $\frac{1}{\log t}$ is continuous on $(1, \ip)$, which is an interval containing $2$. By the fundamental theorem of calculus

    $$
    G'(x) = \frac{1}{\log x} > 0, ~~~~~~ G''(x) = -\frac{1}{x\log^2 x} < 0, ~~~ \forall x > 1
    $$

    Hence $G$ is increasing and concave on $(1, \ip)$. Since $G(2) = 0$ and $G$ is increasing, $G(x) < 0$ for $1 < x < 2$ and $G(x) > 0$ for $x > 2$ (in particular $\gamma > 0$). The tangent line at $x = e$ has slope $G'(e) = 1$:

    $$
    y = \gamma + (x - e)
    $$

!!! esercizio "Exercise 6"

    - Find a continuous function $f$ such that $\int_0^{x} f(t)\,dt = x^2 + \sin x$ for every $x \in \R$.

    - Is there a continuous function $f$ such that $\int_0^{x} f(t)\,dt = x^2 + 1$ for every $x \in \R$?

??? soluzione "Solution"

    - If $f$ is continuous, by the first part of the fundamental theorem the left-hand side is differentiable with derivative $f(x)$. Differentiating: $f(x) = 2x + \cos x$. Check with the second part: $\int_0^x (2t + \cos t)\,dt = \big[t^2 + \sin t\big]_0^x = x^2 + \sin x$.

    - No: for $x = 0$ the left-hand side equals $\int_0^0 f = 0$, the right-hand side $1$. Differentiating is not enough: the integral function of $2x$ is $x^2$, not $x^2 + 1$.

!!! esercizio "Exercise 7"

    Let $F(x) = \displaystyle\int_0^{x} e^{\sin t}\,dt$. Write the equation of the tangent line to the graph of $F$ at the point with abscissa $0$ and decide whether $F$ is invertible on $\R$.

??? soluzione "Solution"

    $F(0) = 0$ and $F'(x) = e^{\sin x}$, hence $F'(0) = 1$: the tangent line is $y = x$.

    Since $F'(x) = e^{\sin x} > 0$ for every $x$, $F$ is increasing on $\R$, hence injective and invertible onto its image. Moreover $F'(x) \ge e^{-1}$: for $x > 0$ we have $F(x) \ge \frac{x}{e} \rr \ip$, and by the same argument $F(x) \le \frac{x}{e} \rr \im$ as $x \rr \im$. Being continuous, $F$ is a bijection of $\R$ onto $\R$.
