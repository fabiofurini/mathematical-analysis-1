---
title: "Ordered fields, supremum/infimum and the completeness axiom"
---

# Ordered fields, supremum/infimum and the completeness axiom

<div class="info-capitolo" markdown>

**Part 1 · Numbers and logic · Chapter 5** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-1-numbers.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-numbers-05-ordered-fields.pdf)

</div>

## 1. Properties $R_1$ and $R_2$

- We now begin to study more closely the <strong>structure of the number sets</strong> that we introduced earlier, and in particular: the set $\mathbb{Q}$ of <strong>rational numbers</strong> and the set $\mathbb{R}$ of <strong>real numbers</strong>.

- We denote by $a$, $b$, $c$ three generic <strong>rational</strong> or <strong>real</strong> numbers.

!!! chiave ""

    - **$R_1 \rightarrow$** In $\mathbb{Q}$ and $\mathbb{R}$ an operation is defined (called <strong>addition</strong> or <strong>sum</strong>) which has the following four properties:

    - **1** $\forall a,b, \quad a+b = b+a~~~~$  (<strong>commutative property</strong>)

    - **2** $\forall a,b,c, \quad (a+b)+c = a+(b+c)~~~~$  (<strong>associative property</strong>)

    - **3** there exists a <strong>neutral element for the sum</strong>, denoted by $0$, such that:

        $$
        \forall a, ~~  a+0=a
        $$

    - **4** for every $a$ there exists an <strong>inverse</strong> element of $a$ <strong>with respect to the sum</strong>, called the <strong>opposite</strong> of $a$ and denoted by $-a$, such that:

        $$
        a + (-a) =0
        $$

!!! chiave ""

    - **$R_2 \rightarrow$** In $\mathbb{Q}$ and $\mathbb{R}$ an operation is defined (called <strong>multiplication</strong> or <strong>product</strong>) which has the following four properties:

    - **1** $\forall a,b, ~~$ $a \cdot b = b \cdot a~~~~$  (<strong>commutative property</strong>)

    - **2** $\forall a,b,c, ~~$  $(a \cdot b) \cdot c = a \cdot (b\cdot c)~~~~$  (<strong>associative property</strong>)

    - **3** there exists a <strong>neutral element for the product</strong>, denoted by $1$, such that:

        $$
        \forall a, ~~ a \cdot 1=a
        $$

    - **4** for every $a \neq 0$ there exists an <strong>inverse</strong> element of $a$ <strong>with respect to the product</strong>, called the <strong>reciprocal</strong> of $a$ and denoted by $a^{-1}$, such that:

        $$
        a \cdot a^{-1}  = 1
        $$

- The operations of sum and product are linked by the following property:

    !!! chiave ""

        - ****

            $$
            \forall a,b,c,  \qquad (a +b) \cdot c = a \cdot c + b \cdot c  \qquad ({\rm \textbf{distributive} ~~property})
            $$

- From properties $R_1$ and $R_2$ follows the <strong>possibility of performing the four fundamental operations without restrictions</strong>:

    1. <strong>addition</strong> and <strong>multiplication</strong> (defined above)

    2. <strong>subtraction</strong>, by setting:

        $$
        a - b = a + (-b)
        $$

    3. <strong>division</strong>, by setting:

        $$
        a / b = a \cdot b^{-1} {\rm~~~provided~~that~} b \neq 0
        $$

## 2. Commensurable magnitudes

!!! chiave ""

    In mathematics, the word <strong>magnitude</strong> denotes a <strong>property</strong> of a <strong>geometric figure</strong> that can be <strong>measured</strong>. Examples of magnitudes are: the length of a segment, the measure of an angle, the area of a plane figure or the volume of a solid.

<a id="box-defXX-1"></a>

!!! definizione "Definition 1: of homogeneous magnitudes"

    Two magnitudes are <strong>homogeneous</strong> if they have the same dimension, i.e., if they can be expressed using the same unit of measurement.

- The length of a segment and the height of a solid are two homogeneous magnitudes; indeed, both can be expressed with the same unit of length.

- The area of a square and the volume of a cone are not homogeneous magnitudes; indeed, area is expressed in square meters or in other units of surface, which however cannot be used to express volume.

<a id="box-defXX-2"></a>

!!! definizione "Definition 2: of commensurable and incommensurable magnitudes"

    Two homogeneous magnitudes $a$ and $b$ are called <strong>commensurable</strong> if their ratio is a rational number, i.e., if ${a}/{b}  \in \mathbb{Q}$. They are instead called <strong>incommensurable</strong> if their ratio is not a rational number, i.e., if ${a}/{b}  \notin \mathbb{Q}$.

<a id="box-texexpbox1-3"></a>

