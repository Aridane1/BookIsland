import server from "./config/ws.config.js";
import { PORT } from "./config/env.config.js";

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
