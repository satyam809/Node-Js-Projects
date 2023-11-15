const express = require('express');
const app = express();
const port = 1100;
const userRoutes = require('./routes/userRoutes');
app.use('/api/', userRoutes);
app.listen(port, () => {
    console.log(`Sever is running on ${port} `)
})

// const sum = (a, b) => {

//     return new Promise((resolve, reject) => {
//        const result = a+b;
//         resolve(result);

//     });
// }

// sum(10, 20).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })