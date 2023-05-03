# NODEJS and VUE.JS CRUD

Basic CRUD of user phone book app using Vue.js on the front-end and Node.js with MongoDB on the back-end API.


## Installation

You must have installed [**MongoDB**](https://www.mongodb.com/try/download/community "**MongoDB**") and [**Node.js**](https://nodejs.org/en/download/ "**Node.js**") on your machine.

```bash
# Clone the repository
$ git clone https://github.com/leonardogbxv/vuejs-crud.git
# Go to project folder
$ cd phoneBookManagement
# Install project dependecies
$ npm install
# Go to front-end folder
$ cd client
# Install front-end dependecies
$ npm install
# Run front-end
$ npm run serve
# Return to the project root
$ cd ..
# Run back-end api
$ npm run dev
```
 
Now we have the front-end running on port 3000 and the REST API on port 8080.
 You can now visit this url on your browser;
  - Local:   http://localhost:8080/

## Features

- Register new users with first name, last name and phone number; 

- List all users  in a table on the home page;

- Edit information for an already registered user; 

- Remove a user from the application; 

## How it works

In this project, the front-end and back-end were developed separately, thereby both of them will run on different ports.

## Components

This Vue application consists of 4 components:

- `<Header />`: Header with the title and navigation panel of the application;
- `<UserRegisterForm />`: Modal with the form to register a new user;
- `<UserEditForm />`: Modal with the form to edit user data;
- `<UsersTable />`: Table with all the list of users registered in the system.