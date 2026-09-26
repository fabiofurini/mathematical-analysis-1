---
title: "Antiderivatives"
---

# Antiderivatives

<div class="info-capitolo" markdown>

**Exercises · Integrals** · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-integrals-01-antiderivatives.pdf)

</div>

!!! esercizio "Exercise 1"

    Compute the following antiderivatives on the intervals where they are defined

    $$
    {\rm (a)}\ \int\left(2x+\sqrt[3]{x}-\frac{2}{\sqrt{x}}\right)dx, ~~~{\rm (b)}\ \int\frac{x-x^{4}}{\sqrt{x}}dx
    $$

    $$
    {\rm (c)}\ \int\tan^{2}x\ dx,~~~~ {\rm (d)}\ \int(3-x)^{5}dx
    $$

    $$
    {\rm (e)}\ \int\frac{1}{2-3x}dx, ~~~{\rm (f)}\ \int x^{2}e^{x^{3}+1}dx
    $$

    $$
    {\rm (g)}\ \int x\sqrt{x^{2}+1}dx, ~~~~{\rm (h)}\ \int\frac{\sin2x}{1+\sin^{2}x}dx
    $$

    $$
    {\rm (i)}\ \int\frac{e^{x}}{e^{x}+3}dx, ~~~{\rm (j)}\ \int\frac{1}{\tan x} dx
    $$

??? soluzione "Solution"

    (a)

    $$
    \begin{array}{l}\ds\int\left(2x+\sqrt[3]{x}-\frac{2}{\sqrt{x}}\right)dx=\int(2x+x^{1/3}-2x^{-1/2})dx\\
    \\
    \ds=x^{2}+\frac{3}{4}x^{4/3}-4x^{1/2}+c=x^{2}+\frac{3}{4}\sqrt[3]{x^{4}}-4\sqrt{x}+c\end{array}
    $$

    on any interval $I$ such that $I\subset(0,+\infty)$.

??? soluzione "Solution"

    (b)

    $$
    \begin{array}{l}\ds\int\frac{x-x^{4}}{\sqrt{x}}dx=\int(x^{1/2}-x^{7/2})dx=\\
    \\
    \ds\frac{2}{3}x^{3/2}-\frac{2}{9}x^{9/2}+c=\frac{2}{3}x\sqrt{x}-\frac{2}{9}x^{4}\sqrt{x}+c\end{array}
    $$

    on any interval $I$ such that $I\subset(0,+\infty)$.

??? soluzione "Solution"

    (c)

    $$
    \int\tan^{2}x\ dx=\int[(1+\tan^{2}x)-1]dx=\tan x-x+c
    $$

    on any interval $I$ that does not contain points of the form $\pi/2+k\pi$ with $k\in \Z$.

??? soluzione "Solution"

    (d)

    $$
    \int(3-x)^{5}dx=-\int(x-3)^{5}dx=-\frac{1}{6}(x-3)^{6}+c
    $$

    on any interval $I$ of $\R$.

??? soluzione "Solution"

    (e)

    $$
    \int\frac{1}{2-3x}dx=-\int\frac{1}{3x-2}dx=-\frac{1}{3}\log|3x-2|+c
    $$

    on any interval $I$ such that $2/3\notin I$.

??? soluzione "Solution"

    (f)

    $$
    \int x^{2}e^{x^{3}+1}dx=\frac{1}{3}e^{x^{3}+1}+c
    $$

    on any interval $I$ of $\R$.

??? soluzione "Solution"

    (g)

    $$
    \int x\sqrt{x^{2}+1}dx=\frac{1}{3}(x^{2}+1)^{3/2}+c=\frac{1}{3}(x^{2}+1)\sqrt{x^{2}+1}+c
    $$

    on any interval $I$ of $\R$.

??? soluzione "Solution"

    (h)

    $$
    \int\frac{\sin2x}{1+\sin^{2}x}dx=\int\frac{2\sin x\cos x}{1+\sin^{2}x}dx=\log(1+\sin^{2}x)+c
    $$

    on any interval $I$ of $\R$.

??? soluzione "Solution"

    (i)

    $$
    \int\frac{e^{x}}{e^{x}+3}dx=\log(e^{x}+3)+c
    $$

    on any interval $I$ of $\R$.

