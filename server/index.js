const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRoutes = require('./Routes/userRoutes')
const chatRoutes = require('./Routes/chatRoutes')
const {notFound, errorHandler } = require('./middlewares/errorMiddleware');
dotenv.config();

const connectToMongo = require('./config/db');
connectToMongo();
 
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("I am the Danger!");
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log("Jesse Pinkman Bitch!"));
