import { Dev } from "../utils/Dev";
import { Prod } from "../utils/Prod";
import devConfig from "./dev.js";
import prodConfig from "./prod.js";
const env = process.env.NODE_ENV;

let config: Dev | Prod;

switch (env) {
  case "development":
  case "dev":
    config = devConfig;
    break;

  case "production":
  case "prod":
    config = prodConfig;
    break;

  default:
    config = prodConfig;
}

export default config;
