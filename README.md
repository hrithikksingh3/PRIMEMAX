# **Primemax**    

**Primemax** is a Netflix-inspired streaming platform that allows users to browse, register, and log in to watch content. Built with **React, Redux, Tailwind CSS, Node.js, Express, and MongoDB**, this project delivers a seamless movie-watching experience with user authentication.  

---

## **Live Demo**  
🔗 **Check out the live version**: [Primemax](https://primemax-1.onrender.com)  

---

## **Features**  

✅ **User Authentication** (Register, Login, Logout)  
✅ **Browse Movie Listings**  
✅ **Protected Routes** (Coming Soon)  
✅ **Redux for State Management**  
✅ **Modern UI with Tailwind CSS**  
✅ **Backend API with Express & MongoDB**  

---

## **Tech Stack**  

### **Frontend:**  
- ⚛ React.js  
- ⚡ Redux Toolkit  
- 🎨 Tailwind CSS  
- 🔗 Axios for API calls  

### **Backend:**  
- 🌐 Node.js & Express.js  
- 🗄 MongoDB (Mongoose)  
- 🔐 JWT Authentication  
- 🔑 Bcrypt for password hashing  

---

## **Installation & Setup**  

### **1️⃣ Clone the Repository**  
```
git clone https://github.com/your-username/primemax.git
cd primemax
```

# Primemax

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend folder and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

Start the backend server:

```bash
npm start
```

The server will run on http://localhost:5000.

## Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the frontend folder and add:

```env
REACT_APP_API_URL=https://primemax.onrender.com/api/v1/user
```

Start the frontend server:

```bash
npm start
```

The frontend will run on http://localhost:3000.

## Usage

1. Visit the homepage and create an account or log in.
2. Browse available movies after login.
3. Logout securely when done.

## Backend Folder Structure

```
backend/
│── controllers/
│   ├── userController.js
│── models/
│   ├── userModel.js
│── routes/
│   ├── userRoutes.js
│── middleware/
│   ├── authMiddleware.js
│── config/
│   ├── db.js
│── server.js
│── .env
│── package.json
```

## Frontend Folder Structure

```
frontend/
│── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── utils/
│   ├── App.js
│   ├── index.js
│── .env
│── package.json
```

## Contributing

Want to improve Primemax? Follow these steps:

1. Fork the repository
2. Create a new branch:

```bash
git checkout -b feature/your-feature
```

3. Commit your changes:

```bash
git commit -m "Add new feature"
```

4. Push to the branch:

```bash
git push origin feature/your-feature
```

5. Open a Pull Request 🚀

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, feel free to reach out to me at shrithik511@gmail.com

## Support

<h2>I love coffee. Wanna buy me one? 😊👇</h2>
<p align="center">
  <a href="https://www.buymeacoffee.com/codersvoice" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" >
  </a>
</p>
