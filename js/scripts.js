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
          alert("yes")
        } else if (company === "no"){
          alert("no")
            userResponse -= 1;
        };




      if (userResponse <= -1){
        // $(".result").show("#php")
        alert("php")
        $(".results").append("You got PHP!");
        $("#php").show();
        $("#e-quiz").hide();
      } else if (userResponse === 1) {
        // $(".result").show("ruby")
        alert("ruby")
        $(".results").append("You got Ruby!");
        $("#ruby").show();
        $("#e-quiz").hide();
      } else if (userResponse >= 2) {
        alert("C#")
        $(".results").append("You got C#!");
        $("#c").show();
        $("#e-quiz").hide();
      };

  });
});
