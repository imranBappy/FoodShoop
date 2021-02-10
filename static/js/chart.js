var addToCat = document.querySelectorAll("#cartadd");
var idcatcher = document.getElementById('contaty');
var allprice = 0;
var foodname = []
var contaty = 0;
addToCat.forEach((idpicer) => {
    idpicer.addEventListener('click', () => {
        foodname.push(idpicer.dataset.name);
        allprice += Number(idpicer.dataset.price);
        contaty += 1;
        const quantity = setItems(contaty, foodname, allprice);
        idcatcher.innerHTML = quantity;
        console.log(quantity);
    });
})

function setItems(item1, item2, item3) {
    const allItems = JSON.stringify({ quantity: item1, name: item2, price: item3 });
    localStorage.setItem('cart', allItems);
    let items = localStorage.getItem('cart')
    return JSON.parse(items).quantity
}

idcatcher.innerText = JSON.parse(localStorage.getItem('cart')).quantity;