---
title: "Riemann integral and properties"
---

# Riemann integral and properties

<div class="info-capitolo" markdown>

**Exercises · Part 7 · Integrals** · with worked solutions · [:material-pencil-box-multiple: Exercises, volume 7 (PDF)](../pdf/exercises-7-integrals.pdf) · [:material-book-open-variant: Chapter 1: The Riemann integral](../integrals/01-riemann-integral.md)

</div>

!!! esercizio "Exercise 1"

    Let $f(x) = 2x + 1$ on $[0,2]$ and let $P_n$ be the uniform partition of $[0,2]$ into $n$ intervals.

    - Compute $s(f,P_n)$ and $S(f,P_n)$.

    - Deduce that $f$ is integrable and compute $\int_0^2 (2x+1)\,dx$.

??? soluzione "Solution"

    The points of the partition are $x_k = \frac{2k}{n}$ and $\Delta x_k = \frac2n$. The function is increasing, so on $I_k = [x_{k-1}, x_k]$

    $$
    m_k = f(x_{k-1}) = \frac{4(k-1)}{n} + 1, ~~~~~~ M_k = f(x_k) = \frac{4k}{n} + 1
    $$

    With $\sum_{k=1}^n k = \frac{n(n+1)}{2}$:

    $$
    S(f,P_n) = \sum_{k=1}^{n} \left(\frac{4k}{n} + 1\right)\frac{2}{n} = \frac{8}{n^2}\cdot\frac{n(n+1)}{2} + 2 = 6 + \frac{4}{n}
    $$

    $$
    s(f,P_n) = \sum_{k=1}^{n} \left(\frac{4(k-1)}{n} + 1\right)\frac{2}{n} = \frac{8}{n^2}\cdot\frac{(n-1)n}{2} + 2 = 6 - \frac{4}{n}
    $$

    For every $n$ we have $6 - \frac4n \le \sup_P s(f,P) \le \inf_P S(f,P) \le 6 + \frac4n$; letting $n \rr \ip$ we get that $f$ is integrable and

    $$
    \int_0^2 (2x+1)\,dx = 6
    $$

    This is the area of the trapezoid with bases $f(0) = 1$, $f(2) = 5$ and height $2$: $\frac{(1+5)\cdot 2}{2} = 6$.

!!! esercizio "Exercise 2"

    Using the formula $\sum_{k=1}^{n} k^3 = \left(\frac{n(n+1)}{2}\right)^2$, compute the lower and upper sums of $f(x) = x^3$ on $[0,1]$ with respect to the uniform partition $P_n$, and deduce the value of $\int_0^1 x^3\,dx$.

??? soluzione "Solution"

    With $x_k = \frac{k}{n}$ and $f$ increasing, $m_k = \frac{(k-1)^3}{n^3}$ and $M_k = \frac{k^3}{n^3}$. Hence

    $$
    S(f,P_n) = \frac{1}{n^4}\sum_{k=1}^{n} k^3 = \frac{(n+1)^2}{4n^2}, ~~~~~~ s(f,P_n) = \frac{1}{n^4}\sum_{k=1}^{n-1} k^3 = \frac{(n-1)^2}{4n^2}
    $$

    Both tend to $\frac14$ as $n \rr \ip$ and the difference $S - s = \frac{1}{n}$ tends to $0$. Therefore

    $$
    \int_0^1 x^3\,dx = \frac14
    $$

!!! esercizio "Exercise 3"

    Let $f:[0,1] \rr \R$ be defined by $f(x) = 1$ if $x \in \Q$ and $f(x) = -1$ if $x \notin \Q$.

    - Prove that $f$ is not integrable on $[0,1]$.

    - Prove that $|f|$ is integrable and compute its integral.

    - What does this say about the theorem on the integral of the absolute value?

??? soluzione "Solution"

    Every interval $I_k$ of a partition contains rational and irrational numbers, so $m_k = -1$ and $M_k = 1$. For every partition

    $$
    s(f,P) = -\sum_{k=1}^n \Delta x_k = -1, ~~~~~~ S(f,P) = 1
    $$

    The supremum of the lower sums ($-1$) differs from the infimum of the upper sums ($1$): $f$ is not integrable.

    On the other hand $|f(x)| = 1$ for every $x$: it is constant, hence integrable, and $\int_0^1 |f(x)|\,dx = 1$.

    The theorem says that if $f$ is integrable then $|f|$ is integrable; the example shows that the converse is false.

