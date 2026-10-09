---
title: "Real functions of a real variable"
---

# Real functions of a real variable

<div class="info-capitolo" markdown>

**Part 2 · Functions · Chapter 2** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-2-functions.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-functions-02-real-functions.pdf)

</div>

## 1. Real function of a real variable

<a id="box-defImmagine-1"></a>

!!! definizione "Definition 1: real function of a real variable"

    A function whose <em>domain</em> $D$ is a subset of $\mathbb{R}$ and whose <em>codomain</em> is $\mathbb{R}$:

    \begin{align*}
    f&: D \subseteq \mathbb{R} \rightarrow \mathbb{R},~~~f: x \mapsto f(x)
    \end{align*}

    is called a <strong>real function of a real variable</strong>.

- These are functions in which the “input” variable $x$ and the “output” variable $f(x)$ are real numbers.

- The most common real functions of a real variable have as domain $D$ and as image $f(D)$ an <strong>interval</strong> (possibly the whole of $\mathbb{R}$) or the union of a <strong>finite number of intervals</strong>.

!!! chiave ""

    The dependence of the output $f(x)$ on the input $x$ is effectively visualized by drawing the <strong>graph</strong> of $f$, that is, the set of points of the plane with coordinates $(x,y)$ such that $y = f(x)$ and  $x$ in the  domain  $D$. 

    Example of the graph of a real function of a real variable with domain $D = [a, b]$ (a closed and bounded interval): 

    ![Figure 1](../img/functions-02-real-functions/fig01.svg){ .fig .ovale loading=lazy style="width:80%" }

    Every line parallel to the $y$-axis that intersects the $x$-axis at a point $x_0$ of the domain $D$ intersects the graph of $f$ at one and only one point.  [^1]  <strong>Therefore, not all curves are graphs of functions</strong>.

    Note, instead, that nothing prevents a line parallel to the $x$-axis from intersecting the graph of $f$ at several points or at no point at all.

<a id="box-texexpbox1-2"></a>

!!! esempio "Example 1: curve that does not correspond to the graph of a function"

    Consider, for example, the curve made of the points of the circle of radius $r$:

    $$
    {x^2+y^2=r^2} ~~\Longleftrightarrow~~ y = \pm \sqrt{r^2-x^2}
    $$

    ![Figure 2](../img/functions-02-real-functions/fig02.svg){ .fig .ovale loading=lazy style="width:55%" }

    It is not possible to associate a unique output with the input $x_0 \in (-r,r)$, hence this curve does not correspond to the graph of a function!

## 2. Sign of a function

- The properties of a function are almost always studied not only on the whole domain, but also on a <strong>part</strong> of it: one says for instance that $x \mapsto x^2$ is “positive for $x>0$” or that $x \mapsto x^2$ is “decreasing in $(-\infty,0]$”. It is therefore convenient to state the definitions directly <strong>on a subset $I$ of the domain</strong>, and then recover the “global” property as the particular case $I=D$.

<a id="box-defSEGNO-3"></a>

!!! definizione "Definition 2: sign of a function in a subset of the domain"

    Given a function $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ and a subset $I \subseteq D$, the function is said to be

    $$
    \begin{cases}
    {\rm nonnegative~in~} I & {\rm if~~} f(x) \ge 0,~~ \forall  x \in I\\[2ex]
    {\rm positive~in~} I & {\rm if~~} f(x) > 0,~~ \forall  x \in I\\[2ex]
    {\rm nonpositive~in~} I & {\rm if~~} f(x) \le 0,~~ \forall  x \in I\\[2ex]
    {\rm negative~in~} I & {\rm if~~} f(x) < 0,~~ \forall  x \in I\\
    \end{cases}
    $$

!!! chiave ""

    When the subset is not specified, the whole domain is understood: a function $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ is called <strong>nonnegative</strong> (<strong>positive</strong>, <strong>nonpositive</strong>, <strong>negative</strong>) if it is nonnegative (positive, nonpositive, negative) in $I=D$.

- Graphically: $f$ is nonnegative in $I$ if no point of the graph with abscissa in $I$ lies <em>below</em> the $x$-axis; it is positive in $I$ if all these points lie <em>strictly above</em> the $x$-axis.

- If $f$ is positive in $I$ then it is also nonnegative in $I$; the converse is false, because $f$ may vanish at some point of $I$.

<a id="box-texexpbox1-4"></a>

!!! esempio "Example 2: sign of a function"

    - The function $f: \mathbb{R} \rightarrow \mathbb{R},~ f: x \mapsto x^2$ is <em>nonnegative</em> in $\mathbb{R}$, since $x^2 \ge 0$ for every $x \in \mathbb{R}$. It is not, however, <em>positive</em> in $\mathbb{R}$, because $f(0)=0$: it is positive in $I=(0,+\infty)$ and in $I=(-\infty,0)$.

    - The function $f: \mathbb{R} \rightarrow \mathbb{R},~ f: x \mapsto x^3$ is <em>positive</em> in $(0,+\infty)$ and <em>negative</em> in $(-\infty,0)$, since

        $$
        x^3 > 0 ~~\Longleftrightarrow~~ x > 0 \qquad {\rm ~~and~~} \qquad x^3 < 0 ~~\Longleftrightarrow~~ x < 0.
        $$

    - The function $f: \mathbb{R} \setminus \{0\} \rightarrow \mathbb{R},~ f: x \mapsto \frac{1}{x}$ is <em>positive</em> in $(0,+\infty)$ and <em>negative</em> in $(-\infty,0)$: the sign of $\frac{1}{x}$ is the same as the sign of $x$.

## 3. Bounded functions

<a id="box-defLIM_SUP-5"></a>

!!! definizione "Definition 3: bounded functions in a subset of the domain"

    Given a function $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ and a subset $I \subseteq D$, the function is said to be

    $$
    \begin{cases}
    {\rm bounded~above~in~} I & {\rm if~~} \exists M \in \R: f(x) \le M,~~ \forall  x \in I\\[2ex]
    {\rm bounded~below~in~} I & {\rm if~~} \exists m \in \R: f(x) \ge m,~~ \forall  x \in I\\[2ex]
    {\rm bounded~in~} I & {\rm if~~} \exists M \in \R_{\ge 0}: |f(x)| \le M,~~ \forall  x \in I\\
    \end{cases}
    $$

- A number $M \in \R$ such that $f(x) \le M$ for every $x \in I$ is called an <strong>upper bound</strong> for the values of $f$ in $I$; a number $m \in \R$ such that $f(x) \ge m$ for every $x \in I$ is called a <strong>lower bound</strong> for the values of $f$ in $I$. Hence $f$ is bounded above in $I$ if its values in $I$ admit an upper bound, and bounded below in $I$ if they admit a lower bound.

!!! chiave ""

    When the subset is not specified, the whole domain is understood: a function $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ is called <strong>bounded above</strong> (<strong>bounded below</strong>, <strong>bounded</strong>) if it is so in $I=D$.

- A function is bounded in $I$ <em>if and only if</em> it is bounded both above and below in $I$. Indeed:

    1. if $|f(x)| \le M$ for every $x \in I$, then $-M \le f(x) \le M$ for every $x \in I$, hence $M$ is an upper bound and $-M$ a lower bound;

    2. conversely, if $m \le f(x) \le M$ for every $x \in I$, setting $K = \max\{|m|,|M|\} \ge 0$ we have $-K \le m \le f(x) \le M \le K$, that is, $|f(x)| \le K$ for every $x \in I$.

- Graphically, we have:

    1. a function is bounded above if its graph is contained in the lower half-plane bounded by a line parallel to the $x$-axis

    2. a function is bounded below if its graph is contained in the upper half-plane bounded by a line parallel to the $x$-axis

    3. a function is bounded if its graph is contained in a horizontal strip

<a id="box-texexpbox1-6"></a>

!!! esempio "Example 3: bounded function"

    Consider the function:

    $$
    f: \mathbb{R} \rightarrow \mathbb{R},~~ f: x \mapsto \frac{1}{1 + x^2} +1
    $$

    we have

    $$
    \frac{1}{1 + x^2} +1=  \frac{1+ x^2- x^2}{1 + x^2} +1 = 2- \frac{x^2}{1+x^2} \qquad {\rm ~~and~~} \qquad \frac{x^2}{1+x^2} \ge 0, ~~\forall x \in \R
    $$

    $$
    {\rm ~~~hence~~~}1  < \frac{1}{1 + x^2} +1 \le 2, \forall x \in \mathbb{R}
    $$

    ![Figure 3](../img/functions-02-real-functions/fig03.svg){ .fig .ovale loading=lazy style="width:70%" }

<a id="box-texexpbox1-7"></a>

!!! esempio "Example 4: Unbounded function"

    The function

    $$
    f: \mathbb{R} \rightarrow \mathbb{R},~~ f: x \mapsto x^3 \qquad (y=x^3)
    $$

    is bounded neither above nor below.

    ![Figure 4](../img/functions-02-real-functions/fig04.svg){ .fig .ovale loading=lazy style="width:42%" }

<a id="box-texexpbox1-8"></a>

!!! esempio "Example 5: Function bounded below"

    The function

    $$
    f: \mathbb{R} \rightarrow \mathbb{R},~~ f: x \mapsto x^2 \qquad (y=x^2)
    $$

    is bounded below; indeed, $x^2  \ge 0, \forall x \in \mathbb{R}$

    ![Figure 5](../img/functions-02-real-functions/fig05.svg){ .fig .ovale loading=lazy style="width:45%" }

