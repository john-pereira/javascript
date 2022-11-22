function validate() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var birthday = document.getElementById('birthday').value;
    var email = document.getElementById('email').value;
    const minAge = 18;
    let today = new Date(); 
    let age =  new Date(today).getFullYear() - new Date(birthday).getUTCFullYear();

    if(firstName == ""){
        document.getElementById('error-firstName').innerHTML = "Ops! Type your first name";
        document.getElementById('firstName').focus();
        return false;
        
    }else{
        document.getElementById('error-firstName').innerHTML = "";
        
    }    

    if(lastName == ""){
        document.getElementById('error-lastName').innerHTML = "Ops! Type your last name";
        document.getElementById('lastName').focus();
        return false;
    }else{
        document.getElementById('error-lastName').innerHTML = "";
        
    }

    if(birthday == ""){
        document.getElementById('error-birthday').innerHTML = "Ops! Type your birthday";
        document.getElementById('birthday').focus();
        return false;
    }else{
        document.getElementById('error-birthday').innerHTML = "";
        if( age >= minAge){
            alert("Credit card application is successful");
        }else{
            alert("You must be over 18 years old to apply");
        }
    }

    if(email == ""){
        document.getElementById('error-email').innerHTML = "Ops! Type your email";
        document.getElementById('email').focus();
        return false;
    }else{
        document.getElementById('error-email').innerHTML = "";
        
    }
    return false;           
}