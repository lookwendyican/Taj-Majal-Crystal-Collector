$( document ).ready(function() {
  

    
//Setting up global variables

var randomResult;
var wins =0;
var losses = 0;
var yourTotal = 0;

var images = [ "assets/images/transparent-garnet.png", "assets/images/green-transparent-stone-8.png" , "assets/images/transparent-lapis.png" , "assets/images/obsidian-transparent.png"]

//Setting up random result for target number to try to match

var startGame = function() {

    $(".crystals").empty();

 
    randomResult = Math.floor(Math.random() * 60) + 59;
    console.log(randomResult);


    //Setting up crystals with random numbers between 1-12 for each.
    $('#target-number').html(randomResult)
    for ( i = 0; i < 4; i++){
        var randomCrystals = Math.floor(Math.random() * 11) + 1;
        console.log(randomCrystals);

        //Setting up and IMAGE container, instead of a div to pull up cyrstals from array and assigning classes and random number attribute
        var crystal = $("<img>");
        crystal.attr({
            "class": 'crystal',
            "data-random": randomCrystals,
            "src": images[i]
        });
       
        $(".crystals").append(crystal);
    }
    $("#user-total").html(yourTotal);
} //End startGame function

startGame ();



//Function to get value from each crystal clicked.  

//(Event delegation)
$(document).on('click', '.crystal', function(){
    
    var num = parseInt($(this).attr('data-random'));
    //and add to each other with each click
    yourTotal += num;
    console.log(yourTotal);
    $("#user-total").html(yourTotal);

    //Alert user when they go over or if they won
    if (yourTotal > randomResult){
        losses++;
        
        //Add losses to counter
        $("#losses-score").html(losses);
        alert('You lose!  Try again!');
        yourTotal =0;
        startGame ();

    } else if  (yourTotal === randomResult){
        wins++;
         //Add wins to counter
        $("#wins-score").html(wins);
        alert('You won! YEAH!')
        yourTotal =0;
        startGame ();
    }
    

  
});

    
    
      
    }); //End Document ready 
    
