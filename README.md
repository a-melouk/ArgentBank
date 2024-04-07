# Project title: ArgentBank

## Description

This project is part of the OpenClassrooms curriculum and can be found [here](https://openclassrooms.com/fr/paths/516/projects/813/scenario).

## 1.Technologies Used

- React 18
- React Router
- Fetch
- Node
- MongoDB
- Docker

## 2. Argent Bank API Backend

This codebase contains the code needed to run the backend for Argent Bank.

### 2.1 Running the backend with Docker

#### 2.1.1 Prerequisites for running it with Docker

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

#### 2.1.2 Starting the project

- The `docker compose down` command will allow you to remove old images.
- The `docker compose -f "compose.yaml" up -d --build ` command will allow you to build and run your image.
- The `docker compose build --no-cache` command will allow you to build your image without using cache.
- The `docker compose up` command will allow you to run your image.
- The `docker compose down && docker compose build && docker compose up` command will allow you to delete old images, build new image and run it.

Once the image is run, your server should now be running at http://localhost:3001 and you will now have two users in your MongoDB database!

### 2.2 Running the backend without Docker

#### 2.2.1 Prerequisites for running it without Docker

Argent Bank API uses the following tech stack:

- [Node.js v18](https://nodejs.org/en/)
- [MongoDB Community Server v7](https://www.mongodb.com/try/download/community)
- [MongoDB Shell v2](https://www.mongodb.com/try/download/shell)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongod --version
```

Make sure also that Mongo server is running and have added MongoDB bin folder to your environnement variables. You can verify this by executing this command in your terminal:

```bash
# Check MongoDB server status
mongosh --eval "db.serverStatus()"
```

#### 2.2.2 Starting the project

1. Clone the repository to your local machine.

```
git clone https://github.com/a-melouk/ArgentBank.git
```

2. Navigate to the backend directory.

```
cd ArgentBank/backend
```

3. Install the dependencies using npm install.

```
npm install
```

4. Start the development server with npm start.

```
npm run dev:server
```

5. Populate the database with two users

```
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

### 2.3 Populated Database Data

Once `populate-db` script is run successfully, you should have two users in your database:

##### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

##### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

### 2.4 API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## ArgentBank Frontend

### Instructions to run frontend

2. Navigate to the frontend directory.

```
cd ArgentBank/frontend
```

3. Install the dependencies using npm install.

```
npm install
```

4. Start the development server with npm start.

```
npm run dev
```
