const config = {
  coffee:{
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Cinnamon', 'Syrup'],
  },
  tea:{
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Lemon', 'Syrup'],
  },
  dessert:{
    sizes: ['50 g', '100 g', '200 g'],
    additives: ['Berries', 'Nuts', 'Jam'],
  }
}

const config2 = {
  coffee:{
    sizes: ['200 ml', '300 ml', '400 ml'],
    

    additives: ['Sugar', 'Cinnamon', 'Syrup'],
  },
  tea:{
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Lemon', 'Syrup'],
  },
  dessert:{
    sizes: ['50 g', '100 g', '200 g'],
    additives: ['Berries', 'Nuts', 'Jam'],
  }
}


const ArrayOfProducts = [
    {
    id: 'irish-coffee',
    type: "coffee",
    src: "../menu-coffee/menu-coffee-img/coffee-1.png",
    name: "Irish coffee",
    description:  "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: '$7.00',
}, 
{
    id: "kahlua-coffee",
    type: "coffee",
    src: "../menu-coffee/menu-coffee-img/coffee-2.png",
    name: "Kahlua coffee",
    description:
      "Classic coffee with mil k and Kahlua liqueur under a cap of frothed milk",
      price: '$7.00',
  },
  {
    id: "honey-raf",
    type: "coffee",
    src: "../menu-coffee/menu-coffee-img/coffee-3.png",
    name: "Honey raf",
    description: "Espresso with frothed milk, cream and aromatic honey",
    price: '$5.50',
  },
  {
    id: "ice-cappuccino",
    type: "coffee",
    src: "../menu-coffee/menu-coffee-img/coffee-4.png",
    name: "Ice cappuccino",
    description: "Cappuccino with soft thick foam in summer version with ice",
    price: '$5.00',
  },
  {
    id:"espresso",
    type: "coffee",
    src: "../menu-coffee/menu-coffee-img/coffee-5.png",
    name: "Espresso",
    description: "Classic black coffee",
    price: '$4.50',
  },
  {
    id:"latte",
    type: "coffee",
    src: "../menu-coffee/menu-coffee-img/coffee-6.png",
    name: "Latte",
    description:
      "Espresso coffee with the addition of steamed milk and dense milk foam",
      price: '$5.50',
  },
  {
    id:"latte-macchiato",
    type: "coffee",
    src: "../menu-coffee/menu-coffee-img/coffee-7.png",
    name: "Latte macchiato",
    description: "Espresso with frothed milk and chocolate",
    price: '$7.00',
  },
  {
    id:"coffee-cognac",
    type: "coffee",
    src: "../menu-coffee/menu-coffee-img/coffee-8.png",
    name: "Coffee with cognac",
    description: "Fragrant black coffee with cognac and whipped cream",
    price: '$6.50',
  },
  {
    id:"moroccan",
    type: "tea",
    src: "./menu-tea-img/tea-1.svg",
    name: "Moroccan",
    description:
      "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      price: '$4.50',
  },
  {
    id:"ginger",
    type: "tea",
    src: "./menu-tea-img/tea-2.svg",
    name: "Ginger",
    description: "Original black tea with fresh ginger, lemon and honey",
    price: '$5.00',
  },
  {
    id:"cranberry",
    type: "tea",
    src: "./menu-tea-img/tea-3.svg",
    name: "Cranberry",
    description: "Invigorating black tea with cranberry and honey",
    price: '$5.00',
  },
  {
    id:"sea-buckthorn",
    type: "tea",
    src: "./menu-tea-img/tea-4.svg",
    name: "Sea buckthorn",
    description:
      "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      price: '$5.50',
  },
  {
    id: "marble-cheesecake",
    type: "dessert",
    src: "./menu-dessert-img/dessert-1.svg",
    name: "Marble cheesecake",
    description:
      "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      price: '$3.50',
  },
  {
    id:"red-velvet",
    type: "dessert",
    src: "./menu-dessert-img/dessert-2.svg",
    name: "Red velvet",
    description: "Layer cake with cream cheese frosting",
    price: '$4.00',
  },
  {
    id: "cheesecakes",
    type: "dessert",
    src: "./menu-dessert-img/dessert-3.svg",
    name: "Cheesecakes",
    description:
      "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      price: '$4.50',
  },
  {
    id: "creme brulee",
    type: "dessert",
    src: "./menu-dessert-img/dessert-4.svg",
    name: "Creme brulee",
    description:
      "Delicate creamy dessert in a caramel basket with wild berries",
      price: '$4.00',
  },
  {
    id: "pancakes",
    type: "dessert",
    src: "./menu-dessert-img/dessert-5.svg",
    name: "Pancakes",
    description: "Tender pancakes with strawberry jam and fresh strawberries",
    price: '$4.50',
  },
  {
    id: "honey-cake",
    type: "dessert",
    src: "./menu-dessert-img/dessert-6.svg",
    name: "Honey cake",
    description: "Classic honey cake with delicate custard",
    price: '$4.50',
  },
  {
    id: "chocolate-cake",
    type: "dessert",
    src: "./menu-dessert-img/dessert-7.svg",
    name: "Chocolate cake",
    description: "Cake with hot chocolate filling and nuts with dried apricots",
    price: '$5.50',
  },
  {
    id: "black-forest",
    type: "dessert",
    src: "./menu-dessert-img/dessert-8.svg",
    name: "Black forest",
    description:
      "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      price: '$6.50',
  }]



const arrayMenu = document.querySelectorAll('.menu');

const arrayOfButton = document.querySelectorAll('.hero-slider-item');

arrayOfButton.forEach((el) => {
  el.addEventListener('click', (event) => {
    const id = event.currentTarget.id;
    arrayMenu.forEach((menu) => {
      menu.classList.value.includes(id)? menu.classList.add('shown') :  menu.classList.remove('shown');
      
    })

  })
})

const arrayOfItem = document.querySelectorAll('.menu-item');

arrayOfItem.forEach((item) =>{

  item.addEventListener('click', (event) => {
    const itemId = event.currentTarget.id;
    
    ArrayOfProducts.forEach((product) => {
      if(itemId === product.id) {
        
        const modal = document.querySelector('.modal');
        modal.style = 'display: flex';

        const modalImg = document.querySelector('.modal-img img');
        modalImg.src = product.src;

        const modalName = document.querySelector('.modal-description h2');
        modalName.textContent = product.name;

        const modalDescription = document.querySelector('.modal-description h3');
        modalDescription.textContent = product.description;

        const emptySizes = document.querySelectorAll('.size-item p');
        const arrayOfSizes = config[product.type].sizes;
        emptySizes.forEach((size, i) => {
          size.textContent = arrayOfSizes[i];
        }) 

        const emptyAdditives = document.querySelectorAll('.additive-item p');
        const arrayOfAdditives = config[product.type].additives;
        emptyAdditives.forEach((empty, index) =>{
          empty.textContent = arrayOfAdditives[index];
        })

        const price = document.querySelector('.modal-price p');
        price.textContent = product.price;
        
        const buttonClose = document.querySelector('#close-button');
        buttonClose.addEventListener('click', () => {
          modal.style = 'display: none';
        })

        modal.addEventListener('click', (event) => {

          if(event.target === modal) {
            modal.style = 'display: none';
          }
        })
      }
      
    })
    
    
  })

})
