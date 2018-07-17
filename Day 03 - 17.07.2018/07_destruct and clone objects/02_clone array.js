let arr1=["A","B"];

//every change in arr2 will affect arr1 
//because both point to the same array
let arr2=arr1;

//clone arr1 to arr3
let arr3=[...arr1];
console.log(arr1,arr2,arr3);


arr3[0]="Z";
console.log(arr1,arr2,arr3);

arr2[0]="T";
console.log(arr1,arr2,arr3);

/*
OUTPUT:
_________________________

[ 'A', 'B' ] [ 'A', 'B' ] [ 'A', 'B' ]
[ 'A', 'B' ] [ 'A', 'B' ] [ 'Z', 'B' ]
[ 'T', 'B' ] [ 'T', 'B' ] [ 'Z', 'B' ]
*/