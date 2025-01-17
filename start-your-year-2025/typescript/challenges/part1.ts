function plus(x: number | string | undefined, y: number | string) {
    if (typeof x === "number" && typeof y === "number") {   return x + y; } 

    else if (typeof x === "string" && typeof y === "string") { return x + y; }

    else if (typeof x === "undefined" && typeof y === "string") { return undefined; }
    
}

console.log(plus(2025, 1)); 
console.log(plus(undefined, 21)); 
console.log(plus("StackUp", "Learn")); 
