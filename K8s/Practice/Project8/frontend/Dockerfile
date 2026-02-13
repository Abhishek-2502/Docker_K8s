# Frontend: static site served by nginx
FROM nginx:1.27-alpine
LABEL maintainer="abhishek25022004@gmail.com"

# Remove default config and copy our proxy config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default index and copy ours
RUN rm -f /usr/share/nginx/html/*
COPY index.html /usr/share/nginx/html/index.html

# Expose port
EXPOSE 80

# Use default nginx entrypoint