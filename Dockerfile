FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
# for production
#RUN npm ci --only=production || npm i --omit=dev
# for CI pipeline
RUN npm i
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/index.js"]