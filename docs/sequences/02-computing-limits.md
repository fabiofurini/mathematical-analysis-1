---
title: "Computing limits of sequences"
---

# Computing limits of sequences

<div class="info-capitolo" markdown>

**Part 3 · Limits of sequences · Chapter 2** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-3-limits.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-sequences-02-computing-limits.pdf)

</div>

## 1. Computing limits of sequences

- The proofs of the <strong>basic theorems</strong> on computing limits are based on the <strong>definition of limit</strong>, on the <strong>use of inequalities</strong>, and on the use of <strong>properties that are eventually true</strong>.

- In particular, these theorems illustrate the relation between the limit operation and the algebraic structures[^1] and the order structures[^2] present in $\R$.

!!! chiave ""

    We will simply write $a_n \rr \ell$ to mean $a_n \rr \ell$ for $n \rr \ip$

<strong>Properties of the limit operation with respect to algebraic operations</strong>.

<a id="box-theoALGEBRA_LIMITI_FINITI-1"></a>

!!! teorema "Theorem 1: Algebra of limits, case of finite limits"

    Hypotheses:

    $$
    \textbf{1.}~~a_n \rr \ell_a \in \R  \qquad  \textbf{2.}~~ b_n \rr \ell_b \in \R.
    $$

    Claim:

    $$
    \textbf{1.}~~ a_n \pm b_n  \rr \ell_a \pm \ell_b \qquad  \textbf{2.}~~  \frac{a_n}{b_n}  \rr \frac{\ell_a}{\ell_b} \qquad (b_n, \ell_b\neq 0, {\rm ~eventually})
    $$

    $$
    \textbf{3.}~~ a_n \: b_n  \rr \ell_a \: \ell_b \qquad  \textbf{4.}~~  a_n^{b_n}  \rr {\ell_a}^{\ell_b} \qquad (a_n, \ell_a > 0, {\rm ~eventually}).
    $$

??? dimostrazione "Proof"

    We prove that:

    $$
    a_n \rr \ell_a \in \R, ~b_n \rr \ell_b\in \R ~ \Rightarrow a_n + b_n \rr \ell_a + \ell_b
    $$

    We consider

    \begin{equation}
    |(a_n+b_n) - (\ell_a+\ell_b)| = | (a_n - \ell_a) + (b_n - \ell_b) | \le |a_n - \ell_a| + |b_n - \ell_b| \label{AAA}
    \end{equation}

    by the triangle inequality. Since by hypothesis $a_n \rr \ell_a~$ and $~b_n \rr \ell_b~$, we have that

    $$
    |a_n - \ell_a| < \varepsilon_a {\rm ~~~and~~~} |b_n - \ell_b | < \varepsilon_b \quad ({\rm eventually})
    $$

    for every $\varepsilon_a > 0$ and  $\varepsilon_b > 0$.  Bounding from above the terms on the right-hand side of \(\eqref{AAA}\) we conclude that

    $$
    |(a_n+b_n) - (\ell_a+\ell_b)| < \underbrace{2 \: \max \{\varepsilon_a, \varepsilon_b\}}_{=\tilde{\varepsilon} {\rm ~and~}> 0}
    $$

    Since $\tilde{\varepsilon}$ is arbitrary, the claim follows. <span class="qed">□</span>

??? dimostrazione "Proof"

    We prove that:

    $$
    a_n \rr \ell_a \in \R, ~b_n \rr \ell_b \in \R~ \Rightarrow a_n - b_n \rr \ell_a - \ell_b
    $$

    For every $\varepsilon_a > 0$ and  $\varepsilon_b > 0$,  we have:

    \begin{equation*}
    |(a_n-b_n) - (\ell_a-\ell_b)| = | (a_n - \ell_a) + ( \ell_b - b_n) | \le \underbrace{|a_n - \ell_a|}_{< \varepsilon_a} + \underbrace{|\ell_b - b_n|}_{=|b_n -\ell_b | < \varepsilon_b}
    \end{equation*}

    Hence

    $$
    |(a_n-b_n) - (\ell_a-\ell_b)| < \underbrace{2 \: \max \{\varepsilon_a, \varepsilon_b\}}_{=\tilde{\varepsilon} {\rm ~and~}> 0}
    $$

    Since $\tilde{\varepsilon}$ is arbitrary, the claim follows. <span class="qed">□</span>

