let products = JSON.parse(localStorage.getItem("products")) || [
    {
        name: "Engineering Mathematics",
        price: 200,
        seller: "Divya",
        category: "Books",
        image: "images/book.jpg"
    },
    {
        name: "Scientific Calculator",
        price: 550,
        seller: "Rahul",
        category: "Electronics",
        image: "images/calculator.jpg"
    },
    {
        name: "Study Desk",
        price: 150,
        seller: "Ananya",
        category: "Furniture",
        image: "images/studydesk.jpg"
    },
    {
        name: "Laptop",
        price: 3000,
        seller: "Aman",
        category: "Electronics",
        image: "images/laptop.jpg"
    }
];

const productContainer =
document.getElementById("productContainer");

function displayProducts() {

    productContainer.innerHTML = "";

    products.forEach(product => {

        productContainer.innerHTML += `
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">₹${product.price}</p>

                <p>Posted by ${product.seller}</p>

            </div>

        </div>
        `;
    });
}

displayProducts();
const sellForm =
document.getElementById("sellForm");

sellForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const newProduct = {

        name:
        document.getElementById("productName").value,

        price:
        document.getElementById("productPrice").value,

        category:
        document.getElementById("productCategory").value,

        seller:
        document.getElementById("sellerName").value,

        image:
        document.getElementById("productImage").value
    };

    products.push(newProduct);

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

    displayProducts();

    sellForm.reset();

    modal.style.display = "none";
});