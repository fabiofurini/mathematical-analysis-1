---
title: "Complex numbers"
---

# Complex numbers

<div class="info-capitolo" markdown>

**Exercises · Numbers and logic** · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-numbers-05-complex-numbers.pdf)

</div>

!!! esercizio "Exercise 1"

    Write the following complex numbers $z$ in algebraic form, identifying their real part and imaginary part. Then, for each of them, find the modulus, the conjugate and the reciprocal.

    $$
    z=\frac{2+5i}{1+i} ~~~~~~~~~~~~
    \ z=\frac{2+i}{1-3i}
    $$

??? soluzione "Solution"

    $$
    z=\frac{2+5i}{1+i}\cdot\frac{1-i}{1-i}=\frac{7+3i}{2}=\frac{7}{2}+i\frac{3}{2}
    $$

    from which

    $$
    \Re z=\frac{7}{2},\ \Im z=\frac{3}{2},\ |z|=\sqrt{\frac{49}{4}+\frac{9}{4}}=\frac{\sqrt{58}}{2},\ \bar{z}=\frac{7}{2}-i\frac{3}{2}.
    $$

    Finally

    $$
    z^{-1}=\frac{1}{z}\cdot\frac{\bar{z}}{\bar{z}}=\frac{\bar{z}}{|z|^{2}}=\frac{7-3i}{2}\cdot\frac{4}{58}=\frac{7}{29}-i\frac{3}{29}.
    $$

??? soluzione "Solution"

    $$
    z=\frac{2+i}{1-3i}\cdot\frac{1+3i}{1+3i}=\frac{-1+7i}{10}=-\frac{1}{10}+i\frac{7}{10}
    $$

    from which

    $$
    \Re z=-\frac{1}{10},\ \Im z=\frac{7}{10},\ |z|=\sqrt{\frac{1}{100}+\frac{49}{100}}=\frac{\sqrt{2}}{2},\ \bar{z}=-\frac{1}{10}-i\frac{7}{10}.
    $$

    Finally

    $$
    z^{-1}=\frac{1}{z}\cdot\frac{\bar{z}}{\bar{z}}=\frac{\bar{z}}{|z|^{2}}=-\frac{1+7i}{10}\cdot2=-\frac{1}{5}-i\frac{7}{5}.
    $$

!!! esercizio "Exercise 2"

    Determine all the complex numbers $z$ that satisfy:

    $$
    |z|\leq|z-2i|
    $$

??? soluzione "Solution"

    It is convenient to use the form $z=x+iy$, $x,y\in\R$.

    $$
    \begin{array}{l}
    |x+iy|\leq|x+i(y-2)|\\
    \\
    |x+iy|^{2}\leq|x+i(y-2)|^{2}\\
    \\
    x^{2}+y^{2}\leq x^{2}+(y-2)^{2}\\
    \\
    0\leq -4y+4\\
    \\
    y\leq1.
    \end{array}
    $$

    Representing the solutions in the Cartesian plane, we obtain a closed half-plane.

!!! esercizio "Exercise 3"

    Determine all the complex numbers $z$ that satisfy:

    $$
    |z-(3+i)|\leq2
    $$

??? soluzione "Solution"

    This inequality is satisfied by those complex numbers $z=x+iy$ which, in the Gauss plane (complex plane), are represented by the points $P(x, y)$ whose distance from the point $(3, 1)$ is less than or equal to 2.

    That is, all and only the points of the <strong>closed disk</strong> with center $C(3, 1)$ and radius 2 (careful: it is not the circle, but the disk, i.e., the interior together with the boundary). The circle has equation:

    $$
    \gamma: \quad (x-3)^2+(y-1)^2=4
    $$

    while the closed disk has equation:

    $$
    (x-3)^2+(y-1)^2\leq4
    $$

    Alternatively, the inequality can be handled through the substitution $z=x+iy$, obtaining

    $$
    |x+iy-3-i|\leq2
    $$

    in which, factoring out the imaginary unit,

    $$
    |x-3+i(y-1)|\leq2
    $$

    Applying the definition of the modulus of a complex number, we have

    $$
    \sqrt{(x-3)^2+(y-1)^2}\leq2
    $$

    Since we can square both non-negative sides, we finally obtain:

    $$
    (x-3)^2+(y-1)^2\leq4
    $$

!!! esercizio "Exercise 4"

    Determine all the complex numbers $z$ that satisfy:

    $$
    (1-i)z-(1+i)\bar{z}=i
    $$

