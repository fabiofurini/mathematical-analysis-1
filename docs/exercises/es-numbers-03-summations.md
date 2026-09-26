---
title: "Summations"
---

# Summations

<div class="info-capitolo" markdown>

**Exercises · Numbers and logic** · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-numbers-03-summations.pdf)

</div>

!!! esercizio "Exercise 1"

    Prove, using the properties of summations, that for every integer $n \ge 1$ we have:

    $$
    \sum_{k=1}^{n} k^2 = \frac{n\:(n+1)\:(2\:n+1)}{6}
    $$

    (sum of the squares of the first $n$ natural numbers, excluding zero).

??? soluzione "Solution"

    We start by writing the sum $\sum_{k=0}^n (k+1)^3$ in two different ways:

    \begin{align*}
    1)~~~\sum_{k=0}^n (k+1)^3 &=\sum_{k=0}^n(k^3+3\:k^2+3\:k+1)\\[2ex]
    &= \left( \sum_{k=1}^n k^3 + 3\: \sum_{k=1}^n k^2 + 3\: \sum_{k=1}^n k + \sum_{k=1}^n 1 \right)  +1 \\[2ex]
    &=\sum_{k=1}^n k^3 + 3\: \sum_{k=1}^n k^2 + \frac{3\:n\:(n+1)}{2} +n +1\\[5ex]
    2)~~~ \sum_{k=0}^n (k+1)^3&=\sum_{k=1}^{n+1} k^3=\sum_{k=1}^n k^3 + (n+1)^3
    \end{align*}

    Equating the two expressions and canceling the sum with $k^3$, we obtain:

    $$
    3\: \sum_{k=1}^n k^2 + \frac{3\:n\:(n+1)}{2} +n +1=   (n+1)^3
    $$

    Isolating the sum with $k^2$, we obtain:

    \begin{align*}
    3\: \sum_{k=1}^n k^2 &= (n+1)^3 - \frac{3\:n\:(n+1)}{2} -n -1 \\[2ex]
     &= n^3 + 3n^2 +3n+1 - \frac{3n^2+3n}{2} -n -1\\[2ex]
       &= \frac{2n^3 + 3n^2 + n}{2}
    \end{align*}

    Hence:

    \begin{align*}
    \sum_{k=1}^n k^2 &= \frac{2n^3 + 3n^2 + n}{6} = \frac{n\:(n+1)\:(2\:n+1)}{6}
    \end{align*}

!!! esercizio "Exercise 2"

    Prove, using the properties of summations, that for every integer $n \ge 1$ we have:

    $$
    \sum_{k=1}^{n} k^3 = \frac{n^2\:(n+1)^2}{4}
    $$

    (sum of the cubes of the first $n$ natural numbers, excluding zero). That is, we have:

    $$
    \sum_{k=1}^{n} k^3 = 	\frac{n^2\:(n+1)^2}{4} = \left(\frac{n\:(n+1)}{2}\right)^2= \left(\sum_{k=1}^{n} k \right)^2
    $$

    and hence the sum of the cubes is equal to the square of the sum of the natural numbers.

??? soluzione "Solution"

    We start by writing the following sum in two different ways: $\sum_{k=0}^n (k+1)^4$.

    \begin{align*}
    1)~~~\sum_{k=0}^n (k+1)^4 &=\sum_{k=0}^n(k^4+4\:k^3+6\:k^2+4\:k+1)\\[2ex]
    &= \left( \sum_{k=1}^n k^4 + 4\: \sum_{k=1}^n k^3 + 6\: \sum_{k=1}^n k^2 + 4\: \sum_{k=1}^n k + \sum_{k=1}^n 1 \right) +1 \\[2ex]
    &=\sum_{k=1}^n k^4 + 4\: \sum_{k=1}^n k^3 +  n\:(n+1)\:(2\:n+1) + 2\:n\:(n+1) +n +1\\[2ex]
    &=\sum_{k=1}^n k^4 + 4\: \sum_{k=1}^n k^3 + 2n^3 + 5n^2 +4n +1\\[2ex] 
    2)~~~ \sum_{k=0}^n (k+1)^4&=\sum_{k=1}^{n+1} k^4=\sum_{k=1}^n k^4 + (n+1)^4
    \end{align*}

    Equating the two expressions and canceling the sum with $k^4$, we obtain:

    $$
    4\: \sum_{k=1}^n k^3 + 
    2n^3 + 5 n^2 +4n +1  =   (n+1)^4
    $$

    Isolating the sum with $k^3$, we obtain:

    \begin{align*}
    4\: \sum_{k=1}^n k^3 &= n^4 + 4n^3 +6n^2 + 4n +1  - 
    2n^3 - 5 n^2 -4n -1 =  n^4 + 2n^3 +  n^2
    \end{align*}

    Hence:

    \begin{align*}
    \sum_{k=1}^n k^3 & = \frac{n^4 + 2n^3 +  n^2}{4}  = \frac{n^2\:(n+1)^2}{4}
    \end{align*}
