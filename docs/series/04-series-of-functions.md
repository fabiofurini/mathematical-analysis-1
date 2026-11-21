---
title: "Series of functions"
---

# Series of functions

<div class="info-capitolo" markdown>

**Part 6 · Series · Chapter 4** · [:material-file-pdf-box: Lecture notes, volume 6 (PDF)](../pdf/lecture-notes-6-series.pdf) · [:material-pencil-box-multiple: Exercises, volume 6 (PDF)](../pdf/exercises-6-series.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-series-04-series-of-functions.pdf)

</div>

!!! nota "Prerequisites"

    - From this module, [«Series with terms of variable sign»](https://fabiofurini.github.io/mathematical-analysis-1/series/03-alternating-series/): absolute convergence.

    - From this module, [«Differential calculus and approximations»](https://fabiofurini.github.io/mathematical-analysis-1/derivatives/08-approximations/): the Taylor formula.

    - From this module, [«Complex numbers»](https://fabiofurini.github.io/mathematical-analysis-1/numbers/09-complex-numbers/): algebraic form and modulus of a complex number.

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - define a series of functions and its set of convergence;

    - write the Taylor series of the elementary transcendental functions;

    - decide on which interval a function is expandable in Taylor series;

    - recognise the convergence of a series with complex terms, also through absolute convergence.

## 1. Series of functions

- <strong>Series of functions</strong> are numerical series depending on a parameter $x$: when these series converge for every value $x$ belonging to a certain interval, they represent <strong>functions of a new kind</strong>

- There are two important classes of series of functions, namely trigonometric series and power series. We will only deal with <strong>power series</strong>, also called <strong>Taylor series</strong>, which can be seen as a natural extension of Taylor expansions.

### 1.1 Taylor series of the elementary transcendental functions

- Taylor's expansion/formula with Lagrange remainder can be rewritten in the form:

    \begin{equation}
    f(x) = \sum_{k=0}^n  \frac{f^{(k)}(x_0)}{k!} \; (x-x_0)^k + E_n(x)
    \end{equation}

    where the Lagrange approximation error is

    \begin{equation}
    E_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!} \;(x-x_0)^{n+1}
    \end{equation}

    and $c$ is a suitable point between $x_0$ and $x$.

<a id="box-defXX-1"></a>

!!! definizione "Definition 1: Taylor series"

    If a function $f$ has derivatives of every order, the series

    $$
    \sum_{k=0}^{\infty} \frac{f^{(k)}(x_0)}{k!} \; (x-x_0)^k
    $$

    is called the <strong>Taylor series</strong> of the function $f$ centered at $x_0$.

!!! chiave ""

    At a given point $x \in  (a, b)$, if the error

    $$
    E_n(x) \rr 0 {\rm ~~~as~~~} n \rr \ip
    $$

    then the Taylor series is convergent and its sum equals $f(x)$. This is equivalent to saying that the $n$-th partial sum of the series has a finite limit and this limit is precisely $f(x)$. In formulas:

    $$
    \underbrace{T_{n,x_0} (x)}_{{\rm Taylor~polynomial}} =  \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!} \; (x-x_0)^k \rr f(x) {\rm ~~~as~~~} n \rr \ip
    $$

<a id="box-defXX-2"></a>

!!! definizione "Definition 2: function expandable in Taylor series on an interval"

    Given a function $f:D \rr \R$ with derivatives of every order, if

    $$
    E_n(x) \rr 0  {\rm ~~as~~} n\rr \ip, ~~~\forall x \in I \subseteq D
    $$

    we say that $f(x)$ is <strong>expandable in Taylor series</strong> on the interval $I$.

- There are (infinitely differentiable) functions that are expandable in Taylor series on the whole real line, others that are expandable only on a bounded interval, and others for which the interval reduces to a single point (the point $x_0$).

- We now deal with the three elementary transcendental functions:

    $$
    f(x)=e^x,~~~f(x)=\sin x {\rm ~~~and~~~}f(x)=\cos x
    $$

    which we will show to be expandable in Taylor series on the whole of $\R$. They are three transcendental (not algebraic) functions.

- Real functions of a real variable are classified into <strong>algebraic functions and transcendental functions</strong>. Algebraic functions are built through a finite number of applications of the four arithmetic operations, of raising to a power and of extracting the $n$-th root.  Transcendental functions are all the functions that are not algebraic.

#### The Taylor series of the exponential function

<a id="box-texexpbox1-3"></a>

!!! esempio "Example 1: Maclaurin formula/expansion of the exponential"

    Maclaurin formula/expansion of order $n$ of the exponential with Lagrange remainder:

    $$
    e^x = T_{n}(x) + \frac{e^c}{(n+1)!} \;x^{n+1} = 1 + x + \frac{x^2}{2} + \frac{x^3}{3!} + {\rm \dots} + \frac{x^n}{n!} + \frac{e^c}{(n+1)!} \;x^{n+1}  {\rm ~~with~~} c \in [0,x]
    $$

    ![Figure 1](../img/series-04-series-of-functions/fig01.svg){ .fig .ovale loading=lazy style="width:64%" }

<a id="box-theoKKKK-4"></a>

!!! osservazione "Remark 1: Taylor series of the exponential function"

    $$
    \forall x \in \R,~~~~ e^x =\sum_{k=0}^{\infty} \frac{x^k}{k!}
    $$

??? dimostrazione "Proof"

    From the Maclaurin expansion of order $n$ of $e^x$ with Lagrange remainder,  we have that for every integer $n$ and $x \in \R$ there exists a point $c$, lying between $0$ and $x$, such that:

    $$
    e^x =\sum_{k=0}^{n} \frac{x^k}{k!} + \frac{e^c}{(n+1)!} \;x^{n+1}
    $$

    We fix $x$ and let $n$ tend to $\ip$. The point $c$ may vary with $n$ but, since it always lies between $0$ and $x$, we have:

    $$
    e^c \le
    \begin{cases}
    e^x &{\rm if~~} x >0\\
    1 & {\rm if~~} x <0
    \end{cases}
    $$

    and $e^0=1$, hence $e^c$ stays bounded. From the hierarchy of infinities theorem we have:

    $$
    \frac{x^{n+1}}{(n+1)!} \rr 0 {\rm ~~as~~} n \rr \ip
    $$

    hence the error tends to zero, that is:

    $$
    \frac{x^{n+1} }{(n+1)!} \; e^c\rr 0 {\rm ~~as~~} n \rr \ip
    $$

    since it is the product of an infinitesimal sequence and a bounded one. We have therefore proved that the function $e^x$ can be written as the sum of a power series, its Taylor series, convergent for every $x \in \R$. <span class="qed">□</span>

<a id="box-theoZERI-5"></a>

!!! osservazione "Remark 2"

    \begin{equation}
    \label{second}
     e = \sum_{k=0}^{\infty} \frac{1}{k!}
    \end{equation}

??? dimostrazione "Proof"

    It suffices to set $x$ equal to 1 in the Taylor series of the exponential function. <span class="qed">□</span>

- We have derived a second definition of Euler's number $e$ (Napier's constant); the first one was:

    \begin{equation}
    \label{first}
     e = \lim_{k \rr \ip} \left(1 + \frac{1}{k} \right)^k
    \end{equation}

