---
title: "Integer part and fractional part functions"
---

# Integer part and fractional part functions

<div class="info-capitolo" markdown>

**Part 2 · Functions · Chapter 7** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-2-functions.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-functions-07-integer-part.pdf)

</div>

## 1. Integer part and fractional part functions

- Two functions that are typically encountered when writing <em>algorithms</em> are the integer part (floor) function and the fractional part (or decimal part) function.

<a id="box-defXX-1"></a>

!!! definizione "Definition 1: of the integer part function"

    The <strong>integer part (floor) function</strong> is:

    \begin{equation}
    \label{parte_int}
    f: \mathbb{R} \rightarrow \mathbb{Z}, x \mapsto [x] \qquad ({\rm or~~ x \mapsto \lfloor x \rfloor})
    \end{equation}

<a id="box-defXX-2"></a>

!!! definizione "Definition 2: of the upper integer part function"

    The <strong>upper integer part (ceiling) function</strong> is:

    \begin{equation}
    \label{parte_ceil}
    f: \mathbb{R} \rightarrow \mathbb{Z}, x \mapsto \lceil x \rceil
    \end{equation}

<a id="box-defXX-3"></a>

!!! definizione "Definition 3: of the fractional part function"

    The <strong>fractional part function</strong> is:

    \begin{equation}
    \label{parte_int__2}
    f: \mathbb{R} \rightarrow [0, 1), x \mapsto (x)
    \end{equation}

- The integer part function $f(x)= \lfloor x \rfloor$ and the upper integer part function $f(x)= \lceil x \rceil$ are <strong>non-decreasing</strong> in $\mathbb{R}$, but they are <strong>not</strong> increasing.

    - They are non-decreasing: let $x_1 < x_2$. Then $\lfloor x_1 \rfloor \le x_1 < x_2$ and, since $\lfloor x_1 \rfloor$ is an integer less than or equal to $x_2$, while $\lfloor x_2 \rfloor$ is the <em>largest</em> integer less than or equal to $x_2$ (see the chapter “Roots, powers, logarithms and modular arithmetic” of Part 1), we have $\lfloor x_1 \rfloor \le \lfloor x_2 \rfloor$. In the same way $\lceil x_2 \rceil \ge x_2 > x_1$ and, since $\lceil x_1 \rceil$ is the <em>smallest</em> integer greater than or equal to $x_1$, we have $\lceil x_1 \rceil \le \lceil x_2 \rceil$.

    - They are not increasing: both are <em>constant</em> on every interval between two consecutive integers, for instance

        $$
        \left\lfloor \frac{1}{3} \right\rfloor = \left\lfloor \frac{2}{3} \right\rfloor = 0 \qquad {\rm ~~and~~} \qquad \left\lceil \frac{1}{3} \right\rceil = \left\lceil \frac{2}{3} \right\rceil = 1,
        $$

        hence there exist $x_1 < x_2$ with $f(x_1) = f(x_2)$.

- Graphs of the functions $f(x)=\lceil x \rceil$ and  $f(x)= \lfloor x \rfloor$  on the interval $[-4,4]$.

    ![Figure 1](../img/functions-07-integer-part/fig01.svg){ .fig .ovale loading=lazy style="width:61%" }

    ![Figure 2](../img/functions-07-integer-part/fig02.svg){ .fig .ovale loading=lazy style="width:61%" }

- Note that the fractional part is a periodic function with period 1:

    ![Figure 3](../img/functions-07-integer-part/fig03.svg){ .fig .ovale loading=lazy style="width:80%" }

## 2. Piecewise-defined functions

- Starting from the elementary functions, new ones can be built by using <strong>different analytic definitions on different intervals</strong>.

<a id="box-defFunzioneMONcre-4"></a>

!!! definizione "Definition 4: of piecewise-defined function"

    A function $f$ whose value $f (x)$ is computed through different “instructions” depending on the interval in which $x$ lies is called a <strong>piecewise-defined function</strong>.