!!! esempio "Example 1: of commensurable magnitudes"

    The volume of a sphere and the volume of the cylinder circumscribed about the sphere are commensurable. In formulas, the volume $V_s$ of the sphere as a function of its radius $r$ is given by the formula:

    $$
    V_s =\frac{4}{3} \: \pi \: r^3
    $$

    The cylinder circumscribed about it has base radius equal to the radius $r$ of the sphere and height $h$ equal to twice the radius. The volume $V_c$ of this cylinder is therefore given by the formula:

    $$
    V_c =\pi \: r^2 \: h = \pi \: r^2 \: 2 \: r = 2 \: \pi \: r^3
    $$

    Taking the ratio we obtain:

    $$
    \frac{V_s}{V_c} = \frac{\frac{4}{3} \: \pi \: r^3}{2 \: \pi \: r^3}= \frac{2}{3} \in \mathbb{Q}
    $$

<a id="box-texexpbox1-4"></a>

!!! esempio "Example 2: of incommensurable magnitudes"

    The length of a circle and the length of its diameter are incommensurable. In formulas, denoting by $d$ the diameter of the circle and by $c$ the length of the circle, we have:

    $$
    c = \pi \: d
    $$

    Now, taking the ratio between the length of the circle and its diameter, we obtain:

    $$
    \frac{c}{d}=\frac{\pi \: d}{d} = \pi \notin \mathbb{Q}
    $$

    A proof that $\pi \notin \mathbb{Q}$ will be given later.

## 3. Geometric representation of $\mathbb{Q}$

!!! chiave ""

    A geometric representation of $\mathbb{Q}$ can be obtained by associating with each rational number a point of the <strong>Euclidean line</strong> (which can be imagined as a line in the plane of infinite length)

- With an arbitrarily chosen point of the Euclidean line we associate $0$, and with another point, distinct from the first, we associate $1$, thus identifying the oriented segment $01$, which constitutes the <strong>unit of measurement</strong>

- At this point we have a <strong>one-to-one correspondence</strong> between the rational numbers and those points $P$ of the line that are endpoints of oriented segments $0P$ <strong>commensurable</strong> with $01$. Indeed, if the rational number $p$ (its <strong>abscissa</strong>) is associated with the point $P$, the segment $0P$ measures $p$ times the unit segment $01$, and therefore the ratio of the two lengths is:

    $$
    \frac{0P}{01} = \frac{p}{1} = p \in \Q
    $$

![Figure 1](../img/numbers-05-ordered-fields/fig01.svg){ .fig .ovale loading=lazy style="width:80%" }

## 4. Total order relations

<a id="box-propAAA-5"></a>

!!! osservazione "Remark 1"

    The sets of rational numbers $~\Q$ and of real numbers $~\R$ with the relation “less than or equal to” (“$\le$”) are totally ordered sets.

- The relations “less than or equal to” (“$\le$”) for the set of rational or real numbers:

    $$
    R_{\le}= \bigg\{ (a,b): a,b \in \mathbb{Q} {\rm~~~~and~~~~} a \le b \bigg\}, \qquad ~~~R_{\le}= \bigg\{ (a,b): a,b \in \mathbb{R} {\rm~~~~and~~~~} a \le b \bigg\}
    $$

    are <strong>partial order relations</strong>. That is, they satisfy the following properties:

    !!! chiave ""

        1. $\forall a, \quad a \le a   \qquad ({\rm \textbf{reflexive} ~~property})$

        2. $\forall a,b, \quad  a \le b {\rm~~~~and~~~~} b \le a ~~\Rightarrow~~ a =  b   \qquad ({\rm \textbf{antisymmetric} ~~property})$

        3. $\forall a,b,c, \quad  a \le b {\rm~~~~and~~~~} b \le c ~~\Rightarrow~~ a \le  c   \qquad ({\rm \textbf{transitive} ~~property})$

    Moreover, the relations “less than or equal to” (“$\le$”) for $\Q$ and $\R$ are <strong>total relations</strong> since:

    !!! chiave ""

        1. $\forall a,b, \qquad a \le b {\rm~~~~or~~~~} b \le a$

- Consequently, the pair consisting of the set $\Q$ or $\R$ and the corresponding relation $R_{\le}$ is a totally ordered set.

<a id="box-oss_tricotomia-6"></a>

!!! osservazione "Remark 2: trichotomy property"

    For every pair of numbers $a$, $b$ (rational or real) <strong>exactly one</strong> of the three relations holds:

    $$
    a < b, \qquad a = b, \qquad a > b
    $$

- This is not a new property: it is a consequence of the fact that “$\le$” is a <strong>total</strong> order relation, as the proof below shows. For this reason we do not count it among the axioms $R_1$, $R_2$, $R_3$ and $R_4$.

??? dimostrazione "Proof"

    Recall that $a < b$ means $a \le b$ and $a \neq b$.

    <strong>At least one of the three relations holds.</strong> Since the relation is total, we have $a \le b$ or $b \le a$:

    - if $a \le b$ and $a \neq b$, then $a < b$;

    - if $b \le a$ and $a \neq b$, then $a > b$;

    - if $a = b$ the second relation holds.

    <strong>At most one of the three relations holds.</strong> The relations $a<b$ and $a=b$ cannot hold together, because the first one requires $a \neq b$; for the same reason $a>b$ and $a=b$ cannot hold together. Finally, if $a<b$ and $a>b$ held together, we would have $a \le b$ and $b \le a$, and hence $a = b$ by the antisymmetric property, contradicting $a \neq b$. <span class="qed">□</span>

