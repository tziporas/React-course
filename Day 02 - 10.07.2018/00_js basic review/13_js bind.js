function func(desc,num1,num2){
    console.log(desc,num1,num2);
}

func("regular call",2,4);

let funcWrap=()=>{func("wrap call",2,4)};
funcWrap();

/**
      * For a given function, creates a bound function that has the same body as the original function.
      * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
      * @param thisArg An object to which the this keyword can refer inside the new function.
      * @param argArray A list of arguments to be passed to the new function.
*/
let bindFunc=func.bind(this,"bind call",2,4);
bindFunc();

/*
OUTPUT:
______________
regular call 2 4
wrap call 2 4
bind call 2 4
*/