// Sample property data
const properties = [
    {
        id: 1,
        title: "Modern Downtown Apartment",
        price: "$2,400",
        beds: 2,
        baths: 2,
        sqft: 1200,
        address: "123 Main St, Downtown, NY 10001",
        type: "Apartment",
        image: "https://via.placeholder.com/400x300/667eea/ffffff?text=Modern+Apartment",
        images: [
            "https://via.placeholder.com/400x300/667eea/ffffff?text=Living+Room",
            "https://via.placeholder.com/400x300/764ba2/ffffff?text=Kitchen",
            "https://via.placeholder.com/400x300/f093fb/ffffff?text=Bedroom"
        ],
        description: "Beautiful modern apartment in the heart of downtown with stunning city views. Features include hardwood floors, stainless steel appliances, and in-unit laundry.",
        amenities: ["Gym", "Pool", "Parking", "Pet Friendly", "Laundry", "Balcony"],
        badge: "New Listing"
    },
    {
        id: 2,
        title: "Cozy Studio Loft",
        price: "$1,800",
        beds: 1,
        baths: 1,
        sqft: 650,
        address: "456 Oak Ave, Midtown, NY 10002",
        type: "Studio",
        image: "https://via.placeholder.com/400x300/4facfe/ffffff?text=Studio+Loft",
        images: [
            "https://via.placeholder.com/400x300/4facfe/ffffff?text=Main+Area",
            "https://via.placeholder.com/400x300/43e97b/ffffff?text=Kitchen",
            "https://via.placeholder.com/400x300/fbbf24/ffffff?text=Bathroom"
        ],
        description: "Charming studio loft with high ceilings and exposed brick walls. Perfect for young professionals looking for a stylish urban living experience.",
        amenities: ["Gym", "Rooftop", "Bike Storage", "Concierge"],
        badge: "Popular"
    },
    {
        id: 3,
        title: "Luxury 3BR Penthouse",
        price: "$4,200",
        beds: 3,
        baths: 2.5,
        sqft: 2100,
        address: "789 Park Place, Upper East, NY 10003",
        type: "Penthouse",
        image: "https://via.placeholder.com/400x300/ec4899/ffffff?text=Luxury+Penthouse",
        images: [
            "https://via.placeholder.com/400x300/ec4899/ffffff?text=Living+Room",
            "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Master+Bedroom",
            "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Terrace"
        ],
        description: "Stunning penthouse with panoramic city views, private terrace, and high-end finishes throughout. Features include marble countertops and premium appliances.",
        amenities: ["Doorman", "Pool", "Spa", "Valet", "Terrace", "Wine Cellar"],
        badge: "Luxury"
    },
    {
        id: 4,
        title: "Family Townhouse",
        price: "$3,200",
        beds: 4,
        baths: 3,
        sqft: 1800,
        address: "321 Elm Street, Brooklyn, NY 11201",
        type: "Townhouse",
        image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Family+Townhouse",
        images: [
            "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Front+Yard",
            "https://via.placeholder.com/400x300/ef4444/ffffff?text=Living+Room",
            "https://via.placeholder.com/400x300/10b981/ffffff?text=Backyard"
        ],
        description: "Spacious family townhouse with private garden and multiple levels. Perfect for families looking for more space while staying in the city.",
        amenities: ["Garden", "Parking", "Storage", "Pet Friendly", "Fireplace"],
        badge: "Family Friendly"
    },
    {
        id: 5,
        title: "Waterfront Condo",
        price: "$2,800",
        beds: 2,
        baths: 2,
        sqft: 1100,
        address: "555 Harbor View, Waterfront, NY 10004",
        type: "Condo",
        image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Waterfront+Condo",
        images: [
            "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Water+View",
            "https://via.placeholder.com/400x300/6366f1/ffffff?text=Living+Area",
            "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Balcony"
        ],
        description: "Beautiful waterfront condo with breathtaking harbor views. Features floor-to-ceiling windows and a private balcony overlooking the water.",
        amenities: ["Water View", "Balcony", "Gym", "Pool", "Concierge", "Marina Access"],
        badge: "Water View"
    },
    {
        id: 6,
        title: "Artist Loft Space",
        price: "$2,100",
        beds: 1,
        baths: 1,
        sqft: 900,
        address: "888 Creative Blvd, Arts District, NY 10005",
        type: "Loft",
        image: "https://via.placeholder.com/400x300/14b8a6/ffffff?text=Artist+Loft",
        images: [
            "https://via.placeholder.com/400x300/14b8a6/ffffff?text=Open+Space",
            "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Studio+Area",
            "https://via.placeholder.com/400x300/ef4444/ffffff?text=Sleeping+Area"
        ],
        description: "Unique artist loft with soaring ceilings and abundant natural light. Perfect for creatives with dedicated studio space and industrial charm.",
        amenities: ["High Ceilings", "Natural Light", "Studio Space", "Exposed Brick", "Freight Elevator"],
        badge: "Creative Space"
    }
];

