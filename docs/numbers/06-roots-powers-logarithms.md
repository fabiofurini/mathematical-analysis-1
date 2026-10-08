---
title: "Roots, powers, logarithms and modular arithmetic"
---

# Roots, powers, logarithms and modular arithmetic

<div class="info-capitolo" markdown>

**Part 1 · Numbers and logic · Chapter 6** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-1-numbers.pdf)

</div>

## 1. Roots, powers, logarithms

- As a consequence of property $R_4$ we can perform, in the real field, operations that are only occasionally possible in the rational field, such as extracting roots or raising to a power.

### 1.1 Arithmetic $n$-th roots

<a id="box-theoXXX-1"></a>

!!! teorema "Theorem 1"

    For every $y \in \R$, $y > 0$ and $n \in \N$, $n \ge 1$, there exists one and only one $x \in \R, x >0$, such that $x^n = y$.

- This number is called the arithmetic $n$-th root of $y$ and is denoted by one of the symbols

    $$
    \sqrt[n]{y} {\rm ~~or~~} y^{\frac{1}{n}}.
    $$

??? dimostrazione "Proof"

    The proof of this Theorem will be given using the properties of continuous functions. <span class="qed">□</span>

!!! chiave ""

    The arithmetic $n$-th root is non-negative.

<a id="box-texexpbox1-2"></a>

!!! esempio "Example 1: arithmetic $n$-th root"

    For example:

    $$
    \sqrt{4} = 2, ~~~ \sqrt{9} = 3.
    $$

    Moreover, we have:

    \begin{equation}
    \label{RAD}
    \sqrt{x^2}=|x|
    \end{equation}

<strong>Construction of the decimal representation of the $n$-th root.</strong>

- We look for the decimal expansion of

    $$
    \sqrt{2} \approx 1.41421356237
    $$

    this number, not being rational, will be represented by an infinite (non-periodic) expansion.

- We proceed as follows: we build a class of rational numbers of the form:

    \begin{align*}
    0 & < a_0 \\[1ex]
     & < a_0,a_1 \\[1ex]
     & < a_0,a_1a_2 \\[1ex]
     & < a_0,a_1a_2a_3 \\[1ex]
     & < \cdots\cdots\cdots\cdots \\[1ex]
     & < a_0,a_1a_2a_3\cdots a_n \\[1ex]
     & < \cdots\cdots\cdots\cdots
    \end{align*}

    The rule is: each of these numbers is the largest among those with the same number of digits after the decimal point whose square is less than $2$. The first of these numbers are:

    <div class="tabella" markdown><table>
    <tr>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(1^2\)</span></td>
    <td><span class="arithmatex">\(=1\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,4\)</span></td>
    <td><span class="arithmatex">\((1,4)^2\)</span></td>
    <td><span class="arithmatex">\(=1,96\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,41\)</span></td>
    <td><span class="arithmatex">\((1,41)^2\)</span></td>
    <td><span class="arithmatex">\(=1,9881\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,414\)</span></td>
    <td><span class="arithmatex">\((1,414)^2\)</span></td>
    <td><span class="arithmatex">\(=1,999396\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,4142\)</span></td>
    <td><span class="arithmatex">\((1,4142)^2\)</span></td>
    <td><span class="arithmatex">\(=1,99996164\)</span></td>
    </tr>
    <tr>
    <td>…</td>
    <td></td>
    <td></td>
    </tr>
    </table></div>

- This set of numbers, which we call $E_{-}$, is bounded above (each one is $< 2$); by property $R_4$ it has a supremum, and this is used to define $\sqrt{2}$.

    !!! chiave ""

        The number $\sqrt{2}$ is defined precisely as $\sup E_{-}$

