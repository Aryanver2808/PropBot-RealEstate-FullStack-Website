# Real Estate Auth Project

A React app with Firebase Authentication supporting Email/Password, Google, Facebook, and Apple logins. All pages (Home, Listings, Login, Signup) use reusable components.

---

## Setup Instructions
1. Install dependencies:  
2. Start the app:  

---

## Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).  
2. Enable Authentication → Sign-in methods: Email/Password, Google, Facebook, Apple.  
3. Add your Firebase config to `src/services/firebase.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

## Screenshots
<p align="center">
  <img src="screenshots/home.png" alt="Home Page" width="200" />
  <img src="screenshots/home2.png" alt="Home Page" width="200" />
  <img src="screenshots/home3.png" alt="Home Page" width="200" />
  <img src="screenshots/home4.png" alt="Home Page" width="200" />
  <img src="screenshots/home5.png" alt="Home Page" width="200" />
  <img src="screenshots/home6.png" alt="Home Page" width="200" />
  <img src="screenshots/home7.png" alt="Home Page" width="200" />
  <img src="screenshots/home8.png" alt="Home Page" width="200" />
  <img src="screenshots/listings.png" alt="Listings Page" width="200" />
  <img src="screenshots/listings2.png" alt="Listings Page" width="200" />
  <img src="screenshots/login.png" alt="Login Page" width="200" />
  <img src="screenshots/signup.png" alt="Signup Page" width="200" />
</p>