## 5. Property $R_3$

- We now highlight the properties of the ordering of rational or real numbers:

    !!! chiave ""

        - **$R_3 \rightarrow$** In $\mathbb{Q}$ and $\mathbb{R}$ the total order relation “less than or equal to” (“$\le$”) is defined, compatible with the algebraic structure [^1], that is:

            1. $\forall a,b, c,\qquad a \le b ~~\Rightarrow~~ a +  c  \le b +c$

            2. $\forall a,b {\rm ~~and~~} \forall c > 0, \qquad  a \le b ~~\Rightarrow~~ a \cdot  c  \le b \cdot c$

- We observe that all the rules of algebraic computation follow from the properties: $R_1$, $R_2$, $R_3$.

<a id="box-texexpbox1-7"></a>

!!! esempio "Example 3"

    For example, all the usual procedures used to solve inequalities are a consequence of the axioms and of the algebraic properties of the sum and the product, expressed by $R_1$ and $R_2$, <strong>and of the compatibility of the order relation with these operations</strong>, expressed by $R_3$. It is indeed $R_3$ that allows one to add the same number to both sides of an inequality and to multiply them by the same positive number without changing the direction of the inequality.

## 6. Ordered fields

<a id="box-defXX-8"></a>

!!! definizione "Definition 3: of (ordered) field"

    A <strong>field</strong> is a set on which two operations (sum and product) are defined, satisfying the properties $R_1$ and $R_2$ and the <strong>distributive property</strong>.

    An <strong>ordered field</strong> is a field on which a total order relation satisfying the property $R_3$ is also defined.

- The distributive property is part of the definition of a field: it is the only property that links the sum and the product to each other, and without it the two operations would remain independent.

- Everything we have said so far about the operations of sum and product and about the total order relation “less than or equal to” (“$\le$”) holds both for the set of rational numbers and for the set of real numbers.

<a id="box-propAAA-9"></a>

!!! osservazione "Remark 3"

    The sets of rational numbers $~\Q$ and of real numbers $~\R$ are ordered fields.

- From this point of view, therefore, $\mathbb{Q}$ and $\mathbb{R}$ appear to have similar properties. In what follows we will highlight the <strong>property that substantially distinguishes</strong> $\mathbb{R}$ from $\mathbb{Q}$ and that makes $\mathbb{R}$ the <strong>right setting for developing mathematical analysis</strong>.

- We begin by observing that the <strong>set of rational numbers is inadequate for expressing the lengths of segments</strong> (but also areas, volumes, times, speeds, etc.)

!!! chiave ""

    As we have seen, there exist magnitudes that are not <strong>commensurable</strong> with each other. The classic example is given by the diagonal and the side of a square: if the side measures 1, the abscissa $d$ that measures the diagonal is not a rational number.

    ![Figure 2](../img/numbers-05-ordered-fields/fig02.svg){ .fig .ovale loading=lazy style="width:80%" }

    Indeed, by the Pythagorean Theorem we have:

    $$
    d^2 = 1^2 + 1^2 = 2
    $$

    but, as we have seen, there is no rational number whose square is $2$. Hence the point $d$ on the line does not represent any rational number. This means that, after “occupying” the points of the line with the rational numbers, there are still some <strong>empty places</strong> left on it.

## 7. Bounded sets, maxima and minima

<a id="box-defXX-10"></a>

!!! definizione "Definition 4: of bounded set"

    Let $E$ be a set contained in $\Q$ or in $\R$. The set $E$ is called <strong>bounded</strong> if there exist two numbers $m$ and $M$ such that:

    $$
    \forall x \in E, \qquad m \le x \le M \qquad
    $$

- $E$ is <strong>bounded below</strong> if there exists a number $m$ such that:

    $$
    \forall x \in E, \qquad m \le x  \qquad
    $$

- $E$ is <strong>bounded above</strong> if there exists a number $M$ such that:

    $$
    \forall x \in E, \qquad x \le M \qquad
    $$

- It makes no difference whether we require $m$ and/or $M$ to belong to $\Q$ or to $\R$, since the condition only concerns the existence of such numbers. This is not an immediate consequence of the definition, though, because $\Q$ is a proper subset of $\R$: it follows from the <strong>Archimedean property</strong> (recalled in the chapter <em>Sets</em> and proved later in this chapter). Indeed, if $M \in \R$ satisfies $x \le M$ for every $x \in E$, there exists a natural number $n > M$, and hence $x \le M < n$ for every $x \in E$, with $n \in \Q$; in the same way, if $m \in \R$ satisfies $m \le x$ for every $x \in E$, there exists a natural number $n > -m$, that is $-n < m$, and hence $-n < x$ for every $x \in E$, with $-n \in \Q$. Conversely, every rational number is also a real number, and therefore the two requirements single out the same bounded sets.