!!! esercizio "Exercise 4"

    Without computing the integrals, prove the estimates

    $$
    {\rm (a)}~~ \frac12 \le \int_0^1 \frac{dx}{1+x^4} \le 1, ~~~~~~~~ {\rm (b)}~~ 1 \le \int_0^1 \sqrt{1+x^3}\,dx \le \sqrt2
    $$

    and decide, again without computing them, which of the two integrals $\int_0^1 x^2\,dx$ and $\int_0^1 x^3\,dx$ is larger, and which of the two integrals $\int_1^2 x^2\,dx$ and $\int_1^2 x^3\,dx$.

??? soluzione "Solution"

    We use the Corollary on the estimates of the integral, with $b - a = 1$.

    - (a) On $[0,1]$ we have $0 \le x^4 \le 1$, hence $\frac12 \le \frac{1}{1+x^4} \le 1$.

    - (b) On $[0,1]$ we have $0 \le x^3 \le 1$, hence $1 \le \sqrt{1+x^3} \le \sqrt2$.

    For $x \in [0,1]$ we have $x^3 \le x^2$, so by the monotonicity of the integral $\int_0^1 x^3\,dx \le \int_0^1 x^2\,dx$. For $x \in [1,2]$ we have $x^3 \ge x^2$, hence $\int_1^2 x^3\,dx \ge \int_1^2 x^2\,dx$. (Indeed $\frac14 < \frac13$ and $\frac{15}{4} > \frac73$.)

!!! esercizio "Exercise 5"

    Let $f(x) = |x - 1|$ on $[0,3]$. Compute $\int_0^3 f(x)\,dx$ with the geometric interpretation, the integral mean of $f$ on $[0,3]$ and all the points $c \in [0,3]$ given by the integral mean value theorem.

??? soluzione "Solution"

    On $[0,3]$ the graph of $f$ forms two triangles with the $x$-axis: on $[0,1]$ with base $1$ and height $1$, on $[1,3]$ with base $2$ and height $2$. By additivity

    $$
    \int_0^3 |x-1|\,dx = \frac12 + 2 = \frac52
    $$

    The integral mean is $\frac13\cdot\frac52 = \frac56$. The required points solve $|c - 1| = \frac56$: $c = \frac16$ or $c = \frac{11}{6}$, both in $[0,3]$. The point of the theorem exists but it is not necessarily unique.

!!! esercizio "Exercise 6"

    Let $f:[a,b] \rr \R$ be continuous and non-negative, with $\int_a^b f(x)\,dx = 0$. Prove that $f(x) = 0$ for every $x \in [a,b]$. Is the conclusion still true if $f$ is only integrable?

??? soluzione "Solution"

    By contradiction, let $f(x_0) > 0$ for some $x_0 \in [a,b]$. By the sign-preserving property (continuity of $f$ at $x_0$) there is an interval $[c,d] \subseteq [a,b]$, with $c < d$ and $x_0 \in [c,d]$, on which $f(x) \ge \frac{f(x_0)}{2}$. By additivity, by $f \ge 0$ and by the Corollary on the estimates of the integral

    $$
    \int_a^b f(x)\,dx \ge \int_c^d f(x)\,dx \ge \frac{f(x_0)}{2}\,(d - c) > 0
    $$

    which contradicts the assumption.

    Without continuity the conclusion is false: the function equal to $1$ at $x = a$ and to $0$ elsewhere is integrable, non-negative, with integral $0$ (Remark on changes at finitely many points), but it is not identically zero.

!!! esercizio "Exercise 7"

    Prove that $f(x) = \sqrt{x}$ is uniformly continuous on $[0,1]$, both with the Heine–Cantor theorem and directly, finding an explicit $\delta$ for every $\varepsilon > 0$. (Hint: $|\sqrt{x} - \sqrt{y}| \le \sqrt{|x - y|}$.)

??? soluzione "Solution"

    The function is continuous on the closed and bounded interval $[0,1]$: by the Heine–Cantor theorem it is uniformly continuous.

    Directly: for $0 \le y \le x$ we have $\sqrt{x} \le \sqrt{y} + \sqrt{x - y}$ (squaring: $x \le y + (x-y) + 2\sqrt{y(x-y)}$), hence $|\sqrt{x} - \sqrt{y}| \le \sqrt{|x - y|}$. Given $\varepsilon > 0$, with $\delta = \varepsilon^2$:

    $$
    |x - y| < \varepsilon^2 ~~~\Longrightarrow~~~ |\sqrt{x} - \sqrt{y}| \le \sqrt{|x-y|} < \varepsilon
    $$

    The $\delta$ does not depend on the points: this is exactly uniform continuity (even on $[0, \ip)$).
