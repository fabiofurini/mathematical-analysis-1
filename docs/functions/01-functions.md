---
title: "Functions"
---

# Functions

<div class="info-capitolo" markdown>

**Part 2 · Functions · Chapter 1** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-2-functions.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-functions-01-functions.pdf)

</div>

## 1. The concept of function

!!! chiave ""

    The existence of a <strong>variable quantity</strong> implies the existence of a <strong>relation</strong> between <strong>two quantities</strong>, that is, the dependence of one quantity on another.

- In each case, this relation follows a certain <strong>law</strong> or <strong>formula</strong>.

<a id="box-texexpbox1-1"></a>

!!! esempio "Example 1: Laws/formulas $\rightarrow$ functions"

    If a heavy object is dropped from a certain height, the distance traveled by the object varies with time $t$ according to the formula:

    \begin{equation*}
    s(t) = \frac{1}{2}\:g\:t^2 \qquad {\rm ~~with~~} t \ge 0
    \end{equation*}

    where  $g \approx 9,8$ is the gravitational acceleration constant.

    ![Figure 1](../img/functions-01-functions/fig01.svg){ .fig .ovale loading=lazy style="width:48%" }

    Hence, the time $t$ is associated with the distance traveled $s(t)$: $t  \mapsto s(t)$.

<a id="box-texexpbox1-2"></a>

!!! esempio "Example 2: Laws/formulas $\rightarrow$ functions"

    If a unit capital is invested for one year at the annual rate $i$, with interest paid monthly at a rate $\frac{i}{12}$, we have:

    - after the first month, a capital equal to:

        $$
        1+ \frac{i}{12} \cdot 1= \underbrace{1 + \frac{i}{12}}_{\alpha}
        $$

    - after the second month, a capital equal to:

        $$
        \underbrace{1 + \frac{i}{12}}_{\alpha} + \frac{i}{12} \underbrace{\left( 1 + \frac{i}{12} \right)}_{\alpha} = \left(1 + \frac{i}{12}\right) \: \left(1 + \frac{i}{12}\right) =  \underbrace{\left(1 + \frac{i}{12}\right)^2}_{\beta}
        $$

    - after the third month, a capital equal to:

        $$
        \underbrace{\left(1 + \frac{i}{12}\right)^2}_{\beta} + \frac{i}{12} \: \underbrace{\left(1 + \frac{i}{12}\right)^2}_{\beta} 
        = \left(1 + \frac{i}{12}\right)^2 \: \left(1 + \frac{i}{12}\right)
        = \left(1 + \frac{i}{12}\right)^3
        $$

    Repeating the argument, the capital at the end of the year therefore depends on the rate $i$ according to the formula:

    \begin{equation*}
    k(i) = \left( 1 + \frac{i}{12}\right)^{12} \qquad {\rm ~~with~~} i \in [0,1]
    \end{equation*}

    ![Figure 2](../img/functions-01-functions/fig02.svg){ .fig .ovale loading=lazy style="width:42%" }

    Hence, the rate $i$ is associated with the capital $k(i)$ at the end of the year: $i  \mapsto k(i)$

- In each of the previous examples, a <em>real number</em> (<strong>input</strong>) is associated <strong><em>uniquely</em></strong> with another <em>real number</em> (<strong>output</strong>). It is precisely the <strong>uniqueness of the relation</strong> that characterizes a function.

- In general, the <strong>admissible inputs</strong> for a given relation (function) are subject to natural restrictions, related to the very nature of the relation.

<a id="box-texexpbox1-3"></a>

!!! esempio "Example 3: Admissible inputs"

    - In the first example the “starting” real number has the meaning of <em>time</em>; imagining that the object is dropped at an initial time $t = 0$, it is clear that we must restrict ourselves to times $t \ge 0$.

    - In the second example, clearly we must have $0 \le i \le 1$, where $1$ corresponds to a rate of 100%.

## 2. Definition of function, domain, codomain and image

<a id="box-defDominio-4"></a>

!!! definizione "Definition 1: of domain"

    The set of admissible inputs for a given function is called the <strong>domain</strong>.

