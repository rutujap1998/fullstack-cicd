# Backend Dockerfile with improved build configuration
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with improved error handling
RUN set -eux && \
    npm install --production --no-optional && \
    npm cache clean --force

# Copy source code
COPY . .

# Expose API port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]