??? soluzione "Solution"

    (j)

    $$
    \int\frac{1}{\tan x} dx=\int\frac{\cos x}{\sin x}dx=\log|\sin x|+c
    $$

    on any interval $I$ that does not contain points of the form $k\pi$ with $k\in \Z$.

!!! esercizio "Exercise 2"

    Compute the following antiderivatives using integration by parts

    $$
    {\rm (a)}\ \int x\sin x\ dx, ~~~~{\rm (b)}\ \int x^{2}\cos x\ dx
    $$

    $$
    {\rm (c)}\ \int\arcsin x\ dx, ~~~~{\rm (d)}\ \int\sin^{2}x\ dx
    $$

??? soluzione "Solution"

    (a)

    $$
    \int x\sin x\ dx=-x\cos x+\int \cos x\ dx=-x\cos x+\sin x+c
    $$

    on any interval $I$ of $\R$.

??? soluzione "Solution"

    (b) Integrating by parts twice in a row, we have

    $$
    \begin{array}{l}\ds\int x^{2}\cos x\ dx=x^{2}\sin x-2\int x\sin x\ dx=\\
    \\
    \ds x^{2}\sin x+2x\cos x-2\int\cos x\ dx=x^{2}\sin x+2x\cos x-2\sin x+c\end{array}
    $$

    on any interval $I$ of $\R$.

??? soluzione "Solution"

    (c) Taking the constant function $1$ as the factor to be integrated, we have

    $$
    \int\arcsin x\ dx=x\arcsin x-\int\frac{x}{\sqrt{1-x^{2}}}dx=x\arcsin x+\sqrt{1-x^{2}}+c
    $$

    on any interval $I\subset(-1,1)$.

??? soluzione "Solution"

    (d) Integrating by parts and using $\cos^{2}x=1-\sin^{2}x$, we obtain

    $$
    \begin{array}{l}\ds\int\sin^{2}x\ dx=-\sin x\cos x+\int\cos^{2}x\ dx\\
    \\
    \ds=-\sin x\cos x+\int 1\ dx-\int\sin^{2}x\ dx\end{array}
    $$

    from which

    $$
    \int\sin^{2}x\ dx=-\sin x\cos x+x-\int\sin^{2}x\ dx+c
    $$

    hence, moving $\int\sin^{2}x\ dx$ to the left-hand side,

    $$
    2\int\sin^{2}x\ dx=-\sin x\cos x+x+c
    $$

    and finally, still denoting by $c$ the arbitrary constant $c/2$,

    $$
    \int\sin^{2}x\ dx=-\frac{1}{2}\sin x\cos x+\frac{1}{2}x+c
    $$

    on any interval $I$ of $\R$.

!!! esercizio "Exercise 3"

    Compute the following antiderivatives using integration by substitution

    $$
    {\rm (a)}\ \int\frac{e^{x}-1}{e^{x}+1}dx,~~~ {\rm (b)}\ \int\frac{\sqrt{x}}{1+x}dx,~~~{\rm (c)}\ \int x\sqrt{x+1}dx
    $$

??? soluzione "Solution"

    (a) Setting $y=e^{x}$, $y>0, x\in\R$, we have $x=\log y$ and we write $dx=\frac{1}{y}dy$, hence

    $$
    \int\frac{e^{x}-1}{e^{x}+1}dx=\int\frac{y-1}{y(y+1)}dy.
    $$

    Using partial fractions, we obtain

    $$
    \frac{y-1}{y(y+1)}=-\frac{1}{y}+\frac{2}{y+1}
    $$

    from which, taking into account that $y>0$,

    $$
    \int\frac{y-1}{y(y+1)}dy=-\log y+2\log(y+1)+c.
    $$

    It follows, substituting back $y=e^{x}$,

    $$
    \int\frac{e^{x}-1}{e^{x}+1}dx=-\log e^{x}+2\log(e^{x}+1)+c=-x+2\log(e^{x}+1)+c
    $$

    on any interval $I$ of $\R$.

