const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const userRouter = require("./routes/user.routes");

app.use(express.json());
app.use("/todo", userRouter);
app.listen(PORT, () => console.log(`Server work on the port ${PORT}`));
