---
title: "Continuous extensions"
---

# Continuous extensions

<div class="info-capitolo" markdown>

**Exercises · Derivatives** · with worked solutions · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-4-derivatives.pdf)

</div>

!!! esercizio "Exercise 1"

    For the following function, determine whether there exist continuous extensions at the endpoints of the domain. Then study the differentiability of such extensions.

    $$
    f:[0,\pi/2)\rightarrow\R,\ f(x)=(\cos x)^{(\pi/2)-x}
    $$

??? soluzione "Solution"

    Setting $y=\pi/2-x$ we have

    $$
    \begin{array}{l}\ds\lim_{x\to\pi/2^{-}}f(x)=\lim_{x\to\pi/2^{-}}e^{\left(\frac{\pi}{2}-x\right)\log\cos x}=
    \lim_{y\to0^{+}}e^{y\log\sin y}=\lim_{y\to0^{+}}e^{y\log(y+o(y))}=\\
    \\
    =\lim_{y\to0^{+}}e^{y\log(y(1+o(1))}=\lim_{y\to0^{+}}e^{y\log y+y\log(1+o(1))}=e^{0}=1.\end{array}
    $$

    We obtain a continuous extension by setting

    $$
    f(\pi/2)=1.
    $$

    We examine the limit of the difference quotient:

    $$
    \begin{array}{l}
    \ds\lim_{x\to\pi/2^{-}}\frac{f(x)-f(\pi/2)}{x-\pi/2}=
    \lim_{x\to\pi/2^{-}}\frac{e^{\left(\frac{\pi}{2}-x\right)\log\cos x}-1}{x-\pi/2}=\\
    \\
    = \lim_{x\to\pi/2^{-}}\frac{\left(\frac{\pi}{2}-x\right)\log\cos x}{x-\pi/2}=\lim_{x\to\pi/2^{-}}-\log\cos x=+\infty\end{array}
    $$

    using the equivalence

    $$
    e^{t}-1\sim t, \ \ t\to0
    $$

    with

    $$
    t=\left(\frac{\pi}{2}-x\right)\log\cos x,\ \ \ x\to\pi/2^{-}.
    $$

    It follows that $f$ can be extended continuously at $x=\pi/2$, but this extension is not differentiable at $x=\pi/2$ (vertical tangent).

!!! esercizio "Exercise 2"

    For the following function, determine whether there exist continuous extensions at the endpoints of the domain. Then study the differentiability of such extensions.

    $$
    f:(0,1)\rightarrow\R,\ f(x)=(\cos (\pi x/2))^{\log x}
    $$

??? soluzione "Solution"

    We have

    $$
    \lim_{x\to0}f(x)=\lim_{x\to0}e^{\log x\log\cos (\pi x/2)}=e^{0}=1
    $$

    since

    $$
    \begin{array}{l}\ds\lim_{x\to0}\log x\log\cos (\pi x/2)=\lim_{x\to0}\log x\log\left(1-\frac{\pi^{2}}{8}x^{2}+o\left(x^{2}\right)\right)=\\
    \\
    = \lim_{x\to0}\left(-\frac{\pi^{2}}{8}x^{2}+o\left(x^{2}\right)\right)\log x=\lim_{x\to0}-\frac{\pi^{2}}{8}x^{2}\log x=0.\end{array}
    $$

    We obtain a continuous extension by setting

    $$
    f(0)=1.
    $$

??? soluzione "Solution"

    We examine the limit of the difference quotient:

    $$
    \begin{array}{l}
    \ds\lim_{x\to0}\frac{f(x)-f(0)}{x}=
    \lim_{x\to0}\frac{e^{\log x\log\cos (\pi x/2)}-1}{x}=\\
    \\
    =\lim_{x\to0}\frac{\log x\log\cos (\pi x/2)}{x}=\lim_{x\to0}-\frac{\pi^{2}}{8}x\log x=0\end{array}
    $$

    using the equivalences

    $$
    e^{t}-1\sim t, \ \ t\to0
    $$

    with

    $$
    t=\log x\log\cos (\pi x/2),\ \ \ x\to0
    $$

    and

    $$
    \log\cos (\pi x/2)\sim -\frac{\pi^{2}}{8}x^{2},\ \ \ x\to0.
    $$

    It follows that $f$ can be extended continuously at $x=0$, and this extension is differentiable at $x=0$ with

    $$
    f'(0)=0.
    $$

??? soluzione "Solution"

    We now examine the behavior for $x\to1$ by setting $y=x-1$:

    $$
    \lim_{x\to1}f(x)=\lim_{x\to1}e^{\log x\log\cos (\pi x/2)}=\lim_{y\to0}e^{\log(1+y)\log(-\sin(\pi y/2))}=e^{0}=1
    $$

    since

    $$
    \begin{array}{l}\ds\lim_{y\to0}\log (1+y)\log(-\sin (\pi y/2))=\lim_{y\to0}y\log\left(-\pi y/2+o(y)\right)=\\
    \\
    =\lim_{y\to0}y\log\left(-\pi y/2(1+o(1))\right)=\\
    \\
    =\lim_{y\to0}y\log\left(-\pi y/2)+\lim_{y\to0}y\log(1+o(1))\right)=0+0=0.\end{array}
    $$

    We obtain a continuous extension by setting

    $$
    f(1)=1.
    $$

    We examine the limit of the difference quotient:

    $$
    \begin{array}{l}
    \ds\lim_{x\to1}\frac{f(x)-f(1)}{x-1}=
    \lim_{x\to1}\frac{e^{\log x\log\cos (\pi x/2)}-1}{x-1}=\lim_{y\to0}\frac{e^{\log(1+y)\log(-\sin(\pi y/2))}-1}{y}=\\
    \\
    =\lim_{y\to0}\frac{\log(1+y)\log(-\sin(\pi y/2))}{y}=\lim_{y\to0}\log(-\sin(\pi y/2))=-\infty\end{array}
    $$

    using the equivalences

    $$
    e^{t}-1\sim t, \ \ t\to0
    $$

    with

    $$
    t=\log(1+y)\log(-\sin(\pi y/2)),\ \ \ y\to0
    $$

    and

    $$
    \log(1+y)\sim y,\ \ \ y\to0.
    $$

    It follows that $f$ can be extended continuously at $x=1$, but this extension is not differentiable at $x=1$ (vertical tangent).

