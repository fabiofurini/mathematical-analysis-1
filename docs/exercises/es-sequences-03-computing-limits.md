---
title: "Computing limits of sequences"
---

# Computing limits of sequences

<div class="info-capitolo" markdown>

**Exercises · Limits of sequences** · with worked solutions · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-3-limits.pdf)

</div>

## 1. Computing limits with basic techniques

!!! chiave ""

    If:

    $$
    a_n \rr \ell_a\in \R {\rm ~~~~and~~~~}   b_n \rr \ell_b \in \R,
    $$

    we have:

    $$
    a_n \pm b_n  \rr \ell_a\pm \ell_b, ~~~~~  \frac{a_n}{b_n}  \rr \frac{\ell_a}{\ell_b} ~~~~ (b_n, \ell_b\neq 0, {\rm ~eventually}),
    $$

    $$
    a_n \: b_n  \rr \ell_a\: \ell_b , ~~~~~ a_n^{b_n}  \rr {\ell_a}^{\ell_b} ~~~~ (a_n, \ell_a> 0, {\rm ~eventually}).
    $$

!!! chiave ""

    If:

    $$
    a_n \rr \ell_a\in \R, ~~~b_n \rr \ip {\rm ~~~and~~~} c_n \rr \ip,
    $$

    we have:

    $$
    a_n + b_n  \rr \ell_a \ip = \ip, ~~~a_n - b_n  \rr \ell_a \im = \im,
    $$

    $$
    b_n + c_n \rr \ip \ip = \ip, ~~~ - b_n - c_n \rr \im \im = \im.
    $$

!!! chiave ""

    If:

    $$
    a_n \rr \ell_a\in \R, ~~~b_n \rr 0^+ {\rm ~or~} b_n \rr 0^-  {\rm ~~~and~~~} c_n \rr \infty,
    $$

    we have:

    $$
    a_n \:\: c_n  \rr \ell_a\:\: \infty = \infty ~~ (\ell_a\neq 0), ~~~~ \frac{a_n}{b_n}  \rr \frac{\ell_a}{0} = \infty ~~ (\ell_a\neq 0), ~~~~ \frac{a_n}{c_n}  \rr \frac{\ell_a}{\infty} = 0.
    $$

    The hypothesis that $\{b_n\}$ tends to zero from above or from below (and hence that it eventually has constant sign, with $b_n \neq 0$) is necessary: with $a_n=1$ and $b_n = \frac{(-1)^n}{n}$ we have $\frac{a_n}{b_n} = (-1)^n \: n$, which is irregular.

!!! chiave ""

    The four main indeterminate forms are:

    $$
    [\ip \im], \quad [0 \cdot \infty], \quad \left[\frac{0}{0}\right]  {\rm ~~~~and~~~~} \left[\frac{\infty}{\infty}\right].
    $$

    There are also three other indeterminate forms derived from $[0 \cdot \infty]$:

    $$
    \big[1^{\infty}\big], \quad \big[0^0\big] {\rm ~~~~and~~~~} \big[\infty^0\big].
    $$

!!! chiave ""

    We have:

    $$
    \lim_{n \rightarrow +\infty} n^{\alpha} = 
    \begin{cases}
    +\infty & {\rm if~} \alpha >0\\
    1 & {\rm if~} \alpha = 0\\
    0 & {\rm if~} \alpha < 0
    \end{cases}
    \qquad
    \lim_{n \rightarrow +\infty} a^n = 
    \begin{cases}
    +\infty & {\rm if~} a >1\\
    1 & {\rm if~} a = 1\\
    0 & {\rm if~} |a| < 1\\
    {\rm does~not~exist~} & {\rm if~} a \le -1\\
    \end{cases}
    $$

!!! esercizio "Exercise 1"

    Compute the following limit, which is an (elementary) indeterminate form:

    $$
    \displaystyle\lim_{n\to+\infty}\frac{n^{2}+2n}{n+1} = \left[\frac{\infty}{\infty}\right]
    $$

??? soluzione "Solution"

    $$
    \lim_{n\to+\infty}\frac{n^{2}+2n}{n+1}=\lim_{n\to+\infty}\frac{n^{2} \overbrace{\left(1+ \overbrace{\frac{2}{n}}^{\rr 0}\right)}^{\rr 1}}{n \underbrace{\left(1+ \underbrace{\frac{1}{n}}_{\rr 0}\right)}_{\rr 1}}
    =\lim_{n\to+\infty}\frac{n^{2}}{n}= \lim_{n\to+\infty} n =+\infty.
    $$

!!! esercizio "Exercise 2"

    Compute the following limit, which is an (elementary) indeterminate form:

    $$
    \displaystyle \lim_{n\to+\infty}\frac{n^{4}+5}{n^{5}+7n-1} = \left[\frac{\infty}{\infty}\right]
    $$

??? soluzione "Solution"

    $$
    \lim_{n\to+\infty}\frac{n^{4}+5}{n^{5}+7n-1}=
    \lim_{n\to+\infty}\frac{n^{4}\left(1+\frac{5}{n^{4}}\right)}{n^{5}\left(1+\frac{7}{n^{4}}-\frac{1}{n^{5}}\right)}
    =\lim_{n\to+\infty}\frac{n^{4}}{n^{5}}=\lim_{n\to+\infty}\frac{1}{n}=0.
    $$

!!! esercizio "Exercise 3"

    Compute the following limit, which is an (elementary) indeterminate form:

    $$
    \displaystyle\lim_{n\to+\infty}\frac{1-n^{2}}{(n+2)^{2}} = \left[\frac{\infty}{\infty}\right]
    $$

??? soluzione "Solution"

    $$
    \lim_{n\to+\infty}\frac{1-n^{2}}{(n+2)^{2}}=
    \lim_{n\to+\infty}\frac{-n^{2}\left(1-\frac{1}{n^{2}}\right)}{n^{2}\left(1+\frac{4}{n}+\frac{4}{n^{2}}\right)}
    =\lim_{n\to+\infty}\frac{-n^{2}}{n^{2}}=\lim_{n\to+\infty} - 1=-1.
    $$

