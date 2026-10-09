---
title: "Principle of mathematical induction"
---

# Principle of mathematical induction

<div class="info-capitolo" markdown>

**Part 1 · Numbers and logic · Chapter 8** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-1-numbers.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-numbers-08-induction.pdf)

</div>

## 1. The principle of mathematical induction

- We now present a proof technique called proof by induction. This procedure can be applied to theorems with the following structure:

    “ for every $n \in \N$, $n \ge n_0$, property $p (n)$ holds ”

- The number $n_0$ is the smallest integer for which we want the property to be true; if $n_0 = 0$ the theorem simply states that the property is true for every $n \in \N$.

    !!! chiave ""

        A proof by induction consists of the following two steps:

        1. We prove that $p (n)$ is true for $n = n_0$ (<strong>base case of the induction</strong>).

        2. We prove that, if n is an arbitrary natural number $\ge n_0$, the fact that $p(n)$ is true implies that $p( n + 1)$ is true (<strong>inductive step</strong>).

        We can then conclude that for every $n \ge n_0$, $p (n)$ is true.

- The validity of this proof technique, <em>intuitively</em>, is based on the following fact:

    1. By point 1, we know that $p (n_0)$ is true. Suppose for example $n_0 = 1$: we therefore know that $p(1)$ is true (this must be proved explicitly).

    2. By point $2$, since $p(1)$ is true, $p (2)$ will be true: indeed, we have proved that for any $n$, if $p ( n)$ is true then $p ( n + 1)$ is also true. But then, since $p (2)$ is true, $p (3)$ will be true; but then $p (4)$ is true, … and so on, hence $p (n)$ is true for every $n \ge 1$.

- In practice, the proof consists of two phases.

    1. Prove $p (n_0)$ directly;

    2. Assume $p (n)$ as a hypothesis (<strong>inductive hypothesis</strong>) and prove $p (n + 1)$.

- This is the delicate point, often subject to misunderstandings. “Assuming as a hypothesis” $p (n)$ does not mean assuming the thesis as a hypothesis. What must be proved is that:

    “ for every $n \ge n_0$, if $p( n)$ is true then $p (n + 1)$ is also true ”

    and not

    “ if $p (n)$ is true for every $n$, then $p (n + 1)$ is also true”

## 2. Proofs based on the principle of mathematical induction

### 2.1 Bernoulli's inequality

<a id="box-notationA-1"></a>

!!! osservazione "Remark 1: Bernoulli's inequality"

    For every integer $n \ge 0$, $x \in \R$, $x \ge -1$, we have:

    \begin{equation}
    \label{BERNOULLI}
    (1+x)^n \ge 1 + n\: x
    \end{equation}

??? dimostrazione "Proof"

    By induction on $n$.

    - <strong>Base case of the induction</strong>

        Let $n = 0$. Then the statement becomes:

        $$
        (1+x)^0 \ge 1 + 0\: x \text{ i.e. } 1 \ge 1
        $$

        which is clearly true.

    - <strong>Inductive step</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have:

        $$
        (1+x)^n \ge 1 + n\: x
        $$

        and moreover we have

        $$
        (1+x) \ge 0 {\rm~~~since~~~} x \ge -1.
        $$

        Then we can write:

        \begin{align*}
        (1+x)^{n+1} &= (1+x) \cdot (1+x)^{n} \\[2ex] 
         &\ge (1+x) \cdot  (1 + n\: x)  \\[2ex]
         &= 1 + (n+1)\: x + n\: x^2 \\[2ex] 
         &\ge 1 + (n+1) \: x
        \end{align*}

        where in the last inequality we used the fact that $n\:x^2 \ge 0$.

        The chain of inequalities shows that, for $n + 1$, we have

        $$
        (1 + x)^{n+1} \ge 1 + (n + 1) \: x
        $$

        which is exactly the desired statement, for $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-texexpbox1-2"></a>