??? dimostrazione "Proof"

    We prove that:

    $$
    a_n \rr \ell_a \in \R, ~b_n \rr \ell_b \in \R~ \Rightarrow a_n \: b_n \rr \ell_a \: \ell_b
    $$

    We consider

    \begin{align*}
    |(a_n \: b_n) - (\ell_a \: \ell_b)|  &=  | a_n \: b_n - a_n \: \ell_b + a_n \: \ell_b  - \ell_a \: \ell_b|\\[2ex]
     &= | a_n \: (b_n - \ell_b) + \ell_b \: (a_n - \ell_a) | \le |a_n\: (b_n - \ell_b)| +  |\ell_b \: (a_n - \ell_a)|\\[2ex]
     &=|a_n| \: |b_n - \ell_b| + |\ell_b| \: |a_n - \ell_a|
    \end{align*}

    by the triangle inequality and the properties of the absolute value. Hence

    \begin{equation}
    |(a_n \: b_n) - (\ell_a \: \ell_b)| \le |a_n| \: |b_n - \ell_b| + |\ell_b| \: |a_n - \ell_a| \label{BBB}
    \end{equation}

    Since by hypothesis $a_n \rr \ell_a~$ and $~b_n \rr \ell_b~$, for every $\varepsilon_a > 0$ and  $\varepsilon_b > 0$ we have

    $$
    |a_n - \ell_a| < \varepsilon_a {\rm ~~~and~~~} |b_n - \ell_b | < \varepsilon_b \quad ({\rm eventually}).
    $$

    Moreover, since

    $$
    |a_n - \ell_a|  \ge |a_n| - |\ell_a|
    {\rm ~~we~have~~}
      |a_n| < |\ell_a| + \varepsilon_a, \quad {\rm eventually}.
    $$

    Therefore, bounding from above the terms on the right-hand side of \(\eqref{BBB}\), we conclude that

    $$
    |(a_n \: b_n) - (\ell_a \: \ell_b)| < (|\ell_a| + \varepsilon_a) \: \varepsilon_b + |\ell_b| \: \varepsilon_a =  \underbrace{|\ell_a| \: \varepsilon_b +  |\ell_b| \: \varepsilon_a  +  \varepsilon_a \cdot \varepsilon_b }_{=\tilde{\varepsilon} {\rm ~and~}> 0}
    $$

    Since $\tilde{\varepsilon}$ is arbitrary, the claim follows. <span class="qed">□</span>

- Moreover, the <strong>limit operation preserves the ordering</strong>

<a id="box-theoPERMANENZA_SEGNO_1-2"></a>

!!! teorema "Theorem 2: Sign-preservation, first form"

    Hypotheses:

    $$
    \textbf{1.} ~~ a_n \rr \ell_a \qquad \textbf{2.}~~ \ell_a \lessgtr 0.
    $$

    Claim:

    $$
    a_n  \lessgtr 0, {\rm ~~eventually}.
    $$

??? dimostrazione "Proof"

    We consider the case $\ell_a > 0$.  By definition of limit we have that

    $$
    |a_n - \ell_a| < \varepsilon, \quad {\rm eventually},
    $$

    for every $\varepsilon>0$, which we rewrite in the form:

    $$
    \ell_a - \varepsilon < a_n  < \ell_a + \varepsilon, \quad {\rm eventually}.
    $$

    Since $\ell_a > 0$, we can choose $\varepsilon > 0$ such that $\ell_a - \varepsilon > 0$; then the inequality

    $$
    0 < \ell_a - \varepsilon < a_n
    $$

    shows that $a_n > 0$, eventually. 

    The case $\ell_a < 0$ is proved analogously. <span class="qed">□</span>

<a id="box-theoPERMANENZA_SEGNO_GEN-3"></a>

!!! teorema "Theorem 3: Permanence of sign (generalized form)"

    Hypotheses:

    $$
    \textbf{1.} ~~ a_n \rr \ell_a \in \R \qquad \textbf{2.}~~ \lambda \in \R \qquad \textbf{3.}~~ \ell_a > \lambda.
    $$

    Claim:

    $$
    a_n  > \lambda, {\rm ~~eventually}.
    $$

??? dimostrazione "Proof"

    Since $\ell_a > \lambda$, the number $\varepsilon = \ell_a - \lambda$ is strictly positive. Applying the definition of limit with precisely this value of $\varepsilon$, we have, eventually:

    $$
    \underbrace{\ell_a - (\ell_a - \lambda)}_{= \lambda} ~<~ a_n ~<~ \ell_a + (\ell_a - \lambda)
    $$

    and therefore $a_n > \lambda$, eventually. <span class="qed">□</span>

