---
title: "Factorials, binomial coefficients and triangle inequality"
---

# Factorials, binomial coefficients and triangle inequality

<div class="info-capitolo" markdown>

**Part 1 · Numbers and logic · Chapter 9** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-1-numbers.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-numbers-09-factorials-binomials.pdf)

</div>

## 1. Factorials

<a id="box-notationA-1"></a>

!!! definizione "Definition 1: factorial of $n$"

    The factorial of $n$ is the product of the first $n$  positive integers. It is denoted by $n!$ and is read “$n$ factorial”. In formulas:

    $$
    n! = \prod_{k=1}^n k=1 \cdot 2 \cdot 3 \cdot {\rm} \dots {\rm} \cdot (n-1) \cdot n
    $$

    By definition, we set $0! = 1$.

- The number $n!$ grows very rapidly as $n$ increases. The first values are:

    <div class="tabella" markdown><table>
    <tr>
    <td>n</td>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    </tr>
    <tr>
    <td>n!</td>
    <td>1</td>
    <td>1</td>
    <td>2</td>
    <td>6</td>
    <td>24</td>
    <td>120</td>
    <td>720</td>
    <td>5,040</td>
    <td>40,320</td>
    <td>362,880</td>
    <td>3,628,800</td>
    </tr>
    </table></div>

- Some properties of the factorial, which are immediate to verify, are:

    !!! chiave ""

        $$
        n! = n \cdot (n-1)!
        $$

        \begin{equation}
        \label{MM}
        \frac{n!}{(n-k)!}  =  n \cdot (n-1) \cdot (n-2) \cdot {\rm} \dots {\rm} \cdot (n-k+1),  {\rm ~~with~~} 1 \le k \le n
        \end{equation}

        With $1 \le k \le n$,  it becomes  the product of $k$ factors, starting from $n$ and decreasing by one unit at a time.

    <a id="box-texexpbox1-2"></a>

    !!! esempio "Example 1: Computing the factorial"

        $$
        \frac{100!}{95!}= \frac{100!}{(100-5)!}=100 \cdot 99 \cdot 98 \cdot 97 \cdot 96 = 9{,}034{,}502{,}400
        $$

        It is always convenient to simplify expressions containing the factorial as much as possible, before computing them!

## 2. Binomial coefficients

<a id="box-notationA-3"></a>

!!! definizione "Definition 2: binomial coefficient"

    The <strong>binomial coefficient</strong> is defined as the number:

    \begin{equation}
    c_{n,k}  = \frac{n!}{k!\:(n-k)!}
    \qquad {\rm ~~with~~}
    0 \le k \le n.
    \label{CB1}
    \end{equation}

    The binomial coefficient $c_{n,k}$ is usually denoted by the symbol: ${{n}\choose{k}}$ which is read “$n$ choose $k$”.

- Given rule \(\eqref{MM}\), we have:

    \begin{equation}
    c_{n,k} = \frac{n \cdot (n-1) \cdot (n-2) \cdot {\rm} \dots {\rm} \cdot (n-k+1)}{k!} 
    \label{CB2}
    \end{equation}

    with $k\ge 1$,  an expression that is more convenient for computing  the binomial coefficient.

!!! chiave ""

    We have:

    \begin{equation}
    \label{LL}
     {{n}\choose{n-k}}  = {{n}\choose{k}}
    \end{equation}

    Since:

    $$
    {{n}\choose{n-k}} =  \frac{n!}{(n-k)!\:(n-(n-k))!}=\frac{n!}{k!\:(n-k)!}= {{n}\choose{k}}
    $$

    We have:

    \begin{equation}
    \label{TT}
     {{n-1}\choose{k-1}} + {{n-1}\choose{k}} = {{n}\choose{k}} \qquad {\rm ~~for~every~} n \ge 2 {\rm ~and~} 1 \le k \le n-1
    \end{equation}

    (the proof below needs $(k-1)!$ and $(n-k-1)!$, hence $k \ge 1$ and $k \le n-1$). Since:

    \begin{align*}
    {{n-1}\choose{k-1}} + {{n-1}\choose{k}} &=  \frac{(n-1)!}{(k-1)!\:\underbrace{(n-1-(k-1))!}_{=~(n-k)!~=~(n-k)\:(n-k-1)!}}+\frac{(n-1)!}{k!\:(n-k-1)!}\\[2ex]
    &=\frac{(n-1)!}{(k-1)!\:(n-k)\:(n-k-1)!}+\frac{(n-1)!}{k\:(k-1)!\:(n-k-1)!} \\[2ex]
    &=\frac{k\:(n-1)!+(n-k)\:(n-1)!}{k\:(k-1)!\:(n-k)\:(n-k-1)!}  =\frac{\overbrace{(n-1)!\:n}^{=n!}}{\underbrace{k\:(k-1)!}_{k!}\:\underbrace{(n-k)\:(n-k-1)!}_{(n-k)!}}  \\[2ex]
    &=\frac{n!}{k!\:(n-k)!}= {{n}\choose{k}}
    \end{align*}

    It also follows that:

    \begin{equation*}
    {{n}\choose{k-1}} + {{n}\choose{k}} = {{n+1}\choose{k}} \qquad {\rm ~~for~every~} n \ge 1 {\rm ~and~} 1 \le k \le n
    \end{equation*}

