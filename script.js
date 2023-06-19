const smallImages = document.querySelectorAll('.small-image');
const modalSmallImages = document.querySelectorAll('.small-img');
const largeImage = document.querySelector('.large-image');
const modalImage = document.querySelector('.large-img');
const cartContent = document.querySelector('.cart-content');
const cartContentclose = document.querySelector('.close-button-1');
const lightbox = document.querySelector('.lightbox')
const closeButton = document.querySelector('.close-button')
const lightboxImage = document.querySelector('.lightbox-images')
const openButton = document.querySelector('.large-image ')
const previousButton = document.querySelector('.previous-button')
const nextButton = document.querySelector('.next-button')
const addButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const number = document.querySelector('.number');



// Company Information
const companyItems =[
    {
        name: 'Sneaker Company',
        title: 'Fall Limited Edition Sneakers',
        description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: '$125.00',
        percentage: '50%',
        discount: '$250.00'
    }
]
const company = document.querySelector('.company-items')
companyItems.forEach(element => {
    const companyItem = document.createElement('div')
    companyItem.classList.add('company-item')
    companyItem.innerHTML = `<div>
    <h2>${element.name}</h2>
    <h3>${element.title}</h3>
    <h4>${element.description}</h4>
    <div class = "price">
    <p>${element.price}<span>${element.percentage}</span></p>
    <h5>${element.discount}</h5>
    </div>
    </div>`    
    company.appendChild(companyItem)
});


// Company Images



smallImages.forEach((smallImage) => {
  smallImage.addEventListener('click', () => {
    const largeImageUrl = smallImage.getAttribute('data-large-url');
    largeImage.src = largeImageUrl;
    largeImage.style.display = 'block';
  });
});


//Modal state


largeImage.addEventListener('click', () => {
    lightboxImage.src = largeImage.src;
    lightbox.style.display = 'block';
  });
closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

//Close the modal when any part of the window is clicked outside the modal
window.addEventListener('click', (event) => {
  if (event.target === lightbox ) {
    lightbox.style.display = 'none';
  }
});



//onclick



  // Store the current index of the large image
  let currentImageIndex = 0;

  // Add click event listeners to the previous and next buttons
  previousButton.addEventListener('click', showPreviousImage);
  nextButton.addEventListener('click', showNextImage);

  // Add click event listeners to each small image
  modalSmallImages.forEach((smallImage, index) => {
    smallImage.addEventListener('click', () => showImage(index));
  });

  // Function to show the previous image
  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + modalSmallImages.length) % modalSmallImages.length;
    updateLargeImage();
  }

  // Function to show the next image
  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % modalSmallImages.length;
    updateLargeImage();
  }

  // Function to show a specific image
  function showImage(index) {
    currentImageIndex = index;
    updateLargeImage();
  }

  // Function to update the large image source based on the current index
  function updateLargeImage() {
    const largeImageUrl = modalSmallImages[currentImageIndex].getAttribute('data-large-url1');
    modalImage.src = largeImageUrl;
  }


// Function to select the number of sneakers you want to buy

minusButton.addEventListener('click', () => {
  if (num > 0) {
    num--;
    number.textContent = num;
  }
});



let num = 0;
number.textContent = num;
addButton.addEventListener('click', () => {
  num++;
  number.textContent = num;
});

 //Cart Item

let cartItems = [];

const addToCartButton = document.querySelector('.add-to-cart');
const cartButton = document.querySelector('.cart-btn');

let cart = 0;
addToCartButton.addEventListener('click', () => {
  const selectedNumber = parseInt(number.textContent);
  if (!isNaN(selectedNumber) && selectedNumber > 0) {
    cart += selectedNumber;
    cartCount.textContent = cart;
    cartCount.style.display = 'inline-block';
    
    const item = {
        name: 'Cart',
        title: 'Fall Limited Edition Sneakers',
        price: `$125.00x ${selectedNumber}`,
        actualPrice: `$${125.00 * selectedNumber}`,
        img : './images/image-product-1-small.jpg',
        svg : './images/icon-delete.svg',
        description: 'Checkout'
    };
    cartItems.push(item);
}

  number.textContent = 0;

});

