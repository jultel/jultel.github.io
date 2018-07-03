
function fibonachi1 (nnnn) {
    // body...
    if(nnnn== 0 || nnnn==1)
    {return 1;
    }
    return fibonachi1(nnnn-2)+fibonachi1(nnnn-1);

}
console.log(fibonachi1(5));
document.getElementById("Fib1").innerHTML=fibonachi1(5);
