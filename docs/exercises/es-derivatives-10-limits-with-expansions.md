---
title: "Limits via asymptotic expansions"
---

# Limits via asymptotic expansions

<div class="info-capitolo" markdown>

**Exercises · Derivatives** · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-derivatives-10-limits-with-expansions.pdf)

</div>

!!! esercizio "Exercise 1"

    Compute the following limits:

    $$
    \lim_{x\to0}\frac{6(x-\sin x)-x^{3}}{\sin x^{5}}
    $$

    $$
    \lim_{x\to0}\frac{\sinh^{2}x+2(1-\cosh x)}{(1-\cos x)^{2}}
    $$

    $$
    \lim_{x\to0}\frac{4(1-\cos x)^{2}-x^{2}\sin^{2}x}{\sin^{2}x\log(1+x^{4})}
    $$

    $$
    \lim_{x\to0}\frac{1+x\sin x -e^{x^2}}{x\sin(x^3)}
    $$

    $$
    \lim_{x\to0}\frac{x^{2}\cos x-\sinh x^{2}+\frac{1}{2}x^{4}}{x^{2}-\arctan x^{2}}
    $$

    $$
    \lim_{x\to0}\frac{x\sinh x-2\cosh x +2}{(e^{\sin x}-1)^{2}}
    $$

    $$
    \lim_{x\to0}\frac{8\sqrt{1+\sin x}-8-4x+x^{2}}{(2e^{x}-2-2x-x^{2})\cosh^{2}x}
    $$

    $$
    \lim_{x\to0}\frac{2\log(1+\sin x)-2x+x^{2}}{(2e^{x}-2-2x-x^{2})\cos^{2}x}
    $$

    $$
    \lim_{x\to+\infty}x\left(\sqrt{4+\frac{5}{x}}-2\cos \frac{1}{x}\right)
    $$

??? soluzione "Solution"

    We determine the principal part of the Maclaurin expansion of the numerator:

    $$
    6(x-\sin x)-x^{3}=6\left(\frac{x^{3}}{6}-\frac{x^{5}}{120}+o(x^{5})\right)-x^{3}=-\frac{x^{5}}{20}+o(x^{5}).
    $$

    The denominator is equivalent to $x^{5}$:

    $$
    \sin x^{5}\sim x^{5}.
    $$

    Hence the given limit is

    $$
    \lim_{x\to0}\frac{6(x-\sin x)-x^{3}}{\sin x^{5}}=\lim_{x\to0}\frac{-\frac{x^{5}}{20}}{ x^{5}}=-\frac{1}{20}
    $$

??? soluzione "Solution"

    We determine the principal part of the Maclaurin expansion of the numerator:

    $$
    \sinh^{2}x+2(1-\cosh x)=\left(x+\frac{x^{3}}{6}+o(x^{3})\right)^{2}-x^{2}-\frac{x^{4}}{12}+o(x^{4})=\frac{x^{4}}{4}+o(x^{4}).
    $$

    The denominator is equivalent to $x^{4}/4$:

    $$
    (1-\cos x)^{2}\sim\frac{x^{4}}{4}.
    $$

    Hence the given limit is

    $$
    \lim_{x\to0}\frac{\sinh^{2}x+2(1-\cosh x)}{(1-\cos x)^{2}}=\lim_{x\to0}\frac{\frac{x^{4}}{4}}{\frac{x^{4}}{4}}=1.
    $$

??? soluzione "Solution"

    We determine the principal part of the Maclaurin expansion of the numerator:

    $$
    \begin{array}{l}
    \ds4(1-\cos x)^{2}-x^{2}\sin^{2}x=4\left(\frac{x^{2}}{2}-\frac{x^{4}}{24}+o(x^{4})\right)^{2}-x^{2}\left(x-\frac{x^{3}}{6}+o(x^{3})\right)^{2}\\
    \\
    \ds=\frac{x^{6}}{6}+o(x^{6}).
    \end{array}
    $$

    The denominator is equivalent to $x^{6}$:

    $$
    \sin^{2}x\log(1+x^{4})\sim x^{2}\cdot x^{4}=x^{6}.
    $$

    Hence the given limit is

    $$
    \lim_{x\to0}\frac{4(1-\cos x)^{2}-x^{2}\sin^{2}x}{\sin^{2}x\log(1+x^{4})}=\lim_{x\to0}\frac{\frac{x^{6}}{6}}{x^{6}}=\frac{1}{6}.
    $$

??? soluzione "Solution"

    We determine the principal part of the Maclaurin expansion of the numerator:

    $$
    \begin{array}{l}
    \ds1+x\sin x -e^{x^2}=1+x\left(x-\frac{x^{3}}{6}+o(x^{3})\right)-\left(1+x^2+\frac{x^4}{2}+o(x^4)\right)\\
    \\
    \ds=-\frac{2}{3}x^4+o(x^{4}).
    \end{array}
    $$

    The denominator is equivalent to $x^{4}$:

    $$
    x\sin(x^3)\sim x\cdot x^{3}=x^{4}.
    $$

    Hence the given limit is

    $$
    \lim_{x\to0}\frac{1+x\sin x -e^{x^2}}{x\sin(x^3)}=\lim_{x\to0}\frac{-\frac{2}{3}x^4}{x^{4}}=-\frac{2}{3}.
    $$

