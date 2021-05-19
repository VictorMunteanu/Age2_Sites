const productDetails = [
  {
    name: "MacBook Pro 13.3`",
    price: 1500,
    imageUrl: "IMG/1.1.png",
    qty: 10,
    des: "APPLE MacBook Pro with Touch Bar (2020) Silver, 13.3 Retina IPS (Intel® Quad Core™ i5 2.0-3.8GHz, 16GB RAM, 1.0TB SSD, Intel Iris Plus Graphics, 4xTB3, WiFi-AC/BT5.0, 10 hours, 720p Camera, Backlit KB, RUS, macOS, 1.4kg)",
  },

  {
    name: "MacBook Pro 16`",
    price: 2500,
    imageUrl: "IMG/1.2.png",
    qty: 15,
    des: "APPLE MacBook Pro with Touch Bar (2019) Space Gray, 16` Retina IPS (Intel® Eight Core™ i9 2.3-4.8GHz, 16GB RAM, 1TB SSD, Radeon Pro 5500M 4GB, 4xTB3, WiFi-AC/BT5.0, 10 hours, 720p Camera, Backlit KB, RUS, macOS, 2.0kg)",
  },

  {
    name: "Macbook Air",
    price: 1100,
    imageUrl: "IMG/1.3.png",
    qty: 20,
    des: "APPLE MacBook Air (2020) Space Gray, 13.3` WQXGA IPS (Intel® Core i5-1030NG7, 8GB RAM, 512GB SSD, Intel Iris Plus, USB-C x 2, TB3, WiFi-AC/BT5.0, 12 hours, 720p Camera, Backlit KB, RUS, macOS, 1.29kg)",
  },

  {
    name: "MacBook Air 13.3`",
    price: 1200,
    imageUrl: "IMG/1.4.png",
    qty: 35,
    des: "NB Apple MacBook Air MGNE3UA/A Gold (M1 8Gb 512Gb), 13.3' 2560x1600 Retina, Apple M1 8-core GPU, 8Gb, 512Gb, Mac OS Big Sur, RU",
  },

  {
    name: "iPhone 12 Pro Max",
    price: 1100,
    imageUrl: "IMG/2.1.png",
    qty: 25,
    des: "Apple iPhone 12 Pro Max 128GB 5G Gold",
  },

  {
    name: "iPhone SE",
    price: 500,
    imageUrl: "IMG/2.2.png",
    qty: 10,
    des: "Apple iPhone SE (2020) 64GB White, 4.7` Retina IPS LCD display, Apple A13 Bionic chipset, 1821 mAh battery 3 GB RAM, Ion-strengthened glass.",
  },

  {
    name: "iPhone 12",
    price: 850,
    imageUrl: "IMG/2.3.png",
    qty: 15,
    des: "Apple iPhone 12 256GB 5G Green",
  },

  {
    name: "iPhone 11",
    price: 750,
    imageUrl: "IMG/2.4.png",
    qty: 20,
    des: "Apple iPhone 11, 128GB, Yellow, 6.1`, 828x1792 Retina IPS, Apple A13 Bionic 2,49GHz, 6 Cores (2x Monsoon + 4x Mistral cores), GPU 4 Cores, 4GB RAM, 128GB ROM, Camera Dual 12/12MP, Front 12MP, BT5.0, GPS, NFC, IP68, Li-Ion 3110 mAh battery, 194g, iOS 13",
  },

  {
    name: "iPad Pro",
    price: 1700,
    imageUrl: "IMG/3.1.png",
    qty: 35,
    des: "Apple iPad Pro 11 (2020) 4G 1TB, Space Gray",
  },

  {
    name: "iPad",
    price: 600,
    imageUrl: "IMG/3.2.png",
    qty: 25,
    des: "Apple iPad (2019) 10.2 32Gb Wi-Fi, Silver",
  },

  {
    name: "iPad Air",
    price: 1200,
    imageUrl: "IMG/3.3.png",
    qty: 10,
    des: "Apple iPad Air 10.9-inch LTE 256GB (2020) Green",
  },

  {
    name: "iPad Pro",
    price: 1100,
    imageUrl: "IMG/3.4.png",
    qty: 15,
    des: "Apple iPad Pro 12.9 (2020) WiFi 256GB, Silve",
  },

  {
    name: "Apple Watch 6",
    price: 700,
    imageUrl: "IMG/4.1.png",
    qty: 20,
    des: "Apple Watch Series 6 GPS, 44mm Blue Aluminum Case with Deep Navy Sport Band, M00J3 GPS",
  },

  {
    name: "Apple Watch SE",
    price: 600,
    imageUrl: "IMG/4.2.png",
    qty: 35,
    des: "Apple Watch SE LTE 40mm Silver Aluminium, White Sport Band, MYEF2",
  },

  {
    name: "Apple Watch 5",
    price: 500,
    imageUrl: "IMG/4.3.png",
    qty: 25,
    des: "Apple Watch Nike 5 44mm Silver Aluminium, Pure Platinum Black Nike Sport, MYYH2",
  },

  {
    name: "Apple Watch 4",
    price: 400,
    imageUrl: "IMG/4.4.png",
    qty: 25,
    des: "Apple Watch 4 40mm Gold Aluminium, Pink Sand Sport Band, MYDN2",
  },
];
const cartDetails = [];
//----------------------------------------------------------------------------------------------------//