- We could also have built a class of numbers $E_{+}$ like the previous one, with the rule that each of them is the smallest among those with the same number of digits after the decimal point whose square is greater than $2$; we would have obtained:

    <div class="tabella" markdown><table>
    <tr>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2^2\)</span></td>
    <td><span class="arithmatex">\(=4\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,5\)</span></td>
    <td><span class="arithmatex">\((1,5)^2\)</span></td>
    <td><span class="arithmatex">\(=2, 25\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,42\)</span></td>
    <td><span class="arithmatex">\((1,42)^2\)</span></td>
    <td><span class="arithmatex">\(=2,0164\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,415\)</span></td>
    <td><span class="arithmatex">\((1,415)^2\)</span></td>
    <td><span class="arithmatex">\(=2,002225\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(1,4143\)</span></td>
    <td><span class="arithmatex">\((1,4143)^2\)</span></td>
    <td><span class="arithmatex">\(=2,00024449\)</span></td>
    </tr>
    <tr>
    <td>…</td>
    <td></td>
    </tr>
    </table></div>

    This set $E_{+}$ is bounded below (every element is $> 1$), therefore it has an infimum; one proves that:

    !!! chiave ""

        $$
        \sqrt{2} = \inf E_{+} = \sup E_{-}
        $$

        The numbers of the class $E_{-}$ approximate $\sqrt{2}$ from below, those of the class $E_{+}$ from above.

### 1.2 Powers with real exponent

!!! chiave ""

    Extracting the $n$-th root is the inverse operation of raising to an integer power.

<strong>Rational exponent</strong>

- The operation of raising to a power can be extended to every rational exponent if the base is positive (using the previous theorem).

    !!! chiave ""

        $$
        {\rm If~~} r = \frac{m}{n} ~~~~{\rm and}~~~~ a > 0 ~~~~{\rm then}~~~~ a^r = (a^m)^{\frac{1}{n}} = \sqrt[n]{a^m}
        $$

        (we assume $m \in  \Z$ and $n \in  \Z$ positive)

<strong>Real exponent</strong>

- If the exponent is real, $b=b_0,b_1b_2b_3\dots b_n \dots$, the number $a^b$ ($a > 0$) will be determined by the class of numbers

    $$
    a^{b_0} \qquad a^{b_0,b_1} \qquad a^{b_0,b_1b_2} \qquad  \dots
    $$

    in a way similar to the case of the root.

!!! chiave ""

    If the base $a$ is negative, the operation of raising to a power $a^b$ is defined only in certain cases:

    1. if the exponent $b$ is an integer, or

    2. if the exponent $b=\frac{n}{m}$ is rational, provided that it is not the case that $n$ is odd and $m$ is even.

    If $c < 0$ and $m$ is odd, we define

    $$
    \sqrt[m]{c}=-\sqrt[m]{-c}
    $$

<a id="box-texexpbox1-3"></a>

!!! esempio "Example 2: negative base"

    For example:

    $$
    (-2)^{\frac{3}{5}} = \sqrt[5]{(-2)^3} = \sqrt[5]{-8} = - \sqrt[5]{8}
    $$

    $$
    (-2)^{\frac{2}{5}} = \sqrt[5]{(-2)^2} = \sqrt[5]{4}
    $$

- When we say “does not exist in $\R$” we mean that it is not possible to define this operation in such a way that the usual rules of computation remain valid.

<a id="box-texexpbox1-4"></a>

!!! esempio "Example 3: non-existence of a power with real exponent"

    For example:

    $$
    (-2)^{\frac{3}{4}}
    $$

    does not exist in the real field!

Let

$$
a, b \in \R, ~~ a>0 {\rm ~~and~~} b >0 ~~~({\rm positive~~reals})
$$

and

$$
c, d \in \R ~~~({\rm arbitrary~reals}),
$$

<strong>the main properties of raising to a power</strong> are:

!!! chiave ""

    \begin{align}
    a^0&=1 ~~~~ \forall a \neq 0\\[2ex]
    1^c&=1 ~~~~ \forall c\\[2ex]
    a^c&>0 ~~~~ \forall c \label{FFFFF}\\[2ex]
    a^c&>1 ~~~~ \forall a>1 {\rm ~~and ~~} c >0\\[2ex]
    a^c&<1 ~~~~ \forall a<1 {\rm ~~and ~~} c >0
    \end{align}

!!! chiave ""

    \begin{align}
    a^{c+d}&= a^c \cdot a^d \\[2ex]
    (a\cdot b)^{c}&= a^c \cdot b^c  \\[2ex]
    \left(a^b\right)^{c}&= a^{b \cdot c}
    \end{align}

!!! chiave ""

    \begin{align}
    c < d & \Rightarrow a^c < a^d {\rm ~~if~~} a >1   \\[2ex]
    c < d & \Rightarrow a^c > a^d {\rm ~~if~~} a <1   \\[2ex]
    0 < a \le  b & \Rightarrow a^c \le  b^c ~~~ \forall c >0
    \end{align}

### 1.3 Logarithms

- Consider the equation

    $$
    a^x = y, \qquad a> 0
    $$

    with $y$ given and $x$ unknown. First of all, if $a= 1$, it is solvable only if $y = 1$ (and in that case every real number $x$ is a solution). So let $a \neq 1$.

    If $y \le 0$ it has no solution, see property \(\eqref{FFFFF}\).

    The following theorem tells us that it has exactly one solution for every $y > 0$:

    <a id="box-theoXXX-5"></a>

    !!! teorema "Theorem 2"

        Let $a > 0$, $a\neq 1$, $y >0$. There exists a unique real number $x$ such that $a^x=y$.

- This number is called the logarithm to base a of $y$ and is denoted by the symbol:

    $$
    \log_a y
    $$

- The logarithm is the inverse operation of raising to a power.

- the logarithm of a number to a given base is the exponent to which the base must be raised to obtain the number itself.

Let

$$
x, y, a \in \R, ~~ x>0, y>0, a >0  ~~~({\rm positive~~reals}) {\rm ~~and~~} a \neq 1,
$$

<strong>the main properties of logarithms</strong> are (they follow from those of exponentials):

!!! chiave ""

    \begin{align}
    \log_a (x \cdot y)&=\log_a x + \log_a y\\[2ex]
    \log_a \left(\frac{x}{y}\right)&=\log_a x - \log_a y\\[2ex]
    \log_a \left(\frac{1}{y}\right)&= - \log_a y
    \end{align}

!!! chiave ""

    \begin{align}
    \log_a x^{\alpha}&=\alpha \: \log_a x & (\forall \alpha \in \R)\\[2ex]
    \log_b x &=\frac{\log_a x}{\log_a b} & (\forall b >0, b \neq 1)\\[2ex]
    \log_a x &=\frac{1}{\log_x a} = - \log_{\frac{1}{a}} x & (x \neq  1)
    \end{align}

<strong>Notation</strong>:

- $\lg n = \log_2 n$  $\quad \rightarrow$ <strong>binary logarithm</strong>

- $\ln n = \log_{e}n$ $\quad \rightarrow$ <strong>natural logarithm</strong> (where $\red{ e \approx 2.718}$ is <strong>Euler's number</strong> (Napier's constant)) (sometimes the natural logarithm $\ln$ is also denoted by $\log$)

