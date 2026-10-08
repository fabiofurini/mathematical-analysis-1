---
title: "Number sets and intervals"
---

# Number sets and intervals

<div class="info-capitolo" markdown>

**Part 1 · Numbers and logic · Chapter 3** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-1-numbers.pdf)

</div>

## 1. The five main number sets

### 1.1 The natural numbers

### 1.2 The integers

$\Z$ is the set of <strong>integers</strong> (also called signed numbers), that is:

$$
0,~ 1,~ - 1,~ 2,~ -2,~ \dots
$$

### 1.3 The rational numbers

$\Q$ is the set of <strong>rational numbers</strong>, that is, of the fractions:

$$
\frac{n}{m},~~ {\rm~where~~} n, m \in \Z , {\rm ~~and~~} m \neq 0.
$$

Rational numbers can also be written in decimal form. For example:

\begin{align*}
\frac{3}{4} = 0, 75, {\rm ~~~while~~~} \frac{1}{3} =  0,333 \dots {\rm }= 0,\overline{3}.
\end{align*}

A rational number, written in decimal form, may have after the decimal point a finite number of digits (different from zero), or an infinite number of digits different from zero, which however repeat <em>periodically</em>.

<a id="box-obserXX-1"></a>

!!! osservazione "Remark 1"

    $$
    0,\overline{9}=1
    $$

!!! chiave ""

    There are different proofs of this remark, based on different mathematical techniques.

??? dimostrazione "Proof"

    A simple proof follows directly from the definition of $1$ divided by $3$; indeed, we have:

    \begin{align*}
    \frac{1}{3} &= 0,\overline{3}\\
    \frac{1}{3} \cdot 3 &= 0,\overline{3} \cdot 3\\
     1 &= 0,\overline{9}
    \end{align*}

    <p class="qed-riga"><span class="qed">□</span></p>

??? dimostrazione "Proof"

    Using algebraic arguments we can write:

    \begin{align*}
    x &= 0.999\dots\\
    10\:x &= 9.999\dots & {\rm multiplying~by~} 10 \\
    10\:x &= 9 + 0.999\dots & {\rm separating~the~integer~part~from~the~fractional~part} \\
    10\:x &= 9 + x & {\rm by~definition~of~} x\\
    9\:x &= 9  & {\rm subtracting~} x\\
    x &= 1  & {\rm dividing~by~} 9
    \end{align*}

    <p class="qed-riga"><span class="qed">□</span></p>

??? dimostrazione "Proof"

    A proof by contradiction is the following:

    \begin{align*}
    0,\overline{9} & \neq 1\\
    0,\overline{9} \cdot 9 & \neq 1 \cdot 9\\
    0,\overline{9} \cdot 9 + 0,\overline{9}& \neq 1 \cdot 9 +0,\overline{9}\\
    0,\overline{9} \cdot 9 + 0,\overline{9}& \neq 9,\overline{9}\\
    0,\overline{9} \cdot  (9+1) & \neq 9,\overline{9}\\
    0,\overline{9} \cdot  (10) & \neq 9,\overline{9}\\
    9,\overline{9} & \neq 9,\overline{9} ~~~~~~ {\rm contradiction!}
    \end{align*}

    <p class="qed-riga"><span class="qed">□</span></p>

!!! chiave ""

    Other proofs start from the assumption that two numbers are identical if and only if their difference is equal to zero, and they are based on computing the value of $1 - 0,\overline{9}$.

??? dimostrazione "Proof"

    We write the number $0,999...$ with $n$ digits after the decimal point as $0,(9)_n$, hence $0,(9)_1 = 0.9$, $0,(9)_2 = 0.99$, $0,(9)_3 = 0.999$, and so on. 

    Given $\frac{1}{10^n} = 0,0 \dots 01$, with $n$ digits after the decimal point, the addition rules for decimal numbers imply

    $$
    0,(9)_n + \frac{1}{10^n} = 1
    {\rm ~~moreover~~}
    0,(9)_n < 1,  \forall n \in \N.
    $$

    We must prove that $1$ is the smallest number that is not less than all the $0,(9)_n$. For this it is enough to prove that, if a number $x$ is not greater than 1 and not less than all the $0.(9)_n$, then $x = 1$.

    So let $x$ be such that

    $$
    0,(9)_n \le x \le 1
    $$

    for every positive integer $n$. Hence

    $$
    1-1 \le 1 -  x \le 1- 0,(9)_n
    $$

    which, using basic arithmetic and the first equality established above, simplifies to

    $$
    0 \le 1 -  x  \le \frac{1}{10^n}
    $$

    This implies that the difference between $1$ and $x$ is less than the reciprocal of any positive integer. Hence this difference must be zero, and therefore $x = 1$; which in turn implies

    $$
    0.999\dots = 1
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

