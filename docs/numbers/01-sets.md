---
title: "Sets"
---

# Sets

<div class="info-capitolo" markdown>

**Part 1 · Numbers and logic · Chapter 1** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-1-numbers.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-numbers-01-sets.pdf)

</div>

## 1. Informal introduction to set theory

- Set theory is based on the following three key concepts:

    1. <strong>Sets</strong>

        The notion of set is generally taken as <strong>primitive</strong> (that is, not reducible to more elementary concepts). The words <em>collection</em>, <em>class</em>, <em>aggregate</em>, <em>family</em> are used as synonyms of set.

        <a id="box-texexpbox1-1"></a>

        !!! esempio "Example 1: sets"

            For example, we have the set of points of a plane, the set of students of a university, or the set of stars of a galaxy.

    2. <strong>Elements</strong>

        A set is determined by its <em>elements</em>, in the sense that a set is defined when we have a <strong>criterion</strong> to establish whether a given element is or is not an element of this set. 

        There are sets with a <em>finite number of elements</em> (for example the set of students of a university) and sets with an <em>infinite number of elements</em> (for example the set of points of the plane).

        !!! chiave ""

            Sets are usually denoted by capital letters. The elements of a set are usually denoted by lowercase letters.

    3. <strong>Membership</strong>

        The concept of <em>membership</em> links elements to sets. When an object is an element of a set, we say that the element <em>belongs</em> to the set. To indicate that an element $x$ belongs to a set $A$ we write:

        $$
        x \in A
        $$

### 1.1 Informal definition of sets

1. A first way to define sets is <strong>definition by listing</strong> (roster notation)

    !!! chiave ""

        A set can be defined <strong>by listing</strong>, that is, by listing the elements that belong to it between curly brackets. This technique assumes that the set has a finite number of elements.

    <a id="box-texexpbox1-2"></a>

    !!! esempio "Example 2: definition by listing"

        The notation:

        $$
        A = \{a,b,c\}
        $$

        means that the set $A$ has as elements the three letters $a$, $b$ and $c$. For example, $a$ belongs to $A$, that is, $a \in A$.

2. A second way to define sets is <strong>definition by a property</strong>:

    !!! chiave ""

        A set can be defined <strong>by a property</strong> as follows:

        $$
        A = \big\{~ x \in U:  p(x) {\rm~~is~true} ~\big\}
        $$

        where $p(x)$ is the property that the element $x$ of the set $U$ must have in order to belong to the set $A$. This technique can be used to define sets with a finite or even an infinite number of elements.

    <a id="box-texexpbox1-3"></a>

    !!! esempio "Example 3: definition by a property"

        Consider for example the set of letters of the Latin alphabet:

        $$
        U =\{a,~ b,~ c,~ d,~ e,~ f,~ g,~ h,~ i,~ j,~ k,~ l,~ m,~ n,~ o,~ p,~ q,~ r,~ s,~ t,~ u,~ v,~ w,~ x,~ y,~ z
        \}
        $$

        Using for example the property $p(x)$ defined as “$x$ is a vowel” we can define the following set of vowels:

        $$
        A= \underbrace{\{x \in U: x {\rm ~~~is~a~vowel}\}}_{ \{a,~e,~i,~o,~u\} }
        $$

    Note that to define a set $A$ by a property we need a set $U$ to which all the elements of the set $A$ we want to define belong. The set $U$ plays the role of the <strong>universal set</strong>.

    It is important that the property $p(x)$ we use makes sense for every $x$ of the set $U$ (universal set), and therefore is true or false (without ambiguity of meaning) for every particular $x \in U$; the set $A$ will then consist of exactly those $x$ belonging to $U$ for which the property $p(x)$ is true.

!!! chiave ""

    One must be careful when defining sets, since contradictions may arise. There is a formal definition of the concept of set, developed to avoid contradictions, but it is beyond the scope of this course.

- For example, the set of all sets that do not contain themselves is not a set in the formal definition of sets. Admitting this set would generate the contradiction: “the set of all sets that do not belong to themselves belongs to itself if and only if it does not belong to itself” (<strong>Russell's paradox</strong> – section [↗](#sec:Russell)).

## 2. Number sets

<a id="box-defXX-4"></a>

!!! definizione "Definition 1: numeral system"

    A <strong>positional numeral system</strong> is a way of encoding numbers using a <strong>sequence of digits</strong>, where each digit contributes differently to the number depending on its position. The number of distinct digits is the <strong>base</strong> of the system.

!!! chiave ""

    The <strong>decimal expansion</strong> of a number is a numerical representation in base 10; it expresses a number as a sum of powers of 10, and it can be finite or infinite depending on the type of number.

- Informal definition of the main number sets:

    1. We denote by $\N$ the set of <strong>natural numbers</strong>, that is, the set of numbers that can be written as <strong>decimal expansions without decimal point and without sign</strong>. We will use the informal notation:

        $$
        \N = \{0,~ 1,~ 2,~ 3,~ 4,~ \dots\}
        $$

    2. We denote by $\Z$ the set of <strong>integers</strong>, that is, the set of numbers that can be written as <strong>decimal expansions without decimal point and with a sign</strong>. We will use the informal notation:

        $$
        \Z = \{0,~ \pm 1,~ \pm 2,~ \pm 3,~ \pm 4,~ \dots \}
        $$

    3. We denote by $\Q$ the set of <strong>rational numbers</strong>, that is, the set of numbers that can be written as <strong>finite or infinite periodic decimal expansions</strong>. In other words, it is the set of numbers that can be written as a fraction $\frac{p}{q}$ where $p$ is an integer and $q$ is a natural number different from zero.

        <a id="box-texexpbox1-5"></a>

        !!! esempio "Example 4: rational numbers"

            - For example, with $p=2$ and $q=5$ we have the fraction $\frac{2}{5}$, whose decimal expansion is $0.4$.

            - For example, with $p=4$ and $q=10$ we have the fraction $\frac{4}{10}$, whose decimal expansion is again $0.4$. Note that a rational number can be written with more than one fraction.

            - For example, with $p=13$ and $q=30$ we have the fraction $\frac{13}{30}$, whose decimal expansion is $0.4\bar{3}=0.43333\dots$.

        However, we can represent every rational number different from $0$ by a single fraction $\frac{p}{q}$ by choosing $p \in \Z$ and $q \in \N$ coprime (that is, relatively prime: $p$ and $q$ are not both divisible by the same integer greater than 1).

        <a id="box-obserXX-6"></a>

        !!! osservazione "Remark 1"

            $$
            0,\overline{9}=1
            $$

        ??? dimostrazione "Proof"

            There are different proofs of this remark, based on different mathematical techniques.

            1. A simple proof follows directly from the definition of $1$ divided by $3$; indeed, we have:

                \begin{align*}
                \frac{1}{3} &= 0,\overline{3}\\
                \frac{1}{3} \cdot 3 &= 0,\overline{3} \cdot 3\\
                 1 &= 0,\overline{9}
                \end{align*}

            2. Using algebraic arguments we can write:

                \begin{align*}
                x &= 0.999\dots\\
                10\:x &= 9.999\dots & {\rm multiplying~by~} 10 \\
                10\:x &= 9 + 0.999\dots & {\rm separating~the~integer~part~from~the~fractional~part} \\
                10\:x &= 9 + x & {\rm by~definition~of~} x\\
                9\:x &= 9  & {\rm subtracting~} x\\
                x &= 1  & {\rm dividing~by~} 9
                \end{align*}

            3. A proof by contradiction is the following:

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

    4. We denote by $\R$ the set of <strong>real numbers</strong>, that is, the set of numbers identified with finite or infinite decimal expansions, periodic or non-periodic.

        <a id="box-texexpbox1-7"></a>

        !!! esempio "Example 5: real numbers"

            - Consider for example the number

                $$
                0,10110111011110 \dots
                $$

                obtained by putting after the decimal point one digit equal to $1$, then $0$, then two digits equal to $1$, then $0$, then three digits equal to $1$ … and so on. The string of nonzero digits after the decimal point is neither finite nor periodic: therefore this number is real but not rational.

            - Other examples of real but not rational numbers are $\sqrt{2}$ and $\sqrt{3}$, or $\pi$ and Euler's number $e$ (Napier's constant), which have infinite non-periodic decimal expansions and are therefore real but not rational numbers.

- There are formal definitions of the sets of natural, integer and rational numbers that are beyond the scope of this course. Later we will give a formal definition of the real numbers.

## 3. Relations between sets

1. <strong>Equality</strong><br> Two sets $A$ and $B$ are equal when they have the same elements. We write

    $$
    A = B
    $$

    and this means that every element that belongs to $A$ also belongs to $B$ and every element that belongs to $B$ also belongs to $A$.

2. <strong>Inclusion</strong><br> It may happen that only one of the two requirements expressed by the equality relation holds. For example, if we only know that every element of $A$ is also an element of $B$, we can say that $A$ is contained in $B$. We write:

    $$
    A \subseteq B {\rm ~~~or~~} A \subset B
    $$

    and we read “$A$ is contained in $B$” or “$A$ is a <strong>subset</strong> of $B$”. If we state that $A \subseteq B$, we do not exclude that $A = B$.

    !!! chiave ""

        Saying that $A = B$ is equivalent to saying that $A \subseteq B$ and $B \subseteq A$.

    !!! chiave ""

        Be careful not to confuse “belongs to” and “is contained in” (in symbols, $\in$ and $\subseteq$). In a sense, they are two ways of indicating that “something is inside something else”, but they have a fundamental logical difference:

        - a set is contained in another set;

        - an element belongs to a set.

    <a id="box-texexpbox1-8"></a>

    !!! esempio "Example 6: “belongs to” vs “is contained in”"

        For example:

        $$
        3 \in \{1,3,4\};
        $$

        $$
        \{3\} \subseteq \{1, 3, 4\};
        $$

        $$
        \{1,4\} \subseteq \{1,3,4\}.
        $$

        In particular, do not confuse $3$ (which is a number) with $\{3\}$, which is the set that contains the number 3 as its only element.

    Sometimes we consider sets whose elements are other sets. In this case too, the symbols $\in$ and $\subseteq$ are not interchangeable, but must be used correctly.

    <a id="box-texexpbox1-9"></a>

    !!! esempio "Example 7: “belongs to” vs “is contained in”"

        For example, if we define the set

        $$
        A = \bigg\{ ~\{1\},~ \{2\},~ \{1, 2\} ~\bigg\},
        $$

        then it is correct to state that $\{2\} \in A$, because $\{2\}$ is a set that plays the role of an element of $A$, whereas it would be incorrect to say that $\{2\} \subseteq A$, because this would mean that $2 \in A$, while $A$ has $\{2\}$ as an element but not $2$. Instead, the subset of $A$ containing only the element $\{2\}$ is denoted by $\big\{\{2\}\big\}$ and we have $\big\{\{2\}\big\} \subset A$.

### 3.1 Empty set, cardinality and power set

<a id="box-defXX-10"></a>

!!! definizione "Definition 2: of empty set"

    The <strong>empty set</strong> is the set that contains no elements. It is denoted by $\varnothing.$

<a id="box-obserXX-11"></a>

!!! osservazione "Remark 2"

    Given a set $A$, we have:

    $$
    \varnothing \subseteq A
    $$

??? dimostrazione "Proof"

    To prove it, we should show that every element that belongs to $\varnothing$ also belongs to $A$; but no element belongs to $\varnothing$, so the thesis holds. <span class="qed">□</span>

<a id="box-defXX-12"></a>

!!! definizione "Definition 3: of cardinality of a set"

    The number of elements of a set $A$ is the <strong>cardinality</strong> of the set. It is denoted by $|A|$.

<a id="box-defXX-13"></a>

!!! definizione "Definition 4: of power set"

    Given a set $A$, the set whose elements are all the subsets of $A$ is called the <strong>power set</strong> of $A$ and is denoted by the symbol $\mathscr{P}(A).$

- Every set $A$ has two trivial subsets, namely $A$ itself and the empty set $\varnothing$ (they could coincide, if $A$ is empty).

<a id="box-texexpbox1-14"></a>

!!! esempio "Example 8: power set"

    For example, given

    $$
    A= \{1, 2, 3\} ,
    $$

    then

    $$
    \mathscr{P}(A) = \bigg\{~\varnothing,~ \{1\},~ \{2\},~ \{3\},~ \{1, 2\},~ \{2, 3\},~ \{1 , 3\},~ \{1,2,3\} ~\bigg\}
    $$

<a id="box-propAAA-15"></a>

!!! osservazione "Remark 3"

    Given a set $A$ with $n$ elements, the power set $\mathscr{P}(A)$ has $2^n$ elements:

    $$
    |\mathscr{P}(A)|=2^n
    $$

??? dimostrazione "Proof"

    For each of the elements of $A$, the subsets of $A$ may or may not contain that element. Hence we must make a choice between two options $n$ times. The total number of possible subsets is therefore $2^{n}$. <span class="qed">□</span>

<a id="box-texexpbox1-16"></a>

!!! esempio "Example 9: construction of the power set with a binary tree"

    Given the set $A=\{1,2,3\}$ with $n=3$ elements, the cardinality of its power set is $2^3=8$. The construction of the power set $\mathscr{P}(A)$ can be visualized through the following <strong>binary tree</strong> (an undirected, connected and acyclic graph) in which at each level we decide whether or not to include the object in the subset:

    ![Figure 1](../img/numbers-01-sets/fig01.svg){ .fig .ovale loading=lazy style="width:100%" }

## 4. Operations on sets

<a id="box-defXX-17"></a>

!!! definizione "Definition 5: of intersection of sets"

    The <em>intersection</em> of two sets $A,B \subseteq U$ is the set defined by:

    $$
    A \cap B = \big\{x \in U: x \in A {\rm ~~and~~} x \in B \big\}
    $$

It is the set of elements that belong both to the first and to the second set.

<a id="box-defXX-18"></a>

!!! definizione "Definition 6: of union of sets"

    The <strong>union</strong> of two sets $A,B \subseteq U$ is the set defined by:

    $$
    A \cup B = \big\{x \in U: x \in A {\rm ~~or~~} x \in B \big\}
    $$

It is the set of elements that belong to the first or to the second set, where “or” is meant in the <u>non-exclusive</u> sense (the set of elements that belong to $A$ or to $B$ or to both).

<a id="box-defXX-19"></a>

!!! definizione "Definition 7: of difference of sets"

    The <strong>difference</strong> of two sets $A,B \subseteq U$ is the set defined by:

    $$
    A \setminus B = \big\{x \in A: x \notin B \big\}
    $$

It is the set of elements that belong to the first but not to the second set. The symbol “$\setminus$” can also be written “-” by analogy with arithmetic subtraction.

### 4.1 Complementary sets and disjoint sets

<a id="box-texexpbox1-20"></a>

!!! esempio "Example 10: universal sets"

    For example, in questions of arithmetic we could have $U= \N$, while in questions of analysis we could have $U =\R$.

<a id="box-defXX-21"></a>

!!! definizione "Definition 8: of set complementation and complementary sets"

    The <strong>complementation</strong> of a set $A \subseteq U$ is the set defined by:

    $$
    \overline{A} = \big\{x \in U: x \notin A \big\}
    $$

    This set is called the <strong>complement</strong> (complementary set) of $A$ with respect to $U$

- For every set $\red{A} \subseteq \violet{U}$, where $\violet{U}$ is the universal set, we have the following relations:

!!! chiave ""

    \begin{align*}
    \overline{ \overline{ \red{A}}} &= \red{A}\\
      \red{A} \cap \overline{\red{A}} &= \varnothing\\
      \red{A} \cup \overline{\red{A}} &= \violet{U}
    \end{align*}

!!! chiave ""

    \begin{align*}
    \red{A} \cap \varnothing &= \varnothing \\
      \red{A} \cap \violet{U} &= \red{A} \\
      \red{A} \cup \varnothing &= \red{A} \\
      \red{A} \cup \violet{U} &= \violet{U}
    \end{align*}

!!! chiave ""

    \begin{align*}
    \violet{\overline{U}} &= \varnothing \\
      \overline{\varnothing} &= U
    \end{align*}

<a id="box-notationA-22"></a>

!!! definizione "Definition 9: of disjoint sets"

    Two sets $\red{A}$ and $\blue{B}$ are <strong>disjoint</strong> if they have no elements in common:

    $$
    \red{A} \cap \blue{B} = \varnothing
    $$

### 4.2 Venn diagrams

Venn diagrams are graphical representations in which sets are represented as regions of the plane

- Venn diagrams of intersection, union and difference:

    <div class="figure-affiancate" markdown>

    ![Figure 2](../img/numbers-01-sets/fig02.svg){ .fig .ovale loading=lazy style="width:32%" }

    ![Figure 3](../img/numbers-01-sets/fig03.svg){ .fig .ovale loading=lazy style="width:32%" }

    ![Figure 4](../img/numbers-01-sets/fig04.svg){ .fig .ovale loading=lazy style="width:32%" }

    </div>

- Venn diagram of the complement of a set:

    ![Figure 5](../img/numbers-01-sets/fig05.svg){ .fig .ovale loading=lazy style="width:25%" }

### 4.3 Cartesian product

There is another operation on sets, which can be performed on any two sets (i.e., two sets not necessarily contained in the same universal set):

<a id="box-defXX-23"></a>

!!! definizione "Definition 10: of Cartesian product"

    Given two (not necessarily distinct) sets $A$ and $B$, the set consisting of all <em>ordered pairs</em> $(a, b)$, with $a \in A$ and $b \in B$, is called the <strong>Cartesian product</strong> of $A$ and $B$ and is denoted by the symbol $A \times B$.

When ${A}$ and ${B}$ are two finite sets, the cardinality of their Cartesian product is:

$$
|{A} \times {B}| = |{A}| \cdot |{B}|.
$$

<a id="box-texexpbox1-24"></a>

!!! esempio "Example 11: Cartesian product"

    $$
    \{a,b\} \times \{a,b,c\} = \big\{ (a,a),(a,b),(a,c),(b,a),(b,b),(b,c) \big\}
    $$

    $$
    |\{a,b\}|=2,~~ |\{a,b,c\}|=3,~~ |\{a,b\} \times \{a,b,c\}| = 2 \cdot 3 = 6
    $$

- A typical use of the Cartesian product is $\R \times \R$, which is abbreviated by the symbol $\R^2$ and denotes the set of ordered pairs of real numbers.

- Similarly, $\R^n$ (abbreviation of the Cartesian product of $n$ sets equal to $\R$) is the set of <em>ordered $n$-tuples of real numbers</em>

    $$
    \R^n =\big\{ ~(x_1,~x_2,~ \dots,~ x_n)~: ~~x_i \in \R, ~~i \in \{1,2,\dots, n\} ~\big\}
    $$

### 4.4 Properties of operations on sets

<a id="box-notationA-25"></a>

!!! osservazione "Remark 4: properties of intersection"

    Given three sets $\red{A}, \blue{B}$ and $\orange{C}$, intersection has the following properties:

    - <strong>Commutative</strong>:

        $$
        \red{A} \cap \blue{B} = \blue{B} \cap \red{A}
        $$

    - <strong>Associative</strong>:

        $$
        \red{A} \cap (\blue{B} \cap \orange{C}) = (\red{A} \cap \blue{B}) \cap \orange{C}
        $$

    - <strong>Idempotence</strong>:

        $$
        \red{A} \cap \red{A} = \red{A}
        $$

??? dimostrazione "Proof"

    The graphical proof of the associative property of intersection is the following:

    <div class="figure-affiancate" markdown>

    ![Figure 6](../img/numbers-01-sets/fig06.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 7](../img/numbers-01-sets/fig07.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 8](../img/numbers-01-sets/fig08.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 9](../img/numbers-01-sets/fig09.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 10](../img/numbers-01-sets/fig10.svg){ .fig .ovale loading=lazy style="width:20%" }

    </div> <span class="qed">□</span>

<a id="box-notationA-26"></a>

!!! osservazione "Remark 5: properties of union"

    Given three sets $\red{A}, \blue{B}$ and $\orange{C}$, union has the following properties:

    - <strong>Commutative</strong>:

        $$
        \red{A} \cup \blue{B} = \blue{B} \cup \red{A}
        $$

    - <strong>Associative</strong>:

        $$
        \red{A} \cup (\blue{B} \cup \orange{C}) = (\red{A} \cup \blue{B}) \cup \orange{C}
        $$

    - <strong>Idempotence</strong>:

        $$
        \red{A} \cup \red{A} = \red{A}
        $$

??? dimostrazione "Proof"

    The graphical proof of the associative property of union is the following:

    <div class="figure-affiancate" markdown>

    ![Figure 11](../img/numbers-01-sets/fig11.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 12](../img/numbers-01-sets/fig12.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 13](../img/numbers-01-sets/fig13.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 14](../img/numbers-01-sets/fig14.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 15](../img/numbers-01-sets/fig15.svg){ .fig .ovale loading=lazy style="width:20%" }

    </div> <span class="qed">□</span>

<a id="box-notationA-27"></a>

!!! osservazione "Remark 6: distributive properties (linking union and intersection)"

    Given three sets $\red{A}, \blue{B}$ and $\orange{C}$ we have:

    $$
    \red{A} \cap (\blue{B} \cup \orange{C}) = (\red{A} \cap \blue{B}) \cup (\red{A} \cap \orange{C})
    $$

    $$
    \red{A} \cup (\blue{B} \cap \orange{C}) = (\red{A} \cup \blue{B}) \cap (\red{A} \cup \orange{C}).
    $$

The distributive properties link union and intersection to each other.

??? dimostrazione "Proof"

    The graphical proof of the first property is the following:

    <div class="figure-affiancate" markdown>

    ![Figure 16](../img/numbers-01-sets/fig16.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 17](../img/numbers-01-sets/fig17.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 18](../img/numbers-01-sets/fig18.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 19](../img/numbers-01-sets/fig19.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 20](../img/numbers-01-sets/fig20.svg){ .fig .ovale loading=lazy style="width:20%" }

    </div>

    The graphical proof of the second property is the following:

    <div class="figure-affiancate" markdown>

    ![Figure 21](../img/numbers-01-sets/fig21.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 22](../img/numbers-01-sets/fig22.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 23](../img/numbers-01-sets/fig23.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 24](../img/numbers-01-sets/fig24.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 25](../img/numbers-01-sets/fig25.svg){ .fig .ovale loading=lazy style="width:20%" }

    </div> <span class="qed">□</span>

<a id="box-propXX-28"></a>

!!! teorema "Proposition 1: De Morgan's laws (first version)"

    Given three sets $\red{A}, \blue{B}$ and $\orange{C}$ we have:

    $$
    \red{A} \setminus (\blue{B} \cap \orange{C}) = (\red{A} \setminus \blue{B}) \cup (\red{A} \setminus \orange{C})
    $$

    $$
    \red{A} \setminus (\blue{B} \cup \orange{C}) = (\red{A} \setminus \blue{B}) \cap (\red{A} \setminus \orange{C})
    $$

??? dimostrazione "Proof"

    The graphical proof of the first property is the following:

    <div class="figure-affiancate" markdown>

    ![Figure 26](../img/numbers-01-sets/fig26.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 27](../img/numbers-01-sets/fig27.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 28](../img/numbers-01-sets/fig28.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 29](../img/numbers-01-sets/fig29.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 30](../img/numbers-01-sets/fig30.svg){ .fig .ovale loading=lazy style="width:20%" }

    </div>

    The graphical proof of the second property is the following:

    <div class="figure-affiancate" markdown>

    ![Figure 31](../img/numbers-01-sets/fig31.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 32](../img/numbers-01-sets/fig32.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 33](../img/numbers-01-sets/fig33.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 34](../img/numbers-01-sets/fig34.svg){ .fig .ovale loading=lazy style="width:20%" }

    ![Figure 35](../img/numbers-01-sets/fig35.svg){ .fig .ovale loading=lazy style="width:20%" }

    </div> <span class="qed">□</span>

<a id="box-propXX-29"></a>

!!! teorema "Proposition 2: De Morgan's laws (second version)"

    Given the sets $\blue{B}, \orange{C} \subseteq \violet{U}$, we have

    $$
    \overline{\blue{B} \cap \orange{C}} = \overline{\blue{B}} \cup \overline{\orange{C}}
    $$

    $$
    \overline{\blue{B} \cup \orange{C}} = \overline{\blue{B}} \cap \overline{\orange{C}}
    $$

??? dimostrazione "Proof"

    These laws can be derived by setting $A$ equal to $U$ in the previous De Morgan's laws, as follows:

    $$
    \underbrace{\violet{U} \setminus (\blue{B} \cap \orange{C})}_{=\overline{\blue{B} \cap \orange{C}} } = (\underbrace{\violet{U} \setminus \blue{B}}_{=  \overline{\blue{B}}}) \cup (\underbrace {\violet{U} \setminus \orange{C}}_{= \overline{\orange{C}}})
    $$

    $$
    \underbrace{\violet{U} \setminus (\blue{B} \cup \orange{C})}_{=\overline{\blue{B} \cup \orange{C}} } = (\underbrace{\violet{U} \setminus \blue{B}}_{=  \overline{\blue{B}}}) \cap (\underbrace {\violet{U} \setminus \orange{C}}_{= \overline{\orange{C}}})
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

??? dimostrazione "Proof"

    The graphical proof of the first property is the following:

    <div class="figure-affiancate" markdown>

    ![Figure 36](../img/numbers-01-sets/fig36.svg){ .fig .ovale loading=lazy style="width:30%" }

    ![Figure 37](../img/numbers-01-sets/fig37.svg){ .fig .ovale loading=lazy style="width:30%" }

    ![Figure 38](../img/numbers-01-sets/fig38.svg){ .fig .ovale loading=lazy style="width:30%" }

    </div>

    The graphical proof of the second property is the following:

    <div class="figure-affiancate" markdown>

    ![Figure 39](../img/numbers-01-sets/fig39.svg){ .fig .ovale loading=lazy style="width:30%" }

    ![Figure 40](../img/numbers-01-sets/fig40.svg){ .fig .ovale loading=lazy style="width:30%" }

    ![Figure 41](../img/numbers-01-sets/fig41.svg){ .fig .ovale loading=lazy style="width:30%" }

    </div> <span class="qed">□</span>

- The set of elements that belong to a set $B$ or to a set $C$ but not to both (meaning “or” in the <u>exclusive</u> sense) is obtained by setting $U = B \cup C$ and taking the complement of the intersection:

![Figure 42](../img/numbers-01-sets/fig42.svg){ .fig .ovale loading=lazy style="width:40%" }

!!! chiave ""

    Relation between inclusion and the operations of union and intersection:

    $$
    A \subseteq B {\rm ~if~and~only~if~} A \cap B = A {\rm ~and~} A \cup B = B.
    $$

