//Class to simulate a DB to upload all products in the ecommerce.
class DataBase {
  constructor() {
    this.products = [];
    //Uploading all products available
    //Since we are now using local JSON document to load the products we no longer need the products here
    //this.addRegister(
    //  1,
    //  "Evolve 3D Pro Air Jersey",
    //  225,
    //  "White",
    //  "images/img-man/maillot-man1.webp",
    //  "men"
    //);
    //this.addRegister(
    //  2,
    //  "Evolve 3D Pro Air Jersey",
    //  225,
    //  "Gray",
    //  "images/img-man/maillot-man2.webp",
    //  "men"
    //);
    //this.addRegister(
    //  3,
    //  "Evolve 3D Pro Air Jersey",
    //  225,
    //  "Green",
    //  "images/img-man/maillot-man3.webp",
    //  "men"
    //);
    //this.addRegister(
    //  4,
    //  "Evade Pro Base Jersey 2.0",
    //  245,
    //  "Black",
    //  "images/img-man/maillot-man4.webp",
    //  "men"
    //);
    //this.addRegister(
    //  5,
    //  "Evade Pro Base Jersey 2.0",
    //  245,
    //  "Gray",
    //  "images/img-man/maillot-man5.webp",
    //  "men"
    //);
    //this.addRegister(
    //  6,
    //  "Evade Pro Base Jersey 2.0",
    //  245,
    //  "Green",
    //  "images/img-man/maillot-man6.webp",
    //  "men"
    //);
    //this.addRegister(
    //  7,
    //  "Training Bib 3.0",
    //  295,
    //  "Black",
    //  "images/img-man/culotte-man1.webp",
    //  "men"
    //);
    //this.addRegister(
    //  8,
    //  "Elipse Team Bib Evo",
    //  375,
    //  "Black",
    //  "images/img-man/culotte-man2.webp",
    //  "men"
    //);
    //this.addRegister(
    //  9,
    //  "Training Bib 3.0",
    //  295,
    //  "Brown",
    //  "images/img-man/culotte-man3.webp",
    //  "men"
    //);
    //this.addRegister(
    //  10,
    //  "Training Bib 3.0",
    //  295,
    //  "Green",
    //  "images/img-man/culotte-man4.webp",
    //  "men"
    //);
    //this.addRegister(
    //  11,
    //  "Elipse Team Bib Evo",
    //  375,
    //  "Red",
    //  "images/img-man/culotte-man5.webp",
    //  "men"
    //);
    //this.addRegister(
    //  12,
    //  "Team Bib Evo",
    //  355,
    //  "Brown",
    //  "images/img-man/culotte-man6.webp",
    //  "men"
    //);
    //this.addRegister(
    //  13,
    //  "Evade Pro Base LS Jersey 2.0",
    //  275,
    //  "Brown",
    //  "images/img-NS/NS3.webp",
    //  "new men"
    //);
    //this.addRegister(
    //  14,
    //  "Evade Pro Base LS Jersey 2.0",
    //  275,
    //  "Purple",
    //  "images/img-NS/NS4.webp",
    //  "new men"
    //);
    //this.addRegister(
    //  15,
    //  "Women's Evade Pro Base Jersey 2.0",
    //  245,
    //  "Purple",
    //  "images/img-NS/NS6.webp",
    //  "new woman"
    //);
    //this.addRegister(
    //  16,
    //  "Women's Evade Pro Base Jersey 2.0",
    //  245,
    //  "Blue",
    //  "images/img-NS/NS7.webp",
    //  "new woman"
    //);
    //this.addRegister(
    //  17,
    //  "Evade Pro Base Jersey 2.0",
    //  245,
    //  "White",
    //  "images/img-NS/NS8.webp",
    //  "new man"
    //);
    //this.addRegister(
    //  18,
    //  "Women's Team Bib Evo",
    //  355,
    //  "Purple",
    //  "images/img-NS/NS9.webp",
    //  "new woman"
    //);
    //this.addRegister(
    //  19,
    //  "Women's Team Bib Evo",
    //  355,
    //  "Brown",
    //  "images/img-NS/NS10.webp",
    //  "new woman"
    //);
    //this.addRegister(
    //  20,
    //  "Team Bib Evo",
    //  355,
    //  "Deep Purple",
    //  "images/img-NS/NS11.webp",
    //  "new man"
    //);
    //this.addRegister(
    //  21,
    //  "Women's Team Bib Evo",
    //  355,
    //  "Purple",
    //  "images/img-NS/NS9.webp",
    //  "new woman"
    //);
    //this.addRegister(
    //  22,
    //  "Draft Team Jacket",
    //  215,
    //  "Brown",
    //  "images/img-NS/NS15.webp",
    //  "new man"
    //);
    //this.addRegister(
    //  23,
    //  "Women's Draft Team Jacket",
    //  215,
    //  "Purple",
    //  "images/img-NS/NS16.webp",
    //  "new woman"
    //);
    //this.addRegister(
    //  24,
    //  "Women's Evolve 3D Pro Air",
    //  225,
    //  "White",
    //  "images/img-woman/maillot-woman1.webp",
    //  "woman"
    //);
    //this.addRegister(
    //  25,
    //  "Women's Evolve 3D Pro Air",
    //  225,
    //  "Green",
    //  "images/img-woman/maillot-woman2.webp",
    //  "woman"
    //);
    //this.addRegister(
    //  26,
    //  "Women's Evade Pro Base Jersey 2.0",
    //  245,
    //  "Light Green",
    //  "images/img-woman/maillot-woman4.webp",
    //  "woman"
    //);
    //this.addRegister(
    //  27,
    //  "Women's Evolve 3D Pro Air",
    //  225,
    //  "Pink",
    //  "images/img-woman/maillot-woman5.webp",
    //  "woman"
    //);
    //this.addRegister(
    //  28,
    //  "Team Bib Evo",
    //  355,
    //  "Light Gray",
    //  "images/img-woman/culotte-woman1.webp",
    //  "woman"
    //);
    //this.addRegister(
    //  29,
    //  "Women's Training Bib 3.0",
    //  295,
    //  "Black",
    //  "images/img-woman/culotte-woman2.webp",
    //  "woman"
    //);
    //this.addRegister(
    //  30,
    //  "Women's Training Bib 3.0",
    //  295,
    //  "Green",
    //  "images/img-woman/culotte-woman3.webp",
    //  "woman"
    //);
    //this.addRegister(
    //  31,
    //  "Women's Alt_Road Cargo",
    //  415,
    //  "Purple",
    //  "images/img-woman/culotte-woman4.webp",
    //  "woman"
    //);
    //this.addRegister(
    //  32,
    //  "Women's Alt_Road Cargo",
    //  415,
    //  "Brown",
    //  "images/img-woman/culotte-woman5.webp",
    //  "woman"
    //);
    //this.addRegister(
    //  33,
    //  "Women's Training Bib 3.0",
    //  295,
    //  "Brown",
    //  "images/img-woman/culotte-woman6.webp",
    //  "woman"
    //);
    //this.addRegister(
    //  34,
    //  "MAAP x 100% Hypercraft",
    //  305,
    //  "Red",
    //  "images/img-acc/acc1.webp",
    //  "acc"
    //);
    //this.addRegister(
    //  35,
    //  "MAAP x 100% Hypercraft",
    //  305,
    //  "Green",
    //  "images/img-acc/acc2.webp",
    //  "acc"
    //);
    //this.addRegister(
    //  36,
    //  "Pro Race Mitt",
    //  115,
    //  "Green",
    //  "images/img-acc/acc3.webp",
    //  "acc"
    //);
    //this.addRegister(
    //  37,
    //  "Leg Warmers",
    //  95,
    //  "Black",
    //  "images/img-acc/acc4.webp",
    //  "acc"
    //);
    //this.addRegister(
    //  38,
    //  "Leg Warmers",
    //  95,
    //  "Blue",
    //  "images/img-acc/acc5.webp",
    //  "acc"
    //);
    //this.addRegister(
    //  39,
    //  "Knee Warmers",
    //  80,
    //  "Black",
    //  "images/img-acc/acc6.webp",
    //  "acc"
    //);
    //this.addRegister(
    //  40,
    //  "Arm Warmers",
    //  75,
    //  "Blue",
    //  "images/img-acc/acc7.webp",
    //  "acc"
    //);
    //this.addRegister(
    //  41,
    //  "Evade Bottle",
    //  30,
    //  "Black",
    //  "images/img-acc/acc8.webp",
    //  "acc"
    //);
    //this.addRegister(
    //  42,
    //  "Evade Bottle",
    //  30,
    //  "White",
    //  "images/img-acc/acc9.webp",
    //  "acc"
    //);
    //this.addRegister(
    //  43,
    //  "ADL 2023 Sock",
    //  35,
    //  "Black",
    //  "images/img-acc/acc10.webp",
    //  "acc"
    //);
    //this.addRegister(
    //  44,
    //  "Emerge Pro Air Sock",
    //  30,
    //  "Green",
    //  "images/img-acc/acc11.webp",
    //  "acc"
    //);
    //this.addRegister(
    //  45,
    //  "Emerge Pro Air Sock",
    //  30,
    //  "Black",
    //  "images/img-acc/acc12.webp",
    //  "acc"
    //);
  }

