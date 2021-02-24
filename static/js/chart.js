var addBtn = document.querySelectorAll("#cart");
addBtn.forEach(btn => {
    let id = btn.dataset.id, name = btn.dataset.name, price = btn.dataset.price, quantity = 1
    btn.addEventListener("click", (e) => {
        addItem({ id, name, price, quantity });
    })
})

function addItem(item) {
    let getFoods = getItem()

    if (Object.keys(getFoods).length === 0) {
        localStorage.setItem('userId', JSON.stringify({ items: [item] }));
    } else {
        let result = getFoods.items.find(i => i.id === item.id)
        if (result) {
            let allFood = []
            getFoods.items.map(i => {
                if (i.id === item.id) {
                    i.quantity = updateQuantity(getFoods.items, item)[1]
                    allFood.push(i)
                } else {
                    allFood.push(i)
                }
            })
            localStorage.setItem('userId', JSON.stringify({ items: allFood }));
        } else {
            localStorage.setItem('userId', JSON.stringify({ items: [...getFoods.items, item] }));
        }
    }

    updateUi(getFoods.items)
}


function getItem() {
    return JSON.parse(localStorage.getItem('userId')) || {};
}
function updateQuantity(items, newItem) {
    let result = items.find(i => i.id === newItem.id)
    if (result) {
        let quantity = result["quantity"]
        quantity += 1
        return [result, quantity]
    }
}


function updateUi(items) {
    let quantity = 0, price = 0;
    items.map(i => {
        quantity += Number(i.quantity)
        price += Number(i.price) * Number(i.quantity)
    })
    document.getElementById('item').innerText = quantity
    document.getElementById('price').innerText = price
}

updateUi(getItem().items)