??? soluzione "Solution"

    $$
    \begin{array}{l}
    (1-i)(x+iy)-(1+i)(x-iy)=i\\
    \\
    x+y-ix+iy-x-y-ix+iy=i\\
    \\
    i(2y-2x)=i\\
    \\
    2y-2x=1.
    \end{array}
    $$

    Representing the solutions in the Cartesian plane, we obtain a line.

!!! esercizio "Exercise 5"

    Determine all the complex numbers $z$ that satisfy:

    $$
    |z+\bar{z}|+|z-\bar{z}|\leq2
    $$

??? soluzione "Solution"

    $$
    \begin{array}{l}
    |z+\bar{z}|+|z-\bar{z}|\leq2\\
    \\
    2|\Re z|+2|\Im z|\leq2\\
    \\
    |x|+|y|\leq1.
    \end{array}
    $$

    Representing the solutions in the Cartesian plane, we obtain a closed square with vertices $\pm1$, $\pm i$.

!!! esercizio "Exercise 6"

    Determine all the complex numbers $z$ that satisfy:

    $$
    \Im(z)-|z+\bar{z}|^{2}<1
    $$

??? soluzione "Solution"

    $$
    \begin{array}{l}
    \Im(z)-|z+\bar{z}|^{2}<1\\
    \\
    \Im(z)-4\;|\Re z|^{2}<1\\
    \\
    y<4\;x^{2}+1.
    \end{array}
    $$

    Representing the solutions in the Cartesian plane, we obtain the open region below the parabola $y=4x^{2}+1$.

