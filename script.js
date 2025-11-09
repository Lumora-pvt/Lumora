// Sample template data - replace with your actual templates
const templates = [
    {
        id: 1,
        name: "Modern Portfolio",
        description: "A sleek and modern portfolio template perfect for showcasing creative work and professional projects.",
        category: "Portfolio",
        downloads: 15420,
        image: "images/personal-portfilio.png",
        demoUrl: "templates/personal-portfolio/index.html",
        downloadUrl: "#"
    },
    {
        id: 2,
        name: "Tech Startup",
        description: "Modern startup template with landing page, feature highlights, and team showcase.",
        category: "Startup",
        downloads: 11680,
        image: "images/tech-startup.png",
        demoUrl: "templates/tech-startup/index.html",
        downloadUrl: "#"
    },
    {
        id: 3,
        name: "E-commerce Store",
        description: "Complete e-commerce solution with product galleries, shopping cart, and checkout functionality.",
        category: "E-commerce",
        downloads: 18750,
        image: "images/e-commerce-store.png",
        demoUrl: "templates/e-commerce-store/index.html",
        downloadUrl: "#"
    },
    {
        id: 4,
        name: "RentHome - Rental Platform",
        description: "Professional rental property platform inspired by Zillow with property listings, search filters, and interactive maps.",
        category: "Real Estate",
        downloads: 8950,
        image: "images/rental-homes.png",
        demoUrl: "templates/rental-home/index.html",
        downloadUrl: "#"
    },
    {
        id: 5,
        name: "Business Corporate",
        description: "Professional corporate website template with clean design and business-focused layout.",
        category: "Business",
        downloads: 120,
        image: "images/medical-business-portfolio.png",
        demoUrl: "templates/medical-business-portfolio/index.html",
        downloadUrl: "#"
    },
    {
        id: 6,
        name: "Estate Agency",
        description: "EstateAgency has been specially designed for realtors, including real estate agents, agencies, property dealers, builders, local real estate professionals, single agents, and more.",
        category: "Business",
        downloads: 1220,
        image: "images/estate-agency.png",
        demoUrl: "templates/EstateAgency/index.html",
        downloadUrl: "#"
    },
    {
        id: 7,
        name: "Strategy",
        description: "We transform ideas into compelling realities, ensuring your brand stands out in a crowded marketplace.",
        category: "Business",
        downloads: 1400,
        image: "images/strategy.png",
        demoUrl: "templates/strategy/index.html",
        downloadUrl: "#"
    },
    {
        id: 8,
        name: "PhotoFolio",
        description: "I'm Jenny Wilson a Professional Photographer from New York City.",
        category: "Business",
        downloads: 120,
        image: "images/PhotoFolio.png",
        demoUrl: "templates/PhotoFolio/PhotoFolio/index.html",
        downloadUrl: "#"
    },
    {
        id: 9,
        name: "iConstruction",
        description: "Building Excellence Through Professional Construction Services.",
        category: "Business",
        downloads: 120,
        image: "images/iConstruction.png",
        demoUrl: "templates/iConstruction/index.html",
        downloadUrl: "#"
    }
   
    //,
    // {
    //     id: 6,
    //     name: "Restaurant Menu",
    //     description: "Elegant restaurant template with menu showcase, reservation system, and location details.",
    //     category: "Restaurant",
    //     downloads: 7230,
    //     image: "https://via.placeholder.com/400x300/43e97b/ffffff?text=Restaurant+Menu",
    //     demoUrl: "#",
    //     downloadUrl: "#"
    // },
    // {
    //     id: 7,
    //     name: "Photography Studio",
    //     description: "Stunning photography template with full-screen galleries and elegant image presentations.",
    //     category: "Photography",
    //     downloads: 6950,
    //     image: "https://via.placeholder.com/400x300/ec4899/ffffff?text=Photography+Studio",
    //     demoUrl: "#",
    //     downloadUrl: "#"
    // },
    // {
    //     id: 8,
    //     name: "Blog Magazine",
    //     description: "Clean and readable blog template with multiple layout options and social integration.",
    //     category: "Blog",
    //     downloads: 13420,
    //     image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Blog+Magazine",
    //     demoUrl: "#",
    //     downloadUrl: "#"
    // },
    // {
    //     id: 9,
    //     name: "Landing Page Pro",
    //     description: "High-converting landing page template with call-to-action sections and lead capture forms.",
    //     category: "Landing",
    //     downloads: 16780,
    //     image: "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Landing+Page+Pro",
    //     demoUrl: "#",
    //     downloadUrl: "#"
    // },
    // {
    //     id: 10,
    //     name: "Creative Agency",
    //     description: "Bold and creative template designed for agencies, studios, and creative professionals.",
    //     category: "Agency",
    //     downloads: 9840,
    //     image: "https://via.placeholder.com/400x300/4facfe/ffffff?text=Creative+Agency",
    //     demoUrl: "#",
    //     downloadUrl: "#"
    // }
];

