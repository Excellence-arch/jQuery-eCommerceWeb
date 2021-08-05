let allUsers;
localStorage.allUsers ? allUsers = JSON.parse(localStorage.allUsers) : allUsers = [];

$(document).ready(()=> {
    $('#signInBtn').click(()=> {
        let found = false;
        let newUser = {};
        newUser.email = $("#email").val();
        newUser.passWord = $("#password").val();
        for(let i = 0; i < allUsers.length; i++) {
            if(allUsers[i].email == newUser.email && allUsers[i].passWord == newUser.passWord) {
                found = true;
                localStorage.onlineUser = i;
                window.location.href = "./index.html";
                break;
            }
        }
        if(!found) {
            alert("Please log in with the correct details")
        }
    })
});