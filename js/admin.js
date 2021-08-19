let allGoods;
localStorage.allGoods ? allGoods = JSON.parse(localStorage.allGoods) : allGoods = [];

$(document).ready(function () {
    $("#realAdd").click(function (e) { 
        e.preventDefault();
        $('#add').toggle();
    });

    $('#btnAdd').click(()=> {
        let found = false;
        let newGood = {};
        let img = $('#goodImg').val()
        newGood.img = './images//'+img.slice(12);
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
        window.location.reload();
    });

    $("#showAllGoods").html(`<tr>
        <td class="border w-25">Name</td>
        <td class="border w-25">Quantity</td>
        <td class="border w-25">Price</td>
        <td class="border w-25">Edit</td>
        <td class="border w-25">Delete</td>
    </tr>`)
    for(let i = 0; i<allGoods.length; i++) {
        $('#showAllGoods').append(`
            <tr class="border m-3">
                <td class="border">${allGoods[i].name}</td>
                <td class="border">${allGoods[i].quantity}</td>
                <td class="border">${allGoods[i].price}</td>
                <td class="border"><button id="edit" onclick=editGood(${i}) class="btn btn-outline-info">Edit</button></td>
                <td><button id="delGood" class='btn btn-outline-danger' onclick=delGood(${i})>Delete</button></td>
            </tr>
        `)
    }

});

const saveEdit = i => {
    // console.log("hi")
    allGoods[i].name = $("#newGoodName").val();
    allGoods[i].quantity = $("#newGoodQuantity").val();
    allGoods[i].price = $("#newGoodPrice").val();
    localStorage.allGoods = JSON.stringify(allGoods);
    window.location.reload();
};

const editGood = i  => {
    edits.innerHTML = `<input id="newGoodName" value=${allGoods[i].name} /> <input id="newGoodQuantity" value=${allGoods[i].quantity} /> <input id="newGoodPrice" value=${allGoods[i].price} /> <button onclick="saveEdit(${i})" class="btn btn-outline-success">Save Changes</button>`;
}

const delGood = i => {
    let newGoods = allGoods.filter((good, j)=> good != allGoods[i]);
    allGoods = newGoods;
    localStorage.allGoods = JSON.stringify(allGoods);
    window.location.reload();
}