// DOM Elements
const templatesGrid = document.getElementById('templatesGrid');
const modal = document.getElementById('templateModal');
const closeModal = document.querySelector('.close');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalDownloads = document.getElementById('modalDownloads');
const modalCategory = document.getElementById('modalCategory');
const modalDemo = document.getElementById('modalDemo');
const modalDownload = document.getElementById('modalDownload');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    showLoading();
    setTimeout(() => {
        loadTemplates();
        hideLoading();
    }, 1000); // Simulate loading time
    
    setupEventListeners();
});

// Show loading state
function showLoading() {
    templatesGrid.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            Loading templates...
        </div>
    `;
}

// Hide loading state
function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Load and display templates
function loadTemplates() {
    templatesGrid.innerHTML = '';
    
    console.log('Loading templates. Total count:', templates.length);
    console.log('Templates:', templates.map(t => t.name));
    
    templates.forEach(template => {
        const templateCard = createTemplateCard(template);
        templatesGrid.appendChild(templateCard);
    });
    
    console.log('Templates grid now has', templatesGrid.children.length, 'cards');
}

// Create template card element
function createTemplateCard(template) {
    const card = document.createElement('div');
    card.className = 'template-card';
    card.dataset.templateId = template.id;
    
    card.innerHTML = `
        <img src="${template.image}" alt="${template.name}" class="template-image" loading="lazy">
        <div class="template-info">
            <h3 class="template-title">${template.name}</h3>
            <p class="template-description">${template.description}</p>
            <div class="template-meta">
                <span class="template-category">${template.category}</span>
                <span class="template-downloads">
                    <i class="fas fa-download"></i> ${formatNumber(template.downloads)}
                </span>
            </div>
            <div class="template-actions">
                <a href="${template.demoUrl}" class="btn btn-primary" target="_blank" onclick="event.stopPropagation()">
                    <i class="fas fa-eye"></i> Demo
                </a>
                <a href="${template.downloadUrl}" class="btn btn-secondary" onclick="event.stopPropagation()">
                    <i class="fas fa-download"></i> Download
                </a>
            </div>
        </div>
    `;
    
    // Add click event to open modal
    card.addEventListener('click', () => openModal(template));
    
    return card;
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Open template modal
function openModal(template) {
    modalImage.src = template.image;
    modalImage.alt = template.name;
    modalTitle.textContent = template.name;
    modalDescription.textContent = template.description;
    modalDownloads.innerHTML = `<i class="fas fa-download"></i> ${formatNumber(template.downloads)} downloads`;
    modalCategory.textContent = template.category;
    modalDemo.href = template.demoUrl;
    modalDownload.href = template.downloadUrl;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Track modal open event (you can replace this with your analytics)
    trackEvent('modal_open', { template_name: template.name });
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
    
    // Smooth scrolling for navigation links
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
}

// Track events (replace with your analytics solution)
function trackEvent(eventName, properties = {}) {
    console.log('Event tracked:', eventName, properties);
    // Example: gtag('event', eventName, properties);
    // Example: analytics.track(eventName, properties);
}

// Search functionality (you can extend this)
function searchTemplates(query) {
    const filteredTemplates = templates.filter(template => 
        template.name.toLowerCase().includes(query.toLowerCase()) ||
        template.description.toLowerCase().includes(query.toLowerCase()) ||
        template.category.toLowerCase().includes(query.toLowerCase())
    );
    
    templatesGrid.innerHTML = '';
    filteredTemplates.forEach(template => {
        const templateCard = createTemplateCard(template);
        templatesGrid.appendChild(templateCard);
    });
    
    if (filteredTemplates.length === 0) {
        templatesGrid.innerHTML = `
            <div class="loading">
                <i class="fas fa-search"></i>
                No templates found matching "${query}"
            </div>
        `;
    }
}

// Filter by category
function filterByCategory(category) {
    const filteredTemplates = category === 'all' 
        ? templates 
        : templates.filter(template => template.category.toLowerCase() === category.toLowerCase());
    
    templatesGrid.innerHTML = '';
    filteredTemplates.forEach(template => {
        const templateCard = createTemplateCard(template);
        templatesGrid.appendChild(templateCard);
    });
}

// Add intersection observer for animations
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

// Observe template cards for animation
function observeTemplateCards() {
    document.querySelectorAll('.template-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Call after templates are loaded
setTimeout(observeTemplateCards, 100);
