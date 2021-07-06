var index;
function lastIndexOf(arr, num){
    let i;
    for (i=arr.length-1;i>=0;i--){
   if(arr[i]===num){
       index=i;
        break;
   }
  }
  if(i===-1){index=-1;}
  return index;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ],3));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ],4));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ],1));
console.log(lastIndexOf([ 5, 5, 5 ],  5));
console.log(lastIndexOf([],  -1));