!!! esercizio "Exercise 4"

    Compute the following limit, which is an (elementary) indeterminate form:

    $$
    \displaystyle\lim_{n\to+\infty}\sqrt{n^{2}+1}-\sqrt{n} = [\ip \im]
    $$

??? soluzione "Solution"

    $$
    \lim_{n\to+\infty}\sqrt{n^{2}+1}-\sqrt{n}=\lim_{n\to+\infty}n\left( 
    \underbrace{\sqrt{1+\underbrace{\frac{1}{n^{2}}}_{\rr 0}}}_{\rr 1}
    -\underbrace{\sqrt{\frac{1}{n}}}_{\rr 0}\right)=
    \lim_{n\to+\infty}n=+\infty.
    $$

??? soluzione "Solution"

    <strong>Alternative method:</strong>  multiplying and dividing by $\sqrt{n^2+1} + \sqrt{n}$ we obtain

    $$
    \frac{(\sqrt{n^{2}+1}-\sqrt{n})(\sqrt{n^{2}+1}+\sqrt{n})}{\sqrt{n^{2}+1}+\sqrt{n}}=\frac{\left(\sqrt{n^2+1}\right)^2 - \left(\sqrt{n}\right)^2}{\sqrt{n^2+1} + \sqrt{n}} = \frac{n^2 + 1 - n}{\sqrt{n^2+1} + \sqrt{n}},
    $$

    recalling that $(a-b)(a+b)=a^2-b^2$.  Moreover, we have

    $$
    \frac{n^2 + 1 - n}{\sqrt{n^2+1} + \sqrt{n}} 
    = \frac{n^2 \left(1 + \frac{1}{n^2} - \frac{1}{n} \right)}{\sqrt{n^2 \left(1+\frac{1}{n^2}\right)} + \sqrt{n}} 
    = \frac{n^2 \left(1 + \frac{1}{n^2} - \frac{1}{n} \right)}{n \: \sqrt{ \left(1+\frac{1}{n^2}\right)} + n^{\frac{1}{2}} }
    = \frac{n^2 \left(1 + \frac{1}{n^2} - \frac{1}{n} \right)}
    {n \: \left( \sqrt{ \left(1+ {\frac{1}{n^2}}\right)} + {\frac{1}{n^{1/2}}}  \right)}.
    $$

    Hence

    $$
    \lim_{n \rr \ip} \sqrt{n^{2}+1}-\sqrt{n}=  \lim_{n\to+\infty} n \: 
    \frac{ \overbrace{\left(1 + \frac{1}{n^2} - \frac{1}{n} \right)}^{\rr 1}}
    { \underbrace{\left( \sqrt{ \left(1+\frac{1}{n^2}\right)} + {\frac{1}{n^{1/2}}}  \right)}_{\rr 1}}=\lim_{n\to+\infty}n=+\infty.
    $$

!!! esercizio "Exercise 5"

    Compute the following limit, which is an (elementary) indeterminate form:

    $$
    \displaystyle \lim_{n\to+\infty}e^{n}-2^{n} = [\ip \im]
    $$

??? soluzione "Solution"

    $$
    \lim_{n\to+\infty}e^{n}-2^{n}= \lim_{n\to+\infty}e^{n} \underbrace{\left(1-\underbrace{\left(\frac{2}{e}\right)^{n}}_{\rr 0}\right)}_{\rr 1}= \lim_{n\to+\infty}e^{n} =+\infty
    $$

    since

    $$
    e^{n}\to+\infty {\rm ~~and~~} \left(\frac{2}{e}\right)^{n}\to0.
    $$

!!! esercizio "Exercise 6"

    Compute the following limit, which is an (elementary) indeterminate form:

    $$
    \displaystyle \lim_{n\to+\infty}3^{n}+4^{n}-5^{n} = [\ip \ip \im] = [\ip \im]
    $$

??? soluzione "Solution"

    $$
    \lim_{n\to+\infty}3^{n}+4^{n}-5^{n}= 
    \lim_{n\to+\infty}-5^{n} \underbrace{\left(1- \underbrace{\left(\frac{3}{5}\right)^{n}}_{\rr 0}- \underbrace{\left(\frac{4}{5}\right)^{n}}_{\rr 0}\right)}_{\rr 1}=\lim_{n\to+\infty}-5^{n}=-\infty
    $$

    since

    $$
    -5^{n}\to-\infty, ~~~ \left(\frac{3}{5}\right)^{n}\to 0 {\rm ~~and~~} \left(\frac{4}{5}\right)^{n}\to0.
    $$

!!! esercizio "Exercise 7"

    Compute the following simple limit

    $$
    \displaystyle \lim_{n\to+\infty}n^{\sqrt{2}}
    $$

??? soluzione "Solution"

    For every $\alpha>0$, even irrational, $\lim_{n\to+\infty}n^{\alpha}=+\infty$.

!!! esercizio "Exercise 8"

    Compute the following simple limit

    $$
    \displaystyle \lim_{n\to+\infty}n^{-e}
    $$

??? soluzione "Solution"

    $$
    \lim_{n\to+\infty}n^{-e}=\lim_{n\to+\infty}\frac{1}{n^{e}}=0.
    $$

!!! esercizio "Exercise 9"

    Compute the following simple limit

    $$
    \displaystyle \lim_{n\to+\infty} \left( \frac{3 \: n + 5}{ n^2 + 120}\right)^{2\:n}
    $$

??? soluzione "Solution"

    We have

    $$
    \frac{3 \: n + 5}{ n^2 + 120} = \frac{ 3 \: n \left(1 + \frac{5}{3 \: n} \right)}{n^2 \: \left( 1 + \frac{120}{n^2} \right)} = \frac{3}{n} \: \frac{\left(1 + \frac{5}{3 \: n} \right)}{ \left( 1 + \frac{120}{n^2} \right)}  \rr 0 {\rm ~~ and ~~} 2\:n \rr \ip.
    $$

    Hence

    $$
    \lim_{n\to+\infty} \left( \frac{3 \: n + 5}{ n^2 + 120}\right)^{2\:n} = 0^{\ip} =0.
    $$

