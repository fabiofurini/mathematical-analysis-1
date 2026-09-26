---
title: "Curve sketching"
---

# Curve sketching

<div class="info-capitolo" markdown>

**Exercises · Derivatives** · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-derivatives-08-curve-sketching.pdf)

</div>

!!! esercizio "Exercise 1"

    For each of the following functions of the real variable $x$, determine:

    1. the domain and the limits at its endpoints, pointing out any continuous extensions;

    2. any local extrema and the intervals of monotonicity;

    3. any inflection points and the intervals of convexity;

    4. any asymptotes;

    5. a qualitative graph that takes into account all the previous elements.

!!! esercizio "Exercise 2"

    $$
    f(x)=x-\frac{1}{x}
    $$

??? soluzione "Solution"

    The function $f(x)=x-\frac{1}{x}$ is defined for $x\neq0$, hence its natural domain $D$ is given by

    $$
    D=(-\infty,0)\cup(0,+\infty).
    $$

    We have

    $$
    \lim_{x\to-\infty}f(x)=-\infty,\ \lim_{x\to0^{-}}f(x)=+\infty,\ \lim_{x\to0^{+}}f(x)=-\infty,\ \lim_{x\to+\infty}f(x)=+\infty,
    $$

    in particular the line $x=0$ (the $y$-axis) is a vertical asymptote. From

    $$
    \lim_{x\to\pm\infty}f(x)-x=\lim_{x\to\pm\infty}-\frac{1}{x}=0
    $$

    it then follows that the line $y=x$ is an oblique asymptote as $x\to\pm\infty$. The presence of these asymptotes can also be obtained from analytic geometry: the curve with equation $y=x-\frac{1}{x}$, in implicit form $x^{2}-xy-1=0$, is a hyperbola whose asymptotes are precisely the lines $x=0$ and $y=x$ (the asymptotes of a hyperbola are obtained by setting equal to $0$ the homogeneous part of degree $2$ of the equation).

    The function $f(x)$ is infinitely differentiable on its domain $D$. The first derivative is

    $$
    f'(x)=1+\frac{1}{x^{2}}
    $$

    and $f'(x)>0$ for every $x\in D$. Hence the function $f(x)$ is strictly increasing on the interval $(-\infty,0)$ and also strictly increasing on the interval $(0,+\infty)$.

    The second derivative is

    $$
    f''(x)=-\frac{2}{x^{3}}
    $$

    and it has the opposite sign of $x$. Hence the function $f(x)$ is strictly convex on the interval $(-\infty,0)$ and strictly concave on the interval $(0,+\infty)$.

    The position of the graph with respect to the oblique asymptote is easily deduced from $f(x)-x=-1/x$: we have $f(x)>x$ for $x<0$ while $f(x)<x$ for $x>0$.

    Now collect all the previous elements in a qualitative graph.

!!! esercizio "Exercise 3"

    $$
    f(x)=\frac{\sqrt{x}}{\sqrt{x}-1}
    $$

??? soluzione "Solution"

    The function $f(x)=\frac{\sqrt{x}}{\sqrt{x}-1}$ is defined for $x\geq0$, $x\neq1$, hence its natural domain $D$ is given by

    $$
    D=[0,1)\cup(1,+\infty).
    $$

    We have

    $$
    \lim_{x\to0}f(x)=f(0)=0,\ \lim_{x\to1^{-}}f(x)=-\infty,\ \lim_{x\to1^{+}}f(x)=+\infty,\ \lim_{x\to+\infty}f(x)=+1,
    $$

    in particular the line $x=1$ is a vertical asymptote and the line $y=1$ is a horizontal asymptote as $x\to+\infty$.

    The function $f(x)$ is continuous on $D$ and infinitely differentiable on $D\setminus\{0\}$. At the point $x=0$ the difference quotient has limit

    $$
    \lim_{x\to0}\frac{f(x)-f(0)}{x}=\lim_{x\to0}\frac{\sqrt{x}}{x(\sqrt{x}-1)}=
    -\lim_{x\to0}\frac{\sqrt{x}}{x}=-\lim_{x\to0}\frac{1}{\sqrt{x}}=-\infty
    $$

    hence the function $f(x)$ is not differentiable at $x=0$ and at the point $(0,0)$ the graph has the $y$-axis as a vertical tangent.

    For $x\in D\setminus\{0\}$ the first derivative is

    $$
    f'(x)=\frac{-1}{2\sqrt{x}(\sqrt{x}-1)^{2}}
    $$

    and $f'(x)<0$ for every $x$. Hence the function $f(x)$ is strictly decreasing on the interval $[0,1)$ and also strictly decreasing on the interval $(1,+\infty)$.

    The second derivative is

    $$
    f''(x)=\frac{1}{4}\frac{3\sqrt{x}-1}{x\sqrt{x}(\sqrt{x}-1)^{3}}
    $$

    which vanishes at $x=1/9$, is positive for $0<x<1/9$, negative for $1/9<x<1$, and positive again for $x>1$. Hence the function $f(x)$ is strictly convex on the interval $(0,1/9)$, strictly concave on the interval $(1/9,1)$, and strictly convex again on the interval $(1,+\infty)$. At $x=1/9$ there is an inflection point: at the point $(1/9,-1/2)$ the graph crosses from above to below the tangent line.

    Now collect all the previous elements in a qualitative graph.

