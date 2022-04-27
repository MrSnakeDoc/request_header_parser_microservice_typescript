import { Prod } from "../utils/Prod";

const prod: Prod = {
  host: process.env.HOST || "localhost",
  port: +process.env.PORT,
};

export default prod;