### 4.5 Properties of the cardinality of sets

!!! chiave ""

    - For any two finite sets $\red{A}$ and $\blue{B}$, we have

        $$
        |\red{A} \cup \blue{B}| = |\red{A}| + |\blue{B}| - |\red{A} \cap \blue{B}|
        $$

        from which we conclude that

        $$
        |\red{A} \cup \blue{B}| \le |\red{A}| + |\blue{B}|
        $$

    - If $\red{A}$ and $\blue{B}$ are disjoint then

        $$
        |\red{A} \cap \blue{B}| = 0  {\rm~~and~hence~~} |\red{A} \cup \blue{B}| = |\red{A}| +  |\blue{B}|
        $$

    - If $\red{A} \subsetneqq \blue{B}$, then $|\red{A}| < |\blue{B}|$

## 5. Further topics

### 5.1 Russell's paradox

<a id="sec:Russell"></a>

!!! chiave ""

    “can a set be an element of itself or not?”

- For example, the set of all books in a library is not an element of itself (a set of books is not a book). On the other hand, the set of all sets with more than 20 elements is an element of itself.

- Following this reasoning, two categories of sets can be defined:

    1. sets that are not elements of themselves

    2. sets that are elements of themselves

!!! chiave ""

    If we consider the set of all sets that are not elements of themselves, is it an element of itself or not?

Let us call this set $S$; two hypotheses can be made:

- **1** If we suppose $S \in S$, then $S$ contains itself as an element and therefore does not belong to $S$ (since by definition a set belongs to $S$ only if it does not contain itself as an element). Hence $S \notin S$, and we have a contradiction. We conclude that the hypothesis must be wrong.

- **2** If we suppose $S \notin S$, then $S$ does not contain itself as an element and therefore belongs to $S$ (since by definition a set belongs to $S$ if it does not contain itself as an element). Hence $S \in S$ and we have another contradiction. We conclude that this hypothesis must be wrong too!

!!! chiave ""

    <strong>Russell's paradox:</strong> The set of all sets that do not belong to themselves belongs to itself if and only if it does not belong to itself.

- The formal definition of the concept of set is based on the <strong>Zermelo-Fraenkel system of axioms</strong>, abbreviated as <strong>ZF</strong>. This system of axioms includes the standard axioms of axiomatic set theory on which, together with the <em>axiom of choice</em>, all of ordinary mathematics is based.

- The <strong>axiom of regularity</strong> states that “Every non-empty set $A$ contains an element disjoint from $A$”.

- The <strong>axiom of pairing</strong> states that “Given two objects, there exists a set whose elements are the two objects”

    <a id="box-obserXX-30"></a>

    !!! osservazione "Remark 7"

        No set is an element of itself

    ??? dimostrazione "Proof"

        Given a set $A$, we apply the axiom of regularity to $\{A\}$, which is a set by the axiom of pairing. We thus obtain the set $\{A,A\}$, which we abbreviate to $\{A\}$ since sets cannot contain repeated objects (it is a special case of a pair). By the axiom of regularity there must exist an element of $\{A\}$ disjoint from $\{A\}$. Since the only element of $\{A\}$ is $A$, $A$ is disjoint from $\{A\}$. Hence, since $A\cap \{A\}=\varnothing$, we cannot have $A \in A$ (by the definition of disjoint). <span class="qed">□</span>

- The other ZF axioms are not part of the basic course in Mathematical Analysis.

- A further proof of

    $$
    0,\overline{9}=1
    $$

    starts from the assumption that two numbers are equal if and only if their difference is equal to zero, and it is based on computing the value of $1 - 0,\overline{9}$.

- This proof is based on the fact that 0 is the only non-negative number less than all the reciprocals of the positive integers, or equivalently that there is no number greater than every integer. This is the <strong>Archimedean property</strong>, which holds for the rational and the real numbers.

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