!!! esercizio "Exercise 7"

    Determine all the complex numbers $z$ that satisfy:

    $$
    \left\{\begin{array}{l}z\bar{z}\leq2\\
    \\
    z+\bar{z}\leq2\end{array}\right.
    $$

??? soluzione "Solution"

    $$
    \left\{\begin{array}{l}|z|^{2}\leq2\\
    \\
    2\Re z\leq2\end{array}\right.
    ~~~~~~~~~~~~~~~
    \left\{\begin{array}{l}x^{2}+y^{2}\leq2\\
    \\
    x\leq1\end{array}\right.
    $$

    Representing the solutions in the Cartesian plane, we obtain the part of the plane common to the closed disk with center at the origin and radius $\sqrt{2}$ and to the closed half-plane to the left of the vertical line $x=1$.

!!! esercizio "Exercise 8"

    The system in $\C$

    $$
    \left\{\begin{array}{l}z^{2}+\bar{z}^{2}=0\\
    \\
    |\Re(z)|+|\Im(z)|=1\end{array}\right.
    $$

    has:

    $$
    \noindent(a)~~ {\rm two~solutions} ~~~~~~~ (b) ~~{\rm three~solutions}
    $$

    $$
    \noindent(c)~~  {\rm four~solutions} ~~~~~~~ (d)~~  {\rm none~of~the~other~answers~is~correct}
    $$

??? soluzione "Solution"

    Setting $z=x+iy$, $x,y\in\R$, we have

    $$
    \begin{array}{l}\left\{\begin{array}{l}(x+iy)^{2}+(x-iy)^{2}=0\\
    \\
    |x|+|y|=1\end{array}\right.\\
    \\
    \left\{\begin{array}{l}x^{2}-y^{2}+2ixy+x^{2}-y^{2}-2ixy=0\\
    \\
    |x|+|y|=1\end{array}\right.\\
    \\
    \left\{\begin{array}{l}x^{2}=y^{2}\\
    \\
    |x|+|y|=1\end{array}\right.
    ~~~
    \left\{\begin{array}{l}|x|=|y|\\
    \\
    |x|+|y|=1\end{array}\right.
    ~~~~
    \left\{\begin{array}{l}|x|=1/2\\
    \\
    |y|=1/2\end{array}\right.\end{array}
    $$

    We obtain the four points $(1+i)/2$, $(-1+i)/2$, $(1-i)/2$, $-(1+i)/2$. The correct answer is (c).

!!! esercizio "Exercise 9"

    The solutions $z=x+iy$ of the complex equation

    $$
    z^{2}-z\bar{z}+iz=-3+2i
    $$

    satisfy

    $$
    {\rm (a)}~~ \left(x+\frac{1}{6}\right)^{2}+\left(y+\frac{1}{4}\right)^{2}=1~~~~~~~~~~ {\rm (b)}~~ y=\frac{2}{3}x+1
    $$

    $$
    {\rm (c)}~~ \left(x-\frac{1}{6}\right)^{2}+\left(y-\frac{1}{4}\right)^{2}=1 ~~~~~~~~~~~~~{\rm (d)}~~ y=\frac{3}{2}x
    $$

??? soluzione "Solution"

    $$
    \begin{array}{l}
    (x+iy)^{2}-(x^{2}+y^{2})+ix-y=-3+2i\\
    \\
    -2y^{2}-y+i(x+2xy)=-3+2i\\
    \\
    \left\{\begin{array}{l}2y^{2}+y-3=0\\
    \\
    x+2xy=2\end{array}\right.
    ~~~~~~
    \left\{\begin{array}{l}y=1\vee y=-3/2\\
    \\
    x=2/(1+2y)\end{array}\right.
    \end{array}
    $$

    We obtain the two points $(2/3)+i$, $-1-i(3/2)$, which lie on the line $y=(3/2)x$. The correct answer is (d).

!!! esercizio "Exercise 10"

    Find the modulus and the principal argument of

    $$
    {\rm (a)}\ z=-1-i\sqrt{3}\ \ ,\ \ {\rm (b)}\ z=-4i.
    $$

??? soluzione "Solution"

    (a) We have $|z|=\sqrt{1+3}=2$. The principal argument ${\rm Arg}\ z$ is the unique $\vartheta\in[-\pi,\pi)$ such that

    $$
    \cos\vartheta=\Re z/|z|=-1/2,\ \sin\vartheta=\Im z/|z|=-\sqrt{3}/2
    $$

    hence ${\rm Arg}\ z=-2\pi/3$.

??? soluzione "Solution"

    (b) We have $|z|=4$. The principal argument ${\rm Arg}\ z$ is the unique $\vartheta\in[-\pi,\pi)$ such that

    $$
    \cos\vartheta=\Re z/|z|=0,\ \sin\vartheta=\Im z/|z|=-1
    $$

    hence ${\rm Arg}\ z=-\pi/2$.

!!! esercizio "Exercise 11"

    Let

    $$
    w=\frac{z+1-i}{z+i}
    $$

    Determine, locating them in the Gauss plane, the complex numbers $z$ for which $w$ is a purely imaginary number.

??? soluzione "Solution"

    The complex number $w$ is defined for $z \neq -i$. Moreover,

    $$
    w=\frac{z+1-i}{z+i}\cdot\frac{z-i}{z-i}=\frac{z^2+z-1+i(-2z-1)}{z^2+1}
    $$

    That is, separating the real part of $w$ from its imaginary part:

    $$
    w=\frac{z^2+z-1}{z^2+1}+i\frac{-2z-1}{z^2+1}
    $$

    The complex number $w$ is purely imaginary when $\Re(w)=0$, i.e.,

    $$
    \Re(w)=\frac{z^2+z-1}{z^2+1}=0
    $$

    This rational equation, under the condition $z \neq \pm \sqrt{-1}$, i.e., $z \neq \pm i$, gives the real numbers

    $$
    z_{1}=-\frac{1}{2}+\frac{\sqrt{5}}{2}, \; z_{2}=-\frac{1}{2}-\frac{\sqrt{5}}{2}
    $$

    which, in the Gauss plane, can be represented as two points on the real axis. In conclusion, $w$ is purely imaginary for the two values of $z$ found.

!!! esercizio "Exercise 12"

    Let $z=\sqrt{3}-3i$. The number of solutions $w$ with $\Im(w)<0$ of the equation

    $$
    w^{6}=|z|(z+\bar{z})
    $$

    is:

    $$
    \noindent(a)~~ {\rm two} ~~~~~~~ (b) ~~{\rm three}
    $$

    $$
    \noindent(c)~~  {\rm zero} ~~~~~~~ (d)~~  {\rm none~of~the~other~answers~is~correct}
    $$

??? soluzione "Solution"

    We have $|z|=\sqrt{12}$, $z+\bar{z}=2\sqrt{3}$, hence

    $$
    w^{6}=12.
    $$

    The complex sixth roots of a positive real number are six, pairwise opposite, and two of them are real. Of the remaining four, two have positive imaginary part and two have negative imaginary part. The correct answer is (a). We nevertheless want to determine their values. Setting $w=r(\cos\vartheta+i\sin\vartheta)$ and taking into account that $|12|=12$, ${\rm arg} 12=2k\pi$, $k\in \Z$, we obtain

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{6}=12\\
    \\
    6\vartheta=2k\pi
    \end{array}\right.
    ~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=12^{1/6}\\
    \\
    \vartheta=k\pi/3
    \end{array}\right.
    \end{array}
    $$

    We therefore have the six roots

    $$
    w_{k}=12^{1/6}(\cos k\pi/3+i\sin k\pi/3),\ \ \ k=0,1,2,3,4,5,
    $$

    i.e.,

    $$
    \begin{array}{l}w_{0}=12^{1/6},\ w_{1}=12^{1/6}(1/2+i\sqrt{3}/2),\ w_{2}=12^{1/6}(-1/2+i\sqrt{3}/2)\\
    \\
    w_{3}=-12^{1/6},\ w_{4}=12^{1/6}(-1/2-i\sqrt{3}/2),\ w_{5}=12^{1/6}(1/2-i\sqrt{3}/2).\end{array}
    $$

    The two with negative imaginary part are $w_{4}$ and $w_{5}$.

!!! esercizio "Exercise 13"

    Solve the following system in the unknown $z\in \C$.

    $$
    \left\{\begin{array}{l}z^{6}=i\\
    \\
    \Re(z)\Im(z)<0\end{array}\right.
    $$

??? soluzione "Solution"

    We first solve the equation $z^{6}=i$. Setting $z=r(\cos\vartheta+i\sin\vartheta)$ and taking into account that $|i|=1$, ${\rm arg}(i)=\pi/2+2k\pi$, $k\in{\bf Z}$, we obtain

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{6}=1\\
    \\
    6\vartheta=\pi/2+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=1\\
    \\
    \vartheta=\pi/12+k\pi/3.
    \end{array}\right.
    \end{array}
    $$

    We therefore have the six roots

    $$
    z_{k}=\cos((\pi+4k\pi)/12)+i\sin ((\pi+4k\pi)/12),\ \ \ k=0,1,2,3,4,5.
    $$

    Those satisfying the condition $\Re(z)\Im(z)<0$ (points in the second or fourth quadrant) are:

    $$
    z_{2}=-\sqrt{1/2}+i\sqrt{1/2},\ z_{5}=\sqrt{1/2}-i\sqrt{1/2}.
    $$

!!! esercizio "Exercise 14"

    Solve the following equation in the complex variable $z$.

    $$
    \ z^{3}+8=0
    $$

??? soluzione "Solution"

    The equation to be solved is, clearly,

    $$
    z^3=-8
    $$

    Setting $z=r(\cos\vartheta+i\sin\vartheta)$ and taking into account that $|-8|=8$, ${\rm arg}(-8)=\pi+2k\pi$, $k\in \Z$, we obtain

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{3}=8\\
    \\
    3\vartheta=\pi+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=2\\
    \\
    \vartheta=(2k+1)\pi/3.
    \end{array}\right.
    \end{array}
    $$

    We therefore have the three roots

    $$
    z_{k}=2\cos((2k+1)\pi/3)+2i\sin ((2k+1)\pi/3),\ \ \ k=0,1,2,
    $$

    i.e.,

    $$
    z_{0}=1+\sqrt{3}i,\ z_{1}=-2,\ z_{2}=1-\sqrt{3}i.
    $$

!!! esercizio "Exercise 15"

    Solve the following equation in the complex variable $z$.

    $$
    \ z^{3}=-27i
    $$

??? soluzione "Solution"

    Setting $z=r(\cos\vartheta+i\sin\vartheta)$ and taking into account that $|-27i|=27$, ${\rm arg}(-27i)=-\pi/2+2k\pi$, $k\in \Z$, we obtain

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{3}=27\\
    \\
    3\vartheta=-\pi/2+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=3\\
    \\
    \vartheta=(4k-1)\pi/6.
    \end{array}\right.
    \end{array}
    $$

    We therefore have the three roots

    $$
    z_{k}=3\cos((4k-1)\pi/6)+3i\sin ((4k-1)\pi/6),\ \ \ k=0,1,2,
    $$

    i.e.,

    $$
    z_{0}=3\sqrt{3}/2-3i/2,\ z_{1}=3i,\ z_{2}=-3\sqrt{3}/2-3i/2.
    $$

!!! esercizio "Exercise 16"

    Solve the following equation in the complex variable $z$.

    $$
    z^{5}+(3+i\sqrt{3})z=0
    $$

??? soluzione "Solution"

    We have

    $$
    z(z^{4}+3+i\sqrt{3})=0
    $$

    hence one solution is $z=0$. The other four are found by solving

    $$
    z^{4}=-3-i\sqrt{3}.
    $$

    Setting $z=r(\cos\vartheta+i\sin\vartheta)$ and taking into account that

    $$
    |-3-i\sqrt{3}|=2\sqrt{3},\ {\rm arg}(-3-i\sqrt{3})=-5\pi/6+2k\pi,k \in \Z
    $$

    we obtain

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{4}=12^{1/2}\\
    \\
    4\vartheta=-5\pi/6+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=12^{1/8}\\
    \\
    \vartheta=-5\pi/24+k\pi/2.
    \end{array}\right.
    \end{array}
    $$

    Besides the solution $z=0$, we therefore have four more roots

    $$
    z_{k}=12^{1/8}\cos((12k-5)\pi/24)+12^{1/8}i\sin ((12k-5)\pi/24),\ \ \ k=0,1,2,3.
    $$

!!! esercizio "Exercise 17"

    Solve the following equation in the complex variable $z$.

    $$
    \left(\frac{z+i}{1+i}\right)^{3}=-8i
    $$

??? soluzione "Solution"

    Setting $w=(z+i)/(1+i)$, we solve $w^{3}=-8i$. Writing $w=r(\cos\vartheta+i\sin\vartheta)$ and taking into account that $|-8i|=8$, ${\rm arg}(-8i)=-\pi/2+2k\pi$, $k\in \Z$, we obtain

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{3}=8\\
    \\
    3\vartheta=-\pi/2+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=2\\
    \\
    \vartheta=(4k-1)\pi/6.
    \end{array}\right.
    \end{array}
    $$

    We therefore have the three roots

    $$
    w_{k}=2\cos((4k-1)\pi/6)+2i\sin ((4k-1)\pi/6),\ \ \ k=0,1,2,
    $$

    i.e.,

    $$
    w_{0}=\sqrt{3}-i,\ w_{1}=2i,\ w_{2}=-\sqrt{3}-i.
    $$

    Going back to the variable $z$, from $z=(1+i)w-i$, the three solutions of the given equation are

    $$
    z_{0}=\sqrt{3}+1+i\sqrt{3}-2i,\ \ z_{1}=-2+i,\ \ z_{2}=1-\sqrt{3}-i\sqrt{3}-2i.
    $$

!!! esercizio "Exercise 18"

    Solve the following equation in the complex variable $z$.

    $$
    \left(\frac{z-i}{i}\right)^{4}=-16
    $$

??? soluzione "Solution"

    From $i^{4}=1$ we have $(z-i)^{4}=-16$. Setting $w=z-i$, we solve $w^{4}=-16$. Writing $w=r(\cos\vartheta+i\sin\vartheta)$ and taking into account that $|-16|=16$, ${\rm arg}(-16)=-\pi+2k\pi$, $k\in \Z$, we obtain

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{4}=16\\
    \\
    4\vartheta=-\pi+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=2\\
    \\
    \vartheta=-\pi/4+k\pi/2.
    \end{array}\right.
    \end{array}
    $$

    We therefore have the four roots

    $$
    w_{k}=2\cos((2k-1)\pi/4)+2i\sin ((2k-1)\pi/4),\ \ \ k=0,1,2,3,
    $$

    i.e.,

    $$
    w_{0}=\sqrt{2}-i\sqrt{2},\ w_{1}=\sqrt{2}+i\sqrt{2},\ w_{2}=-\sqrt{2}+i\sqrt{2},\ w_{3}=-\sqrt{2}-i\sqrt{2}.
    $$

    Going back to the variable $z$, from $z=w+i$, the four solutions of the given equation are

    $$
    z_{0}=\sqrt{2}-i\sqrt{2}+i,\ z_{1}=\sqrt{2}+i\sqrt{2}+i,\ z_{2}=-\sqrt{2}+i\sqrt{2}+i,\ z_{3}=-\sqrt{2}-i\sqrt{2}+i.
    $$

!!! esercizio "Exercise 19"

    Solve the following equation in the complex variable $z$.

    $$
    z^5=-\bar{z}
    $$

??? soluzione "Solution"

    The equation can be seen as

    $$
    z^5=(-1)\bar{z}
    $$

    Setting $z=r(\cos\vartheta+i\sin\vartheta)$ and taking into account that $|\bar{z}|=r$, ${\rm arg}(\bar{z})=-\vartheta+2k\pi$, $k\in \Z$, and recalling that $-1=e^{i\pi}$, we obtain

    $$
    \begin{array}{l}\left\{\begin{array}{l}
    r^{5}=r\\
    \\
    5\vartheta=\pi-\vartheta+2k\pi
    \end{array}\right.
    ~~~~~~~~~~~~~
    \left\{\begin{array}{l}
    r=0, \, r=1\\
    \\
    \vartheta=(2k+1)\pi/6.
    \end{array}\right.
    \end{array}
    $$

    At this point,

    - for $r=0$, we obtain $z_{0}=0$;

    - for $r=1$, we obtain the roots $z=\cos((2k+1)\pi/6)+i\sin ((2k+1)\pi/6),\ \ \ k=0,1,2,3,4,5.$

!!! esercizio "Exercise 20"

    The equation

    $$
    z^{4}-2z^{3}+4z^{2}-2z+3=0
    $$

    has $z_{1}=i$ as a solution. Denoting by $z_{2},z_{3},z_{4}$ the other solutions, we have:

    $$
    \noindent(a)~~ \Im(z_{1}z_{2}z_{3}z_{4})=0 ~~~~~~~ (b) ~~\Re(z_{1}+z_{2}+z_{3}+z_{4})=0
    $$

    $$
    \noindent(c)~~  \Re\left((z_{1}+z_{2}+z_{3}+z_{4})^{-1}\right)=1/2 ~~~~~~~ (d)~~  {\rm none~of~the~other~answers~is~correct}
    $$

??? soluzione "Solution"

    The equation has real coefficients, hence the solutions come in conjugate pairs; in particular, another solution is $z_{2}=-i$. It follows that the polynomial

    $$
    p(z)=z^{4}-2z^{3}+4z^{2}-2z+3
    $$

    is divisible by $(z-i)(z+i)$, i.e., by $z^{2}+1$. Performing the division we obtain

    $$
    p(z)=(z^{2}+1)(z^{2}-2z+3)
    $$

    hence among the solutions we also have the roots of

    $$
    z^{2}-2z+3=0
    $$

    which are $z_{3}=1-i\sqrt{2}$, $z_{4}=1+i\sqrt{2}$.

    Summarizing, the solutions of the given equation are

    $$
    z_{1}=i, \ z_{2}=-i,\ z_{3}=1-i\sqrt{2},\ z_{4}=1+i\sqrt{2}.
    $$

    Since $z_{1}+z_{2}+z_{3}+z_{4}=2$ and $z_{1}z_{2}z_{3}z_{4}=3$, the correct answers are (a) and (c).

!!! esercizio "Exercise 21"

    Let $z_{h}$, $h=1,\ldots,6$ be the solutions of

    $$
    z^{6}-(8-i)z^{3}-8i=0.
    $$

    We have:

    $$
    \noindent(a)~~ \sum_{h=1}^{6}\Re(z_{h})=-1 ~~~~~~~ (b) ~~\sum_{h=1}^{6}\Im(z_{h})=-1
    $$

    $$
    \noindent(c)~~  \sum_{h=1}^{6}\Re(z_{h})=1 ~~~~~~~ (d)~~  \sum_{h=1}^{6}\Im(z_{h})=0
    $$

    $$
    \noindent(e)~~  \sum_{h=1}^{6}\Re(z_{h})=2 ~~~~~~~ (f)~~  {\rm none~of~the~other~answers~is~correct}
    $$

??? soluzione "Solution"

    It is convenient to factor it as

    $$
    (z^{3}-8)(z^{3}+i)=0
    $$

    and then solve the two equations

    $$
    z^{3}=8,\ z^{3}=-i
    $$

    with the usual method illustrated several times in the solutions of the previous exercises. We obtain the values:

    $$
    \begin{array}{l}z_{1}=2,\ z_{2}=-1+i\sqrt{3},\ z_{3}=-1-i\sqrt{3},\\
    \\
    z_{4}=\sqrt{3}/2-i/2,\ z_{5}=i,\ z_{6}=-\sqrt{3}/2-i/2.\end{array}
    $$

    The correct answer is (d).
