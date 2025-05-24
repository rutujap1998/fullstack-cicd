# Containerized Full-Stack Application with CI/CD

A modern, containerized full-stack application with automated CI/CD pipeline deployment. This project demonstrates best practices in containerization, reverse proxy configuration, and automated deployment.

## 📋 Features

- **Frontend**: React application with TypeScript
- **Backend**: Node.js/Express API
- **Containerization**: Docker with multi-stage builds
- **Reverse Proxy**: NGINX configuration
- **CI/CD**: Automated GitHub Actions pipeline
- **Security**: Environment variables and secure headers

## 🏗️ Architecture

```
├── frontend/                # React frontend application
│   ├── Dockerfile          # Frontend production Dockerfile
│   └── nginx/              # NGINX configuration
│       └── nginx.conf      # Reverse proxy configuration
├── backend/                # Node.js backend API
│   └── Dockerfile         # Backend production Dockerfile
├── .github/workflows/     # GitHub Actions CI/CD configuration
│   └── deploy.yml        # Deployment workflow
└── docker-compose.yml     # Local development orchestration
```

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 18+
- Git
- GitHub Account
- Docker Hub Account

### Local Development

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

3. Start the application:
```bash
docker-compose up --build
```

Access the applications:
- Frontend: http://localhost:80
- Backend API: http://localhost:3000
- Health Check: http://localhost:3000/health

## 🌐 Production Deployment

### Server Requirements

1. Two servers (EC2 t2.micro or equivalent):
   - Server 1: Frontend + NGINX
   - Server 2: Backend API

2. Security Group Configuration:
   
   Frontend Server:
   ```
   Inbound Rules:
   - HTTP (80)
   - HTTPS (443)
   - SSH (22)
   ```

   Backend Server:
   ```
   Inbound Rules:
   - Custom TCP (3000)
   - SSH (22)
   ```

### GitHub Actions Setup

1. Required GitHub Secrets:
```plaintext
DOCKER_PASSWORD=<docker-hub-password>
FRONTEND_HOST=<frontend-server-ip>
BACKEND_HOST=<backend-server-ip>
SSH_USERNAME=ubuntu
SSH_PRIVATE_KEY=<ssh-private-key>
BACKEND_URL=http://<backend-server-ip>:3000
```

2. Deployment:
- Automatic deployment on push to main branch
- Manual deployment: Go to Actions tab and run workflow

## 🔒 Security Features

1. NGINX Security Headers:
   - X-Frame-Options
   - X-XSS-Protection
   - X-Content-Type-Options

2. Environment Variables:
   - Sensitive data stored in GitHub Secrets
   - Local environment files for development

3. Docker Security:
   - Multi-stage builds
   - Minimal base images
   - No root user in containers

## 📊 Monitoring

1. Health Check Endpoints:
   - Frontend: http://<frontend-ip>/
   - Backend: http://<backend-ip>:3000/health

2. Container Logs:
```bash
# View container logs
docker logs frontend
docker logs backend

# NGINX logs
docker exec frontend cat /var/log/nginx/error.log
```

## 🔧 Troubleshooting

1. Container Issues:
```bash
# Check container status
docker ps
docker ps -a  # include stopped containers

# Container logs
docker logs <container-id>
```

2. Common Issues:
   - Port conflicts: Check if ports 80/3000 are available
   - Environment variables: Verify .env files exist
   - Network issues: Check security group configurations

## 📝 Development Guidelines

1. Code Changes:
```bash
# Frontend development
cd frontend
npm install
npm start

# Backend development
cd backend
npm install
npm run dev
```

2. Testing Changes:
```bash
# Local testing with Docker
docker-compose up --build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT License - See LICENSE file for details 