<a id="box-texexpbox1-5"></a>

!!! esempio "Example 1: Piecewise-defined functions"

    Consider for example

    $$
    f(x)=
    \begin{cases}
    \ln x & {\rm if~~} x > 1,\\
    x^2 & {\rm if~~} 0 < x \le 1,\\
    x & {\rm if~~} x \le 0
    \end{cases}
    $$

    its graph is:

    ![Figure 4](../img/functions-07-integer-part/fig04.svg){ .fig .ovale loading=lazy style="width:80%" }

- From the <em>logical</em> / <em>algorithmic</em> point of view, one can say that a function of this kind has the peculiarity of being built using not only mathematical functions  but also the <strong>logical function</strong> “if … then”.

## 3. The absolute-value function

- In the chapter “Factorials, binomial coefficients and triangle inequality” of Part 1 the <strong>absolute value</strong> of a real number $a$ was defined by

    $$
    |a|  = 
    \begin{cases}
    a & {\rm if~~} a \ge 0\\
    -a & {\rm if~~} a < 0
    \end{cases}
    $$

    Associating with every $x \in \mathbb{R}$ the number $|x|$ we obtain a function of a real variable, which is the most important example of a <em>piecewise defined function</em>.

<a id="box-defVALASS-6"></a>

!!! definizione "Definition 5: of absolute-value function"

    The <strong>absolute-value function</strong> is:

    \begin{equation}
    \label{val_ass_f}
    f: \mathbb{R} \rightarrow \mathbb{R}, x \mapsto |x|
    \end{equation}

- <strong>Sign.</strong> The absolute-value function is <em>nonnegative</em> in $\mathbb{R}$ and <em>positive</em> in $\mathbb{R} \setminus \{0\}$:

    $$
    |x| \ge 0,~~ \forall x \in \mathbb{R} \qquad {\rm ~~and~~} \qquad |x| = 0 ~~\Longleftrightarrow~~ x=0.
    $$

    Indeed, if $x \ge 0$ then $|x|=x \ge 0$, and if $x<0$ then $|x|=-x>0$; in both cases $|x|=0$ forces $x=0$.

- <strong>Monotonicity.</strong> The absolute-value function is <em>decreasing</em> in $(-\infty,0]$ and <em>increasing</em> in $[0,+\infty)$, but it is <strong>not</strong> monotonic in $\mathbb{R}$.

    - If $x_1 < x_2 \le 0$, then $|x_1| = -x_1 > -x_2 = |x_2|$.

    - If $0 \le x_1 < x_2$, then $|x_1| = x_1 < x_2 = |x_2|$.

    - It is not monotonic in $\mathbb{R}$ because $f(-1)=1 > f(0)=0$ (hence it is not non-decreasing in $\mathbb{R}$) and $f(0)=0 < f(1)=1$ (hence it is not non-increasing in $\mathbb{R}$).

- <strong>Boundedness and image.</strong> The function is <em>bounded below</em> in $\mathbb{R}$ (the number $0$ is a lower bound for its values), but it is <strong>not</strong> bounded above: for every $M \in \R$ with $M>0$ we have $f(M+1)=M+1>M$. Its image is

    $$
    f(\mathbb{R}) = [0,+\infty),
    $$

    because $|x| \ge 0$ for every $x$ and, conversely, every $y \ge 0$ is the image of $y$ itself: $|y|=y$.

- <strong>Symmetry.</strong> The absolute-value function is <em>even</em>, since $|-x|=|x|$ for every $x \in \mathbb{R}$: its graph is symmetric with respect to the $y$-axis.

- The graph consists of the two half-lines $y=-x$ for $x \le 0$ and $y=x$ for $x \ge 0$:

![Figure 5](../img/functions-07-integer-part/fig05.svg){ .fig .ovale loading=lazy style="width:48%" }
