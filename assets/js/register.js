var compare = function () {
  var pass, rpass, img, val1, val2;
  pass = document.querySelector("input[name=userpassword]");
  rpass = document.querySelector("input[name=userrepeatpass]");
  img = document.getElementById("image");
  img.getAttribute("src");

  if (rpass.value === pass.value) {
    img.style.display = "block";
    img.setAttribute("src", "assets/images/check.svg");
    rpass.style.borderColor = "green";
    rpass.setCustomValidity("");
  } else {
    img.style.display = "block";
    img.setAttribute("src", "assets/image/xmark.svg");
    rpass.style.borderColor = "red";
    rpass.setCustomValidity("Password does not match");
  }
};

var mobilevalidation = function () {
  var mobile,img,str;
  mobile = document.querySelector("input[id=mob]");
  str = mobile.value;
  str = str.match(/^(\+\d{1,3}[- ]?)?\d{10}$/);
  img = document.getElementById("image2");
  img.getAttribute("src");
  if (str != null) {
    img.style.display = "block";
    img.setAttribute("src", "assets/images/check.svg");
    mobile.style.borderColor = "green";
    mobile.setCustomValidity("");
  } else {
    img.style.display = "block";
    img.setAttribute("src", "assets/images/xmark.svg");
    mobile.style.borderColor = "red";
    mobile.setCustomValidity("Invalid mobile number :- \n *The number must contain 10 digits. \n *The number must contain valid country code(optional). \n *The number must not contain any spaces in between. \n *The number should not be text.");
  }
};

var emailvalidation = function () {
  var email,str;
  email = document.querySelector("input[class=mail]");
  //result = email.toString();
  // alert(typeof(result));

  str = email.value;
    str = str.match(/^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/gm);
    

    if(str === null){
        email.setCustomValidity("Invalid email :- \n *Email should contain a special character. \n *Email should contain a domain name.\n  ");
        email.style.borderColor="red";
    }
    else{
        email.setCustomValidity("");
        email.style.borderColor="green";
    }
 /* if (
    email.value.includes("@") ||
    email.value.includes("$") ||
    email.value.includes("&")
  ) {
    if (
      email.value.includes(".com") ||
      email.value.includes(".org") ||
      email.value.includes(".msn") ||
      email.value.includes(".gov") ||
      email.value.includes(".in")
    ) {
      email.style.borderColor = "green";
      email.setCustomValidity("");
    } else {
      email.style.borderColor = "red";
      email.setCustomValidity("Invalid Email");
    }
  } else {
    email.style.borderColor = "red";
    email.setCustomValidity("Invalid Email");
  }*/
  /*if (email.value.includes("@") || email.value.includes("$") || email.value.includes("&")) {
    email.style.borderColor = "green";
    email.setCustomValidity("");
  } else if (
    
    email.value.includes(".com") ||
    email.value.includes(".org") ||
    email.value.includes(".msn") ||
    email.value.includes(".gov") ||
    email.value.includes(".in")

  ) {
    email.style.borderColor = "green";
    email.setCustomValidity("");
  } else {
    email.setCustomValidity("Invalid Email");
    email.style.borderColor = "red";
  }*/
};

var hideshow = function () {
  var pass, rpass, val, val1, img, img1;
  pass = document.querySelector("input[class=pass]");
  val = pass.getAttribute("type");
  img = document.getElementById("image3");

  if (val == "password" || val1 == "password") {
    pass.setAttribute("type", "text");

    img.setAttribute("src", "assets/images/eyeclosed.svg");
  } else if (val == "text" || val1 == "text") {
    pass.setAttribute("type", "password");

    img.setAttribute("src", "assets/images/eyeopen.svg");
  }
};
var hideshow1 = function () {
  var rpass, val1, img1;
  rpass = document.querySelector("input[class=pass1]");
  val1 = rpass.getAttribute("type");
  img1 = document.getElementById("image4");
  if (val1 == "password") {
    rpass.setAttribute("type", "text");
    img1.setAttribute("src", "../images/eyeclosed.svg");
  } else if (val1 == "text") {
    rpass.setAttribute("type", "password");
    img1.setAttribute("src", "../images/eyeopen.svg");
  }
};

var passwordvalidation = function () {
  var password,str;
  password = document.querySelector("input[class=pass]");

  str = password.value;
    str = str.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

    if(str == null){
        password.setCustomValidity("Invalid password :-\n* Password must contain 8 or more characters\n* Password must contain atleast one uppercase letter\n* Password must contain atleast one special character");
        password.style.borderColor="red";
    }
    else{
        password.setCustomValidity("");
        password.style.borderColor="green";
    }
  /*if (pass.value.length >= 8) {
    pass.style.borderColor = "green";
    pass.setCustomValidity("");
  } else {
    pass.style.borderColor = "red";
    pass.setCustomValidity("Password should contain more than 8 characters");
  }*/
};
var usernamevalidation = () => {

  var uname,uname1,res;
  uname = document.getElementById("unm");
 
  if(uname.value[0].toUpperCase() === uname.value[0]){
      uname.setCustomValidity("");
      uname.style.borderColor="green";
  }
  else{
      uname.setCustomValidity("Invalid username :- \n *Starting letter of the username should be in Uppercase.");
      uname.style.borderColor="red";
  }
}
