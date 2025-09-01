# Jewelry Store Website

A minimal jewelry showcase inspired by Zara's style.  
Built with React + Vite + Tailwind + Framer Motion.  

## 🚀 Features
- Menu with **Coming Soon | Available Now | Sold**
- Grid display of products
- Individual product pages with description
- "Purchase Now" button opens email client with pre-filled product info

## 🗂 How to Add Products
1. Place your product photo in `public/images/`
2. Add a new entry in `src/data/products.json`:
```json
{
  "id": "unique-id",
  "name": "Product Name",
  "status": "available",
  "image": "/images/filename.jpg",
  "description": "Short description here"
}
