function start(){
document.getElementById('riddle1').style.display="block";
document.getElementById('start').style.display="none";
}

var answers = ["鸠","此起彼落","乌贼","白","月饼"]

function enterAnswer1(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[0]){
    alert("You're right!");
  document.getElementById('riddle2').style.display="block";
  document.getElementById('riddle1').style.display="none";
  }
  else{
    alert("Sorry, you're wrong.Try again! ");
  }
}

function enterAnswer2(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[1]){
    alert("You're right!");
  document.getElementById('riddle3').style.display="block";
  document.getElementById('riddle2').style.display="none";
  }
  else{
    alert("Sorry, you're wrong.Try again! ");
  }
}

function enterAnswer3(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[2]){
    alert("You're right!");
  document.getElementById('riddle4').style.display="block";
  document.getElementById('riddle3').style.display="none";
  }
  else{
    alert("Sorry, you're wrong.Try again! ");
  }
}

function enterAnswer4(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[3]){
    alert("You're right!");
  document.getElementById('riddle5').style.display="block";
  document.getElementById('riddle4').style.display="none";
  }
  else{
    alert("Sorry, you're wrong.Try again! ");
  }
}

function enterAnswer5(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[4]){
    alert("You're right!");
}
  else{
    alert("Sorry, you're wrong.Try again! ");
  }
}

function help1(){
  alert("关关雎（），在河之洲");
}

function help2(){
  alert("玩跷跷板的时候一边起来一边落下。该词形容连续不断");
}

function help3(){
  alert("生活在海里，能吃，又称墨斗");
}

function help4(){
  alert("看百的字型，该字是一种颜色");
}

function help5(){
  alert("中秋必吃什么");
}

function correctAnswer1(){
  alert("鸠");
}

function correctAnswer2(){
  alert("此起彼落");
}

function correctAnswer3(){
  alert("乌贼");
}

function correctAnswer4(){
  alert("白");
}

function correctAnswer5(){
  alert("月饼");
}

function next1(){
  document.getElementById('riddle2').style.display="block";
  document.getElementById('riddle1').style.display="none";
}

function next2(){
  document.getElementById('riddle3').style.display="block";
  document.getElementById('riddle2').style.display="none";
}

function next3(){
  document.getElementById('riddle4').style.display="block";
  document.getElementById('riddle3').style.display="none";
}

function next4(){
  document.getElementById('riddle5').style.display="block";
  document.getElementById('riddle4').style.display="none";
}

function next5(){
  document.getElementById('riddle5').style.display="none";
  alert("The End");
}
