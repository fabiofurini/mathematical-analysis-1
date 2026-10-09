---
title: "Principle of mathematical induction"
---

# Principle of mathematical induction

<div class="info-capitolo" markdown>

**Exercises · Numbers and logic** · with worked solutions · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-1-numbers.pdf)

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
        \sum_{k=1}^1 k^2 = \frac{1\:(1+1)\:(2\cdot1+1)}{6} \text{ i.e. } 1 = 1
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
        \sum_{k=0}^0 (2\:k+1) = 1^2 \text{ i.e. } 1 = 1
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
        \sum_{k=1}^1 2\:k = 1 \cdot 2 \text{ i.e. } 2 = 2
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
        \sum_{k=1}^1 \frac{k}{2^k} = 2 - \frac{1+2}{2^1} \text{ i.e. } \frac{1}{2} = \frac{1}{2}
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
        |\mathscr{P}(\emptyset)| = 2^0  \text{ i.e. } 1 = 1
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

!!! esercizio "Exercise 6"

    Prove by induction that for every integer $n \ge 1$ the following holds:

    $$
    \sum_{k=1}^{n} k^3 = \frac{n^4 + 2\:n^3 + n^2}{4} = \frac{n^2\:(n+1)^2}{4}
    $$

    (sum of the cubes of the first $n$ natural numbers). Then compute the sum of the cubes of the first $10$, $100$ and $1000$ natural numbers (without zero) and prove that the sum of the cubes of the first $n$ natural numbers equals the square of the sum of the first $n$ natural numbers:

    $$
    \sum_{k=1}^{n} k^3 = \left(\sum_{k=1}^{n} k \right)^2
    $$

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        \sum_{k=1}^1 k^3 = \frac{1+2+1}{4} \text{ i.e. } 1 = 1
        $$

        which is clearly true.

    - <strong>Passo induttivo</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have:

        $$
        \sum_{k=1}^n k^3 = \frac{n^4 + 2\:n^3 + n^2}{4}.
        $$

        Hence we can write:

        \begin{align*}
        \sum_{k=1}^{n+1} k^3 &= \sum_{k=1}^{n} k^3 + (n+1)^3
         =  \frac{n^4 + 2\:n^3 + n^2}{4} + (n+1)^3\\[2ex]
         &=  \frac{n^4 + 2\:n^3 + n^2 + 4\: (n+1)^3}{4} 
          = \frac{n^4 + 2\:n^3 + n^2 + 4\:n^3 + 12\:n^2 + 12\:n + 4}{4}\\[2ex] 
         &= \frac{ n^4 + 6\:n^3 + 13\:n^2 + 12\:n + 4}{4}\\[2ex]
         & =  \frac{(n^4+4\:n^3+6\:n^2+4\:n+1) + 2\:(n^3+3\:n^2+3\:n+1) + (n^2+2\:n+1)}{4} \\[2ex]
         & =  \frac{(n+1)^4 + 2\:(n+1)^3 + (n+1)^2}{4}
        \end{align*}

        which is exactly the desired statement for $n + 1$.

    The sum of the cubes of the first $10$, $100$ and $1000$ natural numbers (without zero) is:

    $$
    \sum_{k=1}^{10} k^3  =  \frac{ 10^4 + 2 \cdot 10^3 + 10^2}{4} = 3025, \qquad
    \sum_{k=1}^{100} k^3  =  \frac{ 100^4 + 2 \cdot 100^3 + 100^2}{4} = 25{,}502{,}500
    $$

    $$
    \sum_{k=1}^{1000} k^3  =  \frac{ 1000^4 + 2 \cdot 1000^3 + 1000^2}{4} = 250{,}500{,}250{,}000
    $$

    Finally, the sum of the cubes of the first $n$ natural numbers equals the square of the sum of the first $n$ natural numbers, since:

    $$
    \sum_{k=1}^{n} k^3 = \frac{n^4 + 2\:n^3 +  n^2}{4}  = \frac{n^2 \: (n^2 + 2\:n +  1)}{4}  = \frac{n^2\:(n+1)^2}{4}= \left(\frac{n\:(n+1)}{2}\right)^2= \left(\sum_{k=1}^{n} k \right)^2
    $$

