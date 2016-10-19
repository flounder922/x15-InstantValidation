function submit_info() {
    window.alert("Username: " + document.getElementById("user").value + "\n"
    + "Password: " + document.getElementById("pass").value);
}

function validate_username() {
    var userEntered = document.getElementById("user").value;
    console.log("Validating username");
    if(document.getElementById("usernameGroup").classList.contains("has-error"))
    {
        document.getElementById("usernameGroup").classList.remove("has-error");
        document.getElementById("usernameError").classList.remove("shown-message");
        document.getElementById("usernameError").classList.add("hidden-message");
    }
    else if(document.getElementById("usernameGroup").classList.contains("has-success"))
    {
        document.getElementById("usernameGroup").classList.remove("has-success");
    }
    //Show message that there is an error with the username...
    if(userEntered.length < 6){
        console.log(userEntered);
        document.getElementById("usernameError").innerHTML="Username must be atleast 6 characters";
        document.getElementById("usernameError").classList.remove("hidden-message");
        document.getElementById("usernameError").classList.add("shown-message");
        //Turn the username items red
        document.getElementById("usernameGroup").classList.add("has-error");
    } else if(/\s/.test(userEntered)) {
        console.log(userEntered);
        document.getElementById("usernameError").innerHTML="Username cannot contain spaces";
        document.getElementById("usernameError").classList.remove("hidden-message");
        document.getElementById("usernameError").classList.add("shown-message");
        //Turn the username items red
        document.getElementById("usernameGroup").classList.add("has-error");
    } else {
        document.getElementById("usernameGroup").classList.add("has-success");
    }
}

function validate_password() {
    var passEntered = document.getElementById("pass").value;
    var userEntered = document.getElementById("user").value;

    console.log("Validating password");

    if(document.getElementById("passwordGroup").classList.contains("has-error"))
    {
        document.getElementById("passwordGroup").classList.remove("has-error");
        document.getElementById("passwordError").classList.remove("shown-message");
        document.getElementById("passwordError").classList.add("hidden-message");
    }
    else if(document.getElementById("passwordGroup").classList.contains("has-success"))
    {
        document.getElementById("passwordGroup").classList.remove("has-success");
    }

    if(passEntered.toLowerCase() == "password"){
        console.log(passEntered);
        //Show message that there is an error with the password...
        document.getElementById("passwordError").innerHTML="Your password can't be password";
        document.getElementById("passwordError").classList.remove("hidden-message");
        document.getElementById("passwordError").classList.add("shown-message");
        //Turn the password items red
        document.getElementById("passwordGroup").classList.add("has-error");
    } else if(passEntered == userEntered) {
        console.log(passEntered);
        //Show message that there is an error with the password...
        document.getElementById("passwordError").innerHTML="Username and password cannot be the same";
        document.getElementById("passwordError").classList.remove("hidden-message");
        document.getElementById("passwordError").classList.add("shown-message");
        //Turn the password items red
        document.getElementById("passwordGroup").classList.add("has-error");
    } else if(passEntered.length < 5 && passEntered.length > 21) {
        console.log(passEntered);
        //Show message that there is an error with the password...
        document.getElementById("passwordError").innerHTML="Password must be at least 6 to 20 characters";
        document.getElementById("passwordError").classList.remove("hidden-message");
        document.getElementById("passwordError").classList.add("shown-message");
        //Turn the password items red
        document.getElementById("passwordGroup").classList.add("has-error");
    } else {
        document.getElementById("passwordGroup").classList.add("has-success");
    }
}

function validate(){
}
