# PRD – Math Universe (v2.0)

**Version**: 2.0
**Date**: October 2025
**Previous Version**: [v1.0](prd_v1.0.md)

---

## 1. Background & Goals

* Children aged 6-9 need engaging, gamified math practice that adapts to their skill level.
* Leverage familiar game aesthetics (Roblox, Minecraft, Bamse) to boost motivation.
* Provide immediate feedback, celebration animations, and personalization to make learning fun.
* Support both desktop and mobile experiences with responsive design.

---

## 2. User Persona

* **Primary users**: Children aged 6-9 years
* **Secondary users**: Parents monitoring learning progress
* **Motivation**: Practice math in a fun, game-like environment with instant rewards
* **Pain points**: Traditional math practice lacks engagement; need varied difficulty levels

---

## 3. Functional Requirements

### 3.1 Introduction/Login Page (`/login`)

* **Welcome message**: Removed "Hi there! 👋", now shows only "Welcome to Math Universe"
* **Name input**: User enters their name
* **Avatar selection**: Choose from three options (auto-connected to helper icons):
  * Roblox → Coins icons
  * Minecraft → TNT icons
  * Bamse → Honey icons
* **Get Started button**: Font size 18px on mobile, navigates to `/home` and scrolls to top

---

### 3.2 Homepage (`/home`)

* **Navigation**:
  * Top left: "Math Universe" text link (returns to home)
  * Top right: Settings icon ⚙️ (navigates to settings)
* **Avatar display**: Shows selected avatar with greeting
* **Four main sections** with three difficulty levels each:
  1. **Addition** (➕)
  2. **Subtraction** (➖)
  3. **Multiplication** (✖️)
  4. **Division** (➗) - **All levels now active including Hard**
* **Footer**: "© 2025 All rights reserved. This page is for private use only."

---

### 3.3 Question Bank Logic (Updated)

#### Addition (Plus)
* **Easy**: a + b ≤ 10, a and b ∈ [5, 9]
* **Medium**: a + b ≤ 30, a ∈ [5, 14], b ∈ [5, 15]
* **Hard**: a + b ≤ 100

#### Subtraction (Minus)
* **Easy**: a - b, a ≤ 10, result ≥ 0
* **Medium**: a - b, a is two-digit > 20, b is two-digit > 10, result ≥ 0
* **Hard**: a - b - c, a is two-digit > 20, result ≥ 0

#### Multiplication (Multiple)
* **Easy**: a × b, a and b ∈ [1, 4]
* **Medium**: a × b, a and b ∈ [6, 9]
* **Hard**: a × b, a ∈ [10, 99], b ∈ [2, 9]

#### Division (Divide) ✅ **Hard Level Now Active**
* **Easy**: b ÷ a, b ≤ 49, a ∈ [2, 7]
* **Medium**: b ÷ a, b from 9×9 multiplication table, a ∈ [6, 9]
* **Hard**: b ÷ a, b ≤ 100, a ∈ [11, 20] ✅ **ACTIVATED**

---

### 3.4 Exercise Session

* **10 questions per level**
* **Progress display**: "Question X of 10" with visual progress bar (10% increments)
* **Avatar display**: Shows user's selected avatar
* **Question format**: Large problem text with `= ?` (not `= ( )`)
* **Helper icons** (Easy levels only):
  * Display below question to aid counting/visualization
  * Icon type auto-selected based on avatar choice
  * Size: 48px on desktop, 24px on mobile
* **Answer input**:
  * Placeholder text: "Type here" (18px font, lighter weight)
  * Number input only
* **Submit button**: "Submit Answer" (no rocket emoji)
* **Instant feedback**:
  * Correct → Avatar flip animation
  * Incorrect → "Oops, try it again!" modal

---

### 3.5 Celebration Animations ✨ **NEW IN V2.0**

#### Question 5 Completion
* **Full-screen confetti animation** (3 seconds)
* **Message**: "🎉 You are awesome! Keep on going! 🎉"
* **Audio**: `brass-horn.mp3`
* **Confetti**: 150 colorful pieces falling across entire screen
* **Background**: Semi-transparent white overlay (95% opacity)
* **Font size**: 36px (desktop), 16px (mobile)

#### Question 10 Completion
* **Full-screen confetti animation** (4 seconds)
* **Message**: "🎉 Amazing! You finished all questions! 🎉" (2 lines)
* **Audio**: `woohoo.mp3`
* **Confetti**: 150 colorful pieces falling across entire screen
* **Background**: Semi-transparent white overlay (95% opacity)
* **Font size**: 36px (desktop), 16px (mobile)

**Audio Preloading**: Both sound files pre-loaded on page load for instant playback

---

### 3.6 Completion Screen

After finishing all 10 questions:
* **Buttons**:
  * "Try it again" (secondary style) - Restart current level
  * "Return to Home Page" (primary style) - Navigate to `/home`