// DOM Elements
const propertiesGrid = document.getElementById('propertiesGrid');
const modal = document.getElementById('propertyModal');
const closeModal = document.querySelector('.close');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalAddress = document.getElementById('modalAddress');
const modalPrice = document.getElementById('modalPrice');
const modalBeds = document.getElementById('modalBeds');
const modalDescription = document.getElementById('modalDescription');
const modalAmenities = document.getElementById('modalAmenities');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProperties();
    setupEventListeners();
    setupSearchTabs();
});

// Load and display properties
function loadProperties() {
    propertiesGrid.innerHTML = '';
    
    properties.forEach(property => {
        const propertyCard = createPropertyCard(property);
        propertiesGrid.appendChild(propertyCard);
    });
}

// Create property card element
function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.dataset.propertyId = property.id;
    
    card.innerHTML = `
        <div class="property-image">
            <img src="${property.image}" alt="${property.title}" loading="lazy">
            <div class="property-badge">${property.badge}</div>
        </div>
        <div class="property-info">
            <div class="property-price">${property.price}/mo</div>
            <div class="property-details">${property.beds} bed • ${property.baths} bath • ${property.sqft} sqft</div>
            <div class="property-address">${property.address}</div>
            <div class="property-amenities">
                ${property.amenities.slice(0, 3).map(amenity => 
                    `<span class="amenity-tag">${amenity}</span>`
                ).join('')}
                ${property.amenities.length > 3 ? `<span class="amenity-tag">+${property.amenities.length - 3} more</span>` : ''}
            </div>
        </div>
    `;
    
    // Add click event to open modal
    card.addEventListener('click', () => openModal(property));
    
    return card;
}

// Open property modal
function openModal(property) {
    modalImage.src = property.image;
    modalImage.alt = property.title;
    modalTitle.textContent = property.title;
    modalAddress.textContent = property.address;
    modalPrice.textContent = `${property.price}/mo`;
    modalBeds.textContent = `${property.beds} bed • ${property.baths} bath • ${property.sqft} sqft`;
    modalDescription.textContent = property.description;
    
    // Clear and populate amenities
    modalAmenities.innerHTML = '<h4>Amenities</h4>';
    const amenitiesContainer = document.createElement('div');
    amenitiesContainer.style.display = 'flex';
    amenitiesContainer.style.flexWrap = 'wrap';
    amenitiesContainer.style.gap = '0.5rem';
    amenitiesContainer.style.marginTop = '0.5rem';
    
    property.amenities.forEach(amenity => {
        const amenityTag = document.createElement('span');
        amenityTag.className = 'amenity-tag';
        amenityTag.textContent = amenity;
        amenitiesContainer.appendChild(amenityTag);
    });
    
    modalAmenities.appendChild(amenitiesContainer);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Track modal open event
    trackEvent('property_modal_open', { 
        property_id: property.id,
        property_title: property.title,
        price: property.price
    });
}

