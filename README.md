# 📝 MEVN Todo App

A simple yet powerful **Todo application** built with the **MEVN stack**:

- **MongoDB** – Dockerized NoSQL database
- **Express.js** – Backend REST API
- **Vue 3 + Vite + TypeScript** – Frontend
- **TailwindCSS** – Modern, responsive styling

---

## ✨ Features

- ✅ Add new todos
- ✏️ Toggle completion status
- 🗑️ Delete todos
- 📦 Persistent data storage in MongoDB
- 🎨 Fully responsive UI with TailwindCSS
- ⚡ Fast development with Vite
- 🐳 Dockerized MongoDB with mongo-express for DB management

---

## 📂 Project Structure
```
Todo_MEVN/
├── backend/ # Express + Mongoose API
│ ├── src/
│ │ ├── models/ # Mongoose models
│ │ ├── routes/ # Express routes
│ │ ├── db.js # DB connection
│ │ └── server.js # API entry point
├── frontend/ # Vue 3 + TypeScript + Tailwind
└── docker/ # Docker Compose config for MongoDB
```

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) & Docker Compose
- npm (comes with Node.js)

---

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/sachinksamad1/Todo_MEVN.git
cd Todo_MEVN
```

### 3️⃣ Run MongoDB in Docker
```
cd docker
docker compose up -d
```

 - MongoDB URI: mongodb://admin:adminpass@localhost:27017
 - Mongo Express UI: http://localhost:8081

### 4️⃣ Start the Backend
```
cd ../backend
npm install
npm run dev
```
- Backend will run on: http://localhost:4000

### 5️⃣ Start the Frontend
```
cd ../frontend/mevn-todo-frontend
npm install
npm run dev
```
- Frontend will run on: http://localhost:5173

Environment Variables

### ⚙️ Backend Todo_MEVN/backend/.env example:
```
MONGO_URI=mongodb://admin:adminpass@localhost:27017
DB_NAME=mevn_todo
PORT=4000
```

### 📡 API Endpoints
| Method | Endpoint                | Description            |
| ------ | ----------------------- | ---------------------- |
| GET    | `/api/todos`            | Get all todos          |
| POST   | `/api/todos`            | Create a new todo      |
| PATCH  | `/api/todos/:id/toggle` | Toggle todo completion |
| DELETE | `/api/todos/:id`        | Delete a todo          |

### 🛠 Technologies Used
- Frontend: Vue 3, TypeScript, TailwindCSS, Vite
- Backend: Node.js, Express.js, Mongoose
- Database: MongoDB (Dockerized)
- Dev Tools: Nodemon, Docker, Mongo Express

🐳 Docker Commands

Start services:
```
docker compose up -d
```
Stop services:
```
docker compose down
```
View logs:
```
docker compose logs -f
```

### 🤝 Contributing
1. Fork the repo
2. Create a new branch (git checkout -b feature-name)
3. Commit changes (git commit -m "Added feature")
4. Push branch (git push origin feature-name)
5. Create a Pull Request

### 📜 License
This project is licensed under the [MIT License](LICENSE)
