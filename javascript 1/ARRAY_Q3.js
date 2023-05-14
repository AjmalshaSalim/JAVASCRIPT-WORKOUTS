let array=[1,2,3,4,5,6,7,8];

let sum=0;
let average=0;
let limit=array.length;
for(i=0;i<limit;i++){
    sum=array[i]+sum;
}
average=sum/limit;
console.log("sum is "+average);