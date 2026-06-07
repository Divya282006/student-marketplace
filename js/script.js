const products = [
    {
        name: "Engineering Mathematics",
        price: 200,
        seller: "Divya",
        image: "images/book.jpg"
          
    },
    {
        name: "Scientific Calculator",
        price: 550,
        seller: "Rahul",
        image: "images/calculator.jpg"
          
    },

    {
        name: "StudyDesk",
        price: 150,
        seller: "Ananya",
        image: "images/studydesk.jpg"
          
    },

    {
        name: "laptop",
        price: 3000,
        seller: "Aman",
        image: "images/laptop.jpg"
       
    }
];

const productContainer = document.getElementById("productContainer");

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