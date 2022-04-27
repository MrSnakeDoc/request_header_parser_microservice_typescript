import { Dev } from "../utils/Dev";

const dev: Dev = {
  host: process.env.HOST || "localhost",
  port: +process.env.PORT || 5000,
};

export default dev;