!!! esercizio "Exercise 10"

    Compute the following simple limit

    $$
    \displaystyle \lim_{n\to+\infty} \left( \frac{10 \: n^2 - 5 \:n}{ n^3 - 8}\right)^{-3\:n + 8}
    $$

??? soluzione "Solution"

    We have

    $$
    \frac{10 \: n^2 - 5 \:n}{ n^3 - 8} = \frac{ 10 \: n^2 \left(1 - \frac{5 \:n}{10 \: n^2} \right)}{n^3 \: \left( 1 - \frac{8}{n^3} \right)} = \frac{10}{n} \: \frac{\left(1 - \frac{1}{2 \: n} \right)}{ \left( 1 - \frac{8}{n^3} \right)}  \rr 0 {\rm ~~ and ~~} -3\:n + 8 \rr \im.
    $$

    Hence

    $$
    \lim_{n\to+\infty} \left( \frac{10 \: n^2 - 5 \:n}{ n^3 - 8}\right)^{-3\:n + 8} = 0^{\im} = \frac{1}{0^{\ip}} = \frac{1}{0}= \ip.
    $$

## 2. Computing limits using the hierarchy of infinities

!!! chiave ""

    For every $a>1$ and $\alpha > 0$ we have:

    $$
    \lim_{n \rightarrow +\infty} \frac{\log_a n}{n^{\alpha}} = 0, \quad
    \lim_{n \rightarrow +\infty} \frac{n^{\alpha}}{a^n}  = 0,
    $$

    $$
    \lim_{n \rightarrow +\infty} \frac{a^n}{n!} = 0, \quad 
    \lim_{n \rightarrow +\infty} \frac{n!}{n^n} = 0. \quad
    $$

    Hence the following infinities are listed in increasing order:

    $$
    \log n,~~~ n^{\alpha},~~~ a^{n},~~~ n!,~~~ n^{n}.
    $$

!!! esercizio "Exercise 11"

    Compute the limit of the following sequence, if it exists

    $$
    a_n = \frac{{2^{1/n}} + n^2 + 3^{-n}}{\log^6 n + 2 + n}
    $$

??? soluzione "Solution"

    Consider the numerator; we have:

    $$
    {2^{1/n}} \rr 1, \quad n^2 \rr \ip, \quad  3^{-n} \rr 0
    $$

    The power of $n$ with the highest degree is $n^2$, and moreover we have

    $$
    \frac{3^{-n}}{n^2}  = \frac{1}{3^n \; n^2} {\rm ~~~hence~~~} \frac{3^{-n}}{n^2} \rr 0 {\rm ~~~~~and~~}\frac{2^{1/n}}{n^2}  \rr  0.
    $$

    Consider the denominator; we have:

    $$
    \log^6 n \rr \ip, \quad  2 \rr 2, \quad n \rr \ip
    $$

    By the hierarchy of infinities theorem, we have

    $$
    \frac{\log^6 n}{n}= \left(\underbrace{\frac{\log n}{n^{1/6}}}_{\rr 0}\right)^{6} \rr 0.
    $$

    We therefore factor out $n^2$ in the numerator and $n$ in the denominator and obtain:

    $$
    \frac{n^2 \left(1+ \frac{2^{1/n}}{n^2} + \frac{3^{-n}}{n^2} \right)}{n \left(1+ \frac{\log^6 n}{n} + \frac{2}{n}\right)} = n \; \frac{ \left(1+ \overbrace{\frac{2^{1/n}}{n^2}}^{\rr 0} + \overbrace{\frac{3^{-n}}{n^2}}^{\rr 0} \right)}{\left(1+ \underbrace{\frac{\log^6 n}{n}}_{\rr 0} + \underbrace{\frac{2}{n}}_{\rr 0} \right)}
    $$

    $$
    \lim_{n \rr \ip} \frac{{2^{1/n}} + n^2 + 3^{-n}}{\log^6 n + 2 + n} = \lim_{n \rr \ip } n \; \overbrace{\frac{ \left(1+ \frac{2^{1/n}}{n^2} + \frac{3^{-n}}{n^2} \right)}{\left(1+ \frac{\log^6 n}{n} + \frac{2}{n}\right)}}^{\rr 1} = \ip
    $$

!!! esercizio "Exercise 12"

    Compute the limit of the following sequence, if it exists

    $$
    a_n = \frac{ 3 \: n^3 + 3^n + \log n}{\log^6 n + 2^{2\:n} + n^5}
    $$

??? soluzione "Solution"

    Consider the numerator; we have:

    $$
    3 \: n^3 \rr \ip, \quad 3^n \rr \ip, \quad  \log n \rr \ip
    $$

    that is, a sum of sequences tending to infinity. We also have:

    $$
    \frac{3 \: n^3}{3^n}  \rr 0 {\rm ~~~and ~~~} \frac{\log n}{3^n} \rr 0,
    $$

    by the hierarchy of infinities theorem. Hence the principal part is $3^n$. Consider the denominator; we have:

    $$
    \log^6 n \rr \ip, \quad 2^{2\:n} =4^{n} \rr \ip, \quad  n^5 \rr \ip
    $$

    that is, a sum of sequences tending to infinity. We also have:

    $$
    \frac{\log^6 n}{4^{n}}  \rr 0 {\rm ~~~and ~~~} \frac{n^5}{4^{n}} \rr 0,
    $$

    by the hierarchy of infinities theorem. Hence the principal part is $4^n$.

    We therefore factor out $3^n$ in the numerator and $4^n$ in the denominator and obtain:

    $$
    \frac{3^n \left(1+ \frac{3 \: n^3}{3^n} + \frac{\log n}{3^n} \right)}{4^n \left(1+ \frac{\log^6 n}{4^{n}} + \frac{n^5}{4^{n}} \right)} = \left( \frac{3}{4}\right)^n \; \frac{ \left(1+ \overbrace{\frac{3 \: n^3}{3^n}}^{\rr 0} + \overbrace{\frac{\log n}{3^n}}^{\rr 0} \right)}{\left(1+ \underbrace{\frac{\log^6 n}{4^{n}}}_{\rr 0} + \underbrace{\frac{n^5}{4^{n}}}_{\rr 0} \right)}
    $$

    hence

    $$
    \lim_{n \rr \ip} \frac{ 3 \: n^3 + 3^n + \log n}{\log^6 n + 2^{2\:n} + n^5} = \lim_{n \rr \ip } \left( \frac{3}{4}\right)^n \; \underbrace{\frac{ \left(1+ \frac{3 \: n^3}{3^n} + \frac{\log n}{3^n} \right)}{\left(1+ \frac{\log^6 n}{4^{n}} + \frac{n^5}{4^{n}} \right)}}_{\rr 1} = 0
    $$