  //Since we are working with local JSON document we no longer need this method
  //addRegister(id, name, price, color, image, category) {
  //  const product = new Product(id, name, price, color, image, category);
  //  this.products.push(product);
  //}

  //Old bringRegisters method
  //bringRegisters() {
  //  return this.products;
  //}

  //Async bring registers locally method
  async bringRegisters() {
    const response = await fetch("./products.json");
    this.products = await response.json();
    return this.products;
  }
  //Bring Registers Method
  registerById(id) {
    return this.products.find((product) => product.id == id);
  }
  //Bring Registers by Keyword
  registerByName(word) {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(word)
    );
  }
  //Bring Registers by Category
  registerByCategory(keyword) {
    return this.products.filter((product) =>
      product.category.includes(keyword)
    );
  }
}

//Cart Class
class Cart {
  constructor() {
    const storageCart = JSON.parse(localStorage.getItem("cart"));
    this.cart = storageCart || [];
    this.total = 0;
    this.totalProducts = 0;
    this.list();
  }
  //Find products in Cart
  inCart({ id }) {
    return this.cart.find((product) => product.id === id);
  }
  //Add to Cart
  addToCart(product) {
    let productOnCart = this.inCart(product);
    if (productOnCart) {
      productOnCart.amount++;
    } else {
      this.cart.push({ ...product, amount: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.list();
    Toastify({
      text: `${product.name} added to cart`,
      duration: 2000,
      className: "info",
      gravity: "bottom",
      position: "center",
      style: {
        background: "black",
      },
    }).showToast();
  }
  //Remove from Cart
  remove(id) {
    const index = this.cart.findIndex((product) => product.id === id);
    const productName = this.cart[index].name;
    if (this.cart[index].amount > 1) {
      this.cart[index].amount--;
    } else {
      this.cart.splice(index, 1);
      Toastify({
        text: `${productName} removed from cart`,
        duration: 2000,
        className: "info",
        gravity: "bottom",
        position: "right",
        style: {
          background: "black",
        },
      }).showToast();
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.list();
  }
  //Change amount from cart
  add(id) {
    const index = this.cart.findIndex((product) => product.id === id);
    if (this.cart[index].amount >= 1) {
      this.cart[index].amount++;
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.list();
  }
  //List Products on Cart
  list() {
    this.total = 0;
    this.totalProducts = 0;
    cartDiv.innerHTML = "";
    for (const product of this.cart) {
      cartDiv.innerHTML += `
        <ul class="cart list-group">
        <li class="list-group-item">
        <div class="row">
          <div class="col">
            <div class="mt-2">PRODUCT:</div>
            <div class="mt-2">${product.name}</div>
            <div class="mt-2">Price: ${product.price} DLS $</div>
            <div class="mt-2">Color: ${product.color}</div>
            <a class="mt-1 mx-1 btn btn-sm btn-outline-dark border-1 py-1 removeBtn" href="#" data-id="${product.id}"><i class="bi bi-dash-lg"></i></a><a class="mt-1 mx-1 btn border-1 py-1" href="#">${product.amount}</a><a class="mt-1 mx-1 btn btn-sm btn-outline-dark border-1 py-1 addBtn" href="#" data-id="${product.id}"><i class="bi bi-plus-lg"></i></a>
          </div>
          <div class="col">
            <img src="${product.image}" class="img-fluid cart-img">
          </div>
        </div>
      </li>
      </ul>`;
      this.total += product.price * product.amount;
      this.totalProducts += product.amount;
    }
    //Remove Buttons
    const removeButtons = document.querySelectorAll(".removeBtn");
    for (const button of removeButtons) {
      button.onclick = (event) => {
        event.preventDefault();
        this.remove(Number(button.dataset.id));
      };
    }
    //Add Buttons
    const addButtons = document.querySelectorAll(".addBtn");
    for (const button of addButtons) {
      button.onclick = (event) => {
        event.preventDefault();
        this.add(Number(button.dataset.id));
      };
    }
    //Refresh cart variables
    spanProductsOnCart.innerText = this.totalProducts;
    spanCartTotl.innerText = this.total;
  }

  //Empty Cart
  emptyCart() {
    this.cart = [];
    localStorage.removeItem("cart");
    this.total = 0;
    this.totalProducts = 0;
    cartDiv.innerHTML = "";

    // Render HTML elements
    spanProductsOnCart.innerText = this.totalProducts;
    spanCartTotl.innerText = this.total;
  }

  //Print Ticket
  printTicket() {
    const modalList = document.querySelector("#modalList");
    const currentDate = new Date().toLocaleDateString();
    for (const product of this.cart) {
      const productItem = document.createElement("li");
      productItem.innerHTML = `
         <div class="list-group-item">
         <div><strong>Product:</strong> ${product.name}</div>
         <div><strong>Price:</strong> ${product.price} DLS $</div>
         <div><strong>Color:</strong> ${product.color}</div>
         <div><strong>Amount:</strong> ${product.amount}</div>
        </div>
        `;
      modalList.appendChild(productItem);
    }
    const ticketResume = document.querySelector("#resume");
    ticketResume.innerHTML = `<div>Total: ${this.total} DLS $ (${currentDate})</div>`;
    const closeTicket = document.querySelector(".closeTicket");
    closeTicket.addEventListener("click", () => {
      modalList.innerHTML = "";
    });

    const confirmTicket = document.querySelector(".confirmTicket");
    confirmTicket.addEventListener("click", () => {
      ticketResume.innerHTML = "";
      modalList.innerHTML = "";
      const modalIframe = document.querySelector("#modalIframe");
      modalIframe.classList.add("modal-iframe");
      modalIframe.innerHTML = `
        <div class="text-center">
        <img src="media/rickroll.gif"/>
        </div>
        `;
      const modalText = document.querySelector("#modalText");
      modalText.innerText = "YOU'VE BEEN RICK ROLLED";
      confirmTicket.innerText = "END THIS PLEASE";
      confirmTicket.addEventListener("click", () => {
        modalIframe.innerHTML = "";
        location.reload();
      });
      this.emptyCart();
    });
  }
}

//Class to create all products
class Product {
  constructor(id, name, price, color, image = fasle, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.color = color;
    this.image = image;
    this.category = category;
  }
}

//DB inicialization
const DB = new DataBase();

//We use this console.log to extract registers on DB on JSON format to apply fetch locally.
//console.log(JSON.stringify(DB.bringRegisters()));

//Elements
const productsDiv = document.querySelector("#products");
const cartDiv = document.querySelector("#cart");
const spanProductsOnCart = document.querySelector("#productsOnCart");
const spanCartTotl = document.querySelector("#cartTotal");
const searchInput = document.querySelector("#searchInput");
const emptyCartButton = document.querySelector("#emptyCartBtn");
const bannerTop = document.querySelector("#bannerTop");
const planningCategory = document.querySelector("#planningCategory");
const desingCategory = document.querySelector("#designCategory");
const plantsCategory = document.querySelector("#plantsCategory");
const accCategory = document.querySelector("#accCategory");
const iframe = document.querySelector("#iframe");

//Print ticket

const checkoutBtn = document.querySelector("#checkoutBtn");
checkoutBtn.addEventListener("click", () => {
  cart.printTicket();
});

//Old call to load products
//loadProducts(DB.bringRegisters());

//Call to new bringRegisters async method
DB.bringRegisters().then((products) => loadProducts(products));

//Prints the DB registers on the HTML
function loadProducts(products) {
  productsDiv.innerHTML = "";
  for (const product of products) {
    productsDiv.innerHTML += `
      <div class="p-1 col-sm-6 col-md-3 col-lg-2 d-inline-block m-2 text-center card text-center">
                <img
                  src="${product.image}"
                  class="img-fluid card-img-top"
                  alt="evade pro base ls jersey brown"
                />
                <div class="card-body">
                  <button
                    class="addToCartBtn btn btn-dark"
                    data-id="${product.id}"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
      `;
  }
  //Add to cart buttons
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");
  for (const button of addToCartButtons) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const id = Number(button.dataset.id);
      const product = DB.registerById(id);
      cart.addToCart(product);
    });
  }
}

//Search event
searchInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  const word = searchInput.value;
  loadProducts(DB.registerByName(word.toLowerCase()));
  bannerTop.innerHTML = "";
  iframe.classList.add("d-none");
});