function addItem(event) {
  let btnClicked =
    event.parentElement.parentElement.parentElement.parentElement.parentElement;
  let noStocks = btnClicked.getElementsByClassName("out-of-stock-cover")[0];
  if (noStocks.style.display == "flex") return;
  let name = btnClicked.getElementsByClassName("product-name")[0].innerText;
  let price = parseFloat(
    btnClicked
      .getElementsByClassName("product-price")[0]
      .innerText.replace("$ ", "")
  );

  let imgSrc = btnClicked.getElementsByClassName("product-img")[0].src;
  SwitchBtns(btnClicked);
  let cartItem = {
    name,
    price,
    imgSrc,
    qty: 1,
  };

  CartItems(cartItem);
  cartDetails.push(cartItem);
  RenderCart();
  CartItemsTotal();
}

function removeItem(event) {
  let btnClicked = event.parentElement;
  let itemName = btnClicked.getElementsByClassName("name")[0].innerText;
  let productNames = document.getElementsByClassName("product-name");
  cartDetails.forEach((item, i) => {
    if (itemName == item.name) {
      cartDetails.splice(i, 1);
      for (let name of productNames) {
        if (itemName == name.innerText) {
          let found = name.parentElement.parentElement;
          SwitchBtns(found);
        }
      }
    }
  });
  RenderCart();
  CartIsEmpty();
  CartItemsTotal();
}

function clearCart() {
  ToggleBackBtns();
  cartDetails.length = 0;
  RenderCart();
  CartIsEmpty();
  CartItemsTotal();
}

function qtyChange(event, handler) {
  let btnClicked = event.parentElement.parentElement;
  let isPresent = btnClicked.classList.contains("btn-add");
  let itemName = isPresent
    ? btnClicked.parentElement.parentElement.getElementsByClassName(
        "product-name"
      )[0].innerText
    : btnClicked.parentElement.getElementsByClassName("name")[0].innerText;
  let productNames = document.getElementsByClassName("product-name");
  for (let name of productNames) {
    if (itemName == name.innerText) {
      let productBtn =
        name.parentElement.parentElement.getElementsByClassName(
          "qty-change"
        )[0];
      cartDetails.forEach((item, i) => {
        if (itemName == item.name) {
          if (handler == "add" && item.qty < 10) {
            item.qty += 1;
            btnClicked.innerHTML = QtyBtn(item.qty);
            productBtn.innerHTML = QtyBtn(item.qty);
          } else if (handler == "sub") {
            item.qty -= 1;
            btnClicked.innerHTML = QtyBtn(item.qty);
            productBtn.innerHTML = QtyBtn(item.qty);
            if (item.qty < 1) {
              cartDetails.splice(i, 1);
              productBtn.innerHTML = AddBtn();
              productBtn.classList.toggle("qty-change");
            }
          } else {
            document.getElementsByClassName("purchase-cover")[0].style.display =
              "block";
            document.getElementsByClassName("stock-limit")[0].style.display =
              "flex";
            sideNav(0);
          }
        }
      });
    }
  }
  RenderCart();
  CartIsEmpty();
  CartItemsTotal();
}

function limitPurchase(event) {
  document.getElementsByClassName("purchase-cover")[0].style.display = "none";
  event.parentElement.style.display = "none";
  sideNav(1);
}

function sideNav(handler) {
  let sideNav = document.getElementsByClassName("side-nav")[0];
  let cover = document.getElementsByClassName("cover")[0];
  sideNav.style.right = handler ? "0" : "-100%";
  cover.style.display = handler ? "block" : "none";
  CartIsEmpty();
}

function buy(handler) {
  if (cartDetails.length == 0) return;
  sideNav(!handler);
  document.getElementsByClassName("purchase-cover")[0].style.display = handler
    ? "block"
    : "none";
  document.getElementsByClassName("order-now")[0].innerHTML = handler
    ? Purchase()
    : "";
}

function order() {
  let invoice = document.getElementsByClassName("invoice")[0];
  invoice.style.height = "500px";
  invoice.style.width = "400px";
  invoice.innerHTML = OrderConfirm();
  ToggleBackBtns();
  Stocks();
  clearCart();
}

