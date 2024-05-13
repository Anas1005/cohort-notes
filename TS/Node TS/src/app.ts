// server.ts
import express from 'express';
import userRouter from "./routers/userRouter.js"
import todoRouter from "./routers/todoRouter.js"
// import { dbConnect } from './config/database.js';


const app = express();
const port = 4000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/todos', todoRouter);



// dbConnect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
