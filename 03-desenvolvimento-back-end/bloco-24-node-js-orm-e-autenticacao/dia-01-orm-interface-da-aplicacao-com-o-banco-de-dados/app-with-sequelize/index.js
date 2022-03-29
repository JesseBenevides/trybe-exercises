const express = require('express');

const userRouter = require('./routes/userRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', userRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));