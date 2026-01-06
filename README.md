# My Backend API Project

This is **my personal project**, a **Backend API** built with Node.js, Express, and MongoDB.  
It supports full user management and post management with CRUD operations.

---

## 🧰 Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt for password hashing
- Nodemon for development
- ES Modules (import/export)

---

## ⚙️ Features

### Users
- Register a new user
- Sign in / Login
- Logout

### Posts
- Create a new post
- Get all posts
- Update a post
- Delete a post

---

## 📂 Project Structure

backend/
├─ src/
│ ├─ controllers/
│ │ ├─ user.controller.js
│ │ └─ post.controller.js
│ ├─ models/
│ │ ├─ user.model.js
│ │ └─ post.model.js
│ ├─ routes/
│ │ ├─ user.route.js
│ │ └─ post.route.js
│ ├─ app.js
│ └─ index.js
├─ .env
├─ package.json
├─ package-lock.json
└─ README.md

