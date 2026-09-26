---
title: "Integrals"
---

# Integrals

<div class="info-capitolo" markdown>

**Exercises · Integrals** · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-integrals-02-integrals.pdf)

</div>

!!! esercizio "Exercise 1"

    Determine the measure (area) of the set $A\subset{\R}^{2}$ defined as follows:

    $$
    A=\left\{(x,y)\in{\R}^{2};-1<x<1,x^{2}-1\leq y\leq\frac{x+1}{x+2}\right\}
    $$

??? soluzione "Solution"

    We need to compute

    $$
    \int_{-1}^{1}\left(\frac{x+1}{x+2}-(x^{2}-1)\right)dx.
    $$

    We have

    $$
    \begin{array}{l}\ds\int_{-1}^{1}\left(\frac{x+1}{x+2}+1-x^{2}\right)dx=\int_{-1}^{1}\left(2-\frac{1}{x+2}-x^{2}\right)dx\\
    \\
    \ds=\left[2x-\log(x+2)-\frac{x^{3}}{3}\right]_{-1}^{1}=\frac{10}{3}-\log3.\end{array}
    $$

!!! esercizio "Exercise 2"

    Compute

    $$
    \int_{0}^{1}\frac{e^{x}+e^{x/2}}{1+e^{x}}dx
    $$

??? soluzione "Solution"

    With the substitution $y=e^{x/2}$, $x=2\log y$, $dx=\frac{2}{y}dy$, we obtain

    $$
    \begin{array}{l}\ds\int_{0}^{1}\frac{e^{x}+e^{x/2}}{1+e^{x}}dx=2\int_{1}^{\sqrt{e}}\frac{y^{2}+y}{(1+y^{2})y}dy\\
    \\
    \ds=2\int_{1}^{\sqrt{e}}\frac{y+1}{1+y^{2}}dy=[\log(y^{2}+1)+2\arctan y]_{1}^{\sqrt{e}}\\
    \\
    \ds=\log\frac{e+1}{2}+2\arctan\sqrt{e}-\frac{\pi}{2}.
    \end{array}
    $$

!!! esercizio "Exercise 3"

    Compute

    $$
    \int_{-\pi}^{\pi}e^{-|x|}\cos x \; dx
    $$

??? soluzione "Solution"

    We observe that the function is even, since $f(-x)=f(x)$ for every $x\in[-\pi,\pi]$. Hence, by symmetry

    $$
    \int_{-\pi}^{\pi}e^{-|x|}\cos x \; dx=2\int_{0}^{\pi}e^{-|x|}\cos x \; dx=2\int_{0}^{\pi}e^{-x}\cos x \; dx
    $$

    where in the last equality we used the fact that $|x|=x$ for every $x\geq 0$. Integrating by parts twice, we have

    $$
    \begin{array}{l}\ds I=\int e^{-x}\cos x \; dx=e^{-x}\sin x + \int e^{-x}\sin x \; dx\\
    \\
    \ds=e^{-x}\sin x - e^{-x}\cos x - \int e^{-x}\cos x \; dx= e^{-x}\sin x - e^{-x}\cos x - I \\
    \end{array}
    $$

    from which

    $$
    2I=e^{-x}\sin x - e^{-x}\cos x
    $$

    and finally

    $$
    I=\int e^{-x}\cos x \; dx=\frac{e^{-x}\sin x - e^{-x}\cos x}{2}+c
    $$

    To compute the definite integral, we evaluate the antiderivative between $0$ and $\pi$, not forgetting the factor $2$ in front of the integral:

    $$
    2[I]_0^\pi=e^{-\pi}+1
    $$

!!! esercizio "Exercise 4"

    Compute

    $$
    \int_{0}^{2}\frac{e^{x}\log(1+e^x)}{1+e^{x}}dx
    $$

??? soluzione "Solution"

    With the substitution $1+e^x=t$, $e^x\;dx=dt$, we obtain

    $$
    \begin{array}{l}\ds\int_{0}^{2}\frac{e^{x}\log(1+e^x)}{1+e^{x}}dx=\int_{2}^{e^2+1}\frac{\log t}{t}dt\\
    \\
    \ds=\left[\frac{\log^2 t}{2}\right]_{2}^{e^2+1}=\frac{1}{2}(\log^2(e^2+1)-\log^2 2)
    \end{array}
    $$

!!! esercizio "Exercise 5"

    Determine whether the following integral

    $$
    \int_{0}^{1}\frac{\sin^3\sqrt{x}}{e^{x}(1-\cos x)}dx
    $$

    exists and is finite.

??? soluzione "Solution"

    Since the integrand is continuous on $(0,1]$, to determine whether the given integral converges it is enough to study the behavior of $f$ in a right neighborhood of $x=0$. As $x\to0^+$ we have

    $$
    f(x)\sim\frac{(\sqrt{x})^3}{\frac{1}{2}x^2}=\frac{x^{3/2}}{\frac{1}{2}x^2}=2\frac{1}{x^{1/2}}
    $$

    Since $1/2<1$, by the limit comparison test the given integral exists and is finite; more formally, the function $f(x)$ is improperly integrable in a right neighborhood of the origin.