??? soluzione "Solution"

    (b) Setting $y=\sqrt{x}$, $x,y>0$, we have $x=y^{2}$ and we write $dx=2y\ dy$, hence

    $$
    \int\frac{\sqrt{x}}{1+x}dx=2\int\frac{y^{2}}{1+y^{2}}dy.
    $$

    From

    $$
    \frac{y^{2}}{y^{2}+1}=\frac{y^{2}+1-1}{y^{2}+1}=1-\frac{1}{y^{2}+1}
    $$

    we then have

    $$
    2\int\frac{y^{2}}{1+y^{2}}dy=2y-2\arctan y+c.
    $$

    It follows, substituting back $y=\sqrt{x}$,

    $$
    \int\frac{\sqrt{x}}{1+x}dx=2\sqrt{x}-2\arctan\sqrt{x}+c
    $$

    on any interval $I\subset(0,+\infty)$.

??? soluzione "Solution"

    (c) Setting $y=\sqrt{x+1}$, $x>-1,y>0$, we have $x=y^{2}-1$ and we write $dx=2y\ dy$, hence

    $$
    \int x\sqrt{x+1}dx=2\int(y^{2}-1)y^{2}\ dy=2\int(y^{4}-y^{2})dy=\frac{2}{5}y^{5}-\frac{2}{3}y^{3}+c.
    $$

    It follows, substituting back $y=\sqrt{x+1}$,

    $$
    \int x\sqrt{x+1}dx=\frac{2}{5}(x+1)^{5/2}-\frac{2}{3}(x+1)^{3/2}+c
    $$

    on any interval $I\subset(-1,+\infty)$.

!!! esercizio "Exercise 4"

    Compute the following antiderivatives of rational functions

    $$
    {\rm (a)}\ \int\frac{5}{x^{2}+2x+1}dx,~~~
    {\rm (b)}\ \int\frac{1}{x^{2}+x+1}dx,~~~
    {\rm (c)}\ \int\frac{x}{x^{2}+x+1}dx,~~~
    {\rm (d)}\ \int\frac{x^{3}+1}{x^{2}-3x+2}dx
    $$

    $$
    {\rm (e)}\ \int\frac{x}{x^{3}+3x^{2}+3x+1}dx,~~~
    {\rm (f)}\ \int\frac{1}{x^{4}-1}dx,~~~
    {\rm (g)}\ \int\frac{x+1}{x^{3}-x^{2}}dx,~~~
    {\rm (h)}\ \int\frac{1}{x^{3}+1}dx
    $$

??? soluzione "Solution"

    (a) The given integral is immediate:

    $$
    \int\frac{5}{x^{2}+2x+1}dx=\int\frac{5}{(x+1)^{2}}dx=-\frac{5}{x+1}+c
    $$

    on any interval $I$ such that $-1\notin I$.

??? soluzione "Solution"

    (b) Writing the (irreducible) denominator as a sum of squares:

    $$
    \int\frac{1}{x^{2}+x+1}dx=\int\frac{1}{(x+1/2)^{2}+3/4}dx=
    \frac{2}{\sqrt{3}}\arctan\left[\frac{2}{\sqrt{3}}\left(x+\frac{1}{2}\right)\right]+c
    $$

    on any interval $I$ of $\R$.

??? soluzione "Solution"

    (c) Using also the previous exercise:

    $$
    \begin{array}{l}\ds\int\frac{x}{x^{2}+x+1}dx=\frac{1}{2}\int\frac{2x+1}{x^{2}+x+1}dx-\frac{1}{2}\int\frac{1}{x^{2}+x+1}dx=\\
    \\
    \ds\frac{1}{2}\log(x^{2}+x+1)-\frac{1}{\sqrt{3}}\arctan\left[\frac{2}{\sqrt{3}}\left(x+\frac{1}{2}\right)\right]+c\end{array}
    $$

    on any interval $I$ of $\R$.

??? soluzione "Solution"

    (d) We perform polynomial long division:

    $$
    \frac{x^{3}+1}{x^{2}-3x+2}=x+3+\frac{7x-5}{x^{2}-3x+2}.
    $$

    Setting up the partial fractions

    $$
    \frac{7x-5}{x^{2}-3x+2}=\frac{7x-5}{(x-1)(x-2)}=\frac{A}{x-1}+\frac{B}{x-2},
    $$

    we obtain

    $$
    A=-2,\ B=9.
    $$

    In conclusion:

    $$
    \begin{array}{l}\ds\int\frac{x^{3}+1}{x^{2}-3x+2}dx=\int\left(x+3-\frac{2}{x-1}+\frac{9}{x-2}\right)dx=\\
    \\
    \ds\frac{1}{2}x^{2}+3x-2\log|x-1|+9\log|x-2|+c\end{array}
    $$

    on any interval $I$ such that $1\notin I$, $2\notin I$.