<a id="box-defXX-11"></a>

!!! definizione "Definition 5: of maximum and minimum of a set"

    An element $x_{M} \in E$ is called the <strong>maximum</strong> of $E$ if:

    $$
    \forall x \in E, \qquad x \le x_{M}
    $$

    An element $x_m \in E$ is called the <strong>minimum</strong> of $E$ if:

    $$
    \forall x \in E, \qquad x_m \le x
    $$

- Note that the maximum and the minimum, by definition, <strong>belong</strong> to the set $E$.

<a id="box-oss_unicita-max-min-12"></a>

!!! osservazione "Remark 4"

    If a set $E$ has a maximum, this is <strong>unique</strong>; in the same way, if it has a minimum, this is unique. We then write $\max E$ and $\min E$.

??? dimostrazione "Proof"

    Let $x_M$ and $x_M'$ be two maxima of $E$. Since $x_M'$ belongs to $E$ and $x_M$ is a maximum of $E$, we have $x_M' \le x_M$. Exchanging the roles, since $x_M$ belongs to $E$ and $x_M'$ is a maximum of $E$, we have $x_M \le x_M'$. From the antisymmetric property of the order relation it follows that:

    $$
    x_M' \le x_M {\rm ~~~~and~~~~} x_M \le x_M' \qquad \Longrightarrow \qquad x_M = x_M'
    $$

    The proof for the minimum is identical: if $x_m$ and $x_m'$ are two minima of $E$, then $x_m \le x_m'$ and $x_m' \le x_m$, and hence $x_m = x_m'$. <span class="qed">□</span>

!!! chiave ""

    The existence of the maximum and of the minimum of a set implies that the set is bounded, that is:

    \begin{equation}
    {\rm ~~existence~of~maximum~and~minimum~} ~~\Rightarrow~~ {\rm ~~bounded~set~} \label{BBB}
    \end{equation}

    but the converse is not true (we will give a counterexample later):

    \begin{equation}
    {\rm ~~bounded~set~}  ~~\nRightarrow~~  {\rm ~~existence~of~maximum~and~minimum~} 
     \label{CCC}
    \end{equation}

    Hence the fact that a set is bounded is a necessary but not sufficient condition for the set to have a maximum and a minimum. Moreover, the existence of a maximum and a minimum is a sufficient but not necessary condition for a set to be bounded.  

    From the <strong>contrapositive</strong> of \(\eqref{BBB}\) we have:

    $$
    \textrm{unbounded set}   ~~\Rightarrow~~ \textrm{the maximum does not exist \textbf{or} the minimum does not exist}
    $$

    that is, if a set is not bounded, it has no maximum or it has no minimum (it may well have one of the two: $\N$ is unbounded and nevertheless has minimum $0$).

<a id="box-texexpbox1-13"></a>

!!! esempio "Example 4: of maxima and minima"

    <div class="tabella" markdown><table>
    <tr>
    <td>Example</td>
    <td>set <span class="arithmatex">\(E\)</span></td>
    <td>minimum</td>
    <td>maximum</td>
    </tr>
    <tr>
    <td>I)</td>
    <td><span class="arithmatex">\(\mathbb{N}\)</span></td>
    <td><span class="arithmatex">\(0\)</span></td>
    <td>does not exist</td>
    </tr>
    <tr>
    <td>II)</td>
    <td>even integers</td>
    <td>does not exist</td>
    <td>does not exist</td>
    </tr>
    </table></div>

<a id="box-texexpbox1-14"></a>

!!! esempio "Example 5: of maxima and minima"

    <div class="tabella" markdown><table>
    <tr>
    <td>Example</td>
    <td>set <span class="arithmatex">\(E\)</span></td>
    <td>minimum</td>
    <td>maximum</td>
    </tr>
    <tr>
    <td>III)</td>
    <td><span class="arithmatex">\(\bigg\{~~\frac{1}{n} ~~:~~ n \in \mathbb{N}_{>0}~~\bigg\}\)</span></td>
    <td>does not exist</td>
    <td>1</td>
    </tr>
    </table></div>

    ![Figure 3](../img/numbers-05-ordered-fields/fig03.svg){ .fig .ovale loading=lazy style="width:58%" }

<a id="box-texexpbox1-15"></a>

!!! esempio "Example 6: of maxima and minima"

    <div class="tabella" markdown><table>
    <tr>
    <td>Example</td>
    <td>set <span class="arithmatex">\(E\)</span></td>
    <td>minimum</td>
    <td>maximum</td>
    </tr>
    <tr>
    <td>IV)</td>
    <td><span class="arithmatex">\(\bigg\{~~\frac{n-1}{n+1} ~~:~~ n \in \mathbb{N}~~\bigg\}\)</span></td>
    <td>\-1</td>
    <td>does not exist</td>
    </tr>
    </table></div>

    We have:

    $$
    \frac{n-1}{n+1} = \frac{n+1-1-1}{n+1}=1-\frac{2}{n+1}
    $$

    ![Figure 4](../img/numbers-05-ordered-fields/fig04.svg){ .fig .ovale loading=lazy style="width:58%" }

