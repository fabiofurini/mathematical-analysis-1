---
title: "Comparison of infinities"
---

# Comparison of infinities

<div class="info-capitolo" markdown>

**Part 3 · Limits of functions and continuity · Chapter 5** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-3-limits.pdf)

</div>

## 1. Comparison of infinities for functions

<a id="box-theoXXX-1"></a>

!!! teorema "Theorem 1: Comparison of infinities"

    Given $\alpha,\beta, \lambda > 0,~ a,b >1$, we have

    $$
    \lim_{x \rr \ip} \frac{\log_a^{\beta}  x}{x^{\alpha}}=0 {\rm ~~~~~~and~~~~~~} \lim_{x \rr \ip} \frac{x^{\alpha}}{b^{\lambda  x}}=0
    $$

??? dimostrazione "Proof"

    The theorem will be proved with the tools of differential calculus. <span class="qed">□</span>

!!! chiave ""

    - Any power with positive exponent is an infinity of higher order than any power of logarithms with base $> 1$, and

    - Any exponential with base $> 1$ is an infinity of higher order than any power with positive exponent.

<a id="box-texexpbox1-2"></a>

!!! esempio "Example 1: Comparison of infinities"

    $$
    \lim_{x \rr \ip} \frac{\log^2 x}{x^{(16/7)}} = 0, \qquad \lim_{x \rr \ip} \frac{x^3}{(5/2)^{3/2\;x}} = 0
    $$

    ![Figure 1](../img/limits-05-comparing-infinities/fig01.svg){ .fig .ovale loading=lazy style="width:95%" }

!!! chiave ""

    If a function $\eta(x) \rr \ip$ as $x \rr c \in \R^*$, we have, from the comparison of infinities theorem:

    $$
    \lim_{x \rr c} \frac{\bigg(\log_a  \big(\eta(x)\big)\bigg)^{\beta}}{\big(\eta(x)\big)^{\alpha}}=0 {\rm ~~~~~~and~~~~~~} \lim_{x \rr c} \frac{\big(\eta(x)\big)^{\alpha}}{b^{\lambda \;\eta(x)}}=0\quad {\rm ~~with~~} \alpha, \beta, \lambda > 0,~ a,b >1
    $$

<a id="box-texexpbox1-3"></a>

!!! esempio "Example 2: Comparison of infinities"

    $$
    \lim_{x \rr 0} \frac{\log \left( \frac{1}{x^2}\right)}{\frac{1}{x^2}} = 0
    $$

    since, with $\eta(x) = \frac{1}{x^2}$, we have $\eta(x) \rr \ip$ as $x \rr 0$.

    ![Figure 2](../img/limits-05-comparing-infinities/fig02.svg){ .fig .ovale loading=lazy style="width:65%" }

<a id="box-theoXXX-4"></a>

!!! osservazione "Remark 1"

    $$
    \lim_{x \rr 0^+}  x^{\alpha} \; \log^{\beta}_a  x =0 \qquad (\alpha >0,\beta = \frac{m}{n},  ~n,m \in \N,  ~n {~~\rm odd},~ a>1)
    $$

??? dimostrazione "Proof"

    Given $\alpha,\beta >0,a>1$ we have:

    $$
    \lim_{x \rr \ip} \frac{\log_a^{\beta}  x}{x^{\alpha}} =0  {\rm ~~~~~and~~~~}  \frac{\log_a^{\beta}  x}{x^{\alpha}} = \left(\frac{1}{x}\right)^{\alpha} \left( - \log_a \left(\frac{1}{x}\right)\right)^{\beta}
    $$

    Setting $t = \frac{1}{x}$, $x \rr  \ip$ is equivalent to $t \rr 0^{+}$, and substituting we have:

    $$
    \lim_{x \rr \ip} \frac{\log_a^{\beta}  x}{x^{\alpha}}= (-1)^{\beta} \; \lim_{t \rr 0^+}   t^{\alpha} \; \log_a^{\beta}  t=0
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-texexpbox1-5"></a>

!!! esempio "Example 3: Comparison of infinities"

    $$
    \lim_{x \rr 0^+} x^{1/2} \: \log x = 0^-
    $$

    since we have $\alpha=\frac{1}{2}>0, \beta=1>0$ and $a=e >1$.

    ![Figure 3](../img/limits-05-comparing-infinities/fig03.svg){ .fig .ovale loading=lazy style="width:80%" }

    $$
    \lim_{x \rr 0^+} x^{\sqrt{x}} = 1^{-}
    $$

    since

    $$
    \lim_{x \rr 0^+} x^{\sqrt{x}} =  \lim_{x \rr 0^+} \underbrace{e^{x^{1/2} \: \log x}}_{=\exp(x^{1/2} \: \log x)} =  e^{0^-} = 1^{-}
    $$

    ![Figure 4](../img/limits-05-comparing-infinities/fig04.svg){ .fig .ovale loading=lazy style="width:80%" }

!!! chiave ""

    If a function $\varepsilon(x)$ tends to $0^+$ as $x \rr c \in \R^*$, it follows from the previous remark that:

    $$
    \lim_{x \rr c}   \big(\varepsilon(x)\big)^{\alpha} \; \big(  \: \log_a  \big(\varepsilon(x)\big)\big)^{\beta} =0 \quad (\alpha>0,\beta = \frac{m}{n},  ~n,m \in \N,  ~n {~~\rm odd},~ a>1)
    $$

