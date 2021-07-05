function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(6));
}
emotions("happy", function(num){
    let str="";
    for (let i=0;i<num;i++){
        str+="ha";
    }
    return str+"!";
});