!!! esercizio "Exercise 4"

    $$
    f(x)=\sqrt{x^{2}-1}-\sqrt{x^{2}+1}
    $$

??? soluzione "Solution"

    The function $f(x)=\sqrt{x^{2}-1}-\sqrt{x^{2}+1}$ is defined for $x\leq-1$, $x\geq1$, hence its natural domain $D$ is given by

    $$
    D=(-\infty,-1]\cup[1,+\infty).
    $$

    The function under consideration is even: the following study could be restricted to the interval $[1,+\infty)$. We have

    $$
    \lim_{x\to\pm\infty}f(x)=\lim_{x\to\pm\infty}\frac{-2}{\sqrt{x^{2}-1}+\sqrt{x^{2}+1}}=0
    $$

    in particular the line $y=0$ (the $x$-axis) is a horizontal asymptote as $x\to\pm\infty$. We then have

    $$
    \lim_{x\to-1}f(x)=f(-1)=-\sqrt{2},\ \lim_{x\to1}f(x)=f(1)=-\sqrt{2}.
    $$

    The function $f(x)$ is continuous on $D$ and infinitely differentiable on $D\setminus\{-1,1\}$.

    For $x\in D\setminus\{-1,1\}$ the first derivative is

    $$
    f'(x)=\frac{x}{\sqrt{x^{2}-1}}-\frac{x}{\sqrt{x^{2}+1}}=\frac{x(\sqrt{x^{2}+1}-\sqrt{x^{2}-1})}{\sqrt{x^{4}-1}}
    $$

    and it has the same sign as $x$. Hence the function $f(x)$ is strictly decreasing on the interval $(-\infty,-1)$ and strictly increasing on the interval $(1,+\infty)$.

    At the points $x=\pm1$ we have

    $$
    \lim_{x\to\pm1}f'(x)=\pm\infty
    $$

    hence the function $f(x)$ is not differentiable at $x=\pm1$ and at the points $(\pm1,-\sqrt{2})$ the graph has a vertical tangent.

    The second derivative is

    $$
    f''(x)=-\frac{1}{(x^{2}-1)\sqrt{x^{2}-1}}-\frac{1}{(x^{2}+1)\sqrt{x^{2}+1}}
    $$

    and it is negative for every $x$. Hence the function $f(x)$ is strictly concave on the interval $(-\infty,-1)$ and on the interval $(1,+\infty)$.

    Now collect all the previous elements in a qualitative graph, respecting in particular the symmetry of the graph with respect to the $y$-axis (even symmetry).

!!! esercizio "Exercise 5"

    $$
    f(x)=\frac{\sqrt{2x-1}}{\log(2x-1)}
    $$