- The expressions <strong>independent variable</strong> (for a generic <em>input</em>) and <strong>dependent variable</strong> (for the <em>output</em>) are often used.

<a id="box-texexpbox1-5"></a>

!!! esempio "Example 4: Other types of relations"

    Let us consider the set of students of a given course.

    - If $A$ is the set of students and $B$ is the set of their names, the relation that associates each student with his or her name is <em>unique</em> (single-valued).

    - In this case neither $A$ nor $B$ is a set of numbers, but nevertheless a unique (single-valued) relation between these two sets is well defined.

    On the other hand, the converse is not necessarily true: there could be two students with the same name.

<a id="box-defFunzione-6"></a>

!!! definizione "Definition 2: of function"

    Given any two sets $A$, $B$, a <strong>function</strong> $f$ with <strong>domain</strong> $A$ and values in $B$ (or also “with <strong>codomain</strong> $B$”) is any law that associates with each element of $A$ <em>one and only one element</em> of $B$.

- The notation:

    \begin{equation*}
    f: A \rightarrow B
    \end{equation*}

    (which reads “$f$ defined from $A$ to $B$”), indicates the <strong>domain</strong> and the <strong>codomain</strong> of the function $f$.

- The notation

    \begin{equation*}
    f: x \mapsto f(x)
    \end{equation*}

    (which reads “$f$ maps $x$ to $f(x)$”) indicates how the function $f$ acts on the elements.

- The <strong>symbol $f(x)$ denotes the output or the value</strong>  that the function $f$ associates with $x$, and it must not be confused with the symbol $f$, which denotes the <strong>function itself</strong>.

<a id="box-texexpbox1-7"></a>

!!! esempio "Example 5: Notation for functions"

    For the function

    \begin{equation*}
    k(i) = \left( 1 + \frac{i}{12}\right)^{12}
    \end{equation*}

    of the previous example we would have:

    $$
    k: [0,1] \rightarrow \mathbb{R}
    $$

    $$
    k: i \mapsto \left( 1 + \frac{i}{12}\right)^{12}
    $$

<a id="box-defUguaglianzaFunzioni-8"></a>

!!! definizione "Definition 3: of equality of two functions"

    Two functions $f$ and $g$ are <strong>equal</strong> if they have the same <em>domain</em> $A$, the same <em>codomain</em> $B$ and if

    $$
    f(a) = g(a), \qquad {\rm~~for~every~~} a \in A.
    $$

- A function is therefore not just a “formula”: <strong>the domain and the codomain are part of the function</strong>. Changing either of them gives a different function, even if the law is the same.

<a id="box-texexpbox1-9"></a>

!!! esempio "Example 6: equal functions and different functions"

    Consider the three functions

    $$
    f: \mathbb{R} \rightarrow \mathbb{R},~~ f: x \mapsto x^2 \qquad
       g: \mathbb{R} \rightarrow [0,+\infty),~~ g: x \mapsto x^2 \qquad
       h: [0,+\infty) \rightarrow \mathbb{R},~~ h: x \mapsto x^2
    $$

    - $f \neq g$: they have the same domain and the same law, but different codomains;

    - $f \neq h$: they have the same codomain and the same law, but different domains.

- The notation

    $$
    y = f (x)
    $$

    is also used to indicate that the variable $y$ is a function of $x$. In this case $y$ is the output or the value that $f$ associates with the input $x$.

    !!! chiave ""

        For brevity, sometimes the value of $f(x)$ is defined directly in terms of $x$, as for example $f(x)=x^2+10$.

- In general, we can think of a function as a <strong>black box</strong> that associates with each admissible input $x$ (<strong>input</strong>) a unique output $f(x)$ (<strong>output</strong>):

![Figure 3](../img/functions-01-functions/fig03.svg){ .fig .ovale loading=lazy style="width:75%" }

<a id="box-defImmagine-10"></a>

!!! definizione "Definition 4: of image and image of the domain"

    The output corresponding to $x$ is called the <strong>image</strong> of $x$; the set of possible outputs is called the <strong>image of the domain $A$ under $f$</strong> and is denoted by the symbol $f(A)$ or $\Ima f$.

