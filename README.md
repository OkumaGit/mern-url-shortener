# 🔗 MERN URL Shortener

A modern full-stack URL shortening service with JWT authentication, click tracking, and responsive design.

**[🌟 Live Demo](https://mern-url-shortener-hjtv.onrender.com/)**

## ✨ Features

- 🔐 JWT Authentication & User Dashboard
- ⚡ Instant URL shortening with custom codes
- 📊 Click tracking & statistics
- 📱 Fully responsive design
- 🎯 Personal link management

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Client  │    │  Express API    │    │   MongoDB       │
│                 │    │                 │    │                 │
│ • Components    │◄──►│ • JWT Auth      │◄──►│ • Users         │
│ • Context API   │    │ • Link Routes   │    │ • Links         │
│ • Custom Hooks  │    │ • Middleware    │    │ • Click Stats   │
│ • Materialize   │    │ • Validation    │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                        │                        │
        └────────────────────────┼────────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   Render.com    │
                    │   Deployment    │
                    └─────────────────┘
```

## 🛠️ Tech Stack

**Frontend:** React, React Router, Context API, Materialize CSS  
**Backend:** Node.js, Express.js, JWT, bcryptjs  
**Database:** MongoDB Atlas with Mongoose  
**Deployment:** Render (Auto-deploy from main branch)

## 🚀 Quick Start

```bash
# Clone & Install
git clone https://github.com/OkumaGit/mern-url-shortener.git
cd mern-url-shortener
npm install
cd client && npm install && cd ..

# Environment Setup (.env)
PORT=4000
JWT_SECRET=your_secret
MONGO_URI=your_mongodb_uri
BASE_URL=http://localhost:4000

# Run Development
npm run dev  # Both servers
# OR separately: npm start & cd client && npm start
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/login` | User login |
| POST | `/api/link/generate` | Create short URL |
| GET | `/api/link` | Get user's links |
| GET | `/api/link/:id` | Get link details |
| GET | `/t/:code` | Redirect + track clicks |

## 🔒 Security & Features

- JWT token authentication
- Password hashing (bcryptjs)
- Protected routes & middleware
- Input validation
- CORS configuration
- Click analytics
- Responsive UI (mobile-first)

## 🌐 Deployment

Production-ready setup with:
- Express static serving for React build
- Environment variables configuration
- MongoDB Atlas cloud database
- Automatic Render deployment

---

⭐ **Star if you found this helpful!**

**Contact:** [@OkumaGit](https://github.com/OkumaGit) | **Demo:** [Live App](https://mern-url-shortener-hjtv.onrender.com/)
