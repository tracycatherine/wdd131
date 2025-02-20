import { initNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired'); // Debugging line
    // Initialize navigation
    initNavigation();

    // Display farming places
    displayFarmingPlaces();
});

const farmingPlaces = [
    {
        "name": "Bugesera Pineapple Farm",
        "image": "images/harvest.jpg",
        "location": "Rwanda",
        "mainCrops": ["Pineapples"],
        "description": "A large pineapple-growing region, providing fresh produce for local and export markets.",
        "url": "https://www.sunripefarmsrwanda.com/"
    },
    {
        "name": "Zanzibar Spice Farm",
        "image": "images/innovation.jpg",
        "location": "Tanzania",
        "mainCrops": ["Cloves", "Nutmeg", "Cinnamon"],
        "description": "A world-famous spice farm offering tours and organic spice production.",
        "url": "https://www.sunripefarmsrwanda.com"
    },
    {
        "name": "Kabale Irish Potato Farm",
        "image": "images/mango.jpg",
        "location": "Uganda",
        "mainCrops": ["Irish Potatoes"],
        "description": "A highland farm producing some of the best Irish potatoes in East Africa.",
        "url": "https://zanzibarworld.com/half-day-tours-zanzibar/spice-farms-tour/"
    },
    {
        "name": "Meru Passion Fruit Farm",
        "image": "images/mng.jpg",
        "location": "Kenya",
        "mainCrops": ["Passion Fruit"],
        "description": "A commercial passion fruit farm known for its sweet and aromatic produce.",
        "url": "https://www.greenlife.co.ke/the-a-z-of-passion-fruit-farming/"
    },
    {
        "name": "Ruhengeri Maize Farms",
        "image": "images/farming.jpg",
        "location": "Rwanda",
        "mainCrops": ["Maize"],
        "description": "A key maize-producing region supporting food security and local agribusiness.",
        "url": "https://www.fao.org/giews/countrybrief/country/RWA/pdf_archive/RWA_Archive.pdf"
    },
    {
        "name": "Morogoro Sunflower Farm",
        "image": "images/training.jpg",
        "location": "Tanzania",
        "mainCrops": ["Sunflower", "Groundnuts"],
        "description": "A leading sunflower oil production farm in East Africa.",
        "url": "https://amdt.co.tz/portfolio-item/public-private-partnership-in-sunflower-seed-production/"
    },
    {
        "name": "Tororo Cassava Plantation",
        "image": "images/soghum.jpg",
        "location": "Uganda",
        "mainCrops": ["Cassava"],
        "description": "A large-scale cassava farm that supplies industries and households across the region.",
        "url": "https://www.fao.org/4/a0154e/A0154E10.htm"
    },
    {
        "name": "Nyeri Dairy Farm",
        "image": "images/maize.jpg",
        "location": "Kenya",
        "mainCrops": ["Dairy"],
        "description": "A model dairy farm producing high-quality milk and dairy products.",
        "url": "https://www.nyeri.go.ke/promoting-dairy-farming-through-dairy-cooperatives-in-the-county/"
    },
    {
        "name": "Gishwati Fruit Farm",
        "image": "images/volunteer.jpg",
        "location": "Rwanda",
        "mainCrops": ["Mangoes", "Papayas", "Oranges"],
        "description": "A diversified fruit farm in the Gishwati region known for organic tropical fruit production.",
        "url": "https://amahaho.com/products/gishwati-farms-gouda-cheese-1kg?srsltid=AfmBOorMh3Hk1k7gCenrBefPe7PeBOZtSBJkWziesFsDcADskLCOJ6Vq"
    }
];

function createFarmingPlaceCard(place) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = place.image;
    img.alt = place.name;
    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = place.name;
    cardBody.appendChild(title);

    const location = document.createElement('p');
    location.className = 'card-text';
    location.textContent = `Location: ${place.location}`;
    cardBody.appendChild(location);

    const crops = document.createElement('p');
    crops.className = 'card-text';
    crops.textContent = `Main Crops: ${place.mainCrops.join(', ')}`;
    cardBody.appendChild(crops);

    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = place.description;
    cardBody.appendChild(description);

    const link = document.createElement('a');
    link.href = place.url;
    link.className = 'btn btn-primary';
    link.textContent = 'Learn More';
    cardBody.appendChild(link);

    card.appendChild(cardBody);

    return card;
}

function displayFarmingPlaces() {
    const grid = document.getElementById('farming-places-grid');
    if (!grid) {
        console.error('Grid element not found');
        return;
    }
    console.log('Grid element found:', grid); // Debugging line
    farmingPlaces.forEach(place => {
        const card = createFarmingPlaceCard(place);
        console.log('Appending card:', card); // Debugging line
        grid.appendChild(card);
    });
}