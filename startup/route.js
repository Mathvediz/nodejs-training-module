import { urlencoded, json } from "body-parser";
import { join } from "path";

import { static as staticPath } from "express";

export default (app) => {

  const router = require("../routes/routes")

  const cors = require("cors");
  const morgan = require("morgan");

  app.use(cors());
  app.use(morgan(":method :url :status :user-agent - :response-time ms"));

  app.use(urlencoded({ extended: true, parameterLimit:50000, limit: '200mb' }));
  app.use(json({extended: true, limit: '200mb'}));
  app.use("/public", staticPath(join(__dirname, "../public")));

  app.use("/api", router);

};