!!! esempio "Example 1: Bernoulli's inequality"

    <div class="figure-affiancate" markdown>

    ![Figure 1](../img/numbers-08-induction/fig01.svg){ .fig .ovale loading=lazy style="width:91%" }

    ![Figure 2](../img/numbers-08-induction/fig02.svg){ .fig .ovale loading=lazy style="width:91%" }

    </div>

    <div class="figure-affiancate" markdown>

    ![Figure 3](../img/numbers-08-induction/fig03.svg){ .fig .ovale loading=lazy style="width:91%" }

    ![Figure 4](../img/numbers-08-induction/fig04.svg){ .fig .ovale loading=lazy style="width:91%" }

    </div>

### 2.2 Some important summations

<a id="box-propSUM-3"></a>

!!! osservazione "Remark 2: sum of the first $n$ natural numbers"

    For every integer $n \ge 1$, we have:

    $$
    \sum_{k=1}^{n} k = \frac{n \: (n+1)}{2}
    $$

??? dimostrazione "Proof"

    By induction on $n$.

    - <strong>Base case of the induction</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        \sum_{k=1}^1 k = \frac{1\:(1+1)}{2} \text{ i.e. } 1 = 1
        $$

        which is clearly true.

    - <strong>Inductive step</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have:

        $$
        \sum_{k=1}^n k = \frac{n\:(n+1)}{2}.
        $$

        Hence we can write:

        \begin{align*}
        \sum_{k=1}^{n+1} k &= \sum_{k=1}^{n} k + (n+1) \\[2ex]
        &=  \frac{n\:(n+1)}{2} + (n+1) \\[2ex]
        &=  \frac{n\:(n+1) + 2\:(n+1)}{2} \\[2ex]
        & =  \frac{(n+1)\:( n  + 2 )}{2}  =  \frac{(n+1)\:\big(( n+1) +1\big)}{2}
        \end{align*}

        which is exactly the desired statement, for $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-propODD-4"></a>

!!! osservazione "Remark 3: sum of the first $n$ odd numbers"

    For every integer $n \ge 1$, we have:

    $$
    \sum_{k=0}^{n-1} (2\:k+1) = n^2 {\rm ~~~~~or~equivalently~~~~} \sum_{k=1}^{n} (2\:k-1) = n^2
    $$

??? dimostrazione "Proof"

    By induction on $n$.

    - <strong>Base case of the induction</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        \sum_{k=0}^0 (2\:k+1) = 1^2 \text{ i.e. } 1 = 1
        $$

        which is clearly true.

    - <strong>Passo induttivo</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have:

        $$
        \sum_{k=0}^{n-1} (2\:k+1) = n^2
        $$

        Hence we can write:

        \begin{align*}
        \sum_{k=0}^{(n+1)-1} (2\:k+1)&= \sum_{k=0}^{n-1} (2\:k+1) + 2\:n +1
         =  n^2 + 2\:n +1
         =  (n+1)^2
        \end{align*}

        which is exactly the desired statement, for $n + 1$.

    The second sum coincides with the first one, by an index shift ($k \to k+1$):

    $$
    \sum_{k=1}^{n} (2\:k-1) = \sum_{k=0}^{n-1} \big(2\:(k+1)-1\big) = \sum_{k=0}^{n-1} (2\:k+1)
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-propEVEN-5"></a>

!!! osservazione "Remark 4: sum of the first $n$ even numbers"

    For every integer $n \ge 1$, we have:

    $$
    \sum_{k=1}^{n} 2\:k = n \:(n+1)
    $$

??? dimostrazione "Proof"

    By induction on $n$.

    - <strong>Base case of the induction</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        \sum_{k=1}^1 2\:k = 1 \cdot 2 \text{ i.e. } 2 = 2
        $$

        which is clearly true.

    - <strong>Passo induttivo</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have:

        $$
        \sum_{k=1}^{n} 2\:k = n\: (n+1)
        $$

        Hence we can write:

        \begin{align*}
        \sum_{k=1}^{n+1} 2\:k&= \sum_{k=1}^{n} 2\:k  + 2\: (n+1) 
        = n^2 + n + 2\: (n+1) \\[2ex]
        & = n^2+2\:n+1+n+1
         = (n+1)^2 + (n+1) =   (n+1) \:\big((n+1) +1 \big)
        \end{align*}

        which is exactly the desired statement, for $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

