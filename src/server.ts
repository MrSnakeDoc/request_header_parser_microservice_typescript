import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/router";

const app = express();

app.use(cors());

app.use(router);

app.use((_, res) => {
  res.status(404);
});

export default app;
