---
title: "Limits of polynomials and rational functions"
---

# Limits of polynomials and rational functions

<div class="info-capitolo" markdown>

**Part 3 · Limits of functions and continuity · Chapter 3** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-3-limits.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-limits-03-polynomials-rational-functions.pdf)

</div>

## 1. Limits of polynomials at $\pm \infty$

- A polynomial of (maximum) degree $n$ can be written as:

    $$
    P_n(x) = \sum_{i=0}^n a_i \: x^i  \quad  {\rm ~~with~~} a_i \in \R,  {\rm ~for~~} i \in \{0,1,\dots,n\}, ~ {\rm ~~and~~} a_n \neq 0.
    $$

    The value $a_i$ is the <strong>coefficient of the monomial</strong> $i$, with $i=0,1,\dots,n$, while $x^i$ is the <strong>literal part</strong> of the monomial. In this notation, without loss of generality, the monomials are ordered by increasing values of the exponents.  [^1]

- Factoring out $a_n  \: x^n$, that is, the last monomial, which is the one of maximum degree, we have:

    $$
    P_n(x) = a_n \: x^n \left(
    \overbrace{\frac{a_0}{a_n \: x^n} + \frac{a_1}{a_n \: x^{n-1}} + {\rm \dots} + \frac{a_{n-1}}{a_n \: x}}^{\rr 0 {\rm ~~as~~} x \rr \pm \infty}
    + 1  \right)
    $$

!!! chiave ""

    $$
    \lim_{x \rr \pm \infty} P_n(x) = \lim_{x \rr \pm \infty} a_n \: x^n
    $$

    To compute the limit of a polynomial as $x \rr \pm \infty$, it is enough to compute the limit of the monomial of maximum degree.

<a id="box-texexpbox1-1"></a>

!!! esempio "Example 1: Limits of polynomials as $x \rr \pm \infty$"

    For example:

    $$
    \lim_{x \rr  \ip} (8  - x^2 + 3\:x^3)= \lim_{x \rr  \ip} 3\:x^3 \: \left( \underbrace{\frac{8}{3\:x^3}  - \frac{1}{3\:x}}_{\rr 0 {\rm ~as~} x \rr \ip } + 1 \right) = \lim_{x \rr  \ip} 3\:x^3 = \ip
    $$

    $$
    \lim_{x \rr  \im} (120 + 4\:x -2\:x^3) = \lim_{x \rr  \im} -2\:x^3 \: \left( \underbrace{\frac{120}{-2\:x^3}  + \frac{4}{-2\:x^2}}_{\rr 0 {\rm ~as~} x \rr \im} + 1 \right) = \lim_{x \rr  \im} -2\:x^3 = \ip
    $$

## 2. Limits of rational functions at $\pm \infty$

- Let $f$ be a rational function (ratio of polynomials):

    $$
    f(x) = \frac{P_n(x)}{P_m(x)}
    $$

    where $P_n(x)$ and $P_m(x)$ are polynomials of degree $n$ and $m$, respectively:

    $$
    P_n(x) = \sum_{i=0}^n a_i \: x^i  \quad  {\rm ~~with~~} a_i \in \R,  {\rm ~for~~} i=0,1,\dots,n, ~ {\rm ~~and~~} a_n \neq 0.
    $$

    $$
    P_m(x) = \sum_{i=0}^m b_i \: x^i  \quad  {\rm ~~with~~} b_i \in \R,  {\rm ~for~~} i=0,1,\dots,m, ~ {\rm ~~and~~} b_m \neq 0.
    $$

- Factoring out $a_n  \: x^n$ in the numerator and $b_m  \: x^m$ in the denominator, that is, the monomials of maximum degree, we have:

    $$
    \frac{P_n(x)}{P_m(x)} = \frac{a_n \: x^n}{b_m \: x^m} \frac{\left \{ \overbrace{\frac{a_0}{a_n \: x^n} + \frac{a_1}{a_n \: x^{n-1}} + \dots + \frac{a_{n-1}}{a_n \: x}}^{\rr 0 {\rm ~~as~~} x \rr \pm \infty} + 1 \right\}}{\left \{ \underbrace{\frac{b_0}{b_m \: x^m} + \frac{b_1}{b_m \: x^{m-1}} + \dots + \frac{b_{m-1}}{b_m \: x}}_{\rr 0 {\rm ~~as~~} x \rr \pm \infty} + 1 \right\}}.
    $$