- Consequently, we have two methods for computing an approximation of the value of $e$:

    1. The first method is based on formula \(\eqref{first}\), and by fixing $k=n$ we obtain the approximation:

        $$
        e \approx \left(1 + \frac{1}{n} \right)^n
        $$

    2. The second method is based on formula \(\eqref{second}\), and by computing the $n$-th partial sum we obtain the approximation:

        $$
        e \approx  \sum_{k=0}^{n} \frac{1}{k!}
        $$

    <div class="tabella" markdown><table>
    <tr>
    <td></td>
    <td><span class="arithmatex">\(\left(1 + \frac{1}{n} \right)^n\)</span></td>
    <td><span class="arithmatex">\(\sum_{k=0}^{n} \frac{1}{k!}\)</span></td>
    <td><span class="arithmatex">\(e\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=1\)</span></td>
    <td><span class="arithmatex">\(2.0000000000\dots\)</span></td>
    <td><span class="arithmatex">\(2.0000000000\dots\)</span></td>
    <td><span class="arithmatex">\(2.7182818284\dots\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=2\)</span></td>
    <td><span class="arithmatex">\(2.2500000000\dots\)</span></td>
    <td><span class="arithmatex">\(2.5000000000\dots\)</span></td>
    <td><span class="arithmatex">\(2.7182818284\dots\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=3\)</span></td>
    <td><span class="arithmatex">\(2.3703703704\dots\)</span></td>
    <td><span class="arithmatex">\(2.6666666666\dots\)</span></td>
    <td><span class="arithmatex">\(2.7182818284\dots\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=4\)</span></td>
    <td><span class="arithmatex">\(2.4414062500\dots\)</span></td>
    <td><span class="arithmatex">\(2.7083333333\dots\)</span></td>
    <td><span class="arithmatex">\(2.7182818284\dots\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=5\)</span></td>
    <td><span class="arithmatex">\(2.4883200000\dots\)</span></td>
    <td><span class="arithmatex">\(2.7166666666\dots\)</span></td>
    <td><span class="arithmatex">\(2.7182818284\dots\)</span></td>
    </tr>
    </table></div>

    ![Figure 2](../img/series-04-series-of-functions/fig02.svg){ .fig .ovale loading=lazy style="width:80%" }