### 2.3 Sum of the terms of the geometric progression

<a id="box-propXX-6"></a>

!!! osservazione "Remark 5: sum of the first $n$ terms of the geometric progression ($a=1$)"

    Given $q \in\ \R_+$, for every integer $n \ge 1$ we have:

    \begin{equation}
    \label{GEOM}
    \sum_{k=1}^{n} q^{k-1} = 
    \begin{cases}
    \frac{q^{n}-1}{q-1} & {\rm ~~~if~~~~}  q \neq 1\\[2ex]
    n & {\rm ~~~otherwise} 
    \end{cases}
    \end{equation}

??? dimostrazione "Proof"

    By induction on $n$.

    - <strong>Base case of the induction</strong>

        Let $n = 1$. Then the statement becomes:

        $$
        \sum_{k=1}^{1} q^{k-1}  = \frac{q^1-1}{q-1} \text{ i.e. } 1 = 1
        $$

        which is clearly true.

    - <strong>Inductive step</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, we have:

        $$
        \sum_{k=1}^{n} q^{k-1} = \frac{q^n-1}{q-1}
        $$

        Hence we can write

        \begin{align*}
        \sum_{k=1}^{n+1} q^{k-1}&= \sum_{k=1}^{n} q^{k-1} + q^n =  \frac{q^n-1}{q-1} + q^n\\[2ex]
        & =  \frac{q^n-1+q^{n+1}-q^n}{q-1} =  \frac{q^{n+1}-1}{q-1}
        \end{align*}

        which is exactly the desired statement, for $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

### 2.4 Inequality of arithmetic and geometric means

<a id="box-propAMGM-7"></a>

!!! osservazione "Remark 6: inequality of arithmetic and geometric means"

    For every integer $n \ge 2$ and every vector \(\boldsymbol{a}=\begin{pmatrix} a_1, a_2, \dots, a_n \end{pmatrix} \in \R_{\ge 0}^n\), we have:

    \begin{equation}
    \label{AMGM}
    \frac{\sum_{i=1}^n a_i}{n} ~~\geq~~ \sqrt[n]{\prod_{i=1}^n a_i}
    \end{equation}

- The inequality \(\eqref{AMGM}\) states that the <em>arithmetic mean</em> is greater than or equal to the <em>geometric mean</em>.

- If $a_i=a$ for every $i \in \{1,2,\dots,n\}$, we have:

    $$
    \frac{\sum_{i=1}^n a_i}{n} ~~=~~ \frac{n\;a}{n} ~~=~~ a \qquad \text{and} \qquad \sqrt[n]{\prod_{i=1}^n a_i} ~~=~~ \sqrt[n]{ a^n}  ~~=~~ a
    $$

    and the arithmetic mean and the geometric mean are equal (this is the only case in which equality holds).

