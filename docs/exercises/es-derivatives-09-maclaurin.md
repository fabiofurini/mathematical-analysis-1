---
title: "Maclaurin expansions"
---

# Maclaurin expansions

<div class="info-capitolo" markdown>

**Exercises · Derivatives** · with worked solutions · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-4-derivatives.pdf)

</div>

!!! esercizio "Exercise 1"

    Using the Maclaurin expansion of the following functions $f(x)$, determine the equation of the tangent line to the graph at the point $(0,f(0))$ and the local position of the graph with respect to this tangent

    $$
    f(x)= 1+\sin(\sqrt{1+x^3}-1)
    $$

    $$
    f(x)=2\sqrt{1+\sinh x}-x
    $$

    $$
    f(x)=8\sqrt{1+\sin x}+x^2
    $$

    $$
    f(x)=8\sqrt{1+\log(1+ x)}+3x^2
    $$

    $$
    f(x)=8\sqrt{1-2x-x^2}-8+8x
    $$

??? soluzione "Solution"

    From

    $$
    \sqrt{1+x^3}-1=\frac{1}{2}x^{3}+o(x^{3})
    $$

    e

    $$
    \sin y=y-\frac{1}{6}y^{3}+o(y^{3})
    $$

    we have

    $$
    f(x)= 1+\sin(\sqrt{1+x^3}-1)=1+\frac{1}{2}x^{3}+o(x^{3}).
    $$

    The equation of the tangent line is

    $$
    y=1.
    $$

    The term $\ds\frac{1}{2}x^{3}+o(x^{3})$ says that there exists a neighborhood $(-\delta,\delta)$, $\delta>0$, of $x=0$ where the graph crosses the tangent line from below for $-\delta<x<0$ to above for $0<x<\delta$. The point $x=0$ is an inflection point with horizontal tangent.

??? soluzione "Solution"

    From

    $$
    \sinh x=x+o(x^{2})
    $$

    e

    $$
    2\sqrt{1+y}=2+y-\frac{1}{4}y^{2}+o(y^{2})
    $$

    we have

    $$
    f(x)=2\sqrt{1+\sinh x}-x=2+x-\frac{1}{4}x^{2}+o(x^{2})-x=2-\frac{1}{4}x^{2}+o(x^{2}).
    $$

    The equation of the tangent line is

    $$
    y=2.
    $$

    The term $\ds-\frac{1}{4}x^{2}+o(x^{2})$ says that there exists a neighborhood $(-\delta,\delta)$, $\delta>0$, of $x=0$ where the graph lies below the tangent line for $-\delta<x<\delta$, $x\neq0$. In particular, since the tangent line is horizontal, the point $x=0$ is a local maximum point.

??? soluzione "Solution"

    From

    $$
    \sin x=x-\frac{1}{6}x^{3}+o(x^{3})
    $$

    e

    $$
    8\sqrt{1+y}=8+4y-y^{2}+\frac{1}{2}y^{3}+o(y^{3})
    $$

    we have

    $$
    \begin{array}{l}
    \ds f(x)=8\sqrt{1+\sin x}+x^2=\\
    \\
    \ds8+4x-\frac{2}{3}x^{3}-\left(x-\frac{1}{6}x^{3}\right)^{2}
    +\frac{1}{2}\left(x-\frac{1}{6}x^{3}\right)^{3}+o(x^{3})+x^{2}=\\
    \\
    \ds8+4x-\frac{2}{3}x^{3}-x^{2}+\frac{1}{2}x^{3}+x^{2}+o(x^{3})=8+4x-\frac{1}{6}x^{3}+o(x^{3}).
    \end{array}
    $$

    The equation of the tangent line is

    $$
    y=8+4x.
    $$

    The term $\ds-\frac{1}{6}x^{3}+o(x^{3})$ says that there exists a neighborhood $(-\delta,\delta)$, $\delta>0$, of $x=0$ where the graph crosses the tangent line from above for $-\delta<x<0$ to below for $0<x<\delta$ . The point $x=0$ is an inflection point.

