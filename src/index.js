const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const userRouter = require("./routes/user.routes");
const taskRouter = require("./routes/task.routes");

app.use(express.json());
app.use("/api", taskRouter);
app.use("/api", userRouter);
app.listen(PORT, () => console.log(`Server work on the port ${PORT}`));
