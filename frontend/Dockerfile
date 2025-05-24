# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Create a minimal index.html for testing
RUN mkdir -p /app/build && \
    echo '<!DOCTYPE html><html><head><title>Frontend App</title></head><body><h1>Frontend App</h1><p>Status: Running</p></body></html>' > /app/build/index.html

# Production stage
FROM nginx:alpine

# Copy nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]