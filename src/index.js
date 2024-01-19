import app from "./serve.js";
import { SERVER_PORT } from "./utils/server-env.js";

app.listen(SERVER_PORT, () => console.log(`Listening on PORT ${SERVER_PORT}`));

