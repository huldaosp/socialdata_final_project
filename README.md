# Simplified Danish Restaurant Cleanliness Website

This is a simplified version of the original complex React/Vite website, capturing the essential visual design and user experience without the technical complexity.

## What Was Simplified

The original project in the `project/` folder used:
- React with TypeScript
- Vite build system
- Tailwind CSS with custom configuration
- Multiple UI libraries (Radix UI, MUI, Shadcn)
- Motion animations library
- Complex component architecture
- 50+ dependencies

## What Was Preserved

### Visual Design
- **Color Palette**: Warm grays, signature smiley colors (green/yellow/red)
- **Typography**: Fraunces for headings, Manrope for body text
- **Icons**: Lucide React icons (Smile, Meh, Frown) with colored strokes on transparent backgrounds - exact same as original
- **Layout**: Full-screen sections with centered content
- **Animations**: Bouncing smiley icons, smooth transitions

### User Experience
- Clean, modern aesthetic
- Responsive design
- Smooth scrolling interactions
- Progressive visual reveals

## File Structure

```
socialdata_final_project/
├── index.html          # Main HTML structure (hero section only)
├── styles.css          # All styling (extracted from original theme)
├── script.js           # Interactive JavaScript (loads sections dynamically)
├── sections/           # Separate section files
│   ├── key-findings.html
│   ├── methodology.html
│   └── conclusion.html
├── README.md           # This file
├── final_project.ipynb # Original Jupyter notebook
└── project/            # Original complex React project
    └── ... (unchanged)
```

## Adding New Sections

You have two options for adding sections:

### Option 1: All in index.html (Simplest)
Keep everything in one file - just add new `<section>` elements directly in `index.html`.

### Option 2: Separate Files (Better Organization)
Create individual HTML files in the `sections/` folder and they'll be loaded automatically:

1. **Create section file**: `sections/your-section-name.html`
2. **Add to JavaScript**: Update the `sections` array in `script.js`:
   ```javascript
   const sections = [
       { id: 'key-findings', file: 'sections/key-findings.html' },
       { id: 'methodology', file: 'sections/methodology.html' },
       { id: 'conclusion', file: 'sections/conclusion.html' },
       { id: 'your-new-section', file: 'sections/your-section-name.html' }
   ];
   ```

Each section file should contain just the `<section>` element with its content.

## Key Simplifications

1. **No Build Tools**: Pure HTML/CSS/JS instead of React/Vite
2. **Single CSS File**: All styles consolidated from multiple sources
3. **Minimal JavaScript**: Essential interactions without heavy libraries
4. **Lucide Icons**: Same icons as original project via CDN (no React dependency)
5. **Easy Customization**: Variables at the top of CSS for quick changes

## How to Use

1. Open `index.html` in any modern web browser
2. Customize colors by editing CSS variables in `styles.css`
3. Add content by editing the HTML sections
4. Modify interactions in `script.js`

## Customization

### Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --background: #fafaf9;        /* Main background */
    --foreground: #1a1a1a;       /* Text color */
    --smiley-happy: #22c55e;     /* Green smiley */
    --smiley-neutral: #eab308;   /* Yellow smiley */
    --smiley-sad: #ef4444;       /* Red smiley */
}
```

### Content
Replace the placeholder text in `index.html` with your actual content:
- Hero section: Title and description
- Key Findings: Your data insights
- Methodology: How data was collected
- Conclusion: Summary and implications

### Animations
Modify timing and effects in `script.js`:
- Scroll progress bar
- Fade-in animations
- Hover effects on smileys

## Original Project

The complex version remains untouched in the `project/` folder and includes:
- Full React component library
- Advanced animations with Framer Motion
- Interactive data visualizations
- Responsive design system
- Build and deployment setup

Use the simplified version for quick prototyping or when you need a lightweight, easy-to-maintain website that looks professional.