!!! esercizio "Exercise 3"

    For the following function, determine whether there exist continuous extensions at the endpoints of the domain. Then study the differentiability of such extensions.

    $$
    f:(0,1]\rightarrow\R,\ f(x)=\frac{\sqrt{\cos x}-1}{x^{2}}
    $$

??? soluzione "Solution"

    We expand the function $\sqrt{\cos x}$ to order $3$ with initial point $x=0$, using

    $$
    \cos x=1-\frac{1}{2}x^{2}+o(x^{3})
    $$

    and

    $$
    \sqrt{1+y}=1+\frac{1}{2}y-\frac{1}{8}y^{2}+\frac{1}{16}y^{3}+o(y^{3})
    $$

    with $y=-(1/2)x^{2}+o(x^{2})$:

    $$
    \sqrt{\cos x}=1-\frac{1}{4}x^{2}+o(x^{3}).
    $$

    It follows that

    $$
    f(x)=\frac{\sqrt{\cos x}-1}{x^{2}}=-\frac{1}{4}+o(x)
    $$

    hence $f$ can be extended continuously at $x=0$ by setting

    $$
    f(0)=-\frac{1}{4}
    $$

    and this extension turns out to be differentiable with

    $$
    f'(0)=0.
    $$

    Indeed

    $$
    \lim_{x\to0}f(x)=\lim_{x\to0}-\frac{1}{4}+o(x)=-\frac{1}{4}
    $$

    and

    $$
    \lim_{x\to0}\frac{f(x)-f(0)}{x}=\lim_{x\to0}\frac{-\frac{1}{4}+o(x)+\frac{1}{4}}{x}=\lim_{x\to0}\frac{o(x)}{x}=0.
    $$

!!! esercizio "Exercise 4"

    For the following function, determine whether there exist continuous extensions at the endpoints of the domain. Then study the differentiability of such extensions.

    $$
    f:(0,\pi/2]\rightarrow\R,\ f(x)=(1-\cos x)^{\log(1+x)}
    $$

??? soluzione "Solution"

    We have

    $$
    \lim_{x\to0}f(x)=\lim_{x\to0}e^{\log(1+x)\log(1-\cos x)}=e^{0}=1
    $$

    since

    $$
    \begin{array}{l}\ds\lim_{x\to0}\log(1+x)\log(1-\cos x)=\lim_{x\to0} x\log\left(\frac{1}{2}x^{2}+o\left(x^{2}\right)\right)=\\
    \\
    = \lim_{x\to0}x\log\left(\frac{1}{2}x^{2}(1+o(1)\right)=\\
    \\
    = \lim_{x\to0}x\log\left(\frac{1}{2}x^{2}\right)+\lim_{x\to0}x\log(1+o(1))=0+0=0.\end{array}
    $$

    We obtain a continuous extension by setting

    $$
    f(0)=1.
    $$

    We examine the limit of the difference quotient:

    $$
    \begin{array}{l}
    \ds\lim_{x\to0}\frac{f(x)-f(0)}{x}=
    \lim_{x\to0}\frac{e^{\log(1+x)\log(1-\cos x)}-1}{x}=\\
    \\
    = \lim_{x\to0}\frac{\log(1+x)\log(1-\cos x)}{x}=\lim_{x\to0}\log(1-\cos x)=-\infty\end{array}
    $$

    using the equivalence

    $$
    e^{t}-1\sim t, \ \ t\to0
    $$

    with

    $$
    t=\log(1+x)\log(1-\cos x),\ \ \ x\to0.
    $$

    It follows that $f$ can be extended continuously at $x=0$, but this extension is not differentiable at $x=0$ (vertical tangent).