!!! chiave ""

    $$
    \lim_{x \rr \pm \infty} \frac{P_n(x)}{P_m(x)} = \lim_{x \rr \pm \infty} \frac{a_n \: x^n}{b_m \: x^m}  = \lim_{x \rr \pm \infty} \frac{a_n }{b_m} \: x^{n-m}
    $$

    To compute the limit of a ratio of polynomials as $x \rr \pm \infty$, it is enough to compute the limit of the ratio of the monomials of maximum degree.

<a id="box-texexpbox1-2"></a>

!!! esempio "Example 2: Limits of rational functions as $x \rr \pm \infty$"

    For example:

    $$
    \lim_{x \rr  \im} \frac{1+3\: x^3}{2 + x^2} = 
      \lim_{x \rr  \im} \frac{3\: x^3}{x^2} =\lim_{x \rr  \im} 3\:{x} = \im
    $$

    $$
    \lim_{x \rr  \ip} \frac{1+3\: x^3}{1- 10x +x^4 } 
    = \lim_{x \rr  \ip} \frac{3\: x^3}{x^4} = \lim_{x \rr  \ip} 3\: \frac{1}{x} = 0
    $$

    $$
    \lim_{x \rr  \im} \frac{  7\: x^2 + 6\: x^5}{-4+7 \: x^5} 
    =\lim_{x \rr  \im} \frac{6\: x^5}{7 \: x^5}= \lim_{x \rr  \im} \frac{6}{7} = \frac{6}{7}
    $$

!!! chiave ""

    To compute the limit of rational functions (without the constant term) as $x \to 0$ we must factor out, in the numerator and in the denominator, the powers of minimum degree.

<a id="box-texexpbox1-3"></a>

!!! esempio "Example 3: Limits of rational functions as $x \rr 0$"

    For example:

    $$
    \lim_{x \rr  0} \frac{-2x^2+3\: x^3-6\: x^5}{x+x^2 - x^7} = \lim_{x \rr  0} \frac{ -2x^2 \left(1 \overbrace{-\frac{3}{2}\:x+ 3 \:x^3}^{\to 0 {\rm~as~} x \to 0} \right)}{ x \left(1 \underbrace{+x- \:x^6}_{\to 0 {\rm~as~} x \to 0} \right)} = \lim_{x \rr  0} -2\:x = 0
    $$

## 3. Limits of quotients of sums of powers with rational exponents

- The same rules hold for quotients of sums of powers with rational exponents:

    1. as $x \rr \infty$ we must factor out the power with the maximum exponent

    2. as $x \rr 0^+$ we must factor out the power with the minimum exponent

!!! chiave ""

    Raising to a power can also be defined with a negative base if the exponent is a rational number (fraction) with an odd denominator. Hence in this case we can compute the limit as $x \rr 0$ (otherwise only as $x \rr 0^+$).

<a id="box-texexpbox1-4"></a>

!!! esempio "Example 4: Limits of quotients of sums of powers with rational exponents"

    For example:

    $$
    \lim_{x \rr  0} \frac{x^{2/3}}{ 3\: {x}^{1/3}  + x + x^2 }
    $$

    Factoring out in the denominator the power with the minimum exponent, we have:

    $$
    \frac{x^{2/3}}{ 3\: x^{1/3}  + x + x^2}
     =
     \frac{x^{2/3}}{3 \: x^{1/3} \left(1+ \frac{x}{3\:x^{1/3}} + \frac{x^2}{3\:x^{1/3}}  \right)}
     = 
     \frac{x^{2/3}}{3 \: x^{1/3} \left(1+ \frac{x^{2/3}}{3} + \frac{x^{5/3}}{3} \right)}
     = \frac{1}{3} \: x^{1/3}  \frac{1}{\left(1+ \frac{x^{2/3}}{3} + \frac{x^{5/3}}{3} \right)}
    $$

    hence

    $$
    \lim_{x \rr  0} \frac{x^{2/3}}{ 3\: {x}^{1/3}  + x + x^2} =
     \frac{1}{3} \: \lim_{x \rr  0}  \: x^{1/3}  \frac{1}{\left(1+ \underbrace{\frac{x^{2/3}}{3} + \frac{x^{5/3}}{3}}_{\rr 0 {\rm ~~as~~} x \rr 0} \right)}
     = 0
    $$