!!! chiave ""

    Note that sometimes, even though the set is bounded, it may have no maximum or no minimum.

<a id="box-texexpbox1-16"></a>

!!! esempio "Example 7: of maxima and minima"

    <div class="tabella" markdown><table>
    <tr>
    <td>Example</td>
    <td>set <span class="arithmatex">\(E\)</span></td>
    <td>minimum</td>
    <td>maximum</td>
    </tr>
    <tr>
    <td>V)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{R}:~~ 27 \le  x^3 \right\}\)</span></td>
    <td>3</td>
    <td>does not exist</td>
    </tr>
    </table></div>

    We have:

    $$
    27 \le  x^3 \Longleftrightarrow \sqrt[3]{27}=3 \le  x {\rm ~~~~and~~~} 3 \in E
    $$

<a id="box-texexpbox1-17"></a>

!!! esempio "Example 8: of maxima and minima"

    <div class="tabella" markdown><table>
    <tr>
    <td>Example</td>
    <td>set <span class="arithmatex">\(E\)</span></td>
    <td>minimum</td>
    <td>maximum</td>
    </tr>
    <tr>
    <td>VI)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{Q}:~~ x \ge 0,  x  < \sqrt{2}   \right\}\)</span></td>
    <td>0</td>
    <td>does not exist</td>
    </tr>
    </table></div>

    The value $\sqrt{2}$ is irrational, hence by truncating we obtain rational numbers that get closer and closer to $\sqrt{2}$, none of which has the property of being the maximum. 

    ![Figure 5](../img/numbers-05-ordered-fields/fig05.svg){ .fig .ovale loading=lazy style="width:50%" }

    It is an example of a bounded set that has no maximum.

    <div class="tabella" markdown><table>
    <tr>
    <td>Example</td>
    <td>set <span class="arithmatex">\(E\)</span></td>
    <td>minimum</td>
    <td>maximum</td>
    </tr>
    <tr>
    <td>VII)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{Q}:~~  ~  x  > \sqrt{2}, x\le 4   \right\}\)</span></td>
    <td>does not exist</td>
    <td>4</td>
    </tr>
    </table></div>

    The value $\sqrt{2}$ is irrational, hence by truncating and rounding up we obtain rational numbers that get closer and closer to $\sqrt{2}$, none of which has the property of being the minimum. 

    ![Figure 6](../img/numbers-05-ordered-fields/fig06.svg){ .fig .ovale loading=lazy style="width:50%" }

    It is an example of a bounded set that has no minimum.

<a id="box-ex_max-min-intervalli-18"></a>

!!! esempio "Example 9: of maxima and minima of intervals"

    <div class="tabella" markdown><table>
    <tr>
    <td>Example</td>
    <td>set <span class="arithmatex">\(E\)</span></td>
    <td>minimum</td>
    <td>maximum</td>
    </tr>
    <tr>
    <td>VIII)</td>
    <td><span class="arithmatex">\([-2,1]\)</span></td>
    <td><span class="arithmatex">\(-2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    <tr>
    <td>IX)</td>
    <td><span class="arithmatex">\((-\infty,3)\)</span></td>
    <td>does not exist</td>
    <td>does not exist</td>
    </tr>
    </table></div>

    - In example VIII) the interval contains both of its endpoints: $-2 \in [-2,1]$ and $-2 \le x$ for every $x \in [-2,1]$, hence $-2$ is the minimum; $1 \in [-2,1]$ and $x \le 1$ for every $x \in [-2,1]$, hence $1$ is the maximum.

    - In example IX) the interval is not bounded below and therefore it has no minimum. It has no maximum either: given any $x \in (-\infty,3)$, the number

        $$
        y = \frac{x+3}{2} \qquad {\rm ~~satisfies~~} \qquad x < y < 3
        $$

        indeed $y - x = \frac{3-x}{2} > 0$ and $y < 3 \Leftrightarrow x < 3$. Hence $y \in (-\infty,3)$ and it is strictly greater than $x$: no element of the set can be the maximum.

<a id="box-ex_max-min-diseq-19"></a>

