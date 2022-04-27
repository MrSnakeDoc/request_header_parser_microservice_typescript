// init project
import app from "./server";
import config from "./app/config/";

app.listen(config.port, () => {
  console.log(`Server is running on http://${config.host}:${config.port}`);
});
