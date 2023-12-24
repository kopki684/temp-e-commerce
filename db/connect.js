const mongoose = require('mongoose');

const connectDB = async (url) => {
  mongoose.set('strictQuery', true)
  return await mongoose.connect(url)
  .then(() => {
    console.log('connect to db');
  });
};

module.exports = connectDB;
