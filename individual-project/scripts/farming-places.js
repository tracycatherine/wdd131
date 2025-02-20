// farming-places.js

// Sample farming places data - you can replace this with your actual data
const farmingPlaces = [
    {
        id: 1,
        name: "Exercising",
        location: "Wakiso District",
        description: "Helps maintain body muscles and improves blood circulation.",
        image: "images/cycling.jpg",
        link: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389"
    },
    {
        id: 2,
        name: "Body fitness",
        location: "Mbarara District",
        description: "Maintain a healthy body and improve your body shape.",
        image: "images/workout.jpg",
        link: "https://www.everydayhealth.com/fitness/guide/"
    },
    {
        id: 3,
        name: "meditation",
        location: "Masaka District",
        description: "relax your mind and body and improve your mental health.",
        image: "images/meditation.jpg",
        link: "https://www.mindful.org/how-to-meditate/"
    }
];

// Function to create a farming place card
function createFarmingPlaceCard(place) {
    return `
        <div class="farming-place-card">
            <img src="${place.image}" alt="${place.name}" class="farming-place-image" loading="lazy">
            <div class="farming-place-content">
                <h3 class="farming-place-title">${place.name}</h3>
                <p class="farming-place-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${place.location}
                </p>
                <p class="farming-place-description">${place.description}</p>
                <a href="${place.link}" class="farming-place-link">Learn More</a>
            </div>
        </div>
    `;
}

// Function to populate the farming places grid
function populateFarmingPlaces() {
    const grid = document.getElementById('farming-places-grid');
    if (!grid) return; // Guard clause in case the element doesn't exist

    const farmingPlacesHTML = farmingPlaces.map(place => createFarmingPlaceCard(place)).join('');
    grid.innerHTML = farmingPlacesHTML;

    // Add fade-in animation to cards
    const cards = grid.querySelectorAll('.farming-place-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
    });
}

// Add fade-in animation to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', populateFarmingPlaces);

// Add error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName.toLowerCase() === 'img') {
        e.target.src = 'images/placeholder.jpg'; // Replace with your placeholder image
    }
}, true);