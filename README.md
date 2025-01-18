# EdVerse - AI-Powered Skill Development Platform

EdVerse is an innovative edtech platform designed to enhance youth skill development through personalized learning paths and cutting-edge technology. The platform combines AI, interactive content, and additional features like credit systems, eye-tracking, and more to make learning engaging and effective.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication & Database](#authentication--database)
- [License](#license)

## About
EdVerse is designed to facilitate personalized learning for students of various skill levels. The platform allows users to sign in, track their progress, and explore learning content divided into two primary categories: **School** and **Courses**. Each category contains various classes, subjects, quizzes, video lectures, and additional features for better user engagement.

### Key Features:
- **Personalized Learning Dashboard**: Displays the user's progress, unlocking new content based on achievements.
- **School & Courses Section**: A robust content hub that allows users to access textbooks, video lessons, quizzes, and weekly tests.
- **Credit System**: Users earn credits that unlock further content and incentivize learning. Credits are stored and managed via Firebase.
- **Eye Tracker Integration**: Tracks user focus and engagement for adaptive learning experiences.
- **News Section**: Stay updated with educational trends, news articles, and platform updates.
  
## Features
### 1. **Home Page**
   - Leads to **Login/Sign In** page.

### 2. **Dashboard**
   - Displays user progress, achievements, and credits.
   - Links to further learning categories (School & Courses).

### 3. **School Section**
   - **Classes and Subjects**:
     - Textbooks, videos, quizzes, and weekly tests for each subject.
   - Interactive learning content.

### 4. **Courses Section**
   - Additional online courses with similar features.

### 5. **Credit System**
   - A gamified system where users earn credits through achievements, which can be used to unlock content.

### 6. **Eye Tracker System**
   - Tracks user focus to ensure engagement with content.
   - Provides data for personalized learning experiences.

### 7. **News Section**
   - Summarizes educational news, trends, and platform updates.

## Tech Stack
- **Frontend**: React.js, CSS3, HTML5
- **Backend**: Node.js, Express.js
- **Database**: Firebase (Authentication, Credit Storage, Comment Section)
- **AI/ML Integration**: TensorFlow (for tracking and personalized learning algorithms)
- **Video Handling**: Embedded video player with comment and rating functionality.
  
## Installation
To get started with EdVerse, follow these steps:

### 1. Clone the Repository:
```bash
git clone https://github.com/yourusername/edverse.git
cd edverse
