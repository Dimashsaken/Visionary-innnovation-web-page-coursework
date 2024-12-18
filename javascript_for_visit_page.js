function validateForm(event) {
    event.preventDefault();
    const date = document.getElementById("Date").value.trim();
    const time = document.getElementById("time").value.trim();
    const visitors = document.getElementById("Number").value.trim();
    const errorMessageDiv = document.getElementById("error-message");
    const successMessageDiv = document.getElementById("success-message");


    errorMessageDiv.textContent = "";
    successMessageDiv.textContent = "";

    
    if (!date || !time || !visitors) {
        errorMessageDiv.textContent = "Data not completed, please re-enter";
        errorMessageDiv.style.color = "red";
        return; 
    }


    const numberOfVisitors = parseInt(visitors, 10);
    if (isNaN(numberOfVisitors) || numberOfVisitors < 1) {
        errorMessageDiv.textContent = "Please enter a valid number of people!";
        errorMessageDiv.style.color = "red";
        return; 
    }


    const reservationSuccess = reserve(date, time, numberOfVisitors);

    if (reservationSuccess) {
        successMessageDiv.textContent = "Your reservation is successful!";
        successMessageDiv.style.color = "green";
    } else {
        successMessageDiv.textContent = "Sorry, the reservation is full!";
        successMessageDiv.style.color = "red";
    }
}


function resetForm() {
    document.getElementById("error-message").textContent = ""; 
    document.getElementById("success-message").textContent = ""; 
}


function reserve(date, time, no) {
    if (arguments.length !== 3) {
        return false;
    }


    const valid_quota = Math.floor(Math.random() * 2.0 * no);
    if (no > valid_quota) return false; 
    else return true; 
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const resetButton = document.querySelector("input[type='reset']");
    
    form.onsubmit = validateForm;
    resetButton.onclick = resetForm;
});