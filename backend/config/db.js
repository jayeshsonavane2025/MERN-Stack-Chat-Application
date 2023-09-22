const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
<<<<<<< Updated upstream
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
=======
        useNewUrlParser: true ,
      useUnifiedTopology: true
>>>>>>> Stashed changes
     
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
<<<<<<< Updated upstream
  
    console.error(Error: ${error.message}.red.bold);
=======
    console.log(`Error: ${error.message}`.red.bold);
>>>>>>> Stashed changes
    process.exit();
  }
};

 
