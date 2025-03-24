# Entertainment App

This project is a full-stack entertainment application that allows users to browse and discover movies and TV shows. Users can view trending and recommended media, get detailed information about movies and TV shows, watch trailers, and manage their bookmarks. The application includes authentication features such as signup, login, and logout.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributions](#contributions)

## Folder Structure

```bash
entertainment-app/
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── redux/
│ └── App.js
├── server/ # Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── app.js
│ └── server.js
└── README.md
```

## Features

- User authentication (signup, login, logout)
- Browse trending and recommended movies and TV shows
- Search for movies and TV shows
- View detailed information about movies and TV shows
- Watch movie trailers
- Bookmark movies and TV shows for later viewing

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime for the backend server.
- **Express.js**: Web framework for building APIs and handling requests.
- **MongoDB**: NoSQL database for storing products, users, and orders.
- **Mongoose**: ODM library for interacting with MongoDB.
- **JWT**: For authentication
- **TMDB API**: for movie and TV show data

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management for predictable state across the app.
- **Redux Toolkit**: Simplified Redux state management.
- **React Redux**: Official React bindings for Redux.
- **React Router**: Routing for navigating between pages.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **React Toastify**: Notifications for important actions (e.g., adding to cart).

## Installation

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/entertainment-app.git
   cd entertainment-app
   ```

2. Install backend dependencies:

   ```bash
   cd server
   npm install
   ```

3. Set up environment variables: Create a .env file in the server directory with the following contents:

   ```bash
   API_URL=https://api.themoviedb.org/3
   API_KEY=your_tmdb_api_key
   API_READ_ACCESS_TOKEN=your_tmdb_read_access_token
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=90d
   JWT_COOKIE_EXPIRES_IN=90
   NODE_ENV=development
   MONGODB_URI=your_mongodb_uri
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Install frontend dependencies:

   ```bash
   cd client
   npm install
   ```

2. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage

- Open your browser and navigate to http://localhost:3000
- Sign up for a new account or log in if you already have one
- Browse trending and recommended movies and TV shows
- Search for media, view details, watch trailers, and manage bookmarks

## API Endpoints

### Auth Routes

- POST {base_url}/api/v1/user/signup - Sign up a new user
- POST {base_url}/api/v1/user/login - Log in an existing user
- POST {base_url}/api/v1/user/logout - Log out the current user
- GET {base_url}/api/v1/user - Get the logged-in user

### Bookmark Routes

- GET {base_url}/api/v1/bookmarks - Get user's bookmarks
- POST {base_url}/api/v1/bookmarks - Add a new bookmark
- DELETE {base_url}/api/v1/bookmarks - Remove a bookmark

### Media Routes

- GET {base_url}/api/v1/movies - Get a list of movies
- GET {base_url}/api/v1/movies/search - Search for movies
- GET {base_url}/api/v1/movies/:id - Get movie details by ID
- GET {base_url}/api/v1/movies/url/:id - Get movie trailer URL by ID
- GET {base_url}/api/v1/movies/cast/:id - Get movie cast by ID
- GET {base_url}/api/v1/tvshows - Get a list of TV shows
- GET {base_url}/api/v1/tvshows/search - Search for TV shows
- GET {base_url}/api/v1/tvshows/:id - Get TV show details by ID
- GET {base_url}/api/v1/tvshows/url/:id - Get TV show trailer URL by ID
- GET {base_url}/api/v1/tvshows/cast/:id - Get TV show cast by ID
- GET {base_url}/api/v1/trending - Get trending media
- GET {base_url}/api/v1/recommended - Get recommended media

## Contributions

Contributions are welcome! Please feel free to submit a Pull Request.