??? soluzione "Solution"

    (e) We set up the partial fractions:

    $$
    \frac{x}{x^{3}+3x^{2}+3x+1}=\frac{x}{(x+1)^{3}}=\frac{A}{x+1}+\frac{B}{(x+1)^{2}}+\frac{C}{(x+1)^{3}}.
    $$

    We obtain

    $$
    A=0,\ B=1,\ C=-1.
    $$

    In conclusion

    $$
    \begin{array}{l}\ds\int\frac{x}{x^{3}+3x^{2}+3x+1}dx=\int\left(\frac{1}{(x+1)^{2}}-\frac{1}{(x+1)^{3}}\right)dx\\
    \\
    \ds=-\frac{1}{x+1}+\frac{1}{2}\frac{1}{(x+1)^{2}}+c\end{array}
    $$

    on any interval $I$ such that $-1\notin I$.

??? soluzione "Solution"

    (f) We set up the partial fractions:

    $$
    \frac{1}{x^{4}-1}=\frac{1}{(x-1)(x+1)(x^{2}+1)}=\frac{A}{x-1}+\frac{B}{x+1}+\frac{Cx+D}{x^{2}+1}.
    $$

    We obtain

    $$
    A=\frac{1}{4},\ B=-\frac{1}{4},\ C=0,\ D=-\frac{1}{2}.
    $$

    In conclusion

    $$
    \begin{array}{l}\ds\int\frac{1}{x^{4}-1}dx=\int\left(\frac{1}{4}\frac{1}{x-1}-\frac{1}{4}\frac{1}{x+1}-\frac{1}{2}\frac{1}{x^{2}+1}\right)dx\\
    \\
    \ds=\frac{1}{4}\log|x-1|-\frac{1}{4}\log|x+1|-\frac{1}{2}\arctan x+c\end{array}
    $$

    on any interval $I$ such that $\pm1\notin I$.

??? soluzione "Solution"

    (g) We set up the partial fractions:

    $$
    \frac{x+1}{x^{3}-x^{2}}=\frac{x+1}{x^{2}(x-1)}=\frac{A}{x}+\frac{B}{x^{2}}+\frac{C}{x-1}.
    $$

    We obtain

    $$
    A=-2,\ B=-1,\ C=2.
    $$

    In conclusion

    $$
    \begin{array}{l}\ds\int\frac{x+1}{x^{3}-x^{2}}dx=\int\left(-\frac{2}{x}-\frac{1}{x^{2}}+\frac{2}{x-1}\right)dx\\
    \\
    \ds=-2\log|x|+\frac{1}{x}+2\log|x-1|+c\end{array}
    $$

    on any interval $I$ such that $0,1\notin I$.

??? soluzione "Solution"

    (h) We set up the partial fractions:

    $$
    \frac{1}{x^{3}+1}=\frac{1}{(x+1)(x^{2}-x+1)}=\frac{A}{x+1}+\frac{Bx+C}{x^{2}-x+1}.
    $$

    We obtain

    $$
    A=\frac{1}{3},\ B=-\frac{1}{3},\ C=\frac{2}{3}.
    $$

    Hence

    $$
    \begin{array}{l}\ds\int\frac{1}{x^{3}+1}dx=\int\left(\frac{1}{3}\frac{1}{x+1}+\frac{1}{3}\frac{-x+2}{x^{2}-x+1}\right)dx\\
    \\
    \ds=\frac{1}{3}\log|x+1|-\frac{1}{6}\int\frac{2x-1}{x^{2}-x+1}dx+\frac{1}{2}\int\frac{1}{x^{2}-x+1}dx\\
    \\
    \ds=\frac{1}{3}\log|x+1|-\frac{1}{6}\log(x^{2}-x+1)+\frac{1}{2}\int\frac{1}{(x-1/2)^{2}+3/4}dx\\
    \\
    \ds=\frac{1}{3}\log|x+1|-\frac{1}{6}\log(x^{2}-x+1)+\frac{1}{\sqrt{3}}\arctan\left[\frac{2}{\sqrt{3}}\left(x-\frac{1}{2}\right)\right]+c
    \end{array}
    $$

    on any interval $I$ such that $-1\notin I$.