!!! esercizio "Exercise 13"

    Compute the following simple limit

    $$
    \displaystyle \lim_{n\to+\infty}\sqrt[n]{n^{2}}
    $$

??? soluzione "Solution"

    We have

    $$
    \sqrt[n]{n} = n^{\frac{1}{n}} = e^{\log n^{1/n}} = e^{ \frac{\log n}{n}}
    $$

    and, studying the sequence in the exponent,

    $$
    a_n = \frac{\log n}{n} {\rm ~~~we~have~~~} a_n \rr 0
    $$

    thanks to the hierarchy of infinities theorem. Hence we have:

    $$
    \lim_{n \rr \ip} \sqrt[n]{n}= \lim_{n \rr \ip} e^{ \frac{\log n}{n}} =1.
    $$

    Consequently

    $$
    \lim_{n\to+\infty}\sqrt[n]{n^{2}}=\lim_{n\to+\infty}\left(\sqrt[n]{n}\right)^{2}=1^{2}=1.
    $$

## 3. Computing limits using asymptotic estimates

!!! chiave ""

    We have $~~ a_n  \thicksim b_n~~$ if $~~ \frac{a_n}{b_n} \rr 1 ~~$ or if $~~a_n = b_n \: c_n ~~$  with $~~ c_n \rr 1.$

    Moreover, we have  $~~ a_n + b_n \thicksim a_n ~~$ if $~~ \frac{b_n}{a_n} \rr 0$

!!! esercizio "Exercise 14"

    Compute the following limit

    $$
    \lim_{n\to+\infty}\frac{2^{n}+n^{2}+1}{5^{n}+2^{n}+n}
    $$

??? soluzione "Solution"

    We have

    $$
    2^{n}+n^{2}+1 \thicksim 2^{n} {\rm ~~since~~} \frac{n^2}{2^{n}} \rr 0 {~~and~~} \frac{1}{2^{n}} \rr 0
    $$

    and

    $$
    5^{n}+2^{n}+n \thicksim 5^{n} {\rm ~~since~~} \frac{2^n}{5^{n}} =  \left(\frac{2}{5}\right)^{n} \rr 0 {~~and~~} \frac{n}{5^{n}} \rr 0
    $$

    hence

    $$
    \lim_{n\to+\infty}\frac{2^{n}+n^{2}+1}{5^{n}+2^{n}+n}=\lim_{n\to+\infty}\frac{2^{n}}{5^{n}}=
    \lim_{n\to+\infty}\left(\frac{2}{5}\right)^{n}=0
    $$

!!! esercizio "Exercise 15"

    Compute the following limit

    $$
    \lim_{n\to+\infty}\frac{n!-5^{n}}{7^{n}}
    $$

??? soluzione "Solution"

    We have

    $$
    n!-5^{n} \thicksim n! {\rm ~~since~~} \frac{5^n}{n!} \rr 0
    $$

    hence

    $$
    \lim_{n\to+\infty}\frac{n!-5^{n}}{7^{n}}=\lim_{n\to+\infty}\frac{n!}{7^{n}}=+\infty
    $$

!!! esercizio "Exercise 16"

    Compute the following limit

    $$
    \lim_{n\to+\infty}\frac{2^{3n-1}-n^{2}}{(2n)!-5^{n}}
    $$

??? soluzione "Solution"

    We have

    $$
    2^{3n-1}-n^{2} \thicksim 2^{3n-1}  {\rm ~~since~~} - \frac{n^2}{2^{3n-1}} \rr 0
    $$

    and

    $$
    (2n)!-5^{n} \thicksim(2n)! {\rm ~~since~~} -\frac{5^{n}}{(2n)!} \rr 0
    $$

    hence

    $$
    \lim_{n\to+\infty}\frac{2^{3n-1}-n^{2}}{(2n)!-5^{n}}=\lim_{n\to+\infty}\frac{2^{3n-1}}{(2n)!}=0
    $$

!!! esercizio "Exercise 17"

    Compute the limit of the following sequence, if it exists

    $$
    \lim_{n \rr \ip}  \frac{ 3^n}{ n!\: n^{1/n}}
    $$

??? soluzione "Solution"

    We have

    $$
    n!\: n^{1/n} \thicksim n!  {\rm ~~since~~}  n^{1/n} = \sqrt[n]{n} \rr 1
    $$

    because

    $$
    n^{1/n} = e^{\log n^{1/n}} = e^{\frac{\log n}{n}} {\rm ~~ and~~} \frac{\log n}{n} \rr 0.
    $$

    Hence

    $$
    \lim_{n \rr \ip} \frac{ 3^n}{ n!\: n^{1/n}} = \lim_{n \rr \ip} \frac{ 3^n}{ n! } = 0.
    $$

!!! esercizio "Exercise 18"

    Compute the limit of the following sequence, if it exists

    $$
    \lim_{n \rr \ip}  \frac{\log{(1+e^n)}}{\sqrt{1+n^2}}
    $$

??? soluzione "Solution"

    Observing that

    $$
    \log{(1+e^n)} \thicksim \log(e^n)=n\log{e}=n
    $$

    we have

    $$
    \lim_{n \rr \ip}  \frac{\log{(1+e^n)}}{\sqrt{1+n^2}} = \lim_{n \rr \ip} \frac{n}{\sqrt{1+n^2}} =  \lim_{n \rr \ip} \sqrt{\frac{n^2}{1+n^2}} =1
    $$

    because

    $$
    \frac{n^2}{1+n^2} \rr 1.
    $$

