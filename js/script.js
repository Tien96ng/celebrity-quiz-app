$(document).ready(function() {
  $("#quiz").submit(function(event){
    event.preventDefault();

    // Takes in number input Value.
    let number = $("#fav-number").val();
    // Takes Color input value as a hexcode string type.
    let color = $("#color").val();
    // Takes in the option value - option:selected is the value that is selected on form submit.
    let food = $("#food option:selected").val();

    // Takes in number and returns the answer that is set.
    function celebNumber(number) {
      let answer = "";
        if(number > 9) {
          answer = "Tom Cruise";
        } else {
          answer = "Michael Jackson";
        }
      return answer;
    }

    // Returns the direct string.
    function celebColor(color) {
      if(color === "#000000" || color === "#FF0000"){
        return "Kobe Bryant"; // Once the return statment starts, it'll take the string value and break/stop the function.
      } else {
        return "Lebron James";
      }
    }

    // Returns Food Answer.
    function celebFood(food) {
      let answer = "";

      if(food === "") {
        answer = "Lil Wayne";
      } else {

        if(food === "spaghetti") {
          answer = "James Harden";
        } else if (food === "popeyes") {
          answer = "Rick Ross";
        } else {
          answer = "Rick Fox";
        }

      }
      return answer;
    }

    let userNumber = celebNumber(number); // Example: number = 10 --> Returns "Tom Cruise"
    let userColor = celebColor(color); // Example: color = #000000 --> Returns "Kobe Bryant"
    let userFood = celebFood(food); // Example food = "" --> return "lil Wayne";

    // alert(celebNumber(number) + " " + celebColor(color) + " " + celebFood(food));

    // alert(userNumber);

    if(userFood === "Lil Wayne") {
      $("#quiz-result").append("<img id='lilwayne' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Lil_Wayne_%2823513397583%29.jpg/1200px-Lil_Wayne_%2823513397583%29.jpg' alt='Lil Wayne' height='300px'>")
    }

  });
});