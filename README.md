# Project title: ArgentBank

## Description

This project is part of the OpenClassrooms curriculum and can be found [here](https://openclassrooms.com/fr/paths/516/projects/813/scenario).

## Technologies Used

- React 18
- React Router
- Fetch
- Node
- MongoDB

## Argent Bank API Backend

This codebase contains the code needed to run the backend for Argent Bank.

### Prerequisites

Argent Bank API uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

#### Instructions to run backend

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

#### Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

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

#### API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## ArgentBank Frontend

#### Instructions to run frontend

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
