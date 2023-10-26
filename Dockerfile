FROM node:20-alpine3.17 as base

WORKDIR /sendy-playgound
RUN apk add --no-cache curl

FROM base AS local
COPY package*.json /sendy-playgound/
RUN npm ci
COPY . /sendy-playgound
COPY .env.local.local .env.local
RUN echo "local"
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]


FROM base AS production
COPY package*.json /sendy-playgound/
RUN npm ci
COPY . /sendy-playgound
COPY .env.prod .env.local
RUN echo "production"
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
