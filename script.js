const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const comment = document.getElementById("comment");

const form_errors = new Array();

fname.addEventListener("submit", (event) => {
    if(!fname.checkValidity()){
        fname.setCustomValidity("First name required!");   
        form_errors.push("fname_error");
        event.preventDefault(); 
        event.reportValidity();
    }
    else{
        fname.setCustomValidity("");
    }
});

lname.addEventListener("submit", (event) => {
    if(!lname.checkValidity()){
        lname.setCustomValidity("Last name required!");   
        form_errors.push("lname_error");
        event.preventDefault(); 
        event.reportValidity();
    }
    else{
        lname.setCustomValidity("");
    }
});

email.addEventListener("submit", (event) => {
    if(!email.checkValidity()){
        email.setCustomValidity("Email address required!");    
        form_errors.push("email_error");
        event.preventDefault();
        event.reportValidity();
    }
    else{
        email.setCustomValidity("");
    }
});

comment.addEventListener("submit", (event) => {
    if(!comment.checkValidity()){
        comment.setCustomValidity("Comment required!");    
        form_errors.push("comment_error");
        event.preventDefault();
        event.reportValidity();
    }
    else{
        comment.setCustomValidity("");
    }
});

const resp = await fetch('https://httpbin.org/post', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(form_errors)
});