??? dimostrazione "Proof"

    By induction on $n$.

    - <strong>Base case of the induction</strong>

        Let $n = 2$. Since both sides are non-negative, we can square them:

        \begin{align*}
        \frac{a_1 + a_2}{2} ~\geq~ \sqrt{a_1 \: a_2}
        &~~~~\Longleftrightarrow~~~~
        \left(\frac{a_1 + a_2}{2}\right)^2 ~\geq~ a_1 \: a_2
        ~~~~\Longleftrightarrow~~~~
        \frac{a_1^2 + 2\:a_1 \: a_2 + a_2^2}{4} ~\geq~ a_1 \: a_2\\[2ex]
        &~~~~\Longleftrightarrow~~~~
        a_1^2 - 2\:a_1 \: a_2 + a_2^2 ~\geq~ 0 ~~~~\Longleftrightarrow~~~~
        (a_1 - a_2)^2 ~\geq~ 0
        \end{align*}

        which is clearly true.

    - <strong>Inductive step</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis, the arithmetic mean of $n$ non-negative real numbers is greater than or equal to their geometric mean. We need to prove that:

        \begin{equation}
        \label{AMGM_A}
        \tag{A}
        \frac{\sum_{i=1}^{n+1} a_i}{n+1} ~~\geq~~ \sqrt[n+1]{\prod_{i=1}^{n+1} a_i}
        \end{equation}

        Let $\alpha$ be the arithmetic mean of the $n+1$ non-negative real numbers:

        \begin{equation}
        \label{AMGM_B} \tag{B}
        \alpha = \frac{\sum_{i=1}^{n+1} a_i}{n+1}
        \end{equation}

        If \( a_i = \alpha \) for every $i \in \{1,2,\dots,n+1\}$, then \(\eqref{AMGM_A}\) holds with equality. Otherwise, there is at least one value greater than $\alpha$ and at least one value smaller than $\alpha$. Without loss of generality, we reorder the values so that:

        $$
        a_n > \alpha \quad \text{ and } \quad a_{n+1} < \alpha
        $$

        Then we have:

        \begin{equation}
        \label{AMGM_C} \tag{C}
        a_n - \alpha > 0  \quad \text{ and } \quad \alpha - a_{n+1} > 0 ~~~\Longrightarrow~~~  (a_n - \alpha) \; (\alpha - a_{n+1}) > 0
        \end{equation}

        From \(\eqref{AMGM_B}\) we have:

        $$
        (n+1) \; \alpha = \sum_{i=1}^{n+1} a_i ~~~~\Longleftrightarrow~~~~ n\; \alpha = \sum_{i=1}^{n-1} a_i + 
        \underbrace{ a_n + a_{n+1} -\alpha}_{=\,y }
        ~~~~\Longleftrightarrow~~~~  \alpha = \frac{\sum_{i=1}^{n-1} a_i + y}{n}
        $$

        where $y = a_n + a_{n+1} - \alpha \ge a_n - \alpha > 0$, since $a_{n+1} \ge 0$. Hence $\alpha$ is also the arithmetic mean of the $n$ non-negative numbers $a_1,a_2,\dots,a_{n-1}$ and $y$. By the inductive hypothesis, $\alpha^n \ge \left(\prod_{i=1}^{n-1} a_i \right) y$, and therefore:

        \begin{equation}
        \label{AMGM_D} \tag{D}
        \alpha^{n+1} = \alpha^{n} \; \alpha \ge \left(\prod_{i=1}^{n-1} a_i \right) y \; \alpha
        \end{equation}

        From \(\eqref{AMGM_C}\) it follows that:

        $$
        (a_n - \alpha) \; (\alpha - a_{n+1}) = (\underbrace{ a_n + a_{n+1} -\alpha}_{=\,y}) \; \alpha - a_{n} \; a_{n+1} > 0
        $$

        and therefore:

        \begin{equation}
        \label{AMGM_E} \tag{E}
        y \; \alpha > a_{n} \; a_{n+1}
        \end{equation}

        Substituting \(\eqref{AMGM_E}\) into \(\eqref{AMGM_D}\) (the product $\prod_{i=1}^{n-1} a_i$ is non-negative), we obtain:

        $$
        \alpha^{n+1} \ge \prod_{i=1}^{n+1} a_i ~~~~\Longleftrightarrow~~~~ \frac{\sum_{i=1}^{n+1} a_i}{n+1} ~~\ge~~ \sqrt[n+1]{\prod_{i=1}^{n+1} a_i}
        $$

        that is, \(\eqref{AMGM_A}\), which is exactly the desired statement, for $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

### 2.5 Fibonacci sequence

- The <strong>Fibonacci sequence</strong> is defined by the following two initial values and recurrence relation:

    \begin{equation}
    \label{FIBONACCI}
    F_0 = 0, \qquad F_1 = 1, \qquad F_n = F_{n-1} + F_{n-2} \quad \text{for every integer } n \ge 2.
    \end{equation}

