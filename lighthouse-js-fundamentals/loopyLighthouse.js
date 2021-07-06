var arr1 =  [];
function loopyLighthouse(range, multiples, words){
  for(let i = range[0];i <= range[1]; i ++)
    arr1.push(i);
  for(let j = 0;j < arr1.length; j ++){
    if(arr1[j] % multiples[0] === 0 && arr1[j]  % multiples[1] === 0){
      arr1[j] = words[0] + words[1];
    }
    else if(arr1[j] % multiples[0] === 0 ){
      arr1[j] = words[0];
    }
    else if(arr1[j] % multiples[1] === 0 ){
      arr1[j] = words[1];
    }
  }
}
loopyLighthouse([15, 20], [2, 5], ["Batty", "Beacon"]);
console.log(arr1);