# Setup & Deployment Guide

## Setup Instructions

### Prerequisites
- AWS Account (2 EC2 instances - t2.micro)
- Docker Hub Account
- GitHub Account
- Node.js (v16 or higher)

### Local Setup

1. Clone the repository:
```bash
git clone https://github.com/rutujap1998/fullstack-cicd.git
cd fullstack-cicd
```

2. Create environment files:

Frontend (.env):
```plaintext
REACT_APP_API_URL=http://localhost:3000
```

Backend (.env):
```plaintext
NODE_ENV=development
PORT=3000
```

3. Run locally:
```bash
docker-compose up --build
```

Access at:
- Frontend: http://localhost:80
- Backend: http://localhost:3000

## Deployment Instructions

### 1. EC2 Setup

On both frontend and backend servers:
```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu
```

### 2. Security Group Configuration

Frontend Server:
- HTTP (Port 80)
- HTTPS (Port 443)
- SSH (Port 22)

Backend Server:
- Custom TCP (Port 3000)
- SSH (Port 22)

### 3. GitHub Actions Setup

Add these secrets to your GitHub repository:
```plaintext
DOCKER_PASSWORD=<docker-hub-password>
FRONTEND_HOST=<frontend-server-ip>
BACKEND_HOST=<backend-server-ip>
SSH_USERNAME=ubuntu
SSH_PRIVATE_KEY=<ssh-private-key>
BACKEND_URL=http://<backend-server-ip>:3000
```

### 4. Deployment

1. Automatic deployment:
   - Push changes to main branch

2. Verify deployment:
   - Frontend: http://<frontend-public-ip>
   - Backend: http://<backend-public-ip>:3000

### 5. Troubleshooting

Check container status:
```bash
docker ps
docker logs <container-id>
```
```

# Additional Things

## Project Architecture
- Frontend: React.js application served through NGINX web server
- Backend: Node.js REST API service
- Container Platform: Docker with multi-container orchestration
- CI/CD: GitHub Actions pipeline
- Cloud Infrastructure: AWS EC2 instances

## Port Configuration
- Frontend Application: Port 80 (HTTP)
- Backend API Server: Port 3000
- NGINX: Port 80 (proxies requests to frontend)
- SSH Access: Port 22 (both servers)

## Health Check Endpoints
- Frontend Health: http://<frontend-ip>/
- Backend Health: http://<backend-ip>:3000/health
- API Status: http://<backend-ip>:3000/health

## Docker Compose Development
```bash
# Start all services
docker-compose up --build

# Start specific service
docker-compose up frontend
docker-compose up backend

# View logs
docker-compose logs

# Stop services
docker-compose down
```

## Monitoring Deployment
1. GitHub Actions Logs:
   - Navigate to repository on GitHub
   - Click "Actions" tab
   - Select latest workflow run
   - View detailed logs for each step

2. Container Logs:
```bash
# View real-time container logs
docker logs -f <container-id>

# View NGINX logs
docker exec frontend cat /var/log/nginx/access.log
docker exec frontend cat /var/log/nginx/error.log
```
```