//Filter by Categories
newCategory.addEventListener("click", (event) => {
  event.preventDefault();
  loadProducts(DB.registerByCategory("PLANNING"));
  bannerTop.innerHTML = `
        <div class="bg-image img-fluid position-relative">
          <img src="images/bannerNS.avif" class="w-100" />
          <div class="position-absolute bottom-50 text-light section-title">
            <h1 class="p-2 m-0">PLANNING</h1>
          </div>
        </div>
    `;
  iframe.classList.remove("d-none");
});

manCategory.addEventListener("click", (event) => {
  event.preventDefault();
  loadProducts(DB.registerByCategory("design"));
  bannerTop.innerHTML = `
        <div id="design" class="mt-5 bg-image img-fluid position-relative">
          <img src="" class="w-100" />
          <div class="position-absolute bottom-50 text-light section-title">
            <h2 class="p-2 m-0">DESIGN</h2>
          </div>
        </div>
    `;
  iframe.innerHTML = `
    <iframe
    class="responsive-iframe"
    src=""
    loading="lazy"
    ></iframe>
    `;
  iframe.classList.remove("d-none");
});

womanCategory.addEventListener("click", (event) => {
  event.preventDefault();
  loadProducts(DB.registerByCategory("plants"));
  bannerTop.innerHTML = `
        <div id="plants" class="mt-5 bg-image img-fluid position-relative">
          <img src="" class="w-100" />
          <div class="position-absolute bottom-50 text-light section-title">
            <h2 class="p-2 m-0">PLANTS</h2>
          </div>
        </div>
    `;
  iframe.innerHTML = `
    <iframe
    class="responsive-iframe"
    src=""
    loading="lazy"
    ></iframe>
    `;
  iframe.classList.remove("d-none");
});

