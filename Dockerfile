FROM node:lts

# Must have packages
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    vim \
    nano \
    curl \
    git \
    sudo

# Add none root user
# RUN useradd -m admin && echo "admin:admin" | chpasswd && adduser admin sudo
# USER admin
# Preparing your app code directory

WORKDIR /app
RUN chown -R node:node /app


# Copy app code into container
COPY package.json /app
COPY . ./app

# Create app directory

# Install app dependencies
RUN npm --global config set user root && \
  npm i pm2 -g

RUN chown -R node:node /root/

RUN npm install

# Expose ports
EXPOSE 3000 3001 3002 3003

USER node

# Run app
CMD pm2 start --no-daemon ecosystem.config.js --watch --env production