!!! chiave ""

    This proof is based on the fact that 0 is the only non-negative number less than all the reciprocals of the positive integers, or equivalently that there is no number greater than every integer.

    This is the <strong>Archimedean property</strong>, which holds for the rational and the real numbers.

### 1.4 The real numbers

$\R$ is the set of <strong>real numbers</strong>, that is, those which, written in decimal form, have after the decimal point any sequence of digits different from zero, possibly even <em>infinite</em> and <em>non-periodic</em>.

That numbers of this last kind exist (that is, real but not rational), can be understood by reflecting on examples such as:

$$
0,10110111011110 \dots
$$

After the decimal point, the previous number has: one digit equal to $1$, then $0$, then two digits equal to $1$, then $0$, then three digits equal to $1$ … and so on. It is clear that this rule defines a decimal number precisely. On the other hand, the string of nonzero digits after the decimal point is neither finite nor periodic: therefore this number is irrational.

### 1.5 The complex numbers

$\C$ is the set of <strong>complex numbers</strong>, that is, numbers of the form $a + i\:b$, where $a$, $b$ are real numbers, and $i$ is the <em>imaginary unit</em>, that is, a number whose square is $-1$.

!!! chiave ""

    Among the number sets introduced, the following inclusions hold:

    $$
    \N ~\subsetneqq~ \Z ~\subsetneqq~ \Q ~\subsetneqq~ \R ~\subsetneqq~ \C.
    $$

    As indicated by the symbols, all the inclusions are strict:

    - there exist integers that are not natural numbers (the negative numbers),

    - there exist rational numbers that are not integers (the proper fractions),

    - there exist real numbers that are not rational (the irrational numbers),

    - there exist complex numbers that are not real (the imaginary numbers).

## 2. Intervals

<a id="box-defXX-2"></a>

!!! definizione "Definition 1: of interval"

    Given two real numbers $a$, $b$, an <strong>interval</strong> with endpoints $a$ and $b$ is one of the following sets:

    \begin{align*}
    [a,b] = \big\{ x \in \mathbb{R}:  a \le x \le b \big\}, & \qquad
     [a,b) = \big\{ x \in \mathbb{R}:  a \le x < b \big\} \\[2ex]
     (a,b] = \big\{ x \in \mathbb{R}:  a < x \le b \big\}, &\qquad
     (a,b) = \big\{ x \in \mathbb{R}:  a < x < b \big\}
    \end{align*}

- As can be seen, the square (round) bracket at one of the two endpoints indicates that this endpoint is included in (excluded from) the interval.

- The intervals $[a, b]$ are called <strong>closed</strong>; the intervals $(a, b)$ are called <strong>open</strong>.

- All the intervals listed above are bounded; half-lines are also called (unbounded) intervals, for example:

    \begin{align*}
    (-\infty,b) = \big\{ x \in \mathbb{R}:  x < b \big\} \\[2ex]
     [a,+\infty) = \big\{ x \in \mathbb{R}:  x \ge a \big\}
    \end{align*}

    or the whole line

    $$
    \mathbb{R} = (-\infty, +\infty)
    $$

    ![Figure 1](../img/numbers-03-number-sets/fig01.svg){ .fig .ovale loading=lazy style="width:80%" }

!!! chiave ""

    It can be proved that the intervals, bounded or unbounded, are exactly the subsets $I$ of $\mathbb{R}$ that satisfy the following property (called <strong>connectedness</strong>):

    $$
    x_1 < x_2 < x_3, {\rm ~~if~~} x_1,x_3 \in I, {\rm ~~then~~} x_2 \in I
    $$

- In what follows we will sometimes consider the Cartesian product of two (or more) intervals, which can be given the geometric meaning of a rectangle (in two dimensions) or of a parallelepiped (in three dimensions).

<a id="box-texexpbox1-3"></a>

!!! esempio "Example 1: Cartesian product of intervals"

    Let $A = [0, 1]$, $B = [1, 2]$; the figure

    ![Figure 2](../img/numbers-03-number-sets/fig02.svg){ .fig .ovale loading=lazy style="width:25%" }

    ![Figure 3](../img/numbers-03-number-sets/fig03.svg){ .fig .ovale loading=lazy style="width:25%" }

    ![Figure 4](../img/numbers-03-number-sets/fig04.svg){ .fig .ovale loading=lazy style="width:25%" }

    illustrates the sets $A \times B$ , $B \times A$ , $A \times A$, also denoted by $A^2$. In general, $A \times B$ is different from $B \times A$.
