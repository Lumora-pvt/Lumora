# Template Showcase

A professional website template showcase inspired by HTML5UP, designed for businesses to display their template collections to clients.

## Features

- **Responsive Design**: Works perfectly on all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Template Grid**: Organized display of templates with previews
- **Modal Previews**: Detailed template information in elegant modals
- **Search & Filter**: Easy template discovery (extensible)
- **Performance Optimized**: Fast loading with lazy image loading
- **SEO Friendly**: Proper meta tags and semantic HTML

## Quick Start

1. **Clone or download** this repository
2. **Install dependencies** (optional, for development server):
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
   Or simply open `index.html` in your browser

   Or use http-server: 
   ```bash
   npx http-server . -p 3000
   ```
## Customization

### Adding Your Templates

Edit the `templates` array in `script.js`:

```javascript
const templates = [
    {
        id: 1,
        name: "Your Template Name",
        description: "Template description",
        category: "Category",
        downloads: 1000,
        image: "path/to/your/image.jpg",
        demoUrl: "https://your-demo-url.com",
        downloadUrl: "https://your-download-url.com"
    }
    // Add more templates...
];
```

### Styling

- **Colors**: Modify CSS custom properties in `styles.css`
- **Fonts**: Change the Google Fonts import in `index.html`
- **Layout**: Adjust grid settings in the `.templates-grid` class

### Branding

1. Update the logo and title in `index.html`
2. Replace placeholder images with your template screenshots
3. Update contact information and social links
4. Modify the hero section content

## File Structure

```
template-showcase/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Lazy loading images
- Optimized CSS with minimal reflows
- Efficient JavaScript with event delegation
- Compressed assets ready for production

## Deployment

This is a static website that can be deployed to:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a repository with Pages enabled
- **Any web server**: Upload files to your hosting provider

## Analytics Integration

The template includes placeholder functions for analytics. Replace the `trackEvent` function in `script.js` with your preferred analytics solution:

```javascript
// Google Analytics 4
function trackEvent(eventName, properties = {}) {
    gtag('event', eventName, properties);
}

// Or other analytics platforms
```

## License

MIT License - feel free to use for personal and commercial projects.

## Support

For questions or customization requests, please contact [your-email@domain.com].

---

**Built with modern web technologies for optimal performance and user experience.**