??? soluzione "Solution"

    The function $f(x)=\frac{\sqrt{2x-1}}{\log(2x-1)}$ is defined for $2x-1>0$, $2x-1\neq1$, hence its natural domain $D$ is given by

    $$
    D=(1/2,1)\cup(1,+\infty).
    $$

    We have

    $$
    \lim_{x\to1/2}f(x)=0,\ \lim_{x\to1^{\pm}}f(x)=\pm\infty,\ \lim_{x\to+\infty}f(x)=\lim_{y\to+\infty}\frac{y^{1/2}}{\log y}=+\infty
    $$

    in particular the line $x=1$ is a vertical asymptote. The order of infinity of $f(x)$ as $x\to+\infty$ is lower than that of $\sqrt{x}$, which rules out an oblique asymptote (the order of infinity of functions with an oblique asymptote is that of $x$).

    The function $f(x)$ is continuous on $D$; the limit $\lim_{x\to1/2}f(x)=0$ allows us to extend the function continuously also to $x=1/2$ by setting $f(1/2)=0$.

    The function is infinitely differentiable on $D$. The first derivative is

    $$
    f'(x)=\frac{\log(2x-1)-2}{\sqrt{2x-1}\log^{2}(2x-1)}.
    $$

    At the point $x=1/2$, the difference quotient of the continuous extension has limit

    $$
    \begin{array}{l}\ds\lim_{x\to1/2}\frac{f(x)-f(1/2)}{x-1/2}=\lim_{x\to1/2}\frac{\sqrt{2x-1}}{(x-1/2)\log(2x-1)}=\\
    \\
    \ds\sqrt{2}\lim_{x\to1/2}\frac{1}{\sqrt{x-1/2}\log(2x-1)}=\sqrt{2}\lim_{y\to0}\frac{1}{y^{1/2}\log y}=-\infty.\end{array}
    $$

    The continuous extension of $f$ is not differentiable at $x=1/2$. At the point $(1/2,0)$ its graph has a vertical tangent.

    Going back to $f'(x)$ at the points of $D$, we have $f'(x)>0$ for $x>(e^{2}+1)/2$, $f'(x)<0$ for $x<(e^{2}+1)/2$, $f'(x)=0$ for $x=(e^{2}+1)/2$. Hence the function $f(x)$ is strictly decreasing on the interval $(1/2,1)$ and on the interval $(1,(e^{2}+1)/2)$, and strictly increasing on the interval $((e^{2}+1)/2,+\infty)$. The point $x=(e^{2}+1)/2$ is a local minimum point with value $f((e^{2}+1)/2)=e/2$.

    The second derivative is

    $$
    f''(x)=-\frac{\log^{2}(2x-1)-8}{(2x-1)\sqrt{2x-1}\log^{3}(2x-1)}
    $$

    and it is positive for $x\in(1/2,(e^{-\sqrt{8}}+1)/2)$, negative for $x\in((e^{-\sqrt{8}}+1)/2,1)$, positive for $x\in(1,(e^{\sqrt{8}}+1)/2)$, negative for $x\in((e^{\sqrt{8}}+1)/2,+\infty)$. It follows that $f$ is strictly convex for $x\in(1/2,(e^{-\sqrt{8}}+1)/2)$, strictly concave for $x\in((e^{-\sqrt{8}}+1)/2,1)$, strictly convex for $x\in(1,(e^{\sqrt{8}}+1)/2)$, strictly concave for $x\in((e^{\sqrt{8}}+1)/2,+\infty)$. The points $x=(e^{\pm\sqrt{8}}+1)/2$ are inflection points with respective values $f((e^{\pm\sqrt{8}}+1)/2)=\pm e^{\pm\sqrt{2}}/\sqrt{8}$.

    Now collect all the previous elements in a qualitative graph.

!!! esercizio "Exercise 6"

    $$
    f(x)=xe^{\frac{1}{x}}
    $$

