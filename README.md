# ILUMAA Learning Website

Standalone repository for **ILUMAA Learning & Professional Accelerator Programmes**.

- **Production Domain**: `https://learning.ilumaa.com`
- **Local Development**: `http://localhost:5175`

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Runs Vite development server on `http://localhost:5175`.

### 3. Build for Production
```bash
npm run build
```

---

## Multi-Domain Routing Configuration
This project is configured to link seamlessly with the ILUMAA ecosystem:
- **Main Website**: `https://ilumaa.com` (Local: `http://localhost:5173`)
- **Tech Website**: `https://tech.ilumaa.com` (Local: `http://localhost:5174`)
- **Learning Website**: `https://learning.ilumaa.com` (Local: `http://localhost:5175`)

Environment variables (optional override in `.env`):
```env
VITE_MAIN_URL=https://ilumaa.com
VITE_MAIN_PORT=5173
VITE_TECH_URL=https://tech.ilumaa.com
VITE_TECH_PORT=5174
VITE_LEARNING_URL=https://learning.ilumaa.com
VITE_LEARNING_PORT=5175
```
