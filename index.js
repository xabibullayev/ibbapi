import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import pinsRouter from "./routes/pins.js";
import usersRouter from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://xabibullayevmm:16xm06xmA@itmatryoshkabot.fuq8ext.mongodb.net/?retryWrites=true&w=majority&appName=itmatryoshkabot"
  )
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/pins", pinsRouter);
app.use("/users", usersRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
