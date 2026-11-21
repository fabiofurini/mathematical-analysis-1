---
title: "Improper integrals"
---

# Improper integrals

<div class="info-capitolo" markdown>

**Exercises · Part 7 · Integrals** · with worked solutions · [:material-pencil-box-multiple: Exercises, volume 7 (PDF)](../pdf/exercises-7-integrals.pdf) · [:material-book-open-variant: Chapter 4: Improper integrals](../integrals/04-improper-integrals.md)

</div>

!!! esercizio "Exercise 1"

    Compute, by means of the definition, the improper integrals

    $$
    {\rm (a)}~~ \int_1^{\ip} \frac{dx}{x(x+1)}, ~~~~~~ {\rm (b)}~~ \int_0^{\ip} x\,e^{-x}\,dx, ~~~~~~ {\rm (c)}~~ \int_0^{1} \frac{dx}{\sqrt{1-x^2}}
    $$

??? soluzione "Solution"

    - (a) $\frac{1}{x(x+1)} = \frac1x - \frac{1}{x+1}$, hence

        $$
        \int_1^{\omega} \frac{dx}{x(x+1)} = \left[\log\frac{x}{x+1}\right]_1^{\omega} = \log\frac{\omega}{\omega+1} + \log 2 \rr \log 2 {\rm ~~~as~~~} \omega \rr \ip
        $$

    - (b) By parts, $\int x\,e^{-x}\,dx = -(x+1)\,e^{-x} + c$; hence $\int_0^{\omega} x\,e^{-x}\,dx = 1 - (\omega + 1)\,e^{-\omega} \rr 1$, by the hierarchy of infinities.

    - (c) The integrand is unbounded near $1$:

        $$
        \int_0^{1} \frac{dx}{\sqrt{1-x^2}} = \lim_{\varepsilon \rr 0^+} \big[\arcsin x\big]_0^{1-\varepsilon} = \arcsin 1 = \frac{\pi}{2}
        $$

!!! esercizio "Exercise 2"

    - Compute by parts the indefinite integral $\displaystyle \int \frac{\log(x+2)}{(x+1)^2}\,dx$.

    - Then compute $\displaystyle \int_0^{\ip} \frac{\log(x+2)}{(x+1)^2}\,dx$.

??? soluzione "Solution"

    With $f = \log(x+2)$ and $g' = \frac{1}{(x+1)^2}$, $g = -\frac{1}{x+1}$:

    $$
    \int \frac{\log(x+2)}{(x+1)^2}\,dx = -\frac{\log(x+2)}{x+1} + \int \frac{dx}{(x+1)(x+2)}
    $$

    and, with the partial fractions $\frac{1}{(x+1)(x+2)} = \frac{1}{x+1} - \frac{1}{x+2}$,

    $$
    \int \frac{\log(x+2)}{(x+1)^2}\,dx = -\frac{\log(x+2)}{x+1} + \log\frac{x+1}{x+2} + c
    $$

    As $\omega \rr \ip$ we have $\frac{\log(\omega+2)}{\omega+1} \rr 0$ and $\log\frac{\omega+1}{\omega+2} \rr 0$; at $x = 0$ the antiderivative equals $-\log 2 + \log\frac12 = -2\log 2$. Hence

    $$
    \int_0^{\ip} \frac{\log(x+2)}{(x+1)^2}\,dx = 0 - (-2\log 2) = 2\log 2
    $$

!!! esercizio "Exercise 3"

    Determine the behaviour of the improper integrals

    $$
    {\rm (a)}~~ \int_1^{\ip} \frac{\sqrt{x} + 1}{x^2 + 1}\,dx, ~~~~~ {\rm (b)}~~ \int_0^{1} \frac{dx}{x + \sqrt{x}}, ~~~~~ {\rm (c)}~~ \int_0^{\pi/2} \frac{dx}{\sin x}, ~~~~~ {\rm (d)}~~ \int_1^{\ip} \frac{\log x}{x^2}\,dx
    $$

??? soluzione "Solution"

    The integrands are continuous and positive on the intervals considered (in (d) positive for $x > 1$).

    - (a) As $x \rr \ip$: $\frac{\sqrt x + 1}{x^2 + 1} \sim \frac{1}{x^{3/2}}$; since $\frac32 > 1$, it converges.

    - (b) As $x \rr 0^+$: $x + \sqrt x \sim \sqrt x$, so the integrand is asymptotic to $\frac{1}{x^{1/2}}$; since $\frac12 < 1$, it converges.

    - (c) As $x \rr 0^+$: $\sin x \sim x$, hence $\frac{1}{\sin x} \sim \frac1x$: it diverges.

    - (d) Eventually $\log x \le \sqrt x$ (hierarchy of infinities), hence $0 \le \frac{\log x}{x^2} \le \frac{1}{x^{3/2}}$: by comparison it converges. (By parts one also finds the value: $1$.)

