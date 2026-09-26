---
title: "Limits of real functions of a real variable"
---

# Limits of real functions of a real variable

<div class="info-capitolo" markdown>

**Exercises · Limits of functions** · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-limits-01-limits-of-functions.pdf)

</div>

!!! esercizio "Exercise 1"

    From $e^{x}=1+x+o(x)$, $x\to0$, deduce that

    $$
    \sinh(x)=x+o(x), \ x\to0.
    $$

??? soluzione "Solution"

    For $x\to0$, we have $e^{-x}=1-x+o(x)$, hence

    $$
    \sinh x=\frac{e^{x}-e^{-x}}{2}=\frac{1}{2}\bigg( \big(1+x+o(x) \big)- \big(1-x+o(x)\big )\bigg)=x+o(x).
    $$

!!! esercizio "Exercise 2"

    Using $\cosh^{2}x-1=\sinh^{2}x$ and the previous exercise, prove that

    $$
    \lim_{x\to0}\frac{\cosh x-1}{x^{2}}=\frac{1}{2}
    $$

    and deduce

    $$
    \cosh x=1+\frac{1}{2}x^{2}+o(x^{2}), \ x\to0.
    $$

??? soluzione "Solution"

    From the previous exercise we have $\sinh^{2} x\sim x^{2}$ as $x\to0$ and moreover $\cosh 0 =1$, hence

    $$
    \lim_{x\to0}\frac{\cosh x-1}{x^{2}}\cdot\frac{\cosh x+1}{\cosh x+1}= \lim_{x\to0}\frac{\cosh^{2}x-1}{x^{2}} \cdot \underbrace{\lim_{x\to0} \frac{1}{\cosh x+1}}_{\rr \frac{1}{2}} =
    $$

    $$
    =\frac{1}{2} \: \lim_{x\to0}\frac{\sinh^{2} x}{x^{2}}=\frac{1}{2}\:\lim_{x\to0}\frac{x^{2}}{x^{2}}=\frac{1}{2}.
    $$

    Moreover

    $$
    \left( \lim_{x\to0}\frac{\cosh x-1}{x^{2}} \right) - \frac{1}{2} =\lim_{x\to0}\frac{\cosh x-1-\frac{1}{2}x^{2}}{x^{2}}=0
    $$

    which means

    $$
    \cosh x-1-\frac{1}{2}x^{2}=o(x^{2}),
    $$

    $$
    \cosh x=1+\frac{1}{2}x^{2}+o(x^{2}),\ \ \ x\to0.
    $$

!!! esercizio "Exercise 3"

    Refine the equivalence

    $$
    \log(x^{2}+1)\sim2\log x, \ x\to+\infty
    $$

    by proving that

    $$
    \log(x^{2}+1)=2\log x+\frac{1}{x^{2}}+o\left(\frac{1}{x^{2}}\right), \ x\to+\infty.
    $$

??? soluzione "Solution"

    $$
    \log(x^{2}+1)=\log\left(x^{2}\left(1+\frac{1}{x^{2}}\right)\right)=\log x^{2}+\log\left(1+\frac{1}{x^{2}}\right).
    $$

    Now

    $$
    1/x^{2}\to0 {\rm ~~as~~} x\to+\infty
    $$

    and

    $$
    \log(1+y)=y+o(y) {\rm ~~as~~} y\to0,
    $$

    hence

    $$
    \log(x^{2}+1)=2\log x+\frac{1}{x^{2}}+o\left(\frac{1}{x^{2}}\right), \ x\to+\infty.
    $$

!!! esercizio "Exercise 4"

    Compute the following limit of a function of a real variable:

    $$
    \lim_{x\to+\infty}\log x-\sqrt{x}
    $$

??? soluzione "Solution"

    $$
    \lim_{x\to+\infty}\log x-\sqrt{x}=\lim_{x\to+\infty}-\sqrt{x}=-\infty.
    $$

!!! esercizio "Exercise 5"

    Compute the following limit of a function of a real variable:

    $$
    \lim_{x\to+\infty}2^{x}-x^{2}
    $$

??? soluzione "Solution"

    $$
    \lim_{x\to+\infty}2^{x}-x^{2}=\lim_{x\to+\infty}2^{x}=+\infty.
    $$

!!! esercizio "Exercise 6"

    Compute the following limit of a function of a real variable:

    $$
    \lim_{x\to+\infty}\frac{\log(x^{2}+1)}{2^{x}}
    $$

??? soluzione "Solution"

    We use the equivalence $\log(x^{2}+1)\sim 2\log x$ as $x\to+\infty$:

    $$
    \lim_{x\to+\infty}\frac{\log(x^{2}+1)}{2^{x}}=\lim_{x\to+\infty}\frac{2\log x}{2^{x}}=0.
    $$

!!! esercizio "Exercise 7"

    Compute the following limit of a function of a real variable:

    $$
    \lim_{x\to+\infty}\left(\frac{x+2}{x+1}\right)^{x}
    $$

??? soluzione "Solution"

    We use the fundamental limit

    $$
    \lim_{x\to\pm\infty}\left(1+\frac{1}{x}\right)^{x}=e.
    $$

    $$
    \lim_{x\to+\infty}\left(\frac{x+2}{x+1}\right)^{x}=\lim_{x\to+\infty}\left[\left(1+\frac{1}{x+1}\right)^{x+1}\right]^{\frac{x}{x+1}}
    =e^{1}=e.
    $$

