document.addEventListener("DOMContentLoaded", function() {
    // Select the submit button element
let sub = document.getElementById("submit1");
sub.addEventListener("click",()=>{
    let name=document.getElementById('fname').value;
    let last=document.getElementById('lname').value;
    let phone=document.getElementById('Pno').value;
    let email=document.getElementById('email').value;
    let message = 'First Name: ' + name + 
    ' Last Name: ' + last +
    ' Phone Number: ' + phone + 
    ' Email ID: ' + email;
    console.log(message);
    alert(message);
});
});