!!! esercizio "Exercise 19"

    Compute the limit of the following sequence, if it exists

    $$
    \lim_{n \rr \ip}  \frac{n+1}{\log_2{(3+n^n)}}
    $$

??? soluzione "Solution"

    Observing that

    $$
    \log_2{(3+n^n)} \thicksim \log_2(n^n)=n\log_2{n}
    $$

    we have

    $$
    \lim_{n \rr \ip} \frac{n+1}{\log_2{(3+n^n)}} = \lim_{n \rr \ip} \frac{n+1}{n\log_2{n}} = 0
    $$

    because

    $$
    \frac{n+1}{n} \rr 1  {\rm ~~~~and~~~~} \frac{1}{\log_2{n}} \rr 0.
    $$

## 4. Computing limits with the sequence converging to Euler's number $e$

!!! chiave ""

    For indeterminate forms $1^{\pm\infty}$, one can use:

    $$
    \left(1+\frac{1}{a_{n}}\right)^{a_{n}}\to e\ \ \ {\rm as}\ a_{n}\to\pm\infty.
    $$

!!! esercizio "Exercise 20"

    Compute the following limit

    $$
    \lim_{n\to+\infty}\left(\frac{n-1}{n-3}\right)^{n}
    $$

??? soluzione "Solution"

    We have

    $$
    \left(\frac{n-1}{n-3}\right)^{n} = \left(\frac{n-3-1+3}{n-3}\right)^{n} = \left( 1 + \frac{2}{n-3}\right)^{n} =  \left( 1 + \frac{1}{ \frac{n-3}{2}}\right)^{n}
    $$

    hence

    $$
    \lim_{n\to+\infty}\left(\frac{n-1}{n-3}\right)^{n}=
    \lim_{n\to+\infty}\left[\left(1+\frac{1}{\frac{n-3}{2}}\right)^{\frac{n-3}{2}}\right]^{\frac{2n}{n-3}}=e^{2},
    $$

    since

    $$
    \left(1+\frac{1}{\frac{n-3}{2}}\right)^{\frac{n-3}{2}} \rr e, \quad  2 \: \left( \frac{n}{n-3} \right)= 2 \:\left(  \frac{n-3 + 3}{n-3} \right) = 2 \: \left(1 + \underbrace{\frac{3}{n-3}}_{\rr 0} \right) \rr 2
    $$

    and

    $$
    \frac{n-3}{2} \rr \ip.
    $$

!!! esercizio "Exercise 21"

    Compute the following limit

    $$
    \lim_{n\to+\infty}\left(\frac{n^{2}+1}{n^{2}}\right)^{n}
    $$

??? soluzione "Solution"

    $$
    \lim_{n\to+\infty}\left(\frac{n^{2}+1}{n^{2}}\right)^{n}=
    \lim_{n\to+\infty}\left[\left(1+\frac{1}{n^{2}}\right)^{n^{2}}\right]^{\frac{1}{n}}=e^{0}=1
    $$

    since

    $$
    \left(1+\frac{1}{n^2}\right)^{n^2} \rr e, \quad  \frac{1}{n} \rr 0
    $$

    and

    $$
    n^2 \rr \ip.
    $$

!!! esercizio "Exercise 22"

    Compute the following limit

    $$
    \lim_{n\to+\infty}\left(\frac{2n-5}{2n}\right)^{-n}
    $$

??? soluzione "Solution"

    $$
    \lim_{n\to+\infty}\left(\frac{2n-5}{2n}\right)^{-n}=
    \lim_{n\to+\infty}\left[\left(1+\frac{1}{-\frac{2n}{5}}\right)^{-\frac{2n}{5}}\right]^{\frac{5}{2}}=\sqrt{e^{5}}.
    $$

    since

    $$
    \left(1+\frac{1}{-\frac{2n}{5}}\right)^{-\frac{2n}{5}}  \rr e {\rm ~~~~and~~~~} -\frac{2n}{5} \rr \im.
    $$

!!! esercizio "Exercise 23"

    Compute the following limit

    $$
    \lim_{n\to+\infty}\frac{n^{n-1}}{(n-1)^n}
    $$

??? soluzione "Solution"

    We have

    $$
    \frac{n^{n-1}}{(n-1)^n}=
    \frac{1}{n}\left(\frac{n}{n-1}\right)^n=\frac{1}{n}\left(\frac{n-1}{n}\right)^{-n}=\frac{1}{n}\left(1+\frac{1}{-n}\right)^{-n}
    $$

    hence

    $$
    \lim_{n\to+\infty}\frac{n^{n-1}}{(n-1)^n}=\lim_{n\to+\infty}\frac{1}{n}\left(1+\frac{1}{-n}\right)^{-n}=0
    $$

    since

    $$
    \left(1+\frac{1}{-n}\right)^{-n}  \rr e {\rm ~~~~and~~~~} \frac{1}{n} \rr 0.
    $$

!!! esercizio "Exercise 24"

    Compute the limit of the following sequence, if it exists

    $$
    \lim_{n \rr \ip} \left( \frac{n^2 +2}{n^2 + n +1} \right)^{2\: n}
    $$

