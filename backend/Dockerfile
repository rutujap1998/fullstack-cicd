# Backend Dockerfile with improved build configuration
FROM node:18-alpine

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with improved error handling
RUN npm config set unsafe-perm true && \
    npm install --production --no-optional --no-audit && \
    npm cache clean --force

# Copy source code
COPY . .

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && \
    chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Expose API port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:3000/health || exit 1

# Start the application
CMD ["npm", "start"]