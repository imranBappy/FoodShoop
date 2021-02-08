const AddToCart = document.querySelectorAll('#cart')
const cartPrice = document.getElementById('price')
const cartItem = document.getElementById('item')
// ctrl + alt + shift + h

let allPrice = 0
const food = []

AddToCart.forEach(function (element) {

    element.addEventListener('click', () => {

        let price = Number(element.dataset.price)
        let foodId = element.dataset.id
        let name = element.dataset.name;
        food.push(foodId)
        allPrice += price
        // console.log(name);
        cartPrice.innerText = allPrice
        cartItem.innerText = food.length



        let foodPrice = localStorage.setItem(foodId, `price`,)
        let FoodName = localStorage.setItem(name, name,)

        console.log();
    })
})


// console.log(id);