??? soluzione "Solution"

    Since

    $$
    \left( \frac{n^2 +2}{n^2 + n +1} \right) \rr 1 {\rm ~~and~~} 2\: n \rr \ip
    $$

    we have an indeterminate form of type $[1^{+\infty}]$.

    Since

    $$
    \left( \frac{n^2 +2}{n^2 + n +1} \right)^{2\: n}
    =
    \left( \frac{n^2 + n +1 - n +1}{n^2 + n +1} \right)^{2\: n}
    =
    \left( 1 + \frac{- n +1}{n^2 + n +1} \right)^{2\: n},
    $$

    we can therefore write

    $$
    \left( 1 + \frac{- n +1}{n^2 + n +1} \right)^{2\: n}
     =
      \left( 1 + \frac{1}{\frac{n^2 + n +1}{- n +1}} \right)^{2\: n}
      =
     \left[\left( 1 + \frac{1}{\frac{n^2 + n +1}{- n +1}} \right)^{\frac{n^2 + n +1}{- n +1}}\right]^{ \left( \frac{- n +1}{n^2 + n +1} \right) \: 2\: n} 
    .
    $$

    Hence

    $$
    \lim_{n\to+\infty}\left( \frac{n^2 +2}{n^2 + n +1} \right)^{2\: n}=
    \lim_{n\to+\infty}\left[
    \left( 1 + \frac{1}{\frac{n^2 + n +1}{- n +1}} \right)^{\frac{n^2 + n +1}{- n +1}}
    \right]^{ \left( \frac{- n +1}{n^2 + n +1} \right) \: 2\: n} =e^{-2},
    $$

    since

    $$
    \left( 1 + \frac{1}{\frac{n^2 + n +1}{- n +1}} \right)^{\frac{n^2 + n +1}{- n +1}} \rr e, \quad \left( \frac{- n +1}{n^2 + n +1} \right) \: 2\: n = \left( \frac{ \overbrace{- 2 \: n^2 + 2\: n}^{\thicksim -2 \:n ^2}}{ \underbrace{n^2 + n +1}_{\thicksim  n ^2}} \right)  \rr -2
    $$

    and

    $$
    \frac{n^2 + n +1}{- n +1} = \frac{ n^2 \overbrace{\left(1 + \frac{1}{n} + \frac{1}{n^2}\right)}^{\rr 1}}{- n \underbrace{\left( 1 - \frac{1}{n}\right)}_{\rr 1}} \rr \im.
    $$

## 5. Computing limits with the comparison theorem

!!! chiave ""

    - If $c_n \rr 0$ and $|b_n|\le c_n$ eventually, then $b_n \rr 0$.

    - If $c_n \rr 0$ and $b_n$ is bounded (even if not convergent), then $c_n \: b_n \rr 0$. The product of an infinitesimal sequence and a bounded one is infinitesimal.

    - A sum of infinities and bounded sequences is asymptotically equivalent to the infinity of highest order.

!!! esercizio "Exercise 25"

    Compute the following limit

    $$
    \lim_{n\to+\infty}\frac{n+\sin n}{\cos n+\log n}
    $$

??? soluzione "Solution"

    We have

    $$
    n+\sin n \thicksim n  {\rm ~~since~~}  \frac{\sin n}{n} \rr 0
    $$

    the product of an infinitesimal sequence $\{\frac{1}{n}\}$ and a bounded one $\{\sin n\}$.  Moreover,

    $$
    \cos n+\log n\thicksim \log n  {\rm ~~since~~} \frac{\cos n}{\log n} \rr 0
    $$

    the product of an infinitesimal sequence $\left\{\frac{1}{\log n} \right\}$ and a bounded one $\{\cos n\}$.   Hence

    $$
    \lim_{n\to+\infty}\frac{n+\sin n}{\cos n+\log n}=\lim_{n\to+\infty}\frac{n}{\log n}=+\infty
    $$

!!! esercizio "Exercise 26"

    Compute the limit of the following sequence, if it exists

    $$
    \lim_{n \rr \ip} \frac{ n \: \sin n + \sin n^2}{ n^2 +1}
    $$

??? soluzione "Solution"

    We have

    $$
    \frac{ n \: \sin n + \sin n^2}{ n^2 +1} 
    =
     \frac{ n \: \sin n }{ n^2 +1} +  \frac{  \sin n^2}{ n^2 +1}
    $$

    and

    $$
    \frac{ n  }{ n^2 +1} \: \sin n \rr 0 {\rm~~since~} \frac{ n  }{ n^2 +1} \rr 0 {~~and~~} \sin n  {\rm ~~is~bounded.}
    $$

    Moreover

    $$
    \frac{ 1  }{ n^2 +1} \: \sin n^2 \rr 0 {\rm~~since~} \frac{ 1  }{ n^2 +1} \rr 0 {~~and~~} \sin n^2  {\rm ~~is~bounded.}
    $$

    Hence

    $$
    \lim_{n \rr \ip} \frac{ n \: \sin n + \sin n^2}{ n^2 +1} =  \lim_{n \rr \ip} 
    \underbrace{\frac{ n \: \sin n }{ n^2 +1}}_{\rr 0} +  \underbrace{\frac{  \sin n^2}{ n^2 +1}}_{\rr 0}  = 0
    $$

??? soluzione "Solution"

    Alternative method.

    Note that the sequences $\{\sin n\}$ and $\{ \sin n^2\}$ are irregular but bounded.  Hence we can write the following upper bound

    $$
    \left |  \frac{ n \: \sin n + \sin n^2}{ n^2 +1} \right| \le \frac{n+1}{n^2 + 1}
    $$

    and we have

    $$
    \lim_{n \rr \ip} \frac{n+1}{n^2 + 1} = \lim_{n \rr \ip} \frac{n}{n^2} = \lim_{n \rr \ip} \frac{1}{n} = 0.
    $$

    Hence, by the comparison theorem, we have:

    $$
    \lim_{n \rr \ip} \frac{ n \: \sin n + \sin n^2}{ n^2 +1}  = 0
    $$

## 6. Computing limits with the ratio test

!!! chiave ""

    Given a positive sequence ($a_n > 0$ for every $n$):

    $$
    {\rm if~there~exists~~} \lim_{n \rr \ip} \frac{a_{n+1}}{a_n}=\ell
    {\rm ~~and~~} \ell < 1, {\rm ~~then~~} a_n \rr 0,
    $$

    $$
    {\rm if~there~exists~~} \lim_{n \rr \ip} \frac{a_{n+1}}{a_n}=\ell
    {\rm ~~and~~} \ell > 1 {\rm~~(or~~} \ell = \ip), {\rm ~~then~~} a_n \rr \ip.
    $$

!!! esercizio "Exercise 27"

    Compute the limit of the following sequence, if it exists

    $$
    \lim_{n \rr \ip}   \frac{3^{n-1}}{n\:(n+1)!}
    $$