<a id="box-texexpbox1-6"></a>

!!! esempio "Example 4: Comparison of infinities"

    $$
    \lim_{x \rr \frac{\pi}{2}^-} - \cos x \;  \log \big( \cos x \big)  = 0^+
    $$

    since, with $\varepsilon(x) = \cos x$, we have $\varepsilon(x) \rr 0^+$ as $x \rr \frac{\pi}{2}^-$ and $\alpha=\beta=1$.

    ![Figure 5](../img/limits-05-comparing-infinities/fig05.svg){ .fig .ovale loading=lazy style="width:70%" }

!!! chiave ""

    From the comparison of infinities theorem it follows that:

    $$
    \lim_{x \rr \ip} \frac{x^{\alpha}}{\log_a^{\beta}  x}=+\infty {\rm ~~~~and~~~~} \lim_{x \rr \ip} \frac{b^{\lambda \: x}}{x^{\alpha}}=+\infty
    {\rm ~~~~with~~~~} \alpha, \beta,\lambda > 0,~~ a,b >1
    $$

<a id="box-theoXXX-7"></a>

!!! osservazione "Remark 2"

    $$
    \lim_{x \rr 0^+}  x^{\alpha} \; b^{\lambda/x} = \ip \qquad (\alpha, \lambda >0,~ b>1)
    $$

??? dimostrazione "Proof"

    Given $\alpha, \lambda >0,b>1$, we have:

    $$
    \lim_{x \rr \ip} \frac{b^{\lambda \: x}}{x^{\alpha}}=\ip
    $$

    Setting $t = \frac{1}{x}$, $x \rr  \ip$ is equivalent to $t \rr 0^{+}$, and substituting we have:

    $$
    \lim_{x \rr \ip} \frac{b^{\lambda \: x}}{x^{\alpha}}= \lim_{x \rr \ip}  \left(\frac{1}{x}\right)^{\alpha} \; b^{\lambda \: x}=  \lim_{t \rr 0^+} t^{\alpha} \; b^{\lambda/t} = \ip
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-texexpbox1-8"></a>

!!! esempio "Example 5: Comparison of infinities"

    $$
    \lim_{x \rr 0^+} x\; e^{\frac{1}{x}}  = \ip
    $$

    since we have $\alpha=\lambda=1$ and $b=e>1$

    ![Figure 6](../img/limits-05-comparing-infinities/fig06.svg){ .fig .ovale loading=lazy style="width:75%" }

<a id="box-theoXXX-9"></a>

!!! osservazione "Remark 3"

    $$
    \lim_{x \rr 0^+}   x^{-\alpha} \; b^{-\lambda/x} = 0 \qquad (\alpha, \lambda >0,~ b>1)
    $$

??? dimostrazione "Proof"

    Given $\alpha, \lambda >0,b>1$ we have:

    $$
    \lim_{x \rr \ip} \frac{x^{\alpha} }{b^{\lambda \: x}} =0
    $$

    Setting $t =\frac{1}{x}$, $x \rr  \ip$ is equivalent to $t \rr 0^+$, and substituting we have:

    $$
    \lim_{x \rr \ip}\frac{x^{\alpha} }{b^{\lambda \: x}}  = \lim_{x \rr \ip}  \left(  \frac{1 }{x} \right)^{-\alpha} \frac{1}{b^{\lambda \: x}} =  \lim_{t \rr 0^+}    t^{-\alpha} \; b^{-\lambda/t} = 0
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-texexpbox1-10"></a>

!!! esempio "Example 6: Comparison of infinities"

    $$
    \lim_{x \rr 0^+} x^{-3/2} \: e^{-1/x}     = 0
    $$

    since we have $\alpha=\frac{3}{2}, \lambda=1$ and $b=e>1$.

    ![Figure 7](../img/limits-05-comparing-infinities/fig07.svg){ .fig .ovale loading=lazy style="width:80%" }

<a id="box-theoXXX-11"></a>

!!! osservazione "Remark 4"

    $$
    \lim_{x \rr \im}   x^{\alpha} \; b^{\lambda \: x} = 0 \qquad \left(\alpha = \frac{m}{n} >0,  ~n,m \in \N,  ~n {~~\rm odd}, m \neq 0, ~ \lambda >0, ~ b>1  \right)
    $$

??? dimostrazione "Proof"

    Given $\alpha, \lambda >0,b>1$ we have:

    $$
    \lim_{x \rr \ip} \frac{x^{\alpha} }{b^{\lambda \: x}} =0
    $$

    Setting $t =-x$, $x \rr  \ip$ is equivalent to $t \rr \im$, and substituting we have:

    $$
    \lim_{x \rr \ip}\frac{x^{\alpha} }{b^{\lambda \: x}} =\lim_{t \rr \im} \frac{(-t)^{\alpha} }{b^{-\lambda \: t}} = (-1)^\alpha \lim_{t \rr \im}   t^{\alpha} \; b^{\lambda \: t} = 0
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-texexpbox1-12"></a>

!!! esempio "Example 7: Comparison of infinities"

    $$
    \lim_{x \rr \im} x^2  \; e^{x}  = 0
    $$

    since we have $\alpha=2, \lambda=1$ and $b=e>1$.

    ![Figure 8](../img/limits-05-comparing-infinities/fig08.svg){ .fig .ovale loading=lazy style="width:70%" }
