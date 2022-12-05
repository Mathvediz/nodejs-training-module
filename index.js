require("dotenv").config();

import express from "express";

const app = express();

require("./startup/db").default(app);
require("./startup/route").default(app);
