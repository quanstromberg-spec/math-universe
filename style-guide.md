# Math Universe - Style Guide

## Design Philosophy

Math Universe combines **clean modern aesthetics** with **playful, child-friendly elements** inspired by Roblox and contemporary gaming interfaces. The design features soft gradients, rounded corners, gentle shadows, and vibrant but approachable colors suitable for children aged 6-9.

---

## Color Palette

### Primary Colors
- **Primary Blue**: `#4A9FE8` - Main interactive elements, primary buttons
- **Primary Blue (Hover)**: `#3A8FD8` - Button hover states
- **Primary Blue (Light)**: `#E8F4FD` - Background tints, light surfaces

### Secondary Colors
- **Success Green**: `#4CAF50` - Correct answers, achievements
- **Success Green (Hover)**: `#45A049`
- **Warning Orange**: `#FF9800` - Alerts, attention states
- **Error Red**: `#F44336` - Wrong answers, error states
- **Purple Accent**: `#9C27B0` - Special features, highlights

### Neutral Colors
- **Background**: `#F5F7FA` - Page background
- **Card Background**: `#FFFFFF` - Cards, panels, containers
- **Border**: `#E0E4E8` - Default borders
- **Border (Hover)**: `#C8CDD2` - Hover state borders
- **Text Primary**: `#1F2937` - Headings, primary text
- **Text Secondary**: `#6B7280` - Secondary text, descriptions
- **Text Muted**: `#9CA3AF` - Disabled states, metadata

### Gradient Backgrounds
- **Sky Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` - Header areas
- **Sunset Gradient**: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)` - Accent cards
- **Ocean Gradient**: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)` - Exercise backgrounds
- **Forest Gradient**: `linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)` - Success states

---

## Typography

### Font Families
```css
--font-heading: 'Sigma', 'Comic Sans MS', 'Chalkboard SE', cursive, sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Heading Styles
- **H1 (Page Title)**:
  - Font: Sigma
  - Size: `48px` / `3rem`
  - Weight: `700` (Bold)
  - Line Height: `1.2`
  - Letter Spacing: `-0.02em`

- **H2 (Section Title)**:
  - Font: Sigma
  - Size: `32px` / `2rem`
  - Weight: `600` (Semi-Bold)
  - Line Height: `1.3`
  - Letter Spacing: `-0.01em`

- **H3 (Subsection Title)**:
  - Font: Sigma
  - Size: `24px` / `1.5rem`
  - Weight: `600`
  - Line Height: `1.4`

### Body Text Styles
- **Body Large**:
  - Font: Inter
  - Size: `18px` / `1.125rem`
  - Weight: `400` (Regular)
  - Line Height: `1.6`

- **Body Regular**:
  - Font: Inter
  - Size: `16px` / `1rem`
  - Weight: `400`
  - Line Height: `1.6`

- **Body Small**:
  - Font: Inter
  - Size: `14px` / `0.875rem`
  - Weight: `400`
  - Line Height: `1.5`

- **Caption**:
  - Font: Inter
  - Size: `12px` / `0.75rem`
  - Weight: `400`
  - Line Height: `1.4`

### Special Text
- **Question Text** (Math Problems):
  - Font: Sigma
  - Size: `36px` / `2.25rem`
  - Weight: `700`
  - Letter Spacing: `0.02em`

- **Button Text**:
  - Font: Inter
  - Size: `16px` / `1rem`
  - Weight: `600` (Semi-Bold)

---

## Spacing System

### Base Unit
- Base unit: `4px` (0.25rem)

### Spacing Scale
```css
--space-xs: 4px;    /* 0.25rem */
--space-sm: 8px;    /* 0.5rem */
--space-md: 16px;   /* 1rem */
--space-lg: 24px;   /* 1.5rem */
--space-xl: 32px;   /* 2rem */
--space-2xl: 48px;  /* 3rem */
--space-3xl: 64px;  /* 4rem */
```

### Component Spacing
- **Card Padding**: `24px` (1.5rem)
- **Button Padding**: `12px 32px` (vertical horizontal)
- **Input Padding**: `12px 16px`
- **Section Gap**: `32px` (2rem)
- **Grid Gap**: `16px` (1rem)

---

## Layout

### Container Widths
- **Max Content Width**: `1200px`
- **Reading Width**: `800px`
- **Form Width**: `600px`
- **Card Max Width**: `400px`

### Grid System
- **2-Column Grid**: `repeat(2, 1fr)` with `16px` gap
- **3-Column Grid**: `repeat(3, 1fr)` with `16px` gap
- **4-Column Grid**: `repeat(4, 1fr)` with `16px` gap

