---
title: "Verifying limits of sequences"
---

# Verifying limits of sequences

<div class="info-capitolo" markdown>

**Exercises · Limits of sequences** · with worked solutions · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-3-limits.pdf)

</div>

!!! esercizio "Exercise 1"

    Using the definition of limit, verify that:

    $$
    \displaystyle \lim_{n\to+\infty}\frac{n}{2n+5}=\frac{1}{2}
    $$

??? soluzione "Solution"

    We have

    $$
    a_{n}=\frac{n}{2n+5}
    $$

    We must verify that for every $\varepsilon>0$ there exists $n(\varepsilon) \in \N$ such that

    $$
    n>n(\varepsilon) \Rightarrow \frac{1}{2}-\varepsilon<a_{n}<\frac{1}{2}+\varepsilon
    $$

    We have

    $$
    a_{n}-\frac{1}{2}=-\frac{5}{4n+10},
    $$

    hence we must verify that

    $$
    n>n(\varepsilon)\Rightarrow -\varepsilon<-\frac{5}{4n+10}<\varepsilon
    $$

    The second inequality is always true, while the first is equivalent to

    $$
    4n+10>\frac{5}{\varepsilon}
    {\rm ~~~hence~it~is~satisfied~for~~} n>\frac{5}{4\varepsilon}-\frac{5}{2}
    $$

    For a fixed $\varepsilon > 0$, it suffices to choose the first integer

    $$
    n(\varepsilon) > \frac{5}{4\varepsilon}-\frac{5}{2}
    $$

    to satisfy the condition required by the definition of limit.

!!! esercizio "Exercise 2"

    Using the definition of limit, verify that:

    $$
    \displaystyle \lim_{n\to+\infty}\frac{1}{\sqrt{n+1}}=0
    $$

??? soluzione "Solution"

    We have

    $$
    a_{n}=\frac{1}{\sqrt{n+1}}
    $$

    We must verify that for every $\varepsilon>0$ there exists $n(\varepsilon) \in \N$ such that

    $$
    n>n(\varepsilon) \Rightarrow -\varepsilon<a_{n}< \varepsilon
    $$

    The first inequality is always true, while the second is equivalent to

    $$
    \sqrt{n+1}>\frac{1}{\varepsilon}
    {\rm ~~~hence~it~is~satisfied~for~~} n>\frac{1}{\varepsilon^{2}}-1
    $$

    For a fixed $\varepsilon > 0$, it suffices to choose the first integer

    $$
    n(\varepsilon) > \frac{1}{\varepsilon^{2}}-1
    $$

    to satisfy the condition required by the definition of limit.

!!! esercizio "Exercise 3"

    Using the definition of limit, verify that:

    $$
    \displaystyle \lim_{n\to+\infty}\log{\left(1+\frac{1}{n}\right)}=0
    $$

??? soluzione "Solution"

    We have

    $$
    a_{n}=\log{\left(1+\frac{1}{n}\right)}
    $$

    We must verify that for every $\varepsilon>0$ there exists $n(\varepsilon) \in \N$ such that

    $$
    n>n(\varepsilon) \Rightarrow -\varepsilon<a_{n}< \varepsilon
    $$

    The first inequality is always true, while the second is equivalent to

    $$
    1+\frac{1}{n}<e^{\varepsilon}
    {\rm ~~~hence~it~is~satisfied~for~~} n>\frac{1}{e^{\varepsilon}-1}
    $$

    For a fixed $\varepsilon > 0$, it suffices to choose the first integer

    $$
    n(\varepsilon) > \frac{1}{e^{\varepsilon}-1}
    $$

    to satisfy the condition required by the definition of limit.

!!! esercizio "Exercise 4"

    Using the definition of limit, verify that:

    $$
    \displaystyle \lim_{n\to+\infty}\sqrt{4+\frac{1}{n}}=2
    $$

??? soluzione "Solution"

    We have

    $$
    a_{n}=\sqrt{4+\frac{1}{n}}
    $$

    We must verify that for every $\varepsilon>0$ there exists $n(\varepsilon) \in \N$ such that

    $$
    n>n(\varepsilon) \Rightarrow 2-\varepsilon<a_{n}<2+\varepsilon
    $$

    The first inequality is always true since $a_n > 2$ for every $n$, while the second is equivalent to

    $$
    4+\frac{1}{n}<4+\varepsilon^{2}+4\varepsilon
    {\rm ~~~hence~it~is~satisfied~for~~} n>\frac{1}{\varepsilon^{2}+4\varepsilon}
    $$

    For a fixed $\varepsilon > 0$, it suffices to choose the first integer

    $$
    n(\varepsilon) > \frac{1}{\varepsilon^{2}+4\varepsilon}
    $$

    to satisfy the condition required by the definition of limit.

!!! esercizio "Exercise 5"

    Using the definition of limit, verify that:

    $$
    \displaystyle \lim_{n\to+\infty}(n^{2}-1)=+\infty
    $$

??? soluzione "Solution"

    We have

    $$
    a_{n}=n^{2}-1
    $$

    We must verify that for every $M>0$ there exists $n(M) \in \N$ such that

    $$
    n> n(M)  \Rightarrow a_{n}>M
    $$

    The inequality

    $$
    n^{2}-1>M
    {\rm ~~~is~satisfied~for~~} 
    n>\sqrt{M+1}
    $$

    Hence, for a fixed $M > 0$, it suffices to choose the first integer

    $$
    n(M) > \sqrt{M+1}
    $$

    to satisfy the required divergence condition.

!!! esercizio "Exercise 6"

    Using the definition of limit, verify that:

    $$
    \displaystyle \lim_{n\to+\infty}\log{(\sqrt{n}+1)}=+\infty
    $$

??? soluzione "Solution"

    We have

    $$
    a_{n}=\log{(\sqrt{n}+1)}
    $$

    We must verify that for every $M>0$ there exists $n(M) \in \N$ such that

    $$
    n>n(M)\Rightarrow a_{n}>M
    $$

    The inequality

    $$
    \log{(\sqrt{n}+1)}>M
    {\rm ~~~is~satisfied~for~~} 
    n>(e^{M}-1)^2
    $$

    Hence, for a fixed $M > 0$, it suffices to choose the first integer

    $$
    n(M) > (e^{M}-1)^2
    $$

    to satisfy the required divergence condition.
