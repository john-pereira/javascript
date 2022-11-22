function getAge(dateOfBirth) {
    var dateOfBirth = document.getElementById('birthday').value;
    let today = new Date(); 
    const userAge =  new Date(today).getFullYear() - new Date(dateOfBirth).getUTCFullYear();

    if(birthday != ""){
        document.getElementById('msg-birthday').innerHTML += "<br />" + `Your age is ${userAge}`
        
    }else{
        return false;
    }
     
}