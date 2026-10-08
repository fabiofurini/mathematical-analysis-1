---
title: "Numerical series"
---

# Numerical series

<div class="info-capitolo" markdown>

**Exercises · Series** · with worked solutions · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-5-series.pdf)

</div>

!!! esercizio "Exercise 1"

    Determine, as $\alpha \in \mathbb{R}$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\frac{(e^{\alpha^2-3})^n}{\log(1+n)}
    $$

??? soluzione "Solution"

    This is a series with positive terms. Applying the ratio test, we obtain

    $$
    \lim_{n\to\ip}\frac{(e^{\alpha^2-3})^{n+1}}{\log(1+n+1)}\frac{\log(1+n)}{(e^{\alpha^2-3})^n}=e^{\alpha^2-3}
    $$

    The test guarantees that the given series converges for $-\sqrt{3}<\alpha<\sqrt{3}$ and diverges for $\alpha<-\sqrt{3}$ and for $\alpha>\sqrt{3}$, while it gives no information for $\alpha=\pm\sqrt{3}$. For $\alpha=\pm\sqrt{3}$, the series becomes

    $$
    \sum_{n=1}^{\infty}\frac{1}{\log(1+n)}
    $$

    which diverges by the comparison test, since

    $$
    a_n=\frac{1}{\log(1+n)}>\frac{1}{n}
    $$

    and the latter is the general term of the harmonic series, which diverges. Overall, the given series converges for $-\sqrt{3}<\alpha<\sqrt{3}$, while it diverges for $\alpha\leq-\sqrt{3}$ and for $\alpha\geq\sqrt{3}$.

!!! esercizio "Exercise 2"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\frac{\log n}{n^3}
    $$

??? soluzione "Solution"

    First of all, we observe that the necessary condition for convergence is satisfied. Moreover, we have

    $$
    a_n=\frac{\log n}{n^3}<\frac{n}{n^3}=\frac{1}{n^2}
    $$

    By comparison with the generalized harmonic series with exponent $p=2$, the given series converges.

!!! esercizio "Exercise 3"

    Determine, as $\alpha \in \mathbb{R}$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\frac{n^{2-\alpha}}{\arctan{\frac{1}{n^2}}+\frac{1}{\sqrt{n}}}
    $$

??? soluzione "Solution"

    This is a series with positive terms. Since

    $$
    \arctan{\frac{1}{n^2}}+\frac{1}{\sqrt{n}}=\frac{1}{n^2}+o\left(\frac{1}{n^2}\right)+\frac{1}{\sqrt{n}}\sim\frac{1}{\sqrt{n}}
    $$

    we have

    $$
    a_n=\frac{n^{2-\alpha}}{\arctan{\frac{1}{n^2}}+\frac{1}{\sqrt{n}}}\sim\frac{n^{2-\alpha}}{\frac{1}{\sqrt{n}}}=\frac{1}{n^{\alpha-\frac{5}{2}}}
    $$

    Therefore, by the limit comparison test, the series converges for $\alpha-\frac{5}{2}>1$, that is, if and only if $\alpha>\frac{7}{2}$.

!!! esercizio "Exercise 4"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=0}^{\infty}\frac{(-1)^n\sin\left(n\frac{\pi}{2}\right)}{2n+5}
    $$

??? soluzione "Solution"

    Observing that

    $$
    \sin\left(n\frac{\pi}{2}\right) = \left\{ \begin{array}{ll}
             0 & \mbox{if n is even, that is $n=2k$,}\\
            (-1)^k & \mbox{if n is odd, that is $n=2k+1$}.\end{array} \right.
    $$

    the given series is actually summed only over the odd indices and can be rewritten in the form

    $$
    \sum_{n=0}^{\infty}\frac{(-1)^n\sin\left(n\frac{\pi}{2}\right)}{2n+5}=\sum_{k=0}^{\infty}\frac{(-1)^{2k+1}(-1)^k}{2(2k+1)+5}=\sum_{k=0}^{\infty}\frac{(-1)^{k+1}}{4k+7}
    $$

    The latter is an alternating series; it does not converge absolutely, since $\left|\frac{(-1)^{k+1}}{4k+7}\right|=\frac{1}{4k+7}\sim\frac{1}{4k}$ as $k\to+\infty$, where the last one is the general term of a harmonic series (which diverges). However, the given series converges (conditionally) by the Leibniz test. Indeed, it is immediate to prove that the sequence defined by $a_k=\frac{1}{4k+7}$ is positive, infinitesimal and monotonically decreasing.

!!! esercizio "Exercise 5"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=2}^{\infty}\frac{1-\sqrt{1-\frac{2}{n}}}{n}
    $$