!!! esempio "Example 10: of the maximum and the minimum of a set defined by an inequality"

    <div class="tabella" markdown><table>
    <tr>
    <td>Example</td>
    <td>set <span class="arithmatex">\(E\)</span></td>
    <td>minimum</td>
    <td>maximum</td>
    </tr>
    <tr>
    <td>X)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{R}:~~ -5 \le 3\,x < 4 \right\}\)</span></td>
    <td><span class="arithmatex">\(-\frac{5}{3}\)</span></td>
    <td>does not exist</td>
    </tr>
    </table></div>

    It is convenient to <strong>solve the inequality</strong> first: dividing by $3 > 0$, and using the property $R_3$ which preserves the direction of the inequality, we obtain

    $$
    -5 \le 3\,x < 4 \qquad \Longleftrightarrow \qquad -\frac{5}{3} \le x < \frac{4}{3}
    \qquad {\rm ~~that~is~~} \qquad E = \bigg[-\frac{5}{3}, \frac{4}{3}\bigg)
    $$

    - $-\frac{5}{3} \in E$ and it is less than or equal to every element of $E$: it is therefore the minimum.

    - The maximum does not exist: as in example IX), given $x \in E$, the number $y = \frac{1}{2}\big(x + \frac{4}{3}\big)$ satisfies $x < y < \frac{4}{3}$ and is still an element of $E$ strictly greater than $x$.

## 8. Upper/lower bounds and suprema/infima

<a id="box-defXX-20"></a>

!!! definizione "Definition 6: of upper bound of a set"

    Let $E$ be a set contained in $\Q$ or in $\R$; a number $k$ belonging to $\Q$ or to $\R$ respectively is called an <strong>upper bound</strong> of $E$ if:

    $$
    \forall x \in E, \qquad  x \le k
    $$

<a id="box-defXX-21"></a>

!!! definizione "Definition 7: of lower bound of a set"

    Let $E$ be a set contained in $\Q$ or in $\R$; a number $k$ belonging to $\Q$ or to $\R$ respectively is called a <strong>lower bound</strong> of $E$ if:

    $$
    \forall x \in E, \qquad k \le  x
    $$

!!! chiave ""

    We observe that a set bounded above (below) has many upper (lower) bounds. Moreover, the upper (lower) bounds do not necessarily belong to the set itself.

<a id="box-oss_semiretta-maggioranti-22"></a>

!!! osservazione "Remark 5"

    If $k$ is an upper bound of $E$, then every number $h \ge k$ is still an upper bound of $E$; if $k$ is a lower bound of $E$, then every number $h \le k$ is still a lower bound of $E$. Hence the set of the upper (lower) bounds of $E$, if it is not empty, is a <strong>half-line</strong>.

??? dimostrazione "Proof"

    Let $k$ be an upper bound of $E$ and let $h \ge k$. For every $x \in E$ we have $x \le k$ by definition of upper bound, and hence, by the transitive property,

    $$
    x \le k \le h \qquad \Longrightarrow \qquad x \le h
    $$

    that is, $h$ is an upper bound of $E$. The set of the upper bounds therefore contains, together with each of its elements $k$, all the numbers greater than $k$: it is thus a half-line unbounded above.

    The proof for the lower bounds is analogous: if $k$ is a lower bound of $E$ and $h \le k$, then for every $x \in E$ we have $h \le k \le x$ and hence $h \le x$. <span class="qed">□</span>

<a id="box-oss_maggiorante-massimo-23"></a>

!!! osservazione "Remark 6"

    An upper bound of $E$ that <strong>belongs</strong> to $E$ is the maximum of $E$; a lower bound of $E$ that belongs to $E$ is the minimum of $E$.

??? dimostrazione "Proof"

    Let $k$ be an upper bound of $E$ with $k \in E$. By definition of upper bound we have $x \le k$ for every $x \in E$: these are exactly the two conditions that define the maximum of $E$ (belonging to $E$ and being greater than or equal to all its elements), and hence $k = \max E$.

    In the same way, if $k$ is a lower bound of $E$ and $k \in E$, then $k \le x$ for every $x \in E$ and $k \in E$, that is $k = \min E$. <span class="qed">□</span>

<a id="box-defXX-24"></a>

!!! definizione "Definition 8: of supremum"

    The <strong>supremum</strong> of $E$ (denoted by $\sup E$) is the minimum of the upper bounds of $E$.

<a id="box-defXX-25"></a>

!!! definizione "Definition 9: of infimum"

    The <strong>infimum</strong> of $E$ (denoted by $\inf E$) is the maximum of the lower bounds of $E$.

!!! chiave ""

    We observe that the supremum (infimum) may not exist (unbounded sets). We also observe that if the set has a maximum (minimum), it coincides with the supremum (infimum).

!!! chiave ""

    For unbounded sets the following <strong>convention</strong> is adopted: if $E$ is not bounded above one writes

    $$
    \sup E = +\infty
    $$

    and if $E$ is not bounded below one writes

    $$
    \inf E = -\infty
    $$

    The symbols $+\infty$ and $-\infty$ <strong>are not numbers</strong>: this notation is only a compact way of saying that $E$ has no upper (lower) bounds.

<a id="box-ex_sup-inf-intervalli-26"></a>