### Responsive Breakpoints
```css
--breakpoint-mobile: 640px;
--breakpoint-tablet: 768px;
--breakpoint-desktop: 1024px;
--breakpoint-wide: 1280px;
```

---

## Border Radius

```css
--radius-sm: 8px;     /* Small elements, inputs */
--radius-md: 12px;    /* Cards, buttons */
--radius-lg: 16px;    /* Large cards, modals */
--radius-xl: 24px;    /* Hero sections, special containers */
--radius-full: 9999px; /* Pills, circular elements */
```

### Component-Specific Radius
- **Buttons**: `12px`
- **Cards**: `16px`
- **Input Fields**: `8px`
- **Modals**: `20px`
- **Avatar Container**: `16px`

---

## Shadows

### Shadow Levels
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.10);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.15);
--shadow-2xl: 0 24px 48px rgba(0, 0, 0, 0.18);
```

### Component Shadows
- **Cards (Default)**: `0 2px 8px rgba(0, 0, 0, 0.08)`
- **Cards (Hover)**: `0 8px 20px rgba(0, 0, 0, 0.12)`
- **Buttons**: `0 2px 4px rgba(0, 0, 0, 0.10)`
- **Buttons (Hover)**: `0 4px 8px rgba(0, 0, 0, 0.15)`
- **Modals**: `0 20px 50px rgba(0, 0, 0, 0.20)`
- **Floating Elements**: `0 12px 24px rgba(0, 0, 0, 0.15)`

---

## Cards

### Section Cards (Math Operations)
- **Size**: Flexible width, min-height `280px`
- **Aspect Ratio**: Not fixed (content-driven)
- **Padding**: `24px`
- **Border Radius**: `16px`
- **Background**: `#FFFFFF`
- **Border**: `2px solid #E0E4E8`
- **Shadow**: `0 2px 8px rgba(0, 0, 0, 0.08)`
- **Hover State**:
  - Border: `2px solid #4A9FE8`
  - Shadow: `0 8px 20px rgba(74, 159, 232, 0.15)`
  - Transform: `translateY(-4px)`
  - Transition: `all 0.3s ease`

### Difficulty Level Cards
- **Size**: Equal width in 3-column grid
- **Aspect Ratio**: `1:1` (square) or `4:3`
- **Padding**: `16px`
- **Border Radius**: `12px`
- **Background**: Gradient based on difficulty
  - Easy: `linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)`
  - Medium: `linear-gradient(135deg, #fa709a 0%, #fee140 100%)`
  - Hard: `linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)`
- **Shadow**: `0 4px 12px rgba(0, 0, 0, 0.10)`

### Avatar Selection Cards
- **Size**: `200px × 200px`
- **Aspect Ratio**: `1:1` (square)
- **Padding**: `12px`
- **Border Radius**: `16px`
- **Background**: `#FFFFFF`
- **Border (Default)**: `3px solid transparent`
- **Border (Selected)**: `3px solid #4A9FE8`
- **Shadow**: `0 2px 8px rgba(0, 0, 0, 0.08)`

---

## Buttons

### Primary Button
```css
background: #4A9FE8;
color: #FFFFFF;
padding: 12px 32px;
border-radius: 12px;
font-family: Inter;
font-size: 16px;
font-weight: 600;
border: none;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.10);
transition: all 0.2s ease;

/* Hover */
background: #3A8FD8;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
transform: translateY(-2px);

/* Active */
background: #2A7FC8;
transform: translateY(0);
```

### Secondary Button
```css
background: #FFFFFF;
color: #4A9FE8;
padding: 12px 32px;
border-radius: 12px;
border: 2px solid #4A9FE8;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);

/* Hover */
background: #E8F4FD;
border-color: #3A8FD8;
```

### Success Button
```css
background: #4CAF50;
color: #FFFFFF;
/* Other properties same as Primary Button */
```

### Large Button (Call-to-Action)
```css
padding: 16px 48px;
font-size: 20px;
border-radius: 16px;
```

### Small Button
```css
padding: 8px 20px;
font-size: 14px;
border-radius: 8px;
```

### Disabled State
```css
background: #E0E4E8;
color: #9CA3AF;
cursor: not-allowed;
box-shadow: none;
```

---

## Input Fields

### Text Input / Number Input
```css
width: 100%;
max-width: 400px;
padding: 12px 16px;
font-family: Inter;
font-size: 16px;
border: 2px solid #E0E4E8;
border-radius: 8px;
background: #FFFFFF;
transition: all 0.2s ease;

/* Focus */
border-color: #4A9FE8;
outline: none;
box-shadow: 0 0 0 3px rgba(74, 159, 232, 0.1);

/* Error */
border-color: #F44336;

/* Disabled */
background: #F5F7FA;
color: #9CA3AF;
cursor: not-allowed;
```

