# 🔗 URL Shortener Backend

A minimal production-style URL shortener built using **Node.js**, **Express**, **Docker**, and **CI/CD**.
This project demonstrates backend system design, containerization, and deployment.

---

## 🚀 Features

* Shorten long URLs into unique 6-character codes
* Redirect using short URLs
* Track number of clicks (basic analytics)
* Input validation and error handling
* Dockerized application
* CI pipeline using GitHub Actions
* Deployed and accessible via public URL

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* In-memory data store (no database)
* Docker
* GitHub Actions (CI/CD)
* Render (Deployment)

---

## 📁 Project Structure

```
url-shortener/
│
├── app.js
├── routes/
│   └── urlRoutes.js
├── controllers/
│   └── urlController.js
├── data/
│   └── store.js
├── utils/
│   └── generateCode.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── Dockerfile
├── .dockerignore
├── .gitignore
└── package.json
```

---

## ⚙️ API Endpoints

### 1. Create Short URL

**POST /shorten**

Request:

```json
{
  "url": "https://example.com"
}
```

Response:

```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

---

### 2. Redirect to Original URL

**GET /:code**

* Redirects to the original URL
* Returns `404` if code not found

---

### 3. Get URL Stats

**GET /stats/:code**

Response:

```json
{
  "originalUrl": "https://example.com",
  "clicks": 5
}
```

---

### 4. Health Check

**GET /**

Response:

```
API is running
```

---

### 5. Deployment Test

**GET /test-cd**

Response:

```json
{
  "message": "CD working",
  "timestamp": "2026-04-28T..."
}
```

---

## ✅ Validation

* Ensures URL is present and valid
* Returns proper HTTP status codes:

  * `400` → Invalid input
  * `404` → Not found
  * `200` → Success

---

## 🐳 Docker Setup

### Build Image

```
docker build -t url-shortener .
```

### Run Container

```
docker run -p 3000:3000 url-shortener
```

### Access API

```
http://localhost:3000
```

---

## 🔁 CI/CD Pipeline

Implemented using GitHub Actions:

* Runs on every push to `main`
* Installs dependencies
* Verifies application runs

---

## ☁️ Deployment

Deployed using Render with automatic deployment on push.

🔗 Live URL: *(https://url-shortener-9yxn.onrender.com)*

---

## 🧠 Architecture Overview

```
Client → Express Routes → Controllers → In-Memory Store
                ↓
          Docker Container
                ↓
     CI (GitHub Actions) → CD (Render)
```

---

## 📌 Notes

* Uses in-memory storage (data resets on restart)
* Designed for demonstration and learning purposes
* Can be extended with database and scaling features
