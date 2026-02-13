FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --only=production
ENV NODE_ENV=production
EXPOSE 8080
CMD ["node", "index.js"]