!!! esercizio "Exercise 6"

    Determine whether the following integral

    $$
    \int_{0}^{+\infty}\frac{x^2}{(3+5x^5)\arctan x^{3/2}}dx
    $$

    exists and is finite.

??? soluzione "Solution"

    The integrand is continuous on $(0,+\infty)$. To determine whether the given integral converges we need to study the behavior of the integrand in a right neighborhood of $x=0$, where the denominator is not defined, and in a neighborhood of $+\infty$. It is convenient to rewrite this integral of the third kind as

    $$
    \int_{0}^{1}\frac{x^2}{(3+5x^5)\arctan x^{3/2}}dx+\int_{1}^{+\infty}\frac{x^2}{(3+5x^5)\arctan x^{3/2}}dx
    $$

    in order to highlight the two separate analyses to be carried out. As $x\to0^+$ we have

    $$
    f(x)\sim\frac{x^2}{3x^{3/2}}=\frac{1}{3x^{-1/2}}
    $$

    Since $-1/2<1$, by the limit comparison test the function $f(x)$ is improperly integrable in a right neighborhood of the origin. Let us now verify that it is also improperly integrable in a neighborhood of $+\infty$. As $x\to+\infty$ we have

    $$
    f(x)\sim\frac{x^2}{5x^5\frac{\pi}{2}}=\frac{2}{5\pi}\frac{1}{x^3}
    $$

    Since $3>1$, by the limit comparison test the function $f(x)$ is improperly integrable also in a neighborhood of $+\infty$. Overall, therefore, the improper integral exists and is finite. We observe that, in fact, since $f(x)\sim\frac{\sqrt{x}}{3}$ as $x\to0^+$, the function can be extended by continuity at $x=0$ and we can set, by definition, $f(0)=0$.

!!! esercizio "Exercise 7"

    Determine for which values of the parameter $\alpha \in \mathbb{R}$ the following improper integral

    $$
    \int_{0}^{1}\frac{\log(1+x^2)}{x^\alpha(1+x^3)}dx
    $$

    exists and is finite.

??? soluzione "Solution"

    The integrand is continuous on $(0,1)$. To determine for which values of $\alpha \in \mathbb{R}$ the given integral converges it is enough to study the behavior of the integrand in a right neighborhood of $x=0$, where the denominator is not defined. As $x\to0^+$ we have

    $$
    f(x)\sim\frac{x^2}{x^\alpha}=\frac{1}{x^{\alpha-2}}
    $$

    which is improperly integrable for $\alpha-2<1$, i.e., for $\alpha<3$.

!!! esercizio "Exercise 8"

    Given the following improper integral

    $$
    \int_{1}^{+\infty}\frac{x\arctan\left(x^2\right)\log^\alpha\left(1+\frac{1}{x}\right)}{x^4+1}dx
    $$

    study its convergence as $\alpha\in\mathbb{R}$ varies. Then, for $\alpha=0$, compute it using the definition.

??? soluzione "Solution"

    The integrand is continuous on $[1,+\infty)$. To determine for which values of $\alpha \in \mathbb{R}$ the given integral converges it is enough to study the behavior of the integrand in a neighborhood of $+\infty$. As $x\to+\infty$ we have

    $$
    f(x)\sim\frac{x}{x^4}\frac{\pi}{2}\left(\frac{1}{x}\right)^\alpha=\frac{\pi}{2}\frac{1}{x^{\alpha+3}}
    $$

    where we needed the asymptotic estimates $x^4+1\sim x^4$, $\log^\alpha\left(1+\frac{1}{x}\right)\sim\left(\frac{1}{x}\right)^\alpha$, $x\to+\infty$. By the limit comparison test, the improper integral exists and is finite if $\alpha+3>1$, that is, $\alpha>-2$.

    For $\alpha=0$, the integral becomes

    $$
    \int_{1}^{+\infty}\frac{x\arctan(x^2)}{x^4+1}dx
    $$

    We can proceed by substitution, setting $\arctan(x^2)=t$, $\frac{x}{1+x^4}\; dx=\frac{1}{2}\; dt$, and we obtain

    $$
    \int_{1}^{+\infty}\frac{x\arctan\left(x^2\right)}{x^4+1}\;dx=\int_{\pi/4}^{\pi/2}\frac{t}{2}\;dt=\frac{3}{64}\pi^2
    $$

!!! esercizio "Exercise 9"

    After determining whether or not the function is summable, compute the following integrals

    $$
    \ds{\rm (a)}\ \int_{-1}^{0}\frac{1}{(1-x)\sqrt{1+x}}dx,~~~
    {\rm (b)}\ \int_{-1}^{1}\frac{1}{(1-x)\sqrt{1+x}}dx,~~~
    {\rm (c)}\ \int_{0}^{+\infty}xe^{-x^{2}}dx
    $$

    $$
    {\rm (d)}\ \int_{0}^{+\infty}x^{3}e^{-x^{2}}dx,~~~
    {\rm (e)}\ \int_{4}^{+\infty}\frac{1}{x(x-3)}dx
    $$

    These are all continuous and positive functions on their respective intervals of integration, hence they are all integrable functions. Each integral represents the measure of the region under the graph. In all cases, the region under the graph is an unbounded subset of the plane, so the integral is either a positive number or $+\infty$. Recall that a function is called summable when it is integrable with finite integral.