accCategory.addEventListener("click", (event) => {
  event.preventDefault();
  loadProducts(DB.registerByCategory("acc"));
  bannerTop.innerHTML = `
        <div id="accessories" class="mt-5 bg-image img-fluid position-relative">
          <img src="images/bannerAcc.avif" class="w-100" />
          <div class="position-absolute bottom-50 text-light section-title">
            <h2 class="p-2 m-0">ACCESSORIES</h2>
          </div>
        </div>
    `;
  iframe.innerHTML = `
    <iframe
          class="responsive-iframe"
          src=""
          loading="lazy"
        ></iframe>
    `;
  iframe.classList.remove("d-none");
});

//Empty Cart
emptyCartButton.addEventListener("click", () => {
  cart.emptyCart();
});

//Cart Object
const cart = new Cart();

//Scroll Up
const scrollUpButton = document.getElementById("scrollUp");

scrollUpButton.addEventListener("click", () => {
  // Scroll smoothly to the top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//WEATHER APP

let weather = {
  apiKey: "4f8f206d6a7ee8151b6166de633716b5",
  result: "",
  //Fetch Api
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => {
        this.displayWeather(data);
      });
  },
  //Display Weather
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const city = document.querySelector("#city");
    const weatherIcon = document.querySelector("#icon");
    const weatherDescription = document.querySelector("#description");
    const temperature = document.querySelector("#temp");
    const weatherHumidity = document.querySelector("#humidity");
    const windSpeed = document.querySelector("#windSpeed");
    city.innerText = "Weather in " + name;
    weatherIcon.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    weatherDescription.innerText = description;
    temperature.innerText = temp + " ºC";
    weatherHumidity.innerText = "Humidity: " + humidity + " %";
    windSpeed.innerText = "Wind Speed: " + speed + " km/h";
    this.cityName = name;
    //Stablish weather Category products from Icons on Api
    if (icon.includes("01") || icon.includes("02")) {
      this.result = "sunny";
    } else if (icon.includes("03") || icon.includes("04")) {
      this.result = "cloudy";
    } else if (
      icon.includes("09") ||
      icon.includes("10") ||
      icon.includes("11")
    ) {
      this.result = "rainy";
    } else if (icon.includes("13") || icon.includes("50")) {
      this.result = "cold";
    } else {
      this.result = "";
    }
  },
  //Search weather by city
  search: function () {
    this.fetchWeather(document.querySelector("#searchCity").value);
  },
  //Fetch products locally depending on weather (icon stablished)
  productsByWeather: function () {
    if (this.result === "sunny") {
      this.fetchProducts("sunny");
    } else if (this.result === "cloudy") {
      this.fetchProducts("cloudy");
    } else if (this.result === "rainy") {
      this.fetchProducts("rainy");
    } else if (this.result === "cold") {
      this.fetchProducts("cold");
    } else {
      alert("No products available for the current weather.");
    }
  },
  //Indicates local JSON docs by watherType
  fetchProducts: function (weatherType) {
    const productsURL = `./products_${weatherType}.json`;
    fetch(productsURL)
      .then((response) => response.json())
      .then((products) => this.displayProducts(products))
      .catch((error) => console.error(error));
  },
  //Display weather
  displayProducts: function (products) {
    const ideasModalBody = document.querySelector("#ideasModalBody");
    ideasModalBody.innerHTML = "";
    for (const product of products) {
      const productItem = document.createElement("ul");
      productItem.classList.add("cart", "list-group");
      productItem.innerHTML = `
          <li class="list-group-item">
            <div class="row">
              <div class="col">
                <div class="mt-2">PRODUCT:</div>
                <div class="mt-2">${product.name}</div>
                <div class="mt-2">Price: ${product.price} DLS $</div>
                <div class="mt-2">Color: ${product.color}</div>
              </div>
              <div class="col">
                <img src="${product.image}" class="img-fluid cart-img">
              </div>
            </div>
          </li>
        `;

      const addButton = document.createElement("button");
      addButton.classList.add("btn", "btn-dark", "addToCartBtn", "mt-2");
      addButton.dataset.id = product.id;
      addButton.innerText = "ADD TO CART";
      addButton.addEventListener("click", () => {
        const selectedProduct = DB.registerById(product.id);
        if (selectedProduct) {
          cart.addToCart(selectedProduct);
        }
      });

      productItem.querySelector(".col").appendChild(addButton);
      ideasModalBody.appendChild(productItem);
    }
  },
};
//Search Event click
const searchCityButton = document.querySelector("#searchCityButton");
searchCityButton.addEventListener("click", (event) => {
  event.preventDefault();
  weather.search();
});
//Search Event enter
document.querySelector("#searchCity").addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.key == "Enter") {
    weather.search();
  }
});
//Modal changes on api response
const weatherProductsButton = document.querySelector("#weatherProductsButton");
weatherProductsButton.addEventListener("click", () => {
  weather.productsByWeather();
  weatherProductsButton.remove();
  const modalFooterText = document.querySelector("#modalFooterText");
  modalFooterText.innerText = `This products are perfect for weather conditions in ${weather.cityName}`;
  const modalFooterBtn1 = document.querySelector("#modalFooterBtn1");
  modalFooterBtn1.innerText = "DELETE SELECTED CITY";
  modalFooterBtn1.addEventListener("click", () => {
    location.reload();
  });
});
//Fetch weather by default
weather.fetchWeather("Costa Rica");
