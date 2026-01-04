Project Name: Rental House
Live URL: https://rental-house-ten.vercel.app

## The Vehicle Rental System is a backend API designed to manage a vehicle rental service efficiently. It handles:

1.  Vehicles: Manage vehicle inventory and track availability.
2.  Customers: Manage customer accounts and profiles.
3.  Bookings: Handle vehicle rentals, returns, and automated cost calculation.
4.  Authentication & Authorization: Secure role-based access for Admin and Customer users.
5.  The API ensures smooth operations for both customers and administrators while enforcing proper access control.

## Technology Stack

. Backend: Node.js with TypeScript
. Framework: Express.js
. Database: PostgreSQL
. Authentication & Security:
. bcrypt for password hashing
. jsonwebtoken (JWT) for secure token-based authentication

## Setup & Usage Instructions

1. Clone Repository

git clone https://github.com/reazulislam1487/rental-house
cd rental-house

2. Install Dependencies

npm install

3. Configure Environment

Create .env file:

PORT=8080
DATABASE_URL=postgres://username:password@localhost:5432/vehicle_rental
JWT_SECRET=your_jwt_secret

4. Run Database Migrations

npx prisma migrate dev --name init

(or use your preferred SQL migration method)

5. Start Development Server

npm run dev

Server runs at http://localhost:8080

6. Testing API

Use Postman or Insomnia to test endpoints.

Include JWT token in headers for protected routes:

Authorization: Bearer <your_token_here>

## Features

1. Role-based authentication and authorization

2. Full CRUD operations for vehicles, users, and bookings

3. Real-time vehicle availability tracking

4. Booking cost calculation and automated status updates

5. Secure password storage and JWT token validation

6. Modular, maintainable, and scalable architecture
