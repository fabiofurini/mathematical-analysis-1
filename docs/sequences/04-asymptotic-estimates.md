---
title: "Comparisons and asymptotic estimates"
---

# Comparisons and asymptotic estimates

<div class="info-capitolo" markdown>

**Part 3 · Limits of sequences · Chapter 4** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-3-limits.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-sequences-04-asymptotic-estimates.pdf)

</div>

## 1. Comparisons and asymptotic estimates

- We have seen that a sequence tending to $0$ is an <strong>infinitesimal</strong>; a sequence that diverges (to $\ip$, to $\im$) is called an <strong>infinity</strong> (infinite quantity).

- When two sequences are both infinitesimals or both infinities, it is useful to be able to compare them, to understand which of the two tends “<strong>more rapidly</strong>” to $0$ or to infinity.

<a id="box-texexpbox1-1"></a>

!!! esempio "Example 1: Infinities"

    Examples of infinities are the following sequences:

    $$
    \left\{\log n \right\}, \quad \left\{\sqrt{n} \right\}, \quad \left\{n^2 \right\}, \quad \left\{2^n \right\}
    $$

<a id="box-texexpbox1-2"></a>

!!! esempio "Example 2: Infinitesimals"

    Examples of infinitesimals are the following sequences:

    $$
    \left\{ \frac{1}{\log n} \right\}, \quad \left\{ \frac{1}{ \sqrt{n}} \right\}, \quad \left\{ \frac{1}{n^2} \right\}, \quad \left\{ \frac{1}{2^n} \right\}
    $$

- Let $\{a_n\}$ and $\{b_n\}$ be <strong>two infinities</strong>; considering the limit of their ratio we have 4 cases:

    $$
    \lim_{n \rightarrow +\infty} \frac{a_n}{b_n} =
    \begin{cases}
    0 & {\rm ~~~~case~~1):~~}  \{a_n\} {\rm ~~is~an~infinity~of ~\textbf{lower order } than~~} \{b_n\}\\
    l \in \R, l \neq 0  & {\rm ~~~~case~~2):~~} \{a_n\} {\rm ~and~} \{b_n\} {\rm ~are~infinities~of~the~\textbf{same order}} \\
    \pm \infty & {\rm ~~~~case~~3):~~} \{a_n\} {\rm ~~is~an~infinity~of ~\textbf{higher order } than~~} \{b_n\}\\
    {\rm nonexistent} & {\rm ~~~~case~~4):~~}  \{a_n\} {\rm ~and~} \{b_n\} {\rm ~are~not~comparable}
    \end{cases}
    $$

- Let $\{a_n\}$ and $\{b_n\}$ be <strong>two infinitesimals</strong> (with $b_n$ eventually different from zero); considering the limit of their ratio we have 4 cases:

    $$
    \lim_{n \rightarrow +\infty} \frac{a_n}{b_n} =
    \begin{cases}
    0 & {\rm ~~~~case~~1):~~}  \{a_n\} {\rm ~~is~an~infinitesimal~of ~\textbf{higher order } than~~} \{b_n\}\\
    l \in \R, l \neq 0  & {\rm ~~~~case~~2):~~} \{a_n\} {\rm ~and~} \{b_n\} {\rm ~are~infinitesimals~of~the~\textbf{same order}} \\
    \pm \infty & {\rm ~~~~case~~3):~~} \{a_n\} {\rm ~~is~an~infinitesimal~of ~\textbf{lower order } than~~} \{b_n\}\\
    {\rm nonexistent} & {\rm ~~~~case~~4):~~}  \{a_n\} {\rm ~and~} \{b_n\} {\rm ~are~not~comparable}
    \end{cases}
    $$

!!! chiave ""

    - The case

        $$
        \frac{a_n}{b_n} \rr 1
        $$

        is particularly important: in this case we say that the two sequences $\{a_n\}$ and $\{b_n\}$ are <strong>asymptotic</strong> (asymptotically equivalent).

    - To indicate this, we write

        $$
        a_n  \thicksim b_n
        $$

        (read: $a_n$ is asymptotic to $b_n$)

- The asymptotic symbol is very useful in computing limits, thanks to the following <strong>properties</strong>:

<a id="box-propFF-3"></a>

