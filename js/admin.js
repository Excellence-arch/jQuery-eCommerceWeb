let allGoods;
localStorage.allGoods ? allGoods = JSON.parse(localStorage.allGoods) : allGoods = [];

$(document).ready(function () {
    $("button:first").click(function (e) { 
        e.preventDefault();
        $('#add').show();
    });

    $('#btnAdd').click(()=> {
        let found = false;
        let newGood = {};
        let img = $('#goodImg').val()
        newGood.img = './images//'+img.slice(12, goodImg.length);
        newGood.name = $("#goodName").val();
        newGood.quantity = $("#goodQuantity").val();
        newGood.price = $("#goodPrice").val();
        allGoods.filter((good, i)=> good.name == newGood.name).map((good, i)=> {
            found = true;
            let old = parseFloat(good.quantity);
            let ne = parseFloat(newGood.quantity);
            good.price = newGood.price;
            good.quantity = old + ne;
        })

        if(!found) {
            allGoods.push(newGood);
        }
        localStorage.allGoods = JSON.stringify(allGoods);
    })
});