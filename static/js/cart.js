let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addToCart(imgSrc, name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const cartItem = {
            imgSrc: imgSrc,
            name: name,
            price: price,
            quantity: 1
        };
        cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    const cartNumber = document.getElementById('cartNumber');
    cartNumber.textContent = getTotalQuantity();
    cartRender();
}


function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));

    const cartNumber = document.getElementById('cartNumber');
    cartNumber.textContent = getTotalQuantity();

    cartRender();
}

function getTotalQuantity() {
    let totalQuantity = 0;
    cart.forEach(item => {
        totalQuantity += item.quantity;
    });
    return totalQuantity;
}
let totaltext = '';
function total() {
    if (cart.length > 0) {
        let total = 0.0;
        cart.forEach(item => {
            total += parseFloat(item.price) * parseInt(item.quantity);
        });
        return total.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    return '0';
}

let totalValue = total();

function checkoutRender () {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    cart.forEach(item => {
      const { imgSrc, name, price, quantity } = item;

      const productItem = document.createElement('div');
      productItem.classList.add('bg-cream', 'mb-4');

      const row = document.createElement('div');
      row.classList.add('py-2', 'border-bottom', 'row');

      const imgCol = document.createElement('div');
      imgCol.classList.add('col-2');

      const img = document.createElement('img');
      img.src = imgSrc;
      img.classList.add('img-fluid');

      imgCol.appendChild(img);
      row.appendChild(imgCol);

      const nameCol = document.createElement('div');
      nameCol.classList.add('col-4');

      const nameHeading = document.createElement('h5');
      nameHeading.classList.add('mb-0');
      nameHeading.textContent = name;

      nameCol.appendChild(nameHeading);
      row.appendChild(nameCol);

      const priceCol = document.createElement('div');
      priceCol.classList.add('col-2');

      const priceParagraph = document.createElement('p');
      priceParagraph.classList.add('text-muted');
      priceParagraph.textContent = price;

      priceCol.appendChild(priceParagraph);
      row.appendChild(priceCol);

      const quantityCol = document.createElement('div');
      quantityCol.classList.add('col-1');

      const quantityDisplay = document.createElement('p');
        quantityDisplay.classList.add('text-muted');
        quantityDisplay.textContent = quantity;
        

      quantityCol.appendChild(quantityDisplay);
      row.appendChild(quantityCol);

      const removeCol = document.createElement('div');
      removeCol.classList.add('col-1');

      const removeButton = document.createElement('button');
      removeButton.classList.add('btn', 'btn-link', 'text-danger');
      removeButton.textContent = 'x';

      removeCol.appendChild(removeButton);
      row.appendChild(removeCol);

      productItem.appendChild(row);
      productList.appendChild(productItem);
    });


    let totalValue = total();

    const totalElement = document.getElementById('total');
    totalElement.classList.add('justify-content-around', 'col-auto');
    totalElement.textContent = `Tổng cộng: ${totalValue}đ`;

    const totalHeading = document.createElement('h3');
    totalHeading.classList.add('mb-0');

    const coupon = document.createElement('input');
    coupon.setAttribute('type', 'text');
    coupon.setAttribute('placeholder', 'Nhập mã giảm giá');
    coupon.classList.add('form-control', 'col-4', 'mb-0', 'w-25', 'mb-4');


    totalElement.appendChild(totalHeading);
    totalElement.appendChild(coupon);
    productList.appendChild(totalElement);
  }

function cartRender () {
    const totalElementCart = document.getElementById('cartTotal');
    const parentElement = document.getElementById('cartItems');
    parentElement.innerHTML = '';
    const row = document.createElement('div');
    row.className = 'row';
    cart.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('col', 'd-flex', 'justify-content-start');
        const itemContent = `
            <div class="">
                <img src="${item.imgSrc}" style="width: 50px; height: 50px;">
                <div class="ms-3">
                    <div class="d-flex">
                        <h6 class="fw-bold">${item.name}</h6>
                        <button class="mx-4 borderless" onclick="removeFromCart('${item.name}')">X</button>
                    </div>
                    <p class="text-muted">${item.price}</p>
                    <p class="text-muted">Số lượng: ${item.quantity}</p>
                </div>
            </div>
        `;
        newItem.innerHTML = itemContent;
        row.appendChild(newItem);
    });
    parentElement.appendChild(row);
    totalValue = total();
    totalElementCart.textContent = `Tổng cộng: ${totalValue}đ`;
}

document.addEventListener('DOMContentLoaded', () => {
    const cartNumber = document.getElementById('cartNumber');
    cartNumber.textContent = getTotalQuantity();
    cartRender();
    checkoutRender();
});