??? soluzione "Solution"

    The function $f(x)=xe^{\frac{1}{x}}$ is defined for $x\neq0$, hence its natural domain $D$ is given by

    $$
    D=(-\infty,0)\cup(0,+\infty).
    $$

    We have

    $$
    \begin{array}{l}\ds\lim_{x\to-\infty}f(x)=-\infty,\ \lim_{x\to0^{-}}f(x)=0,\\
    \\
    \ds\lim_{x\to0^{+}}f(x)=\lim_{y\to+\infty}\frac{e^{y}}{y}=+\infty,\ \lim_{x\to+\infty}f(x)=+\infty\end{array}
    $$

    in particular the line $x=0$ (the $y$-axis) is a vertical asymptote. As $x\to\pm\infty$, from $e^{y}=1+y+o(y)$ as $y\to0$, we obtain

    $$
    f(x)=xe^{\frac{1}{x}}=x\left(1+\frac{1}{x}+o\left(\frac{1}{x}\right)\right)=x+1+o(1)
    $$

    hence the line $y=x+1$ is an oblique asymptote as $x\to\pm\infty$.

    The function $f(x)$ is continuous on $D$; the limit $\lim_{x\to0^{-}}f(x)=0$ allows us to extend the function continuously from the left to $x=0$ by setting $f(0)=0$.

    The function is infinitely differentiable on $D$. The first derivative is

    $$
    f'(x)=\left(1-\frac{1}{x}\right)e^{\frac{1}{x}}=\frac{x-1}{x}e^{\frac{1}{x}}.
    $$

    At the point $x=0$, the left difference quotient of the extension has limit

    $$
    \lim_{x\to0^{-}}\frac{f(x)-f(0)}{x}=\lim_{x\to0^{-}}e^{\frac{1}{x}}=0
    $$

    The left continuous extension of $f$ is left-differentiable at $x=0$ with $f'_{-}(0)=0$. The negative $x$ half-axis is a tangent half-line to the graph at the point $(0,0)$.

    Going back to $f'(x)$ at the points of $D$, we have $f'(x)>0$ for $x<0$, $f'(x)<0$ for $0<x<1$, again $f'(x)>0$ for $x>1$, and $f'(x)=0$ for $x=1$. Hence the function $f(x)$ is strictly increasing on the interval $(-\infty,0)$, strictly decreasing on the interval $(0,1)$, and strictly increasing again on the interval $(1,+\infty)$. The point $x=1$ is a local minimum point with value $f(1)=e$.

    The second derivative is

    $$
    f''(x)=\frac{1}{x^{3}}e^{\frac{1}{x}}
    $$

    and it has the same sign as $x$. It follows that $f$ is strictly convex for $x\in(0,+\infty)$ and strictly concave for $x\in(-\infty,0)$.

    Now collect all the previous elements in a qualitative graph.

!!! esercizio "Exercise 7"

    $$
    f(x)=e^{\frac{1-|x|}{1+x}}
    $$

??? soluzione "Solution"

    The function $f(x)=e^{\frac{1-|x|}{1+x}}$ is defined for $x\neq-1$, hence its natural domain $D$ is given by

    $$
    D=(-\infty,-1)\cup(-1,+\infty).
    $$

    On the set $(-\infty,-1)\cup(-1,0]$ the function is constant: $f(x)=e^{\frac{1+x}{1+x}}=e$ for every $x\leq0$, $x\neq-1$. Obviously we can extend the function continuously to $x=-1$ by defining $f(-1)=e$. We then have

    $$
    \lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}e^{\frac{1-x}{1+x}}=e^{-1}=\frac{1}{e}
    $$

    in particular the line $y=1/e$ is a horizontal asymptote as $x\to+\infty$.

    The function $f(x)$ is continuous on $D$.

    The function is infinitely differentiable on $D\setminus\{0\}$. The first derivative is obviously $0$ for $x<0$, while it is

    $$
    f'(x)=-\frac{2}{(x+1)^{2}}e^{\frac{1-x}{1+x}}\ \ {\rm for}\ x>0.
    $$

    At the point $x=0$, the left derivative is $0$ while

    $$
    \lim_{x\to0^{+}}f'(x)=-2e.
    $$

    The function is not differentiable at $x=0$ since $f'_{-}(0)\neq f'_{+}(0)$. The graph has a corner point at $(0,e)$: on the left it consists of the half-line $y=e$, $x\leq0$, while the right branch has tangent half-line $y=-2ex+e$, $x\geq0$.

    We then have $f'(x)<0$ for every $x>0$, hence $f$ is strictly decreasing on the interval $(0,+\infty)$.

    Since the function is constant for $x\leq0$, we only need to compute the second derivative for $x>0$, where it is

    $$
    f''(x)=\frac{4x+8}{(x+1)^{4}}e^{\frac{1-x}{1+x}}
    $$

    and it is positive. It follows that $f$ is strictly convex for $x\in(0,+\infty)$.

    Now collect all the previous elements in a qualitative graph.

