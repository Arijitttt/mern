# MERN
***
frontend + backend
***

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [API endpoints](#endpoints)


## Table of Contents
<a name="general-info">Info</a>
### General Info
***
will write it later

## Technologies
<a name="technologies">Technologies</a>
***
A list of technologies used within the project:
* [Vite+React](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
* [Node](https://nodejs.org/en)
* [Express](https://expressjs.com/): Version 4.18.2
* [Mongoose](https://mongoosejs.com/): Version 8.2.0

## Installation
<a name="installation">Technologies</a>
***
To run this project locally, follow these steps: 

1.Clone the repository:
```
$ git clone git clone https://github.com/yourusername/project-name.git
```
2.Install dependencies for both frontend and backend:
```
cd project-name
cd client && npm install
cd ../server && npm install
```
3.Setup Mongodb
* nstall MongoDB locally or use a cloud-based service like MongoDB Atlas.
* Create a .env file in the server directory and add your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/your-database-name

```
4.Start the server:
```
cd server && npm start

```
5.Start the React app:
```
cd client && npm start
```
6.The React app will run on http://localhost:3000 and the Express server will run on http://localhost:5000.


## API Endpoints
<a name="endpoints">API  Endpoints</a>
***
*`POST /` - Home Page
*`POST /registration` - User Registration
*`POST /signin` - User Sign-in
*`GET /about` - About Section
*`GET /registration` - Contact Section