// 84ms >13.65%
var fib = function(N) {
    if (N == 0) return 0;
    if (N == 1) return 1;
    return fib(N - 1) + fib(N - 2);
};