### 2.1 Newton's formula

The $n$-th power of a binomial $(a + b)$ can be computed with the following formula (from which the name binomial coefficient derives):

<a id="box-PROP_NEWTON-4"></a>

!!! osservazione "Remark 1: Newton's formula"

    For every integer $n \ge 0$, with $a, b \in \R$, we have:

    \begin{equation}
    \label{NEWTON}
    (a+b)^n = \sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; a^{n-k} \; b^k
    \end{equation}

??? dimostrazione "Proof"

    By induction on $n$.

    - <strong>Base case of the induction</strong>

        Let $n = 0$. Then the statement becomes: $(a+b)^0 = {{0}\choose{0}} \; a^{0} \; b^0$ i.e. $1 = 1$ which is clearly true (with the convention $0^0=1$, which also covers the case $a=b=0$).

    - <strong>Inductive step</strong>

        Suppose it is true for $n$, and let us prove it for $(n + 1)$. By the inductive hypothesis,   we have: $(a+b)^n = \sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; a^{n-k} \; b^k$. Then:

        \begin{align*}
        (a+b)^{n+1} &= (a+b) \cdot (a+b)^{n} = (a+b) \:  \sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; a^{n-k} \; b^k\\[2.5ex]
        &= \sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; a^{n-k+1} \; b^{k} + \underbrace{\sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; a^{n-k} \; b^{k+1}}_{\displaystyle = \sum_{k=1}^{n+1} ~~{{n}\choose{k-1}} ~~\; a^{n-k+1} \; b^{k}}\\[2ex]
        &= a^{n+1} + \sum_{k=1}^{n} ~~{{n}\choose{k}} ~~\; a^{n-k+1} \; b^{k} + b^{n+1} + \sum_{k=1}^{n} ~~{{n}\choose{k-1}} ~~\; a^{n-k+1} \; b^{k}\\[4ex]
        & = a^{n+1} + b^{n+1} + \sum_{k=1}^{n} ~~ \underbrace{ \left(~~ {{n}\choose{k}} +  {{n}\choose{k-1}} ~~\right)}_{\displaystyle ={{n+1}\choose{k}}} ~~\; a^{n-k+1} \; b^{k}\\[1ex]
        &=   \sum_{k=0}^{n+1} ~~   {{n+1}\choose{k}} ~~\; a^{n+1-k} \; b^{k}
        \end{align*}

        which is exactly the desired statement, for $n + 1$.

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-PROP_XX-5"></a>

!!! osservazione "Remark 2"

    For every integer $n \ge 0$ we have:

    \begin{equation}
    \sum_{k=0}^{n} ~~{{n}\choose{k}} ~~ = 2^n
    \end{equation}

??? dimostrazione "Proof"

    We write:

    $$
    2^n = (1+1)^n
    $$

    We now apply Newton's formula \(\eqref{NEWTON}\):

    $$
    (1+1)^n = \sum_{k=0}^{n} ~~{{n}\choose{k}} ~~\; 1^{n-k} \; 1^k =  \sum_{k=0}^{n} ~~{{n}\choose{k}}
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

### 2.2 Recursive computation of binomial coefficients

