require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');  
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 


const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };
  
 
  connectDB();


app.use('/api', taskRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
