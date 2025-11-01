# 🏡 ALX Listing App 04

A Next.js property listing and booking application that allows users to view property details, submit bookings, and read reviews dynamically.
Built with Next.js, TypeScript, Tailwind CSS, and Axios.

## 🚀 Features

🏘️ Fetch and display property listings from API

🏡 View detailed property information dynamically

💬 Display user reviews for each property

🧾 Book a property with secure form validation

⚡ Modern UI with Tailwind CSS

🔄 Axios integration for API communication

✅ TypeScript + ESLint + Prettier configured

## 📁 Project Structure
alx-listing-app-04/
│
├── pages/
│   ├── index.tsx                # Property listing page
│   ├── property/[id].tsx        # Dynamic property details page
│   └── booking/index.tsx        # Booking form page
│
├── components/
│   ├── property/
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyDetail.tsx
│   │   └── ReviewSection.tsx
│   └── layout/
│       └── Navbar.tsx
│
├── styles/
│   └── globals.css
│
├── public/
│   ├── icons/
│   └── images/
│
├── package.json
├── README.md
└── tsconfig.json

## ⚙️ Installation & Setup

### Clone the repository

git clone https://github.com/<your-username>/alx-listing-app-04.git
cd alx-listing-app-04


### Install dependencies

npm install


### Set up environment variables
Create a .env.local file in the root directory:

NEXT_PUBLIC_API_URL=http://localhost:5000


### Run the development server

npm run dev


Open http://localhost:3000
 to view it in your browser.

## 🧠 API Endpoints

The project connects to an API with the following endpoints:

Method	Endpoint	Description
GET	/properties	Fetch all properties
GET	/properties/:id	Fetch a single property
GET	/properties/:id/reviews	Fetch reviews for a property
POST	/bookings	Submit a new booking
## 🧩 Key Components
PropertyDetail.tsx

Displays full property info, fetched dynamically from /properties/:id.

BookingForm.tsx

Handles booking form submission with Axios POST /bookings.

ReviewSection.tsx

Fetches and displays property reviews from /properties/:id/reviews.

## 🧱 Built With

Next.js – React framework for SSR & routing

TypeScript – Static typing

Tailwind CSS – Modern utility-first styling

Axios – API calls

React Hook Form + Yup – Form handling & validation

Zustand – Lightweight state management

## 🧰 Scripts
Command	Description
npm run dev	Run development server
npm run build	Build for production
npm start	Start production build
npm run lint	Run ESLint
npm run test	Run Jest tests.
