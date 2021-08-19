let allUsers, allGoods;
localStorage.allUsers ? allUsers = JSON.parse(localStorage.allUsers) : allUsers = [];
localStorage.allGoods ? allGoods = JSON.parse(localStorage.allGoods) : allGoods = [];
let onlineUser;
if (localStorage.onlineUser) {
    onlineUser = JSON.parse(localStorage.onlineUser);
    if(onlineUser == null) { 
        window.location.href = "../index.html";
    }
}
let addAllGoods = 0;

$(document).ready(()=> {
    for(let i = 0; i< allUsers[onlineUser].goods.length; i++) {
        if (!allUsers[onlineUser].goods[i].purchased) {
            $("#goo").append(`
                    <tr class="bg-secondary border">
                        <td>${allUsers[onlineUser].goods[i].name}</td>
                        <td>${allUsers[onlineUser].goods[i].quantity}</td>
                        <td>${allUsers[onlineUser].goods[i].price}</td>
                        <td>${allUsers[onlineUser].goods[i].price * allUsers[onlineUser].goods[i].quantity}</td>
                    </tr>
        `)
        addAllGoods += allUsers[onlineUser].goods[i].price * allUsers[onlineUser].goods[i].quantity;
        }
    }
    $("#goo").append(`
        <tr class="bg-secondary border">
            <td></td>
            <td></td>
            <td></td>
            <td><b>${addAllGoods}</b></td>
        </tr>
    `)

    $("table").append(`
            <td></td>
            <td></td>
            <td><button class="btn btn-success" onclick="checkOut()">Checkout</button></td>
        
    `)

        
    $("#logout").click(()=> {
        localStorage.onlineUser = JSON.stringify(null);
        window.location.href ="../index.html"
    })
});

const checkOut = () => {
    for(let j = 0; j< allUsers[onlineUser].goods.length; j++) {
        for(let i = 0; i< allGoods.length; i++) {
            if(allUsers[onlineUser].goods[j].name == allGoods[i].name) {
                allGoods[i].quantity -= allUsers[onlineUser].goods[j].quantity;
                allUsers[onlineUser].goods[j].purchased = true;
                localStorage.allUsers = JSON.stringify(allUsers)
                localStorage.allGoods = JSON.stringify(allGoods)
            }
        }
    }
    alert(`Thank you ${allUsers[onlineUser].firstName} for patronizing us`)
    window.location.reload();
}