---
title: "Hierarchies of infinities and the ratio test"
---

# Hierarchies of infinities and the ratio test

<div class="info-capitolo" markdown>

**Part 3 · Limits of sequences · Chapter 5** · lecture notes by Fabio Furini · [:material-file-pdf-box: Chapter PDF](../pdf/sequences-05-hierarchy-of-infinities.pdf)

</div>

## 1. Hierarchies of infinities for sequences, part 1 and part 2

<a id="box-theoXXX-1"></a>

!!! teorema "Theorem 1: Hierarchy of infinities (part I)"

    \begin{align}
    \lim_{n \rightarrow +\infty} \frac{\log_a n}{n^{\alpha}} &= 0
    \end{align}

    for every $a>1$ and $\alpha > 0$.

??? dimostrazione "Proof"

    We begin by establishing a useful inequality between any positive real number and its logarithm.

    For $x \in \R$, $x > 0$, let $k$ be the integer part of $x$, i.e., the integer $k$ for which we have

    $$
    k \le x < k + 1, {\rm ~~moreover~we~have~~}  2^x \ge 2^k = (1+1)^k \ge 1 + k > x,
    $$

    the first inequality follows from the monotonicity of the exponential function, the second from the binomial expansion (or from Bernoulli's inequality). Taking logarithms to base $a>1$, we obtain

    $$
    \log_a x < x \: \log_a 2 \quad ({\rm for~every~~} x\in \R, x>0).
    $$

    We now apply this inequality to the number $x=n^{{\alpha}/{2}}$, and we have

    \begin{align*}
    \frac{\alpha}{2} \log_a n < n^{{\alpha}/{2}} \: \log_a 2 {\rm~~~and ~~~}
     \frac{\log_a n}{n^{{\alpha}/{2}}} < \frac{2}{\alpha} \: \log_a 2,
    \end{align*}

    hence

    $$
    \frac{\log_a n} {n^{\alpha}} = \frac{\log_a n}{n^{{\alpha}/{2}}} \: \frac{1}{n^{{\alpha}/{2}}} \le \underbrace{\frac{2}{\alpha} \: \log_a 2}_{ {\rm constant}} \: \frac{1}{n^{{\alpha}/{2}}} {\rm ~~~~~~~and ~~~~~~}  \frac{1}{n^{{\alpha}/{2}}} \rr 0.
    $$

    By the corollary of the comparison theorem, the claim follows. <span class="qed">□</span>

<a id="box-theoXXX-2"></a>

!!! teorema "Theorem 2: Hierarchy of infinities (part II)"

    \begin{align}
    \lim_{n \rightarrow +\infty} \frac{n^{\alpha}}{a^n}  &= 0
    \end{align}

    for every $a>1$ and $\alpha > 0$.

??? dimostrazione "Proof"

    We use the hierarchy of infinities theorem (part I), replacing the integer $n$ with the integer $2^n$:

    $$
    0 = \lim_{n \rr \ip} \frac{\log_a (2^n)}{\left(2^n\right)^{\alpha}} = \lim_{n \rr \ip}   \frac{ n \: \overbrace{\log_a 2}^{{\rm constant}}}{\left(2^{\alpha}\right)^{n}} {\rm ~~hence~~ } \frac{n}{\left(2^{\alpha}\right)^{n}} \rr 0.
    $$

    If now $a > 1$ is fixed, choosing $\alpha > 0$ such that $2^{\alpha}=a$ we obtain that $\frac{n}{a^n} \rr 0$, that is, the second relation in the special case where $n$ is raised to the exponent $1$. The general case follows from the identity:

    $$
    \frac{n^{\alpha}}{a^n} = \left( \frac{n}{a^{{n}/{\alpha}}}\right)^{\alpha} = \left( \frac{n}{ \left(a^{{1}/{\alpha}}\right)^{n} }\right)^{\alpha}
    $$

    Indeed, by the previous result $\frac{n}{\left(a^{1/\alpha}\right)^n} \rr 0$ (the base $a^{1/\alpha}$ is still a number $>1$), hence it follows that

    $$
    \left(\frac{n}{\left(a^{1/\alpha}\right)^n}\right)^{\alpha} \rr 0 {\rm ~~and~from~this~the~claim}.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

- These limits describe the “speed” at which logarithms (with base $> 1$), powers (with exponent $> 0$) and exponentials (with base $> 1$) go to infinity. Logarithms with base $> 1$ go more slowly than any power with exponent $>0$; powers with exponent $>0$ go more slowly than any exponential with base $> 1$.

- Exponentials with base $> 1$ are infinities of higher order than powers with exponent $>0$ and than logarithms with base $> 1$. Powers with exponent $>0$ are infinities of higher order than logarithms with base $> 1$.

<a id="box-texexpbox1-3"></a>

!!! esempio "Example 1: Computing limits using the hierarchy of infinities"

    We compute the limit

    $$
    \lim_{n \rr \ip} \sqrt[n]{n}= \left[\infty^0 \right] \qquad {\rm~~(indeterminate~form)}
    $$

    Now we write

    $$
    \sqrt[n]{n} = n^{\frac{1}{n}} = e^{\log n^{1/n}} = e^{ \frac{\log n}{n}}
    $$

    and studying the sequence in the exponent

    $$
    a_n = \frac{\log n}{n} {\rm ~~~we~have~~~} a_n \rr 0
    $$

    thanks to the hierarchy of infinities theorem. Hence we have:

    $$
    \lim_{n \rr \ip} \sqrt[n]{n}= \lim_{n \rr \ip} e^{ \frac{\log n}{n}} =1
    $$

<a id="box-texexpbox1-4"></a>

!!! esempio "Example 2: Computing limits using the hierarchy of infinities"

    We compute the limit

    $$
    \lim_{n \rr \ip} \frac{2^n+n}{2^{n+1}}= \left[\frac{\infty}{\infty}\right] \qquad {\rm~~(indeterminate~form)}
    $$

    We can write:

    $$
    \underbrace{2^n+n}_{a_n} = ~~\underbrace{2^n}_{a'_n} ~~ \underbrace{\left( 1 + \frac{n}{2^n}\right)}_{\rr 1} \thicksim 2^n
    $$

    since, thanks to the hierarchy of infinities theorem, we have

    $$
    \frac{n}{2^n} \rr 0,
    $$

    i.e., $2^n$ is an infinity of higher order than $n$. Hence we can write:

    $$
    \frac{2^n+n}{2^{n+1}} \thicksim \frac{2^n}{2^{n+1}}
    $$

    Now, since

    $$
    \frac{2^n}{2^{n+1}} = \frac{2^n}{2^n \: 2} = \frac{1}{2}
    $$

    then

    $$
    \lim_{n \rr \ip} \frac{2^n+n}{2^{n+1}}= \frac{1}{2}
    $$

## 2. The ratio test theorem

<a id="box-theoRAPPORTO-5"></a>

!!! teorema "Theorem 3: Ratio test"

    Let $\{a_n\}$ be a positive sequence (i.e., $a_n > 0$ for every $n$).

    $$
    {\rm If~there~exists~~} \lim_{n \rr \ip} \frac{a_{n+1}}{a_n}=l {\rm~~and~~}
    \begin{cases}
    l < 1, {\rm ~~then~~} a_n \rr 0 \\[2ex]
    l > 1 {\rm~~(or~~} l = \ip), {\rm ~~then~~} a_n \rr \ip
    \end{cases}
    $$

- The previous theorem reduces the study of the limit of a positive sequence  $\{a_n\}$ to the computation of the limit of another sequence, the sequence (of ratios)

    $$
    n \mapsto \frac{a_{n+1}}{a_n}
    $$

    In some cases the latter is easier to study than the original one, as we will see in the examples.

!!! chiave ""

    Note that in the case $l = 1$ the theorem does not allow us to conclude anything.

??? dimostrazione "Proof"

    1. Suppose that:

        $$
        \frac{a_{n+1}}{a_n} \rr  l < 1
        $$

        Then, for every $\varepsilon> 0$, we have, for $n \ge n(\varepsilon)$,

        $$
        \frac{a_{n+1}}{a_n} < l + \varepsilon
        $$

        We can then write the chain of inequalities:

        $$
        a_{n(\varepsilon)+1} < (l + \varepsilon) \: a_{n(\varepsilon)},
        \quad
        a_{n(\varepsilon)+2} < (l + \varepsilon) \: \underbrace{a_{n(\varepsilon)+1}}_{< (l + \varepsilon) \: a_{n(\varepsilon)}} < (l + \varepsilon)^2 a_{n(\varepsilon)}, \quad  \dots
        $$

        hence

        $$
        a_{n(\varepsilon)+k}  <  (l + \varepsilon)^k a_{n(\varepsilon)}
        $$

        Choosing $\varepsilon$ small enough to have $l + \varepsilon < 1$, we have

        $$
        (l + \varepsilon)^k \rr 0 {\rm ~~for~~} k \rr \ip
        $$

        On the other hand, $n(\varepsilon)$ is fixed and consequently $a_{n(\varepsilon)}$ is fixed as well; hence for $k$ large enough the right-hand side (and therefore the left-hand side) is as small as we like. This proves the first claim, that is: $a_n \rr 0$.

    2. Suppose that:

        $$
        \frac{a_{n+1}}{a_n} \rr  l > 1
        $$

        Then, for every $\varepsilon> 0$, we have, for $n \ge n(\varepsilon)$,

        $$
        \frac{a_{n+1}}{a_n} > l - \varepsilon
        $$

        We choose $\varepsilon$ small enough to have $l - \varepsilon > 1$; with steps similar to before we can write

        $$
        a_{n(\varepsilon)+k}  >  (l - \varepsilon)^k a_{n(\varepsilon)} {\rm ~~~~~and ~~~~~} (l - \varepsilon)^k \rr \ip {\rm ~~for~~} k \rr \ip.
        $$

        On the other hand, $n(\varepsilon)$ is fixed and consequently $a_{n(\varepsilon)}$ is fixed as well; hence for $k$ large enough the right-hand side (and therefore the left-hand side) is as large as we like. This proves the second claim, that is: $a_n \rr \ip.$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-texexpbox1-6"></a>

!!! esempio "Example 3: Using the ratio test theorem"

    Let us try to compute, with the ratio test, the limit

    $$
    \lim_{n \rr \ip} \frac{\log n}{n}= \left[ \frac{\infty}{\infty} \right] \qquad {\rm~~(indeterminate~form)}
    $$

    we have

    \begin{align*}
    \frac{a_{n+1}}{a_n} &= \frac{ \log (n +1)}{n+1} \cdot \frac{ n }{\log n} = {\frac{ n }{n+1}} \cdot {\frac{ \log (n +1) }{\log n}}
    \end{align*}

    we have

    $$
    \frac{ n }{n+1} = \frac{ n +1 -1 }{n+1} = 1 - \underbrace{\frac{1}{n+1}}_{\rr 0} {\rm ~~~~hence~~~~} \lim_{n \rr \ip} \frac{ n }{n+1} = 1
    $$

    moreover we have

    $$
    \frac{ \log(n+1) }{\log n} \thicksim \frac{ \log n }{ \log n} = 1 {\rm ~~~~hence~~~~} \lim_{n \rr \ip} \frac{ \log(n+1) }{\log n} = 1
    $$

    where $\log(n+1) \thicksim \log(n)$ by the substitution principle. Now, using the theorem on the algebra of limits, we have

    $$
    \lim_{n \rr \ip} \frac{a_{n+1}}{a_n} = 1 \cdot 1 = 1
    $$

    hence Theorem [Theorem 3](#box-theoRAPPORTO-5) (ratio test) does not allow us, in this case, to conclude anything.

## 3. Hierarchies of infinities for sequences, part 3 and part 4

<a id="box-corolXXX-7"></a>

!!! teorema "Theorem 4: Hierarchy of infinities (part III)"

    \begin{align}
    \lim_{n \rightarrow +\infty} \frac{a^n}{n!} &= 0 \quad
    \end{align}

    for every $a > 0$.

- hence exponentials with base $>0$ go more slowly than the factorial

??? dimostrazione "Proof"

    We apply the ratio test to the sequence

    $$
    b_n = \frac{a^n}{n!}
    {\rm ~~~we~have~~~}
    \frac{b_{n+1}}{b_n} = \frac{a^{n+1}}{(n+1)!} \cdot \frac{n!}{a^n} = \frac{a}{n+1}
    {\rm ~~~~and~~~~}
    \frac{a}{n+1}\rr 0
    $$

    Using the ratio test theorem, we obtain the claim. <span class="qed">□</span>

<a id="box-corolXXX-8"></a>

!!! teorema "Theorem 5: Hierarchy of infinities (part IV)"

    \begin{align}
    \lim_{n \rightarrow +\infty} \frac{n!}{n^n} &= 0 \quad
    \end{align}

- hence the factorial goes more slowly than $n^n$

??? dimostrazione "Proof"

    We apply the ratio test to the sequence

    $$
    b_n = \frac{n!}{n^n}
    $$

    we have

    \begin{align*}
    \frac{b_{n+1}}{b_n} &= \frac{(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!}   = \frac{(n+1) \cdot n!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!} \\[2ex]
    &= \frac{(n+1) \cdot n^n}{(n+1)^n \cdot (n+1)} = \left( \frac{n}{n+1}\right)^n = \frac{1}{\left( 1 + \frac{1}{n}\right)^n}
    \end{align*}

    and since

    $$
    \left( 1 + \frac{1}{n}\right)^n \rr e
    $$

    then

    $$
    \frac{b_{n+1}}{b_n} \rr \frac{1}{e} < 1
    $$

    Using the ratio test theorem, we obtain the claim. <span class="qed">□</span>
