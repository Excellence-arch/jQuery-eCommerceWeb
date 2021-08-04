let allGoods;
localStorage.allGoods ? allGoods = JSON.parse(localStorage.allGoods) : allGoods = [];

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
    <div class="allCard row row-cols-1 row-cols-md-3 g-4">
    </div>
    `)

    for(let i = 0; i< allGoods.length; i++) {
        $('.allCard').append(
            `<div class="col">
                <div class="card">
                    <img src="${allGoods[i].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${allGoods[i].name}</h5>
                        <p class="card-text">Price: ${allGoods[i].price}</p>
                        <p class="card-text">Quantity Available: ${allGoods[i].quantity}</p>
                        <button class='btn btn-primary' id='cart'>Add to Cart</button>
                    </div>
                </div>
            </div>`
        )
    }

    $('#cart').click(()=> {
        window.location.href = 'cart.html';
    })
}
);