function okay(event) {
  let container = document.getElementsByClassName("invoice")[0];
  if (event.target.innerText == "continue") {
    container.style.display = "none";
    document.getElementsByClassName("purchase-cover")[0].style.display = "none";
    validationHandler();
  } else {
    event.target.innerText = "continue";
    event.target.parentElement.getElementsByClassName(
      "order-details"
    )[0].innerHTML = 
    `<div class="container">
    <form>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="abc@gmail.com">

    <label for="phone">Number</label>
    <input type="tel" id="phone" name="phone" placeholder="+373********">

    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Ghiță">


    </form>
</div>`;
    container.style.height = "240px";
  }
}

function validationHandler() {
  const validateButton = document.getElementById('btn-ok-order');

  validateButton.addEventListener('click', () => {
      this.validateData();
  })
}

function validateData() {
  const name = document.getElementById("name");
  const phone = document.getElementById('phone');
  const email = document.getElementById("email");
  const phoneRegexp = /^[\+373|373]*[0]*[0-9]{7,8}$/;
  const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!(new RegExp(/^[a-zA-Z ]{2,30}$/).test(name.value))) {
      console.log("Wrong Name");
      return;
  }

  if (!(new RegExp(phoneRegexp).test(phone.value))) {
      console.log("Wrong Phone Number");
      return;
  }

  if (!(new RegExp(emailRegexp).test(email.value))) {
      console.log("Wrong Email");
      return;
  }

  localStorage.setItem('phone', phone.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('name', name.value);

  alert("Your order has been taken over by the administrator and you will be called soon.");
}

// button components for better Ux {
function AddBtn() {
  return `
  <div>
    <button onclick='addItem(this)' class='add-btn'>Add <i class='fas fa-chevron-right'></i></button>
  </div>`;
}

function QtyBtn(qty = 1) {
  if (qty == 0) return AddBtn();
  return `
  <div>
    <button class='btn-qty' onclick="qtyChange(this,'sub')"><i class='fas fa-chevron-left'></i></button>
    <p class='qty'>${qty}</p>
    <button class='btn-qty' onclick="qtyChange(this,'add')"><i class='fas fa-chevron-right'></i></button>
  </div>`;
}
//}

//Ui components {
function Product(product = {}) {
  let { name, price, imageUrl, des } = product;
  return `
  <div class='card'>
    <div class='top-bar'>
      <i class='fab fa-apple'></i>
      <em class="stocks">In Stock</em>
    </div>
    <div class='img-container'>
      <img class='product-img' src='${imageUrl}' alt='' />
      <div class='out-of-stock-cover'><span>Out Of Stock</span></div>
    </div>
    <div class='details'>
      <div class='name-fav'>
        <strong class='product-name'>${name}</strong>
        <button onclick='this.classList.toggle("fav")' class='heart'><i class='fas fa-heart'></i></button>
      </div>
      <div class='wrapper'>
        <p>${des}</p>
      </div>
      <div class='purchase'>
        <p class='product-price'>$ ${price}</p>
        <span class='btn-add'>${AddBtn()}</span>
      </div>
    </div>
  </div>`;
}

function CartItems(cartItem = {}) {
  let { name, price, imgSrc, qty } = cartItem;
  localStorage.setItem("CartItem", JSON.stringify(this.product - name));
  return `
  <div class='cart-item'>
    <div class='cart-img'>
      <img src='${imgSrc}' alt='' />
    </div>
    <strong class='name'>${name}</strong>
    <span class='qty-change'>${QtyBtn(qty)}</span>
    <p class='price'>$ ${price * qty}</p>
    <button onclick='removeItem(this)'><i class='fas fa-trash'></i></button>
  </div>`;
}

function Banner() {
  return `
  <div class='banner'>
    <ul class="box-area">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    </ul>
    <div class='main-cart'>${DisplayProducts()}</div>
    <div class='nav'>
      <button onclick='sideNav(1)'><i class='fas fa-shopping-cart' style='font-size:2rem;'></i></button>
      <span class= 'total-qty'>0</span>
    </div>
    <div onclick='sideNav(0)' class='cover'></div>
    <div class='cover purchase-cover'></div>
    <div class='cart'>${CartSideNav()}</div>
    <div class='stock-limit'>
      <em>You Can Only Buy 10 Items For Each Product</em>
      <button class='btn-ok' onclick='limitPurchase(this)'>Okay</button>
    </div>
  <div  class='order-now'></div>
  </div>`;
}

function CartSideNav() {
  return `
  <div class='side-nav'>
    <button onclick='sideNav(0)'><i class='fas fa-times'></i></button>
    <h2>Cart</h2>
    <div class='cart-items'></div>
    <div class='final'>
      <strong>Total: $ <span class='total'>0</span>.00/-</strong>
      <div class='action'>
        <button onclick='buy(1)' class='btn buy'>Purchase <i class='fas fa-credit-card' style='color:#6665dd;'></i></button>
        <button onclick='clearCart()' class='btn clear'>Clear Cart <i class='fas fa-trash' style='color:#bb342f;'></i></button>
      </div>
    </div>
  </div>`;
}

