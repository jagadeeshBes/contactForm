var Name = document.querySelector(".error-Name")
var Phone = document.querySelector(".error-phone")
var Email = document.querySelector(".error-email")
var Message = document.querySelector(".error-message")
var Submit = document.querySelector(".error-submit")

function nameValidation(){
    var nameValue = document.querySelector(".name-input").value
    if(nameValue.length == 0){
        Name.innerText="requried";
        return false;
    }
    if(!nameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        Name.innerHTML='write full name';
        return false;
    }
    Name.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function phoneValidation(){
    var phoneValue = document.querySelector(".phone-no").value
    if(phoneValue.length == 0){
        Phone.innerText="requried";
        return false;
    }
    if(!phoneValue.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
        Phone.innerHTML='write full number';
        return false;
    }
    Phone.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}
function emailValidation(){
    var emailValue = document.querySelector(".email-id").value
    if(emailValue.length == 0){
        Email.innerText="requried";
        return false;
    }
    if(!emailValue.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        Email.innerHTML='incorret id';
        return false;
    }
    Phone.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}
function areaValidation(){
    var textValue = document.querySelector(".textArea").value
    if(textValue.length == 0){
        Message.innerText="requried";
        return false;
    }
    
    Phone.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

function ValidationForm(){

    if(!nameValidation() || !emailValidation() || !phoneValidation() || !areaValidation()){
        Submit.style.display="block";
        Submit.innerHTML = "please fix error to submit"
        setTimeout(function(){Submit.style.display="none";},3000);
        return false;
    }
}