<a id="box-texexpbox1-9"></a>

!!! esempio "Example 6: boundedness in a subset of the domain"

    A function may fail to be bounded on its domain and still be bounded on a subset of it.

    - The function $f: \mathbb{R} \rightarrow \mathbb{R},~ f: x \mapsto x^3$ is not bounded in $\mathbb{R}$, but it is bounded in $I=[-2,2]$: indeed for $-2 \le x \le 2$ we have

        $$
        |x^3|=|x|^3 \le 2^3 = 8.
        $$

    - The function $f: \mathbb{R} \setminus \{0\} \rightarrow \mathbb{R},~ f: x \mapsto \frac{1}{x}$ is <strong>not</strong> bounded above in $I=(0,+\infty)$: given any $M \in \R$ with $M>0$, choosing $x$ with $0 < x < \frac{1}{M}$ we obtain

        $$
        f(x) = \frac{1}{x} > M,
        $$

        hence no real number is an upper bound for the values of $f$ in $(0,+\infty)$. The same function is instead bounded in $I=[1,+\infty)$, where $0 < \frac{1}{x} \le 1$.

- Equivalently, we can say that a function is <em>bounded above </em>(<em>bounded below</em>, <em>bounded</em>) if, respectively, its <strong>image</strong> is a subset of $\mathbb{R}$ that is <em>bounded above</em> (<em>bounded below</em>, <em>bounded</em>).

## 4. Symmetric functions

<a id="box-defFunzionePari-10"></a>

!!! definizione "Definition 4: even function"

    Functions whose graph is symmetric with respect to the $y$-axis are called <strong>even</strong>.

- They are characterized by the relation

    $$
    f(-x) = f(x)
    $$

    which expresses the equality of the ordinates corresponding to the points $x$ and $-x$, which are symmetric with respect to $x = 0$.

<a id="box-defFunzioneDisPari-11"></a>

!!! definizione "Definition 5: Odd function"

    Functions whose graph is symmetric with respect to the origin are called <strong>odd</strong>.

- They are characterized by the relation

    $$
    f(-x) = - f(x)
    $$

    which expresses the fact that the ordinates corresponding to the points $x$ and $-x$, which are symmetric with respect to $x = 0$, are the opposite of each other.

<a id="box-texexpbox1-12"></a>

!!! esempio "Example 7: Even and odd functions"

    For example, the function $x \mapsto x^2$ is even, while $x  \mapsto x^3$ is odd. More generally, powers with integer exponent are even functions  if the exponent is even and odd functions if the exponent is odd.

1. <strong>Example of the graph of an even function</strong>:

    ![Figure 6](../img/functions-02-real-functions/fig06.svg){ .fig .ovale loading=lazy style="width:80%" }

2. <strong>Example of the graph of an odd function</strong>:

    ![Figure 7](../img/functions-02-real-functions/fig07.svg){ .fig .ovale loading=lazy style="width:80%" }

!!! chiave ""

    A function <em>cannot</em> have a graph that is symmetric with respect to the $x$-axis, since the correspondence would no longer be single-valued.

## 5. Monotonic functions

<a id="box-defMONnondecr-13"></a>

!!! definizione "Definition 6: Non-decreasing function in a subset of the domain"

    Given a function $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ and a subset $I \subseteq D$, the function is called <strong>non-decreasing in $I$</strong> if for every pair of points $x_1$, $x_2 \in I$ we have:

    \begin{equation}
    x_1 < x_2 ~~\Longrightarrow~~ f(x_1) \le f(x_2) \label{ed:monNONDECRE}
    \end{equation}

<a id="box-defMONcre-14"></a>

!!! definizione "Definition 7: Increasing function in a subset of the domain"

    Given a function $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ and a subset $I \subseteq D$, the function is called <strong>increasing in $I$</strong> if for every pair of points $x_1$, $x_2 \in I$ we have:

    \begin{equation}
    x_1 < x_2 ~~\Longrightarrow~~ f(x_1) < f(x_2) \label{ed:monCRE}
    \end{equation}

<a id="box-defMONnoncre-15"></a>

!!! definizione "Definition 8: Non-increasing function in a subset of the domain"

    Given a function $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ and a subset $I \subseteq D$, the function is called <strong>non-increasing in $I$</strong> if for every pair of points $x_1$, $x_2 \in I$ we have:

    \begin{equation}
    x_1 < x_2 ~~\Longrightarrow~~ f(x_1) \ge f(x_2) \label{ed:monNONCRE}
    \end{equation}

<a id="box-defMONdecr-16"></a>

