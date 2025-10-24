import express from "express";
import dotenv from "dotenv";
import notesRouter from "./routes/taskRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";
import { connectMongo } from "./middleware/connectDB.js";
import session from "express-session";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

await connectMongo();

// CORS with credentials
app.use(cors({
  origin: "http://localhost:5173", // frontend origin
  credentials: true,               // allow cookies
}));

// Session middleware
app.use(session({
  secret: process.env.SECRET_ACCESS_TOKEN,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // set true if using https
    sameSite: "lax",
  },
}));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/todo", notesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