??? soluzione "Solution"

    Since this is a sequence with positive terms whose general term is the ratio of simpler sequences of exponential and factorial type, it is natural to apply the ratio test. 

    We therefore compute:

    $$
    \frac{a_{n+1}}{a_n} = \frac{\frac{3^{n}}{(n+1) \cdot (n+2)!}}{\frac{3^{n-1}}{n\:(n+1)!}} = \frac{3^{n}}{ (n+1) \cdot  \underbrace{(n+2)!}_{=(n+1)! \cdot (n+2)}} \: \frac{n\:(n+1)!}{3^{n-1}}=
    $$

    $$
    = \frac{3\:n}{(n+1)(n+2)} = \frac{3\:n}{n^2 + 2 \:n + n + 2}  = \frac{3\:n}{n^2 \left(  1 + \frac{3}{n} + \frac{2}{n^2}\right)}= \frac{3}{n \left(  1 + \frac{3}{n} + \frac{2}{n^2}\right)}
    $$

    We have:

    $$
    \lim_{n \rr \ip} \frac{a_{n+1}}{a_n} =\lim_{n \rr \ip}   \frac{3}{n \left(  1 + \frac{3}{n} + \frac{2}{n^2}\right)} =0
    $$

    Hence, by the ratio test:

    $$
    \lim_{n \rr \ip}   \frac{3^{n-1}}{n\:(n+1)!} = 0
    $$

!!! esercizio "Exercise 28"

    Compute the limit of the following sequence, if it exists

    $$
    \lim_{n \rr \ip}   \frac{n^3 \: 2^n}{n!}
    $$

??? soluzione "Solution"

    We have a positive sequence; we compute:

    $$
    \frac{a_{n+1}}{a_n} = \frac{(n+1)^3 \: 2^{(n+1)}}{(n+1)!} \frac{n!}{n^3 \: 2^n} = \underbrace{\left(\frac{n+1}{n} \right)^3}_{\rr 1} \frac{2}{n+1} \thicksim \frac{2}{n+1}
    $$

    We therefore have:

    $$
    \lim_{n \rr \ip} \frac{a_{n+1}}{a_n} = \lim_{n \rr \ip}   \frac{2}{n+1} =0
    $$

    Then, by the ratio test:

    $$
    \lim_{n \rr \ip}   \frac{n^3 \: 2^n}{n!} = 0
    $$

!!! esercizio "Exercise 29"

    Compute the limit of the following sequence, if it exists

    $$
    \lim_{n \rr \ip}   \frac{n^n}{(n+1)!}
    $$

??? soluzione "Solution"

    We have a positive sequence; we compute:

    $$
    \frac{a_{n+1}}{a_n} = \frac{(n+1)^{n+1}}{(n+2)!} \frac{(n+1)!}{n^n} = \underbrace{\frac{n+1}{n+2}}_{\rr 1} \left( \frac{n+1}{n}\right)^n \thicksim \left( 1 + \frac{1}{n}\right)^n
    $$

    We therefore have:

    $$
    \lim_{n \rr \ip} \frac{a_{n+1}}{a_n} = \lim_{n \rr \ip} \left( 1 + \frac{1}{n}\right)^n = e   > 1
    $$

    Then, by the ratio test:

    $$
    \lim_{n \rr \ip}   \frac{n^n}{(n+1)!} = \ip
    $$

!!! esercizio "Exercise 30"

    Compute the limit of the following sequence, if it exists

    $$
    \lim_{n \rr \ip}   \frac{n^{\frac{1}{n}}\: 2^n}{(n+1)!}
    $$

??? soluzione "Solution"

    We have:

    $$
    \frac{ \overbrace{n^{\frac{1}{n}}}^{\rr 1}\: 2^n}{(n+1)!} \thicksim \frac{2^n}{(n+1)!}  \equiv b_n
    $$

    We now have the positive sequence $\{b_n\}$; we compute:

    $$
    \frac{b_{n+1}}{b_n} = \frac{2^{n+1}}{(n+2)!} \frac{(n+1)!}{2^n} = \frac{2}{n+2}
    $$

    We therefore have:

    $$
    \lim_{n \rr \ip} \frac{b_{n+1}}{b_n} = \lim_{n \rr \ip} \frac{2}{n+2} = 0
    $$

    Then, by the ratio test:

    $$
    \lim_{n \rr \ip}   \frac{n^{\frac{1}{n}}\: 2^n}{(n+1)!} = 0
    $$

## 7. Discussion depending on a parameter

!!! esercizio "Exercise 31"

    Compute, as the parameter $\alpha \in \mathbb{R}$ varies, the limit of the sequence

    $$
    \lim_{n \rr \ip}   \frac{5^{3 \alpha n}}{2^{3n+1}}
    $$

??? soluzione "Solution"

    We have

    $$
    \frac{5^{3 \alpha n}}{2^{3n+1}} = \frac{1}{2}\left(\frac{5^\alpha}{2}\right)^{3n}
    $$

    hence

    $$
    \lim_{n \rr \ip}   \frac{5^{3 \alpha n}}{2^{3n+1}}=\lim_{n \rr \ip} \frac{1}{2}\left(\frac{5^\alpha}{2}\right)^{3n} = \frac{1}{2} \lim_{n \rr \ip}\left(\frac{5^\alpha}{2}\right)^{3n}=\ell
    $$

    At this point, we can study three cases:

    - <em>Case 1</em>

        $$
        \frac{5^\alpha}{2}>1 \Longleftrightarrow \alpha>\log_5 2
        $$

        then $\ell=+\infty$;

    - <em>Case 2</em>

        $$
        0<\frac{5^\alpha}{2}<1 \Longleftrightarrow \alpha<\log_5 2
        $$

        then $\ell=0$;

    - <em>Case 3</em>

        $$
        \frac{5^\alpha}{2}=1 \Longleftrightarrow \alpha=\log_5 2
        $$

        then $\ell=\frac{1}{2}$.

    In conclusion:

    $$
    \lim_{n \rr \ip}   \frac{5^{3 \alpha n}}{2^{3n+1}}=
    \begin{cases}
    +\infty & \text{if } \alpha > \log_5 2 \\
    \frac{1}{2} & \text{if } \alpha = \log_5 2\\
    0 & \text{if } \alpha < \log_5 2
    \end{cases}
    $$

