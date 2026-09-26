---
title: "Principle of mathematical induction"
---

# Principle of mathematical induction

<div class="info-capitolo" markdown>

**Exercises · Numbers and logic** · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-numbers-04-induction.pdf)

</div>

!!! esercizio "Exercise 1"

    Prove by induction that for every integer $n \ge 1$ the following holds:

    \begin{align*}
    \sum_{k=1}^{n} k^2 &= \frac{n\:(n+1)\:(2\:n+1)}{6}
    \end{align*}

    (sum of the squares of the first $n$ natural numbers)

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        \sum_{k=1}^1 k^2 = \frac{1\:(1+1)\:(2\cdot1+1)}{6} \text{ ~~ i.e.  ~~} 1 = 1
        $$

        which is clearly true.

    - <strong>Inductive step</strong>

        Assume that it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have:

        $$
        \sum_{k=1}^n k^2 = \frac{n\:(n+1)\:(2\:n+1)}{6}.
        $$

        Hence we can write:

        \begin{align*}
        \sum_{k=1}^{n+1} k^2 &= \sum_{k=1}^{n} k^2 + (n+1)^2\\[2ex]
        &=  \frac{n\:(n+1)\:(2\:n+1)}{6} + (n+1)^2
         =  \frac{n\:(n+1) (2\:n+1) + 6\: (n+1)^2}{6} \\[2ex]
        & =  \frac{(n+1) \big( n\:(2\:n+1) + 6\: (n+1) \big) }{6} 
        =  \frac{(n+1) \big( 2\:n^2 + n + 6\:n +6 \big) }{6} \\[2ex]
        & =  \frac{(n+1) \big( 2\:n^2 + 4\:n + 3\:n +6 \big) }{6} 
         =  \frac{(n+1) \big( (2\:n) (n + 2) + 3 (n + 2) \big) }{6} \\[2ex]
        & =  \frac{(n+1)\:(n+2)\:\big(2\:n+3 \big)}{6}
         =  \frac{(n+1)\:(n+1+1)\:\big(2\:(n+1)+1\big)}{6}
        \end{align*}

        which is exactly the desired statement for $n + 1$.

!!! esercizio "Exercise 2"

    Prove by induction that for every integer $n \ge 1$ the following holds:

    $$
    \sum_{k=0}^{n-1} (2\:k+1) = n^2 {\rm ~~~~~or~~~~~} \sum_{k=1}^{n} (2\:k-1) = n^2
    $$

    (sum of the first $n$ odd numbers)

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        \sum_{k=0}^0 (2\:k+1) = 1^2 \text{ ~~ i.e.  ~~} 1 = 1
        $$

        which is clearly true.

    - <strong>Inductive step</strong>

        Assume that it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have:

        $$
        \sum_{k=0}^{n-1} (2\:k+1) = n^2
        $$

        Hence we can write:

        \begin{align*}
        \sum_{k=0}^{n-1+1} (2\:k+1)&= \sum_{k=0}^{n-1} (2\:k+1) + 2\:n +1\\[2ex]
        & =  n^2 + 2\:n +1\\[2ex]
        & =  (n+1)^2
        \end{align*}

        which is exactly the desired statement for $n + 1$.

!!! esercizio "Exercise 3"

    Prove by induction that for every integer $n \ge 1$ the following holds:

    $$
    \sum_{k=1}^{n} 2\:k = n \:(n+1)
    $$

    (sum of the first $n$ even numbers)

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        \sum_{k=1}^1 2\:k = 1 \cdot 2 \text{ ~~ i.e.  ~~} 2 = 2
        $$

        which is clearly true.

    - <strong>Inductive step</strong>

        Assume that it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have:

        $$
        \sum_{k=1}^{n} 2\:k = n\: (n+1)
        $$

        Hence we can write:

        \begin{align*}
        \sum_{k=1}^{n+1} 2\:k&= \sum_{k=1}^{n} 2\:k  + 2\: (n+1) \\[2ex]
        &= 2\: \left(\sum_{k=1}^{n} k  + (n+1)\right) \\[2ex]
        & = 2\: \left( \frac{n \: (n+1)}{2} + (n+1)\right)\\[2ex]
        & = 2\: \left( \frac{n \: (n+1) + 2\: (n+1)}{2} \right)\\[2ex]
        & =   (n+1) \:(n+2)  =   (n+1) \:(n+1 +1 )
        \end{align*}

        which is exactly the desired statement for $n + 1$.