- $\lg^k n = (\lg n)^k$ $\quad \rightarrow$ <strong>power</strong>

- $\lg \lg n = \lg(\lg n)$ $\quad \rightarrow$ <strong>composition</strong>

### 1.4 Approximations

- a rational number can always be expressed with absolute precision, using either the fractional or the decimal notation (possibly with repeating digits).

- On the other hand, it is of course not possible to write all the decimal digits of an irrational number, since there are infinitely many of them and they follow one another without periodicity.

- What does it mean, then, to “know” or “specify” an irrational number? It means knowing some algorithm that allows us (at least in theory) to write as many exact decimal digits as we wish.

    <a id="box-texexpbox1-6"></a>

    !!! esempio "Example 4: irrational numbers"

        - In the (already considered) example of the irrational number:

            $$
            0,101001000100001\dots
            $$

            built according to the rule: write one digit 1, one digit 0, one digit 1, two digits 0, one digit 1, three digits 0, and so on) it is clear that we could write as many digits as we wish.

        - In other cases, such as

            $$
            \sqrt{2} {\rm ~~or~~} \log_2 3,
            $$

            things are more laborious and require iterative computations to determine each successive decimal digit; nevertheless, these computations can actually be carried out.

- At other times, in Mathematical Analysis, a number is specified in a non-constructive way, by denoting it as the unique number that solves a given problem (once it has been proved that such a solution exists and is unique). This is a less satisfactory approach from an operational point of view, but theoretically flawless.

