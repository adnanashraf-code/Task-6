# ShopVista - Modern E-Commerce Experience

A premium, fully responsive E-commerce application built with React, Vite, and Tailwind CSS v4. This project demonstrates a clean architecture, dynamic data fetching from FakeStoreAPI, and state management using React Context API.

## 🚀 Live Demo
The project is optimized for deployment on **Vercel**. Ensure all dependencies are pushed to your repository for a successful build.

## ✨ Features

- **Modern UI/UX**: Premium dark-themed design with emerald accents and glassmorphism effects.
- **Fully Responsive**: Optimized for all screen sizes from mobile (320px+) to large desktops.
- **Dynamic Product Catalog**: Fetches products in real-time with randomized limits for a fresh experience.
- **Product Details**: Dedicated pages for each product with detailed descriptions and pricing.
- **State Management**: Centralized data handling using React Context API (`UsercontextProvider`).
- **Smooth Navigation**: Client-side routing implemented with `react-router-dom`.
- **Sorting & Refresh**: Ability to sort products by price and refresh the catalog with new data.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS v4 (Modern Engine)
- **Networking**: Axios
- **Routing**: React Router v6
- **API**: [FakeStoreAPI](https://fakestoreapi.com/)

## 📂 Project Structure

```text
src/
├── api/              # API service functions (Axios)
├── assets/           # Static assets and images
├── context/          # React Context for global state
├── pages/            # Page components (Home, Products, ProductDetail)
├── App.jsx           # Main application router
└── main.jsx          # Entry point
```

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adnanashraf-code/Task-6.git
   cd Task-6/task-6
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🔧 Recent Fixes

- **Vercel Build Fix**: Added missing `tailwindcss` and `@tailwindcss/vite` dependencies to `package.json`.
- **Responsiveness**: Adjusted heading sizes, paddings, and grid layouts to ensure perfect fit on mobile devices (320px screens).
- **Clean Code**: Removed redundant components and optimized the file structure.

---
Developed with ❤️ by Adnan.