??? soluzione "Solution"

    (a) The function

    $$
    f(x)=\frac{1}{(1-x)\sqrt{1+x}}
    $$

    is continuous on the interval $(-1,0]$. Hence, we need to study its behavior in a right neighborhood of $x=-1$. As $x\to-1^+$ we have

    $$
    f(x)\sim \frac{1}{\sqrt{1+x}}=\frac{1}{(1+x)^\frac{1}{2}},\ \ x\to-1^{+}
    $$

    hence the function is summable on $(-1,0]$ by the comparison test, since $\frac{1}{2}<1$. This means that

    $$
    \int_{-1}^{0}f(x)dx=\lim_{\varepsilon\to0^{+}}\int_{-1+\varepsilon}^{0}f(x)dx
    $$

    and that this limit exists, finite and positive.

    Setting $y=\sqrt{1+x}$, $x=y^{2}-1$, $dx=2y\ dy$, we obtain

    $$
    \int_{-1+\varepsilon}^{0}f(x)dx=\int_{\sqrt{\varepsilon}}^{1}\frac{2}{2-y^{2}}dy,
    $$

    hence, taking into account that $\sqrt{\varepsilon}\to0$ as $\varepsilon\to0$, we have

    $$
    \int_{-1}^{0}f(x)dx=\lim_{\delta\to0^{+}}\int_{\delta}^{1}\frac{2}{2-y^{2}}dy=\int_{0}^{1}\frac{2}{2-y^{2}}dy.
    $$

    Note that, in this case, after the change of variable, we obtained the integral of a bounded function starting from the integral of an unbounded one.

    Using partial fractions, and taking into account also that $|y-\sqrt{2}|=\sqrt{2}-y$ on the interval of integration, we have

    $$
    \frac{2}{2-y^{2}}=-\frac{2}{(y-\sqrt{2})(y+\sqrt{2})}=\frac{1}{\sqrt{2}}\left(\frac{1}{y+\sqrt{2}}-\frac{1}{y-\sqrt{2}}\right),
    $$

    hence

    $$
    \begin{array}{l}\ds\int_{-1}^{0}f(x)dx=\frac{1}{\sqrt{2}}\int_{0}^{1}\left(\frac{1}{y+\sqrt{2}}-\frac{1}{y-\sqrt{2}}\right)dy\\
    \\
    \ds=\frac{1}{\sqrt{2}}\left[\log\frac{y+\sqrt{2}}{\sqrt{2}-y}\right]_{0}^{1}=\frac{1}{\sqrt{2}}\log\frac{1+\sqrt{2}}{\sqrt{2}-1}.
    \end{array}
    $$

??? soluzione "Solution"

    (b) We have

    $$
    \int_{-1}^{1}\frac{1}{(1-x)\sqrt{1+x}}dx=\int_{-1}^{0}\frac{1}{(1-x)\sqrt{1+x}}dx+\int_{0}^{1}\frac{1}{(1-x)\sqrt{1+x}}dx
    $$

    where the first integral is finite and was computed in the previous item. The integral now given is therefore finite if and only if so is

    $$
    \int_{0}^{1}\frac{1}{(1-x)\sqrt{1+x}}dx.
    $$

    The function

    $$
    f(x)=\frac{1}{(1-x)\sqrt{1+x}}
    $$

    is continuous and bounded on every interval $[0,1-\varepsilon]$, $\varepsilon>0$. Moreover, we have

    $$
    f(x)\sim \frac{1}{\sqrt{2}}\frac{1}{1-x},\ \ x\to1^{-}
    $$

    hence the function is not summable on $[0,1)$ by the comparison test. This means that

    $$
    \int_{0}^{1}f(x)dx=\lim_{\varepsilon\to0^{+}}\int_{0}^{1-\varepsilon}f(x)dx=+\infty,
    $$

    hence the given integral is also

    $$
    \int_{-1}^{1}\frac{1}{(1-x)\sqrt{1+x}}dx=+\infty.
    $$

??? soluzione "Solution"

    (c) The function $f(x)=xe^{-x^{2}}$ is continuous and bounded on every interval $[0,a]$ with $a>0$. Moreover, we have

    $$
    f(x)=O\left(\frac{1}{x^{\alpha}}\right),\ \ x\to+\infty,
    $$

    for any $\alpha>0$; in particular, choosing $\alpha>1$, the function is summable on $[0,+\infty)$. This means that

    $$
    \int_{0}^{+\infty}f(x)dx=\lim_{a\to+\infty}\int_{0}^{a}f(x)dx
    $$

    and that this limit exists, finite and positive. Indeed

    $$
    \lim_{a\to+\infty}\int_{0}^{a}xe^{-x^{2}}dx=-\frac{1}{2}\lim_{a\to+\infty}[e^{-x^{2}}]_{0}^{a}=
    -\frac{1}{2}\lim_{a\to+\infty}(e^{-a^{2}}-1)=\frac{1}{2}.
    $$

    The given integral is equal to $1/2$.

