---
title: "Monotone functions on an interval and invertibility"
---

# Monotone functions on an interval and invertibility

<div class="info-capitolo" markdown>

**Part 3 · Limits of functions and continuity · Chapter 10** · lecture notes by Fabio Furini · [:material-file-pdf-box: Chapter PDF](../pdf/limits-10-monotone-invertible.pdf)

</div>

## 1. Monotone functions on an interval

- We now deal with monotone functions on an interval (and <strong>not necessarily continuous</strong>), and the next theorem (based on the completeness axiom of $\R$) can be seen as an extension to functions of the monotonicity theorem for sequences.

<a id="box-theoXXX-1"></a>

!!! teorema "Theorem 1: Monotonicity theorem for functions"

    Let $f : (a, b) \rr \R$ be a monotone function. Then for every $c \in  (a, b)$ the right and left limits as $x \rr c$ exist and are finite; at the two endpoints $a$, $b$ the right limit (at $a$) and the left limit (at $b$) exist, possibly infinite.

??? dimostrazione "Proof"

    Suppose $f$ is increasing in $(a, b)$ and let $c \in (a , b)$, that is, a point inside the interval.

    We prove that the following limit exists and is finite:

    $$
    \lim_{x \rr c^-} f(x) = \sup \big\{ f(x): x \in (a,c) \big\}.
    $$

    We set

    $$
    \ell = \sup \big\{ f(x): x \in (a,c) \big\}
    $$

    Note that $\ell$ exists and is finite by the supremum property, since $f(c)$ is an upper bound of the set $\{ f(x): x \in (a,c) \}$.

    Hence we need to prove that

    $$
    \lim_{x \rr c^-} f(x) = \ell
    $$

    So let $\{x_n\}$ be any sequence in $(a, c)$ such that $x_n \rr c$, and let us prove that $f(x_n) \rr  \ell$, i.e., that for every $\varepsilon > 0$ we eventually have

    $$
    \ell - \varepsilon < f(x_n) < \ell + \varepsilon.
    $$

    The second inequality is obvious, since $f (x_n) \le \ell$ by definition of $\ell$, because $x_n \in (a, c)$. <span class="qed">□</span>

??? dimostrazione "Proof"

    To prove the first one, we observe that, since $\ell - \varepsilon$ is less than $\ell$, i.e., less than the least upper bound of $\{ f(x): x \in (a,c) \}$, it is not an upper bound of this set; therefore there exists a point

    $$
    \tilde{x} \in (a,c) {\rm ~~such~that~~} f(\tilde{x}) >  \ell - \varepsilon
    $$

    Since $f$ is increasing, it follows that

    $$
    f(x) >  \ell - \varepsilon, \forall x \in (\tilde{x},c)
    $$

    On the other hand, by hypothesis

    $$
    x_n < c, \forall n {\rm ~~and~~} x_n \rr c {\rm ~~as~~} n \rr \ip
    $$

    therefore $x_n \in (\tilde{x}, c)$ eventually. Hence

    $$
    f(x_n) \ge \ell - \varepsilon \quad ({\rm eventually})
    $$

    which is what we needed to prove.

    Similarly, one can prove that the following limit exists and is finite:

    $$
    \lim_{x \rr c^+} f(x) = \inf \big\{ f(x): x \in (c,b) \big\} .
    $$

    As for the limits at the two endpoints of the interval, we prove that the following limit exists:

    $$
    \lim_{x \rr b^-} f(x)
    $$

    We set (as before)

    $$
    \ell = \sup \big\{ f(x): x \in (a,b) \big\}
    $$

    however, in this case $\ell$ could also be $\ip$ (we cannot claim that $f(b)$ is an upper bound of the set, because the function is not defined at $b$). We therefore proceed by cases.

    In the case $\ell < \infty$ the previous proof can be repeated. <span class="qed">□</span>

??? dimostrazione "Proof"

    If instead $\ell = \infty$, the argument changes. From the hypothesis

    $$
    \sup \big\{ f(x): x \in (a,b) \big\} = \ip
    $$

    it follows that for every $M > 0$ there exists $\tilde{x} \in (a, b)$ such that $f(\tilde{x}) > M$.

    By the monotonicity of $f$, then

    $$
    f(x) > M,~~~~ \forall x \in (\tilde{x},b)
    $$

    hence, taking any sequence $x_n \rr b$, we have $x_n \in (\tilde{x},b)$ eventually, and therefore

    $$
    f(x_n) > M, \quad {\rm eventually},
    $$

    therefore

    $$
    \lim_{n \rr \ip} f(x_n) = \ip
    $$

    In the same way one proves that the following limit exists:

    $$
    \lim_{x \rr a^+} f(x)
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

