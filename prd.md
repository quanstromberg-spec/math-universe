
# PRD – Roblox Style Customized Math Game

## 1. Background & Goals

* Children are interested in Roblox games and Avatars. The goal is to leverage familiar game elements to boost motivation for practicing math.
* Combine math practice with Roblox-inspired UI to make learning fun and engaging.
* Provide levels suitable for different age groups (preschool, grade 3), so both children can find exercises at their level.

---

## 2. User Persona

* **Primary users**: 6-year-old (preschool) and 9-year-old (grade 3).
* **Secondary users**: Parents (want their children to practice math in a playful way).
* **Motivation**: Learn math in a game-like, familiar environment.
* **Pain points**: Traditional math practice is boring and hard to sustain; children need varied difficulty levels.

---

## 3. Functional Requirements

### 3.1 Login (Logga in)

* **Entry point**: A “Logga in” button on the homepage.
* **Account system**:

  * Each child can log in with a unique account.
  * Upon login, personal settings (Avatar, icon choices, stats) are loaded.
* **Data binding**:

  * Personalized settings and learning history are tied to the account.

---

### 3.2 Homepage

* Four main Sections:

  1. **Addition (Plus)**
  2. **Subtraction (Minus)**
  3. **Multiplication (Multiple)**
  4. **Division (Divide)**
* Each Section offers **difficulty levels (Easy / Medium / Hard)**.

---

### 3.3 Question Bank Logic

#### Addition (Plus)

* Easy: a+b ≤ 10 (a and b ∈ [5, 9])
* Medium: a+b ≤ 15
* Hard: a+b ≤ 100

#### Subtraction (Minus)

* Easy: a-b, a ≤ 10, result ≥ 0
* Medium: a-b, a is a two-digit number > 20, b is a two-digit number > 10, result ≥ 0
* Hard: a-b-c, a is a two-digit number > 20, result ≥ 0

#### Multiplication (Multiple)

* Easy: a*b, a and b ∈ [1, 4]
* Medium: a*b, a and b ∈ [6, 9]
* Hard: a*b, a ∈ [10, 99] (two-digit number), b ∈ [2, 9]

#### Division (Divide)

* Easy: a/b, a comes from the 99 multiplication table, b ∈ [2, 4]
* Medium: a/b, a comes from the 99 multiplication table, b ∈ [6, 9]
* Hard: N/A

---

### 3.4 Exercise Session

* Each Level contains **10 questions**.
* **Progress display**: Progress bar + numeric indicator (e.g., 2/10).
* **Score display**: Current score (e.g., Score: 1/10).
* **Instant feedback**:

  * Correct → star animation reward.
  * Incorrect → red “X” error icon.

---

### 3.5 Exercise Screen (UI Description)

Roblox-style interface elements:

* **Top Avatar**:

  * Displays the Avatar chosen by the user.
  * Users can pick an Avatar from an image library in Settings (options include Roblox characters, other game characters, or animations like Peppa Pig).

* **Progress & Score**:

  * Left: current score (Score: X/10).
  * Right: current question (e.g., Question 2 of 10).
  * Progress bar below for visual completion.

* **Question Area**:

  * Large centered math problem (e.g., 2 + 6 = ( )).
  * In **Easy Level only**, show quantity helper icons below (Roblox tokens, coins, stars, etc.) to support younger learners.
  * Icons are selected by the user from the Settings image library.

* **Answer Input**:

  * Numeric input box for the child to type the answer.

* **Submit Button**:

  * Large green button, label: “Submit Answer 🚀”.
  * Immediate feedback upon click (correct/wrong).

---

### 3.6 Avatar Customization

* **Entry point**: Accessible via Settings on homepage or exercise screen.
* **Functionality**:

  * Choose Avatar from image library (Roblox / other games / cartoons).
  * Avatar updates instantly in the exercise screen.
  * Avatar selection is saved with the account.

---

### 3.7 Learning Statistics

* **Metrics**:

  * Number of questions completed **today** (by Section + total).
  * Number of questions completed **this week** (by Section + total).
* **Display**:

  * Viewable in Settings or user profile.
  * Based on “10 questions per Level.”
* **Purpose**:

  * Help parents and children track progress and practice frequency.

---

### 3.8 Image Library Management

* **Avatar Selection**:

  * Library includes Roblox characters, other games, and cartoon characters (e.g., Peppa Pig).
  * Selected Avatar updates instantly in the UI.

* **Helper Icon Selection**:

  * Library includes multiple styles of helper icons (Roblox tokens, coins, stars, cartoon objects).
  * Used in Easy Level exercises below the question.

* **Data Binding**:

  * Selections saved to database (account-bound).
  * Each user sees their own personalized settings.

---

## 4. Non-Functional Requirements

* **UI style**: Roblox-inspired interface with Avatar personalization.
* **Language**: **English is the default application language** (all buttons, prompts, feedback, and exercises in English).
* **Accessibility**: Suitable for preschoolers (large buttons, simple navigation, optional voice support).
* **Cross-device**: Web-first (desktop + tablet), with mobile adaptation.
* **Safety**: No ads, no external links, safe for children.

---

## 5. Usage Scenarios

* **Daily routine**: Quick practice after school or dinner (one Level of 10 questions).
* **Family time**: Parents accompany children, increasing fun and interaction.
* **Personalized learning**: Each child chooses difficulty level suitable for their stage.

---

## 6. Success Metrics

* Children complete a Level (10 questions) without resistance.
* Improvement in speed and accuracy after one week of use.
* Children proactively request to play the math game.

---

## 7. Technical Architecture

### 7.1 Frontend

* **Framework**: React / Next.js
* **Styling**: Tailwind CSS (Roblox-inspired UI)
* **State management**: React useState / Zustand (progress, score, Avatar, icons, stats)
* **Animations**: Framer Motion (stars, error X, progress transitions)
* **Device support**: Web-first (desktop + tablet), expandable to PWA

### 7.2 Backend

* **Approach**: Node.js / Next.js API routes

  * Authentication & login
  * Question generation/distribution
  * Learning stats API (daily & weekly progress by Section)
  * Avatar & icon personalization storage

### 7.3 Database

* **Choice**: Supabase (Postgres + Auth)
* **Data stored**:

  * User accounts (UserID, email/username, password hash)
  * Avatar setting (current Avatar)
  * Icon setting (current helper icons)
  * Exercise records (Section, Level, Score, CompletedAt)
  * Learning statistics (daily/weekly totals, by Section)

### 7.4 User Data Flow

1. User logs in → Auth check → Load Avatar, icons, and stats.
2. User selects Section/Level → Frontend generates or API fetches 10 questions.
3. User submits answer → Frontend validates → Saves result to DB.
4. System auto-updates daily & weekly stats.
5. User can view stats and change personalization in Settings.

---