!!! esercizio "Exercise 7"

    Prove by induction that for every integer $n \ge 1$ the following holds:

    $$
    \sum_{k=1}^n \frac{1}{k\:(k+1)} = \frac{n}{n+1} = 1-\frac{1}{n+1}
    $$

    Then compute the value of the sum for $n=10$, $n=100$ and $n=1000$.

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        \sum_{k=1}^1 \frac{1}{k\:(k+1)} = \frac{1}{1+1} \text{ i.e. } \frac{1}{2} = \frac{1}{2}
        $$

        which is clearly true.

    - <strong>Passo induttivo</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have:

        $$
        \sum_{k=1}^n \frac{1}{k\:(k+1)} = \frac{n}{n+1}.
        $$

        Hence we can write:

        \begin{align*}
        \sum_{k=1}^{n+1} \frac{1}{k\:(k+1)} &= \sum_{k=1}^{n} \frac{1}{k\:(k+1)}  + \frac{1}{(n+1)\:(n+2)} 
        = \frac{n}{n+1} + \frac{1}{(n+1)\:(n+2)} \\[2ex]
        &= \frac{n\:(n+2)+1}{(n+1)\:(n+2)}
         = \frac{n^2 + 2\:n + 1}{(n+1)\:(n+2)}
         = \frac{(n+1)^2}{(n+1)\:(n+2)}
         = \frac{n+1}{(n+1)+1}
        \end{align*}

        which is exactly the desired statement for $n + 1$.

    The value of the sum for $n=10$, $n=100$ and $n=1000$ is:

    $$
    \sum_{k=1}^{10} \frac{1}{k\:(k+1)}  = \frac{10}{11}, \qquad 
    \sum_{k=1}^{100} \frac{1}{k\:(k+1)}  = \frac{100}{101}, \qquad
    \sum_{k=1}^{1000} \frac{1}{k\:(k+1)}  = \frac{1000}{1001}
    $$

!!! esercizio "Exercise 8"

    Prove by induction that for every integer $n \ge 1$ the following holds:

    $$
    \sum_{k=1}^n k\:(k+1) = \frac{2\:n + 3\:n^2 + n^3}{3} = \frac{n\:(n+1)\:(n+2)}{3}
    $$

    Then compute the value of the sum for $n=10$, $n=100$ and $n=1000$.

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        \sum_{k=1}^1 k\:(k+1) = \frac{2+3+1}{3} \text{ i.e. } 2 = 2
        $$

        which is clearly true.

    - <strong>Passo induttivo</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have:

        $$
        \sum_{k=1}^n k\:(k+1) = \frac{2\:n + 3\:n^2 + n^3}{3}.
        $$

        Hence we can write:

        \begin{align*}
        \sum_{k=1}^{n+1} k\:(k+1) &= \sum_{k=1}^{n} k\:(k+1) + (n+1)\:\big((n+1)+1 \big)
        = \frac{2\:n + 3\:n^2 + n^3}{3}  + (n+1)\:(n+2) \\[2ex]
        &=  \frac{2\:n + 3\:n^2 + n^3 + 3\:(n+1)\:(n+2) }{3} 
         =  \frac{n^3 + 6\:n^2 + 11\:n + 6 }{3} \\[2ex]
        & =\frac{2\:(n+1) + 3\:(n^2+2\:n+1) + (n^3 + 3\:n^2 + 3\:n+1)}{3}  \\[2ex]
        & =  \frac{2\:(n+1) + 3\:(n+1)^2 + (n+1)^3}{3}
        \end{align*}

        which is exactly the desired statement for $n + 1$.

    The value of the sum for $n=10$, $n=100$ and $n=1000$ is:

    $$
    \sum_{k=1}^{10} k\:(k+1)  = \frac{10 \cdot 11 \cdot 12}{3} = 440, \qquad 
    \sum_{k=1}^{100} k\:(k+1)  = \frac{100 \cdot 101 \cdot 102}{3} = 343{,}400
    $$

    $$
    \sum_{k=1}^{1000} k\:(k+1) = \frac{1000 \cdot 1001 \cdot 1002}{3} = 334{,}334{,}000
    $$