!!! teorema "Proposition 1: Asymptotic behavior"

    1. If $a_n  \thicksim b_n$, the two sequences have the same behavior:

        - either they converge to the same limit,

        - or they both diverge to $\pm\infty$,

        - or neither of them has a limit.

    2. We can write chains of asymptotic relations, i.e.:

        $$
        {\rm if~~} a_n  \thicksim b_n  \thicksim \dots \thicksim c_n {\rm ~~~~then~~~~} a_n  \thicksim c_n
        $$

    3. An expression made of a product or quotient of several factors can be estimated factor by factor:

        $$
        {\rm if~~} a_n  \thicksim a'_n, b_n  \thicksim b'_n, c_n  \thicksim c'_n  {\rm ~~~~then~~~~} \frac{a_n \: b_n}{c_n}  \thicksim \frac{a'_n \: b'_n}{c'_n}
        $$

        - <strong>Warning</strong>: the same does not hold for sums or for exponentials.

??? dimostrazione "Proof"

    1. We prove the first statement

        $$
        {\rm if~} a_n  \thicksim b_n {\rm~then~} \{a_n\} {\rm~and~} \{b_n\} {\rm ~~have~the~same~behavior}
        $$

        - If $a_n \rr l \in \R$, since

            $$
            b_n = \frac{b_n}{a_n} \cdot a_n {\rm~~and~~} \frac{b_n}{a_n} \rr 1 \quad ({\rm by~definition~of~asymptotic}),
            $$

            then by the theorem on the algebra of limits we have

            $$
            b_n \rr 1 \cdot l = l.
            $$

        - With the same steps, the theorem on the partial arithmetization of the infinity symbol allows us to conclude that

            $$
            {\rm if~~} a_n \rr \pm \infty {\rm~~~and~~~} a_n  \thicksim b_n {\rm~~~then~~~} b_n \rr \pm \infty.
            $$

        Observing that the asymptotic relation is symmetric, what we have just proved also shows that if $\{b_n\}$ converges (diverges), then $\{a_n\}$ converges (diverges) as well.

        - We conclude that if $\{a_n\}$ is irregular, then $\{b_n\}$ is irregular as well, because if, by contradiction, it were not, then by what we have just proved $\{a_n\}$ would also be convergent or divergent.

    2. We prove the transitivity of the asymptotic relation:

        $$
        {\rm if~~} a_n  \thicksim b_n  \thicksim  c_n {\rm ~~~~then~~~~} a_n  \thicksim c_n.
        $$

        The hypotheses mean that

        $$
        \frac{a_n}{b_n} \rr 1 {\rm~~and~~} \frac{b_n}{c_n} \rr 1
        $$

        Then by the theorem on the algebra of limits we have

        $$
        \frac{a_n}{c_n} = \frac{a_n}{b_n} \cdot \frac{b_n}{c_n} \rr 1.
        $$

    3. The third property is proved analogously. <span class="qed">□</span>

<a id="box-texexpbox1-4"></a>

!!! esempio "Example 3: Asymptotic sequences by applying the definition"

    We prove that:

    $$
    \log n \thicksim \log (n+1)
    $$

    Factoring out $n$ in the second sequence we obtain

    $$
    \log (n+1) = \log \left(n \: \left(1 + \frac{1}{n} \right)\right)= \log n + \log \left(1+\frac{1}{n}\right)
    $$

    Hence

    $$
    \lim_{n \rr \ip} \frac{\log n}{\log (n+1)} = \lim_{n \rr \ip} \frac{\log n}{\log n + \underbrace{\log \left(1+\frac{1}{n}\right)}_{\rr 0}} =1
    $$

!!! chiave ""

    - A typical way to show that

        $$
        a_n  \thicksim b_n
        $$

        consists in writing

        $$
        a_n = b_n \: c_n {\rm ~~~with~~~} c_n \rr 1.
        $$

        That is, decomposing $\{a_n\}$ into the product of a sequence $\{b_n\}$ and a sequence $\{c_n\}$ that tends to 1.

<a id="box-texexpbox1-5"></a>