- Analogously one proves that, if $a_n \rr \ell_a \in \R$ and $\ell_a < \lambda$, then $a_n < \lambda$ eventually: it suffices to choose $\varepsilon = \lambda - \ell_a > 0$ and to obtain, eventually,

    $$
    \ell_a - (\lambda - \ell_a) ~<~ a_n ~<~ \underbrace{\ell_a + (\lambda - \ell_a)}_{= \lambda}
    $$

- With $\lambda = 0$ we recover the permanence of sign theorem, $1^{st}$ form.

- We can now prove the case of the <strong>quotient</strong> in Theorem [Theorem 1](#box-theoALGEBRA_LIMITI_FINITI-1) on the algebra of limits.

??? dimostrazione "Proof"

    We first prove that:

    $$
    b_n \rr \ell_b \in \R, ~\ell_b \neq 0 ~ \Rightarrow \frac{1}{b_n} \rr \frac{1}{\ell_b}
    $$

    The case of the quotient then follows from the case of the product, already proved, applied to the sequences $\{a_n\}$ and $\left\{\frac{1}{b_n}\right\}$:

    $$
    \frac{a_n}{b_n} = a_n \: \frac{1}{b_n} \rr \ell_a \: \frac{1}{\ell_b} = \frac{\ell_a}{\ell_b}
    $$

    Suppose $\ell_b > 0$ (if $\ell_b<0$ one argues in the same way on the sequence $\{-b_n\}$). By the permanence of sign theorem (generalized form), applied with $\lambda = \frac{\ell_b}{2} < \ell_b$, we have

    $$
    b_n > \frac{\ell_b}{2} > 0, \quad {\rm eventually}
    $$

    in particular $b_n \neq 0$ eventually and the quotient $\frac{1}{b_n}$ is well defined. Moreover, for every $\varepsilon > 0$, we have $|b_n - \ell_b| < \varepsilon$ eventually, and therefore, eventually:

    \begin{align*}
    \left| \frac{1}{b_n} - \frac{1}{\ell_b} \right| 
    &= \left|\frac{\ell_b - b_n}{b_n\; \ell_b} \right| = \frac{|b_n - \ell_b|}{|b_n| \; |\ell_b|}\\[2ex]
    &< \frac{2}{\ell_b \; |\ell_b|} \: |b_n -\ell_b| ~<~ \underbrace{\frac{2}{\ell_b^2 } \:\varepsilon}_{=\tilde{\varepsilon} {\rm ~and~}> 0}
    \end{align*}

    where we used $|b_n| > \frac{\ell_b}{2}$. Since $\tilde{\varepsilon}$ is arbitrary, the claim follows. <span class="qed">□</span>

<a id="box-theoPERMANENZA_SEGNO_2_A-4"></a>

!!! teorema "Theorem 4: Sign-preservation, second form (part I)"

    Hypotheses:

    $$
    \textbf{1. }~~ a_n \rr \ell_a \in \R \qquad \textbf{2.}~~ a_n \ge 0, {\rm ~~eventually}.
    $$

    Claim:

    $$
    \ell_a \ge 0.
    $$

??? dimostrazione "Proof"

    It follows from the previous theorem. Indeed, if by contradiction we had $\ell_a < 0$, from the previous theorem we would have $a_n < 0$ eventually, which is incompatible with the hypothesis that $a_n \ge 0$ eventually.

    This case cannot occur, i.e., the opposite holds, which is the claim of the theorem. <span class="qed">□</span>

<a id="box-theoPERMANENZA_SEGNO_2_B-5"></a>

!!! teorema "Theorem 5: Sign-preservation, second form (part II)"

    Hypotheses:

    $$
    \textbf{1. }~~ a_n \rr \ell_a \in \R \qquad \textbf{2.}~~ b_n \rr \ell_b \in \R \qquad \textbf{3.}~~ a_n \ge b_n, {\rm~~eventually}.
    $$

    Claim:

    $$
    \ell_a \ge \ell_b.
    $$

??? dimostrazione "Proof"

    We consider the sequence $a_n - b_n$; by the theorem on the algebra of limits we have

    $$
    a_n - b_n \rr \ell_a - \ell_b.
    $$

    Since by hypothesis

    $$
    a_n \ge b_n {\rm ~~~and~hence~~~~}  a_n - b_n \ge 0,
    $$

    by the sign-preservation theorem, second form (part I), applied to the sequence $a_n - b_n$ we have

    $$
    \ell_a - \ell_b \ge 0 {\rm ~~~and~hence~~}  \ell_a \ge \ell_b.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

- This theorem tells us that in an inequality between two sequences we can pass to the limit on both sides, keeping the “$\le$” or the “$\ge$”.

- Note, instead, that in general strict inequalities “$<$” and “$>$” are not preserved when passing to the limit.

    <a id="box-texexpbox1-6"></a>

    !!! esempio "Example 1: Passing to the limit with strict inequalities"

        For example, even if the $a_n$ are strictly positive, their limit $\ell_a$ is positive or zero, as shown by the simple example $\frac{1}{n} \rr 0$.

<a id="box-theoCONFRONTO-7"></a>

!!! teorema "Theorem 6: Comparison (squeeze) theorem"

    Hypotheses:

    $$
    \textbf{1.}~~ a_n \rr \ell, c_n \rr \ell {\rm ~~and~~} \ell \in \R, \qquad \textbf{2. }~~ a_n \le b_n \le c_n, ~~{\rm eventually}.
    $$

    Claim:

    $$
    b_n \rr \ell.
    $$

??? dimostrazione "Proof"

    By definition of limit we have, eventually, that

    $$
    \ell - \varepsilon_a < a_n  < \ell + \varepsilon_a \quad {\rm~and~} \quad \ell - \varepsilon_c < c_n  < \ell + \varepsilon_c
    $$

    for every $\varepsilon_a >0$ and $\varepsilon_c >0$.  Hence:

    $$
    \ell - \max\{ \varepsilon_a, \varepsilon_c\} < a_n  < \ell + \max\{ \varepsilon_a, \varepsilon_c\} \quad {\rm~and~} \quad \ell - \max\{ \varepsilon_a, \varepsilon_c\} < c_n  < \ell + \max\{ \varepsilon_a, \varepsilon_c\}
    $$

    From the hypotheses of the theorem we therefore have, eventually, that

    $$
    \ell - \max\{ \varepsilon_a, \varepsilon_c\} < a_n  \le b_n \le  c_n  < \ell + \max\{ \varepsilon_a, \varepsilon_c\}
    $$

    But then, eventually, we have

    $$
    \ell - \underbrace{\max\{ \varepsilon_a, \varepsilon_c\}}_{=\tilde{\varepsilon} {\rm ~and~}> 0} < b_n  < \ell + \underbrace{\max\{ \varepsilon_a, \varepsilon_c\}}_{=\tilde{\varepsilon} {\rm ~and~}> 0}.
    $$

    Since $\tilde{\varepsilon}$ is arbitrary, the claim follows. <span class="qed">□</span>

<a id="box-theoCONFRONTO_DIVERGENTI-8"></a>

!!! teorema "Theorem 7: Comparison theorem for divergent sequences"

    Hypotheses:

    $$
    \textbf{1.}~~ a_n \rr \ip, \qquad \textbf{2. }~~ a_n \le b_n, ~~{\rm eventually}.
    $$

    Claim:

    $$
    b_n \rr \ip.
    $$

??? dimostrazione "Proof"

    Since $a_n \rr \ip$, for every $M>0$ we have, eventually,

    $$
    a_n > M
    $$

    By hypothesis we also have $a_n \le b_n$, eventually. Both properties hold eventually, hence, eventually, we have

    $$
    b_n \ge a_n > M
    $$

    Since $M>0$ is arbitrary, we conclude that $b_n \rr \ip$. <span class="qed">□</span>

- Analogously one proves that, if $a_n \rr \im$ and $a_n \ge b_n$ eventually, then $b_n \rr \im$.

- Frequently used special cases of the comparison theorem are expressed by the following corollaries, which are very useful when studying the product of an oscillating (but bounded) sequence and one that tends to zero

<a id="box-corolCONFRONTO_A-9"></a>

!!! teorema "Corollary 1: Of the comparison theorem (part I)"

    Hypotheses:

    $$
    \textbf{1.}~~c_n \rr 0   \qquad \textbf{2. }~~ |b_n|\le c_n, ~~{\rm eventually}.
    $$

    Claim:

    $$
    b_n \rr 0.
    $$

??? dimostrazione "Proof"

    We know that eventually we have $-c_n \le b_n \le c_n$. Obviously

    $$
    {\rm if~~} c_n \rr 0 {\rm ~~then~~} -c_n \rr 0.
    $$

    Hence by the comparison theorem (with $a_n = -c_n$ and $\ell = 0$) we have that $b_n \rr 0$. <span class="qed">□</span>

<a id="box-corolCONFRONTO_B-10"></a>

!!! teorema "Corollary 2: Of the comparison theorem (part II)"

    Hypotheses:

    $$
    \textbf{1.}~~c_n \rr 0   \qquad \textbf{2. }~~ \{b_n\} ~~{\rm ~is~bounded ~~(but~not~necessarily~convergent)}.
    $$

    Claim:

    $$
    c_n \: b_n \rr 0.
    $$

??? dimostrazione "Proof"

    If $\{b_n\}$ is bounded, then $|b_n| \le M$ for some $M>0$ and for every $n \in \N$. We can therefore write

    $$
    |b_n \: c_n| \le M \: |c_n|.
    $$

    Since

    $$
    c_n \rr 0 {\rm ~~also~~} M \: |c_n| \rr 0,
    $$

    by Corollary [Corollary 1](#box-corolCONFRONTO_A-9) we conclude that $b_n \: c_n \rr 0$. <span class="qed">□</span>

!!! chiave ""

    The product of an infinitesimal sequence and a bounded one is infinitesimal.

<a id="box-texexpbox1-11"></a>

!!! esempio "Example 2: Application of the corollary"

    Consider the sequence given by a ratio of two expressions, each consisting of a sum of powers of $n$, such as:

    $$
    n \mapsto \frac{n^{{5}/{2}} - 3 \: n + 7}{n^3 + \sqrt{n} - 3 \: n^2}
    $$

    Factoring out the highest power both in the numerator and in the denominator we obtain:

    $$
    \frac{ n^{{5}/{2}} \: \left( 1 - \frac{3}{n^{{3}/{2}} } + \frac{7}{n^{5/2}}\right)}{n^3\:\left(1 + \frac{1}{n^{{5}/{2}} } - \frac{3}{n}  \right)} = \frac{1}{\sqrt{n}} \: \frac{   1 - \frac{3}{n^{{3}/{2}} } + \frac{7}{n^{5/2}}}{ 1 + \frac{1}{n^{{5}/{2}} } - \frac{3}{n}  }
    $$

    Now, by Theorem [Theorem 1](#box-theoALGEBRA_LIMITI_FINITI-1) on the algebra of limits and knowing that negative powers of $n$ tend to zero, we can state that:

    $$
    1 - \underbrace{\frac{3}{n^{{3}/{2}} }}_{\rr 0} + \underbrace{\frac{7}{n^{5/2}}}_{\rr 0} \rr 1, \quad 1 + \underbrace{\frac{1}{n^{{5}/{2}} }}_{\rr 0} - \underbrace{\frac{3}{n}}_{\rr 0} \rr 1 {\rm ~~~and~~~} \left( \frac{   1 - \frac{3}{n^{{3}/{2}} } + \frac{7}{n^{5/2}}}{ 1 + \frac{1}{n^{{5}/{2}} } - \frac{3}{n}  } \right) \rr 1
    $$

    hence the last sequence is convergent and consequently bounded. Now, by Corollary [Corollary 2](#box-corolCONFRONTO_B-10) and since

    $$
    \frac{1}{\sqrt{n}} \rr 0 {\rm~~we~have~~} \frac{n^{{5}/{2}} - 3 \: n + 7}{n^3 + \sqrt{n} - 3 \: n^2} \rr 0
    $$

<a id="box-texexpbox1-12"></a>

!!! esempio "Example 3: Application of the corollary"

    The sequence

    $$
    n \mapsto \frac{\sin n}{n}
    $$

    is the product of two sequences

    $$
    n \mapsto \frac{1}{n} {\rm ~~(convergent,~infinitesimal)} {\rm ~~and~~} n \mapsto \sin n {\rm ~~(irregular)},
    $$

    hence Theorem [Theorem 1](#box-theoALGEBRA_LIMITI_FINITI-1) on the algebra of limits cannot be applied (the second limit does not exist).

    - However, Corollary [Corollary 2](#box-corolCONFRONTO_B-10) can be applied. The sequence $\left\{\frac{1}{n}\right\}$ is infinitesimal and, since $|\sin n| \le 1$, the sequence $\{\sin n\}$ is bounded; therefore we have

        $$
        \lim_{n \rr \ip} \frac{\sin n}{n} = 0
        $$

- The theorems on the algebra of limits seen so far work on pairs of sequences that are both convergent or at least bounded.

<strong>Sequences with limits $\ip$ and $\im$</strong>

- Suppose, for example, that

    $$
    a_n \rr \ell_a {\rm~~and~~} b_n \rr \ip
    $$

    then it is easy (and intuitive) to see that

    $$
    a_n + b_n \rr \ip
    $$

    We will abbreviate this as follows:

    $$
    \ell_a \ip = \ip
    $$

- Reasoning in a similar way we can summarize the rules for the limit of the sum (or difference) of two sequences, one or both of which are divergent.

<strong>Rules of partial arithmetization of the infinity symbol</strong>

<a id="box-theoARIT_INF1-13"></a>

!!! teorema "Theorem 8: Partial arithmetization of the infinity symbol (addition)"

    Hypotheses:

    $$
    \textbf{1.}~~ a_n \rr \ell_a \in \R \qquad \textbf{2.}~~b_n \rr \ip \qquad \textbf{3.}~~ c_n \rr \ip.
    $$

    Claim:

    $$
    \textbf{1.}~~ a_n + b_n  \rr \ell_a  \ip = \ip \qquad \textbf{2.}~~a_n - b_n  \rr \ell_a  \im = \im
    $$

    $$
    \textbf{3.}~~ b_n + c_n \rr \ip \ip = \ip \qquad \textbf{4.}~~- b_n - c_n \rr \im \im = \im.
    $$

<a id="box-theoARIT_INF2-14"></a>

!!! teorema "Theorem 9: Partial arithmetization of the infinity symbol (product)"

    Hypotheses:

    $$
    \textbf{1.}~~ a_n \rr \ell_a \in \R \qquad \textbf{2.}~~b_n \rr 0^+ {\rm ~or~} b_n \rr 0^- \qquad \textbf{3.}~~ c_n \rr \infty.
    $$

    Claim:

    $$
    \textbf{1.}~~ a_n \:\: c_n  \rr \ell_a \:\: \infty = \infty \quad (\ell_a \neq 0) \qquad \textbf{2.}~~\frac{a_n}{b_n}  \rr \frac{\ell_a}{0} = \infty \quad (\ell_a \neq 0) \qquad \textbf{3.}~~ \frac{a_n}{c_n}  \rr \frac{\ell_a}{\infty} = 0.
    $$

- the <strong>sign</strong> of $\infty$ must be determined with the <strong>usual rule of signs</strong>;

- in claim <strong>2.</strong> it is understood, as usual, that $b_n \neq 0$ eventually, so that the quotient is well defined;

- hypothesis <strong>2.</strong>, namely that $\{b_n\}$ tends to zero <em>from above</em> or <em>from below</em> (and hence that it eventually has constant sign), is <strong>necessary</strong>: with $a_n = 1$ and $b_n = \frac{(-1)^n}{n} \rr 0$ we have

    $$
    \frac{a_n}{b_n} = (-1)^n \: n
    $$

    which is an irregular sequence (it tends neither to $\ip$ nor to $\im$).

<a id="box-texexpbox1-15"></a>

!!! esempio "Example 4: Rule of signs"

    We have:

    - ${\rm if~~} a_n \rr \ell_a \in \R, \ell_a > 0 {\rm ~~and~~} b_n \rr 0^+ {\rm ~~then~~} \frac{a_n}{ b_n} \rr \ip$

    - ${\rm if~~} a_n \rr \ell_a \in \R, \ell_a < 0 {\rm ~~and~~} b_n \rr 0^- {\rm ~~then~~} \frac{a_n}{ b_n} \rr \ip$

    - ${\rm if~~} a_n \rr \ell_a \in \R, \ell_a > 0 {\rm ~~and~~} b_n \rr 0^- {\rm ~~then~~} \frac{a_n}{ b_n} \rr \im$

    - ${\rm if~~} a_n \rr \ell_a \in \R, \ell_a < 0 {\rm ~~and~~} b_n \rr 0^+ {\rm ~~then~~} \frac{a_n}{ b_n} \rr \im$

    Therefore, in order to apply the rules of partial arithmetization of the infinity symbol, it is necessary to determine whether $b_n$ tends to zero from above or from below.

??? dimostrazione "Proof"

    We prove that:

    $$
    a_n \rr \ell_a \in \R,~~c_n \rr \ip  ~~\Rightarrow~~ \frac{a_n}{c_n} \rr 0.
    $$

    For every $\varepsilon >0$, since $a_n \rr \ell_a$, eventually we have

    $$
    \underbrace{|a_n - \ell_a|}_{\ge |a_n| - |\ell_a|} <   \varepsilon {\rm ~~~~hence~~~~}|a_n| < |\ell_a| + \varepsilon.
    $$

    Moreover, since $c_n \rr \ip$, eventually we have

    $$
    c_n > \frac{1}{\varepsilon}
    $$

    It follows that, eventually, we have

    $$
    \frac{|a_n|}{|c_n|} < \frac{|\ell_a|+\varepsilon}{\frac{1}{\varepsilon}}
    {\rm ~~~~and~hence~~~~}
     \left| \frac{a_n}{c_n}\right| < \varepsilon \: (|\ell_a| + \varepsilon) = \underbrace{|\ell_a| \: \varepsilon + \varepsilon^2}_{=\tilde{\varepsilon} {\rm ~and~}> 0}
    $$

    Since $\tilde{\varepsilon}$ is arbitrary, the claim follows. <span class="qed">□</span>

!!! chiave ""

    The four missing operations:

    $$
    \ip \im, \quad 0 \cdot \infty, \quad \frac{0}{0}  {\rm ~~~~and~~~~} \frac{\infty}{\infty}
    $$

    are called <strong>indeterminate forms</strong>, since no rule can be established a priori to determine their result.

<a id="box-texexpbox1-16"></a>

!!! esempio "Example 5: Resolving indeterminate forms $\ip\im$"

    Consider the sequence

    $$
    n \mapsto \sqrt{n+1} - \sqrt{n-1}
    $$

    We have the difference of two sequences:

    $$
    n \mapsto \sqrt{n+1} {\rm ~~with~~} \lim_{n \rr \ip} \sqrt{n+1} = +\infty
    $$

    $$
    n \mapsto \sqrt{n-1} {\rm ~~with~~} \lim_{n \rr \ip} \sqrt{n-1} = +\infty
    $$

    Hence we fall into the indeterminate form $\ip \im$.

    Multiplying and dividing by $\sqrt{n+1} + \sqrt{n-1}$ we obtain

    $$
    \frac{(\sqrt{n+1} - \sqrt{n-1})(\sqrt{n+1} + \sqrt{n-1})}{\sqrt{n+1} + \sqrt{n-1}}=\frac{\left(\sqrt{n+1}\right)^2 - \left(\sqrt{n-1}\right)^2}{\sqrt{n+1} + \sqrt{n-1}} = \frac{2}{\sqrt{n+1} + \sqrt{n-1}}
    $$

    recalling that $a^2-b^2=(a-b)(a+b)$. Now, considering the sequence in the denominator, we have

    $$
    \lim_{n \rr \ip} \sqrt{n+1} + \sqrt{n-1}= +\infty+\infty= +\infty
    $$

    Using the rule

    $$
    a_n \rr \ell_a \in \R,~~c_n \rr \infty  ~~\Rightarrow~~ \frac{a_n}{c_n} \rr 0
    $$

    of the theorem on the partial arithmetization of the infinity symbol (product), we have:

    $$
    \lim_{n \rr \ip} \sqrt{n+1} - \sqrt{n-1}= \lim_{n \rr \ip} \frac{2}{\sqrt{n+1} + \sqrt{n-1}} = \frac{2}{+\infty}= 0
    $$

- Limits of sequences of the form:

    $$
    \left\{a_n^{b_n}\right\}
    $$

    can be handled by considering the sequence of their logarithms, taking for simplicity the base $e$.

!!! chiave ""

    Given a sequence  $\left\{a_n^{b_n}\right\}$, we have that:

    \begin{align}
    {\rm if~~~} b_n \: \log a_n \rr \ell &{\rm ~~then~~}  a_n^{b_n} \rr e^\ell\\[2ex]
    {\rm if~~~} b_n \: \log a_n \rr \ip &{\rm ~~then~~}  a_n^{b_n} \rr \ip\\[2ex]
    {\rm if~~~} b_n \: \log a_n \rr 0 &{\rm ~~then~~}  a_n^{b_n} \rr 1\\[2ex]
    {\rm if~~~} b_n \: \log a_n \rr \im &{\rm ~~then~~}  a_n^{b_n} \rr 0
    \end{align}

    If the sequence $\left\{b_n \log a_n\right\}$ is indeterminate (has no limit), then $\left\{a_n^{b_n}\right\}$ is indeterminate as well.

<a id="box-texexpbox1-17"></a>

!!! esempio "Example 6: Computing limits by taking logarithms"

    $$
    \lim_{n \rr \ip} (3 \: n )^{\left(-3 \: n^2 +7\right)}
    $$

    taking logarithms we have

    $$
    \underbrace{\left(-3 \: n^2 +7\right)}_{b_n} \:\: \log \overbrace{3\:n}^{a_n}
    $$

    since

    $$
    \lim_{n \rr \ip} \left(-3 \: n^2 +7\right) \: \log (3\:n) = \im \cdot \ip = \im
    $$

    then

    $$
    \lim_{n \rr \ip} (3 \: n)^{\left(-3 \: n^2 +7\right)} = 0
    $$

<a id="box-texexpbox1-18"></a>

!!! esempio "Example 7: Computing limits by taking logarithms (alternative method)"

    $$
    \lim_{n \rr \ip} (3 \: n )^{\left(-3 \: n^2 +7\right)} = \lim_{n \rr \ip} e^{	\log \left( (3 \: n )^{\left(-3 \: n^2 +7\right)}\right)} = \lim_{n \rr \ip} e^{	(-3 \: n^2 +7) \; \log (3 \: n) }
    $$

    since

    $$
    \lim_{n \rr \ip} \left(-3 \: n^2 +7\right) \: \log (3\:n) = \im \cdot \ip = \im
    $$

    then

    $$
    \lim_{n \rr \ip} (3 \: n)^{\left(-3 \: n^2 +7\right)} = e^{\im}=0
    $$

!!! chiave ""

    We also have the following <strong>indeterminate forms</strong>:

    $$
    1^{\infty}, \quad 0^0, \quad \infty^0
    $$

    Taking logarithms, they correspond to the indeterminate form

    $$
    0 \cdot \infty
    $$

    since:

    $$
    \log \left( 1^{\infty} \right)= \infty \: \log 1 = \infty  \cdot 0
    $$

    $$
    \log \left( 0^{0} \right) = 0 \: \log 0 = 0  \cdot -\infty
    $$

    $$
    \log \left(+\infty^0\right)= 0 \: \log \left(+\infty\right) = 0  \cdot +\infty
    $$

    In the powers $\left\{a_n^{b_n}\right\}$ the base is always (eventually) positive, hence in the form $\infty^0$ the base is $+\infty$.

!!! chiave ""

    Limits of the form

    $$
    0^{\ip} {\rm ~~and~~} 0^{\im}
    $$

    <strong>are not indeterminate forms</strong>. We have:

    $$
    0^{\ip} = 0 {\rm ~~and~~} 0^{\im}= \ip.
    $$

    since, taking logarithms, we have

    $$
    \log \left( 0^{+\infty} \right)= +\infty \cdot \log 0 =  +\infty \cdot -\infty = -\infty  {\rm ~~~~and~~~~} e^{-\infty}=0
    $$

    $$
    \log \left( 0^{-\infty} \right)= -\infty \cdot \log 0 =  -\infty \cdot -\infty = +\infty  {\rm ~~~~and~~~~} e^{+\infty}=+\infty
    $$

<a id="box-texexpbox1-19"></a>

!!! esempio "Example 8: Limits of the forms $0^{\ip}$ and $0^{\im}$"

    - Example of the case $0^{\ip}= 0$:

        $$
        \lim_{n \rr \ip } \left( \frac{1}{n}\right)^{\log n} = 0^{\ip}= 0.
        $$

        Indeed we have

        $$
        \left( \frac{1}{n}\right)^{\log n} = e^{\log \left( \frac{1}{n}\right)^{\log n}} = e^{\log n \: \log \frac{1}{n} }
        $$

        hence

        $$
        \lim_{n \rr \ip } \left( \frac{1}{n}\right)^{\log n} = \lim_{n \rr \ip } e^{ \overbrace{\log n}^{\rr \ip} \: \overbrace{\log \frac{1}{n}}^{\rr \im} } = e^{\im} = 0.
        $$

    - Example of the case  $0^{\im}= \ip$:

        $$
        \lim_{n \rr \ip } \left( \frac{1}{n}\right)^{-\log n} = 0^{\im}= \ip.
        $$

        Indeed we have

        $$
        \left( \frac{1}{n}\right)^{-\log n} = e^{\log \left( \frac{1}{n}\right)^{-\log n}} = e^{-\log n \: \log \frac{1}{n} }
        $$

        hence

        $$
        \lim_{n \rr \ip } \left( \frac{1}{n}\right)^{-\log n} = \lim_{n \rr \ip } e^{ \overbrace{-\log n}^{\rr \im} \: \overbrace{\log \frac{1}{n}}^{\rr \im} } = e^{\ip} = \ip.
        $$

[^1]: A set on which an operation is defined is called an algebraic structure
[^2]: A set is endowed with an order structure if an order relation is defined on it
