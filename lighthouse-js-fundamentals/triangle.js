//create lines for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
//using lines to build a triangle with a special size
function buildTriangle(num){
    var str="";
    for(let i=1;i<= num;i++){
    
       str+=makeLine(i);
    }
    return str;
}
//print out the triangle
console.log(buildTriangle(10));
