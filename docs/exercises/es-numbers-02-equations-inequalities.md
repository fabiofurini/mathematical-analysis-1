---
title: "Equations and inequalities in one real variable"
---

# Equations and inequalities in one real variable

<div class="info-capitolo" markdown>

**Exercises · Numbers and logic** · with worked solutions · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-1-numbers.pdf)

</div>

!!! esercizio "Exercise 1"

    Solve the following inequality in the real variable $x$:

    $$
    \frac{x^{2}-2x}{x^{2}-4x+3}>0
    $$

??? soluzione "Solution"

    The numerator $x^{2}-2x$ is positive for $x<0$ or for $x>2$, zero for $x=0$, $x=2$, and negative for $0<x<2$. The denominator $x^{2}-4x+3$ is positive for $x<1$ or for $x>3$, and negative for $1<x<3$. The quotient is defined and has the required positive sign for

    $$
    x\in(-\infty,0)\cup(1,2)\cup(3,+\infty).
    $$

!!! esercizio "Exercise 2"

    Solve the following inequality in the real variable $x$:

    $$
    \log(x-1)^{2}-\log(x-2)>0
    $$

??? soluzione "Solution"

    The function $f(x)=\log(x-1)^{2}-\log(x-2)$ is defined for $x>2$, since for such $x$, and only for such $x$, we have $x-2>0$, $(x-1)^{2}>0$. In its domain, we have, as required, $f(x)>0$ if and only if

    $$
    \log(x-1)^{2}>\log(x-2), \ \ \ x>2
    $$

    hence if and only if

    $$
    \left\{\begin{array}{l}(x-1)^{2}>x-2\\
    \\
    x>2\end{array} \right.
    $$

    We obtain

    $$
    \left\{\begin{array}{l}x^{2}-3x+3>0\\
    \\
    x>2\end{array}\right.
    $$

    which is equivalent to

    $$
    x>2
    $$

    since $x^{2}-3x+3>0$ is satisfied for every $x$. On its whole domain $(2,+\infty)$ the function $f(x)$ takes positive values.

!!! esercizio "Exercise 3"

    Solve the following inequality in the real variable $x$:

    $$
    e^{x}+e^{-x}<\frac{10}{3}
    $$

??? soluzione "Solution"

    For every $x\in\R$

    $$
    e^{x}+e^{-x}<\frac{10}{3}
    $$

    is equivalent to

    $$
    3e^{2x}-10e^{x}+3<0
    $$

    hence to

    $$
    \frac{1}{3}<e^{x}<3.
    $$

    It follows that the inequality is solved by

    $$
    -\log3<x<\log3.
    $$

!!! esercizio "Exercise 4"

    Solve the following inequality in the real variable $x$:

    $$
    8^{x+1}\geq2^{x^{2}}
    $$

??? soluzione "Solution"

    For every $x\in\R$

    $$
    8^{x+1}\geq2^{x^{2}}
    $$

    is equivalent to

    $$
    2^{3x+3}\geq2^{x^{2}}
    $$

    hence to

    $$
    3x+3\geq x^{2}
    $$

    since $2^{x}$ is a strictly increasing function on $\R$. It follows that the inequality is solved by

    $$
    \frac{3-\sqrt{21}}{2}\leq x\leq \frac{3+\sqrt{21}}{2}.
    $$

!!! esercizio "Exercise 5"

    Solve the following inequality in the real variable $x$:

    $$
    \log(1-\sin x)\geq0
    $$

??? soluzione "Solution"

    The function $f(x)=\log(1-\sin x)$ is defined for $\sin x<1$, hence for

    $$
    x\neq\frac{\pi}{2}+2k\pi,\ \ \ k\in{\bf Z}.
    $$

    For such $x$ we have $f(x)\geq0$ if and only if

    $$
    1-\sin x\geq1
    $$

    hence for

    $$
    \sin x\leq 0.
    $$

    The given inequality is solved for

    $$
    \pi+2k\pi\leq x\leq 2\pi+2k\pi,\ \ \ k\in{\bf Z}
    $$

    i.e., for

    $$
    x\in\bigcup_{k\in{\bf Z}}[\pi+2k\pi, 2\pi+2k\pi].
    $$

!!! esercizio "Exercise 6"

    Solve the following inequality in the real variable $x$:

    $$
    |x|\sqrt{1-2x^{2}}>2x^{2}-1
    $$

??? soluzione "Solution"

    $\sqrt{1-2x^{2}}$ is defined for $1-2x^{2}\geq0$. When $1-2x^{2}=0$ the inequality is not satisfied, since it reduces to $0>0$. When $1-2x^{2}>0$ the inequality is satisfied, since the left-hand side $|x|\sqrt{1-2x^{2}}$ is the product of two positive numbers while the right-hand side $2x^{2}-1=-(1-2x^{2})$ is negative. Therefore the inequality is solved for

    $$
    -\sqrt{\frac{1}{2}}<x<\sqrt{\frac{1}{2}}.
    $$

!!! esercizio "Exercise 7"

    Solve the following equation in the real variable $x$:

    $$
    \sin^{2}x=2\cos^{2}x-\frac{1}{2}
    $$

??? soluzione "Solution"

    The equation

    $$
    \sin^{2}x=2\cos^{2}x-\frac{1}{2}
    $$

    is equivalent to

    $$
    \begin{array}{l}2\sin^{2}x=4(1-\sin^{2}x)-1\\
    \\
    6\sin^{2}x=3\\
    \\
    \sin x=\pm\sqrt{\frac{1}{2}}.\end{array}
    $$

    The solutions are given by

    $$
    x=\frac{\pi}{4}+\frac{k\pi}{2},\ \ \ k\in{\bf Z}.
    $$

!!! esercizio "Exercise 8"

    Solve the following inequality in the real variable $x$:

    $$
    e^{\sin^{2}x-\sin x}\leq1
    $$

??? soluzione "Solution"

    For every $x\in\R$, $e^{\sin^{2}x-\sin x}\leq1$ is equivalent to

    $$
    \sin^{2}x-\sin x\leq0
    $$

    hence to

    $$
    0\leq\sin x\leq1.
    $$

    The solutions are given by

    $$
    2k\pi\leq x\leq \pi+2k\pi,\ \ \ k\in{\bf Z}
    $$

    i.e., by

    $$
    x\in\bigcup_{k\in{\bf Z}}[2k\pi, \pi+2k\pi].
    $$

!!! esercizio "Exercise 9"

    Solve the following inequality in the real variable $x$:

    $$
    2\left|x^{2}-x\right|>|x|
    $$

??? soluzione "Solution"

    The inequality $2\left|x^{2}-x\right|>|x|$ is not satisfied for $x=0$. For $x\neq0$, dividing by the positive term $|x|$, it is equivalent to

    $$
    2\left|x-1\right|>1
    $$

    hence to

    $$
    |x-1|>1/2.
    $$

    The solutions are given by

    $$
    (x-1<-1/2, \ x\neq0)\vee (x-1>1/2),
    $$

    $$
    (x<1/2, \ x\neq0)\vee x>3/2
    $$

    hence by

    $$
    x\in(-\infty,0)\cup(0,1/2)\cup(3/2,+\infty).
    $$

!!! esercizio "Exercise 10"

    Solve the following inequality in the real variable $x$:

    $$
    (x+1)^{x^{2}-1}>1
    $$

??? soluzione "Solution"

    The function $f(x)=(x+1)^{x^{2}-1}$ is defined for $x>-1$. For such $x$, $f(x)>1$ is equivalent to

    $$
    e^{(x^{2}-1)\log(x+1)}>1
    $$

    hence to

    $$
    (x^{2}-1)\log(x+1)>0,\ \ \ x>-1.
    $$

    Dividing by the positive term $x+1$ we obtain

    $$
    (x-1)\log(x+1)>0,\ \ \ x>-1.
    $$

    The factor $x-1$ is positive for $x>1$, zero for $x=1$, and negative for $-1<x<1$. The factor $\log(x+1)$ is positive for $x>0$, zero for $x=0$, and negative for $-1<x<0$. By the rule of signs, the solutions are given by

    $$
    x\in(-1,0)\cup(1,+\infty).
    $$

!!! esercizio "Exercise 11"

    Solve the following equation in the real variable $x$:

    $$
    3^{|x^{2}-4|}=0
    $$

??? soluzione "Solution"

    $3^{|x^{2}-4|}=0$ has no solutions, since $3^{y}>0$ for every $y\in\R$.

!!! esercizio "Exercise 12"

    Solve the following inequality in the real variable $x$:

    $$
    \frac{\log_{a}(4x-3)}{\log_{a}(2x-1)} > 1 \quad 0<a<1
    $$

??? soluzione "Solution"

    Because of the existence conditions of the logarithm and of the denominator, we must impose the system

    $$
    \begin{cases*}
    4x-3 > 0 \\
    2x-1 > 0 \\
    \log_{a}(2x-1) \neq 0
    \end{cases*}
    $$

    which gives $\frac{3}{4}<x<1, x>1$. Now moving everything to the left-hand side, finding the least common denominator and using the properties of logarithms, we obtain

    $$
    \frac{\log_{a}(\frac{4x-3}{2x-1})}{\log_{a}(2x-1)}>0
    $$

    Studying the sign of the numerator and of the denominator, and keeping in mind that $a<1$, for the numerator we obtain

    $$
    \log_{a}\left(\frac{4x-3}{2x-1}\right) > 0 \Longleftrightarrow \frac{4x-3}{2x-1}<1 \Longleftrightarrow \frac{1}{2}<x<1
    $$

    while for the denominator we obtain

    $$
    \log_{a}(2x-1)>0 \Longleftrightarrow x<1
    $$

    Combining the signs, the inequality is satisfied for $\frac{1}{2}<x<1, x>1$. Intersecting this set of solutions with the existence conditions studied above, we obtain that the inequality is satisfied for every $x$ belonging to the set $(\frac{3}{4};1) \cup (1,+\infty)$.

!!! esercizio "Exercise 13"

    Solve the following inequality in the real variable $x$:

    $$
    \sqrt{x^2-3x+5} \leq x+3
    $$

??? soluzione "Solution"

    This irrational inequality has the form $\sqrt{A(x)} \leq B(x)$, with $A(x)$ and $B(x)$ polynomials in $x$. First of all, we must impose the existence condition of the root, i.e., $x^2-3x+5 \geq 0$. Moreover, since a square root is always positive or zero in $\mathbb{R}$, we impose $x+3 \geq 0$. We therefore solve the system:

    $$
    \begin{cases*}
    x^2-3x+5 \geq 0 \\
    x+3 \geq 0 \\
    x^2-3x+5 \leq (x+3)^2
    \end{cases*}
    $$

    where, in the last inequality, we were allowed to square both sides, since they are positive. The system reduces to:

    $$
    \begin{cases*}
    \forall x \in \mathbb{R} \\
    x \geq -3 \\
    x \geq -\frac{4}{9}
    \end{cases*}
    $$

    whose set of solutions is the interval $[-\frac{4}{9}, +\infty)$.

!!! esercizio "Exercise 14"

    Solve the following rational inequality in the real variable $x$:

    $$
    \frac{x^3-3x^2+2x-6}{x^2-2x-3} > \frac{2}{x+1}
    $$

??? soluzione "Solution"

    First of all, we must write the inequality in canonical form (0 on the right-hand side). The existence conditions (denominators different from zero) will be automatically included in the sign study. We obtain

    $$
    \frac{x^3-3x^2+2x-6}{x^2-2x-3} - \frac{2}{x+1} > 0
    $$

    We factor the numerator and the denominator of the first fraction, obtaining:

    $$
    \frac{(x^2+2)(x-3)}{(x-3)(x+1)} - \frac{2}{x+1} > 0
    $$

    Since we can cancel $x-3$ and obtain an equivalent fraction, provided that $x \neq 3$ by the existence condition, we have

    $$
    \frac{x^2+2}{x+1} - \frac{2}{x+1} > 0
    $$

    that is,

    $$
    \frac{x^2}{x+1} > 0
    $$

    The numerator is positive $\forall x \in \mathbb{R}, x \neq 0$, and the denominator is positive for $x>-1$. Combining the signs, and taking into account the condition $x \neq 3$, we obtain the solution set $(-1,0) \cup (0,3) \cup (3,+\infty)$.
