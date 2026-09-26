---
title: "Asymptotes"
---

# Asymptotes

<div class="info-capitolo" markdown>

**Exercises · Derivatives** · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-derivatives-04-asymptotes.pdf)

</div>

!!! esercizio "Exercise 1"

    Determine the asymptotes (if any) of the following function on its natural domain

    $$
    f(x)=\sqrt{\frac{x^{3}-x}{x+2}}
    $$

??? soluzione "Solution"

    The function $f$ is defined on

    $$
    (-\infty,-2)\cup[-1,0]\cup[1,+\infty).
    $$

    Since

    $$
    \lim_{x\to-2^{-}}f(x)=+\infty
    $$

    the line $x=-2$ is a vertical asymptote.

    For $x\to+\infty$ we have

    $$
    \lim_{x\to+\infty}\frac{f(x)}{x}=\lim_{x\to+\infty}\sqrt{\frac{x^{3}-x}{x^{3}+2x^{2}}}=1
    $$

    and

    $$
    \begin{array}{l}\ds\lim_{x\to+\infty}f(x)-x=\lim_{x\to+\infty}\left(\sqrt{\frac{x^{3}-x}{x+2}}-x\right)
    \frac{\sqrt{\frac{x^{3}-x}{x+2}}+x}{\sqrt{\frac{x^{3}-x}{x+2}}+x}=\\
    \\
    \ds\lim_{x\to+\infty}\left(\frac{x^{3}-x}{x+2}-x^{2}\right)\frac{1}{x\left(\sqrt{\frac{x^{3}-x}{x^{3}+2x^{2}}}+1\right)}=\\
    \\
    \ds\lim_{x\to+\infty}\frac{-2x-1}{x+2}\frac{1}{\sqrt{\frac{x^{3}-x}{x^{3}+2x^{2}}}+1}=-1
    \end{array}
    $$

    hence we have the asymptote

    $$
    y=x-1,\ \ x\to+\infty.
    $$

??? soluzione "Solution"

    For $x\to-\infty$ we have

    $$
    \lim_{x\to-\infty}\frac{f(x)}{x}=\lim_{x\to-\infty}-\sqrt{\frac{x^{3}-x}{x^{3}+2x^{2}}}=-1
    $$

    and

    $$
    \begin{array}{l}\ds\lim_{x\to-\infty}f(x)+x=\lim_{x\to-\infty}\left(\sqrt{\frac{x^{3}-x}{x+2}}+x\right)
    \frac{\sqrt{\frac{x^{3}-x}{x+2}}-x}{\sqrt{\frac{x^{3}-x}{x+2}}-x}=\\
    \\
    \ds\lim_{x\to-\infty}\left(\frac{x^{3}-x}{x+2}-x^{2}\right)\frac{1}{-x\left(\sqrt{\frac{x^{3}-x}{x^{3}+2x^{2}}}+1\right)}=\\
    \\
    \ds\lim_{x\to-\infty}\frac{2x+1}{x+2}\frac{1}{\sqrt{\frac{x^{3}-x}{x^{3}+2x^{2}}}+1}=1
    \end{array}
    $$

    hence we have the asymptote

    $$
    y=-x+1,\ \ x\to-\infty.
    $$

??? soluzione "Solution"

    Using the asymptotic expansion

    $$
    \sqrt{1+y}=1+\frac{1}{2}y+o(y),\ \ y\to0
    $$

    and taking into account the equivalence

    $$
    \frac{2x+1}{x^{2}+2x}\sim\frac{2}{x},\ \ \ x\to\pm\infty,
    $$

    hence

    $$
    \frac{2x+1}{x^{2}+2x}\sim\frac{2}{x}+o\left(\frac{1}{x}\right),\ \ \ x\to\pm\infty,
    $$

    we can also proceed as follows:

    $$
    \begin{array}{l}
    \ds f(x)=|x|\sqrt{1-\frac{2x+1}{x^{2}+2x}}=\\
    \\
    |x|\sqrt{1-(2/x)+o(1/x)}=|x|(1-(1/x)+o(1/x))=\\
    \\
    |x|-{\rm sgn}(x)+o(1),\ \ \ x\to\pm\infty
    \end{array}
    $$

    hence we recover the oblique asymptotes $y=-x+1$ for $x\to-\infty$ and $y=x-1$ for $x\to+\infty$.

!!! esercizio "Exercise 2"

    Determine the asymptotes (if any) of the following function on its natural domain

    $$
    f(x)=\sqrt{9x^{2}+2x+1}
    $$

