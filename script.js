$(document).ready(function(){
 
    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
	
 
    magic8Ball.askQuestion = function(question){
		    $("#answer").hide();
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
 
        $("#8ball").effect( "shake" );
        $("#answer").text( answer );
        $("#answer").fadeIn(4000);
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
 
        console.log(question);
        console.log(answer);
    };
 
    $("#answer").hide();
  
    var onClick = function() {
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
//		$("#answer").fadeIn(4000);
    };
 
    $("#questionButton").click( onClick );
 
});






