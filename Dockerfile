FROM node:18.10 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#Stage 2
FROM nginx:1.17.1-alpine
COPY --from=node /app/dist/frontend-planning /usr/share/nginx/html
