const newPlants = [
    {
        image: './assets/plants/plant-1.png',
        name: 'Bird of Paradise',
        price: 124.90,
    },
    {
        image: './assets/plants/plant-2.png',
        name: 'Zz Plants',
        price: 129.90,
    },
    {
        image: './assets/plants/plant-3.png',
        name: 'Calarhea Beauty Star',
        price: 79.90,
    },
    {
        image: './assets/plants/plant-4.png',
        name: 'Birdnest Japanes',
        price: 89.90,
    },
    {
        image: './assets/plants/plant-5.png',
        name: 'Hoya Obovatum',
        price: 184.90,
    },
    {
        image: './assets/plants/plant-6.png',
        name: 'Monstera Deliciosa',
        price: 224.90,
    },
];

const divNewPlants = document.querySelector(".plants-group");

newPlants.forEach(element => {
    divNewPlants.innerHTML += `
        <div class="plant-card">
            <img class="plant-image" src="${element.image}" alt="">
                <div class="plant-description">
                    <h4 class="plant-name">${element.name}</h4>
                    <p class="plant-price">$${element.price}</p>
                </div>
        </div>`
});