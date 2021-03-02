FROM node:alpine

ENV PORT 3000

# Create app dir
WORKDIR /usr/src/app/frontend

# Install dep
COPY package*.json ./
RUN yarn

# Copy source files
COPY . .

EXPOSE 3000

CMD yarn dev