!!! esercizio "Exercise 8"

    Compute the following limit of a function of a real variable:

    $$
    \lim_{x\to0^{+}}x^{\log x}
    $$

??? soluzione "Solution"

    We have

    $$
    x^{\log x} = e^{\log x^{\log x}} = e^{\log x \: \log x},
    $$

    hence

    $$
    \lim_{x\to0^{+}}x^{\log x} = \lim_{x\to0^{+}} e^{ \overbrace{\log x}^{\rr \im} \: \overbrace{\log x}^{\rr \im}} =  e^{\ip} = +\infty.
    $$

    Moreover, the base $x$ tends to $0$ and the exponent $\log x$ tends to $-\infty$, hence the limit is not an indeterminate form:

    $$
    \lim_{x\to0^{+}}x^{\log x} = 0^{\im} = \ip
    $$

!!! esercizio "Exercise 9"

    Let

    $$
    \lim_{x\to+\infty}x\left(\log(x+2)-\log x\right)=L.
    $$

    - **(a)** $L=2$

    - **(b)** $L$ does not exist

    - **(c)** $L=1$

    - **(d)** None of the other answers is correct.

??? soluzione "Solution"

    $$
    \lim_{x\to+\infty}x\left(\log(x+2)-\log x\right)=\lim_{x\to+\infty}x\log\left(1+\frac{2}{x}\right)=
    \lim_{x\to+\infty}x\cdot\frac{2}{x}=2.
    $$

    The correct answer is (a).

!!! esercizio "Exercise 10"

    Compute the following limit of a quotient using equivalent power functions for each term:

    $$
    \lim_{x\to0}\frac{e^{x}-1}{\sin x}
    $$

??? soluzione "Solution"

    $$
    \lim_{x\to0}\frac{e^{x}-1}{\sin x}=\lim_{x\to0}\frac{x}{x}=1.
    $$

!!! esercizio "Exercise 11"

    Compute the following limit of a quotient using equivalent power functions for each term:

    $$
    \lim_{x\to0}\frac{1-\cos x}{\sin^{2} x}
    $$

??? soluzione "Solution"

    We have

    $$
    \lim_{x\to0} \frac{1 -\cos x}{x^2} = \frac{1}{2} {\rm ~~hence~~} 1 -\cos x \thicksim \frac{1}{2} \: x^2 {\rm ~~as~~} x \rr 0.
    $$

    Moreover, we have

    $$
    \sin x \thicksim x {\rm ~~as~~} x \rr 0 {\rm ~~hence~~} (\sin x)^2 \thicksim x^2 {\rm ~~as~~} x \rr 0.
    $$

    We then have:

    $$
    \lim_{x\to0}\frac{1-\cos x}{\sin^{2} x}=\lim_{x\to0}\frac{\frac{1}{2}x^{2}}{x^{2}}=\frac{1}{2}
    $$

!!! esercizio "Exercise 12"

    Compute the following limit of a quotient using equivalent power functions for each term:

    $$
    \lim_{x\to0}\frac{\sin3x}{\sin4x}
    $$

??? soluzione "Solution"

    $$
    \lim_{x\to0}\frac{\sin3x}{\sin4x}=\lim_{x\to0}\frac{3x}{4x}=\frac{3}{4}
    $$

!!! esercizio "Exercise 13"

    Compute the following limit of a quotient using equivalent power functions for each term:

    $$
    \lim_{x\to0}\frac{(1-e^{2x})^{2}}{1-\cos5x}
    $$

??? soluzione "Solution"

    $$
    \lim_{x\to0}\frac{(1-e^{2x})^{2}}{1-\cos5x}=\lim_{x\to0}\frac{(-2x)^{2}}{\frac{1}{2}(5x)^{2}}=\frac{8}{25}
    $$

!!! esercizio "Exercise 14"

    Compute the following limit of a quotient using equivalent power functions for each term:

    $$
    \lim_{x\to0}\frac{\sin x^{3}}{(1-e^{x})^{3}}
    $$

??? soluzione "Solution"

    $$
    \lim_{x\to0}\frac{\sin x^{3}}{(1-e^{x})^{3}}=\lim_{x\to0}\frac{x^{3}}{(-x)^{3}}=-1.
    $$

!!! esercizio "Exercise 15"

    Compute

    $$
    \lim_{x\to0}x^{2}e^{\frac{\sqrt{\pi}}{x}\sin(x\log7)}
    $$

??? soluzione "Solution"

    We analyze the exponent using the equivalence $\sin(x\log7)\sim x\log7$ as $x\to0$:

    $$
    \lim_{x\to0}\frac{\sqrt{\pi}}{x}\sin(x\log7)=\lim_{x\to0}\frac{\sqrt{\pi}}{x}\cdot x\log7=\sqrt{\pi}\log7.
    $$

    The given limit equals

    $$
    \lim_{x\to0}x^{2}e^{\frac{\sqrt{\pi}}{x}\sin(x\log7)}=0\cdot e^{\sqrt{\pi}\log7}=0\cdot7^{\sqrt{\pi}}=0.
    $$

!!! esercizio "Exercise 16"

    Compute

    $$
    \lim_{x\to0^{+}}\left(\frac{1}{\sin x}+\log x\right)
    $$

