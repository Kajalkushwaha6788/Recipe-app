const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json()); // JSON parsing ke liye
app.use(cors()); // CORS enable

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Import Routes
const recipesRouter = require('./routes/recipes');  // ✅ Ye line check karo
app.use('/recipes', recipesRouter); // ✅ Yaha `app` defined hai

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