!!! definizione "Definition 9: Decreasing function in a subset of the domain"

    Given a function $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ and a subset $I \subseteq D$, the function is called <strong>decreasing in $I$</strong> if for every pair of points $x_1$, $x_2 \in I$ we have:

    \begin{equation}
    x_1 < x_2 ~~\Longrightarrow~~ f(x_1) > f(x_2) \label{ed:monDECRE}
    \end{equation}

- A function $f$ is <em>non-decreasing</em> in $I$ if, as $x$ increases in $I$, the corresponding ordinate on the graph of the function does not decrease (hence it either stays the same or increases); it is <em>increasing</em> in $I$ if it always increases;

- A function $f$ is <em>non-increasing</em> in $I$ if, as $x$ increases in $I$, the corresponding ordinate on the graph of the function does not increase (hence it either stays the same or decreases); it is <em>decreasing</em> in $I$ if it always decreases.

!!! chiave ""

    - A function is called <strong>monotonic in $I$</strong> if it is <em>non-decreasing in $I$</em> or <em>non-increasing in $I$</em>.

    - A function is called <strong>strictly monotonic in $I$</strong> if it is <em>increasing in $I$</em> or <em>decreasing in $I$</em>.

    When the subset is not specified, the whole domain is understood: a function $f: D \subseteq \mathbb{R} \rightarrow \mathbb{R}$ is called <strong>non-decreasing</strong> (<strong>increasing</strong>, <strong>non-increasing</strong>, <strong>decreasing</strong>, <strong>monotonic</strong>, <strong>strictly monotonic</strong>) if it is so in $I=D$.

- A function increasing in $I$ is in particular non-decreasing in $I$ (because $f(x_1)<f(x_2)$ implies $f(x_1) \le f(x_2)$), and a function decreasing in $I$ is in particular non-increasing in $I$. Hence <strong>every function that is strictly monotonic in $I$ is also monotonic in $I$</strong>; the converse is false, as the constant function shows.

<a id="box-texexpbox1-17"></a>

!!! esempio "Example 8: Monotonic functions"

    - The function $x \mapsto x^3$ is <em>increasing</em> in $\mathbb{R}$ (hence strictly monotonic in $\mathbb{R}$).

    - The constant function  $x \mapsto k$ (whose graph is the line with equation $y = k$) is both <em>non-decreasing</em> and <em>non-increasing</em> in $\mathbb{R}$: it is therefore monotonic, but it is neither increasing nor decreasing, and hence it is not strictly monotonic.

    - The function $x \mapsto x^2$ is <em>decreasing</em> in $(-\infty,0]$ and <em>increasing</em> in $[0,+\infty)$, but it is <strong>not</strong> monotonic in $\mathbb{R}$: indeed $f(-1)=1 > f(0)=0$ (hence it is not non-decreasing in $\mathbb{R}$) and $f(0)=0 < f(1)=1$ (hence it is not non-increasing in $\mathbb{R}$). It is the typical example of a property that holds <em>locally</em> but not on the whole domain.

1. <strong>Example of the graph of a non-decreasing function</strong> (horizontal segment):

    ![Figure 8](../img/functions-02-real-functions/fig08.svg){ .fig .ovale loading=lazy style="width:80%" }

2. <strong>Example of the graph of an increasing function</strong>:

    ![Figure 9](../img/functions-02-real-functions/fig09.svg){ .fig .ovale loading=lazy style="width:80%" }

## 6. Periodic functions

<a id="box-defFunzioneMONcre-18"></a>

!!! definizione "Definition 10: Periodic function"

    A (non-constant) function $f:D \rightarrow \mathbb{R}$ is <strong>periodic</strong> with period $T$ , $T > 0$, if $T$ is the smallest positive real number such that

    $$
    f(x+T)=f(x) {\rm~~~for~every~~} x \in D
    $$

- Every interval of length $T$ contained in $D$ is called a <strong>periodicity interval</strong>.

<a id="box-texexpbox1-19"></a>

!!! esempio "Example 9: Periodic functions"

    Typical examples of periodic functions are the <em>trigonometric functions</em> $x \mapsto \sin(x)$ ($T=2\:\pi$), $x \mapsto \cos(x)$ ($T=2\:\pi$) and $x \mapsto \tan(x)$ ($T=\pi$).

<a id="box-texexpbox1-20"></a>

!!! esempio "Example 10: Graph of periodic functions"

    Graph of a periodic function with period $T=2$:

    ![Figure 10](../img/functions-02-real-functions/fig10.svg){ .fig .ovale loading=lazy style="width:80%" }

- Lines parallel to the $x$-axis have equation

    $$
    y = k \qquad k \in \mathbb{R}
    $$

[^1]:  If the line did not intersect the graph, this would mean that no output corresponds to the input $x$. If the line intersected the graph at more than one point, this would mean that several distinct outputs correspond to the input $x$, and hence the function would no longer be single-valued.
