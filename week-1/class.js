// console.log("siddhesh");
// console.log(a);
/* Interpreted lang so even if there is error "siddhesh" will be printed */

/*3 sum*/
// function ans(arr){
//     arr.sort((a, b) => a - b); // sort the array in ascending order
//     let j,k;
//      for(let i=0;i<arr.length;i++){
//         j=0,k=arr.length-1;
//          while(j<k){
//             if(arr[i]+arr[j]+arr[k]==0){
//                 console.log(arr[i]+" "+arr[j]+" "+arr[k]);
//                 j++;
//                 k--;
//             }
//             else if(arr[i]+arr[j]+arr[k]<0)j++;
//             else k--;
//          }
//      }
// }
// let arr = [1,-1,0,23,-23,14];
// ans(arr);

function sum(num1, num2,fnToCall) {
    let result = num1 + num2;
   fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}
const a = sum(1,2,displayResult);
// You are only allowed to call one function after this
// How will you displayResult of a sum
