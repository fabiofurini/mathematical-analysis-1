---
title: "Asymptotic expansions"
---

# Asymptotic expansions

<div class="info-capitolo" markdown>

**Part 3 · Limits of functions and continuity · Chapter 7** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-3-limits.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-limits-07-asymptotic-expansions.pdf)

</div>

## 1. The “little $o$” symbol and asymptotic expansions

<a id="box-defXX-1"></a>

!!! definizione "Definition 1: of little $o$"

    Given two functions $f(x)$ and $g(x)$, defined in a neighborhood of $c \in \R^*$, we say that

    $$
    f(x) = o \big(g(x)\big) {\rm ~~~as~~~} x \rr c
    $$

    (read “$f(x)$ is little $o$ of $g(x)$” as $x \rr c$) if and only if

    $$
    \frac{f(x)}{g(x)} \rr 0 {\rm ~~~as~~~} x \rr c
    $$

!!! chiave ""

    The symbol $o(g(x))$ as $x$ tends to $c$ does not denote a particular function $f(x)$, but any function $f(x)$ such that the ratio between $f(x)$ and $g(x)$ tends to 0 as $x$ tends to $c$.

<a id="box-texexpbox1-2"></a>

!!! esempio "Example 1: Little $o$"

    For example:

    $$
    x^2 = o(x) {\rm ~~~as~~~} x \rr 0 {\rm ~~~since~~~} \frac{x^2}{x} \rr 0 {\rm ~~~as~~~} x \rr 0
    $$

    $$
    x^3 = o(x) {\rm ~~~as~~~} x \rr 0 {\rm ~~~since~~~} \frac{x^3}{x} \rr 0 {\rm ~~~as~~~} x \rr 0
    $$

    $$
    x^3 = o(x^2) {\rm ~~~as~~~} x \rr 0 {\rm ~~~since~~~} \frac{x^3}{x^2} \rr 0 {\rm ~~~as~~~} x \rr 0
    $$

    $$
    e^{-1/x^2} = o(x^4) {\rm ~~~as~~~} x \rr 0 {\rm ~~~since~~~} \frac{e^{-1/x^2}}{x^4} \rr 0 {\rm ~~~as~~~} x \rr 0
    $$

- From the definition of asymptotically equivalent functions, we have:

    $$
    f(x)  \thicksim g(x) {\rm ~~as~~} x \rr c \Longleftrightarrow \frac{f(x)}{g(x)}  \rr 1 {\rm ~~as~~} x \rr c
    $$

    in these cases we have:

    $$
    \frac{f(x)}{g(x)}-1 \rr 0  {\rm ~~as~~} x \rr c {\rm ~~~~~and~~~~~} \frac{f(x)-g(x)}{g(x)} \rr 0  {\rm ~~as~~} x \rr c
    $$

    from the definition of little $o$ we can then write:

    $$
    f(x) - g(x) = o\big(g(x)\big)   {\rm ~~as~~} x \rr c
    $$

    !!! chiave ""

        We have the following <em>asymptotic expansion</em>:

        $$
        f(x)  \thicksim g(x) {\rm ~~as~~} x \rr c \Longleftrightarrow f(x) = g(x) + o\big(g(x)\big) {\rm ~~as~~} x \rr c
        $$

- Moreover, we have:

    $$
    g(x) + f(x) \thicksim g(x) {\rm ~~as~~} x \rr c \Longleftrightarrow \frac{f(x)}{g(x)} \rr 0 {\rm ~~as~~} x \rr c,
    $$

    since:

    $$
    \frac{g(x) + f(x)}{g(x)} = 1 + \frac{f(x)}{g(x)}
    $$

    which tends to 1 as $x \rr c$ if and only if $f(x) / g(x)$ tends to 0 as $x \rr c$.

    In such situations we say that $g(x)$ is the <strong>principal part</strong> of the sum $g(x) + f(x)$ and that $f(x)$ is <strong>negligible</strong> with respect to $g(x)$ as $x \rr c$; that is:

    $$
    f(x) =  o\big(g(x)\big) {\rm ~~as~~ } x \rr c
    $$

    !!! chiave ""

        We have the following <em>asymptotic expansion</em>:

        $$
        g(x) + f(x) \thicksim g(x) {\rm ~~as~~} x \rr c \Longleftrightarrow f(x) =  o\big(g(x)\big) {\rm ~~as~~} x \rr c
        $$