!!! esercizio "Exercise 9"

    Prove by induction that for every integer $n \ge 1$ the following holds:

    $$
    n ! ~\ge~ 2^{n-1}
    $$

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        1! \ge 2^{1-1} \text{ i.e. } 1 \ge 1
        $$

        which is clearly true.

    - <strong>Passo induttivo</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have $n! \ge 2^{n-1}$. Moreover, for every $n \ge 1$:

        $$
        (n+1)\: 2^{n-1} \ge 2^n ~~\Longleftrightarrow~~ n+1 \ge \frac{2^n}{2^{n-1}} = 2 ~~\Longleftrightarrow~~ n \ge 1
        $$

        Hence we can write:

        \begin{align*}
        (n+1)! &= (n+1)\: n! ~\ge~ (n+1)\: 2^{n-1} ~\ge~ 2^n = 2^{(n+1)-1}
        \end{align*}

        which is exactly the desired statement for $n + 1$.

!!! esercizio "Exercise 10"

    Prove by induction that for every integer $n \ge 1$ the following holds:

    $$
    n^n ~\ge~ 2^{n-1} \: n!
    $$

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        1^1 \ge 2^{1-1} \cdot 1! \text{ i.e. } 1 \ge 1
        $$

        which is clearly true.

    - <strong>Passo induttivo</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have $n^n \ge 2^{n-1} \: n!$. Moreover, for every $n \ge 1$:

        $$
        (n+1)^n \ge 2 \: n^n 
        ~~~\Longleftrightarrow~~~ 
        \left(\frac{n+1}{n}\right)^n \ge 2 
        ~~~\Longleftrightarrow~~~
        \left(1+\frac{1}{n}\right)^n \ge 2
        $$

        and the last inequality holds by Bernoulli's inequality, $(1+x)^m \ge 1 + m\:x$ for every integer $m \ge 0$ and $x \ge -1$: with $x = \frac{1}{n}$ and $m = n$ we get

        $$
        \left(1+\frac{1}{n}\right)^n \ge 1 + n \: \frac{1}{n} = 2
        $$

        Hence we can write:

        \begin{align*}
        (n+1)^{n+1} &= (n+1)\: (n+1)^n 
        ~\ge~ (n+1) \: 2 \: n^n 
        ~\ge~ (n+1) \:  2 \cdot 2^{n-1} \: n! \\[2ex]
        &=  2^n \: (n+1)! 
        = 2^{(n+1)-1} \: (n+1)!
        \end{align*}

        which is exactly the desired statement for $n + 1$.

!!! esercizio "Exercise 11"

    Prove by induction that for every integer $n \ge 1$ the following holds:

    $$
    n! ~\le~ n^{n}
    $$

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        1! \le 1^1 \text{ i.e. } 1 \le 1
        $$

        which is clearly true.

    - <strong>Passo induttivo</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have $n! \le n^n$. Moreover, for every $n \ge 1$:

        $$
        (n+1)^n \ge n^n 
        ~~~\Longleftrightarrow~~~ 
        \left(\frac{n+1}{n}\right)^n \ge 1 
        ~~~\Longleftrightarrow~~~
        \left(1+\frac{1}{n}\right)^n \ge 1
        $$

        and the last inequality is clearly true, since $1+\frac{1}{n} > 1$. Hence we can write:

        \begin{align*}
        (n+1)! &= (n+1)\: n! ~\le~ (n+1)\: n^n ~\le~ (n+1)\: (n+1)^n = (n+1)^{n+1}
        \end{align*}

        which is exactly the desired statement for $n + 1$.

