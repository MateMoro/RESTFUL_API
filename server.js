const express = require("express");
const tasksRoutes = require("./src/tasks/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req,  res) => {
    res.send("Hello World!");
});

app.use("/tasks", tasksRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));