??? soluzione "Solution"

    Recalling that $\sqrt{1-\frac{2}{n}}=1-\frac{1}{2}\frac{2}{n}+o\left(\frac{1}{n}\right)$, we have

    $$
    a_n=\frac{1-\sqrt{1-\frac{2}{n}}}{n}=\frac{1-1+\frac{1}{2}\frac{2}{n}+o\left(\frac{1}{n}\right)}{n}\sim\frac{\frac{1}{n}}{n}=\frac{1}{n^2}
    $$

    which is the general term of the generalized harmonic series with exponent $2>1$. Therefore the original series converges by the limit comparison test.

!!! esercizio "Exercise 6"

    Determine, as $x \in \mathbb{R}$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\frac{e^{2/n}-1-\frac{x}{n}}{\sqrt{\frac{1}{n}}}
    $$

??? soluzione "Solution"

    Left as an exercise. Use the second-order Maclaurin expansion of $e^t$, with $t=\frac{2}{n}$. By limit comparison with the generalized harmonic series, the given series will turn out to be divergent for $x\neq2$ and convergent for $x=2$.

!!! esercizio "Exercise 7"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\log\left(\frac{n^2+3\sqrt{n}}{n^2+4}\right)
    $$

??? soluzione "Solution"

    This is a series with positive terms. Since

    $$
    \log\left(\frac{n^2+3\sqrt{n}}{n^2+4}\right)=\log\left(1+\frac{n^2+3\sqrt{n}}{n^2+4}-1\right)\sim\frac{n^2+3\sqrt{n}}{n^2+4}-1
    $$

    Then

    $$
    a_n=\log\left(\frac{n^2+3\sqrt{n}}{n^2+4}\right)\sim\frac{n^2+3\sqrt{n}}{n^2+4}-1=\frac{3\sqrt{n}-4}{n^2+4}\sim3\frac{1}{n^\frac{3}{2}}
    $$

    Therefore, by comparison with the generalized harmonic series with exponent $\frac{3}{2}>1$, it follows that the series converges by the limit comparison test.

!!! esercizio "Exercise 8"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\frac{e^{\frac{1}{n}}-1}{n+1}
    $$

??? soluzione "Solution"

    This is a series with positive terms. Since

    $$
    e^\frac{1}{n}-1\sim\frac{1}{n}
    $$

    we immediately have

    $$
    a_n=\frac{e^{\frac{1}{n}}-1}{n+1}\sim\frac{\frac{1}{n}}{n}=\frac{1}{n^2}
    $$

    Therefore, by comparison with the generalized harmonic series with exponent $2>1$, it follows that the series converges by the limit comparison test.

!!! esercizio "Exercise 9"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\left(e^{\frac{n^2+2n}{n^2+1}}-e\right)
    $$

??? soluzione "Solution"

    This is a series with positive terms. We have

    $$
    a_n=e^{\frac{n^2+2n}{n^2+1}}-e=e\left(e^{\frac{n^2+2n}{n^2+1}-1}-1\right)=e\left(e^{\frac{2n-1}{n^2+1}}-1\right)\sim e \frac{2n-1}{n^2+1}\sim2e\frac{1}{n}
    $$

    which is the general term of the harmonic series. We used the fact that $\frac{2n-1}{n^2+1}\to0$ and also $\frac{2n-1}{n^2+1}\sim\frac{2}{n}$ as $n\to+\infty$. Therefore, the original series diverges by the limit comparison test.

!!! esercizio "Exercise 10"

    Determine, as $\alpha>0$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\left(\sin \frac{1}{n^{3\alpha}}\right)n^{\frac{3}{2}-2\alpha}
    $$

??? soluzione "Solution"

    This is a series with positive terms. Since

    $$
    \sin \frac{1}{n^{3\alpha}}\sim\frac{1}{n^{3\alpha}}
    $$

    then we immediately have

    $$
    a_n=\left(\sin \frac{1}{n^{3\alpha}}\right)n^{\frac{3}{2}-2\alpha}\sim\frac{n^{\frac{3}{2}-2\alpha}}{n^{3\alpha}}=\frac{1}{n^{5\alpha-\frac{3}{2}}}
    $$

    Therefore, by the limit comparison test, the series converges for $5\alpha-\frac{3}{2}>1$, that is, if and only if $\alpha>\frac{1}{2}$.