!!! esercizio "Exercise 4"

    Prove by induction that for every integer $n \ge 1$ the following holds:

    $$
    \sum_{k=1}^n \frac{k}{2^k}=2-\frac{n+2}{2^n}
    $$

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        \sum_{k=1}^1 \frac{k}{2^k} = 2 - \frac{1+2}{2^1} \text{ ~~ i.e.  ~~} \frac{1}{2} = \frac{1}{2}
        $$

        which is clearly true.

    - <strong>Inductive step</strong>

        Assume that it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have:

        $$
        \sum_{k=1}^n \frac{k}{2^k}=2-\frac{n+2}{2^n}
        $$

        Hence we can write:

        \begin{align*}
        \sum_{k=1}^{n+1} \frac{k}{2^k}&= \sum_{k=1}^{n} \frac{k}{2^k}  + \frac{n+1}{2^{n+1}} \\[2ex]
        &= 2-\frac{n+2}{2^n}   + \frac{n+1}{2^{n+1}} \\[2ex]
        &= 2-\frac{2\;(n+2)}{2^{n+1}}   + \frac{n+1}{2^{n+1}} \\[2ex]
        &= 2- \left( \frac{2\;(n+2) - n-1}{2^{n+1}} \right) \\[2ex]
        &= 2- \left( \frac{n+3}{2^{n+1}} \right) \\[2ex]
        & =   2-\frac{(n+1)+2}{2^{n+1}}
        \end{align*}

        which is exactly the desired statement for $n + 1$.

!!! esercizio "Exercise 5"

    Given a set $X$ with $n$ elements, prove by induction that the power set $\mathscr{P}(X)$ has $2^n$ elements, that is,

    $$
    |\mathscr{P}(X)|=2^n {\rm ~~~for~~~} n \ge 0
    $$

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 0$.  A set with 0 elements is the empty set ($\emptyset$). The power set of the empty set contains only the empty set as an element.  Then the statement becomes:

        $$
        |\mathscr{P}(\emptyset)| = 2^0  \text{ ~~ i.e.  ~~} 1 = 1
        $$

        which is clearly true.

    - <strong>Inductive step</strong>

        Assume the statement is true for a set of $n$ elements, and let us prove it for a set of $(n + 1)$ elements. By the inductive hypothesis, the power set of a set of $n$ elements has $2^n$ elements.

        A set $Y$ of $(n + 1)$ elements can be written as:

        $$
        Y = \{a_1,a_2,\dots,  a_{n},a_{n+1} \}
        $$

        hence:

        $$
        \mathscr{P}(Y)=  \big\{S: S \subseteq Y \big\} = \big\{S: S \subseteq   \{a_1,a_2,\dots,  a_{n},a_{n+1} \} \big\}
        $$

        The subsets of $Y$ either contain the element $a_{n+1}$ or do not contain it. We therefore define the set $Z_a$ formed by the first $n$ elements of $Y$:

        $$
        Z_a = \{a_1,a_2,\dots,  a_{n} \} {\rm ~~~~hence~~~~} |\mathscr{P}(Z_a)|=2^n
        $$

        We now define the following set $Z_b$:

        $$
        Z_b ~=~ \big\{S \cup \{a_{n+1}\} : S \subseteq \underbrace{\{a_1,a_2,\dots,  a_{n} \}}_{=Z_a}  \big\} ~=~  \big\{S \cup \{a_{n+1}\} : S \subseteq Z_a \big\}{\rm ~~and~~} |Z_b|=2^n
        $$

        since $Z_b$ has one element for each element of $\mathscr{P}(Z_a)$.

        In other words, $\mathscr{P}(Z_a)$ contains all the subsets of $Y$ in which the element $a_{n+1}$ is not present, while $Z_b$ contains all the subsets of $Y$ in which the element $a_{n+1}$ is present.

        We also note that the sets $\mathscr{P}(Z_a)$ and $Z_b$ are disjoint, that is: $\mathscr{P}(Z_a) \cap Z_b = \emptyset$.  Hence $|\mathscr{P}(Z_a) \cup Z_b|=|\mathscr{P}(Z_a)| + |Z_b|$. Finally, we have:

        $$
        |\mathscr{P}(Y)| = |\mathscr{P}(Z_a) \cup Z_b| = 2^n+2^n= 2^{n+1}
        $$

        which is exactly the desired statement for $n + 1$.
