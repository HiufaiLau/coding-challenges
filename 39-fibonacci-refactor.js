// refactor this code 
var yourself = {
    fibonacci : function(n) {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            return this.fibonacci(n - 1) +
                this.fibonacci(n - 2);
        }
    }
};

console.log(yourself.fibonacci(7)); // 13

var yourself = {
    fibonacci: function() {
        let cache = {};
        return function fib(n) {
            if (n === 0) return 0;
            if (n === 1) return 1;
            if (n in cache) return cache[n];
            cache[n] = fib(n - 1) + fib(n - 2);
            return cache[n];
        };
    }()
};

// Key Improvements:
// Memoization: Stores previously calculated Fibonacci numbers to avoid recalculating them, improving efficiency.
// Immediate Invocation: The function is immediately invoked, creating a closure that holds the cache.