import express from "express";
import cors from "cors";
import router from "./app/router";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers (IE11, various SmartTVs) choke on 204

app.use(router);

app.use((_, res) => {
  res.status(404);
});

export default app;
