

$(document).ready(()=> {
    let onlineUser;
    if (localStorage.onlineUser) {
        onlineUser = JSON.parse(localStorage.onlineUser);
        if(onlineUser == null) {
            window.location.href = "../index.html";
        }
    }
        
    $("#logout").click(()=> {
        localStorage.onlineUser = JSON.stringify(null);
        window.location.href ="../index.html"
    })
});