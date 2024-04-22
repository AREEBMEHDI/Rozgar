const express = require("express");
const mongoose = require("mongoose");
const User = require("./userdetails"); // Importing the User model
const StartupSection = require("./startupSection"); // Importing the StartupSection model
const ProjectBase = require("./Projectbase");

const app = express();

// MongoDB Atlas connection string
const mongoUrl = "mongodb+srv://areebmehdi54:alimola@cluster0.0lhdpke.mongodb.net/myDatabase?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
    res.send({ status: "started" });
});

// Route for user registration
app.post('/register', async (req, res) => {
    const { name, email, age, experience, phone } = req.body;

    try {
        const newUser = await User.create({
            name: name,
            email: email,
            age: age,
            experience: experience,
            phone: phone
        });

        res.status(201).json({ status: "success", data: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ status: "error", error: error.message });
    }
});

// Route for startup section
app.post('/startup', async (req, res) => {
    const { fullName, email, fatherName, address, phone, age, experience, education, whatCanYouDo } = req.body;

    try {
        const newStartup = await StartupSection.create({
            fullName: fullName,
            email: email,
            fatherName: fatherName,
            address: address,
            phone: phone,
            age: age,
            experience: experience,
            education: education,
            whatCanYouDo: whatCanYouDo,
        });

        res.status(201).json({ status: "success", data: newStartup });
    } catch (error) {
        console.error("Error in startup section:", error);
        res.status(500).json({ status: "error", error: error.message });
    }
});



// Route for ProjectBase section
app.post('/projectbase', async (req, res) => {
    const { fullName, fatherName, address, phone, age, Whydoyouwanttodobusiness, education, businessplan, email } = req.body;

    try {
        const newProjectBase = await ProjectBase.create({
            fullName,
            fatherName,
            address,
            phone,
            age,
            Whydoyouwanttodobusiness,
            education,
            businessplan,
            email,
        });

        res.status(201).json({ status: "success", data: newProjectBase });
    } catch (error) {
        console.error("Error in ProjectBase section:", error);
        res.status(500).json({ status: "error", error: error.message });
    }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
