# 🌐 Social Media App

A full-stack social media application built with React and Node.js, featuring real-time interactions, user authentication, and modern UI design.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### 🔐 Authentication & Security
- **JWT-based authentication** with secure HTTP-only cookies
- **Password encryption** using bcrypt
- **Session persistence** across browser restarts
- **Protected routes** and API endpoints

### 📱 Social Features
- **Create, read, update, delete posts** with image uploads
- **Like and unlike posts** with real-time updates
- **Comment system** with threaded conversations
- **User profiles** with customizable bio and images
- **Follow/unfollow system** for social connections
- **Personalized news feed** showing posts from followed users

### 🎨 User Interface
- **Responsive design** that works on all devices
- **Modern UI** with Tailwind CSS and Material-UI icons
- **Dark/Light mode** toggle (via context)
- **Interactive dropdowns** and modals
- **Real-time notifications** and feedback
- **Image upload** with preview functionality

### 🛠️ Advanced Features
- **File upload system** for profile and cover pictures
- **Database transactions** for data consistency
- **Cascading deletes** (deleting posts removes associated comments/likes)
- **Query optimization** with proper indexing
- **Error handling** with user-friendly messages
- **Loading states** and optimistic updates

## 🏗️ Tech Stack

### Frontend
- **React 19** - Component-based UI library
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **TanStack Query** - Server state management and caching
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **Material-UI Icons** - Modern icon library
- **Moment.js** - Date/time formatting

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MySQL2** - Database driver with async/await support
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload middleware
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - HTTP cookie parsing

## 📁 Project Structure

```
social-media-app/
├── backend/                    # Node.js backend
│   ├── controllers/           # Route handlers
│   │   ├── auth.js           # Authentication logic
│   │   ├── post.js           # Post CRUD operations
│   │   ├── comment.js        # Comment management
│   │   ├── like.js           # Like/unlike functionality
│   │   ├── user.js           # User profile management
│   │   └── upload.js         # File upload handling
│   ├── routes/               # API route definitions
│   ├── connect.js            # Database connection
│   └── server.js             # Express server setup
├── src/                      # React frontend
│   ├── components/           # Reusable UI components
│   │   ├── post/            # Post component with dropdown
│   │   ├── comment/         # Comment system
│   │   ├── navbar/          # Navigation bar
│   │   └── update/          # Profile update modal
│   ├── pages/               # Page components
│   │   ├── login/           # Authentication pages
│   │   ├── register/        
│   │   ├── home/            # News feed
│   │   └── profile/         # User profiles
│   ├── hooks/               # Custom React hooks
│   ├── api/                 # API service functions
│   ├── context/             # React context providers
│   └── assets/              # Static assets
└── public/                   # Public files and uploads
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **MySQL** database
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RuzsikMarton/social-app-react-node.git
   cd social-media-app
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Database setup**
   ```sql
   CREATE DATABASE social_media_db;
   -- Run your SQL schema file
   ```

5. **Environment variables**
   ```bash
   # Create backend/.env file
   JWT_SECRET=your_jwt_secret_key
   DB_HOST=localhost
   DB_USER=your_db_username
   DB_PASSWORD=your_db_password
   DB_NAME=social_media_db
   ```

6. **Start the development servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   npm run dev
   ```

7. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:8800`

## 🔮 Future Enhancements

- [ ] Real-time messaging system
- [ ] Push notifications
- [ ] Image compression and optimization
- [ ] Advanced search functionality
- [ ] Post sharing and resharing
- [ ] Story/status updates
- [ ] Video upload support
- [ ] Admin dashboard

## 👨‍💻 Author

**Marton Ruzsik**
- GitHub: [@RuzsikMarton](https://github.com/RuzsikMarton)
- Portfolio: [In progress]
---
