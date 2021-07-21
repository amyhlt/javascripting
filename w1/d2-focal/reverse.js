let input = process.argv.slice(2);
console.log(input);
let reverse = function(original) {
  return original.split('').reverse().join('');
};
if (input.length > 0)
  console.log(reverse(input.join(" ")));
else
  console.log("Please enter some command-line arguments");