- Note that in the notation $f: A \rightarrow B$, the codomain $B$ can be larger than the image $f(A)$, that is, in general we have

    $$
    f(A) \subseteq B.
    $$

- If $f$ is real-valued, we usually write $f : A \rightarrow \mathbb{R}$ without specifying the actual image of $f$.

<a id="box-defImmagineSottoinsieme-11"></a>

!!! definizione "Definition 5: of image of a subset of the domain"

    Given a function $f: A \rightarrow B$ and a subset $A' \subseteq A$, the <strong>image of $A'$ under $f$</strong> is the set of the outputs produced by the inputs in $A'$:

    $$
    f(A') = \big\{ b \in B:~~ b = f(a) {\rm ~~for~some~~} a \in A' \big\}.
    $$

- Taking $A'=A$ we recover the <em>image of the domain</em> (also called the <em>range</em> of $f$), which can therefore be written explicitly as

    $$
    f(A) = \big\{ b \in B:~~ b = f(a) {\rm ~~for~some~~} a \in A \big\} \subseteq B.
    $$

<a id="box-texexpbox1-12"></a>

!!! esempio "Example 7: image of the domain and image of a subset"

    Consider the function

    $$
    f: \mathbb{N} \rightarrow \mathbb{N}, \quad f: n \mapsto 2\:n
    $$

    - The image of its domain is

        $$
        f(\mathbb{N}) = \big\{ m \in \mathbb{N}:~~ m = 2\:n {\rm ~~for~some~~} n \in \mathbb{N} \big\},
        $$

        that is, the set of the <strong>nonnegative even numbers</strong>. In particular $f(\mathbb{N}) \subsetneq \mathbb{N}$: the codomain is strictly larger than the image.

    - The image of the subset $A' = \{0,1,2,3\} \subseteq \mathbb{N}$ is instead

        $$
        f(A') = \{0,2,4,6\}.
        $$

## 3. Surjections, injections and bijections

<a id="box-notationA-13"></a>

!!! definizione "Definition 6: of surjection (surjective function)"

    A function $f$ is a <strong>surjection</strong> if the image of its domain coincides with its codomain.

- If $f:  A \rightarrow B$ is a surjection, we also say that <strong>$f$ maps $A$ onto $B$</strong>. Note that the word <em>mapping</em> denotes an arbitrary function: it is the preposition <em>onto</em> that expresses surjectivity.

- Set representation:

<div class="figure-affiancate" markdown>

![Figure 4](../img/functions-01-functions/fig04.svg){ .fig .ovale loading=lazy style="width:32%" }

![Figure 5](../img/functions-01-functions/fig05.svg){ .fig .ovale loading=lazy style="width:32%" }

</div>

<a id="box-texexpbox1-14"></a>

!!! esempio "Example 8: surjective and non-surjective functions"

    - The function $f(n)=\lfloor \frac{n}{2} \rfloor$ is a surjective function from $\mathbb{N}$ to $\mathbb{N}$, since every element of the codomain $\mathbb{N}$ is the image of some value of the domain.

    - The function $f(n)= 2\:n$ is not a surjective function from $\mathbb{N}$ to $\mathbb{N}$, since no argument of $f$ produces $3$ as a value.

    - The function $f(n)= 2\:n$ is, however, a surjective function from the natural numbers to the even numbers.

<a id="box-propCARDsur-15"></a>

!!! osservazione "Remark 1"

    Given two <strong>finite</strong> sets $A$ and $B$, and a function $f: A \rightarrow B$, if $f$ is surjective then $|A| \ge |B|$.

??? dimostrazione "Proof"

    Write $B = \{b_1, b_2, \dots, b_m\}$, with $m = |B|$, and for every $i \in \{1, 2, \dots, m\}$ consider the set of the inputs whose output is $b_i$:

    $$
    A_i = \big\{ a \in A:~ f(a) = b_i \big\} \subseteq A.
    $$

    - Every $A_i$ is <strong>nonempty</strong>: since $f$ is surjective, every $b_i$ is the image of at least one element of $A$, hence $|A_i| \ge 1$.

    - The sets $A_1, A_2, \dots, A_m$ are <strong>pairwise disjoint</strong>: if $a \in A_i \cap A_j$ then $b_i = f(a) = b_j$, because $f$ associates with $a$ <em>one and only one</em> output, and therefore $i=j$.

    - Their <strong>union is the whole of $A$</strong>: every $a \in A$ belongs to the set $A_i$ with $b_i = f(a)$.

    The sets $A_1, A_2, \dots, A_m$ thus form a <em>partition</em> of $A$ and, since $A$ is finite, we count the elements of $A$ by summing the cardinalities of the blocks:

    $$
    |A| = \sum_{i=1}^{m} |A_i| \ge \sum_{i=1}^{m} 1 = m = |B|.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-notationA-16"></a>

!!! definizione "Definition 7: of injection (injective function)"

    A function $f$ is an <strong>injection</strong> if distinct arguments of $f$ produce distinct values, that is, if  $a \neq b$ implies $f(a) \neq f(b)$.

- set representation:

<div class="figure-affiancate" markdown>

![Figure 6](../img/functions-01-functions/fig06.svg){ .fig .ovale loading=lazy style="width:32%" }

![Figure 7](../img/functions-01-functions/fig07.svg){ .fig .ovale loading=lazy style="width:32%" }

</div>

<a id="box-texexpbox1-17"></a>

!!! esempio "Example 9"

    - The function $f(n)=  2\:n$ is an injective function from $\mathbb{N}$ to $\mathbb{N}$, since each even number $b$ is the image under  $f$ of exactly one element of the domain, namely $n=\frac{b}{2}$

    - The function $f(n)=\lfloor \frac{n}{2} \rfloor$ is not an injective function, since the value 1 is obtained from two arguments: $2$ and $3$.

- An injection is also called a <strong>one-to-one</strong> function.

<a id="box-propCARDinj-18"></a>

!!! osservazione "Remark 2"

    Given two <strong>finite</strong> sets $A$ and $B$, and a function $f: A \rightarrow B$, if $f$ is injective then $|A| \le |B|$.

??? dimostrazione "Proof"

    Write $A = \{a_1, a_2, \dots, a_n\}$, with $n=|A|$, and consider the $n$ outputs

    $$
    f(a_1),~ f(a_2),~ \dots,~ f(a_n) \in f(A).
    $$

    - These outputs are <strong>all distinct</strong>: if $i \neq j$ then $a_i \neq a_j$ and, since $f$ is injective, $f(a_i) \neq f(a_j)$.

    - Every element of $f(A)$ <strong>appears</strong> in the list: by definition of image of the domain, every $b \in f(A)$ has the form $b=f(a)$ with $a \in A$, that is, $a = a_i$ for some $i \in \{1, 2, \dots, n\}$.

    The list $f(a_1), f(a_2), \dots, f(a_n)$ therefore enumerates the elements of $f(A)$ without repetitions, and hence

    $$
    |A| = n = |f(A)|.
    $$

    Finally $f(A) \subseteq B$ and $B$ is finite, hence $|f(A)| \le |B|$. Putting the two relations together we obtain $|A| \le |B|$. <span class="qed">□</span>

!!! chiave ""

    The two remarks above are stated for <strong>finite</strong> sets: the proofs <em>count</em> elements, and counting only makes sense for finite sets. Comparing the “sizes” of two infinite sets requires a different notion of cardinality, which is introduced in the chapter “Cardinality of infinite sets” of Part 1.

<a id="box-notationA-19"></a>

!!! definizione "Definition 8: of bijection (bijective function or one-to-one correspondence)"

    A function $f$ is a <strong>bijection</strong> if: $(i)$ it is <u><em>injective</em></u> and $(ii)$ it is <u><em>surjective</em></u>.

- set representation:

![Figure 8](../img/functions-01-functions/fig08.svg){ .fig .ovale loading=lazy style="width:32%" }

<a id="box-texexpbox1-20"></a>

!!! esempio "Example 10"

    - The function $f(n)= (-1)^n\:\lceil \frac{n}{2} \rceil$ is a bijection from $\mathbb{N}$ to $\mathbb{Z}$. The values of the function are:

        $$
        f(0)=0,~~~f(1)=-1,~~~f(2)=1,~~~f(3)=-2,~~~f(4)=2 \dots
        $$

        The function is injective, since no element of $\mathbb{Z}$ is the image of more than one element of  $\mathbb{N}$. The function is surjective, since  all elements of  $\mathbb{Z}$ are images of some element of $\mathbb{N}$.

- A bijection is also called a <strong>one-to-one</strong> correspondence, since it pairs elements of the domain with elements of the codomain.

- A bijection from a set $A$  to itself is also called a <strong>permutation</strong>.

## 4. Inverse of a bijection

- A bijection $f: A \rightarrow B$ pairs every element of $A$ with an element of $B$ and vice versa: the pairing can therefore be followed in the opposite direction as well, from $B$ to $A$.

<a id="box-defInversaBiiezione-21"></a>

!!! definizione "Definition 9: of inverse of a bijection"

    Given a bijection $f: A \rightarrow B$, its <strong>inverse</strong> is the function

    $$
    f^{-1}: B \rightarrow A, \qquad f^{-1}(b)=a ~~~\Longleftrightarrow~~~ f(a)=b.
    $$

- The definition is well posed, that is, $f^{-1}$ really is a function, precisely because $f$ is a bijection: given $b \in B$,

    - the <em>surjectivity</em> of $f$ guarantees that there exists <em>at least one</em> $a \in A$ with $f(a)=b$;

    - the <em>injectivity</em> of $f$ guarantees that there exists <em>at most one</em>, because distinct inputs have distinct outputs.

    Hence every $b \in B$ corresponds to <em>one and only one</em> $a \in A$, as required by the definition of function.

- In other words, if $f$ applied to the input $a$ gives the output $b$, then $f^{-1}$ applied to $b$ returns $a$:

    $$
    f^{-1}\big(f(a)\big)=a,~~\forall a \in A \qquad {\rm ~~and~~} \qquad f\big(f^{-1}(b)\big)=b,~~\forall b \in B.
    $$

!!! chiave ""

    Here the inverse is defined on the <strong>whole</strong> codomain $B$, and therefore <em>both</em> the injectivity <em>and</em> the surjectivity of $f$ are needed. In the chapter “Inverse functions” we study instead functions of a real variable, and there a function is called <em>invertible</em> when it is only <strong>injective</strong>: the inverse is built on the <em>image</em> $f(D)$ and not on the whole codomain, and with respect to the image surjectivity is automatic.

<a id="box-texexpbox1-22"></a>

!!! esempio "Example 11: inverse of a bijection"

    Let us go back to the bijection $f: \mathbb{N} \rightarrow \mathbb{Z}$ of the previous example,

    $$
    f(n)= (-1)^n\:\left\lceil \frac{n}{2} \right\rceil,
    $$

    which pairs $0 \leftrightarrow 0$, $1 \leftrightarrow -1$, $2 \leftrightarrow 1$, $3 \leftrightarrow -2$, $4 \leftrightarrow 2, \dots$

    Its inverse $f^{-1}: \mathbb{Z} \rightarrow \mathbb{N}$ is:

    $$
    f^{-1}(m)=
    \begin{cases}
    2\:m & {\rm if~~} m \ge 0\\[1ex]
    -(2\:m+1) & {\rm if~~} m < 0
    \end{cases}
    $$

    Indeed, if $m \ge 0$, then $n = 2\:m$ is even and $f(n)=(-1)^{2m} \lceil m \rceil = m$; if instead $m<0$, then $n=-(2\:m+1)=-2\:m-1$ is odd and nonnegative, and

    $$
    f(n)=(-1)^{n}\left\lceil \frac{-2\:m-1}{2} \right\rceil = -\left\lceil -m-\frac{1}{2} \right\rceil = -(-m)=m,
    $$

    where we used that $-m-\frac{1}{2}$ has ceiling $-m$, since $-m$ is a positive integer.