!!! chiave ""

    A consequence of the monotonicity theorem is that if a function is monotone on an interval $(a, b)$, its possible points of discontinuity in $(a, b)$ are necessarily jump discontinuities, except for the endpoints $a$, $b$, where there may also be a vertical asymptote.

## 2. Continuity and invertibility

- We have seen the theorem stating that if a generic function with domain $D$ is strictly monotone, then it is invertible.

- We also know that the converse is not true in general: there exist functions that are invertible on an interval but not monotone.

<a id="box-texexpbox1-2"></a>

!!! esempio "Example 1: Invertible but not monotone function"

    Consider for example

    $$
    f(x)=
    \begin{cases}
    1- \frac{1}{2} \: x^2 & {\rm if~~} 0 < x \le 1,\\
    x & {\rm if~~} x \le 0
    \end{cases}
    $$

    its graph is:

    ![Figure 1](../img/limits-10-monotone-invertible/fig01.svg){ .fig .ovale loading=lazy style="width:80%" }

    This function satisfies the invertibility condition, which requires the graph of $f$ to be intersected at most at one point by every line parallel to the $x$-axis, but it is not monotone.

- If we add the hypothesis of continuity and require the domain to be an interval, being strictly monotone becomes a necessary and sufficient condition for invertibility, as stated by the following theorem.

<a id="box-theoXXX-3"></a>

!!! teorema "Theorem 2: Invertibility of monotone and continuous functions"

    Let $f : I \rr \R$ be a function defined on an interval $I$.

    If the function $f$ is continuous, then it is invertible on the interval $I$ if and only if it is strictly monotone.

    In this case its inverse function is also strictly monotone and continuous.

??? dimostrazione "Proof"

    We already know that if $f$ is strictly monotone, it is invertible (regardless of the hypotheses that $f$ is continuous and that it is defined on an interval). 

    We show that the converse holds, i.e., that if $f$ is continuous and invertible, then it is strictly monotone.

    Suppose by contradiction that the function is not strictly monotone; then there exist three points

    $$
    x_1 < x_2 < x_3 ~~({\rm in~the~interval~~} I)
    $$

    such that

    $$
    f(x_1) < f(x_2) {\rm ~~and~~} f(x_2) > f(x_3)
    $$

    or such that

    $$
    f(x_1) > f(x_2) {\rm ~~and~~} f(x_2) < f(x_3).
    $$

    Suppose the first of the two alternatives holds (the other case is handled similarly). Let us compare the values $f(x_1)$ and $f(x_3)$; they cannot be equal because $f$ is invertible by hypothesis, hence

    $$
    f(x_1) < f(x_3) {\rm ~~or~~} f(x_1) > f(x_3).
    $$

    Again, suppose the first of the two alternatives holds (the other case is handled similarly). So we know that:

    $$
    x_1 < x_2 < x_3 {\rm ~~and~~} f(x_1) < f(x_3) < f(x_2).
    $$

    Since $f$ is continuous, by the intermediate value theorem there exists

    $$
    x_0 \in (x_1,x_2) {\rm ~~such~that~~} f(x_0) = f(x_3).
    $$

    Since $x_0 \neq x_3$ (because $x_1 < x_2 < x_3$), it follows that $f$ cannot be invertible, a <strong>contradiction</strong>. This proves the first part of the theorem.

    Now let $f$ be a continuous, strictly monotone and hence invertible function on $I$, and let $g$ be its inverse function, which is also strictly monotone and invertible. We prove that $g$ is continuous.

    - By what we observed after the monotonicity theorem, the strictly monotone function $g$ is either continuous or has jump discontinuity points.

    - In the latter case the image of $g$ is not an interval (but the union of at least two disjoint intervals), which is a <strong>contradiction</strong> because this image is $I$. Hence $g$ is continuous.

    <p class="qed-riga"><span class="qed">□</span></p>

- Note that in the proof of the previous theorem we used both the intermediate value theorem and the monotonicity theorem for functions. Moreover, we implicitly used the completeness axiom of $\R$.

- The theorem just proved means, in particular, that:

    !!! chiave ""

        a continuous and invertible function on an interval has a continuous inverse function.

- This fact completes the proof of the continuity theorem for elementary functions:

    1. the continuity of the function $a^x$ implies the continuity of the function $\log_a x.$

    2. the continuity of the functions $\sin x$, $\cos x$ and $\tan x$ implies the continuity of the functions $\arcsin x$, $\arccos x$ and $\arctan x.$