!!! esercizio "Exercise 32"

    Compute, as the parameter $\alpha \in \mathbb{R}$ varies, the limit of the sequence

    $$
    \lim_{n \rr \ip}   (e^{(2-\alpha)\:n}+1)\log{\left(1+\frac{1}{e^n}\right)}
    $$

??? soluzione "Solution"

    We have

    $$
    \begin{split}
    a_n=(e^{(2-\alpha)\:n}+1)\log{\left(1+\frac{1}{e^n}\right)} &= (e^{(2-\alpha)\:n}+1)\frac{e^n}{e^n}\log{\left(1+\frac{1}{e^n}\right)} \\
    &= (e^{(2-\alpha)\:n}+1)\frac{1}{e^n}\log{\left(1+\frac{1}{e^n}\right)^{e^n}} \\ &\thicksim (e^{(2-\alpha)\:n}+1)\frac{1}{e^n}
    \end{split}
    $$

    since

    $$
    \left(1+\frac{1}{e^n}\right)^{e^n}  \rr e {\rm ~~~~and~~~~} \log{\left(1+\frac{1}{e^n}\right)^{e^n}} \rr 1
    $$

    Hence

    $$
    \lim_{n \rr \ip}   a_n =  \lim_{n \rr \ip} (e^{(2-\alpha)\:n}+1)\frac{1}{e^n}
    $$

    On the other hand

    $$
    (e^{(2-\alpha)\:n}+1)\frac{1}{e^n} =  e^{(1-\alpha)n}+e^{-n} \rr \begin{cases}    
    +\infty & \text{if } 1-\alpha>0 \\
    1 & \text{if } 1-\alpha=0\\
    0 & \text{if } 1-\alpha<0
    \end{cases}
    $$

    Summarizing, we obtain

    $$
    \lim_{n \rr \ip}   (e^{(2-\alpha)\:n}+1)\log{\left(1+\frac{1}{e^n}\right)} = \begin{cases}    
    +\infty & \text{if } \alpha<1 \\
    1 & \text{if } \alpha=1\\
    0 & \text{if } \alpha>1
    \end{cases}
    $$

## 8. Multiple choice exercises

!!! esercizio "Exercise 33"

    Let

    $$
    \lim_{n\to+\infty}\left(\frac{\sqrt{3}+n}{e-2n}\right)^{n}=\ell
    $$

    - **(a)** $\ell=0$

    - **(b)** $\ell=e^{\left(\sqrt{3}-\frac{e}{2}\right)}$

    - **(c)** $\ell=+\infty$

    - **(d)** None of the other answers is correct.

??? soluzione "Solution"

    Setting

    $$
    a_{n}=\frac{\sqrt{3}+n}{e-2n}
    $$

    we have $a_{n}<0$ for $n\geq2$ and

    $$
    \left|a_{n}\right|^{n}=\left(\frac{\sqrt{3}+n}{2n-e}\right)^{n}\to0
    $$

    since $|a_{n}|\to1/2$. From $\left|a_{n}\right|^{n}\to0$ it follows that $(a_{n})^{n}\to0$. The correct answer is (a).

!!! esercizio "Exercise 34"

    Let

    $$
    \lim_{n\to+\infty}(-1)^{n}n^{\alpha}\left(\frac{1+3n}{2-n}\right)^{n}=\ell
    $$

    - **(a)** $\ell$ does not exist if $\alpha\geq0$

    - **(b)** $\ell=+\infty$ for every $\alpha\in\R$

    - **(c)** $\ell=0$ if $\alpha<0$

    - **(d)** None of the other answers is correct.

??? soluzione "Solution"

    We set

    $$
    a_{n}=(-1)^{n}\left(\frac{1+3n}{2-n}\right)^{n}=\left(\frac{1+3n}{n-2}\right)^{n}.
    $$

    We have $a_{n}\to+\infty$ since $(1+3n)/(n-2)\to3$. Let us compare $a_{n}$ with $3^{n}$:

    $$
    \frac{a_{n}}{3^{n}}=\left(\frac{1+3n}{3n-6}\right)^{n}=\left[\left(1+\frac{1}{\frac{3n-6}{7}}\right)^{\frac{3n-6}{7}}\right]^{\frac{7n}{3n-6}}
    \to e^{7/3}
    $$

    from which

    $$
    a_{n}\sim3^{n} e^{7/3}.
    $$

    It follows that

    $$
    \lim_{n\to+\infty}(-1)^{n}n^{\alpha}\left(\frac{1+3n}{2-n}\right)^{n}=
    \lim_{n\to+\infty}e^{7/3}n^{\alpha}3^{n}=+\infty
    $$

    even when $\alpha<0$, because $3^{n}$ is an infinity of higher order than any power of $n$. The correct answer is (b).

!!! esercizio "Exercise 35"

    Let

    $$
    \lim_{n\to+\infty}\left(\frac{an+2}{en+a}\right)^{n}=\ell
    $$

    - **(a)** $\ell=e^{ \left(\frac{2}{e}-1\right)}$ if $a=e$

    - **(b)** $\ell=1$ if $a\leq e$

    - **(c)** $\ell=0$ if $a>0$

    - **(d)** None of the other answers is correct.

??? soluzione "Solution"

    Setting

    $$
    a_{n}=\frac{an+2}{en+a}
    $$

    we have $a_{n}\to a/e$, hence

    $$
    (a_{n})^{n}\to\left\{\begin{array}{lr}+\infty,\ &a>e\\
    \\
    0,\ &0<a<e\end{array}\right.
    $$

    therefore answers (b) and (c) are not correct. In the case $a=e$ we have an indeterminate form $1^{\infty}$:

    $$
    \left(\frac{en+2}{en+e}\right)^{n}=\left[\left(1+\frac{1}{\frac{en+e}{2-e}}\right)^{\frac{en+e}{2-e}}\right]^{\frac{(2-e)n}{en+e}}
    \to e^{-1+\frac{2}{e}}.
    $$

    The correct answer is (a).
