import express, { Application } from "express";
import { PORT, mongoDB } from "../config";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";

// Routes
import MainRoute from "./routes/MainRoute";
import ShortenRoute from "./routes/ShortenRoute";
import ShortRoute from "./routes/ShortRoute";
import SadPika from "./routes/SadPikachu";
import Google from "./routes/GoogleRoute";
import DuckDuckGo from "./routes/DuckDuckGo";

const app: Application = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  handler: (_, res) => {
    res.status(429).json({
      message: "You have been ratelimited!",
    });
  },
});

app.use(limiter);
app.use(express.json());

app.listen(PORT, () => console.log("API is ready"));
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });

app.get("/", MainRoute);
app.post("/api/v1/shorten", ShortenRoute);
app.get("/short/:id", ShortRoute);
app.get("/api/v1/sadpika", SadPika);
app.get("/api/v1/google", Google);
app.get("/api/v1/duckduckgo", DuckDuckGo);
