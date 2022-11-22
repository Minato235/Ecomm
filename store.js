const parentContainer = document.getElementById('EcommerceContainer');
const cart_items = document.getElementById('cart');



window.addEventListener("DOMContentLoaded", () => {
    console.log("loaded")
    axios.get("http://localhost:3000/products").then((data) => {
        console.log(data);
        if (data.request.status === 200) {
            const products = data.data.products;
            const parentSection = document.getElementById("Products");

            products.forEach(product => {

                const productHtml = `<div class="Ecom" id="album-${product.id}">
                    <h3>${product.title}</h3>

                    <div>
                    <img class="prod-images" src=${product.imageUrl}></img>
                    </div>
                    <div class="prod-details">
                    <span>$<span>${product.price}</span></span>
                    <button class="shop-item-button" type='button'>ADD TO CART</button>
                </div> </div>`
                parentSection.innerHTML += productHtml;
            })
        }

    })

})

//cart model => 