!!! esercizio "Exercise 8"

    $$
    f(x)=\left|\frac{\log x}{x}\right|
    $$

??? soluzione "Solution"

    The function $f(x)=\left|\frac{\log x}{x}\right|$ is defined for $x>0$, hence its natural domain $D$ is given by

    $$
    D=(0,+\infty)
    $$

    where its expression can be simplified to

    $$
    f(x)=\frac{|\log x|}{x},\ \ x\in D.
    $$

    Keep in mind, now and in what follows, the sign of $\log x$, which gives $|\log x|=-\log x$ for $0<x<1$ and $|\log x|=\log x$ for $x>1$. We have

    $$
    \lim_{x\to0}f(x)=\lim_{x\to0}\frac{-\log x}{x}=+\infty,\ \lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}\frac{\log x}{x}=0
    $$

    in particular the line $x=0$ (the $y$-axis) is a vertical asymptote while the line $y=0$ (the $x$-axis) is a horizontal asymptote as $x\to+\infty$.

    The function $f(x)$ is continuous on $D$, it clearly takes only non-negative values, and the point $x=1$, where $f(1)=0$, is an absolute minimum point.

    The function is infinitely differentiable on $D\setminus\{1\}$. The first derivative is

    $$
    f'(x)=-\frac{1-\log x}{x^{2}}\ \ {\rm for}\ 0<x<1;\ \ \ \ f'(x)=\frac{1-\log x}{x^{2}}\ \ {\rm for}\ x>1.
    $$

    At the point $x=1$, the left derivative is

    $$
    \lim_{x\to1^{-}}f'(x)=\lim_{x\to1^{-}}-\frac{1-\log x}{x^{2}}=-1,
    $$

    while the right derivative is

    $$
    \lim_{x\to1^{+}}f'(x)=\lim_{x\to1^{+}}\frac{1-\log x}{x^{2}}=1
    $$

    The function is not differentiable at $x=1$ since $f'_{-}(1)\neq f'_{+}(1)$. The graph has a corner point at $(1,0)$: on the left the tangent half-line has equation $y=-x+1$, on the right $y=x-1$.

??? soluzione "Solution"

    We then have $f'(x)<0$ for every $x\in(0,1)$, hence $f$ is strictly decreasing on the interval $(0,1)$. We have $f'(x)>0$ for every $x\in(1,e)$ and $f'(x)<0$ for every $x\in(e, +\infty)$, $f'(e)=0$, hence $f$ is strictly increasing on the interval $(1,e)$ and strictly decreasing on the interval $(e,+\infty)$; the point $x=e$ is a relative maximum point with value $f(e)=1/e$.

    On $D\setminus\{1\}$ the second derivative is

    $$
    f''(x)=\frac{3-2\log x}{x^{3}}\ \ {\rm for}\ 0<x<1;\ \ \ \ f''(x)=\frac{2\log x-3}{x^{3}}\ \ {\rm for}\ x>1.
    $$

    It follows that $f$ is strictly convex for $x\in(0,1)$ and on $(e^{3/2},+\infty)$; strictly concave on $(1,e^{3/2})$. The point $x=e^{3/2}$ is an inflection point with value $f(e^{3/2})=3/2e^{3/2}$.

    Now collect all the previous elements in a qualitative graph.

!!! esercizio "Exercise 9"

    $$
    f(x)=\sqrt{1-|e^{2x}-1|}
    $$

