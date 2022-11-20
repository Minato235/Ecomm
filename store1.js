const parentContainer = document.getElementById('EcommerceContainer');
const cart= document.getElementById('cart');
const cancel= document.getElementById('cancel');

var holder = document.getElementById("cart-show");

holder.addEventListener("click", () => {
cart.classList.toggle("active");
})
cancel.addEventListener("click", () => {
cart.classList.toggle("deactive")
})

var addToCart = document.getElementsByClassName("shop-item-button");
for (let i = 0; i < addToCart.length; i++) {
  var buttion = addToCart[i]
  buttion.addEventListener("click", function (e) {
    var id = e.target.parentNode.parentNode.id;
     id = "Album "+id.replace(/\D/g, "");



    console.log(id,"=>",id);
    const container = document.getElementById('container');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `<h4>Your Product : <span>${id}</span> is added to the cart<h4>`;
    container.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 1500)
  })
}