??? soluzione "Solution"

    Using

    $$
    \lim_{x\to0^{+}}\sin x\log x=\lim_{x\to0^{+}}x\log x=0,
    $$

    we have

    $$
    \lim_{x\to0^{+}}\left(\frac{1}{\sin x}+\log x\right)=\lim_{x\to0^{+}}\frac{1+\sin x\log x}{\sin x}=+\infty
    $$

    since the numerator $1+\sin x\log x$ tends to $1$ while the denominator $\sin x$ is a positive function tending to $0$.

    Equivalently, again from

    $$
    \lim_{x\to0^{+}}\frac{\log x}{\frac{1}{\sin x}}=\lim_{x\to0^{+}}\sin x\log x=\lim_{x\to0^{+}}x\log x=0,
    $$

    we have that $1/\sin x$ is an infinity of higher order than $\log x$ as $x\to0^{+}$, hence

    $$
    \lim_{x\to0^{+}}\left(\frac{1}{\sin x}+\log x\right)=\lim_{x\to0^{+}}\frac{1}{\sin x}=+\infty.
    $$

    We also prove that

    $$
    \lim_{x \rr 0^+} x \: \log x = 0
    $$

    We make the change of variable $x= \frac{1}{y}$, hence

    $$
    \lim_{x \rr 0^+} x \: \log x = \lim_{y \rr \ip} \frac{1}{y} \: \log \frac{1}{y} = \lim_{y \rr \ip} \frac{- \log y}{y} = 0
    $$

!!! esercizio "Exercise 17"

    Compute

    $$
    \lim_{x\to0}\frac{(1-\cos x)^{3}-\sin x^{6}}{x^{6}}
    $$

??? soluzione "Solution"

    From

    $$
    1-\cos x\sim\frac{1}{2}x^{2},\ \sin x\sim x,\ \ x\to0,
    $$

    we have

    $$
    \begin{array}{l} \lim_{x\to0}\frac{(1-\cos x)^{3}-\sin x^{6}}{x^{6}}=\lim_{x\to0}\frac{(1-\cos x)^{3}}{x^{6}}-
    \lim_{x\to0}\frac{\sin x^{6}}{x^{6}}=\\
    \\
    =\lim_{x\to0}\frac{\frac{1}{8}x^{6}}{x^{6}}-\lim_{x\to0} \frac{x^{6}}{x^{6}}=\frac{1}{8}-1=-\frac{7}{8}.\end{array}
    $$

    Equivalently, using the calculus of Landau symbols, from

    $$
    \cos x=1-\frac{1}{2}x^{2}+o(x^{2}),\ \sin x=x+o(x),\ \ x\to0,
    $$

    we have

    $$
    \begin{array}{l}\lim_{x\to0}\frac{(1-\cos x)^{3}-\sin x^{6}}{x^{6}}=\lim_{x\to0}\frac{\frac{1}{8}x^{6}- x^{6}+o(x^{6})}{x^{6}}=\\
    \\
    \lim_{x\to0}\frac{-\frac{7}{8}x^{6}+o(x^{6})}{x^{6}}=\lim_{x\to0}\frac{-\frac{7}{8}x^{6}}{x^{6}}=-\frac{7}{8}.\end{array}
    $$

!!! esercizio "Exercise 18"

    Compute

    $$
    \lim_{x\to0}\frac{8(1-\cos x)^{3}-\sin x^{6}}{x^{6}}
    $$

??? soluzione "Solution"

    From

    $$
    1-\cos x\sim\frac{1}{2}x^{2},\ \sin x\sim x,\ \ x\to0,
    $$

    we have

    $$
    \begin{array}{l}\lim_{x\to0}\frac{8(1-\cos x)^{3}-\sin x^{6}}{x^{6}}=\lim_{x\to0}\frac{8(1-\cos x)^{3}}{x^{6}}-
    \lim_{x\to0}\frac{\sin x^{6}}{x^{6}}=\\
    \\
    =\lim_{x\to0}\frac{x^{6}}{x^{6}}-\lim_{x\to0} \frac{x^{6}}{x^{6}}=1-1=0.\end{array}
    $$

    Equivalently, using the calculus of Landau symbols, from

    $$
    \cos x=1-\frac{1}{2}x^{2}+o(x^{2}),\ \sin x=x+o(x),\ \ x\to0,
    $$

    we have

    $$
    \begin{array}{l}\lim_{x\to0}\frac{8(1-\cos x)^{3}-\sin x^{6}}{x^{6}}=\lim_{x\to0}\frac{x^{6}- x^{6}+o(x^{6})}{x^{6}}=\\
    \\
    \lim_{x\to0}\frac{o(x^{6})}{x^{6}}=0\end{array}
    $$

    since the numerator $o(x^{6})$, by the very definition of the Landau symbol, is an infinitesimal of higher order than the denominator $x^{6}$.

!!! chiave ""

    We have the asymptotic expansions as $x\to 0$:

    $$
    \begin{array}{l}\sin x=x+o(x),\ \cos x=1-\frac{1}{2}x^{2}+o(x^{2}),\ e^{x}=1+x+o(x),\\
    \\
    \sinh x=x+o(x),\ \cosh x=1+\frac{1}{2}x^{2}+o(x^{2}).\end{array}
    $$

!!! esercizio "Exercise 19"

    Compute the following limits using the comparison of infinitesimals

    $$
    \lim_{x\to0}\frac{(\sin x)^{2}+x}{x^{3}-\sin x}
    $$