??? soluzione "Solution"

    The function $f(x)=\sqrt{1-|e^{2x}-1|}$ is defined for $|e^{2x}-1|\leq1$, hence for $-1\leq e^{2x}-1\leq1$, from which $0\leq e^{2x}\leq2$ and finally $x\leq(\log2)/2$, since $e^{2x}>0$ for every $x$. The natural domain $D$ is given by

    $$
    D=(-\infty,(\log2)/2].
    $$

    Keep in mind, now and in what follows, the sign of $e^{2x}-1$, which gives $|e^{2x}-1|=1-e^{2x}$ for $x<0$ and $|e^{2x}-1|=e^{2x}-1$ for $x>0$. In particular

    $$
    f(x)=\sqrt{e^{2x}}=e^{x}\ \ {\rm for}\ x<0;\ \ \ f(x)=\sqrt{2-e^{2x}}\ \ {\rm for}\ 0\leq x\leq(\log2)/2.
    $$

    The behavior of $e^{x}$ for $x<0$ is well known; in particular it follows that

    $$
    \lim_{x\to-\infty}f(x)=0
    $$

    (the $x$-axis is a horizontal asymptote as $x\to-\infty$) and that $f$ is strictly increasing on $(-\infty,0)$. We then have

    $$
    \lim_{x\to(\log2)/2}f(x)=f((\log2)/2)=0.
    $$

    The function $f(x)$ is continuous on $D$, it clearly takes only non-negative values, and the point $x=(\log2)/2$, where $f((\log2)/2)=0$, is an absolute minimum point.

    The function is infinitely differentiable on $D\setminus\{0,(\log2)/2\}$. The first derivative is

    $$
    f'(x)=e^{x}\ \ {\rm for}\ x<0;\ \ \ \ f'(x)=-\frac{e^{2x}}{\sqrt{2-e^{2x}}}\ \ {\rm for}\ 0<x<(\log2)/2.
    $$

    At the point $x=0$, the left derivative is

    $$
    \lim_{x\to0^{-}}f'(x)=\lim_{x\to0^{-}}e^{x}=1,
    $$

    while the right derivative is

    $$
    \lim_{x\to0^{+}}f'(x)=\lim_{x\to0^{+}}-\frac{e^{2x}}{\sqrt{2-e^{2x}}}=-1
    $$

    The function is not differentiable at $x=0$ since $f'_{-}(0)\neq f'_{+}(0)$. The graph has a corner point at $(0,1)$: on the left the tangent half-line has equation $y=x+1$, on the right $y=-x+1$.

??? soluzione "Solution"

    At the point $x=(\log2)/2$ we have

    $$
    \lim_{x\to(\log2)/2}f'(x)=\lim_{x\to(\log2)/2}-\frac{e^{2x}}{\sqrt{2-e^{2x}}}=-\infty.
    $$

    The function is not differentiable at $x=(\log2)/2$. At the point $((\log2)/2,0)$ the graph has a vertical tangent.

    We then have $f'(x)<0$ for every $x\in(0,(\log2)/2)$, hence $f$ is strictly decreasing on the interval $(0,(\log2)/2)$. The point $x=0$ is an (absolute) maximum point with value $f(0)=1$.

    On $(-\infty,0)$ the function coincides with $e^{x}$, and it is well known that the exponential function is strictly convex. We then have

    $$
    f''(x)=-\frac{e^{2x}(4-e^{2x})}{(2-e^{2x})^{3/2}}\ \ {\rm for}\ 0<x<(\log2)/2
    $$

    which is negative on that interval. It follows that $f$ is strictly concave for $x\in(0,(\log2)/2)$.

    Now collect all the previous elements in a qualitative graph.

    (i) The function $f(x)=x-\arctan x$ has natural domain $D=\R$ with

    $$
    \lim_{x\to\pm\infty}f(x)=\pm\infty.
    $$

    It is an odd function, which would allow us to study it only for $x\geq0$.

    From

    $$
    \lim_{x\to\pm\infty}f(x)-x=\lim_{x\to\pm\infty}-\arctan x=\mp\frac{\pi}{2}
    $$

    it then follows that the function has the oblique asymptotes

    $$
    y=x+\pi/2,\ x\to-\infty;\ \ y=x-\pi/2,\ x\to+\infty.
    $$

    The function is infinitely differentiable on all of $\R$. The first derivative is

    $$
    f'(x)=1-\frac{1}{x^{2}+1}=\frac{x^{2}}{x^{2}+1}
    $$

    with $f'(0)=0$ and $f'(x)>0$ for every $x\neq0$. It follows that $f$ is strictly increasing on all of $\R$ and that the point $x=0$ is an inflection point with horizontal tangent, with corresponding value $f(0)=0$.

    The second derivative is

    $$
    f''(x)=\frac{2x}{(x^{2}+1)^{2}}
    $$

    and it has the same sign as $x$. In particular $f$ is strictly concave on $(-\infty,0)$ and strictly convex on $(0,+\infty)$.

    Now collect all the previous elements in a qualitative graph, respecting the central symmetry of the graph with respect to the origin (odd symmetry).