??? soluzione "Solution"

    From

    $$
    \log(1+x)=x-\frac{1}{2}x^{2}+\frac{1}{3}x^{3}+o(x^{3})
    $$

    e

    $$
    8\sqrt{1+y}=8+4y-y^{2}+\frac{1}{2}y^{3}+o(y^{3})
    $$

    we have

    $$
    \begin{array}{l}
    \ds f(x)=8\sqrt{1+\log(1+ x)}+3x^2=\\
    \\
    \ds8+4\left(x-\frac{1}{2}x^{2}+\frac{1}{3}x^{3}\right)-\left(x-\frac{1}{2}x^{2}+
    \frac{1}{3}x^{3}\right)^{2}+\\
    \\
    \ds\frac{1}{2}\left(x-\frac{1}{2}x^{2}+\frac{1}{3}x^{3}\right)^{3}+o(x^{3})+3x^{2}=\\
    \\
    \ds8+4x-2x^{2}+\frac{4}{3}x^{3}-x^{2}+x^{3}+\frac{1}{2}x^{3}+3x^{2}+o(x^{3})=\\
    \\
    \ds8+4x+\frac{17}{6}x^{3}+o(x^{3}).
    \end{array}
    $$

    The equation of the tangent line is

    $$
    y=8+4x.
    $$

    The term $\ds\frac{17}{6}x^{3}+o(x^{3})$ says that there exists a neighborhood $(-\delta,\delta)$, $\delta>0$, of $x=0$ where the graph crosses the tangent line from below for $-\delta<x<0$ to above for $0<x<\delta$. The point $x=0$ is an inflection point.

!!! esercizio "Exercise 2"

    Write the Maclaurin expansion of order 3 of the function

    $$
    f(x)=e^x-e^{-x^2}-\sin x
    $$

    and determine its order of infinitesimal. Based only on the expansion obtained, say whether the function has at $x=0$ a relative minimum point, a relative maximum point, an inflection point, or none of these. Justify your answer.

??? soluzione "Solution"

    Since we have to expand $f(x)$ to the third order, we can stop at the second order in the expansion of $e^{-x^2}$. That is:

    $$
    e^x=1+x+\frac{1}{2}x^2+\frac{1}{6}x^3+o(x^3)
    $$

    $$
    e^{-x^2}=1-x^2+o(x^3)
    $$

    $$
    \sin x=x-\frac{1}{6}x^3+o(x^3)
    $$

    We then have

    \begin{align*}
    f(x)&=1+x+\frac{1}{2}x^2+\frac{1}{6}x^3+o(x^3)-(1-x^2+o(x^3))-\left(x-\frac{1}{6}x^3+o(x^3)\right)\\
    &=\frac{3}{2}x^2+\frac{1}{3}x^3+o(x^3)
    \end{align*}

    In particular, we have

    $$
    f(x) \sim \frac{3}{2}x^2 \quad \text{as } x\to 0
    $$

    from which we can immediately state that the order of infinitesimal of $f(x)$ is $\alpha=2$ and the principal part is $\frac{3}{2}x^2$. The point $x=0$ is a local minimum point; indeed, the term $\frac{3}{2}x^2+o(x^{2})$ says that there exists a neighborhood $(-\delta,\delta)$, $\delta>0$, of $x=0$ where the graph lies entirely above the horizontal tangent line $y=0$.

!!! esercizio "Exercise 3"

    Determine the Taylor polynomial of order 3, centered at the point $x_0=\frac{\pi}{3}$, of the function $f(x)=\cos x$.

??? soluzione "Solution"

    In general, the Taylor polynomial of order $n$, centered at $x_0$, of a function $f(x)$ is

    $$
    T_{n,f,x_0}(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
    $$

    with $f^{(0)}(x_0)=f(x_0)$. In this case, we need the first, second and third derivatives, evaluated at $x_0=\frac{\pi}{3}$. We have

    $$
    f'\left(\frac{\pi}{3}\right)=-\sin\left(\frac{\pi}{3}\right)=-\frac{\sqrt 3}{2}
    $$

    $$
    f''\left(\frac{\pi}{3}\right)=-\cos\left(\frac{\pi}{3}\right)=-\frac{1}{2}
    $$

    $$
    f'''\left(\frac{\pi}{3}\right)=\sin\left(\frac{\pi}{3}\right)=\frac{\sqrt 3}{2}
    $$

    and the Taylor polynomial of order 3, centered at the point $x_0=\frac{\pi}{3}$, of the function $f(x)=\cos x$ is

    $$
    T_{3,f,\frac{\pi}{3}}(x)=\frac{1}{2}-\frac{\sqrt 3}{2}\left(x-\frac{\pi}{3}\right)-\frac{1}{4}\left(x-\frac{\pi}{3}\right)^2+\frac{\sqrt 3}{12}\left(x-\frac{\pi}{3}\right)^3
    $$
