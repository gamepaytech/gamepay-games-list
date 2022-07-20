FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
ENV NODE_ENV=production
COPY . .
RUN npx prisma generate
RUN yarn build
CMD ["yarn", "start"]