!!! esercizio "Exercise 11"

    Determine, as $\alpha>0$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\left(\sqrt{1+\frac{1}{n^\alpha}}-1\right)n^{2-\alpha}
    $$

??? soluzione "Solution"

    This is a series with positive terms. Since

    $$
    \sqrt{1+\frac{1}{n^\alpha}}-1\sim\frac{1}{2}\frac{1}{n^\alpha}
    $$

    then

    $$
    a_n=\left(\sqrt{1+\frac{1}{n^\alpha}}-1\right)n^{2-\alpha}\sim\frac{1}{2n^\alpha}n^{2-\alpha}=\frac{1}{2n^{2\alpha-2}}
    $$

    Therefore, by the limit comparison test, the series converges for $2\alpha-2>1$, that is, if and only if $\alpha>\frac{3}{2}$.

!!! esercizio "Exercise 12"

    Determine, as $\alpha>0$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\left(\cos \frac{1}{n^\alpha}-1\right)n^{1-\alpha}
    $$

??? soluzione "Solution"

    The given series has negative terms (think about the cosine of an angle between 0 and 1). Therefore, we can apply to it the tests for series with positive terms, factoring out the negative sign. Observing that, for $\alpha>0$,

    $$
    \left(\cos \frac{1}{n^\alpha}-1\right)n^{1-\alpha}\sim-\frac{n^{1-\alpha}}{2n^{2\alpha}}=-\frac{1}{2n^{3\alpha-1}}
    $$

    we immediately obtain that, by the limit comparison test, the given series converges for $3\alpha-1>1$, i.e., $\alpha>\frac{2}{3}$.

!!! esercizio "Exercise 13"

    Determine, as $\alpha \in \mathbb{R}$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\frac{|\alpha^2-5\alpha+7|^n}{3n^2+\log n}
    $$

??? soluzione "Solution"

    First of all, we observe that this is a series with positive terms, since $\alpha^2-5\alpha+7>0$ for every $\alpha \in \mathbb{R}$. Using the root test, we obtain

    $$
    \lim_{n\to+\infty}\sqrt[n]{\frac{|\alpha^2-5\alpha+7|^n}{3n^2+\log n}}=\lim_{n\to+\infty}\frac{|\alpha^2-5\alpha+7|}{\sqrt[n]{3n^2+\log n}}=\lim_{n\to+\infty}\frac{|\alpha^2-5\alpha+7|}{\sqrt[n]{3}\sqrt[n]{n^2}}=|\alpha^2-5\alpha+7|
    $$

    where we took into account the hierarchy of infinities and the limit $\sqrt[n]{n^2}\to1$. Since $|\alpha^2-5\alpha+7|<1$ is satisfied if and only if $2<\alpha<3$, while $|\alpha^2-5\alpha+7|>1$ is satisfied if and only if $\alpha<2$ or $\alpha>3$, and $|\alpha^2-5\alpha+7|=1$ if and only if $\alpha=2$ or $\alpha=3$, the test guarantees that the given series

    - converges for $2<\alpha<3$;

    - diverges for $\alpha<2$ or $\alpha>3$.

    For $\alpha=2$ or $\alpha=3$, the given series has general term $a_n=\frac{1}{3n^2+\log n}\sim\frac{1}{3n^2}$, which satisfies the necessary condition, and the series converges by limit comparison with the generalized harmonic series with exponent $2>1$.

!!! esercizio "Exercise 14"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\frac{1}{n\left(\sqrt{1+\frac{3}{n^3}}-1\right)}
    $$

??? soluzione "Solution"

    This is a series with positive terms. Since

    $$
    \sqrt{1+\frac{3}{n^3}}-1\sim\frac{1}{2}\frac{3}{n^3}
    $$

    then

    $$
    a_n=\frac{1}{n\left(\sqrt{1+\frac{3}{n^3}}-1\right)}\sim\frac{1}{n\left(\frac{3}{2n^3}\right)}=\frac{2}{3}n^2
    $$

    Therefore the given series diverges since its general term is not infinitesimal.

!!! esercizio "Exercise 15"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}e^{\sin n} \; \left(\sin \frac{1}{n}\right) \; \left(e^{\frac{1}{\sqrt{n}}}-1\right) \; \cos n
    $$

??? soluzione "Solution"

    Left as an exercise. The given series converges absolutely and hence it also converges.

!!! esercizio "Exercise 16"

    Determine, as $\alpha \in \mathbb{R}$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=2}^{\infty}\frac{\left[2(\log n)^{\alpha-7}\right]^n}{n^2}
    $$

