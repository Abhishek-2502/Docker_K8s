# Dockerized Flask & PostgreSQL Project

This is a simple project demonstrating how to containerize a **Flask application** with a **PostgreSQL database** using **Docker** and **Docker Compose**.

## 🚀 Getting Started

### Prerequisites
- Install [Docker](https://www.docker.com/get-started)
- Install [Docker Compose](https://docs.docker.com/compose/install/)

## 🛠 Project Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Abhishek-2502/Docker_K8s
cd Docker/Practice_Projects/Full_Docker_Flow_Dummy_Project
```

### 2️⃣ Run the Project
```sh
docker-compose up --build -d
```
- `--build`: Ensures the Docker image is rebuilt.
- `-d`: Runs containers in detached mode (background).

### 3️⃣ Stop and Remove Containers
```sh
docker-compose down
```

## 🏗 Project Structure
```
├── app/
│   ├── src/
│   │   ├── templates/
│   │   │   ├── index.html  # Flask expects templates here
│   │   ├── app.py  # Flask app
│   ├── requirements.txt  # Python dependencies
├── docker-compose.yml  # Defines Flask & PostgreSQL services
├── Dockerfile  # Builds Flask container
└── README.md  # Documentation

```

## 📂 Environment Variables
This project uses the `DATABASE_URL` environment variable. It is set automatically in `docker-compose.yml`:
```yaml
environment:
  - DATABASE_URL=postgresql://myuser:mypassword@db:5432/mydatabase
```

## 🛠 How It Works
1. **Docker Compose** automatically builds the **Flask app container** using the `Dockerfile`.
2. It also pulls the latest **PostgreSQL image** and starts a database container.
3. Flask connects to PostgreSQL using `DATABASE_URL`.

## 🎯 Key Features
✅ **Flask** - Lightweight Python web framework.  
✅ **PostgreSQL** - Reliable SQL database.  
✅ **Docker** - Ensures environment consistency.  
✅ **Docker Compose** - Manages multiple containers easily.  

## 📌 Useful Commands
### Check Running Containers
```sh
docker ps
```
### View Container Logs
```sh
docker-compose logs -f
```
### Remove All Containers & Volumes
```sh
docker-compose down -v
```