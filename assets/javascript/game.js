$( document ).ready(function() {
  
//Setting up global variables

var randomResult;
var wins =0;
var losses = 0;
var yourTotal = 0;


//Setting up random result for target number to try to match

randomResult = Math.floor(Math.random() * 60) + 59;
console.log(randomResult);


//Setting up crystals with random numbers between 1-12 for each.
$('#target-number').html(randomResult)
for ( i = 0; i < 4; i++){
    var randomCrystals = Math.floor(Math.random() * 11) + 1;
    console.log(randomCrystals);

    //Setting up divs for crystals and assigning classes and random number attribute
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": randomCrystals
    });
    $(".crystals").append(crystal);
}

//Function to get value from each crystal clicked.  
$(".crystal").on('click', function(){
    
    var num = parseInt($(this).attr('data-random'));
    //and add to each other with each click
    yourTotal += num;
    console.log(yourTotal);

    //Alert user when they go over or if they won
    if (yourTotal > randomResult){
        losses--;
        alert('You lose!  Try again!');
    } else if  (yourTotal === randomResult){
        wins++;
        alert('You won! YEAH!')
    }
    

  
});

    
    
      
    }); //End Document ready 
    