// Rendering the cart items when the user clicks on the cart button
const h1 = document.createElement("h1");
const cart1 = document.createElement("h2");
h1.classList.add("empty");
cart1.classList.add("cart-1");



cartButton.addEventListener('click', () => {
  if (cartItems.length <= 0) {
    cart1.textContent= 'Cart';
    h1.textContent = 'Your cart is empty';
    cartContent.appendChild(h1);
    cartContent.appendChild(cart1)
    // cartContent.textContent = 'Your cart is empty';
    cartContent.style.display = 'block';
    console.log(cartContent)
  } else {
    cartContent.textContent = '';
    
      cartItems.forEach((element) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `

          <h2>${element.name}</h2>
      
          <div class="title">
          <div class="small">
          <img src="${element.img}" alt="">
          </div>
          <div class="title-1">
          <h3>${element.title}</h3>
          </div>
          <div class="price">
          <p>${element.price}<span>${element.actualPrice}</span></p>
          </div>
          <div class="delete">
          <img src="${element.svg}">
          </div>
          </div>
          
         
          <button>${element.description}</button>
        `;
        cartContent.appendChild(cartItem);
      });
      cartContent.style.display = 'block';
    

    const deleteButton = document.querySelectorAll('.delete');
    deleteButton.forEach((deleteButton) => {
    deleteButton.addEventListener('click',() => {
    const cartItem = deleteButton.closest('.cart-item');
    cartItem.remove();
    

  
    console.log(deleteButton );
    const cartContent = document.querySelector(".cart-content");

    cartContent.style.display = "block";
    const h4 = document.createElement("h4");
    const cart2 = document.createElement("h3");
    const hr = document.createElement("hr")
    hr.classList.add("cart-hr");
    h4.classList.add("empty1");
    cart2.classList.add("cart-2");
    cart2.textContent= 'Cart';
    h4.textContent = 'Your cart is empty';
    cartContent.appendChild(hr);
    cartContent.appendChild(h4);
    cartContent.appendChild(cart2)
    cartCount.style.display = "none";

    cartItems = [];
    cart -= num;
    num = 0;
    cartCount.textContent = cart;


    cart1.style.display= "none";
    h1.style.display = "none"
    
    
    
})
})
}
});



let isCartOpen = false;

cartButton.addEventListener('click', () => {
  if (isCartOpen) {
    // Cart is currently open, close it
    cartContent.style.display = 'none';
    isCartOpen = false;
  } else {
    // Cart is currently closed, open it
    cartContent.style.display = 'block';
    isCartOpen = true;
  }
});


window.addEventListener('click', (event) => {
    const cartContent = document.querySelector('.cart-content');
    if (event.target === cartContent) {
        cartContent.style.display = "none";
    }
    
  });



// Span at the top right corner of Cart button

cartButton.style.position = 'relative';
cartButton.style.display = 'inline-block';

const cartCount = document.createElement('span');
cartCount.style.position = 'absolute';
cartCount.style.top = '-10px';
cartCount.style.right = '-10px';
cartCount.style.backgroundColor = 'red';
cartCount.style.color = 'white';
cartCount.style.borderRadius = '50%';
cartCount.style.padding = '4px';
cartCount.style.fontSize = '12px';

cartButton.appendChild(cartCount);
cartCount.style.display = 'none';

// function updateCartCount() {
//     const cartCountElement = document.querySelector('.cart-count');
//     cartCountElement.textContent = cartCount;
//     if (cartCount > 0) {
//         cartCountElement.style.display = 'inline-block';
//     }
//     else {
//         cartCountElement.style.display = 'none';
//     }
// }

// mobile dievice menu-bar
const open = document.querySelector('.mob-open');
const close = document.querySelector('.mob-close');
const tap = document.querySelector('.link-menu-tab');

open.addEventListener('click',(e) =>{
  e.preventDefault();
  tap.style.display = 'block';
  open.style.display = 'none';
  close.style.display = 'flex';
  
})

close.addEventListener('click',(e) =>{
  e.preventDefault();
  tap.style.display = 'none';
  open.style.display = 'flex';
  close.style.display = 'none';
});