??? soluzione "Solution"

    $$
    \begin{array}{l}\lim_{x\to0}\frac{(\sin x)^{2}+x}{x^{3}-\sin x}=\lim_{x\to0}\frac{(x+o(x))^{2}+x}{x^{3}-x+o(x)}=\\
    \\
    =\lim_{x\to0}\frac{x^{2}+o(x^{2})+x}{x^{3}-x+o(x)}=
    \lim_{x\to0}\frac{x+o(x)}{-x+o(x)}=\lim_{x\to0}\frac{x}{-x}=-1.\end{array}
    $$

!!! esercizio "Exercise 20"

    Compute the following limits using the comparison of infinitesimals

    $$
    \lim_{x\to0}\frac{|1-\cos x+\sin x|}{(e^{x}-1)^{2}}
    $$

??? soluzione "Solution"

    $$
    \begin{array}{l}\lim_{x\to0}\frac{|1-\cos x+\sin x|}{(e^{x}-1)^{2}}=\lim_{x\to0}\frac{|\frac{1}{2}x^{2}+o(x^{2})+x+o(x)|}{(x+o(x))^{2}}=\\
    \\
    \lim_{x\to0}\frac{|x+o(x)|}{x^{2}+o(x^{2})}=\lim_{x\to0}\frac{|x|}{x^{2}}=\lim_{x\to0}\frac{1}{|x|}=+\infty.\end{array}
    $$

!!! esercizio "Exercise 21"

    Compute the following limits using the comparison of infinitesimals

    $$
    \lim_{x\to0}\frac{\sin2x-\sin^{2}x}{e^{x}-1}
    $$

??? soluzione "Solution"

    $$
    \begin{array}{l}\lim_{x\to0}\frac{\sin2x-\sin^{2}x}{e^{x}-1}=\lim_{x\to0}\frac{2x+o(x)-(x+o(x))^{2}}{x+o(x)}=\\
    \\
    = \lim_{x\to0}\frac{2x+o(x)-x^{2}+o(x^{2})}{x+o(x)}=\lim_{x\to0}\frac{2x+o(x)}{x+o(x)}=\lim_{x\to0}\frac{2x}{x}=2.\end{array}
    $$

!!! esercizio "Exercise 22"

    Compute the following limits using the comparison of infinitesimals

    $$
    \lim_{x\to0}\frac{\sin^{3}x-\sin4x}{\cosh x-1+x}
    $$

??? soluzione "Solution"

    $$
    \begin{array}{l}\lim_{x\to0}\frac{\sin^{3}x-\sin4x}{\cosh x-1+x}=\lim_{x\to0}\frac{(x+o(x))^{3}-4x+o(x)}{\frac{1}{2}x^{2}+o(x^{2})+x}=\\
    \\
    =\lim_{x\to0}\frac{x^{3}+o(x^{3})-4x+o(x)}{x+o(x)}=
    \lim_{x\to0}\frac{-4x+o(x)}{x+o(x)}=\lim_{x\to0}\frac{-4x}{x}=-4.\end{array}
    $$

!!! esercizio "Exercise 23"

    Compute the following limits using the comparison of infinitesimals

    $$
    \lim_{x\to0}\frac{\sin x-\sin x^{2}}{\sinh(2x)-\sinh(2x)^{2}}
    $$

??? soluzione "Solution"

    $$
    \begin{array}{l}\lim_{x\to0}\frac{\sin x-\sin x^{2}}{\sinh(2x)-\sinh(2x)^{2}}=
    \lim_{x\to0}\frac{x+o(x)-x^{2}+o(x^{2})}{2x+o(x)-(2x+o(x))^{2}}=\\
    \\
    =\lim_{x\to0}\frac{x+o(x)}{2x+o(x)-4x^{2}+o(x^{2})}=
    \lim_{x\to0}\frac{x+o(x)}{2x+o(x)}=\lim_{x\to0}\frac{x}{2x}=\frac{1}{2}.\end{array}
    $$

!!! esercizio "Exercise 24"

    Compute

    $$
    \lim_{x\to1^{+}}\frac{\log(1+\sqrt{x-1})}{\sqrt{x^{2}-1}}
    $$

??? soluzione "Solution"

    We have

    $$
    \lim_{x\to1^{+}}\frac{\log(1+\sqrt{x-1})}{\sqrt{x^{2}-1}}=
    \lim_{x\to1^{+}}\frac{\log(1+\sqrt{x-1})}{\sqrt{x-1}\sqrt{x+1}}=
    \frac{1}{\sqrt{2}}\lim_{x\to1^{+}}\frac{\log(1+\sqrt{x-1})}{\sqrt{x-1}}.
    $$

    Setting $y=\sqrt{x-1}$, the limit becomes

    $$
    \frac{1}{\sqrt{2}}\lim_{y\to0^{+}}\frac{\log(1+y)}{y}=\frac{1}{\sqrt{2}}
    $$

    by the fundamental limit

    $$
    \lim_{y\to0}\frac{\log(1+y)}{y}=1.
    $$

!!! esercizio "Exercise 25"

    Compute

    $$
    \lim_{x\to+\infty}\left(\frac{x^2+3x}{x^2-5x}\right)^{(x+\log{x})}
    $$

