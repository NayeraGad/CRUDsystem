var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCatInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var rowDataElement = document.getElementById("row");

var pList = [];

if (localStorage.getItem("products") !== null) {
  pList = JSON.parse(localStorage.getItem("products"));
  displayProduct();
} else {
  pList = [];
}

function addProduct() {
  if (productNameInput == "") {
    return;
  }

  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCatInput.value,
    description: productDescInput.value,
  };

  pList.push(product);
  displayProduct();
  console.log(pList);

  localStorage.setItem("products", JSON.stringify(pList));
}

function displayProduct() {
  var productCard = "";

  for (var i = 0; i < pList.length; i++) {
    productCard += `<div
          id="rowCard"
          class="col-md-6 g-4 col-lg-4 col-xl-3 shadow-lg pt-3"
        >
          <div class="inner">
            <img
              src="imgs/photo-1421930866250-aa0594cea05c.jfif"
              alt=""
              class="card-img"
            />
            <span class="badge text-bg-info align-self-start my-2">${pList[i].category}</span>
            <h2>${pList[i].name}</h2>
            <p>
              ${pList[i].description}
            </p>
            <span class="d-block mb-2 fs-6 fw-lighter"> $${pList[i].price}</span>
            <button onclick="deleteProduct(${i})" class='btn btn-danger btn-sm mb-3'>Delete Product</button>
            <button onclick="updateProduct(${i})" class='btn btn-info btn-sm mb-3'>Update Product</button>
          </div>
        </div>`;
  }
  rowDataElement.innerHTML = productCard;
}

function deleteProduct(index) {
  pList.splice(index, 1);

  displayProduct();
  localStorage.setItem("products", JSON.stringify(pList));
}