!!! esercizio "Exercise 5"

    Compute the following antiderivatives

    $$
    {\rm (a)}\ \int\frac{e^{x}+1}{e^{2x}+1}dx,~~~
    {\rm (b)}\ \int x^{2}\log(x+1)dx,~~~
    {\rm (c)}\ \int\frac{\tan x}{\sin^{2}x-\cos^{2}x}dx
    $$

    $$
    {\rm (d)}\ \int\frac{x+\sqrt{x}}{2+\sqrt{x}}dx,~~~
    {\rm (e)}\ \int\frac{1}{\cos x}dx,~~~
    {\rm (f)}\ \int\sqrt{4-x^{2}}dx
    $$

??? soluzione "Solution"

    (a) With the substitution $y=e^{x}$, $y>0$, $x\in\R$, we have $x=\log y$, we write $dx=\frac{1}{y}dy$, and we obtain

    $$
    \int\frac{e^{x}+1}{e^{2x}+1}dx=\int\frac{y+1}{y(y^{2}+1)}dy.
    $$

    We set up the partial fractions:

    $$
    \frac{y+1}{y(y^{2}+1)}=\frac{A}{y}+\frac{By+C}{y^{2}+1}.
    $$

    We have

    $$
    A=1,\ B=-1,\ C=1,
    $$

    from which, taking into account also that $y>0$,

    $$
    \begin{array}{l}\ds\int\frac{y+1}{y(y^{2}+1)}dy=\int\left(\frac{1}{y}-\frac{y}{y^{2}+1}+\frac{1}{y^{2}+1}\right)dy\\
    \\
    \ds=\log y-\frac{1}{2}\log(y^{2}+1)+\arctan y+c.\end{array}
    $$

    Then, substituting back $y=e^{x}$, we have

    $$
    \int\frac{e^{x}+1}{e^{2x}+1}dx=x-\frac{1}{2}\log(e^{2x}+1)+\arctan e^{x}+c
    $$

    on any interval $I$ of $\R$.

??? soluzione "Solution"

    (b) Integrating by parts and then computing the integral of a rational function, we have

    $$
    \begin{array}{l}\ds\int x^{2}\log(x+1)dx=\frac{1}{3}x^{3}\log(x+1)-\frac{1}{3}\int\frac{x^{3}}{x+1}dx\\
    \\
    \ds=\frac{1}{3}x^{3}\log(x+1)-\frac{1}{3}\int(x^{2}-x+1)dx+\frac{1}{3}\int\frac{1}{x+1}dx\\
    \\
    \ds=\frac{1}{3}x^{3}\log(x+1)-\frac{1}{9}x^{3}+\frac{1}{6}x^{2}-\frac{1}{3}x+\frac{1}{3}\log(x+1)+c
    \end{array}
    $$

    on any interval $I\subset(-1,+\infty)$.

??? soluzione "Solution"

    (c) From $\tan x=\frac{\sin x}{\cos x}$ and $\sin^{2}x=1-\cos^{2}x$, we have

    $$
    \int\frac{\tan x}{\sin^{2}x-\cos^{2}x}dx=\int\frac{\sin x}{\cos x(1-2\cos^{2}x)}dx.
    $$

    Now setting $y=\cos x$, we write $dy=-\sin x\ dx$ and we obtain

    $$
    \int\frac{\sin x}{\cos x(1-2\cos^{2}x)}dx=\frac{1}{2}\int\frac{1}{y(y-\sqrt{1/2})(y+\sqrt{1/2})}dy.
    $$

    Using partial fractions, we then have

    $$
    \frac{1}{y(y-\sqrt{1/2})(y+\sqrt{1/2})}=-\frac{2}{y}+\frac{1}{y-\sqrt{1/2}}+\frac{1}{y+\sqrt{1/2}},
    $$

    from which

    $$
    \frac{1}{2}\int\frac{1}{y(y-\sqrt{1/2})(y+\sqrt{1/2})}=-\log|y|+\frac{1}{2}\log|y^{2}-1/2|+c.
    $$

    In conclusion,

    $$
    \int\frac{\tan x}{\sin^{2}x-\cos^{2}x}dx=-\log|\cos x|+\frac{1}{2}\log|\cos^{2}x-1/2|+c
    $$

    on any interval $I$ that does not contain points of the form $x=\pi/2+k\pi$ or of the form $x=\pi/4+k\pi/2$ with $k$ an integer.

