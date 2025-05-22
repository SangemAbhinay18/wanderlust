# Wanderlust 🏕️

Wanderlust is a fully functional full-stack web application inspired by Airbnb, built by **S. Abhinay**. It allows users to browse, create, edit, and review location-based listings with dynamic map integration and user authentication.

## 🌍 Features

- User registration, login, and authentication
- Create, edit, and delete listings
- Add, edit, and delete reviews for listings
- Interactive maps with location markers
- Geocoding for automatic location detection
- Responsive and user-friendly interface
- Secure authorization and session management

## 🛠 Tech Stack

- **Frontend**: EJS, HTML, CSS, Bootstrap, Leaflet.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js (Local Strategy)
- **Maps & Geocoding**: Mapbox + Leaflet
- **Templating**: EJS

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB (local or Atlas)
- Mapbox Access Token

### Installation Steps

1. Clone this repository:
   
   git clone https://github.com/yourusername/wanderlust.git
   cd wanderlust

2. install dependencies
   npm install
   
3. Create a .env file in the root directory and add:
   MAPBOX_TOKEN=your_mapbox_access_token
   DB_URL=your_mongodb_connection_string
   SECRET=your_session_secret

4.Start the development server:
  npm start 
  note:It is optional although we are using nodemon app.js since it restarts the server everytime.

5.Open your browser and navigate to:
  http://localhost:3000

Made with 💙 by S. Abhinay
