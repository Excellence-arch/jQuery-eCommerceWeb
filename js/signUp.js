let allUsers;
localStorage.allUsers ? allUsers = JSON.parse(localStorage.allUsers) : allUsers = [];

$(document).ready(()=> {
    $('#signUpBtn').click(()=> {
        let found = false;
        let newUser = {};
        newUser.firstName = $('#fName').val();
        newUser.lastName = $('#lName').val();
        newUser.phone = $("#phone").val();
        newUser.email = $("#email").val();
        newUser.passWord = $("#password").val();
        newUser.goods = [];
        for(let i = 0; i < allUsers.length; i++) {
            if(allUsers[i].email == newUser.email) {
                found = true;
                alert("Email already exists, Please use another email");
                break;
            }
        }
        if(!found) {
            // newUser.email = $("#email").val();
            allUsers.push(newUser);
            let online = allUsers.length - 1;
            localStorage.allUsers = JSON.stringify(allUsers);
            localStorage.onlineUser = JSON.stringify(online);
            window.location.reload();
            window.location.href = "./index.html";
        }
    })
});