??? soluzione "Solution"

    (d) With the substitution $y=\sqrt{x}$, $x,y>0$, we have $x=y^{2}$, we write $dx=2y\ dy$ and we obtain

    $$
    \int\frac{x+\sqrt{x}}{2+\sqrt{x}}dx=2\int\frac{y^{3}+y^{2}}{y+2}dy.
    $$

    Integrating the rational function, we have

    $$
    \begin{array}{l}\ds2\int\frac{y^{3}+y^{2}}{y+2}dy=2\int(y^{2}-y+2)dy-8\int\frac{1}{y+2}dy\\
    \\
    \ds=\frac{2}{3}y^{3}-y^{2}+4y-8\log(y+2)+c.\end{array}
    $$

    Substituting back $y=\sqrt{x}$, we conclude

    $$
    \int\frac{x+\sqrt{x}}{2+\sqrt{x}}dx=\frac{2}{3}x\sqrt{x}-x+4\sqrt{x}-8\log(\sqrt{x}+2)+c
    $$

    on any interval $I\subset(0,+\infty)$.

??? soluzione "Solution"

    (e) Using the rationalizing substitution $y=\tan\frac{x}{2}$, $dx=\frac{2}{1+y^{2}}dy$ and taking into account that $\cos x=\frac{1-y^{2}}{1+y^{2}}$, we have

    $$
    \int\frac{1}{\cos x}dx=-2\int\frac{1}{y^{2}-1}dy.
    $$

    Using partial fractions, we then have

    $$
    -2\int\frac{1}{y^{2}-1}dy=\int\left(\frac{1}{y+1}-\frac{1}{y-1}\right)dy=\log\left|\frac{y+1}{y-1}\right|+c.
    $$

    Going back to $y=\tan\frac{x}{2}$, we conclude

    $$
    \int\frac{1}{\cos x}dx=\log\left|\frac{\tan(x/2)+1}{\tan(x/2)-1}\right|+c
    $$

    on any interval $I$ that does not contain points of the form $x=\pi/2+k\pi$ with $k$ an integer.

??? soluzione "Solution"

    (f) Using the rationalizing substitution $x=2\sin y$, $-\pi/2<y<\pi/2$, $-2<x<2$, $dx=2\cos y\ dy$, and taking into account also that $\cos y>0$, we obtain

    $$
    \int\sqrt{4-x^{2}}dx=4\int\cos^{2}y\ dy.
    $$

    From $4\cos^{2}y=2+2\cos(2y)$, we then have

    $$
    4\int\cos^{2}y\ dy=2y+\sin(2y)=2y+2\sin y\cos y+c.
    $$

    Now using $\sin y=x/2$, $y=\arcsin(x/2)$, $\cos y=\sqrt{1-\sin^{2}y}=\frac{1}{2}\sqrt{4-x^{2}}$, we conclude

    $$
    \int\sqrt{4-x^{2}}dx=2\arcsin(x/2)+(x/2)\sqrt{4-x^{2}}+c
    $$

    on any interval $I\subset(-2,2)$.

!!! esercizio "Exercise 6"

    Compute the following limits

    $$
    {\rm (a)}\ \lim_{x\to0^{+}}\frac{1}{x^{3}}\int_{0}^{x^{2}}\log(1+\sqrt{t})dt,~~~
    {\rm (b)}\ \lim_{x\to0^{+}}\frac{1}{x^{4}}\int_{0}^{x^{2}}(1-\cos\sqrt{t})dt
    $$

    $$
    {\rm (c)}\ \lim_{k\to+\infty}\left(2\int_{4}^{4e}\frac{\log(kx)}{x}dx-\log(k(k+1))\right),~~~
    {\rm (d)}\ \lim_{k\to+\infty}\left(\int_{1}^{3}\log(k(x+2))dx-3\log(k+1)\right)
    $$