### Answer Input (Exercise Pages)
```css
width: 200px;
padding: 16px 20px;
font-family: Sigma;
font-size: 24px;
font-weight: 600;
text-align: center;
border: 3px solid #4A9FE8;
border-radius: 12px;
```

---

## Progress Bars

### Standard Progress Bar
```css
/* Container */
width: 100%;
max-width: 400px;
height: 12px;
background: #E0E4E8;
border-radius: 9999px;
overflow: hidden;

/* Fill */
height: 100%;
background: linear-gradient(90deg, #4A9FE8 0%, #667eea 100%);
border-radius: 9999px;
transition: width 0.3s ease;
```

### Animated Progress Bar
```css
/* Fill */
background: linear-gradient(90deg, #43e97b, #38f9d7, #4A9FE8, #667eea);
background-size: 200% 100%;
animation: shimmer 2s infinite;

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## Avatars

### Avatar Container
- **Size**: `192px × 192px` (Default)
- **Border Radius**: `16px`
- **Background**: `transparent`
- **Border**: `none`
- **Image Fit**: `contain`

### Avatar Sizes
- **Small**: `64px × 64px`
- **Medium**: `128px × 128px`
- **Large**: `192px × 192px`
- **Extra Large**: `256px × 256px`

---

## Modals

### Modal Overlay
```css
position: fixed;
inset: 0;
background: rgba(0, 0, 0, 0.5);
backdrop-filter: blur(4px);
z-index: 1000;
```

### Modal Content
```css
background: #FFFFFF;
padding: 32px;
border-radius: 20px;
min-width: 400px;
max-width: 600px;
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.20);
text-align: center;
```

---

## Animations

### Transition Timing
```css
--transition-fast: 0.15s;
--transition-base: 0.2s;
--transition-slow: 0.3s;
--transition-slower: 0.5s;
```

### Common Animations

**Flip Animation** (Avatar on Correct Answer):
```css
@keyframes flip {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}
.avatar-flip {
  animation: flip 0.6s ease-in-out;
}
```

**Fade In**:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Slide Up**:
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Bounce**:
```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

**Star Reward** (Correct Answer):
```css
@keyframes starPop {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
}
```

---

## Icons & Helper Elements

### Helper Icon (Quantity Visualizer)
```css
width: 48px;
height: 48px;
border-radius: 8px;
border: 2px solid #4A9FE8;
background: #E8F4FD;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
```

---

## Accessibility

### Focus States
- **Focus Ring**: `0 0 0 3px rgba(74, 159, 232, 0.3)`
- **Focus Visible Only**: Use `:focus-visible` for keyboard navigation

### Contrast Ratios
- **Text Primary on Background**: 13:1 (AAA)
- **Text Secondary on Background**: 7:1 (AAA)
- **Button Text on Primary**: 4.5:1 minimum (AA)

### Interactive Element Sizes
- **Minimum Touch Target**: `44px × 44px`
- **Recommended Button Size**: `48px height minimum`

---

## Responsive Design

### Mobile (< 640px)
- Single column layout
- Card padding: `16px`
- Font sizes reduced by 10-15%
- Avatar size: `128px`

### Tablet (640px - 1024px)
- 2-column grid for cards
- Standard spacing
- Avatar size: `160px`

### Desktop (> 1024px)
- 3-4 column grids
- Full spacing scale
- Avatar size: `192px`

---

## Dark Mode (Future Consideration)

### Dark Color Palette
- **Background**: `#1F2937`
- **Card Background**: `#374151`
- **Text Primary**: `#F9FAFB`
- **Text Secondary**: `#D1D5DB`
- **Border**: `#4B5563`

---

## Design Principles

1. **Playful Yet Functional**: Balance fun aesthetics with usability
2. **Clear Visual Hierarchy**: Use size, color, and spacing to guide attention
3. **Consistent Spacing**: Maintain rhythm with 4px base unit
4. **Gentle Animations**: Enhance without distracting
5. **Child-Friendly**: Large touch targets, clear labels, forgiving interactions
6. **Performance**: Optimize animations and transitions for smooth 60fps
7. **Accessibility First**: Ensure keyboard navigation and screen reader support

---

## Implementation Notes

- Use CSS custom properties (variables) for all design tokens
- Implement mobile-first responsive design
- Test with real children for usability validation
- Ensure all interactive elements have visible hover/focus states
- Use semantic HTML for better accessibility
- Optimize images (avatar library) for web performance
- Implement lazy loading for images
- Use system fonts as fallbacks for custom fonts