!!! chiave ""

    Another option to compute limits as $x \rr 0$ is to make a change of variable:

    $$
    x=\frac{1}{y}, {\rm ~~if~~} x \rr 0^{+} {\rm ~~then~~} y \rr \ip, {\rm ~~if~~} x \rr 0^{-} {\rm ~~then~~} y \rr \im
    $$

    and hence we reduce to the case of limits at $\pm\infty$.

<a id="box-texexpbox1-5"></a>

!!! esempio "Example 5: Computing the limit of rational functions as $x \rr 0^+$ with a change of variable"

    We want to compute the following limit:

    $$
    \lim_{x \rr  0}  \frac{ x^{2/3} }{ 3\: x^{1/3}  + x + x^2 },   \qquad  f(x)=\frac{ x^{2/3} }{ 3\: x^{1/3}  + x + x^2 }
    $$

    Making the change of variable $x=\frac{1}{y}$, we therefore have to compute the following two limits:

    $$
    \lim_{x \rr  0^+} f(x)  = \lim_{y \rr  \ip} \frac{  \left( \frac{1}{y} \right)^{2/3}  }{ 3\: \left( \frac{1}{y} \right)^{1/3}  + \frac{1}{y} + \left( \frac{1}{y} \right)^2 }
    {\rm ~~~~and~~~~}
     \lim_{x \rr  0^-}  f(x)  = \lim_{y \rr  \im} \frac{  \left( \frac{1}{y} \right)^{2/3}  }{ 3\: \left( \frac{1}{y} \right)^{1/3}  + \frac{1}{y} + \left( \frac{1}{y} \right)^2 }
    $$

    We have:

    $$
    \frac{  \left( \frac{1}{y} \right)^{2/3}  }{ 3\: \left( \frac{1}{y} \right)^{1/3}  + \frac{1}{y} + \left( \frac{1}{y} \right)^2 }
    =
    \frac{y^{-2/3}}{3\:y^{-1/3} + y^{-1} + y^{-2}}
    $$

    Factoring out in the denominator the power with the maximum exponent, we have:

    $$
    \frac{y^{-2/3}}{3\:y^{-1/3} + y^{-1} + y^{-2}}
    = 
    \frac{y^{-2/3}}{3\:y^{-1/3} \left(1 + \frac{y^{-1}}{3\:y^{-1/3}}+ \frac{y^{-2}}{3\:y^{-1/3}} \right)}
    =
    \frac{1}{3} \: \frac{1}{ y^{1/3}} 
    \frac{1}{\left(1 + \frac{1}{3\:y^{2/3}}+ \frac{1}{3\:y^{5/3}} \right)}
    $$

    Hence:

    $$
    \frac{1}{3} \: \lim_{y \rr  \im}  \frac{1}{ y^{1/3}} 
    \frac{1}{\left(1 + \frac{1}{3\:y^{2/3}}+ \frac{1}{3\:y^{5/3}} \right)} =
     \frac{1}{3} \: \lim_{y \rr  \ip}  \frac{1}{ y^{1/3}} 
    \frac{1}{\left(1 + \frac{1}{3\:y^{2/3}}+ \frac{1}{3\:y^{5/3}} \right)}
     = 0
    $$

    since, as $y \rr \pm \infty$, we have

    $$
    \frac{1}{y^{1/3}} \rr 0  {\rm ~~and~~} \left(1 + \frac{1}{3\:y^{2/3}}+ \frac{1}{3\:y^{5/3}} \right) \rr 1  {\rm ~~~~since~~~} \frac{1}{3\:y^{2/3}} \rr 0, ~~\frac{1}{3\:y^{5/3}} \rr 0 .
    $$

    Since the right limit and the left limit of $f(x)$ as $x \rr 0$ exist and are equal to $0$, then:

    $$
    \lim_{x \rr  0}  f(x) =0
    $$

[^1]: If a monomial of degree $i$ is missing we have $a_i=0$; $a_0$ is the constant term since $x^0=1.$