??? soluzione "Solution"

    We have

    $$
    \begin{split}
    \lim_{x\to+\infty}\left(\frac{x^2+3x}{x^2-5x}\right)^{(x+\log{x})} =
    \lim_{x\to+\infty}\left(\frac{x+3}{x-5}\right)^{(x+\log{x})} &=
    \lim_{x\to+\infty}\left(1+\frac{8}{x-5}\right)^{(x+\log{x})} \\  &=
    \lim_{x\to+\infty}\left(1+\frac{1}{\frac{x-5}{8}}\right)^{(x+\log{x})}
    \end{split}
    $$

    Using the fundamental limit

    $$
    \lim_{x\to\pm\infty}\left(1+\frac{1}{x}\right)^{x}=e
    $$

    we obtain

    $$
    \lim_{x\to+\infty}\left(\frac{x^2+3x}{x^2-5x}\right)^{(x+\log{x})} = \lim_{x\to+\infty}\left[\left(1+\frac{1}{\frac{x-5}{8}}\right)^{\frac{x-5}{8}}\right]^{\frac{8(x+\log{x})}{x-5}}=e^8
    $$

    since

    $$
    \frac{8(x+\log{x})}{x-5} \sim \frac{8x}{x-5} \xrightarrow[]{x\to+\infty}8.
    $$

!!! esercizio "Exercise 26"

    Compute

    $$
    \lim_{x\to0} \frac{x\left(\pi^x-e^x\right)}{\cos(x)-1}
    $$

??? soluzione "Solution"

    We have

    $$
    \lim_{x\to0} \frac{x\left(\pi^x-e^x\right)}{\cos(x)-1} = \lim_{x\to0} \frac{x\pi^x\left(1-\left(\frac{e}{\pi}\right)^x\right)}{\cos(x)-1} = \lim_{x\to0} \pi^x\frac{x\left(1-\left(\frac{e}{\pi}\right)^x\right)}{\cos(x)-1}
    $$

    Since

    $$
    1-\left(\frac{e}{\pi}\right)^x \sim -x\log{\left(\frac{e}{\pi}\right)}
    $$

    and also

    $$
    \cos(x)-1 \sim -\frac{1}{2}x^2
    $$

    we obtain

    $$
    \lim_{x\to0} \frac{x\left(\pi^x-e^x\right)}{\cos(x)-1} = \lim_{x\to0} \pi^x\frac{-x^2\log{\left(\frac{e}{\pi}\right)}}{-\frac{1}{2}x^2}=2\log{\left(\frac{e}{\pi}\right)}.
    $$

!!! esercizio "Exercise 27"

    Compute

    $$
    \lim_{x\to0}\frac{\sin\left(\ln\left(1-x\right)\right)}{1-2^x}
    $$

??? soluzione "Solution"

    The limit is in fact immediate if we observe that, as $x\to0$,

    $$
    \ln{(1-x)} \sim -x
    $$

    and also

    $$
    1-2^x \sim -x\log{2}
    $$

    thus obtaining

    $$
    \lim_{x\to0}\frac{\sin\left(\ln\left(1-x\right)\right)}{1-2^x} = \lim_{x\to0}\frac{\sin(-x)}{-x\log2} = \frac{1}{\log2}
    $$

    since

    $$
    \sin(-x) \sim -x
    $$

!!! esercizio "Exercise 28"

    Compute

    $$
    \lim_{x\to+\infty} \frac{x^4\sin^2(\pi - 2\arctan(x))}{x^2+3}
    $$

??? soluzione "Solution"

    Recalling that

    $$
    \arctan(x) \xrightarrow[]{x\to+\infty} \frac{\pi}{2}
    $$

    and hence that

    $$
    \pi-2\arctan(x) \xrightarrow[]{x\to+\infty} 0
    $$

    we can immediately use the asymptotic estimate

    $$
    \sin^2(\pi - 2\arctan(x)) \sim (\pi-2\arctan(x))^2
    $$

    as well as

    $$
    \frac{x^4}{x^2+3} \sim x^2
    $$

    and say that

    \begin{align*}
    \lim_{x\to+\infty}\frac{x^4\sin^2(\pi - 2\arctan(x))}{x^2+3} &= \lim_{x\to+\infty} \frac{x^4(\pi-2\arctan(x))^2}{x^2+3} \\ &=\lim_{x\to+\infty} x^2(\pi-2\arctan(x))^2
    \end{align*}

    which is still an indeterminate form of the type $[0 \cdot +\infty]$. However, with the change of variable $y = \pi-2\arctan(x)$ and observing that

    \begin{align*}
    x = \tan\left(\frac{\pi}{2}-\frac{y}{2}\right) = \cot\left(\frac{y}{2}\right)
    \end{align*}

    we obtain

    \begin{align*}
    \lim_{x\to+\infty}x^2\left(\pi - 2\arctan(x)\right)^2 &= \lim_{y\to0}y^2\cot^2\left(\frac{y}{2}\right)
        \\ &= \lim_{y\to0}\frac{y^2}{\sin^2\left(\frac{y}{2}\right)}\cos^2\left(\frac{y}{2}\right) = 4.
    \end{align*}

!!! esercizio "Exercise 29"

    Compute

    $$
    \lim_{x\to1} \frac{\log{(x^x)}-\log{x}}{1-\cos(x-1)}
    $$

??? soluzione "Solution"

    Recalling that

    $$
    \log{(x^x)}-\log{x}=\log(e^{x\log{x}})-\log{x}=x\log{x}-\log{x}=(x-1)\log{x}
    $$

    we immediately have

    $$
    \lim_{x\to1} \frac{\log{(x^x)}-\log{x}}{1-\cos(x-1)}=\lim_{x\to1}\frac{(x-1)\log{x}}{1-\cos(x-1)}
    $$

    Setting, for greater clarity in the use of the asymptotic estimates, $x-1=t$, we obtain by substitution

    $$
    \lim_{x\to1}\frac{(x-1)\log{x}}{1-\cos(x-1)}=\lim_{t\to0}\frac{t\log{(1+t)}}{1-\cos{t}}=2
    $$

    since

    $$
    \frac{t\log{(1+t)}}{1-\cos{t}} \sim \frac{t^2}{\frac{1}{2}t^2}
    $$

