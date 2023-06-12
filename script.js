
// const sneakerImages = [
//     {
//         name: 'sneaker1',
//         img1: '../images/image-product-1.jpg',
//         img1small: '../images/image-product-1-small.jpg'
//     },
//     {
//         name: 'sneaker2',
//         img2: '../images/image-product-2.jpg',
//         img2small: '../images/image-product-2-small.jpg'
//     },
//     {
//         name: 'sneaker3',
//         img3: '../images/image-product-3.jpg',
//         img3small: '../images/image-product-3-small.jpg'
//     },
//     {
//         name: 'sneaker4',
//         img4: '../images/image-product-4.jpg',
//         img4small: '../images/image-product-4-small.jpg'
//     }
// ]
//  const imagesContainer = document.querySelector('.images')
//  sneakerImages.array.map(item => {
//     const imagesItem = document.createElement('img')
//     imagesItem.classList.add('sneaker')
//     imagesItem.innerHTML = `<div>
//     <img src="${item.img1} />
//     <img src="${item.img1small} />
//     <img src="${item.img2} />
//     <img src="${item.img2small} />
//     <img src="${item.img3} />
//     <img src="${item.img3small} />
//     <img src="${item.img4} />
//     <img src="${item.img4small} />
//     </div>`
//     imagesContainer.appendChild(imagesItem)

//  });


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