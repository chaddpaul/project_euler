var firstTerm = 1;
var secondTerm = 2;
var fibArray = [1,2];

while (secondTerm+firstTerm < 4000000){
var nextTerm = firstTerm + secondTerm;
firstTerm = secondTerm;
secondTerm = nextTerm;
fibArray.push(nextTerm)
}

var value = 0;
for(var i=0;i<fibArray.length;i++){
  if (fibArray[i]%2 === 0){
    value += fibArray[i];
  }
}