- It follows from the definition of little $o$ that with three functions we have:

    $$
    f(x) = h(x) + o\big(g(x)\big) {\rm ~~as~~} x \rr c \Longleftrightarrow \frac{f(x)-h(x)}{g(x)} \rr 0 {\rm ~~as~~} x \rr c
    $$

- The “little $o$” symbol behaves as follows with products:

    $$
    f \cdot  o \big(g\big) =   o \big(f \cdot  g\big)
    $$

    $$
    o \big(f\big) \cdot  o \big(g\big) =  o \big(f \cdot  g\big)
    $$

    <a id="box-texexpbox1-3"></a>

    !!! esempio "Example 2: Little $o$ and products"

        For example, as $x \rr c$:

        $$
        x \cdot o\big(x^2\big) = o\big(x^3\big),~~~~~~~ \frac{o\big(x^3\big)}{x} = o\big(x^2\big),~~~~~~~ o(x) \cdot o\big(x^2\big)=o\big(x^3\big)
        $$

!!! chiave ""

    Some properties of the little $o$ symbol, shown through examples:

    \begin{align*}
    o(x) \pm o(x) &= o(x),~~~ {\rm ~~as~~} x \rr c \\[1ex]
     o(a \; x) &= o(x),~~~~~ \forall a \in \R,~ a \neq 0,~~~ {\rm ~~as~~} x \rr c\\[1ex]
     a\;o(x) &= o(x),~~~~~ \forall a \in \R,~~~ {\rm ~~as~~} x \rr c\\[1ex]
     o(x) + o\big(x^2\big) &= o(x),~~~ {\rm ~~as~~} x \rr 0\\[1ex]
     o(x) + o\big(x^2\big) &= o\big(x^2\big),~ {\rm ~~as~~} x \rr \infty
    \end{align*}

<a id="box-defXX-4"></a>

!!! definizione "Definition 2: of $o(1)$"

    A function $f$ is said to be infinitesimal as $x \rr c$, and we write

    $$
    f(x) = o(1) {\rm ~~as~~}
    x \rr  c {\rm ~~if~~} f(x) \rr 0 {\rm ~~as~~} x \rr c
    $$

<a id="box-texexpbox1-5"></a>

!!! esempio "Example 3: $o(1)$"

    For example:

    $$
    \sqrt{x} = o(1) {\rm ~~~as~~~} x \rr 0^+ {\rm ~~~since~~~} \frac{\sqrt{x}}{1} \rr 0 {\rm ~~~as~~~} x \rr 0^+
    $$

    $$
    x^{-2} = o(1) {\rm ~~~as~~~} x \rr \ip {\rm ~~~since~~~} \frac{x^{-2}}{1} \rr 0 {\rm ~~~as~~~} x \rr \ip
    $$

- We have:

    $$
    \lim_{ x \rr c} f(x) = \ell \Longleftrightarrow \lim_{ x \rr c} (f(x) - \ell)=0 \Longleftrightarrow \lim_{ x \rr c} |f(x) - \ell|=0
    $$

    hence

    $$
    \lim_{ x \rr c} f(x) = \ell \Longleftrightarrow f(x) =  \ell + o(1) {\rm ~~~as~~~} x \rr c
    $$

    the last expression reads “$f(x)$ is the sum of $\ell$ and of a function that is infinitesimal as $x \rr c$”

<a id="box-texexpbox1-6"></a>