!!! esercizio "Exercise 30"

    Compute

    $$
    \lim_{x\to+\infty} x\log{\left(\frac{3x+x^2}{1+x+x^2}\right)}
    $$

??? soluzione "Solution"

    We immediately observe that the limit is in the indeterminate form of the type $[+\infty\cdot0]$, since

    $$
    \frac{3x+x^2}{1+x+x^2} \xrightarrow[]{x\to+\infty} 1
    $$

    In order to resolve the indeterminate form, we can add and subtract $1$ inside the argument of the logarithm:

    $$
    \log{\left(\frac{3x+x^2}{1+x+x^2}\right)}=\log{\left(1+\frac{3x+x^2}{1+x+x^2}-1\right)}
    $$

    At this point, since

    $$
    \frac{3x+x^2}{1+x+x^2}-1 \xrightarrow[]{x\to+\infty} 0
    $$

    we can use the well-known asymptotic estimate of the logarithm, valid for some $\varepsilon(x)\to0$, obtaining

    $$
    \log{\left(1+\frac{3x+x^2}{1+x+x^2}-1\right)} \sim \frac{3x+x^2}{1+x+x^2}-1=\frac{2x-1}{1+x+x^2}
    $$

    The limit reduces to

    $$
    \lim_{x\to+\infty} x\left(\frac{2x-1}{1+x+x^2}\right)=2.
    $$

!!! esercizio "Exercise 31"

    Compute

    $$
    \lim_{x\to+\infty}\left(e^{\sqrt{x^{2}+x}}-e^{\sqrt{x^{2}-1}}\right)
    $$

??? soluzione "Solution"

    Factoring out $e^{\sqrt{x^{2}-1}}$ we obtain

    $$
    \lim_{x\to+\infty}e^{\sqrt{x^{2}-1}}\left(e^{\sqrt{x^{2}+x}-\sqrt{x^{2}-1}}-1\right).
    $$

    We examine the indeterminate form $\sqrt{x^{2}+x}-\sqrt{x^{2}-1}$ as $x\to+\infty$:

    $$
    \begin{array}{l}\lim_{x\to+\infty}\sqrt{x^{2}+x}-\sqrt{x^{2}-1}\cdot\frac{\sqrt{x^{2}+x}+\sqrt{x^{2}-1}}{\sqrt{x^{2}+x}+\sqrt{x^{2}-1}}=
    \lim_{x\to+\infty}\frac{x^{2}+x-x^{2}+1}{\sqrt{x^{2}+x}+\sqrt{x^{2}-1}}\\
    \\
    =\lim_{x\to+\infty}\frac{x+1}{x\left(\sqrt{1+\frac{1}{x}}+\sqrt{1-\frac{1}{x^{2}}}\right)}=\frac{1}{2}.\end{array}
    $$

    Hence the given limit equals

    $$
    \lim_{x\to+\infty}e^{\sqrt{x^{2}-1}}\left(e^{\sqrt{x^{2}+x}-\sqrt{x^{2}-1}}-1\right)=(\sqrt{e}-1)\lim_{x\to+\infty}e^{\sqrt{x^{2}-1}}
    =+\infty.
    $$

    Equivalently, from $1/x\to0$ as $x\to+\infty$ and from

    $$
    \sqrt{1+y}=1+(1/2)y+o(y)
    $$

    as $y\to0$, we have

    $$
    \sqrt{x^{2}+x}=x\sqrt{1+\frac{1}{x}}=x\left(1+\frac{1}{2x}+o\left(\frac{1}{x}\right)\right)=x+\frac{1}{2}+o(1),\ \ x\to+\infty,
    $$

    where $o(1)$ denotes a generic infinitesimal, and

    $$
    \sqrt{x^{2}-1}=x\sqrt{1-\frac{1}{x^{2}}}=x\left(1-\frac{1}{2x^{2}}+o\left(\frac{1}{x^{2}}\right)\right)=x-\frac{1}{2x}+
    o\left(\frac{1}{x}\right),\ \ x\to+\infty.
    $$

    Hence the given limit equals

    $$
    \begin{array}{l}
    \lim_{x\to+\infty}\left(e^{\sqrt{x^{2}+x}}-e^{\sqrt{x^{2}-1}}\right)=
    \lim_{x\to+\infty}\left(e^{x+1/2+o(1)}-e^{x-1/(2x)+o(1/x)}\right)=\\
    \\
    \lim_{x\to+\infty}e^{x}\left(e^{1/2+o(1)}-e^{-1/(2x)+o(1/x)}\right)
    =(\sqrt{e}-1)\lim_{x\to+\infty}e^{x}=+\infty.\end{array}
    $$

!!! chiave ""

    We have that $1/x\to0$ as $x\to+\infty$ and we have the asymptotic expansions as $y\to0$

    $$
    \sin y=y+o(y),\ \cos y=1-\frac{1}{2}y^{2}+o(y^{2}),\ e^{y}=1+y+o(y),\ \log(1+y)=y+o(y).
    $$