!!! esempio "Example 11: of suprema and infima of intervals"

    <div class="tabella" markdown><table>
    <tr>
    <td>Example</td>
    <td>set <span class="arithmatex">\(E\)</span></td>
    <td><span class="arithmatex">\(\inf E\)</span></td>
    <td><span class="arithmatex">\(\sup E\)</span></td>
    <td>minimum</td>
    <td>maximum</td>
    </tr>
    <tr>
    <td>VIII)</td>
    <td><span class="arithmatex">\([-2,1]\)</span></td>
    <td><span class="arithmatex">\(-2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    <td><span class="arithmatex">\(-2\)</span></td>
    <td><span class="arithmatex">\(1\)</span></td>
    </tr>
    <tr>
    <td>IX)</td>
    <td><span class="arithmatex">\((-\infty,3)\)</span></td>
    <td><span class="arithmatex">\(-\infty\)</span></td>
    <td><span class="arithmatex">\(3\)</span></td>
    <td>does not exist</td>
    <td>does not exist</td>
    </tr>
    <tr>
    <td>X)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{R}:~~ -5 \le 3\,x < 4 \right\}\)</span></td>
    <td><span class="arithmatex">\(-\frac{5}{3}\)</span></td>
    <td><span class="arithmatex">\(\frac{4}{3}\)</span></td>
    <td><span class="arithmatex">\(-\frac{5}{3}\)</span></td>
    <td>does not exist</td>
    </tr>
    </table></div>

    - In examples VIII) and X) the minimum exists and therefore coincides with the infimum; in example VIII) the maximum exists as well and coincides with the supremum.

    - In example IX) the set is not bounded below and therefore, by the convention just introduced, $\inf E = -\infty$. The number $3$ is an upper bound, because $x < 3$ for every $x \in E$; no number $k < 3$ is an upper bound, because the number $y = \frac{k+3}{2}$ satisfies $k < y < 3$ and therefore belongs to $E$. Hence $3$ is the minimum of the upper bounds, that is $\sup E = 3$ (and it is not a maximum, because $3 \notin E$).

    - In example X), with the same argument applied to $E = \big[-\frac{5}{3}, \frac{4}{3}\big)$, we obtain $\sup E = \frac{4}{3} \notin E$.

    - Finally, going back to example III), for $E = \big\{ \frac{1}{n} : n \in \N_{>0} \big\}$ we have $\inf E = 0$ and $\sup E = \max E = 1$. Indeed $0$ is a lower bound, because $\frac{1}{n} > 0$ for every $n \in \N_{>0}$; and no number $k > 0$ is a lower bound, because by the <strong>Archimedean property</strong> there exists $n \in \N_{>0}$ with $n > \frac{1}{k}$, and hence $\frac{1}{n} < k$. Hence $0$ is the maximum of the lower bounds, but it is not the minimum because $0 \notin E$.

<a id="box-texexpbox1-27"></a>

!!! esempio "Example 12: of suprema and infima"

    <div class="tabella" markdown><table>
    <tr>
    <td>Example</td>
    <td>set <span class="arithmatex">\(E\)</span></td>
    <td><span class="arithmatex">\(\inf E\)</span></td>
    <td><span class="arithmatex">\(\sup E\)</span></td>
    <td>minimum</td>
    <td>maximum</td>
    </tr>
    <tr>
    <td>I)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{Q}:~~ x \ge 0, x  < \sqrt{2}   \right\}\)</span></td>
    <td>0</td>
    <td>does not exist in <span class="arithmatex">\(\Q\)</span></td>
    <td>0</td>
    <td>does not exist</td>
    </tr>
    </table></div>

    Here the upper bounds are looked for <strong>inside</strong> $\Q$. We have:

    $$
    \sqrt{2} \notin E
    {\rm ~~~~and~~~} \sqrt{2} \notin \Q
    $$

    hence the maximum does not exist; and the $\sup$ does not exist <strong>in</strong> $\Q$ either, because the rational upper bounds of $E$ are the rational numbers greater than $\sqrt{2}$ and among them there is no smallest one (by truncating $\sqrt{2}$ from above one obtains smaller and smaller rational upper bounds). As the next example shows, in $\R$ the supremum does exist and is equal to $\sqrt{2}$.

    <div class="tabella" markdown><table>
    <tr>
    <td>Example</td>
    <td>set <span class="arithmatex">\(E\)</span></td>
    <td><span class="arithmatex">\(\inf E\)</span></td>
    <td><span class="arithmatex">\(\sup E\)</span></td>
    <td>minimum</td>
    <td>maximum</td>
    </tr>
    <tr>
    <td>II)</td>
    <td><span class="arithmatex">\(\left\{ x \in \mathbb{R}:~~ x \ge 0,  ~x  < \sqrt{2}   \right\}\)</span></td>
    <td>0</td>
    <td><span class="arithmatex">\(\sqrt{2}\)</span></td>
    <td>0</td>
    <td>does not exist</td>
    </tr>
    </table></div>

    We have:

    $$
    \sqrt{2} \notin E
    {\rm ~~~~and~~~} \sqrt{2} \in \R
    $$

    that is, the maximum does not exist, but $\sqrt{2}$ is the minimum of the upper bounds and therefore it is the $\sup$.

## 9. Axiomatic definition of the real numbers

