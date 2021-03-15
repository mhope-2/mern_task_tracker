const Task = require('./models/task.model')

const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

const express = require('express')
const app = express()

///////
const AdminBroMongoose = require('@admin-bro/mongoose')
const mongoose = require('mongoose')
AdminBro.registerAdapter(AdminBroMongoose)


const run = async () => {
  const connection = await mongoose.connect('mongodb+srv://mhope:mhope@tasktrackercluster.sk7kz.mongodb.net/task_tracker_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(()=>{
    console.log(`MongoDB database connection established Successfully`);
    }).catch((error)=>{
        console.log("MongoDB not connected");
        console.log(error);
    });

  const adminBro = new AdminBro ({
    Databases: [connection],
    resources: [Task],
    rootPath: '/admin',
})

    const router = AdminBroExpress.buildRouter (adminBro)
    //////////////////
    app.use(adminBro.options.rootPath, router)

}
run()

app.listen(8080, () => console.log('AdminBro is running at localhost:8080/admin'))




















