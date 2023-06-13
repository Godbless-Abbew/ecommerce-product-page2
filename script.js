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
    <div class = "price">
    <h4>${element.description}</h4>
    <p>${element.price}<span>${element.percentage}</span></p>
    <h5>${element.discount}</h5>
    </div>
    </div>`    
    company.appendChild(companyItem)
});


// Company Images

const smallImages = document.querySelectorAll('.small-image');
const largeImage = document.querySelector('.large-image');

smallImages.forEach((smallImage) => {
  smallImage.addEventListener('click', () => {
    const largeImageUrl = smallImage.getAttribute('data-large-url');
    largeImage.src = largeImageUrl;
    largeImage.style.display = 'block';
  });
});



const lightbox = document.querySelector('.lightbox')
const closeButton = document.querySelector('.close-btn')
const lightboxImage = document.querySelector('.lightbox-images')
const openButton = document.querySelector('.large-image ')

largeImage.addEventListener('click', () => {
    lightboxImage.src = largeImage.src;
    lightbox.style.display = 'block';
  });
// openButton.addEventListener('click', () => {
//     lightbox.style.display = 'block';
// })
closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});



// const addButton = document.querySelector('.plus')
// const minusButton = document.querySelector('.minus')
// const number = document.querySelector('.number')

// let num = 0;
// addButton.addEventListener('click', () =>{
//    num++;
//    number.textContent = num;
// })

// minusButton.addEventListener('click', () =>{
//     if (num > 0 ){
//     num--;
//     number.textContent = num;
//     }
// });

// const addToCartButton = document.querySelector('.add-to-cart')
// const  cartButton = document.querySelector('.cart-btn')

// let cart = 0;
// addToCartButton.addEventListener('click', () =>{
//  cart++;
//  cartCount.textContent = cart;
//  cartCount.style.display = 'inline-block';
 
// });

// cartButton.style.position = 'relative';
// cartButton.style.display = 'inline-block';

// const cartCount = document.createElement('span');
// cartCount.textContent = cart;
// cartCount.style.position = 'absolute';
// cartCount.style.top = '-10px';
// cartCount.style.right = '-10px';
// cartCount.style.backgroundColor = 'red';
// cartCount.style.color = 'white';
// cartCount.style.borderRadius = '50%';
// cartCount.style.padding = '4px';
// cartCount.style.fontSize = '12px';

// cartButton.appendChild(cartCount);
// cartCount.style.display = 'none';

const addButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const number = document.querySelector('.number');

let num = 0;
addButton.addEventListener('click', () => {
  num++;
  number.textContent = num;
});

minusButton.addEventListener('click', () => {
  if (num > 0) {
    num--;
    number.textContent = num;
  }
});

const addToCartButton = document.querySelector('.add-to-cart');
const cartButton = document.querySelector('.cart-btn');

let cart = 0;
addToCartButton.addEventListener('click', () => {
  const selectedNumber = parseInt(number.textContent);
  if (!isNaN(selectedNumber) && selectedNumber > 0) {
    cart += selectedNumber;
    cartCount.textContent = cart;
    cartCount.style.display = 'inline-block';
  }
});

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

const cartContent = document.querySelector('.cart-content');
cartButton.addEventListener('click', () => {
    if (cart === 0) {
      cartContent.textContent = 'Your cart is empty';
    } else {
        
      cartContent.textContent = 'Cart  ' + cart + ' items';
    }
    cartContent.style.display = 'block';
});
body.addEventListener('click', () => {
    cartContent.style.display = 'none';
})

// cartContent.style.position = 'absolute';
// cartContent.style.Margin = '1rem';