- The second method is therefore much more efficient at approximating the value of $e$

#### The Taylor series of the elementary trigonometric functions

<a id="box-texexpbox1-6"></a>

!!! esempio "Example 2: Maclaurin formula/expansion of sine and cosine"

    Maclaurin formula/expansion of odd order of the sine with Lagrange remainder:

    \begin{align*}
    \sin x & = T_{2\;k+1}(x) + \frac{\sin^{(2\;k+2)}(c)}{(2\;k+2)!} \;x^{2\;k+2}\\ 
    &=  x - \frac{x^3}{3!} + \frac{x^5}{5!} + {\rm \dots} + (-1)^k\;\frac{x^{2\:k+1}}{(2\:k+1)!}  + \frac{\sin^{(2\;k+2)}(c)}{(2\;k+2)!} \;x^{2\;k+2}  {\rm ~~with~~} c \in [0,x]
    \end{align*}

    ![Figure 3](../img/series-04-series-of-functions/fig03.svg){ .fig .ovale loading=lazy style="width:80%" }

    Maclaurin formula/expansion of even order of the cosine with Lagrange remainder:

    \begin{align*}
    \cos x & = T_{2\;k}(x) + \frac{\cos^{(2\;k+1)}(c)}{(2\;k+1)!} \;x^{2\;k+1}\\ 
    &=  1 - \frac{x^2}{2!} + \frac{x^4}{4!} + \dots + (-1)^k\;\frac{x^{2\:k}}{(2\:k)!}  + \frac{\cos^{(2\;k+1)}(c)}{(2\;k+1)!} \;x^{2\;k+1}  {\rm ~~with~~} c \in [0,x]
    \end{align*}

    ![Figure 4](../img/series-04-series-of-functions/fig04.svg){ .fig .ovale loading=lazy style="width:80%" }

<a id="box-theoKKKK-7"></a>

!!! osservazione "Remark 3: Taylor series of the elementary trigonometric functions"

    $$
    \forall x \in \R,~~~~ \sin x = \sum_{k=0}^{\infty} (-1)^k\;\frac{x^{2\:k+1}}{(2\:k+1)!},~~~\cos x = \sum_{k=0}^{\infty} (-1)^k\;\frac{x^{2\:k}}{(2\:k)!}
    $$

??? dimostrazione "Proof"

    The derivatives of $\sin x$ and $\cos x$ are $\pm\sin x$ or $\pm\cos x$, hence for every $c$:

    $$
    \left|\sin^{(2\;k+2)}(c)\right| \le 1, \qquad \left|\cos^{(2\;k+1)}(c)\right| \le 1
    $$

    For fixed $x$, the Lagrange errors satisfy:

    $$
    \left|\frac{\sin^{(2\;k+2)}(c)}{(2\;k+2)!} \;x^{2\;k+2}\right| \le \frac{|x|^{2\;k+2}}{(2\;k+2)!} \rr 0,
    \qquad \left|\frac{\cos^{(2\;k+1)}(c)}{(2\;k+1)!} \;x^{2\;k+1}\right| \le \frac{|x|^{2\;k+1}}{(2\;k+1)!} \rr 0
    $$

    as $k \rr \ip$, by the hierarchy of infinities theorem. Hence the series converge to $\sin x$ and $\cos x$ for every $x \in \R$. <span class="qed">□</span>

