const questionBox = document.getElementById('questionBox');
const inputBox = document.getElementById('inputBox');

let mySums = [];
let counter = 0;

function makeSum(){
  for (var i = 0; i < 10; i++) {
    let mySum = {};
    mySum.numA = makeNumber();
    mySum.numB = makeNumber();
    mySum.ans = mySum.numA * mySum.numB;
    mySums.push(mySum);
  }
}

function showSum(){
  questionBox.innerHTML = mySums[counter].numA;
  questionBox.innerHTML += " x ";
  questionBox.innerHTML += mySums[counter].numB;
  inputBox.focus();
}

function inputHandler(myVar){
  if(myVar.keyCode == 13){
    mySums[counter].myAns = inputBox.value;
    inputBox.value = "";
    console.log(mySums);
    counter++;
    showSum();
  }

}

function makeNumber(){
  return Math.floor(Math.random()*9)+1;
}

makeSum();
showSum();

inputBox.addEventListener('keydown',inputHandler,false)