!!! chiave ""

    Relation \(\eqref{TT}\) allows us to compute the binomial coefficients ${{n}\choose{k}}$ by means of the so-called <strong>Pascal's triangle</strong> (or Tartaglia's triangle).

    The rules for building the triangle  are:

    1. At the top of the triangle we place the number ${{0}\choose{0}}=1$ (by definition).

    2. On the sides we place the numbers ${{n}\choose{0}} = {{n}\choose{n}} = 1$ for every $n  \ge 1$.

    3. For $0 < k < n$, the number ${{n}\choose{k}}$ is written at the intersection of the $n$-th row and the $k$-th column.

    4. Again for $0 < k < n$, the number ${{n}\choose{k}}$ is the sum of the two numbers located in the previous row, the one in the same column and the one in the previous column.

<a id="box-texexpbox1-6"></a>

!!! esempio "Example 2: Pascal's triangle (or Tartaglia's triangle)"

    Pascal's triangle with $n \le 10$ and $k \le 10$ is:

    <div class="tabella" markdown><table>
    <tr>
    <td></td>
    <td><span class="arithmatex">\(k=0\)</span></td>
    <td><span class="arithmatex">\(k=1\)</span></td>
    <td><span class="arithmatex">\(k=2\)</span></td>
    <td><span class="arithmatex">\(k=3\)</span></td>
    <td><span class="arithmatex">\(k=4\)</span></td>
    <td><span class="arithmatex">\(k=5\)</span></td>
    <td><span class="arithmatex">\(k=6\)</span></td>
    <td><span class="arithmatex">\(k=7\)</span></td>
    <td><span class="arithmatex">\(k=8\)</span></td>
    <td><span class="arithmatex">\(k=9\)</span></td>
    <td><span class="arithmatex">\(k=10\)</span></td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=0\)</span></td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=1\)</span></td>
    <td>1</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=2\)</span></td>
    <td>1</td>
    <td>2</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=3\)</span></td>
    <td>1</td>
    <td>3</td>
    <td>3</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=4\)</span></td>
    <td>1</td>
    <td>4</td>
    <td class="cella-rossa">6</td>
    <td class="cella-rossa">4</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=5\)</span></td>
    <td>1</td>
    <td>5</td>
    <td>10</td>
    <td class="cella-blu">10</td>
    <td>5</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=6\)</span></td>
    <td>1</td>
    <td>6</td>
    <td>15</td>
    <td>20</td>
    <td>15</td>
    <td>6</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=7\)</span></td>
    <td>1</td>
    <td>7</td>
    <td>21</td>
    <td>35</td>
    <td>35</td>
    <td>21</td>
    <td>7</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=8\)</span></td>
    <td>1</td>
    <td>8</td>
    <td>28</td>
    <td>56</td>
    <td>70</td>
    <td>56</td>
    <td>28</td>
    <td>8</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=9\)</span></td>
    <td>1</td>
    <td>9</td>
    <td>36</td>
    <td>84</td>
    <td>126</td>
    <td>126</td>
    <td>84</td>
    <td>36</td>
    <td>9</td>
    <td>1</td>
    </tr>
    <tr>
    <td><span class="arithmatex">\(n=10\)</span></td>
    <td>1</td>
    <td>10</td>
    <td>45</td>
    <td>120</td>
    <td>210</td>
    <td>252</td>
    <td>210</td>
    <td>120</td>
    <td>45</td>
    <td>10</td>
    <td>1</td>
    </tr>
    </table></div>

    To compute the binomial coefficient ${{5}\choose{3}}$, corresponding to the blue cell, we can use relation \(\eqref{TT}\) and add the two binomial coefficients ${{4}\choose{2}}$ and ${{4}\choose{3}}$, corresponding to the red cells:

    $$
    {{5}\choose{3}} =  {{4}\choose{2}} +  {{4}\choose{3}} = 6+4 =10.
    $$

<a id="box-texexpbox1-7"></a>

!!! esempio "Example 3: computing the power of a binomial using Pascal's triangle"

    Thanks to the previous Pascal's triangle and to Newton's formula \(\eqref{NEWTON}\) we can compute:

    $$
    (a+b)^5 = a^5 + 5\: a^4 \: b + 10\: a^3 \:b^2 + 10 \:a^2 \:b^3 + 5 \: a\: b^4 + b^5
    $$

## 3. Absolute value

<a id="box-defXX-8"></a>

