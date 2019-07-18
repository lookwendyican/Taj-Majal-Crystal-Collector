$(document).ready(function() {
  //Target should have a random number from 19-120. 
   
  var RandomTarget = Math.floor(Math.random() *101+19)
  $('#randomNumber').text(Random);
  
  
  //Crystals should have a random number from 1-12.
  var num1= Math.floor(Math.random()*11+1) 
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  
  //  Decaring variables for tally displays
    
  var userTotal= 0;
  var wins= 0;
  var losses = 0;
    
    
  
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  
  //Everytime we click a crystal it should add until we reach Target.  

//if you reach target, you win!Win increment add to counter
function youWon(){
  alert("You brought the right amount of jewels!");
    wins++;
  
  
    $('#numberWins').text(wins);
    reset();
  }
  
  //If we go over,  you loose round.  Start Over!  Loose increment and to counter

     
    
function loserBaby(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  
  //Reset round
  
  //round increment and to counter
  
  
  //last tags for the READY function
  

    //resets the game
     
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      }
    

    
    //sets up click for stones
    
    
$('#garnet').on ('click', function(){
  userTotal = userTotal + num1;
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text(userTotal);
        //sets win/lose conditions
      if (userTotal == Random){
        youWon();
      }
      else if ( userTotal > Random){
      loserBaby();
      } 
}) 
    
    
$('#jade').on ('click', function(){
  userTotal = userTotal + num2;
  console.log("New userTotal= " + userTotal);


  $('#finalTotal').text(userTotal);
      if (userTotal == Random){
        youWon();
      }
      else if ( userTotal > Random){
      loserBaby();
      }
}) 
    
    
$('#lapis').on ('click', function(){
  userTotal = userTotal + num3;
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text(userTotal);
//sets win/lose conditions


        if (userTotal == Random){
        youWon();
      }
      else if ( userTotal > Random){
      loserBaby();
      }
}) 
    
    
$('#onyx').on ('click', function(){
  userTotal = userTotal + num4;
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text(userTotal);
        if (userTotal == Random){
        youWon();
      }
      else if ( userTotal > Random){
      loserBaby();
      }
});  
});
    
    
   