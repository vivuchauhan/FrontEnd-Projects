
function CreateAccount(){
    let username = document.getElementById("username").value;
    let CreatePassword = document.getElementById("Create password").value;
    let ConfirmPassword = document.getElementById("Confirm password").value;

    if(!username == 0 && !CreatePassword == 0 && !ConfirmPassword == 0){
        console.log("username: "+username);
        console.log("CreatePassword: "+CreatePassword);
        console.log("ConfirmPassword: "+ ConfirmPassword + alert("succesfully created account!"));
        return;
    }
    console.log(alert("Fill all the required information!"));
}