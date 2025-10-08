/
├─ /login                       # Login（登入 - Introduction Page）
│  ├─ Welcome message
│  ├─ Name input
│  ├─ Avatar selection (Roblox, Minecraft, Bamse)
│  └─ "Let's Get Started!" button → /home
│
├─ /home                        # Home（主页：4 个 math operations）
│  ├─ [UI Elements]
│  │   ├─ Top Left: "Math Universe" text link → /home
│  │   ├─ Top Right: Settings Icon ⚙️ → /settings
│  │   ├─ Avatar display with greeting
│  │   └─ Footer with copyright notice
│  │
│  ├─ /home/addition            # Addition（加法 ➕）
│  │  ├─ Overview page with level descriptions
│  │  ├─ /home/addition/easy    # Easy: a + b ≤ 10, a,b ∈ [5,9] (10 questions)
│  │  ├─ /home/addition/medium  # Medium: a + b ≤ 30, a ∈ [5,14], b ∈ [5,15] (10 questions)
│  │  └─ /home/addition/hard    # Hard: a + b ≤ 100 (10 questions)
│  │
│  ├─ /home/subtraction         # Subtraction（减法 ➖）
│  │  ├─ Overview page with level descriptions
│  │  ├─ /home/subtraction/easy    # Easy level (10 questions)
│  │  ├─ /home/subtraction/medium  # Medium level (10 questions)
│  │  └─ /home/subtraction/hard    # Hard level (10 questions)
│  │
│  ├─ /home/multiplication      # Multiplication（乘法 ✖️）
│  │  ├─ Overview page with level descriptions
│  │  ├─ /home/multiplication/easy    # Easy level (10 questions)
│  │  ├─ /home/multiplication/medium  # Medium level (10 questions)
│  │  └─ /home/multiplication/hard    # Hard level (10 questions)
│  │
│  └─ /home/division            # Division（除法 ➗）
│     ├─ Overview page with level descriptions
│     ├─ /home/division/easy    # Easy: b ÷ a, b ≤ 49, a ∈ [2,7] (10 questions)
│     ├─ /home/division/medium  # Medium: from 9×9 table, divisor ∈ [6,9] (10 questions)
│     └─ /home/division/hard    # Hard: b ÷ a, b ≤ 100, a ∈ [11,20] (10 questions) ✅ ACTIVATED
│
└─ /settings                    # Settings（设置）
   ├─ [UI Elements]
   │   ├─ Top: Breadcrumb navigation (Math Universe | Settings Icon)
   │   └─ Footer with copyright notice
   │
   ├─ Main Settings Page
   │   ├─ "Avatar library" button → /settings/avatar
   │   ├─ "Helper icon library" button → /settings/icons
   │   ├─ "My stats" button (hidden, reserved for future)
   │   ├─ "Buy me a coffee☕️" button → https://buymeacoffee.com/moonlight0121
   │   └─ "Leave feedback" button → mailto with subject
   │
   ├─ /settings/avatar          # Avatar Library（头像选择）
   │   └─ Three avatars: Roblox, Minecraft, Bamse
   │
   └─ /settings/icons           # Helper Icon Library（辅助图标选择）
       └─ Three icon sets: Coins, TNT, Honey

# Special Features

## Celebration Animations
- **Question 5 Completion**: Full-screen confetti with "You are awesome! Keep on going!" + brass-horn.mp3 (3s)
- **Question 10 Completion**: Full-screen confetti with "Amazing! You finished all questions!" + woohoo.mp3 (4s)

## Avatar-Icon Connections
- Roblox → Coins
- Minecraft → TNT
- Bamse → Honey

## Responsive Design
- Desktop: Full layout with larger fonts
- Mobile (≤640px): Optimized layout, adjusted padding and font sizes

## Audio Files
- `sounds/brass-horn.mp3` - Question 5 celebration
- `sounds/woohoo.mp3` - Question 10 celebration
- Pre-loaded for instant playback