??? soluzione "Solution"

    We determine the principal part of the Maclaurin expansion of the numerator:

    $$
    \begin{array}{l}
    \ds x^{2}\cos x-\sinh x^{2}+\frac{1}{2}x^{4}\\
    \\
    \ds=x^{2}\left(1-\frac{x^{2}}{2}+\frac{x^{4}}{24}+o(x^{4})\right)-
    \left(x^{2}+\frac{x^{6}}{6}+o(x^{6})\right)+\frac{1}{2}x^{4}=-\frac{x^{6}}{8}+o(x^{6}).
    \end{array}
    $$

    For the denominator, from the expansion $\arctan x=x-\frac{x^{3}}{3}+o(x^{3})$, it follows that

    $$
    x^{2}-\arctan x^{2}=\frac{x^{6}}{3}+o(x^{6}).
    $$

    Hence the given limit is:

    $$
    \lim_{x\to0}\frac{x^{2}\cos x-\sinh x^{2}+\frac{1}{2}x^{4}}{x^{2}-\arctan x^{2}}=
    \lim_{x\to0}\frac{-\frac{x^{6}}{8}}{\frac{x^{6}}{3}}=-\frac{3}{8}.
    $$

??? soluzione "Solution"

    We determine the principal part of the Maclaurin expansion of the numerator:

    $$
    \begin{array}{l}
    \ds x\sinh x-2\cosh x +2\\
    \\
    \ds=x\left(x+\frac{x^{3}}{6}+o(x^{3})\right)-2\left(1+\frac{x^{2}}{2}+
    \frac{x^{4}}{24}+o(x^{4})\right)+2=\frac{x^{4}}{12}+o(x^{4}).
    \end{array}
    $$

    The denominator is equivalent to $x^{2}$:

    $$
    (e^{\sin x}-1)^{2}\sim (\sin x)^{2}\sim x^{2}.
    $$

    Hence the given limit is

    $$
    \lim_{x\to0}\frac{x\sinh x-2\cosh x +2}{(e^{\sin x}-1)^{2}}=\lim_{x\to0}\frac{\frac{x^{4}}{12}}{x^{2}}
    =\lim_{x\to0}\frac{x^{2}}{12}=0.
    $$

??? soluzione "Solution"

    We expand to order $3$ the composite function $8\sqrt{1+\sin x}$ with initial point $x=0$. From $\sin x\sim x-x^{3}/6$ and $8\sqrt{1+y}\sim 8+4y-y^{2}+y^{3}/2$, by composition, we have

    $$
    \begin{array}{l}
    \ds8\sqrt{1+\sin x}=8+4\left(x-\frac{x^{3}}{6}\right)-\left(x-\frac{x^{3}}{6}\right)^{2}
    +\frac{1}{2}\left(x-\frac{x^{3}}{6}\right)^{3}+o(x^{3})\\
    \\
    \ds=8+4x-x^{2}-\frac{1}{6}x^{3}+o(x^{3}).
    \end{array}
    $$

    It follows that the numerator, in the given limit, is equivalent to $-x^{3}/6$.

    In the denominator we have the factor $\cosh^{2}x$ which converges to $1$, while

    $$
    2e^{x}-2-2x-x^{2}\sim x^{3}/3.
    $$

    The given limit is

    $$
    \lim_{x\to0}\frac{8\sqrt{1+\sin x}-8-4x+x^{2}}{(2e^{x}-2-2x-x^{2})\cosh^{2}x}=\lim_{x\to0}\frac{-\frac{x^{3}}{6}}{\frac{x^{3}}{3}}=
    -\frac{1}{2}.
    $$

??? soluzione "Solution"

    We expand to order $3$ the composite function $2\log(1+\sin x)$ with initial point $x=0$. From $\sin x\sim x-x^{3}/6$ and $2\log(1+y)\sim 2y-y^{2}+2y^{3}/3$, by composition, we have

    $$
    \begin{array}{l}
    \ds2\log(1+\sin x)=2\left(x-\frac{x^{3}}{6}\right)-\left(x-\frac{x^{3}}{6}\right)^{2}
    +\frac{2}{3}\left(x-\frac{x^{3}}{6}\right)^{3}+o(x^{3})\\
    \\
    \ds=2x-x^{2}+\frac{1}{3}x^{3}+o(x^{3}).
    \end{array}
    $$

    It follows that the numerator, in the given limit, is equivalent to $x^{3}/3$.

    In the denominator we have the factor $\cos^{2}x$ which converges to $1$, while

    $$
    2e^{x}-2-2x-x^{2}\sim x^{3}/3.
    $$

    The given limit is

    $$
    \lim_{x\to0}\frac{2\log(1+\sin x)-2x+x^{2}}{(2e^{x}-2-2x-x^{2})\cos^{2}x}=\lim_{x\to0}\frac{\frac{1}{3}x^{3}}{\frac{1}{3}x^{3}}=1.
    $$

??? soluzione "Solution"

    $$
    \lim_{x\to+\infty}x\left(\sqrt{4+\frac{5}{x}}-2\cos \frac{1}{x}\right)=\lim_{x\to+\infty}2x\left(\sqrt{1+\frac{5}{4x}}-\cos \frac{1}{x}\right)
    $$

    From $\cos y=1+o(y)$ and $\sqrt{1+y}= 1+\frac{1}{2}y+o(y)$, by composition, we have

    \begin{align*}
    \lim_{x\to+\infty}2x\left(\sqrt{1+\frac{5}{4x}}-\cos \frac{1}{x}\right)&=\lim_{x\to+\infty}2x\left(1+\frac{1}{2}\cdot\frac{5}{4x}+o\left(\frac{1}{x}\right)-1+o\left(\frac{1}{x}\right)\right) \\
    &=\lim_{x\to+\infty}2x\left(\frac{5}{8x}+o\left(\frac{1}{x}\right)\right) \\
    &=\frac{5}{4}+o(1) \\
    &=\frac{5}{4}
    \end{align*}