!!! esercizio "Exercise 10"

    $$
    f(x)=x-\arctan x
    $$

??? soluzione "Solution"

    The function $f(x)=x-\arctan x$ has natural domain $D=\R$ with

    $$
    \lim_{x\to\pm\infty}f(x)=\pm\infty.
    $$

    It is an odd function, which would allow us to study it only for $x\geq0$.

    From

    $$
    \lim_{x\to\pm\infty}f(x)-x=\lim_{x\to\pm\infty}-\arctan x=\mp\frac{\pi}{2}
    $$

    it then follows that the function has the oblique asymptotes

    $$
    y=x+\pi/2,\ x\to-\infty;\ \ y=x-\pi/2,\ x\to+\infty.
    $$

    The function is infinitely differentiable on all of $\R$. The first derivative is

    $$
    f'(x)=1-\frac{1}{x^{2}+1}=\frac{x^{2}}{x^{2}+1}
    $$

    with $f'(0)=0$ and $f'(x)>0$ for every $x\neq0$. It follows that $f$ is strictly increasing on all of $\R$ and that the point $x=0$ is an inflection point with horizontal tangent, with corresponding value $f(0)=0$.

    The second derivative is

    $$
    f''(x)=\frac{2x}{(x^{2}+1)^{2}}
    $$

    and it has the same sign as $x$. In particular $f$ is strictly concave on $(-\infty,0)$ and strictly convex on $(0,+\infty)$.

    Now collect all the previous elements in a qualitative graph, respecting the central symmetry of the graph with respect to the origin (odd symmetry).

!!! esercizio "Exercise 11"

    $$
    f(x)=1-x^{2}+\log|x|
    $$

??? soluzione "Solution"

    The function $f(x)=1-x^{2}+\log|x|$ is defined for $x\neq0$, hence its natural domain $D$ is given by

    $$
    D=(-\infty,0)\cup(0,+\infty).
    $$

    It is an even function, which would allow us to study it only for $x>0$.

    From $f(x)\sim-x^{2}$ as $x\to\pm\infty$ we have

    $$
    \lim_{x\to\pm\infty}f(x)=-\infty
    $$

    and we deduce that the function has no oblique asymptotes. We then have

    $$
    \lim_{x\to0^{\pm}}f(x)=-\infty,
    $$

    in particular the line $x=0$ (the $y$-axis) is a vertical asymptote.

    The function is infinitely differentiable on all of $D$. The first derivative is

    $$
    f'(x)=-2x+\frac{1}{x}=\frac{1-2x^{2}}{x}.
    $$

    Analyzing its sign for $x>0$, we have $f'(\sqrt{1/2})=0$, $f'(x)>0$ for $0<x<\sqrt{1/2}$, $f'(x)<0$ for $x>\sqrt{1/2}$. It follows that $f$ is strictly increasing on $(0,\sqrt{1/2})$, strictly decreasing on $(\sqrt{1/2},+\infty)$, and that the point $x=\sqrt{1/2}$ is an (absolute) maximum point with corresponding value $f(\sqrt{1/2})=1/2-(\log2)/2$. In particular the graph meets the $x$-axis at two points with positive abscissa. One of these points is $x=1$; the other has abscissa in the interval $(0,\sqrt{1/2})$ and can be approximated, if needed, with one of the algorithms studied for finding the zeros of smooth functions.

    The study of monotonicity and extrema of $f$ for $x<0$ follows by even symmetry: the point $x=-\sqrt{1/2}$ is an (absolute) maximum point with corresponding value $f(-\sqrt{1/2})=1/2-(\log2)/2$, etc., etc.

    The second derivative is

    $$
    f''(x)=-2-\frac{1}{x^{2}}
    $$

    and it is negative for every $x\in D$. In particular $f$ is strictly concave both on $(-\infty,0)$ and on $(0,+\infty)$.

    Now collect all the previous elements in a qualitative graph, respecting the axial symmetry of the graph with respect to the $y$-axis (even symmetry).