!!! esempio "Example 4: Asymptotic sequences via the decomposition method"

    Example:

    $$
    \underbrace{2 \: n^2+ 3\:n +1}_{a_n} = ~~\underbrace{2 \: n^2}_{b_n} ~~ \underbrace{\left( 1 + \frac{3}{2\:n} + \frac{1}{2\: n^2}\right)}_{c_n} \thicksim 2\: n^2 \quad {\rm ~~hence~~} a_n  \thicksim b_n
    $$

    since

    $$
    \underbrace{\left( 1 + \frac{3}{2\:n} + \frac{1}{2\: n^2}\right)}_{c_n} \rr 1
    $$

<a id="box-texexpbox1-6"></a>

!!! esempio "Example 5: Computing limits with asymptotic estimates"

    We compute the limit

    $$
    \lim_{n \rr \ip} \frac{2\:n^3+4n+1}{5\:(n+1)^3}= \left[\frac{\infty}{\infty}\right] \qquad {\rm~~(indeterminate~form)}
    $$

    Proceeding as before we can write

    $$
    \underbrace{2 \: n^3+ 4\:n +1}_{a_n} = ~~\underbrace{2 \: n^3}_{a'_n} ~~ \underbrace{\left( 1 + \frac{2}{n^2} + \frac{1}{2\: n^3}\right)}_{\rr 1} \thicksim 2\: n^3
    $$

    $$
    5\:(n+1)^3=   \underbrace{5 \: (n^3 + 3\:n^2 + 3 \:n +1)}_{c_n} = ~~\underbrace{5 \: n^3}_{c'_n} ~~ \underbrace{\left( 1 + \frac{3}{n} + \frac{3}{n^2} + \frac{1}{n^3}\right)}_{\rr 1} \thicksim 5\: n^3
    $$

    Using point 3 of Proposition [Proposition 1](#box-propFF-3) on asymptotic behavior we can write:

    $$
    {\rm if~~} a_n  \thicksim a'_n,  c_n  \thicksim c'_n  {\rm ~~~~then~~~~} \frac{a_n}{c_n}  \thicksim \frac{a'_n}{c'_n}
    $$

    and obtain

    $$
    \frac{2\:n^3+4n+1}{5\:(n+1)^3} \thicksim \frac{2\:n^3}{5\:n^3}
    $$

    that is, the two sequences have the same behavior. Hence

    $$
    \lim_{n \rr \ip} \frac{2\:n^3+4n+1}{5\:(n+1)^3}= \lim_{n \rr \ip} \frac{2\:n^3}{5\:n^3} = \frac{2}{5}
    $$

!!! chiave ""

    - Another way to show that

        $$
        a_n  \thicksim b_n
        $$

        is to use the <strong>substitution principle</strong>.

- For example, knowing that

    $$
    \lim_{n \rr \ip} 	\underbrace{\log \: n}_{a_n} \rr \ip
    $$

    we can state

    $$
    \lim_{n \rr \ip} \log \: c_n \rr \ip
    $$

    where $\{c_n\}$ is any sequence diverging to $\ip$, hence

    $$
    \underbrace{\log n}_{a_n} \thicksim \underbrace{\log \: c_n}_{b_n}
    $$

<a id="box-texexpbox1-7"></a>

!!! esempio "Example 6: Computing limits with the substitution principle and asymptotic estimates"

    We compute the limit

    $$
    \lim_{n \rr \ip} \log_3 (n^2 + 4n +1)
    $$

    using the substitution principle and defining

    $$
    c_n = n^2 + 4n +1 {\rm ~~~we~have~~~} \lim_{n \rr \ip}  n^2 + 4n +1 = \ip
    $$

    then

    $$
    \log_3 n \thicksim \log_3 (n^2 + 4n +1)
    $$

    and hence

    $$
    \lim_{n \rr \ip} \log_3 (n^2 + 4n +1) = \lim_{n \rr \ip} \log_3 n =\ip
    $$

!!! chiave ""

    The fact that the asymptotic relation satisfies the 3 properties:

    1. <em>Reflexive</em>: $a_n \thicksim a_n$

    2. <em>Symmetric</em>: if $a_n \thicksim b_n$ then $b_n \thicksim a_n$

    3. <em>Transitive</em>:  if $a_n \thicksim b_n$  and $b_n \thicksim c_n$ then $a_n \thicksim c_n$

    means that “<strong>asymptotic</strong>” is an <strong>equivalence relation</strong>.
