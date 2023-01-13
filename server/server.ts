import path from "path";
import express, { Application } from "express";
import cors from "cors";
import apiRouter from "./routes/api";

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "../index.html")));
app.use(express.static(__dirname + "index.html"));

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

export default app;
