// console.log("script is working")
const objUser = [
    {
        username: "Vivek Chauhan",
        password: "Vivek@123"
    },
    {
        username: "Vicky Chauhan",
        password: "Vivek@123"
    },
    {
        username: "Vivu Chauhan",
        password: "Vivek@123"
    }
]

 function getInfo(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    for(i=0; i<objUser.length; i++){
        if(username == objUser[i].username && password == objUser[i].password){
            console.log(username + alert("You are loged in succesfully!"));
            return;
        }
    }
    console.log(alert("incorrect username and password"));
}