??? soluzione "Solution"

    (d) The function $f(x)=x^{3}e^{-x^{2}}$ is continuous and bounded on every interval $[0,a]$ with $a>0$. Moreover, we have

    $$
    f(x)=O\left(\frac{1}{x^{\alpha}}\right),\ \ x\to+\infty,
    $$

    for any $\alpha>0$; in particular, choosing $\alpha>1$, the function is summable on $[0,+\infty)$. This means that

    $$
    \int_{0}^{+\infty}f(x)dx=\lim_{a\to+\infty}\int_{0}^{a}f(x)dx
    $$

    and that this limit exists, finite and positive. Indeed, integrating by parts, and taking into account the integral computed in the previous item,

    $$
    \begin{array}{l}\ds\lim_{a\to+\infty}\int_{0}^{a}x^{3}e^{-x^{2}}dx=\lim_{a\to+\infty}\left\{-\frac{1}{2}[x^{2}e^{-x^{2}}]_{0}^{a}
    +\int_{0}^{a}xe^{-x^{2}}dx\right\}\\
    \\
    \ds=\lim_{a\to+\infty}\left(-\frac{1}{2}a^{2}e^{-a^{2}}+\int_{0}^{a}xe^{-x^{2}}dx\right)=\frac{1}{2}.
    \end{array}
    $$

    The given integral is equal to $1/2$.

??? soluzione "Solution"

    (e) The function $f(x)=\frac{1}{x(x-3)}$ is continuous and bounded on every interval $[4,a]$ with $a>4$. Moreover, we have

    $$
    f(x)\sim\frac{1}{x^{2}},\ \ x\to+\infty,
    $$

    hence the function is summable on $[4,+\infty)$ by comparison. This means that

    $$
    \int_{4}^{+\infty}f(x)dx=\lim_{a\to+\infty}\int_{4}^{a}f(x)dx
    $$

    and that this limit exists, finite and positive. Indeed, using partial fractions,

    $$
    \begin{array}{l}\ds\lim_{a\to+\infty}\int_{4}^{a}\frac{1}{x(x-3)}dx=
    \frac{1}{3}\lim_{a\to+\infty}\int_{4}^{a}\left(\frac{1}{x-3}-\frac{1}{x}\right)dx=
    \frac{1}{3}\lim_{a\to+\infty}\left[\log\frac{x-3}{x}\right]_{4}^{a}\\
    \\
    \ds=\frac{1}{3}\lim_{a\to+\infty}\left(\log\frac{a-3}{a}-\log\frac{1}{4}\right)=-\frac{1}{3}\log\frac{1}{4}=\frac{1}{3}\log4.
    \end{array}
    $$

    The given integral is equal to $\frac{1}{3}\log4$.

!!! esercizio "Exercise 10"

    Determine all $\alpha\geq0$ for which the function

    $$
    f(x)=\left(\sqrt{1+x}-\sqrt{x}\right)^{\alpha}
    $$

    is summable on $[0,+\infty)$

??? soluzione "Solution"

    The function $f(x)$ is continuous and positive on $[0,+\infty)$, so it is enough to analyze its behavior in a neighborhood of $+\infty$, that is, as $x\to+\infty$. Multiplying and dividing by $\left(\sqrt{1+x}+\sqrt{x}\right)^{\alpha}$, we have

    $$
    f(x)=\frac{1}{\left(\sqrt{1+x}+\sqrt{x}\right)^{\alpha}}\sim\frac{1}{(2\sqrt x)^\alpha}=\frac{1}{2^{\alpha}}\frac{1}{x^{\alpha/2}}, \ x\to+\infty.
    $$

    By comparison, it follows that $f$ is summable on $[0,+\infty)$ if and only if $\alpha/2>1$, hence if and only if

    $$
    \alpha>2.
    $$

!!! esercizio "Exercise 11"

    Given

    $$
    \int_0^{+\infty}{\frac{\log\left(1+e^{x^2}\right)}{2+3x^{5/2}+x^{3\alpha}+12x} \; dx}
    $$

    determine for which values of $\alpha>0$ it converges, that is, it exists and is finite.

