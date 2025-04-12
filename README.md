<<<<<<< HEAD
# 🚀 Typoclapse – Typing Game for TechFest 🧠⌨️

**Typoclapse** is an engaging, web-based typing competition game designed for a college tech fest. It challenges users to type a given prompt with speed and precision, tracking both typing speed and accuracy to calculate a real-time score. Built with **HTML**, **CSS**, **JavaScript**, and **Firebase**, it offers a seamless user experience through a dual-panel system: **User Panel** and **Admin Panel**.

🌐 Live Preview: https://typoclapse.web.app/ 
🎨 Developed by: [ivocreates.site](https://ivocreates.site)

---


## ✨ Features

### 🧑‍💻 User Panel
- OTP-based authentication (one-time play).
- Clean, responsive typing interface.
- Real-time score calculation:
  - **Typing Speed (WPM)**
  - **Accuracy (%)**
- Live leaderboard/dashboard view after game completion.

### 🛠️ Admin Panel
- Register participants using Firebase.
- View and manage all participants and scores.
- Prevent replay/duplicate submissions.
- Leaderboard display sorted by score.

---

## 🎮 Game Flow

1. **Participant** enters their OTP and accesses the game.
2. A typing prompt is shown — they type as fast and accurately as possible.
3. On submission, the system calculates score and stores it in Firebase.
4. The dashboard displays the score and position on leaderboard.
5. **Admin** controls registration and leaderboard access via a separate panel.

---

## 🛠️ Tech Stack

| Technology     | Use Case                      |
|----------------|-------------------------------|
| **HTML/CSS**   | UI structure and styling      |
| **JavaScript** | Game logic and event handling |
| **Firebase**   | Authentication & Realtime DB  |

---

## 📁 Project Structure

typoclapse/ 
├── index.html # User typing game interface 
├── admin.html # Admin control panel 
├── /css 
│ └── style.css # Main styles 
├── /js 
│ ├── main.js # Typing game logic │
├── admin.js # Admin panel logic 
│ └── firebase.js # Firebase configuration & functions 
└── /assets # Fonts, images, or other resources



---

## ⚙️ Setup & Installation

1. **Clone the repository**
   git clone https://github.com/ivocreates/typoclapse.git
   cd typoclapse
Setup Firebase

Create a Firebase project

Enable Authentication (OTP via phone or email)

Set up Realtime Database

Replace Firebase config in js/firebase.js with your credentials

Run Locally

Open index.html in a browser to play

Open admin.html for admin controls

📊 Scoring System
The final score is calculated based on:

Typing Speed (WPM): Words typed per minute.

Accuracy: Correct characters divided by total characters typed.

Score = (Speed × Accuracy) Adjustment Factor
Firebase stores and ranks users in real-time based on this metric.

📸 Screenshots
Add screenshots here after your final UI is ready. Suggested screenshots:

Typing interface

OTP authentication

Scoreboard

Admin panel

👨‍💻 Creator
Project by:

🔸 Ivo Pereira
Visit us at 👉 ivocreates.site
Passionate developer and creator of digital experiences.

📝 License
This project is licensed under the MIT License.
Feel free to use, modify, and contribute.

❤️ Support & Feedback
If you liked this project or used it at your event, give us a ⭐ on GitHub and let us know!
You can also reach out through our website: ivocreates.site/contact









=======
# typoclapse
Typoclapse is a web-based typing game developed using HTML, CSS, JavaScript, and Firebase. It calculates scores based on typing speed and accuracy. The game features two panels: a user panel for gameplay, where participants authenticate with OTP and play once, and an admin panel for participant registration and leaderboard management.
>>>>>>> ab63d8d21e4f0e95432b5fecb795ba895a6a083c
