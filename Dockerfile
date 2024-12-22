    FROM node:20
    WORKDIR /usr/src/app
    COPY package*.json ./
    RUN npm install
    COPY . .
    RUN npx prisma generate
    COPY .env .env
    EXPOSE 4000
    CMD ["sh", "-c", "npx prisma migrate deploy && node index.js"]