!!! chiave ""

    A totally ordered number set $X$ is said to have the <strong>supremum property</strong> (least upper bound property) if:

    - **$R_4 \rightarrow$** Every non-empty set $E \subset X$ that is bounded above has a supremum in $X$

- It is easy to prove that, if this property holds, then it is also true that every non-empty subset of $X$ that is bounded below has an infimum.

- It is not required that $X$ itself has a supremum (for example, in the case $X = \mathbb{Q}$ or $\mathbb{R}$ this is certainly false!), but that every non-empty subset of $X$ that is bounded above has one.

!!! chiave ""

    Example VI shows that $\mathbb{Q}$ certainly does not have the supremum property. On the other hand, $\mathbb{R}$ has this property. [^2]

- In the <strong>axiomatic definition</strong> of $\mathbb{R}$, this property is part of the very definition of $\mathbb{R}$

<a id="box-defXX-28"></a>

!!! definizione "Definition 10: (axiomatic) of the real numbers"

    We call $\mathbb{R}$ a set that satisfies the properties $R_1$, $R_2$ (together with the distributive property), $R_3$ and $R_4$, that is, an ordered field that has the supremum property

<a id="box-prop_archimede-29"></a>

!!! teorema "Proposition 1: Archimedean property"

    For every real number $x$ there exists a natural number $n$ such that:

    $$
    n > x
    $$

- This is the property that we recalled in the chapter <em>Sets</em> and used above. <strong>It is not an additional axiom</strong>: as the proof shows, it follows from the property $R_4$.

??? dimostrazione "Proof"

    Suppose by contradiction that there exists a real number $x$ such that $n \le x$ for every $n \in \N$. Then the set $\N$ is a non-empty subset of $\R$ bounded above (by $x$), and therefore, by the property $R_4$, it has a supremum in $\R$:

    $$
    s = \sup \N
    $$

    Since $s$ is the <strong>minimum</strong> of the upper bounds of $\N$, the number $s-1$, which is smaller than $s$, is not an upper bound of $\N$: there exists therefore $n \in \N$ such that

    $$
    n > s-1 \qquad \Longrightarrow \qquad n+1 > s
    $$

    But $n+1$ is still a natural number, and this contradicts the fact that $s$ is an upper bound of $\N$. The initial assumption is therefore absurd, and for every $x \in \R$ there exists $n \in \N$ with $n > x$. <span class="qed">□</span>

- Equivalently: for every real number $\varepsilon > 0$ there exists $n \in \N_{>0}$ such that $\frac{1}{n} < \varepsilon$. Indeed it is enough to choose $n > \frac{1}{\varepsilon}$, and then $\frac{1}{n} < \varepsilon$. As a consequence, the only non-negative number that is less than or equal to $\frac{1}{n}$ for every $n \in \N_{>0}$ is zero.

- The supremum property is also called the <strong>Dedekind axiom</strong>, <strong>or axiom of continuity</strong>, or <strong>completeness axiom</strong>, and it can also be stated in the following equivalent form.

!!! chiave ""

    Let $\{A, B\}$ be a partition of $\mathbb{R}$ (i.e., $A$ and $B$ are non-empty disjoint sets whose union is $\mathbb{R}$); the partition is called a <strong>cut</strong> (section) if:

    $$
    \forall a \in A {\rm ~~and~~} \forall b \in B {\rm ~~we~have~~} a < b.
    $$

    Then one proves that:

    - **$R_4' \rightarrow$** For every cut $\{A, B\}$ of $\mathbb{R}$ there exists a unique real number $s$ (called the <strong>separating element</strong>) such that:

        $$
        \forall a \in A {\rm ~~and~~} \forall b \in B , \qquad a \le s \le b \qquad
        $$

    This separating element is $\sup A$ and $\inf B$, hence $\sup A=\inf B$

## 10. Geometric representation of $\mathbb{R}$

!!! chiave ""

    Can the set of real numbers $\mathbb{R}$ be put in one-to-one correspondence with the points of the Euclidean line?

- Let us now return to the problem of the incommensurability of the side and the diagonal of a square. When, with straightedge and compass, having fixed the unit side of the square, we construct its diagonal and transfer it onto the starting line, the arc drawn by the compass "splits the line in two", generating what we have called a cut; the separating element, which exists by axiom $R_4$, geometrically represents the point of intersection, and therefore that number measures the diagonal.

![Figure 7](../img/numbers-05-ordered-fields/fig07.svg){ .fig .ovale loading=lazy style="width:80%" }

!!! chiave ""

    Hence the geometric interpretation of property $R_4$ shows us how the set $\mathbb{R}$ is an adequate representation of our intuitive idea of a line, so adequate that <strong>in mathematics the expression “the real line” is often used to denote</strong> $\mathbb{R}$, identifying the number set with its natural geometric representation.

[^1]: an algebraic structure is a set, called the underlying set (of the structure), equipped with one or more operations
[^2]: However, we will not present a formal proof.