!!! esercizio "Exercise 4"

    Determine for which values of the parameter $\alpha \in \R$ the following integrals converge:

    $$
    {\rm (a)}~~ \int_0^{\ip} \frac{dx}{x^{\alpha}\,(1+x)}, ~~~~~~ {\rm (b)}~~ \int_0^{1} \frac{1 - \cos x}{x^{\alpha}}\,dx
    $$

??? soluzione "Solution"

    - (a) We split at $x = 1$. As $x \rr 0^+$ the integrand is asymptotic to $\frac{1}{x^{\alpha}}$: it converges if and only if $\alpha < 1$. As $x \rr \ip$ it is asymptotic to $\frac{1}{x^{\alpha+1}}$: it converges if and only if $\alpha + 1 > 1$, that is, $\alpha > 0$. The integral converges if and only if $0 < \alpha < 1$.

    - (b) The integrand is continuous and non-negative on $(0,1]$. As $x \rr 0^+$, $1 - \cos x \sim \frac{x^2}{2}$, hence $\frac{1 - \cos x}{x^{\alpha}} \sim \frac12\cdot\frac{1}{x^{\alpha - 2}}$: it converges if and only if $\alpha - 2 < 1$, that is, $\alpha < 3$. (For $\alpha \le 2$ the integrand is bounded and the integral is a Riemann integral.)

!!! esercizio "Exercise 5"

    Compute

    $$
    {\rm (a)}~~ \int_e^{\ip} \frac{dx}{x\log^3 x}, ~~~~~~ {\rm (b)}~~ \int_0^{\ip} e^{-\sqrt{x}}\,dx
    $$

??? soluzione "Solution"

    - (a) With $t = \log x$, $dt = \frac{dx}{x}$, an antiderivative is $-\frac{1}{2\log^2 x}$:

        $$
        \int_e^{\omega} \frac{dx}{x\log^3 x} = \frac12 - \frac{1}{2\log^2\omega} \rr \frac12
        $$

    - (b) With $x = t^2$, $t \ge 0$, $dx = 2t\,dt$: $\displaystyle \int_0^{\omega} e^{-\sqrt x}\,dx = \int_0^{\sqrt\omega} 2t\,e^{-t}\,dt = 2\big[-(t+1)\,e^{-t}\big]_0^{\sqrt\omega} \rr 2$.

!!! esercizio "Exercise 6"

    Prove that $\displaystyle \int_1^{\ip} \frac{\cos x}{x^{3/2}}\,dx$ converges. Can the comparison tests be applied directly to the integrand?

??? soluzione "Solution"

    The integrand changes sign infinitely many times, so the comparison tests (which require non-negative functions) do not apply directly. However

    $$
    \left|\frac{\cos x}{x^{3/2}}\right| \le \frac{1}{x^{3/2}}
    $$

    and $\int_1^{\ip} \frac{dx}{x^{3/2}}$ converges ($\frac32 > 1$). By comparison $\int_1^{\ip} \left|\frac{\cos x}{x^{3/2}}\right| dx$ converges and, by the theorem on absolute convergence, the given integral converges.

!!! esercizio "Exercise 7"

    Using the integral test, determine for which $p > 0$ the series

    $$
    \sum_{k=2}^{\infty} \frac{1}{k\,(\log k)^p}
    $$

    converges.

??? soluzione "Solution"

    The function $f(x) = \frac{1}{x(\log x)^p}$ is continuous, positive and decreasing on $[2, \ip)$ (increasing and positive denominator). By the integral test (starting from $k_0 = 2$) the series has the same behaviour as $\int_2^{\ip} f(x)\,dx$. With $t = \log x$:

    $$
    \int_2^{\omega} \frac{dx}{x(\log x)^p} = \int_{\log 2}^{\log\omega} \frac{dt}{t^p}
    $$

    Since $\log 2 > 0$, the integral on $[\log 2, 1]$ is finite; on $[1, \ip)$, by the theorem on the standard improper integral at infinity, it converges if and only if $p > 1$. The series converges if and only if $p > 1$.
