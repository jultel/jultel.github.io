
function fibonacci (nnnn) {
    // body...
    if(nnnn== 0 || nnnn==1)
    {return 1;
    }
    return fibonacci(nnnn-2)+fibonacci(nnnn-1);

}
console.log(fibonacci(5));
document.getElementById("Fib1").innerHTML=fibonacci(5);
