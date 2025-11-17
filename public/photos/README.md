# Photos Folder

## Usage

Place your image files in this folder. They will be publicly accessible in your React application.

## How to Reference Images

In your React components, reference images using the path `/photos/your-image-name.jpg`

### Example:

```tsx
// Direct img tag
<img src="/photos/team-member.jpg" alt="Team Member" />

// With styling
<img 
  src="/photos/hero-background.jpg" 
  alt="Hero Background"
  className="w-full h-auto"
/>

// As background image in style
<div style={{ backgroundImage: 'url(/photos/banner.jpg)' }}>
  Content here
</div>

// In Tailwind CSS
<div className="bg-cover bg-center" style={{ backgroundImage: 'url(/photos/office.jpg)' }}>
  Content here
</div>
```

## Supported Formats

- JPG/JPEG
- PNG
- GIF
- SVG
- WebP

## Best Practices

1. **Optimize images** before adding them (compress, resize appropriately)
2. **Use descriptive names** (e.g., `team-ceo-john-doe.jpg` instead of `img1.jpg`)
3. **Keep file sizes reasonable** (aim for under 500KB for photos)
4. **Use WebP format** when possible for better compression
5. **Always include alt text** for accessibility
