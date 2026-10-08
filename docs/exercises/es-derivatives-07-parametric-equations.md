---
title: "Parametric equations"
---

# Parametric equations

<div class="info-capitolo" markdown>

**Exercises · Derivatives** · with worked solutions · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-4-derivatives.pdf)

</div>

!!! esercizio "Exercise 1"

    Determine the number of solutions of the equation $f(x)=k$ as the real parameter $k$ varies, in the following cases:

    $$
    f(x)=\frac{2x^{2}-1}{x}
    $$

    $$
    f(x)=x^{2}e^{-x^{2}}
    $$

    $$
    f(x)=\frac{e^{x}-1}{\log(e^{x}-1)}
    $$

    $$
    f(x)=\log^{2}x+2\log x
    $$

    $$
    f(x)=e-x\log^{2}x
    $$

    $$
    f(x)=\frac{x}{x+1}-\arctan x
    $$

??? soluzione "Solution"

    All the functions are (infinitely) differentiable on their domains. To answer, it is enough to determine the limits at the endpoints of the domain, the monotonicity behavior and the extremum points (if any).

??? soluzione "Solution"

    The function $f(x)=\frac{2x^{2}-1}{x}=2x-\frac{1}{x}$ is defined for $x\neq0$, is odd, with

    $$
    \lim_{x\to\pm\infty}f(x)=\pm\infty,\ \ \lim_{x\to0^{\pm}}f(x)=\mp\infty
    $$

    (the graph is a hyperbola with asymptotes $x=0$, $y=2x$).

    Moreover, we have

    $$
    f'(x)=2+\frac{1}{x^{2}},
    $$

    which is positive for every $x\neq0$. The function is strictly increasing both on $(-\infty,0)$ and on $(0,+\infty)$, and on both intervals it takes all real values between the limits $-\infty$ and $+\infty$.

    In conclusion, for every value of $k\in\R$ the equation $f(x)=k$ has two solutions: one positive, the other negative. In particular, the equation $f(x)=0$ has the two solutions $x=\pm\sqrt{1/2}$.

??? soluzione "Solution"

    The function $f(x)=x^{2}e^{-x^{2}}$  is defined for $x\in\R$, is even, with

    $$
    \lim_{x\to\pm\infty}f(x)=0.
    $$

    The function takes only non-negative values; the point $x=0$, where $f(0)=0$, is the (unique) absolute minimum point.

    Moreover, we have

    $$
    f'(x)=2x(1-x^{2})e^{-x^{2}},
    $$

    from which, for $x>0$, $f$ is strictly increasing on $(0,1)$ and strictly decreasing on $(1,+\infty)$. The point $x=1$ is an absolute maximum point with value $f(1)=1/e$. By even symmetry we obtain the behavior for $x<0$.

    In conclusion, for every value $k<0$ or $k>1/e$, the equation $f(x)=k$ has no solutions: the set of values of $f$ is the interval $[0,1/e]$.

    For $k=0$, the equation $f(x)=0$ has the unique solution $x=0$.

    For $0<k<1/e$, the equation $f(x)=k$ has four solutions: one in the interval $(0,1)$, one in the interval $(1,+\infty)$, and the other two opposite to these by even symmetry.

    For $k=1/e$, the equation $f(x)=1/e$ has the two solutions $x=\pm1$.

??? soluzione "Solution"

    The function $f(x)=\frac{e^{x}-1}{\log(e^{x}-1)}$ is defined for $e^{x}-1>0$, $e^{x}-1\neq1$, hence for

    $$
    x\in(0,\log2)\cup(\log2,+\infty).
    $$

    We have

    $$
    \begin{array}{l}\ds\lim_{x\to0}f(x)=\lim_{y\to0}\frac{y}{\log y}=0,\ \lim_{x\to\log2^{\pm}}f(x)=\lim_{y\to1^{\pm}}\frac{y}{\log y}=\pm\infty,\\
     \\
     \ds\lim_{x\to+\infty}f(x)=\lim_{y\to+\infty}\frac{y}{\log y}=+\infty.\end{array}
    $$

    Moreover, we have

    $$
    f'(x)=\frac{e^{x}\left[\log(e^{x}-1)-1\right]}{\log^{2}(e^{x}-1)},
    $$

    from which $f$ is strictly decreasing on $(0,\log2)$, where it takes all values between the limits $-\infty$ and $0$; strictly decreasing on $(\log2,\log(e+1))$, where it takes all values $k>e$; the point $x=\log(e+1)$ is a relative minimum point with value $f(\log(1+e))=e$; $f$ is again strictly increasing on the interval $(\log(1+e),+\infty)$, where it again takes all values $k>e$.

    In conclusion, for every value $k<0$ the equation $f(x)=k$ has one solution, which lies in the interval $(0,\log2)$.

    For $0\leq k<e$, the equation $f(x)=k$ has no solutions.

    For $k=e$, the equation $f(x)=e$ has the unique solution $x=\log(e+1)$.

    For $k>e$, the equation $f(x)=k$ has two solutions, one in $(\log2,\log(1+e))$, the other in $(\log(e+1),+\infty)$.