!!! definizione "Definition 3: absolute value"

    The <strong>absolute value</strong> of a real number $a \in \mathbb{R}$ (or <strong>modulus</strong> of $a$) is the  non-negative number defined as follows:

    \begin{equation}
    |a|  = 
    \begin{cases}
    a & {\rm if~~} a \ge 0\\
    -a & {\rm if~~} a < 0
    \end{cases}
    \label{ass_1}
    \end{equation}

!!! chiave ""

    From the definition of absolute value it immediately follows that:

    \begin{equation}
    \forall \varepsilon \ge 0, a \in \mathbb{R}, \qquad  |a| \le \varepsilon \Longleftrightarrow -\varepsilon \le a \le \varepsilon
    \label{ass_2}
    \end{equation}

### 3.1 Triangle inequality in $\R$

<a id="box-notationA-9"></a>

!!! osservazione "Remark 3: triangle inequality in $\R$"

    \begin{equation}
    |b + c| \le |b| + |c|  \qquad \forall  b,c \in \mathbb{R}
    \label{ass_3}
    \end{equation}

??? dimostrazione "Proof"

    We write the two relations:

    $$
    -|b| \le b \le |b|, \quad \quad -|c| \le c \le |c|
    $$

    and add them side by side:

    $$
    -(|b| + |c|) \le b + c \le |b| + |c|
    $$

    Hence, by \(\eqref{ass_2}\), with $\varepsilon=|b|+|c|\ge 0$ and  $a=b+c$, \(\eqref{ass_3}\) follows. <span class="qed">□</span>

- The triangle inequality is  also used in the following form:

    \begin{equation}
    |d - e| \le |d-f| + |e-f| \qquad \forall d,e,f \in \mathbb{R}
    \label{ass_4}
    \end{equation}

    To obtain it, it suffices to set in \(\eqref{ass_3}\):

    $$
    b = d - f, \quad c =   f-e
    $$

    we obtain:

    $$
    |d - f  +f-e|=|d -e| \le |d - f| + |f-e| = |d - f| + |e-f|
    $$

    since:

    $$
    |f - e| = |e-f| \qquad \forall e,f \in \mathbb{R}
    $$

- Moreover, the triangle inequality can also be written in the  following form:

    \begin{equation}
    |g| \le |g-h| + |h| {\rm ~~~~~i.e.~~~~~} |g| - |h| \le |g-h| \qquad \forall g,h \in \mathbb{R}
     \label{ass_AA}
    \end{equation}

    To obtain it, it suffices to set in \(\eqref{ass_3}\):

    $$
    b =  g - h, \quad  c = h
    $$

<a id="box-notationA-10"></a>

!!! osservazione "Remark 4: reverse triangle inequality in $\R$"

    \begin{equation}
    \big||g| - |h|\big| \le |g-h|, \quad \forall g,h \in \mathbb{R}.
    \label{ass_4__2}
    \end{equation}

??? dimostrazione "Proof"

    From \(\eqref{ass_AA}\) we have

    $$
    |g| - |h| \le |g-h| \qquad \forall g,h \in \mathbb{R}
    $$

    Similarly, swapping $g$ and $h$ in \(\eqref{ass_AA}\) we obtain:

    $$
    |h| - |g| \le |h-g| = |g-h|  {\rm ~~~~that~is~~~~} |g| - |h| \ge -|g-h|
    $$

    hence we have

    $$
    -(|g-h|) \le  |g| - |h| \le |g-h| \qquad \forall g,h \in \mathbb{R}
    $$

    Hence, by \(\eqref{ass_2}\), with $\varepsilon = |g-h| \ge 0$ and $a= |g| - |h|$, the reverse triangle inequality follows. <span class="qed">□</span>

- Inequality \(\eqref{ass_3}\) can easily be extended to the case of $k$ terms:

    \begin{equation}
    \left| \sum_{i=1}^k  b_i \right| \le  \sum_{i=1}^k  |b_i|.
    \label{ass_6}
    \end{equation}

- The following immediate properties also hold:

    \begin{equation}
    \begin{aligned}
    |b\:c| &= |b| \: |c|, \qquad |-b|=|b| & &\forall  b,c \in \mathbb{R},\\[1ex]
    \left| \frac{b}{c}\right| &= \frac{|b|}{|c|} & &\forall  b,c \in \mathbb{R},~ c \neq 0.
    \end{aligned}
    \label{ass_7}
    \end{equation}
