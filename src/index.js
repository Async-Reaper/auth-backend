const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const authRouter = require("./routes/auth.routes");
const taskRouter = require("./routes/task.routes");

app.use(express.json());
app.use("/task", taskRouter);
app.use("/auth", authRouter);

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server work on the port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
