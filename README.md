# 3D Portfolio – React + Vite

This project is a modern portfolio built with React and Vite, featuring hot module replacement (HMR), optimized builds, and ESLint integration for code quality.

## Features

- Fast development with Vite
- React 18 support
- Hot Module Replacement (HMR)
- ESLint for code linting
- Custom 3D and animated sections

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

## Environment Variables

**Don't forget to add your `.env` file!**

This project may require environment variables for API keys, service IDs, or other configuration. Create a `.env` file in the root directory and add any required variables, for example:

```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Refer to the documentation or code comments for the exact variables needed.

## Plugins

Two official plugins are available for React in Vite:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) – uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) – uses [SWC](https://swc.rs/) for Fast Refresh

## Folder Structure

```
├── public/
├── src/
│   ├── components/
│   ├── sections/
│   ├── assets/
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```
