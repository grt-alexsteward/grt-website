# Grand River Tech Website

A modern, responsive website for Grand River Tech - Your Grand Rapids IT Solution

## 🎨 Features

### Modern Design
- Tech-forward aesthetic with gradient accents
- Custom "GRT" logo with circuit design elements
- Smooth animations and transitions
- Fully responsive design for all devices
- Dark theme with blue/cyan color scheme

### Key Pages

1. **Homepage (index.html)**
   - Hero section with animated tech cards
   - Services overview with 6 core offerings
   - Industries served (Education, Healthcare, Manufacturing, Non-Profit)
   - About section with company stats
   - Contact form with business hours

2. **Pricing Calculator (pricing.html)**
   - Interactive pricing calculator
   - Toggle services on/off
   - Real-time monthly and yearly cost calculations
   - Minimum pricing enforcement
   - Service breakdown summary
   - 6 services available:
     - Endpoint Protection: $2.76/device
     - Network Management: $3.79/device (min $50)
     - IoT Management: $0.25/device
     - Camera System: $0.93/camera (min $25)
     - Phone System: $90/system (flat rate)
     - NAS Management: $25/device

3. **Privacy Policy (privacy.html)**
   - Complete privacy policy
   - GDPR-compliant information

4. **Terms of Service (terms.html)**
   - Comprehensive terms and conditions
   - Service agreements and responsibilities

## 📁 File Structure

```
/
├── index.html          # Homepage
├── pricing.html        # Pricing calculator
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── styles.css          # Main stylesheet
├── pricing.css         # Pricing page specific styles
├── script.js           # Main JavaScript
├── pricing.js          # Pricing calculator logic
└── README.md           # This file
```

## 🎨 Design System

### Colors
- Primary: #0066ff (Blue)
- Primary Light: #00d4ff (Cyan)
- Secondary: #00ffc8 (Turquoise)
- Dark: #0a0e1a (Background)
- Success: #00ff88 (Green)
- Warning: #ffaa00 (Orange)

### Typography
- Display Font: Outfit (300-800 weights)
- Monospace: JetBrains Mono (for pricing/code)

### Logo
- Custom SVG "GRT" logo with gradient fill
- Circuit board design elements
- Responsive sizing

## 🔧 Customization

### Updating Prices
Edit the `rates` and `minimums` objects in `pricing.js`:

```javascript
const rates = {
    endpoint: 2.76,
    networkDevice: 3.79,
    iot: 0.25,
    camera: 0.93,
    phone: 90.00,
    nas: 25.00
};

const minimums = {
    network: 50.00,
    camera: 25.00,
    endpoint: 0,
    iot: 0
};
```

### Changing Colors
Update CSS variables in `styles.css`:

```css
:root {
    --primary: #0066ff;
    --primary-light: #00d4ff;
    /* etc... */
}
```

### Contact Information
Update in:
- Footer (all pages)
- Contact section (index.html)
- Privacy Policy
- Terms of Service

Current info:
- Address: 4106 Lake Michigan Drive, Walker, MI 49534
- Phone: (616) 747-8447
- Hours: Mon-Fri, 8AM-4PM EST

## 🚀 Deployment

1. Upload all files to your web server
2. Ensure all files are in the root directory or update paths accordingly
3. No build process required - all files are production-ready
4. Works with any standard web hosting (Apache, Nginx, etc.)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✨ Key Improvements from Old Site

1. **Modern Design**: Updated from generic template to custom tech-forward design
2. **GRT Branding**: New custom logo with tech aesthetic
3. **Pricing Calculator**: Interactive tool for instant quotes
4. **Better Navigation**: Improved menu structure and mobile experience
5. **Cleaner Footer**: Removed physical address, added legal links
6. **Performance**: Optimized animations and loading
7. **Accessibility**: Better contrast and semantic HTML
8. **SEO**: Improved meta tags and structure

## 🔍 SEO Optimization

- Semantic HTML5 structure
- Proper heading hierarchy
- Meta descriptions (add to each page as needed)
- Fast loading times
- Mobile-friendly design
- Structured data ready

## 📞 Support

For questions about the website:
- Grand River Tech
- Phone: (616) 747-8447
- Hours: Mon-Fri, 8AM-4PM EST

## 📝 License

© 2026 Grand River Tech. All Rights Reserved.

---

**Note**: This is a static website. For form submissions to work in production, you'll need to:
1. Add a backend endpoint for the contact form
2. Or use a service like Formspree, Netlify Forms, or similar
3. Update the form action in `index.html`

The current contact form uses JavaScript to prevent default submission and logs data to console for demonstration purposes.
