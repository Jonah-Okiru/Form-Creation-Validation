// wrapping the entire script in a DOMContentLoaded event listener.
document.addEventListener('DOMContentLoaded', function(){
    // Form selection
    const form = document.getElementById('registration-form');
    // Fedback div selection
    const feedbackDiv = document.getElementById('form-feedback');
    // Form Submission and Event Prevention
    // 1. Form Submission Event Listener
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
    });
    // Input Retrieval and Trimming
    // username, email and password input
    const username =document.getElementById('username').value.trim();
    const email =document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim()
    // validation logic
    // Initialize validation variables
    let isValid = true;
    let messages = [];
    // username validation
    if(username.length <3){
        isValid= false;
        messages.push('username should have atleast 3 characters');
    }
    // email validation
    if(!email.includes('@','.')){
        isValid = false;
        messages.push('invalid email');
    }
    //password validation
    if(password.length <8){
        isValid=false;
        messages.push('password should have atleast 8 characters')
    }
    //Displaying feedback
    // Make feedbackDiv visible by setting its style.display to "block".
    feedbackDiv.style.display= "block";
    // If isValid remains true, set the textContent of feedbackDiv to "Registration successful!" and its style.color to "#28a745".
    if(isValid=true){
        feedbackDiv.textContent = "Registration successful";
        feedbackDiv.style.color = "#28a745";
    }
    //If isValid is false, join messages with <br> to form a single string, 
    //and assign this to the innerHTML of feedbackDiv. Set feedbackDiv.style.color to "#dc3545".
    if(isValid=false){
        for(m of messages){
            feedbackDiv.innerHTML = m.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }
    }
    

})