## 2. Series in the complex field

- The definitions given for numerical series also hold for sequences of complex numbers: the absolute value is replaced by the <strong>modulus</strong>.

<a id="box-defXX-8"></a>

!!! definizione "Definition 3: of series with complex terms"

    Given a sequence $\{z_k\}$ of complex numbers, the series $\sum_{k=0}^{\infty} z_k$ is <strong>convergent</strong> if the sequence of partial sums $s_n = \sum_{k=0}^{n} z_k$ has a limit $s \in \C$, that is, if $|s_n - s| \rr 0$ as $n \rr \ip$; the number $s$ is the <strong>sum</strong> of the series. The series is <strong>absolutely convergent</strong> if the series with non-negative real terms $\sum_{k=0}^{\infty} |z_k|$ converges.

- We write $z_k = a_k + i\,b_k$ with $a_k, b_k \in \R$. For every $w \in \C$ we have $\max\{|{\rm Re}\,w|, |{\rm Im}\,w|\} \le |w| \le |{\rm Re}\,w| + |{\rm Im}\,w|$, hence:

    $$
    \sum_{k=0}^{\infty} z_k {\rm ~~converges} \iff \sum_{k=0}^{\infty} a_k {\rm ~~and~~} \sum_{k=0}^{\infty} b_k
    {\rm ~~converge}
    $$

    and then $\sum_{k=0}^{\infty} z_k = \sum_{k=0}^{\infty} a_k + i \sum_{k=0}^{\infty} b_k$.

- As in the real case, if the series converges then $z_k = s_k - s_{k-1} \rr 0$.

<a id="box-theoZERI-9"></a>

!!! teorema "Theorem 1"

    If a series $\sum z_k$ of complex numbers converges absolutely, then it converges.

??? dimostrazione "Proof"

    Let $z_k = a_k + i\,b_k$. Since $|z_k| = \sqrt{a_k^2 + b_k^2}$, for every $k$ we have:

    $$
    |a_k| \le |z_k| {\rm ~~~~~and~~~~~} |b_k| \le |z_k|
    $$

    By the comparison test for series with non-negative terms, the convergence of $\sum |z_k|$ implies that of $\sum |a_k|$ and of $\sum |b_k|$. The two real series $\sum a_k$ and $\sum b_k$ therefore converge absolutely, and so they converge. By the previous remark, $\sum z_k$ converges as well. <span class="qed">□</span>

<a id="box-texexpbox1-10"></a>

!!! esempio "Example 3: complex geometric series"

    Let $z \in \C$ with $z \neq 1$. The partial sums of the geometric series are:

    $$
    s_n = \sum_{k=0}^{n} z^k = \frac{1 - z^{n+1}}{1 - z}
    $$

    - If $|z| < 1$, then $|z^{n+1}| = |z|^{n+1} \rr 0$ and therefore

        $$
        \sum_{k=0}^{\infty} z^k = \frac{1}{1-z}
        $$

        The convergence is also absolute, because $\sum |z|^k$ is a real geometric series with ratio $|z| < 1$.

    - If $|z| \ge 1$, then $|z^k| = |z|^k \ge 1$: the general term does not tend to $0$ and the series does not converge.

    For example, with $z = \frac{i}{2}$:

    $$
    \sum_{k=0}^{\infty} \left(\frac{i}{2}\right)^k = \frac{1}{1 - \frac{i}{2}} = \frac{1 + \frac{i}{2}}{1 + \frac14}
    = \frac45 + \frac25\, i
    $$

## 3. In summary

!!! chiave "In summary"

    - A series of functions converges at the points where the numerical series converges.

    - The Taylor series of $f$ at $x_0$ has the coefficients $f^{(k)}(x_0)/k!$ of the Taylor polynomials.

    - A function is expandable in Taylor series on an interval when the series converges to $f(x)$ there, as for the elementary transcendental functions.

    - A series of complex numbers converges if and only if the series of the real and imaginary parts converge; absolute convergence implies convergence, and $\sum z^k = 1/(1-z)$ for $|z| < 1$.
