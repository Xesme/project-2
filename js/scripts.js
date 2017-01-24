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
      userResponse += 3;
    } else if (company === "no"){
      userResponse -= 3;
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
      userResponse += 1;
    } else if (popular === "no"){
      userResponse -= 2;
    };
    // Results are calculated here
    if (userResponse <= 0){
      $(".results").append("Learn more about PHP <a href='https://www.epicodus.com/php'>here!</a> ");
      $("#php, #reset-btn").show();
      $("#e-quiz, #submit-btn").hide();
    } else if (userResponse <= 4 && userResponse >= 0) {
      $(".results").append("Learn more about Ruby <a href='https://www.epicodus.com/ruby'>here!</a>!");
      $("#ruby, #reset-btn").show();
      $("#e-quiz, #submit-btn").hide();
    } else if (userResponse >= 5) {
      $(".results").append("Learn more about C# <a href=https://www.epicodus.com/c-sharp'>here!</a>!");
      $("#c, #reset-btn").show();
      $("#e-quiz, #submit-btn").hide();
    };
  });
});
