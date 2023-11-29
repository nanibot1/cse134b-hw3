const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const comment = document.getElementById("comment");

fname.addEventListener("input", (event) => {
    if(!email.checkValidity()){
        email.setCustomValidity("First name required!");   
        event.preventDefault(); 
        event.reportValidity();
    }
    else{
        email.setCustomValidity("");
    }
});

lname.addEventListener("input", (event) => {
    if(!email.checkValidity()){
        email.setCustomValidity("Last name required!");   
        event.preventDefault(); 
    }
    else{
        email.setCustomValidity("");
    }
});

email.addEventListener("input", (event) => {
    if(!email.checkValidity()){
        email.setCustomValidity("Email address required!");    
        event.preventDefault();
    }
    else{
        email.setCustomValidity("");
    }
});

comment.addEventListener("input", (event) => {
    if(!email.checkValidity()){
        email.setCustomValidity("Comment required!");    
        event.preventDefault();
    }
    else{
        email.setCustomValidity("");
    }
});