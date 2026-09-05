const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const vendorPaymentsRouter = require('./routes/vendor_payment');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
const uri =  "mongodb://root:JViWDH5G34gT1H0UUGMx5oTf@172.21.104.249:27017";

mongoose.connect(uri, {'dbName': 'transactionsDB'});

// Use Vendor Payments routes
app.use('/vendorPayments', vendorPaymentsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



