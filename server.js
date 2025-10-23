import express from "express";
import dotenv from "dotenv"
import router from "./routes/taskRoutes.js";

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use("/api/todo", router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
