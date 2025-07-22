# amazon-clone
We are going to make a amazon clone with more features   


🛒 Amazon Clone – Full Stack Project
This is a full-stack Amazon clone built using:

# 🔧 Technologies Used


| Category        | Stack                                                  |
| --------------- | ------------------------------------------------------ |
| Frontend        | React.js, Tailwind CSS (or Bootstrap), React Router    |
| Backend         | Python Flask (can be switched to Node.js + Express.js) |
| Database        | PostgreSQL                                             |
| Dev Tools       | VS Code, Postman, pgAdmin 4                            |
| Version Control | Git, GitHub                                            |

Authentication: JWT (Planned)

Features: Product listing, cart management, user login/register, checkout (under development)



# 🛠️ Setup Instructions

1. Clone the repository

git clone https://github.com/yourusername/amazon-clone.git
cd amazon-clone

2. Set up the backend (Flask example)

cd backend
python -m venv venv
source venv/bin/activate  # Or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py


3. Set up the frontend
cd frontend
npm install
npm start


🔄 Planned Features

🔐 JWT Authentication

🛍️ Full shopping cart functionality

✅ User login/register

📦 Checkout and order history

🔍 Product search and filters

📸 Product image zoom

💳 Stripe/PayPal integration for payment (optional)

🧾 Admin dashboard (optional)


🧠 Learning Outcomes
Built full stack app from scratch

Worked with PostgreSQL for schema design

Created API routes and connected them with frontend

Learned real-world structure of large-scale applications


# Project Structure

amazon-clone/
│
├── backend/                 # Python Flask or Node.js backend
│   ├── app.py / server.js
│   ├── routes/
│   ├── controllers/
│   └── models/
│
├── frontend/                # React.js frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
└── README.md


# Features Completed So Far

| Feature             | Status         | Description                                                                    |
| ------------------- | -------------- | ------------------------------------------------------------------------------ |
| Project Setup       | ✅ Done         | React project created with `create-react-app`. Tailwind CSS setup in progress. |
| Routing             | ✅ Done         | Basic routing using `react-router-dom`                                         |
| Navbar              | ✅ Done         | Basic navbar with Amazon logo and links                                        |
| Home Page           | ✅ Done         | Homepage with static product layout                                            |
| Product Component   | ✅ Done         | Reusable product card component                                                |
| Sample Product Data | ✅ Done         | Products displayed using JSON data                                             |
| Add to Cart Button  | 🚧 In Progress | Frontend UI created, backend functionality pending                             |


🔹 Backend (Python Flask or Node.js)
| Feature               | Status         | Description                                                     |
| --------------------- | -------------- | --------------------------------------------------------------- |
| Backend Setup         | ✅ Done         | Basic Flask app initialized (switching to Node.js optional)     |
| PostgreSQL Connection | ✅ Done         | Connected using SQLAlchemy or `pg`/`sequelize` (Node.js)        |
| Users Table           | ✅ Done         | Created with columns `id`, `name`, `email`, `password_hash`     |
| Products Table        | ✅ Done         | Sample table with `id`, `title`, `price`, `image`, `rating`     |
| API Routes            | 🚧 In Progress | Building endpoints: `/products`, `/login`, `/register`, `/cart` |


🔹 Database (PostgreSQL)

| Table        | Status     | Description                              |
| ------------ | ---------- | ---------------------------------------- |
| `users`      | ✅ Done     | Stores user info                         |
| `products`   | ✅ Done     | Seeded with sample Amazon-style products |
| `cart_items` | 🔜 Planned | To track user's cart                     |
| `orders`     | 🔜 Planned | Checkout and purchase tracking           |

