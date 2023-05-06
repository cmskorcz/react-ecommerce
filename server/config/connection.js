const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/react-ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose.connection;