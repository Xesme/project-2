// backend logic



// frontend logic

$(document).ready(function(){
  $("#e-quiz").submit(function(event){
    event.preventDefault();

    var userResponse = 0

    var company = $("input:radio[name=company]:checked").val();
      if (company === "yes"){
        userResponse += 1;
      } else if (company === "no"){
          userResponse -= 1;
      };

    var developer = $("input:radio[name=developer]:checked").val();
    if (developer === "yes"){
      userResponse += 2;
    } else if (company === "no"){
      userResponse -= 1;
    };

    var difficulty = $("input:radio[name=difficulty]:checked").val();
    if (difficulty === "yes"){
      userResponse -= 1;
    } else if (difficulty === "no"){
      userResponse += 2;
    };

    var speed = $("input:radio[name=speed]:checked").val();
    if (speed === "yes"){
      userResponse += 1;
    } else if (speed === "no"){
      userResponse += 2;
    };

    var popular = $("input:radio[name=popular]:checked").val();
    if (popular === "yes"){
      userResponse -= 1;
    } else if (popular === "no"){

      userResponse += 2;
    };


      if (userResponse <= 0){
        alert("php")
        $(".results").append("You got PHP!");
        $("#php, #reset-btn").show();
        $("#e-quiz, #submit-btn").hide();
      } else if (userResponse <= 4) {
        alert("ruby")
        $(".results").append("You got Ruby!");
        $("#ruby, #reset-btn").show();
        $("#e-quiz, #submit-btn").hide();
      } else if (userResponse >= 5) {
        alert("C#")
        $(".results").append("You got C#!");
        $("#c, #reset-btn").show();
        $("#e-quiz, #submit-btn").hide();
      };

  });
});
