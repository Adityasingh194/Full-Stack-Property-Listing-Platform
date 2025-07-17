# Property Rental Web Application

A full-stack web platform built using Node.js, Express.js, MongoDB, and EJS to list, search, and book rental properties with secure authentication and role-based access. This project follows the MVC architecture for clean scalability and maintainability.

Live Demo: [Property Rental App](https://full-stack-property-listing-platform.onrender.com)

---

## Features

- User Roles: Admins and Regular Users
- Authentication: Secure login/signup with session management
- Property Listings: Create, browse, search, and book properties
- Booking History: View and manage past bookings
- MVC Architecture: Modular folder structure for scalability
- Dynamic Views: EJS templates for dynamic content rendering
- Clean Code: Follows best practices with middleware and utility functions

---

## Project Structure

property-rental-app/
│
├── controllers/ # Route logic (listings, users, bookings)
├── models/ # Mongoose schemas (User, Listing, Booking)
├── routes/ # Route definitions
├── views/ # EJS templates (layout, partials, pages)
├── public/ # Static files (CSS, images, JS)
├── utils/ # Middleware and helper functions
├── .env # Environment variables
├── app.js # Express server setup
├── package.json

yaml
Copy
Edit

---

## Tech Stack

- Frontend: HTML, CSS, JavaScript, EJS
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Authentication: Express-Session, bcrypt
- Templating: EJS
- Hosting: Render

---

## Installation and Running Locally

1. Clone the repository

```bash
git clone https://github.com/your-username/property-rental-app.git
cd property-rental-app
Install dependencies

bash
Copy
Edit
npm install
Create a .env file

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
PORT=3000
Start the development server

bash
Copy
Edit
npm run dev
Visit http://localhost:3000 to view the app.

Future Improvements
Image uploads with Cloudinary

Advanced search filters (price, location, amenities)

Admin dashboard

Reviews and Ratings

Credits
Developed by Aditya Kumar Singh
Feel free to use, fork, or contribute.

License
This project is licensed under the MIT License.
