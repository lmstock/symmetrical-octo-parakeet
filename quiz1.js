//LPIC QUIZ QUESTIONS FOR SECTION 3

console.log("start quiz.js page load")

setup_welcome()

// SET VARS
let all_questions = questions.length
let total = 0
let correct = 0




// GET RANDOM INT
function rand_int(min, max) {
  return Math.floor(
      Math.random() * (max - min) + min
  )
}

// Get Random Question
function get_question(x) {
  let question_number = rand_int(1, x)
  return question_number
}

// Display question
function display_question(correct, total) {

  // get question
  question_index = get_question(all_questions)
  let question_definition = questions[question_index].definition
  let question_word = questions[question_index].word

  // Display Question 
  document.getElementById("definition").innerHTML = question_definition
  document.getElementById("word").innerHTML = question_word
}

  function correct_score() {
    correct = correct + 1
    total = total + 1
    document.getElementById("score").innerHTML = correct + " / " + total
    display_question(total, correct)
  }
  
  function incorrect_score() {
    total = total + 1
    document.getElementById("score").innerHTML = correct + " / " + total
    display_question(total, correct)
  }

  function update_score() {

    // Set score
    document.getElementById("score").innerHTML = correct + " / " + total

    // Create / Wire up correct button
    start_btn = document.getElementById('correct_button');
    start_btn.addEventListener('click', correct_score)
    
    // Create / Wire up incorrect button
    end_btn = document.getElementById('incorrect_button');
    end_btn.addEventListener('click', incorrect_score)
  }

// Start quiz function
function start_quiz() {
  console.log("start_quiz")

    // Hide welcome page elements
    document.getElementById("welcome").style.visibility='hidden'
    document.getElementById("start_button").style.visibility='hidden'

   display_question()
   update_score()
  }


// End quiz function
function end_quiz() {
  console.log("end_quiz")

  // Hide display elements except for score
  document.getElementById("correct_button").style.visibility='hidden'
  document.getElementById("incorrect_button").style.visibility='hidden'

  // Update text 
  document.getElementById("definition").innerHTML = ""
  document.getElementById("word").innerHTML = "your final score is:  "

}


// Set up Welcome 
function setup_welcome() {

  // Create / Wire up start button
  start_btn = document.getElementById('start_button');
  start_btn.addEventListener('click', start_quiz)
  
  // Create / Wire up end button
  end_btn = document.getElementById('end_button');
  end_btn.addEventListener('click', end_quiz)

  // create the text node
  let welcome_message = document.createTextNode("Welcome to this quiz for LPIC section 3")
  
  // add text node to html element
  document.getElementById("welcome").appendChild(welcome_message)
  }




