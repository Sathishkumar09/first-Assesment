const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());


const {getAllUsers,userDetails,getParticularUser,updateUser,deleteUser} = require('./controller/controller')

async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/first_assignment', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}

connectDB();

app.get('/users',getAllUsers);
app.post('/userDetails',userDetails);
app.get('/user/:id',getParticularUser);
app.put('/update',updateUser);
app.delete('/deleteuser',deleteUser);

app.listen(9090,() =>{
    console.log('App Running On Port 9090');
});