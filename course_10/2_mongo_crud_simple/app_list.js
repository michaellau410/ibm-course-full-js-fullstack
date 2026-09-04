const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:gTZpIRMhAMatkcbaf4Jh2QiQ@172.21.9.91:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })
