---
title: "Basics of logic and proof techniques"
---

# Basics of logic and proof techniques

<div class="info-capitolo" markdown>

**Part 1 · Numbers and logic · Chapter 2** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-1-numbers.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-numbers-02-logic.pdf)

</div>

## 1. Logical symbols

!!! chiave ""

    1. the symbol “$\forall$” is called the <em>universal quantifier</em> and is read “for every”, “for all”, “for each”

    2. the symbol “$\exists$” is called the <em>existential quantifier</em> and is read “there exists”, “there exist”

    3. the symbol “$\Rightarrow$” is called <em>logical implication</em> and is read “implies” or “if … then”

!!! chiave ""

    1. the symbol “$:$” is read “such that”

    2. the symbol “$\in$” is read “belongs to”

    3. the symbol “$\notin$” is read “does not belong to”

!!! chiave ""

    1. the symbol “$\vee$” is called <em>logical disjunction</em> and is read “or”

    2. the symbol “$\wedge$” is called <em>logical conjunction</em> and is read “and”

    3. the symbol “$\neg$” is called <em>logical negation</em> and is read “not”.

## 2. Universal implications and proofs

<strong>Predicates</strong> (or properties) and <strong>propositions</strong> (or statements)

- Consider the following assertion:

    \begin{equation}
    \label{TT} ``{\rm the~natural~number~} n {\rm ~is~odd}''
    \end{equation}

    and let us ask whether it is true. Obviously the answer is: “it depends on $n$”. Indeed, in \(\eqref{TT}\) the symbol $n$ represents a variable that can take different values and make the assertion <strong>true</strong> or <strong>false</strong>.

    !!! chiave ""

        A sentence of this kind is called a <strong>predicate</strong> (or <em>property</em>): its truth or falsity depends on the values of the <strong>variable(s)</strong> appearing in it.

- Now consider the following assertion:

    \begin{equation}
    \label{TTT} ``{\rm for~every~natural~number~} n, {\rm ~if~} n {\rm ~is~odd~then~} n^2 {\rm~ is~odd}''
    \end{equation}

    which we can write more formally as follows:

    \begin{equation}
    \label{TTTT} \forall n \in \N ~~(n {\rm ~~odd~~} \Rightarrow n^2 {\rm ~~odd~~})
    \end{equation}

    !!! chiave ""

        In this case we say that the variable $n$ is not free, but bound by the <em>quantifier</em> $\forall$. As a consequence, \(\eqref{TTTT}\) is true or false “once and for all” and is called a <strong>proposition</strong> (or <em>statement</em>).

    In particular, the components of \(\eqref{TTTT}\) are the set $\N$, two predicates defined on $\N$ given by

    $$
    p(n) : ``n {\rm~odd}''
    {\rm~~and~~}
    q(n) : ``n^2 {\rm~odd}''
    $$

    and the implication

    $$
    p(n) \Rightarrow q(n).
    $$

<a id="box-notationA-1"></a>

!!! definizione "Definition 1: of universal implication"

    In general, a statement involving a <strong>set</strong> $A$, <strong>two predicates</strong> $p(x)$ and $q(x)$ whose argument $x$ ranges over $A$, and the <strong>logical structure</strong>:

    \begin{equation}
    \label{JJ}  \forall x \in A ~~\big(~p(x) \Rightarrow q(x)~\big)
    \end{equation}

    is called a <strong>universal implication</strong>.

!!! chiave ""

    Most <strong>theorems</strong> consist of <strong>universal implications</strong>, in which the predicate $p(x)$ plays the role of the <strong>hypothesis</strong> and the predicate $q(x)$ plays the role of the <strong>thesis</strong> (conclusion).

- In particular, \(\eqref{TTTT}\) is a proposition (or a statement):

    <a id="box-theoXXX-2"></a>

    !!! teorema "Proposition 1"

        \begin{equation}
        \label{CC}
        \forall n \in \N ~~(~n {\rm ~~odd~~} \Rightarrow n^2 {\rm ~~odd}~)
        \end{equation}

    In this case one is easily convinced that the proposition is true, but how can we prove it rigorously?

- For example, is it enough to observe that $3$ is odd and $3^2=9$ is odd to claim that the proposition is true? Certainly not, since the proposition requires the universal implication to hold for every natural number. However, there are infinitely many odd numbers: how can we prove a universal implication for infinitely many numbers?

- The key procedure is this: we consider a generic $n$ satisfying the hypothesis (being odd) and we prove that $n$ satisfies the thesis (its square is odd).

    Let us see how to proceed to prove the previous proposition:

    ??? dimostrazione "Proof"

        Let $n$ be odd; we prove that then $n^2$ is odd. 

        Any odd number can be written in the form $2\:k + 1$, for a suitable $k \in \N$. We also observe that $2\:k$ is an even number for any $k \in \N$.

        So let $n = 2k + 1$ be an odd number ($k \in \N$); we therefore need to write $n^2$ as an even integer plus one. We have:

        $$
        n^2 = (2\:k + 1)^2 = 4\:k^2 + 4\:k +1 = 2\:(2\:k^2 + 2\:k) +1 .
        $$

        Since $2\:(2\:k^2 + 2\:k)$ is an even integer, $n^2$ is odd. <span class="qed">□</span>

!!! chiave ""

    To prove the correctness of a universal implication such as \(\eqref{JJ}\), we consider a generic $x$ satisfying the hypothesis $p(x)$ and we try to prove that the thesis $q(x)$ is true.

- Let us now prove a similar relation for even numbers:

<a id="box-theoXXX-3"></a>

!!! teorema "Proposition 2"

    \begin{equation}
    \label{TEST_tris} \forall n \in \N ~~(~n {\rm ~~even~~} \Rightarrow n^2 {\rm ~~even}~)
    \end{equation}

??? dimostrazione "Proof"

    Let $n$ be even; we prove that then $n^2$ is even. 

    So let $n = 2\:k$ be an even number ($k \in \N$); we therefore need to write $n^2$ as an even integer. We have:

    $$
    n^2 = (2\:k)^2 = 4\:k^2 = 2\;(2\;k^2)
    $$

    Since $2\:(2\:k^2)$ is an even integer, $n^2$ is even. <span class="qed">□</span>

### 2.1 Counterexamples

<strong>Counterexamples</strong> are an important technique for proving the <strong>falsity</strong> of a universal implication.

- Let us ask, for example, whether the following universal implication is true or false:

    \begin{equation}
    \label{TEST} \forall n \in \N ~~(~n {\rm ~~prime~~} \Rightarrow n {\rm ~~odd}~)
    \end{equation}

    A moment's reflection shows that <strong>this proposition is false</strong>. Indeed, the number 2 is prime but it is even.

!!! chiave ""

    To claim that a universal implication is true, a proof is needed (an example is not enough), whereas to prove that a universal implication is false, one counterexample is enough.

- The universal implication requires that every $x$ satisfying the hypothesis also satisfies the thesis: therefore, if we find even a single example of $x$ that satisfies the hypothesis but not the thesis, this means that the universal implication is false. Not “false in one case”, but simply “false”, because the universal implication is true or false once and for all.

<a id="box-notationA-4"></a>

!!! definizione "Definition 2: of counterexample"

    In general, an example that satisfies the hypothesis but not the thesis of a universal implication, and that therefore proves its falsity, is called a <strong>counterexample</strong>.

- The formal proof that the previous universal implication is false is the following:

    ??? dimostrazione "Proof"

        The number $2$ is a counterexample to the universal implication: “For every natural number $n$, if $n$ is prime then $n$ is odd". <span class="qed">□</span>

!!! chiave ""

    The negation of the proposition

    $$
    ``{\rm for~every~~} x \in A, {\rm~~if~~} p (x) {\rm ~~holds~then~~} q (x) {\rm ~~holds}''
    $$

    $$
    \forall x \in A ~~\big(~p(x) \Rightarrow q(x)~\big)
    $$

    is the proposition

    $$
    ``{\rm there~exists~~} x \in A {\rm~~for~which~} p (x) {\rm ~~holds~and~} q (x) {\rm ~~does~not~hold}''
    $$

    $$
    \exists x \in A ~~\big(~p(x) ~\wedge~  \neg q(x)~\big)
    $$

    This particular $x$ is a <strong>counterexample</strong>.

## 3. Law of contraposition

- It is an indirect proof technique

!!! chiave ""

    The universal implication

    \begin{equation}
    \label{AA}
    \forall x \in A ~~\big(~p(x) \Rightarrow q(x)~\big)
    \end{equation}

    is logically equivalent to

    \begin{equation}
    \label{BB}
    \forall x \in A ~~\big(~{\rm not~~} q(x) \Rightarrow {\rm ~not~~} p(x)~\big)
    \end{equation}

    The second implication is called the <strong>contrapositive</strong> of the first.

- For example: since we know that the universal implication (proposition [↗](#CC)) holds

    \begin{equation*}
    \forall n \in \N ~~(~n {\rm ~~odd~~} \Rightarrow n^2 {\rm ~~odd}~)
    \end{equation*}

    the following proposition holds:

    <a id="box-theoXXX-5"></a>

    !!! teorema "Proposition 3"

        \begin{equation}
        \label{DD} \forall n \in \N ~~(n^2 {\rm ~~even~~} \Rightarrow n {\rm ~~even~~})
        \end{equation}

    ??? dimostrazione "Proof"

        Let $n^2$ be even; we prove that then $n$ is even. We prove \(\eqref{DD}\) relying on the truth of \(\eqref{CC}\).

        If $n$ is not even then it is odd and therefore $n^2$ is odd by \(\eqref{CC}\). This case contradicts the hypothesis that $n^2$ is even (hence it cannot occur).

        Consequently $n$ is even and \(\eqref{DD}\) is proved. <span class="qed">□</span>

- The reasoning used in the previous proof has general validity, and shows precisely that if \(\eqref{AA}\) is true then \(\eqref{BB}\) is true; moreover, if the second is true then the first is true (because “not not $p(x)$” is logically equivalent to $p(x)$), so the two are logically equivalent.

    !!! chiave ""

        The equivalence between \(\eqref{AA}\) and \(\eqref{BB}\) is called the <strong>law of contraposition</strong>. It is a method of <em>indirect proof</em> that consists in proving \(\eqref{BB}\) to show that \(\eqref{AA}\) is true (it requires proving that the negation of the thesis implies the negation of the hypothesis).

When using the law of contraposition, one must be able to construct the <strong>correct negation</strong> of a given proposition or property.

- Given any two predicates or properties $p(x)$ and $q(x)$, we list schematically some <strong>rules</strong> for constructing the <strong>negation</strong> of a proposition or property.

    !!! chiave ""

        The negation of

        $$
        ``{\rm for~every~~} x \in A, {\rm~~} p (x) {\rm~~holds}''
        $$

        $$
        \forall x \in A ~~\big(~p(x)~ \big)
        $$

        is

        $$
        ``{\rm there~exists~~} x \in A {\rm~~for~which~} p (x) {\rm~~does~not~hold} ''
        $$

        $$
        \exists x \in A ~~\big(~\neg p(x) ~\big)
        $$

    !!! chiave ""

        The negation of

        $$
        ``{\rm there~exists~~} x \in A {\rm~~for~which~~} p (x) {\rm~~holds}''
        $$

        $$
        \exists x \in A ~~\big(~p(x)~ \big)
        $$

        is

        $$
        ``{\rm for~every~~} x \in A, {\rm~~} p (x) {\rm~~does~not~hold} ''
        $$

        $$
        \forall x \in A  ~~\big(~\neg p(x) ~\big)
        $$

    !!! chiave ""

        The negation of

        $$
        ``{\rm } p (x) {\rm ~~holds~and~~}  q (x) {\rm ~~holds}''
        $$

        $$
        \big(~p(x) \wedge q(x)~\big)
        $$

        is

        $$
        ``{\rm } p (x) {\rm ~~does~not~hold~or~~}  q (x) {\rm ~~does~not~hold}''
        $$

        $$
        \big(~\neg p(x) ~\vee~  \neg q(x)~\big)
        $$

    !!! chiave ""

        The negation of

        $$
        ``{\rm } p (x) {\rm ~~holds~or~~}  q (x) {\rm ~~holds}''
        $$

        $$
        \big(~p(x) ~\vee~ q(x)~\big)
        $$

        is

        $$
        ``{\rm } p (x) {\rm ~~does~not~hold~and~~}  q (x) {\rm ~~does~not~hold}''
        $$

        $$
        \big(~\neg p(x) ~\wedge~  \neg q(x)~\big)
        $$

## 4. Sufficient conditions and necessary conditions

<a id="box-notationA-6"></a>

!!! definizione "Definition 3: of sufficient condition"

    A <strong>sufficient condition</strong> is one that, if satisfied, guarantees the truth of the proposition.

<a id="box-notationA-7"></a>

!!! definizione "Definition 4: of necessary condition"

    A <strong>necessary condition</strong> is one that must be satisfied for the proposition to be true.

!!! chiave ""

    Let $p(x)$ and $q(x)$ be any two predicates or properties. If $p(x)$ implies $q(x)$, formally:

    $$
    p(x) \Rightarrow q(x)
    $$

    then:

    - $p(x)$ is a <strong>sufficient condition</strong> for $q(x)$

    - $q(x)$ is a <strong>necessary condition</strong> for $p(x)$

- We have seen that the following universal implication is true (proposition \(\eqref{CC}\)):

    \begin{equation*}
    \forall n \in \N ~~(~n {\rm ~~odd~~} \Rightarrow n^2 {\rm ~~odd}~)
    \end{equation*}

    Hence “$n$ odd” is a sufficient condition for “$n^2$ odd” and “$n^2$ odd” is a necessary condition for “$n$ odd”.

- Let us now prove that the following proposition is also true:

<a id="box-theoXXX-8"></a>

!!! teorema "Proposition 4"

    \begin{equation}
    \label{TEST_2} \forall n \in \N ~~(~n^2 {\rm ~~odd~~} \Rightarrow  n {\rm ~~odd}~)
    \end{equation}

??? dimostrazione "Proof"

    Let $n^2$ be odd; we prove that then $n$ is odd. 

    So let $n^2 = 2\;(2\;k^2 +2\;k)+1$ be an odd number ($k \in \N$), since $2\;(2\;k^2 +2\;k)$ is an even number). We therefore need to write $n$ as an even integer plus one. We have:

    $$
    n=\sqrt{2\;(2\;k^2 +2\;k)+1} =\sqrt{4\;k^2+4\;k+1}=\sqrt{(2\;k+1)^2}= 2\;k+1.
    $$

    Since $2\;k+1$ is an odd integer, $n$ is odd. <span class="qed">□</span>

In this way we have proved that “$n^2$ odd” is a necessary and sufficient condition for “$n$ odd” and also that “$n$ odd” is a necessary and sufficient condition for “$n^2$ odd”:

<a id="box-theoXXX-9"></a>

!!! teorema "Proposition 5"

    \begin{equation}
    \label{JJJJJJJ} \forall n \in \N ~~(~n {\rm ~~odd~~} \Longleftrightarrow n^2 {\rm ~~odd}~)
    \end{equation}

- We have seen that the following universal implication is true (proposition \(\eqref{TEST_tris}\)):

    \begin{equation*}
    \forall n \in \N ~~(~n {\rm ~~even~~} \Rightarrow n^2 {\rm ~~even}~)
    \end{equation*}

    Hence “$n$ even” is a sufficient condition for “$n^2$ even” and “$n^2$ even” is a necessary condition for “$n$ even”.

- Let us now prove that the following proposition is also true (direct proof, without using the law of contraposition as seen previously in \(\eqref{DD}\)):

\begin{equation*}
\forall n \in \N ~~(~n^2 {\rm ~~even~~} \Rightarrow n {\rm ~~even}~)
\end{equation*}

??? dimostrazione "Proof"

    Let $n^2$ be even; we prove that then $n$ is even. 

    So let $n^2 = 2\;(2\;k^2)$ be an even number ($k \in \N$); we therefore need to write $n$ as an even integer. We have:

    $$
    n= \sqrt{2\;(2\;k^2)}=\sqrt{4\;k^2}=2\;k.
    $$

    Since $2\;k$ is an even integer, $n$ is even. <span class="qed">□</span>

In this way we have proved that “$n^2$ even” is a necessary and sufficient condition for “$n$ even” and also that “$n$ even” is a necessary and sufficient condition for “$n^2$ even”:

<a id="box-theoXXX-10"></a>

!!! teorema "Proposition 6"

    \begin{equation}
    \label{HHHHHHHHH} \forall n \in \N ~~(~n {\rm ~~even~~} \Longleftrightarrow n^2 {\rm ~~even}~)
    \end{equation}

<a id="box-texexpbox1-11"></a>

!!! esempio "Example 1: necessary and sufficient conditions"

    For example, for a square matrix of real numbers, the fact that its determinant is different from zero is a necessary and sufficient condition for it to be invertible.

<a id="box-theoXXX-12"></a>

!!! teorema "Proposition 7"

    \begin{equation}
    \label{HHHH} \forall n \in \N ~~(~n {\rm ~~ prime~} >2 \Rightarrow n  {\rm ~~odd}~)
    \end{equation}

??? dimostrazione "Proof"

    Let $n>2$ be a prime number; we prove that then $n$ is odd. 

    If $n$ is not odd, it is even. But no even number greater than two is prime, a fact that contradicts the hypothesis that $n$ is prime and greater than two (hence this case cannot occur).

    Consequently $n$ is odd. <span class="qed">□</span>

- Hence “$n$ odd” is a necessary condition for “$n$ prime &gt; 2” and “$n$ prime &gt; 2” is a sufficient condition for “$n$ odd”.

- However, “$n$ odd” does not imply “$n$ prime &gt; 2”, since for example the number $9$ is not prime (counterexample). That is:

    \begin{equation*}
    \forall n \in \N ~~(~n {\rm ~~ odd~~} \nRightarrow n  {\rm ~~prime~number~greater~than~} 2~)
    \end{equation*}

    Hence “$n$ odd” is a necessary but not sufficient condition for “$n$ prime &gt;2” and “$n$ prime &gt; 2” is a sufficient but not necessary condition for “$n$ odd”.

<a id="box-theoXXX-13"></a>

!!! teorema "Proposition 8"

    \begin{equation}
    \label{JJJJ} \forall n \in \N ~~(~n {\rm ~ divisible~by~} 6  \Rightarrow n  {\rm ~~even}~)
    \end{equation}

??? dimostrazione "Proof"

    Let $n$ be a number divisible by six; we prove that then $n$ is even. 

    If $n$ is not even, it is odd. But no odd number is divisible by six, a fact that contradicts the hypothesis that $n$ is divisible by six (hence this case cannot occur).

    Consequently $n$ is even. <span class="qed">□</span>

- Hence “$n$ even” is a necessary condition for “$n$ divisible by 6” and “$n$ divisible by 6” is a sufficient condition for “$n$ even”.

- However, “$n$ even” does not imply “$n$ divisible by 6”, since for example the number $2$ is even but not divisible by six (counterexample). That is:

    \begin{equation*}
    \forall n \in \N ~~(~n  {\rm ~~even}  \nRightarrow ~ n {\rm ~ divisible~by~~} 6)
    \end{equation*}

    Hence “$n$ even” is a necessary but not sufficient condition for “$n$ divisible by 6” and “$n$ divisible by 6” is a sufficient but not necessary condition for “$n$ even”.

<a id="box-texexpbox1-14"></a>

!!! esempio "Example 2: necessary/sufficient but not sufficient/necessary conditions"

    Being a square implies being a rectangle:

    $$
    {\rm being~a~square~~} \Rightarrow {\rm being~a~rectangle~~}
    $$

    since all squares are rectangles. 

    Hence “being a rectangle” is a necessary condition for “being a square” and “being a square” is a sufficient condition for “being a rectangle”.

    But being a rectangle does not imply being a square

    $$
    {\rm being~a~rectangle~~} \nRightarrow {\rm being~a~square~~}
    $$

    because there are rectangles that are not squares.

    Hence “being a rectangle” is not a sufficient condition (but it is a necessary one) for “being a square” and “being a square” is not a necessary condition (but it is a sufficient one) for “being a rectangle”.

## 5. Proofs by contradiction

- It is an indirect proof technique

<a id="box-notationA-15"></a>

!!! definizione "Definition 5: of proof by contradiction"

    In general, a <strong>proof by contradiction</strong> consists in assuming that the hypothesis of the theorem and the negation of the thesis are true, and deducing from these facts a contradiction of any kind.

- We illustrate <strong>proof by contradiction</strong> with the following theorem.

<a id="box-theoXXX-16"></a>

!!! teorema "Theorem 1"

    There is no rational number whose square is $2$.

??? dimostrazione "Proof"

    Suppose, by contradiction, that there exists a number $r \in \Q$ such that $r^2 = 2$.

    We can write $r = \frac{n}{m}$ with $n,m \in \Z$, $m \neq 0$. 

    Moreover, we can assume that the fraction $\frac{n}{m}$ is already reduced to lowest terms, that is, “simplified” (in other words: $n$, $m$ have no common factors).

    We then have the chain of implications:

    $$
    \left( \frac{n}{m} \right)^2 =2
    $$

    $$
    n^2 =2\:m^2
    $$

    so $n^2$ is even; but then by \(\eqref{HHHHHHHHH}\) $n$ is also even and we can write $n = 2k$ for some $k \in \Z$.

    Hence the relation $n^2 = 2\:m^2$ can be rewritten as:

    $$
    (2\:k)^2 = 2\:m^2
    $$

    $$
    4\:k^2 = 2\:m^2
    $$

    $$
    m^2 = 2\:k^2.
    $$

    So $m^2$ is even. But then by \(\eqref{HHHHHHHHH}\) $m$ is also even.

    Therefore both $n$ and $m$ are even, and this is a <strong>contradiction</strong>, because we had assumed that the fraction $\frac{n}{m}$ had already been simplified.

    The proof can be found in Euclid's Elements (around 300 BC). <span class="qed">□</span>

## 6. Logic and sets

The language of logic and the language of sets are two sides of the same coin.

### 6.1 Logical implication and set inclusion

- There is a parallel between the relation of set inclusion and logical implication. To explain it, consider the universal implication:

    \begin{equation}
    \label{KK} \forall n \in \N ~~(n {\rm ~~divisible~by~} 4 \Rightarrow n {\rm ~~divisible~by~} 2)
    \end{equation}

    If we denote by:

    $$
    D_4 =\big\{ ~~ n \in \N: n {\rm~~is~divisible~by~~} 4 ~~\big\}
    {\rm ~~and~~}
     D_2 =\big\{ ~~ n \in \N: n {\rm~~is~divisible~by~~} 2 ~~\big\}
    $$

    we can observe that the universal implication written above is equivalent to the assertion:

    $$
    ``D_4 \subseteq D_2 ''
    $$

    Indeed, this inclusion means that every element belonging to $D_4$ also belongs to $D_2$, that is, that every natural number divisible by $4$ is also divisible by $2$.

!!! chiave ""

    The universal implication:

    $$
    ``{\rm for~every~~} x \in A, {\rm~~if~~} p(x) {\rm~~holds~then~~} q(x) {\rm~~holds}''
    $$

    is equivalent to the set inclusion:

    $$
    \big\{~ x \in A:  p(x) {\rm~~is~true} ~\big\} ~~\subseteq~~ \big\{~ x \in A : q(x) {\rm~~is~true} ~\big\} .
    $$

### 6.2 Equality of sets and universal implications

- Proving the equality of two sets, i.e., $A=B$, requires proving two universal implications. Formally:

    \begin{equation}
    \label{FFF}
    \forall x ~~(x \in  A \Rightarrow x \in B) {\rm ~~~~~~and~~~~~~} \forall x ~~(x \in B \Rightarrow x \in A).
    \end{equation}

- Stating that $A \subsetneqq B$ means stating that “Every element that belongs to $A$ also belongs to $B$, and there exists an element of $B$ that does not belong to $A$”. Formally:

    \begin{equation}
    \label{GGG}
    \forall x ~~(x \in  A \Rightarrow x \in B) {\rm ~~~~~~and~~~~~~} \exists x \in B: x \notin A.
    \end{equation}

### 6.3 Set operations and logical operations

There is a relation between operations on sets and logical operations. Precisely:

1. <strong>Set intersection</strong> is defined by means of “and” (<strong>logical conjunction</strong>).

2. <strong>Set union</strong> is defined by means of “or” (<strong>logical disjunction</strong>).

3. <strong>Set difference</strong> and the <strong>complement operation</strong> are defined by means of “not” (<strong>logical negation</strong>).

- The distributive properties of union and intersection of sets:

<a id="box-notationA-17"></a>

!!! osservazione "Remark 1: distributive properties (sets)"

    Given three sets $\red{A}, \blue{B}$ and $\orange{C}$ we have:

    $$
    \red{A} \cap (\blue{B} \cup \orange{C}) = (\red{A} \cap \blue{B}) \cup (\red{A} \cap \orange{C})
    $$

    $$
    \red{A} \cup (\blue{B} \cap \orange{C}) = (\red{A} \cup \blue{B}) \cap (\red{A} \cup \orange{C}).
    $$

- They can be rewritten in terms of predicates by observing that the intersection symbol $\cap$ corresponds to the conjunction $\wedge$ (“and”) and that the union symbol $\cup$ corresponds to the disjunction $\vee$ (“or”).

<a id="box-notationA-18"></a>

!!! osservazione "Remark 2: distributive properties (predicates)"

    Given three predicates $\red{p(x)}, \blue{q(x)}$ and $\orange{r(x)}$ we have:

    $$
    \red{p(x)} \wedge \big(\blue{q(x)} \vee \orange{r(x)}\big) = \big(\red{p(x)} \wedge \blue{q(x)}\big) \vee \big(\red{p(x)} \wedge \orange{r(x)}\big)
    $$

    $$
    \red{p(x)} \vee \big(\blue{q(x)} \wedge \orange{r(x)}\big) = \big(\red{p(x)} \vee \blue{q(x)}\big) \wedge \big(\red{p(x)} \vee \orange{r(x)}\big).
    $$

- De Morgan's laws:

<a id="box-propXX-19"></a>

!!! teorema "Proposition 9: De Morgan's laws (sets)"

    Given the sets $\blue{B}, \orange{C} \subseteq \violet{U}$, we have

    $$
    \overline{\blue{B} \cap \orange{C}} = \overline{\blue{B}} \cup \overline{\orange{C}}
    $$

    $$
    \overline{\blue{B} \cup \orange{C}} = \overline{\blue{B}} \cap \overline{\orange{C}}
    $$

- They can be rewritten in terms of predicates by observing that the complement operation corresponds to the negation $\neg$ (“not”).

<a id="box-propXX-20"></a>

!!! teorema "Proposition 10: De Morgan's laws (predicates)"

    Given two predicates $\blue{q(x)}$ and $\orange{r(x)}$ we have:

    $$
    \neg \big({\blue{q(x)} \wedge \orange{r(x)}}\big) = \neg {\blue{q(x)}} \vee \neg {\orange{r(x)}}
    $$

    $$
    \neg \big({\blue{q(x)} \vee \orange{r(x)}} \big)= \neg {\blue{q(x)}} \wedge \neg {\orange{r(x)}}
    $$
