import app from "./config/app.js";
import { PORT } from "./config/env.config.js";

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