// Close modal
function closeModalHandler() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Setup event listeners
function setupEventListeners() {
    // Close modal events
    closeModal.addEventListener('click', closeModalHandler);
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModalHandler();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModalHandler();
        }
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Filter functionality
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', applyFilters);
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Setup search tabs
function setupSearchTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs
            tabBtns.forEach(tab => tab.classList.remove('active'));
            // Add active class to clicked tab
            btn.classList.add('active');
            
            // Track tab change
            trackEvent('search_tab_change', { tab: btn.dataset.tab });
        });
    });
}

// Perform search
function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        loadProperties();
        return;
    }
    
    const filteredProperties = properties.filter(property => 
        property.title.toLowerCase().includes(query) ||
        property.address.toLowerCase().includes(query) ||
        property.type.toLowerCase().includes(query) ||
        property.amenities.some(amenity => amenity.toLowerCase().includes(query))
    );
    
    displayFilteredProperties(filteredProperties);
    
    // Track search
    trackEvent('property_search', { query: query, results: filteredProperties.length });
}

// Apply filters
function applyFilters() {
    const priceFilter = document.querySelectorAll('.filter-select')[0].value;
    const bedsFilter = document.querySelectorAll('.filter-select')[1].value;
    const typeFilter = document.querySelectorAll('.filter-select')[2].value;
    
    let filteredProperties = [...properties];
    
    // Apply price filter
    if (priceFilter !== 'Any Price') {
        filteredProperties = filteredProperties.filter(property => {
            const price = parseInt(property.price.replace(/[$,]/g, ''));
            switch (priceFilter) {
                case '$500 - $1,000':
                    return price >= 500 && price <= 1000;
                case '$1,000 - $1,500':
                    return price >= 1000 && price <= 1500;
                case '$1,500 - $2,000':
                    return price >= 1500 && price <= 2000;
                case '$2,000+':
                    return price >= 2000;
                default:
                    return true;
            }
        });
    }
    
    // Apply beds filter
    if (bedsFilter !== 'Any Beds') {
        filteredProperties = filteredProperties.filter(property => {
            switch (bedsFilter) {
                case 'Studio':
                    return property.beds === 1 && property.type === 'Studio';
                case '1+ Beds':
                    return property.beds >= 1;
                case '2+ Beds':
                    return property.beds >= 2;
                case '3+ Beds':
                    return property.beds >= 3;
                case '4+ Beds':
                    return property.beds >= 4;
                default:
                    return true;
            }
        });
    }
    
    // Apply type filter
    if (typeFilter !== 'Any Type') {
        filteredProperties = filteredProperties.filter(property => 
            property.type.toLowerCase() === typeFilter.toLowerCase()
        );
    }
    
    displayFilteredProperties(filteredProperties);
    
    // Track filter usage
    trackEvent('filters_applied', { 
        price: priceFilter, 
        beds: bedsFilter, 
        type: typeFilter,
        results: filteredProperties.length 
    });
}

// Display filtered properties
function displayFilteredProperties(filteredProperties) {
    propertiesGrid.innerHTML = '';
    
    if (filteredProperties.length === 0) {
        propertiesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>No properties found</h3>
                <p>Try adjusting your search criteria or filters</p>
            </div>
        `;
        return;
    }
    
    filteredProperties.forEach(property => {
        const propertyCard = createPropertyCard(property);
        propertiesGrid.appendChild(propertyCard);
    });
}

// Track events (replace with your analytics solution)
function trackEvent(eventName, properties = {}) {
    console.log('Event tracked:', eventName, properties);
    // Example integrations:
    // gtag('event', eventName, properties);
    // analytics.track(eventName, properties);
    // mixpanel.track(eventName, properties);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe property cards for animation
function observePropertyCards() {
    document.querySelectorAll('.property-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Call after properties are loaded
setTimeout(observePropertyCards, 100);

// Add loading states for better UX
function showLoading() {
    propertiesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 3px solid #f3f3f3; border-top: 3px solid #006aff; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 1rem;"></div>
            <p>Loading properties...</p>
        </div>
    `;
}

// Add CSS for spinner animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
