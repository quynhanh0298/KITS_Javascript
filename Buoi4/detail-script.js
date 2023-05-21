const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log(id);
async function getSingleProduct() {
  return fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );
}
async function fetchData() {
  const item = await getSingleProduct();
  console.log(item);

  const productBigImage = document.getElementById("big-image");
  productBigImage.innerHTML += `
    <img src="${item.images[0]}" alt="">
  `;
  const productSmallImage = document.getElementById("small-images");
  productSmallImage.innerHTML += `
    <img class="small-image" src="${item.images[1]}" alt="">
    <img class="small-image" src="${item.images[2]}" alt="">
    <img class="small-image" src="${item.images[3]}" alt="">
  `;
  const productInfo = document.getElementById("product-info");
  productInfo.innerHTML += `
  <div id="product-name" class="product-name">${item.title}</div>
  <div id="brand" class="brand">BY ${item.brand}</div>
  <div class="price-info">
          <div class="price">${item.price}</div>
          <div class="sale">
            <div class="sale-percentage">Save ${item.discountPercentage}</div>
            <div class="sale-information"></div>
          </div>
          <div class="description">${item.description}</div>
        </div>
  `;
}

const cartQty = document.getElementById("cart-qty");
const setCartQty = () => {
  if (sessionStorage.getItem("cartQty") !== null) {
    cartQty.innerHTML = sessionStorage.getItem("cartQty");
  } else {
    cartQty.innerHTML = 0;
    sessionStorage.setItem("cartQty", 0);
  }
};

const addCartButton = document.getElementById("add-to-cart-button");
addCartButton.onclick = () => {
  sessionStorage.setItem(
    "cartQty",
    Number(sessionStorage.getItem("cartQty")) + 1
  );
  cartQty.innerHTML = sessionStorage.getItem("cartQty");
};

window.onload = () => {
  fetchData();
  setCartQty();
};
