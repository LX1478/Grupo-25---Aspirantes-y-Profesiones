require('dotenv').config();
const express = require("express");
const path = require("path");

const applicantsRoutes = require("./routes/applicants");
const professionsRoutes = require("./routes/professions");
const companiesRoutes = require("./routes/companies");

const methodOverride = require("method-override");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3031;

app.use(cors());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use("/applicants", applicantsRoutes);
app.use("/professions", professionsRoutes);
app.use("/companies", companiesRoutes);

app.listen(PORT, () =>
  console.log(`[running on] 🚀 http://localhost:${PORT}/`)
);
