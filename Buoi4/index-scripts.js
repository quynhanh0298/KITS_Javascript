async function getProductsForBestSellingItem(limit, skip) {
  return fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=id,title,price,images`
  ).then((res) => res.json());
}

async function fetchData() {
  const productsForBestSellingTop = await getProductsForBestSellingItem(3, 0);
  const productsForBestSellingBottom = await getProductsForBestSellingItem(
    3,
    3
  );

  const productsTop = productsForBestSellingTop.products;
  const productsBottom = productsForBestSellingBottom.products;
  const bestSellingTop = document.getElementById("best-selling-top");
  const bestSellingBottom = document.getElementById("best-selling-bottom");
  for (const item of productsTop) {
    bestSellingTop.innerHTML += `
        <div id="product" class="best-selling-item">
        <img onclick= "goToDetail(${item.id})" src="${item.images[0]}" alt="" />
        <p>${item.title}</p>
        <p>${item.price}</p>
      </div>
`;
  }

  for (const item of productsBottom) {
    bestSellingBottom.innerHTML += `
        <div class="best-selling-item">
        <img onclick= "goToDetail(${item.id})" src="${item.images[0]}" alt="" />
        <p>${item.title}</p>
        <p>${item.price}</p>
      </div>
`;
  }
}
goToDetail = (id) => {
  window.location.assign(`detail.html?id=${id}`);
};
window.onload = () => {
  fetchData();
};
