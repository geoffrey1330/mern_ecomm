# ProShop eCommerce Platform

> eCommerce platform built with the MERN stack & Redux.
> Deployed via CICD (circleci) Frontend(s3 bucket) & Backend (ec2 Instance) with CloudFormation(Infrastructure Provisioning), Ansible (Server Configuration)
> Blue, Green Deployment Implemented with aws cloudfront.

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)


## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
cd backend
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
cd backend
npm run dev

# Run backend only
cd backend
npm run server

# Run frontend only
cd frontend
npm start
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```
### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```