??? soluzione "Solution"

    The function $f(x)=\log^{2}x+2\log x$ is defined for $x>0$. We have

    $$
    \lim_{x\to0}f(x)=\lim_{y\to-\infty}y^{2}+2y=+\infty,\ \lim_{x\to+\infty}f(x)=\lim_{y\to+\infty}y^{2}+2y=+\infty.
    $$

    Moreover, we have

    $$
    f'(x)=\frac{2(\log x+1)}{x},
    $$

    from which $f$ is strictly decreasing on $(0,1/e)$, where it takes all values $k>-1$; the point $x=1/e$ is the absolute minimum point with value $f(1/e)=-1$; $f$ is strictly increasing on the interval $(1/e,+\infty)$, where it again takes all values $k>-1$.

    In conclusion, for every value $k<-1$ the equation $f(x)=k$ has no solutions.

    For $k=-1$, the equation $f(x)=-1$ has the unique solution $x=1/e$.

    For $k>-1$, the equation $f(x)=k$ has two solutions, one in $(0,1/e)$, the other in $(1/e,+\infty)$. In particular, the equation $f(x)=0$ has the two solutions $x=1/e^{2}$, $x=1$.

??? soluzione "Solution"

    The function $f(x)=e-x\log^{2}x$ is defined for $x>0$. We have

    $$
    \lim_{x\to0}f(x)=e,\ \lim_{x\to+\infty}f(x)=-\infty.
    $$

    Moreover, we have

    $$
    f'(x)=-\log x(\log x+2),
    $$

    from which $f$ is strictly decreasing on $(0,1/e^{2})$, where it takes all values $k\in \left(e-\frac{4}{e^{2}}, e\right)$; the point $x=1/e^{2}$ is a relative minimum point with value $f(1/e^{2})=e-\frac{4}{e^{2}}$; $f$ is strictly increasing on the interval $(1/e^{2},1)$, where it again takes all values $k\in \left(e-\frac{4}{e^{2}}, e\right)$; the point $x=1$ is the absolute maximum point with value $f(1)=e$; $f$ is again strictly decreasing on $(1,+\infty)$, where it takes all values $k\in(-\infty,e)$.

    In conclusion, for every value $k<e-\frac{4}{e^{2}}$ the equation $f(x)=k$ has only one solution, which lies in the interval $(1,+\infty)$. In particular, the equation $f(x)=0$ has the unique solution $x=e$.

    For $k=e-\frac{4}{e^{2}}$, the equation $f(x)=e-\frac{4}{e^{2}}$ has two solutions: one is $x=1/e^{2}$, the other lies in the interval $(1,e)$.

    For $e-\frac{4}{e^{2}}<k<e$, the equation $f(x)=k$ has three solutions, one in $(0,1/e^{2})$, one in $(1/e^{2},1)$, one in $(1,e)$.

    For $k=e$, the equation $f(x)=e$ has the unique solution $x=1$.

    For $k>e$, the equation $f(x)=k$ has no solutions.

??? soluzione "Solution"

    The function $f(x)=\frac{x}{x+1}-\arctan x$ is defined for $x\neq-1$. We have

    $$
    \lim_{x\to-\infty}f(x)=1+\frac{\pi}{2},\ \lim_{x\to-1^{\pm}}f(x)=\mp\infty,\ \lim_{x\to+\infty}f(x)=1-\frac{\pi}{2}.
    $$

    Moreover, we have

    $$
    f'(x)=-\frac{2x}{(x+1)^{2}(x^{2}+1)}
    $$

    from which $f$ is strictly increasing on $(-\infty,-1)$, where it takes all values $k\in \left(1+\frac{\pi}{2}, +\infty\right)$; $f$ is also strictly increasing on the interval $(-1,0)$, where it takes all values $k\in(-\infty, 0)$; the point $x=0$ is a relative maximum point with value $f(0)=0$; $f$ is strictly decreasing on $(0,+\infty)$, where it takes all values $k\in\left(1-\frac{\pi}{2},0\right)$.

    In conclusion, for every value $k\leq1-\frac{\pi}{2}$ the equation $f(x)=k$ has only one solution, which lies in the interval $(-1,0)$.

    For $1-\frac{\pi}{2}<k<0$, the equation $f(x)=k$ has two solutions: one is in $(-1,0)$, the other lies in the interval $(0,+\infty)$.

    For $k=0$, the equation $f(x)=0$ has the unique solution $x=0$.

    For $0<k\leq1+\frac{\pi}{2}$, the equation $f(x)=k$ has no solutions.

    For $k>1+\frac{\pi}{2}$, the equation $f(x)=k$ has a unique solution, which lies in the interval $(-\infty,-1)$.