- The first terms are $0,~ 1,~ 1,~ 2,~ 3,~ 5,~ 8,~ 13,~ 21,~ 34, \dots$: each term is the sum of the two preceding ones.

- The two solutions of the equation $x^2 - x - 1 = 0$ are called the <strong>golden ratio</strong> $\phi$ and the <strong>conjugate of the golden ratio</strong> $\hat{\phi}$:

    $$
    \phi = \frac{1 + \sqrt{5}}{2} \qquad {\rm ~~and~~} \qquad \hat{\phi} = \frac{1 - \sqrt{5}}{2}
    $$

    Since they are solutions of $x^2 = x+1$, the following two equalities hold:

    \begin{equation}
    \label{FIBONACCI_PHI}
    \phi^2 = \phi + 1 \qquad {\rm ~~and~~} \qquad \hat{\phi}^2 = \hat{\phi} + 1
    \end{equation}

- The following proposition gives a closed formula for $F_n$: the $n$-th term can be computed directly, without going through all the preceding terms.

<a id="box-propFIB-8"></a>

!!! osservazione "Remark 7: closed formula of the Fibonacci sequence"

    For every integer $n \ge 0$, we have:

    \begin{equation}
    \label{BINET}
    F_n = \frac{\phi^n - \hat{\phi}^n }{\sqrt{5}}
    \end{equation}

??? dimostrazione "Proof"

    By induction on $n$. Since the recurrence relation links $F_{n+1}$ to the <strong>two</strong> preceding terms, the base case of the induction checks the statement for $n=0$ and for $n=1$, and the inductive step assumes it true for $n$ and for $n-1$.

    - <strong>Base case of the induction</strong>

        Let $n = 0$ and $n = 1$. Then the statement becomes:

        $$
        F_0  = \frac{\phi^0 - \hat{\phi}^0 }{\sqrt{5}} = \frac{1 - 1 }{\sqrt{5}} = 0
        \qquad {\rm ~~and~~} \qquad
        F_1  = \frac{\phi^1 - \hat{\phi}^1 }{\sqrt{5}} = \frac{\frac{1 + \sqrt{5}}{2} - \frac{1 - \sqrt{5}}{2}}{\sqrt{5}} = \frac{\sqrt{5}}{\sqrt{5}} = 1
        $$

        which is clearly true.

    - <strong>Inductive step</strong>

        Suppose it is true for $n$ and for $n-1$, with $n \ge 1$, and let us prove it for $(n + 1)$. By the definition of the Fibonacci sequence we have $F_{n+1} = F_{n} + F_{n-1}$, while by the inductive hypothesis we have:

        $$
        F_{n}  = \frac{\phi^n - \hat{\phi}^n }{\sqrt{5}} {\rm ~~~~~and~~~~~} F_{n-1}  = \frac{\phi^{n-1} - \hat{\phi}^{n-1} }{\sqrt{5}}
        $$

        Hence we can write:

        \begin{align*}
        F_{n+1} & = F_{n} + F_{n-1}
         = \frac{\phi^n - \hat{\phi}^n }{\sqrt{5}} + \frac{\phi^{n-1} - \hat{\phi}^{n-1} }{\sqrt{5}}\\[2ex]
        & = \frac{\big(\phi^n + \phi^{n-1}\big) - \big(\hat{\phi}^n  + \hat{\phi}^{n-1}\big)}{\sqrt{5}}
         = \frac{\phi^{n-1} \big(\phi + 1\big) - \hat{\phi}^{n-1} \big(\hat{\phi}  + 1\big)}{\sqrt{5}}\\[2ex]
        & = \frac{\phi^{n-1} \; \phi^2 - \hat{\phi}^{n-1} \; \hat{\phi}^2}{\sqrt{5}}
         = \frac{\phi^{n+1} - \hat{\phi}^{n+1}}{\sqrt{5}}
        \end{align*}

        where in the second-to-last equality we used the relations \(\eqref{FIBONACCI_PHI}\). This is exactly the desired statement, for $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

- The Fibonacci sequence is studied in more detail in the chapter “Fibonacci sequence”.