!!! esercizio "Exercise 32"

    Compute the following limit

    $$
    \lim_{x\to+\infty}\frac{1+x^{4}\sin(1/x^{4})}{x^{2}(1-\cos(1/x^{2}))}
    $$

??? soluzione "Solution"

    From the asymptotic expansion we have:

    $$
    \cos \left(\frac{1}{x^2} \right)=1-\frac{1}{2} \: \left(\frac{1}{x^2}\right)^2 + o\left(\left(\frac{1}{x^2}\right)^2\right) = 1-\frac{1}{2} \: \frac{1}{x^4} + o\left(\frac{1}{x^4}\right) {\rm ~~as~~} x\to \ip.
    $$

    Expanding the ratio asymptotically, we have:

    - for the numerator

        $$
        {1+x^{4}\sin\left(\frac{1}{x^{4}}\right)} = 1+x^{4}\left(\frac{1}{x^{4}}+o\left(\frac{1}{x^{4}}\right)\right) = 1+1+o(1)  {\rm ~~as~~} x\to \ip;
        $$

    - for the denominator

        $$
        x^{2}\left[1-\cos\left(\frac{1}{x^{2}}\right)\right] = x^{2}\left[1-\left(1-\frac{1}{2} \: \frac{1}{x^4} + o\left(\frac{1}{x^4}\right)\right)\right]=
        $$

        $$
        =x^{2}\left[\frac{1}{2} \: \frac{1}{x^4} - o\left(\frac{1}{x^4}\right)\right] = \frac{1}{2} \: \frac{1}{x^2} -  o\left(\frac{1}{x^2}\right) = \frac{1}{2} \: \frac{1}{x^2} +  o\left(\frac{1}{x^2}\right) {\rm ~~as~~} x\to \ip.
        $$

    Hence we obtain:

    $$
    \lim_{x\to+\infty}\frac{1+x^{4}\sin\left(\frac{1}{x^{4}}\right)}{x^{2}\left[1-\cos\left(\frac{1}{x^{2}}\right)\right]}=\lim_{x\to+\infty} \frac{2 + o(1)}{\frac{1}{2} \: \frac{1}{x^2} +  o\left(\frac{1}{x^2}\right)}= +\infty
    $$

    where, as always, $o(1)$ denotes a generic infinitesimal.

!!! esercizio "Exercise 33"

    Compute the following limit

    $$
    \lim_{x\to+\infty}\frac{x^{2}e^{-1/x^{4}}-x^{2}}{\log(x^{2}+1)-2\log x}
    $$

??? soluzione "Solution"

    $$
    \begin{array}{l}\lim_{x\to+\infty}\frac{x^{2}\left(e^{-1/x^{4}}-1\right)}{\log(x^{2}+1)-\log x^{2}}=
    \lim_{x\to+\infty}\frac{x^{2}\left(-\frac{1}{x^{4}}+o\left(\frac{1}{x^{4}}\right)\right)}{\log\left(1+\frac{1}{x^{2}}\right)}=\\
    \\
    =\lim_{x\to+\infty}\frac{-\frac{1}{x^{2}}+o\left(\frac{1}{x^{2}}\right)}{\frac{1}{x^{2}}+o\left(\frac{1}{x^{2}}\right)}=
    \lim_{x\to+\infty}\frac{-\frac{1}{x^{2}}+o\left(\frac{1}{x^{2}}\right)}
    {\frac{1}{x^{2}}+o\left(\frac{1}{x^{2}}\right)}=\lim_{x\to+\infty}\frac{-\frac{1}{x^{2}}}{\frac{1}{x^{2}}}=-1.\end{array}
    $$

!!! esercizio "Exercise 34"

    Compute

    $$
    \lim_{x\to0}\frac{e^{-x^{4}}-x^{4}-1}{x^{2}\cos x-x^{2}}
    $$

??? soluzione "Solution"

    We use the expansion

    $$
    e^{-x^{4}}=1-x^{4}+o(x^{4}) {\rm ~~as~~} x\to0
    $$

    and the equivalence

    $$
    \cos x-1\sim -x^{2}/2 {\rm ~~as~~} x\to0.
    $$

    Hence we have

    $$
    \begin{array}{l}\lim_{x\to0}\frac{e^{-x^{4}}-x^{4}-1}{x^{2}(\cos x-1)}=
    \lim_{x\to0}\frac{1-x^{4}+o(x^{4})-x^{4}-1}{x^{2}\left(-\frac{x^{2}}{2}\right)}=\\
    \\
    =\lim_{x\to0}\frac{-2x^{4}+o(x^{4})}{-\frac{x^{4}}{2}}=\lim_{x\to0}\frac{-2x^{4}}{-\frac{x^{4}}{2}}=4.\end{array}
    $$

!!! esercizio "Exercise 35"

    Compute

    $$
    \lim_{x\to\pi/4}(2\sin^{2}x)^{\frac{1}{\cos2x}}
    $$

??? soluzione "Solution"

    Using $\cos2x=1-2\sin^{2}x$ and setting $y=1-2\sin^{2}x$, we observe that $y\to0$ as $x\to\pi/4$ and the given limit equals

    $$
    \lim_{y\to0}(1-y)^{\frac{1}{y}}=\lim_{y\to0}e^{\frac{\log(1-y)}{y}}=e^{-1}=\frac{1}{e}
    $$

    also by virtue of the fundamental limit

    $$
    \lim_{y\to0}\frac{\log(1-y)}{y}=-1.
    $$

