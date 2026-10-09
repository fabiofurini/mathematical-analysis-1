---
title: "Bisection method"
---

# Bisection method

<div class="info-capitolo" markdown>

**Exercises · Derivatives** · with worked solutions · [:material-file-pdf-box: Lecture notes, volume (PDF)](../pdf/lecture-notes-4-derivatives.pdf)

</div>

!!! esercizio "Exercise 1"

    Using the bisection method, find the solutions of the equation

    $$
    x^3+2x-1= 0
    $$

    correct to two decimal places.

    <em>(First of all, one must determine how many solutions there are.)</em>

??? soluzione "Solution"

    Written in the form

    $$
    x^3=1-2x,
    $$

    the equation suggests first comparing the graphs of the functions $y=x^3$ and $y=1-2x$, in order to determine beforehand the number of solutions of the equation. Comparing the two graphs, we deduce that there exists a unique solution $\alpha \in (0, 1)$, i.e., a unique zero of the function $f(x)=x^3+2x-1$ in that interval. More formally:

    $$
    \exists ! \; \alpha \in (0,1): \; f(\alpha)=0
    $$

    We therefore proceed by applying the bisection method to the interval $[a,b]=[0,1]$, with $f(0)=-1<0$ and $f(1)=2>0$.

    <em>Iteration 1 $(n=0)$</em>

    \begin{align*}
    [a_0,b_0]=[0,1] \\
    c_0=\frac{a_0+b_0}{2}=\frac{1}{2}
    \end{align*}

    with $f(c_0)=\frac{1}{8}>0$. Then, in the next iteration, $b_1=c_0$.

??? soluzione "Solution"

    <em>Iteration 2 $(n=1)$</em>

    $$
    [a_1,b_1]=\left[0,\frac{1}{2}\right], \; f(0)<0, \; f\left(\frac{1}{2}\right)>0
    $$

    $$
    c_1=\frac{a_1+b_1}{2}=\frac{1}{4}
    $$

    with $f(c_1)<0$. Then, in the next iteration, $a_2=c_1$.

    <em>Iteration 3 $(n=2)$</em>

    $$
    [a_2,b_2]=\left[\frac{1}{4},\frac{1}{2}\right], \; f\left(\frac{1}{4}\right)<0, \; f\left(\frac{1}{2}\right)>0
    $$

    $$
    c_2=\frac{a_2+b_2}{2}=\frac{3}{8}
    $$

    with $f(c_2)<0$. Then, in the next iteration, $a_3=c_2$. To reach the desired level of approximation, we will have to wait until iteration 9 $(n=8)$, where we will obtain

    $$
    a_8=\frac{29}{64}\simeq0.\mathbf{45}3 \hspace{1cm} b_8=\frac{117}{256}\simeq 0.\mathbf{45}7
    $$

    We can finally state that $\alpha \in \left(\frac{29}{64},\frac{117}{256}\right)$ correct to two decimal places.

!!! esercizio "Exercise 2"

    Using the bisection method, find the solutions of the equation

    $$
    x+\log x = 0
    $$

    correct to two decimal places.

    <em>(First of all, one must determine how many solutions there are.)</em>

??? soluzione "Solution"

    Written in the form

    $$
    \log x=-x,
    $$

    the equation suggests first comparing the graphs of the functions $y=\log x$ and $y=-x$, in order to determine beforehand the number of solutions of the equation. Comparing the two graphs, we deduce that there exists a unique solution $\alpha \in (0, 1)$, i.e., a unique zero of the function $f(x)=x+\log x$ in that interval. More formally:

    $$
    \exists ! \; \alpha \in (0,1): \; f(\alpha)=0
    $$

    We therefore proceed by applying the bisection method to the interval $[a,b]=[0+\varepsilon,1], \; \varepsilon>0$, with $f(1)=1>0$ and $f<0$ in a right neighborhood of the point $x_0=0$ of arbitrarily small radius $\varepsilon$ (note that $y=\log x$ is not defined at $x=0$).

    <em>Iteration 1 $(n=0)$</em>

    \begin{align*}
    [a_0,b_0]=[0+\varepsilon,1] \\
    c_0=\frac{a_0+b_0}{2}=\frac{1+\varepsilon}{2}\simeq \frac{1}{2}
    \end{align*}

    with $f(c_0)=\frac{1}{2}-\log 2<0$. Then, in the next iteration, $a_1=c_0$.

    <em>Iteration 2 $(n=1)$</em>

    $$
    [a_1,b_1]=\left[\frac{1}{2},1\right], \; f\left(\frac{1}{2}\right)<0, \; f(1)>0
    $$

    $$
    c_1=\frac{a_1+b_1}{2}=\frac{3}{4}
    $$

    with $f(c_1)>0$. Then, in the next iteration, $b_2=c_1$.

    <em>Iteration 3 $(n=2)$</em>

    $$
    [a_2,b_2]=\left[\frac{1}{2},\frac{3}{4}\right], \; f\left(\frac{1}{2}\right)<0, \; f\left(\frac{3}{4}\right)>0
    $$

    $$
    c_2=\frac{a_2+b_2}{2}=\frac{5}{8}
    $$

    with $f(c_2)>0$. Then, in the next iteration, $b_3=c_2$.

??? soluzione "Solution"

    <em>Iteration 4 $(n=3)$</em>

    $$
    [a_3,b_3]=\left[\frac{1}{2},\frac{5}{8}\right], \; f\left(\frac{1}{2}\right)<0, \; f\left(\frac{5}{8}\right)>0
    $$

    $$
    c_3=\frac{a_3+b_3}{2}=\frac{9}{16}
    $$

    with $f(c_3)<0$. Then, in the next iteration, $a_4=c_3$. Observe that

    $$
    a_3=0.5, \; b_3=0.625
    $$

    and we are therefore still far from having two correct decimal places. To reach the desired level of approximation, we will have to wait until iteration 10 $(n=9)$, where we will obtain

    $$
    a_9=\frac{145}{256}\simeq0.\mathbf{56}6 \hspace{1cm} b_9=\frac{291}{512}\simeq 0.\mathbf{56}8
    $$

    We can finally state that $\alpha \in \left(\frac{145}{256},\frac{291}{512}\right)$ correct to two decimal places.

!!! esercizio "Exercise 3"

    Using the bisection method, find the solutions of the equation

    $$
    2\sin x= x
    $$

    correct to one decimal place.

    <em>(First of all, one must determine how many solutions there are.)</em>

!!! esercizio "Exercise 4"

    Using the bisection method, find the solutions of the equation

    $$
    x^2-2-\log x=0
    $$

    correct to one decimal place.

    <em>(First of all, one must determine how many solutions there are.)</em>