<strong>Practical aspects of computing irrational numbers</strong>

- Whenever we perform computations with a <strong>pocket calculator</strong>, it will only display numbers with a fixed number of decimal digits after the decimal point (typically 9). This means that we are working only with rational numbers, indeed with a finite subset of the set $\Q$.

- Working with a <strong>computer</strong> things improve somewhat, but we still remain within finite subsets of $\Q$. Of course, one needs to be aware of this.

- Besides the approximation produced by computing tools, sometimes we ourselves are not interested in too many decimal digits; we then deliberately introduce approximations, writing for example

    $$
    \sqrt{2} \approx 1,414
    $$

    !!! chiave ""

        <strong>Rounding rule</strong>: the last digit written is rounded down (up) if the first digit discarded is from 0 to 4 (respectively, from 5 to 9).

    <a id="box-texexpbox1-7"></a>

    !!! esempio "Example 5: Rounding"

        For example:

        $$
        2,4138 \approx 2,41
        $$

        $$
        2,4152 \approx 2,42
        $$

## 2. Modular arithmetic

<a id="box-notationA-8"></a>

!!! definizione "Definition 1: of integer part"

    Given a real number $a \in \mathbb{R}$, we denote by $[a]$ or $\lfloor a \rfloor$ the <strong>integer part</strong> (or “<strong>floor</strong>”) of $a$:

    $$
    [a] = {\rm integer~~} n {\rm~~such~that~~} n \le a < n+1
    $$

<a id="box-texexpbox1-9"></a>

!!! esempio "Example 6: Integer part"

    $$
    [2,38] = 2;~~~~ [3] = 3;~~~~ [-1,8] = -2.
    $$

- While for positive numbers the integer part is obtained simply by “throwing away the digits after the decimal point”, for negative numbers one must take the largest integer $\le a$, which is different from what is obtained by throwing away the digits after the decimal point (except when $a$ is already an integer)

<a id="box-notationA-10"></a>

!!! definizione "Definition 2: of fractional part"

    Given a real number $a \in \mathbb{R}$, we denote by $(a)$ the <strong>fractional part</strong> (or decimal part, in Italian “mantissa”) of $a$:

    $$
    (a) = a - [a]
    $$

<a id="box-texexpbox1-11"></a>

!!! esempio "Example 7: Fractional part"

    $$
    (2,38) = 0.38;~~~~ (3) = 0;~~~~ (-1,8) = 0.2.
    $$

- The fractional part is therefore not an integer but a real number, lying in $[0, 1)$.

- For positive numbers, it is obtained simply by “throwing away the digits before the decimal point”; for negative numbers the fractional part is the <strong>one's complement</strong> of the number obtained by throwing away the digits before the decimal point.

<a id="box-notationA-12"></a>

!!! definizione "Definition 3: of upper integer part"

    Given a real number $a \in \mathbb{R}$, we denote by $\lceil a \rceil$ the <strong>upper integer part</strong> (or “<strong>ceil</strong>”) of $a$:

    $$
    \lceil a \rceil = {\rm integer~~} n {\rm~~such~that~~} n -1  < a \le n
    $$