!!! esempio "Example 4: $o(1)$"

    For example:

    $$
    x^2 = x \big(1 + o(1)\big) {\rm ~~~as~~~} x \rr 1 {\rm ~~~since~~~} \frac{x^2}{x} = x \rr 1 {\rm ~~~as~~~} x \rr 1
    $$

    $$
    x^2 + 3\:x  = x \big(3 + o(1)\big) {\rm ~~~as~~~} x \rr 0 {\rm ~~~since~~~} \frac{x^2 + 3\:x}{x} = x + 3\rr 3 {\rm ~~~as~~~} x \rr 0
    $$

    $$
    x^2 + 3\:x  = x^2 \big(1 + o(1)\big) {\rm ~~~as~~~} x \rr \ip {\rm ~~~since~~~} \frac{x^2 + 3\:x}{x^2} = 1 + \frac{3}{x}\rr 1 {\rm ~~~as~~~} x \rr \ip
    $$

    $$
    \sqrt{x+5}  = \sqrt{x} \big(1 + o(1)\big) {\rm ~~~as~~~} x \rr \ip {\rm ~~~since~~~} \frac{\sqrt{x+5}}{\sqrt{x}} =\sqrt{1 + \frac{5}{x}} \rr 1 {\rm ~~~as~~~} x \rr \ip
    $$

!!! chiave ""

    Some properties of the $o(1)$ symbol:

    \begin{align*}
    o(1) \pm o(1) &= o(1),~~~ {\rm ~~as~~} x \rr c\\[1ex]
     o(1) \cdot o(1) &= o(1),~~~ {\rm ~~as~~} x \rr c\\[1ex]
     c \cdot o(1) &= o(1),~~~ {\rm ~~as~~} x \rr c,~~ c \neq 0\\[1ex]
     \big(1+o(1)\big) \cdot \big(1+o(1)\big) &= 1+o(1),~~~ {\rm ~~as~~} x \rr c\\[1ex]
     \frac{1}{1+o(1)}  &= 1+o(1),~~~ {\rm ~~as~~} x \rr c\\[1ex]
     \frac{c}{1+o(1)} - c  &= o(1),~~~ {\rm ~~as~~} x \rr c,~~ c \neq 0
    \end{align*}

    Since

    $$
    \frac{c}{1+o(1)} - c = c \; \left(  \frac{1}{1+o(1)} -1\right)= c \; \big(1+o(1)-1 \big)= o(1)
    $$

<a id="box-texexpbox1-7"></a>

!!! esempio "Example 5: $o(1)$"

    We have

    $$
    \big(x  + o(1)\big)^2 = x^2 \big(1  + o(1)\big) {\rm ~~~as~~~} x \rr \ip {\rm ~~~since~~~} \frac{\big(x  + o(1)\big)^2}{x^2} \rr 1 {\rm ~~~as~~~} x \rr \ip
    $$

## 2. Asymptotic expansions derived from the fundamental limits

We have seen that the following fundamental limits hold:

$$
\lim_{x \rr 0} \frac{\sin x}{x} =1,~~\lim_{x \rr 0} \frac{1 - \cos x}{x^2} = \frac{1}{2},~~ \lim_{x \rr 0} \frac{\log(1 + x)}{x} =1,~~\lim_{x \rr 0} \frac{e^x -1}{x} =1,~~\lim_{x \rr 0} \frac{ (1 + x)^{\alpha} -1}{x} = \alpha
$$

and consequently the following <strong>asymptotic equivalences</strong> hold as $x \rr 0$:

$$
\sin x \thicksim x,~~ 1 - \cos x \thicksim \frac{1}{2} x^2,~~ e^x -1 \thicksim x,~~ \log(1+x) \thicksim x,~~ (1+x)^{\alpha} -1  \thicksim \alpha \: x
$$

Let us now see how to obtain the <strong>asymptotic expansions</strong> starting from the fundamental limits:

!!! chiave ""

    $$
    \lim_{x \rr 0} \frac{\sin x}{x} =1
    $$

    Hence, as $x \rr 0$:

    $$
    \frac{\sin x}{x} - 1 \rr 0, \qquad \frac{\sin x - x}{x}  \rr 0 {\rm ~~hence~~} \sin x - x = o(x)
    $$

    which gives the asymptotic expansion:

    $$
    \sin x  =  x + o(x)
    $$

!!! chiave ""

    $$
    \lim_{x \rr 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}
    $$

    Hence, as $x \rr 0$:

    $$
    \frac{1 - \cos x}{x^2} - \frac{1}{2} \rr 0, \qquad \frac{2\:(1 - \cos x) - x^2}{2\:x^2}  \rr 0 {\rm ~~hence~~} 2\:(1 - \cos x) - x^2 = o\big(\:2\:x^2\big)
    $$

    which gives the asymptotic expansion:

    $$
    \cos x  =  1 - \frac{1}{2} \: x^2 + o\big(x^2\big)
    $$

!!! chiave ""

    $$
    \lim_{x \rr 0} \frac{\log(1 + x)}{x} =1
    $$

    Hence, as $x \rr 0$:

    $$
    \frac{\log(1 + x)}{x} - 1 \rr 0, \qquad \frac{\log(1 + x) - x}{x}  \rr 0 {\rm ~~hence~~} \log(1 + x) - x = o(x)
    $$

    which gives the asymptotic expansion:

    $$
    \log(1 + x)  =  x + o(x)
    $$

!!! chiave ""

    $$
    \lim_{x \rr 0} \frac{e^x -1}{x} =1
    $$

    Hence, as $x \rr 0$:

    $$
    \frac{e^x -1}{x} - 1 \rr 0, \qquad \frac{e^x -1- x}{x}  \rr 0 {\rm ~~hence~~} e^x-1 - x = o(x)
    $$

    which gives the asymptotic expansion:

    $$
    e^x  =1+  x + o(x)
    $$

!!! chiave ""

    $$
    \lim_{x \rr 0} \frac{ (1 + x)^{\alpha} -1}{x} = \alpha  {\rm ~~~~~~~~with~~~} \alpha \in \R
    $$

    Hence, as $x \rr 0$:

    $$
    \frac{ (1 + x)^{\alpha} -1}{x} - \alpha \rr 0 \qquad \frac{(1 + x)^{\alpha} -1 - \alpha \: x}{x}  \rr 0 {\rm ~~hence~~} (1 + x)^{\alpha} -1 - \alpha \: x = o(x)
    $$

    which gives the asymptotic expansion:

    $$
    (1 + x)^{\alpha} = 1 + \alpha \: x + o(x)
    $$

- These asymptotic expansions can be generalized

!!! chiave ""

    If $\varepsilon(x)$ is a function that tends to zero, i.e., it is an infinitesimal (it does not matter what $x$ tends to), we have the following <strong>asymptotic expansions</strong> derived from the fundamental limits.

    As $\varepsilon(x) \rr 0$, we have:

    \begin{align}
    \sin{ \big( \varepsilon(x) \big)} &= \varepsilon(x) + o\big( \varepsilon(x)\big)   \\[2ex]
         \cos{\big( \varepsilon(x) \big)} &= 1 - \frac{1}{2} \; \varepsilon^2(x) + o{\big(\varepsilon^2(x)\big)} \\[2ex]
         \log{\big(1+\varepsilon(x)\big)} &= \varepsilon(x) + o\big(\varepsilon(x)\big)  \\[2ex]
          e^{\varepsilon(x)} &= 1 + \varepsilon(x) + o\big(\varepsilon(x)\big)  \\[2ex]
          \big(1+\varepsilon(x)\big)^\alpha &= 1 + \alpha \; \varepsilon(x) + o\big(\varepsilon(x)\big)  {\rm ~~~~~~~~with~~~} \alpha \in \R
    \end{align}
