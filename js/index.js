let allGoods;
let allUsers;
let onlineUser;
localStorage.allGoods ? allGoods = JSON.parse(localStorage.allGoods) : allGoods = [];
localStorage.allUsers ? allUsers = JSON.parse(localStorage.allUsers) : allUsers = [];
localStorage.onlineUser ? onlineUser = JSON.parse(localStorage.onlineUser) : onlineUser = null;
let userGoods = [];
let carted = 0;

// loadGoods();

const signIn = () => {
    window.location.href = './signIn.html'
}

const signUp = () => {
    window.location.href = './signUp.html'
}

const Cards = (img, name, quantity, price) => {
    `<div class="card">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${price}</p>
        <p class="card-text">Quantity Available: ${quantity}</p>
        </div>
    </div>`
}

$(document).ready(function () {
    $('main').html(`
    <div class="allCard row row-cols-1 row-cols-md-4 g-4">
    </div>
    `)

    for(let i = 0; i< allGoods.length; i++) {
        $('.allCard').append(
            `<div class="col">
                <div class="card">
                    <img src="${allGoods[i].img}" id="cardImg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${allGoods[i].name}</h5>
                        <p class="card-text">Price: ${allGoods[i].price}</p>
                        <p class="card-text">Quantity Available: ${allGoods[i].quantity}</p>
                        <button class='btn btn-primary' id='cart' onclick="addCart(${i})">Add to Cart</button>
                    </div>
                </div>
            </div>`
        )
    }
}
);

const addCart = i => {
    if (onlineUser != null) {
        let seen = false;
        let good = {}
        let oldQuantity = parseInt(allGoods[i].quantity)
        if (allUsers[onlineUser].goods.length != 0) {
            // console.log(allUsers[onlineUser][goods].length )
            for(let j = 0; j< allUsers[onlineUser].goods.length; j++) {
                for(let k = 0; k< allUsers[onlineUser].goods.length; k++) {
                    if(allUsers[onlineUser].goods[j].name == userGoods[k].name && !allUsers[onlineUser].goods[j].purchased) {
                        seen = true
                        userGoods[j].quantity ++;
                        break;
                    }
                }
            }
        }
        if (!seen) {
            good.name = allGoods[i].name;
            good.quantity = carted + 1;
            good.purchased = false;
            userGoods.push(good);
        }
        allGoods[i].quantity = oldQuantity-1;
        allUsers[onlineUser].goods = userGoods;
        console.log(allUsers);
        console.log(userGoods)
    } else{
        alert('Please login')
    }
}