---
title: "Binary relations"
---

# Binary relations

<div class="info-capitolo" markdown>

**Part 1 · Numbers and logic · Chapter 4** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-1-numbers.pdf)

</div>

## 1. Binary relations

<a id="box-notationA-1"></a>

!!! definizione "Definition 1: of binary relation"

    Given two sets $\red{A}$ and $\blue{B}$, a <strong>binary relation</strong> $\violet{R}$ is a subset of the Cartesian product $\red{A} \times \blue{B}$

!!! chiave ""

    When we say that $\violet{R}$ is a binary relation on a single set $\red{A}$, we mean that $\violet{R}$ is a subset of $\red{A} \times \red{A}$.

- A binary relation will simply be called a relation (however, non-binary relations also exist).

<a id="box-texexpbox1-2"></a>

!!! esempio "Example 1"

    - The relation “less than” (“$<$”) on the natural numbers is the set:

        $$
        R_{<}= \bigg\{ (a,b): a,b \in \mathbb{N} {\rm~~and~~} a < b \bigg\}.
        $$

    - The relation “less than or equal to” (“$\le$”) on the natural numbers is the set:

        $$
        R_{\le}= \bigg\{ (a,b): a,b \in \mathbb{N} {\rm~~and~~} a \le b \bigg\}.
        $$

    - The relation “is a subset of” $R_{\subseteq}$ on the power set of the natural numbers (denoted by $2^{\mathbb{N}}$) is the set:

        $$
        R_{\subseteq} = \bigg\{ (A,B): A,B \in 2^\mathbb{N} {\rm ~~and~~} A \subseteq B \bigg\}.
        $$

!!! chiave ""

    - A relation $\violet{R} \subseteq \red{A} \times \red{A}$ is <strong>reflexive</strong> if:

        $$
        \forall a \in \red{A},\qquad (a,a) \in \violet{R}
        $$

    - A relation $\violet{R} \subseteq \red{A} \times \red{A}$ is <strong>symmetric</strong> if:

        $$
        \forall a,b \in \red{A}, \qquad (a,b) \in \violet{R} ~~\Rightarrow~~ (b,a) \in \violet{R}
        $$

    - A relation $\violet{R} \subseteq \red{A} \times \red{A}$ is <strong>transitive</strong> if:

        $$
        \forall a,b,c \in \red{A}, \qquad (a,b) \in \violet{R} {\rm~~~and~~~} (b,c) \in \violet{R} ~~\Rightarrow~~ (a,c) \in \violet{R}
        $$

<a id="box-texexpbox1-3"></a>

!!! esempio "Example 2"

    - The relation $R_{\le}$ is reflexive, but $R_{<}$ is not.

    - The relations $R_{<}$ and $R_{\le}$ are not symmetric.

    - The relations $R_{<}$ and $R_{\le}$ are transitive, but for example the relation:

        $$
        R^1_{ab} = \bigg\{ (a,b): a,b \in \mathbb{N} {\rm ~~and~~} a =b-1 \bigg\}
        $$

        is not, e.g., $(3,4) \in R^1_{ab}$ and $(4,5) \in R^1_{ab}$ but $(3,5) \notin R^1_{ab}$.

## 2. Partial order relations

!!! chiave ""

    - A relation $\violet{R} \subseteq \red{A} \times \red{A}$ is <strong>antisymmetric</strong> if:

        $$
        \forall a,b \in \red{A}, ~~~~(a,b) \in \violet{R} {\rm~~~and~~~} (b,a) \in \violet{R} ~~\Rightarrow~~  a=b
        $$

<a id="box-texexpbox1-4"></a>

!!! esempio "Example 3"

    - The relation $R_{\le}$ is antisymmetric, since $a \le b$ and $b \le a$ imply $a=b$.

<a id="box-notationA-5"></a>

!!! definizione "Definition 2: of partial order relation"

    A reflexive, antisymmetric and transitive relation is a <strong>partial order relation</strong>.

<a id="box-texexpbox1-6"></a>

!!! esempio "Example 4"

    - The relation $R_{\le}$ is a partial order relation, but the relation $R_{<}$ is not, since it is not reflexive.

<a id="box-propAAA-7"></a>

!!! osservazione "Remark 1"

    The relation $R_{\subseteq}$ is a partial order relation

??? dimostrazione "Proof"

    We must prove that the relation is reflexive, antisymmetric and transitive.

    - For it to be reflexive we must prove that $(S,S) \in R_{\subseteq}$, which is true since $S \subseteq S$.

    - For it to be antisymmetric we must prove that if $S_1  \neq S_2$ then $S_1 \nsubseteq S_2$ or $S_2 \nsubseteq S_1$ or both, the negation of the desired property.<br> Since $S_1  \neq S_2$:

        - **** either there exists some element that is in $S_1$ but not in $S_2$, hence $S_1 \nsubseteq S_2$

        - **** or there exists some element that is in $S_2$ but not in $S_1$, hence $S_2 \nsubseteq S_1$

        - **** or both of the previous options hold

    - For it to be transitive we must prove that $(S_1,S_2) \in R_{\subseteq}$ and $(S_2,S_3) \in R_{\subseteq}$ imply $(S_1,S_3) \in  R_{\subseteq}$. Clearly, since $S_1 \subseteq S_2$ and $S_2 \subseteq S_3$, we have $S_1 \subseteq S_3$.

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-notationA-8"></a>

!!! definizione "Definition 3: of partially ordered set"

    A <strong>partially ordered set</strong> is a pair consisting of a set and a partial order relation defined on it.

<a id="box-texexpbox1-9"></a>

!!! esempio "Example 5"

    - The sets of natural, rational or real numbers with the relation $R_{\le}$ are partially ordered sets.

    - The relation “is a descendant of” defined on a subset of people is a partial order relation (if we consider individuals as descendants of themselves). Consequently, the subset of people considered with the relation “is a descendant of” is a partially ordered set.

!!! chiave ""

    Relations can be represented by a <strong>directed graph</strong>, where the <strong>vertices</strong> are the elements of the set on which the relation $R$ is defined and an <strong>arc</strong> $(a,b)$ means that $(a,b) \in R$. If the graph is acyclic, then the relation is a partial order relation.

<a id="box-texexpbox1-10"></a>

!!! esempio "Example 6"

    The directed acyclic graph associated with the relation $R_{\subseteq}$ on the set $\{1,2,3,4\} \subseteq \mathbb{N}$ is the following (the sets consisting of a single number and the empty set are not shown in the figure):

    ![Figure 1](../img/numbers-04-binary-relations/fig01.svg){ .fig loading=lazy style="width:90%" }

!!! chiave ""

    - In a partially ordered set there may be no single <strong>maximum element</strong>, that is, an element $a$ such that:

        $$
        \forall b \in A, \qquad (b,a) \in R
        $$

        A partially ordered set may therefore contain several maximal elements $a$ such that, for no $b \in A$ with $b \neq a$, we have $(a,b) \in R$.

<a id="box-texexpbox1-11"></a>

!!! esempio "Example 7"

    The directed acyclic graph associated with the partial order relation “is a divisor of” on the set $\{2,3,\dots,15\} \subseteq \mathbb{N}$ is the following:

    ![Figure 2](../img/numbers-04-binary-relations/fig02.svg){ .fig .ovale loading=lazy  }

<a id="box-texexpbox1-12"></a>

!!! esempio "Example 8"

    Given a set of boxes of different sizes, the relation “one box is contained in the other” on the set of boxes may have several maximal boxes, that is, boxes that are not contained in any other box.

## 3. Total order relations

<a id="box-notationA-13"></a>

!!! definizione "Definition 4: of total relation"

    A relation $\violet{R}$ on a set $\red{A}$ is a <strong>total relation</strong> if:

    $$
    \forall a, b \in A, \qquad (a, b) \in R  {\rm ~~~or~~~} (b, a) \in R {\rm ~~(or ~both)}
    $$

<a id="box-texexpbox1-14"></a>

!!! esempio "Example 9"

    - The relation $R_{\le}$ is a total relation.

    - The relation $R_{\subseteq}$ is not a total relation since, taking for example $S_1=\{1, 2\}$ and $S_2=\{2, 3\}$, $(S_1,S_2) \notin R_{\subseteq}$ and $(S_2,S_1) \notin R_{\subseteq}$.

    - The relation “is a descendant of” is not a total relation since there exist pairs of individuals $(a,b)$ for which neither $a$ descends from $b$ nor $b$ descends from $a$.

<a id="box-notationA-15"></a>

!!! definizione "Definition 5: of total order relation"

    A partial order relation that is also a total relation is a <strong>total order relation</strong>.

<a id="box-texexpbox1-16"></a>

!!! esempio "Example 10"

    - The relation $R_{\le}$ is a total order relation.

<a id="box-notationA-17"></a>

!!! definizione "Definition 6: of totally ordered set"

    A <strong>totally ordered set</strong> is a pair consisting of a set and a total order relation defined on it.

<a id="box-texexpbox1-18"></a>

!!! esempio "Example 11"

    - The sets of natural, rational or real numbers with the relation $R_{\le}$ are totally ordered sets.

## 4. Functions

<a id="box-notationA-19"></a>

!!! definizione "Definition 7: of function"

    Given two <em>sets</em> $\red{A}$ and $\blue{B}$, a <em>binary relation</em> $\violet{f}$ on $\red{A}$ and $\blue{B}$ is a <strong>function</strong> if, for each $a \in \red{A}$, there exists one and only one $b \in \blue{B}$ such that $(a, b) \in \violet{f}$.

<a id="box-notationA-20"></a>

!!! definizione "Definition 8: of domain and codomain"

    The set $\red{A}$ is called the <strong>domain</strong> of $\violet{f}$, and the set $\blue{B}$ is called the <strong>codomain</strong> of $\violet{f}$.

- We write:

    $$
    \violet{f}:  \red{A} \rightarrow \blue{B}
    $$

    and if $(a, b) \in \violet{f}$, we write:

    $$
    b = \violet{f}(a)
    $$

    since $b$ is uniquely determined by the choice of $a$.

- Intuitively, the function $\violet{f}$ assigns an element of $\blue{B}$ to each element of $\red{A}$. No element of $\red{A}$ is associated with two different elements of $\blue{B}$. The same element of $\blue{B}$ can however be assigned to different elements of $\red{A}$.

<a id="box-texexpbox1-21"></a>

!!! esempio "Example 12"

    - The binary relation:

        $$
        f = \bigg\{(a,b): a,b \in \mathbb{N} {\rm ~~and~~} b= a \mod 2\bigg\}
        $$

        <u><em>is a function</em></u> $f: \mathbb{N} \rightarrow \{0,1\}$ since for all natural numbers $a$, there is exactly one value $b \in \{0,1\}$ such that $b = a \mod 2$. For example,

        $$
        0 = f(0),~~~~ 1 = f (1),~~~~
        0 = f(2), \dots
        $$

<a id="box-texexpbox1-22"></a>

!!! esempio "Example 13"

    - The binary relation

        $$
        g = \bigg\{(a,b): a,b \in \mathbb{N} {\rm ~~and~~}   a+b {\rm ~is~even} \bigg\}
        $$

        <u><em>is not a function</em></u>, since for example (1, 3) and (1, 5) are both in $g$. In other words, for $a =1$, we do not have one and only one $b$ such that $(a,b) \in g$.

<a id="box-notationA-23"></a>

!!! definizione "Definition 9: of argument and value"

    Given a function $\violet{f}: \red{A} \rightarrow \blue{B}$, if ${\viridian{b}} = \violet{f}(\orange{a})$, we say that $\orange{a} \in \red{A}$ is the argument of $\violet{f}$ and that $\viridian{b} \in \blue{B}$ is the value of $\violet{f}$ associated with $\orange{a}$.

- We can <strong>define a function</strong> by <em>directly defining its value</em> for all the <em>elements</em> of its <em>domain</em>.

<a id="box-texexpbox1-24"></a>

!!! esempio "Example 14"

    For example, we can define $f(n)=  2\:n$ for $n \in \mathbb{N}$, which means:

    $$
    f = \big\{ (n,2\:n): n \in \mathbb{N} \big\} {~~and~~} f: \mathbb{N} \rightarrow \mathbb{N}
    $$
