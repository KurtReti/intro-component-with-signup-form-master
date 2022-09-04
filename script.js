    function validateForms(){
        validateFirstname();
        validateSurname();
        validateEmail();
        validatePassword();
    };
    
    function validateFirstname() {
        if (document.getElementById("first-name").value.trim() == "") {
            document.getElementById("first-name").style.border = "1px solid red";
            document.getElementById("enter-name").style.display ="block";
            document.getElementById("first-name").style.background = "url(images/icon-error.svg) no-repeat 97%";
            return false;
        }
        else{
            document.getElementById("first-name").style.border = "1px solid #9999CC";
            document.getElementById("enter-name").style.display ="none";
            document.getElementById("first-name").style.background = "none";
        }
    };


    function validateSurname() {

        if(document.getElementById("surname").value.trim() == "") {
            document.getElementById("surname").style.border = "1px solid red";
            document.getElementById("enter-surname").style.display ="block";
            document.getElementById("surname").style.background = "url(images/icon-error.svg) no-repeat 97%";
            return false;
        }
        else{
            document.getElementById("surname").style.border = "1px solid #9999CC";
            document.getElementById("enter-surname").style.display ="none";
            document.getElementById("surname").style.background = "none";
        }
    };

    function validateEmail() {

        if(document.getElementById("email").value.trim() == "") {
            document.getElementById("email").style.border = "1px solid red";
            document.getElementById("enter-email").style.display ="block";
            document.getElementById("email").style.background = "url(images/icon-error.svg) no-repeat 97%";
            return false;
        }
        else{
            document.getElementById("email").style.border = "1px solid #9999CC";
            document.getElementById("enter-email").style.display ="none";
            document.getElementById("email").style.background = "none";
        }
    };

    function validatePassword() {

        if (document.getElementById("password").value.trim() == "") {
            document.getElementById("password").style.border = "1px solid red";
            document.getElementById("enter-password").style.display ="block";
            document.getElementById("password").style.background = "url(images/icon-error.svg) no-repeat 97%";
            return false;
        }
        else{
            document.getElementById("password").style.border = "1px solid #9999CC";
            document.getElementById("enter-password").style.display ="none";
            document.getElementById("password").style.background = "none";
        }
    };