??? soluzione "Solution"

    The function $f$ is defined on all of $\R$.

    For $x\to+\infty$ we have

    $$
    \lim_{x\to+\infty}\frac{f(x)}{x}=\lim_{x\to+\infty}\sqrt{9+2/x+1/x^{2}}=3
    $$

    and

    $$
    \begin{array}{l}\ds\lim_{x\to+\infty}f(x)-3x=\lim_{x\to+\infty}\left(\sqrt{9x^{2}+2x+1}-3x\right)
    \frac{\sqrt{9x^{2}+2x+1}+3x}{\sqrt{9x^{2}+2x+1}+3x}=\\
    \\
    \ds\lim_{x\to+\infty}\frac{2x+1}{3x\left(\sqrt{1+2/(9x)+1/(9x^{2})}+1\right)}=\frac{1}{3}\end{array}
    $$

    hence we have the asymptote

    $$
    y=3x+\frac{1}{3},\ \ \ x\to+\infty.
    $$

    For $x\to-\infty$ we have

    $$
    \lim_{x\to-\infty}\frac{f(x)}{x}=\lim_{x\to-\infty}-\sqrt{9+2/x+1/x^{2}}=-3
    $$

    and

    $$
    \begin{array}{l}\ds\lim_{x\to-\infty}f(x)+3x=\lim_{x\to-\infty}\left(\sqrt{9x^{2}+2x+1}+3x\right)
    \frac{\sqrt{9x^{2}+2x+1}-3x}{\sqrt{9x^{2}+2x+1}-3x}=\\
    \\
    \ds\lim_{x\to-\infty}\frac{2x+1}{-3x\left(\sqrt{1+2/(9x)+1/(9x^{2})}+1\right)}=-\frac{1}{3}\end{array}
    $$

    hence we have the asymptote

    $$
    y=-3x-\frac{1}{3},\ \ \ x\to-\infty.
    $$

??? soluzione "Solution"

    Alternatively, we can proceed as follows:

    $$
    \begin{array}{l}
    f(x)=3|x|\sqrt{1+\frac{2}{9x}+\frac{1}{9x^{2}}}=\\
    \\
    3|x|\sqrt{1+(2/9x)+o(1/x)}=3|x|(1+(1/9x)+o(1/x))=\\
    \\
    3|x|+(1/3){\rm sgn}(x)+o(1),\ \ \ x\to\pm\infty
    \end{array}
    $$

    hence we recover the oblique asymptotes $y=-3x-(1/3)$ for $x\to-\infty$ and $y=3x+(1/3)$ for $x\to+\infty$.

!!! esercizio "Exercise 3"

    Determine the asymptotes (if any) of the following function on its natural domain

    $$
    f(x)=x\left(e^{-\frac{1}{x}}+\sin\frac{1}{x}\right)
    $$

??? soluzione "Solution"

    The function $f$ is defined for $x\neq0$. We have

    $$
    \lim_{x\to0^{-}}f(x)=\lim_{x\to0^{-}}xe^{-\frac{1}{x}}+\lim_{x\to0^{-}}x\sin\frac{1}{x}=-\infty+0=-\infty
    $$

    where

    $$
    \lim_{x\to0^{-}}xe^{-\frac{1}{x}}=-\infty
    $$

    follows from the fact that $e^{-1/x}$ is an infinite quantity of higher order than $1/x$ for $x\to0^{-}$ and that $xe^{-1/x}<0$ for $x<0$. For the limit

    $$
    \lim_{x\to0^{-}}x\sin\frac{1}{x}=0
    $$

    we used the fact that the product of an infinitesimal ($x$) and a bounded function ($\sin(1/x)$) is an infinitesimal. The line $x=0$ is therefore a vertical asymptote.

??? soluzione "Solution"

    For $x\to\pm\infty$ we have

    $$
    \lim_{x\to\pm\infty}\frac{f(x)}{x}=\lim_{x\to\pm\infty}e^{-\frac{1}{x}}+\sin\frac{1}{x}=1
    $$

    and

    $$
    \begin{array}{l}\ds\lim_{x\to\pm\infty}f(x)-x=\lim_{x\to\pm\infty}\frac{e^{-\frac{1}{x}}-1}{\frac{1}{x}}+
    \frac{\sin\frac{1}{x}}{\frac{1}{x}}=\\
    \\
    \ds\lim_{y\to0^{\pm}}\frac{e^{-y}-1}{y}+\lim_{y\to0^{\pm}}\frac{\sin y}{y}=-1+1=0\end{array}
    $$

    hence there is the oblique asymptote

    $$
    y=x
    $$

    both for $x\to-\infty$ and for $x\to+\infty$.

??? soluzione "Solution"

    The same result can be obtained with the expansions $e^{y}=1+y+o(y)$, $\sin y=y+o(y)$ for $y\to0$:

    $$
    f(x)=x(1-1/x+o(1/x))+x(1/x+o(1/x))=x-1+1+o(1)=x+o(1)
    $$

    for $x\to\pm\infty$, which means exactly that we have the oblique asymptote

    $$
    y=x
    $$

    both for $x\to-\infty$ and for $x\to+\infty$.
