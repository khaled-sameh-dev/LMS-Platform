import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import config from "./config";
import bodyParser from "body-parser";
import { connectDB } from "./config/db";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/", router);

connectDB().then(() => {
  app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
  });
});
