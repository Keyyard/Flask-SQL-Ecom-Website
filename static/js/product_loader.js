/*

async function fetchProducts() {
        const productsPath = '../data/products.json'
        const response = await fetch(productsPath);
        const products = await response.json();
        formatProducts(products);
}

const backpackList = document.getElementById('backpacks');
const walletList = document.getElementById('wallets');
const crossbagList = document.getElementById('crossbags');
const toteList = document.getElementById('totes');

function formatProducts(products) {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('col', 'mb-5');
        productElement.innerHTML = `
            <div class="card h-100">
                <img class="card-img-top" src="${product.image}" alt="${product.name}">
                <div class="card-body p-4">
                    <h5 class="fw-bolder">${product.name}</h5>
                    <p class="text-muted">${product.price}</p>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                        ${generateRatingStars(product.rating)}
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" id="addToCart">Add to Cart</a>
                    </div>
                </div>
            </div>
        `;
        if (product.category === 'backpacks') {
            backpackList.appendChild(productElement);
        }
        if (product.category === 'wallets') {
            walletList.appendChild(productElement);
        }
        if (product.category === 'crossbags') {
            crossbagList.appendChild(productElement);
        }
        if (product.category === 'totes') {
            toteList.appendChild(productElement);
        }

    });
}

function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="bi bi-star-fill"></i>';
    }
    if (halfStar) {
        starsHTML += '<i class="bi bi-star-half"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="bi bi-star"></i>';
    }

    return starsHTML;
}

fetchProducts();

*/