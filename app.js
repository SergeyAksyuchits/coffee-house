
const arrItems = [
    {
        type: "coffee",
        svg: "./img/irish.png",
        name: "Irish coffee",
        description:
            "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
        price: "$7.00",
    },
    {
        type: "coffee",
        svg: "./img/kahlua.png",
        name: "Kahlua coffee",
        description:
            "Classic coffee with mil k and Kahlua liqueur under a cap of frothed milk",
        price: "$7.00",
    },
    {
        type: "coffee",
        svg: "./img/honey.png",
        name: "Honey raf",
        description: "Espresso with frothed milk, cream and aromatic honey",
        price: "$5.50",
    },
    {
        type: "coffee",
        svg: "./img/Ice-cappuccino.png",
        name: "Ice cappuccino",
        description: "Cappuccino with soft thick foam in summer version with ice",
        price: "$5.00",
    },
    {
        type: "coffee",
        svg: "./img/Espresso.png",
        name: "Espresso",
        description: "Classic black coffee",
        price: "$4.50",
    },
    {
        type: "coffee",
        svg: "./img/latte.png",
        name: "Latte",
        description:
            "Espresso coffee with the addition of steamed milk and dense milk foam",
        price: "$5.50",
    },
    {
        type: "coffee",
        svg: "./img/Latte-macchiato.png",
        name: "Latte macchiato",
        description: "Espresso with frothed milk and chocolate",
        price: "$5.50",
    },
    {
        type: "coffee",
        svg: "./img/cognac.png",
        name: "Coffee with cognac",
        description: "Fragrant black coffee with cognac and whipped cream",
        price: "$6.50",
    },
    {
        type: "tea",
        svg: "./tea/tea-1.svg",
        name: "Moroccan",
        description:
            "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
        price: "$4.50",
    },
    {
        type: "tea",
        svg: "./tea/tea-2.svg",
        name: "Ginger",
        description: "Original black tea with fresh ginger, lemon and honey",
        price: "$5.00",
    },
    {
        type: "tea",
        svg: "./tea/tea-3.svg",
        name: "Cranberry",
        description: "Invigorating black tea with cranberry and honey",
        price: "$5.00",
    },
    {
        type: "tea",
        svg: "./tea/tea-4.svg",
        name: "Sea buckthorn",
        description:
            "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
        price: "$5.50",
    },
    {
        type: "dessert",
        svg: "./dessert/dessert-1.svg",
        name: "Marble cheesecake",
        description:
            "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
        price: "$3.50",
    },
    {
        type: "dessert",
        svg: "./dessert/dessert-2.svg",
        name: "Red velvet",
        description: "Layer cake with cream cheese frosting",
        price: "$4.00",
    },
    {
        type: "dessert",
        svg: "./dessert/dessert-3.svg",
        name: "Cheesecakes",
        description:
            "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
        price: "$4.50",
    },
    {
        type: "dessert",
        svg: "./dessert/dessert-4.svg",
        name: "Creme brulee",
        description:
            "Delicate creamy dessert in a caramel basket with wild berries",
        price: "$4.00",
    },
    {
        type: "dessert",
        svg: "./dessert/dessert-5.svg",
        name: "Pancakes",
        description: "Tender pancakes with strawberry jam and fresh strawberries",
        price: "$4.50",
    },
    {
        type: "dessert",
        svg: "./dessert/dessert-6.svg",
        name: "Honey cake",
        description: "Classic honey cake with delicate custardv",
        price: "$4.50",
    },
    {
        type: "dessert",
        svg: "./dessert/dessert-7.svg",
        name: "Chocolate cake",
        description: "Cake with hot chocolate filling and nuts with dried apricots",
        price: "$5.50",
    },
    {
        type: "dessert",
        svg: "./dessert/dessert-8.svg",
        name: "Black forest",
        description:
            "A combination of thin sponge cake with cherry jam and light chocolate mousse",
        price: "$6.50",
    },
];
const btncoffee=document.querySelector('.cup')
const btnTea=document.querySelector('.kettle')
const btnDessert=document.querySelector('.dessert')
const allArr = ["coffee", "tea", "dessert"]
const modal = document.querySelector(".modal")

const card = document.querySelectorAll(".irish")
const description = document.querySelector(".description")
const price = document.querySelector(".price")
const name = document.querySelector(".name")
const containerDrink =document.querySelector(".coffee")




const showResult = (params) => {
    containerDrink.innerHTML=``;
    const ResultFilter = arrItems.filter((el) => (params.includes(el.type) ? true : false));

ResultFilter.forEach((el)=>{
    const container=document.createElement("div")
    container.className = 'irish';
    containerDrink.appendChild(container)
    container.innerHTML=`<img src="${el.svg}" alt=""><div class="info">
                    <h3>${el.name}</h3>
                    <p class="description">${el.description}</p>
                    <p class="price">${el.price}</p>
                </div>`

})

}


btncoffee.addEventListener("click",()=>showResult('coffee'))
btnTea.addEventListener("click",()=>showResult('tea'))
btnDessert.addEventListener("click",()=>showResult('dessert'))

showResult('coffee')




