??? soluzione "Solution"

    Left as an exercise. Apply the root test. The given series converges for $\alpha<7$ and diverges for $\alpha\geq7$.

!!! esercizio "Exercise 17"

    Determine, as $\alpha \in \mathbb{R}$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\frac{4^n}{n^3(7^{\alpha+2})^n}
    $$

??? soluzione "Solution"

    Left as an exercise. Apply the root test. The given series converges for $\alpha\geq\frac{\log 4}{\log 7}-2$.

!!! esercizio "Exercise 18"

    Determine, as $\alpha \in \mathbb{R}$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=0}^{\infty}\left[\cos\left(\frac{1}{n+2}\right)^\alpha-1\right]n^4
    $$

??? soluzione "Solution"

    The given series has negative terms (think about the cosine of an angle between 0 and 1). Therefore, we can apply to it the tests for series with positive terms, factoring out the negative sign. Observing that

    $$
    \left[\cos\left(\frac{1}{n+2}\right)^\alpha-1\right]n^4\sim-\frac{n^4}{2(n+2)^{2\alpha}}\sim-\frac{n^4}{2n^{2\alpha}}=-\frac{1}{2n^{2\alpha-4}}
    $$

    we immediately obtain that, by the limit comparison test, the given series converges for $2\alpha-4>1$, i.e., $\alpha>\frac{5}{2}$.

!!! esercizio "Exercise 19"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\binom{n}{4}\frac{1}{3^n}
    $$

??? soluzione "Solution"

    Work it out as an exercise using the ratio test. The given series converges.

!!! esercizio "Exercise 20"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\frac{\sqrt{n!}}{\left(\sqrt{n}\right)^n}
    $$

??? soluzione "Solution"

    This is a series with positive terms. Applying the ratio test, we obtain

    $$
    \lim_{n\to+\infty}\frac{a_{n+1}}{a_n}=\lim_{n\to+\infty}\frac{\sqrt{(n+1)!}}{\left(\sqrt{n+1}\right)^{n+1}}\frac{\left(\sqrt{n}\right)^n}{\sqrt{n!}}=\lim_{n\to+\infty}\left(\sqrt{\frac{n}{n+1}}\right)^n
    $$

    Recalling the fundamental limit

    $$
    \lim_{n\to+\infty}\left(1+\frac{1}{n}\right)^n=e
    $$

    we obtain

    $$
    \lim_{n\to+\infty}\left(\sqrt{\frac{n}{n+1}}\right)^n=\lim_{n\to+\infty}\left(\sqrt{\frac{n+1}{n}}\right)^{-n}=\lim_{n\to+\infty}\left(1+\frac{1}{n}\right)^{-\frac{1}{2}n}=e^{-\frac{1}{2}}=l
    $$

    Since $l=e^{-\frac{1}{2}}<1$, the given series converges.

!!! esercizio "Exercise 21"

    Determine, as $\alpha>0$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\left[\log\left(\frac{n+2}{n+1}\right)\right]^\alpha
    $$

??? soluzione "Solution"

    Left as an exercise. Add and subtract 1 inside the argument of the logarithm and use a suitable asymptotic estimate. The given series converges for $\alpha>1$.

!!! esercizio "Exercise 22"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}n\left(\frac{2}{\sqrt{n}}-\sin \frac{2}{\sqrt{n}}\right)^2
    $$

??? soluzione "Solution"

    Left as an exercise. It suffices to expand the general term of the series up to the first nonzero term of the expansion. The given series converges.

!!! esercizio "Exercise 23"

    Determine, as $x \in \mathbb{R}$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=0}^{\infty}\frac{|x-12|^{n+1}}{2n^2e^{-n}}
    $$

??? soluzione "Solution"

    Left as an exercise. Use the ratio test. The given series converges for $12-\frac{1}{e}\leq x \leq 12+\frac{1}{e}$ and diverges elsewhere.

!!! esercizio "Exercise 24"

    Determine, as $x \in \mathbb{R}$ varies, the behavior of the following series:

    $$
    \sum_{n=0}^{\infty}\left(\frac{x}{|x-1|}\right)^n
    $$

??? soluzione "Solution"

    This is a geometric series with ratio $q=\frac{x}{|x-1|}$, defined for $x \neq 1$. The series converges absolutely (and hence also converges) if and only if

    $$
    \left|\frac{x}{x-1}\right|<1
    $$

    that is, if and only if

    $$
    -1<\frac{x}{x-1}<1
    $$

    whose solution interval is $x<\frac{1}{2}$.

