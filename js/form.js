let users = [
  {
    username: "user1",
    password: "user1",
  },
];
function getInfo() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      // alert('Login sucessfully');
      document.getElementById("login-button").style.display = "none";
    } 
  }
}
function register() {
  let registerUser = document.getElementById("newUser").value;
  let registerPassword = document.getElementById("newPassword").value;
  let newUser = {
    username: registerUser,
    password: registerPassword,
  };
  for(i=0;i<users.length;i++){
    if(registerUser ===users[i].username){
        alert('That user name is used, please choose another')
        return
    }else if(registerPassword.length <8 ){
        alert(" Password is too short")
        return
    }
  }
  users.push(newUser);
  console.log(users)
}