??? soluzione "Solution"

    The function $f(x)$ is continuous and positive on $[0,+\infty)$, so it is enough to analyze its behavior in a neighborhood of $+\infty$, that is, as $x\to+\infty$. We have

    $$
    f(x)=\frac{\log\left(1+e^{x^2}\right)}{2+3x^{5/2}+x^{3\alpha}+12x}\sim\frac{\log\left(e^{x^2}\right)}{3x^{5/2}+x^{3\alpha}}=\frac{x^2}{3x^{5/2}+x^{3\alpha}} \sim
    $$

    $$
    \sim \left\{ \begin{array}{ll}
             \frac{x^2}{3x^{5/2}}=\frac{1}{3}\frac{1}{x^{1/2}} & \mbox{if $3\alpha<5/2$, i.e., if and only if $\alpha<5/6$}\vspace{0.5cm}\\
            \frac{x^2}{4x^{5/2}}=\frac{1}{4}\frac{1}{x^{1/2}} & \mbox{if $3\alpha=5/2$, i.e., if and only if $\alpha=5/6$}\vspace{0.5cm}\\
            \frac{x^2}{x^{3\alpha}}=\frac{1}{x^{3\alpha-2}} & \mbox{if $3\alpha>5/2$, i.e., if and only if $\alpha>5/6$}
            \end{array} \right.
    $$

    In the first two cases, the improper integral diverges by limit comparison, since $1/2<1$. In the third case, instead, it exists and is finite if and only if $3\alpha-2>1$, that is, if and only if $\alpha>1$. In conclusion, the improper integral exists and is finite (converges) for $\alpha>1$, and diverges for $\alpha\leq1$.

!!! esercizio "Exercise 12"

    Given

    $$
    \int_0^{+\infty}\frac{3+2x^{3/2}+5x^{4\alpha}+x^{1/2}}{\log\left(1+e^{x^5}\right)} \; dx
    $$

    determine for which values of $\alpha>0$ it converges, that is, it exists and is finite.

??? soluzione "Solution"

    The function $f(x)$ is continuous and positive on $[0,+\infty)$, so it is enough to analyze its behavior in a neighborhood of $+\infty$, that is, as $x\to+\infty$. We have

    $$
    f(x)=\frac{3+2x^{3/2}+5x^{4\alpha}+x^{1/2}}{\log\left(1+e^{x^5}\right)}\sim\frac{2x^{3/2}+5x^{4\alpha}}{\log\left(e^{x^5}\right)}=\frac{2x^{3/2}+5x^{4\alpha}}{x^5} \sim
    $$

    $$
    \sim \left\{ \begin{array}{ll}
             \frac{2x^{3/2}}{x^5}=2\frac{1}{x^{7/2}} & \mbox{if $4\alpha<3/2$, i.e., if and only if $\alpha<3/8$}\vspace{0.5cm}\\
            \frac{7x^{3/2}}{x^5}=7\frac{1}{x^{7/2}} & \mbox{if $4\alpha=3/2$, i.e., if and only if $\alpha=3/8$}\vspace{0.5cm}\\
            \frac{5x^{4\alpha}}{x^{5}}=5\frac{1}{x^{5-4\alpha}} & \mbox{if $4\alpha>3/2$, i.e., if and only if $\alpha>3/8$}
            \end{array} \right.
    $$

    In the first two cases, the improper integral converges by limit comparison, since $7/2>1$. In the third case, instead, it exists and is finite if and only if $5-4\alpha>1$, that is, if and only if $\alpha<1$. In conclusion, the improper integral exists and is finite (converges) for $\alpha<1$, and diverges for $\alpha\geq1$.

!!! esercizio "Exercise 13"

    Given

    $$
    \int_1^{+\infty}\frac{\arctan x}{\sqrt{x}(1+x^\alpha)} \; dx
    $$

    determine for which values of $\alpha\in\mathbb{R}$ it converges, that is, it exists and is finite.

??? soluzione "Solution"

    The function $f(x)$ is continuous and positive on $[1,+\infty)$, so it is enough to analyze its behavior in a neighborhood of $+\infty$, that is, as $x\to+\infty$. We have

    $$
    f(x)\sim\left\{ \begin{array}{ll}
             \frac{\pi/2}{x^{1/2}+x^{1/2+\alpha}}\sim\frac{\pi}{2x^{1/2}} & \mbox{if $\alpha<0$}\vspace{0.5cm}\\
            \frac{\pi/2}{2x^{1/2}}=\frac{\pi}{4x^{1/2}} & \mbox{if $\alpha=0$}\vspace{0.5cm}\\
            \frac{\pi/2}{x^{1/2}+x^{1/2+\alpha}}\sim\frac{\pi}{2x^{1/2+\alpha}} & \mbox{if $\alpha>0$}
            \end{array} \right.
    $$

    In the first two cases, the improper integral diverges by limit comparison, since $1/2<1$. In the third case, instead, it exists and is finite if and only if $\frac{1}{2}+\alpha>1$, that is, if and only if $\alpha>\frac{1}{2}$. In conclusion, the improper integral exists and is finite (converges) in a neighborhood $U(+\infty)$ for $\alpha>\frac{1}{2}$, and diverges for $\alpha\leq\frac{1}{2}$.

!!! esercizio "Exercise 14"

    Perform the change of variable $y=\sqrt{x}$ in

    $$
    \int_4^{+\infty}\frac{1}{\sqrt{x}(\sqrt{x}+2)(\sqrt{x}+6)}dx
    $$

    and write the corresponding integral in $dy$. Then determine the value of the integral.

??? soluzione "Solution"

    From $y=\sqrt{x}$, $x=y^{2}$, $dx=2y\ dy$, we obtain

    $$
    \int_4^{+\infty}\frac{1}{\sqrt{x}(\sqrt{x}+2)(\sqrt{x}+6)}dx=\int_{2}^{+\infty}\frac{2}{(y+2)(y+6)}dy.
    $$

    Using partial fractions,

    $$
    \begin{array}{l}\ds\int_{2}^{+\infty}\frac{2}{(y+2)(y+6)}dy=\lim_{a\to+\infty}\int_{2}^{a}\frac{2}{(y+2)(y+6)}dy\\
    \\
    \ds=\frac{1}{2}\lim_{a\to+\infty}\int_{2}^{a}\left(\frac{1}{y+2}-\frac{1}{y+6}\right)dy=
    \frac{1}{2}\lim_{a\to+\infty}\left[\log\frac{y+2}{y+6}\right]_{2}^{a}\\
    \\
    \ds=\frac{1}{2}\lim_{a\to+\infty}\left(\log\frac{a+2}{a+6}-\log\frac{1}{2}\right)=-\frac{1}{2}\log\frac{1}{2}=\frac{1}{2}\log2.
    \end{array}
    $$

!!! esercizio "Exercise 15"

    Given the function

    $$
    f:[1,+\infty)\rightarrow{\R},\ \ f(x)=\int_1^x\frac{(t^3-27)(t-1)^3}{t^7+1}dt
    $$

    $\bullet$ Write $f'(x)$.

    $\bullet$ Find the possible relative maximum or minimum points in the interior of the domain, specifying the sign of the values taken at those points.

    $\bullet$ State whether $\displaystyle\lim_{x\to+\infty}f(x)$ exists and whether it is finite or not, justifying your answer.

    $\bullet$ Determine for which value of $\alpha$ the limit

    $$
    \lim_{x\to1}(x-1)^\alpha f(x)
    $$

    is finite and different from $0$, justifying your answer.

??? soluzione "Solution"

    By the Fundamental theorem of calculus

    $$
    f'(x)=\frac{(x^3-27)(x-1)^3}{x^7+1}.
    $$

??? soluzione "Solution"

    The first derivative vanishes at the endpoint $x=1$ of the domain and at the interior point $x=3$. It is negative for $1<x<3$ and positive for $x>3$. The point $x=3$ is an interior (absolute) minimum point. The corresponding value

    $$
    f(3)=\int_1^3\frac{(t^3-27)(t-1)^3}{t^7+1}dt
    $$

    is negative, as follows from the fact that $f(1)=0$ and that $f$ is strictly decreasing on $[1,3]$. The same conclusion is reached directly by observing that the integrand is negative on the interval $[1,3)$.

??? soluzione "Solution"

    The function $f$ is strictly increasing on $(3,+\infty)$, hence the limit exists, finite or $+\infty$.

    By definition,

    $$
    \lim_{x\to+\infty}f(x)=\int_1^{+\infty}\frac{(t^3-27)(t-1)^3}{t^7+1}dt,
    $$

    hence the question is equivalent to asking whether or not the function

    $$
    g(t)=\frac{(t^3-27)(t-1)^3}{t^7+1}
    $$

    is summable on $[1,+\infty)$.

    The function $g(t)$ is continuous on $[1,+\infty)$, so it is enough to examine its behavior as $t\to+\infty$. We have

    $$
    g(t)\sim\frac{1}{t},\ \ t\to+\infty,
    $$

    from which the function is not summable on $[1,+\infty)$.

    In conclusion, $\displaystyle\lim_{x\to+\infty}f(x)=+\infty$.

??? soluzione "Solution"

    We have $\ds\lim_{x\to1}f(x)=f(1)=0$, hence for $\alpha\geq0$ the given limit is zero. For $\alpha<0$, say $\alpha=-\beta$ with $\beta>0$, the given limit

    $$
    \lim_{x\to1^{+}}\frac{f(x)}{(x-1)^{\beta}}
    $$

    has the indeterminate form $\frac{0}{0}$. Applying L'Hopital's rule, we have

    $$
    \begin{array}{l}\ds\lim_{x\to1^{+}}\frac{f(x)}{(x-1)^{\beta}}=\lim_{x\to1^{+}}\frac{f'(x)}{\beta(x-1)^{\beta-1}}\\
    \\
    \ds=\lim_{x\to1^{+}}\frac{(x^3-27)(x-1)^3}{\beta(x-1)^{\beta-1}(x^7+1)}=-\frac{13}{\beta}\lim_{x\to1^{+}}\frac{(x-1)^{3}}{(x-1)^{\beta-1}}.
    \end{array}
    $$

    This limit exists for every $\beta>0$, but it is finite and different from zero, as required, if and only if $\beta=4$ (and in this case it equals $-13/4$).

    In conclusion, the given limit exists, finite and different from zero, if and only if $\alpha=-4$.

!!! esercizio "Exercise 16"

    Compute

    $$
    \displaystyle\int_{0}^{+\infty} \frac{1}{\sqrt{x}(\sqrt{x}+1)(\sqrt{x}+4)}dx
    $$

    Then explain how one can anticipate, without using antiderivatives, the summability of the function on the given interval.

??? soluzione "Solution"

    The function

    $$
    f(x)=\frac{1}{\sqrt{x}(\sqrt{x}+1)(\sqrt{x}+4)}
    $$

    is continuous and positive on $(0,+\infty)$, unbounded as $x\to0$, and the interval of integration is unbounded. Writing

    $$
    \int_{0}^{+\infty}f(x)dx=\int_{0}^{1}f(x)dx+\int_{1}^{+\infty}f(x)dx,
    $$

    it is necessary and sufficient to examine the asymptotic behavior of $f(x)$ as $x\to0$ and as $x\to+\infty$. We have

    $$
    f(x)\sim\frac{1}{4}\frac{1}{\sqrt{x}},\ \ x\to0;\ \ \ \ f(x)\sim\frac{1}{x^{3/2}},\ \ x\to+\infty.
    $$

    Therefore, $f(x)$ is summable on $(0,+\infty)$ because, by comparison, it is summable both on $(0,1]$ and on $[1,+\infty)$.

    We can compute the value with the substitution $y=\sqrt{x}$, $x=y^{2}$, $dx=2y\ dy$:

    $$
    \begin{array}{l}
    \ds\int_{0}^{+\infty} \frac{1}{\sqrt{x}(\sqrt{x}+1)(\sqrt{x}+4)}dx=\int_{0}^{+\infty} \frac{2}{(y+1)(y+4)}dy\\
    \\
    \ds=\frac{2}{3}\int_{0}^{+\infty}\left(\frac{1}{y+1}-\frac{1}{y+4}\right)dy=
    \frac{2}{3}\lim_{a\to+\infty}\left[\log\frac{y+1}{y+4}\right]_{0}^{a}\\
    \\
    \ds=\frac{2}{3}\lim_{a\to+\infty}\left(\log\frac{a+1}{a+4}-\log\frac{1}{4}\right)=-\frac{2}{3}\log\frac{1}{4}=\frac{2}{3}\log4.
    \end{array}
    $$

!!! esercizio "Exercise 17"

    Let

    $$
    \displaystyle f:[1/2,+\infty[\longrightarrow {\R}, \ f(x)= \int_{1}^{x}\frac{\log t}{t^2}dt
    $$

    $\bullet$ Determine the possible local extremum points and the monotonicity of $f$.

    $\bullet$ Justify the existence of a horizontal asymptote for $f$.

    $\bullet$ Compute $\displaystyle\lim_{x\to 1}\frac{f(x)}{(x-1)^2}$.

??? soluzione "Solution"

    By the Fundamental theorem of calculus,

    $$
    f'(x)=\frac{\log x}{x^2}
    $$

    for every $x$ in the given domain $[1/2,+\infty)$. The derivative vanishes at $x=1$, is negative for $1/2\leq x<1$ and positive for $x>1$. The function $f$ is therefore strictly decreasing on $[1/2,1)$ and strictly increasing on $(1,+\infty)$. The point $x=1$ is an absolute minimum point with value $f(1)=0$; in particular the function takes only non-negative values (positive for every $x\neq1$ in the given domain).

??? soluzione "Solution"

    We have to justify that $\ds\lim_{x\to+\infty}f(x)$ exists and is finite. By definition,

    $$
    \lim_{x\to+\infty}f(x)=\int_1^{+\infty}\frac{\log t}{t^2}dt,
    $$

    hence we have to justify the fact that the function

    $$
    g(t)=\frac{\log t}{t^2}
    $$

    is summable on $[1,+\infty)$.

    The function $g(t)$ is continuous on $[1,+\infty)$, so it is enough to examine its behavior as $t\to+\infty$. Since $\log t$ is an infinity of lower order than any power, we have

    $$
    g(t)=O\left(\frac{1}{t^{2-\varepsilon}}\right),\ \ t\to+\infty,
    $$

    for every $\varepsilon>0$, from which, choosing $\varepsilon$ such that $2-\varepsilon>1$, the function $g$ is summable on $[1,+\infty)$.

??? soluzione "Solution"

    We have $\ds\lim_{x\to1}f(x)=f(1)=0$, hence the given limit has the indeterminate form $\frac{0}{0}$. Applying L'Hopital's rule, we have

    $$
    \begin{array}{l}\ds\lim_{x\to1}\frac{f(x)}{(x-1)^{2}}=\lim_{x\to1}\frac{f'(x)}{2(x-1)}\\
    \\
    \ds=\lim_{x\to1}\frac{\log x}{2(x-1)x^{2}}=\frac{1}{2}\lim_{x\to1}\frac{\log x}{x-1}=\frac{1}{2}\lim_{y\to0}\frac{\log(1+y)}{y}=\frac{1}{2}.
    \end{array}
    $$

!!! esercizio "Exercise 18"

    Consider

    $$
    \int_{2}^{+\infty} \frac{x+2}{x(x+1)(x-1)}dx.
    $$

    Before computing it, justify the fact that this integral exists and is finite.

??? soluzione "Solution"

    The function

    $$
    f(x)= \frac{x+2}{x(x+1)(x-1)}
    $$

    is continuous and positive on $[2,+\infty)$ and has the asymptotic behavior

    $$
    f(x)\sim\frac{1}{x^{2}},\ \ x\to+\infty,
    $$

    hence it is improperly integrable in a neighborhood of $+\infty$ by comparison.

    From the partial fractions

    $$
    \frac{x+2}{x(x+1)(x-1)}=-\frac{2}{x}+\frac{1}{2}\frac{1}{x+1}+\frac{3}{2}\frac{1}{x-1},
    $$

    we obtain the antiderivative on $[2,+\infty)$

    $$
    \int \frac{x+2}{x(x+1)(x-1)}dx=\log\frac{(x+1)^{1/2}(x-1)^{3/2}}{x^{2}}.
    $$

    Hence

    $$
    \begin{array}{l}\ds\int_{2}^{+\infty}\frac{x+2}{x(x+1)(x-1)}dx=\lim_{a\to+\infty}\left[\log\frac{(x+1)^{1/2}(x-1)^{3/2}}{x^{2}}\right]_{2}^{a}\\
    \\
    \ds=\lim_{a\to+\infty}\left(\log\frac{(a+1)^{1/2}(a-1)^{3/2}}{a^{2}}-\log\frac{3^{1/2}}{4}\right)=\log\frac{4}{\sqrt{3}}.
    \end{array}
    $$

!!! esercizio "Exercise 19"

    Using the change of variable $y=e^x$, compute

    $$
    \int_0^{+\infty}\frac{e^x}{(e^x+2)(e^x+3)}dx.
    $$

??? soluzione "Solution"

    From $y=e^{x}$, $x=\log y$, $dx=\frac{1}{y}dy$ and using partial fractions, it follows that

    $$
    \begin{array}{l}\ds\int_0^{+\infty}\frac{e^x}{(e^x+2)(e^x+3)}dx=\int_{1}^{+\infty}\frac{1}{(y+2)(y+3)}dy\\
    \\
    \ds=\int_{1}^{+\infty}\left(\frac{1}{y+2}-\frac{1}{y+3}\right)dy=\lim_{a\to+\infty}\left[\log\frac{y+2}{y+3}\right]_{1}^{a}\\
    \\
    \ds=\lim_{a\to+\infty}\left(\log\frac{a+2}{a+3}-\log\frac{3}{4}\right)=\log\frac{4}{3}
    \end{array}
    $$

!!! esercizio "Exercise 20"

    Given the function

    $$
    f:[1,+\infty)\rightarrow{\R},\ \ f(x)=\displaystyle\int_1^x\frac{t^3-27}{t^5+1}dt
    $$

    $\bullet$ Write $f'(x)$.

    $\bullet$ Determine the possible relative maximum or minimum points.

    $\bullet$ Write $f''(x)$.

    $\bullet$ To justify the presence or absence of inflection points, carry out separately a brief study of the polynomial function $y=-2x^5+135x^2+3$, sketching a qualitative graph. This polynomial is one of the factors of $f''(x)$.

    $\bullet$ Based on the previous item, state whether $f$ has inflection points. (You are not asked to find these points explicitly, but only to state whether there are any, how many there are, and to locate them with respect to other notable points such as relative maximum or minimum points).

    $\bullet$ State whether $\lim_{x\to+\infty}f(x)$ exists and whether it is finite or not, justifying your answer (if it is finite, you are not asked to compute it).

??? soluzione "Solution"

    By the Fundamental theorem of calculus,

    $$
    f'(x)=\frac{x^3-27}{x^5+1}
    $$

    for all $x$ in the given domain $[1,+\infty)$.

??? soluzione "Solution"

    The derivative vanishes at $x=3$, is negative on $[1,3)$ and positive on $(3,+\infty)$. The function is strictly decreasing on $[1,3)$ and strictly increasing on $(3,+\infty)$. The point $x=3$ is an absolute minimum point, with value

    $$
    f(3)=\int_1^3\frac{t^3-27}{t^5+1}dt,
    $$

    which can be computed using partial fractions if necessary, and which is negative since $f(1)=0$ and $f$ is strictly decreasing on $[1,3)$. The sign of $f(3)$ can also be determined directly by observing that the integrand is strictly negative for $t\in[1,3)$.

??? soluzione "Solution"

    $$
    f''(x)=\frac{x^{2}(-2x^5+135x^2+3)}{(x^{5}+1)^{2}}.
    $$

??? soluzione "Solution"

    We have $\ds\lim_{x\to\pm\infty}y(x)=\mp\infty$. Then $y'(x)=-10x(x^{3}-27)$, from which $y(x)$ is strictly decreasing on $(-\infty,0)$, the point $x=0$ is a relative minimum point with value $y(0)=3$, $y(x)$ is strictly increasing on $(0,3)$, the point $x=3$ is a relative maximum point with value $y(3)=732$, and $y(x)$ is strictly decreasing on $(3,+\infty)$. In particular, $y(x)$ has a unique zero at $x=\alpha$ with $\alpha\in(3,+\infty)$, $y(x)>0$ for $x<\alpha$, $y(x)<0$ for $x>\alpha$.

??? soluzione "Solution"

    On the given domain, the second derivative has the same sign as $-2x^5+135x^2+3$. By what we saw in the previous item, the function $f$ has an inflection point at $x=\alpha$, with $\alpha\in(3,+\infty)$, is strictly convex on $(1,\alpha)$ and strictly concave on $(\alpha,+\infty)$.

??? soluzione "Solution"

    The function is strictly increasing on $(3,+\infty)$, hence the limit exists, finite or $+\infty$.

    By definition,

    $$
    \lim_{x\to+\infty}f(x)=\int_1^{+\infty}\frac{t^3-27}{t^5+1}dt,
    $$

    hence the question is equivalent to asking whether or not the function

    $$
    g(t)=\frac{t^3-27}{t^5+1}
    $$

    is summable on $[1,+\infty)$.

    The function $g(t)$ is continuous on $[1,+\infty)$, so it is enough to examine its behavior as $t\to+\infty$. We have

    $$
    g(t)\sim\frac{1}{t^{2}},\ \ t\to+\infty,
    $$

    from which the function is summable on $[1,+\infty)$.

    In conclusion, $\displaystyle\lim_{x\to+\infty}f(x)$ exists and is finite. If necessary, it can be computed using partial fractions.
