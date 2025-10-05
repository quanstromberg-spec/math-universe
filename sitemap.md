/
├─ /login                       # Login（登入）
│
├─ /home                        # Home（主页：4 个 section）
│  ├─ [UI Elements]
│  │   ├─ Top Avatar (clickable → /settings/avatar)
│  │   └─ Top-right Settings Button ⚙️ → /settings
│  │
│  ├─ /home/addition            # Addition（加法 Plus）
│  │  ├─ /home/addition/easy    # Easy（10 questions）
│  │  ├─ /home/addition/medium  # Medium（10 questions）
│  │  └─ /home/addition/hard    # Hard（10 questions）
│  │
│  ├─ /home/subtraction         # Subtraction（减法 Minus）
│  │  ├─ /home/subtraction/easy
│  │  ├─ /home/subtraction/medium
│  │  └─ /home/subtraction/hard
│  │
│  ├─ /home/multiplication      # Multiplication（乘法 Multiple）
│  │  ├─ /home/multiplication/easy
│  │  ├─ /home/multiplication/medium
│  │  └─ /home/multiplication/hard
│  │
│  └─ /home/division            # Division（除法 Divide）
│     ├─ /home/division/easy
│     ├─ /home/division/medium
│     └─ /home/division/hard    # route kept but disabled/hidden in UI
│
└─ /settings                    # Settings（设置）
   ├─ [UI Elements]
   │   └─ Back to Home Button ⬅️ → /home
   │
   ├─ /settings/avatar          # Avatar Library（头像选择）
   ├─ /settings/icons           # Helper Icon Library（数量辅助图标选择）
   └─ /settings/stats           # My Stats（今日/本周完成情况）