!!! esercizio "Exercise 12"

    Prove by induction that for every integer $n \ge 0$ the natural number $10^n -1$ is divisible by $9$, that is:

    $$
    \forall n \in \N, ~\exists m \in \N ~:~~ 10^n -1 = 9\: m
    $$

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 0$. Then:

        $$
        10^0 -1 = 0 = 9 \cdot 0
        $$

        and, since $0$ is a natural number, the statement is true.

    - <strong>Passo induttivo</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, there exists $m \in \N$ such that $10^n - 1 = 9\: m$. Hence we can write:

        \begin{align*}
        10^{n+1} -1 &= 10 \cdot 10^{n} -1 
        = 10 \cdot 10^{n} -10 + 9 
        = 10 \: \big( 10^{n} -1 \big) + 9\\[2ex] 
        &= 10 \: \big( 9\:m \big) + 9 
        = 9\: \big( 10\:m +1 \big)
        \end{align*}

        and, since $10\:m +1$ is a natural number, the statement is true for $n + 1$.

!!! esercizio "Exercise 13"

    Prove by induction that for every integer $n \ge 1$ the natural number $n \: (n+1)$ is divisible by $2$, that is:

    $$
    \forall n \in \N, ~n \ge 1, ~\exists m \in \N ~:~~ n \: (n+1)= 2\: m
    $$

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 1$. Then:

        $$
        1\: (1+1) = 2 = 2 \cdot 1
        $$

        and, since $1$ is a natural number, the statement is true.

    - <strong>Passo induttivo</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, there exists $m \in \N$ such that $n\:(n+1) = 2\: m$. Hence we can write:

        \begin{align*}
        (n+1) \: \big(( n+1) +1\big) &= (n +1) \: (n +2) 
         = n^2 + n + 2\: n +2
         = n \: (n+1)+ 2\: n +2\\[2ex]
        &= 2\: m + 2\: n +2 
        = 2 \: \big( m + n + 1 \big)
        \end{align*}

        and, since $m + n + 1$ is a natural number, the statement is true for $n + 1$.

!!! esercizio "Exercise 14"

    Prove by induction that for every integer $n \ge 2$ the natural number $n^3 - n$ is divisible by $6$, that is:

    $$
    \forall n \in \N, ~n \ge 2, ~\exists m \in \N ~:~~ n^3 - n= 6\: m
    $$

    (hint: use the previous exercise).

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 2$. Then:

        $$
        2^3 -2 = 6 = 6 \cdot 1
        $$

        and, since $1$ is a natural number, the statement is true.

    - <strong>Passo induttivo</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, there exists $m \in \N$ such that $n^3 - n = 6\: m$. Moreover, by the previous exercise, $n\:(n+1)$ is even: there exists $h \in \N$ such that $n\:(n+1) = 2\:h$. Hence we can write:

        \begin{align*}
        (n+1)^3 - (n+1) &= n^3 +3\:n^2 +3\:n+1-n-1 
        = (n^3 - n) + (3\:n^2 + 3\:n) \\[2ex]
        &= 6\: m + 3\: n \: (n+1)
        = 6\: m + 3 \cdot 2 \: h
        = 6\: \big( m + h \big)
        \end{align*}

        and, since $m + h$ is a natural number, the statement is true for $n + 1$.

!!! esercizio "Exercise 15"

    Prove by induction that for every integer $n \ge 0$ and every $x \in \R$, $x \ge -\frac{2}{3}$, the following holds:

    $$
    (1+x) \: e^n ~\ge~ \frac{1}{n+3}
    $$

??? soluzione "Solution"

    By induction on $n$.

    - <strong>Base case</strong>

        Let $n = 0$. Then the statement becomes:

        $$
        (1+x)\:e^0 \ge \frac{1}{0+3} \text{ i.e. } x \ge -\frac{2}{3}
        $$

        which is true by hypothesis.

    - <strong>Passo induttivo</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have $(1+x) \: e^n \ge \frac{1}{n+3}$. Hence, since $e > 1$, we can write:

        \begin{align*}
        (1+x) \: e^{n+1} &= e \: \big( (1+x) \: e^{n} \big)
        ~\ge~ \frac{e}{n+3} 
        ~\ge~ \frac{1}{n+3} 
        ~\ge~ \frac{1}{(n+1)+3}
        \end{align*}

        which is exactly the desired statement for $n + 1$.
