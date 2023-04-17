let signup_username= "Ashwini"
let signup_password= 123456

let login_username= "ashwini"
let login_password= 123456

if( signup_username=== login_username) {
  if(signup_password===login_password) {
    console.log("You can login");
  }
  else{
    console.log("Please enter the correct password");
  }
}

else{
    console.log("Please enter the correct username");
  
}