??? soluzione "Solution"

    (a) Setting $f(x)=\int_{0}^{x^{2}}\log(1+\sqrt{t})dt$, the limit takes the indeterminate form $\frac{0}{0}$ given by $\lim_{x\to0^{+}}\frac{f(x)}{x^{3}}$. The hypotheses of L'Hopital's rule are satisfied, so we can move on to computing the limit

    $$
    \lim_{x\to0^{+}}\frac{f'(x)}{3x^{2}}.
    $$

    We compute the derivative $f'(x)$ using the Fundamental theorem of calculus and the chain rule (derivative of a composite function):

    $$
    f'(x)=2x\log(1+\sqrt{x^{2}})=2x\log(1+x),\ \ x>0.
    $$

    In conclusion

    $$
    \begin{array}{l}\ds\lim_{x\to0^{+}}\frac{1}{x^{3}}\int_{0}^{x^{2}}\log(1+\sqrt{t})dt=\lim_{x\to0^{+}}\frac{2x\log(1+x)}{3x^{2}}\\
    \\
    \ds=\frac{2}{3}\lim_{x\to0^{+}}\frac{\log(1+x)}{x}=\frac{2}{3}.
    \end{array}
    $$

??? soluzione "Solution"

    (b) Setting $f(x)=\int_{0}^{x^{2}}(1-\cos\sqrt{t})dt$, the limit takes the indeterminate form $\frac{0}{0}$ given by $\lim_{x\to0^{+}}\frac{f(x)}{x^{4}}$. The hypotheses of L'Hopital's rule are satisfied, so we can move on to computing the limit

    $$
    \lim_{x\to0^{+}}\frac{f'(x)}{4x^{3}}.
    $$

    We compute the derivative $f'(x)$ using the Fundamental theorem of calculus and the chain rule (derivative of a composite function):

    $$
    f'(x)=2x(1-\cos\sqrt{x^{2}})=2x(1-\cos x),\ \ x>0.
    $$

    In conclusion

    $$
    \begin{array}{l}\ds\lim_{x\to0^{+}}\frac{1}{x^{4}}\int_{0}^{x^{2}}(1-\cos\sqrt{t})dt=\lim_{x\to0^{+}}\frac{2x(1-\cos x)}{4x^{3}}\\
    \\
    \ds=\frac{1}{2}\lim_{x\to0^{+}}\frac{1-\cos x}{x^{2}}=\frac{1}{4}.
    \end{array}
    $$

??? soluzione "Solution"

    (c) We compute

    $$
    \begin{array}{l}\ds2\int_{4}^{4e}\frac{\log(kx)}{x}dx=[\log^{2}(kx)]_{4}^{4e}=\log^{2}(4ke)-\log^{2}(4k)\\
    \\
    \ds=(\log(4ke)-\log(4k))(\log(4ke)+\log(4k))\\
    \\
    \ds=\log\frac{4ke}{4k}\log(16k^{2}e)=\log(16k^{2}e).
    \end{array}
    $$

    It follows that

    $$
    \begin{array}{l}\ds\lim_{k\to+\infty}\left(2\int_{4}^{4e}\frac{\log(kx)}{x}dx-\log(k(k+1))\right)
    =\lim_{k\to+\infty}\log(16k^{2}e)-\log(k(k+1))\\
    \\
    \ds=\lim_{k\to+\infty}\log\frac{16k^{2}e}{k^{2}+k}=
    \log(16e)=1+\log16.
    \end{array}
    $$

??? soluzione "Solution"

    (d) We compute

    $$
    \begin{array}{l}\ds\int_{1}^{3}\log(k(x+2))dx=[x\log(kx+2k)]_{1}^{3}-\int_{1}^{3}\frac{x}{x+2}dx\\
    \\
    \ds=3\log(5k)-\log(3k)-\int_{1}^{3}\left(1-\frac{2}{x+2}\right)dx\\
    \\
    \ds=3\log(5k)-\log(3k)-2+2\log\frac{5}{3}.
    \end{array}
    $$

    It follows that

    $$
    \begin{array}{l}\ds\lim_{k\to+\infty}\left(\int_{1}^{3}\log(k(x+2))dx-3\log(k+1)\right)\\
    \\
    \ds=\lim_{k\to+\infty}3\log(5k)-\log(3k)-2+2\log\frac{5}{3}-3\log(k+1)\\
    \\
    \ds=\lim_{k\to+\infty}3\log\frac{5k}{k+1}-\log(3k)-2+2\log\frac{5}{3}=-\infty.
    \end{array}
    $$