!!! esercizio "Exercise 36"

    Compute

    $$
    \lim_{x\to0^{+}}\frac{(1+x^{5})^{\frac{1}{x^{2}\sin2x}}-1}{2\log(1+x^{3})}
    $$

??? soluzione "Solution"

    We write the numerator in the form

    $$
    e^{\frac{\log(1+x^{5})}{x^{2}\sin2x}}-1
    $$

    and we analyze the exponent. As $x\to0$ we have

    $$
    \frac{\log(1+x^{5})}{x^{2}\sin2x}\sim\frac{x^{5}}{x^{2}\cdot2x}=\frac{x^{2}}{2}.
    $$

    From this and from $e^{y}-1\sim y$ as $y\to0$, it follows that

    $$
    e^{\frac{\log(1+x^{5})}{x^{2}\sin2x}}-1\sim\frac{\log(1+x^{5})}{x^{2}\sin2x}\sim \frac{x^{2}}{2}.
    $$

    The given limit equals

    $$
    \lim_{x\to0^{+}}\frac{(1+x^{5})^{\frac{1}{x^{2}\sin2x}}-1}{2\log(1+x^{3})}=
    \lim_{x\to0^{+}}\frac{\frac{x^{2}}{2}}{2x^{3}}=\frac{1}{4}\lim_{x\to0^{+}}\frac{1}{x}=+\infty.
    $$

!!! esercizio "Exercise 37"

    Compute

    $$
    \lim_{x\to0^{+}}\frac{1-x^{x}}{x^{2}}
    $$

??? soluzione "Solution"

    Writing the numerator in the form

    $$
    1-e^{x\log x},
    $$

    the exponent $x\log x$ tends to zero as $x\to0^{+}$. Since $1-e^{y}\sim -y$ as $y\to0$, it follows that

    $$
    1-e^{x\log x}\sim -x\log x,\ \ x\to0^{+}.
    $$

    The given limit equals

    $$
    \lim_{x\to0^{+}}\frac{1-x^{x}}{x^{2}}=\lim_{x\to0^{+}}\frac{-x\log x}{x^{2}}=\lim_{x\to0^{+}}\frac{-\log x}{x}=+\infty.
    $$

!!! esercizio "Exercise 38"

    Compute

    $$
    \lim_{x\to0}\frac{\sin(e^{x^{3}}-1)}{\sqrt{1+x^{3}}-1}
    $$

??? soluzione "Solution"

    We have

    $$
    \sin(e^{x^{3}}-1)\sim e^{x^{3}}-1\sim x^{3},\ \ x\to0^{+}
    $$

    and

    $$
    \sqrt{1+x^{3}}-1\sim\frac{1}{2}x^{3},\ \ x\to0^{+}.
    $$

    The given limit equals

    $$
    \lim_{x\to0}\frac{\sin(e^{x^{3}}-1)}{\sqrt{1+x^{3}}-1}=\lim_{x\to0}\frac{x^{3}}{\frac{1}{2}x^{3}}=2.
    $$

!!! esercizio "Exercise 39"

    Compute

    $$
    \lim_{x\to0^{+}}\frac{x^{x}-e^{x}+x^{\alpha}}{\sin\sqrt{x}}=L
    $$

    as the parameter $\alpha>0$ varies.

??? soluzione "Solution"

    We have

    $$
    \lim_{x\to0^{+}}\frac{x\log x}{x^{\alpha}}=\left\{\begin{array}{lr}0,\ &\alpha<1\\
    \\
    -\infty,\ &\alpha=1\end{array}\right.
    $$

    hence, as $x\to0^{+}$, the infinitesimal $x\log x$ is of lower order than $x$ ($x=o(x\log x)$) but of higher order than $x^{\alpha}$ if $\alpha<1$ ($x\log x=o(x^{\alpha})$, $\alpha<1$).

    Hence, from the expansion

    $$
    e^{y}=1+y+o(y), \ y\to0,
    $$

    it follows

    $$
    \begin{array}{l} x^{x}-e^{x}+x^{\alpha}=e^{x\log x}-e^{x}+x^{\alpha}=\\
    \\
    1+x\log x+o(x\log x)-1-x+o(x)+x^{\alpha}=\\
    \\
    \left\{\begin{array}{lr}x\log x+o(x\log x),\ \ \ &\alpha\geq1\\
    \\
    x^{\alpha}+o(x^{\alpha}),\ \ \ &0<\alpha<1.\end{array}\right.\end{array}
    $$

    The given limit equals

    $$
    \lim_{x\to0^{+}}\frac{x^{x}-e^{x}+x^{\alpha}}{\sin\sqrt{x}}=
    \left\{\begin{array}{lr}\lim_{x\to0^{+}}\frac{x\log x}{\sqrt{x}}=\lim_{x\to0^{+}}\sqrt{x}\log x=0,\ \ \ &\alpha\geq1\\
    \\
    \lim_{x\to0^{+}}\frac{x^{\alpha}}{\sqrt{x}}=0,\ \ \ &1/2<\alpha<1\\
    \\
    \lim_{x\to0^{+}}\frac{\sqrt{x}}{\sqrt{x}}=1,\ \ \ &\alpha=1/2\\
    \\
    \lim_{x\to0^{+}}\frac{x^{\alpha}}{\sqrt{x}}=+\infty,\ \ \ &0<\alpha<1/2.\end{array}\right.
    $$