function Purchase() {
  let toPay = document.getElementsByClassName("total")[0].innerText;
  let itemNames = cartDetails.map((item) => {
    return `<span>${item.qty} x ${item.name}</span>`;
  });
  let itemPrices = cartDetails.map((item) => {
    return `<span>$ ${item.price * item.qty}</span>`;
  });
  return `
  <div class='invoice'>
    <div class='shipping-items'>
      <div class='item-names'>${itemNames.join("")}</div>
      <div class='items-price'>${itemPrices.join("+")}</div>
    </div>
  <hr>
    <div class='payment'>
      <em>payment</em>
      <div>
        <p>total amount to be paid:</p><span class='pay'>$ ${toPay}</span>
      </div>
    </div>
    <div class='order'>
      <button onclick='order()' class='btn-order btn'>Order Now</button>
      <button onclick='buy(0)' class='btn-cancel btn'>Cancel</button>
    </div>
  </div>`;
}

function OrderConfirm() {
  let orderId = Math.round(Math.random() * 1000);
  let totalCost = document.getElementsByClassName("total")[0].innerText;
  return `
    <div class='order-details'>
      <em>your order has been placed</em>
      <p>Your order-id: <span>${orderId}</span></p>
      <p>your order will be delivered to you in 3-5 working days</p>
      <p>you need to pay <span>$ ${totalCost}</span></p>
    </div>
    <button onclick='okay(event)' id='btn-ok-order'>okay</button>`;
}

function DisplayProducts() {
  let products = productDetails.map((product) => {
    return Product(product);
  });
  return products.join("");
}

function DisplayCartItems() {
  let cartItems = cartDetails.map((cartItem) => {
    return CartItems(cartItem);
  });
  return cartItems.join("");
}

function RenderCart() {
  document.getElementsByClassName("cart-items")[0].innerHTML =
    DisplayCartItems();
}

function SwitchBtns(found) {
  let element = found.getElementsByClassName("btn-add")[0];
  element.classList.toggle("qty-change");
  let hasClass = element.classList.contains("qty-change");
  found.getElementsByClassName("btn-add")[0].innerHTML = hasClass
    ? QtyBtn()
    : AddBtn();
}

function ToggleBackBtns() {
  let btns = document.getElementsByClassName("btn-add");
  for (let btn of btns) {
    if (btn.classList.contains("qty-change")) {
      btn.classList.toggle("qty-change");
    }
    btn.innerHTML = AddBtn();
  }
}

function CartIsEmpty() {
  let emptyCart = `<span class='empty-cart'>Looks Like You Haven't Added Any Product In The Cart</span>`;
  if (cartDetails.length == 0) {
    document.getElementsByClassName("cart-items")[0].innerHTML = emptyCart;
  }
}

function CartItemsTotal() {
  let totalPrice = cartDetails.reduce((totalCost, item) => {
    return totalCost + item.price * item.qty;
  }, 0);
  let totalQty = cartDetails.reduce((total, item) => {
    return total + item.qty;
  }, 0);
  document.getElementsByClassName("total")[0].innerText = totalPrice;
  document.getElementsByClassName("total-qty")[0].innerText = totalQty;
}

function Stocks() {
  cartDetails.forEach((item) => {
    productDetails.forEach((product) => {
      if (item.name == product.name && product.qty >= 0) {
        product.qty -= item.qty;
        if (product.qty < 0) {
          product.qty += item.qty;
          document.getElementsByClassName("invoice")[0].style.height = "180px";
          document.getElementsByClassName(
            "order-details"
          )[0].innerHTML = `<em class='thanks'>Stocks Limit Exceeded</em>`;
        } else if (product.qty == 0) {
          OutOfStock(product, 1);
        } else if (product.qty <= 5) {
          OutOfStock(product, 0);
        }
      }
    });
  });
}

function OutOfStock(product, handler) {
  let products = document.getElementsByClassName("card");
  for (let items of products) {
    let stocks = items.getElementsByClassName("stocks")[0];
    let name = items.getElementsByClassName("product-name")[0].innerText;
    if (product.name == name) {
      if (handler) {
        items.getElementsByClassName("out-of-stock-cover")[0].style.display =
          "flex";
        stocks.style.display = "none";
      } else {
        stocks.innerText = "Only Few Left";
        stocks.style.color = "orange";
      }
    }
  }
}
function App() {
  return `
  <div>
    ${Banner()}
  </div>`;
}

//}
// injects the rendered component's html
document.getElementById("app").innerHTML = App();
