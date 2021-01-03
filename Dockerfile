# Dockerfile

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . .

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3033
CMD npm run start