<a id="box-texexpbox1-13"></a>

!!! esempio "Example 8: of ceil"

    $$
    \lceil 2,38 \rceil = 3;~~~~ \lceil 3 \rceil = 3;~~~~ \lceil -1,8 \rceil = -1.
    $$

<strong>Some properties</strong>:

Given a real number $a \in \mathbb{R}$, we have

!!! chiave ""

    $$
    a - 1 < \lfloor a \rfloor \le a \le \lceil a \rceil < a + 1
    $$

Given an integer $n \in \mathbb{Z}$, we have

!!! chiave ""

    $$
    \left\lfloor \frac{n}{2} \right\rfloor + \left\lceil \frac{n}{2} \right\rceil=n
    $$

Given two positive integers $r,s \in \mathbb{Z}$, $r, s > 0$, we have

!!! chiave ""

    \begin{align}
    \left\lceil \frac{r}{s}  \right\rceil &\le  \frac{r + (s-1)}{s}\\[2ex]
    \left\lfloor \frac{r}{s}  \right\rfloor &\ge  \frac{r - (s-1)}{s}
    \end{align}

Given, in addition, a non-negative real number $p \in \mathbb{R},p \ge 0$, we have

!!! chiave ""

    \begin{align}
    \left\lceil \frac{ \left \lceil \frac{p}{r} \right \rceil }{s} \right\rceil &= \left\lceil \frac{p}{r\:s} \right\rceil\\[2ex]
    \left\lfloor \frac{ \left \lfloor \frac{p}{r} \right \rfloor }{s} \right\rfloor &= \left\lfloor \frac{p}{r\:s} \right\rfloor
    \end{align}

<a id="box-notationA-14"></a>

!!! definizione "Definition 4: Divisor"

    A <strong>divisor</strong> of an integer ${n} \in \mathbb{Z}$, also called a <strong>factor</strong> of ${n}$, is an integer ${m} \in \mathbb{Z}$ that can be multiplied by some integer ${q} \in \mathbb{Z}$ to obtain ${n}$, i.e., if ${n}={q} \cdot {m}$.

- If ${m}$ is a divisor of ${n}$, ${n}$ is a <strong>multiple</strong> of ${m}$.

- An integer ${n}$ is <strong>divisible</strong> by another integer ${m}$ if ${m}$ is a <em>divisor</em> of ${n}$.

- For an integer ${a} \in \mathbb{Z}$ and a positive integer ${n} \in \mathbb{Z}, {n}>0$, the value ${a} \mod {n}$ is the remainder of the division $\frac{{a}}{{n}}$.

<a id="box-funcP2-15"></a>

!!! definizione "Definition 5: of modulo (remainder)"

    Given ${a} \in \mathbb{Z}$ and ${n} \in \mathbb{Z}, {n} >0$,

    $$
    {a} \mod {n} = {a} - {n} \: \left\lfloor \frac{{a}}{{n}} \right\rfloor
    $$

- It follows that $0 \le {a} \mod {n} < {n}$

!!! chiave ""

    If $({a} \mod {n}) = ({b} \mod {n})$, we write

    $$
    {a} \equiv {b} \:(\mod {n})
    $$

    and we say that ${a}$ is <strong>equivalent</strong> to ${b}$, modulo ${n}$.

<a id="box-texexpbox1-16"></a>

!!! esempio "Example 9"

    For example, $23$ and $13$ are equivalent modulo $5$ and we write $23 \equiv 13 \:(\mod 5)$

- Equivalently, ${a} \equiv {b} \:(\mod {n})$ if ${a}$ and ${b}$ have the same remainder when divided by ${n}$.

- Equivalently, ${a} \equiv {b} \:(\mod {n})$ if and only if ${n}$ is a divisor of $|{b} - {a}|$.
