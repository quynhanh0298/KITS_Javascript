async function getAll() {
  return fetch("https://fakestoreapi.com/products?limit=6").then((res) =>
    res.json()
  );
}

async function fetchData() {
  const products = await getAll();
  console.log(products);

  const productsDiv = document.getElementById("products");
  for (let item of products) {
    productsDiv.innerHTML += `
      <div class="im">
      <img class="image" src="${item.image}" alt="">
        <p>${item.id}</p>
        <div onclick = "goToDetail(${item.id})">${item.title}</div>
      </div>
    `;
  }
}
const goToDetail = (i) => {
  window.location.assign(`detail.html?id=${i}`);
};
window.onload = () => {
  fetchData();
};