!!! esercizio "Exercise 25"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}\frac{\cos{(n\pi)}\;e^{-2n}\;\log n}{n}
    $$

??? soluzione "Solution"

    Recall that $\cos(n\pi)=(-1)^n$; therefore the series is alternating. Since $\log n < n$ for every $n\in\mathbb{N}$, we have:

    $$
    |a_n|=\left|(-1)^n\frac{e^{-2n}\;\log n}{n}\right|=e^{-2n}\left(\frac{\log n}{n}\right)<\left(\frac{1}{e^2}\right)^n
    $$

    where the last one is the general term of the geometric series with ratio $q=\frac{1}{e^2}<1$, which converges. By the comparison test we obtain that the given series converges absolutely, hence it also converges.

!!! esercizio "Exercise 26"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=0}^{\infty}\frac{1+n\cos{(n\pi)}}{2n^2+1}
    $$

??? soluzione "Solution"

    Left as an exercise. Observe that $\sum_{n=0}^{\infty}\frac{1}{2n^2+1}$ is convergent, hence it is possible to rewrite

    $$
    \sum_{n=0}^{\infty}\frac{1+n\cos{(n\pi)}}{2n^2+1}= \sum_{n=0}^{\infty}\frac{1}{2n^2+1} + \sum_{n=0}^{\infty}\frac{n\cos{(n\pi)}}{2n^2+1}
    $$

    where $\cos{(n\pi)}=(-1)^n$. Determine the behavior of the second series; one will verify that it converges (conditionally) by the Leibniz test and that, in the end, the given series converges as a sum of convergent series.

!!! esercizio "Exercise 27"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=1}^{\infty}(-1)^n\frac{\cos n}{3n^2+2\sqrt{n}}
    $$

??? soluzione "Solution"

    The given series is alternating. Setting $a_n=(-1)^n\frac{\cos n}{3n^2+2\sqrt{n}}$, we have

    $$
    |a_n|=\left|(-1)^n\frac{\cos n}{3n^2+2\sqrt{n}}\right|=\frac{|\cos n|}{3n^2+2\sqrt{n}}\leq\frac{1}{3n^2+2\sqrt{n}}\sim\frac{1}{3n^2}
    $$

    where we used the fact that $|\cos n|\leq1$ for every $n$ and $3n^2+2\sqrt{n}\sim3n^2$ as $n\to+\infty$. By the limit comparison test with the generalized harmonic series with exponent $2>1$ and by the comparison test, the given series converges absolutely, and hence it also converges.

!!! esercizio "Exercise 28"

    Determine the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=2}^{\infty}(-1)^n\frac{1-\sin^2(n\pi/2)}{3n+\sin n}
    $$

??? soluzione "Solution"

    This is an alternating series. Observing that

    $$
    \sin^2(n\pi/2) = \left\{ \begin{array}{ll}
             0 & \mbox{if n is even, that is $n=2k$,}\\
            1 & \mbox{if n is odd, that is $n=2k+1$}.\end{array} \right.
    $$

    and setting $a_n=\frac{1-\sin^2(n\pi/2)}{3n+\sin n}$, we have

    $$
    a_n = \left\{ \begin{array}{ll}
             \frac{1}{3n+\sin n} & \mbox{if $n=2k$,} \vspace{0.5cm} \\ 
            0 & \mbox{if $n=2k+1$}.\end{array} \right.
    $$

    Hence the given series can be rewritten in the form

    $$
    \sum_{n=2}^{\infty}(-1)^n\frac{1}{3n+\sin n}=\sum_{k=1}^{\infty}(-1)^{2k}\frac{1}{6k+\sin(2k)}=\sum_{k=1}^{\infty}\frac{1}{6k+\sin(2k)}
    $$

    where, for the second equality, we used the fact that $n=2k$. The last series obtained has positive terms. Since, as $k\to+\infty$, $\frac{1}{6k+\sin(2k)}\sim\frac{1}{6k}$, the limit comparison test with the harmonic series shows that the given series diverges.

!!! esercizio "Exercise 29"

    Determine, as $x \in \mathbb{R}$ varies, the behavior of the following series, making appropriate use of the tests studied:

    $$
    \sum_{n=0}^{\infty} \; \left( \frac{2x}{1-x^2}\right)^n
    $$

    .

??? soluzione "Solution"

    Left as an exercise. Argue as in exercise 24.
