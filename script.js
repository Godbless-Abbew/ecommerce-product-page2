

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
    <p>${element.price}<span>${element.percentage}</span></p>
    <h5>${element.discount}</h5>
    </div>`    
    company.appendChild(companyItem)
});