var showhide = function(){
    var pass,val,img;
    pass = document.getElementById("pass");
    val = pass.getAttribute("type");
    img = document.getElementById("imgbtn");
    if(val=="password"){
        pass.setAttribute("type","text");
        img.setAttribute("src","../assets/images/eyeclosed.svg");
    }
    else if(val=="text"){
        pass.setAttribute("type","password");
        img.setAttribute("src","../assets/images/eyeopen.svg");
    }
}
var emailvalidation = function () {
    var email;
    email = document.querySelector("input[id=mail]");
    //result = email.toString();
    // alert(typeof(result));
    if(email.value.includes("@") || email.value.includes("$") || email.value.includes("&")){
        if(email.value.includes(".com") || email.value.includes(".org") || email.value.includes(".msn") || email.value.includes(".gov") || email.value.includes(".in")){
            email.style.borderColor="green";
            email.setCustomValidity("");
        }
        else{
            email.style.borderColor="red";
            email.setCustomValidity("Invalid Email");
        }
    }
    else{
        email.style.borderColor="red";
        email.setCustomValidity("Invalid Email");
    }
}
