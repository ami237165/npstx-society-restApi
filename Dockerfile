FROM node:18.6.0-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install --force

# Bundle app source
COPY . .

RUN nest start

# Creates a "dist" folder with the production build
#RUN npm run build

EXPOSE 6020

# Start the server using the production build
# CMD [ "node", "dist/main.js" ]