---

### 3.7 Settings (`/settings`)

* **Navigation**: Breadcrumb with "Math Universe" link and Settings icon
* **Main settings page buttons**:
  1. **Avatar library** → `/settings/avatar`
  2. **Helper icon library** → `/settings/icons`
  3. **My stats** (hidden, reserved for future use)
  4. **Buy me a coffee☕️** → Opens https://buymeacoffee.com/moonlight0121 (orange #F9703E color)
  5. **Leave feedback** → Opens mailto with subject "Feedback for Math Universe"

#### Avatar Library (`/settings/avatar`)
* Three avatar options: Roblox, Minecraft, Bamse
* Selection updates immediately across all screens
* Avatar size in exercises: 288px (1.5x larger than v1.0)

#### Helper Icon Library (`/settings/icons`)
* Three icon sets: Coins, TNT, Honey
* Auto-connected to avatars (selection updates when avatar changes)
* Selection synced across avatar and icon pages

---

### 3.8 Responsive Design **NEW IN V2.0**

#### Mobile View (≤640px)
* Exercise header: padding 0px (removed 24px padding)
* All headings: letter-spacing 3% (increased from 2%)
* h3 elements: 20px font size
* Helper icons: 24px (50% of desktop size)
* Celebration text: 16px
* Question area: top/bottom padding 12px
* "Get Started" button: 18px font size

#### Desktop View
* Standard layout with full padding
* Larger fonts and icons
* Celebration text: 36px

---

## 4. Technical Implementation

### 4.1 Technology Stack
* **Pure HTML/CSS/JavaScript** (no frameworks)
* **Single-page application** with route-based navigation
* **Local storage** for user preferences (name, avatar, icon selection)
* **Client-side question generation** with randomization

### 4.2 File Structure
```
/
├── index.html          # Main application file
├── icons/              # Helper icons and UI icons
│   ├── coins.svg
│   ├── tnt.svg (renamed from heart.svg)
│   ├── honey.svg (renamed from star.svg)
│   ├── home.svg
│   ├── setting.svg
│   ├── Favicon.png
│   └── ... (operation icons)
├── images/             # Avatar images
│   ├── roblox.png
│   ├── minecraft.png
│   └── Bamse.png
├── sounds/             # Audio files
│   ├── brass-horn.mp3  # Question 5 celebration
│   └── woohoo.mp3      # Question 10 celebration
├── prd.md              # This document (v2.0)
├── prd_v1.0.md         # Previous version
├── sitemap.md          # Site structure
└── style-guide.md      # Design guidelines
```

### 4.3 Key Features
* **Audio preloading**: Sound files loaded on page initialization for instant playback
* **Scroll-to-top**: All route changes scroll to top of page
* **Avatar-icon binding**: Automatic connection between avatar and helper icon selection
* **Favicon support**: Custom favicon from icons/Favicon.png
* **Error message**: Consistent "Oops, try it again!" messaging

---

## 5. Design Principles

* **Child-friendly**: Large buttons, clear text, immediate visual feedback
* **Playful aesthetics**: Soft gradients, rounded corners, vibrant colors
* **Game-inspired**: Roblox/Minecraft visual style with modern polish
* **Accessible**: High contrast, readable fonts (Sigmar for headings, Inter for body)
* **Safe**: No ads, no external tracking, private use only

---

## 6. Key Improvements from v1.0

### Functionality
✅ Division Hard level activated (was disabled in v1.0)
✅ Full-screen celebration animations at question 5 and 10
✅ Audio feedback with pre-loaded sound effects
✅ Auto-scroll to top on route changes
✅ Avatar-icon automatic connection

### UX Enhancements
✅ Streamlined introduction page (removed "Hi there!")
✅ Improved button labels ("Try it again" vs "Start Over")
✅ Better input placeholders ("Type here" vs "Answer")
✅ Favicon support for browser tab
✅ "Buy me a coffee" donation button

### Mobile Optimization
✅ Responsive celebration animations
✅ Optimized padding and spacing
✅ Adjusted font sizes and icon sizes
✅ Touch-friendly button sizes

### Content Updates
✅ Updated division easy logic (b ≤ 49, a ∈ [2,7])
✅ Updated addition medium logic (more challenging range)
✅ Helper icon renaming (heart→tnt, star→honey)

---

## 7. Future Roadmap (Reserved)

* **My Stats**: Daily/weekly progress tracking (currently hidden)
* **Multi-user support**: Account system with login
* **Sound toggle**: Option to mute/unmute sound effects
* **Additional avatars**: Expand avatar library
* **Custom themes**: Color scheme options
* **Achievements**: Badges and rewards system

---

## 8. Success Metrics

* Children complete exercises without resistance
* Increased engagement with celebration animations
* Positive feedback from parents and children
* Regular daily use (10+ questions per day)
* Children request to "play Math Universe"

---

**End of PRD v2.0**
