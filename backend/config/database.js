const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://usermohit:Test-123@cluster0.oyhewyn.mongodb.net/Ecommerce" || process.env.DB_URI, { useNewUrlParser: true })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};


module.exports = connectDatabase;
