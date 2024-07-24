const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");


const showError = (element , message)=>{
    const parentElement = element.parentElement;
    const error = parentElement.querySelector(".error");
    error.innerText = message;
}
const removeError = (element)=>{
    const parentElement = element.parentElement;
    const error = parentElement.querySelector(".error");
    error.innerText = "";
}


// function to verify email
const verifyInput = ()=>{

    let returnVal =true;

    // name verification
    if(name.value.length === 0){
        showError(name,"Name is required!");
        returnVal = !returnVal;
    }
    else{
        removeError(name);
        returnVal = !returnVal;
    }

    // email verification
    if(email.value.length === 0){
        showError(email,"Email is required!");
        returnVal = !returnVal;
    }
    else{
        removeError(email)
        returnVal = !returnVal;
    }
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        showError(email,"Invalid Email!");
        returnVal = !returnVal;
    }
    else{
        removeError(email);
        returnVal = !returnVal;
    }

    // phone verification      
    if(phone.value.length === 0){
        showError(phone,"Email is required!");
        returnVal = !returnVal;
    }
    else{
        removeError(phone);
        returnVal = !returnVal;
    }
    if(phone.value.length !== 10){
        showError(phone,"Enter a valid Number!")
        returnVal = !returnVal;
    }
    return returnVal;
}

const submitHandler = (e)=>{
    e.preventDefault();
    if(verifyInput()){
        return true;
    }
}