---
title: "Functions"
---

# Functions

<div class="info-capitolo" markdown>

**Part 2 · Functions · Chapter 1** · lecture notes by Fabio Furini · [:material-file-pdf-box: Chapter PDF](../pdf/functions-01-functions.pdf)

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

- The notation

    $$
    y = f (x)
    $$

    is also used to indicate that the variable $y$ is a function of $x$. In this case $y$ is the output or the value that $f$ associates with the input $x$.

    !!! chiave ""

        For brevity, sometimes the value of $f(x)$ is defined directly in terms of $x$, as for example $f(x)=x^2+10$.

- In general, we can think of a function as a <strong>black box</strong> that associates with each admissible input $x$ (<strong>input</strong>) a unique output $f(x)$ (<strong>output</strong>):

![Figure 3](../img/functions-01-functions/fig03.svg){ .fig .ovale loading=lazy style="width:75%" }

<a id="box-defImmagine-8"></a>

!!! definizione "Definition 3: of image and image of the domain"

    The output corresponding to $x$ is called the <strong>image</strong> of $x$; the set of possible outputs is called the <strong>image of the domain $A$ under $f$</strong> and is denoted by the symbol $f(A)$ or $\Ima f$.

- Note that in the notation $f: A \rightarrow B$, the codomain $B$ can be larger than the image $f(A)$, that is, in general we have

    $$
    f(A) \subseteq B.
    $$

- If $f$ is real-valued, we usually write $f : A \rightarrow \mathbb{R}$ without specifying the actual image of $f$.

## 3. Surjections, injections and bijections

<a id="box-notationA-9"></a>

!!! definizione "Definition 4: of surjection (surjective function)"

    A function $f$ is a <strong>surjection</strong> if the image of its domain coincides with its codomain.

- A surjection $f:  A \rightarrow B$ is sometimes also called a mapping <em>onto</em> $B$ (from $A$).

- Set representation:

<div class="figure-affiancate" markdown>

![Figure 4](../img/functions-01-functions/fig04.svg){ .fig .ovale loading=lazy style="width:32%" }

![Figure 5](../img/functions-01-functions/fig05.svg){ .fig .ovale loading=lazy style="width:32%" }

</div>

<a id="box-texexpbox1-10"></a>

!!! esempio "Example 6: surjective and non-surjective functions"

    - The function $f(n)=\lfloor \frac{n}{2} \rfloor$ is a surjective function from $\mathbb{N}$ to $\mathbb{N}$, since every element of the codomain $\mathbb{N}$ is the image of some value of the domain.

    - The function $f(n)= 2\:n$ is not a surjective function from $\mathbb{N}$ to $\mathbb{N}$, since no argument of $f$ produces $3$ as a value.

    - The function $f(n)= 2\:n$ is, however, a surjective function from the natural numbers to the even numbers.

<a id="box-propAAA-11"></a>

!!! osservazione "Remark 1"

    Given two sets $A$ and $B$, and a function $f: A \rightarrow B$, if $f$ is surjective then $|A| \ge |B|$.

??? dimostrazione "Proof"

    We proceed by induction on the number $n$ of elements in the codomain of the function.

    - <strong>Base case</strong>

        If there is only one element in the codomain ($|B|=1$), since the function is surjective, we have $|A| \ge 1$ (every element of $B$ is the image of at least one element of $A$). Hence $1 \ge 1$, which is clearly true.

    - <strong>Inductive step</strong>

        Assume then that all functions with codomain of size $n$ satisfy $|A_{n}| \ge |B_{n}|$.

        Considering codomains of size $n+1$ we have $|B_{n+1}|=|B_{n}|+1$. Since the codomain has one more element and the function is surjective, we have $|A_{n+1}| \ge |A_{n}| +1$. Substituting we obtain:

        $$
        \underbrace{|A_{n}|}_{\le~|A_{n+1}|-1} \ge \underbrace{|B_{n}|}_{=~|B_{n+1}|-1} {\rm~~hence~~} |A_{n+1}| \ge |B_{n+1}|.
        $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-notationA-12"></a>

!!! definizione "Definition 5: of injection (injective function)"

    A function $f$ is an <strong>injection</strong> if distinct arguments of $f$ produce distinct values, that is, if  $a \neq b$ implies $f(a) \neq f(b)$.

- set representation:

<div class="figure-affiancate" markdown>

![Figure 6](../img/functions-01-functions/fig06.svg){ .fig .ovale loading=lazy style="width:32%" }

![Figure 7](../img/functions-01-functions/fig07.svg){ .fig .ovale loading=lazy style="width:32%" }

</div>

<a id="box-texexpbox1-13"></a>

!!! esempio "Example 7"

    - The function $f(n)=  2\:n$ is an injective function from $\mathbb{N}$ to $\mathbb{N}$, since each even number $b$ is the image under  $f$ of exactly one element of the domain, namely $n=\frac{b}{2}$

    - The function $f(n)=\lfloor \frac{n}{2} \rfloor$ is not an injective function, since the value 1 is obtained from two arguments: $2$ and $3$.

- An injection is also called a <strong>one-to-one</strong> function.

<a id="box-propAAA-14"></a>

!!! osservazione "Remark 2"

    Given two sets $A$ and $B$, and a function $f: A \rightarrow B$, if $f$ is injective then $|A| \le |B|$.

??? dimostrazione "Proof"

    We proceed by induction on the number $n$ of elements in the domain of the function.

    - <strong>Base case</strong>

        If there is only one element in the domain ($|A|=1$), since each element of the domain is associated with one and only one element of the codomain, we have $|B| \ge 1$.  Hence $1 \le 1$, which is clearly true.

    - <strong>Inductive step</strong>

        Assume then that all functions with domain of size $n$ satisfy $|A_{n}| \le |B_{n}|$.

        Considering domains of size $n+1$ we have $|A_{n+1}|=|A_{n}|+1$ and, since the function is injective,  $|B_{n+1}| \ge |B_{n}| +1$. Substituting we obtain

        $$
        \underbrace{|A_{n}|}_{=~|A_{n+1}|-1} \le \underbrace{|B_{n}|}_{\le~|B_{n+1}|-1} {\rm~~hence~~} |A_{n+1}| \le |B_{n+1}|.
        $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-notationA-15"></a>

!!! definizione "Definition 6: of bijection (bijective function or one-to-one correspondence)"

    A function $f$ is a <strong>bijection</strong> if: $(i)$ it is <u><em>injective</em></u> and $(ii)$ it is <u><em>surjective</em></u>.

- set representation:

![Figure 8](../img/functions-01-functions/fig08.svg){ .fig .ovale loading=lazy style="width:32%" }

<a id="box-texexpbox1-16"></a>

!!! esempio "Example 8"

    - The function $f(n)= (-1)^n\:\lceil \frac{n}{2} \rceil$ is a bijection from $\mathbb{N}$ to $\mathbb{Z}$. The values of the function are:

        $$
        f(0)=0,~~~f(1)=-1,~~~f(2)=1,~~~f(3)=-2,~~~f(4)=2 \dots
        $$

        The function is injective, since no element of $\mathbb{Z}$ is the image of more than one element of  $\mathbb{N}$. The function is surjective, since  all elements of  $\mathbb{Z}$ are images of some element of $\mathbb{N}$.

- A bijection is also called a <strong>one-to-one</strong> correspondence, since it pairs elements of the domain with elements of the codomain.

- A bijection from a set $A$  to itself is also called a <strong>permutation</strong>.
